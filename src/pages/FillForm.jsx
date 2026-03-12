/**
 * FillForm.jsx
 * Page for filling out a form - unified interactive document approach
 */

import { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  Save,
  Send,
  Printer,
  FileText,
  AlertCircle,
  CheckCircle,
  ClipboardList,
  Info
} from 'lucide-react'
import { getDocument } from '../lib/api'
import {
  createFormSubmission,
  updateFormSubmission,
  submitFormSubmission,
  getFormSubmission
} from '../lib/api'
import { generateFilledMarkdown } from '../lib/formParser'
import { printFormSubmission } from '../lib/pdfGenerator'
import InteractiveForm, { getFieldsFromContent } from '../components/InteractiveForm'
import aeriaIconWhite from '../assets/aeria-icon-white.png'

export default function FillForm() {
  const { formId } = useParams()
  const [searchParams] = useSearchParams()
  const submissionId = searchParams.get('submission')
  const navigate = useNavigate()

  const [form, setForm] = useState(null)
  const [submission, setSubmission] = useState(null)
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    loadForm()
  }, [formId, submissionId])

  const loadForm = async () => {
    setLoading(true)
    setError('')

    try {
      const formData = await getDocument(formId)
      setForm(formData)

      if (submissionId) {
        const submissionData = await getFormSubmission(submissionId)
        setSubmission(submissionData)
        setValues(submissionData.field_values || {})
      }
    } catch (err) {
      setError('Failed to load form: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveDraft = async () => {
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      if (submission) {
        await updateFormSubmission(submission.id, { field_values: values })
        setSuccess('Draft saved successfully')
      } else {
        const newSubmission = await createFormSubmission({
          form_id: formId,
          form_title: form.title,
          form_number: form.doc_number,
          field_values: values,
          status: 'draft'
        })
        setSubmission(newSubmission)
        setSuccess('Draft saved successfully')
        navigate(`/forms/${formId}/fill?submission=${newSubmission.id}`, { replace: true })
      }
    } catch (err) {
      setError('Failed to save draft: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError('')

    try {
      let submissionToSubmit = submission

      if (!submissionToSubmit) {
        submissionToSubmit = await createFormSubmission({
          form_id: formId,
          form_title: form.title,
          form_number: form.doc_number,
          field_values: values,
          status: 'draft'
        })
      } else {
        await updateFormSubmission(submissionToSubmit.id, { field_values: values })
      }

      await submitFormSubmission(submissionToSubmit.id)
      setSuccess('Form submitted successfully!')

      setTimeout(() => {
        navigate('/form-submissions')
      }, 1500)
    } catch (err) {
      setError('Failed to submit form: ' + err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handlePrint = () => {
    const filledContent = generateFilledMarkdown(form.content, values)
    printFormSubmission(
      {
        form_title: form.title,
        form_number: form.doc_number,
        submitted_at: submission?.submitted_at || new Date().toISOString()
      },
      filledContent
    )
  }

  // Calculate progress
  const fields = form ? getFieldsFromContent(form.content) : []
  const filledCount = fields.filter(f => {
    const val = values[f.id]
    if (f.type === 'checkbox') return val === true
    return val !== undefined && val !== null && val !== ''
  }).length
  const progressPercent = fields.length > 0 ? Math.round((filledCount / fields.length) * 100) : 0

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  if (!form) {
    return (
      <div className="text-center py-12">
        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500">Form not found</p>
        <button
          onClick={() => navigate('/forms')}
          className="mt-4 text-brand-600 hover:text-brand-700"
        >
          Back to Forms
        </button>
      </div>
    )
  }

  const isReadOnly = submission?.status === 'submitted' || submission?.status === 'approved'

  return (
    <div className="min-h-screen -m-4 lg:-m-6 bg-gray-100">
      {/* Header */}
      <div className="bg-[#132163] text-white sticky top-0 z-10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/forms')}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <img src={aeriaIconWhite} alt="AERIA" className="h-10 w-auto" />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-lg font-bold">{form.title}</h1>
                  {form.doc_number && (
                    <span className="px-2 py-0.5 bg-white/20 rounded text-sm">
                      {form.doc_number}
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/70 flex items-center gap-2">
                  <ClipboardList className="w-4 h-4" />
                  Fill in the highlighted fields below
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Status */}
              {submission && (
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${submission.status === 'draft' ? 'bg-gray-500/30' :
                    submission.status === 'submitted' ? 'bg-blue-500/30 text-blue-100' :
                    'bg-green-500/30 text-green-100'}
                `}>
                  {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                </span>
              )}

              {/* Progress */}
              {fields.length > 0 && (
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg">
                  <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${progressPercent === 100 ? 'bg-green-400' : 'bg-white'}`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <span className="text-sm">{filledCount}/{fields.length}</span>
                </div>
              )}

              <button
                onClick={handlePrint}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Print"
              >
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6">
        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1">{error}</span>
            <button onClick={() => setError('')} className="p-1 hover:bg-red-100 rounded">×</button>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {/* Instructions */}
        {!isReadOnly && (
          <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-xl flex items-start gap-3 border border-blue-200">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">How to fill this form:</p>
              <ul className="text-sm mt-1 space-y-1 text-blue-700">
                <li>• Click on any <span className="px-1 bg-blue-100 rounded">highlighted field</span> to enter your response</li>
                <li>• For Yes/No questions, click to toggle between options</li>
                <li>• Your progress is saved automatically when you click Save Draft</li>
              </ul>
            </div>
          </div>
        )}

        {isReadOnly && (
          <div className="mb-6 p-4 bg-gray-100 text-gray-700 rounded-xl flex items-center gap-3 border border-gray-300">
            <FileText className="w-5 h-5" />
            <span>This form has been submitted and is now read-only.</span>
          </div>
        )}

        {/* The Form Document - with inline editable fields */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 lg:p-8">
            <InteractiveForm
              content={form.content}
              values={values}
              onChange={setValues}
              disabled={isReadOnly}
            />
          </div>
        </div>

        {/* Action buttons */}
        {!isReadOnly && (
          <div className="flex items-center justify-between mt-6 p-4 bg-white rounded-xl border border-gray-200">
            <button
              onClick={() => navigate('/forms')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSaveDraft}
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors font-medium"
              >
                <Save className="w-4 h-4" />
                {saving ? 'Saving...' : 'Save Draft'}
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#131CD0] text-white rounded-lg hover:bg-[#0f18a8] disabled:opacity-50 transition-colors font-medium shadow-lg"
              >
                <Send className="w-4 h-4" />
                {submitting ? 'Submitting...' : 'Submit Form'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
