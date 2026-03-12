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
  Save,
  Calendar,
  Eye,
  Printer
} from 'lucide-react'
import {
  getDocuments, getDocument, createDocument, updateDocument, archiveDocument, deleteDocument
} from '../lib/api'
import { format, parseISO } from 'date-fns'
import MarkdownEditor, { MarkdownPreview } from '../components/MarkdownEditor'
import aeriaIconWhite from '../assets/aeria-icon-white.png'
import aeriaLogoFull from '../assets/aeria-logo-full.png'

const DOC_TYPES = [
  { value: 'policy', label: 'Policy', icon: BookOpen, prefix: 'POL' },
  { value: 'procedure', label: 'Procedure', icon: FileText, prefix: 'SOP' },
  { value: 'fha', label: 'Hazard Assessment', icon: AlertTriangle, prefix: 'FHA' },
  { value: 'guide', label: 'Guide', icon: File, prefix: 'GDE' },
  { value: 'form', label: 'Form', icon: File, prefix: 'FRM' },
  { value: 'other', label: 'Other', icon: File, prefix: 'DOC' }
]

const DOC_CATEGORIES = [
  'Governance',
  'Flight Operations',
  'Safety',
  'Maintenance',
  'Training',
  'Operations',
  'Administrative',
  'Forms',
  'Quick Reference',
  'Hazard Assessment',
  'Regulatory',
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
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {document ? 'Edit Document' : 'New Document'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
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
                  Content
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

// Read-only document viewer
function DocumentViewer({ document, onClose, onEdit }) {
  const typeConfig = DOC_TYPES.find(t => t.value === document.doc_type)
  const statusConfig = DOC_STATUSES.find(s => s.value === document.status)

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <html>
        <head>
          <title>${document.title}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.7; color: #1f2937; }

            /* Header */
            .doc-header { display: flex; align-items: flex-start; gap: 24px; padding-bottom: 24px; border-bottom: 3px solid #131CD0; margin-bottom: 32px; }
            .doc-header img { height: 50px; width: auto; }
            .doc-header-content { flex: 1; }
            .doc-number { color: #131CD0; font-weight: 600; font-size: 14px; margin-bottom: 4px; }
            .doc-title { font-size: 26px; font-weight: 700; color: #132163; margin-bottom: 8px; }
            .doc-meta { color: #6b7280; font-size: 13px; display: flex; flex-wrap: wrap; gap: 16px; }
            .doc-meta-item { display: flex; align-items: center; gap: 6px; }

            /* Content */
            h1 { font-size: 24px; font-weight: 700; color: #132163; margin: 32px 0 16px; padding-bottom: 12px; border-bottom: 3px solid #131CD0; }
            h2 { font-size: 20px; font-weight: 700; color: #132163; margin: 28px 0 12px; padding-bottom: 8px; border-bottom: 2px solid #131CD0; }
            h3 { font-size: 17px; font-weight: 600; color: #132163; margin: 24px 0 10px; }
            h4 { font-size: 15px; font-weight: 600; color: #132163; margin: 20px 0 8px; }
            p { margin: 12px 0; color: #374151; }

            /* Lists */
            ul, ol { margin: 16px 0; padding-left: 0; list-style: none; }
            li { display: flex; align-items: flex-start; gap: 10px; margin: 8px 0; color: #374151; }
            ul li::before { content: ''; width: 6px; height: 6px; margin-top: 8px; border-radius: 50%; background: #131CD0; flex-shrink: 0; }
            ol { counter-reset: list-counter; }
            ol li { counter-increment: list-counter; }
            ol li::before { content: counter(list-counter); width: 22px; height: 22px; border-radius: 50%; background: #132163; color: white; font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

            /* Tables - clean minimal style */
            table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
            th { background: #132163; color: white; padding: 12px 16px; text-align: left; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid #132163; }
            td { border: 1px solid #e2e8f0; padding: 10px 16px; color: #374151; }
            tr:nth-child(even) { background: #f8fafc; }

            /* Other elements */
            hr { border: none; height: 1px; background: #e5e7eb; margin: 32px 0; }
            blockquote { border-left: 3px solid #131CD0; padding-left: 16px; margin: 20px 0; color: #4b5563; font-style: italic; }
            code { background: #f1f5f9; color: #132163; padding: 2px 6px; border-radius: 4px; font-size: 13px; font-family: 'Consolas', 'Monaco', monospace; }
            pre { background: #1a1a2e; color: #e2e8f0; padding: 16px; border-radius: 6px; overflow-x: auto; margin: 20px 0; border-left: 3px solid #131CD0; }
            pre code { background: none; color: inherit; padding: 0; }
            strong { font-weight: 600; color: #1f2937; }
            em { font-style: italic; }
            a { color: #131CD0; text-decoration: underline; }

            /* Footer */
            .doc-footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px; }

            @media print {
              body { padding: 20px; }
              .doc-header { page-break-after: avoid; }
              h1, h2, h3 { page-break-after: avoid; }
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
                <span class="doc-meta-item"><strong>Type:</strong> ${typeConfig?.label || document.doc_type}</span>
                <span class="doc-meta-item"><strong>Version:</strong> ${document.version}</span>
                ${document.category ? `<span class="doc-meta-item"><strong>Category:</strong> ${document.category}</span>` : ''}
                ${document.effective_date ? `<span class="doc-meta-item"><strong>Effective:</strong> ${document.effective_date}</span>` : ''}
              </div>
            </div>
          </div>
          <div id="content"></div>
          <div class="doc-footer">
            AERIA Solutions Ltd. | Confidential Document | Printed ${new Date().toLocaleDateString()}
          </div>
        </body>
      </html>
    `)

    // Process markdown for print - normalize line endings first
    let content = document.content.replace(/\r\n/g, '\n')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Process TABLES FIRST before anything else breaks them
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

    // Now process other markdown
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
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/^---$/gm, '<hr />')
      .replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')

    // Process lists with proper numbering
    const lines = content.split('\n')
    let result = []
    let inUl = false
    let inOl = false
    let olCounter = 1

    for (const line of lines) {
      // Skip lines that are already HTML
      if (line.trim().startsWith('<table') || line.trim().startsWith('<tr') || line.trim().startsWith('<td') || line.trim().startsWith('<th') || line.trim().startsWith('</')) {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (inOl) { result.push('</ol>'); inOl = false; olCounter = 1 }
        result.push(line)
        continue
      }

      const ulMatch = line.match(/^[\-\*]\s+(.+)$/)
      const olMatch = line.match(/^\d+\.\s+(.+)$/)

      if (ulMatch) {
        if (inOl) { result.push('</ol>'); inOl = false; olCounter = 1 }
        if (!inUl) { result.push('<ul>'); inUl = true }
        result.push('<li>' + ulMatch[1] + '</li>')
      } else if (olMatch) {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (!inOl) { result.push('<ol>'); inOl = true; olCounter = 1 }
        result.push('<li>' + olMatch[1] + '</li>')
        olCounter++
      } else {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (inOl) { result.push('</ol>'); inOl = false; olCounter = 1 }
        if (line.trim() && !line.trim().startsWith('<')) {
          result.push('<p>' + line + '</p>')
        } else {
          result.push(line)
        }
      }
    }
    if (inUl) result.push('</ul>')
    if (inOl) result.push('</ol>')

    const finalContent = result.join('\n')
    printWindow.document.getElementById('content').innerHTML = finalContent
    printWindow.document.close()
    setTimeout(() => printWindow.print(), 250)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header with logo */}
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

        {/* Document Header with full logo */}
        <div className="px-8 pt-6 pb-6 bg-white border-b border-gray-200">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              {document.doc_number && (
                <p className="text-sm font-bold text-[#131CD0] mb-2 tracking-wide">{document.doc_number}</p>
              )}
              <h1 className="text-2xl font-bold text-[#132163] mb-3">{document.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#132163]/10 text-[#132163] rounded-full font-medium">
                  {typeConfig?.label || document.doc_type}
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

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 bg-white">
          <div className="max-w-none">
            <MarkdownPreview content={document.content} />
          </div>
        </div>
      </div>
    </div>
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
  const [filterCategory, setFilterCategory] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [editingDocument, setEditingDocument] = useState(null)
  const [viewingDocument, setViewingDocument] = useState(null)

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

  const filteredDocuments = documents.filter(doc => {
    // Category filter
    if (filterCategory && doc.category !== filterCategory) return false

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      return (
        doc.title.toLowerCase().includes(searchLower) ||
        doc.doc_number?.toLowerCase().includes(searchLower) ||
        doc.category?.toLowerCase().includes(searchLower) ||
        doc.tags?.some(t => t.toLowerCase().includes(searchLower))
      )
    }
    return true
  })

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
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        >
          <option value="">All Categories</option>
          {DOC_CATEGORIES.map(c => (
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
                    {docs.map((doc) => (
                          <tr
                            key={doc.id}
                            className={`hover:bg-gray-50 cursor-pointer ${doc.status === 'archived' ? 'opacity-50' : ''}`}
                          >
                            <td className="px-4 py-3">
                              <button
                                onClick={() => { setViewingDocument(doc); setViewerOpen(true) }}
                                className="flex items-center gap-3 text-left group"
                              >
                                <Eye className="w-4 h-4 text-gray-300 group-hover:text-brand-500" />
                                <div>
                                  <p className="font-medium text-gray-900 group-hover:text-brand-600">{doc.title}</p>
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
                        ))}
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      )}

      {/* Viewer Modal */}
      {viewerOpen && viewingDocument && (
        <DocumentViewer
          document={viewingDocument}
          onClose={() => { setViewerOpen(false); setViewingDocument(null) }}
          onEdit={() => {
            setViewerOpen(false)
            setEditingDocument(viewingDocument)
            setViewingDocument(null)
            setModalOpen(true)
          }}
        />
      )}

      {/* Editor Modal */}
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
