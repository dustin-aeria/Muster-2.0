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
  ClipboardCheck,
  Plane,
  Briefcase,
  Plus,
  Trash2,
  Pencil,
  Play
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import { getOperators, getDocuments } from '../lib/api'
import { format, differenceInDays } from 'date-fns'
import { MarkdownPreview } from '../components/MarkdownEditor'

// ============================================
// TRAINING TRACKS
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
      {
        name: 'Pre-flight inspection',
        description: 'Complete walk-around and systems check before flight',
        checkpoints: [
          'Propellers secure, no damage',
          'Battery charged, seated properly',
          'Camera/gimbal operational',
          'GPS lock confirmed',
          'Control surfaces responsive'
        ]
      },
      {
        name: 'Takeoff and hover stability',
        description: 'Demonstrate controlled vertical takeoff and stable hover',
        checkpoints: [
          'Smooth throttle application',
          'Stable hover at 10ft for 30 seconds',
          'Minimal drift correction needed',
          'Proper altitude awareness'
        ]
      },
      {
        name: 'Basic maneuvering (forward, backward, lateral)',
        description: 'Execute controlled flight in all directions',
        checkpoints: [
          'Smooth transitions between directions',
          'Consistent altitude maintenance',
          'Proper speed control',
          'Coordinated stick inputs'
        ]
      },
      {
        name: 'Altitude hold and positioning',
        description: 'Maintain precise altitude and position over a point',
        checkpoints: [
          'Hold altitude within 3ft tolerance',
          'Station keeping over ground marker',
          'Smooth altitude transitions',
          'Wind compensation demonstrated'
        ]
      },
      {
        name: 'Point of interest orbits',
        description: 'Execute circular flight pattern around a fixed point',
        checkpoints: [
          'Consistent radius maintained',
          'Camera/nose pointed at POI',
          'Steady speed throughout orbit',
          'Smooth entry and exit'
        ]
      },
      {
        name: 'Return to home procedures',
        description: 'Demonstrate RTH activation and monitoring',
        checkpoints: [
          'RTH altitude set appropriately',
          'Correct home point verification',
          'Safe return path observed',
          'Proper landing approach'
        ]
      },
      {
        name: 'Emergency procedures (motor out, signal loss)',
        description: 'Demonstrate knowledge of emergency response protocols',
        checkpoints: [
          'Motor failure response verbalized',
          'Signal loss behavior understood',
          'Low battery actions known',
          'Emergency landing site awareness'
        ]
      },
      {
        name: 'Precision landing',
        description: 'Land accurately on a designated target',
        checkpoints: [
          'Approach path planning',
          'Speed control on descent',
          'Landing within 3ft of target',
          'Soft touchdown, no bouncing'
        ]
      },
      {
        name: 'Battery swap procedures',
        description: 'Safely change batteries following proper protocol',
        checkpoints: [
          'Power down before removal',
          'Battery condition check',
          'Proper insertion and lock',
          'System restart verification'
        ]
      },
      {
        name: 'Post-flight inspection and logging',
        description: 'Complete post-flight checks and documentation',
        checkpoints: [
          'Aircraft condition assessment',
          'Battery storage state set',
          'Flight log completed',
          'Any issues documented'
        ]
      }
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

async function createSession(track, traineeName) {
  const { data, error } = await supabase
    .from('track_assignments')
    .insert({ track, trainee_name: traineeName, status: 'in_progress' })
    .select()
    .single()
  if (error) throw error
  return data
}

async function getSession(id) {
  const { data } = await supabase.from('track_assignments').select('*').eq('id', id).single()
  return data
}

async function getSessions() {
  const { data } = await supabase
    .from('track_assignments')
    .select('*')
    .order('assigned_at', { ascending: false })
  return data || []
}

async function updateSession(id, updates) {
  await supabase.from('track_assignments').update(updates).eq('id', id)
}

async function deleteSession(id) {
  // Delete related records first
  await supabase.from('document_acknowledgments').delete().eq('assignment_id', id)
  await supabase.from('flight_skill_signoffs').delete().eq('assignment_id', id)
  await supabase.from('track_assignments').delete().eq('id', id)
}

async function getAcknowledgments(sessionId) {
  const { data } = await supabase.from('document_acknowledgments').select('document_id').eq('assignment_id', sessionId)
  return (data || []).map(a => a.document_id)
}

