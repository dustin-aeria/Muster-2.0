-- Batch 7 of 8
-- Documents 121 to 140 of 155
-- Run this in Supabase SQL Editor

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-AVALANCHE Avalanche Control',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# AVALANCHE CONTROL OPERATIONS

---

| **QRC Number** | QRC-AVALANCHE |
|:---------------|:--------------|
| **Version** | v5.0 |

---

## EMERGENCY CONTACTS

| Contact | Number |
|:--------|:-------|
| Operations Manager | [INSERT] |
| Blaster in Charge | [INSERT] |
| Avalanche Program | [INSERT] |
| Emergency Services | 911 |
| CANUTEC (DG emergency) | 1-888-226-8832 |

---

## CRITICAL SAFETY RULES

1. **NEVER** handle explosives without qualified blaster present
2. **NEVER** fly with explosives until zone cleared
3. **ALWAYS** account for every explosive
4. **ALWAYS** follow misfire procedures
5. **NEVER** approach unexploded ordnance

---

## PRE-DEPLOYMENT CHECKLIST

| Item | Verified |
|:-----|:---------|
| SFOC valid | ☐ |
| Explosives licence valid | ☐ |
| Personnel qualified | ☐ |
| Avalanche assessment complete | ☐ |
| Targets identified | ☐ |
| Exclusion zones established | ☐ |
| Highway/area closure confirmed | ☐ |
| Communication tested | ☐ |
| Aircraft pre-flight complete | ☐ |
| Release mechanism tested | ☐ |
| Explosives inventory confirmed | ☐ |

---

## ZONE CLEARANCE CONFIRMATION

Before EACH deployment:
1. Request "Zone clear?" from controller
2. Receive "Zone clear" confirmation
3. Document time of clearance
4. Proceed only with clearance

---

## DEPLOYMENT SEQUENCE

1. **Position** - Stable hover over target
2. **Confirm** - Zone clear, ready to deploy
3. **Arm** - If applicable to system
4. **Deploy** - Release explosive
5. **Confirm** - Release confirmed
6. **Depart** - Clear blast area immediately
7. **Verify** - Detonation (visual/audio)
8. **Document** - Location, time, result

---

## COMMUNICATION CALLS

| Call | Meaning |
|:-----|:--------|
| "Zone clear?" | Requesting clearance |
| "Zone clear" | Clearance confirmed |
| "Hold" | Do NOT deploy |
| "Arming" | Arming explosive |
| "Deploying" | Releasing explosive |
| "Away" | Explosive released |
| "Clear" | Aircraft clear of blast |
| "Good det" | Detonation confirmed |
| "Misfire" | No detonation |
| "Aborting" | Returning without deployment |
| "RTB" | Returning to base |

---

## MISFIRE PROCEDURE

### Immediate Actions

1. **MARK** - Record GPS coordinates
2. **DO NOT APPROACH**
3. **NOTIFY** - Blaster immediately
4. **DOCUMENT** - Type, serial, location, time

### Wait Times

Per blaster direction - typically:
- Electronic detonators: 30 minutes
- Safety fuse: 1 hour
- Unknown: As directed by blaster

### Never:
- Approach until blaster clears
- Attempt to recover without blaster
- Forget to mark location

---

## EMERGENCY PROCEDURES

### Lost Link with Explosives

1. Aircraft follows failsafe
2. Alert all personnel
3. Note last known position
4. Do NOT approach landing area
5. Wait for blaster assessment

### Crash with Explosives

1. **EVACUATE** - Minimum 100m
2. Mark location (from distance)
3. Notify blaster
4. Do NOT approach
5. Wait for qualified assessment
6. Document incident

### Weather Deterioration

1. Complete current drop if safe
2. Do NOT deploy if unsafe
3. Return with unexploded ordnance
4. Secure explosives properly
5. Wait for conditions

### Accidental Release

1. Note location immediately
2. Clear area
3. Notify blaster
4. Assess (detonation or misfire?)
5. Follow misfire procedures if not detonated

---

## EXPLOSIVES ACCOUNTABILITY

### Load
- Count each explosive
- Record serial numbers
- Document load time
- Blaster signs

### During Operations
- Track each deployment
- Record results
- Note any issues

### End of Mission
- Count deployed
- Count returned
- Total must equal load
- Investigate any discrepancy
- Return unused to storage
- Complete documentation

---

## WEATHER LIMITS

| Condition | Limit |
|:----------|:------|
| Visibility | Visual on target required |
| Wind | Per aircraft limits |
| Precipitation | Per operational needs |
| Lightning | **NO-GO within 30 km** |
| Cloud | Clear of target area |

---

## TSB/REGULATORY REPORTING

Report immediately if:
- Injury from explosives
- Uncontrolled detonation
- Lost explosives
- Aircraft incident with explosives
- Any serious occurrence

---

**WHEN IN DOUBT - DO NOT DEPLOY**

---

**Document Control:** QRC-AVALANCHE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-BATTERY Battery Safety',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# BATTERY SAFETY

---

| **QRC Number** | QRC-BATTERY |
|:---------------|:------------|
| **Version** | v5.0 |

---

## LITHIUM BATTERY HAZARDS

- **FIRE** - Burns hot, hard to extinguish
- **EXPLOSION** - Thermal runaway
- **TOXIC FUMES** - Harmful gases
- **CHEMICAL BURNS** - Electrolyte contact

---

## DAILY INSPECTION

### BEFORE USE - CHECK FOR:
- [ ] Physical damage (dents, punctures)
- [ ] Swelling or puffing
- [ ] Damaged connectors
- [ ] Exposed wires
- [ ] Unusual odor
- [ ] Previous incidents

### DO NOT USE IF:
- Any swelling detected
- Physical damage visible
- Connector damaged
- Hot to touch (unexpected)
- Exceeded cycle limit

---

## CHARGING

### SAFE CHARGING
- [ ] Use manufacturer charger
- [ ] Charge on fireproof surface
- [ ] LiPo bag or metal container
- [ ] Away from flammables
- [ ] Never leave unattended
- [ ] Room temperature (15-25°C)

### CHARGING DON''Ts
- Don''t charge damaged batteries
- Don''t charge immediately after flight (let cool)
- Don''t charge below 0°C
- Don''t exceed charge rate
- Don''t charge overnight unattended

---

## STORAGE

### SHORT TERM (Days)
- 40-60% charge (storage mode)
- Room temperature
- Away from heat sources
- Away from flammables
- In LiPo bag or fireproof container

### LONG TERM (Weeks/Months)
- 40-50% charge
- Check monthly
- Temperature controlled area
- Separate from aircraft
- Document storage date

### STORAGE DON''Ts
- Don''t store fully charged
- Don''t store fully depleted
- Don''t store in vehicle (temp extremes)
- Don''t store in direct sunlight

---

## FLIGHT LIMITS

| Check | Limit |
|:------|:------|
| Min charge for takeoff | 90-100% |
| Land warning | 30% |
| Critical warning | 20% |
| Cycles per day | Per manufacturer |
| Rest between flights | 10-15 min minimum |

---

## TRANSPORT

### IN VEHICLE
- [ ] Fireproof container
- [ ] Secured against movement
- [ ] Away from heat sources
- [ ] Climate controlled if possible

### BY AIR
- Check airline regulations
- Usually carry-on only
- Terminals protected
- Watt-hour limits apply
- Declare to airline

---

## EMERGENCY - BATTERY FIRE

### IF FIRE STARTS

1. **EVACUATE** - Clear all people
2. **DO NOT** use water (initial)
3. **ISOLATE** - Move to safe area if possible
4. **SAND/DRY CHEMICAL** - Smother flames
5. **VENTILATE** - Toxic fumes
6. **CALL 911** - For significant fire
7. **MONITOR** - May reignite

### AFTER FIRE
- Let cool completely
- Do not touch
- Document incident
- Dispose as hazardous waste

---

## BATTERY DAMAGE

### IF BATTERY DAMAGED
1. **ISOLATE** - Move to safe area
2. **MONITOR** - Watch for 30+ minutes
3. **DO NOT CHARGE** - Ever again
4. **QUARANTINE** - Fireproof container
5. **DISPOSE** - Hazardous waste facility

### IF SWELLING DETECTED
1. Stop use immediately
2. Do not puncture
3. Place in LiPo bag
4. Monitor for 24 hours
5. Dispose properly

---

## DISPOSAL

### PROPER DISPOSAL
- Battery recycling facility
- Electronics retailer program
- Hazardous waste collection
- Fire department drop-off

### BEFORE DISPOSAL
- Discharge to safe level (storage charge)
- Tape terminals
- Transport in fireproof container
- Do not place in regular garbage

---

## TEMPERATURE EFFECTS

| Temperature | Effect |
|:------------|:-------|
| <0°C | Reduced capacity, discharge rate |
| 0-5°C | Pre-warm before use |
| 5-35°C | Normal operation |
| >35°C | Reduced lifespan |
| >45°C | Risk increases |
| >60°C | Thermal runaway risk |

---

## RECORD KEEPING

Log for each battery:
- ID number
- Purchase date
- Cycle count
- Issues/incidents
- Storage location
- Retirement date

---

**When in doubt, retire the battery**

---

**Document Control:** QRC-BATTERY v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-BVLOS BVLOS Operations',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# BVLOS OPERATIONS (L1C)

---

| **QRC Number** | QRC-BVLOS |
|:---------------|:----------|
| **Version** | v5.0 |

---

## L1C DECLARATION CONDITIONS

All conditions must be met for L1C BVLOS:

### LOCATION
- [ ] Away from built-up areas
- [ ] Away from people (min 30m lateral)
- [ ] Over land only (not water)
- [ ] Not over populated areas

### ALTITUDE
- [ ] Below 122m (400 ft) AGL
- [ ] Maintain obstacle clearance

### AIRCRAFT
- [ ] Max 25 kg MTOW
- [ ] Registered with Transport Canada
- [ ] Serviceable condition

### PILOT
- [ ] Advanced certificate held
- [ ] Company BVLOS authorization
- [ ] Site-specific training
- [ ] Current on aircraft type

### OPERATIONAL
- [ ] VLOS capable VO, OR
- [ ] Ground-based DAA, OR
- [ ] Airborne DAA system

---

## DETECT AND AVOID (DAA)

### VISUAL OBSERVER METHOD
- VO positioned to see aircraft AND approach airspace
- Continuous communication with PIC
- VO scans for traffic
- Standard calls used

### GROUND-BASED DAA
- ADS-B receiver monitoring
- Radar system (if equipped)
- Integrated alerting
- PIC monitors display

### AIRBORNE DAA
- Aircraft-mounted system
- Automatic detection
- Alert provided to PIC
- Avoidance maneuver capability

---

## PRE-FLIGHT (BVLOS-SPECIFIC)

- [ ] L1C conditions verified
- [ ] DAA method confirmed
- [ ] Communication check (PIC-VO/systems)
- [ ] Lost link programmed
- [ ] Return-to-home verified
- [ ] Airspace clear
- [ ] Flight path obstacles mapped
- [ ] Emergency landing sites identified

---

## LOST LINK PROCEDURE

| Aircraft Setting | Action |
|:-----------------|:-------|
| **Hover in place** | Wait for relink |
| **Return to Home** | Auto-return activated |
| **Land in place** | Descend and land |
| **Continue mission** | Complete then RTH |

**Set before flight based on conditions**

---

## IF TRAFFIC DETECTED

1. **ANNOUNCE** - "Traffic, [direction/position]"
2. **ASSESS** - Collision risk?
3. **AVOID** - Descend / turn / land
4. **YIELD** - Manned aircraft has right-of-way
5. **RESUME** - Only when clear

---

## COMMUNICATION STANDARDS

### WITH VISUAL OBSERVER

| Call | Meaning |
|:-----|:--------|
| "Traffic [dir]" | Manned aircraft detected |
| "Clear" | No traffic observed |
| "Lost visual" | Cannot see RPAS |
| "Landing site clear" | Emergency landing OK |

### RADIO DISCIPLINE

- Clear, concise calls
- Read back critical info
- Acknowledge all traffic calls
- Report any concerns immediately

