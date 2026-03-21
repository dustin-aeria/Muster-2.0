# AERIA SOLUTIONS LTD

# SORA ASSESSMENT

## Specific Operations Risk Assessment - Cargo Delivery Operations

---

| Field | Value |
|:------|:------|
| **Document Number** | REG-SORA-CARGO |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Author |
|:--------|:-----|:------------|:-------|
| v1.0 | October 15, 2019 | Initial release | Dustin Wales |
| v4.0 | November 4, 2025 | Updated for Level 1 Complex/RPOC requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Purpose

This document provides the Specific Operations Risk Assessment (SORA) for RPAS cargo delivery operations using the DJI FlyCart 30 and DJI FlyCart 100 aircraft. This assessment follows Transport Canada's SORA methodology adapted from JARUS guidelines.

---

## 2. Operation Description

### 2.1 Operational Overview

| Parameter | Description |
|:----------|:------------|
| Operation Type | Cargo and equipment delivery |
| Aircraft | DJI FlyCart 30 (95 kg), DJI FlyCart 100 (220 kg) |
| Payload Range | Up to 65 kg |
| Operating Area | Remote, rural, and controlled urban environments |
| Flight Type | VLOS and BVLOS (per authorization) |
| Altitude | <120m AGL (typical), per SFOC |

### 2.2 CONOPS Reference

See REG-CONOPS-CARGO for detailed concept of operations.

---

## 3. Ground Risk Assessment

### 3.1 Intrinsic Ground Risk Class (iGRC)

#### FlyCart 30 (95 kg MTOW)

| Parameter | Value |
|:----------|:------|
| MTOW | 95 kg |
| Characteristic Dimension | ~2.5m |
| Typical Kinetic Energy | ~40 kJ (at 20 m/s) |

| Population Density | iGRC |
|:-------------------|:-----|
| Controlled (no people) | 1 |
| Sparsely populated | 4 |
| Populated | 6 |
| Gatherings | N/A (prohibited) |

#### FlyCart 100 (220 kg MTOW)

| Parameter | Value |
|:----------|:------|
| MTOW | 220 kg (Heavy RPAS) |
| Characteristic Dimension | ~3.5m |
| Typical Kinetic Energy | ~90 kJ (at 18 m/s) |

| Population Density | iGRC |
|:-------------------|:-----|
| Controlled (no people) | 2 |
| Sparsely populated | 5 |
| Populated | 7 |
| Gatherings | N/A (prohibited) |

### 3.2 Final Ground Risk Class (GRC)

**Mitigations Applied:**

| Mitigation | Integrity | Assurance | GRC Reduction |
|:-----------|:----------|:----------|:--------------|
| M1 - Strategic mitigation (ground) | Medium | Medium | -1 |
| M2 - Effects of ground impact | Medium | Medium | -1 |
| M3 - Emergency Response Plan | High | High | 0 (maintains) |

**FlyCart 30 Final GRC (Sparsely Populated):**

| Starting iGRC | Mitigations | Final GRC |
|:--------------|:------------|:----------|
| 4 | M1(-1), M2(-1) | **2** |

**FlyCart 100 Final GRC (Sparsely Populated):**

| Starting iGRC | Mitigations | Final GRC |
|:--------------|:------------|:----------|
| 5 | M1(-1), M2(-1) | **3** |

---

## 4. Air Risk Assessment

### 4.1 Initial Air Risk Class (ARC)

#### Operating Environment

| Airspace | Altitude | Typical Traffic | ARC |
|:---------|:---------|:----------------|:----|
| Uncontrolled (Class G) | <120m AGL | Low | ARC-b |
| Controlled (Class E/D) | <120m AGL | Varies | ARC-c |

### 4.2 Residual Air Risk

**Mitigations Applied:**

| Mitigation | FC30 | FC100 | ARC Impact |
|:-----------|:-----|:------|:-----------|
| Visual Observer(s) | Yes | Yes | Supports ARC-b |
| ADS-B Monitoring | Receive | In/Out | Supports ARC-b |
| DAA System | No | Yes | Supports ARC-b |
| Transponder | No | Yes | Supports ARC-c |
| NOTAM Filing | Yes | Yes | Procedural |
| ATC Coordination | When required | When required | Procedural |

**Final ARC:**

| Aircraft | Environment | Final ARC |
|:---------|:------------|:----------|
| FlyCart 30 | Uncontrolled, <120m | ARC-b |
| FlyCart 30 | Controlled | ARC-c |
| FlyCart 100 | Uncontrolled, <120m | ARC-b |
| FlyCart 100 | Controlled | ARC-c |

---

## 5. SAIL Determination

### 5.1 SAIL Matrix

| | ARC-a | ARC-b | ARC-c | ARC-d |
|:---|:------|:------|:------|:------|
| **GRC 1** | I | II | IV | VI |
| **GRC 2** | II | II | IV | VI |
| **GRC 3** | II | II | IV | VI |
| **GRC 4** | III | III | IV | VI |
| **GRC 5** | IV | IV | IV | VI |
| **GRC 6** | V | V | V | VI |
| **GRC 7** | VI | VI | VI | VI |

