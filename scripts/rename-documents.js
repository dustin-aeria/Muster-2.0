/**
 * Rename all documents to unified domain-based numbering
 *
 * New Structure:
 * - RPAS-001 to RPAS-099: Flight operations
 * - SAFE-001 to SAFE-099: Safety & HSE
 * - TRAIN-001 to TRAIN-050: Training
 * - MAINT-001 to MAINT-020: Maintenance
 * - GOV-001 to GOV-020: Governance
 * - MARINE-001 to MARINE-020: Land & Marine
 *
 * Within each domain:
 * - 001-009: Manuals/Core documents
 * - 010-029: Policies
 * - 030-059: Procedures
 * - 060-079: Forms
 * - 080-089: Quick Reference Cards
 * - 090-099: Hazard Assessments
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync, renameSync, readdirSync, statSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
const envLocalPath = join(__dirname, '..', '.env.local')
const envPath = existsSync(envLocalPath) ? envLocalPath : join(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
const env = {}
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=')
  if (key && valueParts.length) {
    env[key.trim()] = valueParts.join('=').trim()
  }
})

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY)

// Category to prefix mapping
const CATEGORY_PREFIX = {
  'RPAS Operations': 'RPAS',
  'Safety & HSE': 'SAFE',
  'Training': 'TRAIN',
  'Maintenance': 'MAINT',
  'Governance': 'GOV',
  'Land & Marine': 'MARINE'
}

// Document type to number range
const TYPE_RANGES = {
  'manual': { start: 1, end: 9 },
  'guide': { start: 1, end: 9 },
  'policy': { start: 10, end: 29 },
  'procedure': { start: 30, end: 59 },
  'form': { start: 60, end: 79 },
  'qrc': { start: 80, end: 89 },
  'fha': { start: 90, end: 99 },
  'regulatory': { start: 10, end: 29 }, // Treat as policy
  'other': { start: 60, end: 79 }
}

// Track assigned numbers per category/type
const assignedNumbers = {}

function getNextNumber(category, docType) {
  const prefix = CATEGORY_PREFIX[category] || 'OTHER'
  const range = TYPE_RANGES[docType] || TYPE_RANGES['other']

  const key = `${prefix}-${docType}`
  if (!assignedNumbers[key]) {
    assignedNumbers[key] = range.start
  }

  const num = assignedNumbers[key]
  assignedNumbers[key]++

  if (num > range.end) {
    console.warn(`Warning: Exceeded range for ${key}, using ${num}`)
  }

  return num
}

function formatDocNumber(prefix, number) {
  return `${prefix}-${String(number).padStart(3, '0')}`
}

// Create clean title (remove redundant words)
function cleanTitle(title, docType) {
  let clean = title
    // Remove "Policy" suffix if it's a policy
    .replace(/\s+Policy$/i, '')
    // Remove "Procedure" suffix if it's a procedure
    .replace(/\s+Procedure$/i, '')
    // Remove "Form" suffix if it's a form
    .replace(/\s+Form$/i, '')
    // Remove "Quick Reference" etc
    .replace(/\s+Quick Reference$/i, '')
    .replace(/\s+QRC$/i, '')
    // Clean up common redundancies
    .replace(/^RPAS\s+/i, '')
    .replace(/\s+RPAS$/i, '')
    .trim()

  return clean
}

async function renameDocuments() {
  console.log('========================================')
  console.log('Document Renaming Script')
  console.log('========================================\n')

  // Fetch all documents
  const { data: documents, error } = await supabase
    .from('documents')
    .select('*')
    .order('category')
    .order('doc_type')
    .order('title')

  if (error) {
    console.error('Error fetching documents:', error.message)
    return
  }

  console.log(`Found ${documents.length} documents to process\n`)

  // Build the mapping
  const mapping = []

  // Group by category first
  const byCategory = {}
  documents.forEach(doc => {
    const cat = doc.category || 'Other'
    if (!byCategory[cat]) byCategory[cat] = []
    byCategory[cat].push(doc)
  })

  // Process each category
  for (const [category, docs] of Object.entries(byCategory)) {
    const prefix = CATEGORY_PREFIX[category]
    if (!prefix) {
      console.log(`Skipping unknown category: ${category}`)
      continue
    }

    console.log(`\n=== ${category} (${prefix}) ===`)

    // Sort docs by type priority, then by title
    const typePriority = ['manual', 'guide', 'policy', 'regulatory', 'procedure', 'form', 'qrc', 'fha']
    docs.sort((a, b) => {
      const pa = typePriority.indexOf(a.doc_type)
      const pb = typePriority.indexOf(b.doc_type)
      if (pa !== pb) return pa - pb
      return a.title.localeCompare(b.title)
    })

    for (const doc of docs) {
      const newNumber = getNextNumber(category, doc.doc_type)
      const newDocNumber = formatDocNumber(prefix, newNumber)
      const newTitle = cleanTitle(doc.title, doc.doc_type)

      mapping.push({
        id: doc.id,
        oldDocNumber: doc.doc_number,
        oldTitle: doc.title,
        newDocNumber,
        newTitle,
        docType: doc.doc_type,
        category
      })

      console.log(`  ${(doc.doc_number || 'N/A').padEnd(20)} -> ${newDocNumber.padEnd(12)} | ${newTitle}`)
    }
  }

  // Confirm before applying
  console.log('\n========================================')
  console.log(`Ready to rename ${mapping.length} documents`)
  console.log('========================================\n')

  // Check for --apply flag
  const applyChanges = process.argv.includes('--apply')

  if (!applyChanges) {
    console.log('This is a DRY RUN. To apply changes, run with --apply flag:')
    console.log('  node scripts/rename-documents.js --apply')
    console.log('\nMapping saved to scripts/document-mapping.json')

    // Save mapping to file for review
    const fs = await import('fs')
    fs.writeFileSync(
      join(__dirname, 'document-mapping.json'),
      JSON.stringify(mapping, null, 2)
    )
    return
  }

  // Apply changes to database
  console.log('Applying changes to database...\n')

  let updated = 0
  let errors = 0

  for (const item of mapping) {
    const { error: updateError } = await supabase
      .from('documents')
      .update({
        doc_number: item.newDocNumber,
        title: item.newTitle
      })
      .eq('id', item.id)

    if (updateError) {
      console.error(`  ERROR updating ${item.oldDocNumber}: ${updateError.message}`)
      errors++
    } else {
      updated++
    }
  }

  console.log('\n========================================')
  console.log('Renaming Complete!')
  console.log('========================================')
  console.log(`  Updated: ${updated}`)
  console.log(`  Errors: ${errors}`)

  // Print new distribution
  console.log('\nNew Document Distribution:')
  const distribution = {}
  mapping.forEach(m => {
    const prefix = m.newDocNumber.split('-')[0]
    distribution[prefix] = (distribution[prefix] || 0) + 1
  })
  Object.entries(distribution).sort().forEach(([prefix, count]) => {
    console.log(`  ${prefix}: ${count}`)
  })
}

renameDocuments().catch(console.error)
