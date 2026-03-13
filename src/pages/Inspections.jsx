import { useState, useEffect } from 'react'
import {
  Plus, Search, Edit2, Trash2, X, Save, ClipboardCheck, Calendar, User, CheckCircle, XCircle, MinusCircle
} from 'lucide-react'
import { getInspections, createInspection, updateInspection, deleteInspection } from '../lib/api'
import { format, parseISO } from 'date-fns'

const INSPECTION_TYPES = [
  'Workplace',
  'Equipment',
  'Site',
  'Vehicle',
  'PPE',
  'Fire Safety',
  'Electrical',
  'Environmental',
  'Other'
]

const RESULT_OPTIONS = [
  { value: 'pass', label: 'Pass', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  { value: 'conditional', label: 'Conditional', color: 'bg-yellow-100 text-yellow-700', icon: MinusCircle },
  { value: 'fail', label: 'Fail', color: 'bg-red-100 text-red-700', icon: XCircle }
]

const STATUS_OPTIONS = [
  { value: 'scheduled', label: 'Scheduled', color: 'bg-blue-100 text-blue-700' },
  { value: 'in_progress', label: 'In Progress', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'completed', label: 'Completed', color: 'bg-green-100 text-green-700' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-700' }
]

function InspectionModal({ inspection, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    inspection_type: 'Workplace',
    inspection_date: format(new Date(), 'yyyy-MM-dd'),
    location: '',
    equipment_name: '',
    inspector: '',
    checklist: [],
    findings: '',
    result: null,
    follow_up_required: false,
    follow_up_notes: '',
    status: 'scheduled',
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [newChecklistItem, setNewChecklistItem] = useState('')

  useEffect(() => {
    if (inspection) {
      setFormData({
        ...inspection,
        inspection_date: inspection.inspection_date || '',
        checklist: inspection.checklist || []
      })
    }
  }, [inspection])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const data = { ...formData }
      if (!data.result) delete data.result

      if (inspection) {
        await updateInspection(inspection.id, data)
      } else {
        await createInspection(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const addChecklistItem = () => {
    if (newChecklistItem) {
      setFormData(prev => ({
        ...prev,
        checklist: [...prev.checklist, { item: newChecklistItem, status: null, notes: '' }]
      }))
      setNewChecklistItem('')
    }
  }

  const updateChecklistItem = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      checklist: prev.checklist.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const removeChecklistItem = (index) => {
    setFormData(prev => ({
      ...prev,
      checklist: prev.checklist.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{inspection ? 'Edit Inspection' : 'New Inspection'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                placeholder="e.g., Monthly Workplace Safety Inspection"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
              <select
                required
                value={formData.inspection_type}
                onChange={(e) => setFormData({ ...formData, inspection_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                {INSPECTION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input
                type="date"
                required
                value={formData.inspection_date}
                onChange={(e) => setFormData({ ...formData, inspection_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Equipment (if applicable)</label>
              <input
                type="text"
                value={formData.equipment_name}
                onChange={(e) => setFormData({ ...formData, equipment_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inspector *</label>
              <input
                type="text"
                required
                value={formData.inspector}
                onChange={(e) => setFormData({ ...formData, inspector: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
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
          </div>

          {/* Checklist */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Checklist Items</label>
            {formData.checklist.length > 0 && (
              <div className="space-y-2 mb-4">
                {formData.checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-2">{item.item}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          {['pass', 'fail', 'na'].map(status => (
                            <button
                              key={status}
                              type="button"
                              onClick={() => updateChecklistItem(i, 'status', status)}
                              className={`px-2 py-1 text-xs rounded ${
                                item.status === status
                                  ? status === 'pass' ? 'bg-green-500 text-white'
                                    : status === 'fail' ? 'bg-red-500 text-white'
                                    : 'bg-gray-500 text-white'
                                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                              }`}
                            >
                              {status === 'na' ? 'N/A' : status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          value={item.notes || ''}
                          onChange={(e) => updateChecklistItem(i, 'notes', e.target.value)}
                          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                          placeholder="Notes..."
                        />
                      </div>
                    </div>
                    <button type="button" onClick={() => removeChecklistItem(i)} className="text-gray-400 hover:text-red-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={newChecklistItem}
                onChange={(e) => setNewChecklistItem(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addChecklistItem())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Add checklist item..."
              />
              <button type="button" onClick={addChecklistItem} className="px-3 py-2 bg-gray-100 rounded-lg text-sm">Add</button>
            </div>
          </div>

          {/* Findings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Findings</label>
            <textarea
              value={formData.findings}
              onChange={(e) => setFormData({ ...formData, findings: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Summary of inspection findings..."
            />
          </div>

          {/* Result */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Overall Result</label>
            <div className="flex gap-3">
              {RESULT_OPTIONS.map(r => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, result: r.value })}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                    formData.result === r.value
                      ? r.value === 'pass' ? 'border-green-500 bg-green-50'
                        : r.value === 'conditional' ? 'border-yellow-500 bg-yellow-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <r.icon className={`w-5 h-5 ${
                    r.value === 'pass' ? 'text-green-600'
                      : r.value === 'conditional' ? 'text-yellow-600'
                      : 'text-red-600'
                  }`} />
                  <span className="font-medium">{r.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Follow-up */}
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.follow_up_required}
                onChange={(e) => setFormData({ ...formData, follow_up_required: e.target.checked })}
                className="rounded border-gray-300 text-brand-600"
              />
              <span className="text-sm font-medium text-gray-700">Follow-up Required</span>
            </label>
            {formData.follow_up_required && (
              <textarea
                value={formData.follow_up_notes}
                onChange={(e) => setFormData({ ...formData, follow_up_notes: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Follow-up actions required..."
              />
            )}
          </div>

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
            {saving ? 'Saving...' : inspection ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Inspections() {
  const [inspections, setInspections] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingInspection, setEditingInspection] = useState(null)

  useEffect(() => {
    loadInspections()
  }, [showArchived])

  const loadInspections = async () => {
    try {
      const data = await getInspections(showArchived)
      setInspections(data)
    } catch (err) {
      console.error('Failed to load inspections:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (inspection) => {
    if (!confirm(`Delete inspection "${inspection.title}"?`)) return
    try {
      await deleteInspection(inspection.id)
      loadInspections()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const getResultBadge = (result) => {
    const config = RESULT_OPTIONS.find(r => r.value === result)
    if (!config) return null
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config.color}`}>{config.label}</span>
  }

  const getStatusBadge = (status) => {
    const config = STATUS_OPTIONS.find(s => s.value === status)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const filtered = inspections.filter(i => {
    if (filterType && i.inspection_type !== filterType) return false
    if (filterStatus && i.status !== filterStatus) return false
    if (search) {
      const s = search.toLowerCase()
      return i.title.toLowerCase().includes(s) || i.location?.toLowerCase().includes(s) || i.inspector?.toLowerCase().includes(s)
    }
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inspections</h1>
          <p className="text-gray-500">Schedule and record safety inspections</p>
        </div>
        <button onClick={() => { setEditingInspection(null); setModalOpen(true) }} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-5 h-5" />
          New Inspection
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search inspections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Types</option>
          {INSPECTION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
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
          <ClipboardCheck className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">{search || filterType || filterStatus ? 'No inspections match your filters' : 'No inspections recorded yet'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Inspection</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Inspector</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Result</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map(inspection => (
                <tr key={inspection.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900">{inspection.title}</p>
                      <p className="text-sm text-gray-500">{inspection.inspection_type}{inspection.location && ` - ${inspection.location}`}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-sm text-gray-600">
                    {inspection.inspection_date && format(parseISO(inspection.inspection_date), 'MMM d, yyyy')}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-sm text-gray-600">{inspection.inspector}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{getResultBadge(inspection.result)}</td>
                  <td className="px-4 py-3">{getStatusBadge(inspection.status)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => { setEditingInspection(inspection); setModalOpen(true) }} className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(inspection)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
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
        <InspectionModal
          inspection={editingInspection}
          onClose={() => { setModalOpen(false); setEditingInspection(null) }}
          onSave={() => { setModalOpen(false); setEditingInspection(null); loadInspections() }}
        />
      )}
    </div>
  )
}
