-- Batch 8 of 8
-- Documents 141 to 155 of 155
-- Run this in Supabase SQL Editor

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Vehicle Operations',
  'fha',
  'FHA-006',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Vehicle Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-006 |
| **Version** | v5.0 |
| **Activity** | Company Vehicle Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers operation of company and personal vehicles used for work purposes, including highway driving, off-road access, and travel to/from work sites.

---

## 2. Hazard Analysis

### 2.1 Driving Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Collision | Driver error, other drivers, conditions | Injury, death | 2 | 5 | 10-M | Defensive driving, training, vehicle maintenance | 5-L |
| 1.2 | Fatigue-related incident | Long drives, early start, post-work | Collision, injury | 3 | 5 | 15-H | Fatigue management, breaks, overnight stays, limits | 5-L |
| 1.3 | Distracted driving | Phone, passengers, equipment | Collision | 3 | 4 | 12-M | No phone use, hands-free only, pull over for tasks | 6-L |
| 1.4 | Impaired driving | Fatigue, substances, illness | Collision, injury | 1 | 5 | 5-L | Fit for duty policy, zero tolerance, awareness | 3-L |
| 1.5 | Speeding | Time pressure, poor judgment | Collision, injury | 2 | 4 | 8-M | Speed limits, journey management, culture | 4-L |
| 1.6 | Single vehicle incident | Loss of control, road conditions | Injury | 2 | 4 | 8-M | Defensive driving, speed for conditions | 4-L |

### 2.2 Weather/Road Conditions

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Winter driving | Snow, ice, reduced visibility | Collision, stranding | 3 | 4 | 12-M | Winter tires, reduced speed, training, delay if severe | 6-L |
| 2.2 | Poor visibility | Rain, fog, darkness | Collision | 2 | 4 | 8-M | Reduced speed, lights, delay if severe | 4-L |
| 2.3 | Road washout/damage | Weather, construction | Vehicle damage, stranding | 2 | 3 | 6-L | Route awareness, road reports, caution | 3-L |
| 2.4 | Wildlife collision | BC roads, dawn/dusk | Vehicle damage, injury | 3 | 3 | 9-M | Awareness, scanning, reduced speed in high-risk areas | 4-L |

### 2.3 Off-Road/Resource Road

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Rollover | Terrain, speed, load | Injury, death | 2 | 5 | 10-M | Appropriate vehicle, reduced speed, load management | 5-L |
| 3.2 | Industrial traffic | Logging trucks, heavy equipment | Collision | 2 | 5 | 10-M | Radio (if available), yield, awareness, pull over | 5-L |
| 3.3 | Getting stuck | Soft ground, water, obstacles | Stranding | 3 | 3 | 9-M | Route assessment, appropriate vehicle, recovery gear | 4-L |
| 3.4 | Vehicle damage | Road conditions, debris | Breakdown | 3 | 2 | 6-L | Vehicle inspection, appropriate vehicle, caution | 3-L |

### 2.4 Vehicle Condition

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Mechanical failure | Poor maintenance | Breakdown, collision | 2 | 4 | 8-M | Regular maintenance, pre-trip inspections | 4-L |
| 4.2 | Tire failure | Wear, damage, pressure | Loss of control | 2 | 4 | 8-M | Tire inspection, proper inflation, replacement | 4-L |
| 4.3 | Brake failure | Wear, damage | Collision | 1 | 5 | 5-L | Regular service, inspection, warning signs | 3-L |

### 2.5 Loading/Equipment

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Load shift | Improper securing | Damage, loss of control | 2 | 3 | 6-L | Proper securing, weight distribution | 3-L |
| 5.2 | Overloading | Exceeding capacity | Vehicle damage, handling issues | 2 | 3 | 6-L | Know limits, proper loading | 3-L |
| 5.3 | Falling equipment | Poor securing | Damage, injury to others | 2 | 3 | 6-L | Proper cases, securing, covers | 3-L |
| 5.4 | Manual handling injury | Lifting equipment | Back/muscle injury | 3 | 2 | 6-L | Proper technique, assistance for heavy items | 3-L |

---

## 3. Control Summary

### Driver Requirements

| Requirement | Details |
|:------------|:--------|
| Valid driver''s license | Current for vehicle class |
| Fit for duty | Not fatigued or impaired |
| Training | Defensive driving recommended |
| Knowledge | Route planning, conditions awareness |

### Vehicle Requirements

| Requirement | Details |
|:------------|:--------|
| Maintenance | Current per schedule |
| Inspection | Pre-trip circle check |
| Equipment | Emergency kit, first aid |
| Seasonal | Winter tires (Oct 1 - Apr 30 on many BC roads) |

### Journey Management

| Element | Requirement |
|:--------|:------------|
| Planning | Route, timing, conditions |
| Fatigue | Max driving hours, break schedule |
| Communication | Check-in for long/remote trips |
| Emergency | Contact plan, emergency kit |

---

## 4. Driving Limits

| Limit | Maximum |
|:------|:--------|
| Continuous driving | 4 hours (then 15 min break) |
| Daily driving | 10 hours |
| Post-work driving | Assess fatigue; consider overnight |
| Speed | Posted limits; reduced for conditions |

---

## 5. Pre-Trip Vehicle Check

| Item | Check |
|:-----|:------|
| Tires | Condition, pressure |
| Lights | All functional |
| Wipers/washer | Functional, fluid |
| Mirrors | Adjusted |
| Fluid levels | Oil, coolant |
| Fuel | Adequate for trip |
| Load | Secured, weight distributed |
| Emergency kit | Present |
| Documents | License, registration, insurance |

---

## 6. Emergency Equipment

| Equipment | Purpose |
|:----------|:--------|
| First aid kit | Injury response |
| Fire extinguisher | Fire response |
| Flashlight | Visibility |
| Warning triangles/flares | Breakdown warning |
| Jumper cables | Battery issues |
| Basic tools | Minor repairs |
| Blanket | Cold exposure |
| Water/food | Emergency supplies |
| Cell phone | Communication |

---

## 7. Emergency Procedures

### Collision

1. Stop and secure scene
2. Check for injuries
3. Call 911 if needed
4. Exchange information
5. Document (photos)
6. Report to supervisor

### Breakdown

1. Pull safely off road
2. Activate hazards
3. Set warning devices
4. Stay with vehicle (usually)
5. Contact for assistance
6. Report to supervisor

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-006 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Working at Heights',
  'fha',
  'FHA-007',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Working at Heights

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-007 |
| **Version** | v5.0 |
| **Activity** | Working at Heights / Elevated Work |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers work activities conducted at heights including rooftop operations, elevated platforms, ladders, scaffolding, and terrain with fall exposure.

---

## 2. Regulatory Reference

| Regulation | Requirement |
|:-----------|:------------|
| BC OHS Regulation Part 11 | Fall Protection |
| Section 11.2 | Fall protection required ≥3m (10 ft) |
| Section 11.3 | Fall protection required at any height over hazard |

---

## 3. Hazard Analysis

### 3.1 Fall Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Fall from height ≥3m | Unprotected edge, slip | Serious injury, death | 2 | 5 | 10-M | Fall protection system, guardrails, harness | 5-L |
| 1.2 | Fall from ladder | Improper setup, overreach | Injury | 3 | 4 | 12-M | 3-point contact, proper setup, inspection | 6-L |
| 1.3 | Fall through opening | Unguarded floor/roof opening | Serious injury, death | 2 | 5 | 10-M | Covers, guardrails, barricades | 4-L |
| 1.4 | Fall on sloped surface | Steep terrain, loose footing | Injury | 3 | 3 | 9-M | Appropriate footwear, caution, rope access if needed | 4-L |
| 1.5 | Scaffold collapse | Improper assembly, overload | Serious injury, death | 1 | 5 | 5-L | Competent assembly, inspection, load limits | 3-L |

### 3.2 Object Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Dropped objects | Tools, equipment falling | Injury to person below | 2 | 4 | 8-M | Tool lanyards, barricades below, hard hats | 4-L |
| 2.2 | RPAS dropped during setup | Handling on elevated surface | Equipment damage, injury | 2 | 3 | 6-L | Secure handling, staged setup | 3-L |

### 3.3 Access Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Unsafe ladder use | Wrong type, damaged, improper angle | Fall | 3 | 4 | 12-M | Ladder inspection, proper selection, 4:1 angle | 6-L |
| 3.2 | Unsafe access method | Improvised climbing | Fall | 2 | 4 | 8-M | Proper access equipment only | 4-L |
| 3.3 | Congested work area | Limited space at height | Trip, fall | 2 | 3 | 6-L | Planning, housekeeping, staging | 3-L |

### 3.4 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Wind at height | Elevated exposure | Loss of balance, equipment issues | 3 | 3 | 9-M | Wind limits, abort criteria | 4-L |
| 4.2 | Wet/icy surfaces | Weather, condensation | Slip leading to fall | 3 | 4 | 12-M | Defer if icy, caution when wet, grip footwear | 6-L |
| 4.3 | Heat at height | Roof/sun exposure | Heat stress | 3 | 3 | 9-M | Hydration, breaks, shade, work timing | 4-L |

---

## 4. Fall Protection Hierarchy

| Priority | Method | Application |
|:---------|:-------|:------------|
| 1 | **Elimination** | Work from ground if possible |
| 2 | **Guardrails** | Fixed barriers at edges |
| 3 | **Travel Restraint** | Prevent reaching fall hazard |
| 4 | **Fall Arrest** | Stop fall if it occurs |
| 5 | **Control Zone** | Designated safe work area |

---

## 5. Control Summary

### When Fall Protection Required

| Situation | Requirement |
|:----------|:------------|
| Height ≥3m (10 ft) | Fall protection required |
| Any height over hazard | Fall protection required |
| Ladder work | 3-point contact; consider restraint |
| Roof work | Edge protection or harness |

### Fall Protection Equipment

| Equipment | Inspection | Use |
|:----------|:-----------|:----|
| Full body harness | Before each use | Primary arrest system |
| Lanyard/SRL | Before each use | Connection to anchor |
| Anchor points | Engineer certified | Fixed or temporary |
| Guardrails | Before use | Edge protection |

### Ladder Safety

| Requirement | Standard |
|:------------|:---------|
| Angle | 4:1 ratio (75 degrees) |
| Extension | 1m (3 ft) above landing |
| Secured | Top and/or bottom |
| Contact | 3-point contact at all times |
| Capacity | Rated for user + equipment |

---

## 6. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Hard hat | Always when working at height |
| Safety footwear | Always |
| Full body harness | When fall arrest required |
| High-visibility | When near traffic/equipment |
| Gloves | As needed for task |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Fall protection awareness | All personnel working at heights |
| Fall protection user | Before using fall arrest |
| Ladder safety | Before ladder use |
| Rescue procedures | Work team familiarity |

