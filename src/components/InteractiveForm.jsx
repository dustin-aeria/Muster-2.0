/**
 * InteractiveForm.jsx
 * Renders markdown form with SAME styling as MarkdownPreview
 * but empty cells and checkboxes become interactive
 */

import { useState, useRef, useEffect } from 'react'
import { Check } from 'lucide-react'

// Check if a cell should be editable (empty or checkbox placeholder)
function isEditableCell(content) {
  const trimmed = content.trim()
  if (!trimmed) return { editable: true, type: 'text' }
  if (trimmed === '☐' || trimmed === '[ ]') return { editable: true, type: 'checkbox', checked: false }
  if (trimmed === '☑' || trimmed === '[x]' || trimmed === '[X]') return { editable: true, type: 'checkbox', checked: true }
  if (trimmed.match(/^_{2,}$/)) return { editable: true, type: 'text' }
  if (trimmed.match(/^\.{2,}$/)) return { editable: true, type: 'text' }
  return { editable: false }
}

// Get field type from header context
function getFieldType(headerLabel) {
  const label = headerLabel.toLowerCase()
  if (label.includes('date')) return 'date'
  if (label.includes('time') && !label.includes('datetime')) return 'time'
  if (label.includes('signature')) return 'signature'
  return 'text'
}

// Editable text input - styled to look inline
function InlineInput({ value, onChange, type, placeholder, disabled }) {
  const inputRef = useRef(null)

  const inputType = type === 'date' ? 'date' : type === 'time' ? 'time' : 'text'

  return (
    <input
      ref={inputRef}
      type={inputType}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '4px 8px',
        border: 'none',
        borderBottom: value ? '2px solid #22c55e' : '2px dashed #9ca3af',
        background: value ? '#f0fdf4' : '#fafafa',
        color: '#374151',
        fontSize: '14px',
        fontFamily: type === 'signature' ? "'Brush Script MT', cursive" : 'inherit',
        fontStyle: type === 'signature' ? 'italic' : 'normal',
        outline: 'none',
        transition: 'all 0.2s',
        minHeight: '32px'
      }}
      onFocus={(e) => {
        e.target.style.borderBottom = '2px solid #131CD0'
        e.target.style.background = '#eff6ff'
      }}
      onBlur={(e) => {
        e.target.style.borderBottom = value ? '2px solid #22c55e' : '2px dashed #9ca3af'
        e.target.style.background = value ? '#f0fdf4' : '#fafafa'
      }}
    />
  )
}

// Checkbox toggle - clickable Yes/No
function InlineCheckbox({ checked, onChange, disabled }) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        width: '100%',
        padding: '6px 12px',
        border: 'none',
        borderRadius: '6px',
        background: checked ? '#22c55e' : '#f3f4f6',
        color: checked ? 'white' : '#6b7280',
        fontSize: '14px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        minHeight: '32px'
      }}
    >
      {checked ? (
        <>
          <Check style={{ width: 16, height: 16 }} />
          <span>Yes</span>
        </>
      ) : (
        <span>Click to confirm</span>
      )}
    </button>
  )
}

