-- Batch 2 of 8
-- Documents 21 to 40 of 155
-- Run this in Supabase SQL Editor

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Night Operations Policy',
  'policy',
  'OPS-009',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# NIGHT OPERATIONS POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-009 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This policy establishes requirements for conducting RPAS operations at night, which require a Special Flight Operations Certificate (SFOC) under current regulations.

---

## 2. Scope

This policy applies to:
- All RPAS operations conducted during night (as defined)
- Personnel involved in night operations
- Aircraft equipped for night flight

---

## 3. Definitions

| Term | Definition |
|:-----|:-----------|
| **Night** | The period between the end of evening civil twilight and the beginning of morning civil twilight |
| **Civil Twilight** | Sun 6° below horizon |
| **Anti-Collision Lights** | Lights visible for minimum distance to identify aircraft position |

---

## 4. References

| Reference | Description |
|:----------|:------------|
| CAR 901.19 | RPAS lighting requirements |
| CAR 901.77-901.87 | SFOC requirements |
| SFOC (Night) | Current night operations SFOC |

---

## 5. Policy

### 5.1 SFOC Requirement

**Night operations require a valid SFOC.**

Night operations shall only be conducted when:
- Valid SFOC is held for the operation
- All SFOC conditions are met
- Personnel meet night qualification requirements
- Aircraft are equipped per requirements

### 5.2 Night Definition

Night begins at the end of evening civil twilight and ends at the beginning of morning civil twilight.

**Check official sunrise/sunset tables** including civil twilight times for the operation location.

Do not rely on visual assessment of darkness.

### 5.3 SFOC Application

When night operations are required:
1. Operations Manager applies for SFOC
2. Application includes:
   - Operation details
   - Risk assessment
   - Mitigation measures
   - Aircraft lighting description
   - Pilot qualifications
3. Allow minimum 30 business days
4. Operate only after SFOC issued

### 5.4 Pilot Requirements

Night operations PICs shall:
- Hold Pilot Certificate - Advanced Operations
- Complete night operations training
- Be familiar with aircraft night configuration
- Be approved for night operations by Operations Manager
- Meet SFOC-specified requirements

### 5.5 Aircraft Requirements

Night operations aircraft shall have:
- Anti-collision lights visible at minimum range specified
- Position lights recommended
- Lights operational and verified before flight
- Spare batteries/power for lights
- Lighting compliant with SFOC conditions

### 5.6 Operational Requirements

Before night operations:
- Verify SFOC validity
- Review SFOC conditions
- Site survey in daylight if possible
- Identify hazards specific to night
- Verify all lighting functional
- Establish visual references
- Enhanced FLHA for night hazards

During night operations:
- Maintain visual contact with aircraft lights
- Increased vigilance for obstacles
- Monitor battery consumption (lights add drain)
- Maintain communication between crew
- Enhanced lost-sight procedures

### 5.7 Site Requirements

Night operation sites shall:
- Be surveyed (preferably in daylight)
- Have obstacles identified
- Have adequate GCS (ground control station) lighting
- Have emergency lighting available
- Minimize glare affecting pilot vision
- Have identified emergency landing areas

### 5.8 Additional Hazards

Night operations increase risk from:
- Reduced depth perception
- Difficulty seeing obstacles
- Difficulty detecting aircraft orientation
- Reduced ability to see other aircraft
- Cold temperatures (longer nights in winter)
- Fatigue (working unusual hours)

### 5.9 Documentation

Document for night operations:
- SFOC reference number
- Civil twilight times
- Light functionality verification
- Night-specific hazards on FLHA
- Any incidents or observations

---

## 6. Contingencies

### Loss of Aircraft Lighting
- Attempt to land immediately
- Use telemetry for position if available
- Have backup visual reference plan

### Loss of Ground Lighting
- Have backup lighting
- Know aircraft position via telemetry
- Be prepared to execute emergency procedures

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Obtain SFOC; ensure compliance; authorize pilots |
| **PIC** | Verify requirements met; conduct safe operations; comply with SFOC |
| **Visual Observer** | Maintain visual contact with aircraft lights; alert to hazards |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-012-PR | Night Operations Procedure |
| OPS-001 | RPAS Flight Operations Policy |
| SFOC (Night) | Current night operations SFOC |
| FRM-SFOCAPP | SFOC Application Template |

---

## 9. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** OPS-009 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Policies']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Flight School Policy',
  'policy',
  'OPS-010',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# FLIGHT SCHOOL POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-010 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Chief Flight Instructor |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This policy establishes requirements for RPAS flight training operations conducted under Aeria Solutions'' Level 1 Complex (L1C) Declaration for flight instruction.

---

## 2. Scope

This policy applies to:
- All RPAS flight training operations
- Flight instructors
- Student pilots
- Training aircraft and equipment

---

## 3. Definitions

| Term | Definition |
|:-----|:-----------|
| **CFI** | Chief Flight Instructor |
| **Student Pilot** | Person receiving flight instruction |
| **Ground School** | Classroom/theoretical instruction |
| **Flight Training** | Practical flying instruction |
| **Solo Flight** | Student flight without instructor |

---

## 4. References

| Reference | Description |
|:----------|:------------|
| CAR 901.67-901.76 | L1C Declaration requirements |
| TP 15263 | Pilot knowledge requirements |
| Aeria L1C Declaration | Flight training authorization |
| TCP-001 | Training & Competency Program Manual |

---

## 5. Policy

### 5.1 Flight School Authorization

Aeria Solutions operates flight training under L1C Declaration permitting:
- RPAS flight instruction
- Student pilot training (Basic and Advanced)
- BVLOS training for qualified pilots
- Flight reviews

Chief Flight Instructor: **Dustin Wales**

### 5.2 Flight Instructor Requirements

Flight instructors shall:
- Hold Pilot Certificate - Advanced Operations
- Complete instructor training program
- Be approved by Chief Flight Instructor
- Maintain instructor currency
- Demonstrate effective teaching skills
- Be current on aircraft types used for training

### 5.3 Student Requirements

#### Basic Operations Training
- Minimum age 14 years
- Able to read and write English
- Complete ground school
- Pass practical flight assessment

#### Advanced Operations Training
- Minimum age 16 years
- Complete Basic training (or equivalent)
- Complete Advanced ground school
- Pass flight review
- Pass practical flight assessment

### 5.4 Training Programs

| Program | Content |
|:--------|:--------|
| **Basic Ground School** | Regulations, airspace, weather, aircraft systems, emergency procedures |
| **Basic Practical** | Pre-flight, normal operations, emergency procedures, post-flight |
| **Advanced Ground School** | Enhanced regulations, controlled airspace, complex operations |
| **Advanced Practical** | Site assessment, controlled airspace ops, flight review |
| **BVLOS Training** | BVLOS procedures, risk assessment, emergency response |

### 5.5 Training Standards

Training shall:
- Follow approved curriculum
- Meet Transport Canada knowledge requirements
- Include both theoretical and practical components
- Assess competency before completion
- Be documented in training records

### 5.6 Solo Flight

Student solo flights require:
- CFI authorization
- Completion of required dual instruction
- Demonstrated competency in normal and emergency procedures
- Appropriate supervision arrangements
- Favorable conditions for student skill level

### 5.7 Training Aircraft

Training aircraft shall:
- Be suitable for instruction
- Be properly maintained
- Have dual control capability where required
- Be registered and airworthy
- Have appropriate insurance

### 5.8 Training Locations

Training shall be conducted at:
- Approved training sites
- Sites appropriate for student skill level
- Locations complying with all regulatory requirements
- Areas where training activities are permitted

### 5.9 Documentation

Maintain training records including:
- Student identification and contact
- Training syllabus progress
- Ground school completion
- Flight training hours
- Assessments and evaluations
- Certificate recommendations

### 5.10 Flight Reviews

Flight reviews shall:
- Be conducted by approved instructors
- Assess current competency
- Cover both ground and flight
- Meet regulatory requirements
- Be documented

---

## 6. Curriculum

### Basic Operations Curriculum

**Ground School (minimum 4 hours):**
- Canadian Aviation Regulations Part IX
- Airspace and operating rules
- Weather for RPAS operations
- Aircraft systems and limitations
- Emergency procedures
- Human factors

**Practical Training (minimum 2 hours):**
- Pre-flight inspection
- Normal takeoff and landing
- Basic maneuvers
- Emergency procedures
- Post-flight procedures

### Advanced Operations Curriculum

**Ground School (minimum 6 hours):**
- All Basic content plus:
- Controlled airspace operations
- Site assessment
- Complex operations
- Flight review requirements

**Practical Training (minimum 3 hours):**
- All Basic skills plus:
- Complex maneuvers
- Failure scenarios
- Site assessment practical
- Flight review

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Chief Flight Instructor** | Oversee training program; approve instructors; maintain standards |
| **Flight Instructor** | Deliver instruction; assess students; maintain currency |
| **Student** | Complete training requirements; demonstrate competency |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| TCP-001 | Training & Competency Program Manual |
| OPS-004 | Crew Qualifications Policy |
| OPS-013-PR | Flight Training Procedure |
| FRM-TREC | Training Record Form |
| L1C Declaration | Flight training authorization |

---

## 9. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Chief Flight Instructor | Dustin Wales | _________________ | _________________ |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** OPS-010 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Policies']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Cargo Delivery Operations Policy',
  'policy',
  'OPS-013',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# CARGO DELIVERY OPERATIONS POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-013 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes requirements for RPAS-based cargo and equipment delivery operations using medium-sized delivery aircraft such as the DJI FlyCart 30.

---

## 2. Scope

This policy applies to:
- All cargo delivery operations using RPAS
- Equipment delivery for energy, mining, and infrastructure sectors
- Urban and rural delivery operations
- Operations with medium RPAS (25-150 kg)

---

## 3. Policy Statement

Aeria Solutions is committed to conducting cargo delivery operations safely, in compliance with Transport Canada regulations, and with appropriate consideration for payload characteristics, environmental conditions, and third-party safety.

---

## 4. Regulatory Framework

| Regulation | Requirement |
|:-----------|:------------|
| CARs Part IX | RPAS operations |
| Medium RPAS regulations | 25-150 kg aircraft requirements |
| Canadian Transportation Agency | Economic licence for cargo operations |
| Transport of Dangerous Goods Act | If carrying dangerous goods |
| Provincial regulations | Site-specific requirements |

---

## 5. Aircraft Requirements

### 5.1 Approved Delivery Aircraft

| Aircraft | Max Payload | Configuration |
|:---------|:------------|:--------------|
| DJI FlyCart 30 | 30 kg (dual battery) / 40 kg (single battery) | Cargo box or winch |
| Other approved aircraft | Per manufacturer specifications | Per approval |

### 5.2 Aircraft Classification

Medium RPAS (25-150 kg MTOW):
- Must be on Transport Canada Safety Assurance Declaration list
- Requires Advanced pilot certificate
- May operate VLOS without SFOC under specific conditions
- BVLOS requires additional authorization

### 5.3 Aircraft Configuration

| Mode | Application |
|:-----|:------------|
| **Cargo Mode** | Secured cargo box delivery |
| **Winch Mode** | Lowered delivery without landing |

---

## 6. Operational Requirements

### 6.1 General Requirements

All cargo delivery operations must:
- Use approved aircraft and procedures
- Be conducted by qualified personnel
- Include thorough pre-flight planning
- Account for payload weight and balance
- Consider delivery site conditions
- Maintain regulatory compliance

### 6.2 Pilot Qualifications

| Requirement | Standard |
|:------------|:---------|
| Certificate | Advanced RPAS certificate |
| Medium RPAS endorsement | Required for 25-150 kg |
| Company authorization | Cargo delivery specific |
| Currency | Per company requirements |
| Training | Delivery aircraft type training |

### 6.3 Payload Requirements

| Requirement | Standard |
|:------------|:---------|
| Weight | Within aircraft limits |
| Balance | CG within limits |
| Securing | Properly restrained |
| Packaging | Protected from flight conditions |
| Documentation | Manifest for all cargo |

---

## 7. Operational Categories

### 7.1 Standard Cargo Delivery

General equipment and supplies delivery:
- Non-hazardous materials
- Within aircraft payload limits
- Standard operational procedures

### 7.2 Energy Sector Delivery

Equipment delivery for oil & gas, power, renewable energy:
- Site-specific coordination required
- Hot work area avoidance
- Industrial site procedures apply

### 7.3 Mining Sector Delivery

Equipment delivery for mining operations:
- Remote site operations common
- Coordination with mine operations
- Working alone protocols may apply

### 7.4 Infrastructure Delivery

Equipment for construction, telecommunications, utilities:
- Urban and rural settings
- Site access coordination
- Obstacle awareness critical

### 7.5 Dangerous Goods Delivery

Requires additional authorization:
- TDG compliance mandatory
- See OPS-014 Dangerous Goods Policy
- Special packaging and handling

---

## 8. Delivery Methods

### 8.1 Direct Landing Delivery

| Requirement | Standard |
|:------------|:---------|
| Landing zone | Clear, stable, adequate size |
| Surface | Suitable for aircraft weight |
| Approach/departure | Clear flight path |
| Personnel | Clear of landing zone |

### 8.2 Winch Delivery

| Requirement | Standard |
|:------------|:---------|
| Drop zone | Clear of obstacles |
| Personnel | Safe distance maintained |
| Wind conditions | Within winch operation limits |
| Cargo release | Controlled, confirmed |

---

## 9. Weather Limitations

| Condition | Limit |
|:----------|:------|
| Wind | Per aircraft specifications (FlyCart 30: 12 m/s) |
| Precipitation | Light or none |
| Visibility | Minimum 3 km |
| Temperature | -20°C to +45°C (FlyCart 30) |
| Icing | No flight in icing conditions |

---

## 10. Safety Requirements

### 10.1 Delivery Zone Safety

