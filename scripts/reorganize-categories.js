/**
 * Reorganize document categories in Supabase
 *
 * This script updates all documents to use the new domain-based category structure:
 * - RPAS Operations: OPS-*, flight FHAs, flight forms, flight QRCs
 * - Safety & HSE: HSE-*, SMS-*, safety forms, emergency QRCs
 * - Training: TCP-*, CRM-*, training forms, guides
 * - Maintenance: MCM-*, maintenance forms, QRC-BATTERY
 * - Governance: GOV-*, ADM-*, REG-*
 * - Land & Marine: LM-*, marine FHAs
 *
 * Run with: node scripts/reorganize-categories.js
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
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

const supabaseUrl = env.VITE_SUPABASE_URL
const supabaseKey = env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env file')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * New domain-based categories
 */
const CATEGORIES = {
  RPAS_OPERATIONS: 'RPAS Operations',
  SAFETY_HSE: 'Safety & HSE',
  TRAINING: 'Training',
  MAINTENANCE: 'Maintenance',
  GOVERNANCE: 'Governance',
  LAND_MARINE: 'Land & Marine'
}

/**
 * Document prefix to category mapping
 */
const PREFIX_TO_CATEGORY = {
  // RPAS Operations
  'OPS': CATEGORIES.RPAS_OPERATIONS,

  // Safety & HSE
  'HSE': CATEGORIES.SAFETY_HSE,
  'SMS': CATEGORIES.SAFETY_HSE,

  // Training
  'TCP': CATEGORIES.TRAINING,
  'CRM': CATEGORIES.TRAINING,
  'GUIDE': CATEGORIES.TRAINING,

  // Maintenance
  'MCM': CATEGORIES.MAINTENANCE,

  // Governance
  'GOV': CATEGORIES.GOVERNANCE,
  'ADM': CATEGORIES.GOVERNANCE,
  'REG': CATEGORIES.GOVERNANCE,

  // Land & Marine
  'LM': CATEGORIES.LAND_MARINE,
}

/**
 * Form assignments based on form purpose/name
 * Forms are distributed to their parent domains
 */
const FORM_CATEGORY_MAP = {
  // RPAS Operations Forms
  'FRM-PREFLIGHT': CATEGORIES.RPAS_OPERATIONS,
  'FRM-POSTFLIGHT': CATEGORIES.RPAS_OPERATIONS,
  'FRM-FLIGHT_LOG': CATEGORIES.RPAS_OPERATIONS,
  'FRM-SITESURVEY': CATEGORIES.RPAS_OPERATIONS,
  'FRM-CARGO': CATEGORIES.RPAS_OPERATIONS,
  'FRM-AVALANCHE': CATEGORIES.RPAS_OPERATIONS,
  'FRM-AIRSPACE': CATEGORIES.RPAS_OPERATIONS,
  'FRM-WEATHER': CATEGORIES.RPAS_OPERATIONS,

  // Safety & HSE Forms
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
  'FRM-PPE': CATEGORIES.SAFETY_HSE,
  'FRM-HAZARD': CATEGORIES.SAFETY_HSE,
  'FRM-RISK': CATEGORIES.SAFETY_HSE,
  'FRM-OCCURRENCE': CATEGORIES.SAFETY_HSE,
  'FRM-SPILL': CATEGORIES.SAFETY_HSE,

  // Training Forms
  'FRM-TRAINING': CATEGORIES.TRAINING,
  'FRM-COMPETENCY': CATEGORIES.TRAINING,
  'FRM-COMPCHECK': CATEGORIES.TRAINING,
  'FRM-ORIENTATION': CATEGORIES.TRAINING,
  'FRM-NEWWORKER': CATEGORIES.TRAINING,
  'FRM-CONTRACTOR': CATEGORIES.TRAINING,
  'FRM-TREC': CATEGORIES.TRAINING,

  // Maintenance Forms
  'FRM-MAINT': CATEGORIES.MAINTENANCE,
  'FRM-BATTERY': CATEGORIES.MAINTENANCE,
  'FRM-INSPECTION': CATEGORIES.MAINTENANCE,
}

/**
 * QRC assignments based on QRC purpose
 * QRCs are distributed to their parent domains
 */
