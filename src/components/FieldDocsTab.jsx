import { useState, useMemo } from 'react'
import {
  ClipboardCheck, Plus, X, ChevronDown, ChevronUp, Calendar, Clock,
  MapPin, Users, AlertTriangle, CheckCircle2, XCircle, AlertCircle,
  ThumbsUp, ThumbsDown, Minus, Send, Info, User, Cloud, Eye,
  FileText, Shield, Heart
} from 'lucide-react'

// ============================================
// CONSTANTS
// ============================================

const DECISION_OPTIONS = [
  { value: 'go', label: 'GO', icon: ThumbsUp, color: 'bg-green-600 hover:bg-green-700', textColor: 'text-green-600' },
  { value: 'nogo', label: 'NO-GO', icon: ThumbsDown, color: 'bg-red-600 hover:bg-red-700', textColor: 'text-red-600' },
  { value: 'conditional', label: 'CONDITIONAL', icon: Minus, color: 'bg-amber-500 hover:bg-amber-600', textColor: 'text-amber-600' }
]

const IMSAFE_ITEMS = [
  { letter: 'I', title: 'Illness', description: 'Am I suffering from any illness or symptoms that might affect my ability to work safely?' },
  { letter: 'M', title: 'Medication', description: 'Am I taking any medication that could impair my judgment, coordination, or alertness?' },
  { letter: 'S', title: 'Stress', description: 'Am I under psychological pressure from work, personal issues, or other factors?' },
  { letter: 'A', title: 'Alcohol', description: 'Have I consumed alcohol within the last 8+ hours? Is residual alcohol still affecting me?' },
  { letter: 'F', title: 'Fatigue', description: 'Have I had adequate rest? Am I well-rested and alert?' },
  { letter: 'E', title: 'Emotion', description: 'Am I emotionally upset about something that could affect my concentration or decision-making?' }
]

// ============================================
// HELPER COMPONENTS
// ============================================

function Section({ title, children, defaultOpen = true, badge = null, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-gray-400" />}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-medium bg-brand-100 text-brand-700 rounded-full">
              {badge}
            </span>
          )}
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <div className="p-6">{children}</div>}
    </div>
  )
}

function formatDate(dateStr) {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
}

function formatTime(timeStr) {
  if (!timeStr) return '-'
  return timeStr
}

// ============================================
// TAILGATE LIST
// ============================================

