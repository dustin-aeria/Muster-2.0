-- ============================================
-- Google Forms Integration
-- Add columns to documents table for Google Form linking
-- ============================================

-- Add Google Form ID column to documents table
ALTER TABLE documents
ADD COLUMN IF NOT EXISTS google_form_id TEXT;

-- Add Google Form URL column for quick access
ALTER TABLE documents
ADD COLUMN IF NOT EXISTS google_form_url TEXT;

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_documents_google_form_id ON documents(google_form_id);
