-- ============================================
-- Phase 5: Utilities Tables
-- Run this in Supabase SQL Editor
-- ============================================

-- TASKS
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Basic info
  title TEXT NOT NULL,
  description TEXT,

  -- Assignment
  assigned_to TEXT,
  project_id UUID, -- Future: link to projects table
  project_name TEXT,

  -- Priority and status
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'blocked', 'completed', 'archived')),

  -- Dates
  due_date DATE,
  completed_at TIMESTAMPTZ,

  -- Categories/tags
  category TEXT,
  tags TEXT[],

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON tasks FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- TIME ENTRIES
CREATE TABLE time_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- What was worked on
  description TEXT NOT NULL,
  project_id UUID,
  project_name TEXT,
  task_id UUID REFERENCES tasks(id),
  task_name TEXT,

  -- Who
  operator_id UUID,
  operator_name TEXT,

  -- Time
  entry_date DATE NOT NULL,
  hours DECIMAL(5,2) NOT NULL,

  -- Rate info (for cost calculation)
  rate_type TEXT, -- 'hourly', 'daily'
  rate_amount DECIMAL(10,2),

  -- Billing
  billable BOOLEAN DEFAULT true,
  billed BOOLEAN DEFAULT false,

  -- Categories
  category TEXT,

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE time_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON time_entries FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- EXPENSES
CREATE TABLE expenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Basic info
  description TEXT NOT NULL,
  expense_date DATE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'CAD',

  -- Categorization
  category TEXT NOT NULL, -- 'travel', 'equipment', 'supplies', 'fuel', 'meals', 'accommodation', 'other'

  -- Link to project
  project_id UUID,
  project_name TEXT,

  -- Vendor/payee
  vendor TEXT,

  -- Receipt
  receipt_url TEXT,
  receipt_filename TEXT,

  -- Reimbursement tracking
  reimbursable BOOLEAN DEFAULT true,
  reimbursed BOOLEAN DEFAULT false,
  reimbursed_date DATE,

  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'reimbursed', 'archived')),

  -- Payment method
  payment_method TEXT, -- 'cash', 'credit_card', 'debit', 'company_card'

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON expenses FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Indexes
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
CREATE INDEX idx_tasks_priority ON tasks(priority);
CREATE INDEX idx_tasks_assigned ON tasks(assigned_to);

CREATE INDEX idx_time_entries_date ON time_entries(entry_date DESC);
CREATE INDEX idx_time_entries_project ON time_entries(project_id);
CREATE INDEX idx_time_entries_operator ON time_entries(operator_id);

CREATE INDEX idx_expenses_date ON expenses(expense_date DESC);
CREATE INDEX idx_expenses_category ON expenses(category);
CREATE INDEX idx_expenses_project ON expenses(project_id);
CREATE INDEX idx_expenses_status ON expenses(status);
