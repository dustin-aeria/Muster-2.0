# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Heavy Cargo Operations (>150 kg MTOW)

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-021 |
| **Version** | v5.0 |
| **Activity** | Heavy RPAS Cargo Delivery Operations |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release — heavy cargo operations FHA | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added heavy lift procedures | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced exclusion zone requirements | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — updated crew role definitions | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — expanded emergency response protocols | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved parachute system verification | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added cargo jettison procedures | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — FlyCart 100 Heavy RPAS integration | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for TC Heavy RPAS direct engagement requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This FHA covers Heavy RPAS (>150 kg MTOW) cargo delivery operations, specifically the DJI FlyCart 100 and similar aircraft. Heavy RPAS operations require direct engagement with Transport Canada and enhanced safety measures due to the increased kinetic energy and operational complexity.

**Regulatory Classification:**
- Heavy RPAS: MTOW >150 kg
- Requires Special Flight Operations Certificate (SFOC) for all Canadian operations
- Direct Transport Canada engagement mandatory
- Enhanced insurance requirements ($100,000+ minimum liability)

---

## 2. Aircraft Reference

**DJI FlyCart 100:**

| Parameter | Specification |
|:----------|:-------------|
| MTOW | 220 kg |
| Empty Weight | ~155 kg |
| Max Payload | 65 kg (cargo mode) |
| Max Payload (winch) | 65 kg |
| Max Flight Time (no load) | 32 minutes |
| Max Flight Time (full load) | 12-14 minutes |
| Max Range (no load) | 20 km |
| Max Range (full load) | 7.5 km |
| Max Wind Resistance | 15 m/s |
| Operating Temperature | -20°C to +45°C |
| IP Rating | IP55 |

**Safety Systems:**
- Quad-redundant battery system
- Dual integrated parachute system
- Octa-redundant propulsion (8 motors)
- Triple-redundant flight controller
- ADS-B In/Out transponder
- DAA (Detect and Avoid) system
- Black box flight recorder
- Automatic cargo jettison capability
- Real-time structural monitoring

---

## 3. Regulatory Requirements

### 3.1 Transport Canada Heavy RPAS Requirements

| Requirement | Details |
|:------------|:--------|
| SFOC | Mandatory for all operations |
| TC Engagement | Direct engagement with TC Civil Aviation |
| Insurance | $100,000 minimum liability coverage |
| Crew | Minimum 2 qualified personnel (PIC + Safety Pilot/VO) |
| Ground Crew | Minimum 2 personnel for cargo handling |
| Documentation | Enhanced flight operations manual |
| Reporting | Immediate occurrence reporting required |

### 3.2 SORA Compliance

Heavy RPAS cargo operations require SORA (Specific Operations Risk Assessment) methodology:
- Ground Risk Class (GRC) determination
- Air Risk Class (ARC) determination
- Operational Safety Objectives (OSO) compliance
- See REG-SORA-CARGO for detailed assessment

---

## 4. Hazard Analysis

### 4.1 Aircraft/Weight Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Heavy aircraft crash (>200 kg impact) | Loss of control, system failure | Significant ground damage, severe injury, fatality | 2 | 5 | 10-M | Redundant systems, parachute deployment, exclusion zones, trained crew | 4-L |
| 1.2 | Structural failure | Overloading, fatigue, damage | Catastrophic loss of aircraft | 1 | 5 | 5-L | Pre-flight inspection, load limits, structural monitoring, manufacturer maintenance schedule | 3-L |
| 1.3 | Multiple motor failure | Electrical fault, mechanical failure | Loss of lift, emergency descent | 1 | 5 | 5-L | Octa-redundancy (can fly on 6 motors), auto-landing, parachute | 3-L |
| 1.4 | Quad battery system failure | Cell failure, connection loss | Reduced flight capability, emergency | 1 | 4 | 4-L | Battery monitoring, redundant power paths, conservative flight planning | 2-L |
| 1.5 | Flight controller failure | Hardware/software fault | Loss of control | 1 | 5 | 5-L | Triple-redundant FC, automatic failover, RTH activation | 3-L |

### 4.2 Heavy Payload Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | 65 kg cargo drop from altitude | Release failure, structural failure | Severe damage, fatality | 2 | 5 | 10-M | Verified attachment, load cells, redundant release, exclusion zones (>50m) | 4-L |
| 2.2 | Cargo shift during flight | Poor securing, turbulence, maneuver | Loss of control, crash | 2 | 5 | 10-M | Proper loading procedure, CG verification, load cells, flight limitations | 4-L |
| 2.3 | Overweight cargo | Weighing error, undeclared weight | Performance degradation, crash | 2 | 5 | 10-M | Mandatory scale weighing, load cell verification, conservative limits | 4-L |
| 2.4 | CG exceedance | Improper loading, cargo shift | Control difficulty, crash | 2 | 5 | 10-M | CG calculation, load cell array, flight envelope monitoring | 4-L |
| 2.5 | Cargo bay door failure | Mechanism fault, ice, debris | Uncontrolled release | 2 | 4 | 8-M | Pre-flight test, redundant latches, door status monitoring | 4-L |
| 2.6 | Winch cable failure | Overload, wear, damage | Dropped cargo | 2 | 4 | 8-M | Inspection, load limits, backup retention | 4-L |

