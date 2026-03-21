# AERIA SOLUTIONS LTD

# RPAS EMERGENCY PROCEDURES MANUAL

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-011-PR |
| **Version** | v5.1 |
| **Effective Date** | March 19, 2026 |
| **Review Date** | March 19, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release | Dustin Wales |
| v1.1 | April 20, 2017 | Added fly-away response | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — expanded emergency types | Dustin Wales |
| v2.1 | August 10, 2019 | Added BVLOS emergencies | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — added Air Traffic Conflict Scheme | Dustin Wales |
| v3.1 | January 28, 2022 | Added DESCEND Protocol | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — restructured response protocols | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for Level 1 Complex emergency requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |
| v5.1 | March 19, 2026 | Consolidated with OPS-018-PR (Advanced Emergency Protocols) | Dustin Wales |

---

## 1. Purpose

This procedure is the **master emergency reference** for all RPAS-specific emergencies during flight operations. It consolidates all emergency protocols including the Air Traffic Conflict Scheme, DESCEND Protocol, and specialized emergency procedures.

---

## 2. Scope

This procedure applies to:
- All RPAS flight operations
- All PICs, VOs, and crew members
- All aircraft types
- VLOS and BVLOS operations

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-001 | RPAS Flight Operations Policy |
| HSE-005-PR | Emergency Response Procedure (site emergencies) |
| HSE-007 | Emergency Response Policy |
| SMS-005 | Occurrence Reporting Policy |
| QRC-EMERGENCY-FULL | Complete Emergency Quick Reference Card |

---

## 4. Emergency Priority Order

For **any** emergency, priorities are:

| Priority | Focus |
|:---------|:------|
| **1** | **SAFETY OF PEOPLE** - Ground personnel, bystanders, public |
| **2** | **AIRCRAFT RECOVERY** - If possible and safe to do so |
| **3** | **PROPERTY PROTECTION** - Minimize damage to third-party property |
| **4** | **EVIDENCE PRESERVATION** - For investigation purposes |

### 4.1 General Emergency Steps

1. **Announce** emergency to crew
2. **Clear** danger area
3. **Attempt** recovery if safe
4. **Document** what happened
5. **Report** per SMS requirements

---

## 5. Air Traffic Conflict Scheme

### 5.1 Conflict Classification

All potential conflicts with manned aircraft are classified into five levels:

| Level | Scenario | Threat Level | Visual Indicator |
|:------|:---------|:-------------|:-----------------|
| 1 | Planned Aircraft Approach | KNOWN | Blue |
| 2 | Entered Airspace - Announced | LOW | Green |
| 3 | Unannounced - Non-Threat | MONITOR | Yellow |
| 4 | Unannounced - Potential Conflict | HIGH | Orange |
| 5 | Unannounced - Critical Threat | CRITICAL | Red |

### 5.2 De-Conflict Matrix

| Level | Scenario | Required Action |
|:------|:---------|:----------------|
| **Level 1** | Planned Aircraft | RPAS is **GROUNDED** until aircraft clears |
| **Level 2** | Announced Aircraft | Restrict RPAS to **below 400' AGL**, maintain **≥1 km horizontal** from aircraft path |
| **Level 3** | Non-Threat | **CONTINUE** operation, maintain awareness in case threat level changes |
| **Level 4** | Potential Conflict | **RETURN TO HOME** or **HOVER AND HOLD** until conflict resolved |
| **Level 5** | Critical Threat | **IMMEDIATE DESCENT** - Execute DESCEND Protocol |

### 5.3 Conflict Response Flowchart

```
Aircraft Detected
       |
   Was it planned?
    /         \
  YES          NO
   |            |
GROUNDED    Announced?
              /      \
            YES       NO
             |         |
         Level 2    Trajectory?
         (restrict)   /     \
                   AWAY    TOWARD
                    |         |
                 Level 3   Distance?
                 (monitor)  /      \
                        FAR     CLOSE
                         |         |
                     Level 4   Level 5
                     (RTH)    (DESCEND!)
```

---

## 6. DESCEND Protocol

### 6.1 Overview

The DESCEND Protocol is the **emergency procedure for critical air traffic threats (Level 5)**. It requires immediate action to avoid collision with manned aircraft.

**CRITICAL:** This is NOT a crash maneuver. Descend to a safe altitude, not into terrain.

### 6.2 Execution Without Visual Observer (Solo PIC)

| Step | Action |
|:-----|:-------|
| 1 | Identify critical threat |
| 2 | Take immediate manual control |
| 3 | **Loudly announce: "DESCEND, DESCEND, DESCEND"** |
| 4 | Execute straight downward descent to safe altitude |
| 5 | Maintain awareness of ground obstacles |
| 6 | Hold position until threat passes |

