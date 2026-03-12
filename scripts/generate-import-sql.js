/**
 * Generate SQL INSERT statements for v5.0 documents
 *
 * Run with: node scripts/generate-import-sql.js > import-documents.sql
 *
 * Then paste the output into Supabase SQL Editor
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Map folder names to categories
const FOLDER_TO_CATEGORY = {
  '00_Governance': 'Governance',
  '01_RPAS_Operations': 'Flight Operations',
  '02_SMS': 'Safety',
  '03_MCM': 'Maintenance',
  '04_TCP': 'Training',
  '05_CRM': 'Training',
  '06_HSE': 'Safety',
  '07_Land_Marine': 'Operations',
  '08_Admin': 'Administrative',
  '08_Administrative': 'Administrative',
  '09_Forms': 'Forms',
  '10_QRC': 'Quick Reference',
  '11_FHA': 'Hazard Assessment',
  '11_Regulatory': 'Regulatory',
  '12_FHA': 'Hazard Assessment',
  '12_Regulatory_Templates': 'Regulatory'
}

function getDocType(filename) {
  const upper = filename.toUpperCase()
  if (upper.includes('FHA-') || upper.includes('_FHA')) return 'fha'
  if (upper.includes('-PR_') || upper.includes('-PR.')) return 'procedure'
  if (upper.includes('GUIDE-') || upper.includes('_GUIDE')) return 'guide'
  if (upper.includes('FORM-') || upper.includes('_FORM')) return 'form'
  if (upper.includes('QRC-') || upper.includes('_QRC')) return 'guide'
  if (upper.includes('CHECKLIST')) return 'form'
  if (upper.includes('MANUAL') || upper.includes('_Manual')) return 'guide'
  if (/-PR[_-]/.test(filename) || /-PR\./.test(filename)) return 'procedure'
  return 'policy'
}

function getDocNumber(filename) {
  const match = filename.match(/^([A-Z]{2,4}-\d{3}(?:-PR)?)/i)
  if (match) return match[1].toUpperCase()
  return null
}

function getTitle(filename) {
  let name = filename.replace(/\.md$/i, '')
  name = name.replace(/^[A-Z]{2,4}-\d{3}(?:-PR)?[_-]/i, '')
  name = name.replace(/^GUIDE[_-]/i, '')
  name = name.replace(/_/g, ' ')
  name = name.replace(/\s+/g, ' ').trim()
  return name || filename
}

function getAllMarkdownFiles(dir, files = []) {
  const items = readdirSync(dir)
  for (const item of items) {
    const fullPath = join(dir, item)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      getAllMarkdownFiles(fullPath, files)
    } else if (item.endsWith('.md') && !item.startsWith('INDEX') && !item.startsWith('PROGRAM_REBUILD')) {
      files.push(fullPath)
    }
  }
  return files
}

function getCategory(filePath) {
  const parts = filePath.split(/[/\\]/)
  const v5Index = parts.findIndex(p => p === 'v5.0')
  if (v5Index !== -1 && parts[v5Index + 1]) {
    const folder = parts[v5Index + 1]
    return FOLDER_TO_CATEGORY[folder] || 'Other'
  }
  return 'Other'
}

function getTags(filePath) {
  const parts = filePath.split(/[/\\]/)
  const tags = []
  const v5Index = parts.findIndex(p => p === 'v5.0')
  if (v5Index !== -1 && parts[v5Index + 2]) {
    const subfolder = parts[v5Index + 2]
    if (!subfolder.endsWith('.md')) {
      tags.push(subfolder)
    }
  }
  return tags
}

function escapeSQL(str) {
  if (str === null || str === undefined) return 'NULL'
  return "'" + str.replace(/'/g, "''") + "'"
}

function generateSQL() {
  const v5Path = join(__dirname, '..', 'v5.0')
  const files = getAllMarkdownFiles(v5Path)

  let sql = `-- Import v5.0 documents into Muster 2.0
-- Generated: ${new Date().toISOString()}
-- Total documents: ${files.length}

`

  for (const filePath of files) {
    const filename = basename(filePath)
    const content = readFileSync(filePath, 'utf-8')

    const title = getTitle(filename)
    const docType = getDocType(filename)
    const docNumber = getDocNumber(filename)
    const category = getCategory(filePath)
    const tags = getTags(filePath)

    sql += `INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  ${escapeSQL(title)},
  ${escapeSQL(docType)},
  ${docNumber ? escapeSQL(docNumber) : 'NULL'},
  ${escapeSQL(category)},
  ${escapeSQL(content)},
  '1.0',
  'active',
  ARRAY[${tags.map(t => escapeSQL(t)).join(', ')}]::TEXT[],
  CURRENT_DATE
);

`
  }

  return sql
}

const sql = generateSQL()
const outputPath = join(__dirname, '..', 'import-documents.sql')
writeFileSync(outputPath, sql)
console.log(`Generated SQL file: ${outputPath}`)
console.log(`\nNext steps:`)
console.log(`1. Open the file: import-documents.sql`)
console.log(`2. Copy the contents`)
console.log(`3. Paste into Supabase SQL Editor`)
console.log(`4. Run the SQL`)
