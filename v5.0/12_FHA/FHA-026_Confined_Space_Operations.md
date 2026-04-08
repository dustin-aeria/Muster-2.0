# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Confined Space RPAS Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-026 |
| **Version** | v5.0 |
| **Activity** | Confined Space RPAS Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — confined space RPAS operations FHA | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added GPS-denied navigation protocols | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced atmospheric monitoring requirements | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — updated entry permit coordination | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — expanded collision avoidance procedures | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved lighting requirements | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added tank inspection protocols | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — expanded hazard identification matrix | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for BC OHS confined space regulations | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This FHA covers RPAS operations conducted in, around, or adjacent to confined spaces including tanks, vessels, silos, tunnels, pipelines, manholes, and other enclosed or partially enclosed structures. Operations include internal inspections, mapping, and monitoring activities where the aircraft operates within GPS-denied environments with limited visual line of sight.

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

### 3.1 Atmospheric Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Oxygen deficiency | Displacement by inert gases, consumption by rust/decay | Unconsciousness, death | 2 | 5 | 10-M | Atmospheric monitoring, 4-gas detector, entry procedures | 5-L |
| 1.2 | Toxic gas exposure | H2S, CO, ammonia, chlorine accumulation | Poisoning, respiratory failure | 2 | 5 | 10-M | Pre-entry gas testing, continuous monitoring, SCBA standby | 5-L |
| 1.3 | Explosive atmosphere | Methane, hydrocarbon vapors, dust | Explosion, fire, death | 2 | 5 | 10-M | LEL monitoring, intrinsically safe equipment, hot work permit | 5-L |
| 1.4 | Aircraft ignition source | Motor sparks, battery failure, hot components | Ignition of flammable atmosphere | 2 | 5 | 10-M | Explosion-proof aircraft, pre-purge verification, LEL <10% | 5-L |

### 3.2 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Complete darkness | No natural light in enclosed space | Loss of orientation, collision | 4 | 3 | 12-M | Onboard lighting, thermal camera, pre-mapped routes | 6-L |
| 2.2 | Inadequate lighting | Insufficient onboard illumination | Poor image quality, missed hazards | 3 | 3 | 9-M | High-lumen LED arrays, redundant lighting, supplemental ground lights | 4-L |
| 2.3 | Extreme temperatures | Process heat, cryogenic contents, no ventilation | Equipment failure, personnel heat stress | 3 | 4 | 12-M | Temperature monitoring, pre-flight thermal survey, operating limits | 6-L |
| 2.4 | High humidity/condensation | Enclosed wet environment | Lens fogging, electrical short | 3 | 3 | 9-M | Hydrophobic lens coatings, conformal coating, humidity limits | 4-L |
| 2.5 | Dust and particulate | Residue, rust, debris disturbance | Sensor degradation, motor failure | 3 | 3 | 9-M | Filtered motors, prop wash awareness, pre-cleaning | 4-L |

### 3.3 Navigation and Control Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | GPS denial | Enclosed metal structure blocks signals | Loss of position hold, drift | 4 | 4 | 16-H | Vision positioning system, SLAM, manual pilot proficiency | 8-M |
| 3.2 | Magnetic interference | Metal structure, electrical equipment | Compass errors, erratic flight | 4 | 3 | 12-M | Compass calibration, optical flow reliance, pre-flight interference check | 6-L |
| 3.3 | Radio signal interference | Metal enclosure, electromagnetic equipment | Lost link, loss of control | 3 | 4 | 12-M | Signal strength testing, antenna positioning, short-range operations | 6-L |
| 3.4 | Obstacle proximity | Walls, pipes, structural members | Collision, aircraft loss | 4 | 3 | 12-M | Obstacle avoidance sensors, slow speed limits, prop guards | 6-L |
| 3.5 | Narrow passages | Constricted openings, complex geometry | Collision, entrapment | 3 | 3 | 9-M | Aircraft size selection, pre-survey of passages, abort criteria | 4-L |
| 3.6 | Loss of visual contact | Enclosed structure, camera failure | Loss of situational awareness | 3 | 4 | 12-M | FPV system, redundant video link, automatic RTH on video loss | 6-L |

