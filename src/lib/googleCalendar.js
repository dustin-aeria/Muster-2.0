// Google Calendar Integration
// Requires VITE_GOOGLE_CLIENT_ID and VITE_GOOGLE_API_KEY in .env

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || ''
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
const SCOPES = 'https://www.googleapis.com/auth/calendar.events'

let tokenClient = null
let gapiInited = false
let gisInited = false

// ============================================
// INITIALIZATION
// ============================================

/**
 * Load the Google API client library
 */
export async function loadGoogleApi() {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.gapi && gapiInited) {
      resolve()
      return
    }

    // Load gapi script
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = () => {
      window.gapi.load('client', async () => {
        try {
          await window.gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
          })
          gapiInited = true
          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}

/**
 * Load the Google Identity Services library
 */
export async function loadGoogleIdentity() {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.google?.accounts?.oauth2 && gisInited) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.onload = () => {
      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // Will be set during auth
      })
      gisInited = true
      resolve()
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}

/**
 * Initialize Google Calendar API
 */
export async function initGoogleCalendar() {
  if (!CLIENT_ID || !API_KEY) {
    throw new Error('Google Calendar API credentials not configured. Add VITE_GOOGLE_CLIENT_ID and VITE_GOOGLE_API_KEY to your .env file.')
  }

  await loadGoogleApi()
  await loadGoogleIdentity()
}

/**
 * Check if Google Calendar is properly configured
 */
export function isConfigured() {
  return !!(CLIENT_ID && API_KEY)
}

// ============================================
// AUTHENTICATION
// ============================================

/**
 * Get the current access token from localStorage
 */
function getStoredToken() {
  const stored = localStorage.getItem('google_calendar_token')
  if (!stored) return null

  try {
    const token = JSON.parse(stored)
    // Check if expired
    if (token.expires_at && Date.now() > token.expires_at) {
      localStorage.removeItem('google_calendar_token')
      return null
    }
    return token
  } catch {
    return null
  }
}

/**
 * Store the access token
 */
function storeToken(token) {
  const tokenData = {
    access_token: token.access_token,
    expires_at: Date.now() + (token.expires_in * 1000)
  }
  localStorage.setItem('google_calendar_token', JSON.stringify(tokenData))
}

/**
 * Check if user is authenticated with Google Calendar
 */
export function isAuthenticated() {
  const token = getStoredToken()
  return !!token
}

/**
 * Authenticate with Google Calendar
 */
export function authenticate() {
  return new Promise((resolve, reject) => {
    if (!tokenClient) {
      reject(new Error('Google Identity Services not initialized'))
      return
    }

    tokenClient.callback = async (response) => {
      if (response.error) {
        reject(new Error(response.error))
        return
      }

      storeToken(response)
      window.gapi.client.setToken({ access_token: response.access_token })
      resolve(response)
    }

    // Check if we have a stored token
    const storedToken = getStoredToken()
    if (storedToken) {
      window.gapi.client.setToken({ access_token: storedToken.access_token })
      resolve(storedToken)
      return
    }

    // Request new token
    tokenClient.requestAccessToken({ prompt: 'consent' })
  })
}

/**
 * Sign out from Google Calendar
 */
export function signOut() {
  const token = getStoredToken()
  if (token) {
    window.google.accounts.oauth2.revoke(token.access_token)
    localStorage.removeItem('google_calendar_token')
  }
  window.gapi.client.setToken(null)
}

// ============================================
// CALENDAR OPERATIONS
// ============================================

/**
 * List user's calendars
 */
export async function listCalendars() {
  const response = await window.gapi.client.calendar.calendarList.list()
  return response.result.items || []
}

/**
 * Get the primary calendar ID
 */
export async function getPrimaryCalendarId() {
  const calendars = await listCalendars()
  const primary = calendars.find(c => c.primary)
  return primary?.id || 'primary'
}

/**
 * Create a calendar event
 */
export async function createEvent(event, calendarId = 'primary') {
  const response = await window.gapi.client.calendar.events.insert({
    calendarId,
    resource: event
  })
  return response.result
}

/**
 * Update a calendar event
 */
export async function updateEvent(eventId, event, calendarId = 'primary') {
  const response = await window.gapi.client.calendar.events.update({
    calendarId,
    eventId,
    resource: event
  })
  return response.result
}

/**
 * Delete a calendar event
 */
export async function deleteEvent(eventId, calendarId = 'primary') {
  await window.gapi.client.calendar.events.delete({
    calendarId,
    eventId
  })
}

/**
 * Get events by custom property (for syncing)
 */
export async function getEventsByProperty(propertyKey, propertyValue, calendarId = 'primary') {
  // Search in extended properties
  const response = await window.gapi.client.calendar.events.list({
    calendarId,
    privateExtendedProperty: `${propertyKey}=${propertyValue}`,
    singleEvents: true,
    maxResults: 100
  })
  return response.result.items || []
}