- Clear delivery zone of personnel before approach
- Maintain safe distances during delivery
- Secure cargo before aircraft departure
- Verify delivery completion

### 10.2 Emergency Procedures

- Emergency landing sites identified
- Lost link procedures established
- Cargo jettison procedures (if applicable)
- Communication with delivery site

---

## 11. Documentation

### 11.1 Required Records

| Document | Retention |
|:---------|:----------|
| Flight log | 10 years |
| Cargo manifest | 7 years |
| Delivery confirmation | 7 years |
| Pre-flight records | 10 years |

---

## 12. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Operations Manager** | Program oversight; authorization |
| **PIC** | Safe delivery execution |
| **Ground crew** | Cargo handling; delivery zone |

---

## 13. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-013-PR | Cargo Delivery Procedure |
| OPS-014 | Dangerous Goods Transport Policy |
| OPS-005 | BVLOS Operations Policy |
| FHA-019 | Cargo Delivery Operations |
| MCM-001 | Maintenance Control Manual |

---

**Document Control:** OPS-013 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Policies']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Dangerous Goods Transport Policy',
  'policy',
  'OPS-014',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# DANGEROUS GOODS TRANSPORT POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-014 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes requirements for the transport of dangerous goods by RPAS in compliance with the Transportation of Dangerous Goods Act and Regulations.

---

## 2. Scope

This policy applies to:
- All RPAS transport of dangerous goods
- Class 1 explosives (avalanche control)
- Permitted dangerous goods categories
- Personnel involved in dangerous goods handling

---

## 3. Policy Statement

Aeria Solutions will only transport dangerous goods by RPAS when:
- Properly authorized by Transport Canada
- In compliance with TDG Regulations
- Using appropriate equipment and procedures
- Conducted by trained and certified personnel

---

## 4. Regulatory Framework

| Regulation | Authority |
|:-----------|:----------|
| Transportation of Dangerous Goods Act, 1992 | Transport Canada |
| TDG Regulations | Transport Canada |
| Explosives Act | Natural Resources Canada |
| Explosives Regulations, 2013 | Natural Resources Canada |
| CARs Part IX | Transport Canada |
| Part 12 - Air Transport (TDG) | Transport Canada |

---

## 5. Dangerous Goods Classifications

### 5.1 TDG Classes

| Class | Description | RPAS Transport |
|:------|:------------|:---------------|
| Class 1 | Explosives | Authorized operations only |
| Class 2 | Gases | Per TDG authorization |
| Class 3 | Flammable liquids | Per TDG authorization |
| Class 4 | Flammable solids | Per TDG authorization |
| Class 5 | Oxidizers | Per TDG authorization |
| Class 6 | Toxic/infectious | Per TDG authorization |
| Class 7 | Radioactive | Special authorization |
| Class 8 | Corrosives | Per TDG authorization |
| Class 9 | Miscellaneous | Per TDG authorization |

### 5.2 Aeria Solutions Authorized Categories

Subject to appropriate authorization and training:
- Class 1 Explosives (avalanche control - see OPS-015)
- Other classes per specific TDG certificate

---

## 6. Authorization Requirements

### 6.1 Company Authorization

| Requirement | Details |
|:------------|:--------|
| TDG Certificate | Transport Canada issued |
| SFOC | If required for operation |
| Insurance | Dangerous goods coverage |
| Emergency response plan | Specific to goods transported |

### 6.2 Personnel Requirements

| Requirement | Standard |
|:------------|:---------|
| TDG Training | Current certification |
| RPAS certification | Advanced certificate minimum |
| Company authorization | Specific to goods category |
| Refresher training | Per TDG requirements |

---

## 7. General Requirements

### 7.1 Pre-Transport

Before transporting dangerous goods:
1. Verify authorization current
2. Confirm goods properly classified
3. Verify packaging compliant
4. Complete documentation
5. Inspect aircraft suitability
6. Brief all personnel
7. Verify emergency equipment

### 7.2 Packaging Requirements

| Requirement | Standard |
|:------------|:---------|
| UN specification packaging | As required by class |
| Proper containment | Prevent release |
| Compatibility | With other cargo and aircraft |
| Labeling | TDG required marks and labels |
| Securing | Prevent movement and damage |

### 7.3 Documentation

Required shipping documents:
- Proper shipping name
- UN number
- Class/division
- Packing group
- Quantity
- 24-hour emergency contact

### 7.4 Marking and Labeling

All dangerous goods packages must display:
- UN specification markings
- Proper shipping name
- UN number
- Hazard labels
- Handling labels (as required)

---

## 8. Operational Requirements

### 8.1 Flight Planning

| Consideration | Requirement |
|:--------------|:------------|
| Route | Avoid populated areas where possible |
| Weather | More conservative limits |
| Alternate sites | Emergency landing options |
| Communication | Continuous capability |
| Notification | As required by authorization |

### 8.2 Loading

- Trained personnel only
- Verify cargo secured
- Verify weight/balance
- Document cargo position
- Verify no incompatible combinations

### 8.3 Transport

- Monitor cargo status (if capability exists)
- Maintain communication
- Be prepared for emergency
- Follow planned route

### 8.4 Delivery/Unloading

- Trained personnel at receiving end
- Verify safe delivery
- Document transfer
- Confirm receipt

---

## 9. Emergency Response

### 9.1 Emergency Response Plan

Maintain plan addressing:
- Spill/release procedures
- Fire procedures
- Medical emergency
- Notification requirements
- Evacuation procedures

### 9.2 Emergency Equipment

| Equipment | When Required |
|:----------|:--------------|
| Spill kit | Liquid dangerous goods |
| Fire extinguisher | All operations |
| First aid | All operations |
| PPE | Per goods classification |
| Communication | All operations |

### 9.3 Incident Reporting

Dangerous goods incidents must be reported to:
- Transport Canada (TDG)
- TSB (if aviation occurrence)
- Natural Resources Canada (if explosives)
- Provincial authorities (as required)
- Client notification

---

## 10. Class 1 Explosives

### 10.1 Additional Requirements

For Class 1 explosives:
- Natural Resources Canada authorization
- Explosives storage licence (or exemption)
- Blaster certification (for use)
- Enhanced security measures
- Specific insurance coverage

### 10.2 Reference

See OPS-015 Avalanche Control Operations Policy for detailed explosives procedures.

---

## 11. Training Requirements

### 11.1 TDG Training

| Training | Frequency |
|:---------|:----------|
| Initial TDG | Before handling |
| Refresher TDG | Every 3 years |
| Class-specific | Per goods handled |
| Emergency response | Initial + annual |

### 11.2 Training Records

Maintain records of:
- Training completed
- Certificate numbers
- Expiry dates
- Competency verification

---

## 12. Documentation and Records

### 12.1 Required Records

| Record | Retention |
|:-------|:----------|
| TDG certificates | Current + 3 years |
| Training records | Employment + 3 years |
| Shipping documents | 2 years |
| Incident reports | 10 years |

---

## 13. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Accountable Executive** | Overall TDG compliance |
| **Operations Manager** | Program implementation |
| **PIC** | Safe transport execution |
| **Cargo handlers** | Proper handling and documentation |

---

## 14. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-014-PR | Dangerous Goods Transport Procedure |
| OPS-015 | Avalanche Control Operations Policy |
| OPS-013 | Cargo Delivery Operations Policy |
| FHA-020 | Dangerous Goods/Explosives Operations |

---

## 15. External References

| Reference | Description |
|:----------|:------------|
| TDG Regulations | Transport Canada |
| Part 12 TDG | Air Transport requirements |
| CANUTEC | 24-hour emergency: 1-888-226-8832 |
| Explosives Regulations, 2013 | Natural Resources Canada |

---

**Document Control:** OPS-014 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Policies']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Avalanche Control Operations Policy',
  'policy',
  'OPS-015',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# AVALANCHE CONTROL OPERATIONS POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-015 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes requirements for RPAS-based avalanche control operations involving the delivery and deployment of explosives to trigger controlled avalanches.

---

## 2. Scope

This policy applies to:
- All avalanche control operations using RPAS
- Explosive delivery for avalanche mitigation
- Support to transportation ministries (highways)
- Support to ski resorts and backcountry operations
- All personnel involved in avalanche control

---

## 3. Policy Statement

Aeria Solutions will conduct avalanche control operations only when:
- Fully authorized by Transport Canada (SFOC)
- Licensed under the Explosives Act
- In coordination with avalanche control authorities
- Conducted by trained and certified personnel
- Following Canadian Avalanche Association standards

---

## 4. Regulatory Framework

| Regulation | Authority | Requirement |
|:-----------|:----------|:------------|
| CARs Part IX | Transport Canada | RPAS operations |
| SFOC | Transport Canada | Required for explosive delivery |
| Explosives Act | Natural Resources Canada | Explosives authorization |
| Explosives Regulations, 2013 | NRCan | Handling, storage, transport |
| TDG Regulations | Transport Canada | Explosives transport |
| WorkSafeBC Part 21 | WorkSafeBC | Blasting operations |
| CAA Standards | Canadian Avalanche Association | Industry standards |

---

## 5. Authorization Requirements

### 5.1 Company Authorizations

| Authorization | Issuing Authority | Status |
|:--------------|:------------------|:-------|
| SFOC - Avalanche Control | Transport Canada | Required |
| Explosives licence/permit | Natural Resources Canada | Required |
| TDG authorization | Transport Canada | Required |
| Insurance (explosives) | Insurance provider | Required |

### 5.2 Personnel Requirements

| Role | Requirements |
|:-----|:-------------|
| **PIC** | Advanced certificate; SFOC authorization; avalanche control training |
| **Blaster** | WorkSafeBC Blaster Certificate (avalanche endorsement) |
| **Explosives Handler** | Explosives training; TDG training |
| **Avalanche Technician** | CAA certification; client authorization |

---

## 6. Explosives Requirements

### 6.1 Authorized Explosives

Only explosives approved for avalanche control:
- Must be authorized under Explosives Regulations
- Must be compatible with delivery system
- Must be approved by Natural Resources Canada

### 6.2 Storage Requirements

| Requirement | Standard |
|:------------|:---------|
| Licensed magazine | Per Explosives Regulations |
| Distance requirements | Per quantity table |
| Security | Controlled access |
| Inventory | Strict accountability |
| Inspection | Per regulations |

### 6.3 Transport Requirements

| Requirement | Standard |
|:------------|:---------|
| TDG compliance | Full compliance required |
| Vehicle requirements | Per TDG regulations |
| Documentation | Shipping documents required |
| Security | Chain of custody |
| Quantity limits | Per authorization |

### 6.4 Handling Requirements

| Requirement | Standard |
|:------------|:---------|
| Qualified personnel | Blaster or trained handler |
| No smoking/ignition sources | Within safe distance |
| Ground to aircraft | Documented transfer |
| Arming | Per approved procedure only |
| Accountability | Every unit tracked |

---

## 7. Operational Requirements

### 7.1 Mission Authorization

Each mission requires:
1. Valid SFOC coverage
2. Client authorization
3. Avalanche forecast review
4. Weather assessment
5. Operational briefing
6. Safety plan in place

### 7.2 Coordination

| Stakeholder | Coordination |
|:------------|:-------------|
| Transportation Ministry | Highway closure; timing |
| Ski resort | Area closure; timing |
| Parks Canada | Park authorization; coordination |
| NAV CANADA | Airspace coordination |
| Emergency services | Notification |

### 7.3 Exclusion Zones

| Zone | Requirement |
|:-----|:------------|
| Blast zone | No personnel; calculated safe distance |
| Highway | Closure confirmed |
| Ski area | Closure confirmed |
| Airspace | Cleared of other aircraft |

---

## 8. Delivery Methods

### 8.1 Drop Delivery

Explosive device released from aircraft:
- Precision targeting required
- GPS guidance recommended
- Drop confirmation required
- Detonation verification

### 8.2 Winch Delivery

Explosive lowered to target:
- Precision placement
- Controlled release
- Aircraft clear before detonation

---

## 9. Weather Limitations

| Condition | Limit |
|:----------|:------|
| Visibility | Minimum 3 km; visual on target |
| Wind | Per aircraft limits; consider trajectory |
| Precipitation | Per operational requirements |
| Cloud ceiling | Clear of blast area |
| Avalanche conditions | Per avalanche technician assessment |

---

## 10. Safety Requirements

### 10.1 Pre-Mission

- [ ] All authorizations verified
- [ ] Personnel qualifications verified
- [ ] Explosives inventory confirmed
- [ ] Weather assessed
- [ ] Avalanche conditions assessed
- [ ] Exclusion zones established
- [ ] Communications confirmed
- [ ] Emergency plan in place

### 10.2 During Operations

- Maintain communication with all parties
- Confirm zone clearance before each drop
- Track all explosives deployed
- Monitor for misfires
- Maintain safe distances

### 10.3 Post-Mission

- Account for all explosives (deployed + returned)
- Investigate any misfires
- Document all drops and results
- Return unused explosives to storage
- Debrief all personnel

---

## 11. Misfire Procedures

### 11.1 Misfire Response

If explosive fails to detonate:
1. **Mark location** - GPS coordinates
2. **Do not approach** - Minimum wait time
3. **Notify** - Blaster in charge
4. **Assess** - Safe approach options
5. **Follow** - Approved misfire procedures
6. **Document** - Full incident documentation

### 11.2 Misfire Search

If device lost/undetonated:
- Restrict area access
- Systematic search when safe
- Recovery by qualified personnel only
- If unrecovered - mark and report

---

## 12. Emergency Procedures

### 12.1 RPAS Emergency with Explosives

| Scenario | Procedure |
|:---------|:----------|
| Lost link | Failsafe to safe area; recover device safely |
| Flyaway | Track; warn of location; notify authorities |
| Crash with device | Evacuate area; assess from safe distance |
| Accidental release | Mark location; clear area; assess |

