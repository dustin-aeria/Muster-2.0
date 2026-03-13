import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Plus, Search, Edit2, Trash2, X, Save, FolderOpen, Calendar, DollarSign, Users, MapPin, ChevronRight, Archive
} from 'lucide-react'
import { getProjects, getProjectStages, createProject, updateProject, deleteProject } from '../lib/api'
import { format, parseISO } from 'date-fns'

const STATUS_OPTIONS = [
  { value: 'active', label: 'Active', color: 'bg-green-100 text-green-700' },
  { value: 'on_hold', label: 'On Hold', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'cancelled', label: 'Cancelled', color: 'bg-red-100 text-red-700' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-700' }
]

const CATEGORIES = [
  'Aerial Survey',
  'Photogrammetry',
  'LiDAR',
  'Inspection',
  'Mapping',
  'Environmental',
  'Construction',
  'Agriculture',
  'Emergency Response',
  'Training',
  'Other'
]

function ProjectModal({ project, stages, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    client_name: '',
    client_contact: '',
    client_email: '',
    client_phone: '',
    stage_id: '',
    stage_name: '',
    status: 'active',
    start_date: '',
    end_date: '',
    due_date: '',
    location: '',
    estimated_cost: '',
    quoted_price: '',
    category: '',
    tags: [],
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    if (project) {
      setFormData({
        ...project,
        start_date: project.start_date || '',
        end_date: project.end_date || '',
        due_date: project.due_date || '',
        estimated_cost: project.estimated_cost?.toString() || '',
        quoted_price: project.quoted_price?.toString() || '',
        tags: project.tags || []
      })
    } else if (stages.length > 0) {
      const defaultStage = stages.find(s => s.is_default) || stages[0]
      setFormData(prev => ({
        ...prev,
        stage_id: defaultStage.id,
        stage_name: defaultStage.name
      }))
    }
  }, [project, stages])

  const handleStageChange = (stageId) => {
    const stage = stages.find(s => s.id === stageId)
    setFormData({
      ...formData,
      stage_id: stageId,
      stage_name: stage?.name || ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const data = {
        ...formData,
        estimated_cost: formData.estimated_cost ? parseFloat(formData.estimated_cost) : null,
        quoted_price: formData.quoted_price ? parseFloat(formData.quoted_price) : null
      }
      if (!data.start_date) delete data.start_date
      if (!data.end_date) delete data.end_date
      if (!data.due_date) delete data.due_date

      if (project) {
        await updateProject(project.id, data)
      } else {
        await createProject(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const addTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag] }))
      setNewTag('')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{project ? 'Edit Project' : 'New Project'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

          {/* Project Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stage</label>
              <select
                value={formData.stage_id}
                onChange={(e) => handleStageChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                {stages.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Client Info */}
          <div className="p-4 bg-gray-50 rounded-lg space-y-4">
            <h3 className="font-medium text-gray-900">Client Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                <input
                  type="text"
                  value={formData.client_name}
                  onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                <input
                  type="text"
                  value={formData.client_contact}
                  onChange={(e) => setFormData({ ...formData, client_contact: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.client_email}
                  onChange={(e) => setFormData({ ...formData, client_email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.client_phone}
                  onChange={(e) => setFormData({ ...formData, client_phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                value={formData.due_date}
                onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Location & Financial */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Cost ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={formData.estimated_cost}
                onChange={(e) => setFormData({ ...formData, estimated_cost: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quoted Price ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={formData.quoted_price}
                onChange={(e) => setFormData({ ...formData, quoted_price: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-brand-100 text-brand-700 rounded text-sm">
                  {tag}
                  <button type="button" onClick={() => setFormData(prev => ({
                    ...prev, tags: prev.tags.filter((_, idx) => idx !== i)
                  }))} className="hover:text-brand-900"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Add tag..."
              />
              <button type="button" onClick={addTag} className="px-3 py-2 bg-gray-100 rounded-lg text-sm">Add</button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </form>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
          <button onClick={handleSubmit} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50">
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : project ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const [stages, setStages] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStage, setFilterStage] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [viewMode, setViewMode] = useState('list') // 'list' or 'board'
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  useEffect(() => {
    loadData()
  }, [showArchived, filterStage])

  const loadData = async () => {
    try {
      const [projectsData, stagesData] = await Promise.all([
        getProjects(showArchived, filterStage ? { stageId: filterStage } : {}),
        getProjectStages()
      ])
      setProjects(projectsData)
      setStages(stagesData)
    } catch (err) {
      console.error('Failed to load data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (project) => {
    if (!confirm(`Delete project "${project.name}"?`)) return
    try {
      await deleteProject(project.id)
      loadData()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const handleArchive = async (project) => {
    try {
      await updateProject(project.id, { status: 'archived' })
      loadData()
    } catch (err) {
      alert('Failed to archive: ' + err.message)
    }
  }

  const getStatusBadge = (status) => {
    const config = STATUS_OPTIONS.find(s => s.value === status)
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${config?.color}`}>{config?.label}</span>
  }

  const getStageBadge = (stageName, stageId) => {
    const stage = stages.find(s => s.id === stageId)
    const color = stage?.color || '#6B7280'
    return (
      <span
        className="px-2 py-0.5 rounded text-xs font-medium text-white"
        style={{ backgroundColor: color }}
      >
        {stageName}
      </span>
    )
  }

  const filtered = projects.filter(p => {
    if (filterStatus && p.status !== filterStatus) return false
    if (search) {
      const s = search.toLowerCase()
      return p.name.toLowerCase().includes(s) || p.client_name?.toLowerCase().includes(s) || p.location?.toLowerCase().includes(s)
    }
    return true
  })

  // Group by stage for board view
  const groupedByStage = stages.reduce((acc, stage) => {
    acc[stage.id] = filtered.filter(p => p.stage_id === stage.id)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-500">Manage your projects and operations</p>
        </div>
        <button onClick={() => { setEditingProject(null); setModalOpen(true) }} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <select value={filterStage} onChange={(e) => setFilterStage(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Stages</option>
          {stages.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">All Statuses</option>
          {STATUS_OPTIONS.filter(s => s.value !== 'archived').map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <label className="inline-flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={showArchived} onChange={(e) => setShowArchived(e.target.checked)} className="rounded border-gray-300" />
          Archived
        </label>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">{search || filterStage || filterStatus ? 'No projects match your filters' : 'No projects yet'}</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">{project.name}</h3>
                    {getStageBadge(project.stage_name, project.stage_id)}
                    {getStatusBadge(project.status)}
                  </div>

                  {project.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  )}

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                    {project.client_name && (
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        {project.client_name}
                      </span>
                    )}
                    {project.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                    )}
                    {project.start_date && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {format(parseISO(project.start_date), 'MMM d, yyyy')}
                        {project.end_date && ` - ${format(parseISO(project.end_date), 'MMM d, yyyy')}`}
                      </span>
                    )}
                    {project.quoted_price && (
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4" />
                        ${parseFloat(project.quoted_price).toLocaleString()}
                      </span>
                    )}
                  </div>

                  {project.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                    title="Open"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => { setEditingProject(project); setModalOpen(true) }}
                    className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  {project.status !== 'archived' && (
                    <button
                      onClick={() => handleArchive(project)}
                      className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                      title="Archive"
                    >
                      <Archive className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(project)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <ProjectModal
          project={editingProject}
          stages={stages}
          onClose={() => { setModalOpen(false); setEditingProject(null) }}
          onSave={() => { setModalOpen(false); setEditingProject(null); loadData() }}
        />
      )}
    </div>
  )
}
