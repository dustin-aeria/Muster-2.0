# Project Detail Page - FINAL Implementation Spec

> All requirements confirmed. Ready to build.

---

## Structure: 3 Horizontal Tabs

```
[ Admin ]  [ Site ]  [ Field Docs ]
```

---

## TAB 1: ADMIN
*One scrolling page, spacious layout, desktop-focused*

### Section 1: Project Header
- Project name (editable)
- Status dropdown: Draft / Active / Complete / Archived
- Save indicator (subtle icon)

### Section 2: Client & Dates
| Field | Type |
|-------|------|
| Client Name | Text |
| Client Email | Email |
| Client Phone | Phone |
| Field Start Date | Date picker |
| Field End Date | Date picker |
| Field Days | Number (manual, used for cost calcs) |

### Section 3: Deliverables
*Repeatable rows*
| Deliverable | Due Date |
|-------------|----------|
| Field Safety Report | 2026-03-20 |
| Orthomosaic | 2026-03-25 |
| Final Report | 2026-04-01 |
+ Add Deliverable button

### Section 4: Notification Contacts
*Separate from client - for GO/NO-GO alerts*
| Name | Email | Phone |
|------|-------|-------|
+ Add Contact button

### Section 5: Crew
*From Operators library OR manual entry*
| Source | Name | Role | Rate Type | Rate | Qty | Subtotal |
|--------|------|------|-----------|------|-----|----------|
| Library / Manual | John Smith | PIC | Daily | $800 | 3 | $2,400 |
- "Use Field Days" button auto-fills Qty
- Role dropdown: PIC, VO, Payload Op, Safety, Other
- Rate Type: Hourly / Daily / Weekly

### Section 6: Equipment
*From Equipment library - shows all, marks SORA-relevant*
| Name | Category | SORA | Rate Type | Rate | Qty | Subtotal |
|------|----------|------|-----------|------|-----|----------|
| Mavic 3E | Drone | ✓ | Daily | $150 | 3 | $450 |
| RTK Base | Survey | - | Daily | $75 | 3 | $225 |
- SORA column shows ✓ if equipment has UA specs (dimension/speed/weight)
- "Use Field Days" button

### Section 7: Services
*From Services library with project-specific notes*
| Service | Description (project-specific) | Rate Type | Rate | Qty | Modifiers | Subtotal |
|---------|-------------------------------|-----------|------|-----|-----------|----------|
| Photogrammetry | 50 acre site survey | Per Acre | $25 | 50 | Rush +15% | $1,437.50 |
- Modifiers: Rush job, Nonprofit rate, Family/Friends rate, etc.

### Section 8: Cost Summary
**Labour**
| Item | Amount |
|------|--------|
| John Smith (PIC) × 3 days | $2,400 |
| Jane Doe (VO) × 3 days | $1,800 |
| **Labour Subtotal** | **$4,200** |

**Materials**
| Item | Amount |
|------|--------|
| Mavic 3E × 3 days | $450 |
| RTK Base × 3 days | $225 |
| Photogrammetry (50 acres) | $1,437.50 |
| **Materials Subtotal** | **$2,112.50** |

**Other**
| Item | Amount |
|------|--------|
| Travel | $500 |
| Accommodation | $300 |
| **Other Subtotal** | **$800** |

---
| | |
|---|---|
| Subtotal | $7,112.50 |
| Overhead (10%) | $711.25 |
| **Estimated Cost** | **$7,823.75** |
| Markup (20%) | $1,564.75 |
| **Quoted Price** | **$9,388.50** |

*Actual Cost (internal tracking)*
| Actual Cost | $7,500.00 |
| Variance | +$323.75 |

- CSV Export button (QuickBooks format)

### Section 9: Post-Field Notes
- Processing requirements (textarea)
- QA/QC checklist (simple checkboxes)
- Notes (textarea)

---

## TAB 2: SITE
*Unified map with multi-site support, SORA calculator*

### Map Canvas
- **Full-width map** with style switcher (Satellite / Street / Topo / Aviation)
- **Drawing Toolbox** (left sidebar or floating):
  - Site Boundary (polygon) - project area
  - Flight Area (polygon) - for operational volume
  - Flight Path (line)
  - No-Go Zone (polygon)
  - Obstacle (point) - with name, height, description
  - Pilot/GCS Location (point)
  - Launch Point (point)
  - Landing Point (point) - can be same as launch
  - Muster Point (point)
  - Evacuation Route (line)
  - Emergency Facility (point)
  - Distance Measure Tool
- **Each element assigned to**: Site 1 / Site 2 / Site 3 / All Sites
- **Operational Volume** auto-displayed around flight areas:
  - Contingency: speed × 10 seconds
  - Ground Risk Buffer: 1:1 altitude