### 12.2 Explosives Emergency

| Scenario | Procedure |
|:---------|:----------|
| Premature detonation | Account for personnel; emergency response |
| Fire near explosives | Evacuate; do not fight fire near explosives |
| Damage to explosives | Do not handle; qualified assessment |

---

## 13. Documentation

### 13.1 Required Records

| Record | Retention |
|:-------|:----------|
| SFOC | Valid period + 10 years |
| Mission logs | 10 years |
| Explosives inventory | Per Explosives Regulations |
| Blasting logs | 10 years |
| Incident reports | 10 years |
| Training records | Employment + 3 years |

---

## 14. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Avalanche control RPAS | Before operations |
| Explosives handling | Before handling |
| TDG - Class 1 | Before transport |
| Misfire procedures | Before operations |
| Emergency response | Before operations |
| Annual refresher | All personnel |

---

## 15. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Accountable Executive** | Overall authorization; compliance |
| **Operations Manager** | Program management; coordination |
| **PIC** | Safe aircraft operation |
| **Blaster** | Explosives management; detonation |
| **Avalanche Technician** | Avalanche assessment; targeting |

---

## 16. Client Requirements

Typical client requirements include:
- Proof of insurance (explosives coverage)
- Valid SFOC
- Personnel certifications
- Safety plan
- Emergency response plan
- Coordination procedures

---

## 17. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-015-PR | Avalanche Control Procedure |
| OPS-014 | Dangerous Goods Transport Policy |
| OPS-014-PR | Dangerous Goods Transport Procedure |
| FHA-020 | Avalanche Control Operations |
| QRC-AVALANCHE | Avalanche Control Quick Reference |

---

## 18. External References

| Reference | Description |
|:----------|:------------|
| Canadian Avalanche Association | www.avalancheassociation.ca |
| Natural Resources Canada - Explosives | natural-resources.canada.ca |
| WorkSafeBC - Blasting | worksafebc.com |
| Transport Canada - TDG | tc.canada.ca |
| CANUTEC Emergency | 1-888-226-8832 |

---

**Document Control:** OPS-015 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Policies']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Flight Planning Procedure',
  'procedure',
  'OPS-001-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# FLIGHT PLANNING PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-001-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes the flight planning process for RPAS operations to ensure safe, legal, and efficient missions.

---

## 2. Scope

This procedure applies to:
- All RPAS flight operations
- PICs and flight planners
- All operation categories

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-001 | RPAS Flight Operations Policy |
| OPS-002 | Airspace Authorization Policy |
| OPS-003 | Weather Limitations Policy |

---

## 4. Procedure

### 4.1 Flight Planning Overview

Flight planning consists of:
1. Mission requirements review
2. Airspace assessment
3. Site assessment
4. Weather assessment
5. Aircraft selection and preparation
6. Crew assignment
7. Documentation

### 4.2 Mission Requirements

**Determine:**
- Client/project requirements
- Type of data collection needed
- Deliverables expected
- Timeline and constraints
- Special requirements (night, BVLOS, etc.)

**Document on mission brief or work order.**

### 4.3 Airspace Assessment

#### Step 1: Identify Airspace
Using charts, apps, or NAV CANADA resources:
- Determine airspace class at site
- Identify nearby aerodromes
- Note restricted/prohibited areas
- Check for temporary restrictions

#### Step 2: Authorization Required?
| Airspace | Authorization |
|:---------|:--------------|
| Class G (uncontrolled) | No authorization needed (standard rules apply) |
| Class B, C, D (controlled) | NAV CANADA authorization required |
| Near aerodromes | Check distance requirements |
| Restricted areas | Authority permission required |

#### Step 3: Obtain Authorization
If required:
- Submit request via NAV CANADA system
- Allow minimum 24-48 hours
- Do not proceed without confirmation

### 4.4 Site Assessment

#### New Sites
Complete site survey (FRM-SITESURVEY):
- Visit site in advance if possible
- Identify obstacles and hazards
- Determine launch/landing zones
- Identify emergency landing areas
- Note access and staging areas
- Check for RF interference sources
- Verify landowner permission

#### Familiar Sites
- Review previous site surveys
- Check for changes since last visit
- Update as needed

### 4.5 Weather Assessment

#### Day Before
- Check forecast for operation day
- Look for weather-related NOTAMs
- Initial go/no-go assessment

#### Day Of (Before Travel)
- Check current conditions
- Review updated forecast
- Confirm go/no-go
- Identify weather windows

#### On Site
- Verify conditions match forecast
- Use anemometer if available
- Assess visibility, cloud, wind
- Final go/no-go decision

**See OPS-006-PR Weather Assessment Procedure**

### 4.6 Aircraft Selection

Select aircraft based on:
- Payload requirements
- Flight time requirements
- Range requirements
- Weather conditions expected
- Site constraints
- Aircraft availability

Verify aircraft:
- Is airworthy
- Has adequate batteries
- Has required payload
- Is maintained per MCM

### 4.7 Crew Assignment

**Determine crew requirements:**
- PIC (required for all operations)
- Visual Observer(s) (as needed)
- Ground crew (as needed)
- Payload operator (if applicable)

**Verify qualifications:**
- PIC certificate and authorizations
- Currency on aircraft type
- BVLOS authorization (if applicable)
- VO training current

### 4.8 NOTAM Check

Check NOTAMs for:
- Operation area
- Route of travel (if applicable)
- Nearby aerodromes

**Resources:**
- NAV CANADA briefing
- Aviation apps
- CFPS

Check again before departure.

### 4.9 FHA Selection

Identify applicable FHAs:
- Standard operation FHAs (FHA-2.x)
- Site-specific FHAs (if any)
- Specialized operation FHAs

Review and incorporate into planning.

### 4.10 Documentation

Complete before departure:
- Mission brief/work order
- Site survey (or reference existing)
- Weather assessment
- NOTAM check documented
- Airspace authorization (if required)
- Equipment checklist

### 4.11 Go/No-Go Decision

Before departing, confirm:
- [ ] Airspace clear/authorized
- [ ] Weather acceptable
- [ ] Aircraft ready
- [ ] Crew qualified and fit
- [ ] Documentation complete
- [ ] Equipment packed
- [ ] Communications confirmed

**If any item is not confirmed, resolve before proceeding.**

---

## 5. Planning Checklist Summary

| Phase | Items |
|:------|:------|
| **Mission** | Requirements, deliverables, timeline |
| **Airspace** | Class, authorization, NOTAMs |
| **Site** | Survey, hazards, access |
| **Weather** | Forecast, conditions, limits |
| **Aircraft** | Selection, preparation, payload |
| **Crew** | Assignment, qualifications, fitness |
| **Docs** | Permits, forms, contacts |
| **Go/No-Go** | Final decision |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Complete flight planning; verify all elements; make go/no-go decision |
| **Operations Manager** | Support planning; provide resources; resolve issues |
| **Crew** | Support planning; prepare personal equipment |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-002-PR | Pre-Flight Procedure |
| OPS-005-PR | Airspace Authorization Procedure |
| OPS-006-PR | Weather Assessment Procedure |
| OPS-012-PR | Site Survey Procedure |
| FRM-FLTPLAN | Flight Planning Form |

---

**Document Control:** OPS-001-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Pre Flight Procedure',
  'procedure',
  'OPS-002-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# PRE-FLIGHT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-002-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes the pre-flight activities to be completed before each RPAS flight to ensure safety and readiness.

---

## 2. Scope

This procedure applies to:
- All RPAS flight operations
- PICs and crew
- All aircraft types

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-001 | RPAS Flight Operations Policy |
| MCM-003-PR | Pre-Flight Inspection Procedure |
| Aircraft Flight Manuals | Specific procedures |

---

## 4. Procedure

### 4.1 Pre-Flight Overview

Pre-flight activities:
1. Site arrival and assessment
2. FLHA completion
3. Equipment setup
4. Aircraft inspection
5. System checks
6. Crew briefing
7. Final go/no-go

### 4.2 Site Arrival and Assessment

Upon arriving at site:
1. Confirm correct location
2. Visually assess conditions
3. Verify conditions match expectations
4. Check for changes from site survey
5. Identify any new hazards
6. Confirm launch/landing area suitable

### 4.3 FLHA Completion

Complete FLHA (FRM-FLHA) including:
- All crew participation
- Current weather conditions
- Site-specific hazards
- Emergency contacts and hospital
- Muster point
- All signatures

**See HSE-002-PR FLHA Procedure**

### 4.4 Equipment Setup

#### Ground Control Station
1. Position for good visibility and shade if needed
2. Set up table/stand if used
3. Power up controller
4. Verify controller battery level
5. Check tablet/display functionality
6. Verify telemetry connection

#### Support Equipment
- Deploy spotter equipment
- Set up safety perimeter if needed
- Position landing pad
- Prepare backup equipment

### 4.5 Aircraft Inspection

Complete aircraft-specific inspection per checklist:

#### Visual Inspection
| Component | Check For |
|:----------|:----------|
| Airframe | Cracks, damage, debris |
| Props | Damage, security, correct type |
| Motors | Secure, free rotation, debris |
| Landing gear | Damage, security |
| Payload mount | Security, alignment |
| Antennas | Damage, orientation |
| Vents | Clear of obstruction |

#### Battery Inspection
- Physical damage or swelling
- Connector condition
- Charge level per requirements
- Temperature (not cold/hot extreme)
- Correctly installed and locked

#### Payload Inspection
- Securely mounted
- Lens/sensor clean
- Gimbal moves freely
- Storage media installed
- Power connected

**Document inspection on pre-flight checklist.**

### 4.6 System Checks

After powering aircraft:

| System | Verification |
|:-------|:-------------|
| **Telemetry** | Link established; data displaying |
| **GPS** | Fix acquired; adequate satellites |
| **Compass** | Calibrated if required; no errors |
| **Battery** | Level correct; voltage normal |
| **Control Link** | RC bound; controls responsive |
| **RTH** | Home point set; RTH altitude set |
| **Failsafes** | Configured correctly |
| **Geofencing** | Set appropriately for mission |
| **Payload** | Responding; recording ready |

Address any anomalies before proceeding.

### 4.7 Control Check

With aircraft in safe position:
1. Arm aircraft (if required for check)
2. Check each control axis responds correctly
3. Throttle response
4. Gimbal controls (if applicable)
5. Mode switches
6. Disarm

### 4.8 Crew Briefing

PIC shall brief crew on:

| Topic | Content |
|:------|:--------|
| **Mission** | Objective, flight plan, duration |
| **Roles** | Each person''s responsibilities |
| **Communications** | Signals, radio channels |
| **Hazards** | Key hazards from FLHA |
| **Airspace** | Boundaries, restrictions |
| **Emergency** | Procedures, rally point |
| **Weather** | Current and expected conditions |
| **Questions** | Confirm understanding |

All crew acknowledge briefing before proceeding.

### 4.9 Final Go/No-Go

Before takeoff, verify:
- [ ] Site conditions acceptable
- [ ] FLHA complete
- [ ] Aircraft inspected and ready
- [ ] All system checks passed
- [ ] Crew briefed
- [ ] Airspace clear/authorized
- [ ] Weather within limits
- [ ] Communications verified
- [ ] Emergency procedures reviewed

**If any item fails, resolve before flight or abort.**

---

## 5. Pre-Flight Checklist Summary

| Phase | Items |
|:------|:------|
| **Site** | Location confirmed, assessment done |
| **FLHA** | Completed, signed by all crew |
| **Equipment** | GCS ready, support equipment deployed |
| **Aircraft** | Visual inspection, battery installed |
| **Systems** | Powered on, all checks passed |
| **Controls** | Verified responsive |
| **Briefing** | Crew briefed and confirmed |
| **Go/No-Go** | Final decision made |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Lead pre-flight; conduct inspection; brief crew; make go/no-go |
| **Visual Observer** | Participate in FLHA; assist setup; confirm briefing |
| **Payload Operator** | Prepare payload; verify function |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-003-PR | Flight Conduct Procedure |
| HSE-002-PR | FLHA Procedure |
| MCM-003-PR | Pre-Flight Inspection Procedure |
| FRM-PREFL | Pre-Flight Checklist |
| FRM-FLHA | Field Level Hazard Assessment |

---

**Document Control:** OPS-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Flight Conduct Procedure',
  'procedure',
  'OPS-003-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# FLIGHT CONDUCT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-003-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes how to conduct RPAS flights safely and in compliance with regulatory requirements.

---

## 2. Scope

This procedure applies to:
- All RPAS flight operations
- PICs and crew
- VLOS operations (BVLOS see OPS-009-PR)

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-001 | RPAS Flight Operations Policy |
| CARs Part IX | RPAS regulations |

---

## 4. Procedure

### 4.1 Final Pre-Takeoff

Immediately before takeoff:
1. Final scan of airspace (look and listen)
2. Crew confirm ready
3. Announce "Taking off" or equivalent
4. Clear prop area

### 4.2 Takeoff

| Step | Action |
|:-----|:-------|
| 1 | Arm aircraft |
| 2 | Apply gentle throttle to lift off |
| 3 | Ascend to 3-5 meters and hold |
| 4 | Verify stable hover |
| 5 | Check all controls respond correctly |
| 6 | Check telemetry readings normal |
| 7 | If anomaly, land immediately |
| 8 | If all normal, proceed with mission |

### 4.3 Climb and Transit

- Maintain visual contact at all times (VLOS)
- Respect altitude limits (400 ft AGL max unless authorized)
- Monitor battery level continuously
- Scan for other aircraft
- Stay within approved operating area

### 4.4 Mission Execution

**During mission:**
- Focus on safe aircraft operation (primary)
- Execute mission profile (secondary)
- Monitor telemetry continuously
- Monitor weather conditions
- Maintain crew communication
- Respond to visual observer alerts