---

## 8. Rescue Plan

Before working at height with fall arrest:
1. Identify rescue method
2. Ensure rescue capability on site
3. Verify rescue equipment available
4. Brief workers on rescue procedure
5. Know emergency contacts

**Note:** Suspension trauma can occur within 15 minutes of fall arrest. Prompt rescue is critical.

---

## 9. Pre-Work Checklist

| Item | Verified |
|:-----|:---------|
| Fall protection plan in place | ☐ |
| Equipment inspected | ☐ |
| Anchor points identified | ☐ |
| Rescue plan established | ☐ |
| Weather/conditions acceptable | ☐ |
| Personnel trained | ☐ |
| Area below secured | ☐ |

---

## 10. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-007 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Power Line Proximity',
  'fha',
  'FHA-008',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Power Line Proximity Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-008 |
| **Version** | v5.0 |
| **Activity** | Operations Near Electrical Power Lines |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS operations and ground activities conducted in proximity to overhead electrical power lines, transmission lines, and electrical infrastructure.

---

## 2. Regulatory Reference

| Regulation | Requirement |
|:-----------|:------------|
| BC OHS Regulation 19.24 | Limits of approach for unqualified workers |
| BC Hydro Requirements | Coordination for work near lines |
| CARs Part IX | Obstacle awareness for RPAS |

---

## 3. Limits of Approach

### Unqualified Workers (BC OHS Regulation)

| Voltage | Minimum Distance |
|:--------|:-----------------|
| <75 kV | 3 m (10 ft) |
| 75-250 kV | 5 m (16 ft) |
| 250-550 kV | 6 m (20 ft) |
| Unknown voltage | Treat as >250 kV |

**Note:** These are minimums. Greater distances provide greater safety margins.

---

## 4. Hazard Analysis

### 4.1 Electrical Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Direct contact | RPAS strikes line | Electrocution, fire, equipment loss | 2 | 5 | 10-M | Standoff distance, flight planning, visual marking | 4-L |
| 1.2 | Electrical arc | Close approach to high voltage | Electrocution, burns | 2 | 5 | 10-M | Limits of approach, standoff distance | 4-L |
| 1.3 | Step potential | Downed line, ground fault | Electrocution | 1 | 5 | 5-L | Awareness, stay back, shuffle away | 3-L |
| 1.4 | Induced current | Near high-tension lines | Equipment interference | 2 | 2 | 4-L | Awareness, distance | 2-L |

### 4.2 RPAS-Specific Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | RPAS-line collision | Navigation error, wind, loss of control | Line damage, RPAS loss, outage | 2 | 4 | 8-M | Flight planning, margins, abort criteria | 4-L |
| 2.2 | EMI interference | Electrical field | Control issues, GPS errors | 3 | 3 | 9-M | Pre-flight testing, awareness, increased margins | 4-L |
| 2.3 | Magnetic interference | Metallic structures | Compass error, flyaway | 3 | 4 | 12-M | Compass calibration away from lines, GPS verification | 6-L |
| 2.4 | Wire strike (hard to see) | Small diameter wires | RPAS damage, entanglement | 3 | 3 | 9-M | Site survey, visual identification, margins | 4-L |

### 4.3 Ground Operations Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Equipment contact | Raising equipment near lines | Electrocution | 2 | 5 | 10-M | Height awareness, limits of approach | 4-L |
| 3.2 | Vehicle contact | Operating under lines | Electrocution | 1 | 5 | 5-L | Awareness, height limits | 3-L |
| 3.3 | Thrown conductive object | Accident, wind | Arc flash, electrocution | 1 | 5 | 5-L | Awareness, secure equipment | 3-L |

---

## 5. Control Summary

### RPAS Operations Near Power Lines

| Requirement | Standard |
|:------------|:---------|
| Minimum standoff | 10 m (30 ft) horizontal from lines |
| Vertical clearance | Do not overfly unless mission-specific |
| Line inspection work | Specific procedures, additional controls |
| Unknown voltage | Assume high voltage, maximum standoff |
| Pre-flight | Identify all lines, map locations |
| Abort criteria | Loss of visual, control issues, wind gusts |

### Ground Operations

| Requirement | Standard |
|:------------|:---------|
| Limits of approach | Per BC OHS Regulation table |
| Equipment height | Account for fully extended height |
| Spotter | When working near lines |
| Coordination | Contact utility if required |

### Site Survey Requirements

| Item | Action |
|:-----|:-------|
| Identify all lines | Mark on site map |
| Determine voltage | Contact utility or assume high |
| Map exclusion zones | Based on limits of approach |
| Plan flight paths | Avoid crossing over lines |
| Identify emergency landing | Away from lines |

---

## 6. Line Inspection Operations

For RPAS inspection of power lines specifically:

| Requirement | Standard |
|:------------|:---------|
| Client coordination | Required - utility must authorize |
| Training | Line-specific inspection training |
| Procedures | Client/utility procedures apply |
| De-energized preferred | If possible |
| Energized work | Additional controls, specific authorization |
| PIC qualification | Experienced, line inspection certified |

---

## 7. Emergency Procedures

### RPAS Contacts Power Line

1. **DO NOT** approach to retrieve
2. **ASSUME** line is energized
3. **CONTACT** utility immediately
4. **MARK** area to keep others back
5. **REPORT** occurrence

### Downed Power Line

1. **STAY BACK** minimum 10 m (30 ft)
2. **ASSUME** energized even if appears dead
3. **KEEP OTHERS** away
4. **CALL 911** and utility
5. **If vehicle contacts line:** Stay in vehicle, call for help; if must exit (fire), jump clear with feet together, shuffle away

### Step Potential Escape

If near downed line or feeling tingling:
1. Keep feet together
2. Shuffle (do not step) away
3. Continue until well clear (10+ m)
4. Do not touch anything

---

## 8. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| All power lines identified on site map | ☐ |
| Voltage determined or assumed high | ☐ |
| Standoff distances established | ☐ |
| Flight path avoids overflying lines | ☐ |
| EMI testing completed | ☐ |
| Emergency procedures briefed | ☐ |
| Utility coordination (if required) | ☐ |
| Abort criteria established | ☐ |

---

## 9. Visual Identification Aids

| Feature | Indicates |
|:--------|:----------|
| Large steel towers | Transmission (high voltage) |
| Wood poles, 3 wires | Distribution |
| Small wires to buildings | Service drops |
| Yellow warning signs | High voltage |
| Insulators (ceramic/polymer) | Energized conductors |

**Remember:** Voltage cannot be determined by visual inspection alone.

---

## 10. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Electrical hazard awareness | All field personnel |
| Power line proximity | Before operations near lines |
| Line inspection specific | Before conducting line inspection |
| Emergency procedures | All field personnel |

---

## 11. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-008 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Survey Operations',
  'fha',
  'FHA-009',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Survey and Mapping Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-009 |
| **Version** | v5.0 |
| **Activity** | Ground Survey and RPAS Mapping Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers survey and mapping operations including ground control point (GCP) placement, GNSS surveys, terrestrial scanning, and associated RPAS photogrammetry/LiDAR missions.

---

## 2. Hazard Analysis

### 2.1 Ground Survey Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Terrain-related injury | Uneven ground, slopes, holes | Slips, trips, falls | 3 | 3 | 9-M | Appropriate footwear, awareness, caution | 4-L |
| 1.2 | Manual handling injury | Equipment carrying | Back/muscle strain | 3 | 2 | 6-L | Proper technique, assistance, wheeled carts | 3-L |
| 1.3 | Working alone | Solo survey work | Delayed emergency response | 2 | 4 | 8-M | Working alone plan, check-ins, communication | 4-L |
| 1.4 | Traffic hazards | Working near roads | Struck by vehicle | 2 | 5 | 10-M | High-vis PPE, barriers, spotter, avoid peak traffic | 5-L |
| 1.5 | Weather exposure | Outdoor work | Heat/cold stress, sunburn | 3 | 3 | 9-M | Weather monitoring, appropriate clothing, breaks | 4-L |
| 1.6 | Wildlife encounter | Working in habitat | Attack, injury | 2 | 4 | 8-M | Awareness, bear spray, noise, working in pairs | 4-L |

### 2.2 GCP Placement Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Access hazards | Reaching GCP locations | Injury from terrain | 3 | 3 | 9-M | Route planning, appropriate footwear | 4-L |
| 2.2 | Working on slopes | GCP on hillside | Fall | 2 | 3 | 6-L | Caution, alternative locations if too steep | 3-L |
| 2.3 | Working near water | GCP near streams/ponds | Drowning, cold water | 2 | 4 | 8-M | Avoid water edge, PFD if required, alternative locations | 4-L |
| 2.4 | Extended walking | Large site coverage | Fatigue, dehydration | 3 | 2 | 6-L | Adequate water, rest breaks, fitness | 3-L |

### 2.3 Equipment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Tripod injury | Falling tripod, pinch points | Bruises, cuts | 2 | 2 | 4-L | Proper setup, awareness | 2-L |
| 3.2 | Battery hazards | GNSS/scanner batteries | Fire if damaged | 2 | 3 | 6-L | Inspection, proper storage | 3-L |
| 3.3 | Equipment theft | Unattended equipment | Loss | 2 | 2 | 4-L | Supervision, secure storage | 2-L |
| 3.4 | Sun glare on screen | Outdoor display use | Eye strain, data errors | 3 | 1 | 3-L | Shade, anti-glare screen | 2-L |

### 2.4 RPAS Mapping Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | RPAS collision | Obstacle, operator error | Damage, injury | 2 | 3 | 6-L | Site survey, flight planning, obstacle awareness | 3-L |
| 4.2 | Automated flight deviation | GPS error, software issue | Unexpected path | 2 | 3 | 6-L | Monitoring, manual override ready, abort criteria | 3-L |
| 4.3 | Boundary exceedance | Drift, planning error | Trespass, airspace issue | 2 | 3 | 6-L | Buffer zones, geofencing, monitoring | 3-L |
| 4.4 | Long mission fatigue | Extended automated flights | Loss of vigilance | 2 | 3 | 6-L | Rotation, breaks, alertness monitoring | 3-L |

### 2.5 Data/Quality Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Data loss | Equipment failure, human error | Project delay, rework | 3 | 2 | 6-L | Redundant storage, backups, verification | 3-L |
| 5.2 | Incorrect coordinates | Wrong settings, datum errors | Bad deliverable | 2 | 3 | 6-L | Verification procedures, check points | 3-L |
| 5.3 | GCP moved | Wind, animals, people | Inaccurate data | 2 | 2 | 4-L | Secure placement, verification before flight | 2-L |