---

## EMERGENCY PROCEDURES

### FLYAWAY
1. Attempt RTH command
2. Monitor telemetry
3. Note last position
4. Warn if entering controlled airspace
5. Report occurrence

### COMMUNICATION FAILURE (PIC-VO)
1. Execute pre-briefed contingency
2. Default: Return to Home
3. VO maintains traffic watch
4. Re-establish communication
5. Document occurrence

### MANNED AIRCRAFT CONFLICT
1. Immediate descent (if possible)
2. Land if necessary
3. Yield in all cases
4. Document encounter

---

## DOCUMENTATION REQUIRED

- [ ] L1C Declaration filed
- [ ] Flight plan/mission documented
- [ ] DAA method recorded
- [ ] VO positions (if applicable)
- [ ] Communication log
- [ ] Occurrences noted

---

## LIMITS SUMMARY

| Parameter | Limit |
|:----------|:------|
| Max altitude | 122m (400 ft) AGL |
| Max weight | 25 kg |
| Distance from people | 30m lateral |
| Certificate required | Advanced |
| Location | Non-built-up areas |

---

## NO-GO FOR BVLOS

- Built-up area
- Over people
- Over water
- DAA not functional
- Comm not reliable
- PIC not current
- L1C conditions not met

---

**When in doubt, maintain VLOS**

---

**Document Control:** QRC-BVLOS v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-DELIVERY Cargo Delivery',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# CARGO DELIVERY OPERATIONS

---

| **QRC Number** | QRC-DELIVERY |
|:---------------|:-------------|
| **Version** | v5.0 |

---

## DJI FLYCART 30 QUICK SPECS

| Parameter | Dual Battery | Single Battery |
|:----------|:-------------|:---------------|
| Max payload | 30 kg | 40 kg |
| Max range (empty) | 28 km | 16 km |
| Max range (full load) | 16 km | 8 km |
| Max speed | 20 m/s | 20 m/s |
| Max wind | 12 m/s | 12 m/s |
| Temp range | -20°C to +45°C | -20°C to +45°C |

---

## PRE-FLIGHT CHECKLIST

### Planning
- [ ] Cargo weight verified (scale)
- [ ] Within payload limit
- [ ] Route planned
- [ ] Delivery site confirmed
- [ ] Ground contact established
- [ ] Battery capacity adequate

### Loading
- [ ] Cargo centered
- [ ] Cargo secured
- [ ] No movement when tilted
- [ ] Lid/hook secured
- [ ] CG verified

### Aircraft
- [ ] Pre-flight inspection complete
- [ ] Batteries installed/charged
- [ ] Delivery system tested
- [ ] Release mechanism functional
- [ ] GPS acquired
- [ ] Failsafe set

---

## WEIGHT LIMITS

| Configuration | Maximum Total Weight |
|:--------------|:---------------------|
| Dual battery mode | Aircraft + 30 kg cargo |
| Single battery mode | Aircraft + 40 kg cargo |

**NEVER exceed payload limits**

---

## DELIVERY MODES

### CARGO MODE (Direct Landing)

1. Coordinate with ground
2. Confirm zone clear
3. Approach slowly
4. Land smoothly
5. Ground crew unloads
6. Confirm cargo removed
7. Takeoff when clear

### WINCH MODE (Lowered Delivery)

1. Coordinate with ground
2. Confirm zone clear
3. Hover at deployment altitude
4. Deploy winch
5. Lower cargo controlled
6. Confirm on ground
7. Release hook
8. Retract winch
9. Confirm stowed
10. Depart

---

## WEATHER LIMITS

| Condition | Limit |
|:----------|:------|
| Wind | 12 m/s (43 km/h) |
| Gusts | 15 m/s |
| Visibility | ≥3 km |
| Precipitation | Light or none |
| Temperature | -20°C to +45°C |

---

## HEAVY LOAD CONSIDERATIONS

When flying with heavy cargo:
- Reduced climb rate
- Reduced maneuverability
- Higher power consumption
- Shorter flight time
- More affected by wind
- Plan conservative margins

---

## ABORT CRITERIA

**Abort delivery if:**
- Battery below planned threshold
- Weather exceeding limits
- Delivery zone not clear
- Loss of communication
- Aircraft performance abnormal
- Cargo shift suspected

---

## EMERGENCY PROCEDURES

### Cargo Shift In Flight

1. Reduce speed immediately
2. Assess controllability
3. Proceed to nearest safe landing
4. Do NOT continue to delivery
5. Land and inspect

### Unable to Reach Destination

1. Assess remaining battery
2. Identify nearest safe landing
3. Land with cargo
4. Secure site
5. Coordinate alternate delivery

### Winch Won''t Deploy

1. Attempt alternate command
2. If no response - return to base
3. Land with cargo attached
4. Inspect and troubleshoot

### Winch Won''t Retract

1. Confirm cargo released
2. Return to base carefully
3. Account for cable drag
4. Land and troubleshoot

---

## COMMUNICATION CALLS

| Call | Meaning |
|:-----|:--------|
| "En route" | Departing for delivery site |
| "2 minutes out" | Approaching delivery |
| "Overhead" | Above delivery zone |
| "Zone clear?" | Request clearance confirmation |
| "Clear" | Zone confirmed clear |
| "Descending" | Beginning approach |
| "On ground" | Landed/cargo delivered |
| "Cargo released" | Winch delivery complete |
| "Departing" | Leaving delivery site |
| "Returning" | En route to base |

---

## SECTOR-SPECIFIC REMINDERS

### Energy Sector
- Coordinate with site operations
- Avoid hot work areas
- Check for H2S if applicable
- Follow site PPE requirements

### Mining
- Coordinate with blasting schedule
- Avoid active mining areas
- Watch for dust/visibility
- Follow site procedures

### Urban/Infrastructure
- Advanced cert required
- Enhanced site control
- Watch for power lines
- Manage bystanders

---

## EMERGENCY CONTACTS

| Contact | Number |
|:--------|:-------|
| Operations Manager | [INSERT] |
| Base/Dispatch | [INSERT] |
| Emergency | 911 |

---

**Document Control:** QRC-DELIVERY v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-EMERGENCY Emergency Procedures',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# EMERGENCY PROCEDURES

---

| **QRC Number** | QRC-EMERGENCY |
|:---------------|:--------------|
| **Version** | v5.0 |

---

## EMERGENCY CONTACTS

| Service | Number |
|:--------|:-------|
| **Emergency Services** | **911** |
| Operations Manager | [INSERT] |
| Accountable Executive | [INSERT] |
| Poison Control | 1-800-567-8911 |
| WorkSafeBC | 1-888-621-7233 |
| TSB (Aviation) | 1-800-387-3557 |

---

## RPAS EMERGENCIES

### FLYAWAY / LOSS OF CONTROL

1. **ANNOUNCE** "Flyaway" to crew
2. **ATTEMPT** Return-to-Home activation
3. **ATTEMPT** Manual control input
4. **TRACK** visual on aircraft
5. **NOTE** last known position
6. **WARN** persons in flight path
7. **REPORT** if enters controlled airspace
8. **DOCUMENT** and report occurrence

### LOSS OF VISUAL CONTACT

1. **ANNOUNCE** "Lost visual"
2. **HOLD** current position (if able)
3. **CHECK** telemetry for position
4. **VO** attempt to reacquire
5. **INITIATE** Return-to-Home if not reacquired
6. **LAND** when visual regained or at home point

### LOSS OF LINK

1. **ANNOUNCE** "Lost link"
2. **WAIT** for aircraft automatic response
3. **VERIFY** failsafe activating
4. **CLEAR** landing area
5. **BE READY** to take control if link restores

### LOW BATTERY CRITICAL

1. **ACKNOWLEDGE** warning
2. **INITIATE** immediate landing
3. **SELECT** nearest safe landing spot
4. **CLEAR** landing area
5. **LAND** with reserve remaining

---

## MEDICAL EMERGENCIES

### SERIOUS INJURY

1. **SCENE SAFE** - Ensure safe to approach
2. **CALL 911** immediately
3. **DO NOT MOVE** unless in danger
4. **CONTROL BLEEDING** with direct pressure
5. **KEEP WARM** and still
6. **MONITOR** breathing
7. **NOTIFY** Operations Manager

### CARDIAC ARREST

1. **CALL 911**
2. **START CPR** - 30 compressions : 2 breaths
3. **SEND** for AED if available
4. **CONTINUE** until help arrives

### HEAT EMERGENCY

1. **MOVE** to shade/cool area
2. **COOL** with water, fanning
3. **HYDRATE** if conscious
4. **CALL 911** if confusion, collapse, no sweat
5. **MONITOR** closely

### COLD EMERGENCY

1. **MOVE** to warm shelter
2. **REMOVE** wet clothing
3. **INSULATE** from cold
4. **WARM** gradually (blankets, warm drinks if conscious)
5. **CALL 911** if severe shivering, confusion

---

## ENVIRONMENTAL EMERGENCIES

### FIRE

1. **EVACUATE** area immediately
2. **CALL 911**
3. **FIGHT** small fires only if safe
4. **ACCOUNT** for all personnel
5. **NOTIFY** Operations Manager

### SPILL

1. **STOP** source if safe
2. **CONTAIN** with available materials
3. **PREVENT** entry to drains/water
4. **NOTIFY** Operations Manager
5. **DO NOT** use water on battery fires

### WILDLIFE ENCOUNTER (BEAR)

**If bear is unaware:**
- Back away slowly
- Do not run
- Leave area

**If bear approaches:**
- Stand your ground
- Appear large, speak calmly
- Bear spray ready
- NEVER run

**If bear attacks:**
- **Black bear:** Fight back
- **Grizzly:** Play dead (protect face, neck)
- **If attack continues:** Fight back

---

## AIRCRAFT EMERGENCY (MANNED)

### IF AIRCRAFT APPROACHING

1. **ANNOUNCE** "Traffic, [direction]"
2. **DESCEND** immediately
3. **LAND** if able
4. **YIELD** right of way
5. **TRACK** aircraft until clear

---

## PERSON OVERBOARD (MARINE)

1. **SHOUT** "Person overboard!"
2. **POINT** continuously at person
3. **THROW** flotation device
4. **MANEUVER** for recovery
5. **DO NOT** jump in after person
6. **CALL** for help on VHF Ch 16

---

## POST-EMERGENCY

1. **ACCOUNT** for all personnel
2. **SECURE** scene
3. **PRESERVE** evidence
4. **DOCUMENT** immediately
5. **REPORT** per procedure
6. **DEBRIEF** when appropriate

---

## REGULATORY REPORTING

| Occurrence | Notify |
|:-----------|:-------|
| Injury requiring medical treatment | WorkSafeBC, Supervisor |
| Mid-air collision | TSB, Transport Canada |
| Collision with person | TSB, Transport Canada |
| Flyaway/lost aircraft | Transport Canada |

---

**Keep this card accessible during all operations**

---

**Document Control:** QRC-EMERGENCY v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-FIRSTAID First Aid Quick Reference',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# FIRST AID QUICK REFERENCE

---

| **QRC Number** | QRC-FIRSTAID |
|:---------------|:-------------|
| **Version** | v5.0 |

---

## EMERGENCY RESPONSE PRIORITIES

### D-R-A-B-C

| Step | Action |
|:-----|:-------|
| **D - DANGER** | Is scene safe? |
| **R - RESPONSE** | Is person responsive? |
| **A - AIRWAY** | Is airway clear? |
| **B - BREATHING** | Is person breathing? |
| **C - CIRCULATION** | Signs of life? Severe bleeding? |

---

## EMERGENCY NUMBERS

| Service | Number |
|:--------|:-------|
| **Emergency Services** | **911** |
| Poison Control | 1-800-567-8911 |
| WorkSafeBC | 1-888-621-7233 |

---

## LIFE-THREATENING CONDITIONS

### CARDIAC ARREST (No pulse/breathing)

1. **CALL 911**
2. **Start CPR:**
   - 30 compressions (hard, fast, 5-6 cm deep)
   - 2 rescue breaths
   - Repeat
