-- ============================================
-- Phase 4: Safety Program Tables
-- Run this in Supabase SQL Editor
-- ============================================

-- INCIDENTS
CREATE TABLE incidents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Basic info
  title TEXT NOT NULL,
  incident_date DATE NOT NULL,
  incident_time TIME,
  location TEXT,

  -- Classification
  severity TEXT NOT NULL CHECK (severity IN ('near_miss', 'minor', 'moderate', 'major', 'critical')),
  incident_type TEXT, -- e.g., 'equipment_damage', 'injury', 'property_damage', 'environmental', 'flyaway', 'collision'

  -- Description
  description TEXT,
  immediate_actions TEXT,
  root_cause TEXT,

  -- People involved
  reported_by TEXT,
  people_involved TEXT[], -- Array of names
  witnesses TEXT[],

  -- Regulatory
  reportable BOOLEAN DEFAULT false,
  reported_to TEXT[], -- e.g., ['Transport Canada', 'WorkSafeBC']
  report_reference TEXT,

  -- Status tracking
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'investigating', 'resolved', 'archived')),
  assigned_to TEXT,
  resolution TEXT,
  resolved_date DATE,

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE incidents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON incidents FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- CAPAS (Corrective and Preventive Actions)
CREATE TABLE capas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Basic info
  title TEXT NOT NULL,
  capa_type TEXT NOT NULL CHECK (capa_type IN ('corrective', 'preventive')),

  -- Source/Link
  source_type TEXT, -- 'incident', 'inspection', 'audit', 'observation'
  source_id UUID, -- Link to incident or inspection
  source_reference TEXT, -- Human-readable reference

  -- Details
  description TEXT,
  action_required TEXT NOT NULL,

  -- Assignment
  assigned_to TEXT,
  due_date DATE,

  -- Status
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'completed', 'verified', 'archived')),
  completion_date DATE,
  verification_notes TEXT,
  verified_by TEXT,
  verified_date DATE,

  -- Priority
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE capas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON capas FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- JHSC MEETINGS (Joint Health & Safety Committee)
CREATE TABLE jhsc_meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Meeting info
  meeting_date DATE NOT NULL,
  meeting_time TIME,
  location TEXT,
  meeting_type TEXT DEFAULT 'regular' CHECK (meeting_type IN ('regular', 'special', 'emergency')),

  -- Attendees
  attendees TEXT[],
  chair TEXT,
  secretary TEXT,

  -- Content
  agenda TEXT,
  minutes TEXT,

  -- Action items stored as JSON array
  action_items JSONB DEFAULT '[]',
  -- Format: [{ "description": "...", "assigned_to": "...", "due_date": "...", "status": "open|completed" }]

  -- Status
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'archived')),

  -- Next meeting
  next_meeting_date DATE,

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE jhsc_meetings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON jhsc_meetings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- INSPECTIONS
CREATE TABLE inspections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Basic info
  title TEXT NOT NULL,
  inspection_type TEXT NOT NULL, -- 'workplace', 'equipment', 'site', 'vehicle', 'ppe'
  inspection_date DATE NOT NULL,

  -- Location/Subject
  location TEXT,
  equipment_id UUID, -- Optional link to equipment table
  equipment_name TEXT,

  -- Inspector
  inspector TEXT NOT NULL,

  -- Checklist and findings as JSON
  checklist JSONB DEFAULT '[]',
  -- Format: [{ "item": "...", "status": "pass|fail|na", "notes": "..." }]

  findings TEXT,

  -- Overall result
  result TEXT CHECK (result IN ('pass', 'fail', 'conditional')),

  -- Follow-up
  follow_up_required BOOLEAN DEFAULT false,
  follow_up_notes TEXT,

  -- Status
  status TEXT DEFAULT 'completed' CHECK (status IN ('scheduled', 'in_progress', 'completed', 'archived')),

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE inspections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON inspections FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Indexes for better performance
CREATE INDEX idx_incidents_date ON incidents(incident_date DESC);
CREATE INDEX idx_incidents_status ON incidents(status);
CREATE INDEX idx_incidents_severity ON incidents(severity);

CREATE INDEX idx_capas_due_date ON capas(due_date);
CREATE INDEX idx_capas_status ON capas(status);
CREATE INDEX idx_capas_source ON capas(source_type, source_id);

CREATE INDEX idx_jhsc_meetings_date ON jhsc_meetings(meeting_date DESC);
CREATE INDEX idx_jhsc_meetings_status ON jhsc_meetings(status);

CREATE INDEX idx_inspections_date ON inspections(inspection_date DESC);
CREATE INDEX idx_inspections_type ON inspections(inspection_type);
CREATE INDEX idx_inspections_status ON inspections(status);