---

## 3. Control Summary

### Survey Operations

| Control | Requirement |
|:--------|:------------|
| FLHA | Complete before field work |
| Working alone | Follow working alone policy if applicable |
| Communication | Cell phone or satellite device |
| PPE | Safety footwear, high-vis if near traffic |
| Weather | Monitor and respond to conditions |
| Wildlife | Bear spray in bear country |

### GCP Placement

| Control | Requirement |
|:--------|:------------|
| Site access | Verify safe route to each GCP location |
| GCP security | Secure against wind/disturbance |
| Documentation | Photo and description of each GCP |
| Verification | Check GCPs before RPAS mission |

### RPAS Mapping Mission

| Control | Requirement |
|:--------|:------------|
| Mission planning | Verify boundaries, altitude, obstacles |
| Flight monitoring | Continuous attention during automated flight |
| Check points | Include for accuracy verification |
| Data backup | Download and backup same day |

---

## 4. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear | Always in field |
| High-visibility vest | Near roads, industrial sites |
| Sun protection | Extended outdoor work |
| Weather-appropriate clothing | Always |
| Bear spray | Bear country |

---

## 5. Quality Control Checklist

| Item | Verified |
|:-----|:---------|
| Coordinate system confirmed | ☐ |
| Equipment calibrated | ☐ |
| GCP distribution adequate | ☐ |
| Check points included | ☐ |
| Data backed up | ☐ |
| Accuracy verified | ☐ |

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Survey equipment operation | Before field deployment |
| GNSS/coordinate systems | Before survey work |
| RPAS mapping workflow | Before mapping missions |
| Field safety | All field personnel |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-009 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Marine Operations',
  'fha',
  'FHA-010',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Marine Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-010 |
| **Version** | v5.0 |
| **Activity** | Operations On or Near Water |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers operations conducted from vessels, shorelines, and any work activity on or near water including RPAS flights over water.

---

## 2. Regulatory Reference

| Regulation | Requirement |
|:-----------|:------------|
| Canada Shipping Act | Vessel safety requirements |
| Small Vessel Regulations | Safety equipment, operator requirements |
| BC OHS Regulation Part 24 | Marine operations |
| Transport Canada | Pleasure Craft Operator Card |

---

## 3. BC Water Characteristics

| Factor | Consideration |
|:-------|:--------------|
| Temperature | Cold year-round (hypothermia risk) |
| Currents | Tidal currents on coast |
| Weather | Rapid changes possible |
| Visibility | Fog common on coast |

---

## 4. Hazard Analysis

### 4.1 Drowning Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Fall overboard | Slip, trip, vessel motion | Drowning | 2 | 5 | 10-M | PFD worn, 3-point contact, awareness | 5-L |
| 1.2 | Vessel capsize | Weather, overloading, waves | Drowning | 1 | 5 | 5-L | Vessel selection, weather limits, load limits | 3-L |
| 1.3 | Fall from shore/dock | Slippery surface, unstable edge | Drowning, cold water | 2 | 4 | 8-M | PFD near water, caution, footwear | 4-L |
| 1.4 | Unable to swim | Cold shock, exhaustion | Drowning | 2 | 5 | 10-M | PFD, recovery capability, buddy system | 4-L |

### 4.2 Cold Water Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Cold shock | Sudden immersion in cold water | Gasp reflex, drowning | 2 | 5 | 10-M | PFD, avoid immersion, quick recovery | 4-L |
| 2.2 | Swimming failure | Cold water incapacitation | Drowning | 2 | 5 | 10-M | PFD, quick recovery plan | 4-L |
| 2.3 | Hypothermia | Prolonged cold exposure | Incapacitation, death | 2 | 5 | 10-M | PFD, quick recovery, warming capability | 4-L |

### 4.3 Vessel Operation Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Collision | Navigation error, other vessels | Injury, sinking | 2 | 4 | 8-M | Proper lookout, navigation rules, experience | 4-L |
| 3.2 | Grounding | Navigation error, tide | Vessel damage, stranding | 2 | 3 | 6-L | Charts, tide awareness, local knowledge | 3-L |
| 3.3 | Mechanical failure | Engine/steering failure | Stranding, drift hazard | 2 | 3 | 6-L | Maintenance, pre-departure checks, anchor | 3-L |
| 3.4 | Fire onboard | Fuel, electrical | Injury, vessel loss | 1 | 5 | 5-L | Fire extinguisher, fuel handling, no smoking | 3-L |
| 3.5 | Weather deterioration | Unexpected change | Unsafe conditions | 2 | 4 | 8-M | Weather monitoring, conservative limits, abort | 4-L |

### 4.4 RPAS Over Water Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | RPAS water landing | Control loss, battery, error | Equipment loss | 3 | 3 | 9-M | Altitude margin, battery management, planning | 4-L |
| 4.2 | Loss of visual over water | No references, glare | Orientation loss | 3 | 3 | 9-M | VO, telemetry monitoring, visual aids | 4-L |
| 4.3 | RPAS from moving vessel | Vessel motion | Takeoff/landing difficulty | 3 | 3 | 9-M | Stable vessel position, experienced crew | 4-L |
| 4.4 | Lost link over water | Interference, range | Uncertain aircraft location | 2 | 3 | 6-L | RTH tested, conservative range | 3-L |

### 4.5 Shore/Dock Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Slippery surfaces | Wet, algae, ice | Slip into water | 3 | 4 | 12-M | Non-slip footwear, caution, PFD near edge | 6-L |
| 5.2 | Unstable footing | Rocks, debris, soft ground | Fall | 3 | 3 | 9-M | Awareness, test footing, appropriate footwear | 4-L |
| 5.3 | Tidal changes | Rising water, stranding | Cut off, wet equipment | 2 | 2 | 4-L | Tide awareness, time management | 2-L |

---

## 5. Control Summary

### Personal Flotation Devices

| Situation | Requirement |
|:----------|:------------|
| On vessel underway | PFD worn at all times |
| Within 2m of water edge | PFD worn or immediately accessible |
| Working from shore/dock | PFD immediately accessible |
| Type | Canadian-approved PFD or lifejacket |

### Vessel Requirements

| Item | Requirement |
|:-----|:------------|
| Safety equipment | Per Small Vessel Regulations |
| Operator | Competent, PCOC if required |
| Condition | Pre-departure inspection |
| Capacity | Do not exceed rated capacity |
| Communication | VHF radio and/or cell phone |

### Weather Limits

| Condition | Limit |
|:----------|:------|
| Small craft warning | NO-GO |
| Wind | Per vessel capability |
| Visibility | Adequate for navigation |
| Lightning | NO-GO |

### Cold Water Protocol

| Time in Water | Effect |
|:--------------|:-------|
| 0-3 minutes | Cold shock - control breathing |
| 3-30 minutes | Swimming failure risk |
| 30+ minutes | Hypothermia onset |

**Key:** Rapid recovery essential. PFD provides time for rescue.

---

## 6. Required Safety Equipment

### Vessel (Under 6m)

| Item | Required |
|:-----|:---------|
| PFDs for all aboard | Yes |
| Buoyant heaving line (15m) | Yes |
| Paddle or manual propelling device | Yes |
| Bailer or pump | Yes |
| Sound signaling device | Yes |
| Navigation lights (if night) | Yes |
| Fire extinguisher | Yes (if motor) |

### Additional Recommended

- VHF radio
- First aid kit
- Anchor and line
- Knife
- Throwable flotation
- Dry bags for electronics

---

## 7. Emergency Procedures

### Person Overboard

1. **SHOUT** "Person overboard!" and point
2. **THROW** flotation device
3. **DO NOT** jump in after them
4. **MANEUVER** vessel for recovery
5. **CALL** for help if unable to recover
6. **TREAT** for hypothermia after recovery

### Vessel in Distress

1. **MAYDAY** on VHF Ch 16 (if imminent danger)
2. **PAN PAN** on VHF Ch 16 (if urgent but not immediate)
3. Provide position, nature of distress, souls on board
4. Deploy visual signals if available
5. Prepare to abandon if necessary

### RPAS in Water

1. Note GPS position
2. Assess recovery feasibility
3. **DO NOT** risk personal safety for recovery
4. If unrecoverable, document loss
5. Report occurrence

---

## 8. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Float plan filed | ☐ |
| Weather checked | ☐ |
| Vessel inspected | ☐ |
| Safety equipment verified | ☐ |
| PFDs for all (correct size) | ☐ |
| Communication device | ☐ |
| Personnel briefed | ☐ |
| Recovery plan in place | ☐ |

---

## 9. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Boat operation | Competent operator |
| Marine safety | All personnel on water |
| Cold water awareness | All personnel |
| PCOC | If operating motorized vessel |
| VHF radio | If using marine radio |

---

## 10. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-010 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Thermal Inspection',
  'fha',
  'FHA-011',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Thermal/Infrared Inspection Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-011 |
| **Version** | v5.0 |
| **Activity** | RPAS Thermal and Infrared Inspection |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers thermal/infrared inspection operations including building envelope surveys, solar panel inspection, electrical infrastructure inspection, and industrial asset thermal imaging.

---

## 2. Hazard Analysis

### 2.1 Inspection Target Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Electrical infrastructure | Energized equipment | Electrocution, arc flash | 2 | 5 | 10-M | Standoff distance, coordination with utility | 4-L |
| 1.2 | Hot surfaces | Identified thermal anomalies | Burns if touched | 2 | 3 | 6-L | No direct contact, reporting only | 3-L |
| 1.3 | Structural defects | Discovered during inspection | Collapse risk if entered | 2 | 4 | 8-M | Visual assessment only, report findings | 4-L |
| 1.4 | Active industrial process | Operating equipment | Process interference, injury | 2 | 4 | 8-M | Client coordination, exclusion zones | 4-L |

### 2.2 Flight Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Close proximity flight | Detailed inspection needs | Collision with structure | 3 | 3 | 9-M | Experienced pilot, obstacle awareness, margins | 4-L |
| 2.2 | Solar glare | Solar panel reflection | Pilot/sensor blindness | 2 | 2 | 4-L | Sun angle consideration, timing | 2-L |
| 2.3 | Thermal updrafts | Hot surfaces, buildings | Aircraft instability | 2 | 3 | 6-L | Awareness, altitude margin | 3-L |
| 2.4 | EMI from electrical | Substations, transformers | Control interference | 2 | 3 | 6-L | Pre-flight test, standoff, monitoring | 3-L |

