-- ============================================
-- MUSTER 2.0 DATABASE SCHEMA
-- Phase 3: Documents
-- Run this in Supabase SQL Editor
-- ============================================

-- ============================================
-- DOCUMENTS
-- Policies, Procedures, FHAs with embedded amendments
-- ============================================
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Basic Info
  title TEXT NOT NULL,
  doc_type TEXT NOT NULL, -- 'policy', 'procedure', 'fha', 'guide', 'form', 'other'
  doc_number TEXT, -- e.g., 'POL-001', 'SOP-003', 'FHA-012'
  category TEXT, -- e.g., 'Safety', 'Operations', 'HR', 'Equipment'

  -- Content (markdown with embedded amendment table)
  content TEXT NOT NULL DEFAULT '',

  -- Version tracking
  version TEXT DEFAULT '1.0',
  effective_date DATE,
  review_date DATE, -- Next review due

  -- Status
  status TEXT DEFAULT 'draft', -- 'draft', 'active', 'under_review', 'archived'

  -- Metadata
  author TEXT,
  approver TEXT,
  tags TEXT[] DEFAULT '{}',

  -- Notes
  notes TEXT
);

CREATE INDEX idx_documents_status ON documents (status);
CREATE INDEX idx_documents_type ON documents (doc_type);
CREATE INDEX idx_documents_category ON documents (category);
CREATE INDEX idx_documents_tags ON documents USING GIN (tags);

-- Trigger for updated_at
CREATE TRIGGER update_documents_updated_at
  BEFORE UPDATE ON documents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Enable RLS
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Allow all operations for authenticated users
CREATE POLICY "Allow all for authenticated users" ON documents
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
