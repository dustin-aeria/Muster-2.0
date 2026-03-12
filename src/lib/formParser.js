/**
 * formParser.js
 * Parses markdown form content into structured fillable fields
 * and generates filled markdown from field values
 */

/**
 * Field types detected from markdown
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
 * Generate a unique field ID from label
 */
function generateFieldId(label, index) {
  const base = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .substring(0, 30)
  return `${base}_${index}`
}

/**
 * Detect field type based on label and value patterns
 */
function detectFieldType(label, value) {
  const labelLower = label.toLowerCase()
  const valueLower = (value || '').toLowerCase()

  // Checkbox detection
  if (valueLower.includes('☐') || valueLower.includes('☑') || valueLower.includes('[ ]') || valueLower.includes('[x]')) {
    return FIELD_TYPES.CHECKBOX
  }

  // Signature detection
  if (labelLower.includes('signature')) {
    return FIELD_TYPES.SIGNATURE
  }

  // Date detection
  if (labelLower.includes('date') || /\d{4}-\d{2}-\d{2}/.test(value)) {
    return FIELD_TYPES.DATE
  }

  // Time detection
  if (labelLower.includes('time') && !labelLower.includes('datetime')) {
    return FIELD_TYPES.TIME
  }

  // Email detection
  if (labelLower.includes('email')) {
    return FIELD_TYPES.EMAIL
  }

  // Phone detection
  if (labelLower.includes('phone') || labelLower.includes('tel') || labelLower.includes('mobile')) {
    return FIELD_TYPES.PHONE
  }

  // Number detection
  if (labelLower.includes('quantity') || labelLower.includes('count') || labelLower.includes('number of') || labelLower.includes('amount')) {
    return FIELD_TYPES.NUMBER
  }

  // Textarea for longer fields
  if (labelLower.includes('description') || labelLower.includes('notes') || labelLower.includes('comments') || labelLower.includes('details')) {
    return FIELD_TYPES.TEXTAREA
  }

  // Default to text
  return FIELD_TYPES.TEXT
}

/**
 * Parse a markdown table into field definitions
 */
function parseTable(tableContent, startIndex) {
  const fields = []
  const lines = tableContent.trim().split('\n')

  if (lines.length < 2) return fields

  // Parse header row
  const headerRow = lines[0]
  const headers = headerRow.split('|').map(h => h.trim()).filter(h => h)

  // Skip separator row (line 1)
  // Parse data rows
  for (let i = 2; i < lines.length; i++) {
    const row = lines[i]
    const cells = row.split('|').map(c => c.trim()).filter(c => c !== '')

    if (cells.length >= 2) {
      const label = cells[0]
      const value = cells[1] || ''

      // Skip header-like rows
      if (label.toLowerCase() === 'field' || label.toLowerCase() === 'item') continue

      const fieldType = detectFieldType(label, value)
      const fieldId = generateFieldId(label, startIndex + fields.length)

      fields.push({
        id: fieldId,
        label: label,
        type: fieldType,
        value: fieldType === FIELD_TYPES.CHECKBOX ? (value.includes('☑') || value.includes('[x]')) : value.trim(),
        required: label.includes('*'),
        placeholder: `Enter ${label.toLowerCase()}`,
        tableRow: i,
        originalValue: value
      })
    }
  }

  return fields
}

/**
 * Parse checkbox items from content
 */
function parseCheckboxes(content, startIndex) {
  const fields = []
  const checkboxRegex = /^[\s]*[-*]?\s*[☐☑\[\]xX\s]*\s*(.+)$/gm
  let match

  while ((match = checkboxRegex.exec(content)) !== null) {
    const line = match[0]
    const label = match[1].trim()

    // Check if it's actually a checkbox line
    if (line.includes('☐') || line.includes('☑') || /\[\s*[xX]?\s*\]/.test(line)) {
      const isChecked = line.includes('☑') || /\[\s*[xX]\s*\]/.test(line)
      const fieldId = generateFieldId(label, startIndex + fields.length)

      fields.push({
        id: fieldId,
        label: label,
        type: FIELD_TYPES.CHECKBOX,
        value: isChecked,
        required: false,
        lineIndex: match.index
      })
    }
  }

  return fields
}

/**
 * Main function to parse markdown form content into structured fields
 * @param {string} markdownContent - The markdown content of the form
 * @returns {Array} Array of field objects
 */
