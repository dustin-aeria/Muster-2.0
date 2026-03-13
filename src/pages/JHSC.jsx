import { useState, useEffect } from 'react'
import {
  Plus, Search, Edit2, Trash2, X, Save, Users, Calendar, Clock, CheckSquare
} from 'lucide-react'
import { getJHSCMeetings, createJHSCMeeting, updateJHSCMeeting, deleteJHSCMeeting } from '../lib/api'
import { format, parseISO } from 'date-fns'

const MEETING_TYPES = [
  { value: 'regular', label: 'Regular', color: 'bg-blue-100 text-blue-700' },
  { value: 'special', label: 'Special', color: 'bg-purple-100 text-purple-700' },
  { value: 'emergency', label: 'Emergency', color: 'bg-red-100 text-red-700' }
]

const STATUS_OPTIONS = [
  { value: 'scheduled', label: 'Scheduled', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'completed', label: 'Completed', color: 'bg-green-100 text-green-700' },
  { value: 'cancelled', label: 'Cancelled', color: 'bg-gray-100 text-gray-700' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-700' }
]

function JHSCModal({ meeting, onClose, onSave }) {
  const [formData, setFormData] = useState({
    meeting_date: format(new Date(), 'yyyy-MM-dd'),
    meeting_time: '',
    location: '',
    meeting_type: 'regular',
    attendees: [],
    chair: '',
    secretary: '',
    agenda: '',
    minutes: '',
    action_items: [],
    status: 'scheduled',
    next_meeting_date: '',
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [newAttendee, setNewAttendee] = useState('')
  const [newActionItem, setNewActionItem] = useState({ description: '', assigned_to: '', due_date: '' })

  useEffect(() => {
    if (meeting) {
      setFormData({
        ...meeting,
        meeting_date: meeting.meeting_date || '',
        meeting_time: meeting.meeting_time || '',
        next_meeting_date: meeting.next_meeting_date || '',
        attendees: meeting.attendees || [],
        action_items: meeting.action_items || []
      })
    }
  }, [meeting])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const data = { ...formData }
      if (!data.meeting_time) delete data.meeting_time
      if (!data.next_meeting_date) delete data.next_meeting_date

      if (meeting) {
        await updateJHSCMeeting(meeting.id, data)
      } else {
        await createJHSCMeeting(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const addAttendee = () => {
    if (newAttendee && !formData.attendees.includes(newAttendee)) {
      setFormData(prev => ({ ...prev, attendees: [...prev.attendees, newAttendee] }))
      setNewAttendee('')
    }
  }

  const addActionItem = () => {
    if (newActionItem.description) {
      setFormData(prev => ({
        ...prev,
        action_items: [...prev.action_items, { ...newActionItem, status: 'open' }]
      }))
      setNewActionItem({ description: '', assigned_to: '', due_date: '' })
    }
  }

  const toggleActionItemStatus = (index) => {
    setFormData(prev => ({
      ...prev,
      action_items: prev.action_items.map((item, i) =>
        i === index ? { ...item, status: item.status === 'open' ? 'completed' : 'open' } : item
      )
    }))
  }

  const removeActionItem = (index) => {
    setFormData(prev => ({
      ...prev,
      action_items: prev.action_items.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{meeting ? 'Edit Meeting' : 'Schedule Meeting'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

          {/* Meeting Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input
                type="date"
                required
                value={formData.meeting_date}
                onChange={(e) => setFormData({ ...formData, meeting_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                value={formData.meeting_time}
                onChange={(e) => setFormData({ ...formData, meeting_time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={formData.meeting_type}
                onChange={(e) => setFormData({ ...formData, meeting_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                {MEETING_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Chair</label>
              <input
                type="text"
                value={formData.chair}
                onChange={(e) => setFormData({ ...formData, chair: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secretary</label>
              <input
                type="text"
                value={formData.secretary}
                onChange={(e) => setFormData({ ...formData, secretary: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Attendees */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Attendees</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.attendees.map((person, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-sm">
                  {person}
                  <button type="button" onClick={() => setFormData(prev => ({
                    ...prev,
                    attendees: prev.attendees.filter((_, idx) => idx !== i)
                  }))} className="hover:text-red-600"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newAttendee}
                onChange={(e) => setNewAttendee(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addAttendee())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Add attendee..."
              />
              <button type="button" onClick={addAttendee} className="px-3 py-2 bg-gray-100 rounded-lg text-sm">Add</button>
            </div>
          </div>

          {/* Agenda */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Agenda</label>
            <textarea
              value={formData.agenda}
              onChange={(e) => setFormData({ ...formData, agenda: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Meeting agenda items..."
            />
          </div>

          {/* Minutes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Minutes</label>
            <textarea
              value={formData.minutes}
              onChange={(e) => setFormData({ ...formData, minutes: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Meeting minutes and discussion notes..."
            />
          </div>

          {/* Action Items */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Action Items</label>
            {formData.action_items.length > 0 && (
              <div className="space-y-2 mb-4">
                {formData.action_items.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${item.status === 'completed' ? 'bg-green-50' : 'bg-gray-50'}`}>
                    <button
                      type="button"
                      onClick={() => toggleActionItemStatus(i)}
                      className={`mt-0.5 ${item.status === 'completed' ? 'text-green-600' : 'text-gray-400'}`}
                    >
                      <CheckSquare className="w-5 h-5" />
                    </button>
                    <div className="flex-1">
                      <p className={`text-sm ${item.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {item.description}
                      </p>
                      <div className="flex gap-4 mt-1 text-xs text-gray-500">
                        {item.assigned_to && <span>Assigned: {item.assigned_to}</span>}
                        {item.due_date && <span>Due: {format(parseISO(item.due_date), 'MMM d')}</span>}
                      </div>
                    </div>
                    <button type="button" onClick={() => removeActionItem(i)} className="text-gray-400 hover:text-red-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <input
                type="text"
                value={newActionItem.description}
                onChange={(e) => setNewActionItem({ ...newActionItem, description: e.target.value })}
                className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Action item description..."
              />
              <input
                type="text"
                value={newActionItem.assigned_to}
                onChange={(e) => setNewActionItem({ ...newActionItem, assigned_to: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Assigned to..."
              />
              <div className="flex gap-2">
                <input
                  type="date"
                  value={newActionItem.due_date}
                  onChange={(e) => setNewActionItem({ ...newActionItem, due_date: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <button type="button" onClick={addActionItem} className="px-3 py-2 bg-gray-100 rounded-lg text-sm">Add</button>
              </div>
            </div>
          </div>

          {/* Next Meeting */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Next Meeting Date</label>
            <input
              type="date"
              value={formData.next_meeting_date}
              onChange={(e) => setFormData({ ...formData, next_meeting_date: e.target.value })}
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg"
            />
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
            {saving ? 'Saving...' : meeting ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function JHSC() {
  const [meetings, setMeetings] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingMeeting, setEditingMeeting] = useState(null)

  useEffect(() => {
    loadMeetings()
  }, [showArchived])

  const loadMeetings = async () => {
    try {
      const data = await getJHSCMeetings(showArchived)
      setMeetings(data)
    } catch (err) {
      console.error('Failed to load meetings:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (meeting) => {
    if (!confirm(`Delete this meeting?`)) return
    try {
      await deleteJHSCMeeting(meeting.id)
      loadMeetings()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const getTypeBadge = (type) => {
    const config = MEETING_TYPES.find(t => t.value === type)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const getStatusBadge = (status) => {
    const config = STATUS_OPTIONS.find(s => s.value === status)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const filtered = meetings.filter(m => {
    if (filterStatus && m.status !== filterStatus) return false
    if (search) {
      const s = search.toLowerCase()
      return m.location?.toLowerCase().includes(s) || m.chair?.toLowerCase().includes(s) || m.agenda?.toLowerCase().includes(s)
    }
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">JHSC Meetings</h1>
          <p className="text-gray-500">Joint Health & Safety Committee</p>
        </div>
        <button onClick={() => { setEditingMeeting(null); setModalOpen(true) }} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-5 h-5" />
          Schedule Meeting
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search meetings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
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
          <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">{search || filterStatus ? 'No meetings match your filters' : 'No JHSC meetings scheduled'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Type</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Location</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Chair</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map(meeting => (
                <tr key={meeting.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900">
                        {meeting.meeting_date && format(parseISO(meeting.meeting_date), 'MMM d, yyyy')}
                      </p>
                      {meeting.meeting_time && <p className="text-sm text-gray-500">{meeting.meeting_time}</p>}
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">{getTypeBadge(meeting.meeting_type)}</td>
                  <td className="px-4 py-3 hidden lg:table-cell text-sm text-gray-600">{meeting.location}</td>
                  <td className="px-4 py-3 hidden md:table-cell text-sm text-gray-600">{meeting.chair}</td>
                  <td className="px-4 py-3">{getStatusBadge(meeting.status)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => { setEditingMeeting(meeting); setModalOpen(true) }} className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(meeting)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
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
        <JHSCModal
          meeting={editingMeeting}
          onClose={() => { setModalOpen(false); setEditingMeeting(null) }}
          onSave={() => { setModalOpen(false); setEditingMeeting(null); loadMeetings() }}
        />
      )}
    </div>
  )
}
