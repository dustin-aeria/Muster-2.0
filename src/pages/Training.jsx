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
  ExternalLink,
  ClipboardCheck,
  Plane,
  Shield,
  Briefcase,
  Plus,
  Trash2,
  Pencil
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import { getOperators, getDocuments } from '../lib/api'
import { format, differenceInDays } from 'date-fns'

// ============================================
// TRAINING TRACKS CONFIGURATION
// ============================================

const TRACKS = [
  {
    id: 'onboarding',
    name: 'Onboarding',
    description: 'New team member orientation - policies, procedures, and forms',
    icon: Users,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 text-blue-700 border-blue-200',
    docTypes: ['policy', 'procedure', 'form']
  },
  {
    id: 'field',
    name: 'Field Operations',
    description: 'Safety procedures and hazard assessments for field work',
    icon: ClipboardCheck,
    color: 'bg-green-500',
    lightColor: 'bg-green-50 text-green-700 border-green-200',
    docTypes: ['procedure', 'fha']
  },
  {
    id: 'pilot',
    name: 'Pilot Recurrency',
    description: 'Annual flight skills demonstration and regulations refresher',
    icon: Plane,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50 text-purple-700 border-purple-200',
    docTypes: ['procedure'],
    flightSkills: [
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
  {
    id: 'management',
    name: 'Management & SMS',
    description: 'Safety management system and oversight responsibilities',
    icon: Briefcase,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50 text-amber-700 border-amber-200',
    docTypes: ['policy']
  }
]

// ============================================
// API HELPERS
// ============================================

async function getOrCreateAssignment(operatorId, track) {
  // Check if assignment exists
  const { data: existing } = await supabase
    .from('track_assignments')
    .select('*')
    .eq('operator_id', operatorId)
    .eq('track', track)
    .single()

  if (existing) return existing

  // Create new assignment
  const { data, error } = await supabase
    .from('track_assignments')
    .insert({ operator_id: operatorId, track, status: 'in_progress' })
    .select()
    .single()

  if (error) throw error
  return data
}

async function getAcknowledgments(assignmentId) {
  const { data } = await supabase
    .from('document_acknowledgments')
    .select('document_id')
    .eq('assignment_id', assignmentId)
  return data || []
}

async function acknowledgeDoc(assignmentId, documentId) {
  const { error } = await supabase
    .from('document_acknowledgments')
    .insert({ assignment_id: assignmentId, document_id: documentId })
  if (error && !error.message.includes('duplicate')) throw error
}

async function getSkillSignoffs(assignmentId) {
  const { data } = await supabase
    .from('flight_skill_signoffs')
    .select('*, supervisor:operators(name)')
    .eq('assignment_id', assignmentId)
  return data || []
}

async function signOffSkill(assignmentId, skillName, supervisorId, notes = null) {
  const { error } = await supabase
    .from('flight_skill_signoffs')
    .insert({ assignment_id: assignmentId, skill_name: skillName, supervisor_id: supervisorId, notes })
  if (error && !error.message.includes('duplicate')) throw error
}

async function completeAssignment(assignmentId) {
  await supabase
    .from('track_assignments')
    .update({ status: 'completed', completed_at: new Date().toISOString() })
    .eq('id', assignmentId)
}

async function getAllAssignments() {
  const { data } = await supabase
    .from('track_assignments')
    .select('*, operators(name)')
    .order('assigned_at', { ascending: false })
  return data || []
}

async function getCertifications() {
  const { data } = await supabase
    .from('certifications')
    .select('*, operators(name)')
    .order('expiry_date', { ascending: true, nullsFirst: false })
  return data || []
}

async function createCertification(cert) {
  const { data, error } = await supabase.from('certifications').insert(cert).select().single()
  if (error) throw error
  return data
}

async function updateCertification(id, updates) {
  const { error } = await supabase.from('certifications').update(updates).eq('id', id)
  if (error) throw error
}

async function deleteCertification(id) {
  const { error } = await supabase.from('certifications').delete().eq('id', id)
  if (error) throw error
}

// ============================================
// TRACK SELECTION VIEW
// ============================================

function TrackSelection({ onSelectTrack, operators, documents }) {
  // Get recent/in-progress sessions
  const [recentSessions, setRecentSessions] = useState([])

  useEffect(() => {
    loadRecent()
  }, [])

  const loadRecent = async () => {
    const assignments = await getAllAssignments()
    setRecentSessions(assignments.filter(a => a.status === 'in_progress').slice(0, 5))
  }

  return (
    <div className="space-y-8">
      {/* Recent/In Progress */}
      {recentSessions.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Continue Training</h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {recentSessions.map(session => {
              const track = TRACKS.find(t => t.id === session.track)
              if (!track) return null
              const Icon = track.icon
              return (
                <button
                  key={session.id}
                  onClick={() => onSelectTrack(track.id, session.operator_id)}
                  className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 text-left"
                >
                  <div className={`p-2 rounded-lg ${track.lightColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{track.name}</p>
                    <p className="text-sm text-gray-500">{session.operators?.name}</p>
                  </div>
                  <span className="text-sm text-blue-600">Continue →</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Track Cards */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Start New Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRACKS.map(track => {
            const Icon = track.icon
            const docCount = documents.filter(d => track.docTypes.includes(d.doc_type)).length
            return (
              <button
                key={track.id}
                onClick={() => onSelectTrack(track.id, null)}
                className="bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${track.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">{track.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{track.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                      <span>{docCount} documents</span>
                      {track.flightSkills && <span>{track.flightSkills.length} flight skills</span>}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ============================================
// TRAINING SESSION VIEW
// ============================================

function TrainingSession({ trackId, initialOperatorId, operators, documents, onBack }) {
  const track = TRACKS.find(t => t.id === trackId)
  const [operatorId, setOperatorId] = useState(initialOperatorId || '')
  const [assignment, setAssignment] = useState(null)
  const [acknowledgments, setAcknowledgments] = useState([])
  const [skillSignoffs, setSkillSignoffs] = useState([])
  const [loading, setLoading] = useState(false)
  const [started, setStarted] = useState(!!initialOperatorId)

  const trackDocs = documents.filter(d => track.docTypes.includes(d.doc_type))

  useEffect(() => {
    if (initialOperatorId) {
      startSession(initialOperatorId)
    }
  }, [])

  const startSession = async (opId) => {
    setLoading(true)
    try {
      const assign = await getOrCreateAssignment(opId, trackId)
      setAssignment(assign)
      const acks = await getAcknowledgments(assign.id)
      setAcknowledgments(acks.map(a => a.document_id))
      if (track.flightSkills) {
        const skills = await getSkillSignoffs(assign.id)
        setSkillSignoffs(skills)
      }
      setStarted(true)
    } catch (err) {
      alert('Failed to start: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAcknowledge = async (docId) => {
    try {
      await acknowledgeDoc(assignment.id, docId)
      setAcknowledgments([...acknowledgments, docId])
      checkCompletion([...acknowledgments, docId], skillSignoffs)
    } catch (err) {
      alert('Failed: ' + err.message)
    }
  }

  const handleSignOff = async (skillName, supervisorId) => {
    try {
      await signOffSkill(assignment.id, skillName, supervisorId)
      const updated = [...skillSignoffs, { skill_name: skillName, supervisor_id: supervisorId }]
      setSkillSignoffs(updated)
      checkCompletion(acknowledgments, updated)
    } catch (err) {
      alert('Failed: ' + err.message)
    }
  }

  const checkCompletion = async (acks, skills) => {
    const docsComplete = acks.length >= trackDocs.length
    const skillsComplete = !track.flightSkills || skills.length >= track.flightSkills.length
    if (docsComplete && skillsComplete && assignment) {
      await completeAssignment(assignment.id)
    }
  }

  const Icon = track.icon
  const totalItems = trackDocs.length + (track.flightSkills?.length || 0)
  const completedItems = acknowledgments.length + skillSignoffs.length
  const isComplete = completedItems >= totalItems && totalItems > 0

  // Not started yet - show operator selection
  if (!started) {
    return (
      <div className="space-y-6">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" /> Back to Training
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-md">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl ${track.color} text-white`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{track.name}</h2>
              <p className="text-sm text-gray-500">{track.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Who is completing this training?</label>
              <select
                value={operatorId}
                onChange={(e) => setOperatorId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Select person...</option>
                {operators.map(op => (
                  <option key={op.id} value={op.id}>{op.name}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => startSession(operatorId)}
              disabled={!operatorId || loading}
              className="w-full py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Starting...' : 'Start Training'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Training in progress
  const currentOperator = operators.find(op => op.id === operatorId)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" /> Back to Training
        </button>
        {isComplete && (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
            <Check className="w-4 h-4" /> Completed
          </span>
        )}
      </div>

      {/* Progress Card */}
      <div className={`rounded-xl border p-4 ${track.lightColor}`}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${track.color} text-white`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold">{track.name}</h2>
            <p className="text-sm opacity-75">Training: {currentOperator?.name}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{completedItems}/{totalItems}</p>
            <p className="text-xs opacity-75">completed</p>
          </div>
        </div>
        <div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
          <div
            className={`h-full ${track.color} transition-all`}
            style={{ width: `${totalItems > 0 ? (completedItems / totalItems) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="font-medium text-gray-900 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Documents to Read & Acknowledge ({acknowledgments.length}/{trackDocs.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {trackDocs.length === 0 ? (
            <p className="px-4 py-8 text-center text-gray-500">No documents in this track yet</p>
          ) : (
            trackDocs.map(doc => {
              const isAcked = acknowledgments.includes(doc.id)
              return (
                <div key={doc.id} className="px-4 py-3 flex items-center gap-4">
                  <button
                    onClick={() => !isAcked && handleAcknowledge(doc.id)}
                    disabled={isAcked}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isAcked
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-brand-500'
                    }`}
                  >
                    {isAcked && <Check className="w-4 h-4" />}
                  </button>
                  <div className="flex-1">
                    <p className={`font-medium ${isAcked ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                      {doc.title}
                    </p>
                    <p className="text-xs text-gray-500">{doc.doc_type}</p>
                  </div>
                  {doc.google_doc_url && (
                    <a
                      href={doc.google_doc_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Flight Skills (Pilot track only) */}
      {track.flightSkills && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Flight Skills Checklist ({skillSignoffs.length}/{track.flightSkills.length})
            </h3>
            <p className="text-xs text-gray-500 mt-1">Requires supervisor sign-off for each skill</p>
          </div>
          <div className="divide-y divide-gray-100">
            {track.flightSkills.map(skill => {
              const signoff = skillSignoffs.find(s => s.skill_name === skill)
              return (
                <div key={skill} className="px-4 py-3 flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    signoff ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                  }`}>
                    {signoff && <Check className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${signoff ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                      {skill}
                    </p>
                    {signoff && (
                      <p className="text-xs text-gray-500">
                        Signed off by {signoff.supervisor?.name || 'Supervisor'}
                      </p>
                    )}
                  </div>
                  {!signoff && (
                    <select
                      onChange={(e) => e.target.value && handleSignOff(skill, e.target.value)}
                      className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
                      defaultValue=""
                    >
                      <option value="">Sign off as...</option>
                      {operators.filter(op => op.id !== operatorId).map(op => (
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
  )
}

// ============================================
// CERTIFICATIONS VIEW
// ============================================

function CertificationsView({ operators }) {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState(null)

  useEffect(() => { load() }, [])

  const load = async () => {
    setCerts(await getCertifications())
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this certification?')) return
    await deleteCertification(id)
    load()
  }

  if (loading) {
    return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" /></div>
  }

  const expired = certs.filter(c => c.expiry_date && differenceInDays(new Date(c.expiry_date), new Date()) < 0)
  const expiring = certs.filter(c => c.expiry_date && differenceInDays(new Date(c.expiry_date), new Date()) >= 0 && differenceInDays(new Date(c.expiry_date), new Date()) <= 30)
  const current = certs.filter(c => !c.expiry_date || differenceInDays(new Date(c.expiry_date), new Date()) > 30)

  const CertRow = ({ cert }) => (
    <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-50">
      <div>
        <p className="font-medium text-gray-900">{cert.name} - {cert.operators?.name}</p>
        <p className="text-sm text-gray-500">
          {cert.issuing_authority && `${cert.issuing_authority} | `}
          Issued {format(new Date(cert.issued_date), 'MMM d, yyyy')}
          {cert.expiry_date && ` | Expires ${format(new Date(cert.expiry_date), 'MMM d, yyyy')}`}
        </p>
      </div>
      <div className="flex gap-1">
        <button onClick={() => { setEditing(cert); setShowModal(true) }} className="p-2 text-gray-400 hover:text-brand-600 rounded-lg"><Pencil className="w-4 h-4" /></button>
        <button onClick={() => handleDelete(cert.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg"><Trash2 className="w-4 h-4" /></button>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button onClick={() => { setEditing(null); setShowModal(true) }} className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-5 h-5" /> Add Certification
        </button>
      </div>

      {expired.length > 0 && (
        <div className="bg-white rounded-xl border border-red-200 overflow-hidden">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200 font-medium text-red-800 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Expired ({expired.length})
          </div>
          <div className="divide-y divide-gray-100">{expired.map(c => <CertRow key={c.id} cert={c} />)}</div>
        </div>
      )}

      {expiring.length > 0 && (
        <div className="bg-white rounded-xl border border-amber-200 overflow-hidden">
          <div className="px-4 py-3 bg-amber-50 border-b border-amber-200 font-medium text-amber-800 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Expiring Soon ({expiring.length})
          </div>
          <div className="divide-y divide-gray-100">{expiring.map(c => <CertRow key={c.id} cert={c} />)}</div>
        </div>
      )}

      {current.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 font-medium text-gray-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-green-500" /> Current ({current.length})
          </div>
          <div className="divide-y divide-gray-100">{current.map(c => <CertRow key={c.id} cert={c} />)}</div>
        </div>
      )}

      {certs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Award className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No certifications yet</p>
        </div>
      )}

      {showModal && (
        <CertModal
          cert={editing}
          operators={operators}
          onClose={() => { setShowModal(false); setEditing(null) }}
          onSave={() => { setShowModal(false); setEditing(null); load() }}
        />
      )}
    </div>
  )
}

function CertModal({ cert, operators, onClose, onSave }) {
  const [form, setForm] = useState({
    operator_id: cert?.operator_id || '',
    name: cert?.name || '',
    issuing_authority: cert?.issuing_authority || '',
    issued_date: cert?.issued_date || format(new Date(), 'yyyy-MM-dd'),
    expiry_date: cert?.expiry_date || ''
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      if (cert) {
        await updateCertification(cert.id, form)
      } else {
        await createCertification(form)
      }
      onSave()
    } catch (err) {
      alert('Failed: ' + err.message)
    }
    setSaving(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{cert ? 'Edit' : 'Add'} Certification</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Operator</label>
            <select value={form.operator_id} onChange={e => setForm({ ...form, operator_id: e.target.value })} required className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Select...</option>
              {operators.map(op => <option key={op.id} value={op.id}>{op.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name</label>
            <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="e.g., Basic RPAS Certificate" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Authority</label>
            <input type="text" value={form.issuing_authority} onChange={e => setForm({ ...form, issuing_authority: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="e.g., Transport Canada" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issued Date</label>
              <input type="date" required value={form.issued_date} onChange={e => setForm({ ...form, issued_date: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input type="date" value={form.expiry_date} onChange={e => setForm({ ...form, expiry_date: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
            <button type="submit" disabled={saving} className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Training() {
  const [view, setView] = useState('tracks') // 'tracks', 'session', 'certs'
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [selectedOperator, setSelectedOperator] = useState(null)
  const [operators, setOperators] = useState([])
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const [ops, docs] = await Promise.all([getOperators(), getDocuments()])
    setOperators(ops || [])
    setDocuments(docs || [])
    setLoading(false)
  }

  const handleSelectTrack = (trackId, operatorId) => {
    setSelectedTrack(trackId)
    setSelectedOperator(operatorId)
    setView('session')
  }

  const handleBack = () => {
    setView('tracks')
    setSelectedTrack(null)
    setSelectedOperator(null)
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
          <p className="text-gray-500">Complete training tracks and manage certifications</p>
        </div>
        {view === 'tracks' && (
          <button
            onClick={() => setView(view === 'certs' ? 'tracks' : 'certs')}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <Award className="w-5 h-5" />
            Certifications
          </button>
        )}
        {view === 'certs' && (
          <button
            onClick={() => setView('tracks')}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <GraduationCap className="w-5 h-5" />
            Training Tracks
          </button>
        )}
      </div>

      {/* Views */}
      {view === 'tracks' && (
        <TrackSelection
          onSelectTrack={handleSelectTrack}
          operators={operators}
          documents={documents}
        />
      )}

      {view === 'session' && (
        <TrainingSession
          trackId={selectedTrack}
          initialOperatorId={selectedOperator}
          operators={operators}
          documents={documents}
          onBack={handleBack}
        />
      )}

      {view === 'certs' && (
        <CertificationsView operators={operators} />
      )}
    </div>
  )
}
