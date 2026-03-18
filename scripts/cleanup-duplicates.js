import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Load environment variables
const envLocalPath = join(rootDir, '.env.local');
const envPath = join(rootDir, '.env');

if (existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else if (existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function cleanupDuplicates() {
  console.log('Fetching all documents...');

  const { data: documents, error } = await supabase
    .from('documents')
    .select('id, title, created_at')
    .order('title')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching documents:', error);
    return;
  }

  console.log(`Total documents: ${documents.length}`);

  // Group by title
  const byTitle = {};
  for (const doc of documents) {
    if (!byTitle[doc.title]) {
      byTitle[doc.title] = [];
    }
    byTitle[doc.title].push(doc);
  }

  // Find duplicates (keep first/oldest, delete rest)
  const toDelete = [];
  for (const [title, docs] of Object.entries(byTitle)) {
    if (docs.length > 1) {
      // Keep first (oldest), mark rest for deletion
      for (let i = 1; i < docs.length; i++) {
        toDelete.push(docs[i].id);
      }
      console.log(`"${title}": keeping 1, deleting ${docs.length - 1}`);
    }
  }

  console.log(`\nTotal duplicates to delete: ${toDelete.length}`);

  if (toDelete.length === 0) {
    console.log('No duplicates found!');
    return;
  }

  // Delete in batches
  const batchSize = 50;
  let deleted = 0;

  for (let i = 0; i < toDelete.length; i += batchSize) {
    const batch = toDelete.slice(i, i + batchSize);

    const { error: deleteError } = await supabase
      .from('documents')
      .delete()
      .in('id', batch);

    if (deleteError) {
      console.error(`Error deleting batch ${i / batchSize + 1}:`, deleteError);
    } else {
      deleted += batch.length;
      console.log(`Deleted batch ${Math.floor(i / batchSize) + 1}: ${batch.length} documents`);
    }
  }

  console.log(`\nCleanup complete! Deleted ${deleted} duplicates.`);

  // Verify final count
  const { count } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true });

  console.log(`Remaining documents: ${count}`);
}

cleanupDuplicates();
