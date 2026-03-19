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

// Professional markdown preview with clean typography
export function MarkdownPreview({ content }) {
  if (!content) {
    return <p className="text-gray-400 italic">No content</p>
  }

  const parseMarkdown = (md) => {
    // Normalize line endings
    let html = md.replace(/\r\n/g, '\n')

    // Escape HTML first
    html = html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Code blocks (before other processing)
    // Handle both ```lang and ``` formats, with or without newline after
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (match, lang, code) => {
      const trimmedCode = code.trim()

      // Check if this is an ASCII box/flowchart (contains box-drawing characters U+2500-U+257F)
      const isFlowchart = /[\u2500-\u257F]/.test(trimmedCode)

      if (isFlowchart) {
        // Flowcharts need exact spacing preserved - use pre with monospace font
        // Using specific fonts known to render box-drawing characters well
        return `<pre style="background: #f8fafc; border: 1px solid #d1d5db; border-radius: 8px; padding: 24px; margin: 20px 0; font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', Consolas, Monaco, 'Courier New', monospace; font-size: 14px; line-height: 1.35; color: #1f2937; white-space: pre; overflow-x: auto; letter-spacing: 0;">${trimmedCode}</pre>`
      }

      // Check if this looks like a checklist/procedure (contains ☐ or checkbox-like content)
      const isChecklist = trimmedCode.includes('☐') || trimmedCode.includes('[ ]') || /^[\-\•]\s/m.test(trimmedCode)
      // Check if this looks like a call-response format (contains → or : followed by quoted text)
      const isCallResponse = trimmedCode.includes('→') || /^(PIC|VO|OPIC|IPIC):/.test(trimmedCode)

      if (isChecklist || isCallResponse) {
        // Render as a styled procedure box
        const formattedCode = trimmedCode
          .replace(/☐/g, '<span style="color: #131CD0; font-weight: bold;">☐</span>')
          .replace(/\[ \]/g, '<span style="color: #131CD0; font-weight: bold;">☐</span>')
          .replace(/→/g, '<span style="color: #131CD0; font-weight: bold;">→</span>')
          .replace(/^(PIC|VO|OPIC|IPIC):/gm, '<strong style="color: #132163;">$1:</strong>')
        return `<pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #131CD0; border-radius: 6px; padding: 16px; margin: 16px 0; font-family: 'Consolas', 'Monaco', monospace; font-size: 13px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${formattedCode}</pre>`
      }

      // Regular code block - dark theme
      return `<pre style="background: #1a1a2e; color: #e2e8f0; border-radius: 6px; padding: 16px; overflow-x: auto; margin: 20px 0; font-size: 13px; font-family: 'Consolas', 'Monaco', monospace; border-left: 3px solid #131CD0; white-space: pre;"><code>${trimmedCode}</code></pre>`
    })

    // TABLES - Process BEFORE lists to prevent interference
    // Match tables with optional alignment colons
    const tableRegex = /\|(.+)\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n((?:\|.+\|\n?)+)/g
    html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
      const headers = headerRow.split('|').filter(h => h.trim())
      const numCols = headers.length
      const rows = bodyRows.trim().split('\n').map(row => {
        // Split and keep all cells, including empty ones
        const cells = row.split('|').slice(1, -1) // Remove first/last empty from |cell|cell|
        // Pad to match header count if needed
        while (cells.length < numCols) cells.push('')
        return cells
      })

      let table = '<div style="margin: 24px 0; overflow-x: auto;">'
      table += '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">'
      table += '<thead>'
      table += '<tr style="background: #132163;">'
      headers.forEach(h => {
        table += `<th style="padding: 12px 16px; text-align: left; color: white; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid #132163;">${h.trim()}</th>`
      })
      table += '</tr></thead>'
      table += '<tbody>'
      rows.forEach((row, i) => {
        const bgColor = i % 2 === 0 ? '#ffffff' : '#f8fafc'
        table += `<tr style="background: ${bgColor};">`
        row.forEach((cell, j) => {
          const fontWeight = j === 0 ? '500' : '400'
          const cellContent = cell.trim() || '&nbsp;' // Use non-breaking space for empty cells
          table += `<td style="padding: 10px 16px; border: 1px solid #e2e8f0; color: #374151; font-weight: ${fontWeight}; min-width: 80px;">${cellContent}</td>`
        })
        table += '</tr>'
      })
      table += '</tbody></table></div>'
      return table
    })

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code style="background: #f1f5f9; color: #132163; padding: 2px 6px; border-radius: 4px; font-size: 13px; font-family: monospace;">$1</code>')

    // Headers with navy/blue styling
    html = html.replace(/^#### (.+)$/gm, '<h4 style="font-size: 15px; font-weight: 600; color: #132163; margin: 24px 0 12px 0;">$1</h4>')
    html = html.replace(/^### (.+)$/gm, '<h3 style="font-size: 17px; font-weight: 600; color: #132163; margin: 28px 0 14px 0;">$1</h3>')
    html = html.replace(/^## (.+)$/gm, '<h2 style="font-size: 20px; font-weight: 700; color: #132163; margin: 32px 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #131CD0;">$1</h2>')
    html = html.replace(/^# (.+)$/gm, '<h1 style="font-size: 24px; font-weight: 700; color: #132163; margin: 0 0 20px 0; padding-bottom: 12px; border-bottom: 3px solid #131CD0;">$1</h1>')

    // Bold and italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight: 600; color: #1f2937;">$1</strong>')
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
    html = html.replace(/___(.+?)___/g, '<strong><em>$1</em></strong>')
    html = html.replace(/__(.+?)__/g, '<strong style="font-weight: 600; color: #1f2937;">$1</strong>')
    html = html.replace(/_(.+?)_/g, '<em>$1</em>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #131CD0; text-decoration: underline;" target="_blank" rel="noopener">$1</a>')

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr style="border: none; height: 1px; background: #e5e7eb; margin: 32px 0;" />')
    html = html.replace(/^\*\*\*$/gm, '<hr style="border: none; height: 1px; background: #e5e7eb; margin: 32px 0;" />')

    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote style="border-left: 3px solid #131CD0; padding-left: 16px; margin: 16px 0; color: #4b5563; font-style: italic;">$1</blockquote>')

    // Process lists properly
    const lines = html.split('\n')
    const processedLines = []
    let inUnorderedList = false
    let inOrderedList = false
    let orderedCounter = 1

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      // Skip lines that are already HTML (tables, etc.)
      if (trimmed.startsWith('<div') || trimmed.startsWith('<table') || trimmed.startsWith('</')) {
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
        continue
      }

      const unorderedMatch = trimmed.match(/^[\-\*]\s+(.+)$/)
      const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/)

      if (unorderedMatch) {
        if (inOrderedList) {
          processedLines.push('</ol>')
          inOrderedList = false
          orderedCounter = 1
        }
        if (!inUnorderedList) {
          processedLines.push('<ul style="margin: 16px 0; padding-left: 0; list-style: none;">')
          inUnorderedList = true
        }
        processedLines.push(`<li style="display: flex; align-items: flex-start; gap: 10px; margin: 8px 0; color: #374151; line-height: 1.6;"><span style="width: 6px; height: 6px; margin-top: 8px; border-radius: 50%; background: #131CD0; flex-shrink: 0;"></span><span>${unorderedMatch[1]}</span></li>`)
      } else if (orderedMatch) {
        if (inUnorderedList) {
          processedLines.push('</ul>')
          inUnorderedList = false
        }
        if (!inOrderedList) {
          processedLines.push('<ol style="margin: 16px 0; padding-left: 0; list-style: none;">')
          inOrderedList = true
          orderedCounter = 1
        }
        processedLines.push(`<li style="display: flex; align-items: flex-start; gap: 10px; margin: 8px 0; color: #374151; line-height: 1.6;"><span style="width: 22px; height: 22px; border-radius: 50%; background: #132163; color: white; font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${orderedCounter}</span><span>${orderedMatch[1]}</span></li>`)
        orderedCounter++
      } else {
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

    if (inUnorderedList) processedLines.push('</ul>')
    if (inOrderedList) processedLines.push('</ol>')

    html = processedLines.join('\n')

    // Paragraphs
    const finalLines = html.split('\n')
    const finalProcessed = []
    let inParagraph = false

    for (let i = 0; i < finalLines.length; i++) {
      const line = finalLines[i]
      const trimmed = line.trim()

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
          finalProcessed.push('<p style="color: #374151; line-height: 1.7; margin: 14px 0;">')
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
      className="document-content"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  )
}