### 2.3 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Early morning operations | Optimal thermal conditions | Fatigue, reduced visibility | 2 | 3 | 6-L | Rest management, adequate lighting | 3-L |
| 3.2 | Rooftop hazards | Access for launch/landing | Fall hazards | 2 | 4 | 8-M | Ground launch preferred, fall protection if needed | 4-L |
| 3.3 | Weather sensitivity | Thermal imaging requirements | Suboptimal data, wasted effort | 3 | 2 | 6-L | Weather planning, rescheduling criteria | 3-L |

### 2.4 Data Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Misinterpretation | Incorrect analysis | Wrong conclusions, liability | 2 | 3 | 6-L | Training, verification, qualified analysis | 3-L |
| 4.2 | Privacy concerns | Inadvertent thermal imaging | Privacy breach | 2 | 2 | 4-L | Target-focused imaging, data handling | 2-L |

---

## 3. Thermal Inspection Best Practices

### Optimal Conditions

| Factor | Ideal Condition |
|:-------|:----------------|
| Time of day | Early morning (building envelope) |
| Solar panels | Midday, full sun |
| Delta T | Minimum 10°C difference |
| Wind | <15 km/h for building envelope |
| Precipitation | None |
| Surface condition | Dry |

### Electrical Inspection

| Requirement | Standard |
|:------------|:---------|
| Load condition | 40%+ load for meaningful data |
| Standoff distance | Per power line FHA requirements |
| Coordination | Utility/owner coordination |
| Comparison | Similar equipment comparison |

---

## 4. Control Summary

### Pre-Inspection

| Control | Requirement |
|:--------|:------------|
| Client coordination | Understand asset, access, hazards |
| Weather planning | Optimal thermal conditions |
| Site survey | Obstacles, launch/landing areas |
| Equipment check | Thermal sensor calibration |

### During Inspection

| Control | Requirement |
|:--------|:------------|
| Standoff distances | Maintain safe distance from hazards |
| Continuous monitoring | Watch for anomalies in flight |
| Data verification | Confirm capture quality |
| Communication | Client/site coordination |

---

## 5. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear | Always |
| High-visibility vest | Industrial sites |
| Hard hat | Industrial sites, overhead hazards |
| Safety glasses | Near operating equipment |

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Thermal sensor operation | Before thermal missions |
| Thermography fundamentals | For data analysis |
| Industry-specific (electrical/building) | Before specialized inspection |
| Client/site orientation | Before site work |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-011 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Construction Site Operations',
  'fha',
  'FHA-012',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Construction Site Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-012 |
| **Version** | v5.0 |
| **Activity** | RPAS Operations at Construction Sites |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS operations at active construction sites for progress documentation, surveying, inspection, and monitoring.

---

## 2. Hazard Analysis

### 2.1 Site Access Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Struck by vehicle/equipment | Active construction traffic | Injury, death | 2 | 5 | 10-M | High-vis PPE, awareness, designated routes | 5-L |
| 1.2 | Struck by falling object | Overhead work, lifts | Injury, death | 2 | 5 | 10-M | Hard hat, awareness, exclusion zones | 5-L |
| 1.3 | Slips, trips, falls | Uneven ground, debris, materials | Injury | 3 | 3 | 9-M | Safety footwear, awareness, housekeeping | 4-L |
| 1.4 | Openings and excavations | Floor openings, trenches | Fall | 2 | 4 | 8-M | Awareness, barriers, marked hazards | 4-L |
| 1.5 | Unauthorized areas | Restricted zones | Injury, interference | 2 | 3 | 6-L | Site orientation, stay in authorized areas | 3-L |

### 2.2 Construction Activity Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Crane operations | Overhead loads, swing radius | Struck by, RPAS collision | 2 | 5 | 10-M | Crane coordination, flight restrictions during lifts | 4-L |
| 2.2 | Concrete operations | Pour in progress | Interference, contamination | 2 | 2 | 4-L | Timing, coordination | 2-L |
| 2.3 | Welding/cutting | Arc flash, sparks | Eye damage, fire | 2 | 3 | 6-L | Awareness, distance, timing | 3-L |
| 2.4 | Power tools/equipment | Noise, projectiles | Injury | 2 | 3 | 6-L | Distance, PPE, awareness | 3-L |

### 2.3 RPAS-Specific Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Collision with structure | Complex environment | Damage, injury | 3 | 3 | 9-M | Site survey, careful flight planning, margins | 4-L |
| 3.2 | Collision with crane/equipment | Moving obstacles | Damage, injury | 2 | 4 | 8-M | Coordination, no-fly during lifts | 4-L |
| 3.3 | Interference from site radio | Communications equipment | Control issues | 2 | 3 | 6-L | Pre-flight test, monitoring | 3-L |
| 3.4 | Workers in flight path | Active work areas | Strike on person | 2 | 4 | 8-M | Coordination, flight timing, exclusion zones | 4-L |
| 3.5 | Dust and debris | Site conditions | Visibility, equipment damage | 3 | 2 | 6-L | Weather conditions, timing | 3-L |

### 2.4 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Noise | Construction equipment | Communication difficulty | 3 | 2 | 6-L | Hearing protection, visual signals | 3-L |
| 4.2 | Dust | Site activities | Respiratory, visibility | 3 | 2 | 6-L | Dust mask if needed, timing | 3-L |
| 4.3 | Weather at exposed site | Open construction site | Heat/cold stress | 3 | 3 | 9-M | Weather monitoring, appropriate clothing | 4-L |

---

## 3. Control Summary

### Site Access Requirements

| Requirement | Standard |
|:------------|:---------|
| Site orientation | Before first access |
| Sign-in | Per site requirements |
| PPE minimum | Hard hat, safety glasses, high-vis, safety boots |
| Escort | If required by site |
| Work permit | If required by site |

### Coordination Requirements

| Item | Action |
|:-----|:-------|
| Site supervisor | Notify before operations |
| Crane operator | Coordinate flight timing |
| Workers in area | Notify before flight |
| Flight boundaries | Agreed with site |

### Flight Restrictions

| Condition | Restriction |
|:----------|:------------|
| Crane lift in progress | No flight in swing radius |
| Concrete pour | No flight over pour area |
| Workers unaware | No flight until briefed |
| Poor visibility (dust) | Suspend operations |

---

## 4. PPE Requirements (Construction Site)

| PPE | Requirement |
|:----|:------------|
| Hard hat | CSA Type 1 or 2 - Always |
| Safety glasses | CSA Z94.3 - Always |
| Safety footwear | CSA Grade 1 - Always |
| High-visibility vest | CSA Class 2 minimum - Always |
| Hearing protection | Where required |
| Gloves | Task-appropriate |

---

## 5. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Site orientation completed | ☐ |
| PPE appropriate for site | ☐ |
| Site supervisor notified | ☐ |
| Crane operations coordinated | ☐ |
| Flight boundaries agreed | ☐ |
| Workers in area notified | ☐ |
| Emergency procedures known | ☐ |
| Site-specific hazards identified | ☐ |

---

## 6. Emergency Procedures

| Event | Action |
|:------|:-------|
| Site emergency alarm | Land immediately, follow site procedures |
| RPAS incident | Secure, notify site supervisor |
| Injury | First aid, notify site, follow site procedures |
| Near miss | Report to site and document |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Construction site safety | Before construction site operations |
| Site-specific orientation | Before each new site |
| Crane awareness | If operating near cranes |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-012 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Winter Operations',
  'fha',
  'FHA-013',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Winter/Cold Weather Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-013 |
| **Version** | v5.0 |
| **Activity** | Operations in Cold Weather/Winter Conditions |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS and field operations conducted in cold weather conditions including snow, ice, and temperatures below 5°C.

---

## 2. Hazard Analysis

### 2.1 Cold Injury Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Hypothermia | Prolonged cold exposure | Incapacitation, death | 2 | 5 | 10-M | Layered clothing, warm shelter, time limits | 4-L |
| 1.2 | Frostbite | Exposed skin in cold/wind | Tissue damage | 3 | 3 | 9-M | Covering extremities, wind awareness, time limits | 4-L |
| 1.3 | Cold stress | Working in cold | Reduced performance, injury | 3 | 3 | 9-M | Warm-up breaks, appropriate clothing | 4-L |
| 1.4 | Reduced dexterity | Cold hands | Dropped equipment, errors | 3 | 2 | 6-L | Warm gloves, hand warmers, breaks | 3-L |

### 2.2 Terrain Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Slips on ice | Icy surfaces | Falls, injury | 4 | 3 | 12-M | Ice cleats, caution, sand/salt, awareness | 6-L |
| 2.2 | Slips on snow | Packed/hidden hazards | Falls, injury | 3 | 3 | 9-M | Appropriate footwear, caution | 4-L |
| 2.3 | Snow-covered hazards | Hidden holes, debris | Falls, injury | 3 | 3 | 9-M | Probe unfamiliar areas, marked hazards | 4-L |
| 2.4 | Avalanche terrain | Steep snow-covered slopes | Burial, death | 1 | 5 | 5-L | Avoid avalanche terrain, training if required | 3-L |

### 2.3 Equipment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Battery performance loss | Cold reduces LiPo capacity | Shortened flight, crash | 3 | 3 | 9-M | Pre-warm batteries, conservative planning | 4-L |
| 3.2 | LCD/screen issues | Cold affects displays | Inability to monitor | 2 | 3 | 6-L | Insulation, hand warmers, backup display | 3-L |
| 3.3 | Propeller icing | Humidity + cold | Loss of lift, crash | 2 | 4 | 8-M | Avoid icing conditions, visual monitoring | 4-L |
| 3.4 | Lens fogging | Temperature change | Poor imagery | 3 | 2 | 6-L | Acclimation, anti-fog measures | 3-L |
| 3.5 | Control stiffness | Cold lubricants | Reduced responsiveness | 2 | 3 | 6-L | Pre-flight warm-up, monitoring | 3-L |

### 2.4 Vehicle/Travel Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Winter driving | Snow, ice, reduced visibility | Collision | 3 | 4 | 12-M | Winter tires, reduced speed, delay if severe | 6-L |
| 4.2 | Vehicle breakdown | Cold-related failure | Stranding in cold | 2 | 4 | 8-M | Maintenance, emergency kit, communication | 4-L |
| 4.3 | Getting stuck | Snow, ice | Stranding | 3 | 3 | 9-M | Appropriate vehicle, recovery gear | 4-L |

### 2.5 Visibility Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Reduced visibility | Snow, fog, flat light | Loss of RPAS visual, collision | 3 | 3 | 9-M | Weather monitoring, abort criteria | 4-L |
| 5.2 | White-out/flat light | Overcast + snow cover | Disorientation | 2 | 3 | 6-L | Visual references, altitude awareness | 3-L |
| 5.3 | Short daylight | Winter days | Time constraints, darkness | 3 | 2 | 6-L | Planning, early start | 3-L |

