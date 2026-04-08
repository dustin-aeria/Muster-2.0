# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Wildfire and Hazardous Environment Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-025 |
| **Version** | v5.0 |
| **Activity** | Wildfire and Hazardous Environment Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — wildfire environment operations FHA | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added air quality monitoring requirements | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced TFR awareness procedures | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — updated smoke visibility protocols | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — expanded aircraft deconfliction procedures | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved evacuation planning | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added thermal damage assessment protocols | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — expanded hazard identification matrix | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for BC Wildfire Service coordination requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This Formal Hazard Assessment addresses the risks associated with conducting Remotely Piloted Aircraft System (RPAS) operations in wildfire environments and other hazardous atmospheric conditions. This includes operations supporting wildfire monitoring, damage assessment, search and rescue, infrastructure inspection in fire zones, and any operation where smoke, heat, hazardous air quality, or active emergency response activities are present.

This assessment covers hazards related to reduced visibility from smoke, air quality risks to personnel, rapidly changing weather conditions, coordination with firefighting aircraft and ground crews, restricted airspace around active fires, and emergency evacuation requirements. This FHA applies to all Aeria Solutions Ltd personnel involved in planning, conducting, and supporting operations in wildfire and hazardous environments.

---

## 2. Risk Matrix

**Likelihood (L)**

| Rating | Description |
|:-------|:------------|
| 1 | Rare — May occur only in exceptional circumstances |
| 2 | Unlikely — Could occur but not expected |
| 3 | Possible — Might occur at some time |
| 4 | Likely — Will probably occur in most circumstances |
| 5 | Almost Certain — Expected to occur in most circumstances |

**Severity (S)**

| Rating | Description |
|:-------|:------------|
| 1 | Negligible — No injury, minimal operational impact |
| 2 | Minor — First aid injury, minor operational delays |
| 3 | Moderate — Medical treatment, significant operational impact |
| 4 | Major — Serious injury, major operational disruption, interference with emergency operations |
| 5 | Catastrophic — Fatality, complete operational failure, interference with life-safety operations |

**Risk Level = Likelihood x Severity**

| Risk Score | Risk Level | Action Required |
|:-----------|:-----------|:----------------|
| 1-4 | Low | Monitor and manage through routine procedures |
| 5-9 | Medium | Specific controls required, management oversight |
| 10-16 | High | Senior management attention, significant controls |
| 17-25 | Extreme | Immediate action required, operation may not proceed |

---

## 3. Hazard Analysis

### 3.1 Pre-Flight Hazards

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| WF-01 | Unauthorized Entry into Fire Restricted Airspace | Failure to identify active fire TFRs or restricted areas | Interference with firefighting aircraft, collision, prosecution | 3 | 5 | 15 High | Check NAV CANADA NOTAMs for fire restrictions; coordinate with Provincial Wildfire Agency; obtain authorization from Air Attack Supervisor; verify airspace status immediately before launch | 4 Medium |
| WF-02 | Inadequate Coordination with Fire Command | Failure to integrate with Incident Command System (ICS) | Operational conflicts, interference with firefighting, denied access | 3 | 5 | 15 High | Contact Incident Commander or Air Operations Branch Director minimum 24 hours prior; attend operational briefings; obtain assigned frequencies and call signs | 4 Medium |
| WF-03 | Insufficient Air Quality Assessment | Failure to evaluate smoke and air quality conditions | Personnel health risks, equipment damage | 4 | 4 | 16 High | Monitor Air Quality Health Index (AQHI); conduct particulate monitoring at site; establish air quality abort criteria; verify equipment rated for conditions | 8 Medium |
| WF-04 | Inadequate Evacuation Planning | No personal evacuation plan for crew | Personnel trapped by fire progression, injury or death | 2 | 5 | 10 High | Pre-identify multiple evacuation routes; maintain vehicle ready for immediate departure; monitor fire progression; establish evacuation triggers; personnel accountability system | 4 Medium |
| WF-05 | Equipment Suitability for Heat and Smoke | Standard equipment not rated for extreme conditions | Equipment failure, reduced performance, fire hazard | 3 | 4 | 12 High | Verify equipment temperature ratings; protect equipment from direct heat exposure; plan reduced flight times; carry fire-resistant equipment cases | 6 Medium |