### 6.3 Execution With Visual Observer

| Step | Actor | Action |
|:-----|:------|:-------|
| 1 | VO | Identifies critical threat |
| 2 | VO | **"CRITICAL THREAT, DESCEND, DESCEND, DESCEND"** |
| 3 | PIC | Takes immediate manual control |
| 4 | PIC | **"DESCEND, DESCEND, DESCEND"** (while descending) |
| 5 | PIC | Execute straight downward descent to safe altitude |
| 6 | VO | Monitors threat, calls **"Clear"** when safe |

### 6.4 Critical Guidelines

| Guideline | Details |
|:----------|:--------|
| **Purpose** | Bring RPAS to safe altitude to avoid collision |
| **NOT a crash maneuver** | Descend to safe altitude, not into terrain |
| **Alternative** | If descent unsafe, maneuver downward AND away from aircraft path |
| **Speed** | Execute immediately - seconds matter |

### 6.5 Post-DESCEND Actions

1. Hold position until threat has passed
2. VO confirms "Airspace clear"
3. Assess RPAS status
4. Resume operation or land for assessment
5. Log incident per SMS requirements

---

## 7. Lost Link / Communication Failure

### 7.1 Types of Communication Failure

| Type | Description |
|:-----|:------------|
| **Telemetry Loss** | No data from RPAS but may still have control |
| **Command Loss** | Cannot send commands, may still receive data |
| **Complete Link Loss** | No communication in either direction |

### 7.2 Signs

- No control response
- Link lost indicator on controller/GCS
- Telemetry stops updating

### 7.3 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | **Announce:** "Lost link" |
| 2 | **DO NOT PANIC** - Aircraft will follow programmed failsafe behavior |
| 3 | Monitor telemetry (may still work one-way) |
| 4 | Attempt recovery: |
|   | - Reposition controller |
|   | - Check antenna orientation |
|   | - Power cycle controller (last resort) |
| 5 | Watch for aircraft - It will RTH or land per programming |
| 6 | Clear expected landing area |
| 7 | If control regained: reduce altitude, return to landing site |
| 8 | If control not regained: track aircraft, prepare for automatic landing/RTH |

### 7.4 If Link Not Recovered

- Track aircraft position via telemetry
- Move to intercept/recovery position
- Prepare for manual recovery

### 7.5 After Recovery

- Inspect aircraft thoroughly
- Check flight logs
- Report per SMS requirements

---

## 8. Flyaway Emergency

### 8.1 Definition

A **flyaway** occurs when the RPAS unexpectedly flies beyond operator control due to:
- Loss of communication
- GPS failure
- Software/hardware malfunction

### 8.2 Signs

- Aircraft not responding to commands
- Aircraft moving away uncontrolled
- Cannot regain control through any input

### 8.3 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | **Announce:** "FLYAWAY" |
| 2 | Attempt all available control recovery methods |
| 3 | Toggle communication channels/frequencies |
| 4 | **Try RTH command** - Even if other controls failed |
| 5 | Activate failsafe (power off controller if needed) |
| 6 | Track last known position via telemetry |
| 7 | **If entering controlled airspace:** Contact authorities immediately |

### 8.4 Fly-Away Emergency Call Script

**Use this script when contacting ATC or emergency services:**

---

**INTRODUCTION:**
> "Hello, my name is **[YOUR NAME]**. I am an RPAS operator, and I am currently experiencing a fly-away situation."

**RPAS DESCRIPTION:**
> "The RPAS is **[COLOR]**, **[MAKE]** brand, model **[MODEL]**, weighing **[WEIGHT]** grams."

**PIC LOCATION:**
> "My current location is **[DISTANCE]** nautical miles from **[NEAREST AERODROME/LANDMARK]**, bearing **[BEARING/DIRECTION]**."

**RPAS HEADING:**
> "The RPAS is flying at **[ALTITUDE]** feet above sea level, heading **[HEADING]** at approximately **[SPEED]** knots."

**RPAS POTENTIAL:**
> "The RPAS has a maximum flight time of **[MAX FLIGHT TIME]** minutes, with an estimated remaining battery of **[BATTERY]** percent."

**MAXIMUM TRAVEL:**
> "I estimate its maximum remaining travel distance is **[DISTANCE]** nautical miles."

---

### 8.5 Recovery Procedure

1. Track to last known position
2. Search systematically for aircraft
3. If unrecoverable, document last known position with GPS coordinates
4. Report per SMS requirements

### 8.6 Mandatory Reporting