**PIC Focus:**
The PIC''s primary duty is safe operation of the aircraft. Payload operation should be secondary or delegated to payload operator.

### 4.5 Visual Observer Duties

VOs shall:
- Maintain visual contact with aircraft
- Scan for conflicting traffic
- Alert PIC to hazards
- Communicate clearly
- Not be distracted by other tasks

**Communication protocol:**
- "Traffic!" — Other aircraft detected
- "Altitude!" — Aircraft approaching limits
- "Boundary!" — Approaching edge of area
- "Weather!" — Conditions changing
- "Land now!" — Emergency requiring immediate landing

### 4.6 Communication Protocol

| Call | Meaning |
|:-----|:--------|
| "Clear" | Area is clear to proceed |
| "Hold" | Maintain current position |
| "Return" | Return to launch point |
| "Land" | Begin normal landing |
| "Land now" | Immediate landing required |
| "Taking off" | Aircraft lifting off |
| "On site" | Arriving at mission area |
| "RTH" | Initiating return to home |

Use clear, concise communication. Confirm critical calls.

### 4.7 Altitude and Distance

**Maintain:**
- Below 400 ft AGL (unless authorized)
- Within authorized airspace
- Within visual range
- Outside restricted areas

**Know your boundaries** before flight begins.

### 4.8 Battery Management

| Battery Level | Action |
|:--------------|:-------|
| 100-50% | Normal operations |
| 50-30% | Begin returning |
| 30-20% | RTH initiated if not already |
| Below 20% | Emergency priority; land at nearest safe location |

Account for distance from home when planning return.

### 4.9 Responding to Traffic

If other aircraft detected:
1. VO alerts: "Traffic, [direction], [distance/description]"
2. PIC acknowledges
3. PIC takes evasive action:
   - Descend immediately
   - Move away from traffic path
   - Land if necessary
4. Give way to all manned aircraft

### 4.10 Responding to Changing Conditions

**Weather deteriorating:**
- Begin return before limits exceeded
- Land if conditions approach limits
- Do not continue mission in marginal conditions

**Equipment anomalies:**
- Land immediately for any control issue
- Investigate before resuming
- Do not continue with known problems

### 4.11 Return and Approach

Before landing:
1. Clear landing area
2. Announce "Returning" or "Landing"
3. Approach at controlled rate
4. Monitor wind effect on approach
5. Verify landing area still clear

### 4.12 Landing

| Step | Action |
|:-----|:-------|
| 1 | Position over landing area |
| 2 | Descend at controlled rate |
| 3 | Slow descent as approaching ground |
| 4 | Touch down gently |
| 5 | Reduce throttle to zero |
| 6 | Disarm aircraft |
| 7 | Announce "Aircraft secure" |

### 4.13 Between Flights

If conducting multiple flights:
- Complete post-flight check
- Replace battery
- Review any issues from previous flight
- Reassess conditions
- Brief any changes
- Complete pre-flight for next flight

---

## 5. Prohibited Actions

**Do not:**
- Fly beyond visual range (VLOS operations)
- Exceed altitude limits
- Enter unauthorized airspace
- Continue with known defects
- Fly while impaired
- Engage in reckless operation
- Fly over people (unless specifically authorized)

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Command authority; safe operation; compliance |
| **Visual Observer** | Maintain visual; alert to hazards; communicate |
| **Payload Operator** | Operate payload; support PIC |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-002-PR | Pre-Flight Procedure |
| OPS-004-PR | Post-Flight Procedure |
| OPS-011-PR | Emergency Procedures (RPAS) |
| QRC-FLIGHT | Flight Operations Quick Reference |

---

**Document Control:** OPS-003-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Post Flight Procedure',
  'procedure',
  'OPS-004-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# POST-FLIGHT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-004-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes post-flight activities to ensure aircraft safety, proper documentation, and data management.

---

## 2. Scope

This procedure applies to:
- All RPAS flight operations
- After each flight
- All personnel involved

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-007 | Flight Data Recording Policy |
| MCM-004-PR | Post-Flight Inspection Procedure |

---

## 4. Procedure

### 4.1 Immediate Post-Flight

After aircraft lands and is disarmed:

| Step | Action |
|:-----|:-------|
| 1 | Wait for props to stop completely |
| 2 | Visually verify aircraft is safe to approach |
| 3 | Power off aircraft systems |
| 4 | Remove battery (observe safety practices) |
| 5 | Place aircraft in safe position |

### 4.2 Aircraft Inspection

Inspect aircraft for:

| Component | Check |
|:----------|:------|
| **Airframe** | New damage, cracks, stress marks |
| **Props** | Damage, chips, cracks |
| **Motors** | Debris, heat damage, bearing play |
| **Landing gear** | Damage from landing |
| **Payload mount** | Loosening, damage |
| **Cables/Connectors** | Loose, damaged, chafed |

**If damage found:**
1. Document with photos
2. Note on flight log
3. Remove aircraft from service
4. Report to Operations Manager

### 4.3 Battery Management

| Step | Action |
|:-----|:-------|
| 1 | Check battery for swelling or damage |
| 2 | Note ending charge level |
| 3 | Allow battery to cool |
| 4 | Store per battery storage procedure |
| 5 | Charge per charging schedule |
| 6 | Update battery cycle log |

### 4.4 Data Download

**Payload Data:**
1. Remove SD card / connect to transfer
2. Download all images/data
3. Verify data transferred completely
4. Label with flight/project reference
5. Back up to secondary location

**Flight Data:**
1. Download flight logs (if available)
2. Save telemetry data
3. Label with date and flight reference
4. Back up as required

### 4.5 Flight Log Completion

Complete flight log (FRM-FLTLOG) including:

| Item | Entry |
|:-----|:------|
| Date | Operation date |
| Aircraft | Registration/identifier |
| PIC | Name |
| Location | Site name / coordinates |
| Takeoff time | HH:MM |
| Landing time | HH:MM |
| Flight time | Total minutes |
| Operation type | VLOS/BVLOS; Basic/Advanced |
| Purpose | Mission description |
| Crew | Names |
| Batteries used | IDs or quantities |
| Incidents | Any issues or occurrences |
| Weather | Conditions |
| Notes | Additional observations |

### 4.6 Equipment Pack-Up

- Clean aircraft if needed (dust, debris)
- Secure props (guards or removal per procedure)
- Pack aircraft in transport case
- Verify all accessories accounted for
- Pack GCS and accessories
- Account for all equipment

### 4.7 Site Cleanup

Before leaving site:
- Remove all equipment
- Remove any waste (pack out)
- Leave site as found
- No evidence of operations

### 4.8 Occurrence Reporting

If any occurrence during flight:
- Document on flight log
- Report to Operations Manager same day
- Complete incident report if required
- Preserve relevant data

**Occurrences include:**
- Near mid-air collision
- Flyaway
- Lost link beyond normal
- Control issues
- Unexpected landing
- Damage to aircraft or property
- Injury

### 4.9 End of Day

After final flight of the day:
- Complete all flight logs
- Ensure all data downloaded and backed up
- Update battery logs
- Address any maintenance needs
- Secure all equipment
- Submit FLHAs per procedure
- Report any issues to Operations Manager

---

## 5. Post-Flight Checklist Summary

| Phase | Items |
|:------|:------|
| **Immediate** | Aircraft secured, battery removed |
| **Inspection** | Aircraft checked, damage noted |
| **Battery** | Managed, logged |
| **Data** | Downloaded, backed up |
| **Log** | Flight log completed |
| **Equipment** | Packed, accounted |
| **Site** | Cleaned, clear |
| **Reporting** | Occurrences reported |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Lead post-flight; complete logs; report issues |
| **Crew** | Assist pack-up; assist data management |
| **Payload Operator** | Manage payload data |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-007 | Flight Data Recording Policy |
| MCM-004-PR | Post-Flight Inspection Procedure |
| SMS-005 | Occurrence Reporting Policy |
| FRM-FLTLOG | Flight Log Form |
| FRM-POSTFL | Post-Flight Checklist |

---

**Document Control:** OPS-004-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Airspace Authorization Procedure',
  'procedure',
  'OPS-005-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# AIRSPACE AUTHORIZATION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-005-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes how to determine airspace requirements and obtain necessary authorizations for RPAS operations.

---

## 2. Scope

This procedure applies to:
- All RPAS operations
- Operations in or near controlled airspace
- Personnel responsible for flight planning

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-002 | Airspace Authorization Policy |
| CAR 601 | Airspace classifications |
| NAV CANADA | RPAS authorization system |

---

## 4. Procedure

### 4.1 Airspace Identification

#### Step 1: Determine Operation Location
- Identify exact coordinates or area
- Determine radius of operation
- Identify maximum altitude needed

#### Step 2: Check Airspace Class
Using VFR Navigation Charts or approved apps:
- Identify airspace class at operation location
- Identify airspace at all altitudes up to planned max
- Note any overlapping airspace

| Class | Typical Location | Control |
|:------|:-----------------|:--------|
| B | Major airports | ATC controlled |
| C | Medium airports | ATC controlled |
| D | Smaller controlled airports | ATC controlled |
| E | Low-level controlled | Various |
| F | Special use | Restricted or advisory |
| G | Uncontrolled | Standard rules apply |

#### Step 3: Identify Proximity to Aerodromes
- Check distance to nearest aerodromes
- Registered and unregistered heliports
- Water aerodromes
- Maintain required distances unless authorized

### 4.2 Authorization Requirements

| Airspace/Location | Requirement |
|:------------------|:------------|
| Class G, >3NM from aerodrome | No authorization needed |
| Class G, within 3NM of aerodrome | Authorization or permission required |
| Class B, C, D | NAV CANADA authorization required |
| Class E (controlled) | Check specific requirements |
| Class F (restricted) | Authority permission required |
| Class F (advisory) | Awareness; procedures vary |

### 4.3 NAV CANADA Authorization Process

#### Step 1: Access System
- Log in to NAV CANADA RPAS portal
- Use registered company account
- Ensure RPOC information is current

#### Step 2: Submit Request
Provide:
- Operation location (coordinates, area polygon)
- Date(s) of operation
- Time window (start/end in local and UTC)
- Maximum altitude AGL
- RPOC number
- PIC name and contact
- Aircraft type
- Operation description
- Emergency contact

#### Step 3: Wait for Response
- Standard processing: 24-48 hours
- Complex requests: Allow more time
- Check system for authorization status
- Do not operate without confirmation

#### Step 4: Authorization Conditions
Review authorization for:
- Specific conditions
- Time restrictions
- Altitude restrictions
- Communication requirements
- Any limitations

Comply with all conditions.

### 4.4 Restricted Airspace (Class F Restricted)

#### Step 1: Identify Controlling Authority
- Check CFS or AIP for authority information
- Document contact details

#### Step 2: Request Permission
- Contact authority in writing
- Explain operation purpose
- Request specific dates/times
- Provide RPOC and operator info

#### Step 3: Obtain Written Permission
- Get written authorization
- Note any conditions
- Carry authorization during operation

### 4.5 Near Aerodromes

**Registered Aerodromes:**
- Within 3NM: Authorization required
- Check for approach/departure paths
- Consider traffic patterns

**Unregistered Aerodromes:**
- Still require safe distance
- Use judgment based on traffic
- Coordinate with operator if possible

### 4.6 NOTAM Check

Before each operation:
1. Check NOTAMs for operation area
2. Check NOTAMs along travel route
3. Look for:
   - Temporary flight restrictions
   - Special events
   - Military activity
   - Fire suppression areas
4. Document NOTAM check
5. Recheck before departure

### 4.7 Documentation

Retain:
- Authorization requests
- Authorizations received
- NOTAM check records
- Communications with authorities

### 4.8 Day of Operation

- Verify authorization is still valid
- Check for new NOTAMs
- Have authorization available on-site
- Be prepared to contact authorities if required

---

## 5. Quick Reference

| Need to fly in... | Action |
|:------------------|:-------|
| Uncontrolled Class G (away from aerodromes) | Standard operation |
| Near aerodrome (<3NM) | Get authorization first |
| Controlled airspace (B, C, D) | NAV CANADA authorization required |
| Restricted area (Class F) | Authority permission required |
| Above 400ft AGL | Additional authorization may be required |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Manage authorization system account; support complex requests |
| **PIC** | Identify airspace; request authorization; verify before flight |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-002 | Airspace Authorization Policy |
| OPS-001-PR | Flight Planning Procedure |
| QRC-AIRSPACE | Airspace Quick Reference Card |

---

**Document Control:** OPS-005-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Weather Assessment Procedure',
  'procedure',
  'OPS-006-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# WEATHER ASSESSMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-006-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes how to assess weather conditions for RPAS operations and make go/no-go decisions.

---

## 2. Scope

This procedure applies to:
- All RPAS operations
- PICs and flight planners
- All weather conditions

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-003 | Weather Limitations Policy |
| Environment Canada | Weather services |
| Aircraft Flight Manuals | Weather limitations |

---

## 4. Procedure

### 4.1 Weather Assessment Phases

| Phase | Timing | Purpose |
|:------|:-------|:--------|
| **Planning** | Day before | Initial go/no-go; logistics planning |
| **Pre-Departure** | Day of, before travel | Confirm conditions; adjust plans |
| **On-Site** | Before flight | Final verification; go/no-go |
| **In-Flight** | During operations | Monitor for changes |

### 4.2 Planning Phase (Day Before)

**Check:**
1. Forecast for operation location
2. Extended forecast if multi-day
3. General weather pattern
4. Potential for significant weather

**Sources:**
- Environment Canada forecast
- Weather apps (Windy, etc.)
- Aviation forecast (GFA if relevant)

**Assess:**
- Will conditions likely be acceptable?
- Any weather concerns?
- Do we need contingency plans?

### 4.3 Pre-Departure Assessment (Morning Of)