### 4.3 Emergency Jettison Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Inadvertent cargo jettison | Operator error, system fault | Dropped cargo, damage, injury | 2 | 5 | 10-M | Two-stage activation, confirmation required, training | 4-L |
| 3.2 | Jettison system failure | Mechanism fault | Unable to release in emergency | 2 | 4 | 8-M | Pre-flight test, backup manual release | 4-L |
| 3.3 | Jettison over populated area | Emergency situation | Injury, fatality | 2 | 5 | 10-M | Route planning, designated jettison zones, last-resort only | 4-L |

### 4.4 Parachute System Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Parachute fails to deploy | Mechanism fault, tangling | Hard impact with full aircraft weight | 1 | 5 | 5-L | Dual independent parachutes, pre-flight checks, maintenance | 2-L |
| 4.2 | Partial deployment | Tangling, damage | Reduced descent rate, damage | 1 | 4 | 4-L | Dual system provides redundancy, inspection | 2-L |
| 4.3 | Unintended deployment | System fault, operator error | Loss of control, unplanned descent | 1 | 3 | 3-L | Armed only in emergency, two-stage activation | 2-L |
| 4.4 | Drift during descent | Wind conditions | Landing in hazardous area | 2 | 3 | 6-L | Pre-planned descent areas, wind assessment, recovery team | 3-L |

### 4.5 Ground Personnel Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Ground crew struck by aircraft | Approach error, wind gust, loss of control | Severe injury, fatality | 2 | 5 | 10-M | Minimum 50m exclusion zone, PPE, trained crew, communication protocols | 4-L |
| 5.2 | Struck by falling cargo | Release during approach, failure | Severe injury, fatality | 2 | 5 | 10-M | Exclusion zone enforcement, overhead warnings, PPE | 4-L |
| 5.3 | Rotor strike | Personnel approach running aircraft | Severe laceration, amputation | 2 | 5 | 10-M | No approach until shutdown confirmed, visual barriers, training | 4-L |
| 5.4 | Cargo handling injury | Heavy lifting, pinch points | Back injury, crush injury | 3 | 3 | 9-M | Two-person lift, mechanical aids, proper techniques | 4-L |
| 5.5 | Thermal injury from batteries | Battery fire, venting | Burns | 2 | 4 | 8-M | Battery handling procedures, fire suppression, PPE | 4-L |

### 4.6 Environmental/Site Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 6.1 | High wind at altitude | Weather change, terrain effects | Loss of control, crash | 2 | 4 | 8-M | Wind limits (15 m/s), continuous monitoring, abort criteria | 4-L |
| 6.2 | Power line strike | Unidentified lines, navigation error | Crash, electrocution, power outage | 2 | 5 | 10-M | Thorough survey, route planning, minimum standoff 30m | 4-L |
| 6.3 | Obstacle collision | Navigation error, GPS drift | Crash, cargo loss | 2 | 4 | 8-M | Site survey, DAA system, flight planning margins | 4-L |
| 6.4 | Landing zone unsuitable | Soft ground, slope, obstacles | Tip-over, damage | 2 | 3 | 6-L | LZ assessment, weight rating verification, alternate sites | 3-L |
| 6.5 | Icing conditions | Temperature, moisture | Loss of lift, control issues | 2 | 5 | 10-M | Temperature monitoring, no flight below 0°C with moisture, de-ice procedures | 4-L |

### 4.7 Operational/Communication Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 7.1 | Loss of datalink | Interference, range, equipment failure | Loss of control/monitoring | 2 | 4 | 8-M | Redundant links, RTH failsafe, pre-programmed route | 4-L |
| 7.2 | GPS failure/spoofing | Signal loss, interference | Navigation error | 2 | 4 | 8-M | Multi-constellation GNSS, inertial backup, visual monitoring | 4-L |
| 7.3 | Communication failure with ground | Radio failure, dead zones | Coordination loss | 2 | 3 | 6-L | Multiple comms (radio + cellular), pre-briefed procedures | 3-L |
| 7.4 | Crew coordination failure | Miscommunication, fatigue | Unsafe actions | 2 | 4 | 8-M | Standard calls, CRM training, briefings, rest requirements | 4-L |
| 7.5 | Unauthorized aircraft in area | ATC coordination failure, non-compliant aircraft | Mid-air collision | 2 | 5 | 10-M | ADS-B monitoring, NOTAMs, DAA system, VO observation | 4-L |

