/**
 * List all documents grouped by category
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

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY)

async function listDocuments() {
  const { data, error } = await supabase
    .from('documents')
    .select('id, doc_number, title, doc_type, category')
    .order('category')
    .order('doc_type')
    .order('doc_number')

  if (error) {
    console.error(error)
    return
  }

  // Group by category
  const byCategory = {}
  data.forEach(d => {
    const cat = d.category || 'Other'
    if (!byCategory[cat]) byCategory[cat] = []
    byCategory[cat].push(d)
  })

  // Print summary
  Object.keys(byCategory).sort().forEach(cat => {
    console.log('\n=== ' + cat + ' (' + byCategory[cat].length + ') ===')
    byCategory[cat].forEach(d => {
      const docNum = (d.doc_number || 'N/A').padEnd(20)
      const docType = d.doc_type.padEnd(12)
      console.log('  ' + docNum + ' | ' + docType + ' | ' + d.title)
    })
  })

  console.log('\n\nTOTAL: ' + data.length + ' documents')
}

listDocuments().catch(console.error)
