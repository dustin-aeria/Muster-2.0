/**
 * GoogleForms.jsx
 * Shows Muster forms with links to fill them out in Google Forms
 */

import { useState, useEffect } from 'react'
import {
  FileText,
  ExternalLink,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  LogOut,
  Link2,
  Loader,
  ClipboardList,
  Trash2,
  Sparkles,
  Plane,
  Shield,
  Users,
  Clipboard,
  AlertCircle
} from 'lucide-react'
import { getGoogleAuthUrl, isGoogleConnected, clearGoogleTokens } from '../lib/googleAuth'
import { getDocuments, updateDocument } from '../lib/api'
import {
  listGoogleForms,
  createGoogleFormFromMuster,
  createGoogleFormFromTemplate,
  deleteGoogleForm
} from '../lib/googleForms'
import { FORM_TEMPLATES } from '../lib/formTemplates'

export default function GoogleForms() {
  const [connected, setConnected] = useState(false)
  const [musterForms, setMusterForms] = useState([])
  const [googleForms, setGoogleForms] = useState([])
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(null) // Track which form is syncing
  const [creatingTemplate, setCreatingTemplate] = useState(null)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [activeTab, setActiveTab] = useState('optimized') // 'optimized' or 'muster'

  // Template icons mapping
  const templateIcons = {
    'IMSAFE': Shield,
    'Pre-Flight': Plane,
    'FLHA': AlertCircle,
    'Incident Report': AlertTriangle,
    'Worksite Inspection': Clipboard,
    'Post-Flight': Plane,
    'Tailgate Meeting': Users
  }

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    const isConnected = isGoogleConnected()
    setConnected(isConnected)

    if (isConnected) {
      await loadData()
    } else {
      setLoading(false)
    }
  }

  const loadData = async () => {
    setLoading(true)
    try {
      // Load Muster forms from database
      const forms = await getDocuments('form', false)
      setMusterForms(forms.filter(f => f.status === 'active'))

      // Load existing Google Forms
      const gForms = await listGoogleForms()
      setGoogleForms(gForms)
    } catch (err) {
      if (err.message.includes('Not authenticated') || err.message.includes('401')) {
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
    setGoogleForms([])
  }

  // Find matching Google Form for a Muster form
  const findGoogleForm = (musterForm) => {
    // Check if we have a stored google_form_id
    if (musterForm.google_form_id) {
      return googleForms.find(gf => gf.id === musterForm.google_form_id)
    }
    // Otherwise try to match by name
    return googleForms.find(gf => gf.name === musterForm.title)
  }

  // Create Google Form for a Muster form
  const handleCreateGoogleForm = async (musterForm) => {
    setSyncing(musterForm.id)
    setMessage({ type: '', text: '' })

    try {
      const form = await createGoogleFormFromMuster(musterForm.title, musterForm.content)

      // Store the Google Form ID in Muster database
      await updateDocument(musterForm.id, {
        google_form_id: form.formId,
        google_form_url: `https://docs.google.com/forms/d/${form.formId}/viewform`
      })

      setMessage({ type: 'success', text: `Created Google Form for "${musterForm.title}"` })

      // Refresh data
      await loadData()
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setSyncing(null)
    }
  }

  // Create all missing Google Forms
  const handleSyncAll = async () => {
    const formsToCreate = musterForms.filter(mf => !findGoogleForm(mf))

    if (formsToCreate.length === 0) {
      setMessage({ type: 'success', text: 'All forms are already synced!' })
      return
    }

    setMessage({ type: '', text: '' })

    for (const form of formsToCreate) {
      try {
        setSyncing(form.id)
        await handleCreateGoogleForm(form)
      } catch (err) {
        // Continue with next form
      }
    }

    setSyncing(null)
    setMessage({ type: 'success', text: `Synced ${formsToCreate.length} forms to Google Forms` })
  }

  // Open form to fill out
  const handleFillForm = (musterForm) => {
    const googleForm = findGoogleForm(musterForm)
    if (googleForm) {
      // Construct proper viewform URL from form ID
      const formId = googleForm.id
      const viewUrl = `https://docs.google.com/forms/d/${formId}/viewform`
      console.log('Opening form:', viewUrl)
      window.open(viewUrl, '_blank')
    } else if (musterForm.google_form_url) {
      window.open(musterForm.google_form_url, '_blank')
    }
  }

  // Create form from optimized template
  const handleCreateFromTemplate = async (templateKey) => {
    setCreatingTemplate(templateKey)
    setMessage({ type: '', text: '' })

    try {
      const template = FORM_TEMPLATES[templateKey]
      const form = await createGoogleFormFromTemplate(template)

      setMessage({
        type: 'success',
        text: `Created optimized "${template.title}" form!`
      })

      // Refresh list
      await loadData()

      // Open form to review
      window.open(`https://docs.google.com/forms/d/${form.formId}/edit`, '_blank')
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setCreatingTemplate(null)
    }
  }

  // Delete Google Form and unlink from Muster
  const handleDeleteGoogleForm = async (musterForm) => {
    const googleForm = findGoogleForm(musterForm)
    if (!googleForm && !musterForm.google_form_id) return

    if (!confirm(`Delete Google Form for "${musterForm.title}"?`)) return

    try {
      const formIdToDelete = googleForm?.id || musterForm.google_form_id

      // Try to delete from Google Drive
      try {
        await deleteGoogleForm(formIdToDelete)
      } catch (deleteErr) {
        console.log('Could not delete from Drive (may already be deleted):', deleteErr.message)
      }

      // Always clear the link in Muster
      await updateDocument(musterForm.id, {
        google_form_id: null,
        google_form_url: null
      })

      setMessage({ type: 'success', text: 'Google Form unlinked' })
      await loadData()
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    }
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
            Connect your Google account to create fillable forms from your Muster templates.
            Forms will be stored in your Google Drive and can be filled out on any device.
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
          <p className="text-gray-500 mt-1">Mobile-friendly forms for field operations</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
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

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab('optimized')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'optimized'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Optimized Templates
            </span>
          </button>
          <button
            onClick={() => setActiveTab('muster')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'muster'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Muster Forms
            </span>
          </button>
        </nav>
      </div>

      {/* Optimized Templates Tab */}
      {activeTab === 'optimized' && (
        <div className="space-y-6">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-xl p-6 border border-brand-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Optimized for Field Use</h3>
                <p className="text-sm text-gray-600 mt-1">
                  These forms are redesigned for mobile, with grouped questions, progress bars, and 2-3 minute completion times.
                  Perfect for operators in the field wearing gloves.
                </p>
              </div>
            </div>
          </div>

          {/* Template Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(FORM_TEMPLATES).map(([key, template]) => {
              const Icon = templateIcons[key] || FileText
              const isCreating = creatingTemplate === key
              const existingForm = googleForms.find(gf => gf.name === template.title)

              return (
                <div
                  key={key}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">{template.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{template.description}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {template.sections.length} sections • ~{template.sections.reduce((acc, s) => acc + s.questions.length, 0)} questions
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {existingForm ? (
                      <>
                        <button
                          onClick={() => window.open(`https://docs.google.com/forms/d/${existingForm.id}/viewform`, '_blank')}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Fill Out
                        </button>
                        <button
                          onClick={() => window.open(`https://docs.google.com/forms/d/${existingForm.id}/edit`, '_blank')}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm"
                        >
                          Edit
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleCreateFromTemplate(key)}
                        disabled={isCreating}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 text-sm font-medium"
                      >
                        {isCreating ? (
                          <>
                            <Loader className="w-4 h-4 animate-spin" />
                            Creating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            Create Form
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Muster Forms Tab */}
      {activeTab === 'muster' && (
        <div className="space-y-4">
          {/* Sync Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSyncAll}
              disabled={loading || syncing}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
            >
              <Link2 className="w-4 h-4" />
              Sync All Forms
            </button>
          </div>

          {/* Forms List */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="font-semibold text-gray-900">Your Muster Forms</h2>
              <p className="text-sm text-gray-500">Convert your Muster markdown forms to Google Forms</p>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <RefreshCw className="w-6 h-6 text-gray-400 animate-spin" />
              </div>
            ) : musterForms.length === 0 ? (
              <div className="text-center py-12">
                <ClipboardList className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No active forms in Muster</p>
                <p className="text-sm text-gray-400 mt-1">Create forms in the Forms section first</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {musterForms.map(form => {
                  const googleForm = findGoogleForm(form)
                  const isLinked = !!googleForm || !!form.google_form_id
                  const isSyncing = syncing === form.id

                  return (
                    <div key={form.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isLinked ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {isLinked ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <ClipboardList className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{form.title}</h3>
                          <p className="text-sm text-gray-500">
                            {form.doc_number && <span className="mr-2">{form.doc_number}</span>}
                            {form.category && <span className="text-gray-400">{form.category}</span>}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isSyncing ? (
                          <span className="inline-flex items-center gap-2 px-4 py-2 text-gray-500">
                            <Loader className="w-4 h-4 animate-spin" />
                            Creating...
                          </span>
                        ) : isLinked ? (
                          <>
                            <button
                              onClick={() => handleFillForm(form)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Fill Out Form
                            </button>
                            <button
                              onClick={() => handleDeleteGoogleForm(form)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                              title="Delete Google Form"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => handleCreateGoogleForm(form)}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                          >
                            <Link2 className="w-4 h-4" />
                            Create Google Form
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Existing Google Forms */}
      {googleForms.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-900">All Google Forms in Drive</h2>
            <p className="text-sm text-gray-500">{googleForms.length} forms in your Muster Forms folder</p>
          </div>
          <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
            {googleForms.map(form => (
              <div key={form.id} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-700">{form.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.open(`https://docs.google.com/forms/d/${form.id}/viewform`, '_blank')}
                    className="text-xs text-brand-600 hover:text-brand-700"
                  >
                    Fill
                  </button>
                  <button
                    onClick={() => window.open(`https://docs.google.com/forms/d/${form.id}/edit`, '_blank')}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
