# AERIA SOLUTIONS LTD

# CREW COMMUNICATION PROCEDURES

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-017-PR |
| **Version** | v5.0 |
| **Effective Date** | March 18, 2026 |
| **Review Date** | March 18, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | July 5, 2017 | Initial release | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added VO communication protocols | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — added CRM integration | Dustin Wales |
| v3.1 | January 28, 2022 | Added BVLOS communication procedures | Dustin Wales |
| v4.0 | November 4, 2025 | Updated for Level 1 Complex operations | Dustin Wales |
| v5.0 | March 18, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Purpose

This procedure establishes standardized communication protocols for RPAS operations, including call-response checklists, pilot handover procedures, and standard operating calls.

---

## 2. Communication Principles

- **Clear and Concise** - Use standardized terminology
- **Confirm Critical Calls** - Repeat back important information
- **Sterile Cockpit** - No unnecessary conversation during critical phases
- **NATO Phonetic Alphabet** - Use for critical communications when needed

---

## 3. Standard Operating Calls

### 3.1 General Calls

| Call | Meaning | Used By |
|:-----|:--------|:--------|
| "CLEAR" | Area clear to proceed / taking off | PIC |
| "HOLD" | Maintain current position | PIC/VO |
| "RETURN" | Return to launch point | PIC/VO |
| "LAND" | Begin normal landing | PIC |
| "LAND NOW" | Immediate landing required | Anyone |
| "RPAS ON" | Aircraft powering up | PIC |
| "RPAS OFF" | Aircraft powered down | PIC |
| "SAFE FOR APPROACH" | Aircraft disarmed, safe to approach | PIC |

### 3.2 Visual Observer Calls

| Call | Meaning | Response Required |
|:-----|:--------|:------------------|
| "TRAFFIC, [direction]!" | Other aircraft detected | PIC acknowledges, takes action |
| "ALTITUDE!" | Approaching altitude limits | PIC acknowledges, adjusts |
| "BOUNDARY!" | Approaching edge of area | PIC acknowledges, adjusts |
| "WEATHER!" | Conditions changing | PIC assesses, decides action |
| "OBSTACLE!" | Hazard in flight path | PIC acknowledges, avoids |
| "BATTERY?" | Requesting battery status | PIC reads percentage |
| "DISTANCE?" | Requesting distance from home | PIC reads distance |

### 3.3 Emergency Calls

| Call | Meaning | Priority |
|:-----|:--------|:---------|
| "EMERGENCY" | General emergency declared | HIGHEST |
| "LOST LINK" | Command link lost | HIGH |
| "FLYAWAY" | Aircraft not responding | HIGH |
| "DESCEND DESCEND DESCEND" | Immediate descent required | CRITICAL |
| "AIRCRAFT DOWN" | Crash occurred | HIGH |
| "BATTERY FIRE" | LiPo fire detected | CRITICAL |

---

## 4. Take-Off Checklist (Call & Response)

**This checklist must be completed before every takeoff.**

The VO reads each call. The PIC responds with the appropriate information.

| # | VO Call | PIC Response | Notes |
|:--|:--------|:-------------|:------|
| 1 | "Wind & weather" | Describe wind speed/direction, visibility, clouds. If acceptable: **"Within limits"** | If NOT within limits: DO NOT TAKE OFF |
| 2 | "Air vehicle batteries" | **"[X] percent"** or **"[X] bars"** | Minimum 80% for normal ops |
| 3 | "Ground control batteries" | **"[X] percent"** (include tablet/phone if connected) | Minimum 50% |
| 4 | "Ground control app" | App name, connection status, satellite count, any errors | Must show connected, no errors |
| 5 | "Payload" | List payload types, confirm connected and unobstructed | Camera, sensors, etc. |
| 6 | "Failsafe" | Mode (RTH/Land), RTH altitude, critical battery level | Must match operation plan |
| 7 | "Take-off mode" | **"P-GPS"** or applicable mode | Must be position-hold mode |
| 8 | "Area & air traffic" | Note aircraft, ground traffic, obstacles, NOTAMs, interference sources | Clear any concerns |
| 9 | "Cleared for takeoff" | **"CLEAR!"** (loudly) | Final confirmation |

⚠️ **STOP** if any response indicates a problem. Resolve before proceeding.

---

## 5. Pilot-to-Pilot Handover Procedure

For transferring control from one pilot (OPIC - Outgoing PIC) to another (IPIC - Incoming PIC).

### 5.1 Pre-Conditions

Before initiating handover:
- [ ] Both pilots TC-qualified for operation class
- [ ] Both pilots briefed on mission, airspace, battery, contingencies
- [ ] VO has continuous eyes on RPAS
- [ ] RPAS in stable hover or straight-and-level flight
- [ ] RPAS clear of obstacles
- [ ] Failsafe parameters verified
- [ ] Controller neck-strap fitted on OPIC

### 5.2 Standard Handover Sequence

