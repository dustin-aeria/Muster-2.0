import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft, Save, FolderOpen, Calendar, DollarSign, Users, MapPin,
  FileText, Settings2, Plane, AlertTriangle, CheckCircle2, Circle,
  Loader2, MoreVertical, Trash2, Archive, Clock, Package, ClipboardCheck,
  Radio, Shield, HardHat, ChevronDown, ChevronUp, Plus, X, Phone, Mail
} from 'lucide-react'
import {
  getProject, updateProject, deleteProject, getProjectStages,
  getProjectResources, createProjectResource, updateProjectResource, deleteProjectResource,
  getTailgateMeetings, createTailgateMeeting, updateTailgateMeeting,
  getOperators, getEquipment, getServices
} from '../lib/api'
import { format, parseISO } from 'date-fns'

// ============================================
// STATUS & STAGE CONFIGS
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
  { id: 'resources', label: 'Resources', icon: Users },
  { id: 'tailgate', label: 'Tailgate', icon: ClipboardCheck },
  { id: 'documents', label: 'Documents', icon: FileText }
]

// ============================================
// OVERVIEW TAB
// ============================================

function OverviewTab({ project, onUpdate }) {
  return (
    <div className="space-y-6">
      {/* Project Summary */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">{project.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-white/70">Client</p>
            <p className="font-semibold">{project.client_name || 'Not set'}</p>
          </div>
          <div>
            <p className="text-white/70">Category</p>
            <p className="font-semibold">{project.category || 'Not set'}</p>
          </div>
          <div>
            <p className="text-white/70">Stage</p>
            <p className="font-semibold">{project.stage_name || 'Not set'}</p>
          </div>
          <div>
            <p className="text-white/70">Location</p>
            <p className="font-semibold">{project.location || 'Not set'}</p>
          </div>
        </div>
      </div>

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
          <p className="text-lg font-bold text-gray-900">
            {project.estimated_cost ? `$${parseFloat(project.estimated_cost).toLocaleString()}` : '--'}
          </p>
          <p className="text-xs text-gray-500">Est. Cost</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <DollarSign className="w-6 h-6 mx-auto text-green-500 mb-2" />
          <p className="text-lg font-bold text-gray-900">
            {project.quoted_price ? `$${parseFloat(project.quoted_price).toLocaleString()}` : '--'}
          </p>
          <p className="text-xs text-gray-500">Quoted Price</p>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-brand-600" />
          Project Details
        </h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={project.description || ''}
            onChange={(e) => onUpdate({ description: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            placeholder="Project description..."
          />
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea
            value={project.notes || ''}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Additional notes..."
          />
        </div>
      </div>

      {/* Client Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-brand-600" />
          Client Information
        </h3>

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
      </div>

      {/* Notification Contacts */}
      <NotificationContacts project={project} onUpdate={onUpdate} />
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
    onUpdate({
      notification_contacts: [...contacts, { ...newContact }]
    })
    setNewContact({ name: '', email: '', phone: '' })
  }

  const removeContact = (index) => {
    const updated = contacts.filter((_, i) => i !== index)
    onUpdate({ notification_contacts: updated })
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
        <Radio className="w-5 h-5 text-brand-600" />
        Notification Contacts
        <span className="text-sm font-normal text-gray-500">(for GO/NO-GO alerts)</span>
      </h3>

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
// RESOURCES TAB
// ============================================

function ResourcesTab({ projectId, resources, onRefresh }) {
  const [operators, setOperators] = useState([])
  const [equipment, setEquipment] = useState([])
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [resourceType, setResourceType] = useState('operator')
  const [selectedResource, setSelectedResource] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    loadLibraries()
  }, [])

  const loadLibraries = async () => {
    try {
      const [ops, equip, svc] = await Promise.all([
        getOperators(),
        getEquipment(),
        getServices()
      ])
      setOperators(ops.filter(o => o.status === 'active'))
      setEquipment(equip.filter(e => e.status === 'active'))
      setServices(svc.filter(s => s.status === 'active'))
    } catch (err) {
      console.error('Failed to load libraries:', err)
    } finally {
      setLoading(false)
    }
  }

  const getAvailableResources = () => {
    const assignedIds = resources.map(r => r.resource_id)
    switch (resourceType) {
      case 'operator':
        return operators.filter(o => !assignedIds.includes(o.id))
      case 'equipment':
        return equipment.filter(e => !assignedIds.includes(e.id))
      case 'service':
        return services.filter(s => !assignedIds.includes(s.id))
      default:
        return []
    }
  }

  const getResourceName = (type, id) => {
    switch (type) {
      case 'operator':
        const op = operators.find(o => o.id === id)
        return op ? `${op.first_name} ${op.last_name}` : 'Unknown'
      case 'equipment':
        const eq = equipment.find(e => e.id === id)
        return eq?.name || 'Unknown'
      case 'service':
        const sv = services.find(s => s.id === id)
        return sv?.name || 'Unknown'
      default:
        return 'Unknown'
    }
  }

  const handleAdd = async () => {
    if (!selectedResource) return
    const available = getAvailableResources()
    const resource = available.find(r => r.id === selectedResource)
    if (!resource) return

    try {
      let name = ''
      let rate = null
      let rateType = null

      if (resourceType === 'operator') {
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
        resource_type: resourceType,
        resource_id: selectedResource,
        resource_name: name,
        role: role || null,
        rate_type: rateType,
        rate_amount: rate
      })

      setShowAdd(false)
      setSelectedResource('')
      setRole('')
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

  const resourceTypeIcons = {
    operator: Users,
    equipment: Package,
    service: Settings2
  }

  const groupedResources = {
    operator: resources.filter(r => r.resource_type === 'operator'),
    equipment: resources.filter(r => r.resource_type === 'equipment'),
    service: resources.filter(r => r.resource_type === 'service')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Project Resources</h2>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-4 h-4" />
          Add Resource
        </button>
      </div>

      {showAdd && (
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={resourceType}
                onChange={(e) => { setResourceType(e.target.value); setSelectedResource('') }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="operator">Operator</option>
                <option value="equipment">Equipment</option>
                <option value="service">Service</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Resource</label>
              <select
                value={selectedResource}
                onChange={(e) => setSelectedResource(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                {getAvailableResources().map(r => (
                  <option key={r.id} value={r.id}>
                    {resourceType === 'operator' ? `${r.first_name} ${r.last_name}` : r.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g., PIC, VO"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setShowAdd(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Cancel
            </button>
            <button onClick={handleAdd} disabled={!selectedResource} className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">
              Add to Project
            </button>
          </div>
        </div>
      )}

      {/* Resource Groups */}
      {['operator', 'equipment', 'service'].map(type => {
        const items = groupedResources[type]
        const Icon = resourceTypeIcons[type]
        if (items.length === 0) return null

        return (
          <div key={type} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <Icon className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900 capitalize">{type}s</h3>
              <span className="px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full text-xs">{items.length}</span>
            </div>
            <div className="divide-y divide-gray-100">
              {items.map(resource => (
                <div key={resource.id} className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{resource.resource_name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        {resource.role && <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">{resource.role}</span>}
                        {resource.rate_amount && (
                          <span>${resource.rate_amount}/{resource.rate_type === 'hourly' ? 'hr' : 'day'}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(resource.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {resources.length === 0 && !showAdd && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No resources assigned yet</p>
          <button
            onClick={() => setShowAdd(true)}
            className="mt-4 text-brand-600 hover:text-brand-700 text-sm font-medium"
          >
            Add your first resource
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// TAILGATE TAB
// ============================================

function TailgateTab({ projectId, project, meetings, onRefresh }) {
  const [showNew, setShowNew] = useState(false)
  const [newMeeting, setNewMeeting] = useState({
    meeting_date: new Date().toISOString().split('T')[0],
    meeting_time: '',
    location: project.location || '',
    conducted_by: '',
    decision: null
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
        status: 'draft'
      })
      setShowNew(false)
      setNewMeeting({
        meeting_date: new Date().toISOString().split('T')[0],
        meeting_time: '',
        location: project.location || '',
        conducted_by: '',
        decision: null
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
      onRefresh()
    } catch (err) {
      alert('Failed to update: ' + err.message)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Tailgate Meetings</h2>
        <button
          onClick={() => setShowNew(!showNew)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-4 h-4" />
          New Meeting
        </button>
      </div>

      {showNew && (
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input
                type="date"
                value={newMeeting.meeting_date}
                onChange={(e) => setNewMeeting({ ...newMeeting, meeting_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                value={newMeeting.meeting_time}
                onChange={(e) => setNewMeeting({ ...newMeeting, meeting_time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={newMeeting.location}
                onChange={(e) => setNewMeeting({ ...newMeeting, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Conducted By *</label>
              <input
                type="text"
                value={newMeeting.conducted_by}
                onChange={(e) => setNewMeeting({ ...newMeeting, conducted_by: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setShowNew(false)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Cancel
            </button>
            <button onClick={handleCreate} className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
              Create Meeting
            </button>
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
                      {meeting.meeting_time || 'Time not set'} • {meeting.location || 'Location not set'}
                    </p>
                  </div>
                </div>
                <div>
                  {meeting.decision === 'go' && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">GO</span>
                  )}
                  {meeting.decision === 'nogo' && (
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">NO-GO</span>
                  )}
                  {meeting.decision === 'conditional' && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">CONDITIONAL</span>
                  )}
                  {!meeting.decision && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Pending</span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Conducted by: <span className="font-medium">{meeting.conducted_by}</span>
                </p>

                {!meeting.decision && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDecision(meeting.id, 'go')}
                      className="flex-1 py-3 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200"
                    >
                      GO
                    </button>
                    <button
                      onClick={() => handleDecision(meeting.id, 'conditional')}
                      className="flex-1 py-3 bg-yellow-100 text-yellow-700 rounded-lg font-medium hover:bg-yellow-200"
                    >
                      CONDITIONAL
                    </button>
                    <button
                      onClick={() => handleDecision(meeting.id, 'nogo')}
                      className="flex-1 py-3 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200"
                    >
                      NO-GO
                    </button>
                  </div>
                )}

                {meeting.decision_reason && (
                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-medium">Notes:</span> {meeting.decision_reason}
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
          <button
            onClick={() => setShowNew(true)}
            className="mt-4 text-brand-600 hover:text-brand-700 text-sm font-medium"
          >
            Schedule your first meeting
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// DOCUMENTS TAB (placeholder)
// ============================================

function DocumentsTab({ project }) {
  return (
    <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
      <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">Document management coming soon</p>
      <p className="text-sm text-gray-400 mt-2">Link forms, generate plans, and manage project files</p>
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

  useEffect(() => {
    projectRef.current = project
  }, [project])

  useEffect(() => {
    loadAll()
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
      if (pendingChangesRef.current && projectRef.current) {
        saveToDb(projectRef.current)
      }
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
      setTimeout(() => {
        setSaveStatus(prev => prev === SAVE_STATUS.SAVED ? SAVE_STATUS.IDLE : prev)
      }, 2000)
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

  const handleStatusChange = (status) => {
    handleUpdate({ status })
  }

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

  const getStatusBadge = (status) => {
    const config = STATUS_OPTIONS.find(s => s.value === status)
    return config?.color || 'bg-gray-100 text-gray-700'
  }

  const renderSaveStatus = () => {
    switch (saveStatus) {
      case SAVE_STATUS.PENDING:
        return <span className="text-sm text-amber-600 flex items-center gap-1"><Circle className="w-2 h-2 fill-current" />Unsaved</span>
      case SAVE_STATUS.SAVING:
        return <span className="text-sm text-blue-600 flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin" />Saving...</span>
      case SAVE_STATUS.SAVED:
        return <span className="text-sm text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" />Saved</span>
      case SAVE_STATUS.ERROR:
        return <span className="text-sm text-red-600 flex items-center gap-1"><AlertTriangle className="w-4 h-4" />Error</span>
      default:
        return null
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
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" />Back to Projects
        </Link>
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

          <button
            onClick={handleManualSave}
            disabled={saveStatus === SAVE_STATUS.SAVING || saveStatus === SAVE_STATUS.IDLE}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50`}
          >
            {saveStatus === SAVE_STATUS.SAVING ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save
          </button>

          <select
            value={project.stage_id || ''}
            onChange={(e) => handleStageChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {stages.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>

          <select
            value={project.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className={`px-3 py-2 rounded-lg border text-sm font-medium ${getStatusBadge(project.status)}`}
          >
            {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                  <button
                    onClick={() => { handleDelete(); setMenuOpen(false) }}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />Delete Project
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-1">
          {TABS.map(tab => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? 'border-brand-600 text-brand-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && <OverviewTab project={project} onUpdate={handleUpdate} />}
        {activeTab === 'resources' && <ResourcesTab projectId={projectId} resources={resources} onRefresh={refreshResources} />}
        {activeTab === 'tailgate' && <TailgateTab projectId={projectId} project={project} meetings={meetings} onRefresh={refreshMeetings} />}
        {activeTab === 'documents' && <DocumentsTab project={project} />}
      </div>
    </div>
  )
}
