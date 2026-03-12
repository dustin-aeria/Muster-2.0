import { useState, useEffect } from 'react'
import {
  Plus,
  Search,
  Edit2,
  Archive,
  Trash2,
  X,
  FileText,
  Save,
  Calendar,
  Eye,
  Printer,
  ClipboardList
} from 'lucide-react'
import {
  getDocuments, getDocument, createDocument, updateDocument, archiveDocument, deleteDocument
} from '../lib/api'
import { format, parseISO } from 'date-fns'
import MarkdownEditor, { MarkdownPreview } from '../components/MarkdownEditor'
import aeriaIconWhite from '../assets/aeria-icon-white.png'
import aeriaLogoFull from '../assets/aeria-logo-full.png'

const FORM_CATEGORIES = [
  'Flight Operations',
  'Safety',
  'Maintenance',
  'Training',
  'Administrative',
  'Regulatory',
  'Other'
]

const FORM_STATUSES = [
  { value: 'draft', label: 'Draft', color: 'bg-gray-100 text-gray-700' },
  { value: 'active', label: 'Active', color: 'bg-green-100 text-green-700' },
  { value: 'under_review', label: 'Under Review', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'archived', label: 'Archived', color: 'bg-red-100 text-red-700' }
]

// Default template for new forms
const getDefaultFormContent = (title) => `# ${title}

## Form Information

**Form Number:** FRM-XXX
**Version:** 1.0
**Effective Date:** ${format(new Date(), 'yyyy-MM-dd')}

---

## Instructions

Complete all required fields. Submit to your supervisor upon completion.

---

## Form Fields

| Field | Value |
|:------|:------|
| Date | |
| Operator Name | |
| Project/Mission | |

---

## Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Completed By | | | |
| Reviewed By | | | |

---

## Amendment History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | ${format(new Date(), 'yyyy-MM-dd')} | - | Initial release |
`

