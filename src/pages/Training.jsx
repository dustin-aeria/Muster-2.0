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
  Play,
  HelpCircle,
  Zap,
  Wrench,
  BookOpen,
  Target,
  CircleCheck,
  CircleX
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import { getOperators, getDocuments } from '../lib/api'
import { format, differenceInDays } from 'date-fns'
import { MarkdownPreview } from '../components/MarkdownEditor'

// ============================================
// TRAINING TRACKS - REDESIGNED
// ============================================

const TRACKS = [
  {
    id: 'onboarding',
    name: 'Onboarding',
    description: 'New team member orientation - read and acknowledge all company documents',
    icon: Users,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 text-blue-700 border-blue-200',
    // Onboarding requires reading all docs - this makes sense for new people
    requireDocs: true,
    docTypes: ['policy', 'procedure', 'form']
  },
  {
    id: 'field',
    name: 'Field Operations',
    description: 'Hands-on readiness check for field work',
    icon: ClipboardCheck,
    color: 'bg-green-500',
    lightColor: 'bg-green-50 text-green-700 border-green-200',
    requireDocs: false, // No doc re-reads
    // Equipment inspection checklist - hands-on verification
    equipmentChecklist: [
      { item: 'First aid kit', check: 'Present, sealed, not expired' },
      { item: 'Fire extinguisher', check: 'Charged, inspection current' },
      { item: 'PPE (vest, hard hat, safety glasses)', check: 'Present and in good condition' },
      { item: 'Communication devices', check: 'Charged, signal confirmed' },
      { item: 'Vehicle inspection', check: 'Fluids, tires, lights checked' },
      { item: 'Weather briefing', check: 'Conditions reviewed for site' }
    ],
    // Decision scenarios - what would you do?
    scenarios: [
      {
        situation: 'You arrive at a job site and notice unmarked power lines within 50 feet of the planned flight area.',
        question: 'What do you do?',
        options: [
          'Proceed carefully, keeping distance from the lines',
          'Stop work, document the hazard, contact supervisor before proceeding',
          'Move the takeoff point further away and continue',
          'Fly higher to avoid the lines'
        ],
        correct: 1,
        explanation: 'Always stop and reassess when you encounter an undocumented hazard. The FHA may need updating.'
      },
      {
        situation: 'Mid-flight, a bystander walks into your operational area despite the cones and tape.',
        question: 'What is your immediate action?',
        options: [
          'Shout at them to leave',
          'Land immediately in place',
          'Hover in position and have your VO address the person',
          'Continue the mission, they will leave'
        ],
        correct: 2,
        explanation: 'Maintain aircraft control while your visual observer handles ground personnel. Never land on someone.'
      },
      {
        situation: 'Weather conditions are deteriorating faster than forecast. Wind is picking up.',
        question: 'At what point do you scrub the mission?',
        options: [
          'When the aircraft becomes hard to control',
          'When winds exceed aircraft or your personal limits, whichever is lower',
          'When the client asks you to stop',
          'Never - the show must go on'
        ],
        correct: 1,
        explanation: 'Your personal limits may be lower than aircraft limits. Know both and respect the lower threshold.'
      }
    ],
    // Reference docs - optional, not required
    referenceDocs: ['procedure', 'fha']
  },
  {
    id: 'pilot',
    name: 'Pilot Recurrency',
    description: 'Annual flight certification - demonstrate skills, not re-read docs',
    icon: Plane,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50 text-purple-700 border-purple-200',
    requireDocs: false, // No doc re-reads
    // Knowledge quiz - verify understanding
    quiz: [
      {
        question: 'What is the maximum altitude for Part 107 operations without a waiver?',
        options: ['500 feet AGL', '400 feet AGL', '400 feet MSL', '600 feet AGL'],
        correct: 1
      },
      {
        question: 'You need to fly over people for a roof inspection. What is required?',
        options: [
          'Nothing, inspections are exempt',
          'Part 107.39 waiver or compliant drone category',
          'Just verbal consent from the people',
          'A safety pilot'
        ],
        correct: 1
      },
      {
        question: 'Your aircraft loses GPS signal mid-flight. What happens and what do you do?',
        options: [
          'Aircraft will auto-land immediately',
          'Switch to ATTI mode, manually control, land when safe',
          'RTH will still work via compass',
          'Increase altitude to regain signal'
        ],
        correct: 1
      },
      {
        question: 'When must you report a drone accident to the FAA?',
        options: [
          'Any crash',
          'Serious injury or property damage over $500',
          'Only if someone complains',
          'Never for Part 107'
        ],
        correct: 1
      },
      {
        question: 'What is the minimum weather visibility for Part 107 flight?',
        options: ['1 statute mile', '2 statute miles', '3 statute miles', '5 statute miles'],
        correct: 2
      }
    ],
    // Flight skills demonstration - supervisor observed
    flightSkills: [
      {
        name: 'Pre-flight inspection',
        description: 'Complete walk-around and systems check',
        checkpoints: [
          'Propellers secure, no damage',
          'Battery charged and seated',
          'Camera/gimbal operational',
          'GPS lock confirmed',
          'Control surfaces responsive'
        ]
      },
      {
        name: 'Takeoff and hover stability',
        description: 'Controlled vertical takeoff and stable hover',
        checkpoints: [
          'Smooth throttle application',
          'Stable hover at 10ft for 30 seconds',
          'Minimal drift correction',
          'Proper altitude awareness'
        ]
      },
      {
        name: 'Basic maneuvering',
        description: 'Controlled flight in all directions',
        checkpoints: [
          'Smooth transitions between directions',
          'Consistent altitude maintenance',
          'Proper speed control',
          'Coordinated stick inputs'
        ]
      },
      {
        name: 'Point of interest orbit',
        description: 'Circular pattern around a fixed point',
        checkpoints: [
          'Consistent radius maintained',
          'Camera pointed at POI',
          'Steady speed throughout',
          'Smooth entry and exit'
        ]
      },
      {
        name: 'Emergency procedures',
        description: 'Demonstrate knowledge of emergency response',
        checkpoints: [
          'Motor failure response verbalized',
          'Signal loss behavior understood',
          'Low battery actions known',
          'Emergency landing site identified'
        ]
      },
      {
        name: 'Precision landing',
        description: 'Land accurately on designated target',
        checkpoints: [
          'Approach path planned',
          'Speed control on descent',
          'Landing within 3ft of target',
          'Soft touchdown'
        ]
      }
    ],
    // Scenarios for decision making
    scenarios: [
      {
        situation: 'During flight, you notice battery voltage dropping faster than expected.',
        question: 'What is your response?',
        options: [
          'Continue until low battery warning',
          'Immediately initiate RTH and monitor closely',
          'Land wherever you are right now',
          'Increase altitude to reduce power draw'
        ],
        correct: 1,
        explanation: 'Unexpected battery behavior requires conservative response. RTH gives you options while heading home.'
      },
      {
        situation: 'A manned helicopter appears in your area, about 1 mile away and at similar altitude.',
        question: 'What do you do?',
        options: [
          'Continue, you have right of way as you were there first',
          'Descend and land immediately, yielding to manned aircraft',
          'Climb higher to be more visible',
          'Hold position and flash your lights'
        ],
        correct: 1,
        explanation: 'Always yield to manned aircraft. Descend and land to remove any conflict.'
      }
    ],
    // Reference docs - optional
    referenceDocs: ['procedure']
  },
  {
    id: 'management',
    name: 'Management & SMS',
    description: 'Safety oversight and trend analysis',
    icon: Briefcase,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50 text-amber-700 border-amber-200',
    requireDocs: false, // No doc re-reads
    // SMS Knowledge quiz
    quiz: [
      {
        question: 'What is the primary purpose of a Safety Management System?',
        options: [
          'To document accidents after they happen',
          'To proactively identify and mitigate hazards before incidents occur',
          'To satisfy regulatory requirements',
          'To assign blame when things go wrong'
        ],
        correct: 1
      },
      {
        question: 'An employee reports a near-miss. What is the correct management response?',
        options: [
          'Investigate who is at fault',
          'Thank them, investigate the hazard, implement controls if needed',
          'Add it to the file but take no action unless it happens again',
          'Counsel the employee on being more careful'
        ],
        correct: 1
      },
      {
        question: 'You notice a pattern: 3 similar battery incidents in 2 months. What action?',
        options: [
          'Wait for a fourth to confirm the pattern',
          'Review all battery procedures, consider equipment changes, brief team',
          'Replace the batteries and move on',
          'Document it for the annual review'
        ],
        correct: 1
      },
      {
        question: 'When should safety policies be reviewed and updated?',
        options: [
          'Only after an accident',
          'Annually or when operations/regulations change',
          'Every 5 years',
          'Never - once written they are final'
        ],
        correct: 1
      }
    ],
    // Management scenarios
    scenarios: [
      {
        situation: 'A pilot pushes back on a new safety procedure, saying it slows down operations.',
        question: 'How do you handle this?',
        options: [
          'Override them - safety comes first, no discussion',
          'Listen to their concern, evaluate if procedure can be improved while maintaining safety',
          'Remove the procedure since it is causing friction',
          'Document their resistance for their personnel file'
        ],
        correct: 1,
        explanation: 'Good SMS involves listening. Procedures should be practical. But safety intent must be preserved.'
      },
      {
        situation: 'Client is pressuring your team to fly in marginal weather to meet their deadline.',
        question: 'What do you do?',
        options: [
          'Let the pilot decide',
          'Support your pilot in declining, offer to reschedule',
          'Ask the pilot to try and see how it goes',
          'Agree to the client demand - customer is always right'
        ],
        correct: 1,
        explanation: 'Management must back safety decisions. Never put pilots in position of choosing between job and safety.'
      }
    ],
    // Review tasks - tie into actual system data
    reviewTasks: [
      'Review any open safety reports from the past quarter',
      'Check for expiring certifications on your team',
      'Review recent flight logs for any noted issues',
      'Confirm all FHAs are current for active job sites'
    ],
    // Reference docs - optional
    referenceDocs: ['policy']
  }
]