3. **Use AED** if available
4. **Continue** until help arrives

### SEVERE BLEEDING

1. **Apply direct pressure** (use barrier)
2. **Maintain pressure** continuously
3. **If soaking through**, add more dressing
4. **Elevate** if possible
5. **Call 911** if severe
6. **Tourniquet** only if life-threatening limb bleeding

### CHOKING (Conscious adult)

1. Ask "Are you choking?"
2. Give **5 back blows**
3. Give **5 abdominal thrusts**
4. Repeat until cleared or unconscious
5. If unconscious, start CPR

---

## COMMON INJURIES

### FRACTURES/SPRAINS

- **Immobilize** - Don''t move unnecessarily
- **Ice** - Apply cold pack (wrapped)
- **Elevate** if possible
- **Seek medical care**

### BURNS

| Burn Type | Treatment |
|:----------|:----------|
| Minor (small, superficial) | Cool water 10+ min, cover |
| Serious (large, deep, face) | Cool, cover, call 911 |
| Chemical | Flush with water 20+ min |
| Electrical | Don''t touch until power off |

### CUTS/WOUNDS

1. Clean wound if minor
2. Apply pressure to stop bleeding
3. Cover with clean dressing
4. Seek care if deep, dirty, or won''t stop

### EYE INJURY

- **Chemical**: Flush with water 15-20 min
- **Object in eye**: Don''t rub, seek care
- **Struck**: Ice pack, seek care

---

## ENVIRONMENTAL

### HEAT EXHAUSTION

**Signs:** Heavy sweating, weakness, nausea, headache

1. Move to cool area
2. Remove excess clothing
3. Cool with water/fans
4. Sip water
5. Rest

### HEAT STROKE

**Signs:** Hot dry skin, confusion, collapse

1. **CALL 911**
2. Cool rapidly (water, ice, fanning)
3. Move to shade
4. Do not give fluids
5. Monitor closely

### HYPOTHERMIA

**Signs:** Shivering, confusion, drowsiness

1. Move to warm area
2. Remove wet clothing
3. Insulate (blankets)
4. Warm drinks (if conscious)
5. Handle gently
6. **Call 911** if severe

### FROSTBITE

**Signs:** White/gray skin, numbness

1. Move to warm area
2. Warm affected area gradually
3. Do NOT rub
4. Do NOT use hot water
5. Protect from refreezing
6. Seek medical care

---

## SHOCK

**Signs:** Pale, cold, sweaty, rapid breathing, weak pulse

1. **Call 911**
2. Lay person down
3. Elevate legs (if no spine injury)
4. Keep warm (blanket)
5. Do not give food/drink
6. Monitor breathing

---

## MEDICAL EMERGENCIES

### ALLERGIC REACTION (Severe/Anaphylaxis)

**Signs:** Swelling, hives, difficulty breathing

1. **Call 911**
2. **Use EpiPen** if available:
   - Remove cap
   - Jab into outer thigh (through clothing OK)
   - Hold 10 seconds
3. Have person lie down
4. Monitor airway

### DIABETIC EMERGENCY

| Signs | Action |
|:------|:-------|
| Low blood sugar (shaky, confused, sweaty) | Give sugar if conscious |
| High blood sugar (thirsty, frequent urination) | Seek medical care |
| Unconscious | Call 911, do not give anything by mouth |

### SEIZURE

1. **Protect** from injury (clear area)
2. **Time** the seizure
3. **Do NOT** put anything in mouth
4. **Do NOT** restrain
5. Position on side when stopped
6. **Call 911** if >5 min, first seizure, or injury

---

## FIRST AID KIT CHECK

Kit should contain:
- [ ] Sterile dressings (various sizes)
- [ ] Bandages and tape
- [ ] Gloves (multiple pairs)
- [ ] CPR mask/shield
- [ ] Triangular bandages
- [ ] Scissors and tweezers
- [ ] Antiseptic wipes
- [ ] Cold packs
- [ ] First aid guide

---

## DOCUMENTATION

After any first aid:
- Record what happened
- Record treatment given
- Record outcome
- Report to supervisor
- File incident report if required

---

**When in doubt, call 911**

---

**Document Control:** QRC-FIRSTAID v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-FLHA FLHA Quick Guide',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# FLHA QUICK GUIDE

---

| **QRC Number** | QRC-FLHA |
|:---------------|:---------|
| **Version** | v5.0 |

---

## WHEN TO DO FLHA

- **START** of each work day
- **BEFORE** starting task
- **WHEN** conditions change
- **WHEN** moving to new location
- **AFTER** incidents or near misses

---

## 5-STEP FLHA PROCESS

### STEP 1: STOP

- Pause before starting
- Look around the site
- Think about the work

### STEP 2: THINK

- What could go wrong?
- What are the hazards?
- What could cause harm?

### STEP 3: ASSESS

- How likely is harm?
- How severe could it be?
- Who is at risk?

### STEP 4: CONTROL

- What controls are needed?
- Can hazard be eliminated?
- Can risk be reduced?

### STEP 5: PROCEED

- All hazards controlled?
- Everyone understands?
- Safe to proceed?

---

## COMMON HAZARDS TO CHECK

### ENVIRONMENTAL
- [ ] Weather (wind, temp, precip)
- [ ] Terrain (slopes, water, unstable)
- [ ] Wildlife
- [ ] Visibility

### PHYSICAL
- [ ] Power lines / electrical
- [ ] Traffic / vehicles
- [ ] Obstacles
- [ ] Noise

### OPERATIONAL
- [ ] Equipment condition
- [ ] Battery status
- [ ] Airspace
- [ ] Bystanders

### HUMAN
- [ ] Fatigue
- [ ] Fit for duty
- [ ] Training/competency
- [ ] Communication

---

## RISK RATING

| | **SEVERITY** |
|:-|:-------------|
| **LIKELIHOOD** | Low | Medium | High |
| Almost Certain | M | H | H |
| Likely | M | M | H |
| Possible | L | M | M |
| Unlikely | L | L | M |
| Rare | L | L | L |

### ACTIONS BY RISK

| Risk | Action |
|:-----|:-------|
| **HIGH** | STOP - Additional controls required |
| **MEDIUM** | Proceed with controls in place |
| **LOW** | Proceed with awareness |

---

## HIERARCHY OF CONTROLS

**Most Effective → Least Effective**

1. **ELIMINATE** - Remove the hazard
2. **SUBSTITUTE** - Replace with less hazardous
3. **ENGINEERING** - Isolate people from hazard
4. **ADMINISTRATIVE** - Change work practices
5. **PPE** - Protect the worker

---

## CONTROL EXAMPLES

| Hazard | Control Example |
|:-------|:----------------|
| High wind | Postpone / reduce altitude |
| Power lines | Stand-off distance / marking |
| Traffic | Barriers / spotter |
| Wildlife | Bear spray / avoidance |
| Heat | Water breaks / shade |
| Cold | Warm-up breaks / layers |
| Fatigue | Rest / stop work |

---

## IF CONDITIONS CHANGE

1. **STOP** work
2. **REASSESS** hazards
3. **ADD** new controls if needed
4. **UPDATE** FLHA
5. **BRIEF** crew on changes
6. **PROCEED** only when safe

---

## DOCUMENT

Record on FRM-FLHA:
- Date, time, location
- Hazards identified
- Controls applied
- Personnel signatures
- Changes during work

---

## RED FLAGS - STOP WORK

- Uncontrolled hazard
- Missing PPE
- Worker not fit for duty
- Equipment defect
- Weather exceeds limits
- Unexpected condition
- Anyone uncomfortable

---

**If you can''t control it, don''t do it**

---

**Document Control:** QRC-FLHA v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-PREFLIGHT Pre Flight Quick Reference',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# PRE-FLIGHT QUICK REFERENCE

---

| **QRC Number** | QRC-PREFLIGHT |
|:---------------|:--------------|
| **Version** | v5.0 |

---

## PRE-FLIGHT FLOW

### 1. PLANNING ✓

- [ ] Weather checked and acceptable
- [ ] NOTAMs reviewed
- [ ] Airspace verified (authorization if needed)
- [ ] Site survey complete
- [ ] Batteries charged
- [ ] Equipment packed

### 2. SITE ARRIVAL ✓

- [ ] FLHA completed
- [ ] Fit for duty confirmed (all crew)
- [ ] Hazards identified and controlled
- [ ] Emergency plan established
- [ ] Communication confirmed
- [ ] PPE donned

### 3. SETUP ✓

- [ ] Takeoff/landing area clear
- [ ] Wind direction/speed noted
- [ ] Obstacles identified
- [ ] Crew positions established
- [ ] Equipment unpacked and organized

### 4. AIRCRAFT INSPECTION ✓

**Airframe:**
- [ ] Frame - no damage
- [ ] Arms - secure
- [ ] Landing gear - intact
- [ ] Fasteners - tight

**Propellers:**
- [ ] No chips, cracks, damage
- [ ] Correct orientation
- [ ] Securely attached

**Battery:**
- [ ] Charged (check voltage)
- [ ] No swelling
- [ ] Secure in mount

**Payload:**
- [ ] Secure
- [ ] Functional
- [ ] Within weight limit

### 5. CONTROLLER ✓

- [ ] Charged
- [ ] Antennas positioned
- [ ] Display visible
- [ ] Sticks centered
- [ ] Switches correct

### 6. POWER UP ✓

**Sequence: Controller FIRST, then Aircraft**

- [ ] Link established
- [ ] GPS acquired (min 8+ sats)
- [ ] Compass calibrated (if needed)
- [ ] Home point set
- [ ] Telemetry displaying
- [ ] Control response verified
- [ ] Failsafe settings confirmed
- [ ] RTH altitude set
- [ ] No error messages

### 7. FINAL CHECKS ✓

- [ ] VO positioned (if applicable)
- [ ] Crew briefed
- [ ] Communication confirmed
- [ ] Emergency procedures reviewed
- [ ] Sterile area established
- [ ] All clear for takeoff

---

## GO / NO-GO

| ✓ GO | ✗ NO-GO |
|:-----|:--------|
| All checks pass | Any check fails |
| Weather within limits | Weather exceeds limits |
| Crew fit for duty | Crew fatigue/impairment |
| No equipment defects | Equipment defect |
| Authorization obtained | Authorization missing |
| Hazards controlled | Uncontrolled hazards |

---

## WEATHER LIMITS

| Condition | Limit |
|:----------|:------|
| Wind | ≤25 km/h (or aircraft limit) |
| Gusts | ≤35 km/h |
| Visibility | ≥1 km (Basic), ≥3 SM (Advanced) |
| Ceiling | As required for operation |
| Precipitation | Light or none |
| Lightning | NO-GO within 20 km |

---

## KEY NUMBERS

| Item | Value |
|:-----|:------|
| Max altitude (uncontrolled) | 122m / 400ft AGL |
| Min distance from people (Basic) | 30m horizontal |
| Min distance from people (Advanced) | 5m horizontal |
| Min battery for takeoff | ___% |
| RTH altitude | ___m |

---

## BEFORE EACH FLIGHT

- Battery ID logged
- Flight number recorded
- Weather current
- Area still clear
- Ready for takeoff

---

**Document Control:** QRC-PREFLIGHT v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-VOCALLS Visual Observer Standard Calls',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# VISUAL OBSERVER STANDARD CALLS

---

| **QRC Number** | QRC-VOCALLS |
|:---------------|:------------|
| **Version** | v5.0 |

---

## VO RESPONSIBILITIES

- Maintain visual contact with RPAS
- Scan for air traffic
- Scan for people/obstacles
- Communicate hazards to PIC
- Monitor site perimeter
- Support PIC situational awareness

---

## STANDARD CALLS

### TRAFFIC CALLS

| Call | Meaning |
|:-----|:--------|
| **"Traffic, [direction]"** | Manned aircraft spotted |
| **"Traffic, [direction], [distance], [altitude]"** | Detailed traffic report |
| **"Traffic, [direction], closing"** | Aircraft approaching |
| **"Traffic clear"** | No traffic observed |

**Example:** "Traffic, northwest, 2 km, low altitude, closing"

