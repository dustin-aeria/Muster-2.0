/**
 * FillForm.jsx
 * Page for filling out a form template
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
  CheckCircle
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
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    loadForm()
  }, [formId, submissionId])

  const loadForm = async () => {
    setLoading(true)
    setError('')

    try {
      // Load the form template
      const formData = await getDocument(formId)
      setForm(formData)

      // Parse fields from the form content
      const parsedFields = parseFormToFields(formData.content)
      setFields(parsedFields)

      // If editing existing submission, load it
      if (submissionId) {
        const submissionData = await getFormSubmission(submissionId)
        setSubmission(submissionData)
        setValues(submissionData.field_values || {})
      } else {
        // Initialize with default values from fields
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
        // Update existing submission
        await updateFormSubmission(submission.id, {
          field_values: values
        })
        setSuccess('Draft saved successfully')
      } else {
        // Create new submission
        const newSubmission = await createFormSubmission({
          form_id: formId,
          form_title: form.title,
          form_number: form.doc_number,
          field_values: values,
          status: 'draft'
        })
        setSubmission(newSubmission)
        setSuccess('Draft saved successfully')

        // Update URL with submission ID
        navigate(`/forms/${formId}/fill?submission=${newSubmission.id}`, { replace: true })
      }
    } catch (err) {
      setError('Failed to save draft: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleSubmit = async () => {
    // Validate fields
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

      // Save first if needed
      if (!submissionToSubmit) {
        submissionToSubmit = await createFormSubmission({
          form_id: formId,
          form_title: form.title,
          form_number: form.doc_number,
          field_values: values,
          status: 'draft'
        })
      } else {
        await updateFormSubmission(submissionToSubmit.id, {
          field_values: values
        })
      }

      // Submit the form
      await submitFormSubmission(submissionToSubmit.id)

      setSuccess('Form submitted successfully!')

      // Redirect to submissions list after a short delay
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/forms')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Fill Out Form</h1>
            <p className="text-gray-500">{form.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {showPreview ? 'Edit' : 'Preview'}
          </button>
          <button
            onClick={handlePrint}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            title="Print"
          >
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Alerts */}
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          {success}
        </div>
      )}

      {/* Status badge */}
      {submission && (
        <div className="flex items-center gap-2">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${submission.status === 'draft' ? 'bg-gray-100 text-gray-700' :
              submission.status === 'submitted' ? 'bg-blue-100 text-blue-700' :
              submission.status === 'approved' ? 'bg-green-100 text-green-700' :
              'bg-red-100 text-red-700'}
          `}>
            {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
          </span>
          {submission.submitted_at && (
            <span className="text-sm text-gray-500">
              Submitted {new Date(submission.submitted_at).toLocaleDateString()}
            </span>
          )}
        </div>
      )}

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form fields */}
        {!showPreview && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Form Fields
            </h2>
            <FillableForm
              fields={fields}
              values={values}
              onChange={setValues}
              errors={errors}
              disabled={submission?.status === 'submitted'}
            />
          </div>
        )}

        {/* Preview */}
        <div className={`bg-white rounded-xl border border-gray-200 p-6 ${showPreview ? 'lg:col-span-2' : ''}`}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {showPreview ? 'Form Preview' : 'Live Preview'}
          </h2>
          <div className="prose prose-sm max-w-none">
            <MarkdownPreview content={filledContent} />
          </div>
        </div>
      </div>

      {/* Actions */}
      {(!submission || submission.status === 'draft') && (
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={() => navigate('/forms')}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveDraft}
            disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      )}
    </div>
  )
}
