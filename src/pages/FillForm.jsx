/**
 * FillForm.jsx
 * Page for filling out a form template - visually engaging design
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
  Eye,
  Edit3,
  Calendar
} from 'lucide-react'
import { getDocument } from '../lib/api'
import {
  createFormSubmission,
  updateFormSubmission,
  submitFormSubmission,
  getFormSubmission
} from '../lib/api'
import { parseFormToFields, generateFilledMarkdown, validateFieldValues } from '../lib/formParser'
import { printFormSubmission } from '../lib/pdfGenerator'
import FillableForm from '../components/FillableForm'
import { MarkdownPreview } from '../components/MarkdownEditor'
import aeriaIconWhite from '../assets/aeria-icon-white.png'
import aeriaLogoFull from '../assets/aeria-logo-full.png'
import { format } from 'date-fns'

export default function FillForm() {
  const { formId } = useParams()
  const [searchParams] = useSearchParams()
  const submissionId = searchParams.get('submission')
  const navigate = useNavigate()

  const [form, setForm] = useState(null)
  const [submission, setSubmission] = useState(null)
  const [fields, setFields] = useState([])
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [activeTab, setActiveTab] = useState('fill') // 'fill' or 'preview'

  useEffect(() => {
    loadForm()
  }, [formId, submissionId])

  const loadForm = async () => {
    setLoading(true)
    setError('')

    try {
      const formData = await getDocument(formId)
      setForm(formData)

      const parsedFields = parseFormToFields(formData.content)
      setFields(parsedFields)

      if (submissionId) {
        const submissionData = await getFormSubmission(submissionId)
        setSubmission(submissionData)
        setValues(submissionData.field_values || {})
      } else {
        const initialValues = {}
        parsedFields.forEach(field => {
          if (field.value && field.value !== '☐') {
            initialValues[field.id] = field.value
          }
        })
        setValues(initialValues)
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
    const validation = validateFieldValues(fields, values)
    if (!validation.valid) {
      setErrors(validation.errors)
      setError('Please fix the errors before submitting')
      return
    }

    setErrors({})
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

  const filledContent = generateFilledMarkdown(form.content, values)
  const isReadOnly = submission?.status === 'submitted' || submission?.status === 'approved'

  return (
    <div className="min-h-screen -m-4 lg:-m-6">
      {/* Header - matching document viewer style */}
      <div className="bg-[#132163] text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
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
                  <h1 className="text-xl font-bold">{form.title}</h1>
                  {form.doc_number && (
                    <span className="px-2 py-0.5 bg-white/20 rounded text-sm font-medium">
                      {form.doc_number}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <ClipboardList className="w-4 h-4" />
                    Fillable Form
                  </span>
                  {form.version && <span>v{form.version}</span>}
                  {form.category && <span>• {form.category}</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Status badge */}
              {submission && (
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${submission.status === 'draft' ? 'bg-gray-500/30 text-white' :
                    submission.status === 'submitted' ? 'bg-blue-500/30 text-blue-100' :
                    submission.status === 'approved' ? 'bg-green-500/30 text-green-100' :
                    'bg-red-500/30 text-red-100'}
                `}>
                  {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                </span>
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

        {/* Tab navigation */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('fill')}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium transition-colors
                ${activeTab === 'fill'
                  ? 'bg-white text-[#132163]'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <Edit3 className="w-4 h-4" />
              Fill Form
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium transition-colors
                ${activeTab === 'preview'
                  ? 'bg-white text-[#132163]'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 min-h-[calc(100vh-180px)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          {/* Alerts */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
              <button onClick={() => setError('')} className="ml-auto p-1 hover:bg-red-100 rounded">
                <ArrowLeft className="w-4 h-4 rotate-45" />
              </button>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Content based on active tab */}
          {activeTab === 'fill' ? (
            <div className="space-y-6">
              {isReadOnly && (
                <div className="p-4 bg-blue-50 text-blue-700 rounded-xl flex items-center gap-3 border border-blue-200">
                  <FileText className="w-5 h-5" />
                  <span>This form has been submitted and is read-only. View the preview tab for the completed form.</span>
                </div>
              )}
              <FillableForm
                fields={fields}
                values={values}
                onChange={setValues}
                errors={errors}
                disabled={isReadOnly}
              />
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Preview header */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-200 bg-white">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    {form.doc_number && (
                      <p className="text-sm font-bold text-[#131CD0] mb-2 tracking-wide">{form.doc_number}</p>
                    )}
                    <h1 className="text-2xl font-bold text-[#132163] mb-3">{form.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#132163]/10 text-[#132163] rounded-full font-medium">
                        <ClipboardList className="w-4 h-4" />
                        Form Submission
                      </span>
                      {form.category && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {form.category}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(), 'MMMM d, yyyy')}
                      </span>
                    </div>
                  </div>
                  <img src={aeriaLogoFull} alt="AERIA Solutions Ltd." className="h-14 w-auto hidden sm:block" />
                </div>
              </div>

              {/* Preview content */}
              <div className="p-6 lg:p-8">
                <MarkdownPreview content={filledContent} />
              </div>
            </div>
          )}

          {/* Action buttons */}
          {!isReadOnly && (
            <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
              <button
                onClick={() => navigate('/forms')}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveDraft}
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors font-medium"
                >
                  <Save className="w-4 h-4" />
                  {saving ? 'Saving...' : 'Save Draft'}
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#131CD0] text-white rounded-lg hover:bg-[#0f18a8] disabled:opacity-50 transition-colors font-medium shadow-lg shadow-brand-500/25"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Submitting...' : 'Submit Form'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
