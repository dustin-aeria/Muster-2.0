-- ============================================
-- Migration: Add sites column to projects table
-- Run this in Supabase SQL Editor
-- ============================================

-- Add sites column to store multi-site flight planning data
-- Format: [{ id, name, center, zoom, elements, flightParams, sora, hazards, emergency }]
ALTER TABLE projects ADD COLUMN IF NOT EXISTS sites JSONB DEFAULT '[]';

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_sites ON projects USING GIN (sites);

-- Also add some commonly used fields that may be missing
ALTER TABLE projects ADD COLUMN IF NOT EXISTS field_days INTEGER DEFAULT 0;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS deliverables JSONB DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS crew JSONB DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS equipment JSONB DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS services JSONB DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS other_costs DECIMAL(12,2) DEFAULT 0;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS overhead_percent DECIMAL(5,2) DEFAULT 0;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS markup_percent DECIMAL(5,2) DEFAULT 0;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS processing_notes TEXT;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS qaqc_notes TEXT;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS post_field_notes TEXT;