| Step | Actor | Action/Call |
|:-----|:------|:------------|
| 1 | OPIC | "Stable—preparing hand-over" |
| 2 | VO | "Visual—airspace clear" |
| 3 | OPIC | Read-back brief (≤10 sec): altitude, heading, battery %, time remaining, hazards |
| 4 | IPIC | "Copy brief—ready to receive controller" |
| 5 | VO | "Ready—maintaining watch" |
| 6 | OPIC | Centre sticks, confirm no input needed: "Controls neutral" |
| 7 | OPIC | Place controller neck-strap around IPIC, maintain grip until IPIC has full grasp |
| 8 | IPIC | Take controller, thumb on left stick, slight yaw nudge to confirm response |
| 9 | IPIC | **"I have control"** |
| 10 | OPIC | Verify movement on screen: **"You have control, I am monitor"** |
| 11 | VO | "Control change confirmed" |
| 12 | IPIC | Gentle pitch/roll test: "Control check complete—continuing" |
| 13 | OPIC | Step back 1m, become Safety Pilot/Monitor |

### 5.3 Abort Triggers

**Immediately abort handover if:**
- Loss of visual or telemetry during pass → OPIC halts, re-assumes grip: "Abort—maintaining control"
- IPIC fails to confirm control within 3 seconds → OPIC retains PIC status
- VO calls hazard → OPIC postpones until clear

### 5.4 Logging

Record in Operational Flight Log:
- UTC time of handover
- OPIC & IPIC names
- Battery % at handover
- Flight mode
- Location

---

## 6. Ground Control Station Handover (Hot-Swap)

For transferring live control between two ground control stations (e.g., handheld RC to laptop GCS).

### 6.1 Pre-Conditions

- [ ] Both stations powered and paired to aircraft
- [ ] Both stations show identical telemetry
- [ ] Link redundancy verified (no frequency conflict)
- [ ] VO maintaining continuous visual
- [ ] RPAS stable at ≥30m AGL, clear of obstacles
- [ ] Failsafe/RTH values confirmed equal on both stations

### 6.2 Hot-Swap Sequence

| Step | Actor | Action/Call |
|:-----|:------|:------------|
| 1 | OPIC | "Stable—preparing station swap" |
| 2 | VO | "Visual—airspace clear" |
| 3 | OPIC | Read aloud: altitude, heading, groundspeed, battery %, time remaining |
| 4 | IPIC | "Copy—telemetry matched" |
| 5 | OPIC | Enable Dual/Instructor mode if required |
| 6 | IPIC | Confirm inputs disabled/zeroed: "Ready to assume" |
| 7 | OPIC | "Transferring control in 3-2-1—release" (releases command) |
| 8 | IPIC | Apply small input, verify response |
| 9 | IPIC | **"I have control"** |
| 10 | OPIC | See expected movement: **"You have control—monitoring"** |
| 11 | VO | "Control change confirmed" |
| 12 | IPIC | Gentle pitch/roll, read back battery %: "Control check complete—continuing mission" |
| 13 | OPIC | Revert to Safety Pilot/Monitor role |

### 6.3 Abort Triggers

- Station-link drop or delayed telemetry (>300ms) → OPIC toggles back: "Abort—maintaining primary control"
- IPIC does not obtain control within 5 seconds → OPIC retains PIC status
- Any hazard call from VO → Postpone until clear

---

## 7. In-Flight Communication Protocol

### 7.1 Continuous Communication

During flight, maintain regular updates:

| Interval | Communication |
|:---------|:--------------|
| On request | Battery status, distance, altitude |
| Any change | Weather, traffic, conditions |
| As needed | Mission progress, concerns |

### 7.2 Communication Format

For situational updates, use:
- **What** - The observation or status
- **Where** - Location/direction if applicable
- **Action** - What you're doing about it

**Example:** "Traffic, northwest, helicopter, descending and holding"

### 7.3 Confirmation Protocol

Critical information must be repeated back:

| Sender | "Battery at 25%, returning home" |
|:-------|:---------------------------------|
| Receiver | "Confirmed, battery 25%, RTH" |

---

## 8. Post-Flight Communication

### 8.1 Debrief Topics

After each flight, discuss:
1. Objectives achieved?
2. Issues encountered?
3. Communication effectiveness?
4. Procedure improvements needed?
5. Safety observations?

### 8.2 Incident Communication

If incident occurred:
1. Document immediately while fresh
2. Do not discuss blame
3. Focus on facts
4. Report per SMS requirements

---

## 9. Communication Equipment

### 9.1 Required Equipment

| Equipment | Purpose |
|:----------|:--------|
| Two-way radios | Crew communication |
| ROC-A radio (if required) | Aeronautical communication |
| Mobile phone | Backup / emergency contact |
| Satellite phone (remote ops) | Emergency in areas without cell |

### 9.2 Pre-Operation Checks

- [ ] Radios charged
- [ ] Radios tested (clear transmission)
- [ ] Frequencies confirmed
- [ ] Backup communication available

---

## 10. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-016-PR | General Operations Flow |
| OPS-003-PR | Flight Conduct Procedure |
| QRC-VOCALLS | Visual Observer Standard Calls |

---

**Document Control:** OPS-017-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
