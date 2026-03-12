-- Batch 5 of 8
-- Documents 81 to 100 of 155
-- Run this in Supabase SQL Editor

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FLHA Review Procedure',
  'procedure',
  'HSE-003-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# FLHA REVIEW PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-003-PR |
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

This procedure describes how Operations Manager reviews submitted FLHAs for quality, trends, and opportunities to improve the hazard assessment process.

---

## 2. Scope

This procedure applies to:
- All submitted FLHAs
- Operations Manager review activities
- Quality feedback to field personnel

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-003 | Hazard Assessment Policy |
| HSE-002-PR | FLHA Procedure |
| FRM-FLHA | Field Level Hazard Assessment Form |

---

## 4. Procedure

### 4.1 FLHA Submission

- PICs shall submit completed FLHAs to Operations Manager weekly
- FLHAs may be submitted electronically or in hard copy
- All FLHAs for the week shall be submitted by end of day Friday

### 4.2 Review Process

Operations Manager shall review each FLHA for:

#### Completeness
| Check | Pass Criteria |
|:------|:--------------|
| Date and location recorded | Yes |
| All crew members listed | All participants included |
| Weather documented | Current conditions noted |
| Hazard checklist completed | All sections addressed |
| Hazards identified | Specific hazards listed (not just "none") |
| Controls documented | Clear controls for each hazard |
| Emergency info recorded | Hospital, contacts listed |
| All signatures present | All crew signed |

#### Quality
| Check | Good Quality Indicators |
|:------|:-----------------------|
| Site-specific content | Hazards reflect actual site conditions |
| Appropriate controls | Controls match hazard severity |
| Realistic risk assessment | Ratings are justified |
| Updated during work | Notes added if conditions changed |
| Crew participation evident | Multiple inputs reflected |

#### Red Flags
Watch for these quality issues:
- Identical FLHAs across multiple days/sites
- "None" for all hazard categories
- Generic controls that don''t address specific hazards
- Missing signatures or incomplete sections
- Risk ratings that don''t match hazard descriptions

### 4.3 Trend Analysis

Monthly, review FLHAs for trends:

| Analysis | What to Look For |
|:---------|:-----------------|
| Common hazards | Recurring hazards that might need FHA or procedure |
| Near-misses | Events documented on FLHAs |
| Quality patterns | PICs needing coaching |
| Seasonal trends | Changing hazards by season |
| Site-specific patterns | Client or location-specific issues |

### 4.4 Feedback

#### Individual Feedback
Provide feedback to PICs when:
- Quality issues are identified
- Good practices should be recognized
- Training opportunities exist

Deliver feedback:
- Promptly (within one week of submission)
- Constructively (focus on improvement)
- Specifically (cite examples)

#### Team Communication
Share with all field personnel:
- Good examples (anonymized if appropriate)
- Lessons learned from quality reviews
- Trends requiring attention
- Updates to FLHA process

### 4.5 Corrective Actions

If FLHA review reveals deficiencies:

| Issue | Action |
|:------|:-------|
| Minor quality gaps | Coaching conversation with PIC |
| Pattern of poor quality | Additional training; closer supervision |
| Hazard requiring FHA | Develop or update FHA |
| Systemic issue | Update FLHA form or procedure |
| Unreported incident | Follow incident investigation process |

### 4.6 Record Keeping

- Retain all FLHAs for minimum 3 years
- Organize by date and project
- Make accessible for reference and audits
- Digitize hard copies when practical

---

## 5. Review Summary

| Activity | Frequency | Responsibility |
|:---------|:----------|:---------------|
| FLHA submission | Weekly | PIC |
| Individual FLHA review | Within 1 week of receipt | Operations Manager |
| Trend analysis | Monthly | Operations Manager |
| Quality feedback | As needed | Operations Manager |
| Procedure review | Annual | Operations Manager |

---

## 6. Documentation

| Document | Purpose |
|:---------|:--------|
| FRM-FLHA | Field Level Hazard Assessment Form |
| FLHA Log | Tracking submissions and reviews |
| Feedback records | Documentation of coaching provided |

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Review FLHAs; analyze trends; provide feedback; maintain records |
| **PIC** | Submit quality FLHAs on time; respond to feedback |
| **Accountable Executive** | Review summary of FLHA quality; address systemic issues |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-003 | Hazard Assessment Policy |
| HSE-002-PR | FLHA Procedure |
| FRM-FLHA | Field Level Hazard Assessment Form |
| TCP-001 | Training & Competency Program Manual |

---

**Document Control:** HSE-003-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Worksite Inspection Procedure',
  'procedure',
  'HSE-004-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# WORKSITE INSPECTION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-004-PR |
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

This procedure describes how to conduct formal workplace inspections to identify hazards, verify control effectiveness, and ensure compliance with health and safety requirements.

---

## 2. Scope

This procedure applies to:
- Company facilities and office
- Company vehicles and equipment
- Regular workplace inspections
- All personnel conducting inspections

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-006 | Worksite Inspection Policy |
| BC OHS Regulation 3.5 | Regular inspections |
| FRM-INSP | Workplace Inspection Checklist |

---

## 4. Procedure

### 4.1 Inspection Schedule

| Inspection Type | Frequency | Responsible | Form |
|:----------------|:----------|:------------|:-----|
| Vehicle inspection | Weekly / before trips | Driver | FRM-VINSP |
| Equipment inspection | Before use | Operator | Per MCM |
| Facility inspection | Monthly | Operations Manager | FRM-INSP |
| Management review | Quarterly | Accountable Executive | N/A |

### 4.2 Pre-Inspection Preparation

Before conducting a formal inspection:
1. Review previous inspection reports
2. Note any outstanding corrective actions
3. Review recent incidents or concerns
4. Obtain inspection checklist
5. Arrange access to all areas

### 4.3 Conducting the Inspection

#### General Approach
- Follow a logical route (don''t skip areas)
- Use all senses (look, listen, smell)
- Check above, below, and behind
- Talk to workers about their concerns
- Take photos of deficiencies

#### Areas to Inspect

| Area | Items to Check |
|:-----|:---------------|
| **General** | Housekeeping, lighting, ventilation, signage |
| **Fire Safety** | Extinguishers, exits, storage of flammables |
| **Electrical** | Cords, outlets, panels, equipment |
| **First Aid** | Supplies, accessibility, expiry dates |
| **PPE** | Availability, condition, storage |
| **Storage** | Organization, stacking, hazardous materials |
| **Equipment** | Guards, condition, maintenance tags |
| **Vehicles** | Condition, safety equipment, cleanliness |
| **Ergonomics** | Workstations, lifting practices |

### 4.4 Using the Inspection Checklist

The inspection checklist (FRM-INSP) includes:
- Standard items organized by category
- Space for observations
- Risk rating for deficiencies
- Space for corrective actions

For each item:
- Mark satisfactory, unsatisfactory, or N/A
- Note specific observations
- Rate risk level of deficiencies
- Assign corrective action if needed

### 4.5 Rating Deficiencies

| Level | Description | Response |
|:------|:------------|:---------|
| **Critical** | Immediate danger to health/safety | Stop work; correct immediately |
| **Major** | Significant hazard; could cause injury | Correct within 24 hours; interim controls |
| **Minor** | Low risk; could become worse | Correct within 7 days |

### 4.6 Corrective Actions

For each deficiency, document:
- Description of the deficiency
- Location
- Risk level
- Corrective action required
- Person responsible
- Target completion date

### 4.7 Post-Inspection

After completing the inspection:
1. Complete the inspection form
2. Review findings with responsible persons
3. Communicate critical/major items immediately
4. Enter corrective actions into tracking system
5. File completed inspection report
6. Follow up on corrective action completion

### 4.8 Corrective Action Follow-Up

Operations Manager shall:
- Track all open corrective actions
- Verify completion by target dates
- Escalate overdue items
- Close items when verified complete
- Report status at management meetings

### 4.9 Vehicle Inspection

Vehicle inspections shall check:

| Category | Items |
|:---------|:------|
| **Exterior** | Lights, tires, mirrors, body damage, cleanliness |
| **Interior** | Seats, seatbelts, controls, gauges |
| **Safety Equipment** | First aid kit, fire extinguisher, emergency kit |
| **Fluids** | Oil, coolant, washer fluid |
| **Documentation** | Registration, insurance, inspection stickers |

Report deficiencies before operating the vehicle.

---

## 5. Inspection Documentation

| Document | Retention |
|:---------|:----------|
| Facility inspection reports | 3 years |
| Vehicle inspection logs | 3 years |
| Corrective action records | 3 years after closure |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Conduct monthly inspections; track corrective actions |
| **Accountable Executive** | Review inspection summaries; ensure resources for corrections |
| **All Workers** | Report hazards; participate in inspections; correct deficiencies |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-006 | Worksite Inspection Policy |
| FRM-INSP | Workplace Inspection Checklist |
| FRM-VINSP | Vehicle Inspection Form |
| MCM-003-PR | Pre-Flight Inspection Procedure |

---

**Document Control:** HSE-004-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Emergency Response Procedure',
  'procedure',
  'HSE-005-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# EMERGENCY RESPONSE PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-005-PR |
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

This procedure describes the steps for responding to emergency situations during Aeria Solutions operations, ensuring the safety of all personnel and effective management of emergencies.

---

## 2. Scope

This procedure applies to:
- All Aeria Solutions operations
- All types of emergencies
- All personnel, contractors, and visitors

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-007 | Emergency Response Policy |
| SMS-002 | Emergency Response Program |
| OPS-011-PR | Emergency Procedures (RPAS) |

---

## 4. Emergency Response Principles

### 4.1 Priority Order
1. **Life Safety** — Protect human life
2. **Incident Stabilization** — Prevent escalation
3. **Property/Environment** — Minimize damage
4. **Evidence Preservation** — Support investigation

### 4.2 General Response Steps

For any emergency:
1. **ASSESS** — What is happening? Is it safe to approach?
2. **ALERT** — Warn others; call for help
3. **ACT** — Take action within your capability
4. **ACCOUNT** — Ensure all personnel are safe
5. **ASSIST** — Support emergency responders

---

## 5. Specific Emergency Procedures

### 5.1 Medical Emergency

**Signs:** Injury, illness, unconsciousness, difficulty breathing, chest pain, severe bleeding

**Steps:**
1. Ensure scene is safe
2. Do not move the person unless in immediate danger
3. Call 911 (or local emergency number)
4. Provide first aid within your training
5. Send someone to guide emergency responders
6. Stay with the person until help arrives
7. Notify Operations Manager

**Information for 911:**
- Your location (address, GPS coordinates, landmarks)
- Nature of emergency
- Number of people involved
- Condition of injured person(s)
- Hazards present
- Your callback number

### 5.2 Fire

**Steps:**
1. **ALERT** — Yell "FIRE"; activate alarm if present
2. **EVACUATE** — Leave the building/area immediately
3. **CALL 911** — From a safe location
4. **ASSEMBLE** — Go to designated muster point
5. **ACCOUNT** — Verify all personnel present
6. **DO NOT RE-ENTER** — Until cleared by fire department

**If fire is small and you are trained:**
- Use fire extinguisher (PASS method)
- Pull the pin
- Aim at base of fire
- Squeeze the handle
- Sweep side to side
- If fire not controlled in 30 seconds, evacuate

### 5.3 Severe Weather

**Thunderstorm/Lightning:**
1. Cease outdoor operations
2. Seek shelter in vehicle or building
3. Stay away from tall objects, water, metal structures
4. Wait 30 minutes after last thunder before resuming

**High Winds:**
1. Secure loose equipment
2. Cease RPAS operations per wind limits
3. Seek shelter from flying debris
4. Wait for conditions to improve

**Extreme Heat/Cold:**
See HSE-013-PR Heat and Cold Stress Procedure

### 5.4 Vehicle Accident

**Steps:**
1. Stop immediately
2. Turn on hazard lights
3. Assess injuries
4. Call 911 if injuries or significant damage
5. Move vehicles if safe and blocking traffic
6. Exchange information with other parties
7. Take photos of damage and scene
8. Notify Operations Manager
9. Do not admit fault

### 5.5 RPAS Emergency

See OPS-011-PR Emergency Procedures (RPAS) for:
- Flyaway/lost link
- Crash/uncontrolled landing
- Battery fire
- Near mid-air collision

### 5.6 Wildlife Encounter

See HSE-015-PR Wildlife Safety Procedure for:
- Bear encounters
- Cougar encounters
- Other wildlife emergencies

### 5.7 Hostile Person/Security Threat

