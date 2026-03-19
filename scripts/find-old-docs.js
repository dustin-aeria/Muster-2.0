/**
 * Find documents with old-style doc numbers (OPS-, HSE-, etc.)
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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

async function findOldDocs() {
  const { data, error } = await supabase
    .from('documents')
    .select('id, doc_number, title, category')
    .order('doc_number')

  if (error) {
    console.error(error)
    return
  }

  console.log('Total documents:', data.length)
  console.log('')

  // Find old-style doc numbers
  const oldPrefixes = ['OPS-', 'HSE-', 'SMS-', 'TCP-', 'CRM-', 'MCM-', 'ADM-', 'LM-', 'FRM-', 'QRC-', 'FHA-', 'REG-']
  const oldDocs = data.filter(d => {
    const num = d.doc_number || ''
    return oldPrefixes.some(p => num.startsWith(p))
  })

  const newDocs = data.filter(d => {
    const num = d.doc_number || ''
    return ['RPAS-', 'SAFE-', 'TRAIN-', 'MAINT-', 'GOV-', 'MARINE-'].some(p => num.startsWith(p))
  })

  const otherDocs = data.filter(d => {
    const num = d.doc_number || ''
    return !oldPrefixes.some(p => num.startsWith(p)) &&
           !['RPAS-', 'SAFE-', 'TRAIN-', 'MAINT-', 'GOV-', 'MARINE-'].some(p => num.startsWith(p))
  })

  console.log('Documents with NEW prefixes (RPAS, SAFE, etc.):', newDocs.length)
  console.log('Documents with OLD prefixes (OPS, HSE, etc.):', oldDocs.length)
  console.log('Documents with OTHER/no prefix:', otherDocs.length)

  if (oldDocs.length > 0) {
    console.log('\n=== OLD DOCUMENTS (to be deleted) ===')
    oldDocs.forEach(d => {
      console.log(`  ${d.id} | ${(d.doc_number || 'N/A').padEnd(15)} | ${d.title}`)
    })
  }

  if (otherDocs.length > 0) {
    console.log('\n=== OTHER DOCUMENTS ===')
    otherDocs.forEach(d => {
      console.log(`  ${d.id} | ${(d.doc_number || 'N/A').padEnd(15)} | ${d.title}`)
    })
  }

  // Check for title duplicates
  console.log('\n=== CHECKING FOR TITLE DUPLICATES ===')
  const titleCounts = {}
  data.forEach(d => {
    const key = d.title.toLowerCase()
    if (!titleCounts[key]) titleCounts[key] = []
    titleCounts[key].push(d)
  })

  const duplicates = Object.entries(titleCounts).filter(([k, v]) => v.length > 1)
  if (duplicates.length > 0) {
    console.log(`Found ${duplicates.length} duplicate titles:`)
    duplicates.forEach(([title, docs]) => {
      console.log(`\n  "${title}" (${docs.length} copies):`)
      docs.forEach(d => {
        console.log(`    ${d.doc_number} | ${d.category}`)
      })
    })
  } else {
    console.log('No duplicate titles found')
  }
}

findOldDocs().catch(console.error)
