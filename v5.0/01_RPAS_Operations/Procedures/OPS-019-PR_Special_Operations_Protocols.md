# AERIA SOLUTIONS LTD

# SPECIAL OPERATIONS PROTOCOLS

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-019-PR |
| **Version** | v5.0 |
| **Effective Date** | March 18, 2026 |
| **Review Date** | March 18, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure provides protocols for special RPAS operations including BVLOS transitions, high altitude operations, heavy lift, and restricted payload handling.

---

## 2. Scope

This procedure applies to operations under CARs Part IX Subpart 3:
- Beyond Visual Line of Sight (BVLOS)
- High Altitude (>400' AGL)
- Heavy Lift (>25 kg MTOW)
- Restricted/Dangerous Payloads
- Operations requiring SFOC

---

## 3. BVLOS Operations

### 3.1 BVLOS Transition Protocol (Eyes-In/Eyes-Out)

When transitioning from VLOS to BVLOS:

| Step | Actor | Action/Call |
|:-----|:------|:------------|
| 1 | PIC | "Entering BVLOS" — Signals start of transition |
| 2 | VO | "Ready for BVLOS" — Confirms VO is prepared |
| 3 | PIC | "Eyes in" — PIC focusing on control station |
| 4 | VO | "Eyes out" — VO maintaining visual monitoring of airspace |
| 5 | — | Transition complete |

### 3.2 During BVLOS Operations

**PIC Responsibilities:**
- Monitor RPAS via control station
- Monitor telemetry continuously
- Respond immediately to any alerts
- Maintain awareness of position relative to boundaries

**VO Responsibilities:**
- Scan surrounding airspace for aircraft
- Monitor for any potential hazards
- Request periodic read-outs from PIC: "Battery?" "Range?"
- Immediately communicate any aircraft sightings

### 3.3 Communication During BVLOS

| Interval | Communication |
|:---------|:--------------|
| Every 2-3 minutes | VO requests battery and range update |
| Immediately | Any aircraft sighting |
| Immediately | Any unusual observation |
| Continuously | Airspace monitoring |

**If aircraft detected by VO:**

| Step | Action |
|:-----|:-------|
| 1 | VO: "Traffic [direction], [type if known]" |
| 2 | PIC: Assess conflict level per Conflict Scheme |
| 3 | PIC: Take appropriate action (descend, hold, return) |
| 4 | VO: Monitor until clear, then "Traffic clear" |

### 3.4 BVLOS Return Transition

When returning to VLOS:

| Step | Actor | Action/Call |
|:-----|:------|:------------|
| 1 | PIC | "Returning to VLOS" |
| 2 | VO | Scan for RPAS, acquire visual |
| 3 | VO | "Visual contact" — RPAS in sight |
| 4 | PIC | "Eyes out" — PIC can now assist with visual |
| 5 | — | Return to normal VLOS operations |

---

## 4. High Altitude Operations

### 4.1 Definition

High altitude = any operation above 400' AGL or 100' above the tallest obstruction within 200' laterally (per CAR 901.25).

### 4.2 Entering High Altitude Protocol

| Step | Actor | Action/Call |
|:-----|:------|:------------|
| 1 | PIC | "Entering high altitude" — Announces intention |
| 2 | PIC | "Target altitude [X] feet" — States maximum |
| 3 | VO | "Ready for high altitude" — Confirms monitoring |
| 4 | PIC | Gradually increase altitude, monitoring performance |
| 5 | VO | Actively scan airspace during ascent |
| 6 | PIC | "400 feet" — Announce when reached |
| 7 | PIC | Continue calling altitude increments until max |
| 8 | PIC | "Maximum altitude [X] feet, holding" |

### 4.3 High Altitude Monitoring

During high altitude operations, monitor:
- [ ] Stability and accuracy of altitude hold
- [ ] Command-and-control link strength
- [ ] Weather and atmospheric conditions (wind increases with altitude)
- [ ] Battery consumption (may be higher)
- [ ] Airspace awareness (increased conflict risk)

### 4.4 If Aircraft Detected During High Altitude

| Step | Action |
|:-----|:-------|
| 1 | VO calls: "Traffic [direction]" |
| 2 | **Immediately reduce altitude** or move to safe location |
| 3 | Do not resume high altitude until airspace confirmed clear |

### 4.5 Entering BVLOS at High Altitude

If transitioning to BVLOS while at high altitude:

| Step | Actor | Action/Call |
|:-----|:------|:------------|
| 1 | PIC | "Entering BVLOS" |
| 2 | VO | "Ready for BVLOS" |
| 3 | PIC | "Eyes in" |
| 4 | VO | "Eyes out" |
| 5 | — | Enhanced vigilance required—high altitude + BVLOS = higher risk |

---

## 5. Heavy Lift Operations

### 5.1 Definition

Heavy lift = any RPAS with **maximum take-off weight over 25 kg**.

### 5.2 50-Foot Buffer Zone

Due to increased kinetic energy and risk:

| Requirement | Details |
|:------------|:--------|
| **Launch distance** | ≥50 feet from any person |
| **Land distance** | ≥50 feet from any person |
| **Flight path** | Must NOT pass directly over operator/crew during launch or landing |

### 5.3 Heavy Lift Launch Procedure

| Step | Action |
|:-----|:-------|
| 1 | Establish 50' clear zone around launch pad |
| 2 | All personnel positioned outside buffer zone |
| 3 | Announce: "Heavy lift launch, all clear at 50 feet" |
| 4 | Receive confirmation from all crew |
| 5 | Execute launch |
| 6 | Ascend vertically until clear of buffer zone |
| 7 | Then proceed with normal operations |

### 5.4 Heavy Lift Landing Procedure

| Step | Action |
|:-----|:-------|
| 1 | Announce: "Heavy lift landing, clear the zone" |
| 2 | Confirm all personnel >50 feet from landing area |
| 3 | Approach landing area |
| 4 | Descend vertically |
| 5 | Land and disarm |
| 6 | Announce: "Aircraft safe, zone clear" |
| 7 | Personnel may approach |

### 5.5 Additional Heavy Lift Considerations

- More thorough pre-flight inspection required
- Monitor for signs of motor/ESC strain
- Conservative battery thresholds
- Longer stopping distances in emergency
- Greater damage potential—exercise extra caution

---

## 6. Restricted Payload Operations

### 6.1 Definition

Restricted payloads include:
- Hazardous materials
- Dangerous goods (per TDGR/ATR)
- Items requiring special handling

### 6.2 Regulatory Compliance

Operations with restricted payloads must comply with:
- Transportation of Dangerous Goods Regulations (TDGR)
- Air Transportation Regulations (ATR)
- WHMIS requirements
- MSDS standards
- All requirements documented in CONOPS

### 6.3 Payload Preparation

| Step | Action |
|:-----|:-------|
| 1 | Review MSDS for payload materials |
| 2 | Identify required PPE |
| 3 | Prepare payload per specific procedure |
| 4 | Conduct pre-operation inspection of payload |
| 5 | Document payload condition |
| 6 | Confirm payload weight within RPAS limits |

### 6.4 Payload Attachment

| Step | Action |
|:-----|:-------|
| 1 | Follow manufacturer guidelines exactly |
| 2 | Secure payload using approved attachment method |
| 3 | Verify payload locked and stable |
| 4 | Conduct post-attachment inspection |
| 5 | Document attachment confirmation |

### 6.5 PPE Requirements

All crew handling restricted payloads must wear:
- [ ] Appropriate respiratory protection (if applicable)
- [ ] Chemical-resistant gloves
- [ ] Eye protection
- [ ] Other PPE as specified by MSDS

Inspect, maintain, and replace PPE as required.

### 6.6 Release/Delivery Procedure

| Step | Action |
|:-----|:-------|
| 1 | Confirm release zone is clear |
| 2 | Announce: "Payload release in [X] seconds" |
| 3 | Execute release per procedure |
| 4 | Confirm release successful |
| 5 | Document release time and location |

---

## 7. Night Operations

### 7.1 Additional Requirements

| Requirement | Details |
|:------------|:--------|
| **Lighting** | RPAS must have anti-collision lighting visible for 3 SM |
| **Launch/Recovery area** | Adequately illuminated |
| **Crew equipment** | Flashlights, headlamps |
| **Visual reference** | Maintain ability to determine orientation |

### 7.2 Night Operation Considerations

- Reduced depth perception
- Harder to see obstacles
- Increased reliance on telemetry
- More difficult to spot other aircraft
- Fatigue may be higher

### 7.3 Night Communication Protocol

More frequent verbal updates required:
- Position and heading
- Battery status
- Any anomalies

---

## 8. SFOC Operations Compliance

### 8.1 Pre-Operation

- [ ] SFOC received and reviewed
- [ ] All conditions understood by crew
- [ ] CONOPS matches SFOC requirements
- [ ] Equipment meets SFOC specifications
- [ ] Crew qualifications meet SFOC requirements

### 8.2 During Operation

- [ ] Operate within SFOC boundaries
- [ ] Follow all SFOC conditions
- [ ] Document any deviations
- [ ] Report occurrences per SFOC requirements

### 8.3 Post-Operation

- [ ] Review operation against SFOC requirements
- [ ] Document compliance
- [ ] Report per SFOC requirements

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-009-PR | BVLOS Operations Procedure |
| OPS-013-PR | Cargo Delivery Procedure |
| OPS-014-PR | Dangerous Goods Procedure |
| QRC-BVLOS | BVLOS Quick Reference |
| QRC-ADVANCED | Advanced Operations Quick Reference |

---

**Document Control:** OPS-019-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
