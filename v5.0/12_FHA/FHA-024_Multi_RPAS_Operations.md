# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Multi-RPAS Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-024 |
| **Version** | v5.0 |
| **Activity** | Multi-RPAS Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — multi-RPAS operations FHA | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — updated aircraft separation requirements | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced RF frequency management | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — added pilot workload controls | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — expanded coordination protocols | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved mid-air collision prevention | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added swarm operation considerations | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — expanded hazard identification matrix | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for Level 1 Complex multi-RPAS operations | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This Formal Hazard Assessment addresses the risks associated with conducting operations involving multiple Remotely Piloted Aircraft Systems (RPAS) operating simultaneously within the same operational area. Multi-RPAS operations present unique challenges related to aircraft separation, radio frequency management, pilot workload distribution, coordination protocols, and the potential for mid-air collisions between RPAS.

This assessment covers operations where two or more RPAS are airborne at the same time, whether controlled by a single pilot, multiple pilots, or swarm/formation flight systems. This FHA applies to all Aeria Solutions Ltd personnel involved in planning, conducting, and supporting multi-RPAS operations.

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
| 2 | Minor — First aid injury, minor operational delays, single aircraft damage |
| 3 | Moderate — Medical treatment, significant operational impact, multiple aircraft damage |
| 4 | Major — Serious injury, major operational disruption, mission failure |
| 5 | Catastrophic — Fatality, complete loss of multiple aircraft, third-party damage |

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
| MR-01 | Frequency Conflict Between RPAS | Multiple aircraft on same or adjacent frequencies | Control link interference, loss of control of one or more aircraft | 3 | 4 | 12 High | Assign unique frequencies to each aircraft; frequency separation planning; pre-flight interference check; use frequency-hopping systems | 6 Medium |
| MR-02 | Inadequate Separation Planning | Failure to define airspace blocks or separation criteria | Collision risk during operation, confusion over aircraft positions | 3 | 4 | 12 High | Define vertical and horizontal separation minimums; assign airspace blocks; document separation in flight plan; brief all pilots | 6 Medium |
| MR-03 | Insufficient Visual Observers | Too few observers for number of aircraft | Inability to maintain visual contact with all aircraft | 4 | 4 | 16 High | Minimum one VO per aircraft operating in different airspace blocks; VO briefing on assigned aircraft; distinctive aircraft markings | 8 Medium |
| MR-04 | Controller/Transmitter Confusion | Similar controllers for multiple aircraft, mislabeling | Wrong aircraft responds to commands, collision | 3 | 4 | 12 High | Unique labeling of all controllers; color coding system; controller verification before each input; physical separation of control stations | 6 Medium |
| MR-05 | Incompatible Return-to-Home Settings | Multiple aircraft with same RTH point | Collision during automated return sequences | 3 | 5 | 15 High | Assign unique RTH points for each aircraft; verify RTH settings pre-flight; time-separated RTH sequences; altitude-separated RTH | 6 Medium |

### 3.2 In-Flight Hazards — Aircraft Separation

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| MR-06 | Mid-Air Collision Between RPAS | Loss of separation, pilot error, communication failure | Destruction of multiple aircraft, debris falling to ground | 3 | 4 | 12 High | Defined separation minimums (minimum 30m horizontal, 15m vertical); continuous position reporting; collision avoidance maneuver briefing | 6 Medium |
| MR-07 | Wake Turbulence Encounter | Smaller RPAS flying in wake of larger aircraft | Loss of control, structural stress | 3 | 3 | 9 Medium | Brief pilots on wake turbulence; maintain separation behind larger aircraft; avoid crossing behind and below other RPAS | 4 Medium |
| MR-08 | Loss of Positional Awareness | Multiple similar-looking aircraft, loss of visual contact | Aircraft misidentification, wrong control inputs | 4 | 4 | 16 High | Distinctive aircraft markings (colors, lights, streamers); assign visual observers to specific aircraft; use telemetry position displays | 8 Medium |
| MR-09 | Airspace Block Violation | Pilot error, GPS drift, wind effects | One aircraft enters another's assigned airspace | 4 | 4 | 16 High | GPS position monitoring; audible airspace boundary warnings; immediate avoidance maneuver protocol; increased separation buffers | 8 Medium |
| MR-10 | Simultaneous Emergency on Multiple Aircraft | Battery failures, weather, system-wide issue | Overwhelmed response capacity, multiple crashes | 2 | 5 | 10 High | Pre-assigned emergency priority (lowest battery first); independent emergency landing zones; emergency coordinator role | 4 Medium |

### 3.3 In-Flight Hazards — Communication and Coordination

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| MR-11 | Radio Frequency Interference | Simultaneous transmissions, frequency overlap | Loss of control link, degraded video | 3 | 4 | 12 High | Frequency management plan; directional antennas; power level coordination; real-time spectrum monitoring | 6 Medium |
| MR-12 | Pilot-to-Pilot Communication Failure | Radio failure, high workload, noise | Missed position reports, uncoordinated maneuvers | 3 | 4 | 12 High | Dedicated pilot coordination frequency; standardized communication protocol; backup visual signals; reduced operations tempo | 6 Medium |
| MR-13 | Coordination Failure During Maneuvers | Simultaneous conflicting maneuvers, misunderstood intentions | Near-miss or collision | 3 | 4 | 12 High | Positive coordination required before maneuvers; maneuver priority protocol; sterile cockpit during critical phases | 6 Medium |
| MR-14 | Telemetry Display Confusion | Multiple aircraft data on shared display, data latency | Wrong aircraft status monitored, delayed response to emergency | 3 | 3 | 9 Medium | Separate telemetry displays per aircraft; color-coded data streams; designated monitor per aircraft; audible alerts | 4 Medium |