function FormModal({ document, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    doc_type: 'form',
    doc_number: '',
    category: '',
    content: '',
    version: '1.0',
    effective_date: '',
    review_date: '',
    status: 'draft',
    tags: [],
    notes: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    if (document) {
      setFormData({
        title: document.title || '',
        doc_type: 'form',
        doc_number: document.doc_number || '',
        category: document.category || '',
        content: document.content || '',
        version: document.version || '1.0',
        effective_date: document.effective_date || '',
        review_date: document.review_date || '',
        status: document.status || 'draft',
        tags: document.tags || [],
        notes: document.notes || ''
      })
    } else {
      setFormData(prev => ({
        ...prev,
        content: getDefaultFormContent('New Form')
      }))
    }
  }, [document])

  useEffect(() => {
    if (!document && formData.title && formData.content.includes('# New Form')) {
      setFormData(prev => ({
        ...prev,
        content: prev.content.replace('# New Form', `# ${formData.title}`)
      }))
    }
  }, [formData.title, document])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const data = {
        ...formData,
        doc_type: 'form',
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

  const generateFormNumber = () => {
    const num = String(Math.floor(Math.random() * 900) + 100)
    setFormData(prev => ({ ...prev, doc_number: `FRM-${num}` }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {document ? 'Edit Form' : 'New Form'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {error && (
              <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Form Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Form Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Form title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Form Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.doc_number}
                    onChange={(e) => setFormData({ ...formData, doc_number: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="FRM-001"
                  />
                  <button
                    type="button"
                    onClick={generateFormNumber}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                    title="Generate"
                  >
                    Gen
                  </button>
                </div>
              </div>
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
                  {FORM_CATEGORIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Metadata Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                >
                  {FORM_STATUSES.map(s => (
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
                Form Content
              </label>
              <MarkdownEditor
                value={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
                minHeight="450px"
              />
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
                placeholder="Notes about this form (not shown in output)"
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
      </div>
    </div>
  )
}

// Form viewer
function FormViewer({ document, onClose, onEdit }) {
  const statusConfig = FORM_STATUSES.find(s => s.value === document.status)

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <html>
        <head>
          <title>${document.title}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.7; color: #1f2937; }
            .doc-header { display: flex; align-items: flex-start; gap: 24px; padding-bottom: 24px; border-bottom: 3px solid #131CD0; margin-bottom: 32px; }
            .doc-header img { height: 50px; width: auto; }
            .doc-header-content { flex: 1; }
            .doc-number { color: #131CD0; font-weight: 600; font-size: 14px; margin-bottom: 4px; }
            .doc-title { font-size: 26px; font-weight: 700; color: #132163; margin-bottom: 8px; }
            .doc-meta { color: #6b7280; font-size: 13px; display: flex; flex-wrap: wrap; gap: 16px; }
            h1 { font-size: 24px; font-weight: 700; color: #132163; margin: 32px 0 16px; padding-bottom: 12px; border-bottom: 3px solid #131CD0; }
            h2 { font-size: 20px; font-weight: 700; color: #132163; margin: 28px 0 12px; padding-bottom: 8px; border-bottom: 2px solid #131CD0; }
            h3 { font-size: 17px; font-weight: 600; color: #132163; margin: 24px 0 10px; }
            p { margin: 12px 0; color: #374151; }
            ul, ol { margin: 16px 0; padding-left: 0; list-style: none; }
            li { display: flex; align-items: flex-start; gap: 10px; margin: 8px 0; color: #374151; }
            ul li::before { content: ''; width: 6px; height: 6px; margin-top: 8px; border-radius: 50%; background: #131CD0; flex-shrink: 0; }
            ol { counter-reset: list-counter; }
            ol li { counter-increment: list-counter; }
            ol li::before { content: counter(list-counter); width: 22px; height: 22px; border-radius: 50%; background: #132163; color: white; font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
            table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
            th { background: #132163; color: white; padding: 12px 16px; text-align: left; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid #132163; }
            td { border: 1px solid #e2e8f0; padding: 10px 16px; color: #374151; min-height: 40px; }
            tr:nth-child(even) { background: #f8fafc; }
            hr { border: none; height: 1px; background: #e5e7eb; margin: 32px 0; }
            blockquote { border-left: 3px solid #131CD0; padding-left: 16px; margin: 20px 0; color: #4b5563; font-style: italic; }
            .doc-footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px; }
            @media print {
              body { padding: 20px; }
              table { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="doc-header">
            <img src="${aeriaLogoFull}" alt="AERIA Solutions Ltd." />
            <div class="doc-header-content">
              ${document.doc_number ? `<div class="doc-number">${document.doc_number}</div>` : ''}
              <div class="doc-title">${document.title}</div>
              <div class="doc-meta">
                <span><strong>Type:</strong> Form</span>
                <span><strong>Version:</strong> ${document.version}</span>
                ${document.category ? `<span><strong>Category:</strong> ${document.category}</span>` : ''}
              </div>
            </div>
          </div>
          <div id="content"></div>
          <div class="doc-footer">
            AERIA Solutions Ltd. | Form Document | Printed ${new Date().toLocaleDateString()}
          </div>
        </body>
      </html>
    `)

    // Process markdown for print
    let content = document.content.replace(/\r\n/g, '\n')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Process tables first
    const tableRegex = /\|(.+)\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n((?:\|.+\|\n?)+)/g
    content = content.replace(tableRegex, (match, headerRow, bodyRows) => {
      const headers = headerRow.split('|').filter(h => h.trim())
      const rows = bodyRows.trim().split('\n').map(row => row.split('|').filter(c => c.trim()))
      let table = '<table><thead><tr>'
      headers.forEach(h => { table += '<th>' + h.trim() + '</th>' })
      table += '</tr></thead><tbody>'
      rows.forEach(row => {
        table += '<tr>'
        row.forEach(cell => { table += '<td>' + cell.trim() + '</td>' })
        table += '</tr>'
      })
      table += '</tbody></table>'
      return table
    })

    content = content
      .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^---$/gm, '<hr />')
      .replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')

    // Process lists
    const lines = content.split('\n')
    let result = []
    let inUl = false
    let inOl = false

    for (const line of lines) {
      if (line.trim().startsWith('<table') || line.trim().startsWith('<tr') || line.trim().startsWith('</')) {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (inOl) { result.push('</ol>'); inOl = false }
        result.push(line)
        continue
      }

      const ulMatch = line.match(/^[\-\*]\s+(.+)$/)
      const olMatch = line.match(/^\d+\.\s+(.+)$/)

      if (ulMatch) {
        if (inOl) { result.push('</ol>'); inOl = false }
        if (!inUl) { result.push('<ul>'); inUl = true }
        result.push('<li>' + ulMatch[1] + '</li>')
      } else if (olMatch) {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (!inOl) { result.push('<ol>'); inOl = true }
        result.push('<li>' + olMatch[1] + '</li>')
      } else {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (inOl) { result.push('</ol>'); inOl = false }
        if (line.trim() && !line.trim().startsWith('<')) {
          result.push('<p>' + line + '</p>')
        } else {
          result.push(line)
        }
      }
    }
    if (inUl) result.push('</ul>')
    if (inOl) result.push('</ol>')

    printWindow.document.getElementById('content').innerHTML = result.join('\n')
    printWindow.document.close()
    setTimeout(() => printWindow.print(), 250)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#132163] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={aeriaIconWhite} alt="AERIA" className="h-10 w-auto" />
            <div className={`px-2 py-1 rounded text-xs font-medium ${document.status === 'active' ? 'bg-green-400/20 text-green-100' : document.status === 'draft' ? 'bg-gray-400/20 text-gray-100' : 'bg-yellow-400/20 text-yellow-100'}`}>
              {statusConfig?.label || document.status}
            </div>
            <span className="text-sm text-white/80">v{document.version}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors"
              title="Print"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onEdit}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#131CD0] text-white rounded-lg hover:bg-[#1020a0] font-medium transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Header */}
        <div className="px-8 pt-6 pb-6 bg-white border-b border-gray-200">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              {document.doc_number && (
                <p className="text-sm font-bold text-[#131CD0] mb-2 tracking-wide">{document.doc_number}</p>
              )}
              <h1 className="text-2xl font-bold text-[#132163] mb-3">{document.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#132163]/10 text-[#132163] rounded-full font-medium">
                  <ClipboardList className="w-4 h-4" />
                  Form
                </span>
                {document.category && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {document.category}
                  </span>
                )}
                {document.effective_date && (
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    Effective: {format(parseISO(document.effective_date), 'MMM d, yyyy')}
                  </span>
                )}
              </div>
              {document.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {document.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <img src={aeriaLogoFull} alt="AERIA Solutions Ltd." className="h-14 w-auto hidden sm:block" />
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 bg-white">
          <div className="max-w-none">
            <MarkdownPreview content={document.content} />
          </div>
        </div>
      </div>
    </div>
  )
}

function getStatusBadge(status) {
  const statusConfig = FORM_STATUSES.find(s => s.value === status)
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusConfig?.color || 'bg-gray-100 text-gray-700'}`}>
      {statusConfig?.label || status}
    </span>
  )
}

export default function Forms() {
  const [forms, setForms] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [editingForm, setEditingForm] = useState(null)
  const [viewingForm, setViewingForm] = useState(null)

  useEffect(() => {
    loadForms()
  }, [showArchived])

  const loadForms = async () => {
    try {
      // Get only forms (doc_type = 'form')
      const data = await getDocuments('form', showArchived)
      setForms(data)
    } catch (err) {
      console.error('Failed to load forms:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleArchive = async (form) => {
    if (!confirm(`Archive "${form.title}"?`)) return
    try {
      await archiveDocument(form.id)
      loadForms()
    } catch (err) {
      alert('Failed to archive: ' + err.message)
    }
  }

  const handleDelete = async (form) => {
    if (!confirm(`Permanently delete "${form.title}"? This cannot be undone.`)) return
    try {
      await deleteDocument(form.id)
      loadForms()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const filteredForms = forms.filter(form => {
    if (filterCategory && form.category !== filterCategory) return false

    if (search) {
      const searchLower = search.toLowerCase()
      return (
        form.title.toLowerCase().includes(searchLower) ||
        form.doc_number?.toLowerCase().includes(searchLower) ||
        form.category?.toLowerCase().includes(searchLower) ||
        form.tags?.some(t => t.toLowerCase().includes(searchLower))
      )
    }
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Forms</h1>
          <p className="text-gray-500">Operational forms, checklists, and templates</p>
        </div>
        <button
          onClick={() => { setEditingForm(null); setModalOpen(true) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          New Form
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search forms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        >
          <option value="">All Categories</option>
          {FORM_CATEGORIES.map(c => (
            <option key={c} value={c}>{c}</option>
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

      {/* Forms List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : filteredForms.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <ClipboardList className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            {search || filterCategory ? 'No forms match your search' : 'No forms yet'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Form</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Category</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Version</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Status</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredForms.map((form) => (
                <tr
                  key={form.id}
                  className={`hover:bg-gray-50 cursor-pointer ${form.status === 'archived' ? 'opacity-50' : ''}`}
                >
                  <td className="px-4 py-3">
                    <button
                      onClick={() => { setViewingForm(form); setViewerOpen(true) }}
                      className="flex items-center gap-3 text-left group"
                    >
                      <ClipboardList className="w-5 h-5 text-gray-400 group-hover:text-brand-500" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-brand-600">{form.title}</p>
                        {form.doc_number && (
                          <p className="text-sm text-gray-500">{form.doc_number}</p>
                        )}
                      </div>
                    </button>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    {form.category && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                        {form.category}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <span className="text-sm text-gray-600">v{form.version}</span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    {getStatusBadge(form.status)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => { setEditingForm(form); setModalOpen(true) }}
                        className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      {form.status !== 'archived' && (
                        <button
                          onClick={() => handleArchive(form)}
                          className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                          title="Archive"
                        >
                          <Archive className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(form)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Viewer Modal */}
      {viewerOpen && viewingForm && (
        <FormViewer
          document={viewingForm}
          onClose={() => { setViewerOpen(false); setViewingForm(null) }}
          onEdit={() => {
            setViewerOpen(false)
            setEditingForm(viewingForm)
            setViewingForm(null)
            setModalOpen(true)
          }}
        />
      )}

      {/* Editor Modal */}
      {modalOpen && (
        <FormModal
          document={editingForm}
          onClose={() => { setModalOpen(false); setEditingForm(null) }}
          onSave={() => { setModalOpen(false); setEditingForm(null); loadForms() }}
        />
      )}
    </div>
  )
}
