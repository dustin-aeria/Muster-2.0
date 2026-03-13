/**
 * Google Forms API Client
 * Creates and manages Google Forms using OAuth2 authentication
 */

import { getValidAccessToken } from './googleAuth'

const FORMS_API = 'https://forms.googleapis.com/v1'
const DRIVE_API = 'https://www.googleapis.com/drive/v3'

/**
 * Make authenticated request to Google API
 */
async function googleFetch(url, options = {}) {
  const accessToken = await getValidAccessToken()

  console.log('Google API Request:', url, options.method || 'GET')

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const responseText = await response.text()
  console.log('Google API Response:', response.status, responseText.substring(0, 500))

  if (!response.ok) {
    let error = {}
    try {
      error = JSON.parse(responseText)
    } catch (e) {}
    throw new Error(error.error?.message || `API Error: ${response.status} - ${responseText.substring(0, 200)}`)
  }

  return JSON.parse(responseText)
}

/**
 * Create a new Google Form
 */
export async function createGoogleForm(title) {
  const form = await googleFetch(`${FORMS_API}/forms`, {
    method: 'POST',
    body: JSON.stringify({
      info: {
        title,
        documentTitle: title,
      },
    }),
  })

  return {
    formId: form.formId,
    responderUri: form.responderUri,
    editUrl: `https://docs.google.com/forms/d/${form.formId}/edit`,
  }
}

/**
 * Add questions to a form
 */
export async function addQuestionsToForm(formId, questions) {
  const requests = questions.map((q, index) => ({
    createItem: {
      item: {
        title: q.title,
        description: q.description || '',
        questionItem: {
          question: buildQuestion(q),
        },
      },
      location: { index },
    },
  }))

  return googleFetch(`${FORMS_API}/forms/${formId}:batchUpdate`, {
    method: 'POST',
    body: JSON.stringify({ requests }),
  })
}

/**
 * Build question object based on type
 */
function buildQuestion(q) {
  const base = { required: q.required || false }

  switch (q.type) {
    case 'text':
      return { ...base, textQuestion: { paragraph: false } }

    case 'paragraph':
      return { ...base, textQuestion: { paragraph: true } }

    case 'multipleChoice':
      return {
        ...base,
        choiceQuestion: {
          type: 'RADIO',
          options: q.options.map(o => ({ value: o })),
        },
      }

    case 'checkbox':
      return {
        ...base,
        choiceQuestion: {
          type: 'CHECKBOX',
          options: q.options.map(o => ({ value: o })),
        },
      }

    case 'dropdown':
      return {
        ...base,
        choiceQuestion: {
          type: 'DROP_DOWN',
          options: q.options.map(o => ({ value: o })),
        },
      }

    case 'date':
      return { ...base, dateQuestion: { includeTime: false } }

    case 'time':
      return { ...base, timeQuestion: {} }

    case 'scale':
      return {
        ...base,
        scaleQuestion: {
          low: q.low || 1,
          high: q.high || 5,
          lowLabel: q.lowLabel || '',
          highLabel: q.highLabel || '',
        },
      }

    default:
      return { ...base, textQuestion: { paragraph: false } }
  }
}

/**
 * Get form details
 */
export async function getGoogleForm(formId) {
  return googleFetch(`${FORMS_API}/forms/${formId}`)
}

/**
 * Get form responses
 */
export async function getFormResponses(formId) {
  return googleFetch(`${FORMS_API}/forms/${formId}/responses`)
}

/**
 * List all forms from Drive
 */
export async function listGoogleForms() {
  const response = await googleFetch(
    `${DRIVE_API}/files?q=mimeType='application/vnd.google-apps.form'&fields=files(id,name,webViewLink,createdTime,modifiedTime)&orderBy=modifiedTime desc`
  )
  return response.files || []
}

/**
 * Delete a form
 */