### RPAS STATUS CALLS

| Call | Meaning |
|:-----|:--------|
| **"Visual"** | Have visual on RPAS |
| **"Lost visual"** | Cannot see RPAS |
| **"RPAS [direction], [distance]"** | Position report |

### PEOPLE/OBSTACLE CALLS

| Call | Meaning |
|:-----|:--------|
| **"People, [direction]"** | Person entering area |
| **"Vehicle, [direction]"** | Vehicle approaching |
| **"Obstacle, [direction]"** | Obstacle in flight path |
| **"Clear"** | Area clear of people |

### ACTION CALLS

| Call | Meaning |
|:-----|:--------|
| **"Hold"** | Maintain current position |
| **"Continue"** | Resume operation |
| **"Land"** | Begin landing |
| **"Land now"** | Immediate landing required |
| **"Descend"** | Reduce altitude |
| **"Abort"** | Stop current action |

### STATUS CALLS

| Call | Meaning |
|:-----|:--------|
| **"Copy"** | Message received and understood |
| **"Say again"** | Repeat last message |
| **"Standby"** | Wait for response |
| **"Negative"** | No / Cannot comply |
| **"Affirm"** | Yes / Will comply |

---

## DIRECTION REFERENCE

Use **clock positions** relative to RPAS heading:
- 12 o''clock = directly ahead
- 3 o''clock = right
- 6 o''clock = behind
- 9 o''clock = left

Or use **compass directions**:
- North, South, East, West
- NE, NW, SE, SW

---

## COMMUNICATION PROTOCOL

### FORMAT FOR CALLS

**[WHO] - [WHAT] - [WHERE] - [ACTION]**

**Examples:**
- "Traffic, helicopter, 3 o''clock, 1 km, descend"
- "People, 2 persons, north edge, hold position"
- "Lost visual, RPAS was heading east"

### READ BACK CRITICAL INFO

PIC should read back:
- Traffic warnings
- Emergency commands
- Altitude/direction changes

**VO:** "Traffic, 2 o''clock, descending"
**PIC:** "Copy traffic 2 o''clock, descending and landing"

---

## POSITIONING

### VO SHOULD BE POSITIONED TO:
- See RPAS throughout flight
- See approach airspace for traffic
- Communicate clearly with PIC
- Not interfere with PIC operations

### CONSIDER:
- Sun position (avoid looking into sun)
- Wind direction
- Obstacles blocking view
- Communication range/clarity

---

## SCANNING TECHNIQUE

### FOR TRAFFIC
- Systematic scan pattern
- Cover all quadrants
- Focus on approach paths
- Listen for aircraft sounds

### FOR GROUND HAZARDS
- Periodic perimeter check
- Watch access points
- Monitor bystanders
- Note changing conditions

---

## IF LOST VISUAL

1. **CALL** "Lost visual, RPAS was [last position]"
2. **SEARCH** systematically
3. **PIC** should hold or initiate RTH
4. If **not reacquired**, land at home point
5. **NEVER** continue BVLOS without proper DAA

---

## EMERGENCY CALLS

| Situation | Call |
|:----------|:-----|
| Manned aircraft conflict | **"TRAFFIC! [direction] - LAND NOW!"** |
| Person in danger zone | **"PEOPLE! [location] - HOLD/LAND!"** |
| Lost RPAS | **"LOST VISUAL - INITIATE RTH"** |
| VO needs to leave post | **"VO LEAVING POST - HOLD OPERATIONS"** |

---

## FATIGUE AWARENESS

Signs you need a break:
- Difficulty concentrating
- Missing calls
- Losing track of RPAS
- Eyes straining
- Frequent blinking

**Call for break:** "Request relief" or "Need rotation"

---

## REMEMBER

- **CLEAR, CONCISE, CORRECT**
- **Speak up immediately for safety**
- **When in doubt, call it out**

---

**Document Control:** QRC-VOCALLS v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-WEATHER Weather Limits',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# WEATHER LIMITS

---

| **QRC Number** | QRC-WEATHER |
|:---------------|:------------|
| **Version** | v5.0 |

---

## FLIGHT WEATHER LIMITS

### WIND

| Aircraft Type | Sustained | Gusts |
|:--------------|:----------|:------|
| Multirotor (general) | 25 km/h | 35 km/h |
| Fixed-wing | Per aircraft specs | Per aircraft specs |
| Small/light aircraft | 15 km/h | 25 km/h |

**Always defer to aircraft-specific limits**

### VISIBILITY

| Operation Type | Minimum |
|:---------------|:--------|
| Basic | 1 km |
| Advanced | 3 SM (4.8 km) |
| VLOS | Must see aircraft clearly |

### PRECIPITATION

| Type | Guidance |
|:-----|:---------|
| None | ✓ Proceed |
| Light rain | Caution - most aircraft not rated |
| Moderate/heavy rain | ✗ NO-GO |
| Snow | ✗ NO-GO |
| Ice/freezing | ✗ NO-GO |

### LIGHTNING

| Distance | Action |
|:---------|:-------|
| >30 km | Monitor, proceed with caution |
| 20-30 km | Land and shelter |
| <20 km | **NO-GO / Suspend operations** |

---

## TEMPERATURE LIMITS

| Condition | Action |
|:----------|:-------|
| <0°C | Check battery performance, reduce capacity |
| <-10°C | Significant battery impact, pre-warm |
| <-20°C | **NO-GO** (unless aircraft rated) |
| >35°C | Monitor battery/motor temps |
| >40°C | **NO-GO** |

---

## CLOUD CEILING

| Operation | Minimum |
|:----------|:--------|
| Basic | N/A (stay VLOS) |
| Advanced | Per authorization |
| Night | Per SFOC |

**Always maintain required distance from cloud**

---

## HEAT INDEX (PERSONNEL)

| Heat Index | Risk | Action |
|:-----------|:-----|:-------|
| <27°C | Low | Normal operations |
| 27-32°C | Moderate | Water breaks |
| 32-40°C | High | Scheduled rest, hydration |
| 40-54°C | Very High | Limit exposure, frequent breaks |
| >54°C | Extreme | **Suspend work** |

---

## WIND CHILL (PERSONNEL)

| Wind Chill | Risk | Action |
|:-----------|:-----|:-------|
| 0 to -10°C | Low | Normal precautions |
| -10 to -25°C | Moderate | Skin exposure risk |
| -25 to -35°C | High | Frostbite risk in 10-30 min |
| -35 to -45°C | Very High | Frostbite risk in 5-10 min |
| <-45°C | Extreme | **Suspend outdoor work** |

---

## GO / NO-GO QUICK CHECK

| ✓ GO | ⚠️ CAUTION | ✗ NO-GO |
|:-----|:-----------|:--------|
| Wind <25 km/h | Wind 25-30 km/h | Wind >30 km/h |
| Vis >3 km | Vis 1-3 km | Vis <1 km |
| No precip | Very light mist | Rain/snow |
| Temp 5-30°C | Temp 0-5°C or 30-35°C | Temp <-10°C or >40°C |
| No lightning | Lightning >30 km | Lightning <20 km |

---

## WEATHER SOURCES

| Source | Best For |
|:-------|:---------|
| Environment Canada | Forecasts, warnings |
| Aviation Weather (NAV CANADA) | METARs, TAFs |
| On-site observation | Current conditions |
| Anemometer | Wind measurement |

---

## CONDITION CHANGES

If conditions deteriorate during operations:
1. **ASSESS** - Is it still safe?
2. **LAND** - If approaching limits
3. **SHELTER** - For severe weather
4. **WAIT** - For conditions to improve
5. **CANCEL** - If forecast shows no improvement

---

## BEAUFORT SCALE (VISUAL)

| Wind Speed | Indicators |
|:-----------|:-----------|
| <10 km/h | Smoke rises, leaves still |
| 10-20 km/h | Leaves rustle, flags stir |
| 20-30 km/h | Small branches move, flags extend |
| 30-40 km/h | Large branches sway, dust raised |
| >40 km/h | Trees sway, difficult to walk |

---

**When in doubt, wait it out**

---

**Document Control:** QRC-WEATHER v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-WILDLIFE Wildlife Safety',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# WILDLIFE SAFETY (BC)

---

| **QRC Number** | QRC-WILDLIFE |
|:---------------|:-------------|
| **Version** | v5.0 |

---

## COMMON BC WILDLIFE HAZARDS

| Animal | Risk Level |
|:-------|:-----------|
| Black bear | High |
| Grizzly bear | High |
| Cougar | Moderate |
| Moose | Moderate |
| Wolves | Low-Moderate |
| Coyotes | Low |

---

## BEAR SAFETY

### REQUIRED IN BEAR COUNTRY
- [ ] Bear spray (accessible)
- [ ] Bear awareness training
- [ ] Noise makers
- [ ] Food stored properly
- [ ] Working in pairs when possible

### PREVENTION
- Make noise while working
- Don''t surprise bears
- Keep site clean (no food odors)
- Store food in vehicles or containers
- Pack out all garbage
- Be aware of seasonal behavior

### BEAR SPRAY USE
- Range: 6-9 meters
- Aim slightly downward
- Short bursts
- Back away after discharge
- Only use when bear is charging/aggressive

---

## IF YOU SEE A BEAR

### BEAR AT DISTANCE (>100m)
1. Stay calm
2. Note bear''s location
3. Alter your route
4. Leave area
5. Report sighting

### BEAR APPROACHING

| Bear Type | Signs | Response |
|:----------|:------|:---------|
| **Curious** | Ears forward, calm | Stand tall, speak calmly, back away |
| **Defensive** | Ears back, jaw popping | Don''t run, speak softly, appear non-threatening |
| **Predatory** | Stalking, focused | Stand ground, be loud, prepare to fight |

### NEVER
- Never run (triggers chase)
- Never climb trees (black bears climb)
- Never approach
- Never feed
- Never get between bear and cubs

---

## IF BEAR ATTACKS

| Bear Type | Attack Type | Response |
|:----------|:------------|:---------|
| **Black Bear** | Usually predatory | FIGHT BACK |
| **Grizzly** | Usually defensive | PLAY DEAD |

### PLAY DEAD (Grizzly defensive attack)
- Lie face down
- Hands behind neck
- Elbows and legs spread (harder to flip)
- Stay still until bear leaves
- Wait several minutes before moving

### FIGHT BACK
- Use bear spray
- Strike nose, eyes
- Use any object as weapon
- Be loud and aggressive
- Never give up

**If any attack continues or is predatory - FIGHT BACK**

---

## COUGAR SAFETY

### IF YOU SEE A COUGAR

1. **STOP** - Don''t run
2. **FACE** the cougar
3. **APPEAR LARGE** - Raise arms, jacket
4. **SPEAK FIRMLY** - Loud, confident
5. **BACK AWAY SLOWLY** - Never turn back
6. **PICK UP CHILDREN** - Without bending down

### IF COUGAR ATTACKS
- **FIGHT BACK** aggressively
- Target eyes, nose
- Use anything as weapon
- Stay on feet if possible
- Never play dead with cougar

---

## MOOSE SAFETY

### WARNING SIGNS
- Ears back
- Hair raised on neck
- Licking lips
- Stomping

### IF MOOSE CHARGES
- **RUN** (moose rarely pursue far)
- Get behind tree or obstacle
- Curl up and protect head if knocked down
- Wait for moose to leave

---

## RPAS AND WILDLIFE

### DON''T
- Fly over wildlife
- Chase or harass animals
- Fly low near animals
- Approach nests/dens

### IF WILDLIFE APPROACHES FLIGHT AREA
- Land immediately if safe
- Cease operations
- Give animals space
- Resume when clear

---

## FIELD COMMUNICATIONS

| Call | Meaning |
|:-----|:--------|
| "Bear [direction/distance]" | Bear spotted |
| "Wildlife" | Animal in area |
| "Evacuate" | Leave immediately |
| "All clear" | Area safe |

---

## EMERGENCY NUMBERS

| Service | Number |
|:--------|:-------|
| Emergency | 911 |
| Conservation Officer | 1-877-952-7277 |
| RAPP (Report All Poachers) | 1-877-952-7277 |

