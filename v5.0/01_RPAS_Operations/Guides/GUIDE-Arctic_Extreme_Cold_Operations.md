# AERIA SOLUTIONS LTD

# ARCTIC AND EXTREME COLD WEATHER OPERATIONS GUIDE

---

| Field | Value |
|:------|:------|
| **Document Number** | GUIDE-ARCTIC |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — arctic operations guide | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added cold weather battery protocols | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced personnel cold stress prevention | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — expanded battery management procedures | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — updated equipment temperature limits | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved vehicle winterization requirements | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added shelter and warming procedures | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — enhanced emergency procedures section | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for Level 1 Complex arctic operations | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Introduction

### 1.1 Purpose

This guide provides comprehensive procedures and requirements for conducting RPAS operations in Arctic and extreme cold weather environments. Operations below -20C present unique challenges requiring specialized preparation, equipment management, and crew safety protocols.

### 1.2 Scope

This guide applies to:
- All RPAS operations conducted at ambient temperatures below -20C
- Operations in Arctic or sub-Arctic regions
- Winter operations in mountainous or exposed environments
- Any operation where cold stress is a significant hazard

### 1.3 References

| Reference | Description |
|:----------|:------------|
| OPS-001 | RPAS Flight Operations Policy |
| OPS-003 | Weather Limitations Policy |
| HSE-010 | Fatigue Management Policy |
| MCM-005-PR | Battery Management Procedure |
| HSE-009 | Personal Protective Equipment Policy |

---

## 2. Temperature Limits

### 2.1 Equipment Temperature Limits

| Equipment | Minimum Operating | Minimum Storage | Notes |
|:----------|:------------------|:----------------|:------|
| **LiPo Batteries** | -10C (warmed) | -20C | Must be warmed before use |
| **DJI Matrice Series** | -20C | -30C | Reduced performance below -10C |
| **DJI FlyCart 30/100** | -20C | -30C | Battery capacity significantly reduced |
| **Camera/Sensors** | -20C | -40C | LCD response slows in cold |
| **Remote Controller** | -20C | -30C | Keep warm between flights |
| **Tablets/GCS** | -20C | -30C | Use insulated cases |
| **LiDAR Sensors** | -15C | -30C | Verify manufacturer specs |

### 2.2 Personnel Exposure Limits

| Temperature + Wind Chill | Maximum Exposure | Required Breaks |
|:-------------------------|:-----------------|:----------------|
| 0C to -10C | Continuous with PPE | Regular warming breaks |
| -10C to -20C | 60 minutes | 10-minute warm-up every hour |
| -20C to -30C | 40 minutes | 15-minute warm-up |
| -30C to -40C | 20 minutes | 20-minute warm-up |
| Below -40C | Operations suspended | N/A |

### 2.3 Operational Temperature Limits

| Condition | Limit | Action |
|:----------|:------|:-------|
| **Ambient below -30C** | Hard limit | Suspend operations |
| **Wind chill below -40C** | Hard limit | Suspend operations |
| **Battery temp below 15C** | Soft limit | Warm batteries before flight |
| **Controller below -10C** | Soft limit | Use hand warmers, insulation |

---

## 3. Battery Management in Extreme Cold

### 3.1 Cold Effects on Batteries

| Effect | Impact | Mitigation |
|:-------|:-------|:-----------|
| **Reduced capacity** | 20-40% less flight time | Plan for 50% of normal endurance |
| **Increased internal resistance** | Reduced power delivery | Pre-warm to 20C minimum |
| **Voltage sag under load** | Low voltage warnings | Monitor closely, land early |
| **Slower charging** | Extended turnaround | Use heated charging solutions |
| **Physical damage** | Cell rupture if charged cold | Never charge below 5C |

### 3.2 Battery Warming Procedures

**Pre-Flight Warming:**
1. Store batteries in heated vehicle or insulated container
2. Use battery warming stations or heating pads
3. Verify battery temperature displays 15-25C before flight
4. Do not fly with batteries below 15C internal temperature
5. If no temperature display, warm batteries for minimum 30 minutes in heated environment

**Field Warming Methods:**