**Check:**
1. Updated forecast
2. Current conditions at or near site
3. Trend (improving or deteriorating)
4. Any weather warnings

**Go/No-Go:**
| Forecast | Decision |
|:---------|:---------|
| Well within limits | Go |
| Marginal | Go with caution; monitor closely |
| Near limits | Consider delay; prepare for abort |
| Exceeds limits | Delay or postpone |

### 4.4 On-Site Assessment

**Observe:**
- Actual wind speed (use anemometer)
- Wind direction and gusts
- Visibility
- Cloud cover and ceiling
- Precipitation
- Temperature

**Compare to:**
- Company limits (OPS-003)
- Aircraft limits
- Forecast (is it accurate?)

**Document** on FLHA.

### 4.5 Weather Parameters

#### Wind Assessment
| Measurement | Method |
|:------------|:-------|
| Sustained wind | Anemometer average over 1 minute |
| Gusts | Maximum reading |
| Direction | Observe indicators; anemometer |

**Company limits:**
- Sustained: ≤25 km/h (standard)
- Gusts: ≤35 km/h (standard)
- Reduce for small/light aircraft

#### Visibility Assessment
- Can you see clearly to planned operating distance?
- Are there areas of reduced visibility?
- Minimum: Sufficient to maintain VLOS at all times

#### Precipitation
- Any precipitation = increased risk
- Light rain: Only if aircraft rated; proceed with caution
- Moderate/heavy: Do not fly (most aircraft)
- Snow: Generally do not fly

#### Temperature
- Check against aircraft limits
- Cold: Battery performance reduced
- Hot: Battery performance reduced; heat stress for crew

### 4.6 Weather Monitoring During Flight

**Continuously monitor:**
- Wind changes (observe aircraft behavior, flags, vegetation)
- Visibility changes
- Approaching clouds or precipitation
- Darkening sky (convection)

**Action triggers:**
| Condition | Action |
|:----------|:-------|
| Wind increasing | Consider landing early |
| Visibility dropping | Land before limits reached |
| Precipitation starting | Land immediately (most cases) |
| Convection building | Land; move to shelter |

### 4.7 Thunderstorm Awareness

**Before flight:**
- Check for convective potential
- Monitor radar if available
- Know signs of building storms

**Signs of approaching thunderstorm:**
- Towering cumulus clouds
- Darkening sky
- Distant thunder (cease ops when heard)
- Sudden wind shift or calm

**Action:**
- Cease operations
- Land aircraft
- Seek shelter
- Wait 30 minutes after last thunder before resuming

### 4.8 Decision Making

#### Go/No-Go Matrix

| Condition | Green (Go) | Yellow (Caution) | Red (No-Go) |
|:----------|:-----------|:-----------------|:------------|
| Wind sustained | <20 km/h | 20-25 km/h | >25 km/h |
| Gusts | <30 km/h | 30-35 km/h | >35 km/h |
| Visibility | >5 km | 3-5 km | <3 km |
| Precipitation | None | Light drizzle (rated aircraft) | Rain/snow |
| Thunderstorm | >30 km | 20-30 km | <20 km |

**If ANY parameter is Red: Do not fly**
**If Yellow: Proceed with enhanced caution; be prepared to abort**

### 4.9 Documentation

Record on FLHA:
- Temperature
- Wind speed and direction
- Visibility estimate
- Cloud conditions
- Precipitation
- Any weather concerns

---

## 5. Weather Sources

| Source | Use For |
|:-------|:--------|
| Environment Canada | Forecasts, warnings |
| Windy app | Wind forecasts, visualization |
| Aviation weather (NAV CANADA) | GFA, METAR, TAF |
| On-site observation | Current conditions |
| Anemometer | Precise wind measurement |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Assess weather; make go/no-go decision; monitor during flight |
| **Crew** | Assist with observations; monitor during flight |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-003 | Weather Limitations Policy |
| FRM-FLHA | Field Level Hazard Assessment |
| QRC-WEATHER | Weather Quick Reference Card |

---

**Document Control:** OPS-006-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Pilot Training Procedure',
  'procedure',
  'OPS-007-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# PILOT TRAINING PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-007-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes the training process for pilots joining Aeria Solutions and for ongoing qualification maintenance.

---

## 2. Scope

This procedure applies to:
- New pilots joining Aeria
- Existing pilots adding aircraft types
- Pilots maintaining qualifications
- BVLOS authorization training

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-004 | Crew Qualifications Policy |
| TCP-001 | Training & Competency Program Manual |
| OPS-010 | Flight School Policy |

---

## 4. Procedure

### 4.1 New Pilot Onboarding

#### Step 1: Verify Qualifications
- Collect copy of pilot certificate
- Verify certificate validity
- Confirm certificate level (Basic or Advanced)
- Check for any restrictions

#### Step 2: Company Orientation
Complete company orientation covering:
- Company policies and procedures
- Safety Management System
- Reporting requirements
- Document management
- Communication protocols

#### Step 3: Operations Training
Training on company operations:
- RPAS flight operations policy
- Pre-flight and post-flight procedures
- Flight conduct procedures
- Emergency procedures
- FLHA and documentation
- Airspace and weather procedures

#### Step 4: Aircraft Type Training
For each aircraft type:
- Ground school (aircraft systems, limitations)
- Practical flight training
- Competency demonstration

#### Step 5: Authorization
- Operations Manager reviews training records
- Issues pilot authorization letter
- Adds to pilot roster
- Enters in training records system

### 4.2 Aircraft Type Training

#### Ground Training
| Topic | Content |
|:------|:--------|
| Aircraft systems | Flight controller, motors, batteries, sensors |
| Limitations | Weight, altitude, speed, temperature |
| Normal procedures | Pre-flight, startup, flight, shutdown |
| Emergency procedures | Lost link, flyaway, battery failure |
| Payload | Mounting, operation, limitations |
| Maintenance | Daily checks, user maintenance |

#### Practical Training
| Exercise | Standard |
|:---------|:---------|
| Pre-flight inspection | Complete per checklist |
| System checks | All systems verified |
| Takeoff | Smooth, controlled |
| Hover | Stable, controlled |
| Basic maneuvers | Climb, descend, turns |
| Navigation | Point-to-point, orbits |
| Emergency procedures | Execute correctly |
| Landing | Safe, controlled |
| Post-flight | Complete per procedure |

#### Competency Check
- Completed with Operations Manager or designated examiner
- Covers all elements above
- Must demonstrate proficiency
- Documented on FRM-COMPCHECK

### 4.3 BVLOS Authorization Training

**Prerequisites:**
- Pilot Certificate - Advanced Operations
- Company authorization on at least one aircraft type
- Minimum 10 hours company flight time (recommended)

#### Ground Training
| Topic | Content |
|:------|:--------|
| Regulations | BVLOS requirements, L1C conditions |
| Risk assessment | SORA methodology, ground/air risk |
| Site assessment | BVLOS site requirements |
| Lost link procedures | Programming, execution |
| Emergency procedures | BVLOS-specific emergencies |
| Telemetry monitoring | Interpretation, action items |
| Flight planning | BVLOS flight planning |

#### Practical Training
- Minimum 3 supervised BVLOS flights
- Demonstrate proficiency in:
  - BVLOS pre-flight
  - Transition to BVLOS
  - BVLOS operations
  - Lost link simulation
  - Emergency response
  - Return and landing

#### Assessment
- Operations Manager assessment
- Written test (minimum 80%)
- Practical evaluation

#### Authorization
- Operations Manager issues BVLOS authorization letter
- Specifies authorized aircraft
- Specifies any conditions

### 4.4 Recurrent Training

#### Annual Requirements
All pilots shall complete annually:
- SMS refresher
- Emergency procedures review
- Regulatory update briefing
- Operations procedures review

#### Currency Flights
If pilot has not flown aircraft type in 90 days:
- Complete checkout flight before resuming
- Demonstrate basic competency
- Document on training record

### 4.5 Flight Review

Per CAR requirements, flight review includes:
- Knowledge assessment (regulations, procedures)
- Flight assessment (maneuvers, emergency procedures)
- Completed with approved reviewer
- Documented on flight review form

### 4.6 Remedial Training

If deficiencies identified:
- Document specific areas
- Develop training plan
- Complete additional training
- Reassess competency
- Document completion

---

## 5. Training Records

Maintain for each pilot:
- Certificate copies
- Company orientation record
- Aircraft type training records
- Competency check records
- BVLOS authorization (if applicable)
- Recurrent training completion
- Flight reviews
- Currency tracking

**Retention:** Duration of employment + 3 years

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Oversee training; conduct assessments; issue authorizations |
| **Trainer/Instructor** | Deliver training; assess competency; document |
| **Pilot** | Complete training; maintain qualifications; track currency |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-004 | Crew Qualifications Policy |
| TCP-001 | Training & Competency Program Manual |
| FRM-PILOTAUTH | Pilot Authorization Form |
| FRM-COMPCHECK | Competency Check Form |
| FRM-TREC | Training Record Form |

---

**Document Control:** OPS-007-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Visual Observer Training Procedure',
  'procedure',
  'OPS-008-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# VISUAL OBSERVER TRAINING PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-008-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes training requirements for Visual Observers (VOs) supporting RPAS operations.

---

## 2. Scope

This procedure applies to:
- All personnel acting as Visual Observers
- Initial training and refresher training

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-004 | Crew Qualifications Policy |
| CAR 901.08 | Visual observer requirements |
| TCP-001 | Training & Competency Program Manual |

---

## 4. Procedure

### 4.1 VO Requirements

Visual Observers:
- Do not require a pilot certificate
- Must complete VO training before acting as VO
- Must be briefed before each operation
- Must maintain visual contact with aircraft

### 4.2 Initial VO Training

#### Training Content

| Topic | Content | Duration |
|:------|:--------|:---------|
| **RPAS Overview** | Aircraft types, how they work, limitations | 15 min |
| **VO Role** | Purpose, responsibilities, authority | 15 min |
| **Visual Contact** | Maintaining VLOS, range, orientation | 15 min |
| **Hazard Identification** | What to look for, how to prioritize | 15 min |
| **Communication** | Protocol, calls, hand signals | 15 min |
| **Emergency Response** | VO role in emergencies | 15 min |
| **Practical Exercise** | Practice with actual operations | 30 min |

**Total:** Approximately 2 hours

#### Training Delivery
- Delivered by Operations Manager or qualified PIC
- Includes classroom/discussion component
- Includes practical exercise
- Documented on training record

### 4.3 Training Topics Detail

#### RPAS Overview
- Types of aircraft (multirotor, fixed-wing)
- How RPAS are controlled
- Range and limitations
- What can go wrong

#### Visual Observer Role
- Primary duty: Maintain visual contact
- Secondary duty: Scan for hazards
- Authority to call for immediate action
- Not responsible for aircraft control
- Support PIC situational awareness

#### Maintaining Visual Contact
- Keep aircraft in sight at all times
- Track aircraft orientation (which way is front)
- Understand distance and altitude estimates
- Know when visibility is degraded
- Communicate immediately if sight lost

#### Hazard Identification
Priority order for hazard scanning:
1. **Other aircraft** — Immediate conflict
2. **People** — Entering operation area
3. **Obstacles** — In flight path
4. **Weather** — Deteriorating conditions
5. **Wildlife** — Birds, wildlife

#### Communication Protocol
| Call | Meaning | Response |
|:-----|:--------|:---------|
| "Traffic, [direction]" | Other aircraft seen | PIC takes action |
| "People, [direction]" | Person entering area | PIC assesses |
| "Bird, [direction]" | Bird near aircraft | PIC avoids |
| "Altitude" | Approaching limit | PIC descends |
| "Boundary" | Approaching edge | PIC corrects |
| "Land now" | Emergency | PIC lands immediately |
| "Lost visual" | Can''t see aircraft | PIC initiates recovery |

Practice calls before operations.

#### Emergency Response
- Do not interfere with PIC control
- Provide information clearly
- Assist with securing area
- Help with emergency response
- Follow PIC direction

### 4.4 Practical Exercise

During practical training:
- Observe actual RPAS operations
- Practice tracking aircraft visually
- Practice communication calls
- Experience different flight profiles
- Debrief on observations

### 4.5 Documentation

Complete for each VO:
- Training record form (FRM-TREC)
- Date and content
- Trainer name
- VO acknowledgment signature

### 4.6 Pre-Operation Briefing

Before each operation, VOs receive briefing on:
- Specific aircraft being used
- Mission profile and boundaries
- Their position(s) during flight
- Communication plan
- Emergency procedures
- Site-specific hazards

VOs sign FLHA acknowledging briefing.

### 4.7 Refresher Training

**Annual refresher includes:**
- Review of VO duties
- Communication practice
- Emergency procedures review
- Any updates to procedures

**If VO has not acted as VO in 6 months:**
- Brief review before resuming
- Practice communication calls
- Observe flight before acting as primary VO

### 4.8 Client/Temporary VOs

Personnel from client sites may act as supplementary VOs if:
- They receive briefing on VO duties
- They understand communication protocol
- They are positioned and supervised by Aeria crew
- PIC retains overall responsibility

---

## 5. Training Record

| Item | Requirement |
|:-----|:------------|
| Initial training | Complete before acting as VO |
| Refresher | Annual |
| Pre-operation briefing | Each operation |
| Records retention | 3 years |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Ensure VO training conducted; maintain records |
| **PIC** | Brief VOs; supervise during operations |
| **Visual Observer** | Complete training; perform duties; communicate clearly |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-004 | Crew Qualifications Policy |
| OPS-003-PR | Flight Conduct Procedure |
| FRM-TREC | Training Record Form |
| QRC-VO | Visual Observer Quick Reference Card |

---

**Document Control:** OPS-008-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'BVLOS Operations Procedure',
  'procedure',
  'OPS-009-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# BVLOS OPERATIONS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-009-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes how to conduct Beyond Visual Line-of-Sight (BVLOS) operations under Aeria Solutions'' L1C Declaration.