// ============================================
// API HELPERS
// ============================================

async function createSession(track, traineeName) {
  const { data, error } = await supabase
    .from('track_assignments')
    .insert({
      track,
      trainee_name: traineeName,
      status: 'in_progress',
      progress_data: {} // Store quiz answers, checklist completions, etc.
    })
    .select()
    .single()
  if (error) throw error
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
// TRACK SELECTION
// ============================================

function TrackSelection({ documents, onBeginTraining, onContinueSession }) {
  const [sessions, setSessions] = useState([])

  useEffect(() => { loadSessions() }, [])

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

  const getTrackSummary = (track) => {
    const items = []
    if (track.requireDocs) {
      const docCount = documents.filter(d => track.docTypes?.includes(d.doc_type)).length
      items.push(`${docCount} documents`)
    }
    if (track.quiz) items.push(`${track.quiz.length} quiz questions`)
    if (track.scenarios) items.push(`${track.scenarios.length} scenarios`)
    if (track.flightSkills) items.push(`${track.flightSkills.length} flight skills`)
    if (track.equipmentChecklist) items.push(`${track.equipmentChecklist.length} equipment checks`)
    if (track.reviewTasks) items.push(`${track.reviewTasks.length} review tasks`)
    return items.join(' • ')
  }

  return (
    <div className="space-y-8">
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
                    <p className="text-sm text-gray-500">{session.trainee_name}</p>
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

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Start New Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRACKS.map(track => {
            const Icon = track.icon
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
                    <p className="text-xs text-gray-400 mt-2">{getTrackSummary(track)}</p>
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
// QUIZ SECTION
// ============================================

function QuizSection({ quiz, completedQuestions, onComplete }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])

  const question = quiz[currentQ]
  const isLastQuestion = currentQ === quiz.length - 1
  const allDone = completedQuestions.length === quiz.length

  if (allDone) {
    const correct = completedQuestions.filter(a => a.correct).length
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-gray-400" />
            Knowledge Quiz
            <span className="ml-auto text-green-600 flex items-center gap-1">
              <Check className="w-4 h-4" /> Complete
            </span>
          </h3>
        </div>
        <div className="p-6 text-center">
          <div className="text-4xl font-bold text-gray-900 mb-2">{correct}/{quiz.length}</div>
          <p className="text-gray-500">Questions answered correctly</p>
        </div>
      </div>
    )
  }

  const handleSubmit = () => {
    if (selected === null) return
    const isCorrect = selected === question.correct
    const newAnswers = [...answers, { questionIndex: currentQ, selected, correct: isCorrect }]
    setAnswers(newAnswers)
    setShowResult(true)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(answers.concat({ questionIndex: currentQ, selected, correct: selected === question.correct }))
    } else {
      setCurrentQ(currentQ + 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-gray-400" />
          Knowledge Quiz ({currentQ + 1}/{quiz.length})
        </h3>
      </div>
      <div className="p-6">
        <p className="text-lg font-medium text-gray-900 mb-4">{question.question}</p>
        <div className="space-y-2">
          {question.options.map((opt, idx) => {
            let style = 'border-gray-200 hover:border-brand-300 hover:bg-brand-50'
            if (showResult) {
              if (idx === question.correct) style = 'border-green-500 bg-green-50'
              else if (idx === selected && idx !== question.correct) style = 'border-red-500 bg-red-50'
              else style = 'border-gray-200 opacity-50'
            } else if (selected === idx) {
              style = 'border-brand-500 bg-brand-50'
            }
            return (
              <button
                key={idx}
                onClick={() => !showResult && setSelected(idx)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${style}`}
              >
                <div className="flex items-center gap-3">
                  {showResult && idx === question.correct && <CircleCheck className="w-5 h-5 text-green-600" />}
                  {showResult && idx === selected && idx !== question.correct && <CircleX className="w-5 h-5 text-red-600" />}
                  <span>{opt}</span>
                </div>
              </button>
            )
          })}
        </div>
        {showResult && question.explanation && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">{question.explanation}</p>
          </div>
        )}
        <div className="flex justify-end mt-6">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700"
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// SCENARIO SECTION
// ============================================

function ScenarioSection({ scenarios, completedScenarios, onComplete }) {
  const [expanded, setExpanded] = useState(null)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (scenario, idx) => {
    setShowResult(true)
  }

  const handleComplete = (scenario, idx) => {
    onComplete(idx)
    setExpanded(null)
    setSelected(null)
    setShowResult(false)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Zap className="w-5 h-5 text-gray-400" />
          Decision Scenarios ({completedScenarios.length}/{scenarios.length})
        </h3>
        <p className="text-sm text-gray-500 mt-1">What would you do in these situations?</p>
      </div>
      <div className="divide-y divide-gray-100">
        {scenarios.map((scenario, idx) => {
          const done = completedScenarios.includes(idx)
          const isExpanded = expanded === idx
          return (
            <div key={idx} className="overflow-hidden">
              <div
                className={`px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 ${isExpanded ? 'bg-gray-50' : ''}`}
                onClick={() => {
                  if (!done) {
                    setExpanded(isExpanded ? null : idx)
                    setSelected(null)
                    setShowResult(false)
                  }
                }}
              >
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                }`}>
                  {done && <Check className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${done ? 'text-gray-400' : 'text-gray-900'}`}>
                    Scenario {idx + 1}
                  </p>
                  <p className={`text-sm ${done ? 'text-gray-400' : 'text-gray-500'} line-clamp-1`}>
                    {scenario.situation.slice(0, 80)}...
                  </p>
                </div>
                {!done && (isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />)}
              </div>

              {isExpanded && (
                <div className="px-5 pb-5 bg-gray-50 border-t border-gray-100">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 mt-4">
                    <p className="text-gray-800 mb-4">{scenario.situation}</p>
                    <p className="font-medium text-gray-900 mb-3">{scenario.question}</p>
                    <div className="space-y-2">
                      {scenario.options.map((opt, optIdx) => {
                        let style = 'border-gray-200 hover:border-brand-300'
                        if (showResult) {
                          if (optIdx === scenario.correct) style = 'border-green-500 bg-green-50'
                          else if (optIdx === selected) style = 'border-red-500 bg-red-50'
                          else style = 'border-gray-200 opacity-50'
                        } else if (selected === optIdx) {
                          style = 'border-brand-500 bg-brand-50'
                        }
                        return (
                          <button
                            key={optIdx}
                            onClick={() => !showResult && setSelected(optIdx)}
                            disabled={showResult}
                            className={`w-full text-left px-4 py-2 rounded-lg border-2 text-sm ${style}`}
                          >
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                    {showResult && scenario.explanation && (
                      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800">{scenario.explanation}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    {!showResult ? (
                      <button
                        onClick={() => handleSubmit(scenario, idx)}
                        disabled={selected === null}
                        className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 disabled:opacity-50"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={() => handleComplete(scenario, idx)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Mark Complete
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
  )
}

// ============================================
// EQUIPMENT CHECKLIST SECTION
// ============================================

function EquipmentChecklistSection({ checklist, completedItems, onToggle }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-gray-400" />
          Equipment Inspection ({completedItems.length}/{checklist.length})
        </h3>
        <p className="text-sm text-gray-500 mt-1">Physically verify each item before proceeding</p>
      </div>
      <div className="divide-y divide-gray-100">
        {checklist.map((item, idx) => {
          const done = completedItems.includes(idx)
          return (
            <div
              key={idx}
              className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => onToggle(idx)}
            >
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-brand-500'
              }`}>
                {done && <Check className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <p className={`font-medium ${done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                  {item.item}
                </p>
                <p className="text-sm text-gray-500">{item.check}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ============================================
// REVIEW TASKS SECTION
// ============================================

function ReviewTasksSection({ tasks, completedTasks, onToggle }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-gray-400" />
          Review Tasks ({completedTasks.length}/{tasks.length})
        </h3>
        <p className="text-sm text-gray-500 mt-1">Complete these management review items</p>
      </div>
      <div className="divide-y divide-gray-100">
        {tasks.map((task, idx) => {
          const done = completedTasks.includes(idx)
          return (
            <div
              key={idx}
              className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => onToggle(idx)}
            >
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-brand-500'
              }`}>
                {done && <Check className="w-4 h-4" />}
              </div>
              <p className={`flex-1 ${done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                {task}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ============================================
// FLIGHT SKILLS SECTION
// ============================================

function FlightSkillsSection({ skills, signoffs, onSignOff }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Plane className="w-5 h-5 text-gray-400" />
          Flight Skills ({signoffs.length}/{skills.length})
        </h3>
        <p className="text-sm text-gray-500 mt-1">Supervisor observes and signs off each skill</p>
      </div>
      <div className="divide-y divide-gray-100">
        {skills.map(skill => {
          const signoff = signoffs.find(s => s.skill_name === skill.name)
          const isExpanded = expanded === skill.name

          return (
            <div key={skill.name} className="overflow-hidden">
              <div
                className={`px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 ${isExpanded ? 'bg-gray-50' : ''}`}
                onClick={() => setExpanded(isExpanded ? null : skill.name)}
              >
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  signoff ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                }`}>
                  {signoff && <Check className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${signoff ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                    {skill.name}
                  </p>
                  <p className="text-sm text-gray-500">{signoff ? signoff.notes : skill.description}</p>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </div>

              {isExpanded && (
                <div className="px-5 pb-5 bg-gray-50 border-t border-gray-100">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Observer Checkpoints</h4>
                    <div className="space-y-2">
                      {skill.checkpoints.map((cp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0 mt-0.5 flex items-center justify-center">
                            {signoff && <Check className="w-3 h-3 text-green-600" />}
                          </div>
                          <span className={`text-sm ${signoff ? 'text-gray-400' : 'text-gray-700'}`}>{cp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {!signoff && (
                    <div className="flex justify-end mt-4">
                      <button
                        onClick={() => {
                          onSignOff(skill.name)
                          setExpanded(null)
                        }}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Supervisor Sign-Off
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ============================================
// DOCUMENTS SECTION (for onboarding)
// ============================================

function DocumentsSection({ documents, acknowledgments, onAcknowledge }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-400" />
          Documents ({acknowledgments.length}/{documents.length})
        </h3>
      </div>
      {documents.length === 0 ? (
        <p className="px-5 py-8 text-center text-gray-500">No documents for this track</p>
      ) : (
        <div className="divide-y divide-gray-100">
          {documents.map(doc => {
            const done = acknowledgments.includes(doc.id)
            const isExpanded = expanded === doc.id
            return (
              <div key={doc.id} className="overflow-hidden">
                <div
                  className={`px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 ${isExpanded ? 'bg-gray-50' : ''}`}
                  onClick={() => setExpanded(isExpanded ? null : doc.id)}
                >
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                  }`}>
                    {done && <Check className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium ${done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{doc.title}</p>
                    <p className="text-sm text-gray-500">{doc.doc_type}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {doc.google_doc_url && (
                      <a
                        href={doc.google_doc_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50 rounded-lg flex items-center gap-1"
                      >
                        Open <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 bg-gray-50 border-t border-gray-100">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4 max-h-96 overflow-y-auto">
                      {doc.content ? (
                        <MarkdownPreview content={doc.content} />
                      ) : (
                        <p className="text-gray-400 italic">No inline content. Use the external link to view.</p>
                      )}
                    </div>
                    {!done && (
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => {
                            onAcknowledge(doc.id)
                            setExpanded(null)
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2"
                        >
                          <Check className="w-4 h-4" /> I have read this document
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
    </div>
  )
}

// ============================================
// REFERENCE DOCS (optional, collapsible)
// ============================================

function ReferenceDocsSection({ documents }) {
  const [expanded, setExpanded] = useState(false)

  if (documents.length === 0) return null

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div
        className="px-5 py-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-semibold text-gray-500 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-gray-400" />
          Reference Documents ({documents.length})
          <span className="text-xs font-normal ml-2">Optional - for reference only</span>
          <span className="ml-auto">
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </span>
        </h3>
      </div>
      {expanded && (
        <div className="divide-y divide-gray-100">
          {documents.map(doc => (
            <div key={doc.id} className="px-5 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">{doc.title}</p>
                <p className="text-sm text-gray-400">{doc.doc_type}</p>
              </div>
              {doc.google_doc_url && (
                <a
                  href={doc.google_doc_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50 rounded-lg flex items-center gap-1"
                >
                  View <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ============================================
// TRAINING SESSION
// ============================================

function TrainingSession({ track, existingSession, documents, operators, onBack }) {
  const [session, setSession] = useState(existingSession)
  const [traineeName, setTraineeName] = useState(existingSession?.trainee_name || '')
  const [started, setStarted] = useState(!!existingSession)
  const [saving, setSaving] = useState(false)

  // Progress states
  const [acknowledgments, setAcknowledgments] = useState([])
  const [skillSignoffs, setSkillSignoffs] = useState([])
  const [quizCompleted, setQuizCompleted] = useState([])
  const [scenariosCompleted, setScenariosCompleted] = useState([])
  const [equipmentCompleted, setEquipmentCompleted] = useState([])
  const [reviewTasksCompleted, setReviewTasksCompleted] = useState([])

  const trackDocs = documents.filter(d => track.docTypes?.includes(d.doc_type))
  const referenceDocs = documents.filter(d => track.referenceDocs?.includes(d.doc_type))
  const Icon = track.icon

  useEffect(() => {
    if (existingSession) loadProgress()
  }, [])

  const loadProgress = async () => {
    const acks = await getAcknowledgments(existingSession.id)
    setAcknowledgments(acks)
    if (track.flightSkills) {
      const skills = await getSkillSignoffs(existingSession.id)
      setSkillSignoffs(skills)
    }
    // Load other progress from session.progress_data if stored
    if (existingSession.progress_data) {
      setQuizCompleted(existingSession.progress_data.quiz || [])
      setScenariosCompleted(existingSession.progress_data.scenarios || [])
      setEquipmentCompleted(existingSession.progress_data.equipment || [])
      setReviewTasksCompleted(existingSession.progress_data.reviewTasks || [])
    }
  }

  const saveProgress = async (updates) => {
    const progressData = {
      quiz: updates.quiz ?? quizCompleted,
      scenarios: updates.scenarios ?? scenariosCompleted,
      equipment: updates.equipment ?? equipmentCompleted,
      reviewTasks: updates.reviewTasks ?? reviewTasksCompleted
    }
    await updateSession(session.id, { progress_data: progressData })
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
    await acknowledgeDoc(session.id, docId)
    setAcknowledgments([...acknowledgments, docId])
  }

  const handleSignOff = async (skillName) => {
    const supervisorName = prompt('Supervisor name:')
    if (!supervisorName) return
    await signOffSkill(session.id, skillName, supervisorName)
    setSkillSignoffs([...skillSignoffs, { skill_name: skillName, notes: `Signed off by: ${supervisorName}` }])
  }

  const handleQuizComplete = async (answers) => {
    setQuizCompleted(answers)
    await saveProgress({ quiz: answers })
  }

  const handleScenarioComplete = async (idx) => {
    const updated = [...scenariosCompleted, idx]
    setScenariosCompleted(updated)
    await saveProgress({ scenarios: updated })
  }

  const handleEquipmentToggle = async (idx) => {
    const updated = equipmentCompleted.includes(idx)
      ? equipmentCompleted.filter(i => i !== idx)
      : [...equipmentCompleted, idx]
    setEquipmentCompleted(updated)
    await saveProgress({ equipment: updated })
  }

  const handleReviewTaskToggle = async (idx) => {
    const updated = reviewTasksCompleted.includes(idx)
      ? reviewTasksCompleted.filter(i => i !== idx)
      : [...reviewTasksCompleted, idx]
    setReviewTasksCompleted(updated)
    await saveProgress({ reviewTasks: updated })
  }

  // Calculate progress
  let totalItems = 0
  let completedItems = 0

  if (track.requireDocs) {
    totalItems += trackDocs.length
    completedItems += acknowledgments.length
  }
  if (track.quiz) {
    totalItems += track.quiz.length
    completedItems += quizCompleted.length
  }
  if (track.scenarios) {
    totalItems += track.scenarios.length
    completedItems += scenariosCompleted.length
  }
  if (track.equipmentChecklist) {
    totalItems += track.equipmentChecklist.length
    completedItems += equipmentCompleted.length
  }
  if (track.flightSkills) {
    totalItems += track.flightSkills.length
    completedItems += skillSignoffs.length
  }
  if (track.reviewTasks) {
    totalItems += track.reviewTasks.length
    completedItems += reviewTasksCompleted.length
  }

  const isComplete = completedItems >= totalItems && totalItems > 0

  // Mark complete when done
  useEffect(() => {
    if (isComplete && session) {
      updateSession(session.id, { status: 'completed', completed_at: new Date().toISOString() })
    }
  }, [isComplete])

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
              <label className="block text-sm font-medium text-gray-700 mb-2">Trainee Name</label>
              <input
                type="text"
                value={traineeName}
                onChange={e => setTraineeName(e.target.value)}
                placeholder="Enter name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                autoFocus
              />
            </div>
            <button
              onClick={handleStart}
              disabled={saving || !traineeName.trim()}
              className="w-full py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {saving ? 'Starting...' : <><Play className="w-5 h-5" /> Start Training</>}
            </button>
          </div>
        </div>
      </div>
    )
  }

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

      {/* Documents (only for onboarding) */}
      {track.requireDocs && (
        <DocumentsSection
          documents={trackDocs}
          acknowledgments={acknowledgments}
          onAcknowledge={handleAcknowledge}
        />
      )}

      {/* Quiz */}
      {track.quiz && (
        <QuizSection
          quiz={track.quiz}
          completedQuestions={quizCompleted}
          onComplete={handleQuizComplete}
        />
      )}

      {/* Equipment Checklist */}
      {track.equipmentChecklist && (
        <EquipmentChecklistSection
          checklist={track.equipmentChecklist}
          completedItems={equipmentCompleted}
          onToggle={handleEquipmentToggle}
        />
      )}

      {/* Scenarios */}
      {track.scenarios && (
        <ScenarioSection
          scenarios={track.scenarios}
          completedScenarios={scenariosCompleted}
          onComplete={handleScenarioComplete}
        />
      )}

      {/* Flight Skills */}
      {track.flightSkills && (
        <FlightSkillsSection
          skills={track.flightSkills}
          signoffs={skillSignoffs}
          onSignOff={handleSignOff}
        />
      )}

      {/* Review Tasks */}
      {track.reviewTasks && (
        <ReviewTasksSection
          tasks={track.reviewTasks}
          completedTasks={reviewTasksCompleted}
          onToggle={handleReviewTaskToggle}
        />
      )}

      {/* Reference Docs */}
      <ReferenceDocsSection documents={referenceDocs} />
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
