/**
 * googleDrive.js
 * Google Drive OAuth and file upload integration
 *
 * Setup required:
 * 1. Create Google Cloud project
 * 2. Enable Google Drive API
 * 3. Configure OAuth consent screen
 * 4. Create OAuth 2.0 credentials
 * 5. Set VITE_GOOGLE_CLIENT_ID in .env
 */

import { supabase } from './supabase'

// Google OAuth configuration
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const GOOGLE_REDIRECT_URI = `${window.location.origin}/auth/google/callback`
const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
].join(' ')

/**
 * Check if Google Drive is configured
 */
export function isGoogleDriveConfigured() {
  return !!GOOGLE_CLIENT_ID
}

/**
 * Initiate Google OAuth flow
 */
export function initiateGoogleAuth() {
  if (!GOOGLE_CLIENT_ID) {
    throw new Error('Google Drive integration is not configured. Please set VITE_GOOGLE_CLIENT_ID.')
  }

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: 'code',
    scope: GOOGLE_SCOPES,
    access_type: 'offline',
    prompt: 'consent'
  })

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

/**
 * Handle OAuth callback and exchange code for tokens
 * This should be called from the callback route
 */
export async function handleGoogleCallback(code) {
  // Exchange code for tokens (this should ideally be done server-side)
  // For now, we'll store the code and note that a backend is needed

  // Note: In production, you would:
  // 1. Send the code to your backend
  // 2. Backend exchanges code for tokens using client_secret
  // 3. Backend stores tokens in database
  // 4. Return success to frontend

  console.warn('Google OAuth callback received. Backend integration required for token exchange.')

  // For demo purposes, show how tokens would be stored
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User must be logged in to connect Google Drive')
  }

  // This is a placeholder - actual token exchange requires backend
  return {
    success: false,
    message: 'Backend integration required for Google OAuth token exchange'
  }
}

/**
 * Get stored Google Drive tokens for current user
 */
export async function getGoogleDriveTokens() {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data, error } = await supabase
    .from('google_drive_tokens')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching Google Drive tokens:', error)
    return null
  }

  return data
}

/**
 * Check if user has connected Google Drive
 */
export async function isGoogleDriveConnected() {
  const tokens = await getGoogleDriveTokens()
  return tokens !== null && new Date(tokens.token_expiry) > new Date()
}

/**
 * Disconnect Google Drive
 */
export async function disconnectGoogleDrive() {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User must be logged in')
  }

  const { error } = await supabase
    .from('google_drive_tokens')
    .delete()
    .eq('user_id', user.id)

  if (error) throw error

  return { success: true }
}

/**
 * Update Google Drive preferences
 */
export async function updateGoogleDrivePreferences(preferences) {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User must be logged in')
  }

  const { data, error } = await supabase
    .from('google_drive_tokens')
    .update({
      default_folder_id: preferences.defaultFolderId,
      default_folder_name: preferences.defaultFolderName,
      auto_upload: preferences.autoUpload,
      last_used_at: new Date().toISOString()
    })
    .eq('user_id', user.id)
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * Upload file to Google Drive
 * Note: This is a placeholder - actual implementation requires backend
 */
export async function uploadToGoogleDrive(file, options = {}) {
  const tokens = await getGoogleDriveTokens()

  if (!tokens) {
    throw new Error('Google Drive is not connected')
  }

  // In production, you would:
  // 1. Send file to your backend
  // 2. Backend uses stored tokens to upload to Drive
  // 3. Backend returns file ID and URL

  console.warn('Google Drive upload requires backend integration')

  // Placeholder response
  return {
    success: false,
    message: 'Backend integration required for Google Drive upload',
    fileId: null,
    fileUrl: null
  }
}

/**
 * List folders in Google Drive (for folder picker)
 * Note: This is a placeholder - actual implementation requires backend
 */
export async function listGoogleDriveFolders(parentId = 'root') {
  const tokens = await getGoogleDriveTokens()

  if (!tokens) {
    throw new Error('Google Drive is not connected')
  }

  // Placeholder - backend needed for actual implementation
  console.warn('Google Drive folder listing requires backend integration')

  return {
    folders: [],
    message: 'Backend integration required'
  }
}

/**
 * Create a new folder in Google Drive
 * Note: This is a placeholder - actual implementation requires backend
 */
export async function createGoogleDriveFolder(name, parentId = 'root') {
  const tokens = await getGoogleDriveTokens()

  if (!tokens) {
    throw new Error('Google Drive is not connected')
  }

  // Placeholder - backend needed for actual implementation
  console.warn('Google Drive folder creation requires backend integration')

  return {
    success: false,
    message: 'Backend integration required',
    folderId: null
  }
}

/**
 * Store mock tokens for development/testing
 * This simulates a successful OAuth flow
 */
export async function storeMockTokens() {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User must be logged in')
  }

  const mockTokens = {
    user_id: user.id,
    access_token: 'mock_access_token',
    refresh_token: 'mock_refresh_token',
    token_expiry: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
    default_folder_id: null,
    default_folder_name: null,
    auto_upload: false,
    connected_at: new Date().toISOString()
  }

  const { data, error } = await supabase
    .from('google_drive_tokens')
    .upsert(mockTokens, { onConflict: 'user_id' })
    .select()
    .single()

  if (error) throw error
  return data
}
