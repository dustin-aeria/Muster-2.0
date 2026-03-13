-- ============================================
-- Phase 6: Project Management Tables
-- Run this in Supabase SQL Editor
-- ============================================

-- PROJECT STAGES (configurable pipeline)
CREATE TABLE project_stages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#6B7280', -- Hex color for UI
  sort_order INTEGER NOT NULL,
  is_default BOOLEAN DEFAULT false, -- Default stage for new projects
  is_final BOOLEAN DEFAULT false, -- Marks project as complete
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE project_stages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON project_stages FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Insert default stages
INSERT INTO project_stages (name, color, sort_order, is_default) VALUES
  ('Prospect', '#9CA3AF', 1, true),
  ('Proposal', '#3B82F6', 2, false),
  ('Planning', '#8B5CF6', 3, false),
  ('Active', '#10B981', 4, false),
  ('Complete', '#059669', 5, false),
  ('Invoiced', '#6366F1', 6, true);

-- PROJECTS
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Basic info
  name TEXT NOT NULL,
  description TEXT,
  client_name TEXT,
  client_contact TEXT,
  client_email TEXT,
  client_phone TEXT,

  -- Stage/Status
  stage_id UUID REFERENCES project_stages(id),
  stage_name TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'on_hold', 'cancelled', 'archived')),

  -- Dates
  start_date DATE,
  end_date DATE,
  due_date DATE,

  -- Location
  location TEXT,
  coordinates JSONB, -- { lat, lng }

  -- Financial
  estimated_cost DECIMAL(12,2),
  quoted_price DECIMAL(12,2),
  actual_cost DECIMAL(12,2),
  profit_margin DECIMAL(5,2), -- Percentage

  -- SORA (calculated)
  sail_level INTEGER, -- 1-6
  grc_value INTEGER,
  arc_value TEXT, -- 'a', 'b', 'c', 'd'

  -- Map data stored as JSON
  map_data JSONB DEFAULT '{}',
  -- Format: {
  --   center: { lat, lng },
  --   zoom: number,
  --   elements: [{ id, type, name, color, coordinates, properties }]
  -- }

  -- Operational parameters
  max_altitude_m INTEGER,
  flight_speed_ms DECIMAL(5,2),
  operational_volume JSONB, -- Calculated volume data

  -- Notifications
  notification_contacts JSONB DEFAULT '[]', -- [{ name, email, phone }]

  -- Tags and categories
  tags TEXT[],
  category TEXT,

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON projects FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- PROJECT RESOURCES (assignments)
CREATE TABLE project_resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,

  -- Resource type and reference
  resource_type TEXT NOT NULL CHECK (resource_type IN ('operator', 'equipment', 'service')),
  resource_id UUID,
  resource_name TEXT NOT NULL,

  -- Role/purpose
  role TEXT, -- e.g., 'PIC', 'VO', 'Primary Aircraft'

  -- Rate info (snapshot at time of assignment)
  rate_type TEXT, -- 'hourly', 'daily', 'weekly', 'fixed'
  rate_amount DECIMAL(10,2),

  -- Usage
  estimated_hours DECIMAL(6,2),
  estimated_days DECIMAL(6,2),
  actual_hours DECIMAL(6,2),
  actual_days DECIMAL(6,2),

  -- Calculated cost
  estimated_cost DECIMAL(10,2),
  actual_cost DECIMAL(10,2),

  -- Dates
  start_date DATE,
  end_date DATE,

  -- Status
  status TEXT DEFAULT 'assigned' CHECK (status IN ('assigned', 'confirmed', 'completed', 'cancelled')),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE project_resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON project_resources FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- TAILGATE MEETINGS
CREATE TABLE tailgate_meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,

  -- Meeting info
  meeting_date DATE NOT NULL,
  meeting_time TIME,
  location TEXT,

  -- Content
  objectives TEXT,
  identified_risks TEXT,
  controls TEXT,
  weather_conditions TEXT,
  site_conditions TEXT,

  -- Attendees
  attendees JSONB DEFAULT '[]', -- [{ name, role, fit_for_duty: bool }]

  -- Sign-off
  conducted_by TEXT NOT NULL,
  signature TEXT, -- Could store signature data

  -- GO/NO-GO
  decision TEXT CHECK (decision IN ('go', 'nogo', 'conditional')),
  decision_reason TEXT,
  decision_time TIMESTAMPTZ,

  -- Notification tracking
  notifications_sent BOOLEAN DEFAULT false,
  notification_time TIMESTAMPTZ,

  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'completed', 'archived')),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE tailgate_meetings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON tailgate_meetings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- NOTIFICATION LOG
CREATE TABLE notification_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Source
  source_type TEXT NOT NULL, -- 'tailgate', 'project', 'incident'
  source_id UUID,

  -- Type
  notification_type TEXT NOT NULL, -- 'go', 'nogo', 'alert'

  -- Recipients
  recipients JSONB NOT NULL, -- [{ name, email, phone, method: 'email'|'sms'|'both' }]

  -- Content
  subject TEXT,
  message TEXT NOT NULL,

  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed', 'partial')),
  sent_at TIMESTAMPTZ,
  error_details TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE notification_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON notification_log FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Indexes
CREATE INDEX idx_projects_stage ON projects(stage_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_dates ON projects(start_date, end_date);
CREATE INDEX idx_projects_client ON projects(client_name);

CREATE INDEX idx_project_resources_project ON project_resources(project_id);
CREATE INDEX idx_project_resources_type ON project_resources(resource_type);

CREATE INDEX idx_tailgate_project ON tailgate_meetings(project_id);
CREATE INDEX idx_tailgate_date ON tailgate_meetings(meeting_date);
CREATE INDEX idx_tailgate_decision ON tailgate_meetings(decision);

CREATE INDEX idx_notification_source ON notification_log(source_type, source_id);
CREATE INDEX idx_notification_status ON notification_log(status);
