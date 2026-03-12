/**
 * Generate SQL INSERT statements for Forms only
 *
 * Run with: node scripts/generate-forms-import.js
 */

import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function getTitle(filename) {
  let name = filename.replace(/\.md$/i, '')
  // Remove FRM- prefix and number pattern
  name = name.replace(/^FRM-[A-Z]+_/i, '')
  name = name.replace(/^FRM-/i, '')
  // Replace underscores with spaces
  name = name.replace(/_/g, ' ')
  name = name.replace(/\s+/g, ' ').trim()
  return name || filename
}

function getDocNumber(filename) {
  const match = filename.match(/^(FRM-[A-Z]+)/i)
  if (match) return match[1].toUpperCase()
  return null
}

function escapeSQL(str) {
  if (str === null || str === undefined) return 'NULL'
  return "'" + str.replace(/'/g, "''") + "'"
}

function generateFormsSQL() {
  const formsPath = join(__dirname, '..', 'v5.0', '09_Forms')
  const outputDir = join(__dirname, '..', 'import-batches')

  try {
    mkdirSync(outputDir, { recursive: true })
  } catch (e) {}

  const files = readdirSync(formsPath)
    .filter(f => f.endsWith('.md') && !f.startsWith('INDEX'))
    .map(f => join(formsPath, f))

  console.log(`Found ${files.length} form files\n`)

  let sql = `-- Import Forms into Muster 2.0
-- Generated: ${new Date().toISOString()}
-- Total forms: ${files.length}
-- Run this in Supabase SQL Editor

`

  for (const filePath of files) {
    const filename = basename(filePath)
    const content = readFileSync(filePath, 'utf-8')

    const title = getTitle(filename)
    const docNumber = getDocNumber(filename)

    sql += `INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  ${escapeSQL(title)},
  'form',
  ${docNumber ? escapeSQL(docNumber) : 'NULL'},
  'Forms',
  ${escapeSQL(content)},
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

`
    console.log(`Added: ${docNumber || 'N/A'} - ${title}`)
  }

  const outputFile = join(outputDir, 'forms-import.sql')
  writeFileSync(outputFile, sql)

  console.log(`\n========================================`)
  console.log(`Generated: import-batches/forms-import.sql`)
  console.log(`Total forms: ${files.length}`)
  console.log(`\nRun this file in Supabase SQL Editor`)
  console.log(`========================================`)
}

generateFormsSQL()
