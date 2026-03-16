-- ============================================
-- SEED DATA: Libraries from Aeria Master Rate Card
-- Run this in Supabase SQL Editor after creating tables
-- ============================================

-- ============================================
-- OPERATORS (Personnel Roles)
-- Day rates are base, other rates auto-calculated in app
-- ============================================

-- Clear existing data (optional, comment out if you want to preserve)
-- TRUNCATE operators CASCADE;

-- PIC Roles
INSERT INTO operators (name, roles, rate_day, rate_half_day, rate_hourly, rate_week, travel_rate_day, notes) VALUES
('PIC - Basic Template', ARRAY['PIC - Basic'], 1500, 825, 200, 6750, 750, 'Certified PIC for standard VLOS operations. Half-day = 55% of day, Hourly = day/7.5, Week = 4.5x day.'),
('PIC - Advanced Template', ARRAY['PIC - Advanced'], 1750, 962.50, 233.33, 7875, 875, 'PIC for advanced operations (EVLOS, complex airspace)'),
('PIC - Complex Template', ARRAY['PIC - Complex'], 2050, 1127.50, 273.33, 9225, 1025, 'PIC for BVLOS, high-altitude, or complex regulatory operations'),
('PIC - Specialized Template', ARRAY['PIC - Specialized'], 2500, 1375, 333.33, 11250, 1250, 'PIC tasked with piloting specialized vessels or platforms');

-- Field Personnel
INSERT INTO operators (name, roles, rate_day, rate_half_day, rate_hourly, rate_week, travel_rate_day, notes) VALUES
('Visual Observer Template', ARRAY['Visual Observer'], 900, 495, 120, 4050, 450, 'Maintains VLOS with RPAS, monitors airspace'),
('Ground Supervisor Template', ARRAY['Ground Supervisor'], 1200, 660, 160, 5400, 600, 'Site management, bystander control, ground operations'),
('Payload Operator Template', ARRAY['Payload Operator'], 1100, 605, 146.67, 4950, 550, 'Operation of specialized sensors and payloads'),
('Field Biologist Template', ARRAY['Field Biologist'], 1200, 660, 160, 5400, 600, 'Wildlife expertise, species ID, behavioral monitoring'),
('Marine Mammal Observer Template', ARRAY['Marine Mammal Observer', 'MMO'], 1000, 550, 133.33, 4500, 500, 'Wildlife disturbance monitoring, DFO compliance'),
('HSE Officer Template', ARRAY['HSE Officer'], 1200, 660, 160, 5400, 600, 'Health, Safety, and Environment oversight in field'),
('Boat Operator Template', ARRAY['Boat Operator'], 1000, 550, 133.33, 4500, 500, 'Operation of watercraft for marine/river operations'),
('Field Technician Template', ARRAY['Field Technician'], 750, 412.50, 100, 3375, 375, 'General field support, equipment handling, logistics');

-- Office Personnel
INSERT INTO operators (name, roles, rate_day, rate_half_day, rate_hourly, rate_week, travel_rate_day, notes) VALUES
('Project Manager Template', ARRAY['Project Manager'], 1300, 715, 173.33, 5850, 650, 'Project planning, scheduling, resource allocation, client liaison'),
('HSE Planning Officer Template', ARRAY['HSE Planning Officer'], 1200, 660, 160, 5400, 600, 'Safety planning, risk assessment, compliance documentation'),
('Compliance Officer Template', ARRAY['Compliance Officer'], 1300, 715, 173.33, 5850, 650, 'Regulatory compliance, TC liaison, permit management'),
('Technical Officer Template', ARRAY['Technical Officer'], 1200, 660, 160, 5400, 600, 'Technical specifications, equipment selection, QA'),
('Logistics Coordinator Template', ARRAY['Logistics Coordinator'], 950, 522.50, 126.67, 4275, 475, 'Mobilization planning, shipping, travel coordination'),
('RPAS Operations Planner Template', ARRAY['RPAS Operations Planner'], 1200, 660, 160, 5400, 600, 'Flight planning, airspace coordination, mission planning'),
('Data Analyst / GIS Template', ARRAY['Data Analyst', 'GIS Specialist'], 1100, 605, 146.67, 4950, 550, 'Data processing, analysis, deliverable production');

-- ============================================
-- EQUIPMENT
-- ============================================

