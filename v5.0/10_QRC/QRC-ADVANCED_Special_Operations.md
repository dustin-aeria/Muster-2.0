# QUICK REFERENCE CARD
# ADVANCED / SPECIAL OPERATIONS

---

| **QRC Number** | QRC-ADVANCED |
|:---------------|:-------------|
| **Version** | v5.0 |

---

## Amendment History

| Version | Date | Description | Author |
|:--------|:-----|:------------|:-------|
| v1.0 | November 4, 2025 | Initial release for Level 1 Complex/RPOC operations | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## BVLOS OPERATIONS

### VLOS → BVLOS Transition
```
PIC: "Entering BVLOS"
VO:  "Ready for BVLOS"
PIC: "Eyes in"
VO:  "Eyes out"
```

### During BVLOS
```
PIC:
• Monitor via control station
• Watch telemetry continuously
• Respond to all alerts

VO:
• Scan airspace for aircraft
• Request updates: "Battery?" "Range?"
• IMMEDIATELY call any aircraft sighting
```

### Traffic During BVLOS
```
VO:  "Traffic [direction], [type]"
PIC: Assess conflict level, take action
VO:  Monitor until "Traffic clear"
```

### BVLOS → VLOS Return
```
PIC: "Returning to VLOS"
VO:  [Acquire visual] "Visual contact"
PIC: "Eyes out"
```

---

## HIGH ALTITUDE (>400' AGL)

### Entering High Altitude
```
PIC: "Entering high altitude"
PIC: "Target altitude [X] feet"
VO:  "Ready for high altitude"
PIC: [Ascending, calling increments]
PIC: "400 feet"
PIC: "Maximum altitude [X] feet, holding"
```

### High Altitude Monitoring
```
☐ Altitude hold stability
☐ Link strength
☐ Weather/wind (increases with altitude)
☐ Battery consumption (may be higher)
☐ Increased airspace vigilance
```

### Traffic at High Altitude
```
VO:  "Traffic [direction]"
PIC: IMMEDIATELY reduce altitude or move to safe location
     Do NOT resume until "Airspace clear"
```

---

## HEAVY LIFT (>25 kg)

### 50-Foot Buffer Zone
```
⚠️ Launch/Land: ≥50 feet from ANY person
⚠️ NO flying directly over crew during launch/landing
```

### Heavy Lift Launch
```
1. Establish 50' clear zone
2. All personnel outside buffer
3. "Heavy lift launch, all clear at 50 feet"
4. Confirm from all crew
5. Execute launch
6. Ascend vertically until clear of buffer
```

### Heavy Lift Landing
```
1. "Heavy lift landing, clear the zone"
2. Confirm all personnel >50 feet
3. Approach landing area
4. Descend vertically
5. Land and disarm
6. "Aircraft safe, zone clear"
```

---

## RESTRICTED PAYLOADS

### Before Handling
```
☐ Review MSDS
☐ Identify required PPE
☐ Prepare per specific procedure
☐ Confirm weight within limits
```

### Required PPE
```
☐ Respiratory protection (if applicable)
☐ Chemical-resistant gloves
☐ Eye protection
☐ Other per MSDS
```

### Payload Attachment
```
1. Follow manufacturer guidelines EXACTLY
2. Secure using approved method
3. Verify locked and stable
4. Post-attachment inspection
5. Document confirmation
```

### Release Procedure
```
1. Confirm release zone clear
2. "Payload release in [X] seconds"
3. Execute release
4. Confirm successful
5. Document time/location
```

---

## NIGHT OPERATIONS

### Requirements
```
☐ Anti-collision lighting (visible 3 SM)
☐ Launch/recovery area illuminated
☐ Crew have flashlights/headlamps
☐ Can determine RPAS orientation
```

### Night Considerations
```
• Reduced depth perception
• Harder to see obstacles
• Increased reliance on telemetry
• More difficult to spot aircraft
• Higher fatigue risk
• More frequent verbal updates required
```

---

## PILOT HANDOVER

### Pre-Conditions
```
☐ Both pilots TC-qualified
☐ Both briefed on mission
☐ VO has eyes on RPAS
☐ RPAS stable (hover or level flight)
☐ Clear of obstacles
☐ Failsafe verified
```

### Handover Sequence
```
OPIC: "Stable—preparing hand-over"
VO:   "Visual—airspace clear"
OPIC: [Brief: altitude, heading, battery, hazards]
IPIC: "Copy brief—ready to receive controller"
VO:   "Ready—maintaining watch"
OPIC: "Controls neutral" [centres sticks]
OPIC: [Passes controller with neck-strap]
IPIC: [Takes controller, tests yaw]
IPIC: "I have control"
OPIC: "You have control, I am monitor"
VO:   "Control change confirmed"
IPIC: "Control check complete—continuing"
```

### Abort Triggers
```
• Loss of visual or telemetry → OPIC: "Abort—maintaining control"
• IPIC fails to confirm in 3 sec → OPIC retains PIC
• VO calls hazard → Postpone until clear
```

---

## GCS HOT-SWAP

### Pre-Conditions
```
☐ Both stations powered and paired
☐ Identical telemetry on both
☐ No frequency conflict
☐ VO has visual
☐ RPAS stable at ≥30m AGL
☐ Failsafe values equal on both
```

### Hot-Swap Sequence
```
OPIC: "Stable—preparing station swap"
VO:   "Visual—airspace clear"
OPIC: [Read: altitude, heading, speed, battery, time]
IPIC: "Copy—telemetry matched"
OPIC: [Enable dual mode if needed]
IPIC: "Ready to assume"
OPIC: "Transferring in 3-2-1—release"
IPIC: [Apply small input, verify response]
IPIC: "I have control"
OPIC: "You have control—monitoring"
VO:   "Control change confirmed"
IPIC: "Control check complete—continuing"
```

---

## SFOC OPERATIONS

### Pre-Operation
```
☐ SFOC received and reviewed
☐ All conditions understood by crew
☐ CONOPS matches SFOC requirements
☐ Equipment meets specifications
☐ Crew qualifications meet requirements
```

### During Operation
```
☐ Operate within SFOC boundaries
☐ Follow ALL conditions
☐ Document any deviations
☐ Report per requirements
```

---

**QRC-ADVANCED v5.0 | Aeria Solutions Ltd**
