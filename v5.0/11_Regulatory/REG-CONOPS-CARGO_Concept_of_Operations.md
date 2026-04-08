# AERIA SOLUTIONS LTD

# CONCEPT OF OPERATIONS

## RPAS Cargo Delivery Operations

---

| Field | Value |
|:------|:------|
| **Document Number** | REG-CONOPS-CARGO |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — cargo delivery CONOPS template | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added mission flow diagrams | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced operational scenarios | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — updated CONOPS format | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — added emergency response procedures | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved communication plan section | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added FlyCart 30 specifications | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — added FlyCart 100 Heavy RPAS operations | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for Level 1 Complex/RPOC BVLOS cargo delivery | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Executive Summary

This Concept of Operations (CONOPS) describes Aeria Solutions Ltd's RPAS-based cargo delivery operations using medium and heavy cargo RPAS platforms, specifically the DJI FlyCart 30 and DJI FlyCart 100. This document supports Special Flight Operations Certificate (SFOC) applications and defines the operational framework ensuring safe, compliant cargo delivery services.

---

## 2. Purpose

This CONOPS:
- Describes the nature and scope of cargo delivery operations
- Identifies aircraft, crew, and equipment requirements
- Defines operational scenarios and limitations
- Establishes safety measures and risk mitigations
- Supports SFOC applications to Transport Canada
- Meets Heavy RPAS documentation requirements for FC100 operations

---

## 3. Operational Overview

### 3.1 Mission Profile

Aeria Solutions provides RPAS cargo delivery services for:
- Remote site supply delivery (mining, energy, forestry)
- Medical and emergency supply delivery
- Equipment transport to difficult access locations
- Infrastructure project support
- Urban logistics (where authorized)

### 3.2 Aircraft Fleet

| Aircraft | Category | Max Payload | Primary Use |
|:---------|:---------|:------------|:------------|
| DJI FlyCart 30 | Medium RPAS (95 kg MTOW) | 30-40 kg | Standard cargo delivery |
| DJI FlyCart 100 | Heavy RPAS (220 kg MTOW) | 65 kg | Heavy cargo, critical supply |

### 3.3 Operational Concept

```
TYPICAL MISSION FLOW

Pickup Site                     Delivery Site
    |                               |
    | Cargo Loading                 | Cargo Unloading
    | Pre-flight Checks            | or Winch Delivery
    |                               |
    +-----> Takeoff                 |
              |                     |
              | En Route Flight     |
              | (VLOS/BVLOS per     |
              | authorization)      |
              |                     |
              +-----> Approach ---->+
                                    |
                              Landing/Delivery
                                    |
                              Return Flight
                              (if applicable)
```

---

## 4. Aircraft Specifications

### 4.1 DJI FlyCart 30

| Parameter | Specification |
|:----------|:--------------|
| Classification | Medium RPAS |
| MTOW | 95 kg |
| Empty Weight | 55 kg |
| Max Payload | 30 kg (dual batt) / 40 kg (single batt) |
| Max Flight Time | 28 min (no load) / 10-16 min (loaded) |
| Max Range | 16 km (no load) / 5.8-9.3 km (loaded) |
| Max Speed | 20 m/s |
| Max Wind | 12 m/s |
| Operating Temp | -20°C to +45°C |
| IP Rating | IP55 |
| Delivery Modes | Cargo bay, winch |
| Regulatory | SFOC required |

### 4.2 DJI FlyCart 100

| Parameter | Specification |
|:----------|:--------------|
| Classification | **Heavy RPAS** |
| MTOW | **220 kg** |
| Empty Weight | 155 kg |
| Max Payload | 65 kg |
| Max Flight Time | 32 min (no load) / 12-14 min (loaded) |
| Max Range | 20 km (no load) / 7.5 km (loaded) |
| Max Speed | 18 m/s |
| Max Wind | 15 m/s |
| Operating Temp | -20°C to +45°C |
| IP Rating | IP55 |
| Delivery Modes | Cargo bay, winch |
| Regulatory | **SFOC mandatory, direct TC engagement** |

### 4.3 Safety Systems Summary

| System | FlyCart 30 | FlyCart 100 |
|:-------|:-----------|:------------|
| Flight Controller | Redundant | Triple-redundant |
| Motors | 8 (redundant) | 8 (octa-redundant) |
| Batteries | Dual option | Quad system |
| Parachute | Single integrated | Dual independent |
| ADS-B | Receiver | In/Out transponder |
| DAA | Basic | Full system |
| Black Box | No | Yes |
| Cargo Jettison | Manual | Automatic capable |

---

## 5. Operational Scenarios

