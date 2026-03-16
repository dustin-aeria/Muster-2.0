import { useState, useEffect } from 'react'
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Plus,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Check,
  Clock,
  AlertTriangle,
  FileText,
  Video,
  ClipboardCheck,
  Pencil,
  X,
  Trash2,
  Play,
  Calendar,
  User,
  Building2,
  RotateCcw,
  Eye,
  Search
} from 'lucide-react'
import {
  getLearningPaths,
  getFullLearningPath,
  createLearningPath,
  updateLearningPath,
  deleteLearningPath,
  createModule,
  updateModule,
  deleteModule,
  createModuleItem,
  updateModuleItem,
  deleteModuleItem,
  getTrainingRecordsForOperator,
  getAllTrainingRecords,
  assignTraining,
  startTraining,
  completeTraining,
  completeItem,
  completeModule,
  getAllCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
  getOperators,
  getDocuments
} from '../lib/api'
import { format, parseISO, differenceInDays, addMonths } from 'date-fns'

// ============================================
// CONSTANTS
// ============================================

const CATEGORIES = [
  { value: 'onboarding', label: 'Onboarding', icon: Users, color: 'bg-blue-100 text-blue-700' },
  { value: 'pilot', label: 'Pilot Recurrency', icon: GraduationCap, color: 'bg-purple-100 text-purple-700' },
  { value: 'safety', label: 'Safety', icon: AlertTriangle, color: 'bg-orange-100 text-orange-700' }
]

const RECURRENCE_OPTIONS = [
  { value: 'none', label: 'One-time (no recurrence)' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly (every 3 months)' },
  { value: 'annual', label: 'Annual (every 12 months)' }
]

const ITEM_TYPES = [
  { value: 'document', label: 'Document', icon: FileText, description: 'Link to a policy or procedure to read' },
  { value: 'video', label: 'Video', icon: Video, description: 'YouTube or external video link' },
  { value: 'practical', label: 'Practical Task', icon: ClipboardCheck, description: 'In-person task with optional supervisor sign-off' },
  { value: 'acknowledgment', label: 'Acknowledgment', icon: Check, description: 'Final sign-off for a module' }
]

const ROLES = [
  { value: 'pic_basic', label: 'PIC - Basic' },
  { value: 'pic_advanced', label: 'PIC - Advanced' },
  { value: 'pic_complex', label: 'PIC - Complex' },
  { value: 'pic_specialized', label: 'PIC - Specialized' },
  { value: 'visual_observer', label: 'Visual Observer' },
  { value: 'ground_supervisor', label: 'Ground Supervisor' },
  { value: 'payload_operator', label: 'Payload Operator' }
]

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
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  )
}

function StatusBadge({ status, dueDate }) {
  const now = new Date()
  const due = dueDate ? new Date(dueDate) : null
  const daysUntilDue = due ? differenceInDays(due, now) : null

  if (status === 'completed') {
    return <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Completed</span>
  }
  if (status === 'in_progress') {
    if (daysUntilDue !== null && daysUntilDue < 0) {
      return <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">Overdue</span>
    }
    if (daysUntilDue !== null && daysUntilDue <= 7) {
      return <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium">Due Soon</span>
    }
    return <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">In Progress</span>
  }
  if (daysUntilDue !== null && daysUntilDue < 0) {
    return <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">Overdue</span>
  }
  return <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium">Not Started</span>
}

function ProgressBar({ completed, total }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${percent === 100 ? 'bg-green-500' : 'bg-brand-500'}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-sm text-gray-600 w-16 text-right">{completed}/{total}</span>
    </div>
  )
}

