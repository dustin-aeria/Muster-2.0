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
import { getOperators, getDocuments } from '../lib/api'
import { format, differenceInDays, addDays, addMonths } from 'date-fns'
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

  useEffect(() => {
    loadRecords()
  }, [])

  const loadRecords = async () => {
    setLoading(true)
    const data = await getTrainingRecords()
    setRecords(data)
    setLoading(false)
  }

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
  const [expandedSection, setExpandedSection] = useState(null)

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
        setExpandedSection(null)
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

function KeyConceptsStep({ role, onContinue }) {
  const concepts = {
    all_personnel: [
      {
        title: 'Hazard Identification',
        objective: 'Understand how to identify hazards before they cause incidents',
        content: 'A good operator recognizes that hazards exist everywhere. Before any task, ask: What could go wrong? What are the consequences? The FHA (Formal Hazard Assessment) and FLHA (Field Level Hazard Assessment) are your tools for this.'
      },
      {
        title: 'Risk Assessment',
        objective: 'Learn to evaluate risk using likelihood and severity',
        content: 'Risk = Likelihood × Severity. A high likelihood + high severity = unacceptable risk. Use the risk matrix to evaluate. If risk is too high, implement controls or don\'t proceed.'
      },
      {
        title: 'Control Implementation',
        objective: 'Know the hierarchy of controls and how to apply them',
        content: 'The hierarchy: Elimination > Substitution > Engineering Controls > Administrative Controls > PPE. Always start at the top. PPE is the last resort, not the first solution.'
      },
      {
        title: 'Where to Find Information',
        objective: 'Know how to access policies, procedures, and forms when needed',
        content: 'All documents are in the Documents library. Policies tell you WHAT and WHY. Procedures tell you HOW. Forms help you document. QRCs are quick field references. Know where to look before you need it.'
      }
    ],
    rpas_pilot: [
      {
        title: 'Pre-Flight Checklist Purpose',
        objective: 'Understand why we use checklists',
        content: 'Pre-flight checklists keep the pilot and ground team aware of potential influences to a safe flight. The VO calls out the question, the pilot assesses and answers. This confirms immediately prior to flight that it is safe to launch.'
      },
      {
        title: 'Currency Requirements',
        objective: 'Know your flight currency obligations',
        content: 'PIC currency: 1 flight every 90 days. BVLOS: 1 flight every 90 days. If currency lapses, you need recurrent training before acting as PIC. Track this yourself - don\'t let it expire.'
      },
      {
        title: 'Emergency Decision Making',
        objective: 'React correctly when things go wrong',
        content: 'In an emergency: Aviate, Navigate, Communicate. First, control the aircraft. Second, navigate to safety. Third, communicate with crew and ATC if needed. Never sacrifice aircraft control to troubleshoot.'
      }
    ],
    visual_observer: [
      {
        title: 'Standard Calls',
        objective: 'Use consistent communication with the PIC',
        content: 'Clear, standardized calls prevent misunderstanding. "Clear left", "Aircraft 3 o\'clock low", "Bystander approaching". Keep calls brief, accurate, and immediate. See the QRC-VOCALLS for the full list.'
      },
      {
        title: 'Airspace Awareness',
        objective: 'Understand the airspace you\'re operating in',
        content: 'Know your airspace class before flight. Controlled airspace requires authorization. TFRs can appear without notice. The PIC is responsible, but you are their eyes - spot conflicts early.'
      }
    ],
    ground_crew: [
      {
        title: 'Battery Safety',
        objective: 'Handle LiPo batteries safely',
        content: 'LiPo batteries are energy-dense and can be dangerous. Never charge unattended. Store at proper voltage. Inspect for puffing or damage. Use fireproof bags. See QRC-BATTERY for details.'
      },
      {
        title: 'Site Setup',
        objective: 'Establish safe operational areas',
        content: 'Set up landing/takeoff areas clear of obstacles. Establish crew positions. Mark exclusion zones. Brief bystander management plan. The site setup determines how smoothly operations run.'
      }
    ],
    ops_manager: [
      {
        title: 'SMS Oversight',
        objective: 'Understand your safety management responsibilities',
        content: 'As operations manager, you set the safety culture. Review incident reports. Identify trends. Ensure corrective actions are completed. Support pilots who refuse unsafe work. Lead by example.'
      },
      {
        title: 'Incident Review',
        objective: 'Learn from what goes wrong',
        content: 'Every incident is a learning opportunity. Focus on system failures, not blame. Ask "why" five times to find root causes. Implement controls to prevent recurrence. Share lessons learned with the team.'
      }
    ]
  }

  const roleConcepts = concepts[role?.id] || concepts.all_personnel
  const [expandedConcept, setExpandedConcept] = useState(null)
  const [acknowledgedConcepts, setAcknowledgedConcepts] = useState([])

  const allAcknowledged = acknowledgedConcepts.length >= roleConcepts.length

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-gray-400" />
          Key Concepts ({acknowledgedConcepts.length}/{roleConcepts.length})
        </h3>
        <p className="text-sm text-gray-500 mt-1">Understand these core principles</p>
      </div>
      <div className="divide-y divide-gray-100">
        {roleConcepts.map((concept, idx) => {
          const done = acknowledgedConcepts.includes(idx)
          const isExpanded = expandedConcept === idx
          return (
            <div key={idx}>
              <div
                className={`px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 ${isExpanded ? 'bg-gray-50' : ''}`}
                onClick={() => setExpandedConcept(isExpanded ? null : idx)}
              >
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                  done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                }`}>
                  {done && <Check className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${done ? 'text-gray-400' : 'text-gray-900'}`}>{concept.title}</p>
                  <p className="text-sm text-gray-500">{concept.objective}</p>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </div>
              {isExpanded && (
                <div className="px-5 pb-5 bg-gray-50">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <p className="text-gray-700 leading-relaxed">{concept.content}</p>
                  </div>
                  {!done && (
                    <div className="flex justify-end mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setAcknowledgedConcepts([...acknowledgedConcepts, idx])
                          setExpandedConcept(null)
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Got it
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="px-5 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
        <button
          onClick={onContinue}
          disabled={!allAcknowledged}
          className="px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50"
        >
          Continue to Sign Off
        </button>
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

function FieldReference({ documents, onBack }) {
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

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const docs = await getDocuments()
    setDocuments(docs || [])
    setLoading(false)
  }

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
        <FieldReference documents={documents} onBack={() => setView('tracker')} />
      )}
    </div>
  )
}