---

## 2. Scope

This procedure applies to:
- All BVLOS flight operations
- PICs authorized for BVLOS
- Aircraft approved for BVLOS

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-005 | BVLOS Operations Policy |
| L1C Declaration | Authorized conditions |
| GUIDE-BVLOS | BVLOS Operations Guide |

---

## 4. Procedure

### 4.1 BVLOS Pre-Planning

#### Verify Authorization
- [ ] Valid L1C Declaration
- [ ] PIC authorized for BVLOS
- [ ] Aircraft listed on declaration
- [ ] Operation within declaration parameters

#### Site Requirements
Site must be:
- Unpopulated (no people in flight area)
- Class G uncontrolled airspace
- Surveyed and assessed
- Within communication range
- Have identified emergency landing zones

If any requirement not met, operation requires SFOC or is not permitted.

### 4.2 Site Survey (BVLOS)

For BVLOS sites, survey must include:

| Element | Assessment |
|:--------|:-----------|
| **Populated areas** | None in flight path |
| **Airspace** | Class G only; no controlled airspace |
| **Obstacles** | All obstacles to max altitude identified |
| **Emergency landing** | Zones identified for forced landing |
| **Communication** | C2 link tested; coverage confirmed |
| **Access** | Site access documented |
| **Ground hazards** | For ground recovery if needed |

Complete FRM-SITESURVEY with BVLOS sections.

### 4.3 Flight Planning (BVLOS)

#### Route Planning
- Define flight path
- Identify waypoints
- Plan altitude profile
- Ensure path avoids obstacles with margin
- Calculate flight time
- Verify battery capacity for entire mission + reserve

#### Lost Link Planning
Program lost link behavior:
1. Loiter duration
2. RTH altitude and path
3. Landing location if RTH fails
4. Verify programming before flight

#### Emergency Landing Zones
Identify along route:
- Primary landing zones (flat, clear)
- Secondary options
- Mark in planning materials

### 4.4 BVLOS Pre-Flight

In addition to standard pre-flight:

| Check | Verification |
|:------|:-------------|
| **C2 Link** | Range test in direction of flight |
| **Lost link behavior** | Confirmed programmed correctly |
| **RTH settings** | Home point accurate; altitude set |
| **Telemetry** | All parameters displaying correctly |
| **Flight path** | Uploaded and verified |
| **Airspace** | Reconfirm Class G, no conflicts |
| **Area check** | Confirm unpopulated |

### 4.5 BVLOS Crew Briefing

Brief covers:
- BVLOS-specific procedures
- Flight plan and route
- Transition point (VLOS to BVLOS)
- Communication plan
- Lost link procedures
- Emergency procedures
- Monitoring responsibilities

### 4.6 Transition to BVLOS

When transitioning from VLOS to BVLOS:
1. Verify aircraft systems normal
2. Confirm position via telemetry
3. Confirm C2 link strong
4. Confirm flight path programmed
5. Announce "Transitioning to BVLOS"
6. Shift primary reference to telemetry

### 4.7 BVLOS Flight Conduct

During BVLOS phase:

**Monitor continuously:**
- Aircraft position on map
- Altitude
- Speed
- Battery level
- C2 link strength
- GPS status

**Take action if:**
| Condition | Action |
|:----------|:-------|
| Position deviates from plan | Correct or investigate |
| Altitude unexpected | Correct or investigate |
| Battery low | Initiate RTH |
| C2 link weakening | Be prepared for lost link |
| GPS issues | Monitor closely; may need RTH |
| Any anomaly | Consider immediate RTH |

### 4.8 Lost Link Procedures

If C2 link lost during BVLOS:

1. **Monitor telemetry** (may still have telemetry without control)
2. **Wait for programmed behavior** (loiter, then RTH typically)
3. **Attempt link recovery** (reposition, check equipment)
4. **Track aircraft via telemetry**
5. **Prepare for landing/recovery**

If telemetry also lost:
- Follow last known trajectory
- Move to recovery position
- Prepare for search if necessary
- Report as occurrence

### 4.9 Return to Visual

When aircraft returning to visual range:
1. Watch for aircraft approaching
2. Acquire visual contact
3. Announce "Visual contact" when acquired
4. Verify via telemetry position matches visual
5. Continue approach and landing

### 4.10 BVLOS Post-Flight

In addition to standard post-flight:
- Review flight data/logs
- Verify no anomalies during BVLOS phase
- Document any issues
- Report any occurrences
- Debrief BVLOS-specific observations

### 4.11 Documentation

For each BVLOS flight, document:
- Flight log (noting BVLOS)
- BVLOS flight plan
- Pre-flight BVLOS checklist
- Any lost link events
- Any anomalies

---

## 5. Limitations Summary

| Parameter | L1C Limit |
|:----------|:----------|
| Area | Unpopulated only |
| Airspace | Class G only |
| Altitude | Per declaration |
| Range | C2 link capability |
| Aircraft | Listed aircraft only |
| Pilots | BVLOS-authorized only |

**If any limit would be exceeded, operation requires SFOC.**

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Verify declaration compliance; authorize PICs |
| **PIC** | Safe conduct; continuous monitoring; compliance |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-005 | BVLOS Operations Policy |
| OPS-011-PR | Emergency Procedures (RPAS) |
| GUIDE-BVLOS | BVLOS Operations Guide |
| FRM-SITESURVEY | Site Survey Form |
| L1C Declaration | Current declaration |

---

**Document Control:** OPS-009-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Payload Operations Procedure',
  'procedure',
  'OPS-010-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# PAYLOAD OPERATIONS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-010-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes the installation, operation, and management of payloads on Aeria Solutions aircraft.

---

## 2. Scope

This procedure applies to:
- All payload operations
- Camera, LiDAR, thermal, and other sensors
- Payload operators and PICs

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-006 | Payload Management Policy |
| MCM-004-PR | Payload Maintenance Procedure |
| Aircraft manuals | Payload specifications |

---

## 4. Procedure

### 4.1 Payload Selection

Select payload based on:
- Mission requirements
- Data type needed
- Aircraft compatibility
- Weight and balance
- Conditions (weather, lighting)

Verify payload is approved for aircraft.

### 4.2 Weight and Balance

Before installing payload:

**Calculate:**
```
Aircraft empty weight:      _____ g
Battery weight:             _____ g
Payload weight:             _____ g
Accessories/mounts:         _____ g
                           ─────────
TOTAL:                      _____ g
MTOW:                       _____ g
```

**Total must not exceed MTOW.**

For CG-sensitive aircraft, verify CG within limits per aircraft manual.

### 4.3 Payload Installation

#### Standard Camera/Gimbal

| Step | Action |
|:-----|:-------|
| 1 | Power off aircraft |
| 2 | Mount payload per aircraft procedure |
| 3 | Verify secure attachment |
| 4 | Connect power cable |
| 5 | Connect data cable (if applicable) |
| 6 | Verify gimbal moves freely |
| 7 | Power on and verify function |

#### LiDAR/Specialized Sensors

- Follow sensor-specific mounting procedure
- Verify calibration requirements
- Configure data collection settings
- Test before flight

### 4.4 Pre-Flight Payload Checks

| Check | Verification |
|:------|:-------------|
| **Mounting** | Secure, no play |
| **Connections** | Power and data connected |
| **Lens/Sensor** | Clean, undamaged |
| **Storage** | SD card/storage installed, formatted |
| **Settings** | Correct for mission |
| **Function test** | Trigger capture; verify |
| **Gimbal** | Full range of motion |

### 4.5 Payload Operation During Flight

**Responsibility division:**

| Role | Duties |
|:-----|:-------|
| PIC | Safe flight; aircraft control; flight decisions |
| Payload Operator | Payload operation; data capture; monitoring |

**If PIC is also payload operator:**
- Flight safety takes priority
- Use automated capture when possible
- Do not sacrifice situational awareness

**Communication:**
- PO informs PIC of capture status
- PIC informs PO of positioning
- Clear communication prevents conflicts

### 4.6 Data Collection Modes

| Mode | Use |
|:-----|:----|
| **Manual trigger** | Individual photos; specific targets |
| **Interval** | Time-based capture; mapping |
| **Distance-based** | Distance-triggered; photogrammetry |
| **Video** | Continuous recording; inspection |
| **Automated mission** | Pre-planned capture points |

Select mode based on mission requirements.

### 4.7 Mapping/Survey Operations

For mapping and survey:
1. Plan flight path with appropriate overlap
2. Configure camera settings (shutter, interval)
3. Verify ground sample distance meets requirements
4. Capture ground control points if needed
5. Monitor coverage during flight
6. Verify data immediately after flight

### 4.8 Thermal Operations

For thermal imaging:
1. Allow sensor to stabilize (warm-up)
2. Configure temperature range
3. Note ambient conditions for calibration
4. Capture reference images
5. Consider sun angle and reflections

### 4.9 LiDAR Operations

For LiDAR:
1. Calibrate before flight
2. Configure point density settings
3. Monitor storage capacity
4. Verify IMU/GNSS function
5. Complete required ground control

### 4.10 Post-Flight Data Management

| Step | Action |
|:-----|:-------|
| 1 | Remove storage media safely |
| 2 | Download data immediately |
| 3 | Verify data transferred completely |
| 4 | Review sample images/data |
| 5 | Label with flight/project info |
| 6 | Back up to secondary location |
| 7 | Format media for next flight |

### 4.11 Payload Removal/Storage

After operations:
1. Power down payload
2. Disconnect cables
3. Remove payload carefully
4. Clean lens/sensor if needed
5. Store in protective case
6. Note any issues for maintenance

---

## 5. Troubleshooting

| Issue | Action |
|:------|:-------|
| No image capture | Check SD card; check camera settings; power cycle |
| Gimbal not responding | Check connections; calibrate; power cycle |
| Poor image quality | Clean lens; adjust settings; check vibration |
| Storage full | Replace/empty media; adjust resolution if needed |
| Connection error | Check cables; try different cable |

**If issue cannot be resolved, do not fly with malfunctioning payload.**

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Overall safety; weight/balance; flight decisions |
| **Payload Operator** | Install, operate, manage data; report issues |
| **Operations Manager** | Maintain payload inventory; oversee maintenance |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-006 | Payload Management Policy |
| MCM-004-PR | Payload Maintenance Procedure |
| ADM-004 | Privacy Policy |
| Aircraft Manuals | Payload specifications |

---

**Document Control:** OPS-010-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Emergency Procedures RPAS',
  'procedure',
  'OPS-011-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# EMERGENCY PROCEDURES (RPAS)

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-011-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes emergency response for RPAS-specific emergencies during flight operations.

---

## 2. Scope

This procedure applies to:
- All RPAS flight operations
- PICs and crew
- All aircraft types

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-001 | RPAS Flight Operations Policy |
| HSE-005-PR | Emergency Response Procedure |
| SMS-005 | Occurrence Reporting Policy |

---

## 4. General Emergency Response

### 4.1 Priority Order

For any emergency:
1. **Safety of people** — Ground personnel, bystanders
2. **Aircraft recovery** — If possible and safe
3. **Property protection** — Minimize damage
4. **Evidence preservation** — For investigation

### 4.2 General Steps

1. Announce emergency to crew
2. Clear danger area
3. Attempt recovery if safe
4. Document what happened
5. Report per SMS requirements

---

## 5. Specific Emergencies

### 5.1 Lost Link / Communication Failure

**Signs:**
- No control response
- Link lost indicator
- Telemetry stops updating

**Immediate Actions:**
1. **Announce:** "Lost link"
2. **Do not panic** — Aircraft will follow programmed behavior
3. **Monitor telemetry** (may still work one-way)
4. **Attempt recovery:**
   - Reposition controller
   - Check antenna orientation
   - Power cycle controller (last resort)
5. **Watch for aircraft** — It will RTH or land per programming
6. **Clear landing area** — Prepare for automatic landing

**If link not recovered:**
- Track aircraft position
- Move to intercept/recovery position
- Prepare for manual recovery

**After recovery:**
- Inspect aircraft
- Check logs
- Report per SMS

### 5.2 Flyaway

**Signs:**
- Aircraft not responding to commands
- Aircraft moving away uncontrolled
- Cannot regain control

**Immediate Actions:**
1. **Announce:** "Flyaway"
2. **Try RTH command** — Even if other controls failed
3. **If RTH works:** Monitor and wait
4. **If RTH fails:**
   - Try to trigger motor stop (if safe area)
   - Track last known position
   - Monitor telemetry for position
5. **Contact ATC/authorities** if entering controlled airspace

**Recovery:**
1. Track to last known position
2. Search for aircraft
3. If unrecoverable, document last position
4. Report per SMS requirements

**Report to Transport Canada if:**
- Aircraft entered controlled airspace
- Caused hazard to other aircraft
- Injured person or damaged property

### 5.3 Crash / Uncontrolled Landing

**Signs:**
- Aircraft impacts ground or object
- Unplanned/hard landing

**Immediate Actions:**
1. **Announce:** "Aircraft down"
2. **Ensure area safe** — Keep people away
3. **Disarm aircraft** if accessible and safe
4. **Check for battery damage** (fire risk)
5. **Remove battery** carefully if safe
6. **Assess damage** — Document with photos

**If fire risk present:**
- Do not approach immediately
- Monitor for smoke/heat
- Have fire suppression ready

**Documentation:**
- Photos of aircraft and impact area
- GPS coordinates
- Description of events

**Report per SMS-005.**

### 5.4 Battery Fire

**Signs:**
- Smoke from battery
- Unusual smell
- Swelling battery
- Flames

**Immediate Actions:**
1. **Announce:** "Battery fire"
2. **Evacuate immediate area** (toxic fumes)
3. **Do NOT use water** (LiPo fires)
4. **Use fire extinguisher** (ABC dry chemical) or sand
5. **If aircraft is in air** with fire risk, land immediately in safe area
6. **Monitor for re-ignition** — LiPo fires can reignite

