/**
 * InteractiveForm.jsx
 * Renders a markdown form with inline editable fields
 * The form preview IS the fillable form - no separate field list
 */

import { useState, useEffect, useRef } from 'react'
import { Check, Calendar, PenLine } from 'lucide-react'

// Detect if a cell should be editable
function isEditableCell(content, headerLabel) {
  const trimmed = content.trim()
  const labelLower = headerLabel.toLowerCase()

  // Empty cells are editable
  if (!trimmed) return true

  // Checkbox placeholders
  if (trimmed === '☐' || trimmed === '☑' || trimmed === '[ ]' || trimmed === '[x]') return true

  // Cells with just placeholder text patterns
  if (trimmed.match(/^_{2,}$/)) return true // _____ underscores
  if (trimmed.match(/^\.{2,}$/)) return true // ..... dots

  return false
}

// Determine field type from context
function getFieldType(headerLabel, cellContent) {
  const label = headerLabel.toLowerCase()
  const content = cellContent.trim()

  // Checkbox
  if (content === '☐' || content === '☑' || content === '[ ]' || content === '[x]') {
    return 'checkbox'
  }

  // Signature
  if (label.includes('signature')) return 'signature'

  // Date
  if (label.includes('date')) return 'date'

  // Time
  if (label.includes('time') && !label.includes('datetime')) return 'time'

  return 'text'
}

// Generate a unique field ID
function generateFieldId(tableIndex, rowIndex, colIndex) {
  return `field_${tableIndex}_${rowIndex}_${colIndex}`
}

// Inline editable cell component
function EditableCell({ fieldId, type, value, onChange, placeholder, disabled }) {
  const inputRef = useRef(null)

  if (type === 'checkbox') {
    const isChecked = value === true || value === '☑' || value === '[x]'
    return (
      <button
        type="button"
        onClick={() => !disabled && onChange(!isChecked)}
        disabled={disabled}
        className={`
          w-full h-full min-h-[40px] flex items-center justify-center gap-2 px-2 py-1
          rounded transition-all cursor-pointer
          ${isChecked
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-50 text-gray-400 hover:bg-green-50 hover:text-green-600'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <span className={`
          w-5 h-5 rounded border-2 flex items-center justify-center
          ${isChecked ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 bg-white'}
        `}>
          {isChecked && <Check className="w-3 h-3" />}
        </span>
        <span className="text-sm font-medium">
          {isChecked ? 'Yes' : 'No'}
        </span>
      </button>
    )
  }

  if (type === 'signature') {
    return (
      <div className="w-full">
        <input
          ref={inputRef}
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Type full name to sign"
          className={`
            w-full px-3 py-2 text-lg italic bg-transparent border-b-2 border-dashed
            focus:outline-none focus:border-[#131CD0] transition-colors
            ${value ? 'border-green-500' : 'border-gray-300'}
            ${disabled ? 'opacity-50' : ''}
          `}
          style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
        />
        {value && (
          <div className="flex items-center gap-1 mt-1 text-xs text-green-600">
            <Check className="w-3 h-3" />
            Signed {new Date().toLocaleDateString()}
          </div>
        )}
      </div>
    )
  }

  if (type === 'date') {
    return (
      <div className="relative w-full">
        <input
          ref={inputRef}
          type="date"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-full px-3 py-2 bg-transparent border-b-2 border-dashed
            focus:outline-none focus:border-[#131CD0] transition-colors
            ${value ? 'border-green-500' : 'border-gray-300'}
            ${disabled ? 'opacity-50' : ''}
          `}
        />
      </div>
    )
  }

  if (type === 'time') {
    return (
      <input
        ref={inputRef}
        type="time"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`
          w-full px-3 py-2 bg-transparent border-b-2 border-dashed
          focus:outline-none focus:border-[#131CD0] transition-colors
          ${value ? 'border-green-500' : 'border-gray-300'}
          ${disabled ? 'opacity-50' : ''}
        `}
      />
    )
  }

  // Default text input
  return (
    <input
      ref={inputRef}
      type="text"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder || 'Enter value...'}
      className={`
        w-full px-3 py-2 bg-transparent border-b-2 border-dashed
        focus:outline-none focus:border-[#131CD0] transition-colors placeholder:text-gray-400
        ${value ? 'border-green-500' : 'border-gray-300'}
        ${disabled ? 'opacity-50' : ''}
      `}
    />
  )
}

