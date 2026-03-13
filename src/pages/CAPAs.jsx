import { useState, useEffect } from 'react'
import {
  Plus, Search, Edit2, Trash2, X, Save, CheckCircle, Calendar, User, AlertCircle
} from 'lucide-react'
import { getCAPAs, createCAPA, updateCAPA, deleteCAPA } from '../lib/api'
import { format, parseISO, isPast, isToday } from 'date-fns'

const CAPA_TYPES = [
  { value: 'corrective', label: 'Corrective', color: 'bg-orange-100 text-orange-700' },
  { value: 'preventive', label: 'Preventive', color: 'bg-blue-100 text-blue-700' }
]

const STATUS_OPTIONS = [
  { value: 'open', label: 'Open', color: 'bg-red-100 text-red-700' },
  { value: 'in_progress', label: 'In Progress', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'completed', label: 'Completed', color: 'bg-green-100 text-green-700' },
  { value: 'verified', label: 'Verified', color: 'bg-blue-100 text-blue-700' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-700' }
]

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low', color: 'bg-gray-100 text-gray-700' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'high', label: 'High', color: 'bg-orange-100 text-orange-700' },
  { value: 'critical', label: 'Critical', color: 'bg-red-100 text-red-700' }
]

const SOURCE_TYPES = [
  { value: 'incident', label: 'Incident' },
  { value: 'inspection', label: 'Inspection' },
  { value: 'audit', label: 'Audit' },
  { value: 'observation', label: 'Observation' },
  { value: 'other', label: 'Other' }
]

function CAPAModal({ capa, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    capa_type: 'corrective',
    source_type: '',
    source_reference: '',
    description: '',
    action_required: '',
    assigned_to: '',
    due_date: '',
    status: 'open',
    priority: 'medium',
    completion_date: '',
    verification_notes: '',
    verified_by: '',
    verified_date: '',
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (capa) {
      setFormData({
        ...capa,
        due_date: capa.due_date || '',
        completion_date: capa.completion_date || '',
        verified_date: capa.verified_date || ''
      })
    }
  }, [capa])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const data = { ...formData }
      if (!data.due_date) delete data.due_date
      if (!data.completion_date) delete data.completion_date
      if (!data.verified_date) delete data.verified_date

      if (capa) {
        await updateCAPA(capa.id, data)
      } else {
        await createCAPA(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{capa ? 'Edit CAPA' : 'New CAPA'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
              <select
                required
                value={formData.capa_type}
                onChange={(e) => setFormData({ ...formData, capa_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                {CAPA_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                {PRIORITY_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                value={formData.due_date}
                onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Source Type</label>
              <select
                value={formData.source_type}
                onChange={(e) => setFormData({ ...formData, source_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                {SOURCE_TYPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Source Reference</label>
              <input
                type="text"
                value={formData.source_reference}
                onChange={(e) => setFormData({ ...formData, source_reference: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="e.g., Incident #123"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Action Required *</label>
            <textarea
              required
              value={formData.action_required}
              onChange={(e) => setFormData({ ...formData, action_required: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Specific actions that need to be taken..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
            <input
              type="text"
              value={formData.assigned_to}
              onChange={(e) => setFormData({ ...formData, assigned_to: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Completion */}
          {(formData.status === 'completed' || formData.status === 'verified') && (
            <div className="p-4 bg-green-50 rounded-lg space-y-4">
              <h3 className="font-medium text-green-800">Completion Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
                  <input
                    type="date"
                    value={formData.completion_date}
                    onChange={(e) => setFormData({ ...formData, completion_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Verification */}
          {formData.status === 'verified' && (
            <div className="p-4 bg-blue-50 rounded-lg space-y-4">
              <h3 className="font-medium text-blue-800">Verification Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Verification Notes</label>
                <textarea
                  value={formData.verification_notes}
                  onChange={(e) => setFormData({ ...formData, verification_notes: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Verified By</label>
                  <input
                    type="text"
                    value={formData.verified_by}
                    onChange={(e) => setFormData({ ...formData, verified_by: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Verified Date</label>
                  <input
                    type="date"
                    value={formData.verified_date}
                    onChange={(e) => setFormData({ ...formData, verified_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </form>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
          <button onClick={handleSubmit} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : capa ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CAPAs() {
  const [capas, setCAPAs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterType, setFilterType] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingCAPA, setEditingCAPA] = useState(null)

  useEffect(() => {
    loadCAPAs()
  }, [showArchived])

  const loadCAPAs = async () => {
    try {
      const data = await getCAPAs(showArchived)
      setCAPAs(data)
    } catch (err) {
      console.error('Failed to load CAPAs:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (capa) => {
    if (!confirm(`Delete CAPA "${capa.title}"?`)) return
    try {
      await deleteCAPA(capa.id)
      loadCAPAs()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const getTypeBadge = (type) => {
    const config = CAPA_TYPES.find(t => t.value === type)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const getStatusBadge = (status) => {
    const config = STATUS_OPTIONS.find(s => s.value === status)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const getPriorityBadge = (priority) => {
    const config = PRIORITY_OPTIONS.find(p => p.value === priority)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const isOverdue = (capa) => {
    if (!capa.due_date || capa.status === 'completed' || capa.status === 'verified' || capa.status === 'archived') return false
    return isPast(parseISO(capa.due_date)) && !isToday(parseISO(capa.due_date))
  }

  const filtered = capas.filter(c => {
    if (filterStatus && c.status !== filterStatus) return false
    if (filterType && c.capa_type !== filterType) return false
    if (search) {
      const s = search.toLowerCase()
      return c.title.toLowerCase().includes(s) || c.action_required?.toLowerCase().includes(s) || c.assigned_to?.toLowerCase().includes(s)
    }
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CAPAs</h1>
          <p className="text-gray-500">Corrective and Preventive Actions</p>
        </div>
        <button onClick={() => { setEditingCAPA(null); setModalOpen(true) }} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-5 h-5" />
          New CAPA
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search CAPAs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Types</option>
          {CAPA_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Statuses</option>
          {STATUS_OPTIONS.filter(s => s.value !== 'archived').map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <label className="inline-flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={showArchived} onChange={(e) => setShowArchived(e.target.checked)} className="rounded border-gray-300" />
          Archived
        </label>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">{search || filterStatus || filterType ? 'No CAPAs match your filters' : 'No CAPAs created yet'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">CAPA</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Type</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Assigned To</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Due Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map(capa => (
                <tr key={capa.id} className={`hover:bg-gray-50 ${isOverdue(capa) ? 'bg-red-50' : ''}`}>
                  <td className="px-4 py-3">
                    <div className="flex items-start gap-2">
                      {isOverdue(capa) && <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />}
                      <div>
                        <p className="font-medium text-gray-900">{capa.title}</p>
                        {capa.source_reference && <p className="text-sm text-gray-500">{capa.source_reference}</p>}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">{getTypeBadge(capa.capa_type)}</td>
                  <td className="px-4 py-3 hidden lg:table-cell text-sm text-gray-600">{capa.assigned_to}</td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    {capa.due_date && (
                      <span className={`text-sm ${isOverdue(capa) ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                        {format(parseISO(capa.due_date), 'MMM d, yyyy')}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">{getStatusBadge(capa.status)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => { setEditingCAPA(capa); setModalOpen(true) }} className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(capa)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <CAPAModal
          capa={editingCAPA}
          onClose={() => { setModalOpen(false); setEditingCAPA(null) }}
          onSave={() => { setModalOpen(false); setEditingCAPA(null); loadCAPAs() }}
        />
      )}
    </div>
  )
}
