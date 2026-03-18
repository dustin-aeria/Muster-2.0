-- ============================================
-- TRAINING RECORDS TABLE
-- Run this in Supabase SQL Editor
-- ============================================

-- Training records - the main tracker
CREATE TABLE IF NOT EXISTS training_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  person_name TEXT NOT NULL,
  role TEXT NOT NULL,
  training_type TEXT NOT NULL DEFAULT 'initial', -- initial, recurrent, upgrade, remedial
  completed_date DATE,
  signed_off_by TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE training_records ENABLE ROW LEVEL SECURITY;

-- Policy (allow all for authenticated users)
CREATE POLICY "allow_all_training_records" ON training_records
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_training_records_person ON training_records(person_name);
CREATE INDEX IF NOT EXISTS idx_training_records_role ON training_records(role);
CREATE INDEX IF NOT EXISTS idx_training_records_date ON training_records(completed_date);
