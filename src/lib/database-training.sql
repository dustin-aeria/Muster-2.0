-- ============================================
-- SIMPLIFIED TRAINING SCHEMA v2
-- Run this in Supabase SQL Editor
-- ============================================

-- Drop old complex tables
DROP TABLE IF EXISTS item_completions;
DROP TABLE IF EXISTS module_completions;
DROP TABLE IF EXISTS training_records;
DROP TABLE IF EXISTS module_items;
DROP TABLE IF EXISTS training_modules;
DROP TABLE IF EXISTS learning_paths;

-- Keep certifications table if it exists (don't drop)

-- Track assignments (which operators are assigned to which tracks)
CREATE TABLE track_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id UUID REFERENCES operators(id) ON DELETE CASCADE,
  track TEXT NOT NULL,
  status TEXT DEFAULT 'assigned',
  assigned_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  due_date DATE,
  assigned_by UUID,
  UNIQUE(operator_id, track)
);

-- Document acknowledgments (operator read and acknowledged a document)
CREATE TABLE document_acknowledgments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID REFERENCES track_assignments(id) ON DELETE CASCADE,
  document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
  acknowledged_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(assignment_id, document_id)
);

-- Flight skill sign-offs (practical checklist with supervisor approval)
CREATE TABLE flight_skill_signoffs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID REFERENCES track_assignments(id) ON DELETE CASCADE,
  skill_name TEXT NOT NULL,
  supervisor_id UUID REFERENCES operators(id),
  signed_off_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT,
  UNIQUE(assignment_id, skill_name)
);

-- Enable RLS
ALTER TABLE track_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_acknowledgments ENABLE ROW LEVEL SECURITY;
ALTER TABLE flight_skill_signoffs ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "allow_all" ON track_assignments FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "allow_all" ON document_acknowledgments FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "allow_all" ON flight_skill_signoffs FOR ALL TO authenticated USING (true) WITH CHECK (true);