### 5.2 Determined SAIL

**FlyCart 30 Operations:**

| Scenario | GRC | ARC | SAIL |
|:---------|:----|:----|:-----|
| Sparsely populated, uncontrolled | 2 | ARC-b | **II** |
| Sparsely populated, controlled | 2 | ARC-c | **IV** |

**FlyCart 100 Operations:**

| Scenario | GRC | ARC | SAIL |
|:---------|:----|:----|:-----|
| Sparsely populated, uncontrolled | 3 | ARC-b | **II** |
| Sparsely populated, controlled | 3 | ARC-c | **IV** |

---

## 6. Operational Safety Objectives (OSO) Compliance

### 6.1 OSO Requirements by SAIL

| OSO | Description | SAIL II | SAIL IV |
|:----|:------------|:--------|:--------|
| OSO#01 | Operator competence | O | H |
| OSO#02 | UAS manufactured by competent entity | O | M |
| OSO#03 | UAS maintained by competent entity | L | M |
| OSO#04 | UAS developed to design standards | O | M |
| OSO#05 | UAS designed considering human factors | O | M |
| OSO#06 | C2 link characteristics | L | M |
| OSO#07 | C2 link performance inspection | L | M |
| OSO#08 | UTM system | L | M |
| OSO#09 | Remote crew trained | O | H |
| OSO#10 | Safe recovery from human error | L | M |
| OSO#11 | UAS reliability and performance | L | M |
| OSO#12 | Loss of control - Loss of thrust | L | M |
| OSO#13 | Loss of control - adverse conditions | L | M |
| OSO#14 | Loss of control - degraded navigation | L | M |
| OSO#15 | Loss of control - SAA | L | M |
| OSO#16 | Multi-crew coordination | L | M |
| OSO#17 | Remote crew fitness | L | M |
| OSO#18 | Automatic protection | L | M |
| OSO#19 | Safe recovery of human error | L | M |
| OSO#20 | Effects on ground area | L | M |
| OSO#21 | Emergency procedures | M | H |
| OSO#22 | Critical environmental conditions | L | M |
| OSO#23 | External services required | L | M |
| OSO#24 | Design for controllability | L | M |

*O = Optional, L = Low, M = Medium, H = High*

---

## 7. OSO Compliance Matrix

### OSO#01 - Operator Competence

| Requirement | Compliance |
|:------------|:-----------|
| RPOC holder | 930355 |
| Operations Manual | Yes |
| Safety Management System | Yes |
| Training Program | Yes (TCP-001) |
| Experience documentation | Maintained |

**Status:** ☐ Compliant

### OSO#02 - UAS Manufactured by Competent Entity

| Requirement | Compliance |
|:------------|:-----------|
| Manufacturer | DJI (established manufacturer) |
| Quality system | ISO certified |
| Design standards | Industry standard |
| Documentation | Available |

**Status:** ☐ Compliant

### OSO#03 - UAS Maintained by Competent Entity

| Requirement | Compliance |
|:------------|:-----------|
| Maintenance program | MCM-001 |
| Trained maintainers | Yes |
| Maintenance records | Maintained |
| Manufacturer guidelines | Followed |

**Status:** ☐ Compliant

### OSO#04-05 - UAS Design Standards & Human Factors

| Requirement | Compliance |
|:------------|:-----------|
| Design documentation | Manufacturer provided |
| Human factors | Controller ergonomics, alerts |
| Failure modes | Documented |

**Status:** ☐ Compliant

### OSO#06-07 - C2 Link

| Requirement | FC30 | FC100 |
|:------------|:-----|:------|
| Link type | O3 Enterprise | O4 Enterprise |
| Range | 20 km | 30 km |
| Redundancy | Basic | Enhanced |
| Performance monitoring | Yes | Yes |
| Lost link procedure | RTH | RTH + enhanced |

**Status:** ☐ Compliant

### OSO#09 - Remote Crew Training

| Training | Requirement | Status |
|:---------|:------------|:-------|
| Advanced certificate | All PICs | ☐ |
| Type training | FC30/FC100 specific | ☐ |
| Heavy RPAS (FC100) | Specialized training | ☐ |
| Recurrent | Annual | ☐ |
| Emergency procedures | Annual | ☐ |

**Status:** ☐ Compliant

### OSO#10-14 - Loss of Control Mitigations

| Scenario | FC30 Mitigation | FC100 Mitigation |
|:---------|:----------------|:-----------------|
| Loss of thrust | 8-motor redundancy | 8-motor redundancy |
| Adverse conditions | Weather limits | Weather limits + enhanced |
| Degraded navigation | GPS + inertial | Multi-GNSS + inertial |
| SAA | VO | VO + DAA system |

**Status:** ☐ Compliant

### OSO#15 - See and Avoid

