-- ============================================
-- TRAINING MODULE SCHEMA
-- Run this in Supabase SQL Editor
-- ============================================

-- Learning Paths (courses/programs)
CREATE TABLE IF NOT EXISTS learning_paths (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('onboarding', 'pilot', 'safety')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),
  required_for_roles TEXT[] DEFAULT '{}',
  recurrence TEXT DEFAULT 'none' CHECK (recurrence IN ('none', 'annual', 'quarterly', 'monthly')),
  recurrence_months INTEGER DEFAULT 12,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Modules within learning paths
CREATE TABLE IF NOT EXISTS training_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
  sequence INTEGER NOT NULL DEFAULT 0,
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Items within modules (documents to read, videos to watch, practicals)
CREATE TABLE IF NOT EXISTS module_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID NOT NULL REFERENCES training_modules(id) ON DELETE CASCADE,
  sequence INTEGER NOT NULL DEFAULT 0,
  type TEXT NOT NULL CHECK (type IN ('document', 'video', 'practical', 'acknowledgment')),
  title TEXT NOT NULL,
  description TEXT,
  document_id UUID REFERENCES documents(id) ON DELETE SET NULL,
  video_url TEXT,
  practical_instructions TEXT,
  requires_supervisor BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Training records (operator progress)
CREATE TABLE IF NOT EXISTS training_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id UUID NOT NULL REFERENCES operators(id) ON DELETE CASCADE,
  path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
  assigned_at TIMESTAMPTZ DEFAULT NOW(),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  due_date DATE,
  assigned_by UUID REFERENCES operators(id),
  UNIQUE(operator_id, path_id)
);

-- Module completion tracking
CREATE TABLE IF NOT EXISTS module_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  record_id UUID NOT NULL REFERENCES training_records(id) ON DELETE CASCADE,
  module_id UUID NOT NULL REFERENCES training_modules(id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(record_id, module_id)
);

-- Item completion tracking (individual items within modules)
CREATE TABLE IF NOT EXISTS item_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  record_id UUID NOT NULL REFERENCES training_records(id) ON DELETE CASCADE,
  item_id UUID NOT NULL REFERENCES module_items(id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  supervisor_id UUID REFERENCES operators(id),
  supervisor_notes TEXT,
  UNIQUE(record_id, item_id)
);

-- Certifications (granted upon completing certain paths)
CREATE TABLE IF NOT EXISTS certifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id UUID NOT NULL REFERENCES operators(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  issuing_authority TEXT,
  issued_date DATE NOT NULL,
  expiry_date DATE,
  linked_path_id UUID REFERENCES learning_paths(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'expired', 'revoked')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_training_modules_path ON training_modules(path_id);
CREATE INDEX IF NOT EXISTS idx_module_items_module ON module_items(module_id);
CREATE INDEX IF NOT EXISTS idx_training_records_operator ON training_records(operator_id);
CREATE INDEX IF NOT EXISTS idx_training_records_path ON training_records(path_id);
CREATE INDEX IF NOT EXISTS idx_certifications_operator ON certifications(operator_id);
CREATE INDEX IF NOT EXISTS idx_certifications_expiry ON certifications(expiry_date);

-- Enable RLS
ALTER TABLE learning_paths ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow all for authenticated users)
CREATE POLICY "Allow all for authenticated users" ON learning_paths FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated users" ON training_modules FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated users" ON module_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated users" ON training_records FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated users" ON module_completions FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated users" ON item_completions FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated users" ON certifications FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ============================================
-- SAMPLE DATA
-- ============================================

-- Sample Learning Paths
INSERT INTO learning_paths (name, description, category, status, required_for_roles, recurrence, recurrence_months) VALUES
('New Operator Onboarding', 'Complete orientation for new team members covering all company policies, procedures, and forms.', 'onboarding', 'active', ARRAY['pic_basic', 'pic_advanced', 'visual_observer', 'ground_supervisor'], 'none', NULL),
('Pilot Recurrency', 'Annual refresher on regulations, flight planning, and flight proficiency requirements.', 'pilot', 'active', ARRAY['pic_basic', 'pic_advanced', 'pic_complex', 'pic_specialized'], 'annual', 12),
('Quarterly Safety Refresher', 'Regular review of safety policies, emergency procedures, and field protocols.', 'safety', 'active', ARRAY['pic_basic', 'pic_advanced', 'visual_observer', 'ground_supervisor', 'payload_operator'], 'quarterly', 3);