| Method | Effectiveness | Notes |
|:-------|:--------------|:------|
| **Heated vehicle** | Excellent | Primary method |
| **Insulated cooler with heat packs** | Good | Backup method |
| **Battery warming bags** | Good | Purpose-built solution |
| **Body heat** | Marginal | Emergency only |
| **Engine block** | Good | Monitor temperature carefully |

**WARNING:** Never use open flames, heat guns, or microwaves to warm batteries.

### 3.3 Cold Weather Flight Time Planning

| Normal Flight Time | Expected at -10C | Expected at -20C | Expected at -30C |
|:-------------------|:-----------------|:-----------------|:-----------------|
| 40 minutes | 32 minutes | 26 minutes | 22 minutes |
| 30 minutes | 24 minutes | 20 minutes | 16 minutes |
| 20 minutes | 16 minutes | 13 minutes | 11 minutes |

**Planning Rule:** Reduce expected flight time by 2% for every degree below 0C.

### 3.4 Battery Rotation Protocol

1. Minimum 3 battery sets for cold operations
2. Rotate: one flying, one cooling, one warming
3. After landing, allow gradual cool-down before re-warming
4. Never warm a battery immediately after high-drain flight
5. Allow 10-minute rest before placing in warmer

---

## 4. Cold Stress Prevention for Crew

### 4.1 Cold-Related Injuries

| Condition | Symptoms | Prevention | First Aid |
|:----------|:---------|:-----------|:----------|
| **Hypothermia** | Shivering, confusion, slurred speech | Layer clothing, monitor exposure, warming breaks | Remove from cold, warm gradually, seek medical help |
| **Frostbite** | White/waxy skin, numbness | Cover exposed skin, keep dry, limit exposure | Do not rub, warm gradually in lukewarm water |
| **Frostnip** | Redness, tingling | Cover exposed areas | Rewarm with body heat |
| **Trench foot** | Wet cold feet, tingling | Keep feet dry, change socks | Dry and warm feet, elevate |

### 4.2 Hydration and Nutrition

**Cold Weather Hydration:**
- Dehydration risk is HIGH in cold (dry air, reduced thirst sensation)
- Consume 2-3L water minimum during cold operations
- Warm beverages preferred (not alcohol or excessive caffeine)
- Monitor urine color for hydration status

**Nutrition:**
- Higher caloric intake required (500-1000 additional calories/day)
- Frequent small meals maintain energy
- Carry high-energy snacks (nuts, chocolate, energy bars)
- Avoid operating on empty stomach

### 4.3 Monitoring Crew Condition

**Signs requiring immediate action:**
- Uncontrollable shivering
- Slurred speech or confusion
- Unusual fatigue or drowsiness
- Loss of dexterity
- Pain in extremities followed by numbness

**Buddy system required:** All cold operations require minimum two personnel for mutual monitoring.

---

## 5. Equipment Preparation and Protection

### 5.1 Pre-Deployment Preparation

**Before departing for cold operations:**

| Task | Details |
|:-----|:--------|
| **Aircraft cold-weather check** | Verify manufacturer cold weather procedures |
| **Lubricant review** | Ensure lubricants rated for expected temperatures |
| **Battery conditioning** | Fully charge and warm-cycle batteries |
| **Controller/GCS prep** | Install insulated cases, verify battery capacity |
| **Spare equipment** | Pack extra batteries, controllers, cables |
| **Warming equipment** | Heating pads, insulated containers, hand warmers |

### 5.2 Field Equipment Protection

**Aircraft:**
- Keep in heated vehicle until flight
- Minimize ground time before takeoff
- Cover lens/sensors until ready to fly
- Use lens hood to prevent frost formation
- Avoid snow contact on motors and sensors

**Ground Control Station:**
- Use insulated tablet case
- Keep spare batteries warm
- Consider external battery with cold-rated chemistry
- Position away from wind
- Use screen protector (cold screens are more brittle)

**Accessories:**
- Keep cables flexible by storing warm
- Extra memory cards (cold affects write speed)
- Lens wipes for condensation management
- Silica gel packets for moisture control

### 5.3 Post-Flight Care

1. Allow aircraft to gradually warm before storage
2. Check for condensation as aircraft warms
3. Dry any moisture before storage
4. Do not charge cold batteries - warm first
5. Inspect propellers for cold-related brittleness
6. Check all seals and O-rings (cold causes shrinkage)

---

## 6. Operational Adjustments

### 6.1 Flight Time Reduction