---

## 3. Cold Weather Limits

### Temperature Limits

| Temperature | Action |
|:------------|:-------|
| 0°C to -10°C | Caution - reduced battery capacity |
| -10°C to -20°C | Short operations only, pre-warm batteries |
| Below -20°C | NO-GO unless specifically approved |

### Wind Chill Limits

| Wind Chill | Risk | Work Limit |
|:-----------|:-----|:-----------|
| 0 to -10°C | Low | Normal precautions |
| -10 to -25°C | Moderate | 4-hour limit, warm breaks |
| -25 to -35°C | High | 1-hour limit, frequent breaks |
| Below -35°C | Very High | NO-GO for extended outdoor work |

---

## 4. Control Summary

### Battery Management (Cold Weather)

| Control | Requirement |
|:--------|:------------|
| Pre-warm | Keep batteries warm until use (car, insulated bag) |
| Minimum temperature | Do not use below 5°C unless warmed |
| Reduced capacity | Plan for 30-50% reduction |
| Monitoring | Watch voltage carefully |
| Landing threshold | Land with higher reserve (30%+) |

### Personal Protection

| Item | Requirement |
|:-----|:------------|
| Base layer | Moisture-wicking |
| Insulation layer | Appropriate for temperature |
| Outer layer | Wind/water resistant |
| Extremities | Insulated hat, gloves, face covering |
| Footwear | Insulated, waterproof, ice cleats if needed |
| Emergency | Extra dry clothing available |

### Warm-Up Breaks

| Temperature | Break Frequency |
|:------------|:----------------|
| 0°C to -10°C | Every 2 hours |
| -10°C to -20°C | Every 1 hour |
| Below -20°C | Every 30 minutes |

---

## 5. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Temperature and wind chill checked | ☐ |
| Personnel adequately dressed | ☐ |
| Batteries pre-warmed | ☐ |
| Vehicle emergency kit | ☐ |
| Warm shelter available/planned | ☐ |
| Communication device | ☐ |
| Ice cleats if needed | ☐ |
| Hot drinks/food available | ☐ |

---

## 6. Signs of Cold Injury

### Frostbite Warning Signs

- White or grayish skin
- Numbness
- Skin feels waxy or hard
- Clumsiness due to stiff joints

### Hypothermia Warning Signs

- Shivering (early stage)
- Confusion, slurred speech
- Loss of coordination
- Drowsiness
- Slow/shallow breathing

**Action:** Seek warmth immediately; medical attention if severe.

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Cold stress awareness | All personnel for winter operations |
| Cold injury recognition | All personnel |
| Winter driving | Before winter vehicle operation |
| Battery cold weather handling | Before cold weather RPAS operations |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-013 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Night Operations',
  'fha',
  'FHA-014',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Night Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-014 |
| **Version** | v5.0 |
| **Activity** | RPAS Operations During Night/Darkness |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS operations conducted during night (after sunset, before sunrise) which require Special Flight Operations Certificate (SFOC) authorization.

---

## 2. Regulatory Reference

| Requirement | Reference |
|:------------|:----------|
| Night RPAS operations | SFOC required |
| Aircraft lighting | Position lights required |
| Pilot currency | Night-specific training |

**Note:** Night operations are NOT permitted under Basic, Advanced, or L1C. SFOC required.

---

## 3. Hazard Analysis

### 3.1 Visibility Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Loss of visual contact | Darkness, inadequate lighting | Loss of situational awareness | 3 | 4 | 12-M | Aircraft lights, strobes, telemetry monitoring | 6-L |
| 1.2 | Obstacle not visible | Unlit obstacles at night | Collision | 3 | 4 | 12-M | Pre-mission survey, altitude margins, GPS waypoints | 6-L |
| 1.3 | Disorientation | Lack of visual references | Incorrect control inputs | 2 | 4 | 8-M | Instrument flying, lights orientation, training | 4-L |
| 1.4 | Depth perception loss | Night conditions | Misjudged landing | 3 | 3 | 9-M | Landing zone lighting, practice, approach aids | 4-L |

### 3.2 Personnel Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Fatigue | Night work, circadian disruption | Errors, incidents | 3 | 3 | 9-M | Rest before, limit duration, fatigue monitoring | 4-L |
| 2.2 | Slips, trips, falls | Poor ground visibility | Injury | 3 | 3 | 9-M | Ground lighting, flashlights, familiar area | 4-L |
| 2.3 | Cold exposure | Night temperatures lower | Cold stress | 3 | 3 | 9-M | Appropriate clothing, breaks, awareness | 4-L |
| 2.4 | Wildlife encounter | Nocturnal animals | Surprise encounter | 2 | 3 | 6-L | Lighting, noise, awareness | 3-L |

### 3.3 Operational Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Unable to see traffic | Unlit aircraft at night | Mid-air conflict | 2 | 5 | 10-M | Altitude restrictions, airspace coordination, DAA | 4-L |
| 3.2 | Emergency landing difficulty | Cannot see terrain | Crash, damage | 2 | 4 | 8-M | Pre-planned emergency sites, lighting | 4-L |
| 3.3 | Equipment malfunction undetected | Darkness hides visual cues | Continued operation with issue | 2 | 3 | 6-L | Pre-flight thorough, telemetry monitoring | 3-L |
| 3.4 | Battery/equipment issues | Cold temperatures at night | Failure, crash | 2 | 3 | 6-L | Temperature monitoring, battery management | 3-L |

### 3.4 Communication Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Crew coordination difficulty | Darkness, limited visual | Miscommunication | 2 | 3 | 6-L | Radios, clear protocols, proximity | 3-L |
| 4.2 | Third party unaware | Darkness hides operation | Conflict, surprise | 2 | 3 | 6-L | Site control, lighting, signage | 3-L |

---

## 4. Control Summary

### Aircraft Requirements

| Requirement | Standard |
|:------------|:---------|
| Anti-collision lights | Required - visible for 3 SM |
| Position lights | Required |
| Light visibility | Green right, red left, white tail |
| Strobe | Recommended for additional visibility |

### Ground Setup

| Item | Requirement |
|:-----|:------------|
| Takeoff/landing zone | Illuminated |
| GCS area | Work lighting (red preferred) |
| Obstacles | Marked or lit if near flight path |
| Personnel | Headlamps, reflective clothing |
| Emergency landing zones | Pre-identified, GPS marked |

### Personnel Requirements

| Requirement | Standard |
|:------------|:---------|
| Authorization | SFOC for night operations |
| Training | Night operations specific |
| Currency | Recent night operation experience |
| Rest | Adequate rest before night ops |
| Fitness | Alert and fit for duty |

---

## 5. Crew Resource Management (Night)

### Communication

| Protocol | Purpose |
|:---------|:--------|
| Radio communication | Primary - darkness limits visual |
| Clear position reports | Orientation awareness |
| Immediate callout | Any anomaly or concern |
| Sterile cockpit | Maintained during flight |

### Workload Management

| Factor | Consideration |
|:-------|:--------------|
| Task sharing | VO maintains traffic watch, not RPAS visual |
| Instrument reliance | Greater reliance on telemetry |
| Decision making | Conservative; lower threshold to abort |
| Fatigue | Monitor; ready to stop |

---

## 6. Pre-Operation Requirements

### Site Survey (Daylight)

| Item | Completed |
|:-----|:----------|
| All obstacles identified | ☐ |
| Emergency landing sites identified | ☐ |
| GPS waypoints set | ☐ |
| Lighting plan developed | ☐ |
| Access routes verified | ☐ |

### Night Pre-Flight Checklist

| Item | Verified |
|:-----|:---------|
| SFOC valid and conditions understood | ☐ |
| Aircraft lights functional | ☐ |
| Backup lighting (aircraft) | ☐ |
| Ground lighting in place | ☐ |
| Personnel have flashlights | ☐ |
| Emergency equipment accessible | ☐ |
| Communication tested | ☐ |
| Fatigue assessment complete | ☐ |

---

## 7. Emergency Procedures (Night-Specific)

| Emergency | Procedure |
|:----------|:----------|
| Loss of aircraft lights | Land immediately at planned site |
| Lost visual | Use telemetry, RTH to illuminated home point |
| Ground lighting failure | Abort unless backup available |
| Traffic conflict | Immediate descent/land |

---

## 8. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Night operations training | Before authorization |
| Night emergency procedures | Before authorization |
| Instrument/telemetry reliance | Before night ops |
| Currency | Per SFOC and company requirements |

---

## 9. Limitations

| Condition | Limit |
|:----------|:------|
| SFOC | Required for all night operations |
| Weather | VMC conditions maintained |
| Visibility | Per SFOC conditions |
| Wind | More conservative than day limits |
| Duration | Limited by fatigue |

---

## 10. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-014 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'LiDAR Operations',
  'fha',
  'FHA-015',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## LiDAR Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-015 |
| **Version** | v5.0 |
| **Activity** | RPAS-Based LiDAR Scanning Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers aerial LiDAR scanning operations using RPAS platforms, including sensor operation, data collection, and associated ground activities.

---

## 2. Hazard Analysis

### 2.1 LiDAR-Specific Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Laser eye exposure | Class 1M or higher laser | Eye injury | 2 | 4 | 8-M | Laser safety classification, eye protection if required | 4-L |
| 1.2 | Laser interference with aircraft | Pointing at manned aircraft | Pilot distraction, incident | 1 | 5 | 5-L | Flight coordination, nadir-pointing sensor, awareness | 3-L |
| 1.3 | Heavy payload issues | Increased aircraft weight | Reduced performance, crash | 2 | 3 | 6-L | Weight/balance verification, performance planning | 3-L |
| 1.4 | Electromagnetic interference | Sensor electronics | Control issues, data errors | 2 | 3 | 6-L | Pre-flight testing, shielding, separation | 3-L |

### 2.2 Equipment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Equipment damage (mounting) | Improper installation | Sensor loss, crash | 2 | 4 | 8-M | Mounting verification, redundant attachment | 4-L |
| 2.2 | Battery demands | Heavy payload + sensor power | Shortened flight time | 3 | 3 | 9-M | Conservative flight planning, monitoring | 4-L |
| 2.3 | Overheating | High processing demands | Equipment damage | 2 | 3 | 6-L | Temperature monitoring, ventilation | 3-L |
| 2.4 | IMU/GPS errors | Vibration, interference | Poor data quality | 2 | 2 | 4-L | Calibration, vibration dampening | 2-L |