---

## SEASONAL AWARENESS

| Season | Heightened Risk |
|:-------|:----------------|
| Spring | Bears emerging, mothers with cubs |
| Summer | Bears actively feeding |
| Fall | Bears hyperphagia (eating heavily) |
| Salmon runs | High bear activity near streams |

---

**Stay alert, make noise, carry spray**

---

**Document Control:** QRC-WILDLIFE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-WORKINGALONE Working Alone Protocol',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# WORKING ALONE PROTOCOL

---

| **QRC Number** | QRC-WORKINGALONE |
|:---------------|:-----------------|
| **Version** | v5.0 |

---

## WHEN DOES THIS APPLY?

Working alone means:
- No other worker at site
- No reliable means of getting help within reasonable time
- Assistance not readily available

---

## BEFORE WORKING ALONE

### SUPERVISOR APPROVAL
- [ ] Working alone authorized
- [ ] Risk assessment completed
- [ ] Check-in schedule established
- [ ] Contact person assigned

### PERSONAL PREPARATION
- [ ] Communication device tested
- [ ] Backup communication available
- [ ] First aid kit (OFA Level 1+ trained)
- [ ] Emergency supplies
- [ ] Personal safety equipment (bear spray if required)
- [ ] Fit for duty

### DOCUMENTATION
- [ ] Location shared with contact
- [ ] Itinerary documented
- [ ] Expected duration noted
- [ ] Emergency contacts listed

---

## CHECK-IN SCHEDULE

| Duration | Check-In Frequency |
|:---------|:-------------------|
| < 4 hours | Start, mid-point, end |
| 4-8 hours | Every 2 hours |
| Remote/high risk | Every 1 hour |

---

## CHECK-IN PROCEDURE

### STANDARD CHECK-IN
1. Contact designated person
2. Confirm location
3. Confirm status (OK, any concerns)
4. Confirm next check-in time
5. Confirm contact received check-in

### CHECK-IN CONTENT
Report:
- "I am at [location]"
- "I am OK" or "I have a concern: [explain]"
- "Next check-in at [time]"
- "Any changes to plan: [explain]"

---

## IF YOU MISS A CHECK-IN

### FOR THE WORKER
1. Check-in as soon as possible
2. Explain reason for delay
3. Confirm you are OK
4. Re-establish schedule

### FOR THE CONTACT PERSON
1. Attempt contact (call, text)
2. Wait 15 minutes
3. Attempt contact again
4. If no response, escalate:
   - Contact supervisor
   - Initiate search if warranted
   - Call emergency services if concerned

---

## EMERGENCY COMMUNICATION

| Method | When to Use |
|:-------|:------------|
| Cell phone | Primary contact |
| Satellite phone/device | No cell coverage |
| Radio | Team communication |
| Emergency beacon (PLB) | Life-threatening emergency |

---

## EMERGENCY WORDS

| Word | Meaning |
|:-----|:--------|
| **"MAYDAY"** | Immediate danger, send help |
| **"PAN PAN"** | Urgent but not immediate |
| **"NEED ASSISTANCE"** | Help required, not emergency |

**If using code word "MAYDAY" - contact will call emergency services immediately**

---

## IF EMERGENCY OCCURS

### YOU CAN CALL FOR HELP
1. Call 911 (if able)
2. Contact designated person
3. State location clearly
4. State nature of emergency
5. Stay on line if possible

### YOU CANNOT CALL
1. Activate emergency beacon (if equipped)
2. Stay in place if possible
3. Make yourself visible
4. Conserve energy

---

## RISK REDUCTION

### AVOID WHEN WORKING ALONE
- High-risk activities (heights, confined spaces)
- Using dangerous equipment
- Working in extreme weather
- Remote locations without reliable communication
- Operations when fatigued or unwell

### ALWAYS
- Tell someone where you are
- Have working communication
- Know your emergency plan
- Trust your instincts (if uncomfortable, stop)

---

## VEHICLE BREAKDOWN (ALONE)

1. Pull safely off road
2. Turn on hazards
3. Stay with vehicle (usually safest)
4. Contact designated person
5. Contact roadside assistance
6. Don''t accept rides from strangers

---

## END OF WORK

1. Final check-in with contact
2. Confirm leaving site
3. Confirm expected return time
4. Close out work plan

---

## CONTACT INFORMATION

| Contact | Name | Number |
|:--------|:-----|:-------|
| Primary Contact | | |
| Backup Contact | | |
| Supervisor | | |
| Emergency Services | | 911 |

---

## REMEMBER

- **Check in on time, every time**
- **When in doubt, don''t go alone**
- **No job is worth your life**

---

**Document Control:** QRC-WORKINGALONE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'REG-L1C Declaration Template',
  'policy',
  NULL,
  'Regulatory',
  '# AERIA SOLUTIONS LTD

# L1C DECLARATION

## BVLOS Operations Under Level 1 Complex Declaration

---

| Field | Value |
|:------|:------|
| **Document Number** | REG-L1C |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **RPOC Number** | 930355 |

---

## 1. Declaration