### 5.1 Scenario 1: Standard Site-to-Site Delivery

**Description:** Direct cargo delivery between two established sites within VLOS range.

| Parameter | Value |
|:----------|:------|
| Distance | <2 km |
| Duration | <15 min |
| Cargo | Up to aircraft max |
| Aircraft | FC30 or FC100 |
| Crew | PIC + VO minimum |
| Airspace | Uncontrolled preferred |

**Procedure:**
1. Pickup site preparation and cargo loading
2. Pre-flight checks completed
3. Takeoff and climb to transit altitude
4. Direct flight to delivery site (VLOS)
5. Approach and delivery (landing or winch)
6. Return flight to base

### 5.2 Scenario 2: Extended Range Delivery (BVLOS)

**Description:** Cargo delivery beyond visual line of sight requiring enhanced procedures.

| Parameter | Value |
|:----------|:------|
| Distance | 2-15 km |
| Duration | 15-45 min |
| Cargo | Per endurance calculation |
| Aircraft | FC30 or FC100 |
| Crew | PIC + VO at each end minimum |
| Airspace | Per SFOC authorization |

**Additional Requirements:**
- SFOC with BVLOS authorization
- Visual observers at key points
- Enhanced communication plan
- DAA system active (FC100)
- ADS-B monitoring

### 5.3 Scenario 3: Heavy Cargo Delivery (FC100)

**Description:** Operations utilizing the Heavy RPAS FlyCart 100 for maximum payload missions.

| Parameter | Value |
|:----------|:------|
| Distance | Per mission |
| Cargo | 40-65 kg |
| Aircraft | FC100 only |
| Crew | **PIC + Safety Pilot + 2 Ground Crew** |
| Preparation | Enhanced procedures |

**Additional Requirements:**
- SFOC with Heavy RPAS authorization
- 50m exclusion zones
- Ground crew coordination
- Parachute system verification
- Real-time monitoring station

### 5.4 Scenario 4: Emergency/Medical Supply

**Description:** Time-critical delivery of medical or emergency supplies.

| Parameter | Value |
|:----------|:------|
| Response Time | Minimize |
| Cargo | Medical supplies, emergency equipment |
| Priority | High |
| Coordination | Emergency services as required |

**Special Considerations:**
- Pre-positioned aircraft when possible
- Streamlined authorization (if pre-approved)
- Priority communication channels
- Designated landing zones at medical facilities

---

## 6. Crew Requirements

### 6.1 FlyCart 30 Operations

| Role | Required | Qualifications |
|:-----|:---------|:---------------|
| PIC | Yes | Advanced cert, FC30 type training |
| VO | Recommended | VO training, radio equipped |
| Ground Crew | Mission-dependent | Cargo handling training |

### 6.2 FlyCart 100 Operations (Heavy RPAS)

| Role | Required | Qualifications |
|:-----|:---------|:---------------|
| PIC | Yes | Advanced cert, FC100 type training, Heavy RPAS training |
| Safety Pilot | **Yes** | Same as PIC |
| VO | Per mission | VO training |
| Ground Crew Lead | **Yes** | Heavy RPAS ground ops training |
| Ground Crew | **Yes (min 1)** | Cargo handling training |

**Minimum Crew for FC100:** 4 personnel (PIC, Safety Pilot, 2 Ground Crew)

---

## 7. Operational Limitations

### 7.1 Weather Limitations

| Parameter | FlyCart 30 | FlyCart 100 |
|:----------|:-----------|:------------|
| Max Wind | 12 m/s | 15 m/s |
| Max Gusts | 15 m/s | 18 m/s |
| Visibility | ≥3 km | ≥5 km |
| Precipitation | Light/None | None |
| Temperature | -20 to +45°C | -20 to +45°C |
| Icing | Prohibited | Prohibited |
| Thunderstorms | 10 km minimum | 15 km minimum |

### 7.2 Operational Limitations

| Limitation | FlyCart 30 | FlyCart 100 |
|:-----------|:-----------|:------------|
| Day Operations | Authorized | Authorized |
| Night Operations | Per SFOC | Per SFOC (enhanced) |
| Max Altitude | Per SFOC | Per SFOC |
| Over People | Prohibited | Prohibited |
| Over Crowds | Prohibited | Prohibited |
| Populated Areas | Per authorization | Enhanced exclusions |

### 7.3 Cargo Limitations

| Parameter | FlyCart 30 | FlyCart 100 |
|:----------|:-----------|:------------|
| Max Weight | 30-40 kg | 65 kg |
| Dangerous Goods | Per DG authorization | Per DG authorization |
| Live Cargo | Prohibited | Prohibited |
| Liquids | Sealed containers | Sealed containers |
| High-Value | Enhanced security | Enhanced security |

