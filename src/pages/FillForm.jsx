/**
 * FillForm.jsx
 * Fill out a form - same look as preview, but editable fields
 */

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Save,
  Send,
  Printer,
  FileText,
  AlertCircle,
  CheckCircle,
  RotateCcw
} from 'lucide-react'
import { getDocument, createFormSubmission, submitFormSubmission } from '../lib/api'
import { generateFilledMarkdown } from '../lib/formParser'
import { printFormSubmission } from '../lib/pdfGenerator'
import InteractiveForm, { getFieldsFromContent } from '../components/InteractiveForm'
import aeriaLogoFull from '../assets/aeria-logo-full.png'

export default function FillForm() {
  const { formId } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState(null)
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    loadForm()
  }, [formId])

  const loadForm = async () => {
    setLoading(true)
    try {
      const formData = await getDocument(formId)
      setForm(formData)
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to load form: ' + err.message })
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    if (Object.keys(values).length > 0) {
      if (!confirm('Clear all entered data?')) return
    }
    setValues({})
    setMessage({ type: '', text: '' })
  }

  const handlePrint = () => {
    const filledContent = generateFilledMarkdown(form.content, values)
    printFormSubmission(
      { form_title: form.title, form_number: form.doc_number },
      filledContent
    )
  }

  const handleSubmit = async () => {
    // Check if any fields are filled
    const filledValues = Object.entries(values).filter(([k, v]) => v !== '' && v !== null && v !== undefined)
    if (filledValues.length === 0) {
      setMessage({ type: 'error', text: 'Please fill in at least one field before submitting.' })
      return
    }

    setSubmitting(true)
    setMessage({ type: '', text: '' })

    try {
      // Create and immediately submit
      const submission = await createFormSubmission({
        form_id: formId,
        form_title: form.title,
        form_number: form.doc_number,
        field_values: values,
        status: 'draft'
      })

      await submitFormSubmission(submission.id)

      setMessage({ type: 'success', text: 'Form submitted successfully! Ready for next entry.' })

      // Reset form for next entry
      setValues({})

      // Clear success message after 3 seconds
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)

    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to submit: ' + err.message })
    } finally {
      setSubmitting(false)
    }
  }

  // Progress calculation
  const fields = form ? getFieldsFromContent(form.content) : []
  const filledCount = fields.filter(f => {
    const val = values[f.id]
    return val !== undefined && val !== null && val !== ''
  }).length

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
        <button onClick={() => navigate('/forms')} className="mt-4 text-brand-600 hover:text-brand-700">
          Back to Forms
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Simple header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/forms')} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{form.title}</h1>
            {form.doc_number && <p className="text-sm text-gray-500">{form.doc_number}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {fields.length > 0 && (
            <span className="text-sm text-gray-500 mr-2">
              {filledCount}/{fields.length} filled
            </span>
          )}
          <button
            onClick={handleReset}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
            title="Reset form"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={handlePrint}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
            title="Print"
          >
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
          'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {message.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* The Form - same visual as preview but with editable cells */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Form header matching document style */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              {form.doc_number && (
                <p className="text-sm font-bold text-[#131CD0] mb-1">{form.doc_number}</p>
              )}
              <h2 className="text-2xl font-bold text-[#132163]">{form.title}</h2>
              {form.category && (
                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {form.category}
                </span>
              )}
            </div>
            <img src={aeriaLogoFull} alt="AERIA" className="h-12 w-auto hidden sm:block" />
          </div>
        </div>

        {/* Form content with interactive fields */}
        <div className="p-8">
          <InteractiveForm
            content={form.content}
            values={values}
            onChange={setValues}
            disabled={submitting}
          />
        </div>
      </div>

      {/* Submit actions */}
      <div className="flex items-center justify-end gap-3 mt-6">
        <button
          onClick={() => navigate('/forms')}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#131CD0] text-white rounded-lg hover:bg-[#0f18a8] disabled:opacity-50 font-medium"
        >
          <Send className="w-4 h-4" />
          {submitting ? 'Submitting...' : 'Submit Form'}
        </button>
      </div>
    </div>
  )
}