// ============================================
// PROJECT SYNC HELPERS
// ============================================

/**
 * Build a calendar event from project data
 */
function buildProjectEvent(project, type, date, title) {
  return {
    summary: title,
    description: `Project: ${project.name}\nClient: ${project.client_name || 'N/A'}\n\nManaged by Muster 2.0`,
    start: {
      date: date, // All-day event
    },
    end: {
      date: date,
    },
    extendedProperties: {
      private: {
        muster_project_id: project.id,
        muster_event_type: type
      }
    },
    colorId: type === 'start' ? '10' : type === 'end' ? '11' : '7' // Green for start, red for end, cyan for deliverables
  }
}

/**
 * Sync a project's dates to Google Calendar
 */
export async function syncProjectToCalendar(project, calendarId = 'primary') {
  const results = {
    created: [],
    updated: [],
    deleted: [],
    errors: []
  }

  try {
    // Get existing events for this project
    const existingEvents = await getEventsByProperty('muster_project_id', project.id, calendarId)

    // Track which events we've processed
    const processedEventIds = new Set()

    // Sync field start date
    if (project.start_date) {
      const startEvent = buildProjectEvent(
        project,
        'start',
        project.start_date,
        `🚀 ${project.name} - Field Start`
      )

      const existing = existingEvents.find(e =>
        e.extendedProperties?.private?.muster_event_type === 'start'
      )

      if (existing) {
        await updateEvent(existing.id, startEvent, calendarId)
        results.updated.push({ type: 'start', id: existing.id })
        processedEventIds.add(existing.id)
      } else {
        const created = await createEvent(startEvent, calendarId)
        results.created.push({ type: 'start', id: created.id })
      }
    }

    // Sync field end date
    if (project.end_date) {
      const endEvent = buildProjectEvent(
        project,
        'end',
        project.end_date,
        `🏁 ${project.name} - Field End`
      )

      const existing = existingEvents.find(e =>
        e.extendedProperties?.private?.muster_event_type === 'end'
      )

      if (existing) {
        await updateEvent(existing.id, endEvent, calendarId)
        results.updated.push({ type: 'end', id: existing.id })
        processedEventIds.add(existing.id)
      } else {
        const created = await createEvent(endEvent, calendarId)
        results.created.push({ type: 'end', id: created.id })
      }
    }

    // Sync deliverables
    const deliverables = project.deliverables || []
    for (const deliverable of deliverables) {
      if (!deliverable.due_date || !deliverable.name) continue

      const deliverableEvent = buildProjectEvent(
        project,
        `deliverable_${deliverable.id}`,
        deliverable.due_date,
        `📦 ${project.name} - ${deliverable.name}`
      )

      const existing = existingEvents.find(e =>
        e.extendedProperties?.private?.muster_event_type === `deliverable_${deliverable.id}`
      )

      if (existing) {
        await updateEvent(existing.id, deliverableEvent, calendarId)
        results.updated.push({ type: 'deliverable', id: existing.id, name: deliverable.name })
        processedEventIds.add(existing.id)
      } else {
        const created = await createEvent(deliverableEvent, calendarId)
        results.created.push({ type: 'deliverable', id: created.id, name: deliverable.name })
      }
    }

    // Delete orphaned events (deliverables that were removed)
    for (const event of existingEvents) {
      if (!processedEventIds.has(event.id)) {
        const eventType = event.extendedProperties?.private?.muster_event_type
        // Only delete deliverable events, not start/end
        if (eventType?.startsWith('deliverable_')) {
          await deleteEvent(event.id, calendarId)
          results.deleted.push({ type: 'deliverable', id: event.id })
        }
      }
    }

  } catch (err) {
    console.error('Calendar sync error:', err)
    results.errors.push(err.message)
  }

  return results
}

/**
 * Remove all calendar events for a project
 */
export async function removeProjectFromCalendar(projectId, calendarId = 'primary') {
  const events = await getEventsByProperty('muster_project_id', projectId, calendarId)

  for (const event of events) {
    await deleteEvent(event.id, calendarId)
  }

  return { deleted: events.length }
}

// ============================================
// UTILITIES
// ============================================

/**
 * Format sync results for display
 */
export function formatSyncResults(results) {
  const parts = []

  if (results.created.length > 0) {
    parts.push(`Created ${results.created.length} event(s)`)
  }
  if (results.updated.length > 0) {
    parts.push(`Updated ${results.updated.length} event(s)`)
  }
  if (results.deleted.length > 0) {
    parts.push(`Deleted ${results.deleted.length} event(s)`)
  }
  if (results.errors.length > 0) {
    parts.push(`${results.errors.length} error(s)`)
  }

  return parts.length > 0 ? parts.join(', ') : 'No changes'
}