const QRC_CATEGORY_MAP = {
  // RPAS Operations QRCs
  'QRC-GENERAL': CATEGORIES.RPAS_OPERATIONS,
  'QRC-BVLOS': CATEGORIES.RPAS_OPERATIONS,
  'QRC-DELIVERY': CATEGORIES.RPAS_OPERATIONS,
  'QRC-AVALANCHE': CATEGORIES.RPAS_OPERATIONS,
  'QRC-PREFLIGHT': CATEGORIES.RPAS_OPERATIONS,
  'QRC-AIRSPACE': CATEGORIES.RPAS_OPERATIONS,
  'QRC-WEATHER': CATEGORIES.RPAS_OPERATIONS,
  'QRC-VOCALLS': CATEGORIES.RPAS_OPERATIONS,
  'QRC-NIGHT': CATEGORIES.RPAS_OPERATIONS,

  // Safety & HSE QRCs
  'QRC-EMERGENCY': CATEGORIES.SAFETY_HSE,
  'QRC-EMERGENCY-FULL': CATEGORIES.SAFETY_HSE,
  'QRC-FLHA': CATEGORIES.SAFETY_HSE,
  'QRC-FIRSTAID': CATEGORIES.SAFETY_HSE,
  'QRC-WILDLIFE': CATEGORIES.SAFETY_HSE,
  'QRC-WORKINGALONE': CATEGORIES.SAFETY_HSE,
  'QRC-SPILL': CATEGORIES.SAFETY_HSE,

  // Maintenance QRCs
  'QRC-BATTERY': CATEGORIES.MAINTENANCE,
  'QRC-MAINTENANCE': CATEGORIES.MAINTENANCE,
}

/**
 * FHA assignments based on FHA number ranges and content
 */
const FHA_CATEGORY_MAP = {
  // RPAS Operations FHAs (flight-related hazards)
  'FHA-001': CATEGORIES.RPAS_OPERATIONS, // General flight
  'FHA-002': CATEGORIES.RPAS_OPERATIONS, // Flight operations
  'FHA-009': CATEGORIES.RPAS_OPERATIONS,
  'FHA-011': CATEGORIES.RPAS_OPERATIONS,
  'FHA-014': CATEGORIES.RPAS_OPERATIONS,
  'FHA-015': CATEGORIES.RPAS_OPERATIONS,
  'FHA-019': CATEGORIES.RPAS_OPERATIONS,
  'FHA-020': CATEGORIES.RPAS_OPERATIONS,

  // Safety & HSE FHAs (environmental/workplace hazards)
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

  // Land & Marine FHAs
  'FHA-010': CATEGORIES.LAND_MARINE, // Marine operations
}

/**
 * Determine the new category for a document
 */
