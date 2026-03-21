# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## BVLOS (Beyond Visual Line of Sight) Operations

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-002 |
| **Version** | v5.0 |
| **Activity** | BVLOS Operations (L1C Declaration) |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Changes | Approved By |
|:--------|:-----|:--------|:------------|
| v1.0 | March 20, 2019 | Initial release — BVLOS operations established | Dustin Wales |
| v2.0 | February 10, 2020 | Annual review — updated DAA requirements | Dustin Wales |
| v3.0 | February 15, 2022 | Annual review — L1C declaration integration | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — expanded communication protocols | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This FHA covers Beyond Visual Line of Sight operations conducted under Level 1 Complex (L1C) Declaration conditions per CARs 901.53.1.

---

## 2. Risk Matrix

| Risk Score | Rating | Action |
|:-----------|:-------|:-------|
| 15-25 | HIGH | Stop; implement additional controls |
| 8-14 | MEDIUM | Proceed with controls; monitor |
| 1-7 | LOW | Proceed with awareness |

---

## 3. BVLOS-Specific Hazards

### 3.1 Detect and Avoid Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Manned aircraft conflict | Failure to detect, inadequate DAA | Mid-air collision | 1 | 5 | 5-L | DAA system/VO, airspace monitoring, altitude limits, yield procedures | 3-L |
| 1.2 | VO loses visual of approach airspace | Obstructions, positioning, fatigue | Missed traffic | 2 | 5 | 10-M | VO positioning, rotation, scanning technique, supplemental DAA | 5-L |
| 1.3 | DAA system failure | Equipment malfunction | No traffic detection | 2 | 4 | 8-M | Pre-flight checks, backup methods, RTH if DAA fails | 4-L |

### 3.2 Communication Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | PIC-VO communication failure | Radio failure, interference | VO unable to warn PIC | 2 | 4 | 8-M | Radio checks, backup comm, pre-briefed contingencies | 4-L |
| 2.2 | Misunderstood communication | Non-standard calls, noise | Incorrect action | 2 | 3 | 6-L | Standard phraseology, read-back, training | 3-L |
| 2.3 | Delayed communication | High workload, hesitation | Late response to hazard | 2 | 4 | 8-M | Training, empowerment to call, sterile cockpit concept | 4-L |

### 3.3 Navigation and Control Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | GPS degradation/loss | Satellite issues, interference | Loss of position, unpredictable behavior | 2 | 4 | 8-M | Pre-flight GPS verification, compass mode, RTH testing | 4-L |
| 3.2 | Lost link | Range exceeded, interference | Aircraft follows failsafe | 2 | 3 | 6-L | Link monitoring, failsafe verification, conservative range | 4-L |
| 3.3 | Position uncertainty | Telemetry error, drift | Collision with obstacle | 2 | 3 | 6-L | Telemetry verification, conservative margins | 3-L |
| 3.4 | Flyaway during BVLOS | System failure, compass error | Uncontrolled flight into hazards | 2 | 4 | 8-M | Pre-flight checks, failsafe RTH, geofencing if available | 4-L |

### 3.4 Environmental Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Weather change beyond line of sight | Localized weather, rapid change | Adverse conditions at aircraft | 2 | 3 | 6-L | Weather monitoring, conservative limits, RTH if uncertain | 4-L |
| 4.2 | Unknown obstacles | Unmapped obstructions | Collision | 2 | 3 | 6-L | Pre-mission planning, altitude margins, terrain awareness | 3-L |
| 4.3 | Wildlife strike | Birds in flight path | Damage, crash | 2 | 3 | 6-L | Seasonal awareness, altitude selection | 4-L |

### 3.5 Operational Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Exceeding L1C conditions | Drift into built-up area, over water | Regulatory violation, increased risk | 2 | 4 | 8-M | Mission planning, geofencing, monitoring, abort criteria | 4-L |
| 5.2 | Inadequate emergency landing sites | Poor planning | No safe landing option | 2 | 4 | 8-M | Pre-mission survey, emergency site identification | 4-L |
| 5.3 | Pilot overload | Complex mission, multiple tasks | Errors, missed hazards | 2 | 3 | 6-L | Task sharing, simplified missions, crew support | 3-L |
| 5.4 | Situational awareness loss | Distraction, workload, fatigue | Unaware of aircraft state | 2 | 4 | 8-M | CRM training, task management, crew support | 4-L |

---

## 4. L1C Declaration Compliance Controls

| L1C Condition | Verification Method | Responsible |
|:--------------|:--------------------|:------------|
| Away from built-up areas | Pre-mission planning, mapping | PIC |
| ≤122m AGL | Altitude monitoring, pre-set limits | PIC |
| ≤25 kg MTOW | Aircraft selection | PIC |
| 30m from persons | Site control, monitoring | PIC |
| Over land only | Pre-mission planning | PIC |
| DAA in place | VO briefing or system check | PIC |
| Advanced certificate | Pre-authorization verification | Operations Manager |

---

## 5. Critical Controls

### Pre-Flight

| Control | Purpose |
|:--------|:--------|
| L1C conditions verification | Confirm regulatory compliance |
| DAA method confirmation | Ensure traffic detection capability |
| Communication test | Verify PIC-VO link |
| Lost link programming | Define automatic response |
| Emergency landing identification | Ensure safe landing options |
| Weather assessment | Confirm conditions acceptable |

### In-Flight

| Control | Purpose |
|:--------|:--------|
| Continuous DAA monitoring | Traffic detection |
| Telemetry monitoring | Aircraft state awareness |
| Communication protocol | Standard calls, read-backs |
| Boundary monitoring | Stay within authorized area |
| Emergency procedure readiness | Prepared for contingencies |

### Post-Flight

| Control | Purpose |
|:--------|:--------|
| Occurrence documentation | Capture lessons learned |
| System performance review | Identify reliability issues |
| L1C compliance confirmation | Verify conditions met |

---

## 6. Emergency Procedures

| Emergency | Procedure |
|:----------|:----------|
| Traffic conflict | Immediate descent/land; yield to manned aircraft |
| Lost link | Monitor for failsafe; clear landing area |
| Communication failure | Execute pre-briefed contingency; RTH |
| Flyaway | Attempt RTH command; warn if approaching airspace |
| GPS failure | RTH or land immediately |

---

## 7. Training Requirements

| Training | Requirement |
|:---------|:------------|
| BVLOS-specific procedures | Before BVLOS authorization |
| DAA methods | Before BVLOS authorization |
| Communication protocols | Before BVLOS authorization |
| Emergency procedures | Annual |
| Recurrency | Per company requirements |

---

## 8. Monitoring

| Monitoring | Frequency |
|:-----------|:----------|
| BVLOS occurrence review | Per occurrence |
| DAA effectiveness | Each operation |
| Communication effectiveness | Each operation |
| FHA review | Annual |

---

## 9. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-002 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