-- RPAS <25kg
INSERT INTO equipment (name, type, category, rate_day, rate_week, notes) VALUES
('RPAS System - Standard (<25kg)', 'rpas_small', 'RPAS <25kg', 730, 2920, 'Standard commercial RPAS (DJI M350, Autel, etc.)'),
('RPAS System - Modified (<25kg)', 'rpas_small', 'RPAS <25kg', 850, 3400, 'Commercial RPAS with modifications for specific use'),
('RPAS System - Custom (<25kg)', 'rpas_small', 'RPAS <25kg', 1100, 4400, 'Purpose-built or heavily customized RPAS system'),
('Backup RPAS System (<25kg)', 'rpas_small', 'RPAS <25kg', 400, 1600, 'Secondary/backup RPAS for redundancy');

-- RPAS 25-150kg
INSERT INTO equipment (name, type, category, rate_day, rate_week, notes) VALUES
('RPAS System - Standard (25-150kg)', 'rpas_medium', 'RPAS 25-150kg', 1400, 5600, 'Standard medium RPAS system'),
('RPAS System - Modified (25-150kg)', 'rpas_medium', 'RPAS 25-150kg', 1700, 6800, 'Medium RPAS with modifications for specific use'),
('RPAS System - Custom (25-150kg)', 'rpas_medium', 'RPAS 25-150kg', 2200, 8800, 'Purpose-built or heavily customized medium RPAS');

-- Water Vessels
INSERT INTO equipment (name, type, category, rate_day, rate_week, notes) VALUES
('Jet Boat', 'vessel', 'Water - Boat', 850, 3400, 'Motorized jet boat for river operations'),
('Rowing Raft', 'vessel', 'Water - Boat', 250, 1000, 'Rowing raft with frame for suitable river conditions'),
('Zodiac/Inflatable', 'vessel', 'Water - Boat', 400, 1600, 'Inflatable boat for marine/lake operations');

-- Sensors
INSERT INTO equipment (name, type, category, rate_day, rate_week, notes) VALUES
('LiDAR Payload', 'sensor', 'Sensor - LiDAR', 1000, 4000, 'LiDAR sensor for point cloud collection'),
('Thermal/IR Camera', 'sensor', 'Sensor - Thermal', 350, 1400, 'Thermal/infrared camera payload'),
('RGB Camera (High-Res/Phase One)', 'sensor', 'Sensor - Camera', 700, 2800, 'High-resolution mapping camera (Phase One, etc.)'),
('Multispectral Camera', 'sensor', 'Sensor - Multispectral', 450, 1800, 'Multispectral sensor for vegetation/environmental analysis'),
('ADCP System', 'sensor', 'Sensor - Bathymetric', 600, 2400, 'Acoustic Doppler Current Profiler for water velocity'),
('Bathymetric Sonar', 'sensor', 'Sensor - Bathymetric', 700, 2800, 'Sonar system for bathymetric survey'),
('Side-Scan Sonar', 'sensor', 'Sensor - Bathymetric', 800, 3200, 'Side-scan sonar for underwater imaging');

-- Ground Support
INSERT INTO equipment (name, type, category, rate_day, rate_week, notes) VALUES
('GNSS/RTK Base Station', 'other', 'Ground Support', 200, 800, 'High-precision GNSS receiver (EMLID RS2 or similar)'),
('Ground Control Points (GCPs) Set', 'other', 'Ground Support', 100, 400, 'Survey-grade GCP targets - full set'),
('Additional Batteries (set)', 'other', 'Ground Support', 315, 1260, 'Spare/replacement RPAS batteries');

-- ============================================
-- SERVICES
-- ============================================

-- CONSULTING
INSERT INTO services (name, category, description, base_unit, base_rate, alternate_rates, pricing_options) VALUES
('Initial Consultation / Scoping', 'Consulting', 'Project scoping, requirements gathering, feasibility assessment', 'hour', 175, '{}', 'Hourly | Fixed (up to 2hr free for qualified leads)'),
('CONOPS Development - Small', 'Consulting', 'Simple single-mission type concept of operations', 'project', 3500, '{}', 'Fixed'),
('CONOPS Development - Medium', 'Consulting', 'Multi-mission CONOPS, moderate complexity', 'project', 6500, '{}', 'Fixed'),
('CONOPS Development - Large', 'Consulting', 'Full program CONOPS - equipment, techniques, procedures', 'project', 12000, '{}', 'Fixed'),
('Site Assessment', 'Consulting', 'On-site evaluation of operational requirements and constraints', 'day', 1500, '{"half_day": 825}', 'Half-Day | Day | Fixed'),
('RPAS Program Development', 'Consulting', 'Full RPAS program design - SOPs, manuals, training plan', 'project', 18000, '{}', 'Fixed (phased milestones)'),
('RPOC Development / Application', 'Consulting', 'RPAS Operator Certificate application and documentation', 'project', 15000, '{}', 'Fixed Fee'),
('SFOC Preparation - Simple', 'Consulting', 'Standard SFOC extension or renewal', 'each', 1200, '{}', 'Fixed Fee'),
('SFOC Preparation - Standard', 'Consulting', 'New SFOC, moderate complexity', 'each', 2500, '{}', 'Fixed Fee'),
('SFOC Preparation - Complex', 'Consulting', 'BVLOS, multi-site, or novel operations SFOC', 'each', 4500, '{}', 'Fixed Fee'),
('Mission Planning Package', 'Consulting', 'Complete mission planning including airspace, risk assessment, procedures', 'each', 800, '{}', 'Fixed | Per Mission'),
('DFO Permit Support', 'Consulting', 'DFO permit support for marine mammal/fish operations', 'project', 3500, '{}', 'Fixed'),
('Regulatory Compliance Review', 'Consulting', 'Review of operations for regulatory compliance', 'hour', 175, '{}', 'Hourly | Fixed | Per Review');

