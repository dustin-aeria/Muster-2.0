# AERIA SOLUTIONS LTD

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

## Amendment History

| Version | Date | Changes | Approved By |
|:--------|:-----|:--------|:------------|
| v1.0 | July 18, 2018 | Initial release — power line proximity capability established | Dustin Wales |
| v2.0 | February 10, 2020 | Annual review — updated limits of approach | Dustin Wales |
| v3.0 | February 15, 2022 | Annual review — added line inspection procedures | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — expanded EMI hazard controls | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

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
