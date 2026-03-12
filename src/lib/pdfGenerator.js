/**
 * pdfGenerator.js
 * Client-side PDF generation using browser print functionality
 */

import aeriaLogoFull from '../assets/aeria-logo-full.png'

/**
 * Convert markdown to HTML for print
 * @param {string} markdown - Markdown content
 * @returns {string} HTML string
 */
function markdownToHtml(markdown) {
  if (!markdown) return ''

  let html = markdown
    .replace(/\r\n/g, '\n')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Process tables first
  const tableRegex = /\|(.+)\|\n\|[\s]*[:\-]+[\s\-:|]+\|\n((?:\|.+\|\n?)+)/g
  html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
    const headers = headerRow.split('|').filter(h => h.trim())
    const rows = bodyRows.trim().split('\n').map(row =>
      row.split('|').filter(c => c !== '')
    )

    let table = '<table><thead><tr>'
    headers.forEach(h => {
      table += '<th>' + h.trim() + '</th>'
    })
    table += '</tr></thead><tbody>'
    rows.forEach(row => {
      table += '<tr>'
      row.forEach(cell => {
        table += '<td>' + cell.trim() + '</td>'
      })
      table += '</tr>'
    })
    table += '</tbody></table>'
    return table
  })

  // Process other markdown elements
  html = html
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

  // Process checkboxes
  html = html.replace(/☑/g, '<span class="checkbox checked">☑</span>')
  html = html.replace(/☐/g, '<span class="checkbox">☐</span>')

  // Process lists
  const lines = html.split('\n')
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

  return result.join('\n')
}

/**
 * Generate print-ready HTML document
 * @param {Object} options - Document options
 * @returns {string} Complete HTML document
 */
