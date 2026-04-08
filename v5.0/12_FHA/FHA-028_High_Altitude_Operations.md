# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## High Altitude Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-028 |
| **Version** | v5.0 |
| **Activity** | High Altitude Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — high altitude operations FHA | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added altitude sickness awareness | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced density altitude calculations | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — updated mountain weather protocols | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — expanded glacier operations procedures | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved alpine survey methods | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added hypoxia awareness training | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — expanded hazard identification matrix | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for SFOC high altitude requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This FHA covers RPAS operations conducted above standard AGL limits, at high elevation launch sites (above 1,500m ASL), or in mountainous terrain. This includes mining operations at elevation, alpine surveys, glacier monitoring, mountain rescue support, ski resort inspections, and telecommunication tower surveys in mountainous regions. Personnel hazards related to altitude exposure are also addressed.

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

### 3.1 Aircraft Performance Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Reduced lift/thrust | Lower air density at altitude | Reduced payload capacity, instability | 4 | 3 | 12-M | Density altitude calculations, payload reduction, performance charts | 6-L |
| 1.2 | Increased power consumption | Motors working harder for same thrust | Reduced flight time, unexpected battery depletion | 4 | 3 | 12-M | Conservative flight time limits, altitude-adjusted planning | 6-L |
| 1.3 | Battery performance degradation | Cold temperatures, reduced pressure | Voltage sag, sudden power loss | 3 | 4 | 12-M | Battery pre-warming, insulated batteries, voltage monitoring | 6-L |
| 1.4 | Motor overheating | Reduced cooling in thin air | Motor failure, fire | 2 | 4 | 8-M | Motor temperature monitoring, duty cycle limits, cooling periods | 4-L |
| 1.5 | Propeller inefficiency | Air density effects on prop performance | Oscillation, instability, reduced control | 3 | 3 | 9-M | High-altitude propeller selection, PID tuning for altitude | 4-L |

### 3.2 Weather and Atmospheric Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Rapid weather changes | Mountain weather patterns | Sudden visibility loss, high winds | 4 | 4 | 16-H | Continuous weather monitoring, conservative go/no-go, abort criteria | 8-M |
| 2.2 | High winds/gusts | Terrain-induced turbulence, valley effects | Loss of control, drift | 4 | 4 | 16-H | Wind speed limits, sheltered launch sites, strong wind procedures | 8-M |
| 2.3 | Reduced visibility | Clouds, fog, precipitation | Loss of VLOS, disorientation | 3 | 4 | 12-M | VLOS procedures, weather minima, immediate RTH on visibility loss | 6-L |
| 2.4 | Icing conditions | Freezing temperatures, moisture | Airframe icing, loss of lift | 2 | 5 | 10-M | Temperature limits, icing awareness, anti-ice capability assessment | 5-L |
| 2.5 | Turbulence | Terrain interaction, thermal activity | Loss of control, structural stress | 3 | 4 | 12-M | Turbulence avoidance, terrain clearance, calm period operations | 6-L |
| 2.6 | Downdrafts/mountain waves | Lee-side effects, terrain funneling | Sudden altitude loss, terrain collision | 2 | 5 | 10-M | Terrain awareness, altitude buffers, avoid lee slopes | 5-L |

### 3.3 Terrain Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Terrain collision | Complex topography, limited escape routes | Aircraft loss, potential injury | 3 | 4 | 12-M | Terrain mapping, altitude buffers, terrain-following limits | 6-L |
| 3.2 | Limited landing options | Steep terrain, no flat areas | Unable to land safely in emergency | 3 | 4 | 12-M | Pre-planned emergency landing zones, RTH verification | 6-L |
| 3.3 | GPS multi-path errors | Signal reflection off terrain | Position errors, erratic behavior | 3 | 3 | 9-M | RTK/PPK positioning, multiple GNSS constellations, visual verification | 4-L |
| 3.4 | Altitude reference errors | Barometric changes, pressure variation | Incorrect altitude display, CFIT | 2 | 5 | 10-M | Barometer calibration, visual altitude verification, terrain awareness | 5-L |
| 3.5 | Difficult aircraft recovery | Remote/inaccessible crash location | Equipment loss, rescue operation required | 3 | 3 | 9-M | Aircraft tracking, conservative operations, insurance coverage | 4-L |

