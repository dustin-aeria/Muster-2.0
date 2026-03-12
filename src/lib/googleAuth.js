/**
 * Google OAuth2 Authentication for Forms API
 * Handles user authentication flow for creating/managing Google Forms
 */

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET
const REDIRECT_URI = `${window.location.origin}/auth/google/callback`

const SCOPES = [
  'https://www.googleapis.com/auth/forms.body',
  'https://www.googleapis.com/auth/forms.responses.readonly',
  'https://www.googleapis.com/auth/drive.file',
].join(' ')

/**
 * Generate the Google OAuth2 authorization URL
 */
export function getGoogleAuthUrl() {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPES,
    access_type: 'offline',
    prompt: 'consent',
  })

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

/**
 * Exchange authorization code for tokens
 */
export async function exchangeCodeForTokens(code) {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error_description || 'Failed to exchange code for tokens')
  }

  return response.json()
}

/**
 * Refresh access token using refresh token
 */
export async function refreshAccessToken(refreshToken) {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error_description || 'Failed to refresh token')
  }

  return response.json()
}

/**
 * Get user info from Google
 */
export async function getGoogleUserInfo(accessToken) {
  const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to get user info')
  }

  return response.json()
}

/**
 * Store Google tokens in localStorage (for demo) or Supabase
 */
export function storeGoogleTokens(tokens) {
  const tokenData = {
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    expires_at: Date.now() + (tokens.expires_in * 1000),
  }
  localStorage.setItem('google_tokens', JSON.stringify(tokenData))
  return tokenData
}

/**
 * Get stored Google tokens
 */
export function getStoredGoogleTokens() {
  const stored = localStorage.getItem('google_tokens')
  if (!stored) return null
  return JSON.parse(stored)
}

/**
 * Check if tokens are valid/not expired
 */
export function areTokensValid() {
  const tokens = getStoredGoogleTokens()
  if (!tokens) return false
  // Check if expired (with 5 min buffer)
  return tokens.expires_at > Date.now() + 300000
}

/**
 * Get valid access token (refresh if needed)
 */
export async function getValidAccessToken() {
  const tokens = getStoredGoogleTokens()
  if (!tokens) {
    throw new Error('Not authenticated with Google')
  }

  // If token is still valid, return it
  if (tokens.expires_at > Date.now() + 300000) {
    return tokens.access_token
  }

  // Refresh the token
  if (!tokens.refresh_token) {
    throw new Error('No refresh token available')
  }

  const newTokens = await refreshAccessToken(tokens.refresh_token)
  storeGoogleTokens({
    ...newTokens,
    refresh_token: tokens.refresh_token, // Keep existing refresh token
  })

  return newTokens.access_token
}

/**
 * Clear Google tokens (logout)
 */
export function clearGoogleTokens() {
  localStorage.removeItem('google_tokens')
}

/**
 * Check if Google is connected
 */
export function isGoogleConnected() {
  return getStoredGoogleTokens() !== null
}