**After fire controlled:**
- Do not touch battery
- Allow to cool completely
- Monitor for at least 30 minutes
- Dispose per hazardous waste procedure

**Seek medical attention** if fumes inhaled.

### 5.5 Mid-Air Emergency (Other Aircraft)

**If other aircraft approaches:**

**Immediate Actions:**
1. **VO calls:** "Traffic, [direction]!"
2. **Descend immediately**
3. **Move away from traffic path**
4. **Land if necessary**
5. **All manned aircraft have priority**

**If near-miss occurs:**
1. Land aircraft
2. Document details:
   - Time
   - Aircraft type
   - Approximate distance
   - Altitude
   - Direction
3. Report per SMS-005
4. Report to Transport Canada per CARs 901.50

### 5.6 Controlled Flight into Terrain/Object

**Signs:**
- Aircraft contacted object (tree, building, wire)
- Aircraft damage from strike

**Immediate Actions:**
1. Land immediately (if still controllable)
2. If lost control, track for crash location
3. Document impact location
4. Assess for damage to property
5. Report to property owner if applicable
6. Report per SMS-005

### 5.7 GPS Failure

**Signs:**
- GPS lost indicator
- Position not updating
- Aircraft drifting unexpectedly

**Immediate Actions:**
1. Switch to ATTI mode (attitude-only)
2. Maintain visual on aircraft
3. Manually control orientation and position
4. Land as soon as practical
5. Do not enter BVLOS without GPS

### 5.8 Motor/ESC Failure

**Signs:**
- Aircraft yawing unexpectedly
- Motor warning
- Unusual sound

**Immediate Actions:**
1. Land immediately
2. Some multirotors can fly with one motor out; others cannot
3. Prioritize safe landing area
4. Accept rougher landing if needed for safety

### 5.9 Return to Home (RTH) Issues

**If RTH leads to wrong location:**
1. Cancel RTH if possible
2. Take manual control
3. Fly to correct landing location
4. Check home point setting after landing

**If RTH altitude is wrong:**
1. Monitor for obstacle collision risk
2. Adjust altitude manually if possible
3. Be prepared to intervene

---

## 6. Post-Emergency Procedures

After any emergency:
1. Ensure all personnel safe
2. Secure aircraft if possible
3. Do not modify/delete any data
4. Document thoroughly (notes, photos)
5. Preserve all evidence
6. Report to Operations Manager immediately
7. Complete occurrence report per SMS-005
8. Cooperate with any investigation

---

## 7. Emergency Reporting Requirements

| Occurrence | Report To | Timeframe |
|:-----------|:----------|:----------|
| Minor emergency (no injury/damage) | Operations Manager | Same day |
| Aircraft damage | Operations Manager | Immediately |
| Property damage | Operations Manager + Owner | Immediately |
| Injury | 911 + Operations Manager | Immediately |
| Controlled airspace entry | NAV CANADA/ATC | Immediately |
| Reportable occurrence | Transport Canada | Per CARs |

---

## 8. Quick Reference

| Emergency | Key Actions |
|:----------|:------------|
| Lost link | Wait for programmed behavior; attempt recovery |
| Flyaway | Try RTH; track position; report if hazard |
| Crash | Secure area; remove battery; document |
| Battery fire | Evacuate; extinguish (ABC/sand); monitor |
| Traffic conflict | Descend; give way; land if needed |
| GPS failure | Switch to ATTI; manual control; land |
| Motor failure | Land immediately |

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-005-PR | Emergency Response Procedure |
| SMS-005 | Occurrence Reporting Policy |
| SMS-004-PR | Internal Reporting Procedure |
| QRC-EMER | Emergency Quick Reference Card |

---

**Document Control:** OPS-011-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Site Survey Procedure',
  'procedure',
  'OPS-012-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# SITE SURVEY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-012-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes how to conduct site surveys for RPAS operations to identify hazards, plan operations, and ensure safe flight conduct.

---

## 2. Scope

This procedure applies to:
- All new operation sites
- Updates to existing sites
- Both VLOS and BVLOS operations

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-001-PR | Flight Planning Procedure |
| OPS-005 | BVLOS Operations Policy |
| FRM-SITESURVEY | Site Survey Form |

---

## 4. Procedure

### 4.1 When Site Survey Required

Conduct site survey:
- First time at any new site
- When site conditions have changed significantly
- Annual review of frequently used sites
- When client requirements change
- When different operation type planned

### 4.2 Pre-Visit Research

Before visiting site, research:

| Element | Source |
|:--------|:-------|
| **Airspace** | Charts, NAV CANADA, apps |
| **NOTAMs** | NAV CANADA |
| **Land ownership** | Maps, client info |
| **Known hazards** | Client, local knowledge |
| **Access** | Maps, directions |
| **Wildlife** | Conservation data, season |
| **Previous surveys** | Company records |

### 4.3 Site Visit

#### General Assessment
- Location coordinates (GPS)
- Site description
- Access routes
- Parking/staging areas
- Ground conditions (terrain, surface)
- Nearest facilities (roads, buildings)

#### Airspace Assessment
- Confirm airspace class
- Distance to nearest aerodromes
- Any restricted areas nearby
- Any tall structures (towers, stacks)
- Communication coverage

#### Obstacle Survey

Map all obstacles:
| Obstacle Type | Record |
|:--------------|:-------|
| Trees | Height, extent |
| Buildings | Height, location |
| Towers/masts | Height, guy wires |
| Power lines | Location, height |
| Other structures | Details |

Note obstacle heights relative to planned operating altitude.

#### Launch/Landing Areas
- Identify suitable launch/landing zones
- Note surface type
- Note orientation (sun, wind)
- Note accessibility
- Identify alternates

#### Emergency Areas
- Emergency landing zones
- Assembly/muster point
- Egress routes
- Medical facilities (nearest hospital)

### 4.4 Hazard Identification

| Category | Look For |
|:---------|:---------|
| **Terrain** | Slopes, water, soft ground |
| **Weather** | Wind patterns, shadows, thermal influences |
| **Wildlife** | Bird activity, wildlife signs |
| **Electromagnetic** | Transmission towers, radar, high voltage |
| **Human activity** | Traffic, pedestrians, construction |
| **Industrial** | Equipment, hazardous materials, noise |
| **Security** | Access control, sensitive areas |

### 4.5 BVLOS-Specific Assessment

For BVLOS sites, additionally assess:

| Element | Assessment |
|:--------|:-----------|
| **Population** | Confirm unpopulated; no people in flight path |
| **C2 coverage** | Test communication range in all directions |
| **Recovery routes** | Access to potential landing sites |
| **Emergency landing** | Zones throughout flight area |
| **Ground risk** | Risk of impact if aircraft goes down |
| **Air risk** | Other air traffic patterns |

### 4.6 Communication Assessment

Document:
- Cell phone coverage
- Radio coverage (if used)
- Internet connectivity (if needed)
- Emergency communication options
- Client communication requirements

### 4.7 Client/Stakeholder Information

If operating at client site:
- Client safety requirements
- Site access procedures
- Permits required
- Restricted areas
- Emergency procedures
- Contact information

### 4.8 Documentation

Complete FRM-SITESURVEY including:
- Site identification and coordinates
- Date of survey
- Surveyor name
- Airspace information
- Obstacles (with sketch/map)
- Hazards identified
- Launch/landing areas
- Emergency information
- Photos (recommended)
- BVLOS sections (if applicable)

### 4.9 Site Map/Sketch

Create or annotate map showing:
- Site boundaries
- Launch/landing areas
- Obstacles with heights
- No-fly zones
- Emergency landing areas
- North arrow
- Scale indication

### 4.10 Survey Review

Operations Manager reviews surveys for:
- Completeness
- Adequacy of hazard identification
- Appropriate mitigations identified
- BVLOS suitability (if applicable)
- Approval for operations

### 4.11 Survey Updates

Update site survey when:
- Site conditions change
- Seasons change significantly (vegetation, wildlife)
- New obstacles appear
- Incident occurs at site
- Annually for active sites

---

## 5. Remote Site Survey

When physical visit is not possible:

1. **Desktop research:**
   - Satellite imagery
   - Maps and charts
   - Client information
   - Local contacts

2. **Limitations:**
   - Note that site was not physically visited
   - Plan for additional on-site assessment on arrival
   - Conservative hazard assumptions

3. **On-arrival assessment:**
   - Verify desktop findings
   - Identify anything not visible in imagery
   - Update survey as needed

---

## 6. Survey Retention

- Retain site surveys for duration of use + 3 years
- Update rather than create new when conditions change
- Make accessible to PICs for flight planning

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Conduct surveys; document findings |
| **Operations Manager** | Review surveys; approve for operations |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-001-PR | Flight Planning Procedure |
| OPS-009-PR | BVLOS Operations Procedure |
| FRM-SITESURVEY | Site Survey Form |
| HSE-002-PR | FLHA Procedure |

---

**Document Control:** OPS-012-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Cargo Delivery Procedure',
  'procedure',
  'OPS-013-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# CARGO DELIVERY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-013-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to conduct cargo delivery operations using RPAS delivery aircraft such as the DJI FlyCart 30.

---

## 2. Scope

This procedure applies to all cargo delivery operations.

---

## 3. Procedure

### 3.1 Pre-Mission Planning

**Client coordination:**
1. Confirm delivery requirements
2. Determine cargo specifications (weight, dimensions)
3. Identify pickup and delivery locations
4. Coordinate delivery timing
5. Establish ground contact at delivery site
6. Confirm communication methods

**Operational planning:**
1. Verify route (obstacles, airspace, terrain)
2. Plan flight path (direct or waypoint)
3. Identify alternate landing sites
4. Calculate battery requirements
5. Assess weather forecast
6. Complete risk assessment

### 3.2 Aircraft Preparation

**DJI FlyCart 30 Specifications Reference:**

| Parameter | Dual Battery | Single Battery |
|:----------|:-------------|:---------------|
| Max payload | 30 kg | 40 kg |
| Max range (no payload) | 28 km | 16 km |
| Max range (full payload) | 16 km | 8 km |
| Max speed | 20 m/s | 20 m/s |
| Operating temp | -20°C to +45°C | -20°C to +45°C |

**Pre-flight preparation:**
1. Select appropriate battery configuration
2. Verify aircraft airworthiness
3. Complete pre-flight inspection
4. Verify firmware current
5. Calibrate sensors if required
6. Test all systems

### 3.3 Cargo Loading

**Weight verification:**
1. Weigh cargo accurately
2. Verify within payload limit
3. Document cargo weight

**Cargo Mode loading:**
1. Open cargo box
2. Place cargo centered
3. Secure cargo (straps, padding)
4. Verify no movement
5. Close and secure lid
6. Verify latches engaged

**Winch Mode loading:**
1. Attach cargo to winch hook
2. Verify secure attachment
3. Test release mechanism
4. Verify cargo weight on system
5. Brief release procedure

**Weight and balance:**
1. Verify total weight within limits
2. Confirm CG within limits
3. Document configuration

### 3.4 Pre-Flight

**Standard pre-flight plus:**
- [ ] Cargo secured and verified
- [ ] Total weight confirmed
- [ ] CG verified
- [ ] Delivery location programmed
- [ ] Alternate sites identified
- [ ] Ground contact confirmed
- [ ] Weather current and acceptable
- [ ] Battery capacity adequate for mission + reserve

### 3.5 Takeoff

1. Confirm area clear
2. Arm aircraft
3. Smooth vertical takeoff
4. Verify stable hover with load
5. Check all systems nominal
6. Proceed to altitude

**Heavy load considerations:**
- Expect reduced climb rate
- Monitor motor temperatures
- Allow extra hover verification time
- Be prepared for different handling

### 3.6 En Route

**Monitoring:**
- Battery consumption vs. plan
- Wind conditions
- Aircraft performance
- Telemetry data
- Communication with delivery site

**Adjustments:**
- If headwind stronger than planned - assess battery
- If performance degraded - consider abort
- If weather deteriorating - assess options

### 3.7 Approach to Delivery Site

**Coordination with ground:**
1. Contact ground personnel
2. Confirm delivery zone clear
3. Confirm wind conditions at site
4. Confirm ready to receive

**Approach:**
1. Reduce speed approaching site
2. Descend to delivery altitude
3. Position over delivery zone
4. Verify stable hover

### 3.8 Cargo Delivery

**Direct Landing Delivery:**
1. Confirm zone clear below
2. Execute controlled descent
3. Land smoothly
4. Confirm on ground
5. Ground personnel unload
6. Confirm cargo removed
7. Execute takeoff when clear

**Winch Delivery:**
1. Confirm zone clear below
2. Hover at winch deployment altitude
3. Deploy winch
4. Lower cargo controlled
5. Confirm cargo on ground
6. Release cargo hook
7. Retract winch
8. Confirm winch stowed
9. Depart when complete

### 3.9 Return Flight

1. Depart delivery site
2. Return to base
3. Monitor battery for return
4. Standard approach and landing

### 3.10 Post-Flight

**Standard post-flight plus:**
1. Verify cargo delivery confirmed
2. Inspect cargo system
3. Inspect aircraft for delivery stress
4. Document flight
5. Document delivery completion
6. Report any issues

---

## 4. Emergency Procedures

### 4.1 Cargo Shift

If cargo shifts during flight:
1. Assess controllability
2. Reduce speed
3. Proceed to nearest safe landing
4. Do not attempt to continue delivery
5. Land and reassess

### 4.2 Unable to Complete Delivery

If cannot reach delivery site:
1. Assess remaining battery
2. Select nearest safe landing
3. Land with cargo
4. Secure cargo
5. Coordinate alternate delivery
6. Report situation

### 4.3 Delivery Zone Not Clear