### 2.3 Flight Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Low altitude flight | LiDAR resolution needs | Obstacle collision | 3 | 3 | 9-M | Site survey, obstacle mapping, margins | 4-L |
| 3.2 | Extended flight time | Large area coverage | Fatigue, reduced attention | 3 | 3 | 9-M | Crew rotation, breaks, alertness monitoring | 4-L |
| 3.3 | Complex flight patterns | Multiple passes, patterns | Disorientation | 2 | 3 | 6-L | Automated missions, clear flight plan | 3-L |
| 3.4 | Weight shift | CG changes with heavy sensor | Handling issues | 2 | 3 | 6-L | CG verification, test flight | 3-L |

### 2.4 Ground Control Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | GCP placement risks | Same as survey operations | Per FHA-009 | - | - | - | Per FHA-009 controls | - |
| 4.2 | Base station setup | Extended time in field | Exposure, terrain hazards | 2 | 2 | 4-L | Efficient workflow, awareness | 2-L |

### 2.5 Data Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Data loss | Storage failure, corruption | Project rework, delay | 2 | 3 | 6-L | Redundant storage, verification | 3-L |
| 5.2 | Inaccurate data | Calibration, processing error | Wrong deliverable | 2 | 3 | 6-L | Calibration procedure, QC checks | 3-L |
| 5.3 | Large file handling | High data volumes | Processing issues | 3 | 1 | 3-L | Adequate storage, processing workflow | 2-L |

---

## 3. Laser Safety

### Classification

| Class | Risk | Requirements |
|:------|:-----|:-------------|
| Class 1 | No hazard | No special precautions |
| Class 1M | Magnification hazard | Don''t view through optics |
| Class 3R | Low risk | Avoid direct eye exposure |
| Class 3B/4 | Hazardous | PPE required, controlled area |

**Most aerial LiDAR systems are Class 1 or 1M.** Verify classification of specific sensor.

### Controls for Class 1M+

| Control | Requirement |
|:--------|:------------|
| Eye protection | If required by classification |
| No optical viewing | Don''t view beam through binoculars |
| Beam direction | Nadir-pointing during operation |
| Aircraft avoidance | Do not point at manned aircraft |

---

## 4. Control Summary

### Pre-Flight

| Control | Requirement |
|:--------|:------------|
| Sensor mounting | Verified secure, redundant |
| Weight/balance | Within aircraft limits |
| CG verification | Confirmed acceptable |
| Laser safety check | Classification known, controls in place |
| Battery planning | Conservative for payload |
| Test flight | Recommended with new setup |

### During Flight

| Control | Requirement |
|:--------|:------------|
| Continuous monitoring | Battery, telemetry, data recording |
| Low altitude awareness | Obstacle vigilance |
| Aircraft traffic | Sensor off if traffic conflict |
| Temperature monitoring | Sensor and aircraft systems |

### Post-Flight

| Control | Requirement |
|:--------|:------------|
| Data verification | Confirm capture complete |
| Data backup | Redundant storage same day |
| Equipment inspection | Check mounting, condition |
| Battery care | Per battery procedures |

---

## 5. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Laser safety eyewear | If Class 3R or higher sensor |
| Standard field PPE | Per site requirements |

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| LiDAR sensor operation | Before LiDAR operations |
| Laser safety | Before using Class 1M+ sensors |
| Payload integration | Before new sensor deployment |
| Data processing | For quality assurance |

---

## 7. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Sensor mounting secure | ☐ |
| Weight within limits | ☐ |
| CG acceptable | ☐ |
| Laser classification known | ☐ |
| Laser safety controls in place | ☐ |
| Battery capacity adequate | ☐ |
| Storage capacity adequate | ☐ |
| Flight plan accounts for payload | ☐ |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-015 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Forestry Operations',
  'fha',
  'FHA-016',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Forestry/Resource Area Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-016 |
| **Version** | v5.0 |
| **Activity** | Operations in Forestry and Resource Areas |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers operations in forestry areas including cutblocks, resource roads, reforestation sites, and forest inventory surveys.

---

## 2. Hazard Analysis

### 2.1 Access Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Resource road traffic | Logging trucks, equipment | Collision | 2 | 5 | 10-M | Radio (if available), pull over, yield, awareness | 5-L |
| 1.2 | Road conditions | Gravel, potholes, washouts | Vehicle damage, accident | 3 | 3 | 9-M | Reduced speed, appropriate vehicle | 4-L |
| 1.3 | Remote location | Distance from services | Delayed emergency response | 3 | 4 | 12-M | Communication plan, emergency kit, working alone protocol | 6-L |
| 1.4 | Road closures | Active logging, fire | Stranding, route change | 2 | 2 | 4-L | Pre-trip planning, alternative routes | 2-L |

### 2.2 Work Site Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Logging operations | Active falling, yarding | Struck by tree/equipment | 2 | 5 | 10-M | Coordination, exclusion zones, timing | 4-L |
| 2.2 | Falling trees/widowmakers | Hung trees, wind | Struck by | 2 | 5 | 10-M | Awareness, overhead scanning, wind limits | 4-L |
| 2.3 | Debris and slash | Cutblock materials | Trips, falls | 3 | 3 | 9-M | Footwear, caution, route selection | 4-L |
| 2.4 | Uneven terrain | Stumps, holes, slopes | Falls, injury | 3 | 3 | 9-M | Appropriate footwear, awareness | 4-L |
| 2.5 | Wildlife | Bears, other animals | Attack, injury | 2 | 4 | 8-M | Bear spray, awareness, noise, working in pairs | 4-L |

### 2.3 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Wildfire | Fire season, ignition source | Entrapment, injury | 2 | 5 | 10-M | Fire weather monitoring, egress routes, BC Wildfire check | 5-L |
| 3.2 | Weather exposure | Remote outdoor work | Heat/cold stress | 3 | 3 | 9-M | Weather monitoring, appropriate clothing | 4-L |
| 3.3 | Insects | Wasps, bees, ticks | Stings, bites | 3 | 2 | 6-L | Awareness, repellent, first aid | 3-L |
| 3.4 | Poisonous plants | Contact with vegetation | Skin irritation | 2 | 2 | 4-L | Awareness, clothing coverage | 2-L |

### 2.4 RPAS Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Tree canopy obstacles | Forest environment | Collision, RPAS loss | 3 | 3 | 9-M | Altitude planning, clear launch/land areas | 4-L |
| 4.2 | Limited GPS | Canopy interference | Position errors | 2 | 3 | 6-L | Open area operations, GPS verification | 3-L |
| 4.3 | Limited visibility | Trees obscuring view | Loss of visual | 3 | 3 | 9-M | Clear sightlines, altitude, VO positioning | 4-L |
| 4.4 | Emergency landing limited | No clear areas | Crash in trees | 2 | 3 | 6-L | Pre-identify landing options, conservative ops | 3-L |

---

## 3. Control Summary

### Pre-Trip Planning

| Item | Action |
|:-----|:-------|
| Road status | Check with licensee if active logging |
| Fire conditions | Check BC Wildfire Service |
| Communication | Confirm coverage or satellite device |
| Working alone | Protocol in place if applicable |
| Vehicle | Appropriate for conditions |

### Active Logging Coordination

| Requirement | Standard |
|:------------|:---------|
| Contact | Notify licensee of operations |
| Timing | Operate during shutdown or away from active |
| Communication | Radio on forestry frequency if available |
| Exclusion | Stay clear of active falling/yarding |

### Wildlife Precautions

| Control | Requirement |
|:--------|:------------|
| Bear spray | Carried and accessible |
| Noise | Make presence known |
| Food | Stored in vehicle |
| Awareness | Watch for signs, fresh activity |
| Partner | Work in pairs when possible |

---

## 4. Fire Season Considerations

### Fire Weather Monitoring

| Source | Information |
|:-------|:------------|
| BC Wildfire Service | Fire danger ratings, active fires |
| Environment Canada | Wind, humidity, temperature |
| Local signage | Fire danger level |

### Fire Risk Reduction

| Action | Purpose |
|:-------|:--------|
| Check fire danger rating | Daily |
| Know egress routes | Multiple options |
| Monitor conditions | Throughout day |
| Vehicle positioning | Ready for departure |
| Emergency contact | *5555 (BC Wildfire) |

---

## 5. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear | Always - caulk boots if working on logs |
| High-visibility vest | Near active operations |
| Hard hat | Active logging areas |
| Bear spray | Bear country |
| Long pants/sleeves | Vegetation protection |

---

## 6. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Road conditions/access checked | ☐ |
| Logging activity status known | ☐ |
| Fire conditions checked | ☐ |
| Communication plan in place | ☐ |
| Working alone protocol (if applicable) | ☐ |
| Emergency egress routes identified | ☐ |
| Wildlife precautions in place | ☐ |
| Vehicle emergency kit | ☐ |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Resource road safety | Before forestry area work |
| Wildlife awareness | Before field work |
| Wildfire awareness | Before fire season work |
| Working alone | If applicable |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-016 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Agriculture Operations',
  'fha',
  'FHA-017',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Agriculture/Farm Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-017 |
| **Version** | v5.0 |
| **Activity** | RPAS Operations on Agricultural Land |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS operations on agricultural land including crop mapping, field surveys, precision agriculture, and livestock monitoring.

---

## 2. Hazard Analysis

### 2.1 Agricultural Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Farm machinery | Active equipment operation | Struck by, run over | 2 | 5 | 10-M | Coordination with farmer, timing, awareness | 4-L |
| 1.2 | Livestock | Animals in field | Injury, animal disturbance | 2 | 3 | 6-L | Coordination, exclusion from livestock areas | 3-L |
| 1.3 | Irrigation systems | Pivots, sprinklers | RPAS collision, wet conditions | 2 | 3 | 6-L | Identification, scheduling, standoff | 3-L |
| 1.4 | Chemical application | Pesticides, fertilizers | Exposure, health effects | 2 | 3 | 6-L | Coordination, timing, re-entry intervals | 3-L |

### 2.2 Site Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Uneven terrain | Ruts, irrigation channels | Trips, vehicle damage | 3 | 2 | 6-L | Awareness, appropriate footwear/vehicle | 3-L |
| 2.2 | Soft ground | Irrigation, rain | Vehicle stuck | 3 | 2 | 6-L | Ground assessment, avoid soft areas | 3-L |
| 2.3 | Electric fences | Livestock containment | Shock | 2 | 2 | 4-L | Identification, awareness | 2-L |
| 2.4 | Grain bins/silos | Confined space, entrapment | Suffocation, injury | 1 | 5 | 5-L | Stay out, awareness | 2-L |

### 2.3 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Dust | Dry conditions, equipment | Respiratory, visibility | 3 | 2 | 6-L | Mask if needed, timing, positioning | 3-L |
| 3.2 | Heat exposure | Open field, summer | Heat stress | 3 | 3 | 9-M | Hydration, breaks, shade | 4-L |
| 3.3 | Insects | Bees, wasps, mosquitoes | Stings, bites | 3 | 2 | 6-L | Awareness, repellent | 3-L |
| 3.4 | Wildlife | Ground-nesting birds, coyotes | Disturbance, encounter | 2 | 2 | 4-L | Awareness, avoid nesting areas | 2-L |

