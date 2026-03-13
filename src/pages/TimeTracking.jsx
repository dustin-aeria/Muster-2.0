import { useState, useEffect } from 'react'
import {
  Plus, Search, Edit2, Trash2, X, Save, Clock, Calendar, DollarSign
} from 'lucide-react'
import { getTimeEntries, createTimeEntry, updateTimeEntry, deleteTimeEntry, getOperators } from '../lib/api'
import { format, parseISO, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns'

const CATEGORIES = [
  'Field Work',
  'Planning',
  'Data Processing',
  'Administration',
  'Travel',
  'Training',
  'Meetings',
  'Documentation',
  'Other'
]

function TimeEntryModal({ entry, operators, onClose, onSave }) {
  const [formData, setFormData] = useState({
    description: '',
    project_name: '',
    task_name: '',
    operator_name: '',
    entry_date: format(new Date(), 'yyyy-MM-dd'),
    hours: '',
    rate_type: 'hourly',
    rate_amount: '',
    billable: true,
    category: '',
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (entry) {
      setFormData({
        ...entry,
        entry_date: entry.entry_date || '',
        hours: entry.hours?.toString() || '',
        rate_amount: entry.rate_amount?.toString() || ''
      })
    }
  }, [entry])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const data = {
        ...formData,
        hours: parseFloat(formData.hours) || 0,
        rate_amount: formData.rate_amount ? parseFloat(formData.rate_amount) : null
      }

      if (entry) {
        await updateTimeEntry(entry.id, data)
      } else {
        await createTimeEntry(data)
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
      <div className="bg-white rounded-xl max-w-xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{entry ? 'Edit Time Entry' : 'Log Time'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <input
              type="text"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="What did you work on?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input
                type="date"
                required
                value={formData.entry_date}
                onChange={(e) => setFormData({ ...formData, entry_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hours *</label>
              <input
                type="number"
                required
                step="0.25"
                min="0"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
              <input
                type="text"
                value={formData.project_name}
                onChange={(e) => setFormData({ ...formData, project_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Task</label>
              <input
                type="text"
                value={formData.task_name}
                onChange={(e) => setFormData({ ...formData, task_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Operator</label>
              <select
                value={formData.operator_name}
                onChange={(e) => setFormData({ ...formData, operator_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                {operators.map(op => (
                  <option key={op.id} value={op.name}>{op.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rate Type</label>
              <select
                value={formData.rate_type}
                onChange={(e) => setFormData({ ...formData, rate_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rate ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={formData.rate_amount}
                onChange={(e) => setFormData({ ...formData, rate_amount: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="0.00"
              />
            </div>
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.billable}
                  onChange={(e) => setFormData({ ...formData, billable: e.target.checked })}
                  className="rounded border-gray-300 text-brand-600"
                />
                <span className="text-sm font-medium text-gray-700">Billable</span>
              </label>
            </div>
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
            {saving ? 'Saving...' : entry ? 'Update' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function TimeTracking() {
  const [entries, setEntries] = useState([])
  const [operators, setOperators] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [dateRange, setDateRange] = useState('week')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingEntry, setEditingEntry] = useState(null)

  useEffect(() => {
    loadData()
  }, [dateRange])

  const loadData = async () => {
    try {
      const [entriesData, operatorsData] = await Promise.all([
        getTimeEntries(getDateFilters()),
        getOperators()
      ])
      setEntries(entriesData)
      setOperators(operatorsData)
    } catch (err) {
      console.error('Failed to load data:', err)
    } finally {
      setLoading(false)
    }
  }

  const getDateFilters = () => {
    const now = new Date()
    switch (dateRange) {
      case 'week':
        return { startDate: format(startOfWeek(now), 'yyyy-MM-dd'), endDate: format(endOfWeek(now), 'yyyy-MM-dd') }
      case 'month':
        return { startDate: format(startOfMonth(now), 'yyyy-MM-dd'), endDate: format(endOfMonth(now), 'yyyy-MM-dd') }
      default:
        return {}
    }
  }

  const handleDelete = async (entry) => {
    if (!confirm('Delete this time entry?')) return
    try {
      await deleteTimeEntry(entry.id)
      loadData()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const totalHours = entries.reduce((sum, e) => sum + (parseFloat(e.hours) || 0), 0)
  const billableHours = entries.filter(e => e.billable).reduce((sum, e) => sum + (parseFloat(e.hours) || 0), 0)
  const totalValue = entries.reduce((sum, e) => {
    if (e.rate_amount && e.hours) {
      return sum + (parseFloat(e.rate_amount) * parseFloat(e.hours))
    }
    return sum
  }, 0)

  const filtered = entries.filter(e => {
    if (search) {
      const s = search.toLowerCase()
      return e.description.toLowerCase().includes(s) || e.project_name?.toLowerCase().includes(s) || e.operator_name?.toLowerCase().includes(s)
    }
    return true
  })

  // Group by date
  const groupedByDate = filtered.reduce((acc, entry) => {
    const date = entry.entry_date
    if (!acc[date]) acc[date] = []
    acc[date].push(entry)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Time Tracking</h1>
          <p className="text-gray-500">Log and track your hours</p>
        </div>
        <button onClick={() => { setEditingEntry(null); setModalOpen(true) }} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-5 h-5" />
          Log Time
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Hours</p>
              <p className="text-xl font-bold text-gray-900">{totalHours.toFixed(1)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Billable Hours</p>
              <p className="text-xl font-bold text-gray-900">{billableHours.toFixed(1)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-xl font-bold text-gray-900">${totalValue.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search entries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="all">All Time</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : Object.keys(groupedByDate).length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Clock className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">{search ? 'No entries match your search' : 'No time entries yet'}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedByDate)
            .sort(([a], [b]) => new Date(b) - new Date(a))
            .map(([date, dateEntries]) => (
              <div key={date}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">
                    {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {dateEntries.reduce((sum, e) => sum + parseFloat(e.hours || 0), 0).toFixed(1)} hrs
                  </span>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                  {dateEntries.map(entry => (
                    <div key={entry.id} className="p-4 flex items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">{entry.description}</p>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          {entry.project_name && <span className="text-brand-600">{entry.project_name}</span>}
                          {entry.operator_name && <span>{entry.operator_name}</span>}
                          {entry.category && <span className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">{entry.category}</span>}
                          {!entry.billable && <span className="text-orange-600 text-xs">Non-billable</span>}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{parseFloat(entry.hours).toFixed(2)} hrs</p>
                        {entry.rate_amount && (
                          <p className="text-sm text-gray-500">${(parseFloat(entry.hours) * parseFloat(entry.rate_amount)).toFixed(2)}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => { setEditingEntry(entry); setModalOpen(true) }} className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(entry)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {modalOpen && (
        <TimeEntryModal
          entry={editingEntry}
          operators={operators}
          onClose={() => { setModalOpen(false); setEditingEntry(null) }}
          onSave={() => { setModalOpen(false); setEditingEntry(null); loadData() }}
        />
      )}
    </div>
  )
}
