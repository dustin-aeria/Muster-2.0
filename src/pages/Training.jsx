import { useState, useEffect } from 'react'
import {
  GraduationCap,
  Award,
  Users,
  Check,
  Clock,
  AlertTriangle,
  FileText,
  X,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Plane,
  Eye,
  Wrench,
  Briefcase,
  Plus,
  Trash2,
  Pencil,
  Play,
  Download,
  Search,
  BookOpen,
  ClipboardList,
  AlertCircle,
  CheckCircle2,
  Calendar,
  User
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import { getDocuments } from '../lib/api'
import { format, differenceInDays, addDays } from 'date-fns'
import { MarkdownPreview } from '../components/MarkdownEditor'

// ============================================
// ROLE DEFINITIONS
// ============================================

const ROLES = [
  {
    id: 'all_personnel',
    name: 'All Personnel',
    description: 'Safety basics, SMS orientation, company policies',
    icon: Users,
    color: 'bg-blue-500',
    recurrencyDays: 365, // Annual
    required: true // Everyone must complete this
  },
  {
    id: 'rpas_pilot',
    name: 'RPAS Pilot (PIC)',
    description: 'Flight operations, emergency procedures, aircraft systems',
    icon: Plane,
    color: 'bg-purple-500',
    recurrencyDays: 90 // 90-day currency
  },
  {
    id: 'visual_observer',
    name: 'Visual Observer',
    description: 'VO procedures, standard calls, airspace awareness',
    icon: Eye,
    color: 'bg-green-500',
    recurrencyDays: 365 // Annual
  },
  {
    id: 'ground_crew',
    name: 'Ground Crew',
    description: 'Equipment handling, site setup, battery safety',
    icon: Wrench,
    color: 'bg-amber-500',
    recurrencyDays: 365 // Annual
  },
  {
    id: 'ops_manager',
    name: 'Operations Manager',
    description: 'SMS oversight, auditing, incident review',
    icon: Briefcase,
    color: 'bg-red-500',
    recurrencyDays: 365 // Annual
  }
]

// ============================================
// TRAINING TRACKER API
// ============================================

async function getTrainingRecords() {
  const { data, error } = await supabase
    .from('training_records')
    .select('*')
    .order('person_name', { ascending: true })
  if (error && error.code === '42P01') {
    // Table doesn't exist yet
    return []
  }
  return data || []
}

async function createTrainingRecord(record) {
  const { data, error } = await supabase
    .from('training_records')
    .insert(record)
    .select()
    .single()
  if (error) throw error
  return data
}

async function updateTrainingRecord(id, updates) {
  const { error } = await supabase
    .from('training_records')
    .update(updates)
    .eq('id', id)
  if (error) throw error
}

async function deleteTrainingRecord(id) {
  const { error } = await supabase
    .from('training_records')
    .delete()
    .eq('id', id)
  if (error) throw error
}

// ============================================
// TRAINING TRACKER VIEW
// ============================================

function TrainingTracker({ onStartTraining }) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const loadRecords = async () => {
    setLoading(true)
    const data = await getTrainingRecords()
    setRecords(data)
    setLoading(false)
  }

  useEffect(() => {
    loadRecords()
  }, [])

  const getStatus = (record) => {
    if (!record.completed_date) return { status: 'not_started', label: 'Not Started', color: 'text-gray-500 bg-gray-100' }

    const role = ROLES.find(r => r.id === record.role)
    if (!role) return { status: 'current', label: 'Current', color: 'text-green-700 bg-green-100' }

    const completedDate = new Date(record.completed_date)
    const expiryDate = addDays(completedDate, role.recurrencyDays)
    const daysUntilExpiry = differenceInDays(expiryDate, new Date())

    if (daysUntilExpiry < 0) {
      return { status: 'overdue', label: 'Overdue', color: 'text-red-700 bg-red-100', days: Math.abs(daysUntilExpiry) }
    } else if (daysUntilExpiry <= 30) {
      return { status: 'due_soon', label: 'Due Soon', color: 'text-amber-700 bg-amber-100', days: daysUntilExpiry }
    } else {
      return { status: 'current', label: 'Current', color: 'text-green-700 bg-green-100', days: daysUntilExpiry }
    }
  }

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.person_name.toLowerCase().includes(searchTerm.toLowerCase())
    if (!matchesSearch) return false

    if (filterStatus === 'all') return true
    const status = getStatus(record)
    return status.status === filterStatus
  })

  const handleDelete = async (id) => {
    if (!confirm('Delete this training record?')) return
    await deleteTrainingRecord(id)
    loadRecords()
  }

  const exportCSV = () => {
    const headers = ['Name', 'Role', 'Training Type', 'Completed Date', 'Signed Off By', 'Status', 'Notes']
    const rows = records.map(r => {
      const role = ROLES.find(role => role.id === r.role)
      const status = getStatus(r)
      return [
        r.person_name,
        role?.name || r.role,
        r.training_type,
        r.completed_date ? format(new Date(r.completed_date), 'yyyy-MM-dd') : '',
        r.signed_off_by || '',
        status.label,
        r.notes || ''
      ]
    })

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `training-records-${format(new Date(), 'yyyy-MM-dd')}.csv`
    a.click()
  }

  // Stats
  const stats = {
    total: records.length,
    current: records.filter(r => getStatus(r).status === 'current').length,
    dueSoon: records.filter(r => getStatus(r).status === 'due_soon').length,
    overdue: records.filter(r => getStatus(r).status === 'overdue').length,
    notStarted: records.filter(r => getStatus(r).status === 'not_started').length
  }

  if (loading) {
    return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.current}</p>
              <p className="text-sm text-gray-500">Current</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.dueSoon}</p>
              <p className="text-sm text-gray-500">Due Soon</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.overdue}</p>
              <p className="text-sm text-gray-500">Overdue</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              <p className="text-sm text-gray-500">Total Records</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
        >
          <option value="all">All Status</option>
          <option value="current">Current</option>
          <option value="due_soon">Due Soon</option>
          <option value="overdue">Overdue</option>
          <option value="not_started">Not Started</option>
        </select>
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-4 h-4" />
          Add Record
        </button>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">Name</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">Role</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">Type</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">Completed</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900">Signed By</th>
                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                    {records.length === 0 ? 'No training records yet. Add one or start a training session.' : 'No records match your search.'}
                  </td>
                </tr>
              ) : (
                filteredRecords.map(record => {
                  const role = ROLES.find(r => r.id === record.role)
                  const status = getStatus(record)
                  const Icon = role?.icon || User
                  return (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-lg ${role?.color || 'bg-gray-500'} text-white`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-gray-900">{record.person_name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{role?.name || record.role}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 capitalize">{record.training_type}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {record.completed_date ? format(new Date(record.completed_date), 'MMM d, yyyy') : '-'}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                          {status.label}
                          {status.days !== undefined && status.status !== 'current' && (
                            <span>({status.days}d)</span>
                          )}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{record.signed_off_by || '-'}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => setEditingRecord(record)}
                            className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(record.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Start Training Button */}
      <div className="flex justify-center">
        <button
          onClick={onStartTraining}
          className="flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-medium"
        >
          <Play className="w-5 h-5" />
          Start New Training Session
        </button>
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingRecord) && (
        <RecordModal
          record={editingRecord}
          onClose={() => { setShowAddModal(false); setEditingRecord(null) }}
          onSave={() => { setShowAddModal(false); setEditingRecord(null); loadRecords() }}
        />
      )}
    </div>
  )
}

// ============================================
// RECORD MODAL
// ============================================

function RecordModal({ record, onClose, onSave }) {
  const [form, setForm] = useState({
    person_name: record?.person_name || '',
    role: record?.role || 'all_personnel',
    training_type: record?.training_type || 'initial',
    completed_date: record?.completed_date || format(new Date(), 'yyyy-MM-dd'),
    signed_off_by: record?.signed_off_by || 'Dustin Wales',
    notes: record?.notes || ''
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      if (record) {
        await updateTrainingRecord(record.id, form)
      } else {
        await createTrainingRecord(form)
      }
      onSave()
    } catch (err) {
      alert('Failed to save: ' + err.message)
    }
    setSaving(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{record ? 'Edit' : 'Add'} Training Record</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Person Name</label>
            <input
              type="text"
              required
              value={form.person_name}
              onChange={e => setForm({ ...form, person_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            >
              {ROLES.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Training Type</label>
            <select
              value={form.training_type}
              onChange={e => setForm({ ...form, training_type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            >
              <option value="initial">Initial</option>
              <option value="recurrent">Recurrent</option>
              <option value="upgrade">Upgrade</option>
              <option value="remedial">Remedial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Completed Date</label>
            <input
              type="date"
              value={form.completed_date}
              onChange={e => setForm({ ...form, completed_date: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Signed Off By</label>
            <input
              type="text"
              value={form.signed_off_by}
              onChange={e => setForm({ ...form, signed_off_by: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="Supervisor name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={form.notes}
              onChange={e => setForm({ ...form, notes: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              rows={2}
              placeholder="Optional notes"
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ============================================
// ROLE SELECTION (for starting training)
// ============================================

function RoleSelection({ onSelectRole, onBack }) {
  const [personName, setPersonName] = useState('')
  const [selectedRoles, setSelectedRoles] = useState(['all_personnel'])
  const [trainingType, setTrainingType] = useState('initial')

  const toggleRole = (roleId) => {
    if (roleId === 'all_personnel') return // Can't deselect this
    setSelectedRoles(prev =>
      prev.includes(roleId)
        ? prev.filter(r => r !== roleId)
        : [...prev, roleId]
    )
  }

  const handleStart = () => {
    if (!personName.trim()) {
      alert('Please enter the trainee name')
      return
    }
    onSelectRole({
      personName: personName.trim(),
      roles: selectedRoles,
      trainingType
    })
  }

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <ChevronLeft className="w-5 h-5" /> Back to Tracker
      </button>

      <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Start Training Session</h2>

        <div className="space-y-6">
          {/* Trainee Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Trainee Name</label>
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Enter name of person being trained"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              autoFocus
            />
          </div>

          {/* Training Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Training Type</label>
            <div className="flex gap-2">
              {['initial', 'recurrent', 'upgrade', 'remedial'].map(type => (
                <button
                  key={type}
                  onClick={() => setTrainingType(type)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    trainingType === type
                      ? 'bg-brand-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Roles to Train
              <span className="text-gray-400 font-normal ml-2">(select all that apply)</span>
            </label>
            <div className="grid gap-3">
              {ROLES.map(role => {
                const Icon = role.icon
                const isSelected = selectedRoles.includes(role.id)
                const isRequired = role.required
                return (
                  <div
                    key={role.id}
                    onClick={() => toggleRole(role.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${isRequired ? 'opacity-100' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${role.color} text-white`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {role.name}
                          {isRequired && <span className="text-brand-600 text-sm ml-2">(Required)</span>}
                        </p>
                        <p className="text-sm text-gray-500">{role.description}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-brand-500 bg-brand-500' : 'border-gray-300'
                      }`}>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!personName.trim()}
            className="w-full py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Begin Training
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// TRAINING SESSION
// ============================================

function TrainingSession({ config, documents, onComplete, onBack }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [completedRoles, setCompletedRoles] = useState([])

  const currentRole = ROLES.find(r => r.id === config.roles[currentRoleIndex])
  const Icon = currentRole?.icon || Users
  const isLastRole = currentRoleIndex === config.roles.length - 1
  const isRecurrent = config.trainingType === 'recurrent'

  const handleCompleteRole = async () => {
    // Create training record for this role
    try {
      await createTrainingRecord({
        person_name: config.personName,
        role: currentRole.id,
        training_type: config.trainingType,
        completed_date: format(new Date(), 'yyyy-MM-dd'),
        signed_off_by: 'Dustin Wales'
      })

      setCompletedRoles([...completedRoles, currentRole.id])

      if (isLastRole) {
        onComplete()
      } else {
        setCurrentRoleIndex(currentRoleIndex + 1)
      }
    } catch (err) {
      alert('Failed to save: ' + err.message)
    }
  }

  // Get documents for this role
  const getRoleDocuments = () => {
    // Map roles to document types
    const docTypeMap = {
      all_personnel: ['policy'],
      rpas_pilot: ['procedure'],
      visual_observer: ['procedure'],
      ground_crew: ['procedure'],
      ops_manager: ['policy']
    }
    const types = docTypeMap[currentRole?.id] || []
    return documents.filter(d => types.includes(d.doc_type))
  }

  const roleDocs = getRoleDocuments()

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <ChevronLeft className="w-5 h-5" /> Exit Training
      </button>

      {/* Progress */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Training: {config.personName}</p>
            <p className="font-medium text-gray-900">
              Role {currentRoleIndex + 1} of {config.roles.length}: {currentRole?.name}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            config.trainingType === 'initial' ? 'bg-blue-100 text-blue-700' :
            config.trainingType === 'recurrent' ? 'bg-green-100 text-green-700' :
            config.trainingType === 'upgrade' ? 'bg-purple-100 text-purple-700' :
            'bg-amber-100 text-amber-700'
          } capitalize`}>
            {config.trainingType}
          </span>
        </div>
        <div className="flex gap-1">
          {config.roles.map((roleId, idx) => (
            <div
              key={roleId}
              className={`flex-1 h-2 rounded-full ${
                completedRoles.includes(roleId) ? 'bg-green-500' :
                idx === currentRoleIndex ? 'bg-brand-500' :
                'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Role Header */}
      <div className={`rounded-xl border-2 p-5 ${currentRole?.color.replace('bg-', 'bg-').replace('500', '50')} border-${currentRole?.color.replace('bg-', '').replace('500', '200')}`}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${currentRole?.color} text-white`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{currentRole?.name}</h2>
            <p className="text-gray-600">{currentRole?.description}</p>
          </div>
        </div>
      </div>

      {/* Training Content Based on Type */}
      {isRecurrent ? (
        // Recurrent: What's changed + scenarios
        <RecurrentTraining role={currentRole} onComplete={handleCompleteRole} />
      ) : (
        // Initial: Full training
        <InitialTraining
          role={currentRole}
          documents={roleDocs}
          onComplete={handleCompleteRole}
        />
      )}
    </div>
  )
}

// ============================================
// INITIAL TRAINING (full content)
// ============================================

function InitialTraining({ role, documents, onComplete }) {
  const [step, setStep] = useState(0)
  const [acknowledgedDocs, setAcknowledgedDocs] = useState([])
  const [expandedDoc, setExpandedDoc] = useState(null)

  // Steps: 1. Documents, 2. Key Concepts, 3. Sign-off
  const steps = ['Review Documents', 'Key Concepts', 'Sign Off']

  const handleAcknowledge = (docId) => {
    setAcknowledgedDocs([...acknowledgedDocs, docId])
  }

  const allDocsAcknowledged = documents.length === 0 || acknowledgedDocs.length >= documents.length

  return (
    <div className="space-y-6">
      {/* Step Indicator */}
      <div className="flex items-center gap-2">
        {steps.map((s, idx) => (
          <div key={s} className="flex items-center">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
              idx < step ? 'bg-green-100 text-green-700' :
              idx === step ? 'bg-brand-100 text-brand-700' :
              'bg-gray-100 text-gray-500'
            }`}>
              {idx < step ? <Check className="w-4 h-4" /> : <span>{idx + 1}</span>}
              <span>{s}</span>
            </div>
            {idx < steps.length - 1 && <div className="w-8 h-0.5 bg-gray-200 mx-2" />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {step === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-400" />
              Required Reading ({acknowledgedDocs.length}/{documents.length})
            </h3>
            <p className="text-sm text-gray-500 mt-1">Review and acknowledge each document</p>
          </div>
          {documents.length === 0 ? (
            <p className="px-5 py-8 text-center text-gray-500">No documents assigned for this role</p>
          ) : (
            <div className="divide-y divide-gray-100">
              {documents.map(doc => {
                const done = acknowledgedDocs.includes(doc.id)
                const isExpanded = expandedDoc === doc.id
                return (
                  <div key={doc.id}>
                    <div
                      className={`px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 ${isExpanded ? 'bg-gray-50' : ''}`}
                      onClick={() => setExpandedDoc(isExpanded ? null : doc.id)}
                    >
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                        done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                      }`}>
                        {done && <Check className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${done ? 'text-gray-400' : 'text-gray-900'}`}>{doc.title}</p>
                        <p className="text-sm text-gray-500">{doc.doc_type}</p>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </div>
                    {isExpanded && (
                      <div className="px-5 pb-5 bg-gray-50">
                        <div className="bg-white rounded-lg border border-gray-200 p-6 max-h-96 overflow-y-auto">
                          {doc.content ? (
                            <MarkdownPreview content={doc.content} />
                          ) : (
                            <p className="text-gray-400 italic">No content available</p>
                          )}
                        </div>
                        {!done && (
                          <div className="flex justify-end mt-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleAcknowledge(doc.id)
                                setExpandedDoc(null)
                              }}
                              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2"
                            >
                              <Check className="w-4 h-4" /> I have read this
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
          <div className="px-5 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button
              onClick={() => setStep(1)}
              disabled={!allDocsAcknowledged}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <KeyConceptsStep role={role} onContinue={() => setStep(2)} />
      )}

      {step === 2 && (
        <SignOffStep role={role} personName="" onComplete={onComplete} />
      )}
    </div>
  )
}

// ============================================
// KEY CONCEPTS STEP
// ============================================

// ============================================
// RISK MATRIX COMPONENT
// ============================================

function RiskMatrix() {
  // Risk matrix: Likelihood × Severity = Score (1-25)
  // Severity: 1-Negligible, 2-Minor, 3-Moderate, 4-Major, 5-Catastrophic
  // Likelihood: 1-Rare, 2-Unlikely, 3-Possible, 4-Likely, 5-Almost Certain

  const getCell = (l, s) => {
    const score = l * s
    if (score >= 15) return { score, level: 'HIGH', color: 'bg-red-500 text-white' }
    if (score >= 8) return { score, level: 'MED', color: 'bg-amber-400 text-black' }
    return { score, level: 'LOW', color: 'bg-green-500 text-white' }
  }

  const likelihood = [
    { rating: 5, label: 'Almost Certain' },
    { rating: 4, label: 'Likely' },
    { rating: 3, label: 'Possible' },
    { rating: 2, label: 'Unlikely' },
    { rating: 1, label: 'Rare' }
  ]

  const severity = [
    { rating: 1, label: 'Negligible' },
    { rating: 2, label: 'Minor' },
    { rating: 3, label: 'Moderate' },
    { rating: 4, label: 'Major' },
    { rating: 5, label: 'Catastrophic' }
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="p-2 text-left bg-gray-100 border border-gray-300" rowSpan={2}>Likelihood</th>
            <th className="p-2 text-center bg-gray-100 border border-gray-300" colSpan={5}>Severity</th>
          </tr>
          <tr>
            {severity.map(s => (
              <th key={s.rating} className="p-2 text-center bg-gray-50 border border-gray-300 text-xs font-medium">
                {s.rating}<br/><span className="font-normal text-gray-500">{s.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {likelihood.map(l => (
            <tr key={l.rating}>
              <td className="p-2 bg-gray-50 border border-gray-300 font-medium">
                {l.rating} - {l.label}
              </td>
              {severity.map(s => {
                const cell = getCell(l.rating, s.rating)
                return (
                  <td key={s.rating} className={`p-2 text-center border border-gray-300 font-bold ${cell.color}`}>
                    {cell.score}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4 mt-3 text-xs">
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-red-500 rounded"></div> HIGH (15-25): Stop, implement controls</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-amber-400 rounded"></div> MEDIUM (8-14): Proceed with controls</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-green-500 rounded"></div> LOW (1-7): Proceed with awareness</div>
      </div>
    </div>
  )
}

// ============================================
// KEY CONCEPTS STEP - COMPREHENSIVE VERSION
// ============================================

function KeyConceptsStep({ role, onContinue, sessionId }) {
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState(() => {
    // Load from localStorage
    const saved = localStorage.getItem(`training_modules_${sessionId}_${role?.id}`)
    return saved ? JSON.parse(saved) : []
  })

  // Save progress when it changes
  useEffect(() => {
    if (sessionId && role?.id) {
      localStorage.setItem(`training_modules_${sessionId}_${role?.id}`, JSON.stringify(completedModules))
    }
  }, [completedModules, sessionId, role?.id])

  const modules = {
    all_personnel: [
      {
        id: 'hazard_identification',
        title: 'Hazard Identification',
        objective: 'Learn to recognize hazards before they cause incidents',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">A <strong>hazard</strong> is anything with the potential to cause harm. Effective hazard identification is the foundation of safe operations.</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">How We Identify Hazards</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Formal Hazard Assessments (FHAs)</strong> - Pre-developed assessments for standard operations (flight ops, BVLOS, cargo delivery, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Field Level Hazard Assessments (FLHAs)</strong> - Completed on-site before each job to catch site-specific hazards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Incident Investigation</strong> - Learning from what went wrong</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Worker Input</strong> - Your experience matters - report hazards when you see them</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">Real Examples from RPAS Operations</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-200">
                    <th className="text-left py-1 text-amber-900">Hazard</th>
                    <th className="text-left py-1 text-amber-900">Potential Consequence</th>
                  </tr>
                </thead>
                <tbody className="text-amber-800">
                  <tr className="border-b border-amber-100">
                    <td className="py-1">Unidentified airspace restrictions</td>
                    <td className="py-1">Airspace violation, conflict with manned aircraft</td>
                  </tr>
                  <tr className="border-b border-amber-100">
                    <td className="py-1">Equipment defect undetected</td>
                    <td className="py-1">In-flight failure, crash</td>
                  </tr>
                  <tr className="border-b border-amber-100">
                    <td className="py-1">Weather deterioration</td>
                    <td className="py-1">Loss of control, unsafe landing</td>
                  </tr>
                  <tr className="border-b border-amber-100">
                    <td className="py-1">Battery damage or degradation</td>
                    <td className="py-1">Fire, in-flight power loss</td>
                  </tr>
                  <tr>
                    <td className="py-1">Unmarked obstacles at site</td>
                    <td className="py-1">Collision, aircraft damage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700 font-medium">Key Principle:</p>
              <p className="text-gray-600 italic">"Before any task, ask: What could go wrong? What would the consequences be? Have we addressed this?"</p>
            </div>
          </div>
        )
      },
      {
        id: 'risk_assessment',
        title: 'Risk Assessment',
        objective: 'Use the risk matrix to evaluate and prioritize risks',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700"><strong>Risk = Likelihood × Severity</strong>. Once you identify a hazard, you need to assess how serious it is.</p>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Aeria Solutions Risk Matrix</h4>
              <RiskMatrix />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Likelihood Scale</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li><strong>5 - Almost Certain:</strong> Expected to occur</li>
                  <li><strong>4 - Likely:</strong> Will probably occur</li>
                  <li><strong>3 - Possible:</strong> Could occur</li>
                  <li><strong>2 - Unlikely:</strong> Not expected but possible</li>
                  <li><strong>1 - Rare:</strong> Exceptional circumstances only</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Severity Scale</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li><strong>5 - Catastrophic:</strong> Fatality, permanent disability</li>
                  <li><strong>4 - Major:</strong> Serious injury, significant damage</li>
                  <li><strong>3 - Moderate:</strong> Medical treatment needed</li>
                  <li><strong>2 - Minor:</strong> First aid, minor damage</li>
                  <li><strong>1 - Negligible:</strong> No injury, minimal impact</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Risk Acceptability</h4>
              <table className="w-full text-sm">
                <tbody className="text-red-800">
                  <tr className="border-b border-red-200">
                    <td className="py-2 font-bold">HIGH (15-25)</td>
                    <td className="py-2">Unacceptable - <strong>STOP</strong>. Do not proceed until risk is reduced.</td>
                  </tr>
                  <tr className="border-b border-red-200">
                    <td className="py-2 font-bold">MEDIUM (8-14)</td>
                    <td className="py-2">Tolerable - Proceed only with documented controls and monitoring.</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">LOW (1-7)</td>
                    <td className="py-2">Acceptable - Proceed with standard procedures and awareness.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Example Assessment</h4>
              <p className="text-purple-800 mb-2">
                <strong>Hazard:</strong> Lost link during flight (interference, range exceeded)
              </p>
              <p className="text-purple-800 mb-2">
                <strong>Without Controls:</strong> Likelihood 3 (Possible) × Severity 3 (Moderate damage) = <strong>9 MEDIUM</strong>
              </p>
              <p className="text-purple-800">
                <strong>With Controls:</strong> Failsafe RTH programmed, range monitoring → Residual Risk = <strong>4 LOW</strong>
              </p>
            </div>
          </div>
        )
      },
      {
        id: 'hierarchy_of_controls',
        title: 'Hierarchy of Controls',
        objective: 'Apply the right controls in the right order',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">When you identify a hazard, you need to control it. The <strong>hierarchy of controls</strong> tells you which controls are most effective.</p>

            <div className="bg-gradient-to-b from-green-500 to-red-400 rounded-lg p-1">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-green-500 text-white p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">1. ELIMINATION</span>
                    <span className="text-sm">Most Effective ↑</span>
                  </div>
                  <p className="text-sm text-green-100">Remove the hazard completely</p>
                  <p className="text-xs mt-1 bg-green-600 rounded px-2 py-1 inline-block">Example: Don't fly in that location → hazard doesn't exist</p>
                </div>
                <div className="bg-green-400 text-white p-3">
                  <div className="font-bold">2. SUBSTITUTION</div>
                  <p className="text-sm text-green-100">Replace with something less hazardous</p>
                  <p className="text-xs mt-1 bg-green-500 rounded px-2 py-1 inline-block">Example: Use a smaller drone for indoor inspection → less damage potential</p>
                </div>
                <div className="bg-yellow-400 text-gray-900 p-3">
                  <div className="font-bold">3. ENGINEERING CONTROLS</div>
                  <p className="text-sm text-yellow-800">Physical changes that reduce risk</p>
                  <p className="text-xs mt-1 bg-yellow-500 rounded px-2 py-1 inline-block">Example: Prop guards, geofencing, failsafe RTH programming</p>
                </div>
                <div className="bg-orange-400 text-white p-3">
                  <div className="font-bold">4. ADMINISTRATIVE CONTROLS</div>
                  <p className="text-sm text-orange-100">Procedures, training, warnings</p>
                  <p className="text-xs mt-1 bg-orange-500 rounded px-2 py-1 inline-block">Example: Pre-flight checklists, weather limits, standoff distances</p>
                </div>
                <div className="bg-red-400 text-white p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">5. PPE</span>
                    <span className="text-sm">Least Effective ↓</span>
                  </div>
                  <p className="text-sm text-red-100">Personal Protective Equipment - last resort</p>
                  <p className="text-xs mt-1 bg-red-500 rounded px-2 py-1 inline-block">Example: Safety glasses, hi-vis vest, hard hat at industrial sites</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Key Principle</h4>
              <p className="text-blue-800">Always start at the top. Ask: "Can we eliminate this hazard?" If not, "Can we substitute?" Work your way down. <strong>PPE is the last resort, not the first solution.</strong></p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">RPAS Example: Bystander Strike Risk</h4>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium text-gray-700">Elimination:</td>
                    <td className="py-2 text-gray-600">Fly when area is clear (early morning)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium text-gray-700">Engineering:</td>
                    <td className="py-2 text-gray-600">Prop guards, parachute system</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium text-gray-700">Administrative:</td>
                    <td className="py-2 text-gray-600">Standoff distances, VO watching for bystanders, site control</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-gray-700">PPE:</td>
                    <td className="py-2 text-gray-600">Crew wears hard hats (protects crew only, not public)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      },
      {
        id: 'document_structure',
        title: 'Document Structure & Navigation',
        objective: 'Know where to find information when you need it',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">A good operator knows where to find information. Our safety program has <strong>168+ documents</strong> - you don't need to memorize them, but you need to know the structure.</p>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold">Document Type</th>
                    <th className="text-left p-3 font-semibold">Purpose</th>
                    <th className="text-left p-3 font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium text-blue-600">Policies</td>
                    <td className="p-3 text-gray-600">WHAT we do and WHY</td>
                    <td className="p-3 text-gray-500 text-xs">HSE-001 Health & Safety Policy, OPS-001 Flight Operations</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-green-600">Procedures (-PR)</td>
                    <td className="p-3 text-gray-600">HOW to do it step-by-step</td>
                    <td className="p-3 text-gray-500 text-xs">OPS-001-PR Flight Planning, HSE-001-PR Hazard Assessment</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-purple-600">Forms (FRM-)</td>
                    <td className="p-3 text-gray-600">Document your work</td>
                    <td className="p-3 text-gray-500 text-xs">FRM-PREFLIGHT, FRM-FLHA, FRM-INCIDENT</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-amber-600">Quick Reference Cards (QRC-)</td>
                    <td className="p-3 text-gray-600">Field-ready pocket guides</td>
                    <td className="p-3 text-gray-500 text-xs">QRC-EMERGENCY, QRC-BATTERY, QRC-VOCALLS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-red-600">Formal Hazard Assessments (FHA-)</td>
                    <td className="p-3 text-gray-600">Pre-analyzed hazards for standard operations</td>
                    <td className="p-3 text-gray-500 text-xs">FHA-001 Flight Ops, FHA-002 BVLOS, FHA-005 Battery Handling</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-600">Manuals</td>
                    <td className="p-3 text-gray-600">Comprehensive reference</td>
                    <td className="p-3 text-gray-500 text-xs">SMS-001 Safety Management, MCM-001 Maintenance Control</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">FHA Categories (Know These)</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-green-800">
                <div>• FHA-1.x - Work Environment & Personnel</div>
                <div>• FHA-2.x - Standard RPAS Operations</div>
                <div>• FHA-3.x - Complex/Specialized RPAS Ops</div>
                <div>• FHA-4.x - Equipment & Emergency</div>
                <div>• FHA-5.x - Survey & Data Collection</div>
                <div>• FHA-6.x - Specialized Field Operations</div>
                <div>• FHA-7.x - Industrial Site Operations</div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">When Planning a Task</h4>
              <ol className="list-decimal list-inside space-y-1 text-blue-800">
                <li>Review the relevant FHA for that operation type</li>
                <li>Check the applicable procedures</li>
                <li>Prepare the required forms (FLHA, pre-flight, etc.)</li>
                <li>Have QRCs available for field reference</li>
              </ol>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700 font-medium">Access Point:</p>
              <p className="text-gray-600">All documents are in the <strong>Documents</strong> section of this app. Use search and filters to find what you need.</p>
            </div>
          </div>
        )
      }
    ],
    rpas_pilot: [
      {
        id: 'preflight_purpose',
        title: 'Pre-Flight Checklists',
        objective: 'Understand the purpose and process of pre-flight checks',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Pre-flight checklists keep the pilot and ground team aware of potential influences to a safe flight.</p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">The Challenge-Response Method</h4>
              <p className="text-purple-800">Prior to flight, the <strong>VO calls out each checklist item</strong> and the <strong>PIC assesses and responds</strong>. This method ensures both crew members are engaged and confirms it is safe to launch.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Critical Pre-Flight Items</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> Propellers secure, no visible damage</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> Battery charged, properly seated, no puffing</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> Camera/gimbal operational and calibrated</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> GPS lock confirmed, home point set</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> Control surfaces responsive (if applicable)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> Failsafe settings verified (RTH altitude, low battery behavior)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> Airspace confirmed clear, no NOTAMs affecting operation</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Never Skip the Checklist</h4>
              <p className="text-red-800">Schedule pressure is not a reason to shortcut pre-flight. The checklist exists because each item has caught a problem that could have caused an incident.</p>
            </div>
          </div>
        )
      },
      {
        id: 'currency',
        title: 'Currency Requirements',
        objective: 'Know your flight currency obligations',
        content: (
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold">Requirement</th>
                    <th className="text-left p-3 font-semibold">Period</th>
                    <th className="text-left p-3 font-semibold">If Currency Lapses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">PIC Currency</td>
                    <td className="p-3">1 flight every 90 days</td>
                    <td className="p-3 text-red-600">Cannot act as PIC until recurrent training</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">BVLOS Currency</td>
                    <td className="p-3">1 BVLOS flight every 90 days</td>
                    <td className="p-3 text-red-600">Cannot conduct BVLOS until recurrent</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Visual Observer</td>
                    <td className="p-3">Annual refresher</td>
                    <td className="p-3 text-red-600">Cannot act as VO until refreshed</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Emergency Procedures</td>
                    <td className="p-3">Annual review</td>
                    <td className="p-3 text-amber-600">Required before flight operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Your Responsibility</h4>
              <p className="text-blue-800">Track your own currency. Don't wait for someone to tell you - check the Training Tracker regularly and plan flights accordingly.</p>
            </div>
          </div>
        )
      },
      {
        id: 'emergency_decision',
        title: 'Emergency Decision Making',
        objective: 'Know how to react when things go wrong',
        content: (
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-900 text-lg mb-2">Aviate → Navigate → Communicate</h4>
              <ol className="space-y-2 text-red-800">
                <li><strong>1. AVIATE:</strong> Maintain aircraft control. Nothing else matters if you lose the aircraft.</li>
                <li><strong>2. NAVIGATE:</strong> Guide the aircraft to safety - RTH, find a safe landing spot.</li>
                <li><strong>3. COMMUNICATE:</strong> Inform crew, then ATC if required. Never sacrifice control to talk.</li>
              </ol>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Common Emergency Scenarios</h4>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-amber-400 pl-3">
                  <p className="font-medium">Lost Link</p>
                  <p className="text-gray-600">Failsafe should engage RTH. Monitor visually. Be ready to take control if link restores.</p>
                </div>
                <div className="border-l-4 border-red-400 pl-3">
                  <p className="font-medium">Flyaway</p>
                  <p className="text-gray-600">Attempt RTH. If no response, note last position and direction. Report to operations.</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-3">
                  <p className="font-medium">Low Battery Critical</p>
                  <p className="text-gray-600">Land immediately at nearest safe spot. Don't try to make it home if battery is critical.</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-3">
                  <p className="font-medium">Manned Aircraft Conflict</p>
                  <p className="text-gray-600">Descend and land immediately. Always yield to manned aircraft.</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    visual_observer: [
      {
        id: 'vo_standard_calls',
        title: 'Standard Calls',
        objective: 'Use consistent, clear communication with the PIC',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Standardized calls prevent miscommunication. Keep them <strong>brief, accurate, and immediate</strong>.</p>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3">Situation</th>
                    <th className="text-left p-3">Call</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="p-3">Airspace clear</td><td className="p-3 font-mono">"Clear left/right/above"</td></tr>
                  <tr><td className="p-3">Manned aircraft spotted</td><td className="p-3 font-mono">"Aircraft, [position], [direction]" e.g., "Aircraft, 3 o'clock low, heading west"</td></tr>
                  <tr><td className="p-3">Person entering area</td><td className="p-3 font-mono">"Bystander approaching [direction]"</td></tr>
                  <tr><td className="p-3">Obstacle alert</td><td className="p-3 font-mono">"Obstacle [direction], [distance]"</td></tr>
                  <tr><td className="p-3">Lost visual</td><td className="p-3 font-mono">"Lost visual" - PIC should stop and hover</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">Reference: <strong>QRC-VOCALLS</strong> has the complete list. Keep it in the field.</p>
            </div>
          </div>
        )
      },
      {
        id: 'vo_airspace',
        title: 'Airspace Awareness',
        objective: 'Understand the airspace and your role in scanning it',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">The PIC is responsible for airspace, but <strong>you are their eyes</strong>. Your scanning catches what they miss while focused on the aircraft.</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Scanning Pattern</h4>
              <ul className="space-y-1 text-blue-800">
                <li>• Systematic scan: horizon to aircraft, left to right, repeat</li>
                <li>• Check below the aircraft (helicopters, low-flying aircraft)</li>
                <li>• Listen for approaching aircraft (often heard before seen)</li>
                <li>• Watch for birds, especially near water or thermals</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">TFRs and NOTAMs</h4>
              <p className="text-amber-800">Temporary Flight Restrictions can appear without warning. The PIC checks before flight, but conditions can change. If you see unusual aircraft activity, alert the PIC immediately.</p>
            </div>
          </div>
        )
      }
    ],
    ground_crew: [
      {
        id: 'battery_safety',
        title: 'Battery Safety',
        objective: 'Handle LiPo batteries safely',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">LiPo batteries are energy-dense and can be <strong>dangerous if mishandled</strong>. Fire and explosion are real risks.</p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Critical Safety Rules</h4>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" /> <span>Never charge unattended</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" /> <span>Never charge a damaged or puffed battery</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" /> <span>Store at proper voltage (storage mode for long-term)</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" /> <span>Use LiPo-safe bags for storage and transport</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" /> <span>Keep away from heat sources and direct sunlight</span></li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">Inspection Points</h4>
              <ul className="space-y-1 text-amber-800">
                <li>• Check for puffing or swelling (do not use if puffed)</li>
                <li>• Inspect for dents, punctures, or damage</li>
                <li>• Check connector for damage or corrosion</li>
                <li>• Verify charge level before and after flight</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">Reference: <strong>QRC-BATTERY</strong> and <strong>FHA-005 Battery Handling</strong></p>
            </div>
          </div>
        )
      },
      {
        id: 'site_setup',
        title: 'Site Setup',
        objective: 'Establish safe operational areas',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Good site setup determines how smoothly (and safely) operations run.</p>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Site Setup Checklist</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1" /> Launch/landing area clear of obstacles, level surface</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1" /> Crew positions established (PIC, VO, GCS location)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1" /> Exclusion zones marked (cones, tape if needed)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1" /> Bystander management plan briefed</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1" /> Emergency landing areas identified</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1" /> Equipment staged for easy access (spare batteries, tools)</li>
              </ul>
            </div>
          </div>
        )
      }
    ],
    ops_manager: [
      {
        id: 'sms_oversight',
        title: 'SMS Oversight',
        objective: 'Understand your safety management responsibilities',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">As Operations Manager, you set the safety culture. Your actions determine whether safety is real or just paperwork.</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Key Responsibilities</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• Review all incident and near-miss reports</li>
                <li>• Identify trends across multiple reports</li>
                <li>• Ensure corrective actions are completed</li>
                <li>• Support pilots who refuse unsafe work</li>
                <li>• Lead by example in safety compliance</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Creating a Just Culture</h4>
              <p className="text-green-800">People report hazards when they trust they won't be punished for honest mistakes. Distinguish between honest errors (support and fix the system) and willful violations (discipline).</p>
            </div>
          </div>
        )
      },
      {
        id: 'incident_review',
        title: 'Incident Review',
        objective: 'Learn from what goes wrong',
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Every incident is a learning opportunity. The goal is to fix the system, not assign blame.</p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">The "5 Whys" Technique</h4>
              <p className="text-purple-800 mb-2">Keep asking "why" to find root causes:</p>
              <ol className="space-y-1 text-purple-700 text-sm">
                <li>1. Why did the battery fail? → It was damaged</li>
                <li>2. Why was it damaged? → It was dropped</li>
                <li>3. Why was it dropped? → Carrying too much equipment at once</li>
                <li>4. Why carry too much? → Trying to make one trip to save time</li>
                <li>5. Why save time? → Running behind schedule</li>
                <li className="font-medium text-purple-900">Root cause: Schedule pressure leading to rushing</li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">After Identifying Root Cause</h4>
              <ul className="text-amber-800">
                <li>• Implement controls that address the root cause</li>
                <li>• Share lessons learned with the team</li>
                <li>• Update FHAs if new hazard identified</li>
                <li>• Follow up to verify controls are working</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  }

  const roleModules = modules[role?.id] || modules.all_personnel
  const currentModuleData = roleModules[currentModule]
  const allCompleted = completedModules.length >= roleModules.length

  const handleComplete = () => {
    if (!completedModules.includes(currentModule)) {
      setCompletedModules([...completedModules, currentModule])
    }
    if (currentModule < roleModules.length - 1) {
      setCurrentModule(currentModule + 1)
    }
  }

  return (
    <div className="space-y-4">
      {/* Progress indicator */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Module {currentModule + 1} of {roleModules.length}</span>
          <span className="text-sm text-gray-500">{completedModules.length} completed</span>
        </div>
        <div className="flex gap-1">
          {roleModules.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentModule(idx)}
              className={`flex-1 h-2 rounded-full transition-all ${
                completedModules.includes(idx) ? 'bg-green-500' :
                idx === currentModule ? 'bg-brand-500' :
                'bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Module content */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 text-lg">{currentModuleData.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{currentModuleData.objective}</p>
        </div>
        <div className="p-5">
          {currentModuleData.content}
        </div>
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
          <button
            onClick={() => setCurrentModule(Math.max(0, currentModule - 1))}
            disabled={currentModule === 0}
            className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {!completedModules.includes(currentModule) && (
              <button
                onClick={handleComplete}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                Mark Complete
              </button>
            )}
            {currentModule < roleModules.length - 1 ? (
              <button
                onClick={() => setCurrentModule(currentModule + 1)}
                className="px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700"
              >
                Next Module
              </button>
            ) : allCompleted ? (
              <button
                onClick={onContinue}
                className="px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700"
              >
                Continue to Sign Off
              </button>
            ) : (
              <button
                disabled
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed"
              >
                Complete All Modules
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// SIGN OFF STEP
// ============================================

function SignOffStep({ role, onComplete }) {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg">
      <div className="text-center mb-6">
        <div className={`w-16 h-16 rounded-full ${role?.color} text-white flex items-center justify-center mx-auto mb-4`}>
          {role?.icon && <role.icon className="w-8 h-8" />}
        </div>
        <h3 className="text-xl font-bold text-gray-900">Complete {role?.name} Training</h3>
        <p className="text-gray-500 mt-2">Confirm that training has been completed satisfactorily</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          />
          <span className="text-sm text-gray-700">
            I, <strong>Dustin Wales</strong>, confirm that this trainee has demonstrated understanding of the required material and is competent to perform duties under the <strong>{role?.name}</strong> role.
          </span>
        </label>
      </div>

      <button
        onClick={onComplete}
        disabled={!confirmed}
        className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <Check className="w-5 h-5" />
        Sign Off & Complete
      </button>
    </div>
  )
}

// ============================================
// RECURRENT TRAINING
// ============================================

function RecurrentTraining({ role, onComplete }) {
  const [step, setStep] = useState(0) // 0: What's changed, 1: Scenarios, 2: Sign off
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [completedScenarios, setCompletedScenarios] = useState([])

  const scenarios = [
    {
      situation: 'You arrive at the job site and notice unmarked power lines within 50 feet of the planned flight area that weren\'t on the site survey.',
      question: 'What do you do?',
      options: [
        'Proceed carefully, maintaining distance from the lines',
        'Stop work, document the hazard, contact operations before proceeding',
        'Move the takeoff point further away and continue the mission',
        'Fly higher to avoid the power lines'
      ],
      correct: 1,
      explanation: 'Always stop and reassess when you encounter an undocumented hazard. The FHA may need updating, and operations should be aware of site changes.'
    },
    {
      situation: 'During flight, you notice battery voltage dropping faster than expected. You\'re 400m from the launch point.',
      question: 'What is your immediate response?',
      options: [
        'Continue until the low battery warning activates',
        'Immediately initiate RTH and monitor the return',
        'Land in place wherever you are',
        'Increase altitude to reduce power consumption'
      ],
      correct: 1,
      explanation: 'Unexpected battery behavior requires a conservative response. RTH gives you options while heading home. Don\'t wait for warnings - act on anomalies early.'
    },
    {
      situation: 'A manned helicopter appears in your area, approximately 1 mile away at similar altitude and appears to be heading your direction.',
      question: 'What action do you take?',
      options: [
        'Continue operations - you were there first and have right of way',
        'Descend and land immediately, yielding to the manned aircraft',
        'Climb higher to be more visible to the helicopter',
        'Hold position and flash your aircraft lights'
      ],
      correct: 1,
      explanation: 'Always yield to manned aircraft. Descend and land to remove any potential conflict. Manned aircraft always have priority.'
    },
    {
      situation: 'Mid-flight, a bystander walks into your operational area despite the cones and caution tape.',
      question: 'What is your immediate action?',
      options: [
        'Shout at them to leave the area',
        'Land immediately wherever the aircraft is',
        'Hover in position while your VO addresses the person',
        'Continue the mission - they\'ll move eventually'
      ],
      correct: 2,
      explanation: 'Maintain aircraft control while your visual observer handles ground personnel. Never sacrifice aircraft control, and never land on someone.'
    },
    {
      situation: 'Weather conditions are deteriorating faster than forecast. Wind is picking up and gusts are becoming stronger.',
      question: 'At what point do you scrub the mission?',
      options: [
        'When the aircraft becomes difficult to control',
        'When winds exceed aircraft limits OR your personal limits, whichever is lower',
        'When the client asks you to stop',
        'Continue - we need to complete the job'
      ],
      correct: 1,
      explanation: 'Your personal limits may be lower than aircraft limits. Know both and respect the lower threshold. Client pressure never overrides safety.'
    },
    {
      situation: 'You\'re about to start a pre-flight inspection but you\'re running behind schedule and the client is waiting.',
      question: 'How do you handle this?',
      options: [
        'Skip a few less important checklist items to save time',
        'Complete the full pre-flight checklist - no shortcuts',
        'Have someone else do the checklist while you set up other equipment',
        'Do a visual inspection only and skip the checklist'
      ],
      correct: 1,
      explanation: 'Pre-flight checklists exist because they work. Skipping items invites the exact problem that item was designed to catch. Never shortcut safety for schedule.'
    },
    {
      situation: 'After landing, you notice a small crack in one of the propeller blades that wasn\'t there before the flight.',
      question: 'What do you do?',
      options: [
        'Note it for later and continue with the next flight',
        'Ground the aircraft, document the damage, replace the propeller',
        'Monitor it during the next flight to see if it gets worse',
        'Apply tape to stabilize the crack and continue'
      ],
      correct: 1,
      explanation: 'Any propeller damage is grounds for immediate replacement. A cracked prop can fail catastrophically. Document everything and replace before flying again.'
    },
    {
      situation: 'A colleague asks you to sign off on a flight log for a flight you didn\'t witness.',
      question: 'How do you respond?',
      options: [
        'Sign it as a favor - they probably flew it correctly',
        'Refuse to sign - you can only attest to what you witnessed',
        'Sign it if they promise they did everything right',
        'Ask them to describe the flight, then sign if it sounds reasonable'
      ],
      correct: 1,
      explanation: 'Your signature is your attestation of truth. Never sign documents for events you didn\'t witness. This is a fundamental principle of safety documentation.'
    },
    {
      situation: 'You realize you forgot to check NOTAMs before arriving at the job site. You\'re already set up and the client is ready.',
      question: 'What do you do?',
      options: [
        'Proceed - you\'ve flown here before and it was fine',
        'Check NOTAMs now before launching, even if it causes delay',
        'Fly a quick test flight to see if there are any issues',
        'Ask the client if they know of any airspace restrictions'
      ],
      correct: 1,
      explanation: 'NOTAMs can change daily. TFRs can appear without warning. Always check before flight, regardless of delay. This is regulatory requirement.'
    },
    {
      situation: 'During your pre-flight briefing, a team member expresses concern about the wind conditions, but they\'re within limits.',
      question: 'How do you handle their concern?',
      options: [
        'Overrule them - conditions are within limits',
        'Listen to their concern, discuss it, and make a collective decision',
        'Tell them to wait by the vehicle if they\'re nervous',
        'Proceed but let them know you\'ll be extra careful'
      ],
      correct: 1,
      explanation: 'Safety concerns from any team member deserve attention. Their perspective may reveal something you missed. Good CRM means considering all input before deciding.'
    }
  ]

  const currentScenario = scenarios[scenarioIndex]

  const handleCheckAnswer = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    setCompletedScenarios([...completedScenarios, scenarioIndex])
    if (scenarioIndex < scenarios.length - 1) {
      setScenarioIndex(scenarioIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setStep(2)
    }
  }

  if (step === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-500" />
          What's Changed
        </h3>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800">
            Review any policy or procedure updates since your last training. Check the Documents library for recently modified documents.
          </p>
        </div>
        <p className="text-gray-600 mb-6">
          This recurrent training focuses on scenario-based assessment rather than re-reading everything.
          You'll answer 10 common-sense questions about real situations you might encounter.
        </p>
        <button
          onClick={() => setStep(1)}
          className="w-full py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700"
        >
          Start Scenarios
        </button>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">
            Scenario {scenarioIndex + 1} of {scenarios.length}
          </h3>
          <div className="flex gap-1 mt-2">
            {scenarios.map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 h-1.5 rounded-full ${
                  completedScenarios.includes(idx) ? 'bg-green-500' :
                  idx === scenarioIndex ? 'bg-brand-500' :
                  'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="p-5">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-gray-800">{currentScenario.situation}</p>
          </div>
          <p className="font-medium text-gray-900 mb-3">{currentScenario.question}</p>
          <div className="space-y-2">
            {currentScenario.options.map((option, idx) => {
              let style = 'border-gray-200 hover:border-brand-300'
              if (showResult) {
                if (idx === currentScenario.correct) style = 'border-green-500 bg-green-50'
                else if (idx === selectedAnswer && idx !== currentScenario.correct) style = 'border-red-500 bg-red-50'
                else style = 'border-gray-200 opacity-50'
              } else if (selectedAnswer === idx) {
                style = 'border-brand-500 bg-brand-50'
              }
              return (
                <button
                  key={idx}
                  onClick={() => !showResult && setSelectedAnswer(idx)}
                  disabled={showResult}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${style}`}
                >
                  {option}
                </button>
              )
            })}
          </div>
          {showResult && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">{currentScenario.explanation}</p>
            </div>
          )}
          <div className="flex justify-end mt-6">
            {!showResult ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700"
              >
                {scenarioIndex < scenarios.length - 1 ? 'Next Scenario' : 'Complete'}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return <SignOffStep role={role} onComplete={onComplete} />
}

// ============================================
// FIELD REFERENCE (QRCs)
// ============================================

function FieldReference({ onBack }) {
  const [expandedDoc, setExpandedDoc] = useState(null)

  // Filter for QRC-type documents or create static list
  const qrcs = [
    { id: 'qrc-emergency', title: 'QRC-EMERGENCY', description: 'Emergency Procedures Quick Reference' },
    { id: 'qrc-preflight', title: 'QRC-PREFLIGHT', description: 'Pre-Flight Quick Reference' },
    { id: 'qrc-airspace', title: 'QRC-AIRSPACE', description: 'Airspace Classifications' },
    { id: 'qrc-weather', title: 'QRC-WEATHER', description: 'Weather Limits & Minimums' },
    { id: 'qrc-flha', title: 'QRC-FLHA', description: 'Field Level Hazard Assessment Guide' },
    { id: 'qrc-bvlos', title: 'QRC-BVLOS', description: 'BVLOS Operations' },
    { id: 'qrc-battery', title: 'QRC-BATTERY', description: 'Battery Safety & Handling' },
    { id: 'qrc-wildlife', title: 'QRC-WILDLIFE', description: 'Wildlife Safety & Encounter Response' },
    { id: 'qrc-firstaid', title: 'QRC-FIRSTAID', description: 'First Aid Quick Reference' },
    { id: 'qrc-workingalone', title: 'QRC-WORKINGALONE', description: 'Working Alone Protocol' },
    { id: 'qrc-vocalls', title: 'QRC-VOCALLS', description: 'Visual Observer Standard Calls' },
    { id: 'qrc-delivery', title: 'QRC-DELIVERY', description: 'Cargo Delivery Operations' },
    { id: 'qrc-avalanche', title: 'QRC-AVALANCHE', description: 'Avalanche Control Operations' }
  ]

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <ChevronLeft className="w-5 h-5" /> Back
      </button>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Field Reference</h2>
        <p className="text-gray-500">Quick reference cards for field use</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {qrcs.map(qrc => (
          <div
            key={qrc.id}
            className="bg-white rounded-xl border border-gray-200 p-4 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer"
            onClick={() => setExpandedDoc(expandedDoc === qrc.id ? null : qrc.id)}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-100 rounded-lg">
                <ClipboardList className="w-5 h-5 text-brand-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{qrc.title}</p>
                <p className="text-sm text-gray-500">{qrc.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 text-center">
        QRC content will be loaded from the v5.0 documents library
      </p>
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Training() {
  const [view, setView] = useState('tracker') // tracker, roles, training, reference
  const [trainingConfig, setTrainingConfig] = useState(null)
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    const docs = await getDocuments()
    setDocuments(docs || [])
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  if (loading) {
    return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Training</h1>
          <p className="text-gray-500">Track training, manage competency records</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView('reference')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              view === 'reference' ? 'bg-brand-600 text-white' : 'bg-white border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Field Reference
          </button>
        </div>
      </div>

      {/* Views */}
      {view === 'tracker' && (
        <TrainingTracker onStartTraining={() => setView('roles')} />
      )}

      {view === 'roles' && (
        <RoleSelection
          onSelectRole={(config) => {
            setTrainingConfig(config)
            setView('training')
          }}
          onBack={() => setView('tracker')}
        />
      )}

      {view === 'training' && trainingConfig && (
        <TrainingSession
          config={trainingConfig}
          documents={documents}
          onComplete={() => {
            setView('tracker')
            setTrainingConfig(null)
          }}
          onBack={() => {
            if (confirm('Exit training? Progress will be lost.')) {
              setView('tracker')
              setTrainingConfig(null)
            }
          }}
        />
      )}

      {view === 'reference' && (
        <FieldReference onBack={() => setView('tracker')} />
      )}
    </div>
  )
}