### 2.4 RPAS Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Bird strikes | Agricultural bird populations | RPAS damage | 2 | 2 | 4-L | Altitude, awareness, avoidance | 2-L |
| 4.2 | Power lines | Farm electrical service | Collision, electrocution | 2 | 4 | 8-M | Line identification, standoff distance | 4-L |
| 4.3 | Wind exposure | Open fields | Control difficulty | 3 | 3 | 9-M | Wind limits, conservative operations | 4-L |
| 4.4 | Livestock disturbance | RPAS noise/presence | Animal stress, fence breach | 2 | 3 | 6-L | Distance from animals, altitude, coordination | 3-L |

---

## 3. Control Summary

### Coordination with Farm Owner

| Item | Discuss |
|:-----|:--------|
| Active equipment | Where and when operating |
| Livestock locations | Areas to avoid |
| Chemical applications | Timing, re-entry restrictions |
| Irrigation schedule | Active systems |
| Power line locations | Overhead hazards |
| Access restrictions | Sensitive areas |

### RPAS Near Livestock

| Guideline | Rationale |
|:----------|:----------|
| Maintain distance | Minimize stress response |
| Fly higher | Reduce noise impact |
| Avoid startling | Gradual approach if needed |
| Watch behavior | Signs of disturbance |
| Coordinate | Owner knows animals |

---

## 4. Chemical Exposure Prevention

### If Recent Application

| Chemical Type | Minimum Re-Entry |
|:--------------|:-----------------|
| Field pesticides | Follow label/farmer guidance |
| Aerial spray | Wait until settled |
| Unknown | Ask farmer before entry |

### Controls

| Control | Requirement |
|:--------|:------------|
| Coordination | Ask about recent applications |
| Timing | Allow appropriate re-entry time |
| PPE | If required by conditions |
| Hygiene | Wash hands before eating |

---

## 5. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear | Always |
| High-visibility vest | Near active equipment |
| Sun protection | Extended outdoor work |
| Gloves | Handling equipment, fence wires |

---

## 6. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Farmer/landowner coordination | ☐ |
| Active equipment locations known | ☐ |
| Livestock locations known | ☐ |
| Recent chemical applications checked | ☐ |
| Power line locations identified | ☐ |
| Irrigation status known | ☐ |
| Access route planned | ☐ |
| Emergency contact for farm | ☐ |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Agricultural site orientation | Before farm operations |
| Chemical hazard awareness | If operating near applications |
| Livestock awareness | If animals present |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-017 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Emergency Response Support',
  'fha',
  'FHA-018',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Emergency Response Support Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-018 |
| **Version** | v5.0 |
| **Activity** | RPAS Support for Emergency Response |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS operations conducted in support of emergency response including search and rescue, disaster assessment, wildfire support, and incident documentation.

---

## 2. Important Regulatory Note

**RPAS operations at emergency scenes require coordination and/or authorization:**
- Temporary Flight Restrictions (TFRs) may be in place
- Forest fire areas are restricted airspace
- Coordination with Incident Commander required
- May require emergency SFOC

---

## 3. Hazard Analysis

### 3.1 Emergency Scene Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Dynamic, unstable scene | Emergency in progress | Injury, secondary incident | 3 | 4 | 12-M | IC coordination, situational awareness, staging | 6-L |
| 1.2 | Emergency aircraft conflict | Helicopters, air tankers | Mid-air collision | 2 | 5 | 10-M | Airspace coordination, authorization, grounding if aircraft | 5-L |
| 1.3 | Distressed persons | Victims, bystanders | Interference, emotional stress | 2 | 3 | 6-L | Staging away, IC coordination | 3-L |
| 1.4 | Hazardous materials | Spills, fire byproducts | Exposure | 2 | 4 | 8-M | IC briefing, exclusion zones, upwind positioning | 4-L |
| 1.5 | Structural instability | Damaged buildings | Collapse | 2 | 5 | 10-M | Standoff distance, IC guidance, remote observation | 4-L |

### 3.2 Wildfire Support Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Aircraft conflict | Air tankers, helicopters | Collision | 2 | 5 | 10-M | TFR compliance, air ops coordination, immediate grounding if aircraft | 4-L |
| 2.2 | Smoke inhalation | Fire smoke | Respiratory injury | 2 | 3 | 6-L | Upwind positioning, respiratory protection | 3-L |
| 2.3 | Fire behavior change | Wind, fuel conditions | Entrapment | 2 | 5 | 10-M | Escape routes, weather monitoring, lookout | 4-L |
| 2.4 | Reduced visibility | Smoke | Loss of RPAS visual | 3 | 3 | 9-M | Telemetry reliance, conservative operations | 4-L |
| 2.5 | Hot ash/embers | Active fire | Burns, equipment damage | 2 | 3 | 6-L | Distance from active fire, awareness | 3-L |

### 3.3 Search and Rescue Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Difficult terrain | SAR environments | Falls, injury | 3 | 4 | 12-M | Proper footwear, staging, team support | 6-L |
| 3.2 | Weather exposure | Extended operations | Heat/cold stress | 3 | 3 | 9-M | Appropriate gear, rotation, monitoring | 4-L |
| 3.3 | Wildlife | Remote areas | Encounter | 2 | 3 | 6-L | Bear spray, awareness | 3-L |
| 3.4 | Time pressure | Urgency of search | Rushed decisions, errors | 3 | 3 | 9-M | Disciplined procedures, CRM | 4-L |
| 3.5 | Fatigue | Extended operations | Errors, injury | 3 | 3 | 9-M | Rotation, rest, monitoring | 4-L |

### 3.4 Operational Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Time pressure | Emergency urgency | Skipped safety steps | 3 | 3 | 9-M | Maintain procedures, briefings | 4-L |
| 4.2 | Unfamiliar site | No time for survey | Obstacle collision | 3 | 3 | 9-M | Altitude margins, conservative ops, reconnaissance | 4-L |
| 4.3 | Communications overload | Multiple agencies | Miscommunication | 2 | 3 | 6-L | Clear protocols, designated channels | 3-L |
| 4.4 | Equipment failure | Demanding conditions | Mission failure | 2 | 3 | 6-L | Spare equipment, maintenance, backup plans | 3-L |

---

## 4. Control Summary

### Before Deploying

| Item | Action |
|:-----|:-------|
| Authorization | Confirm legal to operate (TFRs, authorization) |
| IC contact | Coordinate with Incident Commander |
| Airspace | Verify no restrictions or obtain clearance |
| Briefing | Understand scene, hazards, objectives |
| Staging | Establish safe operating location |

### Integration with Emergency Response

| Protocol | Requirement |
|:---------|:------------|
| Report to IC | Before commencing operations |
| Designated channel | Use assigned communications |
| Boundaries | Respect assigned operational area |
| Aircraft alert | Ground immediately if manned aircraft |
| Updates | Regular briefings to IC on capabilities/limitations |

### Wildfire Specific

| Control | Requirement |
|:--------|:------------|
| TFR check | Verify any temporary restrictions |
| Air ops coordination | Coordinate with air attack if active |
| Escape route | Know multiple exit routes |
| Lookout | Maintain fire weather awareness |
| Ground if aircraft | Immediate landing if tanker/heli |

---

## 5. PPE Requirements

| PPE | Wildfire | SAR | Disaster |
|:----|:---------|:----|:---------|
| Safety footwear | ✓ | ✓ | ✓ |
| High-visibility | ✓ | Per conditions | ✓ |
| Hard hat | If overhead hazard | Per terrain | ✓ |
| N95/P100 mask | ✓ (smoke) | Per conditions | Per conditions |
| Nomex/FR clothing | If near fire | - | - |
| Eye protection | ✓ | Per conditions | ✓ |

---

## 6. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Authorization confirmed | ☐ |
| IC coordination complete | ☐ |
| Airspace clear or authorized | ☐ |
| Hazards briefed | ☐ |
| Communications established | ☐ |
| Escape routes identified | ☐ |
| PPE appropriate | ☐ |
| Equipment ready | ☐ |
| Backup plan in place | ☐ |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Emergency response awareness | Before emergency support |
| Incident Command System | Recommended |
| Wildfire awareness | Before wildfire support |
| SAR awareness | Before SAR support |
| First aid | All personnel |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-018 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Cargo Delivery Operations',
  'fha',
  'FHA-019',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Cargo Delivery Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-019 |
| **Version** | v5.0 |
| **Activity** | RPAS Cargo and Equipment Delivery |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers cargo delivery operations using medium RPAS (25-150 kg) such as the DJI FlyCart 30 for equipment delivery in energy, mining, infrastructure, and general cargo applications.

---

## 2. Aircraft Reference

**DJI FlyCart 30:**
- MTOW: ~95 kg (with payload)
- Max payload: 30-40 kg
- Max range: 28 km (no load) / 16 km (full load)
- Max wind: 12 m/s

---

## 3. Hazard Analysis

### 3.1 Aircraft/Payload Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Heavy aircraft crash | Control loss, failure | Significant damage, injury | 2 | 5 | 10-M | Training, maintenance, conservative operations | 5-L |
| 1.2 | Cargo shift | Poor securing, turbulence | Loss of control, crash | 2 | 4 | 8-M | Proper loading, securing, weight verification | 4-L |
| 1.3 | Overloading | Exceeding payload limits | Performance degradation, crash | 2 | 4 | 8-M | Weight verification, scales, limits documented | 4-L |
| 1.4 | CG exceedance | Improper loading | Control difficulty | 2 | 4 | 8-M | CG verification, proper loading procedure | 4-L |
| 1.5 | Reduced performance | Heavy payload, weather | Unable to complete mission | 3 | 3 | 9-M | Conservative planning, abort criteria | 4-L |

### 3.2 Delivery Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Dropped cargo | Release failure, aircraft issue | Damage, injury | 2 | 4 | 8-M | Zone clearance, controlled delivery, testing | 4-L |
| 2.2 | Person struck by cargo | Personnel in zone | Injury | 2 | 5 | 10-M | Zone clearance, communication, exclusion zones | 4-L |
| 2.3 | Hard landing with cargo | Pilot error, wind gust | Cargo/aircraft damage | 2 | 3 | 6-L | Training, wind limits, controlled approach | 3-L |
| 2.4 | Winch failure | Mechanical failure | Cargo stuck, mission failure | 2 | 3 | 6-L | Pre-flight testing, maintenance | 3-L |
| 2.5 | Inadvertent release | System error, operator error | Cargo dropped wrong location | 2 | 3 | 6-L | Procedural controls, confirmation | 3-L |

