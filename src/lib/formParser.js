/**
 * formParser.js
 * Utilities for parsing markdown forms and generating filled content
 */

/**
 * Field types
 */
export const FIELD_TYPES = {
  TEXT: 'text',
  DATE: 'date',
  CHECKBOX: 'checkbox',
  SIGNATURE: 'signature',
  SELECT: 'select',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  TIME: 'time',
  EMAIL: 'email',
  PHONE: 'phone'
}

/**
 * Check if a cell should be editable
 */
function isEditableCell(content) {
  const trimmed = content.trim()

  // Empty cells
  if (!trimmed) return true

  // Checkbox placeholders
  if (trimmed === '☐' || trimmed === '☑' || trimmed === '[ ]' || trimmed === '[x]') return true

  // Placeholder patterns
  if (trimmed.match(/^_{2,}$/)) return true
  if (trimmed.match(/^\.{2,}$/)) return true

  return false
}

/**
 * Generate filled markdown from template and field values
 * Field IDs are in format: field_tableIndex_rowIndex_colIndex
 *
 * @param {string} template - Original markdown template
 * @param {Object} fieldValues - Object mapping field IDs to values
 * @returns {string} Filled markdown content
 */
export function generateFilledMarkdown(template, fieldValues) {
  if (!template || !fieldValues) return template

  let content = template
  let tableIndex = 0

  // Process tables
  const tableRegex = /(\|.+\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n)((?:\|.+\|\n?)+)/g

  content = content.replace(tableRegex, (match, header, body) => {
    const currentTableIndex = tableIndex++

    const bodyLines = body.trim().split('\n')
    const filledLines = bodyLines.map((line, rowIndex) => {
      const cells = line.split('|')

      // Reconstruct the row, filling in values for editable cells
      const filledCells = cells.map((cell, cellIndex) => {
        // Skip empty boundary cells (before first | and after last |)
        if (cellIndex === 0 || cellIndex === cells.length - 1) return cell

        const colIndex = cellIndex - 1 // Adjust for leading empty cell
        const trimmedCell = cell.trim()

        // Only fill cells that are editable (non-label cells)
        if (colIndex > 0 && isEditableCell(trimmedCell)) {
          const fieldId = `field_${currentTableIndex}_${rowIndex}_${colIndex}`
          const value = fieldValues[fieldId]

          if (value !== undefined && value !== null && value !== '') {
            // Handle checkbox values
            if (typeof value === 'boolean') {
              return ` ${value ? '☑ Yes' : '☐ No'} `
            }
            return ` ${value} `
          }
        }

        return cell
      })

      return filledCells.join('|')
    })

    return header + filledLines.join('\n') + '\n'
  })

  return content
}

/**
 * Parse markdown form content into structured fields (legacy support)
 * @param {string} markdownContent - The markdown content of the form
 * @returns {Array} Array of field objects
 */
export function parseFormToFields(markdownContent) {
  if (!markdownContent) return []

  const fields = []
  let tableIndex = 0

  const tableRegex = /\|(.+)\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n((?:\|.+\|\n?)+)/g
  let match

  while ((match = tableRegex.exec(markdownContent)) !== null) {
    const headerRow = match[1]
    const bodyRows = match[2].trim()

    const headers = headerRow.split('|').filter(h => h.trim()).map(h => h.trim())
    const rows = bodyRows.split('\n').map(row =>
      row.split('|').filter(c => c !== '').map(c => c.trim())
    )

    rows.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (colIndex > 0 && isEditableCell(cell)) {
          const headerLabel = headers[colIndex] || ''
          const rowLabel = row[0] || ''

          fields.push({
            id: `field_${tableIndex}_${rowIndex}_${colIndex}`,
            label: rowLabel || headerLabel,
            type: detectFieldType(headerLabel, cell),
            required: false
          })
        }
      })
    })

    tableIndex++
  }

  return fields
}

/**
 * Detect field type from label and value
 */
function detectFieldType(label, value) {
  const labelLower = label.toLowerCase()
  const valueTrimmed = (value || '').trim()

  // Checkbox
  if (valueTrimmed === '☐' || valueTrimmed === '☑' || valueTrimmed === '[ ]' || valueTrimmed === '[x]') {
    return FIELD_TYPES.CHECKBOX
  }

  // Signature
  if (labelLower.includes('signature')) return FIELD_TYPES.SIGNATURE

  // Date
  if (labelLower.includes('date')) return FIELD_TYPES.DATE

  // Time
  if (labelLower.includes('time') && !labelLower.includes('datetime')) return FIELD_TYPES.TIME

  // Email
  if (labelLower.includes('email')) return FIELD_TYPES.EMAIL

  // Phone
  if (labelLower.includes('phone') || labelLower.includes('tel')) return FIELD_TYPES.PHONE

  return FIELD_TYPES.TEXT
}

/**
 * Validate field values
 */
export function validateFieldValues(fields, values) {
  const errors = {}

  for (const field of fields) {
    const value = values[field.id]

    if (field.required) {
      if (value === undefined || value === null || value === '') {
        errors[field.id] = `${field.label} is required`
      }
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  }
}