export async function deleteGoogleForm(formId) {
  const accessToken = await getValidAccessToken()

  const response = await fetch(`${DRIVE_API}/files/${formId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  })

  if (!response.ok && response.status !== 204) {
    throw new Error('Failed to delete form')
  }

  return true
}

// ============================================
// CONVERT MUSTER FORMS TO GOOGLE FORMS
// ============================================

/**
 * Parse markdown form content and extract fields
 */
function parseMarkdownToQuestions(content) {
  const questions = []

  // Normalize line endings
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n')

  console.log('Parsing markdown content, length:', normalizedContent.length)

  // Find all tables in the markdown - more flexible regex
  const tableRegex = /\|(.+)\|\n\|[\s:\-|]+\|\n((?:\|.+\|\n?)+)/g
  let match

  while ((match = tableRegex.exec(normalizedContent)) !== null) {
    const headerRow = match[1]
    const bodyRows = match[2].trim()

    console.log('Found table with headers:', headerRow)

    const headers = headerRow.split('|').filter(h => h.trim()).map(h => h.trim())
    const rows = bodyRows.split('\n').map(row =>
      row.split('|').filter((c, i, arr) => i > 0 && i < arr.length - 1).map(c => c.trim())
    )

    console.log('Headers:', headers)
    console.log('Rows count:', rows.length)

    // Check if this is a field/value style table (first column is label, rest are values)
    // Common patterns: "Field | Value", "Item | Details", or any 2-column table
    const isFieldValueTable = headers.length === 2

    if (isFieldValueTable) {
      rows.forEach(row => {
        if (row[0] && isEmptyCell(row[1])) {
          console.log('Adding field from 2-col table:', row[0])
          questions.push({
            title: row[0],
            type: detectQuestionType(row[0]),
            required: false
          })
        }
      })
    }
    // Multi-column tables - check each cell
    else {
      rows.forEach(row => {
        // First column is usually the row label
        const rowLabel = row[0] || ''

        row.forEach((cell, colIndex) => {
          // Skip first column (it's the label) and check if cell should be filled
          if (colIndex > 0 && isEmptyCell(cell)) {
            const headerLabel = headers[colIndex] || `Column ${colIndex + 1}`
            const label = rowLabel ? `${rowLabel} - ${headerLabel}` : headerLabel
            console.log('Adding field from multi-col table:', label)
            questions.push({
              title: label,
              type: detectQuestionType(label),
              required: false
            })
          }
        })
      })
    }
  }

  return questions
}

/**
 * Check if a cell is meant to be filled in
 */
function isEmptyCell(content) {
  if (!content) return true
  const trimmed = content.trim()
  if (!trimmed) return true
  if (trimmed === '☐' || trimmed === '☑' || trimmed === '[ ]' || trimmed === '[x]') return true
  if (trimmed.match(/^_{2,}$/)) return true
  if (trimmed.match(/^\.{2,}$/)) return true
  return false
}

/**
 * Detect question type from label
 */
function detectQuestionType(label) {
  const labelLower = label.toLowerCase()

  if (labelLower.includes('date')) return 'date'
  if (labelLower.includes('time') && !labelLower.includes('datetime')) return 'time'
  if (labelLower.includes('signature')) return 'text'
  if (labelLower.includes('notes') || labelLower.includes('comments') || labelLower.includes('description') || labelLower.includes('observations')) return 'paragraph'
  if (labelLower.includes('yes') || labelLower.includes('no') || labelLower.includes('confirm')) return 'multipleChoice'

  return 'text'
}

/**
 * Create Google Form from Muster form content
 */
export async function createGoogleFormFromMuster(title, markdownContent) {
  console.log('Creating Google Form from Muster:', title)
  console.log('Content preview:', markdownContent?.substring(0, 200))

  // Create the form
  const form = await createGoogleForm(title)

  // Parse questions from markdown
  const questions = parseMarkdownToQuestions(markdownContent || '')

  console.log('Parsed questions:', questions.length, questions)

  // Add yes/no options for choice questions
  const processedQuestions = questions.map(q => {
    if (q.type === 'multipleChoice') {
      return { ...q, options: ['Yes', 'No', 'N/A'] }
    }
    return q
  })

  // Add questions if any were found
  if (processedQuestions.length > 0) {
    console.log('Adding', processedQuestions.length, 'questions to form')
    await addQuestionsToForm(form.formId, processedQuestions)
  } else {
    console.warn('No questions found in markdown content!')
  }

  return form
}

// ============================================
// FORM TEMPLATES
// ============================================

/**
 * Create Avalanche Control Log form
 */
export async function createAvalancheControlLog() {
  const form = await createGoogleForm('Avalanche Control Log')

  await addQuestionsToForm(form.formId, [
    { title: 'Date', type: 'date', required: true },
    { title: 'Time', type: 'time', required: true },
    { title: 'Location/Zone', type: 'text', required: true },
    { title: 'Operator Name', type: 'text', required: true },
    {
      title: 'Weather Conditions',
      type: 'multipleChoice',
      options: ['Clear', 'Partly Cloudy', 'Overcast', 'Snowing', 'Raining', 'Windy']
    },
    { title: 'Temperature (°C)', type: 'text' },
    { title: 'Wind Speed (km/h)', type: 'text' },
    { title: 'Wind Direction', type: 'dropdown', options: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] },
    { title: 'Snow Depth (cm)', type: 'text' },
    {
      title: 'Avalanche Hazard Rating',
      type: 'multipleChoice',
      required: true,
      options: ['1 - Low', '2 - Moderate', '3 - Considerable', '4 - High', '5 - Extreme']
    },
    {
      title: 'Control Method Used',
      type: 'checkbox',
      options: ['Explosive', 'Ski Cut', 'Cornice Drop', 'Hand Charge', 'Helicopter Delivery', 'None Required']
    },
    { title: 'Number of Charges Used', type: 'text' },
    {
      title: 'Results',
      type: 'multipleChoice',
      options: ['No Release', 'Minor Release', 'Moderate Release', 'Major Release']
    },
    { title: 'Observations/Notes', type: 'paragraph' },
    {
      title: 'Area Status After Control',
      type: 'multipleChoice',
      required: true,
      options: ['Open - Safe', 'Open - Monitor', 'Closed - Further Control Needed', 'Closed - Natural Hazard']
    },
    { title: 'Supervisor Notified', type: 'multipleChoice', options: ['Yes', 'No', 'N/A'] },
    { title: 'Digital Signature (Type Full Name)', type: 'text', required: true },
  ])

  return form
}

/**
 * Create Daily Flight Log form
 */
export async function createDailyFlightLog() {
  const form = await createGoogleForm('Daily Flight Log')

  await addQuestionsToForm(form.formId, [
    { title: 'Date', type: 'date', required: true },
    { title: 'Pilot Name', type: 'text', required: true },
    { title: 'Aircraft Registration', type: 'text', required: true },
    { title: 'Flight Number', type: 'text', required: true },
    { title: 'Departure Location', type: 'text', required: true },
    { title: 'Departure Time', type: 'time', required: true },
    { title: 'Arrival Location', type: 'text', required: true },
    { title: 'Arrival Time', type: 'time', required: true },
    { title: 'Flight Duration (hours)', type: 'text', required: true },
    { title: 'Purpose of Flight', type: 'dropdown', options: ['Survey', 'Inspection', 'Training', 'Transport', 'Emergency', 'Other'] },
    { title: 'Weather at Departure', type: 'text' },
    { title: 'Weather at Arrival', type: 'text' },
    { title: 'Fuel Used (L)', type: 'text' },
    { title: 'Passengers', type: 'text' },
    { title: 'Cargo Description', type: 'text' },
    { title: 'Incidents/Remarks', type: 'paragraph' },
    { title: 'Pilot Signature', type: 'text', required: true },
  ])

  return form
}

/**
 * Create Safety Incident Report form
 */
export async function createSafetyIncidentReport() {
  const form = await createGoogleForm('Safety Incident Report')

  await addQuestionsToForm(form.formId, [
    { title: 'Date of Incident', type: 'date', required: true },
    { title: 'Time of Incident', type: 'time', required: true },
    { title: 'Location', type: 'text', required: true },
    { title: 'Reporter Name', type: 'text', required: true },
    { title: 'Reporter Role', type: 'text', required: true },
    {
      title: 'Incident Type',
      type: 'multipleChoice',
      required: true,
      options: ['Near Miss', 'Minor Injury', 'Major Injury', 'Property Damage', 'Environmental', 'Security']
    },
    {
      title: 'Severity Level',
      type: 'scale',
      low: 1,
      high: 5,
      lowLabel: 'Minor',
      highLabel: 'Critical',
      required: true
    },
    { title: 'Description of Incident', type: 'paragraph', required: true },
    { title: 'Persons Involved', type: 'paragraph' },
    { title: 'Witnesses', type: 'text' },
    { title: 'Immediate Actions Taken', type: 'paragraph', required: true },
    { title: 'Equipment Involved', type: 'text' },
    { title: 'Contributing Factors', type: 'paragraph' },
    { title: 'Recommended Follow-up Actions', type: 'paragraph' },
    { title: 'Photos/Evidence Attached', type: 'multipleChoice', options: ['Yes', 'No'] },
    { title: 'Supervisor Notified', type: 'multipleChoice', options: ['Yes', 'No'], required: true },
    { title: 'Signature', type: 'text', required: true },
  ])

  return form
}
