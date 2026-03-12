/**
 * Import v5.0 documents into Supabase
 *
 * Run with: node scripts/import-documents.js
 *
 * Make sure you have a .env file with:
 * VITE_SUPABASE_URL=your-url
 * VITE_SUPABASE_ANON_KEY=your-key
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from .env file
const envPath = join(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
const env = {}
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=')
  if (key && valueParts.length) {
    env[key.trim()] = valueParts.join('=').trim()
  }
})

const supabaseUrl = env.VITE_SUPABASE_URL
const supabaseKey = env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env file')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

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

// Determine doc_type from filename
function getDocType(filename) {
  const upper = filename.toUpperCase()

  if (upper.includes('FHA-') || upper.includes('_FHA')) return 'fha'
  if (upper.includes('-PR_') || upper.includes('-PR.')) return 'procedure'
  if (upper.includes('GUIDE-') || upper.includes('_GUIDE')) return 'guide'
  if (upper.includes('FORM-') || upper.includes('_FORM')) return 'form'
  if (upper.includes('QRC-') || upper.includes('_QRC')) return 'guide' // Quick Reference Cards as guides
  if (upper.includes('CHECKLIST')) return 'form'
  if (upper.includes('MANUAL') || upper.includes('_Manual')) return 'guide'
  if (upper.includes('POLICY') || upper.includes('_Policy')) return 'policy'

  // Check for patterns like OPS-001_Something (policies) vs OPS-001-PR_Something (procedures)
  if (/-PR[_-]/.test(filename) || /-PR\./.test(filename)) return 'procedure'

  // Default to policy for most numbered documents
  return 'policy'
}

// Extract document number from filename
function getDocNumber(filename) {
  // Match patterns like: GOV-001, OPS-001-PR, FHA-001, SMS-001, etc.
  const match = filename.match(/^([A-Z]{2,4}-\d{3}(?:-PR)?)/i)
  if (match) return match[1].toUpperCase()

  // Match GUIDE-Something pattern
  const guideMatch = filename.match(/^(GUIDE)-/i)
  if (guideMatch) return null // Guides don't have numbers

  return null
}

// Extract title from filename
function getTitle(filename) {
  // Remove extension
  let name = filename.replace(/\.md$/i, '')

  // Remove document number prefix
  name = name.replace(/^[A-Z]{2,4}-\d{3}(?:-PR)?[_-]/i, '')

  // Remove GUIDE- prefix
  name = name.replace(/^GUIDE[_-]/i, '')

  // Replace underscores with spaces
  name = name.replace(/_/g, ' ')

  // Clean up
  name = name.replace(/\s+/g, ' ').trim()

  return name || filename
}

// Recursively get all markdown files
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

// Get category from file path
function getCategory(filePath) {
  const parts = filePath.split(/[/\\]/)

  // Find the v5.0 folder and get the next part
  const v5Index = parts.findIndex(p => p === 'v5.0')
  if (v5Index !== -1 && parts[v5Index + 1]) {
    const folder = parts[v5Index + 1]
    return FOLDER_TO_CATEGORY[folder] || 'Other'
  }

  return 'Other'
}

// Get subcategory/tags from path
function getTags(filePath) {
  const parts = filePath.split(/[/\\]/)
  const tags = []

  // Check for subfolder like Policies, Procedures, Guides
  const v5Index = parts.findIndex(p => p === 'v5.0')
  if (v5Index !== -1 && parts[v5Index + 2]) {
    const subfolder = parts[v5Index + 2]
    if (!subfolder.endsWith('.md')) {
      tags.push(subfolder)
    }
  }

  return tags
}

async function importDocuments() {
  const v5Path = join(__dirname, '..', 'v5.0')
  const files = getAllMarkdownFiles(v5Path)

  console.log(`Found ${files.length} markdown files to import\n`)

  let success = 0
  let failed = 0

  for (const filePath of files) {
    const filename = basename(filePath)
    const content = readFileSync(filePath, 'utf-8')

    const doc = {
      title: getTitle(filename),
      doc_type: getDocType(filename),
      doc_number: getDocNumber(filename),
      category: getCategory(filePath),
      content: content,
      version: '1.0',
      status: 'active',
      tags: getTags(filePath),
      effective_date: new Date().toISOString().split('T')[0]
    }

    console.log(`Importing: ${doc.doc_number || 'N/A'} - ${doc.title} (${doc.doc_type})`)

    const { error } = await supabase
      .from('documents')
      .insert(doc)

    if (error) {
      console.error(`  ERROR: ${error.message}`)
      failed++
    } else {
      success++
    }
  }

  console.log(`\n========================================`)
  console.log(`Import complete!`)
  console.log(`  Success: ${success}`)
  console.log(`  Failed: ${failed}`)
  console.log(`========================================`)
}

importDocuments().catch(console.error)