### 3.4 Personnel Health Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Acute mountain sickness (AMS) | Rapid ascent to altitude | Headache, nausea, impaired judgment | 3 | 3 | 9-M | Acclimatization time, gradual ascent, symptom awareness | 4-L |
| 4.2 | Hypoxia | Reduced oxygen at altitude | Impaired judgment, poor decisions, incapacitation | 2 | 5 | 10-M | Altitude limits, supplemental O2 above 3,000m, buddy system | 5-L |
| 4.3 | High altitude pulmonary edema (HAPE) | Altitude exposure, exertion | Serious illness, death | 1 | 5 | 5-L | Ascent rate limits, descent on symptoms, medical screening | 3-L |
| 4.4 | High altitude cerebral edema (HACE) | Severe altitude sickness progression | Coma, death | 1 | 5 | 5-L | Immediate descent on symptoms, emergency evacuation plan | 3-L |
| 4.5 | Cold stress/hypothermia | Low temperatures at altitude | Cold injury, hypothermia | 3 | 4 | 12-M | Cold weather clothing, warm-up breaks, shelter availability | 6-L |
| 4.6 | Dehydration | Dry air, increased respiration, reduced thirst | Impaired performance, AMS risk increase | 3 | 3 | 9-M | Hydration protocol, water supply, monitoring | 4-L |
| 4.7 | UV exposure/snow blindness | Increased UV at altitude, reflection | Eye injury, sunburn | 3 | 3 | 9-M | UV-rated eyewear, sunscreen, protective clothing | 4-L |

### 3.5 Operational Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Communication difficulties | Terrain blocking signals, remote location | Lost coordination, delayed emergency response | 3 | 4 | 12-M | Satellite communication, radio repeaters, check-in protocols | 6-L |
| 5.2 | Delayed emergency response | Remote location, difficult access | Prolonged rescue time | 2 | 5 | 10-M | Emergency beacon (PLB), helicopter evacuation plan, first aid kit | 5-L |
| 5.3 | Equipment malfunction in cold | Low temperature effects | Frozen controls, display failure | 3 | 3 | 9-M | Cold-rated equipment, hand warmers, backup systems | 4-L |
| 5.4 | Pilot impairment undetected | Hypoxia effects on self-assessment | Poor decisions, unsafe operations | 2 | 5 | 10-M | Buddy checks, objective performance tests, mandatory rest | 5-L |
| 5.5 | Limited backup support | Remote location | No assistance if problems occur | 3 | 3 | 9-M | Team operations, spare equipment, satellite phone | 4-L |

---

## 4. Control Summary

### Critical Controls

| Control | Purpose | Responsible |
|:--------|:--------|:------------|
| Density altitude calculation | Verify aircraft performance capability | PIC |
| Altitude acclimatization | Prevent altitude sickness | Operations Manager |
| Weather monitoring system | Early warning of conditions | PIC |
| Emergency communication | Enable rescue if required | All personnel |
| Altitude-specific flight limits | Account for reduced performance | PIC |
| Buddy system | Monitor personnel for altitude effects | Team Lead |
| Emergency descent plan | Rapid evacuation if required | Operations Manager |

### PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Cold weather layered clothing | All high altitude operations |
| Insulated boots | All operations |
| UV-rated sunglasses/goggles | All daylight operations |
| Sunscreen (SPF 50+) | All daylight operations |
| Warm gloves (touchscreen capable) | All operations |
| Hard hat | Near terrain hazards |
| High-visibility vest | Near aircraft/vehicles |
| Personal locator beacon | All remote operations |

---

## 5. Training Requirements

| Training | Personnel | Frequency |
|:---------|:----------|:----------|
| High altitude awareness | All crew | Initial + annual |
| Altitude sickness recognition | All crew | Initial + annual |
| High altitude flight operations | PICs | Initial + annual proficiency |
| Mountain weather interpretation | PICs | Initial + annual |
| Wilderness first aid | Team leads | Initial + 2 years |
| Cold weather operations | All crew | Initial + annual |
| Emergency communication systems | All crew | Initial + as needed |

---

## 6. Monitoring and Review

| Activity | Frequency |
|:---------|:----------|
| Altitude sickness symptom checks | Every 2 hours at altitude |
| Weather assessment | Continuous |
| Aircraft performance monitoring | During each flight |
| Incident/occurrence review | Per occurrence |
| Near miss analysis | Ongoing |
| FHA review | Annual |
| Control effectiveness audit | Annual |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-028 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
