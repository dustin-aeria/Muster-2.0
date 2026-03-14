import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft, Save, FolderOpen, Calendar, DollarSign, Users, MapPin,
  FileText, Settings2, Plane, AlertTriangle, CheckCircle2, Circle,
  Loader2, MoreVertical, Trash2, Archive, Clock, Package, ClipboardCheck,
  Radio, Shield, HardHat, ChevronDown, ChevronUp, Plus, X, Phone, Mail,
  Target, Navigation, Calculator, AlertCircle, XCircle, ThumbsUp, ThumbsDown,
  Eye, Zap, Flag, Building2, Briefcase, Percent, Info
} from 'lucide-react'
import {
  getProject, updateProject, deleteProject, getProjectStages,
  getProjectResources, createProjectResource, updateProjectResource, deleteProjectResource,
  getTailgateMeetings, createTailgateMeeting, updateTailgateMeeting,
  getOperators, getEquipment, getServices
} from '../lib/api'
import { format, parseISO } from 'date-fns'

// ============================================
// CONSTANTS & CONFIGS
// ============================================

const STATUS_OPTIONS = [
  { value: 'active', label: 'Active', color: 'bg-green-100 text-green-700' },
  { value: 'on_hold', label: 'On Hold', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'cancelled', label: 'Cancelled', color: 'bg-red-100 text-red-700' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-700' }
]

const SAVE_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  SAVING: 'saving',
  SAVED: 'saved',
  ERROR: 'error'
}

const TABS = [
  { id: 'overview', label: 'Overview', icon: FolderOpen },
  { id: 'resources', label: 'Resources & Costs', icon: Users },
  { id: 'sora', label: 'SORA', icon: Shield },
  { id: 'safety', label: 'Safety', icon: AlertTriangle },
  { id: 'tailgate', label: 'Tailgate', icon: ClipboardCheck },
  { id: 'documents', label: 'Documents', icon: FileText }
]

const ROLE_OPTIONS = [
  { value: 'PIC', label: 'Pilot in Command' },
  { value: 'VO', label: 'Visual Observer' },
  { value: 'Safety Lead', label: 'Safety Lead' },
  { value: 'Project Lead', label: 'Project Lead' },
  { value: 'First Aid', label: 'First Aid Attendant' },
  { value: 'Ground Support', label: 'Ground Support' },
  { value: 'Other', label: 'Other' }
]

// SORA Population Categories
const POPULATION_CATEGORIES = {
  controlled: { label: 'Controlled Ground Area', density: 0, description: 'No uninvolved people' },
  sparsely: { label: 'Sparsely Populated', density: 1, description: '<10 people/km²' },
  populated: { label: 'Populated', density: 2, description: '10-1500 people/km²' },
  gathering: { label: 'Gathering of People', density: 3, description: '>1500 people/km²' },
  assembly: { label: 'Assembly of People', density: 4, description: 'Open-air assemblies' }
}

// UA Characteristics for SORA
const UA_CHARACTERISTICS = {
  '1m_25ms': { label: '≤1m, ≤25m/s', maxDim: 1, maxSpeed: 25 },
  '3m_25ms': { label: '≤3m, ≤25m/s', maxDim: 3, maxSpeed: 25 },
  '8m_25ms': { label: '≤8m, ≤25m/s', maxDim: 8, maxSpeed: 25 },
  '1m_35ms': { label: '≤1m, ≤35m/s', maxDim: 1, maxSpeed: 35 },
  '3m_35ms': { label: '≤3m, ≤35m/s', maxDim: 3, maxSpeed: 35 }
}

// Intrinsic GRC Matrix
const GRC_MATRIX = {
  controlled: { '1m_25ms': 1, '3m_25ms': 2, '8m_25ms': 3, '1m_35ms': 2, '3m_35ms': 3 },
  sparsely: { '1m_25ms': 2, '3m_25ms': 3, '8m_25ms': 4, '1m_35ms': 3, '3m_35ms': 4 },
  populated: { '1m_25ms': 4, '3m_25ms': 5, '8m_25ms': 6, '1m_35ms': 5, '3m_35ms': 6 },
  gathering: { '1m_25ms': 6, '3m_25ms': 7, '8m_25ms': 8, '1m_35ms': 7, '3m_35ms': 8 },
  assembly: { '1m_25ms': 8, '3m_25ms': 9, '8m_25ms': 10, '1m_35ms': 9, '3m_35ms': 10 }
}

// Ground Mitigations
const GROUND_MITIGATIONS = {
  M1A: { name: 'M1A - Strategic Mitigation', reductions: { low: 0, medium: -1, high: -2 } },
  M1B: { name: 'M1B - Effects Reduction', reductions: { low: 0, medium: -1, high: -2 } },
  M1C: { name: 'M1C - Emergency Response', reductions: { low: 0, medium: -1, high: -1 } },
  M2: { name: 'M2 - Containment', reductions: { low: -1, medium: -2, high: -4 } }
}

// ARC Levels
const ARC_LEVELS = ['ARC-a', 'ARC-b', 'ARC-c', 'ARC-d']

// SAIL Colors
const SAIL_COLORS = {
  'I': '#22C55E', 'II': '#84CC16', 'III': '#EAB308',
  'IV': '#F97316', 'V': '#EF4444', 'VI': '#991B1B'
}

// SAIL Matrix (fGRC x ARC)
const SAIL_MATRIX = {
  1: { 'ARC-a': 'I', 'ARC-b': 'I', 'ARC-c': 'II', 'ARC-d': 'IV' },
  2: { 'ARC-a': 'I', 'ARC-b': 'I', 'ARC-c': 'II', 'ARC-d': 'IV' },
  3: { 'ARC-a': 'II', 'ARC-b': 'II', 'ARC-c': 'III', 'ARC-d': 'V' },
  4: { 'ARC-a': 'II', 'ARC-b': 'III', 'ARC-c': 'III', 'ARC-d': 'V' },
  5: { 'ARC-a': 'III', 'ARC-b': 'III', 'ARC-c': 'IV', 'ARC-d': 'VI' },
  6: { 'ARC-a': 'III', 'ARC-b': 'IV', 'ARC-c': 'IV', 'ARC-d': 'VI' },
  7: { 'ARC-a': 'IV', 'ARC-b': 'IV', 'ARC-c': 'V', 'ARC-d': 'VI' }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatCurrency(amount) {
  if (!amount && amount !== 0) return '--'
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount)
}

