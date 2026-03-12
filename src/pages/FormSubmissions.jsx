/**
 * FormSubmissions.jsx
 * List page showing all form submissions with filters
 */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search,
  Filter,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Edit2,
  Eye,
  Trash2,
  Send,
  Printer,
  Calendar
} from 'lucide-react'
import { getFormSubmissions, deleteFormSubmission, getDocument } from '../lib/api'
import { generateFilledMarkdown } from '../lib/formParser'
import { printFormSubmission } from '../lib/pdfGenerator'
import { format, parseISO } from 'date-fns'

const STATUS_CONFIG = {
  draft: { label: 'Draft', color: 'bg-gray-100 text-gray-700', icon: Clock },
  submitted: { label: 'Submitted', color: 'bg-blue-100 text-blue-700', icon: Send },
  approved: { label: 'Approved', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  rejected: { label: 'Rejected', color: 'bg-red-100 text-red-700', icon: XCircle }
}

export default function FormSubmissions() {
  const navigate = useNavigate()
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [formTemplates, setFormTemplates] = useState({})

  useEffect(() => {
    loadSubmissions()
  }, [filterStatus])

  const loadSubmissions = async () => {
    setLoading(true)
    try {
      const data = await getFormSubmissions(null, filterStatus || null)
      setSubmissions(data)
    } catch (err) {
      console.error('Failed to load submissions:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (submission) => {
    if (!confirm(`Delete this submission? This cannot be undone.`)) return

    try {
      await deleteFormSubmission(submission.id)
      loadSubmissions()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const handlePrint = async (submission) => {
    try {
      // Get the form template if we don't have it cached
      let template = formTemplates[submission.form_id]
      if (!template && submission.form_id) {
        template = await getDocument(submission.form_id)
        setFormTemplates(prev => ({ ...prev, [submission.form_id]: template }))
      }

      if (template) {
        const filledContent = generateFilledMarkdown(template.content, submission.field_values)
        printFormSubmission(submission, filledContent)
      } else {
        // Fallback if template not available
        printFormSubmission(submission, JSON.stringify(submission.field_values, null, 2))
      }
    } catch (err) {
      console.error('Failed to print:', err)
      alert('Failed to print: ' + err.message)
    }
  }

  const filteredSubmissions = submissions.filter(sub => {
    if (search) {
      const searchLower = search.toLowerCase()
      return (
        sub.form_title?.toLowerCase().includes(searchLower) ||
        sub.form_number?.toLowerCase().includes(searchLower)
      )
    }
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Form Submissions</h1>
          <p className="text-gray-500">View and manage submitted forms</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search submissions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        >
          <option value="">All Status</option>
          <option value="draft">Draft</option>
          <option value="submitted">Submitted</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Submissions List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            {search || filterStatus ? 'No submissions match your search' : 'No form submissions yet'}
          </p>
          <button
            onClick={() => navigate('/forms')}
            className="mt-4 text-brand-600 hover:text-brand-700"
          >
            Fill out a form
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Form</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Created</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Submitted</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSubmissions.map((sub) => {
                const status = STATUS_CONFIG[sub.status] || STATUS_CONFIG.draft
                const StatusIcon = status.icon

                return (
                  <tr key={sub.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">{sub.form_title}</p>
                          {sub.form_number && (
                            <p className="text-sm text-gray-500">{sub.form_number}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${status.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {sub.created_at && format(parseISO(sub.created_at), 'MMM d, yyyy')}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {sub.submitted_at ? (
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(parseISO(sub.submitted_at), 'MMM d, yyyy')}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {sub.status === 'draft' ? (
                          <button
                            onClick={() => navigate(`/forms/${sub.form_id}/fill?submission=${sub.id}`)}
                            className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                            title="Continue editing"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => navigate(`/form-submissions/${sub.id}`)}
                            className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                            title="View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handlePrint(sub)}
                          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                          title="Print"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                        {sub.status === 'draft' && (
                          <button
                            onClick={() => handleDelete(sub)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