**Report to Transport Canada if:**
- Aircraft entered controlled airspace
- Caused hazard to other aircraft
- Injured person or damaged property

---

## 9. Crash / Uncontrolled Landing

### 9.1 Signs

- Aircraft impacts ground or object
- Unplanned/hard landing

### 9.2 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | **Announce:** "Aircraft down" |
| 2 | **Ensure area safe** - Keep people away |
| 3 | Disarm aircraft if accessible and safe |
| 4 | **CHECK FOR BATTERY DAMAGE** (fire risk) |
| 5 | Remove battery carefully if safe |
| 6 | Assess and document damage with photos |

### 9.3 If Fire Risk Present

- Do NOT approach immediately
- Monitor for smoke/heat
- Have fire suppression ready
- See Section 10 (Battery Fire)

### 9.4 Documentation Required

- Photos of aircraft and impact area
- GPS coordinates
- Description of events leading to crash
- Environmental conditions

**Report per SMS-005.**

---

## 10. Battery Fire

### 10.1 Signs

- Smoke from battery
- Unusual chemical smell
- Swelling battery
- Visible flames

### 10.2 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | **Announce:** "Battery fire" |
| 2 | **EVACUATE** immediate area (toxic fumes) |
| 3 | **DO NOT USE WATER** on LiPo fires |
| 4 | Use **ABC dry chemical fire extinguisher** or **sand** |
| 5 | If aircraft is in air with fire risk, land immediately in safe area |
| 6 | **Monitor for re-ignition** - LiPo fires can reignite |

### 10.3 After Fire Controlled

- Do NOT touch battery
- Allow to cool completely (minimum 30 minutes monitoring)
- Monitor for re-ignition
- Dispose per hazardous waste procedure

**Seek medical attention if fumes inhaled.**

---

## 11. Mid-Air Emergency (Other Aircraft)

### 11.1 If Other Aircraft Approaches

| Step | Action |
|:-----|:-------|
| 1 | VO calls: **"Traffic, [direction]!"** |
| 2 | **Descend immediately** |
| 3 | Move away from traffic path |
| 4 | Land if necessary |
| 5 | **All manned aircraft have priority** |

### 11.2 If Near-Miss Occurs

1. Land aircraft immediately
2. Document details:
   - Time of occurrence
   - Aircraft type (if identifiable)
   - Approximate distance/separation
   - Altitudes of both aircraft
   - Direction of travel
3. Report per SMS-005
4. Report to Transport Canada per CARs 901.50

---

## 12. GPS Failure

### 12.1 Signs

- GPS lost indicator
- Position not updating
- Aircraft drifting unexpectedly

### 12.2 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | Switch to **ATTI mode** (attitude-only) |
| 2 | Maintain visual on aircraft |
| 3 | Manually control orientation and position |
| 4 | **Land as soon as practical** |
| 5 | **DO NOT enter BVLOS** without GPS |

---

## 13. Motor/ESC Failure

### 13.1 Signs

- Aircraft yawing unexpectedly
- Motor warning on controller/GCS
- Unusual sound from aircraft

### 13.2 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | **LAND IMMEDIATELY** |
| 2 | Note: Some multirotors can fly with one motor out; others cannot |
| 3 | Prioritize safe landing area |
| 4 | Accept rougher landing if needed for safety |

---

## 14. Flight Termination Protocol

### 14.1 When to Terminate Flight

Flight termination is the **deliberate ending of flight** when:
- RPAS poses safety risk that cannot be mitigated
- Risk of entering restricted/prohibited airspace
- Risk of endangering people, animals, or property
- All other recovery options exhausted

### 14.2 Flight Termination Procedure

| Step | Action |
|:-----|:-------|
| 1 | Attempt to pilot RPAS to safe area (away from people, infrastructure) |
| 2 | **Notify crew:** "Flight termination" |
| 3 | Reduce altitude to lowest safe AGL |
| 4 | Reduce speed to minimum |
| 5 | **Initiate shutdown procedure** specific to RPAS model |
| 6 | Bring fire extinguisher to expected landing location |
| 7 | Prepare for retrieval |

### 14.3 Post-Termination

1. Approach cautiously (battery may be damaged)
2. Have fire extinguisher ready
3. Monitor for smoke/heat
4. Remove battery only if safe
5. Document thoroughly
6. Report per SMS requirements

---

## 15. Unintentional Loss of Visual Contact

### 15.1 Definition

Loss of visual occurs when operator/VO unexpectedly loses sight of RPAS due to:
- Environmental factors (fog, sun glare, clouds)
- Terrain obstructions
- Distance exceeding visual range

### 15.2 Response Procedure

