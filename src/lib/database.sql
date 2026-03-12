-- ============================================
-- MUSTER 2.0 DATABASE SCHEMA
-- Phase 2: Libraries
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- OPERATORS
-- Personnel who can be assigned to projects
-- ============================================
CREATE TABLE operators (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Basic Info
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,

  -- Roles (tags for assignment)
  roles TEXT[] DEFAULT '{}',
  -- e.g., ['PIC', 'VO', 'Payload Operator', 'Field Biologist']

  -- Rates (stored as day rate, calculated for other periods)
  rate_type TEXT DEFAULT 'day', -- 'hourly', 'half_day', 'day', 'week'
  rate_hourly DECIMAL(10,2),
  rate_half_day DECIMAL(10,2),
  rate_day DECIMAL(10,2),
  rate_week DECIMAL(10,2),
  travel_rate_day DECIMAL(10,2), -- 50% of field rate typically

  -- Status
  status TEXT DEFAULT 'active', -- 'active', 'archived'

  -- Notes
  notes TEXT,

  -- Certifications stored as JSONB array
  -- Each: { name, number, issued_date, expiry_date, issuer, notes }
  certifications JSONB DEFAULT '[]'
);

-- Certifications index for expiry queries
CREATE INDEX idx_operators_certifications ON operators USING GIN (certifications);
CREATE INDEX idx_operators_status ON operators (status);
CREATE INDEX idx_operators_roles ON operators USING GIN (roles);

-- ============================================
-- EQUIPMENT
-- RPAS, sensors, vessels, etc.
-- ============================================
CREATE TABLE equipment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Basic Info
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'rpas_small', 'rpas_medium', 'sensor', 'vessel', 'other'
  category TEXT, -- e.g., 'RPAS <25kg', 'RPAS 25-150kg', 'Sensor', 'Water'
  serial_number TEXT,
  manufacturer TEXT,
  model TEXT,

  -- Rates
  rate_day DECIMAL(10,2),
  rate_week DECIMAL(10,2), -- typically 4x day rate

  -- Rate Calculator (price / days paid off)
  purchase_price DECIMAL(12,2),
  days_to_pay_off INTEGER,
  -- calculated_daily_rate would be purchase_price / days_to_pay_off

  -- Status
  status TEXT DEFAULT 'active', -- 'active', 'maintenance', 'archived'

  -- Maintenance notes (freeform)
  maintenance_notes TEXT,

  -- TC 922.XX Safety Assurance Declarations
  -- Each key is the section, value is boolean
  declarations JSONB DEFAULT '{
    "922_04": false,
    "922_05": false,
    "922_06": false,
    "922_07": false,
    "922_08": false,
    "922_09": false,
    "922_10": false,
    "922_11": false,
    "922_12": false
  }',

  -- Notes
  notes TEXT
);

CREATE INDEX idx_equipment_status ON equipment (status);
CREATE INDEX idx_equipment_type ON equipment (type);
CREATE INDEX idx_equipment_category ON equipment (category);

-- ============================================
-- SERVICES
-- Service catalog with complex rate structures
-- ============================================
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Basic Info
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  -- e.g., 'Consulting', 'Training', 'Field', 'Data Processing', 'Deliverables', 'Specialized', 'Mob/Demob', 'Insurance', 'Travel'
  description TEXT,

  -- Primary rate
  base_unit TEXT NOT NULL, -- 'hour', 'half_day', 'day', 'week', 'project', 'each', 'per_hectare', 'per_km', 'per_gb', etc.
  base_rate DECIMAL(10,2),

  -- Alternative rates (JSONB for flexibility)
  -- e.g., { "per_hectare": 50, "per_km": 100, "per_gb": 75 }
  alternate_rates JSONB DEFAULT '{}',

  -- Pricing options description
  pricing_options TEXT,

  -- Status
  status TEXT DEFAULT 'active', -- 'active', 'archived'

  -- Notes
  notes TEXT
);

CREATE INDEX idx_services_status ON services (status);
CREATE INDEX idx_services_category ON services (category);

-- ============================================
-- SERVICE MODIFIERS
-- Rush fees, after-hours, etc.
-- ============================================
CREATE TABLE service_modifiers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  name TEXT NOT NULL,
  description TEXT,

  -- Modifier type
  modifier_type TEXT NOT NULL, -- 'percentage', 'flat_fee', 'multiplier'

  -- Value (percentage as decimal, e.g., 0.25 for 25%)
  value DECIMAL(10,4) NOT NULL,

  -- Status
  status TEXT DEFAULT 'active'
);

-- ============================================
-- AMENDMENT LOG
-- Track all changes across tables
-- ============================================
CREATE TABLE amendments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Reference to the record
  table_name TEXT NOT NULL,
  record_id UUID NOT NULL,

  -- Change details
  change_summary TEXT NOT NULL,
  previous_values JSONB,
  new_values JSONB,

  -- Who made the change (for future multi-user)
  changed_by TEXT DEFAULT 'system'
);

CREATE INDEX idx_amendments_record ON amendments (table_name, record_id);
CREATE INDEX idx_amendments_created ON amendments (created_at DESC);

-- ============================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables
CREATE TRIGGER update_operators_updated_at
  BEFORE UPDATE ON operators
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_equipment_updated_at
  BEFORE UPDATE ON equipment
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- Simple policy for authenticated users
-- ============================================
ALTER TABLE operators ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_modifiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE amendments ENABLE ROW LEVEL SECURITY;

-- Allow all operations for authenticated users
CREATE POLICY "Allow all for authenticated users" ON operators
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow all for authenticated users" ON equipment
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow all for authenticated users" ON services
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow all for authenticated users" ON service_modifiers
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow all for authenticated users" ON amendments
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
