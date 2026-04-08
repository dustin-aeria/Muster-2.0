# AERIA SOLUTIONS LTD

# STANDARD BVLOS CONCEPT OF OPERATIONS (CONOPS) TEMPLATE

---

| Field | Value |
|:------|:------|
| **Document Number** | REG-CONOPS-BVLOS |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | September 10, 2019 | Initial release for SFOC applications | Dustin Wales |
| v2.0 | February 10, 2020 | Enhanced procedure sections | Dustin Wales |
| v3.0 | February 8, 2021 | Added command and control section | Dustin Wales |
| v3.1 | February 14, 2022 | Updated personnel requirements | Dustin Wales |
| v4.0 | February 13, 2023 | Comprehensive template revision | Dustin Wales |
| v4.1 | February 12, 2024 | Added L1C declaration alignment | Dustin Wales |
| v4.2 | February 10, 2025 | Expanded emergency procedures | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild - web platform integration | Dustin Wales |

---

## Document Purpose

This template provides a standardized format for developing Concept of Operations (CONOPS) documents for BVLOS RPAS operations. A CONOPS describes how an operation will be conducted and is required for SFOC applications and supports L1C declarations.

**This template is designed to:**
- Provide a comprehensive CONOPS structure
- Ensure all required elements are addressed
- Support Transport Canada SFOC applications
- Demonstrate operational safety approach
- Serve as operational reference document

---

## Instructions for Use

1. Complete all fillable sections marked with `[ENTER: ...]`
2. Delete instructional text in italics before submission
3. Customize sections to match your specific operation
4. Attach supporting documentation as referenced
5. Review with Operations Manager before submission
6. Submit as attachment to SFOC application

---

# CONCEPT OF OPERATIONS

## 1. Administrative Information

### 1.1 Document Control

| Field | Entry |
|:------|:------|
| **CONOPS Reference Number** | [ENTER: CONOPS-YYYY-XXX] |
| **Operation Name** | [ENTER: Descriptive operation name] |
| **Version** | [ENTER: Version number] |
| **Date** | [ENTER: Date] |
| **Prepared By** | [ENTER: Name and title] |
| **Approved By** | [ENTER: Name and title] |

### 1.2 Operator Information

| Field | Entry |
|:------|:------|
| **Operator Name** | Aeria Solutions Ltd |
| **RPAS Operator Registration** | [ENTER: Registration number] |
| **Business Address** | [ENTER: Address] |
| **Primary Contact** | [ENTER: Name, phone, email] |
| **24-Hour Emergency Contact** | [ENTER: Name, phone] |
| **Accountable Executive** | Dustin Wales |
| **Operations Manager** | [ENTER: Name] |

### 1.3 Authorization Request

| Field | Entry |
|:------|:------|
| **Authorization Type** | [ENTER: SFOC / L1C Declaration / Other] |
| **Requested Validity Period** | [ENTER: Start date to end date] |
| **Geographic Scope** | [ENTER: Specific sites / Regional / Provincial] |

---

## 2. Executive Summary

*Provide a concise overview of the operation for quick understanding by reviewers.*

[ENTER: Executive summary including:
- Type of operation (survey, inspection, monitoring, delivery, etc.)
- Purpose and objective
- General location(s)
- Key safety features
- Authorization pathway requested
- Any unique aspects of the operation]

*Example: "This CONOPS describes BVLOS linear infrastructure inspection operations along transmission line corridors in northern British Columbia. Operations will be conducted from unpopulated staging areas using DJI Matrice 350 RTK aircraft equipped with thermal and visual cameras. Flights will extend up to 5km from the pilot position at altitudes below 400ft AGL in Class G airspace. Visual observers positioned along the corridor provide see-and-avoid capability. The operation supports preventive maintenance inspection under L1C authorization."*

---

## 3. Operational Concept Description

### 3.1 Mission Objective

[ENTER: Detailed description of what the operation aims to accomplish:
- Primary mission objective
- Secondary objectives if applicable
- Data/deliverables to be produced
- Client requirements (if applicable)
- Why BVLOS is necessary for this operation]

### 3.2 Operational Methodology