**Steps:**
1. Do not confront the person
2. Move away calmly
3. Alert others discreetly if possible
4. Call 911 from a safe location
5. If unable to leave:
   - Lock/barricade door
   - Turn off lights
   - Silence phones
   - Stay quiet and out of sight
6. Follow instructions of law enforcement

---

## 6. Site-Specific Emergency Information

Before work at any site, document:

| Item | Information to Document |
|:-----|:-----------------------|
| **Emergency Services** | 911 or local numbers |
| **Nearest Hospital** | Name, address, route, distance |
| **Muster Point** | Where to assemble in evacuation |
| **Site Contact** | Client emergency contact |
| **Communication** | Cell coverage; backup method |
| **Egress Routes** | How to evacuate the site |

Document this information on the FLHA.

---

## 7. Emergency Contact Card

All field personnel shall carry FRM-EMER Emergency Contact Card with:
- 911
- Poison Control: 1-800-567-8911 (BC)
- WorkSafeBC: 1-888-621-7233
- Operations Manager contact
- Accountable Executive contact
- Company office number

---

## 8. Post-Emergency Actions

After any emergency:
1. Ensure all personnel are accounted for
2. Provide ongoing care as needed
3. Secure the scene/equipment
4. Notify Operations Manager immediately
5. Do not discuss with media (refer to Accountable Executive)
6. Complete incident report
7. Participate in investigation
8. Attend debriefing session

---

## 9. Emergency Equipment

### Field Operations Kit
- First aid kit (appropriate level)
- Fire extinguisher
- Emergency contact information
- Communication device(s)
- Bear spray (wildlife areas)
- Emergency blanket
- Flashlight
- Water

### Verify Before Each Operation
- Equipment is present
- Equipment is in working condition
- All personnel know location of equipment

---

## 10. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC (On-Scene)** | Lead emergency response; direct crew; communicate with responders |
| **Operations Manager** | Coordinate support; notify stakeholders; manage post-incident |
| **Accountable Executive** | Handle media; coordinate with authorities; support investigation |
| **All Workers** | Follow procedures; assist as directed; report fully |

---

## 11. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-007 | Emergency Response Policy |
| OPS-011-PR | Emergency Procedures (RPAS) |
| HSE-012 | First Aid Policy |
| HSE-008 | Incident Investigation Policy |
| FRM-EMER | Emergency Contact Card |

---

**Document Control:** HSE-005-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Incident Investigation Procedure',
  'procedure',
  'HSE-006-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# INCIDENT INVESTIGATION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-006-PR |
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

This procedure describes the steps for investigating workplace incidents and near-misses to determine root causes and prevent recurrence.

---

## 2. Scope

This procedure applies to:
- All incidents causing or potentially causing injury or damage
- All near-misses with significant potential
- All personnel involved in investigation

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-008 | Incident Investigation Policy |
| SMS-005 | Occurrence Reporting Policy |
| FRM-INCINV | Incident Investigation Report Form |

---

## 4. Procedure

### 4.1 Immediate Response

**At the Scene:**
1. Ensure safety of all personnel
2. Provide first aid / medical attention
3. Call emergency services if needed
4. Secure the scene (do not disturb evidence)
5. Take photographs before anything is moved
6. Identify witnesses

**Notifications:**
| Incident Type | Notify | Timeframe |
|:--------------|:-------|:----------|
| Any injury | Supervisor/PIC → Operations Manager | Immediately |
| Serious injury | WorkSafeBC | Immediately (phone) |
| Aviation occurrence | Transport Canada | Per CARs |
| Property damage >$500 | Operations Manager | Same day |
| Near-miss (high potential) | Operations Manager | Same day |

### 4.2 Scene Preservation

Preserve the scene by:
- Barricading the area
- Preventing equipment from being moved
- Securing tools and materials involved
- Restricting access to essential personnel

Scene may only be released by:
- Operations Manager (minor incidents)
- WorkSafeBC (serious injuries)
- Transport Canada (aviation occurrences)

### 4.3 Evidence Collection

#### Physical Evidence
- Photographs (overall scene, specific items, measurements)
- Equipment involved (secure for examination)
- PPE worn (document condition)
- Environmental samples if relevant
- Measurements and sketches

#### Documentary Evidence
- FLHA from the day
- Training records
- Equipment maintenance records
- Applicable procedures and FHAs
- Work schedules and logs
- Previous incident reports

#### Witness Statements
- Interview witnesses individually
- Record statements promptly (before memories fade)
- Ask open-ended questions
- Document facts, not opinions
- Have witness review and sign statement

### 4.4 Investigation Process

#### Step 1: Gather Facts
Answer these questions:
- **Who** was involved?
- **What** happened?
- **When** did it happen?
- **Where** did it happen?
- **How** did it happen?

Focus on facts, not assumptions.

#### Step 2: Identify Causes

**Immediate Causes:** Direct actions or conditions that caused the incident

| Category | Examples |
|:---------|:---------|
| **Unsafe Acts** | Operating without authority, removing guards, improper lifting |
| **Unsafe Conditions** | Inadequate guarding, defective equipment, poor housekeeping |

**Root Causes:** Why the immediate causes existed

Use the "5 Whys" technique:
1. Why did [event] happen? Because [reason 1]
2. Why did [reason 1] exist? Because [reason 2]
3. Why did [reason 2] exist? Because [reason 3]
4. Continue until you reach manageable, correctable causes

Consider these categories:
- **Management Systems:** Policies, procedures, supervision
- **Equipment:** Design, maintenance, selection
- **Environment:** Conditions, layout, weather
- **Human Factors:** Training, fatigue, communication

#### Step 3: Determine Corrective Actions

For each root cause:
- Identify corrective action(s)
- Use hierarchy of controls
- Assign responsibility
- Set target completion date
- Define how completion will be verified

**Effective corrective actions:**
- Address root causes, not just symptoms
- Are specific and measurable
- Have clear ownership
- Have realistic timelines
- Prevent recurrence, not just repeat

### 4.5 Investigation Report

Complete FRM-INCINV including:

| Section | Content |
|:--------|:--------|
| **Header** | Date, location, report number |
| **Description** | What happened (factual narrative) |
| **Injuries/Damage** | Nature and extent |
| **Immediate Causes** | Unsafe acts and conditions |
| **Root Causes** | Analysis using 5 Whys or similar |
| **Contributing Factors** | Other relevant factors |
| **Corrective Actions** | Actions, owners, deadlines |
| **Recommendations** | Broader improvements suggested |
| **Attachments** | Photos, statements, documents |

### 4.6 Review and Approval

| Incident Type | Review By | Approve By |
|:--------------|:----------|:-----------|
| Minor incident | Operations Manager | Operations Manager |
| Lost-time / significant | Operations Manager | Accountable Executive |
| Serious / fatality | External review | Accountable Executive |

### 4.7 Corrective Action Tracking

Operations Manager shall:
- Log all corrective actions in tracking system
- Follow up on target dates
- Verify completion and effectiveness
- Close actions when verified
- Report status monthly to Accountable Executive

### 4.8 Communication

Share lessons learned:
- Toolbox talks / safety meetings
- Safety alerts for significant findings
- Update FHAs if new hazards identified
- Update procedures if gaps found
- Annual trend analysis

Maintain confidentiality regarding:
- Medical information
- Disciplinary matters
- Legal proceedings

---

## 5. Timelines

| Activity | Timeframe |
|:---------|:----------|
| Immediate notification | Upon occurrence |
| Scene secured | Upon occurrence |
| Investigation started | Within 24 hours |
| Basic report completed | Within 72 hours |
| Full report completed | Within 2 weeks |
| Corrective actions initiated | Per assigned timelines |

---

## 6. Documentation

| Document | Retention |
|:---------|:----------|
| Investigation reports | 10 years |
| Witness statements | 10 years |
| Photographs | 10 years |
| Corrective action records | 5 years after closure |

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Secure scene; notify; provide information; assist investigation |
| **Operations Manager** | Lead investigation; complete report; track corrective actions |
| **Accountable Executive** | Review serious incidents; approve reports; ensure resources |
| **All Workers** | Report immediately; cooperate with investigation; provide statements |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-008 | Incident Investigation Policy |
| FRM-INCINV | Incident Investigation Report Form |
| FRM-WITNESS | Witness Statement Form |
| SMS-004-PR | Internal Reporting Procedure |

---

**Document Control:** HSE-006-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'PPE Program Procedure',
  'procedure',
  'HSE-007-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# PPE PROGRAM PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-007-PR |
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

This procedure describes the selection, provision, use, inspection, and maintenance of personal protective equipment (PPE) for Aeria Solutions operations.

---

## 2. Scope

This procedure applies to:
- All PPE used by Aeria Solutions personnel
- Selection of new PPE
- Ongoing PPE management

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-009 | Personal Protective Equipment Policy |
| BC OHS Regulation Part 8 | PPE requirements |
| CSA Standards | PPE certification standards |

---

## 4. Procedure

### 4.1 PPE Selection

When selecting PPE:

1. **Identify the Hazard**
   - Review FHAs and FLHAs
   - Consider all exposure types (impact, chemical, thermal, etc.)
   - Assess severity and duration of exposure

2. **Evaluate Controls**
   - Confirm PPE is appropriate level of control
   - Verify higher-level controls have been considered

3. **Select Appropriate PPE**
   - Match protection level to hazard
   - Ensure certification to applicable standard
   - Consider comfort, fit, and usability
   - Ensure compatibility with other PPE

4. **Verify Standards**

| PPE Type | Applicable Standard |
|:---------|:--------------------|
| Head protection | CSA Z94.1 |
| Eye/face protection | CSA Z94.3 |
| Hearing protection | CSA Z94.2 |
| Safety footwear | CSA Z195 |
| High-visibility | CSA Z96 |
| Fall protection | CSA Z259 series |
| Respiratory protection | CSA Z94.4 |

### 4.2 PPE Procurement

Operations Manager shall:
- Purchase PPE meeting required standards
- Maintain supplier documentation
- Verify certification markings
- Track inventory and condition
- Order replacement stock as needed

### 4.3 PPE Issue and Sizing

When issuing PPE:
1. Determine correct size for worker
2. Ensure proper fit
3. Demonstrate proper use
4. Document issue in training/equipment records
5. Inform worker of inspection and care requirements

### 4.4 Standard PPE Kits

#### Field Operations Kit (each worker)
- Hard hat (CSA Z94.1 Class E)
- Safety glasses (CSA Z94.3)
- High-visibility vest (CSA Z96 Class 2)
- Work gloves (appropriate for task)
- Safety footwear (CSA Z195)
- Hearing protection (available for use)

#### Vehicle Kit
- First aid kit
- Fire extinguisher
- Reflective triangles
- Extra PPE (spare glasses, hearing protection)

### 4.5 PPE Inspection

#### Daily Inspection (Before Each Use)
Workers shall inspect PPE for:

| PPE | Check For |
|:----|:----------|
| **Hard Hat** | Cracks, dents, degradation, chinstrap condition |
| **Eye Protection** | Scratches, cracks, fit, seal (goggles) |
| **High-Vis** | Fading, tears, retroreflective condition |
| **Gloves** | Holes, tears, contamination, flexibility |
| **Footwear** | Sole wear, damage, toe cap integrity |
| **Hearing Protection** | Cleanliness, seal condition, cushion integrity |

If defects found: Remove from service, report, replace.

#### Periodic Inspection

| PPE | Inspection Frequency | Responsibility |
|:----|:--------------------|:---------------|
| Hard hats | Monthly visual; replace per manufacturer | Worker / Operations Manager |
| Fall protection | Before each use + annual formal | Competent person |
| Respiratory equipment | Before each use + annual fit test | Competent person |
| General PPE inventory | Quarterly | Operations Manager |

### 4.6 PPE Care and Maintenance

| PPE | Care Requirements |
|:----|:------------------|
| **Hard Hat** | Clean with mild soap; store away from heat/UV; replace if dropped from height |
| **Eye Protection** | Clean lenses; store in case; replace if scratched |
| **High-Vis** | Wash per manufacturer instructions; do not bleach |
| **Gloves** | Clean or replace as needed; store dry |
| **Footwear** | Clean; dry after use; condition leather |

### 4.7 PPE Replacement

Replace PPE when:
- Damaged or worn beyond safe use
- Contaminated beyond cleaning
- Past manufacturer-recommended service life
- After any impact or significant event
- No longer fits properly

**Hard Hat Replacement:**
- Replace after any significant impact
- Replace if suspension is damaged
- Typical service life: 2-5 years depending on use/exposure

### 4.8 PPE Training

