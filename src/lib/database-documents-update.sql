-- ============================================
-- DOCUMENTS TABLE UPDATE
-- Run this in Supabase SQL Editor
-- ============================================

-- Add sort_order column for logical document sequencing
ALTER TABLE documents ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 500;

-- Create index for faster sorting
CREATE INDEX IF NOT EXISTS idx_documents_sort_order ON documents(sort_order);

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS idx_documents_category ON documents(category);

-- Create index for doc_type filtering
CREATE INDEX IF NOT EXISTS idx_documents_doc_type ON documents(doc_type);