-- TRAINING
INSERT INTO services (name, category, description, base_unit, base_rate, alternate_rates, pricing_options) VALUES
('Advanced RPAS Training', 'Training', 'Advanced operations training including flight review', 'each', 1000, '{"day": 2200}', 'Per Person | Per Day (on-site)'),
('Basic Pilot Certification Prep', 'Training', 'Preparation for Transport Canada Basic certificate exam', 'each', 500, '{}', 'Per Person | Group Rate (4+ people)'),
('Advanced Pilot Certification Prep', 'Training', 'Preparation for Transport Canada Advanced certificate exam', 'each', 900, '{}', 'Per Person | Group Rate (4+ people)'),
('Level 1 Complex Ground School', 'Training', 'L1C ground school (20hr) - self-study or instructor-led', 'each', 700, '{}', 'Per Person | Group Rate'),
('Flight Review', 'Training', 'Practical flight assessment and review', 'each', 500, '{}', 'Per Person | Per Session'),
('Mission-Specific Training', 'Training', 'Custom training for specific mission types (SAR, mapping, etc.)', 'day', 1500, '{}', 'Per Person | Per Day | Group Rate'),
('VO/Crew Training', 'Training', 'Visual Observer and crew member training', 'each', 400, '{}', 'Per Person | Per Day | Group Rate'),
('Custom Course Development', 'Training', 'Development of custom training curriculum', 'project', 7500, '{}', 'Fixed (by scope)'),
('On-Site Team Training', 'Training', 'Training delivered at client site for team', 'day', 2200, '{}', 'Per Day + Per Person | Package Rate');

-- FIELD OPERATIONS
INSERT INTO services (name, category, description, base_unit, base_rate, alternate_rates, pricing_options) VALUES
('Area Mapping - Standard', 'Field Operations', 'Photogrammetric mapping of defined area', 'day', 4000, '{"per_hectare": 50}', 'Day Rate | Per Hectare | Per km2'),
('Area Mapping - High Resolution', 'Field Operations', 'High-resolution or survey-grade mapping', 'day', 5200, '{"per_hectare": 75}', 'Day Rate | Per Hectare (premium)'),
('Corridor Mapping', 'Field Operations', 'Linear corridor survey (pipeline, powerline, road)', 'day', 4000, '{"per_km": 150}', 'Day Rate | Per km | Per km (tiered by width)'),
('Wildlife Monitoring - VLOS', 'Field Operations', 'RPAS-based wildlife survey within visual line of sight', 'day', 4500, '{}', 'Day Rate | Per Survey Area'),
('Wildlife Monitoring - BVLOS', 'Field Operations', 'RPAS-based wildlife survey beyond visual line of sight', 'day', 6500, '{}', 'Day Rate (premium) | Per Survey Area'),
('Structure Inspection', 'Field Operations', 'Visual inspection of structures (bridges, towers, etc.)', 'each', 2500, '{"day": 4000, "half_day": 2200}', 'Per Structure | Day Rate | Half-Day'),
('3D Structure Modelling', 'Field Operations', '3D capture and modelling of structures', 'each', 3500, '{"day": 4500}', 'Per Structure | Day Rate'),
('Topographic Survey', 'Field Operations', 'Terrain survey for elevation/contour mapping', 'day', 4000, '{"per_hectare": 50}', 'Day Rate | Per Hectare | Per km2'),
('Bathymetric Survey', 'Field Operations', 'Water depth survey using sonar/ADCP', 'day', 5500, '{"per_km": 200, "per_hectare": 100}', 'Day Rate | Per km (linear) | Per Hectare'),
('Media/Video Production', 'Field Operations', 'Video/photo capture for communications/marketing', 'day', 3000, '{"half_day": 1650}', 'Half-Day | Day | Per Deliverable'),
('SAR Support / Search Operations', 'Field Operations', 'Search and rescue or search operations support', 'day', 4000, '{"hour": 500}', 'Day Rate | Hourly | Callout + Hourly');

