# AERIA SOLUTIONS LTD

# ADVANCED EMERGENCY PROTOCOLS

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-018-PR |
| **Version** | v5.0 |
| **Effective Date** | March 18, 2026 |
| **Review Date** | March 18, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure provides advanced emergency protocols including the conflict scheme, DESCEND protocol, and fly-away communication script. These protocols supplement OPS-011-PR Emergency Procedures.

---

## 2. Air Traffic Conflict Scheme

### 2.1 Conflict Classification

All potential conflicts are classified into five levels:

| Level | Scenario | Threat Level |
|:------|:---------|:-------------|
| 1 | Planned Aircraft Approach | KNOWN |
| 2 | Entered Airspace – Announced | LOW |
| 3 | Unannounced – Non-Threat | MONITOR |
| 4 | Unannounced – Potential Conflict | HIGH |
| 5 | Unannounced – Critical Threat | CRITICAL |

### 2.2 De-Conflict Matrix

| Scenario | Required Action |
|:---------|:----------------|
| **Level 1: Planned Aircraft** | RPAS is **grounded** until aircraft clears |
| **Level 2: Announced Aircraft** | Restrict RPAS to **below 400' AGL**, maintain **≥1 km horizontal** from aircraft path |
| **Level 3: Non-Threat** | **Continue operation**, maintain awareness of aircraft in case threat level changes |
| **Level 4: Potential Conflict** | **Return to home** or **hover and hold** until conflict resolved |
| **Level 5: Critical Threat** | **IMMEDIATE DESCENT** — Execute DESCEND Protocol |

### 2.3 Conflict Response Flowchart

```
Aircraft Detected
       ↓
   Was it planned?
    /         \
  YES          NO
   ↓            ↓
GROUNDED    Announced?
              /      \
            YES       NO
             ↓         ↓
         Level 2    Trajectory?
         (restrict)   /     \
                   AWAY    TOWARD
                    ↓         ↓
                 Level 3   Distance?
                 (monitor)  /      \
                        FAR     CLOSE
                         ↓         ↓
                     Level 4   Level 5
                     (RTH)    (DESCEND!)
```

---

## 3. DESCEND Protocol

### 3.1 Overview

The DESCEND Protocol is the **emergency procedure for critical air traffic threats**. It requires immediate action to avoid collision.

### 3.2 Execution

#### Without Visual Observer (Solo PIC)

| Step | Action |
|:-----|:-------|
| 1 | Identify critical threat |
| 2 | Take immediate manual control |
| 3 | **Loudly announce: "DESCEND, DESCEND, DESCEND"** |
| 4 | Execute straight downward descent to safe altitude |
| 5 | Maintain awareness of ground obstacles |
| 6 | Hold position until threat passes |

#### With Visual Observer

| Step | Actor | Action |
|:-----|:------|:-------|
| 1 | VO | Identifies critical threat |
| 2 | VO | **"CRITICAL THREAT, DESCEND, DESCEND, DESCEND"** |
| 3 | PIC | Takes immediate manual control |
| 4 | PIC | **"DESCEND, DESCEND, DESCEND"** (while descending) |
| 5 | PIC | Execute straight downward descent to safe altitude |
| 6 | VO | Monitors threat, calls "Clear" when safe |

### 3.3 Critical Guidelines

| Guideline | Details |
|:----------|:--------|
| **Purpose** | Bring RPAS to safe altitude avoiding collision |
| **NOT a crash maneuver** | Descend to safe altitude, not into terrain |
| **Alternative** | If descent unsafe, maneuver downward AND away from aircraft path |
| **Speed** | Execute immediately—seconds matter |

### 3.4 Post-DESCEND Actions

1. Hold position until threat has passed
2. VO confirms "Airspace clear"
3. Assess RPAS status
4. Resume operation or land for assessment
5. Log incident per SMS requirements

---

## 4. Fly-Away Emergency Protocol

### 4.1 Definition

A **fly-away** occurs when the RPAS unexpectedly flies beyond operator control due to:
- Loss of communication
- GPS failure
- Software/hardware malfunction

### 4.2 Immediate Actions

| Step | Action |
|:-----|:-------|
| 1 | **Announce:** "FLYAWAY" |
| 2 | Attempt all available control recovery methods |
| 3 | Toggle communication channels/frequencies |
| 4 | Try RTH command (even if other controls failed) |
| 5 | Activate failsafe (power off controller if needed) |
| 6 | Track last known position via telemetry |
| 7 | **If entering controlled airspace:** Contact authorities immediately |

