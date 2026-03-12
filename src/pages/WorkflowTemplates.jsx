/**
 * WorkflowTemplates.jsx
 * Create and manage workflow templates
 */

import { useState, useEffect } from 'react'
import {
  Plus,
  GitBranch,
  Edit2,
  Trash2,
  X,
  Save,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  XCircle,
  MessageSquare
} from 'lucide-react'
import {
  getWorkflowTemplates,
  createWorkflowTemplate,
  updateWorkflowTemplate,
  deleteWorkflowTemplate
} from '../lib/api'

const DEFAULT_ACTIONS = ['approve', 'reject', 'request_changes']

function StepEditor({ step, index, total, onChange, onDelete, onMoveUp, onMoveDown }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={index === 0}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <span className="text-sm text-center font-medium text-gray-500">{index + 1}</span>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={index === total - 1}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Step ID</label>
            <input
              type="text"
              value={step.id}
              onChange={(e) => onChange({ ...step, id: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '_') })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="e.g., review"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Step Name</label>
            <input
              type="text"
              value={step.name}
              onChange={(e) => onChange({ ...step, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="e.g., Manager Review"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Assignee Role (optional)</label>
            <input
              type="text"
              value={step.assignee_role || ''}
              onChange={(e) => onChange({ ...step, assignee_role: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="e.g., manager"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Available Actions</label>
            <div className="flex flex-wrap gap-2">
              {DEFAULT_ACTIONS.map(action => (
                <label key={action} className="inline-flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    checked={step.actions?.includes(action) || false}
                    onChange={(e) => {
                      const newActions = e.target.checked
                        ? [...(step.actions || []), action]
                        : (step.actions || []).filter(a => a !== action)
                      onChange({ ...step, actions: newActions })
                    }}
                    className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="capitalize">{action.replace('_', ' ')}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="inline-flex items-center gap-1 text-xs">
            <input
              type="checkbox"
              checked={step.final || false}
              onChange={(e) => onChange({ ...step, final: e.target.checked })}
              className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
            />
            Final
          </label>
          <button
            type="button"
            onClick={onDelete}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function TemplateModal({ template, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    steps: [
      { id: 'submit', name: 'Submit', order: 1, actions: ['approve', 'reject'] },
      { id: 'complete', name: 'Complete', order: 2, final: true, actions: [] }
    ],
    trigger_type: 'manual',
    trigger_form_types: [],
    status: 'active'
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (template) {
      setFormData({
        name: template.name || '',
        description: template.description || '',
        steps: template.steps || [],
        trigger_type: template.trigger_type || 'manual',
        trigger_form_types: template.trigger_form_types || [],
        status: template.status || 'active'
      })
    }
  }, [template])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name.trim()) {
      setError('Name is required')
      return
    }

    if (formData.steps.length === 0) {
      setError('At least one step is required')
      return
    }

    setSaving(true)
    try {
      // Update step order numbers
      const stepsWithOrder = formData.steps.map((step, index) => ({
        ...step,
        order: index + 1
      }))

      const data = {
        ...formData,
        steps: stepsWithOrder
      }

      if (template) {
        await updateWorkflowTemplate(template.id, data)
      } else {
        await createWorkflowTemplate(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const addStep = () => {
    const newStep = {
      id: `step_${formData.steps.length + 1}`,
      name: `Step ${formData.steps.length + 1}`,
      order: formData.steps.length + 1,
      actions: ['approve', 'reject']
    }
    setFormData(prev => ({ ...prev, steps: [...prev.steps, newStep] }))
  }

  const updateStep = (index, updatedStep) => {
    const newSteps = [...formData.steps]
    newSteps[index] = updatedStep
    setFormData(prev => ({ ...prev, steps: newSteps }))
  }

  const deleteStep = (index) => {
    setFormData(prev => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== index)
    }))
  }

  const moveStep = (index, direction) => {
    const newSteps = [...formData.steps]
    const targetIndex = index + direction
    if (targetIndex < 0 || targetIndex >= newSteps.length) return

    const temp = newSteps[index]
    newSteps[index] = newSteps[targetIndex]
    newSteps[targetIndex] = temp

    setFormData(prev => ({ ...prev, steps: newSteps }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {template ? 'Edit Workflow Template' : 'New Workflow Template'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {error && (
              <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Template Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="e.g., Form Approval Workflow"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Describe what this workflow is used for"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trigger Type
                </label>
                <select
                  value={formData.trigger_type}
                  onChange={(e) => setFormData({ ...formData, trigger_type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                >
                  <option value="manual">Manual</option>
                  <option value="form_submission">On Form Submission</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            {/* Steps */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Workflow Steps
                </label>
                <button
                  type="button"
                  onClick={addStep}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50 rounded-lg"
                >
                  <Plus className="w-4 h-4" />
                  Add Step
                </button>
              </div>
              <div className="space-y-3">
                {formData.steps.map((step, index) => (
                  <StepEditor
                    key={index}
                    step={step}
                    index={index}
                    total={formData.steps.length}
                    onChange={(updatedStep) => updateStep(index, updatedStep)}
                    onDelete={() => deleteStep(index)}
                    onMoveUp={() => moveStep(index, -1)}
                    onMoveDown={() => moveStep(index, 1)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : template ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function WorkflowTemplates() {
  const [templates, setTemplates] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState(null)

  useEffect(() => {
    loadTemplates()
  }, [])

  const loadTemplates = async () => {
    setLoading(true)
    try {
      const data = await getWorkflowTemplates(true)
      setTemplates(data)
    } catch (err) {
      console.error('Failed to load templates:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (template) => {
    if (!confirm(`Delete "${template.name}"? This cannot be undone.`)) return

    try {
      await deleteWorkflowTemplate(template.id)
      loadTemplates()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const getStatusBadge = (status) => {
    const config = {
      draft: 'bg-gray-100 text-gray-700',
      active: 'bg-green-100 text-green-700',
      archived: 'bg-red-100 text-red-700'
    }
    return (
      <span className={`px-2 py-0.5 rounded text-xs font-medium ${config[status] || config.draft}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workflow Templates</h1>
          <p className="text-gray-500">Create and manage reusable workflow configurations</p>
        </div>
        <button
          onClick={() => { setEditingTemplate(null); setModalOpen(true) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          New Template
        </button>
      </div>

      {/* Templates List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : templates.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <GitBranch className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No workflow templates yet</p>
          <button
            onClick={() => { setEditingTemplate(null); setModalOpen(true) }}
            className="mt-4 text-brand-600 hover:text-brand-700"
          >
            Create your first template
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {getStatusBadge(template.status)}
                      <span className="text-xs text-gray-500">
                        {template.steps?.length || 0} steps
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {template.description && (
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {template.description}
                </p>
              )}

              {/* Steps preview */}
              <div className="flex items-center gap-1 mb-4">
                {(template.steps || []).slice(0, 4).map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                      {index + 1}
                    </div>
                    {index < Math.min(template.steps?.length - 1, 3) && (
                      <div className="w-4 h-0.5 bg-gray-200" />
                    )}
                  </div>
                ))}
                {(template.steps?.length || 0) > 4 && (
                  <span className="text-xs text-gray-400 ml-1">
                    +{template.steps.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-end gap-1 pt-3 border-t border-gray-100">
                <button
                  onClick={() => { setEditingTemplate(template); setModalOpen(true) }}
                  className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(template)}
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Template Modal */}
      {modalOpen && (
        <TemplateModal
          template={editingTemplate}
          onClose={() => { setModalOpen(false); setEditingTemplate(null) }}
          onSave={() => { setModalOpen(false); setEditingTemplate(null); loadTemplates() }}
        />
      )}
    </div>
  )
}
