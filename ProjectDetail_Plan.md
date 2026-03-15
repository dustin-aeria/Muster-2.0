# Project Detail Page - Implementation Plan

> Based on your answers in Questions_for_d.md

---

## Architecture: 3-Tab Structure

### Tab 1: ADMIN (Desktop-focused planning)
A scrolling page with spacious sections for project planning:

**Section 1: Project Overview**
- Project name, status (draft/active/complete/archived)
- Client name, email, phone
- Field start date, field end date, deliverable dates
- Field days (manual input for cost calculations)
- Needs analysis / scope description

**Section 2: Notification Contacts**
- Separate list from client (stakeholders who get GO/NO-GO alerts)
- Name, email, phone per contact

**Section 3: Crew**
- Add from Operators library OR manual entry
- Each assignment: Name, Role (PIC/VO/etc), Rate type (hourly/daily/weekly), Rate amount, Quantity
- "Use field days" quick button to auto-fill quantity
- Subtotal per person

**Section 4: Equipment**
- Combined equipment + aircraft (one section)
- Add from Equipment library
- Each assignment: Name, Rate type, Rate amount, Quantity
- "Use field days" quick button
- Shows aircraft specs for SORA (dimension, speed, weight)

**Section 5: Services**
- Add from Services library
- Allows project-specific description/notes (doesn't modify library)
- Rate type, amount, quantity
- Modifiers (rush job, nonprofit rate, etc.)

**Section 6: Cost Estimate**
- Full detailed table organized by:
  - **Labour**: Crew costs
  - **Materials**: Equipment, Services
  - **Other**: Travel, expenses, pre-field tasks
- Subtotals per category
- Optional overhead % and markup %
- **Estimated Total** (internal)
- **Quoted Price** (client-facing)
- **Actual Cost** tracking with variance (internal only)
- QuickBooks-compatible format

**Section 7: Post-Field**
- Processing notes, QAQC requirements
- Data deliverables checklist

---

### Tab 2: SITE (Unified Map - Desktop planning, mobile viewing)
The main map-based planning interface:

**Map Canvas (top)**
- Multiple sites visible on one map
- Style switcher: Satellite / Street / Topo / Aviation
- Drawing toolbox:
  - Site boundary (project area, not for op volume)
  - Flight path/area (used for operational volume calc)
  - No-go zones
  - Obstacles (with name, description, height)
  - Pilot/GCS location
  - Launch point
  - Landing point (can be same as launch)
  - Muster point
  - Evacuation route
  - Emergency facilities
- Distance measuring tool
- Elevation tool (shows min/max elevation across flight path for AGL planning) *[requires terrain API]*
- Operational volume auto-display (contingency + ground risk buffer)

**Element Tables (below map)**
- Grouped by type (Boundaries, Flight Areas, Obstacles, Points, Routes, Facilities)
- Columns: Color indicator, Name, Coordinates (center point for areas), Description/Notes
- Site assignment (Site 1, Site 2, or "All Sites")
- Click to highlight on map

**Per-Site SORA Calculator**
- Site selector tabs
- Full SORA 2.5 flow:
  - Population category (simple dropdown)
  - UA characteristics (auto from highest-risk equipment assigned)
  - iGRC calculation
  - Ground mitigations (M1A, M1B, M1C, M2) with:
    - Enable toggle
    - Robustness level (low/medium/high)
    - Evidence/justification text
    - Info dropdown explaining each level
  - fGRC result
  - Initial ARC (manual selection ARC-a to ARC-d)
  - TMPR (VLOS/EVLOS/BVLOS with robustness)
  - Residual ARC
  - **SAIL determination** (visual flow diagram)
  - OSO compliance matrix:
    - Each OSO with name, description, how-to-meet guidance
    - Robustness level selection per OSO
- Adjacent area / containment assessment
- **Project-level: Highest SAIL across sites governs OSO requirements**
- Auto-suggest mitigations based on equipment's TC 922.XX declarations

**Hazard Identification**
- Single-line table entry (your preference):
  - Category (dropdown)
  - Description (text)
  - Likelihood (dropdown 1-5)
  - Severity (dropdown 1-5)
  - Score (auto-calculated, color-coded)
  - Control Type (dropdown)
  - Control Description (text)
  - Residual (auto-calculated after control)
- "Applies to all sites" toggle
- Link to FHA documents from library

**Emergency Planning**
- Emergency contacts: ATC, 911, ambulance, site emergency, NAV Canada, Flight Info Center + operators
- Emergency facilities: Hospitals, fire stations, police (with addresses + distances)
- PPE checklist (hi-vis, hard hat, safety glasses, etc.)
- Communications plan:
  - Radio frequencies/channels
  - Contact phone numbers
  - Signal words (MAYDAY, PAN PAN, etc.)

**Site-Specific Details**
- Entry plan
- On-site requirements
- Site setup notes

---

### Tab 3: FIELD DOCS (Mobile-optimized)
Tailgate meetings and GO/NO-GO:

**Tailgate Meeting List**
- Multiple tailgates per project (flexible - any time, any place)
- List of past tailgates with date, time, decision
- "New Tailgate" button

**Tailgate Form**
- Date, time, location
- Objectives for the session
- Identified risks (pre-identified from Site tab)
- Field-identified risks (add new)
- Controls
- Weather conditions (manual entry)
- Site conditions
- Attendees list with fit-for-duty confirmation per person
- Conducted by (sign-off)

**GO/NO-GO Decision**
- Three buttons: GO / NO-GO / CONDITIONAL
- Notes field (for reason, conditions, or flight plan screenshot)
- On trigger:
  - Log decision with timestamp
  - Send notification (email + SMS) to project notification contacts
  - Notification content: "GO/NO-GO triggered for [Project] by [Person]" + notes

**IMSAFE Reference**
- Simple reference checklist (no data saved)

---

## Technical Requirements

### Auto-Save
- Debounce: Save 2 seconds after last change
- Subtle indicator (small icon: saving/saved/error)

### Document Export
- Plain text format
- Sections: Overview, Site/map, SORA, Crew, Equipment, Costs, Safety/emergency, Tailgate
- Two versions: Internal (all details) / External (client-facing selection)

### Google Calendar
- Sync field dates and deliverable dates to calendar

### Notifications (Twilio + Email)
- Trigger: GO/NO-GO/CONDITIONAL decision
- Recipients: Project notification contacts list
- Channels: Email + SMS
- Content: Basic message + notes field content

### Map APIs Needed
- Mapbox GL JS (drawing, multiple styles)
- Mapbox Terrain API (elevation data for flight path AGL analysis)

---

## Clarification Questions

Before I start building, please clarify:

### Q1: Admin Tab Internal Navigation
The Admin tab has 7 sections. Should it be:
- **A)** One long scrolling page with all sections visible
- **B)** Collapsible accordion sections (click to expand)
- **C)** Internal sub-tabs within Admin

