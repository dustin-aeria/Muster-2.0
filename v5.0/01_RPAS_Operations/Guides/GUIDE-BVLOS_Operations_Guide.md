# AERIA SOLUTIONS LTD

# BVLOS OPERATIONS GUIDE

---

| Field | Value |
|:------|:------|
| **Document Number** | GUIDE-BVLOS |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Introduction

This guide provides comprehensive information for pilots authorized to conduct Beyond Visual Line-of-Sight (BVLOS) operations under Aeria Solutions' Level 1 Complex (L1C) Declaration.

**This guide supplements but does not replace:**
- OPS-005 BVLOS Operations Policy
- OPS-009-PR BVLOS Operations Procedure
- L1C Declaration conditions

---

## 2. BVLOS Regulatory Framework

### 2.1 Canadian Regulations

BVLOS operations in Canada are governed by:
- CARs Part IX (RPAS)
- CAR 901.67-901.76 (BVLOS specific)
- Standard 922.67

### 2.2 Authorization Pathways

| Pathway | Description | Use |
|:--------|:------------|:----|
| **L1C Declaration** | Pre-authorized low-risk BVLOS | Unpopulated areas, Class G |
| **SFOC** | Site/operation-specific permit | Beyond L1C parameters |

Aeria operates BVLOS under L1C Declaration.

### 2.3 L1C Conditions Summary

| Parameter | L1C Typical Conditions |
|:----------|:-----------------------|
| Location | Unpopulated areas only |
| Airspace | Class G uncontrolled |
| Altitude | 400 ft AGL (unless otherwise specified) |
| Aircraft | Listed in declaration |
| Pilot | Advanced certificate + BVLOS authorization |
| Weather | VMC conditions |
| Detect and Avoid | Ground-based detection or see-and-avoid procedures |

**Always verify current declaration conditions before operation.**

---

## 3. Risk Assessment Framework

### 3.1 SORA Methodology

The Specific Operations Risk Assessment (SORA) framework underpins L1C:

**Ground Risk:**
- Population density
- Mitigation measures (containment, parachute)
- Results in Ground Risk Class (GRC)

**Air Risk:**
- Airspace class
- Traffic density
- Mitigation measures
- Results in Air Risk Class (ARC)

**Specific Assurance and Integrity Levels (SAIL):**
Determined by combination of GRC and ARC.

### 3.2 L1C Risk Profile

L1C operations have been pre-assessed as:
- Low ground risk (unpopulated)
- Low air risk (uncontrolled airspace)
- Resulting in low SAIL requirements

**This does not eliminate risk—it establishes that risk is manageable with standard mitigations.**

---

## 4. BVLOS Planning

### 4.1 Mission Planning Checklist

| Element | Verification |
|:--------|:-------------|
| **Authorization** | L1C valid; PIC authorized; aircraft listed |
| **Site** | Surveyed; unpopulated confirmed; Class G |
| **Weather** | Forecast acceptable; VMC expected |
| **Aircraft** | Serviceable; batteries adequate; C2 tested |
| **Flight path** | Planned; waypoints set; obstacles cleared |
| **Lost link** | Programmed correctly |
| **Emergencies** | Landing zones identified; procedures reviewed |
| **Crew** | Briefed; positions assigned |
| **Communication** | Tested; contingencies planned |

### 4.2 Flight Path Planning

**Considerations:**
- Avoid obstacles with margin (50m horizontal, 30m vertical recommended)
- Plan for wind effects on path
- Consider battery usage for entire mission
- Include contingency for RTH from any point
- Identify checkpoints for progress monitoring

**Tools:**
- Mission planning software
- Terrain analysis
- Wind pattern analysis
- Battery flight time calculators

### 4.3 Battery Planning

| Segment | Battery Allocation |
|:--------|:-------------------|
| Outbound | Calculated from flight plan |
| Mission | Based on mission duration |
| Return | Equal to outbound + margin |
| Reserve | Minimum 20% |

