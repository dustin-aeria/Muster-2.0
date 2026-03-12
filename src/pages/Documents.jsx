import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Plus,
  Search,
  Edit2,
  Archive,
  Trash2,
  X,
  FileText,
  BookOpen,
  AlertTriangle,
  File,
  ChevronDown,
  ChevronUp,
  Save,
  Eye,
  Clock,
  Tag,
  Calendar
} from 'lucide-react'
import {
  getDocuments, getDocument, createDocument, updateDocument, archiveDocument, deleteDocument
} from '../lib/api'
import { format, parseISO } from 'date-fns'

const DOC_TYPES = [
  { value: 'policy', label: 'Policy', icon: BookOpen, prefix: 'POL' },
  { value: 'procedure', label: 'Procedure', icon: FileText, prefix: 'SOP' },
  { value: 'fha', label: 'Hazard Assessment', icon: AlertTriangle, prefix: 'FHA' },
  { value: 'guide', label: 'Guide', icon: File, prefix: 'GDE' },
  { value: 'form', label: 'Form', icon: File, prefix: 'FRM' },
  { value: 'other', label: 'Other', icon: File, prefix: 'DOC' }
]

const DOC_CATEGORIES = [
  'Safety',
  'Operations',
  'Flight Operations',
  'Maintenance',
  'Training',
  'HR',
  'Equipment',
  'Emergency',
  'Quality',
  'Other'
]

const DOC_STATUSES = [
  { value: 'draft', label: 'Draft', color: 'bg-gray-100 text-gray-700' },
  { value: 'active', label: 'Active', color: 'bg-green-100 text-green-700' },
  { value: 'under_review', label: 'Under Review', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'archived', label: 'Archived', color: 'bg-red-100 text-red-700' }
]

// Default template for new documents with embedded amendment table
const getDefaultContent = (title) => `# ${title}

## Purpose


## Scope


## Definitions


## Responsibilities


## Procedure


## References


---

## Amendment History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | ${format(new Date(), 'yyyy-MM-dd')} | - | Initial release |
`

// Append amendment row to document content
function appendAmendment(content, version, summary) {
  const date = format(new Date(), 'yyyy-MM-dd')
  const newRow = `| ${version} | ${date} | - | ${summary} |`

  // Find the amendment table and append the row
  const lines = content.split('\n')
  const tableEndIndex = lines.findLastIndex(line => line.trim().startsWith('|'))

  if (tableEndIndex !== -1) {
    lines.splice(tableEndIndex + 1, 0, newRow)
    return lines.join('\n')
  }

  // If no table found, append at the end
  return content + '\n' + newRow
}

// Increment version number
function incrementVersion(version) {
  if (!version) return '1.1'
  const parts = version.split('.')
  if (parts.length === 2) {
    return `${parts[0]}.${parseInt(parts[1]) + 1}`
  }
  return version + '.1'
}