Workers shall receive training on:
- When PPE is required
- What PPE is required for their tasks
- Proper donning and doffing
- Adjustment for proper fit
- Inspection procedures
- Care and maintenance
- Limitations of PPE
- Reporting defects

Document training in worker records.

### 4.9 PPE Records

Maintain records of:
- PPE issued to workers
- Training provided
- Inspection results (formal inspections)
- Replacement history
- Supplier certifications

---

## 5. Specific PPE Requirements

### 5.1 Hearing Protection Selection

| Noise Level | Protection |
|:------------|:-----------|
| 85-89 dBA | Plugs (NRR 15+) available |
| 90-99 dBA | Plugs (NRR 20+) required |
| 100+ dBA | Plugs + muffs required |

### 5.2 Eye Protection Selection

| Hazard | Protection |
|:-------|:-----------|
| Impact (flying particles) | Safety glasses (Z87.1) |
| Chemical splash | Goggles |
| Welding/cutting | Appropriate shade lens |
| UV exposure | UV-rated lens |

### 5.3 Hand Protection Selection

| Hazard | Glove Type |
|:-------|:-----------|
| General handling | Leather or synthetic work gloves |
| Cut hazards | Cut-resistant gloves (rated level) |
| Chemical | Chemical-resistant (material specific to chemical) |
| Heat | Heat-resistant gloves |

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Procure PPE; track inventory; provide training; maintain records |
| **PIC** | Ensure crew has required PPE; enforce use |
| **Workers** | Use PPE properly; inspect daily; report defects; maintain PPE |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-009 | Personal Protective Equipment Policy |
| FRM-PPEINSP | PPE Inspection Form |
| FHA Series | PPE requirements by task |
| TCP-001 | Training & Competency Program Manual |

---

**Document Control:** HSE-007-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Spill Response Procedure',
  'procedure',
  'HSE-008-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# SPILL RESPONSE PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-008-PR |
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

This procedure describes the steps for preventing, responding to, and reporting spills of fuel, chemicals, and other hazardous materials during Aeria Solutions operations.

---

## 2. Scope

This procedure applies to:
- All Aeria Solutions operations involving fuels or hazardous materials
- All personnel handling potentially hazardous materials
- All worksites including field locations

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-011 | Environmental Protection Policy |
| BC Spill Reporting Regulation | Reportable quantities and procedures |
| Transport of Dangerous Goods Regulation | Transportation requirements |

---

## 4. Procedure

### 4.1 Spill Prevention

#### Storage and Transport
- Store fuels in approved containers only
- Keep containers closed when not in use
- Inspect containers for damage before transport
- Secure containers during transport
- Store away from drains, water, and sensitive areas

#### Refueling Operations
- Use secondary containment when practical
- Use drip trays under fuel connections
- Never leave refueling unattended
- Have absorbent materials readily available
- Check for leaks before, during, and after

#### Battery Handling
- Transport lithium batteries per manufacturer guidelines
- Use appropriate containers
- Never dispose of batteries in regular waste
- Keep batteries away from metal objects

### 4.2 Spill Response

#### General Response Steps

**STOP** — Stop the source of the spill if safe to do so
**ASSESS** — Assess the hazard and spill size
**CONTAIN** — Prevent spill from spreading
**ABSORB** — Clean up using appropriate materials
**REPORT** — Notify appropriate personnel and authorities

#### Step-by-Step Response

**Step 1: Personal Safety**
- Do not approach if you smell strong fumes
- Stay upwind of vapors
- Wear appropriate PPE (gloves, eye protection)
- Do not create ignition sources near fuel spills

**Step 2: Stop the Source**
If safe to do so:
- Close valve or tap
- Upright tipped container
- Move leaking container to containment

**Step 3: Contain the Spill**
- Use absorbent booms or materials to surround spill
- Block drains if spill could enter
- Dam with soil if necessary in field
- Prevent spread to water bodies

**Step 4: Absorb/Clean Up**
For small spills:
- Apply absorbent material (pads, loose absorbent)
- Allow time to absorb
- Collect contaminated absorbent
- Place in appropriate container for disposal
- Clean residue

For large spills:
- Evacuate if necessary
- Call for professional response
- Maintain containment until help arrives

**Step 5: Disposal**
- Contaminated absorbent is hazardous waste
- Do not dispose in regular garbage
- Transport to approved disposal facility
- Document disposal

### 4.3 Spill Reporting

#### Internal Reporting
| Spill Size | Report To | Timing |
|:-----------|:----------|:-------|
| Any spill | Supervisor/PIC | Immediately |
| >5 liters | Operations Manager | Same day |
| Any to water | Operations Manager + External | Immediately |

#### External Reporting (BC)

**Report to Provincial Emergency Program (PEP):** 1-800-663-3456

**Reportable Spills Include:**
- Any quantity to water
- >100 liters gasoline/diesel to land
- >200 liters motor oil to land
- Any hazardous material above schedule threshold
- Any spill that could harm environment or health

**Information to Report:**
- Your name and callback number
- Company name
- Location of spill (GPS if possible)
- Material spilled
- Estimated quantity
- Time of spill
- Cause if known
- Actions taken
- Injuries or damage

### 4.4 Spill Kit Contents