### 3.4 Personnel Safety Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Entrapment of personnel | Entering confined space for recovery | Confined space emergency | 2 | 5 | 10-M | No entry for aircraft recovery, aircraft considered expendable | 5-L |
| 4.2 | Emergency extraction difficulty | Complex access, remote location | Delayed rescue response | 2 | 5 | 10-M | Rescue team standby, extraction plan, communication protocols | 5-L |
| 4.3 | Engulfment hazard | Loose materials, liquids | Burial, drowning | 1 | 5 | 5-L | Lockout/tagout, isolation verification, contents confirmation | 3-L |
| 4.4 | Fall from height | Access to elevated entry points | Serious injury, death | 2 | 5 | 10-M | Fall protection, guardrails, harness and lifeline | 5-L |
| 4.5 | Physical exertion | Carrying equipment to access point | Heat stress, overexertion | 3 | 3 | 9-M | Team lifts, equipment carts, rest breaks | 4-L |

### 3.5 Equipment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Battery thermal runaway | Impact damage, short circuit in confined space | Fire in enclosed space | 2 | 5 | 10-M | Pre-flight battery inspection, LiPo-safe aircraft, abort on damage | 5-L |
| 5.2 | Lost aircraft recovery | Crash in inaccessible location | Entry required, exposure risk | 3 | 4 | 12-M | Tethered flight option, aircraft tracking, no-entry recovery policy | 6-L |
| 5.3 | Communication failure | Signal blocked by structure | Unable to direct operations | 3 | 3 | 9-M | Wired communication backup, repeater system, predetermined routes | 4-L |

---

## 4. Control Summary

### Critical Controls

| Control | Purpose | Responsible |
|:--------|:--------|:------------|
| Atmospheric testing | Verify safe breathing environment | Site Safety / Entry Supervisor |
| Confined space entry permit | Formal authorization and controls | Site Manager |
| GPS-denied flight capability | Stable flight without GPS | PIC |
| Emergency response plan | Rapid rescue capability | Operations Manager |
| No-entry recovery policy | Prevent personnel entry for aircraft | PIC |
| Pre-flight structural survey | Identify obstacles and passages | PIC / Survey Lead |
| Continuous gas monitoring | Detect atmospheric changes | Safety Watch |

### PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Hard hat | All confined space approaches |
| Safety glasses | All operations |
| Steel-toe boots | All operations |
| High-visibility vest | Near traffic or personnel areas |
| 4-gas detector | Within 10m of confined space |
| SCBA (standby) | Rescue team / entry supervisor |
| Fall protection harness | Elevated access points |
| Hearing protection | When noise exceeds 85 dB |
| Fire-resistant clothing | Potential flammable atmospheres |

---

## 5. Training Requirements

| Training | Personnel | Frequency |
|:---------|:----------|:----------|
| Confined space awareness | All crew | Initial + annual |
| Confined space entry certification | Entry personnel | Per regulatory requirement |
| GPS-denied flight operations | PICs | Initial + annual proficiency |
| Atmospheric monitoring | Safety watch | Initial + annual |
| Emergency rescue procedures | Rescue team | Annual + drill |
| FPV/indoor flight proficiency | PICs | Initial + quarterly practice |

---

## 6. Monitoring and Review

| Activity | Frequency |
|:---------|:----------|
| Pre-entry atmospheric testing | Before each entry |
| Continuous gas monitoring | During all operations |
| Incident/occurrence review | Per occurrence |
| Near miss analysis | Ongoing |
| FHA review | Annual |
| Control effectiveness audit | Annual |
| GPS-denied proficiency verification | Quarterly |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-026 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