### 4.8 Regulatory/Compliance Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 8.1 | SFOC violation | Misunderstanding, deviation | Regulatory action, certificate risk | 2 | 4 | 8-M | SFOC briefing, compliance monitoring, documentation | 4-L |
| 8.2 | Insurance lapse | Administrative error | Uninsured operation, liability | 1 | 4 | 4-L | Insurance tracking, pre-flight verification | 2-L |
| 8.3 | Unqualified personnel | Training lapse, oversight | Regulatory violation, safety risk | 1 | 4 | 4-L | Qualification tracking, authorization verification | 2-L |

---

## 5. Control Summary

### 5.1 Pre-Flight Controls

| Control | Requirement |
|:--------|:------------|
| SFOC verification | Valid certificate, conditions reviewed |
| Insurance verification | Current, adequate coverage |
| Crew qualification check | All personnel current and authorized |
| Ground crew briefing | Roles, zones, emergencies, signals |
| Weight verification | Scale weighing, load cell confirmation |
| CG calculation | Within limits, documented |
| Parachute system check | Both systems armed and verified |
| Jettison system test | Mechanism verified (no release) |
| Weather assessment | Within all limits |
| Site assessment | LZ suitable, obstacles mapped |
| Emergency planning | Jettison zones, landing sites, contacts |
| Communication test | All channels operational |

### 5.2 During Operations Controls

| Control | Requirement |
|:--------|:------------|
| Exclusion zone enforcement | Minimum 50m from aircraft operations |
| Continuous monitoring | Telemetry, battery, structural, environmental |
| VO/Safety pilot active | Dedicated crew member maintaining watch |
| Communication protocols | Standard calls, regular check-ins |
| Abort criteria defined | Battery, weather, performance thresholds |
| Emergency procedures immediate | Trained response, no hesitation |

### 5.3 Post-Flight Controls

| Control | Requirement |
|:--------|:------------|
| Aircraft inspection | Post-flight check for damage, wear |
| Flight documentation | Complete records, anomalies noted |
| Occurrence reporting | Any incidents reported per requirements |
| Maintenance actions | Scheduled and unscheduled as required |
| Battery management | Proper storage, charging, monitoring |

---

## 6. Exclusion Zone Requirements

**Heavy RPAS operations require enhanced exclusion zones:**

| Zone | Distance | Personnel Allowed |
|:-----|:---------|:------------------|
| Takeoff/Landing Zone | 50m radius | Flight crew only |
| Flight Path Buffer | 30m lateral | None |
| Cargo Delivery Zone | 50m radius | None until cargo secured |
| Emergency Jettison Zone | Pre-designated areas only | None |

---

## 7. PPE Requirements

| PPE | When Required |
|:----|:--------------|
| Safety footwear (steel toe) | Always - all personnel |
| High-visibility vest | Always - all personnel |
| Hard hat | Within 100m of operations |
| Hearing protection | Within 30m of running aircraft |
| Safety glasses | Cargo handling, maintenance |
| Gloves | Cargo handling, battery handling |
| Fire-resistant clothing | Battery handling, emergency response |

---

## 8. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Advanced RPAS Certificate | PIC requirement |
| Heavy RPAS Type Rating | Company authorization for FlyCart 100 |
| SFOC Operations Training | All crew before Heavy RPAS operations |
| Emergency Procedures | Annual refresher minimum |
| Cargo Operations | Type-specific training |
| Ground Crew Training | Specific to Heavy RPAS operations |
| Parachute/Emergency Systems | System-specific training |

---

## 9. Emergency Response

### 9.1 In-Flight Emergency Priority

1. **FLY THE AIRCRAFT** - Maintain control
2. **Assess situation** - Determine severity
3. **Take appropriate action:**
   - Minor issue: Continue to nearest safe landing
   - Moderate: Divert to emergency landing site
   - Severe: Deploy parachute if unable to maintain control
4. **Communicate** - Notify all parties
5. **Document** - Record all actions

### 9.2 Cargo Jettison Decision Matrix

**Jettison cargo ONLY when:**
- Aircraft control compromised AND
- Cannot reach safe landing area AND
- Jettison zone below is clear/suitable

**NEVER jettison over:**
- Populated areas
- Roads/vehicles
- Water (unless life-saving)
- Without positive zone clearance if possible

---

## 10. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| FHA-019 | Cargo Delivery Operations (Medium RPAS) |
| OPS-013 | Cargo Delivery Operations Policy |
| OPS-013-PR | Cargo Delivery Procedure |
| REG-SFOC-CARGO | SFOC Application Template for Cargo |
| REG-SORA-CARGO | SORA Assessment for Cargo Operations |
| REG-CONOPS-CARGO | Concept of Operations - Cargo |
| QRC-FLYCART100 | FlyCart 100 Quick Reference Card |
| FRM-CARGO-PREFLIGHT-FC100 | FlyCart 100 Pre-Flight Checklist |
| FRM-CARGO-WB | Weight & Balance Calculator |

---

## 11. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-021 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