function CategoryBadge({ category }) {
  const cat = CATEGORIES.find(c => c.value === category)
  if (!cat) return null
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium ${cat.color}`}>
      <cat.icon className="w-3 h-3" />
      {cat.label}
    </span>
  )
}

// ============================================
// MY TRAINING TAB
// ============================================

function MyTrainingTab({ operators, currentOperatorId, onSelectOperator }) {
  const [records, setRecords] = useState([])
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedRecord, setExpandedRecord] = useState(null)
  const [fullPath, setFullPath] = useState(null)

  useEffect(() => {
    if (currentOperatorId) {
      loadData()
    }
  }, [currentOperatorId])

  const loadData = async () => {
    setLoading(true)
    try {
      const [recordsData, certsData] = await Promise.all([
        getTrainingRecordsForOperator(currentOperatorId),
        getAllCertifications()
      ])
      setRecords(recordsData || [])
      setCertifications((certsData || []).filter(c => c.operator_id === currentOperatorId))
    } catch (err) {
      console.error('Failed to load training data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleExpandRecord = async (record) => {
    if (expandedRecord === record.id) {
      setExpandedRecord(null)
      setFullPath(null)
      return
    }
    setExpandedRecord(record.id)
    try {
      const path = await getFullLearningPath(record.path_id)
      setFullPath(path)
    } catch (err) {
      console.error('Failed to load path:', err)
    }
  }

  const handleStartTraining = async (recordId) => {
    try {
      await startTraining(recordId)
      loadData()
    } catch (err) {
      console.error('Failed to start training:', err)
    }
  }

  const handleCompleteItem = async (recordId, itemId) => {
    try {
      await completeItem(recordId, itemId)
      // Refresh the expanded path
      if (fullPath) {
        const path = await getFullLearningPath(fullPath.id)
        setFullPath(path)
      }
      loadData()
    } catch (err) {
      console.error('Failed to complete item:', err)
    }
  }

  const inProgress = records.filter(r => r.status === 'in_progress')
  const notStarted = records.filter(r => r.status === 'not_started')
  const completed = records.filter(r => r.status === 'completed')

  const expiringCerts = certifications.filter(c => {
    if (!c.expiry_date) return false
    const days = differenceInDays(new Date(c.expiry_date), new Date())
    return days <= 30 && days >= 0
  })

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Operator Selector (for admins) */}
      {operators.length > 1 && (
        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-gray-400" />
          <select
            value={currentOperatorId || ''}
            onChange={(e) => onSelectOperator(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
          >
            {operators.map(op => (
              <option key={op.id} value={op.id}>{op.name}</option>
            ))}
          </select>
        </div>
      )}

      {/* Alerts */}
      {(inProgress.some(r => r.due_date && differenceInDays(new Date(r.due_date), new Date()) < 7) || expiringCerts.length > 0) && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 className="font-medium text-amber-800 flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5" />
            Action Required
          </h3>
          <ul className="space-y-1 text-sm text-amber-700">
            {inProgress.filter(r => r.due_date && differenceInDays(new Date(r.due_date), new Date()) < 7).map(r => (
              <li key={r.id}>• {r.learning_paths?.name} due {format(new Date(r.due_date), 'MMM d')}</li>
            ))}
            {expiringCerts.map(c => (
              <li key={c.id}>• {c.name} certification expires {format(new Date(c.expiry_date), 'MMM d')}</li>
            ))}
          </ul>
        </div>
      )}

      {/* In Progress */}
      {inProgress.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Play className="w-4 h-4 text-blue-500" />
              In Progress
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {inProgress.map(record => (
              <div key={record.id}>
                <button
                  onClick={() => handleExpandRecord(record)}
                  className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-medium text-gray-900">{record.learning_paths?.name}</h4>
                      <CategoryBadge category={record.learning_paths?.category} />
                      <StatusBadge status={record.status} dueDate={record.due_date} />
                    </div>
                    {record.due_date && (
                      <p className="text-sm text-gray-500">Due: {format(new Date(record.due_date), 'MMMM d, yyyy')}</p>
                    )}
                    <div className="mt-2">
                      <ProgressBar
                        completed={record.module_completions?.length || 0}
                        total={fullPath?.modules?.length || record.module_completions?.length || 1}
                      />
                    </div>
                  </div>
                  {expandedRecord === record.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Expanded Module View */}
                {expandedRecord === record.id && fullPath && (
                  <div className="px-4 pb-4 bg-gray-50 border-t border-gray-100">
                    <div className="space-y-3 mt-3">
                      {fullPath.modules.map((module, idx) => {
                        const moduleCompleted = record.module_completions?.some(mc => mc.module_id === module.id)
                        const completedItems = module.items.filter(item =>
                          record.item_completions?.some(ic => ic.item_id === item.id)
                        )
                        const allItemsCompleted = completedItems.length === module.items.length

                        return (
                          <div key={module.id} className="bg-white rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                moduleCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {moduleCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                              </span>
                              <h5 className="font-medium text-gray-900">{module.title}</h5>
                              {moduleCompleted && (
                                <span className="text-xs text-green-600">Completed</span>
                              )}
                            </div>

                            <div className="space-y-2 ml-9">
                              {module.items.map(item => {
                                const itemCompleted = record.item_completions?.some(ic => ic.item_id === item.id)
                                const ItemIcon = ITEM_TYPES.find(t => t.value === item.type)?.icon || FileText

                                return (
                                  <div key={item.id} className="flex items-center gap-3">
                                    <button
                                      onClick={() => !itemCompleted && handleCompleteItem(record.id, item.id)}
                                      disabled={itemCompleted}
                                      className={`w-5 h-5 rounded border flex items-center justify-center ${
                                        itemCompleted
                                          ? 'bg-green-100 border-green-300 text-green-600'
                                          : 'border-gray-300 hover:border-brand-500 hover:bg-brand-50'
                                      }`}
                                    >
                                      {itemCompleted && <Check className="w-3 h-3" />}
                                    </button>
                                    <ItemIcon className="w-4 h-4 text-gray-400" />
                                    <span className={`text-sm ${itemCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                                      {item.title}
                                    </span>
                                    {item.type === 'document' && (
                                      <button className="text-xs text-brand-600 hover:text-brand-700">View Doc</button>
                                    )}
                                    {item.type === 'video' && item.video_url && (
                                      <a href={item.video_url} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-600 hover:text-brand-700">Watch</a>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Not Started */}
      {notStarted.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              Assigned Training
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {notStarted.map(record => (
              <div key={record.id} className="px-4 py-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-medium text-gray-900">{record.learning_paths?.name}</h4>
                    <CategoryBadge category={record.learning_paths?.category} />
                  </div>
                  {record.due_date && (
                    <p className="text-sm text-gray-500">Due: {format(new Date(record.due_date), 'MMMM d, yyyy')}</p>
                  )}
                </div>
                <button
                  onClick={() => handleStartTraining(record.id)}
                  className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 text-sm font-medium"
                >
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completed */}
      {completed.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Completed
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {completed.slice(0, 5).map(record => (
              <div key={record.id} className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h4 className="font-medium text-gray-900">{record.learning_paths?.name}</h4>
                  <CategoryBadge category={record.learning_paths?.category} />
                </div>
                <span className="text-sm text-gray-500">
                  {record.completed_at && format(new Date(record.completed_at), 'MMM d, yyyy')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Certifications
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {certifications.map(cert => {
              const daysUntilExpiry = cert.expiry_date ? differenceInDays(new Date(cert.expiry_date), new Date()) : null
              return (
                <div key={cert.id} className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{cert.name}</h4>
                    {cert.issuing_authority && (
                      <p className="text-sm text-gray-500">{cert.issuing_authority}</p>
                    )}
                  </div>
                  <div className="text-right">
                    {cert.expiry_date ? (
                      <span className={`text-sm ${
                        daysUntilExpiry < 0 ? 'text-red-600' :
                        daysUntilExpiry <= 30 ? 'text-amber-600' :
                        'text-gray-600'
                      }`}>
                        {daysUntilExpiry < 0 ? 'Expired' : `Expires ${format(new Date(cert.expiry_date), 'MMM d, yyyy')}`}
                      </span>
                    ) : (
                      <span className="text-sm text-green-600">No expiry</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Empty State */}
      {records.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No training assigned yet</p>
        </div>
      )}
    </div>
  )
}

// ============================================
// LEARNING PATHS TAB
// ============================================

function LearningPathsTab({ operators, documents }) {
  const [paths, setPaths] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedPath, setExpandedPath] = useState(null)
  const [fullPath, setFullPath] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [editingPath, setEditingPath] = useState(null)
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [assigningPath, setAssigningPath] = useState(null)

  useEffect(() => {
    loadPaths()
  }, [])

  const loadPaths = async () => {
    try {
      const data = await getLearningPaths(true)
      setPaths(data || [])
    } catch (err) {
      console.error('Failed to load paths:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleExpandPath = async (path) => {
    if (expandedPath === path.id) {
      setExpandedPath(null)
      setFullPath(null)
      return
    }
    setExpandedPath(path.id)
    try {
      const full = await getFullLearningPath(path.id)
      setFullPath(full)
    } catch (err) {
      console.error('Failed to load full path:', err)
    }
  }

  const handleDelete = async (pathId) => {
    if (!confirm('Delete this learning path? This cannot be undone.')) return
    try {
      await deleteLearningPath(pathId)
      loadPaths()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const groupedPaths = CATEGORIES.map(cat => ({
    ...cat,
    paths: paths.filter(p => p.category === cat.value)
  })).filter(g => g.paths.length > 0)

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => { setEditingPath(null); setShowModal(true) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          New Learning Path
        </button>
      </div>

      {groupedPaths.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No learning paths yet</p>
          <p className="text-sm text-gray-400 mt-1">Create your first learning path to get started</p>
        </div>
      ) : (
        groupedPaths.map(group => (
          <div key={group.value} className="space-y-3">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <group.icon className="w-5 h-5 text-gray-500" />
              {group.label}
            </h3>

            <div className="space-y-2">
              {group.paths.map(path => (
                <div key={path.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div
                    onClick={() => handleExpandPath(path)}
                    className="px-4 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-gray-900">{path.name}</h4>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          path.status === 'active' ? 'bg-green-100 text-green-700' :
                          path.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {path.status}
                        </span>
                        {path.recurrence !== 'none' && (
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <RotateCcw className="w-3 h-3" />
                            {path.recurrence}
                          </span>
                        )}
                      </div>
                      {path.description && (
                        <p className="text-sm text-gray-500 mt-1">{path.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); setAssigningPath(path); setShowAssignModal(true) }}
                        className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                        title="Assign to operator"
                      >
                        <Users className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setEditingPath(path); setShowModal(true) }}
                        className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDelete(path.id) }}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      {expandedPath === path.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded View with Modules */}
                  {expandedPath === path.id && fullPath && (
                    <PathBuilder
                      path={fullPath}
                      documents={documents}
                      onUpdate={loadPaths}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}

      {/* Path Modal */}
      {showModal && (
        <LearningPathModal
          path={editingPath}
          onClose={() => { setShowModal(false); setEditingPath(null) }}
          onSave={() => { setShowModal(false); setEditingPath(null); loadPaths() }}
        />
      )}

      {/* Assign Modal */}
      {showAssignModal && assigningPath && (
        <AssignTrainingModal
          path={assigningPath}
          operators={operators}
          onClose={() => { setShowAssignModal(false); setAssigningPath(null) }}
          onSave={() => { setShowAssignModal(false); setAssigningPath(null) }}
        />
      )}
    </div>
  )
}

// ============================================
// PATH BUILDER (MODULES & ITEMS)
// ============================================

function PathBuilder({ path, documents, onUpdate }) {
  const [modules, setModules] = useState(path.modules || [])
  const [showModuleModal, setShowModuleModal] = useState(false)
  const [editingModule, setEditingModule] = useState(null)
  const [showItemModal, setShowItemModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [activeModuleId, setActiveModuleId] = useState(null)

  const handleAddModule = () => {
    setEditingModule(null)
    setShowModuleModal(true)
  }

  const handleEditModule = (module) => {
    setEditingModule(module)
    setShowModuleModal(true)
  }

  const handleDeleteModule = async (moduleId) => {
    if (!confirm('Delete this module and all its items?')) return
    try {
      await deleteModule(moduleId)
      onUpdate()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const handleAddItem = (moduleId) => {
    setActiveModuleId(moduleId)
    setEditingItem(null)
    setShowItemModal(true)
  }

  const handleEditItem = (item, moduleId) => {
    setActiveModuleId(moduleId)
    setEditingItem(item)
    setShowItemModal(true)
  }

  const handleDeleteItem = async (itemId) => {
    if (!confirm('Delete this item?')) return
    try {
      await deleteModuleItem(itemId)
      onUpdate()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  return (
    <div className="border-t border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center justify-between mb-4">
        <h5 className="font-medium text-gray-700">Modules</h5>
        <button
          onClick={handleAddModule}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
        >
          <Plus className="w-4 h-4" />
          Add Module
        </button>
      </div>

      {path.modules.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-4">No modules yet. Add your first module to get started.</p>
      ) : (
        <div className="space-y-3">
          {path.modules.map((module, idx) => (
            <div key={module.id} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-medium">
                    {idx + 1}
                  </span>
                  <h6 className="font-medium text-gray-900">{module.title}</h6>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleAddItem(module.id)}
                    className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded"
                    title="Add item"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleEditModule(module)}
                    className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded"
                    title="Edit module"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteModule(module.id)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                    title="Delete module"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {module.description && (
                <p className="text-sm text-gray-500 mb-3 ml-9">{module.description}</p>
              )}

              {/* Items */}
              <div className="space-y-2 ml-9">
                {(module.items || []).map(item => {
                  const ItemIcon = ITEM_TYPES.find(t => t.value === item.type)?.icon || FileText
                  return (
                    <div key={item.id} className="flex items-center justify-between py-1.5 px-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <ItemIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{item.title}</span>
                        <span className="text-xs text-gray-400">({item.type})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleEditItem(item, module.id)}
                          className="p-1 text-gray-400 hover:text-brand-600"
                        >
                          <Pencil className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-1 text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )
                })}
                {(module.items || []).length === 0 && (
                  <p className="text-xs text-gray-400 italic">No items yet</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Module Modal */}
      {showModuleModal && (
        <ModuleModal
          module={editingModule}
          pathId={path.id}
          sequence={path.modules.length}
          onClose={() => { setShowModuleModal(false); setEditingModule(null) }}
          onSave={() => { setShowModuleModal(false); setEditingModule(null); onUpdate() }}
        />
      )}

      {/* Item Modal */}
      {showItemModal && (
        <ItemModal
          item={editingItem}
          moduleId={activeModuleId}
          sequence={(path.modules.find(m => m.id === activeModuleId)?.items || []).length}
          documents={documents}
          onClose={() => { setShowItemModal(false); setEditingItem(null); setActiveModuleId(null) }}
          onSave={() => { setShowItemModal(false); setEditingItem(null); setActiveModuleId(null); onUpdate() }}
        />
      )}
    </div>
  )
}

// ============================================
// MODALS
// ============================================

function LearningPathModal({ path, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: path?.name || '',
    description: path?.description || '',
    category: path?.category || 'onboarding',
    status: path?.status || 'draft',
    recurrence: path?.recurrence || 'none',
    required_for_roles: path?.required_for_roles || []
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      if (path) {
        await updateLearningPath(path.id, formData)
      } else {
        await createLearningPath(formData)
      }
      onSave()
    } catch (err) {
      alert('Failed to save: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const toggleRole = (role) => {
    setFormData(prev => ({
      ...prev,
      required_for_roles: prev.required_for_roles.includes(role)
        ? prev.required_for_roles.filter(r => r !== role)
        : [...prev.required_for_roles, role]
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{path ? 'Edit Learning Path' : 'New Learning Path'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="e.g., New Operator Onboarding"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="What does this training cover?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              >
                {CATEGORIES.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              >
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Recurrence</label>
            <select
              value={formData.recurrence}
              onChange={(e) => setFormData({ ...formData, recurrence: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            >
              {RECURRENCE_OPTIONS.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Required for Roles</label>
            <div className="flex flex-wrap gap-2">
              {ROLES.map(role => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => toggleRole(role.value)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    formData.required_for_roles.includes(role.value)
                      ? 'bg-brand-100 text-brand-700 border-brand-300 border'
                      : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
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
              {saving ? 'Saving...' : path ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ModuleModal({ module, pathId, sequence, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: module?.title || '',
    description: module?.description || ''
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      if (module) {
        await updateModule(module.id, formData)
      } else {
        await createModule({ ...formData, path_id: pathId, sequence })
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
          <h2 className="text-lg font-semibold">{module ? 'Edit Module' : 'New Module'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="e.g., Safety Fundamentals"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="What does this module cover?"
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
              {saving ? 'Saving...' : module ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ItemModal({ item, moduleId, sequence, documents, onClose, onSave }) {
  const [formData, setFormData] = useState({
    type: item?.type || 'document',
    title: item?.title || '',
    description: item?.description || '',
    document_id: item?.document_id || '',
    video_url: item?.video_url || '',
    practical_instructions: item?.practical_instructions || '',
    requires_supervisor: item?.requires_supervisor || false
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const data = {
        ...formData,
        document_id: formData.document_id || null,
        video_url: formData.video_url || null,
        practical_instructions: formData.practical_instructions || null
      }

      if (item) {
        await updateModuleItem(item.id, data)
      } else {
        await createModuleItem({ ...data, module_id: moduleId, sequence })
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
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-lg font-semibold">{item ? 'Edit Item' : 'New Item'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
            <div className="grid grid-cols-2 gap-2">
              {ITEM_TYPES.map(type => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: type.value })}
                  className={`p-3 rounded-lg border text-left ${
                    formData.type === type.value
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <type.icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{type.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="e.g., Read Safety Policy"
            />
          </div>

          {formData.type === 'document' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Link to Document</label>
              <select
                value={formData.document_id}
                onChange={(e) => setFormData({ ...formData, document_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Select a document...</option>
                {(documents || []).map(doc => (
                  <option key={doc.id} value={doc.id}>
                    {doc.doc_number ? `${doc.doc_number} - ` : ''}{doc.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {formData.type === 'video' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
              <input
                type="url"
                value={formData.video_url}
                onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                placeholder="https://youtube.com/watch?v=..."
              />
            </div>
          )}

          {formData.type === 'practical' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                <textarea
                  value={formData.practical_instructions}
                  onChange={(e) => setFormData({ ...formData, practical_instructions: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                  placeholder="Describe what the trainee needs to do..."
                />
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.requires_supervisor}
                  onChange={(e) => setFormData({ ...formData, requires_supervisor: e.target.checked })}
                  className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm text-gray-700">Requires supervisor sign-off</span>
              </label>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="Additional notes..."
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
              {saving ? 'Saving...' : item ? 'Update' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function AssignTrainingModal({ path, operators, onClose, onSave }) {
  const [selectedOperator, setSelectedOperator] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedOperator) return

    setSaving(true)
    try {
      await assignTraining(selectedOperator, path.id, dueDate || null)
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
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="font-medium text-gray-900">{path.name}</p>
            <p className="text-sm text-gray-500">{path.description}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Assign to *</label>
            <select
              value={selectedOperator}
              onChange={(e) => setSelectedOperator(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            >
              <option value="">Select operator...</option>
              {operators.map(op => (
                <option key={op.id} value={op.id}>{op.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date (optional)</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving || !selectedOperator}
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
      const data = await getAllCertifications()
      setCertifications(data || [])
    } catch (err) {
      console.error('Failed to load certifications:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (certId) => {
    if (!confirm('Delete this certification?')) return
    try {
      await deleteCertification(certId)
      loadCertifications()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const expiring = certifications.filter(c => {
    if (!c.expiry_date) return false
    const days = differenceInDays(new Date(c.expiry_date), new Date())
    return days <= 30 && days >= 0
  })

  const expired = certifications.filter(c => {
    if (!c.expiry_date) return false
    return differenceInDays(new Date(c.expiry_date), new Date()) < 0
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

      {/* Expired */}
      {expired.length > 0 && (
        <div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200">
            <h3 className="font-medium text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Expired ({expired.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {expired.map(cert => (
              <CertificationRow key={cert.id} cert={cert} onEdit={() => { setEditingCert(cert); setShowModal(true) }} onDelete={() => handleDelete(cert.id)} />
            ))}
          </div>
        </div>
      )}

      {/* Expiring Soon */}
      {expiring.length > 0 && (
        <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-amber-50 border-b border-amber-200">
            <h3 className="font-medium text-amber-800 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Expiring Soon ({expiring.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {expiring.map(cert => (
              <CertificationRow key={cert.id} cert={cert} onEdit={() => { setEditingCert(cert); setShowModal(true) }} onDelete={() => handleDelete(cert.id)} />
            ))}
          </div>
        </div>
      )}

      {/* Current */}
      {current.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-green-500" />
              Current ({current.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {current.map(cert => (
              <CertificationRow key={cert.id} cert={cert} onEdit={() => { setEditingCert(cert); setShowModal(true) }} onDelete={() => handleDelete(cert.id)} />
            ))}
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
        <CertificationModal
          cert={editingCert}
          operators={operators}
          onClose={() => { setShowModal(false); setEditingCert(null) }}
          onSave={() => { setShowModal(false); setEditingCert(null); loadCertifications() }}
        />
      )}
    </div>
  )
}

function CertificationRow({ cert, onEdit, onDelete }) {
  const daysUntilExpiry = cert.expiry_date ? differenceInDays(new Date(cert.expiry_date), new Date()) : null

  return (
    <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-50">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h4 className="font-medium text-gray-900">{cert.name}</h4>
          <span className="text-sm text-gray-500">{cert.operators?.name}</span>
        </div>
        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
          {cert.issuing_authority && <span>{cert.issuing_authority}</span>}
          <span>Issued: {format(new Date(cert.issued_date), 'MMM d, yyyy')}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {cert.expiry_date && (
          <span className={`text-sm ${
            daysUntilExpiry < 0 ? 'text-red-600 font-medium' :
            daysUntilExpiry <= 30 ? 'text-amber-600' :
            'text-gray-600'
          }`}>
            {daysUntilExpiry < 0 ? 'Expired' : `Expires ${format(new Date(cert.expiry_date), 'MMM d, yyyy')}`}
          </span>
        )}
        <button onClick={onEdit} className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg">
          <Pencil className="w-4 h-4" />
        </button>
        <button onClick={onDelete} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function CertificationModal({ cert, operators, onClose, onSave }) {
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
      const data = {
        ...formData,
        expiry_date: formData.expiry_date || null
      }
      if (cert) {
        await updateCertification(cert.id, data)
      } else {
        await createCertification(data)
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            >
              <option value="">Select operator...</option>
              {operators.map(op => (
                <option key={op.id} value={op.id}>{op.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="e.g., L1C Basic, First Aid, WHMIS"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Authority</label>
            <input
              type="text"
              value={formData.issuing_authority}
              onChange={(e) => setFormData({ ...formData, issuing_authority: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="e.g., Transport Canada, Red Cross"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input
                type="date"
                value={formData.expiry_date}
                onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              placeholder="Additional notes..."
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
  const [records, setRecords] = useState([])
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [recordsData, certsData] = await Promise.all([
        getAllTrainingRecords(),
        getAllCertifications()
      ])
      setRecords(recordsData || [])
      setCertifications(certsData || [])
    } catch (err) {
      console.error('Failed to load data:', err)
    } finally {
      setLoading(false)
    }
  }

  const overdue = records.filter(r => {
    if (r.status === 'completed') return false
    if (!r.due_date) return false
    return differenceInDays(new Date(r.due_date), new Date()) < 0
  })

  const dueSoon = records.filter(r => {
    if (r.status === 'completed') return false
    if (!r.due_date) return false
    const days = differenceInDays(new Date(r.due_date), new Date())
    return days >= 0 && days <= 14
  })

  const expiringCerts = certifications.filter(c => {
    if (!c.expiry_date) return false
    const days = differenceInDays(new Date(c.expiry_date), new Date())
    return days <= 30 && days >= 0
  })

  const expiredCerts = certifications.filter(c => {
    if (!c.expiry_date) return false
    return differenceInDays(new Date(c.expiry_date), new Date()) < 0
  })

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  const issueCount = overdue.length + dueSoon.length + expiringCerts.length + expiredCerts.length

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-3xl font-bold text-gray-900">{operators.length}</div>
          <div className="text-sm text-gray-500">Total Operators</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-3xl font-bold text-green-600">{records.filter(r => r.status === 'completed').length}</div>
          <div className="text-sm text-gray-500">Completed Training</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-3xl font-bold text-blue-600">{records.filter(r => r.status === 'in_progress').length}</div>
          <div className="text-sm text-gray-500">In Progress</div>
        </div>
        <div className={`rounded-xl border p-4 ${issueCount > 0 ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}>
          <div className={`text-3xl font-bold ${issueCount > 0 ? 'text-red-600' : 'text-gray-900'}`}>{issueCount}</div>
          <div className="text-sm text-gray-500">Action Required</div>
        </div>
      </div>

      {/* Action Required */}
      {(overdue.length > 0 || expiredCerts.length > 0) && (
        <div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200">
            <h3 className="font-medium text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Overdue / Expired
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {overdue.map(r => (
              <div key={r.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-900">{r.operators?.name}</span>
                  <span className="text-gray-500 mx-2">-</span>
                  <span className="text-gray-700">{r.learning_paths?.name}</span>
                </div>
                <span className="text-sm text-red-600 font-medium">
                  Overdue {Math.abs(differenceInDays(new Date(r.due_date), new Date()))} days
                </span>
              </div>
            ))}
            {expiredCerts.map(c => (
              <div key={c.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-900">{c.operators?.name}</span>
                  <span className="text-gray-500 mx-2">-</span>
                  <span className="text-gray-700">{c.name} (certification)</span>
                </div>
                <span className="text-sm text-red-600 font-medium">
                  Expired {Math.abs(differenceInDays(new Date(c.expiry_date), new Date()))} days ago
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Due Soon */}
      {(dueSoon.length > 0 || expiringCerts.length > 0) && (
        <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-amber-50 border-b border-amber-200">
            <h3 className="font-medium text-amber-800 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Due Soon / Expiring
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {dueSoon.map(r => (
              <div key={r.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-900">{r.operators?.name}</span>
                  <span className="text-gray-500 mx-2">-</span>
                  <span className="text-gray-700">{r.learning_paths?.name}</span>
                </div>
                <span className="text-sm text-amber-600">
                  Due in {differenceInDays(new Date(r.due_date), new Date())} days
                </span>
              </div>
            ))}
            {expiringCerts.map(c => (
              <div key={c.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-900">{c.operators?.name}</span>
                  <span className="text-gray-500 mx-2">-</span>
                  <span className="text-gray-700">{c.name} (certification)</span>
                </div>
                <span className="text-sm text-amber-600">
                  Expires in {differenceInDays(new Date(c.expiry_date), new Date())} days
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {issueCount === 0 && (
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
      const [opsData, docsData] = await Promise.all([
        getOperators(),
        getDocuments()
      ])
      setOperators(opsData || [])
      setDocuments(docsData || [])
      if (opsData?.length > 0) {
        setCurrentOperatorId(opsData[0].id)
      }
    } catch (err) {
      console.error('Failed to load data:', err)
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
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Training</h1>
        <p className="text-gray-500">Manage learning paths, track progress, and certifications</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        <TabButton
          active={activeTab === 'my-training'}
          onClick={() => setActiveTab('my-training')}
          icon={GraduationCap}
        >
          My Training
        </TabButton>
        <TabButton
          active={activeTab === 'paths'}
          onClick={() => setActiveTab('paths')}
          icon={BookOpen}
        >
          Learning Paths
        </TabButton>
        <TabButton
          active={activeTab === 'certifications'}
          onClick={() => setActiveTab('certifications')}
          icon={Award}
        >
          Certifications
        </TabButton>
        <TabButton
          active={activeTab === 'compliance'}
          onClick={() => setActiveTab('compliance')}
          icon={Users}
        >
          Compliance
        </TabButton>
      </div>

      {/* Tab Content */}
      {activeTab === 'my-training' && (
        <MyTrainingTab
          operators={operators}
          currentOperatorId={currentOperatorId}
          onSelectOperator={setCurrentOperatorId}
        />
      )}
      {activeTab === 'paths' && (
        <LearningPathsTab operators={operators} documents={documents} />
      )}
      {activeTab === 'certifications' && (
        <CertificationsTab operators={operators} />
      )}
      {activeTab === 'compliance' && (
        <ComplianceTab operators={operators} />
      )}
    </div>
  )
}