export default function InteractiveForm({ content, values = {}, onChange, disabled = false }) {
  const containerRef = useRef(null)

  if (!content) {
    return <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>No content</p>
  }

  const handleChange = (fieldId, value) => {
    onChange({ ...values, [fieldId]: value })
  }

  // Parse and render - matching MarkdownPreview exactly
  const renderContent = () => {
    let html = content.replace(/\r\n/g, '\n')

    // We'll process tables specially with React, but render other markdown as HTML
    const elements = []
    let lastIndex = 0
    let tableIndex = 0

    // Find tables
    const tableRegex = /\|(.+)\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n((?:\|.+\|\n?)+)/g
    let match

    while ((match = tableRegex.exec(content)) !== null) {
      // Render content before this table as HTML
      if (match.index > lastIndex) {
        const beforeText = content.slice(lastIndex, match.index)
        elements.push(
          <div
            key={`html-${lastIndex}`}
            dangerouslySetInnerHTML={{ __html: parseNonTableMarkdown(beforeText) }}
          />
        )
      }

      // Render table with interactive cells
      const headerRow = match[1]
      const bodyRows = match[2].trim()
      const currentTableIndex = tableIndex++

      const headers = headerRow.split('|').filter(h => h.trim()).map(h => h.trim())
      const rows = bodyRows.split('\n').map(row =>
        row.split('|').filter((c, i, arr) => i > 0 && i < arr.length - 1).map(c => c.trim())
      )

      elements.push(
        <div key={`table-${currentTableIndex}`} style={{ margin: '24px 0', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#132163' }}>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      border: '1px solid #132163'
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} style={{ background: rowIndex % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  {row.map((cell, colIndex) => {
                    const cellInfo = isEditableCell(cell)
                    const fieldId = `field_${currentTableIndex}_${rowIndex}_${colIndex}`
                    const headerLabel = headers[colIndex] || ''
                    const fieldType = getFieldType(headerLabel)

                    return (
                      <td
                        key={colIndex}
                        style={{
                          padding: cellInfo.editable ? '8px 12px' : '10px 16px',
                          border: '1px solid #e2e8f0',
                          color: '#374151',
                          fontWeight: colIndex === 0 ? 500 : 400,
                          verticalAlign: 'middle'
                        }}
                      >
                        {cellInfo.editable ? (
                          cellInfo.type === 'checkbox' ? (
                            <InlineCheckbox
                              checked={values[fieldId] ?? cellInfo.checked}
                              onChange={(val) => handleChange(fieldId, val)}
                              disabled={disabled}
                            />
                          ) : (
                            <InlineInput
                              value={values[fieldId] || ''}
                              onChange={(val) => handleChange(fieldId, val)}
                              type={fieldType}
                              placeholder={`Enter ${headerLabel.toLowerCase() || 'value'}`}
                              disabled={disabled}
                            />
                          )
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(cell) }} />
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

    // Render remaining content
    if (lastIndex < content.length) {
      const afterText = content.slice(lastIndex)
      elements.push(
        <div
          key={`html-${lastIndex}`}
          dangerouslySetInnerHTML={{ __html: parseNonTableMarkdown(afterText) }}
        />
      )
    }

    return elements
  }

  return (
    <div
      ref={containerRef}
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {renderContent()}
    </div>
  )
}

// Parse inline markdown (bold, italic, etc)
function parseInlineMarkdown(text) {
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight: 600; color: #1f2937;">$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  html = html.replace(/`([^`]+)`/g, '<code style="background: #f1f5f9; color: #132163; padding: 2px 6px; border-radius: 4px; font-size: 13px;">$1</code>')

  return html
}

// Parse non-table markdown content
function parseNonTableMarkdown(md) {
  let html = md.replace(/\r\n/g, '\n')

  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre style="background: #1a1a2e; color: #e2e8f0; border-radius: 6px; padding: 16px; overflow-x: auto; margin: 20px 0; font-size: 13px; font-family: 'Consolas', monospace; border-left: 3px solid #131CD0;"><code>${code.trim()}</code></pre>`
  })

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code style="background: #f1f5f9; color: #132163; padding: 2px 6px; border-radius: 4px; font-size: 13px; font-family: monospace;">$1</code>')

  // Headers
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

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote style="border-left: 3px solid #131CD0; padding-left: 16px; margin: 16px 0; color: #4b5563; font-style: italic;">$1</blockquote>')

  // Lists
  const lines = html.split('\n')
  const result = []
  let inUl = false, inOl = false, olCounter = 1

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed.startsWith('<') || !trimmed) {
      if (inUl) { result.push('</ul>'); inUl = false }
      if (inOl) { result.push('</ol>'); inOl = false; olCounter = 1 }
      result.push(line)
      continue
    }

    const ulMatch = trimmed.match(/^[\-\*]\s+(.+)$/)
    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/)

    if (ulMatch) {
      if (inOl) { result.push('</ol>'); inOl = false; olCounter = 1 }
      if (!inUl) { result.push('<ul style="margin: 16px 0; padding-left: 0; list-style: none;">'); inUl = true }
      result.push(`<li style="display: flex; align-items: flex-start; gap: 10px; margin: 8px 0; color: #374151; line-height: 1.6;"><span style="width: 6px; height: 6px; margin-top: 8px; border-radius: 50%; background: #131CD0; flex-shrink: 0;"></span><span>${ulMatch[1]}</span></li>`)
    } else if (olMatch) {
      if (inUl) { result.push('</ul>'); inUl = false }
      if (!inOl) { result.push('<ol style="margin: 16px 0; padding-left: 0; list-style: none;">'); inOl = true }
      result.push(`<li style="display: flex; align-items: flex-start; gap: 10px; margin: 8px 0; color: #374151; line-height: 1.6;"><span style="width: 22px; height: 22px; border-radius: 50%; background: #132163; color: white; font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${olCounter++}</span><span>${olMatch[1]}</span></li>`)
    } else {
      if (inUl) { result.push('</ul>'); inUl = false }
      if (inOl) { result.push('</ol>'); inOl = false; olCounter = 1 }
      if (trimmed) {
        result.push(`<p style="color: #374151; line-height: 1.7; margin: 14px 0;">${line}</p>`)
      }
    }
  }

  if (inUl) result.push('</ul>')
  if (inOl) result.push('</ol>')

  return result.join('\n')
}

// Export helper to get field info for progress tracking
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
      row.split('|').filter((c, i, arr) => i > 0 && i < arr.length - 1).map(c => c.trim())
    )

    rows.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellInfo = isEditableCell(cell)
        if (cellInfo.editable) {
          fields.push({
            id: `field_${tableIndex}_${rowIndex}_${colIndex}`,
            label: row[0] || headers[colIndex] || '',
            type: cellInfo.type
          })
        }
      })
    })

    tableIndex++
  }

  return fields
}