function generatePrintHtml(options) {
  const {
    title,
    docNumber,
    version = '1.0',
    category,
    content,
    submittedBy,
    submittedAt
  } = options

  const contentHtml = markdownToHtml(content)

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            line-height: 1.7;
            color: #1f2937;
          }
          .doc-header {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding-bottom: 24px;
            border-bottom: 3px solid #131CD0;
            margin-bottom: 32px;
          }
          .doc-header img {
            height: 50px;
            width: auto;
          }
          .doc-header-content { flex: 1; }
          .doc-number {
            color: #131CD0;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 4px;
          }
          .doc-title {
            font-size: 26px;
            font-weight: 700;
            color: #132163;
            margin-bottom: 8px;
          }
          .doc-meta {
            color: #6b7280;
            font-size: 13px;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          .submission-info {
            background: #f3f4f6;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
            font-size: 14px;
          }
          .submission-info strong { color: #374151; }
          h1 {
            font-size: 24px;
            font-weight: 700;
            color: #132163;
            margin: 32px 0 16px;
            padding-bottom: 12px;
            border-bottom: 3px solid #131CD0;
          }
          h2 {
            font-size: 20px;
            font-weight: 700;
            color: #132163;
            margin: 28px 0 12px;
            padding-bottom: 8px;
            border-bottom: 2px solid #131CD0;
          }
          h3 {
            font-size: 17px;
            font-weight: 600;
            color: #132163;
            margin: 24px 0 10px;
          }
          h4 {
            font-size: 15px;
            font-weight: 600;
            color: #374151;
            margin: 20px 0 8px;
          }
          p { margin: 12px 0; color: #374151; }
          ul, ol { margin: 16px 0; padding-left: 0; list-style: none; }
          li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin: 8px 0;
            color: #374151;
          }
          ul li::before {
            content: '';
            width: 6px;
            height: 6px;
            margin-top: 8px;
            border-radius: 50%;
            background: #131CD0;
            flex-shrink: 0;
          }
          ol { counter-reset: list-counter; }
          ol li { counter-increment: list-counter; }
          ol li::before {
            content: counter(list-counter);
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #132163;
            color: white;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 14px;
          }
          th {
            background: #132163;
            color: white;
            padding: 12px 16px;
            text-align: left;
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border: 1px solid #132163;
          }
          td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            color: #374151;
            min-height: 40px;
          }
          tr:nth-child(even) { background: #f8fafc; }
          hr {
            border: none;
            height: 1px;
            background: #e5e7eb;
            margin: 32px 0;
          }
          blockquote {
            border-left: 3px solid #131CD0;
            padding-left: 16px;
            margin: 20px 0;
            color: #4b5563;
            font-style: italic;
          }
          code {
            background: #f3f4f6;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.9em;
            font-family: 'Consolas', monospace;
          }
          pre {
            background: #f3f4f6;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 16px 0;
          }
          pre code {
            background: none;
            padding: 0;
          }
          .checkbox {
            display: inline-block;
            font-size: 1.2em;
            margin-right: 4px;
          }
          .checkbox.checked { color: #131CD0; }
          .doc-footer {
            margin-top: 48px;
            padding-top: 24px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #9ca3af;
            font-size: 12px;
          }
          @media print {
            body { padding: 20px; }
            table { page-break-inside: avoid; }
            .doc-header { page-break-after: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="doc-header">
          <img src="${aeriaLogoFull}" alt="AERIA Solutions Ltd." />
          <div class="doc-header-content">
            ${docNumber ? `<div class="doc-number">${docNumber}</div>` : ''}
            <div class="doc-title">${title}</div>
            <div class="doc-meta">
              <span><strong>Type:</strong> Form Submission</span>
              <span><strong>Version:</strong> ${version}</span>
              ${category ? `<span><strong>Category:</strong> ${category}</span>` : ''}
            </div>
          </div>
        </div>

        ${submittedBy || submittedAt ? `
        <div class="submission-info">
          ${submittedBy ? `<div><strong>Submitted By:</strong> ${submittedBy}</div>` : ''}
          ${submittedAt ? `<div><strong>Submitted At:</strong> ${submittedAt}</div>` : ''}
        </div>
        ` : ''}

        <div id="content">${contentHtml}</div>

        <div class="doc-footer">
          AERIA Solutions Ltd. | Form Submission | Generated ${new Date().toLocaleDateString()}
        </div>
      </body>
    </html>
  `
}

/**
 * Open print dialog for a form submission
 * @param {Object} submission - Form submission data
 * @param {string} filledContent - Filled markdown content
 */
export function printFormSubmission(submission, filledContent) {
  const printWindow = window.open('', '_blank')

  if (!printWindow) {
    alert('Please allow popups to print this document')
    return
  }

  const html = generatePrintHtml({
    title: submission.form_title,
    docNumber: submission.form_number,
    version: '1.0',
    content: filledContent,
    submittedBy: submission.submitted_by_name,
    submittedAt: submission.submitted_at
      ? new Date(submission.submitted_at).toLocaleString()
      : null
  })

  printWindow.document.write(html)
  printWindow.document.close()

  // Wait for images to load, then print
  setTimeout(() => {
    printWindow.print()
  }, 300)
}

/**
 * Generate a data URL for the PDF (for preview/download)
 * Note: This uses the browser's built-in print-to-PDF functionality
 * For a true PDF generation, a library like jspdf would be needed
 */
export function generatePdfPreview(submission, filledContent) {
  const html = generatePrintHtml({
    title: submission.form_title,
    docNumber: submission.form_number,
    version: '1.0',
    content: filledContent,
    submittedBy: submission.submitted_by_name,
    submittedAt: submission.submitted_at
      ? new Date(submission.submitted_at).toLocaleString()
      : null
  })

  // Create a blob URL for the HTML
  const blob = new Blob([html], { type: 'text/html' })
  return URL.createObjectURL(blob)
}

/**
 * Download form as HTML file (can be opened and printed as PDF)
 */
export function downloadFormAsHtml(submission, filledContent) {
  const html = generatePrintHtml({
    title: submission.form_title,
    docNumber: submission.form_number,
    version: '1.0',
    content: filledContent,
    submittedBy: submission.submitted_by_name,
    submittedAt: submission.submitted_at
      ? new Date(submission.submitted_at).toLocaleString()
      : null
  })

  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${submission.form_title.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.html`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
