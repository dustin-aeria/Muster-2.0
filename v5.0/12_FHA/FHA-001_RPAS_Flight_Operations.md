# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## RPAS Flight Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-001 |
| **Version** | v5.0 |
| **Activity** | RPAS Flight Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers general RPAS flight operations including pre-flight, flight, and post-flight activities for multirotor and fixed-wing aircraft.

---

## 2. Risk Matrix

**Likelihood:**
| Rating | Description |
|:-------|:------------|
| 5 | Almost Certain |
| 4 | Likely |
| 3 | Possible |
| 2 | Unlikely |
| 1 | Rare |

**Severity:**
| Rating | Description |
|:-------|:------------|
| 5 | Catastrophic (fatality, permanent disability) |
| 4 | Major (serious injury, significant damage) |
| 3 | Moderate (medical treatment, moderate damage) |
| 2 | Minor (first aid, minor damage) |
| 1 | Negligible (no injury, minimal damage) |

**Risk Score = Likelihood × Severity**
| Risk Score | Rating | Action |
|:-----------|:-------|:-------|
| 15-25 | HIGH | Stop; implement additional controls |
| 8-14 | MEDIUM | Proceed with controls; monitor |
| 1-7 | LOW | Proceed with awareness |

---

## 3. Hazard Analysis

### 3.1 Pre-Flight Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Inadequate site assessment | Rushed planning, inexperience | Obstacle collision, airspace violation | 3 | 4 | 12-M | Site survey procedure, checklists, training | 6-L |
| 1.2 | Unidentified airspace restrictions | Failure to check, outdated info | Airspace violation, manned aircraft conflict | 2 | 5 | 10-M | Pre-flight airspace check, NAV Drone app, NOTAMs | 5-L |
| 1.3 | Equipment defect undetected | Inadequate inspection | In-flight failure, crash | 2 | 4 | 8-M | Pre-flight checklist, inspection procedure | 4-L |
| 1.4 | Battery issues | Poor storage, damage, age | Fire, in-flight failure | 2 | 4 | 8-M | Battery inspection, logging, temperature checks | 4-L |
| 1.5 | Weather not suitable | Inadequate assessment | Loss of control, unsafe conditions | 3 | 3 | 9-M | Weather check procedure, defined limits | 4-L |

### 3.2 In-Flight Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Loss of control | Pilot error, equipment failure | Crash, injury, damage | 2 | 4 | 8-M | Training, competency checks, emergency procedures | 4-L |
| 2.2 | Mid-air collision with manned aircraft | Poor airspace awareness, no DAA | Catastrophic | 1 | 5 | 5-L | Airspace procedures, visual scanning, DAA, altitude limits | 3-L |
| 2.3 | Collision with obstacle | Poor planning, loss of orientation | Damage, injury | 3 | 3 | 9-M | Site survey, obstacle identification, altitude awareness | 6-L |
| 2.4 | Lost link | Interference, range exceeded | Aircraft behavior uncertain | 3 | 3 | 9-M | Failsafe settings, range awareness, RTH programmed | 4-L |
| 2.5 | Flyaway | System failure, GPS issues | Property damage, injury, loss | 2 | 4 | 8-M | Pre-flight compass cal, GPS checks, failsafe RTH | 4-L |
| 2.6 | Battery depletion | Poor monitoring, cold weather | Forced landing, crash | 2 | 3 | 6-L | Battery monitoring, conservative limits, warnings | 3-L |
| 2.7 | Weather deterioration | Inadequate monitoring | Loss of control, unsafe conditions | 2 | 3 | 6-L | Weather monitoring, conservative limits, abort criteria | 3-L |
| 2.8 | Loss of visual contact | Range, obstructions, glare | Loss of situational awareness | 3 | 3 | 9-M | VLOS procedures, VO, RTH if lost | 4-L |
| 2.9 | Strike on person | Unexpected person in area | Injury | 2 | 4 | 8-M | Site control, standoff distances, spotter | 4-L |

### 3.3 Post-Flight Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Hot components | Recent flight | Burns | 3 | 2 | 6-L | Cool-down period, awareness | 3-L |
| 3.2 | Battery mishandling | Damaged battery, improper storage | Fire, explosion | 2 | 4 | 8-M | Inspection, proper storage, LiPo bags | 4-L |
| 3.3 | Spinning propellers | Accidental arm | Cuts | 2 | 2 | 4-L | Motor disarm procedure, prop guards | 2-L |

### 3.4 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Heat stress | High temperature operations | Heat illness | 3 | 3 | 9-M | Heat stress policy, hydration, breaks | 4-L |
| 4.2 | Cold stress | Cold temperature operations | Cold injury, reduced battery performance | 3 | 3 | 9-M | Cold stress policy, layering, battery warming | 4-L |
| 4.3 | UV exposure | Outdoor work | Sunburn, eye damage | 3 | 2 | 6-L | Sunscreen, sunglasses, shade | 3-L |
| 4.4 | Wildlife | Bears, cougars, etc. | Attack, injury | 2 | 4 | 8-M | Wildlife awareness, bear spray, working in pairs | 4-L |
| 4.5 | Terrain hazards | Slopes, unstable ground | Slips, falls | 3 | 3 | 9-M | Site assessment, footwear, caution | 4-L |

---

## 4. Control Summary

### Critical Controls

| Control | Purpose | Responsible |
|:--------|:--------|:------------|
| Pre-flight inspection | Detect defects before flight | PIC |
| Site survey | Identify hazards and obstacles | PIC/Survey lead |
| Airspace verification | Ensure legal operation | PIC |
| Weather assessment | Confirm conditions acceptable | PIC |
| Competency verification | Ensure qualified personnel | Operations Manager |
| Emergency procedures | Prepared response to events | PIC |
| Failsafe programming | Automated safety response | PIC |

### PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear | Always in field |
| High-visibility vest | Near traffic, industrial sites |
| Safety glasses | Prop operations, dusty conditions |
| Hard hat | Industrial sites |
| Sun protection | Outdoor operations |
| Weather-appropriate clothing | Always |

---

## 5. Training Requirements

| Training | Personnel | Frequency |
|:---------|:----------|:----------|
| Initial pilot training | PICs | Before authorization |
| Recurrent training | PICs | Annual |
| Emergency procedures | All crew | Annual |
| FLHA process | All crew | Initial + refresher |
| Wildlife awareness | Field personnel | Annual |

---

## 6. Monitoring and Review

| Activity | Frequency |
|:---------|:----------|
| Incident/occurrence review | Per occurrence |
| Near miss analysis | Ongoing |
| FHA review | Annual |
| Control effectiveness audit | Annual |

---

## 7. Revision History

| Version | Date | Changes | Approved By |
|:--------|:-----|:--------|:------------|
| v5.0 | March 11, 2026 | Complete rebuild | Dustin Wales |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-001 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