#### Standard Field Spill Kit
| Item | Quantity |
|:-----|:---------|
| Absorbent pads | 10-20 |
| Absorbent boom (3" x 10'') | 2 |
| Loose absorbent (bag) | 1 (5L) |
| Nitrile gloves | 2 pairs |
| Safety glasses | 1 pair |
| Disposal bags | 3 |
| Instructions card | 1 |

#### Location
- Each field vehicle
- Each fuel storage location
- Equipment storage area

### 4.5 Documentation

Complete FRM-SPILL Spill Report Form including:
- Date, time, location
- Material spilled
- Estimated quantity
- Cause
- Containment and cleanup actions
- Disposal method
- Reporting made (internal and external)
- Corrective actions to prevent recurrence

---

## 5. Specific Materials

### 5.1 Gasoline/Diesel
- Highly flammable (gasoline) / combustible (diesel)
- Eliminate ignition sources
- Do not use water to clean up
- Use absorbent materials
- Collect for hazardous waste disposal

### 5.2 Lithium Battery Electrolyte
- Corrosive and potentially flammable
- Evacuate if battery is damaged/smoking
- Do not touch with bare hands
- Allow to stabilize before cleanup
- Contact Operations Manager for guidance

### 5.3 Hydraulic Fluid
- Slippery and flammable at high temperatures
- Absorb with appropriate materials
- Clean residue to prevent slip hazard
- Dispose as hazardous waste

---

## 6. Spill Kit Inspection

Monthly inspection by Operations Manager:
- All contents present
- Materials not expired or degraded
- Container intact
- Location accessible
- Instructions legible

Document inspection on FRM-INSPKIT.

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Maintain spill kits; report major spills; manage cleanup; track disposal |
| **PIC** | Respond to spills; report; lead cleanup; ensure kit on-site |
| **All Workers** | Follow prevention measures; respond if trained; report immediately |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-011 | Environmental Protection Policy |
| FRM-SPILL | Spill Report Form |
| FRM-INSPKIT | Spill Kit Inspection Log |
| SDS Library | Safety Data Sheets |

---

**Document Control:** HSE-008-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Waste Management Procedure',
  'procedure',
  'HSE-009-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# WASTE MANAGEMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-009-PR |
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

This procedure describes requirements for managing and disposing of waste generated during Aeria Solutions operations, with emphasis on protecting the environment and complying with regulations.

---

## 2. Scope

This procedure applies to:
- All waste generated by Aeria Solutions operations
- All personnel handling or generating waste
- Office, field, and client site operations

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-011 | Environmental Protection Policy |
| BC Hazardous Waste Regulation | Hazardous waste requirements |
| BC Recycling Regulation | Recycling requirements |

---

## 4. Procedure

### 4.1 Waste Categories

| Category | Examples | Handling |
|:---------|:---------|:---------|
| **General Waste** | Food wrappers, non-recyclable packaging, general garbage | Regular disposal |
| **Recyclable** | Paper, cardboard, plastics 1-7, metal cans, glass | Recycling program |
| **Hazardous** | Batteries, fuel, chemicals, contaminated materials | Special disposal |
| **Electronic** | Computers, phones, circuit boards | E-waste recycling |

### 4.2 Pack In / Pack Out

For all field operations:
- **All materials brought to a site must be removed**
- Leave no trace of operations
- Do not bury or abandon waste
- Do not dispose of waste in client receptacles without permission

### 4.3 General Waste

**At Field Sites:**
- Collect all garbage in bags
- Secure bags to prevent wildlife access
- Transport to vehicle
- Dispose at appropriate facility or office

**At Office:**
- Use designated waste receptacles
- Empty regularly to prevent odors and pests

### 4.4 Recyclable Materials

**Recyclable items (BC):**
- Paper and cardboard
- Plastics #1-7
- Metal cans
- Glass containers
- Clean aluminum foil

**Not recyclable:**
- Food-contaminated items
- Plastic bags (take to depot)
- Styrofoam
- Mixed materials

Rinse food containers before recycling.

### 4.5 Hazardous Waste

#### Identification
Hazardous waste includes:
- Lithium batteries (all types)
- Lead-acid batteries
- Used oil and fuel
- Contaminated absorbent
- Chemical containers with residue
- Fluorescent bulbs
- Aerosol cans (pressurized)

#### Handling
- Segregate from other waste
- Store in appropriate containers
- Label clearly
- Store in secure, well-ventilated area
- Do not mix different hazardous wastes
- Keep containers closed

#### Disposal
- **Batteries:** Return to depot (many retailers accept)
- **Used oil/fuel:** Take to recycling depot
- **Contaminated absorbent:** Dispose through hazardous waste facility
- **Chemical containers:** Return to supplier or hazardous waste facility
- **E-waste:** Take to e-waste recycler

Never dispose of hazardous waste in:
- Regular garbage
- Down drains or sewers
- On the ground
- By burning

### 4.6 Battery Management

**Lithium Batteries (LiPo, Li-ion):**
| Condition | Action |
|:----------|:-------|
| Good condition | Store safely; dispose at battery recycling depot |
| Damaged/swollen | Isolate in fireproof container; contact for special disposal |
| End of life | Discharge and recycle at depot |

**Battery Storage:**
- Store in cool, dry location
- Keep away from metal objects
- Use battery bags for LiPo
- Check regularly for swelling

### 4.7 Electronic Waste

- Old computers, monitors, phones, tablets
- Circuit boards and electronic components
- Cables and chargers
- RPAS components at end of life

**Disposal:**
- Take to licensed e-waste recycler
- Remove data storage before disposal
- Document disposal of equipment containing company data

### 4.8 Client Site Requirements

Before disposing of any waste at client sites:
- Ask permission
- Follow client waste segregation requirements
- Use designated receptacles
- Do not dispose of hazardous waste in client containers
- Take hazardous waste off-site

### 4.9 Documentation

Maintain records of:
- Hazardous waste disposal (receipts)
- Quantities disposed
- Disposal facilities used
- Special waste manifests (if required)

Retain hazardous waste disposal records for 5 years.

---

## 5. Waste Reduction

Priority order for waste management:
1. **Reduce** — Use less; avoid excess packaging
2. **Reuse** — Reuse containers and materials where practical
3. **Recycle** — Maximize recycling
4. **Dispose** — Proper disposal as last resort

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Arrange hazardous waste disposal; maintain records; procure recycling services |
| **PIC** | Ensure waste collected at sites; transport back properly |
| **All Workers** | Segregate waste properly; pack out all waste; report issues |

---

## 7. Disposal Locations

| Waste Type | Disposal Option |
|:-----------|:----------------|
| General/recycling | Local municipal service / transfer station |
| Batteries | Return-It depot, retailers |
| Used oil/fuel | Recycling depot, oil change facilities |
| E-waste | E-waste recyclers, Return-It |
| Hazardous chemicals | Municipal hazardous waste depot |

Contact Operations Manager for specific locations and arrangements.

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-011 | Environmental Protection Policy |
| HSE-008-PR | Spill Response Procedure |
| ADM-001-PR | Record Retention Procedure |

---

**Document Control:** HSE-009-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'First Aid Procedure',
  'procedure',
  'HSE-010-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# FIRST AID PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-010-PR |
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

This procedure describes the management of first aid services, supplies, and response for Aeria Solutions operations.

---

## 2. Scope

This procedure applies to:
- All Aeria Solutions worksites
- First aid kit requirements and maintenance
- First aid response procedures
- First aid training requirements

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-012 | First Aid Policy |
| BC OHS Regulation Part 3 | First aid requirements |
| BC OHS Regulation Schedule 3-A | Equipment and supplies |

---

## 4. Procedure

### 4.1 First Aid Requirements Determination

Operations Manager shall complete first aid assessment considering:

| Factor | Consideration |
|:-------|:--------------|
| Number of workers | More workers = higher level kit and attendant |
| Distance from hospital | >20 min = higher level requirements |
| Hazard level | Higher hazard = higher level requirements |
| Shift work | 24-hour coverage if applicable |

### 4.2 Minimum Requirements

| Situation | Kit Level | First Aider |
|:----------|:----------|:------------|
| Office (1-10 workers, low hazard) | Level 1 | OFA Level 1 |
| Field crew (2-5 workers) | Level 1 | OFA Level 1 |
| Field crew (>20 min from hospital) | Level 2 | OFA Level 2 recommended |
| Multiple crews | One kit per crew | One first aider per crew |

At least one person with appropriate certification must be present during all operations.

### 4.3 First Aid Kit Contents

#### Level 1 Kit (per OHS Schedule 3-A)
| Item | Quantity |
|:-----|:---------|
| First aid manual | 1 |
| Sterile adhesive bandages (assorted) | 12 |
| Sterile gauze pads 3"x3" | 6 |
| Sterile gauze pads 4"x4" | 6 |
| Conforming gauze bandage | 2 |
| Triangular bandage | 2 |
| Wound cleaning towelettes | 6 |
| Adhesive tape 1" | 1 roll |
| Non-latex exam gloves | 2 pairs |
| Scissors | 1 |
| Tweezers | 1 |
| CPR barrier device | 1 |
| First aid record forms | — |

Additional items recommended for field work:
- Emergency blanket
- Tensor bandage
- Cold pack
- Eye wash (saline)
- Antihistamine cream
- Burn gel/dressing

### 4.4 First Aid Kit Locations

| Location | Kit Type |
|:---------|:---------|
| Each company vehicle | Level 1 |
| Office/shop | Level 1 |
| Each field kit/RPAS kit | Level 1 |
| Remote operations | Level 2 (based on assessment) |

Kits shall be:
- Clearly marked with white cross on green background
- Readily accessible
- Protected from contamination
- Known to all workers

### 4.5 First Aid Kit Inspection

**Monthly Inspection:**
1. Open kit and check all contents
2. Verify items present per checklist
3. Check expiry dates on medications/creams
4. Replace used or expired items
5. Complete FRM-FAINSP inspection log
6. Return kit to proper location

**After Each Use:**
- Restock used items immediately
- Clean or replace contaminated items
- Document treatment on first aid record

### 4.6 First Aid Response

#### Step 1: Scene Safety
- Ensure scene is safe before approaching
- Wear gloves before contact with blood/body fluids
- Do not move seriously injured person unless in danger

#### Step 2: Assess the Person
- Check responsiveness
- Call for help if needed
- Begin primary survey (ABCs)
  - Airway: Is it open?
  - Breathing: Are they breathing?
  - Circulation: Is there severe bleeding?

#### Step 3: Call for Help
**Call 911 if:**
- Person is unconscious
- Difficulty breathing
- Severe bleeding not controlled
- Suspected heart attack, stroke
- Severe allergic reaction
- Suspected spinal injury
- Any life-threatening condition

**Provide:**
- Location (address, GPS, landmarks)
- Nature of emergency
- Number of people injured
- Current condition
- Your callback number

#### Step 4: Provide First Aid
- Act within your training level
- Stay calm and reassure the person
- Continue care until help arrives or person recovers
- Do not give food or water to seriously injured

#### Step 5: Documentation
Complete FRM-FAR First Aid Record:
- Date and time
- Injured worker''s name
- Nature of injury/illness
- First aid provided
- First aider''s name
- Follow-up actions

### 4.7 First Aid Training

**Training Requirements:**

| Certification | Who | Renewal |
|:--------------|:----|:--------|
| OFA Level 1 | All field workers | 3 years |
| OFA Level 2 | Designated for remote operations | 3 years |
| CPR-C | Encouraged for all | 1 year (skills) |

**Training Records:**
- Operations Manager maintains certification records
- Track expiry dates
- Arrange recertification before expiry

### 4.8 Remote Operations

For operations more than 20 minutes from a hospital:
- Designate OFA Level 2 first aider if available
- Enhanced first aid kit
- Satellite communication or reliable backup
- Pre-plan evacuation route
- Consider emergency evacuation arrangements

Document emergency information on FLHA:
- Nearest hospital name and address
- Route and estimated time
- Emergency contact numbers
- Alternate evacuation methods

---

## 5. First Aid Records

| Record | Retention |
|:-------|:----------|
| First aid treatment records | 10 years |
| First aider certification copies | Duration of employment |
| Kit inspection logs | 3 years |

First aid records are confidential medical information.

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Complete first aid assessment; maintain kits; track certifications |
| **PIC** | Verify first aid kit present; verify first aider on crew; document emergency info |
| **First Aider** | Provide first aid; complete records; maintain certification |
| **All Workers** | Know first aid location; report injuries; support first aiders |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-012 | First Aid Policy |
| HSE-005-PR | Emergency Response Procedure |
| FRM-FAR | First Aid Record |
| FRM-FAINSP | First Aid Kit Inspection Log |

---

**Document Control:** HSE-010-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Fit for Duty Procedure',
  'procedure',
  'HSE-011-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# FIT FOR DUTY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-011-PR |
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

This procedure describes how to address fitness for duty concerns, including impairment, fatigue, and medical conditions that may affect safe work performance.

---

## 2. Scope

This procedure applies to:
- All Aeria Solutions personnel
- All operations, especially safety-sensitive duties
- Supervisors addressing fitness concerns

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-013 | Fit for Duty Policy |
| HSE-010 | Fatigue Management Policy |
| BC Human Rights Code | Duty to accommodate |

---

## 4. Procedure

### 4.1 Worker Self-Assessment

Before each shift, workers should honestly assess their fitness:

**Ask yourself:**
- Did I get adequate sleep (minimum 7 hours)?
- Am I feeling alert and capable?
- Have I consumed alcohol or cannabis within prohibited timeframes?
- Am I taking any medication that could impair performance?
- Am I experiencing illness that could affect my work?
- Am I experiencing stress or emotional distress?

**If the answer to any concern is YES:**
- Do not perform safety-sensitive duties until resolved
- Inform your supervisor
- Discuss appropriate action

### 4.2 Pre-Duty Clearance Periods

| Substance | Minimum Time Before Safety-Sensitive Duty |
|:----------|:------------------------------------------|
| Alcohol | 8 hours |
| Cannabis (smoked/vaped) | 24 hours |
| Cannabis (ingested) | 28 hours |
| Impairing medications | As per medical guidance (disclose to supervisor) |

### 4.3 Reporting Impairment Concerns

**Workers shall report to their supervisor if:**
- They are not fit for duty
- They observe a coworker who may be impaired
- They need accommodation for a medical condition

**Reports should include:**
- Nature of concern (general, not medical details)
- When it started
- Expected duration if known
- What support is needed

### 4.4 Supervisor Response to Fitness Concerns

#### Step 1: Observe and Document
If you suspect a worker may be impaired, note:
- Date and time
- Specific behaviors observed (be objective)
- Location and witnesses
- Any statements made by worker

#### Step 2: Private Conversation
- Meet with the worker privately
- Express concern, not accusation
- Describe specific observations
- Ask if there is a reason for the observed behavior
- Listen without judgment

**Sample approach:**
"I noticed [specific behavior]. I want to make sure you''re okay and able to work safely. Is there anything I should know about?"

#### Step 3: Assess Fitness

Based on conversation and observations:

| Assessment | Action |
|:-----------|:-------|
| Fit for duty | Document; continue work |
| Temporarily unfit (fatigue, minor illness) | Assign alternative duties or send home |
| Suspected impairment (substances) | Remove from safety-sensitive duties; arrange safe transport home |
| Medical concern | Discuss accommodation needs |

#### Step 4: Arrange Safe Transport

If worker cannot safely drive home:
- Arrange taxi or ride-share
- Have coworker drive them
- Contact family member
- Company will cover reasonable transport costs

**Do not allow impaired workers to drive.**

#### Step 5: Document and Report
- Complete documentation of observations and actions
- Report to Operations Manager
- Maintain confidentiality

### 4.5 Addressing Medication Concerns

When a worker discloses medication that may cause impairment:

1. **Accept general disclosure** (worker need not give medical details)
2. **Ask if medication affects ability to work safely**
3. **If uncertain, request medical documentation:**
   - Not diagnosis
   - Statement that worker can perform safety-sensitive duties
   - Any work restrictions recommended
4. **Determine appropriate action:**
   - If cleared for full duties: proceed
   - If restrictions apply: assign modified duties
   - If uncertain: seek HR/medical guidance

### 4.6 Return to Work After Impairment Incident

If worker was sent home due to impairment concerns:

| Situation | Return Requirement |
|:----------|:-------------------|
| Fatigue | Adequate rest (per HSE-010) |
| Minor illness | Recovery; fit for duties |
| Suspected substance impairment | Meeting with Operations Manager before return |
| Medical condition | Documentation of fitness from medical provider |

### 4.7 Support and Accommodation

Workers who seek help for substance use or medical conditions:
- Will be treated with dignity and respect
- Will not face discipline for seeking help
- Will be provided reasonable accommodation
- May be referred to external resources (EAP)

Accommodation may include:
- Modified duties
- Schedule adjustments
- Leave of absence
- Return-to-work planning

### 4.8 Disciplinary Considerations

Discipline may be considered for:
- Working while impaired after being warned
- Refusing to leave when directed
- Repeat violations of fit for duty requirements
- Deliberately providing false information

Discipline is not appropriate for:
- Self-reporting impairment
- Seeking help for substance issues
- Medical conditions

---

## 5. Confidentiality

All fitness for duty information is confidential:
- Share only on need-to-know basis
- Store records securely
- Do not discuss with other workers
- Medical information requires special protection

---

## 6. Documentation

| Document | Retention |
|:---------|:----------|
| Supervisor observation notes | 3 years |
| Medical fitness documentation | Duration of employment + 3 years |
| Accommodation records | Duration of employment + 3 years |

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Handle complex situations; arrange accommodation; maintain records |
| **PIC/Supervisor** | Observe; have conversations; arrange transport; document; report |
| **All Workers** | Self-assess; report concerns; cooperate with assessments |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-013 | Fit for Duty Policy |
| HSE-010 | Fatigue Management Policy |
| CRM-002 | Fatigue Risk Management |
| ADM-003 | Disciplinary Policy |

---

**Document Control:** HSE-011-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Refuse Unsafe Work Procedure',
  'procedure',
  'HSE-012-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# REFUSE UNSAFE WORK PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-012-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Accountable Executive |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

---

## 1. Purpose

This procedure describes the steps for workers to refuse work they believe is unsafe, and the process for resolving such refusals in accordance with BC law.

---

## 2. Scope

This procedure applies to:
- All Aeria Solutions personnel
- Contractors and subcontractors
- Any situation where a worker believes work is unsafe

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-018 | Refuse Unsafe Work Policy |
| BC Workers Compensation Act 3.12 | Right to refuse |
| BC OHS Regulation 3.12-3.13 | Refusal procedure |

---

## 4. Procedure

### 4.1 Worker''s Right

You have the right to refuse work if you have reasonable grounds to believe:
- The work would create an undue hazard to you or others
- Equipment, conditions, or practices are unsafe
- Required safety controls are not in place

You will not face discipline or reprisal for exercising this right.

### 4.2 Step-by-Step Refusal Process

#### Step 1: Stop and Inform

**Worker:**
1. Stop or refuse to start the unsafe work
2. Immediately inform your supervisor or PIC:
   - What work you are refusing
   - Why you believe it is unsafe
3. Remain at the worksite (unless unsafe to do so)
4. Do not perform the refused work

**What to Say:**
"I''m refusing to do [task] because I believe it''s unsafe. Specifically, [explain hazard/concern]."

#### Step 2: Immediate Investigation

**Supervisor/PIC:**
1. Thank the worker for reporting the concern
2. Do not pressure or coerce the worker
3. Investigate immediately with the worker present:
   - Examine the work area/equipment
   - Review relevant procedures and FHAs
   - Assess the identified hazard
   - Consider worker''s perspective
4. Document findings

#### Step 3: Attempt Resolution

**If supervisor determines work is safe:**
1. Explain to the worker:
   - What hazards were assessed
   - What controls make the work safe
   - Any additional measures implemented
2. Ask if the worker is now willing to perform the work
3. If worker agrees, work may proceed

**If supervisor determines work is unsafe:**
1. Do not allow anyone to perform the work
2. Implement necessary controls
3. Correct the hazard
4. Once corrected, reassess with worker

#### Step 4: Continued Refusal

If worker continues to believe work is unsafe after investigation:

**Worker:**
- You have the right to maintain your refusal
- You are not required to accept the supervisor''s conclusion
- Request escalation to Operations Manager

**Supervisor:**
- Do not force the worker to perform the work
- Contact Operations Manager immediately
- Assign the worker alternative duties if available
- Do not assign the refused work to another worker unless:
  - That worker has been informed of the refusal and reasons
  - That worker understands they also have the right to refuse

#### Step 5: Operations Manager Review

**Operations Manager:**
1. Review the situation with both parties
2. Conduct additional investigation if needed
3. Consult technical resources if necessary
4. Attempt to resolve the concern
5. Document all findings and actions

If still unresolved:
- Contact WorkSafeBC for assistance
- A prevention officer may be assigned to investigate

#### Step 6: WorkSafeBC Involvement

Either the worker or the employer may contact WorkSafeBC:
- **Phone:** 604-276-3100 (Vancouver) or 1-888-621-7233
- **After hours:** 604-273-7711

**Prevention Officer:**
- May investigate the situation
- Decision is binding (subject to appeal)
- Both parties must cooperate fully

### 4.3 Assignment to Other Workers

**Before assigning refused work to another worker, you must:**
1. Inform them that another worker has refused the work
2. Explain the reasons for the refusal
3. Explain that they also have the right to refuse
4. Document that this information was provided

**No worker shall be required to perform refused work** until the matter has been resolved.

### 4.4 During Investigation

**Worker:**
- Remain at the workplace (unless unsafe)
- Be available to participate in investigation
- May be assigned reasonable alternative work
- Continue to receive regular pay and benefits

**Supervisor:**
- Do not take or threaten disciplinary action
- Do not make negative comments about the refusal
- Document objectively
- Keep the matter confidential

### 4.5 After Resolution

Once the matter is resolved:
1. Communicate the outcome to all parties
2. Implement any required changes
3. Update FHAs or procedures if needed
4. Complete and file documentation
5. Monitor to ensure controls remain effective

---

## 5. Documentation

Complete FRM-RUW Refusal of Unsafe Work Report:
- Date, time, location
- Worker''s name
- Description of refused work
- Worker''s stated reasons
- Investigation findings
- Actions taken
- Resolution reached
- WorkSafeBC involvement (if any)
- Signatures

Retain documentation for minimum 3 years.

---

## 6. Contacts

| Contact | Information |
|:--------|:------------|
| Operations Manager | [Company contact] |
| Accountable Executive | [Company contact] |
| WorkSafeBC | 1-888-621-7233 |
| WorkSafeBC After Hours | 604-273-7711 |

---

## 7. Reprisal Protection

If you believe you have faced reprisal for refusing unsafe work:
1. Document the actions taken against you
2. Report to Accountable Executive immediately
3. You may also file a complaint with WorkSafeBC

Reprisal includes:
- Termination
- Discipline
- Demotion
- Threats
- Negative comments
- Reduced hours or duties
- Any adverse treatment

---

## 8. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Worker** | Report concern; participate in investigation; cooperate in resolution |
| **Supervisor/PIC** | Investigate promptly; protect worker rights; document; escalate if needed |
| **Operations Manager** | Review unresolved refusals; contact WorkSafeBC if needed; ensure no reprisal |
| **Accountable Executive** | Address reprisal claims; ensure policy compliance; final decision authority |

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-018 | Refuse Unsafe Work Policy |
| HSE-002 | Worker Rights & Responsibilities Policy |
| FRM-RUW | Refusal of Unsafe Work Report Form |

---

**Document Control:** HSE-012-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Heat Cold Stress Procedure',
  'procedure',
  'HSE-013-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# HEAT & COLD STRESS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-013-PR |
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

This procedure describes how to assess, prevent, and respond to heat and cold stress hazards during outdoor operations.

---

## 2. Scope

This procedure applies to:
- All outdoor field operations
- Work in uncontrolled temperature environments
- All seasons and climate conditions

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-015 | Heat & Cold Stress Policy |
| BC OHS Regulation 7.27-7.33 | Thermal exposure |
| Environment Canada | Humidex and wind chill calculations |

---

## 4. Pre-Work Assessment

### 4.1 Check Weather Conditions

Before outdoor work, check:
- Current temperature
- Forecast for work period
- Humidity (calculate humidex in summer)
- Wind speed (calculate wind chill in winter)
- Precipitation

**Resources:**
- Environment Canada weather
- Weather apps with humidex/wind chill

### 4.2 Document on FLHA

Include on FLHA:
- Current conditions
- Expected conditions during work
- Risk level (see tables below)
- Controls to be implemented
- Emergency response if needed

---

## 5. Heat Stress Procedures

### 5.1 Heat Risk Assessment

**Calculate Humidex:**
Use Environment Canada humidex chart or online calculator.

**Risk Levels:**

| Humidex | Risk | Work/Rest | Actions |
|:--------|:-----|:----------|:--------|
| <30 | Low | Normal work | Hydration available |
| 30-34 | Moderate | 50 min work / 10 min rest | Hydrate; provide shade |
| 35-39 | High | 45 min work / 15 min rest | Mandatory breaks; monitor workers |
| 40-44 | Very High | 30 min work / 30 min rest | Limit activity; close monitoring |
| 45+ | Extreme | Consider postponing | Cease work or extreme measures |

Adjust for:
- Physical exertion (increase risk one level)
- PPE/heavy clothing (increase risk one level)
- Unacclimatized workers (increase risk one level)

### 5.2 Heat Stress Prevention

**Hydration:**
- Provide unlimited cool water
- Encourage drinking before feeling thirsty
- Target: 250 mL (1 cup) every 20 minutes in heat
- Avoid caffeine and sugary drinks in extreme heat

**Work Scheduling:**
- Start early when possible
- Schedule heavy tasks for cooler periods
- Extend rest breaks as heat increases
- Rotate workers if possible

**Shade and Cooling:**
- Provide shaded rest areas
- Use vehicle AC for cooling breaks
- Cooling towels or vests if available
- Remove PPE during breaks if safe

**Acclimatization:**
Workers need 1-2 weeks to acclimatize to heat:
- First 2 days: 20% workload
- Days 3-4: 40% workload
- Days 5-6: 60% workload
- Days 7-10: 80% workload
- After 10 days: full workload

### 5.3 Heat Illness Recognition and Response

| Condition | Signs | Response |
|:----------|:------|:---------|
| **Heat Cramps** | Muscle cramps, sweating | Stop work; rest in shade; drink water; stretch affected muscles |
| **Heat Exhaustion** | Heavy sweating, weakness, dizziness, nausea, headache, cool pale skin | Move to cool area; loosen clothing; fan; apply cool water; give fluids; monitor; seek medical attention if no improvement in 30 min |
| **Heat Stroke** | Hot dry skin OR profuse sweating, confusion, slurred speech, unconsciousness, temperature >40°C | **EMERGENCY - Call 911**; move to cool area; cool rapidly (ice packs to neck, armpits, groin); do not give fluids if unconscious; monitor breathing |

**Key Distinction:** Heat stroke is a medical emergency. If person is confused, disoriented, or has hot dry skin, call 911 immediately.

---

## 6. Cold Stress Procedures

### 6.1 Cold Risk Assessment

**Calculate Wind Chill:**
Use Environment Canada wind chill chart or calculator.

**Risk Levels:**

| Wind Chill | Risk | Exposed Skin | Actions |
|:-----------|:-----|:-------------|:--------|
| 0 to -9 | Low | Uncomfortable | Proper clothing; monitor |
| -10 to -27 | Moderate | Risk of frostbite 10-30 min | Warm breaks every 1-2 hours; limit exposure |
| -28 to -39 | High | Risk of frostbite <10 min | Frequent warm breaks; limit outdoor time; buddy system |
| -40 to -47 | Very High | Frostbite in minutes | Minimize exposure; heated shelter required |
| Below -48 | Extreme | Frostbite in <2 min | Consider postponing outdoor work |

### 6.2 Cold Stress Prevention

**Clothing:**
- Dress in layers (base layer, insulation, outer shell)
- Moisture-wicking base layer
- Insulated middle layer
- Wind/water resistant outer layer
- Protect extremities: insulated gloves, warm hat, face covering
- Insulated footwear

**Warming:**
- Access to heated shelter or vehicle
- Warm (not hot) drinks available
- Limit time outdoors based on conditions
- Schedule frequent warming breaks

**Work Practices:**
- Avoid sweating (adjust layers)
- Change wet clothing immediately
- Work in pairs (buddy system)
- Stay active but pace yourself
- Take breaks before getting cold

### 6.3 Cold Illness/Injury Recognition and Response

| Condition | Signs | Response |
|:----------|:------|:---------|
| **Frostnip** | Numbness, tingling, pale/waxy skin | Move to warm area; warm affected area gradually with body heat; do not rub |
| **Frostbite** | Hard, waxy skin; numbness; white/grey color; blisters (severe) | Move to warm area; protect from further exposure; warm in tepid water (37-39°C); do not rub; do not rewarm if risk of refreezing; seek medical care |
| **Hypothermia (Mild)** | Shivering, cold sensation, impaired judgment | Move to warm area; remove wet clothing; wrap in warm blankets; give warm drinks if alert |
| **Hypothermia (Severe)** | Violent shivering or no shivering, confusion, slurred speech, drowsiness, weak pulse | **EMERGENCY - Call 911**; handle gently; warm core first; do not give drinks; monitor breathing; be prepared to perform CPR |

**Key Points for Hypothermia:**
- Handle gently (rough handling can cause cardiac arrest)
- Warm core first (chest, neck, head, groin)
- Do not warm extremities first (cold blood returning to core)
- Keep person horizontal if possible

---

## 7. Monitoring Workers

### 7.1 Buddy System
- Work in pairs in extreme conditions
- Monitor each other for symptoms
- Check on each other regularly

### 7.2 Signs to Watch For

**Heat:**
- Excessive sweating or no sweating
- Confusion or irritability
- Unsteady movement
- Complaints of headache or nausea

**Cold:**
- Shivering (early sign)
- No longer shivering (dangerous sign)
- Slurred speech
- Fumbling with objects
- Drowsiness or confusion

### 7.3 When to Stop Work

Stop outdoor work when:
- Worker shows symptoms of heat/cold illness
- Conditions exceed safe thresholds
- Controls are not effective
- Worker requests to stop

---

## 8. Documentation

Record on FLHA:
- Temperature and humidex/wind chill
- Risk level determined
- Controls implemented
- Work/rest schedule followed
- Any symptoms or incidents

---

## 9. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Monitor forecasts; adjust schedules; ensure supplies available |
| **PIC** | Assess conditions; implement controls; monitor crew; stop work if needed |
| **All Workers** | Dress appropriately; hydrate; monitor self and others; report symptoms |

---

## 10. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-015 | Heat & Cold Stress Policy |
| HSE-012 | First Aid Policy |
| HSE-005-PR | Emergency Response Procedure |
| FRM-FLHA | Field Level Hazard Assessment |

---

**Document Control:** HSE-013-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Working Alone Procedure',
  'procedure',
  'HSE-014-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# WORKING ALONE PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-014-PR |
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

This procedure describes the requirements for workers who work alone or in isolation, including check-in procedures and emergency response.

---

## 2. Scope

This procedure applies to:
- All personnel who may work alone
- Field operations where workers are isolated
- Travel to/from worksites
- Office work outside normal hours

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-016 | Working Alone Policy |
| BC OHS Regulation 4.20.1-4.23 | Working alone requirements |

---

## 4. Procedure

### 4.1 Determining Working Alone Status

You are working alone if:
- You are the only worker at a location
- Others are not within voice contact distance
- Assistance would not be readily available in emergency

**Assess:**
- Can someone hear you if you call for help?
- Could someone reach you within 5 minutes in emergency?
- Is there reliable communication?

If answer to any is NO, you are working alone.

### 4.2 Pre-Work Planning

Before working alone:

1. **Notify Contact Person**
   - Inform Operations Manager or designated contact
   - Provide:
     - Your location
     - Nature of work
     - Expected duration
     - Communication method
     - Check-in schedule

2. **Complete FLHA**
   - Assess hazards specific to working alone
   - Identify controls
   - Document emergency contacts
   - Note communication capability

3. **Verify Communication**
   - Ensure phone is charged
   - Test coverage at location
   - Have backup method if coverage uncertain
   - Carry satellite communicator for remote areas

4. **Prepare for Emergencies**
   - First aid kit accessible
   - Emergency contacts programmed in phone
   - Know location of nearest help
   - Vehicle fueled and in good condition

### 4.3 Check-In Procedures

#### Standard Check-In Schedule

| Risk Level | Frequency | Method |
|:-----------|:----------|:-------|
| Low (office, urban area, good cell coverage) | Start and end of work | Phone/text |
| Medium (field work, some isolation) | Every 2-4 hours | Phone/text |
| High (remote area, elevated hazards) | Every 1-2 hours | Phone/text/radio |
| Extreme (very remote, satellite only) | Every 1-2 hours | Satellite check-in |

#### Check-In Content

At each check-in, confirm:
- You are okay
- Your current location
- Expected activities until next check-in
- Any changes to plan
- Next check-in time

**Example check-in text:**
"[Time] - On site at [location]. All good. Doing [activity]. Next check 14:00."

#### Missed Check-In Protocol

**Contact Person Response:**

| Time Since Missed Check-In | Action |
|:---------------------------|:-------|
| +15 minutes | Attempt contact (call/text) |
| +30 minutes | Try alternative contact methods; call again |
| +45 minutes | Notify Operations Manager |
| +60 minutes | Dispatch someone to location OR call emergency services |

Adjust times based on risk level and circumstances.

### 4.4 Contact Person Duties

**The Contact Person shall:**

Before work:
- Know the worker''s planned location
- Know planned activities and duration
- Have worker''s contact information
- Know emergency contacts
- Agree on check-in schedule

During work:
- Be available to receive check-ins
- Track check-in times
- Initiate response if check-in missed
- Document all check-ins received

If check-in missed:
- Follow missed check-in protocol
- Do not assume "they''re probably fine"
- Document actions taken
- Continue attempts while arranging response

### 4.5 Communication Equipment

| Situation | Primary | Backup |
|:----------|:--------|:-------|
| Urban/good coverage | Cell phone | N/A |
| Rural/variable coverage | Cell phone | Satellite communicator |
| Remote/no coverage | Satellite communicator | PLB (Personal Locator Beacon) |

**Satellite Options:**
- inReach or similar communicator
- Satellite phone
- SPOT device

**Before Relying on Satellite:**
- Test device functionality
- Know how to send SOS
- Register device properly
- Share tracking link with contact person

### 4.6 Travel Procedures

When traveling alone:

1. **File Travel Plan**
   - Route you will take
   - Expected departure and arrival times
   - Intermediate stops (if any)
   - Vehicle description

2. **Check In**
   - At departure
   - At major waypoints
   - Upon arrival

3. **Vehicle Preparedness**
   - Full fuel tank
   - Emergency supplies (blanket, water, first aid)
   - Charged phone and charger
   - Winter: survival kit

4. **Long Drives**
   - Take breaks every 2 hours
   - Do not drive fatigued
   - Plan for overnight stay if >8 hours driving

### 4.7 Prohibited Lone Work

Do not work alone in these situations:
- Confined space entry
- Work at heights requiring rescue capability
- High wildlife risk areas (without approved measures)
- No reliable communication possible
- Medical condition that increases risk
- Other situations identified as requiring buddy system

### 4.8 Emergency While Working Alone

**If you have an emergency:**
1. Call 911 if able (stay on line)
2. Activate SOS on satellite device if available
3. Try to contact anyone
4. Stay with vehicle/shelter if possible
5. Make yourself visible for rescuers

**If contact person cannot reach worker:**
1. Attempt all contact methods
2. Contact next of kin (may have additional information)
3. Dispatch someone to last known location
4. Contact emergency services
5. Provide responders with:
   - Last known location
   - Vehicle description
   - Worker''s description
   - Planned activities
   - Time last contacted

---

## 5. Documentation

### Working Alone Plan (FRM-LONE)
Complete before working alone:
- Date and planned work
- Location details
- Communication methods
- Check-in schedule
- Contact person
- Emergency contacts

### Check-In Log
Contact person maintains log:
- Expected check-in times
- Actual check-in times
- Content of check-ins
- Actions taken if missed

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Establish procedures; designate contact persons; ensure communication equipment available |
| **Contact Person** | Monitor check-ins; initiate response if missed; document |
| **Lone Worker** | Complete plan; check in on schedule; carry communication; report concerns |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-016 | Working Alone Policy |
| HSE-007 | Emergency Response Policy |
| FRM-LONE | Working Alone Plan/Check-In Log |
| FRM-FLHA | Field Level Hazard Assessment |

---

**Document Control:** HSE-014-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Wildlife Safety Procedure',
  'procedure',
  'HSE-015-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# WILDLIFE SAFETY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | HSE-015-PR |
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

This procedure describes how to prevent, recognize, and respond to wildlife hazards during field operations in British Columbia.

---

## 2. Scope

This procedure applies to:
- All field operations in areas with wildlife
- All personnel working outdoors
- Operations in wilderness, rural, and industrial sites

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-017 | Wildlife Hazards Policy |
| BC Wildlife Act | Protected species |
| WorkSafeBC | Bear safety guidelines |

---

## 4. Pre-Work Assessment

### 4.1 Before Field Operations

**Assess wildlife risk considering:**
- Geographic location
- Season (see Section 4.2)
- Recent wildlife activity reports
- Type of terrain and vegetation
- Food sources (berry patches, salmon streams)
- Client-provided wildlife advisories

**Document on FLHA:**
- Wildlife hazards identified
- Equipment required (bear spray)
- Precautions to be taken
- Emergency response plan

### 4.2 Seasonal Considerations

| Season | Concerns | Heightened Awareness |
|:-------|:---------|:--------------------|
| **Spring** (Mar-May) | Bears emerging hungry; mothers with cubs | Near den sites, south-facing slopes, avalanche tracks |
| **Summer** (Jun-Aug) | Active bears; berry season; nesting birds | Berry patches, streams, alpine meadows |
| **Fall** (Sep-Nov) | Bears in hyperphagia (pre-hibernation); rutting ungulates | Salmon streams, concentrated food sources, rutting areas |
| **Winter** (Dec-Feb) | Reduced bear activity; wolves more active | Travel corridors, carcass sites |

---

## 5. Equipment Requirements

### 5.1 Mandatory Equipment

**For all operations in bear country:**

| Item | Specification | Location |
|:-----|:--------------|:---------|
| Bear spray | 225g minimum, 1% capsaicin | On person in holster |
| Air horn | Marine-type | In field kit |

### 5.2 Enhanced Equipment

**For remote or high-risk areas:**
- Bear bangers (launcher and cartridges)
- Two-way radios
- Satellite communicator
- Extra bear spray

### 5.3 Bear Spray Requirements

**Specifications:**
- Minimum 225g (7.9 oz)
- EPA-registered bear spray (not personal defense spray)
- 1% or higher capsaicin
- Within expiry date

**Carrying:**
- Carry on person in quick-draw holster
- NOT in pack where you can''t reach it quickly
- Practice drawing until automatic
- Accessible while working

**Know before you need it:**
- Remove safety tab
- Spray when bear is within 6-8 meters
- Aim slightly downward (spray rises)
- Spray in 2-3 second bursts
- Create a wall of spray
- Back away while spraying

---

## 6. Bear Safety

### 6.1 Prevention (Most Important)

**Make Noise:**
- Talk, sing, call out "hey bear"
- Clap hands periodically
- Be extra noisy near streams, wind, dense brush
- Travel in groups when possible

**Be Alert:**
- Watch for tracks, scat, digging, claw marks
- Look for bears in the distance
- Be aware of wind direction (can you smell them?)
- Be extra cautious at dawn and dusk

**Manage Food and Garbage:**
- Never leave food unattended
- Store food in vehicles or bear canisters
- Pack out all garbage
- Clean up cooking areas completely
- Avoid areas with carcasses or strong odors

**Avoid Surprise Encounters:**
- Make noise on trails
- Look ahead frequently
- Detour around blind corners with limited visibility
- Avoid dense vegetation if possible

### 6.2 Types of Bear Encounters

| Situation | Bear Behavior | Likely Meaning |
|:----------|:--------------|:---------------|
| Bear hasn''t seen you | Unaware | Opportunity to leave quietly |
| Bear sees you, stands up | Curious | Getting better view/smell |
| Bear moves away | Avoiding | Continue your exit |
| Bear holds ground, huffing | Stressed | Defensive; you''re too close |
| Bear approaches slowly | Curious or testing | May or may not be serious |
| Bear charges | May be bluff or real | Prepare to respond |
| Bear attacks | Defensive or predatory | Response depends on type |

### 6.3 Bear Encounter Response

**If Bear Hasn''t Seen You:**
1. Back away quietly
2. Leave the area
3. Detour widely around

**If Bear Sees You but Doesn''t Approach:**
1. Stay calm
2. Speak in calm, low voice
3. Slowly wave arms to appear human
4. Back away slowly
5. Do not run

**If Bear Approaches:**
1. Stand your ground
2. Ready your bear spray
3. Speak firmly ("hey bear, whoa bear")
4. Make yourself appear large
5. If bear continues, prepare to spray

**If Bear Charges:**
- Many charges are bluffs—bear will stop short
- Stand your ground if possible
- Deploy bear spray at 6-8 meters
- If contact is imminent without spray:
  - **Black bear:** Fight back (any means)
  - **Grizzly bear:** Play dead if defensive attack

**Black Bear vs. Grizzly Identification:**

| Feature | Black Bear | Grizzly |
|:--------|:-----------|:--------|
| Shoulder | No hump | Distinct shoulder hump |
| Face | Straight profile | Dish-shaped face |
| Ears | Tall, pointed | Short, rounded |
| Claws | Short, dark | Long, light-colored |
| Size | Smaller (typically) | Larger (typically) |

### 6.4 After an Encounter

1. Leave the area immediately
2. Report encounter to supervisor and Operations Manager
3. Document details:
   - Location (GPS)
   - Time
   - Bear species and behavior
   - Your actions
   - Outcome
4. Report aggressive bears to Conservation Officer Service
5. Complete incident report if physical contact occurred

---

## 7. Cougar Safety

### 7.1 Prevention
- Travel in groups
- Keep children close
- Make noise
- Do not approach cougars
- Avoid hiking at dawn/dusk in cougar habitat

### 7.2 Cougar Encounter Response

**If You See a Cougar:**
1. Face the cougar; maintain eye contact
2. Do NOT run or crouch
3. Appear large (raise arms, open jacket)
4. Speak firmly and loudly
5. Back away slowly

**If Cougar Approaches:**
1. Stop backing away—hold your ground
2. Make yourself appear as large as possible
3. Make loud, aggressive noises
4. Throw objects at the cougar
5. Do not turn your back

**If Cougar Attacks:**
- Fight back aggressively
- Use any available weapon
- Protect throat and face
- Do NOT play dead

---

## 8. Other Wildlife

### 8.1 Moose
- Extremely dangerous when surprised
- Give wide berth, especially:
  - Cows with calves (spring/summer)
  - Bulls during rut (fall)
- If charged: run and get behind large object (tree, vehicle)

### 8.2 Wolves
- Generally avoid humans
- If encountered: face the animal, back away, make noise
- If approached aggressively: appear large, make noise, throw objects
- Do not run

### 8.3 Snakes (Rattlesnake)
- Found in southern interior BC
- Watch where you step and place hands
- If you hear rattle: freeze, locate snake, back away slowly
- If bitten: stay calm, immobilize limb, seek medical care immediately

### 8.4 Insects
- Bees, wasps: know locations of nests; carry antihistamine if allergic
- Ticks: wear long pants tucked into socks; check body after field work
- Mosquitoes: use repellent; wear long sleeves

---

## 9. First Aid for Wildlife Injuries

### Bear/Cougar Wounds:
- Stop bleeding (pressure)
- Cover wounds
- Call 911 immediately
- Transport to hospital
- High infection risk—antibiotics needed

### Snake Bite:
- Keep victim calm and immobile
- Remove jewelry near bite
- Immobilize bitten limb
- Call 911
- DO NOT: cut wound, suck venom, apply tourniquet, apply ice

### Insect Stings (Anaphylaxis):
- Use EpiPen if available and trained
- Call 911
- Monitor airway
- Position comfortably
- Be prepared for CPR

---

## 10. Reporting

**Report all wildlife encounters to:**
- Supervisor/PIC (immediately)
- Operations Manager (same day)

**Report aggressive wildlife to:**
- Conservation Officer Service: 1-877-952-7277 (RAPP line)

---

## 11. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Provide equipment; monitor advisories; ensure training |
| **PIC** | Assess wildlife risk; brief crew; lead response; report encounters |
| **All Workers** | Carry bear spray; follow procedures; report encounters |

---

## 12. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-017 | Wildlife Hazards Policy |
| HSE-012 | First Aid Policy |
| HSE-005-PR | Emergency Response Procedure |
| FHA-1.3 | Wildlife & Environmental Hazards |
| FRM-FLHA | Field Level Hazard Assessment |

---

**Document Control:** HSE-015-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY['Procedures']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Land Survey Procedure',
  'procedure',
  'LM-001-PR',
  'Operations',
  '# AERIA SOLUTIONS LTD

# LAND SURVEY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | LM-001-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to conduct land-based survey operations safely and accurately.

---

## 2. Scope

This procedure applies to all land survey fieldwork.

---

## 3. Procedure

### 3.1 Pre-Field Planning

1. Review project requirements
2. Determine survey methodology
3. Identify equipment needed
4. Review site access and permissions
5. Check weather forecast
6. Plan travel route
7. Notify contact person of itinerary

### 3.2 Equipment Preparation

**Verify before departure:**
- GPS/GNSS receiver charged and functional
- Data collector/controller charged
- Tripod and accessories
- Measuring tape/survey tools
- Spare batteries
- Equipment calibration current

**PPE and safety:**
- First aid kit
- Communication device
- High-visibility vest
- Appropriate footwear
- Weather-appropriate clothing

### 3.3 Site Arrival

1. Park safely; maintain vehicle access
2. Complete FLHA for site conditions
3. Identify hazards and mitigations
4. Establish communication/check-in
5. Brief any additional personnel

### 3.4 Survey Setup

1. Set up base station (if used)
2. Verify satellite constellation/corrections
3. Confirm coordinate system and datum
4. Verify accuracy before data collection
5. Document setup parameters

### 3.5 Data Collection

**For each point:**
- Allow adequate occupation time
- Verify position accuracy indicators
- Record point identifier
- Document point description
- Take photo if useful

**Quality checks:**
- Re-observe check points periodically
- Verify measurements make sense
- Monitor equipment battery levels
- Watch for obstructions affecting signal

### 3.6 Documentation

Record in field notes:
- Date and time
- Personnel
- Equipment used (serial numbers)
- Coordinate system/datum
- Survey methodology
- Points collected
- Any issues or anomalies
- Weather conditions

### 3.7 Site Departure

1. Account for all equipment
2. Remove any temporary markers (unless permanent)
3. Leave site as found
4. Complete check-out with contact person

### 3.8 Post-Field

1. Download and back up data
2. Process data per methodology
3. Verify accuracy/quality
4. Document any concerns
5. Clean and store equipment
6. Charge batteries

---

## 4. Accuracy Verification

### 4.1 Field Verification

- Occupy known control points
- Compare observed vs. known coordinates
- Document any discrepancies

### 4.2 Acceptance Criteria

| Check | Criteria |
|:------|:---------|
| Known point comparison | Within stated accuracy |
| Repeat measurements | Within precision specification |
| Closure (if applicable) | Per project requirements |

---

## 5. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| LM-001 | Land Survey Operations Policy |
| LM-002-PR | GCP Placement Procedure |
| HSE-002-PR | FLHA Procedure |
| FRM-FLHA | Field Level Hazard Assessment Form |

---

**Document Control:** LM-001-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Land Survey Operations Policy',
  'policy',
  'LM-001',
  'Operations',
  '# AERIA SOLUTIONS LTD

# LAND SURVEY OPERATIONS POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | LM-001 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes requirements for land-based survey and data acquisition operations conducted by Aeria Solutions Ltd.

---

## 2. Scope

This policy applies to all land-based data acquisition activities including:
- Ground control point (GCP) surveys
- Terrestrial LiDAR scanning
- GPS/GNSS ground surveys
- Site control establishment
- Ground-truthing activities

---

## 3. Policy Statement

Aeria Solutions is committed to conducting land survey operations safely, accurately, and in compliance with all applicable regulations. Land survey activities support our RPAS operations and must meet professional standards for accuracy and quality.

---

## 4. Regulatory Framework

| Requirement | Reference |
|:------------|:----------|
| BC OHS Regulation | Part 4 - General Conditions |
| WorkSafeBC | Occupational Health and Safety |
| BC Land Surveyor Act | Professional survey requirements |

---

## 5. General Requirements

### 5.1 Site Authorization

Before conducting land surveys:
- Obtain landowner/land manager permission
- Verify access rights
- Identify site-specific hazards
- Review any site-specific safety requirements

### 5.2 Qualifications

Personnel conducting land surveys must:
- Be trained on equipment used
- Understand survey methodology
- Complete company safety orientation
- Hold valid first aid (when working alone)

### 5.3 Equipment

- Use calibrated, maintained equipment
- Verify equipment accuracy before deployment
- Document equipment serial numbers and calibration dates
- Report equipment defects immediately

---

## 6. Safety Requirements

### 6.1 Hazard Assessment

Complete FLHA before fieldwork addressing:
- Terrain hazards (slopes, unstable ground)
- Traffic hazards (road work)
- Wildlife hazards
- Weather conditions
- Working alone risks

### 6.2 Personal Protective Equipment

Minimum PPE for land surveys:
- CSA-approved safety footwear
- High-visibility vest (near roads/equipment)
- Hard hat (industrial sites)
- Additional PPE per site requirements

### 6.3 Working Alone

When working alone:
- Follow HSE-016 Working Alone Policy
- Establish check-in schedule
- Carry communication device
- Share itinerary with contact person

---

## 7. Quality Requirements

### 7.1 Accuracy Standards

| Survey Type | Accuracy |
|:------------|:---------|
| GCP for photogrammetry | ±2 cm horizontal, ±3 cm vertical |
| Control points | Per project specification |
| As-built verification | Per client requirement |

### 7.2 Documentation

Document for each survey:
- Date and personnel
- Equipment used
- Survey methodology
- Coordinates and datums
- Quality verification data

---

## 8. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Operations Manager** | Ensure resources and training |
| **Survey Personnel** | Follow procedures; maintain accuracy |
| **Project Manager** | Verify requirements met |

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| LM-001-PR | Land Survey Procedure |
| LM-002-PR | GCP Placement Procedure |
| HSE-016 | Working Alone Policy |
| HSE-002-PR | FLHA Procedure |

---

**Document Control:** LM-001 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'GCP Placement Procedure',
  'procedure',
  'LM-002-PR',
  'Operations',
  '# AERIA SOLUTIONS LTD

# GROUND CONTROL POINT (GCP) PLACEMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | LM-002-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to place and survey ground control points (GCPs) for RPAS photogrammetry missions.

---

## 2. Scope

This procedure applies to all GCP placement for photogrammetry projects.

---

## 3. Procedure

### 3.1 Planning GCP Layout

**Determine number of GCPs:**

| Area Size | Minimum GCPs |
|:----------|:-------------|
| < 5 hectares | 5 |
| 5-20 hectares | 7-9 |
| > 20 hectares | 9+ (add 1 per 5 ha) |

**Layout principles:**
- Distribute evenly across site
- Place at corners and center
- Include elevation variations
- Consider flight line overlap

### 3.2 GCP Placement

**Target selection:**
- Use high-contrast targets (black/white)
- Size: visible at flight altitude
- Minimum size: 5x GSD (ground sample distance)

| GSD | Minimum Target Size |
|:----|:--------------------|
| 2 cm | 10 cm |
| 5 cm | 25 cm |
| 10 cm | 50 cm |

**Placement requirements:**
1. Place on flat, stable surface
2. Avoid shadows if possible
3. Secure against wind
4. Clear of obstructions above
5. Visible from flight altitude

**Document placement:**
- Take ground photo of each GCP
- Note GCP ID and location description
- Record placement time

### 3.3 GCP Survey

**Survey each point:**
1. Set up GPS/GNSS on target center
2. Allow adequate occupation time:
   - RTK: minimum 30 seconds, 1+ minute recommended
   - PPK: minimum 2 minutes per point
3. Record coordinates
4. Verify accuracy indicator (PDOP, fix quality)
5. Document any concerns

**Accuracy requirements:**
- Horizontal: ± 2 cm
- Vertical: ± 3 cm
- Better accuracy if project requires

### 3.4 Check Points

**Place additional check points:**
- Minimum 2-3 check points per project
- Survey same as GCPs
- Use for accuracy verification post-processing
- Distribute across project area

### 3.5 Documentation

Record for each GCP:
- GCP ID (unique identifier)
- Coordinates (Easting, Northing, Elevation)
- Coordinate system and datum
- Geoid model (if applicable)
- Occupation time
- Accuracy/quality indicators
- Photo of GCP placement
- Date and surveyor

### 3.6 Quality Control

**Before leaving site:**
- Verify all GCPs collected
- Check for any outliers in data
- Confirm coordinates saved
- Back up data if possible

**Post-processing:**
- Review all GCP data
- Verify coordinate transformations
- Check for systematic errors
- Document final coordinates

---

## 4. Coordinate System Standards

**Default coordinate systems:**

| Application | Coordinate System |
|:------------|:------------------|
| BC projects | NAD83(CSRS) / BC Albers or UTM |
| Local grids | As specified by client |
| Elevation | CGVD2013 or orthometric height |

Always confirm coordinate requirements with client before survey.

---

## 5. Troubleshooting

| Issue | Action |
|:------|:-------|
| Poor satellite geometry | Wait or return later |
| Unable to get fix | Check obstructions; try different location |
| High PDOP | Increase occupation time; note in record |
| GCP moved | Re-survey before flight or exclude |

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| LM-001 | Land Survey Operations Policy |
| LM-001-PR | Land Survey Procedure |
| GUIDE-Survey_Mapping | Survey & Mapping Operations Guide |

---

**Document Control:** LM-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Marine Operations Policy',
  'policy',
  'LM-002',
  'Operations',
  '# AERIA SOLUTIONS LTD

# MARINE OPERATIONS POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | LM-002 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes requirements for marine-based operations and RPAS flights conducted from or near water.

---

## 2. Scope

This policy applies to:
- RPAS operations from vessels
- RPAS operations over water
- Shore-based operations near water
- Boat-based survey operations

---

## 3. Policy Statement

Aeria Solutions is committed to conducting marine operations safely with appropriate precautions for the unique hazards of working on or near water. All personnel must be properly equipped and trained for marine environments.

---

## 4. Regulatory Framework

| Requirement | Reference |
|:------------|:----------|
| Transport Canada | Canada Shipping Act, Small Vessel Regulations |
| BC OHS Regulation | Part 24 - Diving, Fishing and Other Marine Operations |
| WorkSafeBC | Marine safety requirements |
| CARs Part IX | RPAS over water considerations |

---

## 5. General Requirements

### 5.1 Vessel Requirements

When operating from vessels:
- Vessel must be suitable for conditions
- Vessel operator must be qualified
- Required safety equipment on board
- Adequate stability for RPAS operations

### 5.2 Personnel Requirements

All personnel on marine operations:
- Able to swim (recommended)
- Trained in marine safety
- Familiar with vessel emergency procedures
- Understand cold water hazards (BC waters)

### 5.3 RPAS Considerations

For RPAS over water:
- Plan for lost link over water
- Consider wind effects on water
- Have recovery plan for water landing
- Understand flotation capability of aircraft

---

## 6. Safety Equipment

### 6.1 Personal Flotation Devices

| Situation | Requirement |
|:----------|:------------|
| On vessel underway | PFD worn at all times |
| Within 2m of water edge | PFD worn or immediately accessible |
| On dock/stable platform | PFD immediately accessible |

### 6.2 Required Vessel Safety Equipment

Per Small Vessel Regulations:
- Personal flotation devices for all
- Buoyant heaving line (15m)
- Manual propelling device (paddle)
- Bailer or pump
- Sound signaling device
- Navigation lights (if operating at night)
- Fire extinguisher
- First aid kit

### 6.3 Additional Equipment

- VHF marine radio
- Waterproof communication device
- Throw bag
- Dry bags for electronics

---

## 7. Environmental Considerations

### 7.1 Weather Limits

| Condition | Limit |
|:----------|:------|
| Wind | Per vessel and RPAS limitations |
| Wave height | Per vessel capability |
| Visibility | Minimum 1 km |
| Lightning | No operations |

### 7.2 BC Water Conditions

Be aware of:
- Cold water temperatures year-round
- Tidal currents (coastal)
- Sudden weather changes
- Fog and reduced visibility
- Marine traffic

---

## 8. Emergency Procedures

### 8.1 Person Overboard

1. Shout "Person overboard" and point
2. Throw flotation device
3. Maneuver vessel for recovery
4. Do not jump in after person
5. Call for help if unable to recover

### 8.2 RPAS Water Landing

If RPAS lands in water:
- Note GPS position
- Assess recovery feasibility
- Do not risk personal safety for recovery
- Document loss if unrecoverable

---

## 9. Restrictions

### 9.1 No-Go Conditions

Do not conduct marine operations when:
- Small craft warning in effect
- Lightning within 20 km
- Personnel lack required safety equipment
- Vessel unsuitable for conditions

### 9.2 Cold Water Awareness

BC waters are cold year-round. Cold water immersion can cause:
- Cold shock (first minute)
- Swimming failure (3-30 minutes)
- Hypothermia

Minimize time in water; have recovery plan.

---

## 10. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Operations Manager** | Ensure equipment and training |
| **Vessel Operator** | Safe vessel operation |
| **PIC** | Safe RPAS operation from vessel |
| **All Personnel** | Follow marine safety requirements |

---

## 11. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| LM-002-PR | Marine Operations Procedure |
| LM-003-PR | Vessel Safety Procedure |
| HSE-007 | Emergency Response Policy |
| OPS-001 | RPAS Flight Operations Policy |

---

**Document Control:** LM-002 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Marine Operations Procedure',
  'procedure',
  'LM-003-PR',
  'Operations',
  '# AERIA SOLUTIONS LTD

# MARINE OPERATIONS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | LM-003-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to conduct marine-based operations safely.

---

## 2. Scope

This procedure applies to all operations on or near water.

---

## 3. Procedure

### 3.1 Pre-Operation Planning

1. Determine vessel requirements
2. Check marine weather forecast
3. Review tide and current information
4. Identify launch/recovery locations
5. Plan operational area
6. File float plan with contact person
7. Confirm emergency contacts

### 3.2 Float Plan

Document and share with contact person:
- Vessel description
- Departure point and time
- Intended route/area
- Expected return time
- Personnel on board
- Communication plan
- Emergency contacts

### 3.3 Pre-Departure Safety Check

**Vessel check:**
- Hull integrity
- Engine operation
- Fuel level adequate
- Navigation equipment
- Communication equipment
- Anchor and line

**Safety equipment verification:**
- PFDs for all personnel (proper size, condition)
- Throwable flotation device
- Fire extinguisher (charged)
- Sound signaling device
- First aid kit
- Bailing device
- Navigation lights (if night operations)

**Personnel briefing:**
- Emergency procedures
- PFD requirements
- Person overboard procedure
- Communication plan
- Individual responsibilities

### 3.4 Underway Operations

**All personnel:**
- Wear PFD at all times underway
- Maintain three points of contact when moving
- Stay aware of vessel motion
- Monitor for changing conditions

**Vessel operator:**
- Monitor weather and conditions
- Maintain situational awareness
- Communicate with operations personnel
- Keep clear of hazards

### 3.5 RPAS Operations from Vessel

**Pre-flight:**
- Vessel at stable position (anchored or drifting stable)
- Clear takeoff/landing area
- Account for vessel movement
- Brief crew on RPAS operations
- Establish sterile period for launch/recovery

**During flight:**
- Monitor vessel position/drift
- Maintain communication with vessel operator
- Be prepared for vessel movement
- Monitor wind conditions

**Landing:**
- Coordinate with vessel operator
- Clear landing area
- Account for vessel motion
- Secure RPAS immediately after landing

### 3.6 Emergency Procedures

**Person overboard:**
1. Shout "PERSON OVERBOARD" and point continuously
2. Throw flotation device toward person
3. Operator maneuvers vessel for recovery
4. Do NOT jump in after person
5. Approach person from downwind
6. Recover person carefully
7. Assess for injuries/hypothermia
8. Call for help if needed (VHF Ch 16)

**RPAS water landing:**
1. Note GPS position
2. Assess recovery feasibility
3. If safe, attempt recovery
4. Do not risk personal safety
5. Document loss if unrecoverable

**Vessel emergency:**
- Follow vessel emergency procedures
- Secure RPAS operations immediately
- All personnel don PFDs
- Prepare for emergency response

### 3.7 Return to Shore

1. Secure all equipment
2. Ensure all personnel ready
3. Navigate safely to departure point
4. Cancel float plan with contact person

### 3.8 Post-Operation

1. Debrief any issues
2. Report equipment concerns
3. Document operations
4. Secure and clean equipment
5. Complete documentation

---

## 4. Cold Water Protocol

BC waters remain cold year-round. If person enters water:

| Time in Water | Priority |
|:--------------|:---------|
| 0-3 minutes | Recover immediately |
| 3-30 minutes | Swimming failure risk |
| 30+ minutes | Hypothermia risk |

**Recovery priorities:**
1. Get person out of water quickly
2. Handle gently (cold heart risk)
3. Remove wet clothing
4. Insulate and warm gradually
5. Seek medical attention

---

## 5. Communication

**VHF Marine Radio:**
- Channel 16: Emergency/calling
- Working channels as appropriate
- Monitor weather channels

**Check-in schedule:**
- At departure
- At arrival on station
- Hourly during operations
- Before return
- On arrival back

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| LM-002 | Marine Operations Policy |
| HSE-007 | Emergency Response Policy |
| HSE-002-PR | FLHA Procedure |
| OPS-001 | RPAS Flight Operations Policy |

---

**Document Control:** LM-003-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Vessel Safety Procedure',
  'procedure',
  'LM-004-PR',
  'Operations',
  '# AERIA SOLUTIONS LTD

# VESSEL SAFETY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | LM-004-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes vessel safety requirements for marine operations.

---

## 2. Scope

This procedure applies to all vessel operations.

---

## 3. Procedure

### 3.1 Vessel Selection

**Vessel must be:**
- Suitable for intended waters and conditions
- In good mechanical condition
- Equipped with required safety gear
- Adequate for personnel and equipment load

**Capacity considerations:**
- Do not exceed rated capacity
- Account for equipment weight
- Consider conditions requiring higher margin

### 3.2 Vessel Inspection

**Before each use inspect:**

| Item | Check |
|:-----|:------|
| Hull | Damage, integrity |
| Engine | Operation, oil level |
| Fuel | Adequate level, no leaks |
| Battery | Charge, connections |
| Steering | Operation, cables |
| Navigation lights | Function (if applicable) |
| Bilge | Dry, pump operational |

### 3.3 Required Safety Equipment

Per Canadian Small Vessel Regulations:

**Vessels under 6m without motor:**
- PFD for each person
- Buoyant heaving line (15m)
- Paddle
- Bailer or pump
- Sound signaling device

**Vessels under 6m with motor:**
- All above, plus:
- Navigation lights (night/reduced visibility)
- Fire extinguisher

**Additional recommended:**
- VHF radio
- First aid kit
- Anchor and line
- Knife
- Flares (coastal waters)

### 3.4 Personal Flotation Devices

**Requirements:**
- Canadian-approved PFD or lifejacket
- Proper size for wearer
- In good condition (no tears, working buckles)
- Worn at all times when underway

**PFD inspection:**
- Check for damage or wear
- Test buckles and zippers
- Verify flotation not compromised
- Replace if damaged

### 3.5 Operator Requirements

**Vessel operator must:**
- Hold Pleasure Craft Operator Card (PCOC) if required
- Be competent in vessel operation
- Understand navigation rules
- Know emergency procedures
- Not be impaired

### 3.6 Safe Operating Practices

- Maintain safe speed for conditions
- Keep proper lookout
- Follow navigation rules
- Stay within capability of vessel and operator
- Monitor weather continuously
- Know your position
- Avoid standing while underway

### 3.7 Weather Monitoring

**Check before departure:**
- Marine forecast
- Wind warnings
- Visibility forecast

**Abort/return thresholds:**
- Small craft warning issued
- Conditions exceeding vessel capability
- Conditions exceeding operator comfort
- Deteriorating conditions

### 3.8 Communication

**Before departure:**
- File float plan with shore contact
- Confirm VHF radio operation
- Establish check-in schedule

**During operations:**
- Monitor VHF Channel 16
- Check in per schedule
- Report any concerns

**Emergency:**
- MAYDAY: imminent danger to life
- PAN PAN: urgent but not immediate danger
- VHF Channel 16

---

## 4. Emergency Procedures

### 4.1 Fire

1. Alert all aboard
2. Don PFDs
3. If possible, extinguish with extinguisher
4. Keep fire downwind
5. Prepare to abandon if necessary
6. Call MAYDAY if required

### 4.2 Taking on Water

1. Alert all aboard
2. Don PFDs
3. Identify source
4. Activate bilge pump
5. Bail if needed
6. Attempt to stop leak
7. Head for shore if possible
8. Call for help if situation worsening

### 4.3 Engine Failure

1. Anchor if in hazardous area
2. Attempt to identify problem
3. If unable to fix, call for assistance
4. Deploy visual distress signals if needed

---

## 5. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| LM-002 | Marine Operations Policy |
| LM-003-PR | Marine Operations Procedure |
| HSE-007 | Emergency Response Policy |

---

**Document Control:** LM-004-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Privacy Procedure',
  'procedure',
  'ADM-001-PR',
  'Administrative',
  '# AERIA SOLUTIONS LTD

# PRIVACY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | ADM-001-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to handle personal information in compliance with privacy requirements.

---

## 2. Scope

This procedure applies to all handling of personal information.

---

## 3. Procedure

### 3.1 Collection of Personal Information

**Before collecting:**
1. Identify purpose for collection
2. Ensure collection is necessary
3. Determine type of consent required

**At collection:**
1. Inform individual of purpose
2. Obtain appropriate consent
3. Collect only what is needed
4. Record consent if not implied

**Forms of consent:**
- Express written consent (sensitive information)
- Express verbal consent (documented)
- Implied consent (reasonable in circumstances)

### 3.2 Use of Personal Information

Use information only for:
- Purpose for which it was collected
- Purposes to which individual consented
- Purposes required by law

Do not use for other purposes without new consent.

### 3.3 Disclosure of Personal Information

**May disclose when:**
- Individual has consented
- Required by law
- Necessary for safety (emergency)
- To legal counsel

**Before disclosure:**
1. Verify authority to disclose
2. Confirm recipient''s need
3. Disclose minimum necessary
4. Document disclosure

### 3.4 Storage and Security

**Electronic:**
- Store in password-protected systems
- Use access controls (need-to-know)
- Encrypt sensitive data in transit
- Log access where appropriate

**Physical:**
- Store in locked cabinet/area
- Limit access to those with need
- Don''t leave in open/visible areas
- Use clean desk practices

### 3.5 Access Requests

When individual requests access:
1. Verify identity
2. Locate responsive records
3. Review for any exemptions
4. Provide access within 30 days
5. Document request and response

**Response options:**
- Provide copy of information
- Allow inspection
- Explain why access denied (if applicable)

### 3.6 Correction Requests

When individual requests correction:
1. Review the request
2. Determine if correction warranted
3. Make correction if appropriate
4. Note correction or disagreement
5. Notify any third parties if disclosed

### 3.7 Retention and Disposal

**Retain information:**
- As long as needed for purpose
- As required by regulation
- Per retention schedule (ADM-002)

**Dispose securely:**
- Shred paper documents
- Securely delete electronic files
- Document disposal

### 3.8 Privacy Breach Response

If breach suspected:
1. **Contain:** Stop ongoing breach
2. **Assess:** What information, how many affected
3. **Notify:** If real risk of significant harm
4. **Prevent:** Identify and fix cause

**Notification includes:**
- Description of breach
- Information involved
- What we are doing
- How to protect themselves
- Contact for questions

Document breach and response actions.

---

## 4. Specific Situations

### 4.1 Aerial Imagery

When imagery may contain personal information:
- Brief crews on privacy awareness
- Avoid unnecessary capture of individuals
- Handle imagery securely
- Process imagery per client agreement

### 4.2 Client Data

- Follow client privacy requirements
- Secure during transfer and storage
- Return or destroy per agreement
- Report any breaches to client

### 4.3 Employment Information

- Collect only what''s needed for employment
- Keep in secure personnel files
- Share internally on need-to-know basis
- Dispose per retention schedule

---

## 5. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| ADM-001 | Privacy Policy |
| ADM-002 | Record Retention Policy |
| ADM-002-PR | Record Retention Procedure |

---

**Document Control:** ADM-001-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