Aeria Solutions Ltd (RPOC #930355) declares that the following BVLOS operation meets all conditions specified in CAR 901.53.1 and TP 15263E for Level 1 Complex (L1C) operations.

---

## 2. Operator Information

| Field | Entry |
|:------|:------|
| **Company Name** | Aeria Solutions Ltd |
| **RPOC Number** | 930355 |
| **Accountable Executive** | Dustin Wales |
| **Operations Manager** | Geoff Mullins |
| **Contact Phone** | [INSERT] |
| **Contact Email** | [INSERT] |

---

## 3. Operation Details

| Field | Entry |
|:------|:------|
| **Operation Date(s)** | |
| **Operation Location** | |
| **GPS Coordinates** | Lat: _______ Long: _______ |
| **Operation Description** | |

---

## 4. L1C Conditions Compliance

I confirm that this operation will comply with ALL of the following L1C conditions:

### 4.1 Location Conditions

| Condition | ✓ |
|:----------|:--|
| Operation is over land (not water) | ☐ |
| Operation is NOT over or within a built-up area | ☐ |
| Operation is NOT over an aerodrome | ☐ |
| Operation is NOT in Class B, C, D airspace (or authorization obtained) | ☐ |

### 4.2 Altitude Conditions

| Condition | ✓ |
|:----------|:--|
| Maximum altitude is 122m (400 ft) AGL or below | ☐ |
| Obstacle clearance is maintained | ☐ |

### 4.3 Aircraft Conditions

| Condition | ✓ |
|:----------|:--|
| RPAS maximum takeoff weight is 25 kg or less | ☐ |
| RPAS is registered with Transport Canada | ☐ |
| RPAS registration number displayed | ☐ |
| RPAS is in serviceable condition | ☐ |

### 4.4 Distance from People

| Condition | ✓ |
|:----------|:--|
| Minimum 30m lateral distance from persons not involved in operation | ☐ |
| Persons involved aware of hazards and have consented | ☐ |

### 4.5 Pilot Conditions

| Condition | ✓ |
|:----------|:--|
| Pilot holds valid Advanced Certificate | ☐ |
| Pilot has completed company BVLOS training | ☐ |
| Pilot is current on aircraft type | ☐ |
| Pilot is fit for duty | ☐ |

### 4.6 Detect and Avoid

| Condition | ✓ |
|:----------|:--|
| A means of Detect and Avoid (DAA) is in place | ☐ |

DAA Method (select one):
| Method | ✓ | Details |
|:-------|:--|:--------|
| Visual Observer(s) | ☐ | VO position(s): |
| Ground-based DAA system | ☐ | System type: |
| Airborne DAA system | ☐ | System type: |

---

## 5. Aircraft Information

| Field | Entry |
|:------|:------|
| Aircraft Type | |
| Manufacturer | |
| Model | |
| Registration Number | |
| Serial Number | |
| MTOW | kg |

---

## 6. Crew Information

| Role | Name | Certificate # | Current? |
|:-----|:-----|:--------------|:---------|
| PIC | | | ☐ Yes |
| VO 1 | | | ☐ N/A |
| VO 2 | | | ☐ N/A |

---

## 7. Risk Assessment

A risk assessment has been conducted for this operation:

| Hazard Category | Addressed? |
|:----------------|:-----------|
| Airspace conflicts | ☐ |
| Ground hazards | ☐ |
| Weather limitations | ☐ |
| Equipment reliability | ☐ |
| Communication | ☐ |
| Emergency procedures | ☐ |
| Lost link procedure | ☐ |

---

## 8. Emergency Procedures

| Scenario | Procedure |
|:---------|:----------|
| Lost link | |
| Flyaway | |
| Manned aircraft conflict | |
| System failure | |

---

## 9. Declaration Signature

I, the undersigned, declare that:
1. This operation meets all L1C Declaration conditions
2. All information provided is accurate
3. The operation will be conducted in accordance with CARs Part IX
4. I accept responsibility for compliance with all regulatory requirements

| Field | Entry |
|:------|:------|
| **PIC Name** | |
| **PIC Certificate #** | |
| **Signature** | |
| **Date** | |

---

## 10. Operations Manager Approval

| Field | Entry |
|:------|:------|
| **Name** | |
| **Signature** | |
| **Date** | |

---

## 11. Post-Operation Record

| Field | Entry |
|:------|:------|
| Operation completed | ☐ Yes ☐ No |
| Duration | |
| Flights conducted | |
| Occurrences | ☐ None ☐ Yes (report attached) |
| PIC Sign-off | |
| Date | |

---

## Document Retention

This declaration shall be retained for 10 years per CARs 901.65.

---

**Document Control:** REG-L1C v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'REG-OCCURRENCE TSB TC Reporting Guide',
  'guide',
  NULL,
  'Regulatory',
  '# AERIA SOLUTIONS LTD

# TSB / TC OCCURRENCE REPORTING GUIDE

---

| Field | Value |
|:------|:------|
| **Document Number** | REG-OCCURRENCE |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## 1. Purpose

This guide outlines mandatory reporting requirements for aviation occurrences involving RPAS operations to the Transportation Safety Board (TSB) and Transport Canada (TC).

---

## 2. Reporting Contacts

| Authority | Contact | When |
|:----------|:--------|:-----|
| **TSB (Immediate)** | 1-800-387-3557 | Within 24 hours |
| **TSB Online** | bst-tsb.gc.ca | Non-urgent reports |
| **Transport Canada** | RPAS-SATP@tc.gc.ca | Follow-up reporting |
| **NAV CANADA** | CADORS.SCRNAV@navcanada.ca | Airspace occurrences |

---

## 3. Mandatory Immediate Reporting (TSB)

### Report to TSB Immediately (within 24 hours) if:

| Occurrence Type | Report? |
|:----------------|:--------|
| Collision or risk of collision with manned aircraft | **YES** |
| Injury requiring medical treatment or fatality | **YES** |
| RPAS collision causing significant injury | **YES** |
| Fire on board RPAS resulting in damage | **YES** |
| RPAS causes significant property damage | **YES** |
| Loss of control resulting in unplanned impact | Assess |

### Information Required for TSB Report

| Item | Details |
|:-----|:--------|
| Date and time (UTC and local) | |
| Location (coordinates, description) | |
| RPAS type and registration | |
| Operator name and RPOC | |
| Description of occurrence | |
| Injuries (if any) | |
| Damage (if any) | |
| Weather conditions | |
| PIC name and contact | |

---

## 4. Transport Canada Reporting

### Report to TC for:

| Occurrence | Timeframe |
|:-----------|:----------|
| Airspace violation | Immediately + written follow-up |
| Operation outside SFOC conditions | Immediately + written follow-up |
| RPOC certificate breach | As soon as possible |
| Near miss with manned aircraft | As soon as possible |

---

## 5. Occurrence Classification

### Level 1 - IMMEDIATE (TSB + TC)

| Event | Action |
|:------|:-------|
| Mid-air collision/near-miss with manned aircraft | Report immediately to TSB |
| Fatality or serious injury | Report immediately to TSB |
| RPAS enters controlled airspace without authorization | Report to TSB + NAV CANADA |

### Level 2 - URGENT (within 24-48 hours)

| Event | Action |
|:------|:-------|
| RPAS flyaway/lost control | Document and report to TC |
| Unauthorized entry to restricted area | Report to TC |
| Minor injury requiring first aid | Document internally |
| Property damage | Document and assess |

### Level 3 - ROUTINE (within 30 days)

| Event | Action |
|:------|:-------|
| Equipment malfunction (no incident) | Document internally |
| Near miss (ground) | Document internally |
| Policy/procedure deviation | Document and review |

---

## 6. TSB Report Form Content

### Section A: Identification
- Occurrence date and time
- Location (lat/long, description)
- Operator information
- RPAS information

### Section B: Description
- Sequence of events
- Flight phase
- Intentions/mission
- What went wrong

### Section C: Consequences
- Injuries (number, severity)
- Fatalities
- Damage description
- Third-party effects

### Section D: Environmental Factors
- Weather conditions
- Visibility
- Wind
- Light conditions

### Section E: Operational Factors
- Pilot experience
- Crew factors
- Equipment factors
- Procedures followed

---

## 7. Internal Reporting Process

### Step 1: Immediate Response
1. Secure scene (if safe)
2. Attend to injuries
3. Contact emergency services if needed
4. Preserve evidence

### Step 2: Initial Notification
1. Contact Operations Manager immediately
2. Determine reporting requirements
3. Initiate required reports

### Step 3: Documentation
1. Complete internal incident report (FRM-INCIDENT)
2. Gather statements
3. Preserve flight data
4. Photograph scene

### Step 4: External Reporting
1. TSB (if required) - within 24 hours
2. Transport Canada (if required)
3. NAV CANADA (if airspace-related)
4. WorkSafeBC (if injury)
5. Client notification (if applicable)

### Step 5: Follow-Up
1. Investigation
2. Corrective actions
3. Final reports
4. Lessons learned

---

## 8. Documentation Requirements

### Preserve and Document:

| Item | Action |
|:-----|:-------|
| Flight logs | Secure immediately |
| Telemetry data | Download and preserve |
| Photos/video | Capture and secure |
| Witness statements | Collect promptly |
| Weather data | Record |
| RPAS condition | Document before moving |
| Controller/GCS logs | Preserve |

---

## 9. Reporting Timeline Summary

| Occurrence | TSB | TC | Internal |
|:-----------|:----|:---|:---------|
| Collision with manned A/C | 24 hrs | ASAP | Immediate |
| Serious injury/fatality | 24 hrs | ASAP | Immediate |
| Airspace violation | 24 hrs | 24 hrs | Immediate |
| Flyaway | - | 48 hrs | 24 hrs |
| Minor incident | - | - | 24 hrs |
| Equipment failure | - | - | 24 hrs |

---

## 10. Regulatory References

| Reference | Description |
|:----------|:------------|
| TSB Regulations | Mandatory reporting criteria |
| CARs 901.65 | Record keeping requirements |
| CARs 901.70 | Occurrence reporting |
| CAR 901.71 | Notification requirements |

---

## 11. Quick Decision Tree

```
OCCURRENCE
    │
    ├── Injury/Fatality? ─── YES ──→ REPORT TSB (24hr) + WorkSafeBC
    │
    ├── Manned aircraft involved? ─── YES ──→ REPORT TSB (24hr)
    │
    ├── Airspace violation? ─── YES ──→ REPORT TSB + NAV CANADA
    │
    ├── Significant damage? ─── YES ──→ REPORT TSB (assess)
    │
    └── Other incident? ──→ DOCUMENT INTERNALLY
```

---

## 12. Contact Quick Reference

| Need | Contact | Number |
|:-----|:--------|:-------|
| TSB Report | TSB | 1-800-387-3557 |
| TC RPAS | Transport Canada | RPAS-SATP@tc.gc.ca |
| NAV CANADA | CADORS | CADORS.SCRNAV@navcanada.ca |
| WorkSafeBC | Incident Line | 1-888-621-7233 |
| Operations Manager | [INSERT] | [INSERT] |
| Accountable Executive | [INSERT] | [INSERT] |

---

**When in doubt, report. Over-reporting is better than under-reporting.**

---

**Document Control:** REG-OCCURRENCE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'REG-SFOC Application Checklist',
  'form',
  NULL,
  'Regulatory',
  '# AERIA SOLUTIONS LTD

# SFOC APPLICATION CHECKLIST

## Special Flight Operations Certificate Requirements

---

| Field | Value |
|:------|:------|
| **Document Number** | REG-SFOC |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## 1. When is an SFOC Required?

An SFOC is required when:
- Operations cannot be conducted under Basic, Advanced, or L1C provisions
- Night operations
- Operations beyond visual line of sight (when L1C conditions not met)
- Operations over people (advertised events, etc.)
- Operations that require deviation from standard rules

---

## 2. Application Timing

| Submission | Minimum Lead Time |
|:-----------|:------------------|
| Routine SFOC | 30 working days before operation |
| Complex SFOC | 60+ working days before operation |
| Emergency operations | Contact TC Civil Aviation immediately |

---

## 3. Application Checklist

### 3.1 Applicant Information

| Item | Included | Verified |
|:-----|:---------|:---------|
| Company legal name | ☐ | ☐ |
| RPOC number (930355) | ☐ | ☐ |
| Contact person name | ☐ | ☐ |
| Contact phone and email | ☐ | ☐ |
| Mailing address | ☐ | ☐ |

### 3.2 Operation Details

| Item | Included | Verified |
|:-----|:---------|:---------|
| Description of operation | ☐ | ☐ |
| Purpose of operation | ☐ | ☐ |
| Specific dates or date range | ☐ | ☐ |
| Specific times or time range | ☐ | ☐ |
| Location (detailed description) | ☐ | ☐ |
| GPS coordinates (boundaries) | ☐ | ☐ |
| Maximum altitude AGL | ☐ | ☐ |
| Lateral boundaries | ☐ | ☐ |

### 3.3 Airspace Information

| Item | Included | Verified |
|:-----|:---------|:---------|
| Airspace class | ☐ | ☐ |
| Proximity to aerodromes | ☐ | ☐ |
| NAV CANADA coordination (if controlled) | ☐ | ☐ |
| NOTAMs required | ☐ | ☐ |
| Coordination with other users | ☐ | ☐ |

### 3.4 RPAS Information

| Item | Included | Verified |
|:-----|:---------|:---------|
| RPAS make and model | ☐ | ☐ |
| Registration number | ☐ | ☐ |
| Maximum takeoff weight | ☐ | ☐ |
| Dimensions | ☐ | ☐ |
| Propulsion type | ☐ | ☐ |
| Maximum speed | ☐ | ☐ |
| Maximum flight time | ☐ | ☐ |
| Payload description | ☐ | ☐ |
| Manufacturer specifications | ☐ | ☐ |

### 3.5 Crew Information

| Item | Included | Verified |
|:-----|:---------|:---------|
| PIC name(s) | ☐ | ☐ |
| PIC certificate number(s) | ☐ | ☐ |
| PIC qualifications/experience | ☐ | ☐ |
| VO information (if applicable) | ☐ | ☐ |
| Crew training records | ☐ | ☐ |

### 3.6 Safety Documentation

| Item | Included | Verified |
|:-----|:---------|:---------|
| Risk assessment | ☐ | ☐ |
| Hazard identification | ☐ | ☐ |
| Mitigation measures | ☐ | ☐ |
| Emergency procedures | ☐ | ☐ |
| Lost link procedures | ☐ | ☐ |
| Security plan (if required) | ☐ | ☐ |

### 3.7 Operations Plan

| Item | Included | Verified |
|:-----|:---------|:---------|
| Pre-flight procedures | ☐ | ☐ |
| Flight procedures | ☐ | ☐ |
| Post-flight procedures | ☐ | ☐ |
| Weather limitations | ☐ | ☐ |
| Communication plan | ☐ | ☐ |
| Site map/diagram | ☐ | ☐ |

### 3.8 Insurance

| Item | Included | Verified |
|:-----|:---------|:---------|
| Proof of liability insurance | ☐ | ☐ |
| Coverage amount ($100,000 minimum) | ☐ | ☐ |
| Insurance valid during operation dates | ☐ | ☐ |

---

## 4. Supporting Documents

| Document | Required | Attached |
|:---------|:---------|:---------|
| Site map with boundaries | ☐ | ☐ |
| Risk assessment (SORA or equivalent) | ☐ | ☐ |
| Aircraft specifications | ☐ | ☐ |
| Pilot certificates (copies) | ☐ | ☐ |
| Insurance certificate | ☐ | ☐ |
| NAV CANADA coordination (if applicable) | ☐ | ☐ |
| Landowner authorization | ☐ | ☐ |
| Additional required documents | ☐ | ☐ |

---

## 5. Submission

| Method | Details |
|:-------|:--------|
| Email | RPAS-SATP@tc.gc.ca |
| Fax | 1-613-952-3298 |
| Mail | Transport Canada, RPAS Task Force, 330 Sparks Street, Ottawa ON K1A 0N8 |

---

## 6. After Submission

| Step | Status |
|:-----|:-------|
| Confirmation of receipt | ☐ |
| TC clarification questions | ☐ N/A ☐ Responded |
| SFOC issued | ☐ |
| SFOC number recorded | # |
| Conditions reviewed | ☐ |
| Operation conducted | ☐ |
| Post-operation reporting | ☐ |

---

## 7. SFOC Conditions Compliance

Once SFOC is received:
1. Review ALL conditions carefully
2. Brief all crew on conditions
3. Ensure compliance during operation
4. Document compliance
5. Report any deviations

---

## 8. Record Keeping

Retain for 10 years:
- SFOC application (copy)
- SFOC certificate
- Supporting documentation
- Flight logs from operation
- Occurrence reports (if any)

---

## 9. Contacts

| Contact | Phone/Email |
|:--------|:------------|
| TC RPAS | RPAS-SATP@tc.gc.ca |
| TC Civil Aviation (emergency) | Regional office |
| NAV CANADA | 1-866-992-7433 |

---

## 10. Internal Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Prepared by | | | |
| Operations Manager | | | |
| Accountable Executive | | | |

---

**Document Control:** REG-SFOC v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'RPAS Flight Operations',
  'fha',
  'FHA-001',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

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
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'BVLOS Operations',
  'fha',
  'FHA-002',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## BVLOS (Beyond Visual Line of Sight) Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-002 |
| **Version** | v5.0 |
| **Activity** | BVLOS Operations (L1C Declaration) |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers Beyond Visual Line of Sight operations conducted under Level 1 Complex (L1C) Declaration conditions per CARs 901.53.1.

---

## 2. Risk Matrix

| Risk Score | Rating | Action |
|:-----------|:-------|:-------|
| 15-25 | HIGH | Stop; implement additional controls |
| 8-14 | MEDIUM | Proceed with controls; monitor |
| 1-7 | LOW | Proceed with awareness |

---

## 3. BVLOS-Specific Hazards

### 3.1 Detect and Avoid Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Manned aircraft conflict | Failure to detect, inadequate DAA | Mid-air collision | 1 | 5 | 5-L | DAA system/VO, airspace monitoring, altitude limits, yield procedures | 3-L |
| 1.2 | VO loses visual of approach airspace | Obstructions, positioning, fatigue | Missed traffic | 2 | 5 | 10-M | VO positioning, rotation, scanning technique, supplemental DAA | 5-L |
| 1.3 | DAA system failure | Equipment malfunction | No traffic detection | 2 | 4 | 8-M | Pre-flight checks, backup methods, RTH if DAA fails | 4-L |

### 3.2 Communication Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | PIC-VO communication failure | Radio failure, interference | VO unable to warn PIC | 2 | 4 | 8-M | Radio checks, backup comm, pre-briefed contingencies | 4-L |
| 2.2 | Misunderstood communication | Non-standard calls, noise | Incorrect action | 2 | 3 | 6-L | Standard phraseology, read-back, training | 3-L |
| 2.3 | Delayed communication | High workload, hesitation | Late response to hazard | 2 | 4 | 8-M | Training, empowerment to call, sterile cockpit concept | 4-L |

### 3.3 Navigation and Control Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | GPS degradation/loss | Satellite issues, interference | Loss of position, unpredictable behavior | 2 | 4 | 8-M | Pre-flight GPS verification, compass mode, RTH testing | 4-L |
| 3.2 | Lost link | Range exceeded, interference | Aircraft follows failsafe | 2 | 3 | 6-L | Link monitoring, failsafe verification, conservative range | 4-L |
| 3.3 | Position uncertainty | Telemetry error, drift | Collision with obstacle | 2 | 3 | 6-L | Telemetry verification, conservative margins | 3-L |
| 3.4 | Flyaway during BVLOS | System failure, compass error | Uncontrolled flight into hazards | 2 | 4 | 8-M | Pre-flight checks, failsafe RTH, geofencing if available | 4-L |

### 3.4 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Weather change beyond line of sight | Localized weather, rapid change | Adverse conditions at aircraft | 2 | 3 | 6-L | Weather monitoring, conservative limits, RTH if uncertain | 4-L |
| 4.2 | Unknown obstacles | Unmapped obstructions | Collision | 2 | 3 | 6-L | Pre-mission planning, altitude margins, terrain awareness | 3-L |
| 4.3 | Wildlife strike | Birds in flight path | Damage, crash | 2 | 3 | 6-L | Seasonal awareness, altitude selection | 4-L |

### 3.5 Operational Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Exceeding L1C conditions | Drift into built-up area, over water | Regulatory violation, increased risk | 2 | 4 | 8-M | Mission planning, geofencing, monitoring, abort criteria | 4-L |
| 5.2 | Inadequate emergency landing sites | Poor planning | No safe landing option | 2 | 4 | 8-M | Pre-mission survey, emergency site identification | 4-L |
| 5.3 | Pilot overload | Complex mission, multiple tasks | Errors, missed hazards | 2 | 3 | 6-L | Task sharing, simplified missions, crew support | 3-L |
| 5.4 | Situational awareness loss | Distraction, workload, fatigue | Unaware of aircraft state | 2 | 4 | 8-M | CRM training, task management, crew support | 4-L |

---

## 4. L1C Declaration Compliance Controls

| L1C Condition | Verification Method | Responsible |
|:--------------|:--------------------|:------------|
| Away from built-up areas | Pre-mission planning, mapping | PIC |
| ≤122m AGL | Altitude monitoring, pre-set limits | PIC |
| ≤25 kg MTOW | Aircraft selection | PIC |
| 30m from persons | Site control, monitoring | PIC |
| Over land only | Pre-mission planning | PIC |
| DAA in place | VO briefing or system check | PIC |
| Advanced certificate | Pre-authorization verification | Operations Manager |

---

## 5. Critical Controls

### Pre-Flight

| Control | Purpose |
|:--------|:--------|
| L1C conditions verification | Confirm regulatory compliance |
| DAA method confirmation | Ensure traffic detection capability |
| Communication test | Verify PIC-VO link |
| Lost link programming | Define automatic response |
| Emergency landing identification | Ensure safe landing options |
| Weather assessment | Confirm conditions acceptable |

### In-Flight

| Control | Purpose |
|:--------|:--------|
| Continuous DAA monitoring | Traffic detection |
| Telemetry monitoring | Aircraft state awareness |
| Communication protocol | Standard calls, read-backs |
| Boundary monitoring | Stay within authorized area |
| Emergency procedure readiness | Prepared for contingencies |

### Post-Flight

| Control | Purpose |
|:--------|:--------|
| Occurrence documentation | Capture lessons learned |
| System performance review | Identify reliability issues |
| L1C compliance confirmation | Verify conditions met |

---

## 6. Emergency Procedures

| Emergency | Procedure |
|:----------|:----------|
| Traffic conflict | Immediate descent/land; yield to manned aircraft |
| Lost link | Monitor for failsafe; clear landing area |
| Communication failure | Execute pre-briefed contingency; RTH |
| Flyaway | Attempt RTH command; warn if approaching airspace |
| GPS failure | RTH or land immediately |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| BVLOS-specific procedures | Before BVLOS authorization |
| DAA methods | Before BVLOS authorization |
| Communication protocols | Before BVLOS authorization |
| Emergency procedures | Annual |
| Recurrency | Per company requirements |

---

## 8. Monitoring

| Monitoring | Frequency |
|:-----------|:----------|
| BVLOS occurrence review | Per occurrence |
| DAA effectiveness | Each operation |
| Communication effectiveness | Each operation |
| FHA review | Annual |

---

## 9. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-002 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Industrial Site Operations',
  'fha',
  'FHA-003',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Industrial Site Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-003 |
| **Version** | v5.0 |
| **Activity** | RPAS Operations at Industrial Sites |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS operations at industrial sites including oil and gas facilities, pipelines, construction sites, mining operations, and similar industrial environments.

---

## 2. Risk Matrix

| Risk Score | Rating | Action |
|:-----------|:-------|:-------|
| 15-25 | HIGH | Stop; implement additional controls |
| 8-14 | MEDIUM | Proceed with controls; monitor |
| 1-7 | LOW | Proceed with awareness |

---

## 3. Industrial Site Hazards

### 3.1 Site-Specific Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Flammable atmosphere | Hydrocarbon vapors, gases | Ignition, explosion | 2 | 5 | 10-M | Gas monitoring, hot work permits, intrinsically safe equipment, distance from sources | 5-L |
| 1.2 | Power lines | Overhead transmission lines | Electrocution, RPAS damage | 3 | 4 | 12-M | Line identification, standoff distance (min 10m), marking, route planning | 6-L |
| 1.3 | Industrial equipment | Moving machinery, vehicles | Struck by, caught in | 3 | 4 | 12-M | Site orientation, PPE, exclusion zones, communication with operators | 6-L |
| 1.4 | Confined spaces | Tanks, vessels, pits | Entry hazards | 2 | 5 | 10-M | No entry, maintain barriers, site coordination | 4-L |
| 1.5 | Pressurized systems | Pipelines, vessels | Release, rupture | 2 | 4 | 8-M | Site coordination, exclusion zones, awareness | 4-L |
| 1.6 | Chemical exposure | Process chemicals, spills | Toxic exposure, burns | 2 | 4 | 8-M | Site orientation, PPE, SDS awareness, avoid contact | 4-L |

### 3.2 Electromagnetic Interference

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Radio interference | Industrial equipment, communications | Loss of link, GPS issues | 3 | 3 | 9-M | Pre-flight testing, awareness, failsafe programming | 4-L |
| 2.2 | Magnetic interference | Metal structures, equipment | Compass errors, flyaway | 3 | 4 | 12-M | Compass calibration away from metal, GPS verification, caution | 6-L |
| 2.3 | Radar interference | Site radar systems | Control issues | 2 | 3 | 6-L | Site coordination, awareness | 3-L |

### 3.3 Site Access Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Unauthorized access | Security procedures, access control | Security violation, injury | 2 | 3 | 6-L | Site orientation, access permits, escort if required | 3-L |
| 3.2 | Traffic | Site vehicle traffic | Struck by vehicle | 3 | 4 | 12-M | Traffic awareness, high-vis PPE, designated work areas | 6-L |
| 3.3 | Ground conditions | Industrial materials, debris | Slips, trips, falls | 3 | 2 | 6-L | Safety footwear, awareness, housekeeping | 3-L |

### 3.4 Personnel Interaction Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Workers in area | Active work site | Strike on person | 2 | 4 | 8-M | Site coordination, exclusion zones, timing, communication | 4-L |
| 4.2 | Site activities interfere | Ongoing operations | Conflict, distraction | 3 | 3 | 9-M | Pre-planning, coordination, clear boundaries | 4-L |
| 4.3 | Communication gaps | Different operators, languages | Misunderstanding, incident | 2 | 3 | 6-L | Clear briefings, visual signals, coordination | 3-L |

### 3.5 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Noise | Industrial equipment | Communication difficulty, hearing damage | 3 | 2 | 6-L | Hearing protection, visual communication, quiet areas | 3-L |
| 5.2 | Dust/debris | Industrial processes | Visibility, equipment damage | 2 | 2 | 4-L | Awareness, equipment protection, timing | 2-L |
| 5.3 | Weather | Industrial setting amplifies conditions | Wind tunnels, microclimate | 2 | 3 | 6-L | Weather monitoring, conservative limits | 3-L |

---

## 4. Site-Specific Requirements

### 4.1 Pre-Site Requirements

| Requirement | Purpose |
|:------------|:--------|
| Client site orientation | Understand site-specific hazards |
| Safety tickets/certifications | Meet site access requirements |
| Insurance verification | Confirm coverage |
| Flight plan approval | Site operator coordination |
| Hot work permit (if required) | Authorization for potential ignition source |

### 4.2 Common Site Access Requirements

| Requirement | Typical Standard |
|:------------|:-----------------|
| Safety orientation | Site-specific |
| PPE minimum | Hard hat, safety glasses, safety footwear, high-vis, FRC (if applicable) |
| Certifications | H2S Alive, First Aid, WHMIS |
| Driver training | Site-specific |
| Drug/alcohol | Pre-access testing may be required |

---

## 5. Control Summary

### Critical Controls

| Control | Purpose | Responsible |
|:--------|:--------|:------------|
| Site orientation | Understand local hazards | PIC |
| Flight plan approval | Coordination with site | PIC |
| Exclusion zones | Keep distance from hazards | PIC |
| Gas monitoring | Detect flammable atmosphere | Site/PIC |
| Communication plan | Coordination with site personnel | PIC |
| PPE compliance | Personal protection | All |

### PPE Requirements (Typical Industrial Site)

| PPE | Standard |
|:----|:---------|
| Hard hat | CSA Type 1 or 2 |
| Safety glasses | CSA Z94.3 |
| Safety footwear | CSA Grade 1 |
| High-visibility vest | CSA Class 2 or 3 |
| Fire-resistant clothing | May be required (FRC) |
| H2S monitor | May be required |
| Hearing protection | Where required |
| Gloves | Task-appropriate |

---

## 6. Emergency Procedures

### Site Emergency

| Event | Action |
|:------|:-------|
| Site alarm/evacuation | Land immediately, follow site emergency procedures |
| H2S alarm | Land, don respiratory protection, follow site procedures |
| Fire | Land, evacuate, follow site procedures |
| Injury | First aid, report to site, follow site procedures |
| RPAS incident | Secure RPAS, report to site, document |

### RPAS Emergency on Industrial Site

| Event | Special Considerations |
|:------|:-----------------------|
| Flyaway | Warn site operations, note direction |
| Crash | Mark location, do not retrieve in hazardous area without clearance |
| Fire | Do not use water on battery fire, evacuate area |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Site-specific orientation | Before each new site |
| Industry certifications | As required by site |
| Industrial hazard awareness | Before industrial site operations |
| FHA review | Annual |

---

## 8. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Site orientation completed | ☐ |
| Required certifications current | ☐ |
| Flight plan approved by site | ☐ |
| PPE available and suitable | ☐ |
| Emergency procedures understood | ☐ |
| Communication plan established | ☐ |
| Exclusion zones identified | ☐ |
| Power line locations mapped | ☐ |
| Gas monitoring requirements confirmed | ☐ |

---

## 9. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-003 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Remote Location Operations',
  'fha',
  'FHA-004',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Remote Location Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-004 |
| **Version** | v5.0 |
| **Activity** | Operations in Remote/Backcountry Locations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers RPAS and survey operations in remote or backcountry locations where access to emergency services, communications, or support is limited.

---

## 2. Definition of Remote Location

A location is considered remote when:
- >30 minutes from emergency services
- Limited or no cellular coverage
- Difficult terrain access
- Significant distance from populated areas

---

## 3. Hazard Analysis

### 3.1 Access Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Vehicle accident | Remote roads, conditions | Injury, stranding | 2 | 4 | 8-M | Vehicle inspection, driving training, emergency kit, journey management | 4-L |
| 1.2 | Vehicle breakdown | Mechanical failure, terrain | Stranding | 3 | 3 | 9-M | Vehicle maintenance, spare equipment, recovery plan, communication | 4-L |
| 1.3 | Getting lost | Poor navigation, unfamiliar terrain | Disorientation, stranding | 2 | 3 | 6-L | GPS navigation, maps, trip planning, check-ins | 3-L |
| 1.4 | Terrain difficulty | Steep, unstable, water crossings | Injury, vehicle damage | 3 | 3 | 9-M | Route assessment, appropriate vehicle, caution | 4-L |

### 3.2 Communication Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | No cellular coverage | Remote location | Unable to call for help | 4 | 4 | 16-H | Satellite communicator, check-in schedule, working alone plan | 6-L |
| 2.2 | Communication device failure | Battery, damage | Loss of emergency contact | 2 | 4 | 8-M | Spare batteries, backup device, protection | 4-L |
| 2.3 | Missed check-in | Busy, forgot, device issue | Delayed emergency response | 2 | 3 | 6-L | Alarms/reminders, disciplined schedule | 3-L |

### 3.3 Wildlife Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Bear encounter | BC backcountry habitat | Attack, injury | 2 | 5 | 10-M | Bear awareness, spray, noise, food storage, avoidance | 5-L |
| 3.2 | Cougar encounter | BC backcountry habitat | Attack, injury | 2 | 5 | 10-M | Awareness, working in pairs, response training | 5-L |
| 3.3 | Moose encounter | BC backcountry habitat | Charge, injury | 2 | 4 | 8-M | Awareness, distance, response training | 4-L |
| 3.4 | Insect hazards | Bees, wasps, ticks | Allergic reaction, disease | 3 | 3 | 9-M | Awareness, bite prevention, first aid, EpiPen if allergic | 4-L |

### 3.4 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Weather exposure | Remote location, weather change | Hypothermia, hyperthermia | 2 | 4 | 8-M | Weather monitoring, appropriate clothing, shelter capability | 4-L |
| 4.2 | Getting caught by darkness | Work extends, travel delays | Night travel, lost | 2 | 3 | 6-L | Time management, headlamps, contingency plan | 3-L |
| 4.3 | Forest fire | Fire season, ignition source | Entrapment, injury | 2 | 5 | 10-M | Fire conditions monitoring, egress routes, BC Wildfire check | 5-L |
| 4.4 | Water hazards | Rivers, lakes, wet terrain | Drowning, hypothermia | 2 | 5 | 10-M | Water avoidance, PFD if near water, crossing assessment | 5-L |

### 3.5 Medical Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Delayed medical response | Remote location | Condition worsens | 2 | 4 | 8-M | First aid capability, communication for MEDEVAC | 4-L |
| 5.2 | Pre-existing condition | Health issue | Medical event | 2 | 4 | 8-M | Fit for duty screening, medical info available | 4-L |
| 5.3 | Injury in remote area | Work activities, terrain | No immediate help | 2 | 4 | 8-M | Training, first aid kit, emergency plan, buddy system | 4-L |

### 3.6 Working Alone Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 6.1 | Incapacitation alone | Injury, medical event | No one to help | 2 | 5 | 10-M | Working alone plan, check-ins, buddy system when possible | 5-L |
| 6.2 | Unable to get help | Communication failure, incapacitation | Delayed rescue | 2 | 4 | 8-M | Multiple communication methods, PLB, check-in plan | 4-L |

---

## 4. Control Summary

### Required Equipment for Remote Operations

| Category | Equipment |
|:---------|:----------|
| Communication | Cell phone + satellite communicator (InReach, SPOT, or similar) |
| Navigation | GPS device, maps of area |
| Safety | First aid kit (OFA Level 1 minimum), bear spray, fire extinguisher |
| Emergency | Emergency shelter, extra food/water, extra clothing |
| Vehicle | Recovery gear, spare tire, tools, fuel capacity |
| Documentation | Trip plan filed, emergency contacts |

### Working Alone Protocol

| Requirement | Details |
|:------------|:--------|
| Check-in device | Satellite communicator with SOS |
| Check-in schedule | Every 1-2 hours |
| Contact person | Designated with authority to initiate search |
| Trip plan | Detailed itinerary filed |
| Overdue action | Defined response if check-in missed |

---

## 5. Emergency Procedures

### Medical Emergency

1. Provide first aid
2. Activate satellite SOS if life-threatening
3. Contact emergency services (if able)
4. Provide coordinates
5. Prepare for evacuation assistance

### Vehicle Stranded

1. Assess situation
2. Contact via satellite device
3. Stay with vehicle if safe
4. Make visible for searchers
5. Conserve resources

### Bear Encounter

Refer to QRC-WILDLIFE for detailed procedures

### Forest Fire

1. Identify fire location and direction
2. Evacuate away from fire
3. Contact via satellite device
4. Report to BC Wildfire (*5555 from cell)
5. Do not attempt to fight large fires

---

## 6. Pre-Departure Checklist

| Item | Verified |
|:-----|:---------|
| Trip plan filed | ☐ |
| Contact person confirmed | ☐ |
| Check-in schedule established | ☐ |
| Satellite communicator tested | ☐ |
| Vehicle inspection complete | ☐ |
| Emergency equipment packed | ☐ |
| Weather/fire conditions checked | ☐ |
| Wildlife awareness current | ☐ |
| First aid kit stocked | ☐ |
| Water/food adequate | ☐ |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Wilderness first aid | Recommended for remote work |
| Wildlife awareness | Required for BC backcountry |
| Working alone | Required |
| Satellite device operation | Before remote deployment |
| Vehicle recovery | Recommended |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-004 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Battery Handling',
  'fha',
  'FHA-005',
  'Hazard Assessment',
  '# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Lithium Battery Handling

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-005 |
| **Version** | v5.0 |
| **Activity** | LiPo/Li-Ion Battery Handling, Storage, Transport |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Scope

This FHA covers the handling, charging, storage, transport, and disposal of lithium polymer (LiPo) and lithium-ion (Li-Ion) batteries used in RPAS operations.

---

## 2. Lithium Battery Hazards Overview

| Hazard | Potential Consequence |
|:-------|:---------------------|
| Thermal runaway | Fire, explosion, toxic gases |
| Physical damage | Internal short, fire |
| Overcharging | Swelling, fire |
| Over-discharging | Cell damage, reduced capacity |
| Short circuit | Rapid heating, fire |
| Exposure to elements | Degradation, failure |

---

## 3. Hazard Analysis

### 3.1 Charging Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Fire during charging | Overcharge, defect, damage | Fire, property damage | 2 | 4 | 8-M | Proper charger, monitoring, fireproof surface, LiPo bag | 4-L |
| 1.2 | Overcharging | Charger malfunction, wrong settings | Swelling, fire | 2 | 4 | 8-M | Balanced charger, proper settings, monitoring | 4-L |
| 1.3 | Charging damaged battery | Undetected damage | Fire, explosion | 2 | 5 | 10-M | Pre-charge inspection, damage criteria | 4-L |
| 1.4 | Charging at wrong temperature | Cold/hot environment | Damage, fire | 2 | 3 | 6-L | Temperature awareness, wait for room temp | 3-L |
| 1.5 | Unattended charging | Left alone | Uncontrolled fire | 2 | 4 | 8-M | Never leave unattended, use timers | 4-L |

### 3.2 Storage Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Fire in storage | Self-ignition, damage | Fire, property damage | 2 | 4 | 8-M | LiPo bag, fireproof container, storage charge | 4-L |
| 2.2 | Full charge storage | Improper storage voltage | Degradation, swelling | 3 | 3 | 9-M | Storage charge (3.8V/cell), discharge to storage | 4-L |
| 2.3 | Deep discharge | Stored depleted | Cell damage, fire risk on charge | 2 | 3 | 6-L | Storage charge, periodic check | 3-L |
| 2.4 | Temperature extremes | Vehicle storage, outdoor | Degradation, fire risk | 3 | 3 | 9-M | Climate-controlled storage, avoid vehicle | 4-L |
| 2.5 | Physical damage in storage | Stacking, impacts | Internal damage | 2 | 4 | 8-M | Proper cases, padding, organization | 4-L |

### 3.3 Transport Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Fire in vehicle | Damage, temperature, short | Vehicle fire | 2 | 4 | 8-M | Fireproof container, secured, climate consideration | 4-L |
| 3.2 | Short circuit | Exposed terminals, contact | Fire | 2 | 4 | 8-M | Terminal protection, individual bags | 4-L |
| 3.3 | Impact damage | Unsecured, accident | Internal damage, fire | 2 | 4 | 8-M | Secure storage, padded cases | 4-L |

### 3.4 Handling Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Physical damage | Drop, puncture, crush | Fire, explosion | 2 | 4 | 8-M | Careful handling, protection, inspection | 4-L |
| 4.2 | Connector damage | Forced connection, wrong polarity | Short circuit, fire | 2 | 3 | 6-L | Proper connection technique, inspection | 3-L |
| 4.3 | Swollen battery use | Ignoring warning signs | Fire, explosion | 2 | 5 | 10-M | Inspection criteria, immediate retirement | 4-L |
| 4.4 | Hot battery handling | After flight | Burns | 3 | 2 | 6-L | Cool-down period, gloves if necessary | 3-L |

### 3.5 Fire Response Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Fire spread | Uncontrolled LiPo fire | Property damage, injury | 2 | 4 | 8-M | Isolation, fire-resistant storage, response training | 4-L |
| 5.2 | Toxic fumes | LiPo fire byproducts | Inhalation injury | 2 | 3 | 6-L | Evacuation, ventilation, respiratory protection | 3-L |
| 5.3 | Re-ignition | Hot spots, incomplete extinguish | Secondary fire | 3 | 3 | 9-M | Monitoring, water submersion after, 24-hour watch | 4-L |

### 3.6 Disposal Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 6.1 | Fire during disposal | Charged battery, damage | Fire | 2 | 3 | 6-L | Discharge before disposal, proper disposal facility | 3-L |
| 6.2 | Environmental contamination | Improper disposal | Pollution | 2 | 2 | 4-L | Recycling facility, proper disposal | 2-L |

---

## 4. Control Summary

### Safe Charging

| Control | Requirement |
|:--------|:------------|
| Charger | Manufacturer-approved balanced charger |
| Location | Fireproof surface, away from flammables |
| Container | LiPo bag or fireproof box |
| Supervision | Never leave unattended |
| Temperature | Room temperature (15-25°C) |
| Inspection | Visual check before charging |

### Safe Storage

| Control | Requirement |
|:--------|:------------|
| Charge level | Storage charge (40-60%, 3.8V/cell) |
| Container | LiPo bag or fireproof container |
| Location | Room temperature, away from flammables |
| Inspection | Monthly for stored batteries |
| Organization | Separated, protected from damage |

### Safe Transport

| Control | Requirement |
|:--------|:------------|
| Container | Fireproof battery case |
| Terminals | Protected/covered |
| Security | Secured against movement |
| Quantity | Minimize number transported |
| Documentation | Air transport regulations if flying |

### Retirement Criteria

| Condition | Action |
|:----------|:-------|
| Visible swelling | Retire immediately |
| Physical damage (dent, puncture) | Retire immediately |
| Exceeded cycle limit | Retire |
| Significant capacity loss (>20%) | Retire |
| Age limit reached | Retire |
| Any sign of internal damage | Retire |

---

## 5. Emergency Response

### Battery Fire

1. **EVACUATE** - Clear area immediately
2. **DO NOT** use water initially (can spread)
3. **ISOLATE** - Move burning battery if safe (metal tool)
4. **SMOTHER** - Sand, dry chemical, fire blanket
5. **VENTILATE** - Toxic fumes
6. **MONITOR** - May reignite for hours
7. **CALL 911** - If fire spreads or is significant

### Swollen/Damaged Battery

1. **ISOLATE** - Move to fireproof container
2. **MONITOR** - Watch for 30+ minutes
3. **DO NOT** charge or use
4. **DISPOSE** - Proper hazardous waste facility

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Battery safety | All personnel using LiPo batteries |
| Fire response | All personnel |
| Charger operation | Before use |
| Disposal procedures | All personnel |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-005 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