function TailgateList({ tailgates, onSelect, onNew }) {
  const sortedTailgates = useMemo(() => {
    return [...(tailgates || [])].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time || '00:00'}`)
      const dateB = new Date(`${b.date}T${b.time || '00:00'}`)
      return dateB - dateA
    })
  }, [tailgates])

  const getDecisionBadge = (decision) => {
    if (!decision) return null
    const opt = DECISION_OPTIONS.find(o => o.value === decision)
    if (!opt) return null
    const Icon = opt.icon
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
        decision === 'go' ? 'bg-green-100 text-green-700' :
        decision === 'nogo' ? 'bg-red-100 text-red-700' :
        'bg-amber-100 text-amber-700'
      }`}>
        <Icon className="w-3 h-3" />
        {opt.label}
      </span>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Record tailgate meetings and GO/NO-GO decisions for each field session.
        </p>
        <button
          onClick={onNew}
          className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-medium text-sm"
        >
          <Plus className="w-4 h-4" />
          New Tailgate
        </button>
      </div>

      {sortedTailgates.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ClipboardCheck className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500">No tailgate meetings recorded yet</p>
          <p className="text-sm text-gray-400 mt-1">Click "New Tailgate" to create one</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3 font-medium">#</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Time</th>
                <th className="pb-3 font-medium">Location</th>
                <th className="pb-3 font-medium">Decision</th>
                <th className="pb-3 font-medium">Conducted By</th>
                <th className="pb-3 w-20"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedTailgates.map((tg, idx) => (
                <tr key={tg.id} className="hover:bg-gray-50">
                  <td className="py-3 text-gray-400">{sortedTailgates.length - idx}</td>
                  <td className="py-3">{formatDate(tg.date)}</td>
                  <td className="py-3">{formatTime(tg.time)}</td>
                  <td className="py-3">{tg.location || '-'}</td>
                  <td className="py-3">{getDecisionBadge(tg.decision)}</td>
                  <td className="py-3">{tg.conducted_by || '-'}</td>
                  <td className="py-3">
                    <button
                      onClick={() => onSelect(tg)}
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// ============================================
// TAILGATE FORM
// ============================================

function TailgateForm({ tailgate, onUpdate, onClose, onSendNotification, sites, hazards, notificationContacts }) {
  const [sending, setSending] = useState(false)

  const updateField = (field, value) => {
    onUpdate({ ...tailgate, [field]: value })
  }

  // Attendees management
  const attendees = tailgate.attendees || []
  const addAttendee = () => {
    updateField('attendees', [...attendees, { id: Date.now(), name: '', role: '', fit_for_duty: true }])
  }
  const updateAttendee = (id, field, value) => {
    updateField('attendees', attendees.map(a => a.id === id ? { ...a, [field]: value } : a))
  }
  const removeAttendee = (id) => {
    updateField('attendees', attendees.filter(a => a.id !== id))
  }

  // Field-identified risks
  const fieldRisks = tailgate.field_risks || []
  const addFieldRisk = () => {
    updateField('field_risks', [...fieldRisks, { id: Date.now(), hazard: '', control: '' }])
  }
  const updateFieldRisk = (id, field, value) => {
    updateField('field_risks', fieldRisks.map(r => r.id === id ? { ...r, [field]: value } : r))
  }
  const removeFieldRisk = (id) => {
    updateField('field_risks', fieldRisks.filter(r => r.id !== id))
  }

  const handleDecision = async (decision) => {
    const timestamp = new Date().toISOString()
    updateField('decision', decision)
    updateField('decision_at', timestamp)

    // Send notifications
    if (notificationContacts && notificationContacts.length > 0) {
      setSending(true)
      try {
        await onSendNotification(decision, tailgate.notes)
      } catch (err) {
        console.error('Failed to send notifications:', err)
      } finally {
        setSending(false)
      }
    }
  }

  // Site hazards for pre-identified risks
  const preIdentifiedRisks = (hazards || []).filter(h =>
    h.applies_to_all || h.site_id === tailgate.site_id
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {tailgate.id ? 'Edit Tailgate Meeting' : 'New Tailgate Meeting'}
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Meeting Details */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Meeting Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Date</label>
                <input
                  type="date"
                  value={tailgate.date || ''}
                  onChange={(e) => updateField('date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Time</label>
                <input
                  type="time"
                  value={tailgate.time || ''}
                  onChange={(e) => updateField('time', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Location</label>
                <select
                  value={tailgate.location || ''}
                  onChange={(e) => updateField('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select site...</option>
                  {(sites || []).map(s => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                  <option value="other">Other location</option>
                </select>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Objectives</h3>
            <textarea
              value={tailgate.objectives || ''}
              onChange={(e) => updateField('objectives', e.target.value)}
              placeholder="What are we doing today? Key objectives and tasks..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Pre-Identified Risks */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Pre-Identified Risks (from Site Planning)
            </h3>
            {preIdentifiedRisks.length === 0 ? (
              <p className="text-sm text-gray-500 py-3 bg-gray-50 rounded-lg text-center">
                No pre-identified risks for this site
              </p>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-amber-800 border-b border-amber-200">
                      <th className="px-3 py-2 font-medium">Hazard</th>
                      <th className="px-3 py-2 font-medium">Risk</th>
                      <th className="px-3 py-2 font-medium">Control</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    {preIdentifiedRisks.map(h => {
                      const risk = (h.likelihood || 2) * (h.severity || 2)
                      return (
                        <tr key={h.id}>
                          <td className="px-3 py-2">{h.description || h.category}</td>
                          <td className="px-3 py-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              risk <= 4 ? 'bg-green-100 text-green-700' :
                              risk <= 9 ? 'bg-yellow-100 text-yellow-700' :
                              risk <= 15 ? 'bg-orange-100 text-orange-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {risk}
                            </span>
                          </td>
                          <td className="px-3 py-2">{h.control_description}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Field-Identified Risks */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              Field-Identified Risks (new today)
            </h3>
            <div className="space-y-2">
              {fieldRisks.length === 0 ? (
                <p className="text-sm text-gray-500 py-2">No field risks identified</p>
              ) : (
                fieldRisks.map(risk => (
                  <div key={risk.id} className="flex gap-2">
                    <input
                      type="text"
                      value={risk.hazard}
                      onChange={(e) => updateFieldRisk(risk.id, 'hazard', e.target.value)}
                      placeholder="Hazard"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="text"
                      value={risk.control}
                      onChange={(e) => updateFieldRisk(risk.id, 'control', e.target.value)}
                      placeholder="Control"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <button
                      onClick={() => removeFieldRisk(risk.id)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
              <button
                onClick={addFieldRisk}
                className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Field Risk
              </button>
            </div>
          </div>

          {/* Weather & Site Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                Weather Conditions
              </h3>
              <textarea
                value={tailgate.weather || ''}
                onChange={(e) => updateField('weather', e.target.value)}
                placeholder="Wind, visibility, precipitation, temperature..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Site Conditions
              </h3>
              <textarea
                value={tailgate.site_conditions || ''}
                onChange={(e) => updateField('site_conditions', e.target.value)}
                placeholder="Ground conditions, obstacles, people present, hazards observed..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          {/* Attendees */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Attendees
            </h3>
            <div className="space-y-2">
              {attendees.length === 0 ? (
                <p className="text-sm text-gray-500 py-2">No attendees added</p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-2 font-medium">Name</th>
                      <th className="pb-2 font-medium">Role</th>
                      <th className="pb-2 font-medium text-center">Fit for Duty</th>
                      <th className="pb-2 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {attendees.map(a => (
                      <tr key={a.id}>
                        <td className="py-2 pr-2">
                          <input
                            type="text"
                            value={a.name}
                            onChange={(e) => updateAttendee(a.id, 'name', e.target.value)}
                            placeholder="Name"
                            className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                          />
                        </td>
                        <td className="py-2 pr-2">
                          <input
                            type="text"
                            value={a.role}
                            onChange={(e) => updateAttendee(a.id, 'role', e.target.value)}
                            placeholder="Role"
                            className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                          />
                        </td>
                        <td className="py-2 text-center">
                          <label className="inline-flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={a.fit_for_duty}
                              onChange={(e) => updateAttendee(a.id, 'fit_for_duty', e.target.checked)}
                              className="rounded text-green-600"
                            />
                            <span className={a.fit_for_duty ? 'text-green-600' : 'text-red-600'}>
                              {a.fit_for_duty ? 'Yes' : 'No'}
                            </span>
                          </label>
                        </td>
                        <td className="py-2">
                          <button
                            onClick={() => removeAttendee(a.id)}
                            className="p-1 text-gray-400 hover:text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <button
                onClick={addAttendee}
                className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Attendee
              </button>
            </div>
          </div>

          {/* Conducted By */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Conducted By
            </h3>
            <input
              type="text"
              value={tailgate.conducted_by || ''}
              onChange={(e) => updateField('conducted_by', e.target.value)}
              placeholder="Name of person conducting the meeting"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* GO / NO-GO Decision */}
          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              GO / NO-GO Decision
            </h3>

            {/* Decision Buttons */}
            <div className="flex gap-3 mb-4">
              {DECISION_OPTIONS.map(opt => {
                const Icon = opt.icon
                const isSelected = tailgate.decision === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleDecision(opt.value)}
                    disabled={sending}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-lg transition-all ${
                      isSelected
                        ? `${opt.color} text-white ring-4 ring-offset-2 ${
                            opt.value === 'go' ? 'ring-green-300' :
                            opt.value === 'nogo' ? 'ring-red-300' :
                            'ring-amber-300'
                          }`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {opt.label}
                  </button>
                )
              })}
            </div>

            {/* Decision timestamp */}
            {tailgate.decision_at && (
              <p className="text-sm text-gray-500 mb-4">
                Decision made at {new Date(tailgate.decision_at).toLocaleString()}
              </p>
            )}

            {/* Notes */}
            <div className="mb-4">
              <label className="block text-xs text-gray-500 mb-1">
                Notes (reason, conditions, or attach flight plan screenshot)
              </label>
              <textarea
                value={tailgate.notes || ''}
                onChange={(e) => updateField('notes', e.target.value)}
                placeholder="Add any notes about the decision, conditions, or additional context..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            {/* Notification Info */}
            {notificationContacts && notificationContacts.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  {sending ? 'Sending notifications...' : (
                    <>
                      On decision, notifications will be sent to {notificationContacts.length} contact(s):
                      <span className="font-medium">
                        {notificationContacts.map(c => c.name).join(', ')}
                      </span>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// IMSAFE REFERENCE
// ============================================

function IMSAFEReference() {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-blue-800">Self-Assessment Tool</p>
          <p className="text-sm text-blue-700 mt-1">
            IMSAFE is a personal checklist for fitness to work. Use this before each operation to ensure you're fit for duty.
            No data is logged — this is for self-reflection only.
          </p>
        </div>
      </div>

      <div className="grid gap-3">
        {IMSAFE_ITEMS.map(item => (
          <div key={item.letter} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xl flex-shrink-0">
              {item.letter}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm text-amber-800">
          <strong>If you answer YES to any of these questions:</strong> Consider whether you should participate in today's operations.
          Discuss with your team lead if you have concerns about your fitness to work.
        </p>
      </div>
    </div>
  )
}

// ============================================
// MAIN FIELD DOCS TAB COMPONENT
// ============================================

export default function FieldDocsTab({ project, onUpdate, onSendNotification }) {
  const [selectedTailgate, setSelectedTailgate] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const tailgates = project.tailgates || []
  const sites = project.sites || [{ id: 'site-1', name: 'Site 1' }]
  const notificationContacts = project.notification_contacts || []

  // Get all hazards from all sites
  const allHazards = useMemo(() => {
    return (project.sites || []).flatMap(site => site.hazards || [])
  }, [project.sites])

  const handleNewTailgate = () => {
    const newTailgate = {
      id: `tg-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      location: '',
      objectives: '',
      weather: '',
      site_conditions: '',
      attendees: [],
      field_risks: [],
      conducted_by: '',
      decision: null,
      decision_at: null,
      notes: ''
    }
    setSelectedTailgate(newTailgate)
    setShowForm(true)
  }

  const handleSelectTailgate = (tg) => {
    setSelectedTailgate(tg)
    setShowForm(true)
  }

  const handleUpdateTailgate = (updated) => {
    setSelectedTailgate(updated)

    // Update in project
    const existing = tailgates.find(t => t.id === updated.id)
    if (existing) {
      onUpdate({
        tailgates: tailgates.map(t => t.id === updated.id ? updated : t)
      })
    } else {
      onUpdate({
        tailgates: [...tailgates, updated]
      })
    }
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setSelectedTailgate(null)
  }

  const handleSendNotification = async (decision, notes) => {
    if (onSendNotification) {
      await onSendNotification({
        type: decision,
        notes,
        project: project.name,
        contacts: notificationContacts
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Tailgate Meetings */}
      <Section title="Tailgate Meetings" icon={ClipboardCheck} badge={`${tailgates.length}`}>
        <TailgateList
          tailgates={tailgates}
          onSelect={handleSelectTailgate}
          onNew={handleNewTailgate}
        />
      </Section>

      {/* IMSAFE Reference */}
      <Section title="IMSAFE Self-Check" icon={Heart} defaultOpen={false}>
        <IMSAFEReference />
      </Section>

      {/* Tailgate Form Modal */}
      {showForm && selectedTailgate && (
        <TailgateForm
          tailgate={selectedTailgate}
          onUpdate={handleUpdateTailgate}
          onClose={handleCloseForm}
          onSendNotification={handleSendNotification}
          sites={sites}
          hazards={allHazards}
          notificationContacts={notificationContacts}
        />
      )}
    </div>
  )
}
