/**
 * GoogleDriveConnect.jsx
 * Google Drive OAuth connection UI
 */

import { useState, useEffect } from 'react'
import {
  Cloud,
  CloudOff,
  FolderOpen,
  Check,
  X,
  RefreshCw,
  Upload,
  Settings
} from 'lucide-react'
import {
  isGoogleDriveConfigured,
  isGoogleDriveConnected,
  initiateGoogleAuth,
  disconnectGoogleDrive,
  getGoogleDriveTokens,
  updateGoogleDrivePreferences,
  storeMockTokens
} from '../lib/googleDrive'

export default function GoogleDriveConnect({ onConnectionChange }) {
  const [isConfigured, setIsConfigured] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [loading, setLoading] = useState(true)
  const [tokens, setTokens] = useState(null)
  const [autoUpload, setAutoUpload] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    setLoading(true)
    try {
      setIsConfigured(isGoogleDriveConfigured())
      const connected = await isGoogleDriveConnected()
      setIsConnected(connected)

      if (connected) {
        const tokenData = await getGoogleDriveTokens()
        setTokens(tokenData)
        setAutoUpload(tokenData?.auto_upload || false)
      }

      onConnectionChange?.(connected)
    } catch (err) {
      console.error('Error checking Google Drive connection:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleConnect = () => {
    try {
      initiateGoogleAuth()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDisconnect = async () => {
    if (!confirm('Disconnect from Google Drive? You can reconnect anytime.')) return

    setLoading(true)
    try {
      await disconnectGoogleDrive()
      setIsConnected(false)
      setTokens(null)
      onConnectionChange?.(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleToggleAutoUpload = async () => {
    try {
      const newValue = !autoUpload
      await updateGoogleDrivePreferences({ autoUpload: newValue })
      setAutoUpload(newValue)
    } catch (err) {
      setError(err.message)
    }
  }

  // For development/testing
  const handleMockConnect = async () => {
    setLoading(true)
    try {
      await storeMockTokens()
      await checkConnection()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-gray-400 animate-spin" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Google Drive</h3>
            <p className="text-sm text-gray-500">Checking connection...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isConfigured) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <CloudOff className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">Google Drive</h3>
            <p className="text-sm text-gray-500 mt-1">
              Google Drive integration is not configured. Contact your administrator to set up the VITE_GOOGLE_CLIENT_ID environment variable.
            </p>
            {/* Development mock button */}
            {import.meta.env.DEV && (
              <button
                onClick={handleMockConnect}
                className="mt-3 text-sm text-brand-600 hover:text-brand-700"
              >
                Use mock connection (dev only)
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center
            ${isConnected ? 'bg-green-100' : 'bg-gray-100'}
          `}>
            {isConnected ? (
              <Cloud className="w-5 h-5 text-green-600" />
            ) : (
              <CloudOff className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">Google Drive</h3>
              {isConnected && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                  <Check className="w-3 h-3" />
                  Connected
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {isConnected
                ? 'Your account is connected. Form PDFs can be uploaded to your Drive.'
                : 'Connect your Google account to automatically upload form PDFs to your Drive.'}
            </p>

            {error && (
              <div className="mt-3 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Connected state options */}
        {isConnected && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Auto-upload PDFs</p>
                <p className="text-xs text-gray-500">Automatically upload form submissions to Drive</p>
              </div>
              <button
                onClick={handleToggleAutoUpload}
                className={`
                  relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
                  ${autoUpload ? 'bg-brand-600' : 'bg-gray-200'}
                `}
              >
                <span
                  className={`
                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
                    ${autoUpload ? 'translate-x-5' : 'translate-x-0'}
                  `}
                />
              </button>
            </div>

            {tokens?.default_folder_name && (
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                <FolderOpen className="w-4 h-4" />
                <span>Default folder: {tokens.default_folder_name}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
        {isConnected ? (
          <>
            <button
              onClick={handleDisconnect}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Disconnect
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </>
        ) : (
          <button
            onClick={handleConnect}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 text-sm font-medium"
          >
            <Cloud className="w-4 h-4" />
            Connect Google Drive
          </button>
        )}
      </div>

      {/* Settings panel */}
      {showSettings && isConnected && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Drive Settings</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Default Upload Folder</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tokens?.default_folder_name || 'Root'}
                  readOnly
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                />
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Browse
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Note: Folder selection requires backend integration
              </p>
            </div>
            <div className="text-xs text-gray-500">
              <p>Connected: {tokens?.connected_at ? new Date(tokens.connected_at).toLocaleDateString() : 'Unknown'}</p>
              <p>Token expires: {tokens?.token_expiry ? new Date(tokens.token_expiry).toLocaleString() : 'Unknown'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
