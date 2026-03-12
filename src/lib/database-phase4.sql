-- ============================================
-- Phase 4: Workflows, Fillable Forms & Google Drive
-- Database Schema for Supabase (PostgreSQL)
-- ============================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- FORM SUBMISSIONS TABLE
-- ============================================
-- Stores filled-out form submissions from form templates

CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Link to source form template
  form_id UUID REFERENCES documents(id) ON DELETE SET NULL,
  form_title TEXT NOT NULL,
  form_number TEXT,

  -- Submission data (JSON object with field values)
  field_values JSONB NOT NULL DEFAULT '{}',

  -- Status tracking
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'approved', 'rejected')),
  submitted_at TIMESTAMPTZ,
  submitted_by UUID REFERENCES auth.users(id),

  -- PDF storage
  pdf_url TEXT,
  pdf_generated_at TIMESTAMPTZ,

  -- Google Drive integration
  drive_file_id TEXT,
  drive_file_url TEXT,

  -- Workflow association
  workflow_instance_id UUID,

  -- Audit fields
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_id ON form_submissions(form_id);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_by ON form_submissions(created_by);

-- ============================================
-- WORKFLOW TEMPLATES TABLE
-- ============================================
-- Defines reusable workflow configurations

CREATE TABLE IF NOT EXISTS workflow_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  name TEXT NOT NULL,
  description TEXT,

  -- Workflow steps as JSON array
  -- Example: [
  --   { "id": "submit", "name": "Submit", "order": 1, "actions": ["approve", "reject"] },
  --   { "id": "review", "name": "Manager Review", "order": 2, "assignee_role": "manager", "actions": ["approve", "reject", "request_changes"] },
  --   { "id": "complete", "name": "Complete", "order": 3, "final": true }
  -- ]
  steps JSONB NOT NULL DEFAULT '[]',

  -- Trigger configuration
  trigger_type TEXT DEFAULT 'manual' CHECK (trigger_type IN ('manual', 'form_submission')),
  trigger_form_types TEXT[], -- e.g., ['incident', 'safety']

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'archived')),

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_workflow_templates_status ON workflow_templates(status);

-- ============================================
-- WORKFLOW INSTANCES TABLE
-- ============================================
-- Tracks active workflow executions

CREATE TABLE IF NOT EXISTS workflow_instances (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Link to template
  template_id UUID REFERENCES workflow_templates(id) ON DELETE SET NULL,
  template_name TEXT NOT NULL,

  -- Entity being tracked
  entity_type TEXT NOT NULL, -- 'form_submission', 'document', etc.
  entity_id UUID NOT NULL,
  entity_title TEXT,

  -- Current state
  current_step_id TEXT NOT NULL,
  current_step_name TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),

  -- Assignment
  assigned_to UUID REFERENCES auth.users(id),
  assigned_to_name TEXT,
  assigned_to_email TEXT,
  due_date DATE,

  -- History as JSON array
  -- Example: [
  --   { "step": "submit", "action": "submitted", "by": "user_id", "by_name": "John Doe", "at": "2024-01-15T10:00:00Z", "comment": "" }
  -- ]
  history JSONB NOT NULL DEFAULT '[]',

  -- Timestamps
  started_at TIMESTAMPTZ DEFAULT NOW(),
  started_by UUID REFERENCES auth.users(id),
  completed_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_workflow_instances_template_id ON workflow_instances(template_id);
CREATE INDEX IF NOT EXISTS idx_workflow_instances_entity ON workflow_instances(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_workflow_instances_assigned_to ON workflow_instances(assigned_to);
CREATE INDEX IF NOT EXISTS idx_workflow_instances_status ON workflow_instances(status);

-- ============================================
-- GOOGLE DRIVE TOKENS TABLE
-- ============================================
-- Stores OAuth tokens for Google Drive integration

CREATE TABLE IF NOT EXISTS google_drive_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  user_id UUID REFERENCES auth.users(id) UNIQUE,

  -- OAuth tokens (encrypted in production)
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  token_expiry TIMESTAMPTZ NOT NULL,

  -- User preferences
  default_folder_id TEXT,
  default_folder_name TEXT,
  auto_upload BOOLEAN DEFAULT false,

  -- Timestamps
  connected_at TIMESTAMPTZ DEFAULT NOW(),
  last_used_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_google_drive_tokens_user_id ON google_drive_tokens(user_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE google_drive_tokens ENABLE ROW LEVEL SECURITY;

-- Form Submissions: Users can see all, but only edit their own drafts
CREATE POLICY "Users can view all form submissions" ON form_submissions
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own submissions" ON form_submissions
  FOR INSERT WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own drafts" ON form_submissions
  FOR UPDATE USING (auth.uid() = created_by AND status = 'draft');

-- Workflow Templates: All can view active, admins can modify
CREATE POLICY "Users can view active workflow templates" ON workflow_templates
  FOR SELECT USING (status = 'active');

CREATE POLICY "Users can insert workflow templates" ON workflow_templates
  FOR INSERT WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their workflow templates" ON workflow_templates
  FOR UPDATE USING (auth.uid() = created_by);

-- Workflow Instances: Users can see instances they're involved in
CREATE POLICY "Users can view relevant workflow instances" ON workflow_instances
  FOR SELECT USING (
    auth.uid() = started_by OR
    auth.uid() = assigned_to OR
    auth.uid() IN (SELECT (elem->>'by')::uuid FROM jsonb_array_elements(history) AS elem)
  );

CREATE POLICY "Users can insert workflow instances" ON workflow_instances
  FOR INSERT WITH CHECK (auth.uid() = started_by);

CREATE POLICY "Assigned users can update workflow instances" ON workflow_instances
  FOR UPDATE USING (auth.uid() = assigned_to OR auth.uid() = started_by);

-- Google Drive Tokens: Users can only access their own
CREATE POLICY "Users can view own tokens" ON google_drive_tokens
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tokens" ON google_drive_tokens
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tokens" ON google_drive_tokens
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tokens" ON google_drive_tokens
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workflow_templates_updated_at
  BEFORE UPDATE ON workflow_templates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
