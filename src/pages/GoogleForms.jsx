/**
 * GoogleForms.jsx
 * Manage Google Forms - create, list, embed
 */

import { useState, useEffect } from 'react'
import {
  FileText,
  Plus,
  ExternalLink,
  Trash2,
  RefreshCw,
  Link2,
  Mountain,
  Plane,
  AlertTriangle,
  CheckCircle,
  LogOut
} from 'lucide-react'
import { getGoogleAuthUrl, isGoogleConnected, clearGoogleTokens, getStoredGoogleTokens } from '../lib/googleAuth'
import {
  listGoogleForms,
  deleteGoogleForm,
  createAvalancheControlLog,
  createDailyFlightLog,
  createSafetyIncidentReport
} from '../lib/googleForms'

const FORM_TEMPLATES = [
  {
    id: 'avalanche',
    name: 'Avalanche Control Log',
    icon: Mountain,
    description: 'Track avalanche control operations',
    create: createAvalancheControlLog,
  },
  {
    id: 'flight',
    name: 'Daily Flight Log',
    icon: Plane,
    description: 'Record flight operations and details',
    create: createDailyFlightLog,
  },
  {
    id: 'safety',
    name: 'Safety Incident Report',
    icon: AlertTriangle,
    description: 'Report safety incidents and near misses',
    create: createSafetyIncidentReport,
  },
]

export default function GoogleForms() {
  const [connected, setConnected] = useState(false)
  const [forms, setForms] = useState([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(null)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    const isConnected = isGoogleConnected()
    setConnected(isConnected)

    if (isConnected) {
      await loadForms()
    } else {
      setLoading(false)
    }
  }

  const loadForms = async () => {
    setLoading(true)
    try {
      const formsList = await listGoogleForms()
      setForms(formsList)
    } catch (err) {
      if (err.message.includes('Not authenticated') || err.message.includes('401')) {
        // Token expired or invalid
        clearGoogleTokens()
        setConnected(false)
      } else {
        setMessage({ type: 'error', text: err.message })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleConnect = () => {
    window.location.href = getGoogleAuthUrl()
  }

  const handleDisconnect = () => {
    clearGoogleTokens()
    setConnected(false)
    setForms([])
  }

  const handleCreateForm = async (template) => {
    setCreating(template.id)
    setMessage({ type: '', text: '' })

    try {
      const form = await template.create()
      setMessage({
        type: 'success',
        text: `${template.name} created successfully!`
      })
      // Refresh list
      await loadForms()
      // Open form in new tab
      window.open(form.editUrl, '_blank')
    } catch (err) {
      console.error('Form creation error:', err)
      setMessage({ type: 'error', text: err.message })
    } finally {
      setCreating(null)
    }
  }

  const handleDeleteForm = async (formId, formName) => {
    if (!confirm(`Delete "${formName}"? This cannot be undone.`)) return

    try {
      await deleteGoogleForm(formId)
      setForms(forms.filter(f => f.id !== formId))
      setMessage({ type: 'success', text: 'Form deleted' })
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    }
  }

  const copyEmbedCode = (formId) => {
    const embedUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`
    const code = `<iframe src="${embedUrl}" width="100%" height="800" frameborder="0">Loading…</iframe>`
    navigator.clipboard.writeText(code)
    setMessage({ type: 'success', text: 'Embed code copied!' })
    setTimeout(() => setMessage({ type: '', text: '' }), 2000)
  }

  // Not connected - show connect button
  if (!connected) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Connect Google Forms</h1>
          <p className="text-gray-600 mb-6">
            Connect your Google account to create and manage forms directly in Google Forms.
            Forms will be stored in your Google Drive.
          </p>
          <button
            onClick={handleConnect}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Connect with Google
          </button>
          <p className="text-sm text-gray-500 mt-4">
            You'll be asked to grant access to Google Forms and Drive.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Google Forms</h1>
          <p className="text-gray-500 mt-1">Create and manage forms in your Google account</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={loadForms}
            disabled={loading}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
            title="Refresh"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={handleDisconnect}
            className="inline-flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm"
          >
            <LogOut className="w-4 h-4" />
            Disconnect
          </button>
        </div>
      </div>

      {/* Messages */}
      {message.text && (
        <div className={`p-4 rounded-lg flex items-center gap-3 ${
          message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
          'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {message.type === 'error' ? <AlertTriangle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Create Form Templates */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FORM_TEMPLATES.map(template => (
            <button
              key={template.id}
              onClick={() => handleCreateForm(template)}
              disabled={creating === template.id}
              className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-brand-300 hover:bg-brand-50 transition-colors text-left disabled:opacity-50"
            >
              <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <template.icon className="w-5 h-5 text-brand-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900">
                  {creating === template.id ? 'Creating...' : template.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{template.description}</p>
              </div>
              <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Existing Forms */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Forms</h2>

        {loading ? (
          <div className="flex justify-center py-8">
            <RefreshCw className="w-6 h-6 text-gray-400 animate-spin" />
          </div>
        ) : forms.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No forms yet. Create one above!</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {forms.map(form => (
              <div key={form.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-purple-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">{form.name}</h3>
                    <p className="text-sm text-gray-500">
                      Modified {new Date(form.modifiedTime).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyEmbedCode(form.id)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                    title="Copy embed code"
                  >
                    <Link2 className="w-4 h-4" />
                  </button>
                  <a
                    href={form.webViewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-brand-600 hover:bg-gray-100 rounded"
                    title="Open in Google Forms"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleDeleteForm(form.id, form.name)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                    title="Delete form"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
