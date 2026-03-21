# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Cargo Delivery Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-019 |
| **Version** | v5.0 |
| **Activity** | RPAS Cargo and Equipment Delivery |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Changes | Approved By |
|:--------|:-----|:--------|:------------|
| v1.0 | June 18, 2024 | Initial release — medium RPAS cargo delivery operations established | Dustin Wales |
| v2.0 | November 5, 2024 | Updated delivery zone procedures and sector-specific controls | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This FHA covers cargo delivery operations using medium RPAS (25-150 kg MTOW) such as the DJI FlyCart 30 for equipment delivery in energy, mining, infrastructure, and general cargo applications.

**Note:** For Heavy RPAS operations (>150 kg MTOW) using aircraft such as the DJI FlyCart 100, see **FHA-021: Heavy Cargo Operations**.

---

## 2. Aircraft Reference

**DJI FlyCart 30 (Medium RPAS):**

| Parameter | Value |
|:----------|:------|
| MTOW | 95 kg |
| Empty Weight | 55 kg |
| Max Payload (dual battery) | 30 kg |
| Max Payload (single battery) | 40 kg |
| Max Flight Time (no load) | 28 minutes |
| Max Range (no load) | 16 km |
| Max Range (30 kg load) | 5.8 km |
| Max Wind | 12 m/s |
| Operating Temperature | -20°C to +45°C |
| IP Rating | IP55 |
| Safety Systems | Redundant battery, integrated parachute |

**For Heavy RPAS (FlyCart 100, 220 kg MTOW):** See FHA-021

---

## 3. Hazard Analysis

### 3.1 Aircraft/Payload Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Heavy aircraft crash | Control loss, failure | Significant damage, injury | 2 | 5 | 10-M | Training, maintenance, conservative operations | 5-L |
| 1.2 | Cargo shift | Poor securing, turbulence | Loss of control, crash | 2 | 4 | 8-M | Proper loading, securing, weight verification | 4-L |
| 1.3 | Overloading | Exceeding payload limits | Performance degradation, crash | 2 | 4 | 8-M | Weight verification, scales, limits documented | 4-L |
| 1.4 | CG exceedance | Improper loading | Control difficulty | 2 | 4 | 8-M | CG verification, proper loading procedure | 4-L |
| 1.5 | Reduced performance | Heavy payload, weather | Unable to complete mission | 3 | 3 | 9-M | Conservative planning, abort criteria | 4-L |

### 3.2 Delivery Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Dropped cargo | Release failure, aircraft issue | Damage, injury | 2 | 4 | 8-M | Zone clearance, controlled delivery, testing | 4-L |
| 2.2 | Person struck by cargo | Personnel in zone | Injury | 2 | 5 | 10-M | Zone clearance, communication, exclusion zones | 4-L |
| 2.3 | Hard landing with cargo | Pilot error, wind gust | Cargo/aircraft damage | 2 | 3 | 6-L | Training, wind limits, controlled approach | 3-L |
| 2.4 | Winch failure | Mechanical failure | Cargo stuck, mission failure | 2 | 3 | 6-L | Pre-flight testing, maintenance | 3-L |
| 2.5 | Inadvertent release | System error, operator error | Cargo dropped wrong location | 2 | 3 | 6-L | Procedural controls, confirmation | 3-L |

### 3.3 Site/Environment Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Obstacle collision | Unfamiliar site, wind | Crash, cargo loss | 2 | 4 | 8-M | Site survey, flight planning, margins | 4-L |
| 3.2 | Power line strike | Unidentified lines | Crash, outage | 2 | 5 | 10-M | Site survey, route planning, standoff | 4-L |
| 3.3 | Wind at altitude | Heavy aircraft in wind | Control difficulty | 3 | 3 | 9-M | Wind limits, abort criteria | 4-L |
| 3.4 | Landing zone unsuitable | Soft/uneven ground | Damage, tip-over | 2 | 3 | 6-L | Landing zone assessment, alternate sites | 3-L |
| 3.5 | Remote location | Distance from support | Delayed response to issues | 2 | 3 | 6-L | Communication, planning, emergency kit | 3-L |

### 3.4 Energy Sector Specific

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Flammable atmosphere | Oil & gas operations | Ignition risk | 2 | 5 | 10-M | Hot work protocols, distance from sources | 4-L |
| 4.2 | Industrial equipment | Active operations | Collision, interference | 2 | 4 | 8-M | Coordination, exclusion zones | 4-L |
| 4.3 | EMI/interference | Industrial electronics | Control issues | 2 | 3 | 6-L | Pre-flight testing, monitoring | 3-L |

### 3.5 Mining Sector Specific

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Blasting operations | Active mining | Timing conflict | 2 | 5 | 10-M | Coordination, no-fly during blasting | 4-L |
| 5.2 | Dust/visibility | Mining operations | Visual loss | 2 | 3 | 6-L | Weather monitoring, timing | 3-L |
| 5.3 | Heavy equipment | Mine operations | Coordination failure | 2 | 4 | 8-M | Communication, designated areas | 4-L |

### 3.6 Urban/Infrastructure Specific

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 6.1 | Bystanders | Urban environment | Strike on uninvolved person | 2 | 5 | 10-M | Site control, Advanced cert, exclusion zones | 4-L |
| 6.2 | Buildings/structures | Urban obstacles | Collision | 3 | 4 | 12-M | Site survey, flight planning, altitude | 6-L |
| 6.3 | Multiple power lines | Dense infrastructure | Strike hazard | 3 | 4 | 12-M | Thorough site survey, route planning | 6-L |
| 6.4 | Traffic | Urban roads | Vehicle interference | 2 | 3 | 6-L | Site control, designated zones | 3-L |

---

## 4. Control Summary

### Pre-Flight

| Control | Requirement |
|:--------|:------------|
| Weight verification | Scale weighing of all cargo |
| CG check | Within aircraft limits |
| Loading procedure | Proper securing, inspection |
| Site assessment | Delivery zone confirmed suitable |
| Route planning | Obstacles identified, avoided |
| Weather | Within aircraft limits |

### During Operations

| Control | Requirement |
|:--------|:------------|
| Zone clearance | Confirmed before approach |
| Communication | Continuous with ground |
| Monitoring | Aircraft performance, battery |
| Abort criteria | Defined and followed |

### Sector-Specific

| Sector | Additional Controls |
|:-------|:--------------------|
| Energy | Hot work coordination, gas monitoring |
| Mining | Blast schedule, dust assessment |
| Urban | Enhanced site control, bystander management |

---

## 5. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear | Always |
| High-visibility | Near operations, industrial sites |
| Hard hat | Industrial sites |
| Hearing protection | Near aircraft operations |
| Gloves | Cargo handling |

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Medium RPAS endorsement | Before cargo delivery operations |
| Cargo aircraft type | Before operating specific aircraft |
| Sector-specific | Before operations in that sector |
| Loading and balance | Before conducting deliveries |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

## 8. Related Documents

| Doc ID | Title |
|:-------|:------|
| **FHA-021** | **Heavy Cargo Operations (>150 kg MTOW)** |
| OPS-013 | Cargo Delivery Operations Policy |
| OPS-013-PR | Cargo Delivery Procedure |
| FRM-CARGO-PREFLIGHT-FC30 | FlyCart 30 Pre-Flight Checklist |
| FRM-CARGO-WB | Weight & Balance Calculator |
| QRC-DELIVERY | Cargo Delivery Quick Reference |

---

**Document Control:** FHA-019 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