| Factor | Adjustment |
|:-------|:-----------|
| **Battery capacity** | Reduce planned flight time by 30-50% |
| **Increased power demand** | Factor additional power for cold-air density |
| **Safety margins** | Increase reserve from 20% to 30% |
| **Total effect** | Plan for 40-50% of normal flight duration |

### 6.2 Maneuver Adjustments

**Fly conservatively in cold:**
- Slower acceleration and deceleration
- Wider turns (gyros may respond differently)
- Reduced maximum speeds
- Allow extra time for stabilization
- Avoid aggressive maneuvers that stress cold components

**Takeoff/Landing:**
- Allow 30-second motor warm-up at idle before takeoff
- Gentle initial climb
- Verify all systems responding before departing area
- Land with higher battery reserve than normal

### 6.3 Altitude Considerations

| Altitude | Temperature Effect | Consideration |
|:---------|:-------------------|:--------------|
| **Surface** | Measured ambient | Base planning temperature |
| **+100m** | Approximately -0.65C | Standard lapse rate |
| **+300m** | Approximately -2C | Significant additional cooling |
| **+500m** | Approximately -3.25C | May exceed equipment limits |

**Plan for temperature at operating altitude, not ground level.**

### 6.4 Mission Timing

**Optimal timing for cold operations:**
- Midday when temperatures are warmest
- Avoid early morning (coldest period)
- Complete operations before late afternoon cooling
- Account for rapid temperature drops at sunset

---

## 7. Emergency Considerations

### 7.1 Cold-Specific Emergencies

| Emergency | Unique Cold Factors | Response |
|:----------|:--------------------|:---------|
| **Loss of signal** | Cold may affect electronics | Allow extra time for auto-RTH |
| **Battery failure** | Higher risk in cold | Land immediately when warnings appear |
| **Motor failure** | Lubricant issues | Controlled descent if possible |
| **Forced landing** | Recovery may be difficult | Mark GPS position immediately |
| **Personnel injury** | Cold stress compounds injuries | Evacuate to warmth immediately |

### 7.2 Recovery Operations

**If aircraft down in cold environment:**
1. Mark GPS coordinates immediately
2. Assess whether safe to recover
3. Consider avalanche risk in mountain terrain
4. Plan recovery route accounting for deep snow
5. Bring backup warm clothing and emergency supplies
6. Set time limit for recovery attempt
7. If conditions deteriorate, postpone recovery

### 7.3 Vehicle Emergency

**If vehicle becomes disabled in cold:**
1. Stay with vehicle (shelter)
2. Run engine periodically for heat (ensure exhaust clear)
3. Activate emergency communication
4. Conserve battery power
5. Use emergency supplies
6. Signal for help (flares, mirror, bright items)

### 7.4 Emergency Kit for Cold Operations

| Item | Purpose |
|:-----|:--------|
| Emergency blankets | Retain body heat |
| Hand/toe warmers | Prevent frostbite |
| Fire-starting kit | Emergency warmth |
| High-calorie food | Energy maintenance |
| Thermos with hot liquid | Hydration and warmth |
| Spare dry clothing | Replace wet items |
| First aid kit | Frostbite/hypothermia treatment |
| Emergency communication | Satellite messenger or PLB |

---

## 8. Clothing and PPE Requirements

### 8.1 Layering System

| Layer | Purpose | Examples |
|:------|:--------|:---------|
| **Base layer** | Moisture wicking | Merino wool, synthetic wicking fabric |
| **Mid layer** | Insulation | Fleece, down, synthetic insulation |
| **Outer layer** | Wind/weather protection | Windproof, waterproof shell |

### 8.2 Required PPE for Cold Operations

**Head:**
- Insulated hat covering ears (balaclava for extreme cold)
- Face protection below -20C
- Ski goggles for wind/snow protection

**Hands:**
- Insulated gloves suitable for controller operation
- Mittens for warming periods
- Liner gloves for dexterity tasks
- Chemical hand warmers

**Feet:**
- Insulated winter boots rated for expected temperature
- Moisture-wicking socks
- Spare dry socks
- Boot covers/overboots for deep snow

**Body:**
- Full layering system as above
- High-visibility outer layer
- No cotton (retains moisture, loses insulation when wet)

### 8.3 PPE Inspection