function calculateSORA(sora) {
  if (!sora?.population || !sora?.uaCharacteristics) {
    return { iGRC: null, fGRC: null, sail: null }
  }

  // Get intrinsic GRC
  const iGRC = GRC_MATRIX[sora.population]?.[sora.uaCharacteristics] || null
  if (iGRC === null) return { iGRC: null, fGRC: null, sail: null }

  // Calculate final GRC with mitigations
  let fGRC = iGRC
  const mitigations = sora.mitigations || {}

  Object.entries(mitigations).forEach(([key, config]) => {
    if (config?.enabled && config?.robustness) {
      const reduction = GROUND_MITIGATIONS[key]?.reductions[config.robustness] || 0
      fGRC += reduction
    }
  })

  fGRC = Math.max(1, Math.min(fGRC, 10)) // Clamp to 1-10

  // Determine SAIL
  const arc = sora.residualARC || sora.initialARC || 'ARC-b'
  const sail = fGRC <= 7 ? SAIL_MATRIX[fGRC]?.[arc] : null

  return { iGRC, fGRC, sail, arc, withinScope: fGRC <= 7 }
}

// ============================================
// COLLAPSIBLE SECTION COMPONENT
// ============================================

function Section({ title, icon: Icon, children, defaultOpen = true, badge = null, badgeColor = 'gray' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const badgeColors = {
    gray: 'bg-gray-100 text-gray-700',
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-700',
    blue: 'bg-blue-100 text-blue-700'
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-gray-500" />}
          <span className="font-medium text-gray-900">{title}</span>
          {badge && (
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${badgeColors[badgeColor]}`}>
              {badge}
            </span>
          )}
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && <div className="p-4 space-y-4">{children}</div>}
    </div>
  )
}

// ============================================
// OVERVIEW TAB
// ============================================

function OverviewTab({ project, resources, soraCalc, onUpdate }) {
  const crewCount = resources.filter(r => r.resource_type === 'operator').length
  const equipmentCount = resources.filter(r => r.resource_type === 'equipment').length
  const hasPIC = resources.some(r => r.role === 'PIC')

  return (
    <div className="space-y-6">
      {/* Project Header Card */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              {project.client_name && (
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />{project.client_name}
                </span>
              )}
              {project.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />{project.location}
                </span>
              )}
              {project.category && (
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />{project.category}
                </span>
              )}
            </div>
          </div>

          {/* SORA Summary */}
          <div className="flex items-center gap-6">
            {soraCalc.sail && (
              <div className="text-center">
                <p className="text-white/70 text-xs uppercase mb-1">SAIL</p>
                <span
                  className="inline-block px-4 py-1 rounded-full text-lg font-bold"
                  style={{ backgroundColor: SAIL_COLORS[soraCalc.sail], color: ['I', 'II'].includes(soraCalc.sail) ? '#1F2937' : '#FFF' }}
                >
                  {soraCalc.sail}
                </span>
              </div>
            )}
            <div className="text-center">
              <p className="text-white/70 text-xs uppercase mb-1">Crew</p>
              <p className="text-2xl font-bold">{crewCount}</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-xs uppercase mb-1">Equipment</p>
              <p className="text-2xl font-bold">{equipmentCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warnings */}
      {!hasPIC && crewCount > 0 && (
        <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <div>
            <p className="font-medium text-amber-800">No Pilot in Command assigned</p>
            <p className="text-sm text-amber-700">At least one crew member should be designated as PIC.</p>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <Calendar className="w-6 h-6 mx-auto text-gray-400 mb-2" />
          <p className="text-lg font-bold text-gray-900">
            {project.start_date ? format(parseISO(project.start_date), 'MMM d') : '--'}
          </p>
          <p className="text-xs text-gray-500">Start Date</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <Calendar className="w-6 h-6 mx-auto text-gray-400 mb-2" />
          <p className="text-lg font-bold text-gray-900">
            {project.due_date ? format(parseISO(project.due_date), 'MMM d') : '--'}
          </p>
          <p className="text-xs text-gray-500">Due Date</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <DollarSign className="w-6 h-6 mx-auto text-gray-400 mb-2" />
          <p className="text-lg font-bold text-gray-900">{formatCurrency(project.estimated_cost)}</p>
          <p className="text-xs text-gray-500">Est. Cost</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <DollarSign className="w-6 h-6 mx-auto text-green-500 mb-2" />
          <p className="text-lg font-bold text-gray-900">{formatCurrency(project.quoted_price)}</p>
          <p className="text-xs text-gray-500">Quoted Price</p>
        </div>
      </div>

      {/* Project Details */}
      <Section title="Project Details" icon={FileText}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={project.description || ''}
              onChange={(e) => onUpdate({ description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="Project description and objectives..."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={project.start_date || ''}
                onChange={(e) => onUpdate({ start_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={project.end_date || ''}
                onChange={(e) => onUpdate({ end_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                value={project.due_date || ''}
                onChange={(e) => onUpdate({ due_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={project.location || ''}
                onChange={(e) => onUpdate({ location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Site location"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Altitude (m AGL)</label>
              <input
                type="number"
                value={project.max_altitude_m || ''}
                onChange={(e) => onUpdate({ max_altitude_m: e.target.value ? parseInt(e.target.value) : null })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="120"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Flight Speed (m/s)</label>
              <input
                type="number"
                step="0.1"
                value={project.flight_speed_ms || ''}
                onChange={(e) => onUpdate({ flight_speed_ms: e.target.value ? parseFloat(e.target.value) : null })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="10"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Client Information */}
      <Section title="Client Information" icon={Users}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
            <input
              type="text"
              value={project.client_name || ''}
              onChange={(e) => onUpdate({ client_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
            <input
              type="text"
              value={project.client_contact || ''}
              onChange={(e) => onUpdate({ client_contact: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={project.client_email || ''}
              onChange={(e) => onUpdate({ client_email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={project.client_phone || ''}
              onChange={(e) => onUpdate({ client_phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </Section>

      {/* Notification Contacts */}
      <Section title="Notification Contacts" icon={Radio} badge="GO/NO-GO Alerts">
        <NotificationContacts project={project} onUpdate={onUpdate} />
      </Section>

      {/* Notes */}
      <Section title="Notes" icon={FileText} defaultOpen={false}>
        <textarea
          value={project.notes || ''}
          onChange={(e) => onUpdate({ notes: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Additional project notes..."
        />
      </Section>
    </div>
  )
}

// ============================================
// NOTIFICATION CONTACTS COMPONENT
// ============================================

function NotificationContacts({ project, onUpdate }) {
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' })
  const contacts = project.notification_contacts || []

  const addContact = () => {
    if (!newContact.name) return
    onUpdate({ notification_contacts: [...contacts, { ...newContact }] })
    setNewContact({ name: '', email: '', phone: '' })
  }

  const removeContact = (index) => {
    onUpdate({ notification_contacts: contacts.filter((_, i) => i !== index) })
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">These contacts will be notified when GO/NO-GO decisions are made.</p>

      {contacts.length > 0 && (
        <div className="space-y-2">
          {contacts.map((contact, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{contact.name}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  {contact.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{contact.email}</span>}
                  {contact.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{contact.phone}</span>}
                </div>
              </div>
              <button onClick={() => removeContact(i)} className="p-1 text-gray-400 hover:text-red-500">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          placeholder="Name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
        />
        <input
          type="email"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
          placeholder="Email"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
        />
        <input
          type="tel"
          value={newContact.phone}
          onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
          placeholder="Phone"
          className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm"
        />
        <button onClick={addContact} className="px-3 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

// ============================================
// RESOURCES & COSTS TAB
// ============================================

function ResourcesTab({ projectId, project, resources, onRefresh, onUpdateProject }) {
  const [operators, setOperators] = useState([])
  const [equipment, setEquipment] = useState([])
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(null) // 'operator', 'equipment', 'service', or null
  const [selectedResource, setSelectedResource] = useState('')
  const [role, setRole] = useState('')
  const [estimatedHours, setEstimatedHours] = useState('')
  const [estimatedDays, setEstimatedDays] = useState('')

  // Cost settings from project
  const costSettings = project.cost_settings || { overhead_percent: 15, markup_percent: 20 }

  useEffect(() => {
    loadLibraries()
  }, [])

  const loadLibraries = async () => {
    try {
      const [ops, equip, svc] = await Promise.all([getOperators(), getEquipment(), getServices()])
      setOperators(ops.filter(o => o.status === 'active'))
      setEquipment(equip.filter(e => e.status === 'active'))
      setServices(svc.filter(s => s.status === 'active'))
    } catch (err) {
      console.error('Failed to load libraries:', err)
    } finally {
      setLoading(false)
    }
  }

  // Calculate costs
  const costBreakdown = useMemo(() => {
    let personnelCost = 0
    let equipmentCost = 0
    let servicesCost = 0

    resources.forEach(r => {
      const hours = parseFloat(r.actual_hours || r.estimated_hours) || 0
      const days = parseFloat(r.actual_days || r.estimated_days) || 0
      const rate = parseFloat(r.rate_amount) || 0

      let cost = 0
      if (r.rate_type === 'hourly') cost = rate * hours
      else if (r.rate_type === 'daily') cost = rate * days
      else if (r.rate_type === 'weekly') cost = rate * (days / 7)

      if (r.resource_type === 'operator') personnelCost += cost
      else if (r.resource_type === 'equipment') equipmentCost += cost
      else if (r.resource_type === 'service') servicesCost += cost
    })

    const subtotal = personnelCost + equipmentCost + servicesCost
    const overhead = subtotal * (costSettings.overhead_percent / 100)
    const beforeMarkup = subtotal + overhead
    const markup = beforeMarkup * (costSettings.markup_percent / 100)
    const total = beforeMarkup + markup

    return { personnelCost, equipmentCost, servicesCost, subtotal, overhead, markup, total }
  }, [resources, costSettings])

  const getAvailableResources = (type) => {
    const assignedIds = resources.filter(r => r.resource_type === type).map(r => r.resource_id)
    switch (type) {
      case 'operator': return operators.filter(o => !assignedIds.includes(o.id))
      case 'equipment': return equipment.filter(e => !assignedIds.includes(e.id))
      case 'service': return services.filter(s => !assignedIds.includes(s.id))
      default: return []
    }
  }

  const handleAdd = async () => {
    if (!selectedResource || !showAdd) return
    const available = getAvailableResources(showAdd)
    const resource = available.find(r => r.id === selectedResource)
    if (!resource) return

    try {
      let name = ''
      let rate = null
      let rateType = null

      if (showAdd === 'operator') {
        name = `${resource.first_name} ${resource.last_name}`
        rate = resource.hourly_rate || resource.daily_rate
        rateType = resource.hourly_rate ? 'hourly' : resource.daily_rate ? 'daily' : null
      } else {
        name = resource.name
        rate = resource.hourly_rate || resource.daily_rate
        rateType = resource.hourly_rate ? 'hourly' : resource.daily_rate ? 'daily' : null
      }

      await createProjectResource({
        project_id: projectId,
        resource_type: showAdd,
        resource_id: selectedResource,
        resource_name: name,
        role: role || null,
        rate_type: rateType,
        rate_amount: rate,
        estimated_hours: estimatedHours ? parseFloat(estimatedHours) : null,
        estimated_days: estimatedDays ? parseFloat(estimatedDays) : null
      })

      setShowAdd(null)
      setSelectedResource('')
      setRole('')
      setEstimatedHours('')
      setEstimatedDays('')
      onRefresh()
    } catch (err) {
      alert('Failed to add resource: ' + err.message)
    }
  }

  const handleRemove = async (resourceId) => {
    if (!confirm('Remove this resource from the project?')) return
    try {
      await deleteProjectResource(resourceId)
      onRefresh()
    } catch (err) {
      alert('Failed to remove: ' + err.message)
    }
  }

  const handleUpdateResource = async (resourceId, updates) => {
    try {
      await updateProjectResource(resourceId, updates)
      onRefresh()
    } catch (err) {
      console.error('Failed to update resource:', err)
    }
  }

  const updateCostSettings = (key, value) => {
    onUpdateProject({
      cost_settings: { ...costSettings, [key]: parseFloat(value) || 0 }
    })
  }

  const groupedResources = {
    operator: resources.filter(r => r.resource_type === 'operator'),
    equipment: resources.filter(r => r.resource_type === 'equipment'),
    service: resources.filter(r => r.resource_type === 'service')
  }

  const renderResourceGroup = (type, items, icon, label) => (
    <Section title={label} icon={icon} badge={`${items.length}`} badgeColor={items.length > 0 ? 'blue' : 'gray'}>
      {items.length > 0 ? (
        <div className="space-y-2">
          {items.map(resource => (
            <div key={resource.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-900">{resource.resource_name}</p>
                  {resource.role && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">{resource.role}</span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  {resource.rate_amount && (
                    <span>${resource.rate_amount}/{resource.rate_type === 'hourly' ? 'hr' : 'day'}</span>
                  )}
                  <input
                    type="number"
                    placeholder="Hours"
                    value={resource.estimated_hours || ''}
                    onChange={(e) => handleUpdateResource(resource.id, { estimated_hours: e.target.value ? parseFloat(e.target.value) : null })}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-xs"
                  />
                  <input
                    type="number"
                    placeholder="Days"
                    value={resource.estimated_days || ''}
                    onChange={(e) => handleUpdateResource(resource.id, { estimated_days: e.target.value ? parseFloat(e.target.value) : null })}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-xs"
                  />
                </div>
              </div>
              <button onClick={() => handleRemove(resource.id)} className="p-2 text-gray-400 hover:text-red-500">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 text-center py-4">No {label.toLowerCase()} assigned</p>
      )}
      <button
        onClick={() => setShowAdd(type)}
        className="w-full mt-2 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-brand-500 hover:text-brand-600"
      >
        <Plus className="w-4 h-4 inline mr-1" />Add {label.slice(0, -1)}
      </button>
    </Section>
  )

  return (
    <div className="space-y-6">
      {/* Cost Summary Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-brand-600" />
          Cost Estimate
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-xs text-blue-600 font-medium">Personnel</p>
            <p className="text-xl font-bold text-blue-900">{formatCurrency(costBreakdown.personnelCost)}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-xs text-green-600 font-medium">Equipment</p>
            <p className="text-xl font-bold text-green-900">{formatCurrency(costBreakdown.equipmentCost)}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <p className="text-xs text-purple-600 font-medium">Services</p>
            <p className="text-xl font-bold text-purple-900">{formatCurrency(costBreakdown.servicesCost)}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-3">
            <p className="text-xs text-gray-600 font-medium">Total</p>
            <p className="text-xl font-bold text-gray-900">{formatCurrency(costBreakdown.total)}</p>
          </div>
        </div>

        {/* Cost Settings */}
        <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Overhead:</label>
            <input
              type="number"
              value={costSettings.overhead_percent}
              onChange={(e) => updateCostSettings('overhead_percent', e.target.value)}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
            />
            <span className="text-sm text-gray-500">%</span>
            <span className="text-sm text-gray-400">({formatCurrency(costBreakdown.overhead)})</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Markup:</label>
            <input
              type="number"
              value={costSettings.markup_percent}
              onChange={(e) => updateCostSettings('markup_percent', e.target.value)}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
            />
            <span className="text-sm text-gray-500">%</span>
            <span className="text-sm text-gray-400">({formatCurrency(costBreakdown.markup)})</span>
          </div>
        </div>
      </div>

      {/* Resource Groups */}
      {renderResourceGroup('operator', groupedResources.operator, Users, 'Crew')}
      {renderResourceGroup('equipment', groupedResources.equipment, Package, 'Equipment')}
      {renderResourceGroup('service', groupedResources.service, Briefcase, 'Services')}

      {/* Add Resource Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Add {showAdd === 'operator' ? 'Crew Member' : showAdd.charAt(0).toUpperCase() + showAdd.slice(1)}</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select {showAdd}</label>
                <select
                  value={selectedResource}
                  onChange={(e) => setSelectedResource(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select...</option>
                  {getAvailableResources(showAdd).map(r => (
                    <option key={r.id} value={r.id}>
                      {showAdd === 'operator' ? `${r.first_name} ${r.last_name}` : r.name}
                      {r.hourly_rate && ` ($${r.hourly_rate}/hr)`}
                      {r.daily_rate && ` ($${r.daily_rate}/day)`}
                    </option>
                  ))}
                </select>
              </div>

              {showAdd === 'operator' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="">Select role...</option>
                    {ROLE_OPTIONS.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Est. Hours</label>
                  <input
                    type="number"
                    value={estimatedHours}
                    onChange={(e) => setEstimatedHours(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Est. Days</label>
                  <input
                    type="number"
                    value={estimatedDays}
                    onChange={(e) => setEstimatedDays(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowAdd(null)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
              <button onClick={handleAdd} disabled={!selectedResource} className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// SORA TAB
// ============================================

function SORATab({ project, onUpdate }) {
  const sora = project.sora_assessment || {}
  const calc = calculateSORA(sora)

  const updateSORA = (updates) => {
    onUpdate({ sora_assessment: { ...sora, ...updates } })
  }

  const updateMitigation = (key, config) => {
    updateSORA({ mitigations: { ...sora.mitigations, [key]: config } })
  }

  return (
    <div className="space-y-6">
      {/* SORA Summary Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-brand-600" />
          SORA Risk Assessment Summary
        </h3>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* GRC Flow */}
          <div className="flex items-center gap-2">
            <div className={`px-4 py-2 rounded-lg border-2 text-center ${calc.iGRC ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
              <p className="text-xs text-gray-500">iGRC</p>
              <p className="text-2xl font-bold">{calc.iGRC ?? '?'}</p>
            </div>
            <span className="text-gray-400">→</span>
            <div className={`px-4 py-2 rounded-lg border-2 text-center ${calc.fGRC ? (calc.withinScope ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50') : 'border-gray-200 bg-gray-50'}`}>
              <p className="text-xs text-gray-500">fGRC</p>
              <p className="text-2xl font-bold">{calc.fGRC ?? '?'}</p>
            </div>
          </div>

          <span className="text-2xl text-gray-300">+</span>

          {/* ARC */}
          <div className={`px-4 py-2 rounded-lg border-2 text-center ${calc.arc ? 'border-purple-300 bg-purple-50' : 'border-gray-200 bg-gray-50'}`}>
            <p className="text-xs text-gray-500">ARC</p>
            <p className="text-lg font-bold">{calc.arc || '?'}</p>
          </div>

          <span className="text-2xl text-gray-300">=</span>

          {/* SAIL */}
          <div
            className="px-6 py-3 rounded-lg text-center"
            style={{ backgroundColor: calc.sail ? SAIL_COLORS[calc.sail] : '#E5E7EB' }}
          >
            <p className="text-xs" style={{ color: calc.sail && ['I', 'II'].includes(calc.sail) ? '#374151' : '#FFF', opacity: 0.8 }}>SAIL</p>
            <p className="text-3xl font-bold" style={{ color: calc.sail && ['I', 'II'].includes(calc.sail) ? '#1F2937' : '#FFF' }}>
              {calc.sail || '?'}
            </p>
          </div>
        </div>

        {calc.fGRC > 7 && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-700 font-medium">fGRC &gt; 7: Outside SORA scope - requires additional authorization</p>
          </div>
        )}
      </div>

      {/* Step 1: Population Category */}
      <Section title="Step 1: Population Category" icon={Users}>
        <p className="text-sm text-gray-500 mb-4">Select the population density of the operational area.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {Object.entries(POPULATION_CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => updateSORA({ population: key })}
              className={`p-3 rounded-lg border text-left transition-all ${
                sora.population === key
                  ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <p className={`text-sm font-medium ${sora.population === key ? 'text-brand-700' : 'text-gray-900'}`}>
                {cat.label.split('(')[0].trim()}
              </p>
              <p className="text-xs text-gray-500 mt-1">{cat.description}</p>
            </button>
          ))}
        </div>
      </Section>

      {/* Step 2: UA Characteristics */}
      <Section title="Step 2: UA Characteristics" icon={Plane}>
        <p className="text-sm text-gray-500 mb-4">Select the maximum dimension and speed of your UA.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {Object.entries(UA_CHARACTERISTICS).map(([key, char]) => (
            <button
              key={key}
              onClick={() => updateSORA({ uaCharacteristics: key })}
              className={`p-3 rounded-lg border text-center transition-all ${
                sora.uaCharacteristics === key
                  ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <p className={`text-sm font-medium ${sora.uaCharacteristics === key ? 'text-brand-700' : 'text-gray-900'}`}>
                {char.label}
              </p>
            </button>
          ))}
        </div>
      </Section>

      {/* Step 3: Ground Mitigations */}
      <Section title="Step 3: Ground Risk Mitigations" icon={Target}>
        <p className="text-sm text-gray-500 mb-4">Apply mitigations to reduce the Ground Risk Class.</p>
        <div className="space-y-3">
          {Object.entries(GROUND_MITIGATIONS).map(([key, mit]) => {
            const config = sora.mitigations?.[key] || { enabled: false, robustness: 'low' }
            return (
              <div key={key} className={`p-4 rounded-lg border ${config.enabled ? 'border-brand-300 bg-brand-50' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enabled}
                      onChange={(e) => updateMitigation(key, { ...config, enabled: e.target.checked })}
                      className="w-4 h-4 text-brand-600 rounded"
                    />
                    <span className="font-medium text-gray-900">{mit.name}</span>
                  </label>
                  {config.enabled && (
                    <span className="text-sm font-medium text-green-600">
                      {mit.reductions[config.robustness]} GRC
                    </span>
                  )}
                </div>
                {config.enabled && (
                  <div className="mt-3 ml-7 flex gap-2">
                    {['low', 'medium', 'high'].map(level => (
                      <button
                        key={level}
                        onClick={() => updateMitigation(key, { ...config, robustness: level })}
                        className={`px-3 py-1 rounded text-sm capitalize ${
                          config.robustness === level
                            ? 'bg-brand-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level} ({mit.reductions[level]})
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Section>

      {/* Step 4: Air Risk */}
      <Section title="Step 4: Air Risk Class" icon={Navigation}>
        <p className="text-sm text-gray-500 mb-4">Select the initial and residual Air Risk Class.</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Initial ARC</label>
            <div className="flex gap-2">
              {ARC_LEVELS.map(arc => (
                <button
                  key={arc}
                  onClick={() => updateSORA({ initialARC: arc })}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium ${
                    sora.initialARC === arc
                      ? 'border-brand-600 bg-brand-50 text-brand-700'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {arc}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Residual ARC (after TMPR)</label>
            <div className="flex gap-2">
              {ARC_LEVELS.map(arc => (
                <button
                  key={arc}
                  onClick={() => updateSORA({ residualARC: arc })}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium ${
                    sora.residualARC === arc
                      ? 'border-brand-600 bg-brand-50 text-brand-700'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {arc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

// ============================================
// SAFETY TAB
// ============================================

function SafetyTab({ project, onUpdate }) {
  const safety = project.safety_plan || {}

  const updateSafety = (updates) => {
    onUpdate({ safety_plan: { ...safety, ...updates } })
  }

  const addHazard = () => {
    const hazards = safety.hazards || []
    updateSafety({
      hazards: [...hazards, { id: Date.now(), hazard: '', controls: '', severity: 'medium' }]
    })
  }

  const updateHazard = (id, updates) => {
    const hazards = (safety.hazards || []).map(h => h.id === id ? { ...h, ...updates } : h)
    updateSafety({ hazards })
  }

  const removeHazard = (id) => {
    updateSafety({ hazards: (safety.hazards || []).filter(h => h.id !== id) })
  }

  const addEmergencyContact = () => {
    const contacts = safety.emergency_contacts || []
    updateSafety({
      emergency_contacts: [...contacts, { id: Date.now(), name: '', role: '', phone: '' }]
    })
  }

  const updateEmergencyContact = (id, updates) => {
    const contacts = (safety.emergency_contacts || []).map(c => c.id === id ? { ...c, ...updates } : c)
    updateSafety({ emergency_contacts: contacts })
  }

  const removeEmergencyContact = (id) => {
    updateSafety({ emergency_contacts: (safety.emergency_contacts || []).filter(c => c.id !== id) })
  }

  return (
    <div className="space-y-6">
      {/* HSE Risk Assessment */}
      <Section title="Hazards & Controls" icon={AlertTriangle} badge={`${(safety.hazards || []).length}`}>
        <p className="text-sm text-gray-500 mb-4">Identify hazards and their control measures.</p>

        {(safety.hazards || []).map((hazard, index) => (
          <div key={hazard.id} className="p-4 bg-gray-50 rounded-lg mb-3">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                {index + 1}
              </span>
              <div className="flex-1 space-y-3">
                <input
                  type="text"
                  value={hazard.hazard}
                  onChange={(e) => updateHazard(hazard.id, { hazard: e.target.value })}
                  placeholder="Describe the hazard..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={hazard.controls}
                  onChange={(e) => updateHazard(hazard.id, { controls: e.target.value })}
                  placeholder="Control measures..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <div className="flex gap-2">
                  {['low', 'medium', 'high'].map(sev => (
                    <button
                      key={sev}
                      onClick={() => updateHazard(hazard.id, { severity: sev })}
                      className={`px-3 py-1 rounded text-xs capitalize ${
                        hazard.severity === sev
                          ? sev === 'high' ? 'bg-red-600 text-white' : sev === 'medium' ? 'bg-yellow-500 text-white' : 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {sev}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => removeHazard(hazard.id)} className="p-1 text-gray-400 hover:text-red-500">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        <button onClick={addHazard} className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-brand-500 hover:text-brand-600">
          <Plus className="w-4 h-4 inline mr-1" />Add Hazard
        </button>
      </Section>

      {/* Emergency Contacts */}
      <Section title="Emergency Contacts" icon={Phone}>
        {(safety.emergency_contacts || []).map((contact) => (
          <div key={contact.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-2">
            <input
              type="text"
              value={contact.name}
              onChange={(e) => updateEmergencyContact(contact.id, { name: e.target.value })}
              placeholder="Name"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <input
              type="text"
              value={contact.role}
              onChange={(e) => updateEmergencyContact(contact.id, { role: e.target.value })}
              placeholder="Role"
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => updateEmergencyContact(contact.id, { phone: e.target.value })}
              placeholder="Phone"
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <button onClick={() => removeEmergencyContact(contact.id)} className="p-1 text-gray-400 hover:text-red-500">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button onClick={addEmergencyContact} className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-brand-500 hover:text-brand-600">
          <Plus className="w-4 h-4 inline mr-1" />Add Contact
        </button>
      </Section>

      {/* Emergency Facilities */}
      <Section title="Emergency Facilities" icon={Building2}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nearest Hospital</label>
            <input
              type="text"
              value={safety.nearest_hospital || ''}
              onChange={(e) => updateSafety({ nearest_hospital: e.target.value })}
              placeholder="Hospital name and address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Phone</label>
            <input
              type="tel"
              value={safety.hospital_phone || ''}
              onChange={(e) => updateSafety({ hospital_phone: e.target.value })}
              placeholder="Phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Muster Point / Rally Point</label>
          <input
            type="text"
            value={safety.muster_point || ''}
            onChange={(e) => updateSafety({ muster_point: e.target.value })}
            placeholder="Describe the muster point location"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </Section>

      {/* PPE Requirements */}
      <Section title="PPE Requirements" icon={HardHat}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {['Safety Vest', 'Hard Hat', 'Safety Boots', 'Safety Glasses', 'Hearing Protection', 'Gloves', 'Sunscreen', 'First Aid Kit'].map(item => {
            const ppe = safety.ppe || []
            const isSelected = ppe.includes(item)
            return (
              <button
                key={item}
                onClick={() => updateSafety({ ppe: isSelected ? ppe.filter(p => p !== item) : [...ppe, item] })}
                className={`p-3 rounded-lg border text-sm text-left ${
                  isSelected ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-4 h-4 inline mr-2" />}
                {item}
              </button>
            )
          })}
        </div>
      </Section>

      {/* Communications */}
      <Section title="Communications" icon={Radio}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Channel</label>
            <input
              type="text"
              value={safety.primary_channel || ''}
              onChange={(e) => updateSafety({ primary_channel: e.target.value })}
              placeholder="e.g., Channel 1, 462.5625 MHz"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Backup Channel</label>
            <input
              type="text"
              value={safety.backup_channel || ''}
              onChange={(e) => updateSafety({ backup_channel: e.target.value })}
              placeholder="e.g., Cell phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Word</label>
            <input
              type="text"
              value={safety.emergency_word || ''}
              onChange={(e) => updateSafety({ emergency_word: e.target.value })}
              placeholder="e.g., MAYDAY"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stop Word</label>
            <input
              type="text"
              value={safety.stop_word || ''}
              onChange={(e) => updateSafety({ stop_word: e.target.value })}
              placeholder="e.g., ABORT"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </Section>
    </div>
  )
}

// ============================================
// TAILGATE TAB
// ============================================

function TailgateTab({ projectId, project, meetings, resources, onRefresh }) {
  const [showNew, setShowNew] = useState(false)
  const [expandedMeeting, setExpandedMeeting] = useState(null)
  const [newMeeting, setNewMeeting] = useState({
    meeting_date: new Date().toISOString().split('T')[0],
    meeting_time: new Date().toTimeString().slice(0, 5),
    location: project.location || '',
    conducted_by: '',
    objectives: '',
    identified_risks: '',
    controls: '',
    weather_conditions: '',
    decision: null,
    decision_reason: ''
  })

  const handleCreate = async () => {
    if (!newMeeting.meeting_date || !newMeeting.conducted_by) {
      alert('Date and Conducted By are required')
      return
    }

    try {
      await createTailgateMeeting({
        project_id: projectId,
        ...newMeeting,
        attendees: resources.filter(r => r.resource_type === 'operator').map(r => ({
          name: r.resource_name,
          role: r.role,
          fit_for_duty: true
        })),
        status: 'draft'
      })
      setShowNew(false)
      setNewMeeting({
        meeting_date: new Date().toISOString().split('T')[0],
        meeting_time: new Date().toTimeString().slice(0, 5),
        location: project.location || '',
        conducted_by: '',
        objectives: '',
        identified_risks: '',
        controls: '',
        weather_conditions: '',
        decision: null,
        decision_reason: ''
      })
      onRefresh()
    } catch (err) {
      alert('Failed to create: ' + err.message)
    }
  }

  const handleDecision = async (meetingId, decision) => {
    try {
      await updateTailgateMeeting(meetingId, {
        decision,
        decision_time: new Date().toISOString(),
        status: 'completed'
      })
      // TODO: Send notifications via Twilio/email
      onRefresh()
    } catch (err) {
      alert('Failed to update: ' + err.message)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Tailgate Meetings</h2>
          <p className="text-sm text-gray-500">Pre-deployment briefings and GO/NO-GO decisions</p>
        </div>
        <button
          onClick={() => setShowNew(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-4 h-4" />
          New Meeting
        </button>
      </div>

      {/* New Meeting Form */}
      {showNew && (
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-gray-900">New Tailgate Meeting</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input type="date" value={newMeeting.meeting_date} onChange={(e) => setNewMeeting({ ...newMeeting, meeting_date: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input type="time" value={newMeeting.meeting_time} onChange={(e) => setNewMeeting({ ...newMeeting, meeting_time: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input type="text" value={newMeeting.location} onChange={(e) => setNewMeeting({ ...newMeeting, location: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Conducted By *</label>
              <input type="text" value={newMeeting.conducted_by} onChange={(e) => setNewMeeting({ ...newMeeting, conducted_by: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Name" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Objectives</label>
            <textarea value={newMeeting.objectives} onChange={(e) => setNewMeeting({ ...newMeeting, objectives: e.target.value })} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Today's objectives..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Identified Risks</label>
              <textarea value={newMeeting.identified_risks} onChange={(e) => setNewMeeting({ ...newMeeting, identified_risks: e.target.value })} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Key risks for today..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Controls</label>
              <textarea value={newMeeting.controls} onChange={(e) => setNewMeeting({ ...newMeeting, controls: e.target.value })} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Control measures..." />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Weather Conditions</label>
            <input type="text" value={newMeeting.weather_conditions} onChange={(e) => setNewMeeting({ ...newMeeting, weather_conditions: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="e.g., Clear, 15°C, 10 km/h NW" />
          </div>

          <div className="flex justify-end gap-3">
            <button onClick={() => setShowNew(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
            <button onClick={handleCreate} className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">Create Meeting</button>
          </div>
        </div>
      )}

      {/* Meetings List */}
      {meetings.length > 0 ? (
        <div className="space-y-4">
          {meetings.map(meeting => (
            <div key={meeting.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {format(parseISO(meeting.meeting_date), 'EEEE, MMMM d, yyyy')}
                    </p>
                    <p className="text-sm text-gray-500">
                      {meeting.meeting_time || 'Time not set'} • {meeting.conducted_by}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {meeting.decision === 'go' && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">GO</span>}
                  {meeting.decision === 'nogo' && <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">NO-GO</span>}
                  {meeting.decision === 'conditional' && <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold">CONDITIONAL</span>}
                  {!meeting.decision && <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Pending</span>}
                </div>
              </div>

              <div className="p-4">
                {meeting.objectives && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 uppercase font-medium">Objectives</p>
                    <p className="text-sm text-gray-700">{meeting.objectives}</p>
                  </div>
                )}

                {!meeting.decision && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleDecision(meeting.id, 'go')}
                      className="flex-1 py-4 bg-green-100 text-green-700 rounded-lg font-bold hover:bg-green-200 flex items-center justify-center gap-2"
                    >
                      <ThumbsUp className="w-5 h-5" />GO
                    </button>
                    <button
                      onClick={() => handleDecision(meeting.id, 'conditional')}
                      className="flex-1 py-4 bg-yellow-100 text-yellow-700 rounded-lg font-bold hover:bg-yellow-200"
                    >
                      CONDITIONAL
                    </button>
                    <button
                      onClick={() => handleDecision(meeting.id, 'nogo')}
                      className="flex-1 py-4 bg-red-100 text-red-700 rounded-lg font-bold hover:bg-red-200 flex items-center justify-center gap-2"
                    >
                      <ThumbsDown className="w-5 h-5" />NO-GO
                    </button>
                  </div>
                )}

                {meeting.decision && meeting.decision_time && (
                  <p className="text-xs text-gray-500 mt-3">
                    Decision made: {format(parseISO(meeting.decision_time), 'MMM d, yyyy h:mm a')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <ClipboardCheck className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No tailgate meetings yet</p>
          <button onClick={() => setShowNew(true)} className="mt-4 text-brand-600 hover:text-brand-700 text-sm font-medium">
            Schedule your first meeting
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// DOCUMENTS TAB
// ============================================

function DocumentsTab({ project }) {
  return (
    <div className="space-y-6">
      <Section title="Document Generation" icon={FileText}>
        <p className="text-sm text-gray-500 mb-4">Generate project documentation for internal use or client delivery.</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-brand-500 hover:bg-brand-50 transition-colors">
            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-gray-700">Internal Operations Plan</p>
            <p className="text-xs text-gray-500 mt-1">Costs, crew, needs analysis</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-brand-500 hover:bg-brand-50 transition-colors">
            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-gray-700">External Operations Plan</p>
            <p className="text-xs text-gray-500 mt-1">Site, flight, safety, SORA</p>
          </button>
        </div>
      </Section>

      <Section title="Linked Forms" icon={ClipboardCheck}>
        <p className="text-sm text-gray-500 mb-4">Forms associated with this project.</p>
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No forms linked yet</p>
          <p className="text-xs text-gray-400 mt-1">Forms from Google Forms will appear here</p>
        </div>
      </Section>
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const [project, setProject] = useState(null)
  const [stages, setStages] = useState([])
  const [resources, setResources] = useState([])
  const [meetings, setMeetings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('overview')
  const [saveStatus, setSaveStatus] = useState(SAVE_STATUS.IDLE)
  const [menuOpen, setMenuOpen] = useState(false)

  const projectRef = useRef(project)
  const saveTimeoutRef = useRef(null)
  const pendingChangesRef = useRef(false)

  useEffect(() => { projectRef.current = project }, [project])

  useEffect(() => {
    loadAll()
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
      if (pendingChangesRef.current && projectRef.current) saveToDb(projectRef.current)
    }
  }, [projectId])

  const loadAll = async () => {
    setLoading(true)
    try {
      const [proj, stg, res, mtg] = await Promise.all([
        getProject(projectId),
        getProjectStages(),
        getProjectResources(projectId),
        getTailgateMeetings(projectId)
      ])
      setProject(proj)
      setStages(stg)
      setResources(res)
      setMeetings(mtg)
    } catch (err) {
      setError('Failed to load project')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const saveToDb = async (data) => {
    if (!data || !projectId) return false
    setSaveStatus(SAVE_STATUS.SAVING)
    try {
      await updateProject(projectId, data)
      setSaveStatus(SAVE_STATUS.SAVED)
      pendingChangesRef.current = false
      setTimeout(() => setSaveStatus(prev => prev === SAVE_STATUS.SAVED ? SAVE_STATUS.IDLE : prev), 2000)
      return true
    } catch (err) {
      console.error('Save failed:', err)
      setSaveStatus(SAVE_STATUS.ERROR)
      setTimeout(() => setSaveStatus(SAVE_STATUS.PENDING), 3000)
      return false
    }
  }

  const scheduleSave = useCallback((data) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    pendingChangesRef.current = true
    setSaveStatus(SAVE_STATUS.PENDING)
    saveTimeoutRef.current = setTimeout(() => saveToDb(data), 2000)
  }, [projectId])

  const handleUpdate = useCallback((updates) => {
    setProject(prev => {
      if (!prev) return prev
      const newProject = { ...prev, ...updates }
      projectRef.current = newProject
      scheduleSave(newProject)
      return newProject
    })
  }, [scheduleSave])

  const handleStageChange = (stageId) => {
    const stage = stages.find(s => s.id === stageId)
    handleUpdate({ stage_id: stageId, stage_name: stage?.name || '' })
  }

  const handleStatusChange = (status) => handleUpdate({ status })

  const handleDelete = async () => {
    if (!confirm(`Delete "${project.name}"? This cannot be undone.`)) return
    try {
      await deleteProject(projectId)
      navigate('/projects')
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const handleManualSave = async () => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    await saveToDb(project)
  }

  const refreshResources = async () => {
    const res = await getProjectResources(projectId)
    setResources(res)
  }

  const refreshMeetings = async () => {
    const mtg = await getTailgateMeetings(projectId)
    setMeetings(mtg)
  }

  const soraCalc = useMemo(() => calculateSORA(project?.sora_assessment || {}), [project?.sora_assessment])

  const getStatusBadge = (status) => STATUS_OPTIONS.find(s => s.value === status)?.color || 'bg-gray-100 text-gray-700'

  const renderSaveStatus = () => {
    switch (saveStatus) {
      case SAVE_STATUS.PENDING: return <span className="text-sm text-amber-600 flex items-center gap-1"><Circle className="w-2 h-2 fill-current" />Unsaved</span>
      case SAVE_STATUS.SAVING: return <span className="text-sm text-blue-600 flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin" />Saving...</span>
      case SAVE_STATUS.SAVED: return <span className="text-sm text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" />Saved</span>
      case SAVE_STATUS.ERROR: return <span className="text-sm text-red-600 flex items-center gap-1"><AlertTriangle className="w-4 h-4" />Error</span>
      default: return null
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="space-y-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"><ArrowLeft className="w-4 h-4" />Back to Projects</Link>
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-amber-500" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Project Not Found</h2>
          <p className="text-gray-600">{error || 'The requested project could not be loaded.'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link to="/projects" className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <p className="text-gray-600">{project.client_name || 'No client assigned'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {renderSaveStatus()}
          <button onClick={handleManualSave} disabled={saveStatus === SAVE_STATUS.SAVING || saveStatus === SAVE_STATUS.IDLE} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">
            {saveStatus === SAVE_STATUS.SAVING ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}Save
          </button>
          <select value={project.stage_id || ''} onChange={(e) => handleStageChange(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            {stages.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <select value={project.status} onChange={(e) => handleStatusChange(e.target.value)} className={`px-3 py-2 rounded-lg border text-sm font-medium ${getStatusBadge(project.status)}`}>
            {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <MoreVertical className="w-5 h-5" />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                  <button onClick={() => { handleDelete(); setMenuOpen(false) }} className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                    <Trash2 className="w-4 h-4" />Delete Project
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="flex gap-1 min-w-max">
          {TABS.map(tab => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  isActive ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />{tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && <OverviewTab project={project} resources={resources} soraCalc={soraCalc} onUpdate={handleUpdate} />}
        {activeTab === 'resources' && <ResourcesTab projectId={projectId} project={project} resources={resources} onRefresh={refreshResources} onUpdateProject={handleUpdate} />}
        {activeTab === 'sora' && <SORATab project={project} onUpdate={handleUpdate} />}
        {activeTab === 'safety' && <SafetyTab project={project} onUpdate={handleUpdate} />}
        {activeTab === 'tailgate' && <TailgateTab projectId={projectId} project={project} meetings={meetings} resources={resources} onRefresh={refreshMeetings} />}
        {activeTab === 'documents' && <DocumentsTab project={project} />}
      </div>
    </div>
  )
}