---

## 8. Safety Measures

### 8.1 Pre-Flight Safety

| Measure | Description |
|:--------|:------------|
| Risk Assessment | FLHA completed each mission |
| Weight Verification | Scale weighing mandatory |
| CG Check | Within limits verified |
| System Check | Full pre-flight checklist |
| Weather Check | Current and forecast acceptable |
| Crew Briefing | All crew briefed on mission and emergencies |

### 8.2 In-Flight Safety

| Measure | Description |
|:--------|:------------|
| Continuous Monitoring | All telemetry monitored |
| Abort Criteria | Defined and enforced |
| Emergency Procedures | Crew trained and ready |
| Communication | Continuous contact maintained |
| See-and-Avoid | VO and DAA (FC100) active |

### 8.3 Ground Safety

| Measure | FC30 | FC100 |
|:--------|:-----|:------|
| Exclusion Zone | 30m radius | 50m radius |
| PPE Required | Basic | Full (hard hat, hi-vis, safety boots) |
| Ground Crew | Recommended | Mandatory |
| Site Control | Basic | Enhanced |

### 8.4 Emergency Response

| Emergency | Response |
|:----------|:---------|
| Loss of Control | Parachute deployment (FC100), emergency landing |
| Cargo Shift | Immediate landing, do not continue |
| Lost Link | RTH activation, pre-programmed route |
| Delivery Zone Blocked | Hold/divert to alternate |
| Battery Emergency | Nearest safe landing |
| Fire/Smoke | Immediate landing, clear area |

---

## 9. Communication Plan

### 9.1 Communication Methods

| Method | Primary Use |
|:-------|:------------|
| Radio (VHF/UHF) | Crew coordination |
| Cellular | Backup, remote sites |
| Datalink | Aircraft telemetry |
| Phone | Delivery site coordination |

### 9.2 Standard Calls

| Phase | Call |
|:------|:-----|
| Ready for Takeoff | "Ready for departure" |
| Airborne | "Airborne, en route" |
| Midpoint | "Midpoint, [status]" |
| Approaching | "2 minutes out" |
| Overhead | "Overhead delivery site" |
| Delivery Complete | "Cargo delivered" |
| Returning | "Returning to base" |
| Landing | "On final" |
| Complete | "Shutdown complete" |

---

## 10. Ground Risk Mitigation

### 10.1 Population Overflights

| Category | Policy |
|:---------|:-------|
| Populated Areas | Avoid when possible |
| People Gatherings | Prohibited |
| Buildings | Minimum standoff |
| Roads | Cross perpendicular, minimize time |
| Critical Infrastructure | Avoid |

### 10.2 Ground Risk Class (GRC)

Operations planned to minimize GRC:
- Route selection to avoid populated areas
- Timing to minimize ground activity
- Alternative routes identified
- Emergency landing sites pre-surveyed

---

## 11. Air Risk Mitigation

### 11.1 See-and-Avoid

| Method | FC30 | FC100 |
|:-------|:-----|:------|
| Visual Observers | Yes | Yes |
| ADS-B Monitoring | Yes | Yes (In/Out) |
| DAA System | No | Yes |
| Traffic Awareness | Basic | Enhanced |

### 11.2 Airspace Management

| Action | Description |
|:-------|:------------|
| Airspace Authorization | Obtained per requirements |
| NOTAMs | Filed when required |
| ATC Coordination | For controlled airspace |
| Altitude Separation | Per authorization |

---

## 12. Related Documents

| Doc ID | Title |
|:-------|:------|
| OPS-013 | Cargo Delivery Operations Policy |
| OPS-013-PR | Cargo Delivery Procedure |
| FHA-019 | Cargo Delivery Operations FHA |
| FHA-021 | Heavy Cargo Operations FHA |
| REG-SFOC-CARGO | SFOC Application Template |
| REG-SORA-CARGO | SORA Assessment |
| FRM-CARGO-PREFLIGHT-FC30 | FlyCart 30 Pre-Flight |
| FRM-CARGO-PREFLIGHT-FC100 | FlyCart 100 Pre-Flight |
| QRC-DELIVERY | Cargo Delivery QRC |
| QRC-FLYCART100 | FlyCart 100 QRC |

---

## 13. Document Control

| Item | Details |
|:-----|:--------|
| Version | v5.0 |
| Last Review | March 11, 2026 |
| Next Review | March 11, 2027 |
| Owner | Operations Manager |
| Approval | Accountable Executive |

---

**Document Control:** REG-CONOPS-CARGO v5.0 | Aeria Solutions Ltd
