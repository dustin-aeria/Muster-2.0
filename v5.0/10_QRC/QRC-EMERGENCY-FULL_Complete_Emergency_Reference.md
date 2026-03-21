# QUICK REFERENCE CARD
# COMPLETE EMERGENCY REFERENCE

---

| **QRC Number** | QRC-EMERGENCY-FULL |
|:---------------|:-------------------|
| **Version** | v5.0 |

---

## Amendment History

| Version | Date | Description | Author |
|:--------|:-----|:------------|:-------|
| v1.0 | February 15, 2018 | Initial release | Dustin Wales |
| v2.0 | February 10, 2020 | Annual review — updated quick reference items | Dustin Wales |
| v3.0 | November 4, 2025 | Updated for Level 1 Complex operations | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## EMERGENCY PRIORITY ORDER

```
1. SAFETY OF PEOPLE
2. AIRCRAFT RECOVERY (if safe)
3. PROPERTY PROTECTION
4. EVIDENCE PRESERVATION
```

---

## AIR TRAFFIC CONFLICT SCHEME

### Conflict Levels
```
Level 1: PLANNED AIRCRAFT      → RPAS GROUNDED
Level 2: ANNOUNCED AIRCRAFT    → Below 400', 1km separation
Level 3: NON-THREAT           → Continue, monitor
Level 4: POTENTIAL CONFLICT    → RTH or hover/hold
Level 5: CRITICAL THREAT       → DESCEND PROTOCOL
```

---

## ⚠️ DESCEND PROTOCOL

### Critical Threat Response
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   "DESCEND, DESCEND, DESCEND"                  │
│                                                 │
│   1. Take immediate manual control              │
│   2. Execute straight downward descent          │
│   3. Maintain ground obstacle awareness         │
│   4. Hold until threat passes                   │
│                                                 │
└─────────────────────────────────────────────────┘
```

### With VO
```
VO:  "CRITICAL THREAT, DESCEND, DESCEND, DESCEND"
PIC: [Takes control] "DESCEND, DESCEND, DESCEND"
PIC: [Descends to safe altitude]
VO:  [Monitors threat] "Clear"
```

### Without VO
```
PIC: [Identifies critical threat]
PIC: [Takes manual control]
PIC: "DESCEND, DESCEND, DESCEND"
PIC: [Descends to safe altitude]
```

**NOT a crash maneuver** — Descend to safe altitude, not into terrain.

---

## LOST LINK / COMMUNICATION FAILURE

### Signs
```
• No control response
• Link lost indicator
• Telemetry stops updating
```

### Actions
```
1. "Lost link"
2. DO NOT PANIC — aircraft follows programmed failsafe
3. Monitor telemetry (may still receive)
4. Attempt recovery:
   • Reposition controller
   • Check antenna
   • Power cycle controller (last resort)
5. Watch for aircraft — will RTH or land
6. Clear expected landing area
```

### If Not Recovered
```
• Track position via telemetry
• Move to intercept/recovery position
• Prepare for manual recovery
• After recovery: inspect, check logs, report
```

---

## FLYAWAY

### Signs
```
• Aircraft not responding to commands
• Aircraft moving away uncontrolled
• Cannot regain control
```

### Actions
```
1. "FLYAWAY"
2. Try all control recovery methods
3. Toggle channels/frequencies
4. Try RTH command (even if other controls failed)
5. Activate failsafe (power off controller if needed)
6. Track last known position
7. IF ENTERING CONTROLLED AIRSPACE → Contact authorities
```

---

## FLY-AWAY CALL SCRIPT

### Use When Contacting ATC/Authorities
```
"Hello, my name is [YOUR NAME].
I am an RPAS operator, and I am currently
experiencing a fly-away situation.

The RPAS is [COLOR], [MAKE] brand, model [MODEL],
weighing [WEIGHT] grams.

My current location is [DISTANCE] nautical miles
from [NEAREST AERODROME], bearing [DIRECTION].

The RPAS is flying at [ALTITUDE] feet above sea level,
heading [HEADING] at approximately [SPEED] knots.

The RPAS has maximum flight time of [TIME] minutes,
with estimated remaining battery of [BATTERY]%.