| Step | Actor | Action |
|:-----|:------|:-------|
| 1 | VO | **"LOST VISUAL"** - Immediately notify PIC |
| 2 | PIC | Use telemetry to determine position |
| 3 | PIC | If safe, **increase altitude** to clear obstructions |
| 4 | VO | Continue searching in direction of last visual |
| 5 | PIC | If cannot regain visual, initiate **RTH** |
| 6 | Both | Continue searching until visual contact regained |
| 7 | PIC | If RTH initiated, monitor telemetry until aircraft in sight |

### 15.3 BVLOS Note

If operating BVLOS, loss of visual is expected. Ensure:
- Telemetry is reliable
- DAA (Detect and Avoid) systems are active
- Procedures allow for non-visual operation

---

## 16. Return to Home (RTH) Issues

### 16.1 If RTH Leads to Wrong Location

1. **Cancel RTH** if possible
2. Take manual control
3. Fly to correct landing location
4. Check home point setting after landing

### 16.2 If RTH Altitude is Wrong

1. Monitor for obstacle collision risk
2. Adjust altitude manually if possible
3. Be prepared to intervene

---

## 17. Controlled Flight into Terrain/Object

### 17.1 Signs

- Aircraft contacted object (tree, building, wire, terrain)
- Aircraft damage from strike

### 17.2 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | Land immediately (if still controllable) |
| 2 | If lost control, track for crash location |
| 3 | Document impact location |
| 4 | Assess for damage to property |
| 5 | Report to property owner if applicable |
| 6 | Report per SMS-005 |

---

## 18. Post-Emergency Procedures

After **any** emergency:

| Step | Action |
|:-----|:-------|
| 1 | Ensure all personnel are safe |
| 2 | Secure aircraft if possible |
| 3 | **DO NOT** modify or delete any data |
| 4 | Document thoroughly (notes, photos, video) |
| 5 | Preserve all evidence |
| 6 | Report to Operations Manager **immediately** |
| 7 | Complete occurrence report per SMS-005 |
| 8 | Cooperate with any investigation |

---

## 19. Emergency Reporting Requirements

| Occurrence | Report To | Timeframe |
|:-----------|:----------|:----------|
| Minor emergency (no injury/damage) | Operations Manager | Same day |
| Aircraft damage | Operations Manager | Immediately |
| Property damage | Operations Manager + Property Owner | Immediately |
| Injury | 911 + Operations Manager | Immediately |
| Controlled airspace entry | NAV CANADA/ATC | Immediately |
| TSB Reportable (>25kg or injury) | TSB | Immediately |
| Reportable occurrence | Transport Canada | Per CARs |

---

## 20. Emergency Contact Directory

| Emergency | Primary Contact | Secondary |
|:----------|:----------------|:----------|
| **Life-threatening** | **911** | - |
| Aircraft conflict | ATC (relevant frequency) | NAV CANADA 1-866-WXBRIEF |
| Fly-away (controlled airspace) | ATC | NAV CANADA |
| NAV CANADA | 1-866-WXBRIEF (1-866-992-7433) | - |
| TSB Reportable | TSB 1-800-387-3557 | - |
| Transport Canada | TC RPAS Centre | rpas-uas@tc.gc.ca |
| Poison Control | 1-800-567-8911 | - |
| WorkSafeBC | 1-888-621-7233 | - |
| Internal | Operations Manager | Accountable Executive |

---

## 21. Quick Reference Summary

| Emergency | Key Actions |
|:----------|:------------|
| **Traffic Conflict (Critical)** | DESCEND, DESCEND, DESCEND; give way; land if needed |
| **Lost link** | Wait for programmed failsafe; attempt recovery |
| **Flyaway** | Try RTH; track position; contact authorities if controlled airspace |
| **Crash** | Secure area; check battery; remove if safe; document |
| **Battery fire** | Evacuate; ABC extinguisher/sand; monitor 30+ min |
| **GPS failure** | ATTI mode; manual control; land ASAP |
| **Motor failure** | Land immediately |
| **Lost visual** | Telemetry check; increase altitude; RTH if needed |
| **Flight termination** | Safe area; reduce altitude/speed; shutdown |

---

## 22. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-005-PR | Emergency Response Procedure (site emergencies) |
| HSE-007 | Emergency Response Policy |
| SMS-005 | Occurrence Reporting Policy |
| SMS-004-PR | Internal Reporting Procedure |
| QRC-EMERGENCY-FULL | Complete Emergency Quick Reference Card |

---

**Document Control:** OPS-011-PR v5.1 | Aeria Solutions Ltd | Uncontrolled when printed