### 3.2 In-Flight Hazards — Visibility and Navigation

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| WF-06 | Loss of Visual Contact in Smoke | Smoke drift, changing visibility conditions | Loss of visual line of sight, inability to see-and-avoid | 4 | 4 | 16 High | Continuous visibility assessment; immediate RTH if visibility <500m; use visual observer upwind; establish smoke movement monitoring | 8 Medium |
| WF-07 | GPS Degradation in Smoke Conditions | Heavy particulate matter, atmospheric anomalies | Navigation errors, position uncertainty, geofence violations | 3 | 4 | 12 High | Monitor GPS signal quality continuously; use multiple GNSS constellations; establish manual navigation backup; reduced reliance on autonomous modes | 6 Medium |
| WF-08 | Sensor Degradation from Smoke | Smoke particles affecting cameras and sensors | Reduced image quality, thermal sensor interference | 4 | 2 | 8 Medium | Pre-clean all sensors; carry lens cleaning supplies; adjust camera settings for smoke; plan for reduced data quality | 4 Medium |
| WF-09 | Ash and Particulate Ingestion | Flying through smoke plumes or ash columns | Motor damage, bearing contamination, aircraft failure | 3 | 4 | 12 High | Avoid visible smoke columns; post-flight motor inspection; carry spare motors; reduced motor cycle limits in contaminated conditions | 6 Medium |

### 3.3 In-Flight Hazards — Atmospheric Conditions

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| WF-10 | Severe Turbulence and Updrafts | Convective activity from fire heat, unstable atmosphere | Loss of control, structural stress, altitude excursions | 4 | 4 | 16 High | Maintain safe distance from active fire (minimum 500m horizontal, 300m vertical above flame height); monitor for convective indicators; immediate descent if turbulence encountered | 8 Medium |
| WF-11 | Rapidly Shifting Winds | Fire-induced wind changes, thermal effects | Unexpected drift, loss of control, collision with obstacles | 4 | 4 | 16 High | Continuous wind monitoring; conservative wind limits (reduce by 50%); maintain increased margins from obstacles; immediate RTH if winds exceed limits | 8 Medium |
| WF-12 | Thermal Damage to Aircraft | Radiant heat from fire, hot air mass | Battery thermal runaway, structural damage, fire | 2 | 5 | 10 High | Maintain minimum 500m from active flame; monitor aircraft temperature telemetry; establish thermal abort criteria; avoid flying over hot spots | 4 Medium |
| WF-13 | Sudden Weather Changes | Fire-influenced weather, rapid condition deterioration | Operations in unsafe conditions, entrapment | 3 | 4 | 12 High | Continuous weather monitoring; brief on fire weather forecasts; establish conservative weather minimums; monitor for pyrocumulus development | 6 Medium |

### 3.4 In-Flight Hazards — Air Traffic

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| WF-14 | Conflict with Firefighting Aircraft | Air tankers, helicopters, bird dogs operating in area | Mid-air collision, interference with firefighting | 2 | 5 | 10 High | Continuous monitoring of fire traffic frequency; immediate grounding when manned aircraft in area; coordinate all flights through Air Attack; manned aircraft always have priority | 4 Medium |
| WF-15 | Conflict with Helicopter Bucket Operations | Helicopters on approach to water sources | Collision during bucket fill or transit | 2 | 5 | 10 High | Identify all water sources and approaches; avoid helicopter transit routes; coordinate through Air Attack; maintain 500m from active helicopter operations | 4 Medium |
| WF-16 | Conflict with Emergency Medical Aircraft | Medevac operations for injured firefighters | Interference with life-safety operations | 2 | 5 | 10 High | Monitor emergency frequencies; immediate grounding for medevac; coordinate with Incident Command; establish notification protocol | 4 Medium |
| WF-17 | Unannounced Aircraft Arrival | Pop-up fire support aircraft, media helicopters | Unexpected traffic conflict | 3 | 5 | 15 High | Continuous frequency monitoring; maintain visual scan even in assigned airspace; coordinate exclusive time windows where possible | 6 Medium |