- **Element colors**: User-selectable per element

### Element Tables (below map)
*Grouped by type, click to highlight on map*

**Site Boundaries**
| Color | Name | Site | Center Coords | Notes |
|-------|------|------|---------------|-------|

**Flight Areas**
| Color | Name | Site | Center | Alt (AGL) | Op Volume | Notes |
|-------|------|------|--------|-----------|-----------|-------|

**Obstacles**
| Color | Name | Site | Coords | Height | Type | Description |
|-------|------|------|--------|--------|------|-------------|

**Points** (Pilot, Launch, Land, Muster)
| Color | Name | Type | Site | Coords | Notes |
|-------|------|------|------|--------|-------|

**Routes** (Evac, Flight Path)
| Color | Name | Type | Site | Start → End | Notes |
|-------|------|------|------|-------------|-------|

**Emergency Facilities**
| Name | Type | Site | Address | Distance | Phone |
|------|------|------|---------|----------|-------|

---

### SORA Calculator
*Per-site with project-level summary*

**Site Tabs**: [ Site 1 ] [ Site 2 ] [ Site 3 ] [ Summary ]

**Per Site:**

**Step 1: Population Category**
| Category | Description |
|----------|-------------|
Simple dropdown with options and density descriptions

**Step 2: UA Characteristics**
- Auto-populated from highest-risk equipment assigned (by dimension × speed)
- Shows: Max Dimension, Max Speed, MTOW
- Override option if needed

**Step 3: Intrinsic GRC**
| Population | UA Category | iGRC |
|------------|-------------|------|
| Suburban | 1m / 25m/s | 5 |
Auto-calculated, color-coded (green/yellow/orange/red)

**Step 4: Ground Mitigations**
| Mitigation | Enabled | Robustness | Reduction | Evidence |
|------------|---------|------------|-----------|----------|
| M1A - Strategic | ☑ | Medium | -2 | [text input] |
| M1B - Sheltering | ☐ | - | - | - |
| M1C - People Density | ☐ | - | - | - |
| M2 - Effects Reduction | ☑ | Low | -1 | [text input] |

ℹ️ Info dropdown for each explaining what each level requires

**Step 5: Final GRC**
| iGRC | Mitigations | fGRC |
|------|-------------|------|
| 5 | -3 | 2 |

**Step 6: Air Risk**
- Initial ARC: Dropdown (ARC-a / ARC-b / ARC-c / ARC-d)
- TMPR Applied: ☑
  - Type: VLOS / EVLOS / BVLOS
  - Robustness: Low / Medium / High
- Residual ARC: Auto-calculated

**Step 7: SAIL Determination**
Visual flow diagram:
```
[iGRC: 5] → [Mitigations: -3] → [fGRC: 2]
                                    ↓
                            [ARC: ARC-b] → [SAIL: II]
```

**Step 8: OSO Compliance**
| OSO # | Name | Required Level | Your Level | Status | Evidence |
|-------|------|----------------|------------|--------|----------|
| OSO-01 | Operator competence | Low | Medium | ✓ | Training records |
| OSO-02 | UAS maintained | Low | Low | ✓ | Maintenance log |
...

ℹ️ Each OSO has expandable info explaining:
- What it means
- How to meet Low/Medium/High robustness

**Step 9: Adjacent Area / Containment**
- Adjacent population category
- Containment method selection
- Evidence field

**Project Summary Tab:**
| Site | fGRC | ARC | SAIL |
|------|------|-----|------|
| Site 1 | 2 | ARC-b | II |
| Site 2 | 3 | ARC-b | III |
| Site 3 | 2 | ARC-a | I |
| **Governing** | - | - | **III** |

OSO requirements based on highest SAIL (III)

---

### Hazard Identification
*Clean single-line table format*

| Site | Category | Hazard | L | S | Risk | Control | Residual |
|------|----------|--------|---|---|------|---------|----------|
| All | Wildlife | Bird strike risk | 3 | 4 | 12 🟠 | Pre-flight survey | 6 🟡 |
| Site 1 | Terrain | Steep slope | 2 | 3 | 6 🟡 | Adjusted flight path | 3 🟢 |

- **Category**: Dropdown (Wildlife, Terrain, Weather, Infrastructure, People, Airspace, Equipment, Other)
- **L (Likelihood)**: 1-5 dropdown
- **S (Severity)**: 1-5 dropdown
- **Risk**: Auto-calc L×S, color-coded:
  - 1-4: 🟢 Low
  - 5-9: 🟡 Medium
  - 10-15: 🟠 High
  - 16-25: 🔴 Critical
