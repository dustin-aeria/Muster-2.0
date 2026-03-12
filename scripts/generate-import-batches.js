/**
 * Generate SQL INSERT statements in batches for v5.0 documents
 *
 * Run with: node scripts/generate-import-batches.js
 *
 * Creates multiple SQL files that can be run sequentially in Supabase
 */

import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const BATCH_SIZE = 20 // Documents per batch

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

function generateBatches() {
  const v5Path = join(__dirname, '..', 'v5.0')
  const outputDir = join(__dirname, '..', 'import-batches')

  try {
    mkdirSync(outputDir, { recursive: true })
  } catch (e) {}

  const files = getAllMarkdownFiles(v5Path)
  const totalBatches = Math.ceil(files.length / BATCH_SIZE)

  console.log(`Total documents: ${files.length}`)
  console.log(`Batch size: ${BATCH_SIZE}`)
  console.log(`Total batches: ${totalBatches}\n`)

  for (let batch = 0; batch < totalBatches; batch++) {
    const start = batch * BATCH_SIZE
    const end = Math.min(start + BATCH_SIZE, files.length)
    const batchFiles = files.slice(start, end)

    let sql = `-- Batch ${batch + 1} of ${totalBatches}
-- Documents ${start + 1} to ${end} of ${files.length}
-- Run this in Supabase SQL Editor

`

    for (const filePath of batchFiles) {
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

    const batchFile = join(outputDir, `batch-${String(batch + 1).padStart(2, '0')}.sql`)
    writeFileSync(batchFile, sql)
    console.log(`Created: batch-${String(batch + 1).padStart(2, '0')}.sql (${batchFiles.length} documents)`)
  }

  console.log(`\n========================================`)
  console.log(`Generated ${totalBatches} batch files in: import-batches/`)
  console.log(`\nRun each file in Supabase SQL Editor in order.`)
  console.log(`========================================`)
}

generateBatches()
