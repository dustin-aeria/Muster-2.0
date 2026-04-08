# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## LiDAR Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-015 |
| **Version** | v5.0 |
| **Activity** | RPAS-Based LiDAR Scanning Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — LiDAR operations FHA | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added laser safety classification | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced eye protection requirements | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — updated laser safety protocols | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — expanded payload management procedures | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved sensor calibration protocols | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added heavy payload handling procedures | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — enhanced data quality controls | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for Level 1 Complex LiDAR operations | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This FHA covers aerial LiDAR scanning operations using RPAS platforms, including sensor operation, data collection, and associated ground activities.

---

## 2. Hazard Analysis

### 2.1 LiDAR-Specific Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Laser eye exposure | Class 1M or higher laser | Eye injury | 2 | 4 | 8-M | Laser safety classification, eye protection if required | 4-L |
| 1.2 | Laser interference with aircraft | Pointing at manned aircraft | Pilot distraction, incident | 1 | 5 | 5-L | Flight coordination, nadir-pointing sensor, awareness | 3-L |
| 1.3 | Heavy payload issues | Increased aircraft weight | Reduced performance, crash | 2 | 3 | 6-L | Weight/balance verification, performance planning | 3-L |
| 1.4 | Electromagnetic interference | Sensor electronics | Control issues, data errors | 2 | 3 | 6-L | Pre-flight testing, shielding, separation | 3-L |

### 2.2 Equipment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Equipment damage (mounting) | Improper installation | Sensor loss, crash | 2 | 4 | 8-M | Mounting verification, redundant attachment | 4-L |
| 2.2 | Battery demands | Heavy payload + sensor power | Shortened flight time | 3 | 3 | 9-M | Conservative flight planning, monitoring | 4-L |
| 2.3 | Overheating | High processing demands | Equipment damage | 2 | 3 | 6-L | Temperature monitoring, ventilation | 3-L |
| 2.4 | IMU/GPS errors | Vibration, interference | Poor data quality | 2 | 2 | 4-L | Calibration, vibration dampening | 2-L |

### 2.3 Flight Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Low altitude flight | LiDAR resolution needs | Obstacle collision | 3 | 3 | 9-M | Site survey, obstacle mapping, margins | 4-L |
| 3.2 | Extended flight time | Large area coverage | Fatigue, reduced attention | 3 | 3 | 9-M | Crew rotation, breaks, alertness monitoring | 4-L |
| 3.3 | Complex flight patterns | Multiple passes, patterns | Disorientation | 2 | 3 | 6-L | Automated missions, clear flight plan | 3-L |
| 3.4 | Weight shift | CG changes with heavy sensor | Handling issues | 2 | 3 | 6-L | CG verification, test flight | 3-L |

### 2.4 Ground Control Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | GCP placement risks | Same as survey operations | Per FHA-009 | - | - | - | Per FHA-009 controls | - |
| 4.2 | Base station setup | Extended time in field | Exposure, terrain hazards | 2 | 2 | 4-L | Efficient workflow, awareness | 2-L |

### 2.5 Data Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Data loss | Storage failure, corruption | Project rework, delay | 2 | 3 | 6-L | Redundant storage, verification | 3-L |
| 5.2 | Inaccurate data | Calibration, processing error | Wrong deliverable | 2 | 3 | 6-L | Calibration procedure, QC checks | 3-L |
| 5.3 | Large file handling | High data volumes | Processing issues | 3 | 1 | 3-L | Adequate storage, processing workflow | 2-L |

---

## 3. Laser Safety

### Classification

| Class | Risk | Requirements |
|:------|:-----|:-------------|
| Class 1 | No hazard | No special precautions |
| Class 1M | Magnification hazard | Don't view through optics |
| Class 3R | Low risk | Avoid direct eye exposure |
| Class 3B/4 | Hazardous | PPE required, controlled area |

**Most aerial LiDAR systems are Class 1 or 1M.** Verify classification of specific sensor.

### Controls for Class 1M+

| Control | Requirement |
|:--------|:------------|
| Eye protection | If required by classification |
| No optical viewing | Don't view beam through binoculars |
| Beam direction | Nadir-pointing during operation |
| Aircraft avoidance | Do not point at manned aircraft |

---

## 4. Control Summary

### Pre-Flight

| Control | Requirement |
|:--------|:------------|
| Sensor mounting | Verified secure, redundant |
| Weight/balance | Within aircraft limits |
| CG verification | Confirmed acceptable |
| Laser safety check | Classification known, controls in place |
| Battery planning | Conservative for payload |
| Test flight | Recommended with new setup |

### During Flight

| Control | Requirement |
|:--------|:------------|
| Continuous monitoring | Battery, telemetry, data recording |
| Low altitude awareness | Obstacle vigilance |
| Aircraft traffic | Sensor off if traffic conflict |
| Temperature monitoring | Sensor and aircraft systems |

### Post-Flight

| Control | Requirement |
|:--------|:------------|
| Data verification | Confirm capture complete |
| Data backup | Redundant storage same day |
| Equipment inspection | Check mounting, condition |
| Battery care | Per battery procedures |

---

## 5. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Laser safety eyewear | If Class 3R or higher sensor |
| Standard field PPE | Per site requirements |

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| LiDAR sensor operation | Before LiDAR operations |
| Laser safety | Before using Class 1M+ sensors |
| Payload integration | Before new sensor deployment |
| Data processing | For quality assurance |

---

## 7. Pre-Operation Checklist

| Item | Verified |
|:-----|:---------|
| Sensor mounting secure | ☐ |
| Weight within limits | ☐ |
| CG acceptable | ☐ |
| Laser classification known | ☐ |
| Laser safety controls in place | ☐ |
| Battery capacity adequate | ☐ |
| Storage capacity adequate | ☐ |
| Flight plan accounts for payload | ☐ |

---

## 8. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-015 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
