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

// Professional markdown preview with enhanced typography and styling
export function MarkdownPreview({ content, showLogo = false }) {
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
      return `<pre class="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono shadow-lg border border-gray-800"><code>${code.trim()}</code></pre>`
    })

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-brand-50 text-brand-700 px-2 py-1 rounded-md text-sm font-mono border border-brand-100">$1</code>')

    // Headers (must be at start of line) - with brand colors and better styling
    html = html.replace(/^#### (.+)$/gm, '<h4 class="text-base font-semibold text-gray-800 mt-6 mb-3 flex items-center gap-2"><span class="w-1 h-4 bg-brand-400 rounded-full"></span>$1</h4>')
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2"><span class="w-1.5 h-5 bg-brand-500 rounded-full"></span>$1</h3>')
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-brand-700 mt-10 mb-5 pb-3 border-b-2 border-brand-200">$1</h2>')
    html = html.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-brand-500">$1</h1>')

    // Bold and italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong class="font-bold"><em class="italic">$1</em></strong>')
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    html = html.replace(/\*(.+?)\*/g, '<em class="italic text-gray-700">$1</em>')
    html = html.replace(/___(.+?)___/g, '<strong class="font-bold"><em class="italic">$1</em></strong>')
    html = html.replace(/__(.+?)__/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    html = html.replace(/_(.+?)_/g, '<em class="italic text-gray-700">$1</em>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-600 hover:text-brand-700 underline decoration-brand-300 hover:decoration-brand-500 transition-colors font-medium" target="_blank" rel="noopener">$1</a>')

    // Horizontal rule - styled divider
    html = html.replace(/^---$/gm, '<div class="my-10 flex items-center gap-4"><div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div><div class="w-2 h-2 rounded-full bg-brand-400"></div><div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div></div>')
    html = html.replace(/^\*\*\*$/gm, '<div class="my-10 flex items-center gap-4"><div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div><div class="w-2 h-2 rounded-full bg-brand-400"></div><div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div></div>')

    // Blockquotes - professional callout style
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote class="relative pl-6 pr-4 py-4 my-6 bg-brand-50 border-l-4 border-brand-500 rounded-r-lg text-gray-700 italic shadow-sm"><span class="absolute left-2 top-2 text-brand-300 text-2xl font-serif">"</span>$1</blockquote>')

    // Process lists properly - collect consecutive items and wrap them
    // First, mark list items with special tokens
    const lines = html.split('\n')
    const processedLines = []
    let inUnorderedList = false
    let inOrderedList = false
    let orderedCounter = 1

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      // Check for unordered list item (- or *)
      const unorderedMatch = trimmed.match(/^[\-\*]\s+(.+)$/)
      // Check for ordered list item (any number followed by .)
      const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/)

      if (unorderedMatch) {
        if (inOrderedList) {
          processedLines.push('</ol>')
          inOrderedList = false
          orderedCounter = 1
        }
        if (!inUnorderedList) {
          processedLines.push('<ul class="my-6 space-y-2 list-none">')
          inUnorderedList = true
        }
        processedLines.push(`<li class="flex items-start gap-3 text-gray-700 leading-relaxed"><span class="w-2 h-2 mt-2 rounded-full bg-brand-500 flex-shrink-0"></span><span>${unorderedMatch[1]}</span></li>`)
      } else if (orderedMatch) {
        if (inUnorderedList) {
          processedLines.push('</ul>')
          inUnorderedList = false
        }
        if (!inOrderedList) {
          processedLines.push('<ol class="my-6 space-y-2 list-none counter-reset-list">')
          inOrderedList = true
          orderedCounter = 1
        }
        processedLines.push(`<li class="flex items-start gap-3 text-gray-700 leading-relaxed"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold flex items-center justify-center">${orderedCounter}</span><span>${orderedMatch[1]}</span></li>`)
        orderedCounter++
      } else {
        // Not a list item - close any open lists
        if (inUnorderedList) {
          processedLines.push('</ul>')
          inUnorderedList = false
        }
        if (inOrderedList) {
          processedLines.push('</ol>')
          inOrderedList = false
          orderedCounter = 1
        }
        processedLines.push(line)
      }
    }

    // Close any remaining open lists
    if (inUnorderedList) processedLines.push('</ul>')
    if (inOrderedList) processedLines.push('</ol>')

    html = processedLines.join('\n')

    // Tables - professional styling with borders, shadows, hover effects
    const tableRegex = /\|(.+)\|\n\|[\-\s|:]+\|\n((?:\|.+\|\n?)+)/g
    html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
      const headers = headerRow.split('|').filter(h => h.trim())
      const rows = bodyRows.trim().split('\n').map(row =>
        row.split('|').filter(c => c.trim())
      )

      let table = '<div class="my-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">'
      table += '<table class="min-w-full divide-y divide-gray-200">'
      table += '<thead class="bg-gradient-to-r from-brand-600 to-brand-700">'
      table += '<tr>'
      headers.forEach(h => {
        table += `<th class="px-5 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">${h.trim()}</th>`
      })
      table += '</tr></thead>'
      table += '<tbody class="bg-white divide-y divide-gray-100">'
      rows.forEach((row, i) => {
        table += `<tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-brand-50 transition-colors">`
        row.forEach((cell, j) => {
          const isFirstCol = j === 0
          table += `<td class="px-5 py-4 text-sm ${isFirstCol ? 'font-medium text-gray-900' : 'text-gray-600'}">${cell.trim()}</td>`
        })
        table += '</tr>'
      })
      table += '</tbody></table></div>'
      return table
    })

    // Paragraphs - wrap loose text with better typography
    const finalLines = html.split('\n')
    const finalProcessed = []
    let inParagraph = false

    for (let i = 0; i < finalLines.length; i++) {
      const line = finalLines[i]
      const trimmed = line.trim()

      // Skip if it's already an HTML element or empty
      if (trimmed.startsWith('<') || trimmed === '') {
        if (inParagraph) {
          finalProcessed.push('</p>')
          inParagraph = false
        }
        if (trimmed === '' && finalProcessed[finalProcessed.length - 1] !== '') {
          finalProcessed.push('')
        } else if (trimmed.startsWith('<')) {
          finalProcessed.push(line)
        }
      } else {
        if (!inParagraph) {
          finalProcessed.push('<p class="text-gray-700 leading-relaxed my-4 text-base">')
          inParagraph = true
        } else {
          finalProcessed.push('<br />')
        }
        finalProcessed.push(line)
      }
    }

    if (inParagraph) {
      finalProcessed.push('</p>')
    }

    return finalProcessed.join('\n')
  }

  return (
    <div
      className="prose prose-gray max-w-none document-content"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  )
}