I estimate its maximum remaining travel distance
is [DISTANCE] nautical miles."
```

---

## CRASH / AIRCRAFT DOWN

### Actions
```
1. "Aircraft down"
2. Ensure area safe — keep people away
3. Disarm if accessible and safe
4. CHECK FOR BATTERY DAMAGE (fire risk)
5. Remove battery carefully if safe
6. Document with photos
7. GPS coordinates
8. Report per SMS-005
```

### If Fire Risk Present
```
• Do NOT approach immediately
• Monitor for smoke/heat
• Have fire suppression ready
```

---

## BATTERY FIRE

### Signs
```
• Smoke from battery
• Unusual smell
• Swelling battery
• Flames
```

### Actions
```
1. "Battery fire"
2. EVACUATE immediate area (toxic fumes)
3. DO NOT USE WATER (LiPo fires)
4. Use ABC dry chemical extinguisher or sand
5. If aircraft in air: land immediately in safe area
6. Monitor for re-ignition (30+ minutes)
```

### After Fire Controlled
```
• Do NOT touch battery
• Allow to cool completely
• Dispose per hazardous waste procedure
• Seek medical attention if fumes inhaled
```

---

## FLIGHT TERMINATION

### When to Terminate
```
• RPAS poses safety risk
• Risk of entering restricted airspace
• Risk of endangering people/animals/property
• All recovery options exhausted
```

### Procedure
```
1. Attempt to pilot to safe area (away from people)
2. "Flight termination"
3. Reduce altitude to lowest safe AGL
4. Reduce speed to minimum
5. Initiate shutdown per RPAS model
6. Bring fire extinguisher to expected location
7. Prepare for retrieval
```

---

## GPS FAILURE

### Signs
```
• GPS lost indicator
• Position not updating
• Aircraft drifting unexpectedly
```

### Actions
```
1. Switch to ATTI mode (attitude-only)
2. Maintain visual on aircraft
3. Manually control position
4. Land as soon as practical
5. DO NOT enter BVLOS without GPS
```

---

## MOTOR / ESC FAILURE

### Signs
```
• Aircraft yawing unexpectedly
• Motor warning
• Unusual sound
```

### Actions
```
1. LAND IMMEDIATELY
2. Some multirotors can fly with one motor out
3. Prioritize safe landing area
4. Accept rougher landing if needed for safety
```

---

## LOSS OF VISUAL CONTACT

### Actions
```
1. VO: "LOST VISUAL"
2. PIC: Use telemetry for position
3. PIC: If safe, increase altitude to clear obstructions
4. VO: Search in direction of last visual
5. If cannot regain: initiate RTH
6. Monitor telemetry until visual regained
```

---

## EMERGENCY CONTACTS

| Emergency | Contact |
|:----------|:--------|
| **Life-threatening** | **911** |
| Aircraft conflict | ATC (relevant frequency) |
| NAV CANADA | 1-866-WXBRIEF (1-866-992-7433) |
| TSB (>25kg or injury) | 1-800-387-3557 |
| Transport Canada | rpas-uas@tc.gc.ca |

---

## REPORTING REQUIREMENTS

| Occurrence | Report To | When |
|:-----------|:----------|:-----|
| Minor emergency | Ops Manager | Same day |
| Aircraft damage | Ops Manager | Immediately |
| Property damage | Ops Manager + Owner | Immediately |
| Injury | 911 + Ops Manager | Immediately |
| Controlled airspace entry | NAV CANADA/ATC | Immediately |
| Reportable occurrence | Transport Canada | Per CARs |

---

## POST-EMERGENCY

```
1. Ensure all personnel safe
2. Secure aircraft if possible
3. DO NOT modify/delete any data
4. Document thoroughly (notes, photos)
5. Preserve all evidence
6. Report to Operations Manager
7. Complete occurrence report (SMS-005)
8. Cooperate with investigation
```

---

## QUICK REFERENCE TABLE

| Emergency | Key Actions |
|:----------|:------------|
| Lost link | Wait for failsafe; attempt recovery |
| Flyaway | Try RTH; track position; contact authorities |
| Crash | Secure area; remove battery; document |
| Battery fire | Evacuate; ABC/sand; monitor 30 min |
| Traffic conflict | DESCEND; give way; land if needed |
| GPS failure | ATTI mode; manual control; land |
| Motor failure | Land immediately |
| Lost visual | Telemetry; increase altitude; RTH |

---

**Reference:** OPS-011-PR RPAS Emergency Procedures Manual (Master Document)

---

**QRC-EMERGENCY-FULL v5.1 | Aeria Solutions Ltd**