function DocumentModal({ document, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    doc_type: 'policy',
    doc_number: '',
    category: '',
    content: '',
    version: '1.0',
    effective_date: '',
    review_date: '',
    status: 'draft',
    author: '',
    approver: '',
    tags: [],
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [amendmentSummary, setAmendmentSummary] = useState('')
  const [showAmendmentPrompt, setShowAmendmentPrompt] = useState(false)
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    if (document) {
      setFormData({
        title: document.title || '',
        doc_type: document.doc_type || 'policy',
        doc_number: document.doc_number || '',
        category: document.category || '',
        content: document.content || '',
        version: document.version || '1.0',
        effective_date: document.effective_date || '',
        review_date: document.review_date || '',
        status: document.status || 'draft',
        author: document.author || '',
        approver: document.approver || '',
        tags: document.tags || [],
        notes: document.notes || ''
      })
    } else {
      // New document - set default content
      setFormData(prev => ({
        ...prev,
        content: getDefaultContent('New Document')
      }))
    }
  }, [document])

  // Update content when title changes for new documents
  useEffect(() => {
    if (!document && formData.title && formData.content.includes('# New Document')) {
      setFormData(prev => ({
        ...prev,
        content: prev.content.replace('# New Document', `# ${formData.title}`)
      }))
    }
  }, [formData.title, document])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // If editing existing document, prompt for amendment summary
    if (document && !showAmendmentPrompt) {
      setShowAmendmentPrompt(true)
      return
    }

    setError('')
    setSaving(true)

    try {
      let finalContent = formData.content
      let finalVersion = formData.version

      // If editing and amendment summary provided, append to content
      if (document && amendmentSummary) {
        finalVersion = incrementVersion(formData.version)
        finalContent = appendAmendment(formData.content, finalVersion, amendmentSummary)
      }

      const data = {
        ...formData,
        content: finalContent,
        version: finalVersion,
        effective_date: formData.effective_date || null,
        review_date: formData.review_date || null
      }

      if (document) {
        await updateDocument(document.id, data)
      } else {
        await createDocument(data)
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

  const removeTag = (tag) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }))
  }

  const generateDocNumber = () => {
    const prefix = DOC_TYPES.find(t => t.value === formData.doc_type)?.prefix || 'DOC'
    const num = String(Math.floor(Math.random() * 900) + 100)
    setFormData(prev => ({ ...prev, doc_number: `${prefix}-${num}` }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {document ? 'Edit Document' : 'New Document'}
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className={`p-2 rounded-lg ${showPreview ? 'bg-brand-100 text-brand-700' : 'hover:bg-gray-100'}`}
              title={showPreview ? 'Edit' : 'Preview'}
            >
              <Eye className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {showAmendmentPrompt ? (
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Amendment Summary</h3>
            <p className="text-sm text-gray-600 mb-4">
              Describe the changes made to this document. This will be recorded in the amendment history.
            </p>
            <textarea
              value={amendmentSummary}
              onChange={(e) => setAmendmentSummary(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
              rows={3}
              placeholder="e.g., Updated section 4 to include new safety requirements"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => { setShowAmendmentPrompt(false); setAmendmentSummary('') }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => { setShowAmendmentPrompt(false); handleSubmit({ preventDefault: () => {} }) }}
                disabled={!amendmentSummary.trim()}
                className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
              >
                Save with Amendment
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {error && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Document Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Document title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type *
                  </label>
                  <select
                    required
                    value={formData.doc_type}
                    onChange={(e) => setFormData({ ...formData, doc_type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    {DOC_TYPES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Document #
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.doc_number}
                      onChange={(e) => setFormData({ ...formData, doc_number: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="POL-001"
                    />
                    <button
                      type="button"
                      onClick={generateDocNumber}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                      title="Generate"
                    >
                      Gen
                    </button>
                  </div>
                </div>
              </div>

              {/* Metadata Row */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    <option value="">Select...</option>
                    {DOC_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    {DOC_STATUSES.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Version
                  </label>
                  <input
                    type="text"
                    value={formData.version}
                    onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="1.0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Effective Date
                  </label>
                  <input
                    type="date"
                    value={formData.effective_date}
                    onChange={(e) => setFormData({ ...formData, effective_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Review Date
                  </label>
                  <input
                    type="date"
                    value={formData.review_date}
                    onChange={(e) => setFormData({ ...formData, review_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-brand-100 text-brand-700 rounded text-sm"
                    >
                      {tag}
                      <button type="button" onClick={() => removeTag(tag)} className="hover:text-brand-900">
                        <X className="w-3 h-3" />
                      </button>
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
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content (Markdown)
                </label>
                {showPreview ? (
                  <div className="prose prose-sm max-w-none p-4 border border-gray-300 rounded-lg bg-gray-50 min-h-[400px] overflow-auto">
                    <MarkdownPreview content={formData.content} />
                  </div>
                ) : (
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    rows={20}
                    placeholder="Document content in Markdown..."
                  />
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Internal Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Notes about this document (not shown in output)"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saving ? 'Saving...' : document ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

// Simple markdown preview component
function MarkdownPreview({ content }) {
  // Basic markdown parsing for preview
  const parseMarkdown = (md) => {
    if (!md) return ''

    let html = md
      // Headers
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      // Bold and italic
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Horizontal rule
      .replace(/^---$/gm, '<hr />')
      // Line breaks
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br />')

    // Handle tables
    const tableRegex = /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g
    html = html.replace(tableRegex, (match, header, body) => {
      const headers = header.split('|').filter(h => h.trim())
      const rows = body.trim().split('\n').map(row =>
        row.split('|').filter(c => c.trim())
      )

      let table = '<table class="min-w-full border-collapse border border-gray-300 my-4">'
      table += '<thead><tr>'
      headers.forEach(h => {
        table += `<th class="border border-gray-300 px-3 py-2 bg-gray-100 text-left text-sm font-medium">${h.trim()}</th>`
      })
      table += '</tr></thead><tbody>'
      rows.forEach(row => {
        table += '<tr>'
        row.forEach(cell => {
          table += `<td class="border border-gray-300 px-3 py-2 text-sm">${cell.trim()}</td>`
        })
        table += '</tr>'
      })
      table += '</tbody></table>'
      return table
    })

    return `<p>${html}</p>`
  }

  return (
    <div
      className="markdown-preview"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  )
}

function getDocIcon(type) {
  const typeConfig = DOC_TYPES.find(t => t.value === type)
  return typeConfig?.icon || File
}

function getStatusBadge(status) {
  const statusConfig = DOC_STATUSES.find(s => s.value === status)
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusConfig?.color || 'bg-gray-100 text-gray-700'}`}>
      {statusConfig?.label || status}
    </span>
  )
}

// Map URL paths to document types
const PATH_TO_TYPE = {
  '/policies': 'policy',
  '/procedures': 'procedure',
  '/fha': 'fha'
}

export default function Documents() {
  const location = useLocation()
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState(() => PATH_TO_TYPE[location.pathname] || '')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingDocument, setEditingDocument] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  // Update filter when URL changes
  useEffect(() => {
    setFilterType(PATH_TO_TYPE[location.pathname] || '')
  }, [location.pathname])

  useEffect(() => {
    loadDocuments()
  }, [filterType, showArchived])

  const loadDocuments = async () => {
    try {
      const data = await getDocuments(filterType || null, showArchived)
      setDocuments(data)
    } catch (err) {
      console.error('Failed to load documents:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleArchive = async (doc) => {
    if (!confirm(`Archive "${doc.title}"?`)) return
    try {
      await archiveDocument(doc.id)
      loadDocuments()
    } catch (err) {
      alert('Failed to archive: ' + err.message)
    }
  }

  const handleDelete = async (doc) => {
    if (!confirm(`Permanently delete "${doc.title}"? This cannot be undone.`)) return
    try {
      await deleteDocument(doc.id)
      loadDocuments()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(search.toLowerCase()) ||
    doc.doc_number?.toLowerCase().includes(search.toLowerCase()) ||
    doc.category?.toLowerCase().includes(search.toLowerCase()) ||
    doc.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()))
  )

  // Group documents by type
  const documentsByType = filteredDocuments.reduce((acc, doc) => {
    const type = doc.doc_type || 'other'
    if (!acc[type]) acc[type] = []
    acc[type].push(doc)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-500">Policies, procedures, hazard assessments, and more</p>
        </div>
        <button
          onClick={() => { setEditingDocument(null); setModalOpen(true) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          New Document
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        >
          <option value="">All Types</option>
          {DOC_TYPES.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        <label className="inline-flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={showArchived}
            onChange={(e) => setShowArchived(e.target.checked)}
            className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          />
          Show archived
        </label>
      </div>

      {/* Document List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : filteredDocuments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            {search || filterType ? 'No documents match your search' : 'No documents yet'}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(documentsByType).map(([type, docs]) => {
            const typeConfig = DOC_TYPES.find(t => t.value === type)
            const Icon = typeConfig?.icon || File
            return (
              <div key={type} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-gray-500" />
                    {typeConfig?.label || type}
                    <span className="text-gray-400 font-normal">({docs.length})</span>
                  </h3>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Document</th>
                      <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Category</th>
                      <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Version</th>
                      <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Status</th>
                      <th className="text-right px-4 py-2 text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {docs.map((doc) => {
                      const DocIcon = getDocIcon(doc.doc_type)
                      return (
                        <>
                          <tr
                            key={doc.id}
                            className={`hover:bg-gray-50 ${doc.status === 'archived' ? 'opacity-50' : ''}`}
                          >
                            <td className="px-4 py-3">
                              <button
                                onClick={() => setExpandedId(expandedId === doc.id ? null : doc.id)}
                                className="flex items-center gap-3 text-left"
                              >
                                {expandedId === doc.id ? (
                                  <ChevronUp className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-gray-400" />
                                )}
                                <div>
                                  <p className="font-medium text-gray-900">{doc.title}</p>
                                  {doc.doc_number && (
                                    <p className="text-sm text-gray-500">{doc.doc_number}</p>
                                  )}
                                </div>
                              </button>
                            </td>
                            <td className="px-4 py-3 hidden md:table-cell">
                              {doc.category && (
                                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                                  {doc.category}
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 hidden lg:table-cell">
                              <span className="text-sm text-gray-600">v{doc.version}</span>
                            </td>
                            <td className="px-4 py-3 hidden md:table-cell">
                              {getStatusBadge(doc.status)}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => { setEditingDocument(doc); setModalOpen(true) }}
                                  className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                                  title="Edit"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                {doc.status !== 'archived' && (
                                  <button
                                    onClick={() => handleArchive(doc)}
                                    className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                                    title="Archive"
                                  >
                                    <Archive className="w-4 h-4" />
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDelete(doc)}
                                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          {expandedId === doc.id && (
                            <tr>
                              <td colSpan={5} className="px-4 py-4 bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Details</h4>
                                    <div className="space-y-1 text-sm">
                                      <p className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        Version {doc.version}
                                      </p>
                                      {doc.effective_date && (
                                        <p className="flex items-center gap-2 text-gray-600">
                                          <Calendar className="w-4 h-4" />
                                          Effective: {format(parseISO(doc.effective_date), 'MMM d, yyyy')}
                                        </p>
                                      )}
                                      {doc.review_date && (
                                        <p className="flex items-center gap-2 text-gray-600">
                                          <Calendar className="w-4 h-4" />
                                          Review: {format(parseISO(doc.review_date), 'MMM d, yyyy')}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Tags</h4>
                                    <div className="flex flex-wrap gap-1">
                                      {doc.tags?.length > 0 ? (
                                        doc.tags.map(tag => (
                                          <span
                                            key={tag}
                                            className="px-2 py-0.5 bg-brand-100 text-brand-700 rounded text-xs"
                                          >
                                            {tag}
                                          </span>
                                        ))
                                      ) : (
                                        <span className="text-sm text-gray-400 italic">No tags</span>
                                      )}
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Metadata</h4>
                                    <div className="text-sm text-gray-600 space-y-1">
                                      {doc.author && <p>Author: {doc.author}</p>}
                                      {doc.approver && <p>Approver: {doc.approver}</p>}
                                      <p>Updated: {format(parseISO(doc.updated_at), 'MMM d, yyyy')}</p>
                                    </div>
                                  </div>
                                </div>
                                {doc.notes && (
                                  <div className="pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-medium text-gray-700 mb-1">Notes</h4>
                                    <p className="text-sm text-gray-600">{doc.notes}</p>
                                  </div>
                                )}
                              </td>
                            </tr>
                          )}
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <DocumentModal
          document={editingDocument}
          onClose={() => { setModalOpen(false); setEditingDocument(null) }}
          onSave={() => { setModalOpen(false); setEditingDocument(null); loadDocuments() }}
        />
      )}
    </div>
  )
}