One long scrolling page with all sections visible

### Q2: Hazard Table Columns
Confirm the exact columns for the single-line hazard entry:
```
| Category | Description | Likelihood | Severity | Score | Control Type | Control Description | Residual |
```
- Should Score auto-calculate from Likelihood × Severity?
- Should Residual be a separate likelihood/severity entry, or auto-reduce based on control type?

i want you to come up with the scheme here, i was jsut providing an example/context. it just needs to be cleaner, easier to flow and folow and read.

### Q3: Deliverable Dates
You mentioned "deliverable dates" (plural). Is this:
- **A)** One "deliverables due" date field
- **B)** Multiple deliverable line items, each with its own date
- **C)** A repeatable "deliverable + date" pair

for example, we may deliver a field safety report before we deliver a orthomosaic. so having flexibiltiy to add tom these would be nice

### Q4: Elevation Tool Priority
The elevation/terrain tool for flight paths requires Mapbox Terrain API integration. Should I:
- **A)** Build this in Phase 1 (priority feature)
- **B)** Defer to Phase 2 (nice-to-have)
- **C)** Skip for now, you'll check elevation manually

Defer to Phase 2 (nice-to-have)

### Q5: Map Element ↔ Table Interaction
When you click an element in the table below the map, should it:
- **A)** Highlight/flash the element on the map
- **B)** Pan/zoom the map to that element
- **C)** Both A and B
- **D)** No interaction needed

Highlight/flash the element on the map

### Q6: Equipment Selection for SORA
When picking equipment for a project, should the list show:
- **A)** All equipment (drones + other gear)
- **B)** Only drones/aircraft (since they're relevant for SORA UA characteristics)
- **C)** All equipment, but mark which ones have UA specs for SORA

 All equipment, but mark which ones have UA specs for SORA

### Q7: Site-Specific Crew Assignment
You said each site can have its own crew. In practice, is crew:
- **A)** Assigned at project level (same crew works all sites)
- **B)** Assigned per site (different crew per site)
- **C)** Both options available

Assigned at project level (same crew works all sites)

### Q8: Cost Table Format for QuickBooks
For QuickBooks compatibility, do you need:
- **A)** CSV export with specific column headers
- **B)** Just a clean table format you can copy/paste
- **C)** Direct QuickBooks API integration (complex)

CSV export with specific column headers

---

*Answer these 8 questions and I'll finalize the implementation plan.*