[ENTER: Describe how the operation will be conducted:
- General approach to accomplishing the mission
- Flight patterns (linear, grid, area coverage)
- Altitude profile
- Speed and duration
- Sensor/payload operation
- Data collection method
- Number of flights required]

### 3.3 Operational Tempo

| Parameter | Specification |
|:----------|:--------------|
| **Typical Mission Duration** | [ENTER: Minutes per flight] |
| **Flights per Day** | [ENTER: Expected number] |
| **Days of Operation** | [ENTER: Schedule] |
| **Time of Day** | [ENTER: Daylight / Night / Both] |
| **Seasonal Considerations** | [ENTER: Any seasonal factors] |

### 3.4 Justification for BVLOS

[ENTER: Explain why BVLOS operations are necessary:
- Operational requirements that cannot be met with VLOS
- Efficiency/safety benefits of BVLOS
- Alternative approaches considered
- Regulatory pathway selected]

---

## 4. Aircraft and Equipment

### 4.1 UAS Specifications

#### 4.1.1 Primary Aircraft

| Parameter | Specification |
|:----------|:--------------|
| **Manufacturer** | [ENTER: Manufacturer name] |
| **Model** | [ENTER: Model designation] |
| **Transport Canada Registration** | [ENTER: C-XXX] |
| **Serial Number** | [ENTER: Serial number] |
| **Type** | [ENTER: Multi-rotor / Fixed-wing / Hybrid] |
| **Maximum Takeoff Mass** | [ENTER: kg] |
| **Maximum Payload Capacity** | [ENTER: kg] |
| **Maximum Speed** | [ENTER: m/s and km/h] |
| **Maximum Flight Time** | [ENTER: minutes at typical payload] |
| **Maximum Range** | [ENTER: km] |
| **Maximum Altitude** | [ENTER: m AGL] |

#### 4.1.2 Additional Aircraft (if applicable)

*Repeat table for each additional aircraft model to be used.*

### 4.2 UAS Capabilities and Safety Features

#### 4.2.1 Flight Control System

| Feature | Description |
|:--------|:------------|
| **Flight Controller** | [ENTER: Type and manufacturer] |
| **Redundancy** | [ENTER: Redundant IMU, compass, etc.] |
| **Stabilization** | [ENTER: Attitude, position hold capabilities] |
| **Geofencing** | [ENTER: Geofence capability and settings] |
| **Return-to-Home** | [ENTER: RTH functionality and triggers] |

#### 4.2.2 Propulsion System

| Feature | Description |
|:--------|:------------|
| **Motors** | [ENTER: Type, number, redundancy] |
| **Propellers** | [ENTER: Type, size, quick-release] |
| **Battery System** | [ENTER: Type, capacity, redundancy] |
| **Flight Time Reserve** | [ENTER: Minimum reserve maintained] |

#### 4.2.3 Navigation System

| Feature | Description |
|:--------|:------------|
| **GNSS** | [ENTER: GPS/GLONASS/Galileo support] |
| **RTK Capability** | [ENTER: Yes/No, if yes describe] |
| **Compass** | [ENTER: Type, redundancy] |
| **Barometer** | [ENTER: Altitude sensing] |
| **Visual Positioning** | [ENTER: If equipped] |

#### 4.2.4 Safety Features

| Feature | Description |
|:--------|:------------|
| **Obstacle Avoidance** | [ENTER: Sensors and capability] |
| **Low Battery Protection** | [ENTER: Automatic actions] |
| **Lost Link Protection** | [ENTER: Programmed behavior] |
| **Motor Failure Response** | [ENTER: If applicable] |
| **Emergency Stop** | [ENTER: Kill switch capability] |
| **Parachute System** | [ENTER: If equipped] |

### 4.3 Payload

| Parameter | Specification |
|:----------|:--------------|
| **Primary Payload** | [ENTER: Camera/sensor type] |
| **Secondary Payload** | [ENTER: If applicable] |
| **Total Payload Mass** | [ENTER: kg] |
| **Payload Control** | [ENTER: Manual / Automated] |
| **Data Storage** | [ENTER: SD card / Internal / Transmission] |

### 4.4 Ground Control System