### 3.4 In-Flight Hazards — Pilot Workload

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| MR-15 | Single Pilot Controlling Multiple RPAS | Pilot capacity exceeded, divided attention | Loss of control, delayed response, collision | 3 | 4 | 12 High | Maximum two RPAS per pilot unless automated; reduced complexity operations; additional crew support; conservative mission profiles | 6 Medium |
| MR-16 | Pilot Fatigue During Extended Operations | Long duration multi-RPAS missions | Degraded decision-making, slower reactions | 3 | 4 | 12 High | Pilot duty time limits; mandatory rest breaks; crew rotation plan; reduced aircraft count for extended operations | 6 Medium |
| MR-17 | Task Saturation During Emergency | Emergency on one aircraft while managing others | Inadequate response, secondary incidents | 3 | 4 | 12 High | Emergency coordinator role; other aircraft to holding pattern; immediate workload reduction; pre-planned emergency responses | 6 Medium |
| MR-18 | Distraction by Ground Operations | Payload management, data collection while flying | Divided attention, delayed control inputs | 4 | 3 | 12 High | Dedicated payload operators; pilot focused solely on flight; separated duties; automation of routine tasks | 6 Medium |

### 3.5 Post-Flight and System Hazards

| ID | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:---|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| MR-19 | Landing Zone Conflicts | Multiple aircraft landing simultaneously | Collision during landing, ground incidents | 3 | 3 | 9 Medium | Sequenced landings; separate landing zones; positive clearance before landing; landing coordinator | 4 Medium |
| MR-20 | Equipment Tracking and Maintenance | Confusion over which equipment used on which aircraft | Missed maintenance, battery cycling errors | 4 | 3 | 12 High | Equipment serialization and logging; dedicated equipment sets per aircraft; post-flight equipment reconciliation | 6 Medium |

---

## 4. Control Summary

### 4.1 Critical Controls

| Control Category | Required Controls |
|:-----------------|:------------------|
| Frequency Management | Unique frequencies per aircraft; minimum frequency separation; pre-flight interference check |
| Separation Standards | Minimum 30m horizontal, 15m vertical separation; defined airspace blocks per aircraft |
| Visual Observation | Minimum one visual observer per aircraft in separate airspace; distinctive aircraft markings |
| Communication Protocol | Dedicated pilot coordination frequency; standardized position reports; maneuver coordination |
| Controller Management | Unique labeling and color coding; physical separation of control stations; verification before input |
| Emergency Procedures | Pre-assigned emergency priority; independent emergency landing zones; emergency coordinator |
| Workload Management | Maximum aircraft per pilot limits; dedicated roles; crew rotation for extended operations |

### 4.2 Personal Protective Equipment

| PPE Item | Requirement | Application |
|:---------|:------------|:------------|
| High-Visibility Vest | Mandatory | All personnel in operational area |
| Safety Footwear | Mandatory | All personnel in operational area |
| Communication Headset | Mandatory | All pilots and visual observers |
| Eye Protection | Recommended | Glare reduction for visual observation |
| Hearing Protection | As required | High-noise environments |

---

## 5. Training Requirements

| Training Element | Requirement | Frequency |
|:-----------------|:------------|:----------|
| Multi-RPAS Operations Procedures | All flight crew | Annual |
| Frequency Management and Interference | All pilots | Annual |
| Crew Resource Management for Multi-RPAS | All flight crew | Annual |
| Emergency Procedures — Multi-Aircraft | All flight crew | Annual |
| Communication Protocols | All flight crew | Initial and annual |
| Visual Observer — Multi-Aircraft Tracking | All visual observers | Annual |
| Workload Management | All pilots | Annual |
| Practical Multi-RPAS Exercise | All pilots | Semi-annual |

---

## 6. Monitoring and Review

| Review Activity | Frequency | Responsibility |
|:----------------|:----------|:---------------|
| FHA Document Review | Annual | Operations Manager |
| Multi-RPAS Operation Debrief | After each operation | Pilot-in-Command |
| Incident/Near-Miss Analysis | After each occurrence | Safety Manager |
| Control Effectiveness Assessment | Annual | Operations Manager |
| Frequency Conflict Analysis | After each operation | Technical Manager |
| Crew Performance Review | Quarterly | Operations Manager |
| Training Records Audit | Semi-annual | Training Manager |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Prepared By | Operations Manager | _________________ | March 11, 2026 |
| Reviewed By | Safety Manager | _________________ | March 11, 2026 |
| Approved By | Dustin Wales, Accountable Executive | _________________ | March 11, 2026 |

---

**Document Control:** FHA-024 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