- **Control**: Text input
- **Residual**: Auto-reduces based on control (user can override)
- **Site**: Dropdown with "All Sites" option

+ Add Hazard row
+ Link FHA from Library button

---

### Emergency Planning

**Emergency Contacts**
| Role | Name | Phone |
|------|------|-------|
| ATC | Vancouver Tower | 604-XXX-XXXX |
| NAV Canada | Flight Info | 1-866-WXBRIEF |
| 911 | Emergency | 911 |
| Site Contact | John Doe | 604-XXX-XXXX |
| PIC | Jane Smith | 604-XXX-XXXX |

**Emergency Facilities**
| Type | Name | Address | Distance | Phone |
|------|------|---------|----------|-------|
| Hospital | Vancouver General | 123 Main St | 5.2 km | 604-XXX-XXXX |
| Fire | Station 12 | 456 Oak Ave | 2.1 km | 604-XXX-XXXX |

**PPE Checklist**
☑ Hi-Vis Vest
☑ Safety Glasses
☐ Hard Hat
☐ Steel-toe Boots
☑ First Aid Kit
☐ Fire Extinguisher

**Communications**
| Item | Value |
|------|-------|
| Primary Radio Freq | 123.45 MHz |
| Backup Freq | 121.50 MHz |
| Team Channel | Channel 5 |
| Emergency Signals | MAYDAY (life threat), PAN PAN (urgency) |

**Site-Specific**
- Entry Plan (textarea)
- On-site Requirements (textarea)
- Site Setup Notes (textarea)

---

## TAB 3: FIELD DOCS
*Mobile-optimized, tailgate meetings*

### Tailgate Meeting List
| # | Date | Time | Location | Decision | Conducted By |
|---|------|------|----------|----------|--------------|
| 1 | 2026-03-15 | 08:00 | Site 1 | GO ✓ | Jane Smith |
| 2 | 2026-03-15 | 13:00 | Site 2 | CONDITIONAL ⚠ | Jane Smith |
| 3 | 2026-03-16 | 08:00 | Site 1 | - | - |

+ New Tailgate button

### Tailgate Form
**Meeting Details**
- Date: [date picker]
- Time: [time picker]
- Location: [text / dropdown of sites]

**Objectives**
[textarea - what we're doing today]

**Pre-Identified Risks** (pulled from Site tab)
| Hazard | Risk | Control |
|--------|------|---------|
| Bird strike | 🟠 12 | Pre-flight survey |
| Steep slope | 🟡 6 | Adjusted flight path |

**Field-Identified Risks** (new risks found today)
| Hazard | Control |
|--------|---------|
+ Add Risk

**Weather Conditions**
- Wind: [text]
- Visibility: [text]
- Precipitation: [text]
- Notes: [text]

**Site Conditions**
[textarea]

**Attendees**
| Name | Role | Fit for Duty |
|------|------|--------------|
| Jane Smith | PIC | ✓ Yes |
| John Doe | VO | ✓ Yes |
+ Add Attendee

**Conducted By**
[Name - from attendees or manual]

**GO / NO-GO Decision**
```
[ GO ✓ ]  [ NO-GO ✗ ]  [ CONDITIONAL ⚠ ]
```

**Notes** (for reason, conditions, flight plan screenshot)
[textarea - supports image paste]

*On decision:*
- Log timestamp
- Send notification to all Notification Contacts (email + SMS)
- Message: "GO/NO-GO triggered for [Project] by [Person]" + notes content

### IMSAFE Reference
Simple reference card (no data saved):
- **I** - Illness
- **M** - Medication
- **S** - Stress
- **A** - Alcohol
- **F** - Fatigue
- **E** - Emotion

---

## Technical Implementation

### Auto-Save
- Debounce 2 seconds
- Subtle indicator in header: 💾 Saving... → ✓ Saved → ⚠ Error

### Database
- Uses existing `projects` table with JSONB fields
- Add `tailgate_meetings` table for meeting history

### APIs Required
- Mapbox GL JS (map + drawing)
- Twilio (SMS notifications)
- Email service (notifications)
- Google Calendar API (sync dates)

### Deferred to Phase 2
- Elevation/terrain tool for AGL analysis
- Direct QuickBooks API integration

---

## Build Order

1. **Admin Tab** - Forms, cost calculations, CSV export
2. **Site Tab (Map)** - Drawing tools, element tables, click-to-highlight
3. **Site Tab (SORA)** - Calculator with educational info
4. **Site Tab (Hazards/Emergency)** - Tables and checklists
5. **Field Docs Tab** - Tailgate forms, GO/NO-GO notifications
6. **Integration** - Auto-save, calendar sync, notifications

---

*Ready to build. Confirm and I'll start with Admin Tab.*