If delivery zone compromised:
1. Hold position at safe altitude
2. Communicate with ground
3. Wait for zone clear, OR
4. Divert to alternate zone, OR
5. Return to base with cargo

### 4.4 Winch Failure

If winch fails to operate:
1. Attempt alternate command
2. If unresponsive - return to base
3. Land with cargo attached
4. Do not attempt forced release

### 4.5 Lost Link with Cargo

Aircraft should be programmed to:
- Hover in place and attempt relink, OR
- Return to home with cargo, OR
- Proceed to delivery and hover (if close)

---

## 5. Weather Limits

| Condition | Limit |
|:----------|:------|
| Wind (FlyCart 30) | 12 m/s (43 km/h) |
| Gusts | 15 m/s |
| Precipitation | Light or none |
| Visibility | ≥3 km |
| Temperature | -20°C to +45°C |

---

## 6. Documentation

Complete for each delivery:
- Flight log
- Cargo manifest
- Delivery confirmation
- Any anomalies

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-013 | Cargo Delivery Operations Policy |
| FRM-CARGO | Cargo Manifest Form |
| FHA-019 | Cargo Delivery Operations |
| MCM-001 | Maintenance Control Manual |

---

**Document Control:** OPS-013-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Dangerous Goods Procedure',
  'procedure',
  'OPS-014-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# DANGEROUS GOODS TRANSPORT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-014-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to transport dangerous goods by RPAS in compliance with TDG Regulations.

---

## 2. Scope

This procedure applies to all dangerous goods transport by RPAS.

---

## 3. Procedure

### 3.1 Authorization Verification

Before any dangerous goods transport:
1. Verify company TDG authorization current
2. Verify SFOC covers operation (if required)
3. Verify personnel TDG training current
4. Verify aircraft approved for goods class
5. Document authorization verification

### 3.2 Cargo Identification

**Classify the dangerous goods:**
1. Obtain proper shipping name
2. Confirm UN number
3. Identify hazard class/division
4. Determine packing group
5. Identify any subsidiary hazards

**Verify compatibility:**
- Compatible with aircraft materials
- Compatible with other cargo (if any)
- Within quantity limits

### 3.3 Packaging Verification

**Before accepting for transport:**

| Check | Verified |
|:------|:---------|
| UN specification packaging | ☐ |
| Packaging in good condition | ☐ |
| Proper closure | ☐ |
| Inner packaging (if required) | ☐ |
| Absorbent (if required) | ☐ |
| Correct marks and labels | ☐ |

### 3.4 Marking Requirements

Verify package displays:
- [ ] UN specification marking
- [ ] Proper shipping name
- [ ] UN number
- [ ] Consignor/consignee info
- [ ] Gross weight (if >50 kg)

### 3.5 Labeling Requirements

Verify correct hazard labels:
- [ ] Primary hazard label
- [ ] Subsidiary hazard labels
- [ ] Handling labels (orientation, etc.)
- [ ] Correct size and placement

### 3.6 Documentation

**Prepare/verify shipping document:**

Required information:
- Shipping name with technical name (if required)
- Class or division
- UN number
- Packing group
- Quantity (number and type of packages)
- Gross mass
- 24-hour emergency phone number

**Document format:**
```
UN[NUMBER], [PROPER SHIPPING NAME], [CLASS], PG [GROUP], [QUANTITY], [MASS]
Emergency Contact: [NAME] [24-HR PHONE]
```

### 3.7 Aircraft Loading

**Pre-loading:**
1. Verify aircraft suitable
2. Inspect cargo area clean/dry
3. No incompatible residue

**Loading procedure:**
1. Inspect packaging final time
2. Position for weight/balance
3. Secure against movement
4. Prevent package damage
5. Document cargo position
6. Retain shipping document

**Securing:**
- Cargo cannot shift or fall
- Labels remain visible
- No pressure on packaging

### 3.8 Pre-Flight

Standard pre-flight PLUS:
- [ ] TDG authorization verified
- [ ] Shipping document complete
- [ ] Packaging intact
- [ ] Labels visible
- [ ] Cargo secured
- [ ] Emergency equipment aboard
- [ ] 24-hr contact available
- [ ] Route reviewed (avoid populated areas)

### 3.9 Transport

**During flight:**
- Monitor cargo status (if capability)
- Maintain communication
- Follow planned route
- Be prepared for emergency

**If emergency:**
- Refer to emergency procedures
- Notify emergency contact
- Provide cargo information to responders

### 3.10 Delivery/Transfer

**At destination:**
1. Land in safe area
2. Verify receiving party qualified
3. Transfer shipping document
4. Verify packaging intact
5. Transfer custody
6. Obtain receipt/signature
7. Document delivery

### 3.11 Post-Transport

1. Inspect aircraft cargo area
2. Check for contamination/damage
3. Clean if necessary
4. Document any issues
5. Retain shipping document copy (2 years)

---

## 4. Emergency Procedures

### 4.1 Damaged Package Discovered

Before flight:
1. Do not load
2. Isolate package
3. Assess contamination
4. Contact shipper
5. Document

During flight:
1. Land as soon as practicable
2. Assess upon landing
3. If release - activate emergency response
4. Notify emergency contact

### 4.2 Release/Spill

1. Land immediately (if airborne)
2. Do not approach if hazardous vapors
3. Evacuate area if necessary
4. Notify emergency services if needed
5. Contact 24-hour emergency number
6. Follow emergency response guidance
7. Document fully

### 4.3 Fire Involving Dangerous Goods

**RPAS fire before takeoff:**
1. Evacuate area
2. Call 911
3. Provide DG information to responders
4. Do not attempt to fight if DG involved

**Information for responders:**
- UN number and class
- Quantity
- Location
- Shipping document

### 4.4 Aircraft Crash with Dangerous Goods

1. Notify emergency services immediately
2. Provide dangerous goods information
3. Keep people away from crash site
4. Do not handle wreckage if contaminated
5. Notify 24-hour emergency contact
6. Notify Operations Manager
7. Document and preserve evidence

---

## 5. CANUTEC

**Canadian Transport Emergency Centre**

| Service | Number |
|:--------|:-------|
| Emergency | 1-888-226-8832 |
| Non-emergency info | 613-992-4624 |

CANUTEC can provide:
- Emergency response guidance
- Chemical information
- Technical support

---

## 6. Documentation Retention

| Document | Retention |
|:---------|:----------|
| Shipping documents | 2 years |
| Training records | 3 years after training |
| Incident reports | 10 years |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-014 | Dangerous Goods Transport Policy |
| OPS-015-PR | Avalanche Control Procedure |
| FRM-TDG | Dangerous Goods Shipping Document |

---

**Document Control:** OPS-014-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Avalanche Control Procedure',
  'procedure',
  'OPS-015-PR',
  'Flight Operations',
  '# AERIA SOLUTIONS LTD

# AVALANCHE CONTROL PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-015-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to conduct RPAS-based avalanche control operations involving explosive delivery.

---

## 2. Scope

This procedure applies to all avalanche control operations using explosives.

---

## 3. Procedure

### 3.1 Pre-Mission Planning (Day Before/Morning Of)

**Authorization verification:**
- [ ] SFOC valid and conditions reviewed
- [ ] Explosives licence/permit current
- [ ] TDG authorization current
- [ ] Personnel certifications current
- [ ] Client agreement in place

**Coordination:**
1. Contact avalanche program coordinator
2. Review avalanche forecast
3. Confirm target paths
4. Establish communication plan
5. Coordinate exclusion zones
6. Confirm highway/area closures (timing)

**Planning:**
1. Review target locations
2. Plan flight routes
3. Identify hazards (terrain, obstacles)
4. Plan explosive deployment sequence
5. Calculate required explosives
6. Identify emergency procedures
7. Prepare explosives inventory

### 3.2 Team Briefing

**All personnel attend briefing covering:**
- Mission objectives
- Weather conditions
- Avalanche conditions and targets
- Flight plan
- Explosives inventory
- Roles and responsibilities
- Communication plan
- Exclusion zones and closures
- Emergency procedures
- Misfire procedures

### 3.3 Explosives Preparation

**At licensed storage facility:**

| Step | Action | Verified |
|:-----|:-------|:---------|
| 1 | Verify inventory count | ☐ |
| 2 | Inspect packaging | ☐ |
| 3 | Verify compatibility | ☐ |
| 4 | Complete withdrawal documentation | ☐ |
| 5 | Transport per TDG requirements | ☐ |
| 6 | Chain of custody documented | ☐ |

**At staging area:**
1. Inventory explosives received
2. Inspect condition
3. Store in approved temporary location
4. Maintain security
5. Limit access to authorized personnel

### 3.4 Aircraft Preparation

**Standard pre-flight PLUS:**
- [ ] Delivery system functional
- [ ] Release mechanism tested
- [ ] GPS accuracy verified
- [ ] Communication verified
- [ ] Failsafe to safe area programmed
- [ ] Extra battery capacity for mission

### 3.5 Loading Explosives

**Load only when:**
- Aircraft ready
- Flight imminent
- Zone clear confirmed
- Weather acceptable
- All authorizations in place

**Loading procedure:**
1. Blaster supervises
2. Verify explosive identification
3. Handle carefully - no shock
4. Attach to delivery system
5. Verify secure attachment
6. Verify release mechanism clear
7. **Do not arm until ready for delivery**
8. Document load (type, quantity, serial numbers)

### 3.6 Zone Clearance

**Before takeoff with explosives:**
1. Confirm highway closure active (if applicable)
2. Confirm ski area closure active (if applicable)
3. Confirm blast zone clear of personnel
4. Confirm airspace clear
5. Receive clearance from avalanche technician
6. Document clearance time and confirmation

### 3.7 Flight to Target

1. Takeoff and proceed to target area
2. Maintain communication
3. Confirm still cleared to proceed
4. Position at deployment altitude
5. Verify GPS position
6. Confirm target visually (if possible)

### 3.8 Explosive Deployment

**Pre-deployment:**
1. Confirm zone clear - final check
2. Confirm ready to deploy
3. Arm explosive (if required by system)

**Deployment:**
1. Position precisely over target
2. Verify stable hover
3. Release explosive
4. Confirm release
5. Depart blast area immediately

**Post-deployment:**
1. Reach safe distance
2. Confirm detonation (visual/audio)
3. Document: location, time, result
4. If no detonation - see Misfire Procedure

### 3.9 Misfire Procedure

**If explosive does not detonate:**

| Step | Action |
|:-----|:-------|
| 1 | Mark GPS coordinates |
| 2 | Note exact location/landmarks |
| 3 | Notify blaster immediately |
| 4 | Do not approach |
| 5 | Wait minimum time (per blaster direction) |
| 6 | Continue mission or return as directed |
| 7 | Document: location, time, type, serial number |
| 8 | Follow client misfire protocols |

**Misfire investigation:**
- Conducted by qualified blaster
- Minimum wait time observed
- Safe approach procedures
- Recovery or destruction per regulations
- Full documentation

### 3.10 Multiple Deployments

For multi-target missions:
1. Confirm zone clear between each drop
2. Fly to next target
3. Repeat deployment procedure
4. Track all deployments
5. Maintain explosives accountability

### 3.11 Return and Landing

1. Return to staging area
2. Approach carefully
3. Land in designated area
4. **Verify all explosives deployed or secured**
5. Disarm any unfired ordnance (blaster only)

### 3.12 Post-Mission

**Explosives accountability:**
1. Count explosives deployed
2. Count explosives returned
3. Verify totals match inventory
4. Document any discrepancies
5. Return unused to storage
6. Complete storage documentation

**Debrief:**
- Review each deployment
- Document results
- Discuss any issues
- Note misfires and resolution
- Lessons learned

**Documentation:**
- Complete blasting log
- Complete flight log
- File explosives records
- Report to client
- Report any occurrences

---

## 4. Emergency Procedures

### 4.1 Lost Link with Explosives Aboard

1. Aircraft follows failsafe
2. Notify all personnel
3. Clear expected landing area
4. Do not approach until blaster assesses
5. If found - do not touch until safe
6. Document

### 4.2 Crash with Explosives

1. Keep all personnel clear
2. Note location
3. Call emergency services if needed
4. Do not approach
5. Notify Operations Manager
6. Notify client
7. Wait for blaster assessment
8. Document fully

### 4.3 Premature Detonation

1. Take cover
2. Account for all personnel
3. Provide first aid if injuries
4. Call emergency services if needed
5. Do not continue operations
6. Investigate cause
7. Report per regulations

### 4.4 Weather Deterioration

1. Assess immediately
2. If unsafe - do not deploy
3. Return with unexpended ordnance
4. Land safely
5. Secure explosives properly
6. Reassess for continuation

---

## 5. Weather Limits

| Condition | Limit |
|:----------|:------|
| Visibility | Visual on target required |
| Wind | Per aircraft limits |
| Precipitation | Light or none |
| Lightning | NO-GO within 30 km |
| Cloud/fog | Clear of target area |

---

## 6. Communication Protocol

| Call | Meaning |
|:-----|:--------|
| "Zone clear" | Area clear for deployment |
| "Hold" | Do not deploy |
| "Deploying" | Releasing explosive |
| "Away" | Explosive released |
| "Good det" | Detonation confirmed |
| "Misfire" | No detonation |
| "Aborting" | Returning without deployment |

---

## 7. Documentation Requirements

| Document | Required |
|:---------|:---------|
| Blasting log | Each deployment |
| Flight log | Each flight |
| Explosives inventory | Daily reconciliation |
| Misfire report | Each misfire |
| Incident report | Any occurrence |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-015 | Avalanche Control Operations Policy |
| OPS-014 | Dangerous Goods Transport Policy |
| FHA-020 | Avalanche Control Operations |
| QRC-AVALANCHE | Avalanche Control Quick Reference |

---

**Document Control:** OPS-015-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