Before cold operations:
- Verify insulation is dry and intact
- Check for worn or damaged items
- Confirm cold rating meets expected conditions
- Pack spare items for critical protection areas

---

## 9. Vehicle and Shelter Requirements

### 9.1 Vehicle Requirements

**Vehicle preparation:**

| Requirement | Standard |
|:------------|:---------|
| **Cold-rated fuel** | Diesel: winter blend; Gas: cold-rated |
| **Battery** | Cold-cranking amps appropriate for -40C |
| **Coolant** | Rated for -40C minimum |
| **Tires** | Winter/all-terrain appropriate for conditions |
| **Block heater** | Required for overnight in extreme cold |
| **Emergency kit** | See Section 7.4 |

**Vehicle as warming station:**
- Keep running during operations for heat
- Park upwind to reduce cooling
- Use remote start if available
- Maintain minimum 1/2 tank fuel

### 9.2 Shelter Options

| Shelter Type | Use Case | Notes |
|:-------------|:---------|:------|
| **Vehicle** | Primary | Always available, heated |
| **Heated tent** | Extended operations | Propane or electric heat |
| **Emergency shelter** | Backup | Compact emergency bivy |
| **Client facility** | If available | Coordinate access |

### 9.3 Field Setup

**Optimal field setup for cold:**
1. Position vehicle as windbreak for operations area
2. Establish warming area in vehicle
3. Set up equipment staging in sheltered area
4. Mark walking paths in deep snow
5. Identify emergency shelter location
6. Brief crew on warming rotation schedule

---

## 10. Communication Requirements

### 10.1 Cold Weather Communication Challenges

| Challenge | Mitigation |
|:----------|:-----------|
| **Battery drain** | Keep radios warm, carry spares |
| **Reduced cell coverage** | Satellite backup required in remote areas |
| **Physical handling** | Large buttons, glove-compatible devices |
| **Speech difficulty** | Face covering may impede speech |

### 10.2 Required Communication Equipment

**Minimum for cold operations:**
- VHF radio with spare batteries
- Satellite messenger (InReach, SPOT) for remote areas
- Cell phone with cold-rated battery case
- Emergency PLB (personal locator beacon)

### 10.3 Check-In Protocol

| Situation | Check-In Frequency |
|:----------|:-------------------|
| **Normal operations** | Every 2 hours |
| **Remote operations** | Every hour |
| **Extreme cold (<-30C)** | Every 30 minutes |
| **Single crew member** | Not permitted |

---

## 11. Pre-Flight Cold Weather Checklist

### 11.1 Planning Phase

- [ ] Check weather forecast including wind chill
- [ ] Verify temperatures within equipment limits
- [ ] Plan reduced flight times (50% of normal)
- [ ] Prepare battery warming equipment
- [ ] Pack cold weather PPE for all crew
- [ ] Prepare emergency kit
- [ ] Brief crew on cold hazards and protocols
- [ ] Confirm vehicle cold-weather readiness
- [ ] Establish check-in schedule
- [ ] Identify warming/shelter locations

### 11.2 Pre-Flight Phase

- [ ] Warm batteries to 15-25C
- [ ] Verify battery temperature display
- [ ] Check controller battery warm
- [ ] Inspect aircraft for cold damage
- [ ] Verify lubricants appropriate for temperature
- [ ] Check all crew PPE adequate
- [ ] Brief emergency procedures
- [ ] Confirm communication equipment operational
- [ ] Test all systems in cold
- [ ] Allow motor warm-up before flight

### 11.3 Post-Flight Phase

- [ ] Allow gradual aircraft warming
- [ ] Check for condensation
- [ ] Dry all equipment before storage
- [ ] Warm batteries before charging
- [ ] Document any cold-related issues
- [ ] Assess crew for cold stress symptoms
- [ ] Secure all equipment in heated vehicle

---

## 12. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-001 | RPAS Flight Operations Policy |
| OPS-003 | Weather Limitations Policy |
| MCM-005-PR | Battery Management Procedure |
| HSE-009 | Personal Protective Equipment Policy |
| HSE-010 | Fatigue Management Policy |
| OPS-011-PR | Emergency Procedures (RPAS) |
| GUIDE-BVLOS | BVLOS Operations Guide |

---

**Document Control:** GUIDE-ARCTIC v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