| Component | Specification |
|:----------|:--------------|
| **Remote Controller** | [ENTER: Model] |
| **Display Device** | [ENTER: Tablet/phone model] |
| **Ground Control Software** | [ENTER: App name and version] |
| **Backup Controller** | [ENTER: If applicable] |
| **Antenna Type** | [ENTER: Standard / Directional / Amplified] |

### 4.5 Communication Systems

#### 4.5.1 Command and Control Link

| Parameter | Specification |
|:----------|:--------------|
| **Primary C2 Link** | [ENTER: Technology and frequency] |
| **Backup C2 Link** | [ENTER: If applicable] |
| **Maximum Range** | [ENTER: km under optimal conditions] |
| **Latency** | [ENTER: Typical latency] |
| **Link Quality Monitoring** | [ENTER: How link quality is monitored] |

#### 4.5.2 Video/Telemetry Link

| Parameter | Specification |
|:----------|:--------------|
| **Video Downlink** | [ENTER: Technology and frequency] |
| **Video Latency** | [ENTER: Typical latency] |
| **Telemetry Data** | [ENTER: Parameters displayed] |
| **Telemetry Rate** | [ENTER: Update frequency] |

#### 4.5.3 Crew Communication

| Parameter | Specification |
|:----------|:--------------|
| **Inter-Crew Communication** | [ENTER: Radio type/frequency] |
| **Range** | [ENTER: Effective range] |
| **Backup Communication** | [ENTER: Cell phone, satellite, etc.] |

---

## 5. Personnel and Qualifications

### 5.1 Crew Composition

