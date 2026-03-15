import { useState, useEffect } from 'react'
import {
  Calendar, RefreshCw, Check, X, AlertCircle, Link2, Unlink,
  Loader2, ExternalLink
} from 'lucide-react'
import {
  initGoogleCalendar,
  isConfigured,
  isAuthenticated,
  authenticate,
  signOut,
  syncProjectToCalendar,
  removeProjectFromCalendar,
  formatSyncResults
} from '../lib/googleCalendar'

export default function CalendarSync({ project, onSyncComplete }) {
  const [initialized, setInitialized] = useState(false)
  const [connected, setConnected] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)
  const [error, setError] = useState(null)
  const [syncResult, setSyncResult] = useState(null)

  // Check configuration and auth status on mount
  useEffect(() => {
    checkStatus()
  }, [])

  const checkStatus = async () => {
    if (!isConfigured()) {
      setError('Google Calendar not configured. Add API credentials to .env')
      return
    }

    try {
      await initGoogleCalendar()
      setInitialized(true)
      setConnected(isAuthenticated())
    } catch (err) {
      console.error('Failed to initialize Google Calendar:', err)
      setError(err.message)
    }
  }

  const handleConnect = async () => {
    setError(null)
    try {
      await authenticate()
      setConnected(true)
    } catch (err) {
      console.error('Failed to connect:', err)
      setError(err.message)
    }
  }

  const handleDisconnect = () => {
    signOut()
    setConnected(false)
    setLastSync(null)
    setSyncResult(null)
  }

  const handleSync = async () => {
    if (!project?.id) return

    setSyncing(true)
    setError(null)
    setSyncResult(null)

    try {
      const results = await syncProjectToCalendar(project)
      setSyncResult(results)
      setLastSync(new Date())

      if (onSyncComplete) {
        onSyncComplete(results)
      }
    } catch (err) {
      console.error('Sync failed:', err)
      setError(err.message)
    } finally {
      setSyncing(false)
    }
  }

  const handleRemoveFromCalendar = async () => {
    if (!project?.id) return
    if (!confirm('Remove all calendar events for this project?')) return

    setSyncing(true)
    setError(null)

    try {
      const results = await removeProjectFromCalendar(project.id)
      setSyncResult({ deleted: [{ count: results.deleted }], created: [], updated: [], errors: [] })
      setLastSync(null)
    } catch (err) {
      console.error('Remove failed:', err)
      setError(err.message)
    } finally {
      setSyncing(false)
    }
  }

  // Not configured state
  if (!isConfigured()) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <p className="font-medium text-gray-700">Google Calendar</p>
            <p className="text-sm text-gray-500 mt-1">
              Add VITE_GOOGLE_CLIENT_ID and VITE_GOOGLE_API_KEY to .env to enable calendar sync.
            </p>
            <a
              href="https://console.cloud.google.com/apis/credentials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 mt-2"
            >
              Get API credentials
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Not connected state
  if (!connected) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-700">Google Calendar</p>
              <p className="text-sm text-gray-500">Connect to sync project dates</p>
            </div>
          </div>
          <button
            onClick={handleConnect}
            disabled={!initialized}
            className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            <Link2 className="w-4 h-4" />
            Connect
          </button>
        </div>
        {error && (
          <div className="mt-3 flex items-start gap-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            {error}
          </div>
        )}
      </div>
    )
  }

  // Connected state
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Calendar className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="font-medium text-green-800 flex items-center gap-2">
              Google Calendar Connected
              <Check className="w-4 h-4" />
            </p>
            {lastSync && (
              <p className="text-sm text-green-600">
                Last synced: {lastSync.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSync}
            disabled={syncing}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-sm font-medium"
          >
            {syncing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                Sync Now
              </>
            )}
          </button>
          <button
            onClick={handleDisconnect}
            className="p-2 text-green-600 hover:text-green-700 hover:bg-green-100 rounded-lg"
            title="Disconnect"
          >
            <Unlink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sync Result */}
      {syncResult && (
        <div className="mt-3 pt-3 border-t border-green-200">
          <p className="text-sm text-green-700">
            {formatSyncResults(syncResult)}
          </p>
          {syncResult.errors?.length > 0 && (
            <div className="mt-2 text-sm text-red-600">
              Errors: {syncResult.errors.join(', ')}
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-3 flex items-start gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      {/* What gets synced */}
      <div className="mt-3 pt-3 border-t border-green-200">
        <p className="text-xs text-green-600 font-medium mb-1">Events synced:</p>
        <ul className="text-xs text-green-700 space-y-0.5">
          <li>• Field Start Date {project?.start_date ? `(${project.start_date})` : '(not set)'}</li>
          <li>• Field End Date {project?.end_date ? `(${project.end_date})` : '(not set)'}</li>
          <li>• {(project?.deliverables || []).length} Deliverable(s)</li>
        </ul>
      </div>

      {/* Remove from calendar */}
      <div className="mt-3 pt-3 border-t border-green-200">
        <button
          onClick={handleRemoveFromCalendar}
          disabled={syncing}
          className="text-xs text-red-600 hover:text-red-700"
        >
          Remove all events from calendar
        </button>
      </div>
    </div>
  )
}