### 4.3 Fly-Away Emergency Call Script

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

### 4.4 Fly-Away Contact Information

| Situation | Contact |
|:----------|:--------|
| Approaching controlled airspace | ATC frequency for that airspace |
| General emergency | 911 |
| NAV CANADA | 1-866-WXBRIEF (1-866-992-7433) |
| Transport Canada (reporting) | TC RPAS Centre of Excellence |
| TSB (if >25kg or injury) | 1-800-387-3557 |

### 4.5 Recovery Procedure

1. Track to last known position
2. Search systematically for aircraft
3. If unrecoverable, document last known position with GPS coordinates
4. Report per SMS requirements
5. Report to Transport Canada if:
   - Aircraft entered controlled airspace
   - Caused hazard to other aircraft
   - Injured person or damaged property

---

## 5. Flight Termination Protocol

### 5.1 When to Terminate

Flight termination is the **deliberate ending of flight** when:
- RPAS poses safety risk
- Risk of entering restricted airspace
- Risk of endangering people, animals, or property
- All other recovery options exhausted

### 5.2 Flight Termination Procedure

| Step | Action |
|:-----|:-------|
| 1 | Attempt to pilot RPAS to safe area (away from people, infrastructure) |
| 2 | **Notify crew:** "Flight termination" |
| 3 | Reduce altitude to lowest safe AGL |
| 4 | Reduce speed to minimum |
| 5 | **Initiate shutdown procedure** specific to RPAS model |
| 6 | Bring fire extinguisher to expected landing location |
| 7 | Prepare for retrieval |

### 5.3 Post-Termination

1. Approach cautiously (battery may be damaged)
2. Have fire extinguisher ready
3. Monitor for smoke/heat
4. Remove battery only if safe
5. Document thoroughly
6. Report per SMS requirements

---

## 6. Communication Failure Protocol

### 6.1 Types of Communication Failure

| Type | Description |
|:-----|:------------|
| **Telemetry Loss** | No data from RPAS but may still have control |
| **Command Loss** | Cannot send commands, may still receive data |
| **Complete Link Loss** | No communication in either direction |

### 6.2 Response Procedure

| Step | Action |
|:-----|:-------|
| 1 | **Announce:** "Lost link" |
| 2 | **Do not panic** — Aircraft will follow programmed failsafe |
| 3 | Attempt recovery: reposition controller, check antenna, cycle power |
| 4 | If manual control possible, take control |
| 5 | Notify crew of situation |
| 6 | If control regained: reduce altitude, return to landing site |
| 7 | If control not regained: track aircraft, prepare for automatic landing/RTH |
| 8 | Clear expected landing area |

---

## 7. Unintentional Loss of Visual Contact

### 7.1 Definition

Loss of visual occurs when operator/VO unexpectedly loses sight of RPAS due to:
- Environmental factors (fog, sun glare)
- Terrain obstructions
- Distance

### 7.2 Response Procedure

| Step | Actor | Action |
|:-----|:------|:-------|
| 1 | VO | **"LOST VISUAL"** — Immediately notify PIC |
| 2 | PIC | Use telemetry to determine position |
| 3 | PIC | If safe, **increase altitude** to clear obstructions |
| 4 | VO | Continue searching in direction of last visual |
| 5 | PIC | If cannot regain visual, initiate **RTH** |
| 6 | Both | Continue searching until visual contact regained |
| 7 | PIC | If RTH initiated, monitor telemetry until aircraft in sight |

### 7.3 BVLOS Note

If operating BVLOS, loss of visual is expected. Ensure:
- Telemetry is reliable
- DAA systems are active
- Procedures allow for non-visual operation

---

## 8. Emergency Contact Quick Reference

| Emergency | Primary Contact | Secondary |
|:----------|:----------------|:----------|
| Life-threatening | 911 | — |
| Aircraft conflict | ATC (relevant frequency) | NAV CANADA 1-866-WXBRIEF |
| Fly-away (controlled airspace) | ATC | NAV CANADA |
| TSB Reportable | TSB 1-800-387-3557 | — |
| Transport Canada | TC RPAS Centre | rpas-uas@tc.gc.ca |
| Internal | Operations Manager | Accountable Executive |

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-011-PR | Emergency Procedures (RPAS) |
| SMS-005 | Occurrence Reporting Policy |
| QRC-EMERGENCY | Emergency Quick Reference Card |

---

**Document Control:** OPS-018-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