| Role | Minimum Number | Maximum Number | Required for Each Flight |
|:-----|:---------------|:---------------|:-------------------------|
| **Pilot-in-Command (PIC)** | [ENTER: #] | [ENTER: #] | Yes |
| **Visual Observer (VO)** | [ENTER: #] | [ENTER: #] | [ENTER: Yes/As required] |
| **Payload Operator** | [ENTER: #] | [ENTER: #] | [ENTER: Yes/As required] |
| **Ground Support** | [ENTER: #] | [ENTER: #] | [ENTER: Yes/No] |

### 5.2 Pilot-in-Command Requirements

| Requirement | Specification |
|:------------|:--------------|
| **Pilot Certificate** | Advanced RPAS Certificate |
| **BVLOS Authorization** | [ENTER: Required authorization type] |
| **Recency** | [ENTER: Currency requirements] |
| **Site-Specific Training** | [ENTER: Required familiarization] |
| **Medical Fitness** | Self-declaration per CAR 901.12 |
| **Additional Qualifications** | [ENTER: Any additional requirements] |

### 5.3 Visual Observer Requirements

| Requirement | Specification |
|:------------|:--------------|
| **Training** | [ENTER: Training program reference] |
| **Visual Capability** | Unaided vision or corrected to 20/20 |
| **Communication** | Radio equipped, tested |
| **Positioning** | [ENTER: Positioning requirements] |
| **Responsibilities** | [ENTER: Key responsibilities] |

### 5.4 Other Crew Requirements

*Detail requirements for any other crew positions.*

[ENTER: Requirements for payload operators, ground support, etc.]

### 5.5 Crew Briefing Requirements

**Pre-operation briefing must include:**
- [ ] Mission objectives and flight plan
- [ ] Weather conditions and limitations
- [ ] Airspace and NOTAM review
- [ ] Communication check and protocols
- [ ] Emergency procedures review
- [ ] Crew positions and responsibilities
- [ ] Visual observer sight lines and coverage
- [ ] Hazards and risk mitigations
- [ ] Go/no-go criteria

---

## 6. Operating Area and Airspace

### 6.1 Operating Location

| Parameter | Specification |
|:----------|:--------------|
| **Location Description** | [ENTER: Geographic description] |
| **Province/Territory** | [ENTER: Province(s)] |
| **Nearest Community** | [ENTER: Name and distance] |
| **Access Method** | [ENTER: Road/helicopter/boat] |
| **Land Ownership** | [ENTER: Crown/private/other] |
| **Land Access Permission** | [ENTER: How obtained/documented] |

### 6.2 Operating Area Definition

| Parameter | Specification |
|:----------|:--------------|
| **Center Point Coordinates** | [ENTER: Lat/Long or multiple points] |
| **Horizontal Extent** | [ENTER: Radius or polygon description] |
| **Operational Volume (Vertical)** | [ENTER: Lower and upper limits AGL/ASL] |
| **Contingency Volume** | [ENTER: If applicable, buffer zone] |
| **Ground Risk Buffer** | [ENTER: If applicable] |

### 6.3 Operating Area Map

*Attach map(s) showing:*
- Operating area boundaries
- Launch/recovery locations
- Visual observer positions
- Emergency landing areas
- Obstacles and hazards
- Airspace boundaries if relevant
- North arrow and scale

**Map Reference:** [ENTER: Attachment reference]

### 6.4 Airspace

| Parameter | Specification |
|:----------|:--------------|
| **Airspace Classification** | [ENTER: Class G/E/D/C] |
| **Controlled Airspace Proximity** | [ENTER: Distance to nearest controlled airspace] |
| **Aerodrome Proximity** | [ENTER: Distance to nearest aerodrome] |
| **NAV CANADA Notification** | [ENTER: Required Yes/No, method] |
| **ATC Authorization** | [ENTER: Required Yes/No] |
| **NOTAM** | [ENTER: Will be issued Yes/No] |

### 6.5 Site Characteristics

| Characteristic | Description |
|:---------------|:------------|
| **Terrain** | [ENTER: Flat, hilly, mountainous, etc.] |
| **Vegetation** | [ENTER: Open, forested, mixed, etc.] |
| **Obstacles** | [ENTER: Towers, power lines, structures, etc.] |
| **Population** | [ENTER: Unpopulated, sparsely populated, etc.] |
| **Infrastructure** | [ENTER: Roads, buildings, pipelines, etc.] |
| **Wildlife Considerations** | [ENTER: If applicable] |
| **Electromagnetic Environment** | [ENTER: Known interference sources] |

---

## 7. Operating Procedures

### 7.1 Pre-Flight Procedures

#### 7.1.1 Mission Planning

*Completed minimum 24 hours before operation:*

- [ ] Weather forecast review (aviation weather)
- [ ] NOTAM check
- [ ] Airspace authorization (if required)
- [ ] Site survey review or update
- [ ] Flight plan preparation
- [ ] Equipment serviceability verification
- [ ] Crew assignment and notification
- [ ] Client/stakeholder coordination
- [ ] Risk assessment review

#### 7.1.2 Pre-Departure Checks

*Completed before traveling to site:*

- [ ] Equipment inventory complete
- [ ] Batteries charged and tested
- [ ] Communication equipment tested
- [ ] Current weather check
- [ ] NOTAM update
- [ ] Crew fit for duty confirmation
- [ ] Documentation complete

#### 7.1.3 On-Site Pre-Flight

*Completed at operating location before flight:*

- [ ] Site survey/verification
- [ ] Launch area preparation
- [ ] Equipment setup and inspection
- [ ] Compass calibration (if required)
- [ ] GPS lock verification (minimum satellites: [ENTER: #])
- [ ] Control link test
- [ ] Video link test
- [ ] Crew communication test
- [ ] Visual observer positioning
- [ ] Weather observation (actual conditions)
- [ ] Final go/no-go decision
- [ ] Crew briefing complete

### 7.2 Flight Procedures

#### 7.2.1 Launch Procedure

[ENTER: Step-by-step launch procedure:
1. Final area clear check
2. Arm aircraft
3. Initiate takeoff
4. Confirm stable hover
5. System check at hover
6. Proceed on mission]

#### 7.2.2 Mission Execution

[ENTER: Step-by-step mission execution:
- Altitude and heading established
- Communication protocol
- Monitoring requirements
- Waypoint/checkpoint procedures
- Payload operation
- Position reporting]

#### 7.2.3 Visual Observer Procedures

[ENTER: VO procedures:
- Scanning technique
- Traffic detection and reporting
- Communication protocol
- Hand-off procedures between VOs
- Actions on detecting traffic]

#### 7.2.4 Recovery Procedure

[ENTER: Step-by-step recovery procedure:
1. Mission complete confirmation
2. Return to landing area
3. Final approach
4. Landing
5. Disarm
6. Post-landing checks]

### 7.3 Post-Flight Procedures

- [ ] Aircraft inspection
- [ ] Battery status documentation
- [ ] Flight data download
- [ ] Flight log completion
- [ ] Occurrence/anomaly reporting
- [ ] Equipment securing
- [ ] Site restoration

---

## 8. Abnormal and Emergency Procedures

### 8.1 Abnormal Procedures

#### 8.1.1 Loss of GPS

| Phase | Action |
|:------|:-------|
| **Detection** | GPS satellite count drops below [ENTER: #] or position error indicated |
| **Immediate Action** | Switch to attitude mode if required |
| **Assessment** | Determine if GPS will recover |
| **Decision** | RTH if GPS recovers; manual recovery if not |
| **Recovery** | Land at nearest safe location |

#### 8.1.2 Degraded C2 Link

| Phase | Action |
|:------|:-------|
| **Detection** | Link quality indicator below [ENTER: %] |
| **Immediate Action** | Reduce distance or adjust antenna |
| **Assessment** | Determine cause of degradation |
| **Decision** | Continue if recovers; RTH if continues to degrade |
| **Recovery** | Maintain visual/telemetry monitoring during RTH |

#### 8.1.3 Low Battery Warning

| Phase | Action |
|:------|:-------|
| **Detection** | Battery level at [ENTER: %] or cell voltage at [ENTER: V] |
| **Immediate Action** | Initiate RTH immediately |
| **Assessment** | Calculate if RTH achievable |
| **Decision** | Continue RTH or divert to emergency landing area |
| **Recovery** | Land with minimum [ENTER: %] reserve |

#### 8.1.4 Adverse Weather Development

| Phase | Action |
|:------|:-------|
| **Detection** | Visibility reducing, wind increasing, precipitation starting |
| **Immediate Action** | Assess impact on operation |
| **Assessment** | Compare to weather minimums |
| **Decision** | Continue if within limits; RTH if approaching limits |
| **Recovery** | Land before conditions become limiting |

### 8.2 Emergency Procedures

#### 8.2.1 Loss of C2 Link

| Phase | Action |
|:------|:-------|
| **Detection** | Complete loss of command link indication |
| **Aircraft Behavior** | [ENTER: Programmed lost link behavior - hover, RTH, land] |
| **Pilot Action** | Attempt link recovery; prepare for aircraft return |
| **Recovery** | Monitor telemetry if available; acquire visual when in range |
| **Post-Recovery** | Inspect aircraft; document incident; do not fly until cause determined |

#### 8.2.2 Flyaway

| Phase | Action |
|:------|:-------|
| **Detection** | Aircraft not responding to commands and moving away |
| **Immediate Action** | Attempt emergency stop / RTH commands |
| **Notification** | Alert all crew; prepare to notify ATC if approaching controlled airspace |
| **Tracking** | Monitor telemetry for position if available |
| **Post-Event** | Document last known position; report per SMS; recovery operation |

#### 8.2.3 In-Flight Emergency (Fire, Structural Failure)

| Phase | Action |
|:------|:-------|
| **Detection** | Smoke, unusual sounds, structural anomaly observed |
| **Immediate Action** | Attempt controlled emergency landing in safe area |
| **Priority** | Protect people on ground; minimize damage to property |
| **Post-Landing** | Do not approach if fire/smoke present; secure area |
| **Reporting** | Report per emergency reporting procedure |

#### 8.2.4 Manned Aircraft Conflict

| Phase | Action |
|:------|:-------|
| **Detection** | Manned aircraft observed by VO or PIC |
| **Immediate Action** | Descend immediately; give way to manned aircraft |
| **Communication** | VO reports bearing, altitude, direction of manned aircraft |
| **Recovery** | Maintain separation until manned aircraft clear |
| **Documentation** | Document occurrence; report if near-miss |

### 8.3 Emergency Contact Information

| Contact | Name | Phone | When to Contact |
|:--------|:-----|:------|:----------------|
| **NAV CANADA (ATS)** | [ENTER: Applicable FIC] | [ENTER: Phone] | Flyaway into controlled airspace |
| **Emergency Services** | 911 | 911 | Injury, fire, crash with damage |
| **Transport Canada** | TSB/TC | [ENTER: Number] | Reportable occurrence |
| **Company Emergency** | [ENTER: Name] | [ENTER: Phone] | Any emergency |
| **Client Contact** | [ENTER: Name] | [ENTER: Phone] | As required by client |

---

## 9. Risk Mitigations

### 9.1 Ground Risk Mitigations

| Risk | Mitigation |
|:-----|:-----------|
| **Impact on persons** | [ENTER: How risk is mitigated - unpopulated area, controlled area, etc.] |
| **Impact on property** | [ENTER: How risk is mitigated] |
| **Impact on critical infrastructure** | [ENTER: How risk is mitigated] |

### 9.2 Air Risk Mitigations

| Risk | Mitigation |
|:-----|:-----------|
| **Mid-air collision** | [ENTER: How risk is mitigated - VOs, DAA, airspace restriction, etc.] |
| **Airspace infringement** | [ENTER: How risk is mitigated - geofencing, monitoring, etc.] |

### 9.3 Technical Risk Mitigations

| Risk | Mitigation |
|:-----|:-----------|
| **C2 link loss** | [ENTER: Lost link programming, redundancy] |
| **GPS failure** | [ENTER: Redundant navigation, manual capability] |
| **Battery failure** | [ENTER: Monitoring, reserves, redundancy] |
| **Motor failure** | [ENTER: If applicable, redundant motors] |
| **Software failure** | [ENTER: Testing, version control, backup systems] |

### 9.4 Operational Risk Mitigations

| Risk | Mitigation |
|:-----|:-----------|
| **Pilot error** | [ENTER: Training, checklists, procedures, CRM] |
| **Weather** | [ENTER: Forecasting, monitoring, minimums, abort criteria] |
| **Fatigue** | [ENTER: Duty limits, fitness for duty, crew support] |
| **Communication failure** | [ENTER: Redundant communication, protocols] |

### 9.5 SORA Reference

*If a SORA assessment has been completed:*

**SORA Reference:** [ENTER: SORA document reference number]

**SORA Results Summary:**
- Ground Risk Class: [ENTER: GRC]
- Air Risk Class: [ENTER: ARC]
- SAIL: [ENTER: SAIL level]

---

## 10. Command and Control

### 10.1 Command Structure

```
[ENTER: Organizational chart or text description]

Example:
                    Accountable Executive
                           |
                    Operations Manager
                           |
                    Pilot-in-Command
                    /              \
          Visual Observer(s)    Payload Operator
```

### 10.2 Authority and Responsibility

| Role | Authority | Responsibility |
|:-----|:----------|:---------------|
| **Accountable Executive** | Overall program authority | Safety management, regulatory compliance |
| **Operations Manager** | Operational approval authority | Operational oversight, resource allocation |
| **Pilot-in-Command** | Flight authority | Safe conduct of flight, go/no-go decisions |
| **Visual Observer** | Traffic call authority | Detect and report traffic |
| **Payload Operator** | Payload operation | Sensor operation, data collection |

### 10.3 Decision Authority

| Decision | Authority |
|:---------|:----------|
| **Mission go/no-go** | PIC with Operations Manager concurrence |
| **In-flight abort** | PIC (sole authority) |
| **Weather call** | PIC (sole authority) |
| **Emergency actions** | PIC (sole authority) |
| **Post-incident continuation** | Operations Manager |

### 10.4 Communication Protocols

| Communication | Frequency | Purpose |
|:--------------|:----------|:--------|
| **PIC to VO** | [ENTER: Channel/frequency] | Flight status, traffic coordination |
| **VO to PIC** | [ENTER: Channel/frequency] | Traffic reports, observations |
| **PIC to Operations** | [ENTER: Method] | Status reports, emergency notification |
| **Standard calls** | [ENTER: Required calls] | [ENTER: When made] |

### 10.5 Standard Radio Calls

| Situation | Call |
|:----------|:-----|
| **Launch** | "Launching [callsign], [location]" |
| **Position reports** | "[Callsign] at waypoint [#], altitude [#], proceeding [direction]" |
| **Traffic sighting** | "Traffic, [bearing], [altitude], [type if known], [direction of travel]" |
| **Descend for traffic** | "Descending for traffic" |
| **Clear of traffic** | "Clear of traffic, resuming" |
| **RTH initiated** | "[Callsign] returning to home" |
| **Landing** | "[Callsign] landing" |
| **Emergency** | "Emergency, emergency, emergency, [nature of emergency]" |

---

## 11. Weather Limitations

### 11.1 Weather Minimums

| Parameter | Minimum/Maximum | Notes |
|:----------|:----------------|:------|
| **Visibility** | [ENTER: km] | Horizontal visibility |
| **Cloud ceiling** | [ENTER: ft AGL] | Base of clouds above ground |
| **Wind (sustained)** | [ENTER: km/h or m/s] | At ground level |
| **Wind (gusts)** | [ENTER: km/h or m/s] | Maximum gusts |
| **Precipitation** | [ENTER: Limit] | None / Light / etc. |
| **Temperature** | [ENTER: Range] | Operating temperature range |
| **Icing conditions** | Not permitted | No flight in icing |
| **Thunderstorms** | [ENTER: Distance] | Minimum distance from cells |

### 11.2 Weather Information Sources

| Source | Information | Usage |
|:-------|:------------|:------|
| **Aviation weather (NAV CANADA)** | TAFs, METARs, GFAs | Primary forecasting |
| **Environment Canada** | Public forecasts | Supplementary |
| **On-site observation** | Actual conditions | Go/no-go decision |
| **Portable weather station** | Wind, temperature | Real-time monitoring |

### 11.3 Weather Decision Protocol

| Timing | Action |
|:-------|:-------|
| **24 hours prior** | Initial forecast review |
| **Morning of operation** | Detailed forecast review, preliminary go/no-go |
| **Arrival on site** | Actual conditions assessment |
| **Pre-flight** | Final go/no-go based on actual conditions |
| **During flight** | Continuous monitoring, abort if conditions deteriorate |

---

## 12. Documentation and Reporting

### 12.1 Required Documentation

| Document | When Required | Retention |
|:---------|:--------------|:----------|
| **Flight plan** | Each flight | 2 years |
| **Pre-flight checklist** | Each flight | 2 years |
| **Flight log** | Each flight | 2 years |
| **Crew qualifications** | On file | Current + 2 years |
| **Aircraft maintenance records** | On file | Life of aircraft |
| **Weather documentation** | Each operation | 2 years |
| **Occurrence reports** | As required | 2 years |

### 12.2 Reporting Requirements

| Event | Report To | Timeline |
|:------|:----------|:---------|
| **Injury to person** | TSB, TC, Company | Immediate |
| **Collision with manned aircraft** | TSB, TC, Company | Immediate |
| **Airspace infringement** | NAV CANADA, TC, Company | Immediate |
| **Flyaway** | Company, TC if applicable | Same day |
| **Near miss** | Company | Same day |
| **Equipment failure** | Company | Same day |
| **Other occurrence** | Company | 24 hours |

---

## 13. Attachments

| Attachment | Description |
|:-----------|:------------|
| **A - Operating Area Maps** | Detailed maps of operating area(s) |
| **B - UAS Technical Specifications** | Manufacturer specifications |
| **C - Pilot Certificates and Authorizations** | Copies of credentials |
| **D - Standard Operating Procedures** | Referenced SOPs |
| **E - Emergency Response Plan** | ERP document |
| **F - SORA Assessment** | If completed |
| **G - Site Survey** | Site survey documentation |
| **H - Communication Plan** | Detailed comm procedures |

---

## 14. Approval

### 14.1 Document Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| **Prepared By** | [ENTER: Name] | _________________ | [ENTER: Date] |
| **Reviewed By** | [ENTER: Name] | _________________ | [ENTER: Date] |
| **Approved By** | [ENTER: Name] | _________________ | [ENTER: Date] |

### 14.2 Approval Statement

I approve this Concept of Operations and certify that operations conducted in accordance with this document will be safe and compliant with applicable regulations.

**Accountable Executive:** _________________________ **Date:** _____________

---

## 15. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-005 | BVLOS Operations Policy |
| OPS-009-PR | BVLOS Operations Procedure |
| REG-SORA-BVLOS | Standard BVLOS SORA Template |
| HSE-007 | Emergency Response Policy |
| OPS-011-PR | Emergency Procedures (RPAS) |
| GUIDE-BVLOS | BVLOS Operations Guide |

---

**Document Control:** REG-CONOPS-BVLOS v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