### 3.3 Site/Environment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Obstacle collision | Unfamiliar site, wind | Crash, cargo loss | 2 | 4 | 8-M | Site survey, flight planning, margins | 4-L |
| 3.2 | Power line strike | Unidentified lines | Crash, outage | 2 | 5 | 10-M | Site survey, route planning, standoff | 4-L |
| 3.3 | Wind at altitude | Heavy aircraft in wind | Control difficulty | 3 | 3 | 9-M | Wind limits, abort criteria | 4-L |
| 3.4 | Landing zone unsuitable | Soft/uneven ground | Damage, tip-over | 2 | 3 | 6-L | Landing zone assessment, alternate sites | 3-L |
| 3.5 | Remote location | Distance from support | Delayed response to issues | 2 | 3 | 6-L | Communication, planning, emergency kit | 3-L |

### 3.4 Energy Sector Specific

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Flammable atmosphere | Oil & gas operations | Ignition risk | 2 | 5 | 10-M | Hot work protocols, distance from sources | 4-L |
| 4.2 | Industrial equipment | Active operations | Collision, interference | 2 | 4 | 8-M | Coordination, exclusion zones | 4-L |
| 4.3 | EMI/interference | Industrial electronics | Control issues | 2 | 3 | 6-L | Pre-flight testing, monitoring | 3-L |

### 3.5 Mining Sector Specific

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Blasting operations | Active mining | Timing conflict | 2 | 5 | 10-M | Coordination, no-fly during blasting | 4-L |
| 5.2 | Dust/visibility | Mining operations | Visual loss | 2 | 3 | 6-L | Weather monitoring, timing | 3-L |
| 5.3 | Heavy equipment | Mine operations | Coordination failure | 2 | 4 | 8-M | Communication, designated areas | 4-L |

### 3.6 Urban/Infrastructure Specific

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 6.1 | Bystanders | Urban environment | Strike on uninvolved person | 2 | 5 | 10-M | Site control, Advanced cert, exclusion zones | 4-L |
| 6.2 | Buildings/structures | Urban obstacles | Collision | 3 | 4 | 12-M | Site survey, flight planning, altitude | 6-L |
| 6.3 | Multiple power lines | Dense infrastructure | Strike hazard | 3 | 4 | 12-M | Thorough site survey, route planning | 6-L |
| 6.4 | Traffic | Urban roads | Vehicle interference | 2 | 3 | 6-L | Site control, designated zones | 3-L |

---

## 4. Control Summary

### Pre-Flight

| Control | Requirement |
|:--------|:------------|
| Weight verification | Scale weighing of all cargo |
| CG check | Within aircraft limits |
| Loading procedure | Proper securing, inspection |
| Site assessment | Delivery zone confirmed suitable |
| Route planning | Obstacles identified, avoided |
| Weather | Within aircraft limits |

### During Operations

| Control | Requirement |
|:--------|:------------|
| Zone clearance | Confirmed before approach |
| Communication | Continuous with ground |
| Monitoring | Aircraft performance, battery |
| Abort criteria | Defined and followed |

### Sector-Specific

| Sector | Additional Controls |
|:-------|:--------------------|
| Energy | Hot work coordination, gas monitoring |
| Mining | Blast schedule, dust assessment |
| Urban | Enhanced site control, bystander management |

---

## 5. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear | Always |
| High-visibility | Near operations, industrial sites |
| Hard hat | Industrial sites |
| Hearing protection | Near aircraft operations |
| Gloves | Cargo handling |

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Medium RPAS endorsement | Before cargo delivery operations |
| Cargo aircraft type | Before operating specific aircraft |
| Sector-specific | Before operations in that sector |
| Loading and balance | Before conducting deliveries |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-019 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Avalanche Control Operations',
  'fha',
  'FHA-020',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Avalanche Control / Explosives Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-020 |
| **Version** | v5.0 |
| **Activity** | RPAS Avalanche Control with Explosives |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS-based avalanche control operations involving the delivery and deployment of explosives to trigger controlled avalanches for highway, ski resort, and backcountry applications.

---

## 2. Regulatory Context

- SFOC required (explosives delivery)
- Natural Resources Canada Explosives licence
- TDG authorization (Class 1 explosives)
- WorkSafeBC Blaster certification
- Canadian Avalanche Association standards

---

## 3. Hazard Analysis

### 3.1 Explosives Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Premature detonation | Mishandling, defect, static | Injury, death | 1 | 5 | 5-L | Qualified handlers, proper procedures, inspection | 3-L |
| 1.2 | Misfire | Defective explosive, delivery error | Unexploded ordnance | 3 | 4 | 12-M | Quality control, misfire procedures, accountability | 6-L |
| 1.3 | Unintended release | System failure, operator error | Explosive in wrong location | 2 | 5 | 10-M | System testing, procedural controls, training | 4-L |
| 1.4 | Blast injury | Personnel in blast zone | Injury, death | 1 | 5 | 5-L | Exclusion zones, zone clearance, communication | 3-L |
| 1.5 | Flying debris | Blast effects | Injury, property damage | 2 | 4 | 8-M | Safe distances, shelter, zone clearance | 4-L |

### 3.2 RPAS with Explosives Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Crash with explosives | Aircraft failure, pilot error | Unexploded ordnance, fire | 2 | 5 | 10-M | Maintenance, training, emergency procedures | 5-L |
| 2.2 | Lost link with explosives | Interference, range | Uncertain aircraft/explosive location | 2 | 4 | 8-M | Failsafe programming, range management | 4-L |
| 2.3 | Flyaway with explosives | System failure | Explosive in unknown location | 1 | 5 | 5-L | Pre-flight checks, failsafe, geofencing | 3-L |
| 2.4 | Targeting error | GPS error, operator error | Explosive in wrong start zone | 2 | 4 | 8-M | Visual verification, training, QC | 4-L |
| 2.5 | Fire on aircraft | Battery failure | Fire with explosive aboard | 1 | 5 | 5-L | Battery management, inspection | 3-L |

### 3.3 Avalanche Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Natural avalanche release | Operations trigger wider release | Larger than expected avalanche | 2 | 5 | 10-M | Avalanche technician assessment, exclusion zones | 5-L |
| 3.2 | Avalanche reaches work area | Miscalculation of runout | Personnel injury | 1 | 5 | 5-L | Safe positioning, avalanche technician, escape routes | 3-L |
| 3.3 | Secondary avalanche | Sympathetic release | Unexpected avalanche | 2 | 4 | 8-M | Assessment, extended exclusion, monitoring | 4-L |
| 3.4 | Avalanche on access route | Route exposure | Personnel trapped/injured | 2 | 5 | 10-M | Route assessment, timing, monitoring | 4-L |

### 3.4 Alpine Environment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Cold stress | Mountain conditions | Hypothermia, frostbite | 3 | 3 | 9-M | Clothing, shelter, time limits | 4-L |
| 4.2 | Weather deterioration | Mountain weather | Visibility loss, stranding | 3 | 4 | 12-M | Weather monitoring, abort criteria, escape plan | 6-L |
| 4.3 | Terrain hazards | Steep, snow-covered | Falls, injury | 3 | 4 | 12-M | Appropriate equipment, training, PPE | 6-L |
| 4.4 | Remote location | Mountain access | Delayed emergency response | 3 | 4 | 12-M | Communication, emergency plan, first aid | 6-L |
| 4.5 | Altitude effects | High elevation operations | Reduced performance, hypoxia | 2 | 3 | 6-L | Acclimatization, awareness | 3-L |
| 4.6 | Reduced battery performance | Cold temperatures | Shortened flight time | 3 | 3 | 9-M | Battery warming, conservative planning | 4-L |

### 3.5 Highway/Public Safety Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Vehicle in blast zone | Incomplete closure | Vehicle damage, injury | 1 | 5 | 5-L | Confirmed closures, traffic control | 3-L |
| 5.2 | Pedestrian in zone | Unauthorized access | Injury | 1 | 5 | 5-L | Closures, patrols, signage | 3-L |
| 5.3 | Debris on highway | Avalanche deposits | Traffic hazard | 3 | 3 | 9-M | Expected, controlled, clearance planned | 4-L |

### 3.6 Storage and Transport Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 6.1 | Explosives theft/loss | Security failure | Serious security incident | 1 | 5 | 5-L | Licensed storage, security, accountability | 3-L |
| 6.2 | Transport incident | Vehicle accident | Explosion, release | 1 | 5 | 5-L | TDG compliance, trained drivers | 3-L |
| 6.3 | Storage fire | Ignition source | Explosion | 1 | 5 | 5-L | Licensed magazine, no ignition sources | 3-L |

---

## 4. Control Summary

### Critical Controls

| Control | Purpose | Responsible |
|:--------|:--------|:------------|
| SFOC authorization | Regulatory compliance | Operations Manager |
| Blaster certification | Qualified explosives handling | PIC/Blaster |
| Zone clearance | Prevent personnel in blast zone | Avalanche Technician |
| Communication | Coordination of all parties | All |
| Misfire procedures | Safe handling of unexploded ordnance | Blaster |
| Explosives accountability | Track all explosives | Blaster |

### Before Operations

| Control | Verified |
|:--------|:---------|
| All authorizations current | ☐ |
| Personnel qualified | ☐ |
| Weather acceptable | ☐ |
| Avalanche conditions assessed | ☐ |
| Exclusion zones established | ☐ |
| Closures confirmed | ☐ |
| Communication confirmed | ☐ |
| Emergency plan in place | ☐ |
| Explosives inventory complete | ☐ |

---

## 5. Emergency Response

### Crash with Explosives

1. Mark location (do not approach)
2. Evacuate area (minimum 100m)
3. Notify blaster
4. Blaster assesses and directs
5. No approach until cleared

### Misfire

1. Mark GPS coordinates
2. Do not approach
3. Wait minimum time
4. Blaster investigates per procedures
5. Document fully

### Weather Deterioration

1. Complete current drop if safe
2. Return with any remaining ordnance
3. Secure explosives properly
4. Reassess for continuation

---

## 6. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Winter clothing | Always - mountain environment |
| Safety footwear | Always |
| Hearing protection | During detonations |
| Eye protection | During loading/detonations |
| Helmet | If overhead hazards |
| Avalanche safety gear | If in avalanche terrain |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| SFOC operations | Before avalanche control |
| Explosives handling | Before handling |
| TDG - Class 1 | Before transport |
| Avalanche awareness | Before mountain operations |
| Misfire procedures | Before operations |
| Cold weather operations | Before winter operations |
| Annual refresher | All personnel |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-020 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