async function acknowledgeDoc(sessionId, docId) {
  await supabase.from('document_acknowledgments').insert({ assignment_id: sessionId, document_id: docId })
}

async function getSkillSignoffs(sessionId) {
  const { data } = await supabase.from('flight_skill_signoffs').select('*').eq('assignment_id', sessionId)
  return data || []
}

async function signOffSkill(sessionId, skillName, supervisorName) {
  await supabase.from('flight_skill_signoffs').insert({
    assignment_id: sessionId,
    skill_name: skillName,
    notes: `Signed off by: ${supervisorName}`
  })
}

async function getCertifications() {
  const { data } = await supabase.from('certifications').select('*, operators(name)').order('expiry_date', { ascending: true, nullsFirst: false })
  return data || []
}

async function createCertification(cert) {
  const { data, error } = await supabase.from('certifications').insert(cert).select().single()
  if (error) throw error
  return data
}

async function updateCertification(id, updates) {
  await supabase.from('certifications').update(updates).eq('id', id)
}

async function deleteCertification(id) {
  await supabase.from('certifications').delete().eq('id', id)
}

// ============================================
// TRACK SELECTION (HOME)
// ============================================

function TrackSelection({ documents, onBeginTraining, onContinueSession }) {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    loadSessions()
  }, [])

  const loadSessions = async () => {
    const data = await getSessions()
    setSessions(data.filter(s => s.status !== 'completed'))
  }

  const handleDelete = async (id, e) => {
    e.stopPropagation()
    if (!confirm('Delete this training session?')) return
    await deleteSession(id)
    loadSessions()
  }

  return (
    <div className="space-y-8">
      {/* In Progress Sessions */}
      {sessions.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Continue Training</h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {sessions.map(session => {
              const track = TRACKS.find(t => t.id === session.track)
              if (!track) return null
              const Icon = track.icon
              return (
                <div
                  key={session.id}
                  className="px-4 py-3 flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => onContinueSession(session)}
                >
                  <div className={`p-2 rounded-lg ${track.lightColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{track.name}</p>
                    <p className="text-sm text-gray-500">{session.trainee_name || 'Unknown'}</p>
                  </div>
                  <button
                    onClick={(e) => handleDelete(session.id, e)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-brand-600 font-medium">Continue →</span>
                </div>
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
              <div
                key={track.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${track.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{track.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{track.description}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                      <span>{docCount} documents</span>
                      {track.flightSkills && <span>{track.flightSkills.length} flight skills</span>}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onBeginTraining(track)}
                  className="w-full py-2.5 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Begin Training
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ============================================
// TRAINING SESSION
// ============================================

function TrainingSession({ track, existingSession, documents, operators, onBack, onComplete }) {
  const [session, setSession] = useState(existingSession)
  const [traineeName, setTraineeName] = useState(existingSession?.trainee_name || '')
  const [started, setStarted] = useState(!!existingSession)
  const [acknowledgments, setAcknowledgments] = useState([])
  const [skillSignoffs, setSkillSignoffs] = useState([])
  const [saving, setSaving] = useState(false)
  const [expandedDoc, setExpandedDoc] = useState(null)
  const [expandedSkill, setExpandedSkill] = useState(null)

  const trackDocs = documents.filter(d => track.docTypes.includes(d.doc_type))
  const Icon = track.icon

  useEffect(() => {
    if (existingSession) {
      loadProgress()
    }
  }, [])

  const loadProgress = async () => {
    const acks = await getAcknowledgments(existingSession.id)
    setAcknowledgments(acks)
    if (track.flightSkills) {
      const skills = await getSkillSignoffs(existingSession.id)
      setSkillSignoffs(skills)
    }
  }

  const handleStart = async () => {
    if (!traineeName.trim()) {
      alert('Please enter the trainee name')
      return
    }
    setSaving(true)
    try {
      const newSession = await createSession(track.id, traineeName.trim())
      setSession(newSession)
      setStarted(true)
    } catch (err) {
      alert('Failed to start: ' + err.message)
    }
    setSaving(false)
  }

  const handleAcknowledge = async (docId) => {
    try {
      await acknowledgeDoc(session.id, docId)
      const newAcks = [...acknowledgments, docId]
      setAcknowledgments(newAcks)
      checkCompletion(newAcks, skillSignoffs)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSignOff = async (skillName) => {
    const supervisorName = prompt('Supervisor name:')
    if (!supervisorName) return
    try {
      await signOffSkill(session.id, skillName, supervisorName)
      const newSignoffs = [...skillSignoffs, { skill_name: skillName, notes: `Signed off by: ${supervisorName}` }]
      setSkillSignoffs(newSignoffs)
      checkCompletion(acknowledgments, newSignoffs)
    } catch (err) {
      console.error(err)
    }
  }

  const checkCompletion = async (acks, skills) => {
    const docsComplete = acks.length >= trackDocs.length
    const skillsComplete = !track.flightSkills || skills.length >= track.flightSkills.length
    if (docsComplete && skillsComplete && trackDocs.length > 0) {
      await updateSession(session.id, { status: 'completed', completed_at: new Date().toISOString() })
    }
  }

  const totalItems = trackDocs.length + (track.flightSkills?.length || 0)
  const completedItems = acknowledgments.length + skillSignoffs.length
  const isComplete = completedItems >= totalItems && totalItems > 0

  // Start screen
  if (!started) {
    return (
      <div className="space-y-6">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" /> Back
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-xl ${track.color} text-white`}>
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{track.name}</h2>
              <p className="text-gray-500">{track.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trainee Name
              </label>
              <input
                type="text"
                value={traineeName}
                onChange={(e) => setTraineeName(e.target.value)}
                placeholder="Enter name of person being trained"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                autoFocus
              />
            </div>

            <button
              onClick={handleStart}
              disabled={saving || !traineeName.trim()}
              className="w-full py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {saving ? 'Starting...' : (
                <>
                  <Play className="w-5 h-5" />
                  Start Training
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Training in progress
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" /> Back
        </button>
        {isComplete && (
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium flex items-center gap-2">
            <Check className="w-5 h-5" /> Training Complete
          </span>
        )}
      </div>

      {/* Progress Header */}
      <div className={`rounded-xl border-2 p-5 ${track.lightColor}`}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${track.color} text-white`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{track.name}</h2>
            <p className="text-sm opacity-80">Trainee: {traineeName}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{completedItems}/{totalItems}</p>
            <p className="text-sm opacity-80">items completed</p>
          </div>
        </div>
        <div className="mt-4 h-3 bg-white/50 rounded-full overflow-hidden">
          <div
            className={`h-full ${track.color} transition-all duration-300`}
            style={{ width: `${totalItems > 0 ? (completedItems / totalItems) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-400" />
            Documents ({acknowledgments.length}/{trackDocs.length})
          </h3>
        </div>
        {trackDocs.length === 0 ? (
          <p className="px-5 py-8 text-center text-gray-500">No documents for this track</p>
        ) : (
          <div className="divide-y divide-gray-100">
            {trackDocs.map(doc => {
              const done = acknowledgments.includes(doc.id)
              const isExpanded = expandedDoc === doc.id
              return (
                <div key={doc.id} className="overflow-hidden">
                  {/* Document header row */}
                  <div
                    className={`px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors ${isExpanded ? 'bg-gray-50' : ''}`}
                    onClick={() => setExpandedDoc(isExpanded ? null : doc.id)}
                  >
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      done
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300'
                    }`}>
                      {done && <Check className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium ${done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {doc.title}
                      </p>
                      <p className="text-sm text-gray-500">{doc.doc_type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.google_doc_url && (
                        <a
                          href={doc.google_doc_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50 rounded-lg flex items-center gap-1"
                        >
                          Open <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 bg-gray-50 border-t border-gray-100">
                      <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4 max-h-96 overflow-y-auto">
                        {doc.content ? (
                          <MarkdownPreview content={doc.content} />
                        ) : (
                          <p className="text-gray-400 italic">No content available. Use the external link to view this document.</p>
                        )}
                      </div>
                      <div className="flex justify-end gap-3 mt-4">
                        <button
                          onClick={() => setExpandedDoc(null)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg text-sm font-medium"
                        >
                          Collapse
                        </button>
                        {!done && (
                          <button
                            onClick={() => {
                              handleAcknowledge(doc.id)
                              setExpandedDoc(null)
                            }}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2"
                          >
                            <Check className="w-4 h-4" />
                            Mark Complete
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Flight Skills */}
      {track.flightSkills && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Plane className="w-5 h-5 text-gray-400" />
              Flight Skills ({skillSignoffs.length}/{track.flightSkills.length})
            </h3>
            <p className="text-sm text-gray-500 mt-1">Each skill requires supervisor sign-off after observing checkpoints</p>
          </div>
          <div className="divide-y divide-gray-100">
            {track.flightSkills.map(skill => {
              const skillName = typeof skill === 'string' ? skill : skill.name
              const skillDesc = typeof skill === 'string' ? null : skill.description
              const skillCheckpoints = typeof skill === 'string' ? [] : (skill.checkpoints || [])
              const signoff = skillSignoffs.find(s => s.skill_name === skillName)
              const isExpanded = expandedSkill === skillName

              return (
                <div key={skillName} className="overflow-hidden">
                  {/* Skill header row */}
                  <div
                    className={`px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors ${isExpanded ? 'bg-gray-50' : ''}`}
                    onClick={() => setExpandedSkill(isExpanded ? null : skillName)}
                  >
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      signoff ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                    }`}>
                      {signoff && <Check className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${signoff ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {skillName}
                      </p>
                      {signoff && (
                        <p className="text-sm text-gray-500">{signoff.notes}</p>
                      )}
                      {!signoff && skillDesc && (
                        <p className="text-sm text-gray-500">{skillDesc}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {!signoff && !isExpanded && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSignOff(skillName)
                          }}
                          className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          Sign Off
                        </button>
                      )}
                      {skillCheckpoints.length > 0 && (
                        isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )
                      )}
                    </div>
                  </div>

                  {/* Expanded checkpoints */}
                  {isExpanded && skillCheckpoints.length > 0 && (
                    <div className="px-5 pb-5 bg-gray-50 border-t border-gray-100">
                      <div className="bg-white rounded-lg border border-gray-200 p-4 mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Observer Checkpoints</h4>
                        <div className="space-y-2">
                          {skillCheckpoints.map((checkpoint, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0 mt-0.5 flex items-center justify-center">
                                {signoff && <Check className="w-3 h-3 text-green-600" />}
                              </div>
                              <span className={`text-sm ${signoff ? 'text-gray-400' : 'text-gray-700'}`}>
                                {checkpoint}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end gap-3 mt-4">
                        <button
                          onClick={() => setExpandedSkill(null)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg text-sm font-medium"
                        >
                          Collapse
                        </button>
                        {!signoff && (
                          <button
                            onClick={() => {
                              handleSignOff(skillName)
                              setExpandedSkill(null)
                            }}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 flex items-center gap-2"
                          >
                            <Check className="w-4 h-4" />
                            Supervisor Sign-Off
                          </button>
                        )}
                      </div>
                    </div>
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
// CERTIFICATIONS
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

  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" /></div>

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

      {showModal && <CertModal cert={editing} operators={operators} onClose={() => { setShowModal(false); setEditing(null) }} onSave={() => { setShowModal(false); setEditing(null); load() }} />}
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
      if (cert) await updateCertification(cert.id, form)
      else await createCertification(form)
      onSave()
    } catch (err) { alert('Failed: ' + err.message) }
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
            <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Authority</label>
            <input type="text" value={form.issuing_authority} onChange={e => setForm({ ...form, issuing_authority: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
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
            <button type="submit" disabled={saving} className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">{saving ? 'Saving...' : 'Save'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ============================================
// MAIN
// ============================================

export default function Training() {
  const [view, setView] = useState('home')
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [selectedSession, setSelectedSession] = useState(null)
  const [operators, setOperators] = useState([])
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getOperators(), getDocuments()]).then(([ops, docs]) => {
      setOperators(ops || [])
      setDocuments(docs || [])
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" /></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Training</h1>
          <p className="text-gray-500">Complete training tracks and manage certifications</p>
        </div>
        <button
          onClick={() => setView(view === 'certs' ? 'home' : 'certs')}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          {view === 'certs' ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5" />}
          {view === 'certs' ? 'Training' : 'Certifications'}
        </button>
      </div>

      {view === 'home' && (
        <TrackSelection
          documents={documents}
          onBeginTraining={(track) => { setSelectedTrack(track); setSelectedSession(null); setView('session') }}
          onContinueSession={(session) => { setSelectedTrack(TRACKS.find(t => t.id === session.track)); setSelectedSession(session); setView('session') }}
        />
      )}

      {view === 'session' && selectedTrack && (
        <TrainingSession
          track={selectedTrack}
          existingSession={selectedSession}
          documents={documents}
          operators={operators}
          onBack={() => { setView('home'); setSelectedTrack(null); setSelectedSession(null) }}
        />
      )}

      {view === 'certs' && <CertificationsView operators={operators} />}
    </div>
  )
}
