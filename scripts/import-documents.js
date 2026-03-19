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
import { readFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from .env.local file (or .env as fallback)
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

const supabaseUrl = env.VITE_SUPABASE_URL
const supabaseKey = env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env file')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// New domain-based categories (consolidated from 11 to 6)
const CATEGORIES = {
  RPAS_OPERATIONS: 'RPAS Operations',
  SAFETY_HSE: 'Safety & HSE',
  TRAINING: 'Training',
  MAINTENANCE: 'Maintenance',
  GOVERNANCE: 'Governance',
  LAND_MARINE: 'Land & Marine'
}

// Map folder names to categories (legacy support, but doc_number takes precedence)
const FOLDER_TO_CATEGORY = {
  '00_Governance': CATEGORIES.GOVERNANCE,
  '01_RPAS_Operations': CATEGORIES.RPAS_OPERATIONS,
  '02_SMS': CATEGORIES.SAFETY_HSE,
  '03_MCM': CATEGORIES.MAINTENANCE,
  '04_TCP': CATEGORIES.TRAINING,
  '05_CRM': CATEGORIES.TRAINING,
  '06_HSE': CATEGORIES.SAFETY_HSE,
  '07_Land_Marine': CATEGORIES.LAND_MARINE,
  '08_Admin': CATEGORIES.GOVERNANCE,
  '08_Administrative': CATEGORIES.GOVERNANCE,
  '09_Forms': CATEGORIES.RPAS_OPERATIONS, // Default, will be overridden by doc_number logic
  '10_QRC': CATEGORIES.RPAS_OPERATIONS, // Default, will be overridden by doc_number logic
  '11_FHA': CATEGORIES.SAFETY_HSE, // Default, will be overridden by doc_number logic
  '11_Regulatory': CATEGORIES.GOVERNANCE,
  '12_FHA': CATEGORIES.SAFETY_HSE,
  '12_Regulatory_Templates': CATEGORIES.GOVERNANCE
}

// Document prefix to category mapping (takes precedence over folder)
const PREFIX_TO_CATEGORY = {
  'OPS': CATEGORIES.RPAS_OPERATIONS,
  'HSE': CATEGORIES.SAFETY_HSE,
  'SMS': CATEGORIES.SAFETY_HSE,
  'TCP': CATEGORIES.TRAINING,
  'CRM': CATEGORIES.TRAINING,
  'MCM': CATEGORIES.MAINTENANCE,
  'GOV': CATEGORIES.GOVERNANCE,
  'ADM': CATEGORIES.GOVERNANCE,
  'REG': CATEGORIES.GOVERNANCE,
  'LM': CATEGORIES.LAND_MARINE,
}

// Form category mapping based on form purpose
const FORM_CATEGORY_MAP = {
  'FRM-PREFLIGHT': CATEGORIES.RPAS_OPERATIONS,
  'FRM-POSTFLIGHT': CATEGORIES.RPAS_OPERATIONS,
  'FRM-FLIGHT': CATEGORIES.RPAS_OPERATIONS,
  'FRM-SITESURVEY': CATEGORIES.RPAS_OPERATIONS,
  'FRM-CARGO': CATEGORIES.RPAS_OPERATIONS,
  'FRM-AVALANCHE': CATEGORIES.RPAS_OPERATIONS,
  'FRM-AIRSPACE': CATEGORIES.RPAS_OPERATIONS,
  'FRM-WEATHER': CATEGORIES.RPAS_OPERATIONS,
  'FRM-FLHA': CATEGORIES.SAFETY_HSE,
  'FRM-INCIDENT': CATEGORIES.SAFETY_HSE,
  'FRM-NEARMISS': CATEGORIES.SAFETY_HSE,
  'FRM-INVESTIGATION': CATEGORIES.SAFETY_HSE,
  'FRM-CORRECTIVE': CATEGORIES.SAFETY_HSE,
  'FRM-WITNESS': CATEGORIES.SAFETY_HSE,
  'FRM-DRILL': CATEGORIES.SAFETY_HSE,
  'FRM-REFUSAL': CATEGORIES.SAFETY_HSE,
  'FRM-SITEINSP': CATEGORIES.SAFETY_HSE,
  'FRM-TAILGATE': CATEGORIES.SAFETY_HSE,
  'FRM-SAFETYMEETING': CATEGORIES.SAFETY_HSE,
  'FRM-WORKALONE': CATEGORIES.SAFETY_HSE,
  'FRM-IMSAFE': CATEGORIES.SAFETY_HSE,
  'FRM-HAZARD': CATEGORIES.SAFETY_HSE,
  'FRM-RISK': CATEGORIES.SAFETY_HSE,
  'FRM-OCCURRENCE': CATEGORIES.SAFETY_HSE,
  'FRM-PPE': CATEGORIES.SAFETY_HSE,
  'FRM-TRAINING': CATEGORIES.TRAINING,
  'FRM-COMPETENCY': CATEGORIES.TRAINING,
  'FRM-COMPCHECK': CATEGORIES.TRAINING,
  'FRM-ORIENTATION': CATEGORIES.TRAINING,
  'FRM-NEWWORKER': CATEGORIES.TRAINING,
  'FRM-CONTRACTOR': CATEGORIES.TRAINING,
  'FRM-TREC': CATEGORIES.TRAINING,
  'FRM-MAINT': CATEGORIES.MAINTENANCE,
  'FRM-BATTERY': CATEGORIES.MAINTENANCE,
  'FRM-INSPECTION': CATEGORIES.MAINTENANCE,
}

// QRC category mapping based on QRC purpose
const QRC_CATEGORY_MAP = {
  'QRC-GENERAL': CATEGORIES.RPAS_OPERATIONS,
  'QRC-BVLOS': CATEGORIES.RPAS_OPERATIONS,
  'QRC-DELIVERY': CATEGORIES.RPAS_OPERATIONS,
  'QRC-AVALANCHE': CATEGORIES.RPAS_OPERATIONS,
  'QRC-PREFLIGHT': CATEGORIES.RPAS_OPERATIONS,
  'QRC-AIRSPACE': CATEGORIES.RPAS_OPERATIONS,
  'QRC-WEATHER': CATEGORIES.RPAS_OPERATIONS,
  'QRC-VOCALLS': CATEGORIES.RPAS_OPERATIONS,
  'QRC-NIGHT': CATEGORIES.RPAS_OPERATIONS,
  'QRC-EMERGENCY': CATEGORIES.SAFETY_HSE,
  'QRC-FLHA': CATEGORIES.SAFETY_HSE,
  'QRC-FIRSTAID': CATEGORIES.SAFETY_HSE,
  'QRC-WILDLIFE': CATEGORIES.SAFETY_HSE,
  'QRC-WORKINGALONE': CATEGORIES.SAFETY_HSE,
  'QRC-SPILL': CATEGORIES.SAFETY_HSE,
  'QRC-BATTERY': CATEGORIES.MAINTENANCE,
  'QRC-MAINTENANCE': CATEGORIES.MAINTENANCE,
}

// FHA category mapping (by number)
const FHA_CATEGORY_MAP = {
  'FHA-001': CATEGORIES.RPAS_OPERATIONS,
  'FHA-002': CATEGORIES.RPAS_OPERATIONS,
  'FHA-009': CATEGORIES.RPAS_OPERATIONS,
  'FHA-011': CATEGORIES.RPAS_OPERATIONS,
  'FHA-014': CATEGORIES.RPAS_OPERATIONS,
  'FHA-015': CATEGORIES.RPAS_OPERATIONS,
  'FHA-019': CATEGORIES.RPAS_OPERATIONS,
  'FHA-020': CATEGORIES.RPAS_OPERATIONS,
  'FHA-003': CATEGORIES.SAFETY_HSE,
  'FHA-004': CATEGORIES.SAFETY_HSE,
  'FHA-005': CATEGORIES.SAFETY_HSE,
  'FHA-006': CATEGORIES.SAFETY_HSE,
  'FHA-007': CATEGORIES.SAFETY_HSE,
  'FHA-008': CATEGORIES.SAFETY_HSE,
  'FHA-012': CATEGORIES.SAFETY_HSE,
  'FHA-013': CATEGORIES.SAFETY_HSE,
  'FHA-016': CATEGORIES.SAFETY_HSE,
  'FHA-017': CATEGORIES.SAFETY_HSE,
  'FHA-018': CATEGORIES.SAFETY_HSE,
  'FHA-010': CATEGORIES.LAND_MARINE, // Marine operations
}

// Sort order mapping - logical reading sequence
// Lower numbers = read first
const SORT_ORDER_MAP = {
  // Foundation - Worker Rights & Safety Basics (1-20)
  'HSE-002': 1,   // Worker Rights - FIRST
  'HSE-001': 2,   // Health Safety Policy Statement
  'HSE-018': 3,   // Refuse Unsafe Work
  'GOV-003': 4,   // Organizational Structure
  'GOV-001': 5,   // Master Program Index
  'GOV-002': 6,   // Document Control Policy
  'GOV-002-PR': 7, // Document Control Procedure
  'GOV-004': 8,   // Regulatory Compliance Matrix

  // Core Manuals (51-70)
  'SMS-001': 51,  // Safety Management System Manual
  'TCP-001': 52,  // Training & Competency Program
  'MCM-001': 53,  // Maintenance Control Manual
  'CRM-001': 54,  // Crew Resource Management
  'CRM-002': 55,  // Fatigue Risk Management

  // Hazard Assessment & Risk (101-130)
  'HSE-003': 101, // Hazard Assessment Policy
  'HSE-001-PR': 102, // Formal Hazard Assessment Procedure
  'HSE-002-PR': 103, // FLHA Procedure
  'HSE-003-PR': 104, // FLHA Review Procedure
  'HSE-004': 105, // Hazard Control Policy
  'SMS-002-PR': 106, // Risk Assessment Procedure

  // Training & Competency (151-180)
  'HSE-005': 151, // Training Competency Policy (HSE)
  'TCP-001-PR': 152, // New Personnel Orientation
  'TCP-002-PR': 153, // Training Delivery
  'TCP-003-PR': 154, // Competency Assessment
  'TCP-004-PR': 155, // Training Records
  'OPS-007-PR': 156, // Pilot Training
  'OPS-008-PR': 157, // Visual Observer Training

  // Core Operations Flow (201-250)
  'OPS-001': 201, // RPAS Flight Operations Policy
  'OPS-004': 202, // Crew Qualifications Policy
  'OPS-001-PR': 203, // Flight Planning Procedure
  'OPS-012-PR': 204, // Site Survey Procedure
  'OPS-002': 205, // Airspace Authorization Policy
  'OPS-005-PR': 206, // Airspace Authorization Procedure
  'OPS-003': 207, // Weather Limitations Policy
  'OPS-006-PR': 208, // Weather Assessment Procedure
  'OPS-002-PR': 209, // Pre-Flight Procedure
  'OPS-003-PR': 210, // Flight Conduct Procedure
  'OPS-004-PR': 211, // Post-Flight Procedure
  'OPS-006': 212, // Payload Management Policy
  'OPS-010-PR': 213, // Payload Operations Procedure
  'OPS-007': 214, // Flight Data Recording Policy
  'OPS-008': 215, // Client Site Operations Policy

  // Specialized Operations (301-350)
  'OPS-005': 301, // BVLOS Operations Policy
  'OPS-009-PR': 302, // BVLOS Operations Procedure
  'OPS-009': 303, // Night Operations Policy
  'OPS-013': 304, // Cargo Delivery Policy
  'OPS-013-PR': 305, // Cargo Delivery Procedure
  'OPS-014': 306, // Dangerous Goods Policy
  'OPS-014-PR': 307, // Dangerous Goods Procedure
  'OPS-015': 308, // Avalanche Control Policy
  'OPS-015-PR': 309, // Avalanche Control Procedure
  'OPS-010': 310, // Flight School Policy
  'LM-001': 320, // Land Survey Policy
  'LM-001-PR': 321, // Land Survey Procedure
  'LM-002-PR': 322, // GCP Placement Procedure
  'LM-002': 330, // Marine Operations Policy
  'LM-003-PR': 331, // Marine Operations Procedure
  'LM-004-PR': 332, // Vessel Safety Procedure

  // Emergency & Incident (401-450)
  'HSE-007': 401, // Emergency Response Policy
  'HSE-005-PR': 402, // Emergency Response Procedure
  'OPS-011-PR': 403, // Emergency Procedures RPAS
  'HSE-008': 404, // Incident Investigation Policy
  'HSE-006-PR': 405, // Incident Investigation Procedure
  'SMS-005': 406, // Occurrence Reporting Policy
  'SMS-004-PR': 407, // Internal Reporting Procedure

  // Maintenance (451-480)
  'MCM-001-PR': 451, // Scheduled Maintenance
  'MCM-002-PR': 452, // Unscheduled Maintenance
  'MCM-003-PR': 453, // Pre-Flight Inspection
  'MCM-004-PR': 454, // Post-Flight Inspection
  'MCM-005-PR': 455, // Battery Management

  // HSE Specific Policies (501-550)
  'HSE-006': 501, // Worksite Inspection Policy
  'HSE-004-PR': 502, // Worksite Inspection Procedure
  'HSE-009': 503, // PPE Policy
  'HSE-007-PR': 504, // PPE Procedure
  'HSE-010': 505, // Fatigue Management Policy
  'HSE-011': 506, // Environmental Protection Policy
  'HSE-008-PR': 507, // Spill Response Procedure
  'HSE-009-PR': 508, // Waste Management Procedure
  'HSE-012': 509, // First Aid Policy
  'HSE-010-PR': 510, // First Aid Procedure
  'HSE-013': 511, // Fit for Duty Policy
  'HSE-011-PR': 512, // Fit for Duty Procedure
  'HSE-012-PR': 513, // Refuse Unsafe Work Procedure
  'HSE-014': 514, // Violence/Harassment Policy
  'HSE-015': 515, // Heat/Cold Stress Policy
  'HSE-013-PR': 516, // Heat/Cold Stress Procedure
  'HSE-016': 517, // Working Alone Policy
  'HSE-014-PR': 518, // Working Alone Procedure
  'HSE-017': 519, // Wildlife Hazards Policy
  'HSE-015-PR': 520, // Wildlife Safety Procedure

  // Administrative (551-580)
  'ADM-001': 551, // Privacy Policy
  'ADM-001-PR': 552, // Privacy Procedure
  'ADM-002': 553, // Record Retention Policy
  'ADM-002-PR': 554, // Record Retention Procedure
  'ADM-003': 555, // Disciplinary Policy
  'ADM-003-PR': 556, // Disciplinary Procedure

  // SMS Additional (581-600)
  'SMS-003-PR': 581, // Change Management
  'SMS-006-PR': 582, // SMS Audit Procedure
  'CRM-001-PR': 583, // Crew Coordination Procedure
}

// Get sort order for a document
function getSortOrder(docNumber, docType, filename) {
  // Check explicit mapping first
  if (docNumber && SORT_ORDER_MAP[docNumber]) {
    return SORT_ORDER_MAP[docNumber]
  }

  // Default ordering by type
  const typeDefaults = {
    'policy': 600,
    'procedure': 700,
    'manual': 100,
    'guide': 800,
    'form': 900,
    'qrc': 1000,
    'fha': 1100,
    'regulatory': 1200,
  }

  const baseOrder = typeDefaults[docType] || 500

  // Extract number from doc_number or filename for sub-ordering
  const numMatch = (docNumber || filename).match(/(\d{3})/)
  const subOrder = numMatch ? parseInt(numMatch[1]) : 0

  return baseOrder + subOrder
}

// Determine doc_type from filename
function getDocType(filename) {
  const upper = filename.toUpperCase()

  // Forms - FRM- prefix
  if (upper.startsWith('FRM-') || upper.includes('_FORM')) return 'form'

  // Quick Reference Cards - QRC- prefix
  if (upper.startsWith('QRC-')) return 'qrc'

  // Formal Hazard Assessments - FHA- prefix
  if (upper.startsWith('FHA-') || upper.includes('_FHA')) return 'fha'

  // Guides - GUIDE- prefix
  if (upper.startsWith('GUIDE-') || upper.includes('_GUIDE')) return 'guide'

  // Regulatory - REG- prefix
  if (upper.startsWith('REG-')) return 'regulatory'

  // Procedures - -PR suffix before underscore
  if (/-PR[_-]/.test(filename) || /-PR\./.test(filename)) return 'procedure'
  if (upper.includes('-PR_') || upper.includes('-PR.')) return 'procedure'

  // Manuals
  if (upper.includes('MANUAL') || upper.includes('_Manual')) return 'manual'

  // Explicit policy indicators
  if (upper.includes('POLICY') || upper.includes('_Policy')) return 'policy'

  // Default to policy for most numbered documents (OPS-001, HSE-001, etc.)
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

// Get category from file path and doc_number
// Doc_number-based categorization takes precedence over folder-based
function getCategory(filePath, docNumber, title) {
  const docNum = (docNumber || '').toUpperCase()
  const titleUpper = (title || '').toUpperCase()

  // Check FHA mapping first (specific assignments)
  if (docNum.startsWith('FHA-')) {
    if (FHA_CATEGORY_MAP[docNum]) {
      return FHA_CATEGORY_MAP[docNum]
    }
    return CATEGORIES.SAFETY_HSE // Default FHAs
  }

  // Check QRC mapping
  if (docNum.startsWith('QRC-')) {
    if (QRC_CATEGORY_MAP[docNum]) {
      return QRC_CATEGORY_MAP[docNum]
    }
    // Try partial match (e.g., QRC-EMERGENCY-FULL matches QRC-EMERGENCY)
    for (const [key, category] of Object.entries(QRC_CATEGORY_MAP)) {
      if (docNum.startsWith(key)) {
        return category
      }
    }
    return CATEGORIES.RPAS_OPERATIONS // Default QRCs
  }

  // Check Form mapping
  if (docNum.startsWith('FRM-')) {
    if (FORM_CATEGORY_MAP[docNum]) {
      return FORM_CATEGORY_MAP[docNum]
    }
    // Try partial match
    for (const [key, category] of Object.entries(FORM_CATEGORY_MAP)) {
      if (docNum.startsWith(key)) {
        return category
      }
    }
    // Infer from title
    if (titleUpper.includes('TRAINING') || titleUpper.includes('COMPETENCY')) {
      return CATEGORIES.TRAINING
    }
    if (titleUpper.includes('SAFETY') || titleUpper.includes('HAZARD') || titleUpper.includes('INCIDENT')) {
      return CATEGORIES.SAFETY_HSE
    }
    if (titleUpper.includes('MAINT') || titleUpper.includes('BATTERY')) {
      return CATEGORIES.MAINTENANCE
    }
    return CATEGORIES.RPAS_OPERATIONS // Default forms
  }

  // Check GUIDE prefix
  if (docNum.startsWith('GUIDE') || titleUpper.includes('GUIDE')) {
    return CATEGORIES.TRAINING
  }

  // Check standard document prefixes
  const prefix = docNum.split('-')[0]
  if (PREFIX_TO_CATEGORY[prefix]) {
    return PREFIX_TO_CATEGORY[prefix]
  }

  // Fall back to folder-based categorization
  const parts = filePath.split(/[/\\]/)
  const v5Index = parts.findIndex(p => p === 'v5.0')
  if (v5Index !== -1 && parts[v5Index + 1]) {
    const folder = parts[v5Index + 1]
    return FOLDER_TO_CATEGORY[folder] || CATEGORIES.RPAS_OPERATIONS
  }

  return CATEGORIES.RPAS_OPERATIONS
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

    const docNumber = getDocNumber(filename)
    const docType = getDocType(filename)
    const title = getTitle(filename)

    const doc = {
      title: title,
      doc_type: docType,
      doc_number: docNumber,
      category: getCategory(filePath, docNumber, title),
      content: content,
      version: '1.0',
      status: 'active',
      tags: getTags(filePath),
      sort_order: getSortOrder(docNumber, docType, filename),
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
