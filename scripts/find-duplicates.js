import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function cleanup() {
  const { data } = await supabase
    .from('documents')
    .select('id, title, doc_number, doc_type')
    .order('title');

  const toDelete = [];
  const toUpdate = [];

  data.forEach(doc => {
    // Delete "FRM-INSPECTION Worksite Inspection" (duplicate of FRM-SITEINSP)
    if (doc.title === 'FRM-INSPECTION Worksite Inspection') {
      console.log('DELETE: FRM-INSPECTION Worksite Inspection (dup of FRM-SITEINSP)');
      toDelete.push(doc.id);
    }

    // Delete "FRM-RPAS-INCIDENT RPAS Incident Report" (duplicate)
    if (doc.title === 'FRM-RPAS-INCIDENT RPAS Incident Report') {
      console.log('DELETE: FRM-RPAS-INCIDENT RPAS Incident Report (dup)');
      toDelete.push(doc.id);
    }

    // Fix the weird "RPAS-INCIDENT RPAS Incident Report" title
    if (doc.title === 'RPAS-INCIDENT RPAS Incident Report') {
      console.log('UPDATE: "RPAS-INCIDENT RPAS Incident Report" -> "RPAS Incident Report"');
      toUpdate.push({ id: doc.id, title: 'RPAS Incident Report', doc_number: 'FRM-RPAS-INCIDENT' });
    }

    // Fix "LOG RPAS Flight Log" -> "RPAS Flight Log"
    if (doc.title === 'LOG RPAS Flight Log') {
      console.log('UPDATE: "LOG RPAS Flight Log" -> "RPAS Flight Log"');
      toUpdate.push({ id: doc.id, title: 'RPAS Flight Log', doc_number: 'FRM-FLIGHT-LOG' });
    }

    // Clean up QRC titles - move prefix to doc_number
    if (doc.title.startsWith('QRC-') && !doc.doc_number) {
      const parts = doc.title.split(' ');
      const prefix = parts[0];
      const cleanTitle = parts.slice(1).join(' ');
      console.log(`UPDATE: "${doc.title}" -> "${cleanTitle}" (${prefix})`);
      toUpdate.push({ id: doc.id, title: cleanTitle, doc_number: prefix });
    }

    // Clean up REG titles
    if (doc.title.startsWith('REG-') && !doc.doc_number) {
      const parts = doc.title.split(' ');
      const prefix = parts[0];
      const cleanTitle = parts.slice(1).join(' ');
      console.log(`UPDATE: "${doc.title}" -> "${cleanTitle}" (${prefix})`);
      toUpdate.push({ id: doc.id, title: cleanTitle, doc_number: prefix });
    }
  });

  // Perform deletions
  if (toDelete.length > 0) {
    console.log(`\nDeleting ${toDelete.length} documents...`);
    const { error } = await supabase.from('documents').delete().in('id', toDelete);
    if (error) console.error('Delete error:', error);
    else console.log('Deleted successfully.');
  }

  // Perform updates
  if (toUpdate.length > 0) {
    console.log(`\nUpdating ${toUpdate.length} documents...`);
    for (const upd of toUpdate) {
      const { error } = await supabase
        .from('documents')
        .update({ title: upd.title, doc_number: upd.doc_number })
        .eq('id', upd.id);
      if (error) console.error('Update error:', error);
    }
    console.log('Updates complete.');
  }

  // Final count
  const { count } = await supabase.from('documents').select('*', { count: 'exact', head: true });
  console.log(`\nFinal document count: ${count}`);
}

cleanup();