-- MOB/DEMOB
INSERT INTO services (name, category, description, base_unit, base_rate, alternate_rates, pricing_options) VALUES
('Mobilization - Local', 'Mob/Demob', 'Preparation for projects within 100km', 'each', 500, '{}', 'Fixed (by complexity tier)'),
('Mobilization - Standard', 'Mob/Demob', 'Preparation of RPAS and equipment for regional project', 'each', 1040, '{}', 'Fixed (by complexity tier)'),
('Mobilization - Complex Integration', 'Mob/Demob', 'Integration of specialized payloads (ADCP, sonar, etc.)', 'each', 1500, '{}', 'Fixed (by complexity tier)'),
('Mobilization - Remote/Arctic', 'Mob/Demob', 'Mobilization with logistics for remote locations incl. shipping', 'each', 1500, '{}', 'Fixed + Shipping at Cost'),
('Demobilization - Standard', 'Mob/Demob', 'Breakdown, packing, equipment return', 'each', 1040, '{}', 'Fixed (by complexity tier)'),
('Demobilization - Complex', 'Mob/Demob', 'Demobilization of all equipment including specialized gear', 'each', 1500, '{}', 'Fixed (by complexity tier)');

-- DATA PROCESSING
INSERT INTO services (name, category, description, base_unit, base_rate, alternate_rates, pricing_options) VALUES
('Orthomosaic Generation', 'Data Processing', 'Flight alignment, dense point cloud, mosaic generation', 'each', 600, '{"per_hectare": 50, "per_gb": 75}', 'Per Collection | Per Hectare ($50) | Per GB'),
('Radiometric Calibration', 'Data Processing', 'Reflectance panel processing, cross-flight normalization', 'each', 300, '{}', 'Per Collection | Included in Processing Package'),
('Georeferencing & Accuracy QA', 'Data Processing', 'RTK/PPK correction, tie point integration, accuracy report', 'each', 400, '{}', 'Per Collection | Per Project'),
('Index Products (NDVI, NDRE, etc.)', 'Data Processing', 'Spectral index generation per client specification', 'each', 200, '{"per_hectare": 10}', 'Per Index | Per Hectare | Package Rate'),
('LiDAR Point Cloud Processing', 'Data Processing', 'LiDAR data processing, classification, and filtering', 'day', 1500, '{"per_km2": 500, "per_gb": 100}', 'Day Rate | Per km2 | Per GB'),
('DEM/DTM/DSM Generation', 'Data Processing', 'Elevation model creation from photogrammetry or LiDAR', 'each', 400, '{"per_km2": 150}', 'Per Collection | Per km2 | Included in Package'),
('Volumetric Calculations', 'Data Processing', 'Stockpile/cut-fill volume analysis', 'each', 400, '{}', 'Per Stockpile | Per Project | Day Rate'),
('Change Detection Analysis', 'Data Processing', 'Multi-temporal comparison and change mapping', 'each', 600, '{"per_hectare": 20}', 'Per Comparison | Per Hectare | Day Rate'),
('Post-Mission Data Analysis', 'Data Processing', 'Flight logs, data interpretation, client assistance', 'day', 1250, '{"hour": 175}', 'Day Rate | Hourly | Per Project');

-- ============================================
-- SERVICE MODIFIERS
-- ============================================

INSERT INTO service_modifiers (name, description, modifier_type, value) VALUES
('Week Rate (5d)', 'Weekly rate = 4.5x daily rate for 5-day booking', 'multiplier', 4.5),
('Week Rate Equipment (5d)', 'Weekly equipment rate = 4x daily rate', 'multiplier', 4.0),
('Travel Day', 'Travel day rate = 50% of field rate', 'multiplier', 0.5),
('Half-Day Rate', 'Half-day rate = 55% of daily rate', 'multiplier', 0.55),
('Hourly from Day', 'Hourly rate = daily rate / 7.5 hours', 'multiplier', 0.133),
('Rush Processing (+50%)', 'Expedited processing with priority turnaround', 'percentage', 50),
('Rush Processing (+100%)', 'Same-day or urgent delivery', 'percentage', 100),
('After Hours', 'Work outside standard business hours', 'percentage', 25),
('Remote Location Premium', 'Operations in remote/difficult access areas', 'percentage', 15),
('Holiday Rate', 'Work on statutory holidays', 'percentage', 50),
('Volume Discount (10+)', 'Discount for 10+ days of service', 'percentage', -10),
('Volume Discount (20+)', 'Discount for 20+ days of service', 'percentage', -15),
('Annual Contract Discount', 'Discount for annual service agreement', 'percentage', -20);
