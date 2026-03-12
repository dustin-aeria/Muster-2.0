import { useState, useRef } from 'react'
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Table,
  Minus,
  Link,
  Quote,
  Code,
  Eye,
  Edit3,
  Columns
} from 'lucide-react'

// Toolbar button component
function ToolbarButton({ icon: Icon, label, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${active ? 'bg-gray-200 text-brand-600' : 'text-gray-600'}`}
      title={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  )
}

// Toolbar divider
function Divider() {
  return <div className="w-px h-6 bg-gray-300 mx-1" />
}

export default function MarkdownEditor({ value, onChange, minHeight = '400px' }) {
  const [viewMode, setViewMode] = useState('edit') // 'edit', 'preview', 'split'
  const textareaRef = useRef(null)

  // Insert text at cursor position
  const insertText = (before, after = '', placeholder = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end) || placeholder

    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)
    onChange(newText)

    // Set cursor position after insert
    setTimeout(() => {
      textarea.focus()
      const newPos = start + before.length + selectedText.length + after.length
      textarea.setSelectionRange(newPos, newPos)
    }, 0)
  }

  // Insert at line start
  const insertAtLineStart = (prefix) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const lineStart = value.lastIndexOf('\n', start - 1) + 1
    const newText = value.substring(0, lineStart) + prefix + value.substring(lineStart)
    onChange(newText)

    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + prefix.length, start + prefix.length)
    }, 0)
  }

  const toolbar = [
    { icon: Bold, label: 'Bold (Ctrl+B)', action: () => insertText('**', '**', 'bold text') },
    { icon: Italic, label: 'Italic (Ctrl+I)', action: () => insertText('*', '*', 'italic text') },
    { icon: Code, label: 'Code', action: () => insertText('`', '`', 'code') },
    'divider',
    { icon: Heading1, label: 'Heading 1', action: () => insertAtLineStart('# ') },
    { icon: Heading2, label: 'Heading 2', action: () => insertAtLineStart('## ') },
    { icon: Heading3, label: 'Heading 3', action: () => insertAtLineStart('### ') },
    'divider',
    { icon: List, label: 'Bullet List', action: () => insertAtLineStart('- ') },
    { icon: ListOrdered, label: 'Numbered List', action: () => insertAtLineStart('1. ') },
    { icon: Quote, label: 'Quote', action: () => insertAtLineStart('> ') },
    'divider',
    { icon: Minus, label: 'Horizontal Rule', action: () => insertText('\n\n---\n\n') },
    { icon: Link, label: 'Link', action: () => insertText('[', '](url)', 'link text') },
    { icon: Table, label: 'Table', action: () => insertText('\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Cell 1   | Cell 2   | Cell 3   |\n') },
  ]

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-300 flex-wrap">
        {toolbar.map((item, i) =>
          item === 'divider' ? (
            <Divider key={i} />
          ) : (
            <ToolbarButton
              key={i}
              icon={item.icon}
              label={item.label}
              onClick={item.action}
            />
          )
        )}

        <div className="flex-1" />

        {/* View mode toggle */}
        <div className="flex items-center bg-gray-200 rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setViewMode('edit')}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${viewMode === 'edit' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('split')}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${viewMode === 'split' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Columns className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('preview')}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${viewMode === 'preview' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Editor / Preview */}
      <div className={`flex ${viewMode === 'split' ? 'divide-x divide-gray-300' : ''}`} style={{ minHeight }}>
        {/* Editor */}
        {(viewMode === 'edit' || viewMode === 'split') && (
          <div className={viewMode === 'split' ? 'w-1/2' : 'w-full'}>
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none"
              style={{ minHeight }}
              placeholder="Write your document in Markdown..."
            />
          </div>
        )}

        {/* Preview */}
        {(viewMode === 'preview' || viewMode === 'split') && (
          <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} overflow-auto bg-white`}>
            <div className="p-6">
              <MarkdownPreview content={value} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Professional markdown preview with good typography
export function MarkdownPreview({ content }) {
  if (!content) {
    return <p className="text-gray-400 italic">No content</p>
  }

  const parseMarkdown = (md) => {
    let html = md

    // Escape HTML first
    html = html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Code blocks (before other processing)
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-4 text-sm font-mono"><code>${code.trim()}</code></pre>`
    })

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')

    // Headers (must be at start of line)
    html = html.replace(/^#### (.+)$/gm, '<h4 class="text-base font-semibold text-gray-900 mt-6 mb-2">$1</h4>')
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">$1</h2>')
    html = html.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-gray-900 mb-6">$1</h1>')

    // Bold and italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    html = html.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    html = html.replace(/___(.+?)___/g, '<strong><em>$1</em></strong>')
    html = html.replace(/__(.+?)__/g, '<strong class="font-semibold">$1</strong>')
    html = html.replace(/_(.+?)_/g, '<em class="italic">$1</em>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-600 hover:text-brand-700 underline" target="_blank" rel="noopener">$1</a>')

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr class="my-8 border-t border-gray-300" />')
    html = html.replace(/^\*\*\*$/gm, '<hr class="my-8 border-t border-gray-300" />')

    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote class="border-l-4 border-brand-500 pl-4 py-1 my-4 text-gray-700 italic">$1</blockquote>')

    // Unordered lists
    html = html.replace(/^[\-\*] (.+)$/gm, '<li class="ml-4 list-disc list-inside text-gray-700">$1</li>')

    // Ordered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal list-inside text-gray-700">$1</li>')

    // Wrap consecutive list items
    html = html.replace(/(<li class="ml-4 list-disc[^>]*>.*<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>')
    html = html.replace(/(<li class="ml-4 list-decimal[^>]*>.*<\/li>\n?)+/g, '<ol class="my-4 space-y-1">$&</ol>')

    // Tables
    const tableRegex = /\|(.+)\|\n\|[\-\s|]+\|\n((?:\|.+\|\n?)+)/g
    html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
      const headers = headerRow.split('|').filter(h => h.trim())
      const rows = bodyRows.trim().split('\n').map(row =>
        row.split('|').filter(c => c.trim())
      )

      let table = '<div class="my-6 overflow-x-auto"><table class="min-w-full border-collapse">'
      table += '<thead><tr class="bg-gray-50 border-b-2 border-gray-200">'
      headers.forEach(h => {
        table += `<th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">${h.trim()}</th>`
      })
      table += '</tr></thead><tbody class="divide-y divide-gray-200">'
      rows.forEach((row, i) => {
        table += `<tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">`
        row.forEach(cell => {
          table += `<td class="px-4 py-3 text-sm text-gray-700">${cell.trim()}</td>`
        })
        table += '</tr>'
      })
      table += '</tbody></table></div>'
      return table
    })

    // Paragraphs - wrap loose text
    const lines = html.split('\n')
    const processed = []
    let inParagraph = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      // Skip if it's already an HTML element
      if (trimmed.startsWith('<') || trimmed === '') {
        if (inParagraph) {
          processed.push('</p>')
          inParagraph = false
        }
        if (trimmed === '' && processed[processed.length - 1] !== '') {
          processed.push('')
        } else if (trimmed.startsWith('<')) {
          processed.push(line)
        }
      } else {
        if (!inParagraph) {
          processed.push('<p class="text-gray-700 leading-relaxed my-4">')
          inParagraph = true
        } else {
          processed.push('<br />')
        }
        processed.push(line)
      }
    }

    if (inParagraph) {
      processed.push('</p>')
    }

    return processed.join('\n')
  }

  return (
    <div
      className="prose prose-gray max-w-none"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  )
}
