/**
 * Workflows.jsx
 * List all workflow instances
 */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GitBranch,
  Search,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
  ChevronRight,
  Calendar,
  User,
  FileText
} from 'lucide-react'
import { getWorkflowInstances, getWorkflowTemplate } from '../lib/api'
import { format, parseISO } from 'date-fns'

const STATUS_CONFIG = {
  active: { label: 'Active', color: 'bg-blue-100 text-blue-700', icon: Clock },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-700', icon: XCircle }
}

export default function Workflows() {
  const navigate = useNavigate()
  const [instances, setInstances] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [templates, setTemplates] = useState({})

  useEffect(() => {
    loadInstances()
  }, [filterStatus])

  const loadInstances = async () => {
    setLoading(true)
    try {
      const data = await getWorkflowInstances(filterStatus || null)
      setInstances(data)

      // Load templates
      const uniqueTemplateIds = [...new Set(data.map(i => i.template_id).filter(Boolean))]
      const templateData = {}
      for (const id of uniqueTemplateIds) {
        try {
          const template = await getWorkflowTemplate(id)
          templateData[id] = template
        } catch (err) {
          console.error('Failed to load template:', id)
        }
      }
      setTemplates(templateData)
    } catch (err) {
      console.error('Failed to load workflows:', err)
    } finally {
      setLoading(false)
    }
  }

  const filteredInstances = instances.filter(inst => {
    if (search) {
      const searchLower = search.toLowerCase()
      return (
        inst.entity_title?.toLowerCase().includes(searchLower) ||
        inst.template_name?.toLowerCase().includes(searchLower)
      )
    }
    return true
  })

  const getProgress = (instance) => {
    const template = templates[instance.template_id]
    if (!template?.steps) return { current: 0, total: 0 }

    const currentIndex = template.steps.findIndex(s => s.id === instance.current_step_id)
    return {
      current: instance.status === 'completed' ? template.steps.length : currentIndex + 1,
      total: template.steps.length
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Workflows</h1>
          <p className="text-gray-500">Track workflow progress across your organization</p>
        </div>
        <button
          onClick={() => navigate('/workflow-templates')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <GitBranch className="w-5 h-5" />
          Manage Templates
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search workflows..."
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
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Workflows List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : filteredInstances.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <GitBranch className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            {search || filterStatus ? 'No workflows match your search' : 'No workflows yet'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Workflow</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Progress</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Assigned To</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Started</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInstances.map((inst) => {
                const status = STATUS_CONFIG[inst.status] || STATUS_CONFIG.active
                const StatusIcon = status.icon
                const progress = getProgress(inst)

                return (
                  <tr key={inst.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <GitBranch className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">{inst.entity_title || 'Unnamed'}</p>
                          <p className="text-sm text-gray-500">{inst.template_name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              inst.status === 'completed' ? 'bg-green-500' :
                              inst.status === 'cancelled' ? 'bg-red-500' : 'bg-brand-500'
                            }`}
                            style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-500">
                          {progress.current}/{progress.total}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${status.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {inst.assigned_to_name ? (
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          <User className="w-4 h-4" />
                          {inst.assigned_to_name}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {inst.started_at && format(parseISO(inst.started_at), 'MMM d, yyyy')}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => navigate(`/workflows/${inst.id}`)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                      >
                        View
                        <ChevronRight className="w-4 h-4" />
                      </button>
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
