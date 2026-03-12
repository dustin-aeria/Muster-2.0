/**
 * WorkflowTasks.jsx
 * Task inbox for assigned workflow tasks
 */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CheckSquare,
  Clock,
  Calendar,
  User,
  FileText,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  XCircle,
  MessageSquare
} from 'lucide-react'
import { getMyWorkflowTasks, advanceWorkflow, getWorkflowTemplate } from '../lib/api'
import { format, parseISO, isAfter } from 'date-fns'

export default function WorkflowTasks() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [actionModal, setActionModal] = useState(null)
  const [comment, setComment] = useState('')
  const [processing, setProcessing] = useState(false)
  const [templates, setTemplates] = useState({})

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    setLoading(true)
    try {
      const data = await getMyWorkflowTasks()
      setTasks(data)

      // Load templates for each unique template_id
      const uniqueTemplateIds = [...new Set(data.map(t => t.template_id).filter(Boolean))]
      const templateData = {}
      for (const id of uniqueTemplateIds) {
        try {
          const template = await getWorkflowTemplate(id)
          templateData[id] = template
        } catch (err) {
          console.error('Failed to load template:', id, err)
        }
      }
      setTemplates(templateData)
    } catch (err) {
      console.error('Failed to load tasks:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAction = async (taskId, action) => {
    setProcessing(true)
    try {
      await advanceWorkflow(taskId, action, comment)
      setActionModal(null)
      setComment('')
      loadTasks()
    } catch (err) {
      alert('Failed to process action: ' + err.message)
    } finally {
      setProcessing(false)
    }
  }

  const getAvailableActions = (task) => {
    const template = templates[task.template_id]
    if (!template) return []

    const currentStep = template.steps?.find(s => s.id === task.current_step_id)
    return currentStep?.actions || []
  }

  const isOverdue = (task) => {
    if (!task.due_date) return false
    return isAfter(new Date(), parseISO(task.due_date))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Workflow Tasks</h1>
        <p className="text-gray-500">Tasks assigned to you for review or approval</p>
      </div>

      {/* Tasks List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <CheckSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No pending tasks</p>
          <p className="text-sm text-gray-400 mt-1">Tasks assigned to you will appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => {
            const overdue = isOverdue(task)
            const actions = getAvailableActions(task)

            return (
              <div
                key={task.id}
                className={`
                  bg-white rounded-xl border overflow-hidden
                  ${overdue ? 'border-red-200' : 'border-gray-200'}
                `}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                        ${overdue ? 'bg-red-100' : 'bg-brand-100'}
                      `}>
                        <FileText className={`w-5 h-5 ${overdue ? 'text-red-600' : 'text-brand-600'}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {task.entity_title || task.template_name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {task.template_name}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Step: {task.current_step_name}
                          </span>
                          {task.due_date && (
                            <span className={`flex items-center gap-1 ${overdue ? 'text-red-600' : ''}`}>
                              <Calendar className="w-4 h-4" />
                              Due: {format(parseISO(task.due_date), 'MMM d, yyyy')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {overdue && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                        Overdue
                      </span>
                    )}
                  </div>

                  {/* Quick actions */}
                  {actions.length > 0 && (
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                      {actions.includes('reject') && (
                        <button
                          onClick={() => setActionModal({ task, action: 'reject' })}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      )}
                      {actions.includes('request_changes') && (
                        <button
                          onClick={() => setActionModal({ task, action: 'request_changes' })}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-orange-600 hover:bg-orange-50 rounded-lg"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Request Changes
                        </button>
                      )}
                      {actions.includes('approve') && (
                        <button
                          onClick={() => setActionModal({ task, action: 'approve' })}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-green-600 hover:bg-green-700 rounded-lg"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                      )}
                      <div className="flex-1" />
                      <button
                        onClick={() => navigate(`/workflows/${task.id}`)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Action Modal */}
      {actionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {actionModal.action === 'approve' && 'Approve Task'}
              {actionModal.action === 'reject' && 'Reject Task'}
              {actionModal.action === 'request_changes' && 'Request Changes'}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {actionModal.task.entity_title || actionModal.task.template_name}
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comment {actionModal.action !== 'approve' && '(required)'}
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => { setActionModal(null); setComment('') }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAction(actionModal.task.id, actionModal.action)}
                disabled={processing || (actionModal.action !== 'approve' && !comment.trim())}
                className={`
                  px-4 py-2 text-white rounded-lg disabled:opacity-50
                  ${actionModal.action === 'approve' ? 'bg-green-600 hover:bg-green-700' :
                    actionModal.action === 'reject' ? 'bg-red-600 hover:bg-red-700' :
                    'bg-orange-600 hover:bg-orange-700'}
                `}
              >
                {processing ? 'Processing...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