**Rule:** Never plan mission that would require >80% of battery capacity.

---

## 5. Lost Link Management

### 5.1 Lost Link Behavior Programming

Before BVLOS flight, program:

| Parameter | Typical Setting |
|:----------|:----------------|
| **Lost link action** | RTH after loiter |
| **Loiter duration** | 30-60 seconds |
| **RTH altitude** | Above all obstacles + margin |
| **Landing behavior** | Land at home point or designated location |

### 5.2 Lost Link Sequence

**Typical programmed sequence:**
1. Link lost detected
2. Aircraft holds position (loiter)
3. Attempts reconnection during loiter
4. If not reconnected after loiter time, initiates RTH
5. Returns to home point at programmed altitude
6. Lands at home point

### 5.3 Lost Link Response (Pilot)

1. Remain calm—aircraft is following programming
2. Monitor telemetry if available
3. Attempt link recovery:
   - Adjust antenna orientation
   - Reduce distance to aircraft (if able)
   - Check for interference
4. Prepare for aircraft return
5. Clear landing area
6. Acquire visual when in range

---

## 6. Telemetry Monitoring

### 6.1 Critical Parameters

| Parameter | Normal | Warning | Action |
|:----------|:-------|:--------|:-------|
| **Position** | On planned track | Deviation >20m | Correct or investigate |
| **Altitude** | Per plan | Unexpected change | Correct or RTH |
| **Battery** | >30% | <30% | Initiate return |
| **C2 link** | Strong | Degrading | Be prepared for lost link |
| **GPS** | 10+ satellites | <8 satellites | Monitor closely |
| **Speed** | Per plan | Unexpected | Investigate |

### 6.2 Monitoring Technique

During BVLOS:
- Focus on telemetry display
- Check position every 5-10 seconds
- Verbally call out checkpoints
- Monitor for any anomalies
- Maintain situational awareness of overall mission

### 6.3 When to Abort

**Initiate RTH if:**
- Any critical system warning
- Position deviates unexpectedly
- Unable to verify aircraft status
- Weather deteriorating
- C2 link becoming unreliable
- Any doubt about safe completion

---

## 7. Emergency Response (BVLOS-Specific)

### 7.1 Lost Link During BVLOS

See Section 5.3 above.

### 7.2 Flyaway During BVLOS

**If aircraft not responding and moving away:**
1. Try RTH command repeatedly
2. Track position via telemetry
3. If leaving declaration area, prepare notifications
4. If entering controlled airspace, contact ATC immediately
5. Document last known position
6. Prepare for search and recovery

### 7.3 Forced Landing During BVLOS

**If aircraft forced to land away from home:**
1. Note position from telemetry
2. Mark coordinates
3. Monitor until landing confirmed
4. Plan recovery route
5. Recover aircraft
6. Assess damage
7. Report per SMS

---

## 8. Documentation Requirements

### 8.1 Pre-Flight

- Site survey (BVLOS sections complete)
- Flight plan with waypoints
- Lost link programming confirmation
- C2 link test results
- BVLOS pre-flight checklist

### 8.2 Post-Flight

- Flight log (noting BVLOS)
- Any anomalies or lost link events
- Flight data download
- Mission success/completion notes

---

## 9. Competency Maintenance

### 9.1 Currency

BVLOS pilots must maintain:
- 1 BVLOS flight every 90 days
- If currency lapses, checkout flight required

### 9.2 Skill Refresher

**Regular practice of:**
- Lost link simulation
- Emergency procedures
- Telemetry interpretation
- Flight planning with BVLOS parameters

---

## 10. Key References

| Document | Content |
|:---------|:--------|
| L1C Declaration | Authorization conditions |
| OPS-005 | BVLOS Operations Policy |
| OPS-009-PR | BVLOS Operations Procedure |
| OPS-011-PR | Emergency Procedures (RPAS) |
| FRM-SITESURVEY | Site Survey Form |

---

**Document Control:** GUIDE-BVLOS v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