export function parseFormToFields(markdownContent) {
  if (!markdownContent) return []

  const fields = []
  let fieldIndex = 0

  // Find all tables in the content
  const tableRegex = /\|[^\n]+\|\n\|[\s:-]+\|\n(?:\|[^\n]+\|\n?)*/g
  let tableMatch

  while ((tableMatch = tableRegex.exec(markdownContent)) !== null) {
    const tableFields = parseTable(tableMatch[0], fieldIndex)
    fields.push(...tableFields)
    fieldIndex += tableFields.length
  }

  // Find standalone checkboxes (outside tables)
  const nonTableContent = markdownContent.replace(tableRegex, '')
  const checkboxFields = parseCheckboxes(nonTableContent, fieldIndex)
  fields.push(...checkboxFields)

  return fields
}

/**
 * Generate filled markdown from template and field values
 * @param {string} template - Original markdown template
 * @param {Object} fieldValues - Object mapping field IDs to values
 * @returns {string} Filled markdown content
 */
export function generateFilledMarkdown(template, fieldValues) {
  if (!template || !fieldValues) return template

  let content = template

  // Replace table cell values
  const tableRegex = /(\|[^\n]+\|\n\|[\s:-]+\|\n)((?:\|[^\n]+\|\n?)*)/g
  content = content.replace(tableRegex, (match, header, body) => {
    const bodyLines = body.trim().split('\n')
    const filledLines = bodyLines.map(line => {
      const cells = line.split('|').filter(c => c !== '')
      if (cells.length >= 2) {
        const label = cells[0].trim()
        const fieldId = Object.keys(fieldValues).find(id => {
          const fieldLabel = id.replace(/_\d+$/, '').replace(/_/g, ' ')
          return label.toLowerCase().replace(/[^a-z0-9]/g, '') === fieldLabel.replace(/[^a-z0-9]/g, '')
        })

        if (fieldId && fieldValues[fieldId] !== undefined) {
          const value = fieldValues[fieldId]
          const displayValue = typeof value === 'boolean'
            ? (value ? '☑' : '☐')
            : value || ''

          // Reconstruct the row with the filled value
          cells[1] = ` ${displayValue} `
          return '|' + cells.join('|') + '|'
        }
      }
      return line
    })
    return header + filledLines.join('\n') + '\n'
  })

  // Replace standalone checkboxes
  content = content.replace(/[☐☑](\s*[^\n]+)/g, (match, label) => {
    const fieldId = Object.keys(fieldValues).find(id => {
      const fieldLabel = id.replace(/_\d+$/, '').replace(/_/g, ' ')
      return label.trim().toLowerCase().includes(fieldLabel)
    })

    if (fieldId !== undefined && typeof fieldValues[fieldId] === 'boolean') {
      return (fieldValues[fieldId] ? '☑' : '☐') + label
    }
    return match
  })

  return content
}

/**
 * Validate field values against field definitions
 * @param {Array} fields - Field definitions
 * @param {Object} values - Field values
 * @returns {Object} { valid: boolean, errors: { fieldId: errorMessage } }
 */
export function validateFieldValues(fields, values) {
  const errors = {}

  for (const field of fields) {
    const value = values[field.id]

    if (field.required) {
      if (value === undefined || value === null || value === '') {
        errors[field.id] = `${field.label} is required`
        continue
      }
    }

    // Type-specific validation
    if (value) {
      switch (field.type) {
        case FIELD_TYPES.EMAIL:
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errors[field.id] = 'Invalid email format'
          }
          break
        case FIELD_TYPES.DATE:
          if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            errors[field.id] = 'Invalid date format (YYYY-MM-DD)'
          }
          break
        case FIELD_TYPES.PHONE:
          if (!/^[\d\s\-\+\(\)]+$/.test(value)) {
            errors[field.id] = 'Invalid phone format'
          }
          break
        case FIELD_TYPES.NUMBER:
          if (isNaN(Number(value))) {
            errors[field.id] = 'Must be a number'
          }
          break
      }
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Extract form metadata from markdown content
 * @param {string} content - Markdown content
 * @returns {Object} Metadata like form number, version, effective date
 */
export function extractFormMetadata(content) {
  const metadata = {}

  // Form Number
  const formNumMatch = content.match(/\*\*Form Number:\*\*\s*([^\n*]+)/i)
  if (formNumMatch) metadata.formNumber = formNumMatch[1].trim()

  // Version
  const versionMatch = content.match(/\*\*Version:\*\*\s*([^\n*]+)/i)
  if (versionMatch) metadata.version = versionMatch[1].trim()

  // Effective Date
  const effectiveDateMatch = content.match(/\*\*Effective Date:\*\*\s*([^\n*]+)/i)
  if (effectiveDateMatch) metadata.effectiveDate = effectiveDateMatch[1].trim()

  // Title (first h1)
  const titleMatch = content.match(/^#\s+(.+)$/m)
  if (titleMatch) metadata.title = titleMatch[1].trim()

  return metadata
}