| Method | FC30 | FC100 |
|:-------|:-----|:------|
| Visual Observer | Yes | Yes (mandatory) |
| ADS-B | Receive | In/Out |
| DAA System | No | Yes |
| Traffic awareness | Manual | Automatic |

**Status:** ☐ Compliant

### OSO#16-17 - Multi-Crew & Fitness

| Requirement | FC30 | FC100 |
|:------------|:-----|:------|
| Minimum crew | 1 PIC | 2 Flight + 2 Ground |
| CRM training | Yes | Yes (enhanced) |
| Fitness requirements | IMSAFE | IMSAFE + documented |
| Fatigue management | Yes | Yes (CRM-002) |

**Status:** ☐ Compliant

### OSO#18 - Automatic Protection

| System | FC30 | FC100 |
|:-------|:-----|:------|
| Geofencing | Yes | Yes |
| RTH | Automatic | Automatic |
| Low battery action | RTH | RTH |
| Parachute | Single | Dual auto-deploy |

**Status:** ☐ Compliant

### OSO#20 - Effects on Ground Area

| Mitigation | FC30 | FC100 |
|:-----------|:-----|:------|
| Exclusion zones | 30m | 50m |
| Parachute | Yes | Dual |
| Energy management | Weight limits | Weight limits + monitoring |
| Ground crew | Optional | Mandatory |

**Status:** ☐ Compliant

### OSO#21 - Emergency Procedures

| Procedure | Document | Status |
|:----------|:---------|:-------|
| General emergency | OPS-013-PR | ☐ |
| Lost link | OPS-013-PR | ☐ |
| Cargo emergency | OPS-013-PR | ☐ |
| Parachute deployment | QRC-FLYCART100 | ☐ |
| Cargo jettison | FHA-021 | ☐ |
| Fire/battery | QRC-BATTERY | ☐ |

**Status:** ☐ Compliant

### OSO#22 - Environmental Conditions

| Condition | FC30 Limit | FC100 Limit | Monitoring |
|:----------|:-----------|:------------|:-----------|
| Wind | 12 m/s | 15 m/s | Pre-flight + continuous |
| Visibility | 3 km | 5 km | Pre-flight |
| Temperature | -20 to +45°C | -20 to +45°C | Continuous |
| Precipitation | Light | None | Pre-flight |

**Status:** ☐ Compliant

### OSO#23-24 - External Services & Controllability

| Requirement | Compliance |
|:------------|:-----------|
| GPS dependency | Multi-constellation + backup |
| Communications | Redundant |
| Controllability | Within envelope, tested |
| Manual override | Available |

**Status:** ☐ Compliant

---

## 8. Adjacent Area/Airspace Considerations

### 8.1 Strategic Mitigations

| Mitigation | Implementation |
|:-----------|:---------------|
| Route planning | Avoid populated areas |
| Timing | Minimize ground activity periods |
| Altitude | Minimum necessary |
| Buffer zones | 30-50m from operations |

### 8.2 Tactical Mitigations

| Mitigation | Implementation |
|:-----------|:---------------|
| Visual observers | VLOS maintained |
| Traffic monitoring | ADS-B + visual |
| Weather monitoring | Continuous |
| Abort procedures | Defined |

---

## 9. Containment

### 9.1 Operational Volume

| Parameter | Value |
|:----------|:------|
| Horizontal containment | SFOC defined area |
| Vertical containment | SFOC defined altitude |
| Flight geography | Programmed route |
| Contingency volume | Adjacent area buffer |

### 9.2 Ground Risk Buffer

| Scenario | Buffer |
|:---------|:-------|
| Normal operations | Within geofence |
| Contingency | 100m from geofence |
| Emergency | Parachute descent area |

---

## 10. Summary

### 10.1 Risk Classification Summary

| Aircraft | Scenario | GRC | ARC | SAIL |
|:---------|:---------|:----|:----|:-----|
| FC30 | Sparse/uncontrolled | 2 | b | II |
| FC30 | Sparse/controlled | 2 | c | IV |
| FC100 | Sparse/uncontrolled | 3 | b | II |
| FC100 | Sparse/controlled | 3 | c | IV |

### 10.2 OSO Compliance Summary

| SAIL | Total OSOs | Compliant | Status |
|:-----|:-----------|:----------|:-------|
| II | 24 | 24 | ☐ Compliant |
| IV | 24 | 24 | ☐ Compliant |

---

## 11. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

## 12. Related Documents

| Doc ID | Title |
|:-------|:------|
| REG-CONOPS-CARGO | Concept of Operations |
| REG-SFOC-CARGO | SFOC Application Template |
| FHA-019 | Cargo Delivery Operations FHA |
| FHA-021 | Heavy Cargo Operations FHA |
| OPS-013 | Cargo Delivery Operations Policy |
| SMS-001 | Safety Management System Manual |

---

**Document Control:** REG-SORA-CARGO v5.0 | Aeria Solutions Ltd
