import { useState, useEffect } from 'react'
import {
  Plus, Search, Edit2, Trash2, X, Save, AlertTriangle, Calendar, User, MapPin, FileText
} from 'lucide-react'
import { getIncidents, createIncident, updateIncident, deleteIncident } from '../lib/api'
import { format, parseISO } from 'date-fns'

const SEVERITY_OPTIONS = [
  { value: 'near_miss', label: 'Near Miss', color: 'bg-blue-100 text-blue-700' },
  { value: 'minor', label: 'Minor', color: 'bg-green-100 text-green-700' },
  { value: 'moderate', label: 'Moderate', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'major', label: 'Major', color: 'bg-orange-100 text-orange-700' },
  { value: 'critical', label: 'Critical', color: 'bg-red-100 text-red-700' }
]

const STATUS_OPTIONS = [
  { value: 'open', label: 'Open', color: 'bg-red-100 text-red-700' },
  { value: 'investigating', label: 'Investigating', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'resolved', label: 'Resolved', color: 'bg-green-100 text-green-700' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-700' }
]

const INCIDENT_TYPES = [
  'Equipment Damage',
  'Injury',
  'Property Damage',
  'Environmental',
  'Flyaway',
  'Collision',
  'Near Miss',
  'Security',
  'Other'
]

function IncidentModal({ incident, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    incident_date: format(new Date(), 'yyyy-MM-dd'),
    incident_time: '',
    location: '',
    severity: 'near_miss',
    incident_type: '',
    description: '',
    immediate_actions: '',
    root_cause: '',
    reported_by: '',
    people_involved: [],
    witnesses: [],
    reportable: false,
    reported_to: [],
    report_reference: '',
    status: 'open',
    assigned_to: '',
    resolution: '',
    resolved_date: '',
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [newPerson, setNewPerson] = useState('')
  const [newWitness, setNewWitness] = useState('')

  useEffect(() => {
    if (incident) {
      setFormData({
        ...incident,
        incident_date: incident.incident_date || '',
        incident_time: incident.incident_time || '',
        resolved_date: incident.resolved_date || '',
        people_involved: incident.people_involved || [],
        witnesses: incident.witnesses || [],
        reported_to: incident.reported_to || []
      })
    }
  }, [incident])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const data = { ...formData }
      if (!data.incident_time) delete data.incident_time
      if (!data.resolved_date) delete data.resolved_date

      if (incident) {
        await updateIncident(incident.id, data)
      } else {
        await createIncident(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const addPerson = () => {
    if (newPerson && !formData.people_involved.includes(newPerson)) {
      setFormData(prev => ({ ...prev, people_involved: [...prev.people_involved, newPerson] }))
      setNewPerson('')
    }
  }

  const addWitness = () => {
    if (newWitness && !formData.witnesses.includes(newWitness)) {
      setFormData(prev => ({ ...prev, witnesses: [...prev.witnesses, newWitness] }))
      setNewWitness('')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{incident ? 'Edit Incident' : 'Log Incident'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

          {/* Title and Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                placeholder="Brief description of the incident"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input
                type="date"
                required
                value={formData.incident_date}
                onChange={(e) => setFormData({ ...formData, incident_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                value={formData.incident_time}
                onChange={(e) => setFormData({ ...formData, incident_time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reported By</label>
              <input
                type="text"
                value={formData.reported_by}
                onChange={(e) => setFormData({ ...formData, reported_by: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Classification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Severity *</label>
              <select
                required
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              >
                {SEVERITY_OPTIONS.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={formData.incident_type}
                onChange={(e) => setFormData({ ...formData, incident_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Select...</option>
                {INCIDENT_TYPES.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              >
                {STATUS_OPTIONS.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="Detailed description of what happened..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Immediate Actions Taken</label>
            <textarea
              value={formData.immediate_actions}
              onChange={(e) => setFormData({ ...formData, immediate_actions: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Root Cause</label>
            <textarea
              value={formData.root_cause}
              onChange={(e) => setFormData({ ...formData, root_cause: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>

          {/* People Involved */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">People Involved</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.people_involved.map((person, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-sm">
                  {person}
                  <button type="button" onClick={() => setFormData(prev => ({
                    ...prev,
                    people_involved: prev.people_involved.filter((_, idx) => idx !== i)
                  }))} className="hover:text-red-600"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newPerson}
                onChange={(e) => setNewPerson(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addPerson())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Add person..."
              />
              <button type="button" onClick={addPerson} className="px-3 py-2 bg-gray-100 rounded-lg text-sm">Add</button>
            </div>
          </div>

          {/* Regulatory */}
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.reportable}
                onChange={(e) => setFormData({ ...formData, reportable: e.target.checked })}
                className="rounded border-gray-300 text-brand-600"
              />
              <span className="text-sm font-medium text-gray-700">Reportable Incident</span>
            </label>
            {formData.reportable && (
              <div className="grid grid-cols-2 gap-4 pl-6">
                <input
                  type="text"
                  value={formData.reported_to.join(', ')}
                  onChange={(e) => setFormData({ ...formData, reported_to: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  placeholder="Reported to (comma-separated)"
                />
                <input
                  type="text"
                  value={formData.report_reference}
                  onChange={(e) => setFormData({ ...formData, report_reference: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  placeholder="Reference number"
                />
              </div>
            )}
          </div>

          {/* Assignment & Resolution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
              <input
                type="text"
                value={formData.assigned_to}
                onChange={(e) => setFormData({ ...formData, assigned_to: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Resolved Date</label>
              <input
                type="date"
                value={formData.resolved_date}
                onChange={(e) => setFormData({ ...formData, resolved_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Resolution</label>
            <textarea
              value={formData.resolution}
              onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </form>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
          <button onClick={handleSubmit} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : incident ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterSeverity, setFilterSeverity] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingIncident, setEditingIncident] = useState(null)

  useEffect(() => {
    loadIncidents()
  }, [showArchived])

  const loadIncidents = async () => {
    try {
      const data = await getIncidents(showArchived)
      setIncidents(data)
    } catch (err) {
      console.error('Failed to load incidents:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (incident) => {
    if (!confirm(`Delete incident "${incident.title}"?`)) return
    try {
      await deleteIncident(incident.id)
      loadIncidents()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const getSeverityBadge = (severity) => {
    const config = SEVERITY_OPTIONS.find(s => s.value === severity)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const getStatusBadge = (status) => {
    const config = STATUS_OPTIONS.find(s => s.value === status)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const filtered = incidents.filter(i => {
    if (filterSeverity && i.severity !== filterSeverity) return false
    if (filterStatus && i.status !== filterStatus) return false
    if (search) {
      const s = search.toLowerCase()
      return i.title.toLowerCase().includes(s) || i.location?.toLowerCase().includes(s) || i.description?.toLowerCase().includes(s)
    }
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Incidents</h1>
          <p className="text-gray-500">Log and track safety incidents</p>
        </div>
        <button onClick={() => { setEditingIncident(null); setModalOpen(true) }} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-5 h-5" />
          Log Incident
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search incidents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <select value={filterSeverity} onChange={(e) => setFilterSeverity(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Severities</option>
          {SEVERITY_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
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
          <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">{search || filterSeverity || filterStatus ? 'No incidents match your filters' : 'No incidents logged yet'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Incident</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Location</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Severity</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Status</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map(incident => (
                <tr key={incident.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900">{incident.title}</p>
                      {incident.incident_type && <p className="text-sm text-gray-500">{incident.incident_type}</p>}
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-sm text-gray-600">
                    {incident.incident_date && format(parseISO(incident.incident_date), 'MMM d, yyyy')}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-sm text-gray-600">{incident.location}</td>
                  <td className="px-4 py-3">{getSeverityBadge(incident.severity)}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{getStatusBadge(incident.status)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => { setEditingIncident(incident); setModalOpen(true) }} className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(incident)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
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
        <IncidentModal
          incident={editingIncident}
          onClose={() => { setModalOpen(false); setEditingIncident(null) }}
          onSave={() => { setModalOpen(false); setEditingIncident(null); loadIncidents() }}
        />
      )}
    </div>
  )
}
