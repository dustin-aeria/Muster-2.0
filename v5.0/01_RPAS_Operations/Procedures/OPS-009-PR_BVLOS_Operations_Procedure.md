# AERIA SOLUTIONS LTD

# BVLOS OPERATIONS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-009-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | August 15, 2019 | Initial release — BVLOS operations established | Dustin Wales |
| v2.0 | February 18, 2020 | Annual review — updated SFOC procedures | Dustin Wales |
| v2.1 | February 22, 2021 | Annual review — added communication lost protocols | Dustin Wales |
| v2.2 | February 14, 2022 | Annual review — added DAA operational procedures | Dustin Wales |
| v2.3 | February 20, 2023 | Annual review — updated airspace coordination | Dustin Wales |
| v3.0 | February 5, 2024 | Annual review — expanded operational scenarios | Dustin Wales |
| v4.0 | November 4, 2025 | Major update for Level 1 Complex declaration | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Purpose

This procedure describes how to conduct Beyond Visual Line-of-Sight (BVLOS) operations under Aeria Solutions' L1C Declaration.

---

## 2. Scope

This procedure applies to:
- All BVLOS flight operations
- PICs authorized for BVLOS
- Aircraft approved for BVLOS

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-005 | BVLOS Operations Policy |
| L1C Declaration | Authorized conditions |
| GUIDE-BVLOS | BVLOS Operations Guide |

---

## 4. Procedure

### 4.1 BVLOS Pre-Planning

#### Verify Authorization
- [ ] Valid L1C Declaration
- [ ] PIC authorized for BVLOS
- [ ] Aircraft listed on declaration
- [ ] Operation within declaration parameters

#### Site Requirements
Site must be:
- Unpopulated (no people in flight area)
- Class G uncontrolled airspace
- Surveyed and assessed
- Within communication range
- Have identified emergency landing zones

If any requirement not met, operation requires SFOC or is not permitted.

### 4.2 Site Survey (BVLOS)

For BVLOS sites, survey must include:

| Element | Assessment |
|:--------|:-----------|
| **Populated areas** | None in flight path |
| **Airspace** | Class G only; no controlled airspace |
| **Obstacles** | All obstacles to max altitude identified |
| **Emergency landing** | Zones identified for forced landing |
| **Communication** | C2 link tested; coverage confirmed |
| **Access** | Site access documented |
| **Ground hazards** | For ground recovery if needed |

Complete FRM-SITESURVEY with BVLOS sections.

### 4.3 Flight Planning (BVLOS)

#### Route Planning
- Define flight path
- Identify waypoints
- Plan altitude profile
- Ensure path avoids obstacles with margin
- Calculate flight time
- Verify battery capacity for entire mission + reserve

#### Lost Link Planning
Program lost link behavior:
1. Loiter duration
2. RTH altitude and path
3. Landing location if RTH fails
4. Verify programming before flight

#### Emergency Landing Zones
Identify along route:
- Primary landing zones (flat, clear)
- Secondary options
- Mark in planning materials

### 4.4 BVLOS Pre-Flight

In addition to standard pre-flight:

| Check | Verification |
|:------|:-------------|
| **C2 Link** | Range test in direction of flight |
| **Lost link behavior** | Confirmed programmed correctly |
| **RTH settings** | Home point accurate; altitude set |
| **Telemetry** | All parameters displaying correctly |
| **Flight path** | Uploaded and verified |
| **Airspace** | Reconfirm Class G, no conflicts |
| **Area check** | Confirm unpopulated |

### 4.5 BVLOS Crew Briefing

Brief covers:
- BVLOS-specific procedures
- Flight plan and route
- Transition point (VLOS to BVLOS)
- Communication plan
- Lost link procedures
- Emergency procedures
- Monitoring responsibilities

### 4.6 Transition to BVLOS

When transitioning from VLOS to BVLOS:
1. Verify aircraft systems normal
2. Confirm position via telemetry
3. Confirm C2 link strong
4. Confirm flight path programmed
5. Announce "Transitioning to BVLOS"
6. Shift primary reference to telemetry

### 4.7 BVLOS Flight Conduct

During BVLOS phase:

**Monitor continuously:**
- Aircraft position on map
- Altitude
- Speed
- Battery level
- C2 link strength
- GPS status

**Take action if:**
| Condition | Action |
|:----------|:-------|
| Position deviates from plan | Correct or investigate |
| Altitude unexpected | Correct or investigate |
| Battery low | Initiate RTH |
| C2 link weakening | Be prepared for lost link |
| GPS issues | Monitor closely; may need RTH |
| Any anomaly | Consider immediate RTH |

### 4.8 Lost Link Procedures

If C2 link lost during BVLOS:

1. **Monitor telemetry** (may still have telemetry without control)
2. **Wait for programmed behavior** (loiter, then RTH typically)
3. **Attempt link recovery** (reposition, check equipment)
4. **Track aircraft via telemetry**
5. **Prepare for landing/recovery**

If telemetry also lost:
- Follow last known trajectory
- Move to recovery position
- Prepare for search if necessary
- Report as occurrence

### 4.9 Return to Visual

When aircraft returning to visual range:
1. Watch for aircraft approaching
2. Acquire visual contact
3. Announce "Visual contact" when acquired
4. Verify via telemetry position matches visual
5. Continue approach and landing

### 4.10 BVLOS Post-Flight

In addition to standard post-flight:
- Review flight data/logs
- Verify no anomalies during BVLOS phase
- Document any issues
- Report any occurrences
- Debrief BVLOS-specific observations

### 4.11 Documentation

For each BVLOS flight, document:
- Flight log (noting BVLOS)
- BVLOS flight plan
- Pre-flight BVLOS checklist
- Any lost link events
- Any anomalies

---

## 5. Limitations Summary

| Parameter | L1C Limit |
|:----------|:----------|
| Area | Unpopulated only |
| Airspace | Class G only |
| Altitude | Per declaration |
| Range | C2 link capability |
| Aircraft | Listed aircraft only |
| Pilots | BVLOS-authorized only |

**If any limit would be exceeded, operation requires SFOC.**

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Verify declaration compliance; authorize PICs |
| **PIC** | Safe conduct; continuous monitoring; compliance |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-005 | BVLOS Operations Policy |
| OPS-011-PR | Emergency Procedures (RPAS) |
| GUIDE-BVLOS | BVLOS Operations Guide |
| FRM-SITESURVEY | Site Survey Form |
| L1C Declaration | Current declaration |

---

**Document Control:** OPS-009-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