function getNewCategory(doc) {
  const docNum = (doc.doc_number || '').toUpperCase()
  const title = (doc.title || '').toUpperCase()
  const docType = doc.doc_type || ''

  // Check FHA mapping first (specific assignments)
  if (docNum.startsWith('FHA-') || docType === 'fha') {
    if (FHA_CATEGORY_MAP[docNum]) {
      return FHA_CATEGORY_MAP[docNum]
    }
    // Default FHAs to Safety & HSE
    return CATEGORIES.SAFETY_HSE
  }

  // Check QRC mapping
  if (docNum.startsWith('QRC-') || docType === 'qrc') {
    // Try exact match first
    if (QRC_CATEGORY_MAP[docNum]) {
      return QRC_CATEGORY_MAP[docNum]
    }
    // Try partial match (e.g., QRC-EMERGENCY-FULL matches QRC-EMERGENCY)
    for (const [key, category] of Object.entries(QRC_CATEGORY_MAP)) {
      if (docNum.startsWith(key)) {
        return category
      }
    }
    // Default QRCs to RPAS Operations
    return CATEGORIES.RPAS_OPERATIONS
  }

  // Check Form mapping
  if (docNum.startsWith('FRM-') || docType === 'form') {
    // Try exact match first
    if (FORM_CATEGORY_MAP[docNum]) {
      return FORM_CATEGORY_MAP[docNum]
    }
    // Try partial match
    for (const [key, category] of Object.entries(FORM_CATEGORY_MAP)) {
      if (docNum.startsWith(key)) {
        return category
      }
    }
    // Infer from title keywords
    if (title.includes('TRAINING') || title.includes('COMPETENCY') || title.includes('ORIENTATION')) {
      return CATEGORIES.TRAINING
    }
    if (title.includes('SAFETY') || title.includes('HAZARD') || title.includes('INCIDENT') || title.includes('HSE')) {
      return CATEGORIES.SAFETY_HSE
    }
    if (title.includes('MAINT') || title.includes('BATTERY') || title.includes('INSPECTION')) {
      return CATEGORIES.MAINTENANCE
    }
    if (title.includes('FLIGHT') || title.includes('PREFLIGHT') || title.includes('POSTFLIGHT')) {
      return CATEGORIES.RPAS_OPERATIONS
    }
    // Default forms to RPAS Operations
    return CATEGORIES.RPAS_OPERATIONS
  }

  // Check GUIDE prefix
  if (docNum.startsWith('GUIDE') || docType === 'guide' || title.includes('GUIDE')) {
    return CATEGORIES.TRAINING
  }

  // Check standard document prefixes
  const prefix = docNum.split('-')[0]
  if (PREFIX_TO_CATEGORY[prefix]) {
    return PREFIX_TO_CATEGORY[prefix]
  }

  // Fallback based on title keywords
  if (title.includes('MARINE') || title.includes('VESSEL') || title.includes('LAND SURVEY')) {
    return CATEGORIES.LAND_MARINE
  }
  if (title.includes('TRAINING') || title.includes('COMPETENCY') || title.includes('CRM') || title.includes('FATIGUE')) {
    return CATEGORIES.TRAINING
  }
  if (title.includes('SAFETY') || title.includes('HAZARD') || title.includes('EMERGENCY') || title.includes('HSE')) {
    return CATEGORIES.SAFETY_HSE
  }
  if (title.includes('MAINT') || title.includes('BATTERY')) {
    return CATEGORIES.MAINTENANCE
  }
  if (title.includes('GOVERNANCE') || title.includes('ADMIN') || title.includes('POLICY') || title.includes('COMPLIANCE')) {
    return CATEGORIES.GOVERNANCE
  }

  // Default to RPAS Operations for flight-related content
  return CATEGORIES.RPAS_OPERATIONS
}

/**
 * Main function to reorganize categories
 */
async function reorganizeCategories() {
  console.log('========================================')
  console.log('Document Category Reorganization Script')
  console.log('========================================\n')

  // Fetch all documents
  const { data: documents, error: fetchError } = await supabase
    .from('documents')
    .select('id, doc_number, title, doc_type, category')

  if (fetchError) {
    console.error('Error fetching documents:', fetchError.message)
    process.exit(1)
  }

  console.log(`Found ${documents.length} documents to process\n`)

  // Track category changes
  const categoryChanges = {}
  let updated = 0
  let unchanged = 0
  let errors = 0

  for (const doc of documents) {
    const oldCategory = doc.category
    const newCategory = getNewCategory(doc)

    if (oldCategory !== newCategory) {
      // Update the document
      const { error: updateError } = await supabase
        .from('documents')
        .update({ category: newCategory })
        .eq('id', doc.id)

      if (updateError) {
        console.error(`  ERROR updating ${doc.doc_number}: ${updateError.message}`)
        errors++
      } else {
        console.log(`  ${doc.doc_number || doc.title}: "${oldCategory}" -> "${newCategory}"`)
        updated++

        // Track change statistics
        const changeKey = `${oldCategory || 'null'} -> ${newCategory}`
        categoryChanges[changeKey] = (categoryChanges[changeKey] || 0) + 1
      }
    } else {
      unchanged++
    }
  }

  // Print summary
  console.log('\n========================================')
  console.log('Reorganization Complete!')
  console.log('========================================')
  console.log(`  Updated: ${updated}`)
  console.log(`  Unchanged: ${unchanged}`)
  console.log(`  Errors: ${errors}`)

  if (Object.keys(categoryChanges).length > 0) {
    console.log('\nCategory Changes Summary:')
    for (const [change, count] of Object.entries(categoryChanges)) {
      console.log(`  ${change}: ${count} documents`)
    }
  }

  // Print new category distribution
  console.log('\nNew Category Distribution:')
  const { data: categoryCounts, error: countError } = await supabase
    .from('documents')
    .select('category')

  if (!countError && categoryCounts) {
    const distribution = {}
    categoryCounts.forEach(doc => {
      const cat = doc.category || 'Uncategorized'
      distribution[cat] = (distribution[cat] || 0) + 1
    })

    for (const [category, count] of Object.entries(distribution).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${category}: ${count}`)
    }
  }

  console.log('\n========================================')
}

// Run the script
reorganizeCategories().catch(console.error)
