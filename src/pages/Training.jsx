import { useState, useEffect } from 'react'
import {
  GraduationCap,
  Award,
  Users,
  Check,
  Clock,
  AlertTriangle,
  FileText,
  Pencil,
  X,
  Trash2,
  Calendar,
  User,
  Plus,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ClipboardCheck,
  Plane
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import { getOperators, getDocuments } from '../lib/api'
import { format, differenceInDays } from 'date-fns'

// ============================================
// TRAINING TRACKS CONFIGURATION
// ============================================

const TRACKS = {
  onboarding: {
    name: 'Onboarding',
    description: 'Complete orientation for new team members',
    icon: Users,
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    docTypes: ['policy', 'procedure', 'form'],
    hasPractical: false
  },
  field: {
    name: 'Field Operations',
    description: 'Safety and field procedures for all crew',
    icon: ClipboardCheck,
    color: 'bg-green-100 text-green-700 border-green-200',
    docTypes: ['procedure', 'fha'],
    hasPractical: false
  },
  pilot: {
    name: 'Pilot Recurrency',
    description: 'Annual flight skills and regulations refresher',
    icon: Plane,
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    docTypes: ['procedure'],
    hasPractical: true,
    practicalItems: [
      'Pre-flight inspection',
      'Takeoff and hover stability',
      'Basic maneuvering (forward, backward, lateral)',
      'Altitude hold and positioning',
      'Point of interest orbits',
      'Return to home procedures',
      'Emergency procedures (motor out, signal loss)',
      'Precision landing',
      'Battery swap procedures',
      'Post-flight inspection and logging'
    ]
  },
  management: {
    name: 'Management & SMS',
    description: 'Safety management system oversight',
    icon: Award,
    color: 'bg-amber-100 text-amber-700 border-amber-200',
    docTypes: ['policy'],
    hasPractical: false
  }
}

// ============================================
// API FUNCTIONS
// ============================================

async function getTrackAssignments(operatorId = null) {
  let query = supabase
    .from('track_assignments')
    .select(`
      *,
      operators (id, name)
    `)
    .order('assigned_at', { ascending: false })

  if (operatorId) {
    query = query.eq('operator_id', operatorId)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

async function assignTrack(operatorId, track, dueDate = null) {
  const { data, error } = await supabase
    .from('track_assignments')
    .insert({
      operator_id: operatorId,
      track,
      due_date: dueDate,
      status: 'assigned'
    })
    .select()
    .single()

  if (error) throw error
  return data
}

async function updateAssignment(id, updates) {
  const { data, error } = await supabase
    .from('track_assignments')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

async function deleteAssignment(id) {
  const { error } = await supabase
    .from('track_assignments')
    .delete()
    .eq('id', id)

  if (error) throw error
}

async function getDocumentAcknowledgments(assignmentId) {
  const { data, error } = await supabase
    .from('document_acknowledgments')
    .select('*')
    .eq('assignment_id', assignmentId)

  if (error) throw error
  return data
}

async function acknowledgeDocument(assignmentId, documentId) {
  const { data, error } = await supabase
    .from('document_acknowledgments')
    .insert({
      assignment_id: assignmentId,
      document_id: documentId
    })
    .select()
    .single()

  if (error) throw error
  return data
}

async function getFlightSkillSignoffs(assignmentId) {
  const { data, error } = await supabase
    .from('flight_skill_signoffs')
    .select(`
      *,
      supervisor:operators (id, name)
    `)
    .eq('assignment_id', assignmentId)

  if (error) throw error
  return data
}

async function signOffSkill(assignmentId, skillName, supervisorId, notes = null) {
  const { data, error } = await supabase
    .from('flight_skill_signoffs')
    .insert({
      assignment_id: assignmentId,
      skill_name: skillName,
      supervisor_id: supervisorId,
      notes
    })
    .select()
    .single()

  if (error) throw error
  return data
}

// Certifications
async function getCertifications(operatorId = null) {
  let query = supabase
    .from('certifications')
    .select(`*, operators (id, name)`)
    .order('expiry_date', { ascending: true, nullsFirst: false })

  if (operatorId) {
    query = query.eq('operator_id', operatorId)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

async function createCertification(cert) {
  const { data, error } = await supabase
    .from('certifications')
    .insert(cert)
    .select()
    .single()

  if (error) throw error
  return data
}

async function updateCertification(id, updates) {
  const { data, error } = await supabase
    .from('certifications')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

async function deleteCertification(id) {
  const { error } = await supabase
    .from('certifications')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// HELPER COMPONENTS
// ============================================

function TabButton({ active, onClick, children, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors ${
        active
          ? 'bg-brand-600 text-white'
          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
      }`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  )
}

function ProgressBar({ current, total }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all ${percentage === 100 ? 'bg-green-500' : 'bg-brand-500'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-gray-600 whitespace-nowrap">{current}/{total}</span>
    </div>
  )
}

// ============================================
// MY TRAINING TAB
// ============================================

function MyTrainingTab({ operators, documents, currentOperatorId, onSelectOperator }) {
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedTrack, setExpandedTrack] = useState(null)
  const [acknowledgments, setAcknowledgments] = useState({})
  const [skillSignoffs, setSkillSignoffs] = useState({})

  useEffect(() => {
    if (currentOperatorId) {
      loadAssignments()
    }
  }, [currentOperatorId])

  const loadAssignments = async () => {
    try {
      const data = await getTrackAssignments(currentOperatorId)
      setAssignments(data || [])

      // Load acknowledgments and signoffs for each assignment
      const acks = {}
      const skills = {}
      for (const a of data || []) {
        acks[a.id] = await getDocumentAcknowledgments(a.id)
        if (TRACKS[a.track]?.hasPractical) {
          skills[a.id] = await getFlightSkillSignoffs(a.id)
        }
      }
      setAcknowledgments(acks)
      setSkillSignoffs(skills)
    } catch (err) {
      console.error('Failed to load assignments:', err)
    } finally {
      setLoading(false)
    }
  }

  const getTrackDocuments = (track) => {
    const trackConfig = TRACKS[track]
    if (!trackConfig) return []
    return documents.filter(d => trackConfig.docTypes.includes(d.doc_type))
  }

  const handleAcknowledge = async (assignmentId, docId) => {
    try {
      await acknowledgeDocument(assignmentId, docId)
      await loadAssignments()
    } catch (err) {
      alert('Failed to acknowledge: ' + err.message)
    }
  }

  const handleSignOff = async (assignmentId, skillName, supervisorId) => {
    try {
      await signOffSkill(assignmentId, skillName, supervisorId)
      await loadAssignments()
    } catch (err) {
      alert('Failed to sign off: ' + err.message)
    }
  }

  const checkCompletion = async (assignment) => {
    const trackConfig = TRACKS[assignment.track]
    const docs = getTrackDocuments(assignment.track)
    const acks = acknowledgments[assignment.id] || []
    const skills = skillSignoffs[assignment.id] || []

    const docsComplete = docs.length > 0 && acks.length >= docs.length
    const skillsComplete = !trackConfig.hasPractical ||
      (trackConfig.practicalItems && skills.length >= trackConfig.practicalItems.length)

    if (docsComplete && skillsComplete && assignment.status !== 'completed') {
      await updateAssignment(assignment.id, {
        status: 'completed',
        completed_at: new Date().toISOString()
      })
      await loadAssignments()
    }
  }

  useEffect(() => {
    assignments.forEach(a => {
      if (a.status !== 'completed') {
        checkCompletion(a)
      }
    })
  }, [acknowledgments, skillSignoffs])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Operator selector */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Viewing training for:</label>
        <select
          value={currentOperatorId || ''}
          onChange={(e) => onSelectOperator(e.target.value)}
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg"
        >
          {operators.map(op => (
            <option key={op.id} value={op.id}>{op.name}</option>
          ))}
        </select>
      </div>

      {/* Assigned tracks */}
      {assignments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No training assigned yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {assignments.map(assignment => {
            const trackConfig = TRACKS[assignment.track]
            if (!trackConfig) return null

            const Icon = trackConfig.icon
            const trackDocs = getTrackDocuments(assignment.track)
            const acks = acknowledgments[assignment.id] || []
            const skills = skillSignoffs[assignment.id] || []
            const isExpanded = expandedTrack === assignment.id

            const totalItems = trackDocs.length + (trackConfig.practicalItems?.length || 0)
            const completedItems = acks.length + skills.length

            return (
              <div key={assignment.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedTrack(isExpanded ? null : assignment.id)}
                  className="w-full px-4 py-4 flex items-center gap-4 hover:bg-gray-50"
                >
                  <div className={`p-3 rounded-lg ${trackConfig.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{trackConfig.name}</h3>
                      {assignment.status === 'completed' && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{trackConfig.description}</p>
                    <div className="mt-2 max-w-md">
                      <ProgressBar current={completedItems} total={totalItems} />
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-200 p-4 space-y-4">
                    {/* Documents to read */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Documents to Read & Acknowledge
                      </h4>
                      <div className="space-y-2">
                        {trackDocs.map(doc => {
                          const isAcked = acks.some(a => a.document_id === doc.id)
                          return (
                            <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-3">
                                {isAcked ? (
                                  <Check className="w-5 h-5 text-green-500" />
                                ) : (
                                  <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                                )}
                                <div>
                                  <p className={`font-medium ${isAcked ? 'text-gray-500' : 'text-gray-900'}`}>{doc.title}</p>
                                  <p className="text-xs text-gray-500">{doc.doc_type}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {doc.google_doc_url && (
                                  <a
                                    href={doc.google_doc_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                                    title="Open document"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                )}
                                {!isAcked && (
                                  <button
                                    onClick={() => handleAcknowledge(assignment.id, doc.id)}
                                    className="px-3 py-1 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700"
                                  >
                                    Acknowledge
                                  </button>
                                )}
                              </div>
                            </div>
                          )
                        })}
                        {trackDocs.length === 0 && (
                          <p className="text-sm text-gray-500 italic">No documents assigned to this track yet</p>
                        )}
                      </div>
                    </div>

                    {/* Flight skills (for pilot track) */}
                    {trackConfig.hasPractical && trackConfig.practicalItems && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                          <Plane className="w-4 h-4" />
                          Flight Skills Checklist (Supervisor Sign-off Required)
                        </h4>
                        <div className="space-y-2">
                          {trackConfig.practicalItems.map(skill => {
                            const signoff = skills.find(s => s.skill_name === skill)
                            return (
                              <div key={skill} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                  {signoff ? (
                                    <Check className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                                  )}
                                  <div>
                                    <p className={`font-medium ${signoff ? 'text-gray-500' : 'text-gray-900'}`}>{skill}</p>
                                    {signoff && (
                                      <p className="text-xs text-gray-500">
                                        Signed off by {signoff.supervisor?.name} on {format(new Date(signoff.signed_off_at), 'MMM d, yyyy')}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                {!signoff && (
                                  <select
                                    onChange={(e) => {
                                      if (e.target.value) {
                                        handleSignOff(assignment.id, skill, e.target.value)
                                      }
                                    }}
                                    className="px-3 py-1 text-sm border border-gray-300 rounded-lg"
                                    defaultValue=""
                                  >
                                    <option value="">Select supervisor...</option>
                                    {operators.filter(op => op.id !== currentOperatorId).map(op => (
                                      <option key={op.id} value={op.id}>{op.name}</option>
                                    ))}
                                  </select>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ============================================
// ASSIGN TRAINING TAB
// ============================================

function AssignTrainingTab({ operators }) {
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    loadAssignments()
  }, [])

  const loadAssignments = async () => {
    try {
      const data = await getTrackAssignments()
      setAssignments(data || [])
    } catch (err) {
      console.error('Failed to load:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Remove this training assignment?')) return
    try {
      await deleteAssignment(id)
      await loadAssignments()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  // Group by operator
  const byOperator = {}
  assignments.forEach(a => {
    const opId = a.operator_id
    if (!byOperator[opId]) {
      byOperator[opId] = { operator: a.operators, assignments: [] }
    }
    byOperator[opId].assignments.push(a)
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          Assign Training
        </button>
      </div>

      {Object.keys(byOperator).length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No training assigned yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.values(byOperator).map(({ operator, assignments }) => (
            <div key={operator.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">{operator.name}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {assignments.map(a => {
                  const trackConfig = TRACKS[a.track]
                  if (!trackConfig) return null
                  const Icon = trackConfig.icon
                  return (
                    <div key={a.id} className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${trackConfig.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{trackConfig.name}</p>
                          <p className="text-sm text-gray-500">
                            {a.status === 'completed' ? (
                              <span className="text-green-600">Completed {a.completed_at && format(new Date(a.completed_at), 'MMM d, yyyy')}</span>
                            ) : a.due_date ? (
                              `Due ${format(new Date(a.due_date), 'MMM d, yyyy')}`
                            ) : (
                              'No due date'
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          a.status === 'completed' ? 'bg-green-100 text-green-700' :
                          a.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {a.status === 'completed' ? 'Completed' : a.status === 'in_progress' ? 'In Progress' : 'Assigned'}
                        </span>
                        <button
                          onClick={() => handleDelete(a.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <AssignModal
          operators={operators}
          existingAssignments={assignments}
          onClose={() => setShowModal(false)}
          onSave={() => { setShowModal(false); loadAssignments() }}
        />
      )}
    </div>
  )
}

function AssignModal({ operators, existingAssignments, onClose, onSave }) {
  const [operatorId, setOperatorId] = useState('')
  const [track, setTrack] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if already assigned
    const exists = existingAssignments.some(a => a.operator_id === operatorId && a.track === track)
    if (exists) {
      alert('This operator is already assigned to this track')
      return
    }

    setSaving(true)
    try {
      await assignTrack(operatorId, track, dueDate || null)
      onSave()
    } catch (err) {
      alert('Failed to assign: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Assign Training</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Operator *</label>
            <select
              value={operatorId}
              onChange={(e) => setOperatorId(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select operator...</option>
              {operators.map(op => (
                <option key={op.id} value={op.id}>{op.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Training Track *</label>
            <select
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select track...</option>
              {Object.entries(TRACKS).map(([key, config]) => (
                <option key={key} value={key}>{config.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date (optional)</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
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
              {saving ? 'Assigning...' : 'Assign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ============================================
// CERTIFICATIONS TAB
// ============================================

function CertificationsTab({ operators }) {
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingCert, setEditingCert] = useState(null)

  useEffect(() => {
    loadCertifications()
  }, [])

  const loadCertifications = async () => {
    try {
      const data = await getCertifications()
      setCertifications(data || [])
    } catch (err) {
      console.error('Failed to load:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this certification?')) return
    try {
      await deleteCertification(id)
      await loadCertifications()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const expired = certifications.filter(c => {
    if (!c.expiry_date) return false
    return differenceInDays(new Date(c.expiry_date), new Date()) < 0
  })

  const expiring = certifications.filter(c => {
    if (!c.expiry_date) return false
    const days = differenceInDays(new Date(c.expiry_date), new Date())
    return days >= 0 && days <= 30
  })

  const current = certifications.filter(c => {
    if (!c.expiry_date) return true
    return differenceInDays(new Date(c.expiry_date), new Date()) > 30
  })

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  const CertRow = ({ cert }) => {
    const daysUntil = cert.expiry_date ? differenceInDays(new Date(cert.expiry_date), new Date()) : null
    return (
      <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-50">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{cert.name}</span>
            <span className="text-sm text-gray-500">- {cert.operators?.name}</span>
          </div>
          <div className="text-sm text-gray-500">
            {cert.issuing_authority && <span>{cert.issuing_authority} | </span>}
            Issued {format(new Date(cert.issued_date), 'MMM d, yyyy')}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {cert.expiry_date && (
            <span className={`text-sm ${daysUntil < 0 ? 'text-red-600 font-medium' : daysUntil <= 30 ? 'text-amber-600' : 'text-gray-600'}`}>
              {daysUntil < 0 ? 'Expired' : `Expires ${format(new Date(cert.expiry_date), 'MMM d, yyyy')}`}
            </span>
          )}
          <button onClick={() => { setEditingCert(cert); setShowModal(true) }} className="p-2 text-gray-400 hover:text-brand-600 rounded-lg">
            <Pencil className="w-4 h-4" />
          </button>
          <button onClick={() => handleDelete(cert.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => { setEditingCert(null); setShowModal(true) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          Add Certification
        </button>
      </div>

      {expired.length > 0 && (
        <div className="bg-white rounded-xl border border-red-200 overflow-hidden">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200">
            <h3 className="font-medium text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Expired ({expired.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {expired.map(c => <CertRow key={c.id} cert={c} />)}
          </div>
        </div>
      )}

      {expiring.length > 0 && (
        <div className="bg-white rounded-xl border border-amber-200 overflow-hidden">
          <div className="px-4 py-3 bg-amber-50 border-b border-amber-200">
            <h3 className="font-medium text-amber-800 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Expiring Soon ({expiring.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {expiring.map(c => <CertRow key={c.id} cert={c} />)}
          </div>
        </div>
      )}

      {current.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-green-500" /> Current ({current.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {current.map(c => <CertRow key={c.id} cert={c} />)}
          </div>
        </div>
      )}

      {certifications.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Award className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No certifications yet</p>
        </div>
      )}

      {showModal && (
        <CertModal
          cert={editingCert}
          operators={operators}
          onClose={() => { setShowModal(false); setEditingCert(null) }}
          onSave={() => { setShowModal(false); setEditingCert(null); loadCertifications() }}
        />
      )}
    </div>
  )
}

function CertModal({ cert, operators, onClose, onSave }) {
  const [formData, setFormData] = useState({
    operator_id: cert?.operator_id || '',
    name: cert?.name || '',
    issuing_authority: cert?.issuing_authority || '',
    issued_date: cert?.issued_date || format(new Date(), 'yyyy-MM-dd'),
    expiry_date: cert?.expiry_date || '',
    notes: cert?.notes || ''
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      if (cert) {
        await updateCertification(cert.id, formData)
      } else {
        await createCertification(formData)
      }
      onSave()
    } catch (err) {
      alert('Failed to save: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{cert ? 'Edit Certification' : 'Add Certification'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Operator *</label>
            <select
              value={formData.operator_id}
              onChange={(e) => setFormData({ ...formData, operator_id: e.target.value })}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select...</option>
              {operators.map(op => <option key={op.id} value={op.id}>{op.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="e.g., Basic RPAS Certificate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Authority</label>
            <input
              type="text"
              value={formData.issuing_authority}
              onChange={(e) => setFormData({ ...formData, issuing_authority: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="e.g., Transport Canada"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issued Date *</label>
              <input
                type="date"
                required
                value={formData.issued_date}
                onChange={(e) => setFormData({ ...formData, issued_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input
                type="date"
                value={formData.expiry_date}
                onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">
              {saving ? 'Saving...' : cert ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ============================================
// COMPLIANCE TAB
// ============================================

function ComplianceTab({ operators }) {
  const [assignments, setAssignments] = useState([])
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [assignData, certData] = await Promise.all([
        getTrackAssignments(),
        getCertifications()
      ])
      setAssignments(assignData || [])
      setCertifications(certData || [])
    } catch (err) {
      console.error('Failed to load:', err)
    } finally {
      setLoading(false)
    }
  }

  const overdue = assignments.filter(a => {
    if (a.status === 'completed') return false
    if (!a.due_date) return false
    return differenceInDays(new Date(a.due_date), new Date()) < 0
  })

  const expiredCerts = certifications.filter(c => {
    if (!c.expiry_date) return false
    return differenceInDays(new Date(c.expiry_date), new Date()) < 0
  })

  const completed = assignments.filter(a => a.status === 'completed').length
  const inProgress = assignments.filter(a => a.status !== 'completed').length

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  const issues = overdue.length + expiredCerts.length

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-3xl font-bold text-gray-900">{operators.length}</div>
          <div className="text-sm text-gray-500">Operators</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-3xl font-bold text-green-600">{completed}</div>
          <div className="text-sm text-gray-500">Completed</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-3xl font-bold text-blue-600">{inProgress}</div>
          <div className="text-sm text-gray-500">In Progress</div>
        </div>
        <div className={`rounded-xl border p-4 ${issues > 0 ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}>
          <div className={`text-3xl font-bold ${issues > 0 ? 'text-red-600' : 'text-gray-900'}`}>{issues}</div>
          <div className="text-sm text-gray-500">Action Required</div>
        </div>
      </div>

      {/* Issues */}
      {(overdue.length > 0 || expiredCerts.length > 0) && (
        <div className="bg-white rounded-xl border border-red-200 overflow-hidden">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200">
            <h3 className="font-medium text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Action Required
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {overdue.map(a => (
              <div key={a.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-medium">{a.operators?.name}</span>
                  <span className="text-gray-500 mx-2">-</span>
                  <span>{TRACKS[a.track]?.name}</span>
                </div>
                <span className="text-sm text-red-600 font-medium">
                  Overdue {Math.abs(differenceInDays(new Date(a.due_date), new Date()))} days
                </span>
              </div>
            ))}
            {expiredCerts.map(c => (
              <div key={c.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-medium">{c.operators?.name}</span>
                  <span className="text-gray-500 mx-2">-</span>
                  <span>{c.name}</span>
                </div>
                <span className="text-sm text-red-600 font-medium">Certificate expired</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {issues === 0 && (
        <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
          <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <p className="text-green-700 font-medium">All training is up to date!</p>
        </div>
      )}
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Training() {
  const [activeTab, setActiveTab] = useState('my-training')
  const [operators, setOperators] = useState([])
  const [documents, setDocuments] = useState([])
  const [currentOperatorId, setCurrentOperatorId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [ops, docs] = await Promise.all([
        getOperators(),
        getDocuments()
      ])
      setOperators(ops || [])
      setDocuments(docs || [])
      if (ops?.length > 0) {
        setCurrentOperatorId(ops[0].id)
      }
    } catch (err) {
      console.error('Failed to load:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Training</h1>
        <p className="text-gray-500">Track training progress and certifications</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <TabButton active={activeTab === 'my-training'} onClick={() => setActiveTab('my-training')} icon={GraduationCap}>
          My Training
        </TabButton>
        <TabButton active={activeTab === 'assign'} onClick={() => setActiveTab('assign')} icon={Users}>
          Assign Training
        </TabButton>
        <TabButton active={activeTab === 'certifications'} onClick={() => setActiveTab('certifications')} icon={Award}>
          Certifications
        </TabButton>
        <TabButton active={activeTab === 'compliance'} onClick={() => setActiveTab('compliance')} icon={ClipboardCheck}>
          Compliance
        </TabButton>
      </div>

      {activeTab === 'my-training' && (
        <MyTrainingTab
          operators={operators}
          documents={documents}
          currentOperatorId={currentOperatorId}
          onSelectOperator={setCurrentOperatorId}
        />
      )}
      {activeTab === 'assign' && <AssignTrainingTab operators={operators} />}
      {activeTab === 'certifications' && <CertificationsTab operators={operators} />}
      {activeTab === 'compliance' && <ComplianceTab operators={operators} />}
    </div>
  )
}