### 3.5 Personnel and Ground Hazards

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| WF-18 | Personnel Smoke Inhalation | Extended exposure to smoke, inadequate respiratory protection | Respiratory injury, illness, incapacitation | 4 | 4 | 16 High | Mandatory N95/P100 respirators; air quality monitoring; exposure time limits; rotation of personnel; medical screening for respiratory conditions | 8 Medium |
| WF-19 | Heat Stress and Dehydration | High temperatures, radiant heat, physical exertion | Heat exhaustion, impaired judgment, medical emergency | 4 | 4 | 16 High | Mandatory hydration protocol; shade structures at GCS; work/rest cycles; heat stress monitoring; immediate response supplies | 8 Medium |
| WF-20 | Fire Entrapment of Crew | Rapid fire spread, changing wind direction | Personnel injury or death, equipment loss | 2 | 5 | 10 High | Continuous fire behavior monitoring; multiple evacuation routes; vehicle positioned for immediate departure; fire shelter training; communication with fire lookouts | 4 Medium |

---

## 4. Control Summary

### 4.1 Critical Controls

| Control Category | Required Controls |
|:-----------------|:------------------|
| Airspace Authorization | Coordination with Provincial Wildfire Agency and Air Attack Supervisor; NOTAM review; TFR compliance |
| ICS Integration | Registration with Incident Command; attendance at operational briefings; assigned frequencies and call signs |
| Air Quality Management | AQHI monitoring; particulate measurement; exposure time limits; respiratory protection |
| Evacuation Planning | Multiple evacuation routes; vehicle ready for departure; fire behavior monitoring; evacuation triggers |
| Air Traffic Coordination | Continuous frequency monitoring; immediate grounding for manned aircraft; coordination through Air Attack |
| Separation from Fire | Minimum 500m horizontal from active flame; 300m vertical above flame height; thermal monitoring |
| Personnel Protection | Heat stress protocols; hydration requirements; work/rest cycles; smoke exposure limits |

### 4.2 Personal Protective Equipment

| PPE Item | Requirement | Application |
|:---------|:------------|:------------|
| N95/P100 Respirator | Mandatory | All personnel in smoke conditions |
| Fire-Resistant Clothing | Mandatory | All personnel in fire zones (minimum Nomex or equivalent) |
| Safety Footwear (Fire Rated) | Mandatory | All personnel in fire zones |
| High-Visibility Vest | Mandatory | All personnel in operational area |
| Eye Protection | Mandatory | Smoke and debris protection |
| Hard Hat | As required | Areas with falling debris risk |
| Fire Shelter | Mandatory | All personnel in active fire zones |
| Communication Radio | Mandatory | All personnel for emergency coordination |
| First Aid Kit (Burns) | Mandatory | Available at all operations |

---

## 5. Training Requirements

| Training Element | Requirement | Frequency |
|:-----------------|:------------|:----------|
| Wildfire Environment Operations | All flight crew | Annual |
| Incident Command System (ICS) Awareness | All personnel | Initial and every 3 years |
| Air Quality and Respiratory Protection | All personnel | Annual |
| Heat Stress Prevention and Recognition | All personnel | Annual |
| Fire Behavior Awareness | All personnel | Annual |
| Emergency Evacuation Procedures | All personnel | Annual |
| Coordination with Firefighting Aircraft | All pilots | Annual |
| Fire Shelter Deployment | All personnel operating in active fire zones | Annual |
| Practical Wildfire Exercise | All flight crew | Annual |

---

## 6. Monitoring and Review

| Review Activity | Frequency | Responsibility |
|:----------------|:----------|:---------------|
| FHA Document Review | Annual | Operations Manager |
| Post-Wildfire Operation Debrief | After each operation | Pilot-in-Command |
| Incident/Near-Miss Analysis | After each occurrence | Safety Manager |
| Control Effectiveness Assessment | Annual | Operations Manager |
| Air Quality Exposure Records Review | After each operation | Safety Manager |
| Personnel Health Monitoring | After extended deployments | Safety Manager |
| Coordination Feedback with Fire Agencies | After each deployment | Operations Manager |
| Equipment Condition Assessment | After each wildfire deployment | Technical Manager |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Prepared By | Operations Manager | _________________ | March 11, 2026 |
| Reviewed By | Safety Manager | _________________ | March 11, 2026 |
| Approved By | Dustin Wales, Accountable Executive | _________________ | March 11, 2026 |

---

**Document Control:** FHA-025 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