// Parse and render interactive markdown
export default function InteractiveForm({ content, values, onChange, disabled = false }) {
  if (!content) {
    return <p className="text-gray-400 italic">No content</p>
  }

  const handleFieldChange = (fieldId, newValue) => {
    onChange({
      ...values,
      [fieldId]: newValue
    })
  }

  // Track table index for field IDs
  let tableIndex = 0

  const parseMarkdown = (md) => {
    let html = md.replace(/\r\n/g, '\n')

    // Escape HTML
    html = html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-4 text-sm font-mono"><code>${code.trim()}</code></pre>`
    })

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-[#132163] px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')

    // Headers
    html = html.replace(/^#### (.+)$/gm, '<h4 class="text-base font-semibold text-[#132163] mt-6 mb-3">$1</h4>')
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-[#132163] mt-8 mb-3">$1</h3>')
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-[#132163] mt-8 mb-4 pb-2 border-b-2 border-[#131CD0]">$1</h2>')
    html = html.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-[#132163] mb-5 pb-3 border-b-3 border-[#131CD0]">$1</h1>')

    // Bold and italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#131CD0] underline hover:text-[#0f18a8]" target="_blank" rel="noopener">$1</a>')

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr class="border-0 h-px bg-gray-200 my-8" />')

    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote class="border-l-4 border-[#131CD0] pl-4 my-4 text-gray-600 italic">$1</blockquote>')

    return html
  }

  // Process content, handling tables specially
  const processContent = () => {
    const elements = []
    let remaining = content

    // Table regex
    const tableRegex = /\|(.+)\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n((?:\|.+\|\n?)+)/g
    let lastIndex = 0
    let match

    while ((match = tableRegex.exec(content)) !== null) {
      // Add content before this table
      if (match.index > lastIndex) {
        const beforeContent = content.slice(lastIndex, match.index)
        elements.push(
          <div
            key={`text-${lastIndex}`}
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(beforeContent) }}
          />
        )
      }

      // Process table
      const headerRow = match[1]
      const bodyRows = match[2].trim()
      const currentTableIndex = tableIndex++

      const headers = headerRow.split('|').filter(h => h.trim()).map(h => h.trim())
      const rows = bodyRows.split('\n').map(row =>
        row.split('|').filter(c => c !== '').map(c => c.trim())
      )

      elements.push(
        <div key={`table-${currentTableIndex}`} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#132163]">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-white font-semibold text-sm uppercase tracking-wide border border-[#132163]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  {row.map((cell, colIndex) => {
                    const headerLabel = headers[colIndex] || ''
                    const isEditable = colIndex > 0 && isEditableCell(cell, headerLabel)
                    const fieldId = generateFieldId(currentTableIndex, rowIndex, colIndex)
                    const fieldType = getFieldType(headerLabel, cell)

                    return (
                      <td
                        key={colIndex}
                        className={`
                          px-4 py-2 border border-gray-200
                          ${colIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-700'}
                          ${isEditable ? 'bg-blue-50/30' : ''}
                        `}
                      >
                        {isEditable ? (
                          <EditableCell
                            fieldId={fieldId}
                            type={fieldType}
                            value={values[fieldId]}
                            onChange={(val) => handleFieldChange(fieldId, val)}
                            placeholder={`Enter ${headerLabel.toLowerCase()}`}
                            disabled={disabled}
                          />
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: parseMarkdown(cell) }} />
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

      lastIndex = match.index + match[0].length
    }

    // Add remaining content after last table
    if (lastIndex < content.length) {
      const afterContent = content.slice(lastIndex)
      elements.push(
        <div
          key={`text-${lastIndex}`}
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(afterContent) }}
        />
      )
    }

    return elements
  }

  // Process lists in prose content (run after initial render)
  const processLists = (html) => {
    const lines = html.split('\n')
    const result = []
    let inUl = false
    let inOl = false

    for (const line of lines) {
      const trimmed = line.trim()

      if (trimmed.startsWith('<') && !trimmed.startsWith('<li')) {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (inOl) { result.push('</ol>'); inOl = false }
        result.push(line)
        continue
      }

      const ulMatch = trimmed.match(/^[\-\*]\s+(.+)$/)
      const olMatch = trimmed.match(/^\d+\.\s+(.+)$/)

      if (ulMatch) {
        if (inOl) { result.push('</ol>'); inOl = false }
        if (!inUl) { result.push('<ul class="my-4 space-y-2">'); inUl = true }
        result.push(`<li class="flex items-start gap-3 text-gray-700"><span class="w-2 h-2 mt-2 rounded-full bg-[#131CD0] flex-shrink-0"></span><span>${ulMatch[1]}</span></li>`)
      } else if (olMatch) {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (!inOl) { result.push('<ol class="my-4 space-y-2 counter-reset: item">'); inOl = true }
        result.push(`<li class="flex items-start gap-3 text-gray-700"><span class="w-6 h-6 rounded-full bg-[#132163] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">${result.filter(r => r.includes('<li')).length + 1}</span><span>${olMatch[1]}</span></li>`)
      } else {
        if (inUl) { result.push('</ul>'); inUl = false }
        if (inOl) { result.push('</ol>'); inOl = false }
        if (trimmed && !trimmed.startsWith('<')) {
          result.push(`<p class="text-gray-700 leading-relaxed my-3">${line}</p>`)
        } else {
          result.push(line)
        }
      }
    }

    if (inUl) result.push('</ul>')
    if (inOl) result.push('</ol>')

    return result.join('\n')
  }

  return (
    <div
      className="interactive-form font-sans"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
    >
      {processContent()}
    </div>
  )
}

// Helper to get all field values for submission
export function getFieldsFromContent(content) {
  const fields = []
  let tableIndex = 0

  const tableRegex = /\|(.+)\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n((?:\|.+\|\n?)+)/g
  let match

  while ((match = tableRegex.exec(content)) !== null) {
    const headerRow = match[1]
    const bodyRows = match[2].trim()

    const headers = headerRow.split('|').filter(h => h.trim()).map(h => h.trim())
    const rows = bodyRows.split('\n').map(row =>
      row.split('|').filter(c => c !== '').map(c => c.trim())
    )

    rows.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (colIndex > 0) {
          const headerLabel = headers[colIndex] || ''
          const isEditable = isEditableCell(cell, headerLabel)

          if (isEditable) {
            fields.push({
              id: generateFieldId(tableIndex, rowIndex, colIndex),
              label: row[0] || headerLabel,
              type: getFieldType(headerLabel, cell),
              required: false
            })
          }
        }
      })
    })

    tableIndex++
  }

  return fields
}
