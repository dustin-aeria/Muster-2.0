-- Import Forms into Muster 2.0
-- Generated: 2026-03-12T15:17:19.060Z
-- Total forms: 30
-- Run this in Supabase SQL Editor

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Avalanche Control Log',
  'form',
  'FRM-AVALANCHE',
  'Forms',
  '# AERIA SOLUTIONS LTD

# AVALANCHE CONTROL LOG

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-AVALANCHE |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Mission Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Client/Program** | |
| **Location/Area** | |
| **SFOC Reference** | |
| **Mission Start Time** | |
| **Mission End Time** | |

---

## Personnel

| Role | Name | Certification # |
|:-----|:-----|:----------------|
| PIC | | |
| Blaster | | |
| Avalanche Technician | | |
| VO (if applicable) | | |
| Other | | |

---

## Authorization Verification

| Authorization | Verified | Reference |
|:--------------|:---------|:----------|
| SFOC valid | ☐ | |
| Explosives licence | ☐ | |
| TDG authorization | ☐ | |
| Personnel certifications | ☐ | |
| Client agreement | ☐ | |

---

## Weather Conditions

| Condition | Value |
|:----------|:------|
| Temperature | °C |
| Wind | km/h Dir: |
| Visibility | km |
| Precipitation | ☐ None ☐ Light ☐ Moderate |
| Cloud ceiling | m AGL |

---

## Avalanche Conditions

| Factor | Assessment |
|:-------|:-----------|
| Danger rating | |
| Problem types | |
| Target paths | |
| Assessed by | |

---

## Exclusion Zones / Closures

| Zone | Status | Confirmed By | Time |
|:-----|:-------|:-------------|:-----|
| Highway closure | ☐ Active ☐ N/A | | |
| Ski area closure | ☐ Active ☐ N/A | | |
| Blast zone clear | ☐ Confirmed | | |
| Airspace clear | ☐ Confirmed | | |

---

## Explosives Inventory

### Start of Mission

| Explosive Type | Quantity Issued | Serial Numbers |
|:---------------|:----------------|:---------------|
| | | |
| | | |
| | | |

**Total Issued:** _______

**Issued By:** _________________ **Received By:** _________________

---

## Deployment Log

| # | Time | Target/Path | GPS Coordinates | Result | Serial # | Notes |
|:--|:-----|:------------|:----------------|:-------|:---------|:------|
| 1 | | | | ☐ Det ☐ Misfire | | |
| 2 | | | | ☐ Det ☐ Misfire | | |
| 3 | | | | ☐ Det ☐ Misfire | | |
| 4 | | | | ☐ Det ☐ Misfire | | |
| 5 | | | | ☐ Det ☐ Misfire | | |
| 6 | | | | ☐ Det ☐ Misfire | | |
| 7 | | | | ☐ Det ☐ Misfire | | |
| 8 | | | | ☐ Det ☐ Misfire | | |
| 9 | | | | ☐ Det ☐ Misfire | | |
| 10 | | | | ☐ Det ☐ Misfire | | |

---

## Misfires

| Misfire # | Location (GPS) | Type/Serial | Time | Resolution |
|:----------|:---------------|:------------|:-----|:-----------|
| | | | | |
| | | | | |

**Misfire report attached:** ☐ N/A ☐ Yes

---

## End of Mission Inventory

| Item | Count |
|:-----|:------|
| Total explosives deployed | |
| Total explosives returned | |
| Total misfires | |
| **Total accounted** | |
| **Total issued (must match)** | |

☐ Inventory reconciled - all explosives accounted for

---

## Results Summary

| Metric | Count |
|:-------|:------|
| Targets engaged | |
| Successful detonations | |
| Avalanches triggered | |
| Misfires | |
| Flights conducted | |

---

## Observations / Notes

| Notes |
|:------|
| |
| |
| |

---

## Incidents / Occurrences

☐ None

☐ Yes - Details:

| Incident |
|:---------|
| |

**Incident report filed:** ☐ N/A ☐ Yes - Reference: _______

---

## Sign-Off

### Blaster

| Field | Entry |
|:------|:------|
| Name | |
| Certification # | |
| Signature | |
| Date | |

### PIC

| Field | Entry |
|:------|:------|
| Name | |
| Certificate # | |
| Signature | |
| Date | |

### Avalanche Technician

| Field | Entry |
|:------|:------|
| Name | |
| Certification | |
| Signature | |
| Date | |

---

## Document Retention

Retain this log for minimum 10 years per explosives regulations.

---

**Document Control:** FRM-AVALANCHE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Battery Log',
  'form',
  'FRM-BATTERY',
  'Forms',
  '# AERIA SOLUTIONS LTD

# BATTERY LOG

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-BATTERY |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Battery Information

| Field | Entry |
|:------|:------|
| **Battery ID** | |
| **Manufacturer** | |
| **Model** | |
| **Capacity** | mAh |
| **Voltage (nominal)** | V |
| **Cell Count** | S |
| **Serial Number** | |
| **Purchase Date** | |
| **For Aircraft** | |

---

## Battery Status

| Status | Select |
|:-------|:-------|
| Active - In Service | ☐ |
| Quarantine - Under Review | ☐ |
| Retired - End of Life | ☐ |
| Disposed | ☐ |

---

## Cycle Log

| Date | Cycles | Min V | Max V | Notes | Initials |
|:-----|:-------|:------|:------|:------|:---------|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

---

## Running Totals

| Metric | Value |
|:-------|:------|
| Total cycles | |
| Manufacturer limit | |
| Cycles remaining | |

---

## Inspection Record

| Date | Condition | Swelling? | Damage? | Action | Initials |
|:-----|:----------|:----------|:--------|:-------|:---------|
| | ☐ Good ☐ Fair ☐ Poor | ☐ N ☐ Y | ☐ N ☐ Y | | |
| | ☐ Good ☐ Fair ☐ Poor | ☐ N ☐ Y | ☐ N ☐ Y | | |
| | ☐ Good ☐ Fair ☐ Poor | ☐ N ☐ Y | ☐ N ☐ Y | | |
| | ☐ Good ☐ Fair ☐ Poor | ☐ N ☐ Y | ☐ N ☐ Y | | |

---

## Issues/Events

| Date | Issue | Action Taken |
|:-----|:------|:-------------|
| | | |
| | | |
| | | |

---

## Retirement Criteria

Battery should be retired if:
- ☐ Cycle limit reached
- ☐ Visible swelling
- ☐ Physical damage
- ☐ Significant capacity loss (>20%)
- ☐ Cell imbalance
- ☐ High internal resistance
- ☐ Age limit reached
- ☐ Manufacturer recall

---

## Retirement Record

| Field | Entry |
|:------|:------|
| Retirement date | |
| Reason | |
| Final cycle count | |
| Disposal method | |
| Disposed by | |
| Disposal date | |

---

## Storage Notes

- Store at room temperature
- Storage charge: 50-60% (3.8V/cell)
- Do not store fully charged or fully depleted
- Inspect before use after extended storage

---

**Document Control:** FRM-BATTERY v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Cargo Manifest',
  'form',
  'FRM-CARGO',
  'Forms',
  '# AERIA SOLUTIONS LTD

# CARGO MANIFEST

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-CARGO |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Flight Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Flight #** | |
| **PIC** | |
| **Aircraft** | |
| **Client/Project** | |

---

## Route Information

| Field | Entry |
|:------|:------|
| **Origin** | |
| **Origin Coordinates** | Lat: _______ Long: _______ |
| **Destination** | |
| **Destination Coordinates** | Lat: _______ Long: _______ |
| **Estimated Distance** | km |
| **Estimated Flight Time** | min |

---

## Aircraft Configuration

| Configuration | Selected |
|:--------------|:---------|
| Dual battery mode | ☐ Max payload: 30 kg |
| Single battery mode | ☐ Max payload: 40 kg |
| Cargo box mode | ☐ |
| Winch mode | ☐ |

---

## Cargo Details

| Item # | Description | Weight (kg) | Dimensions | Special Handling |
|:-------|:------------|:------------|:-----------|:-----------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

---

## Weight Summary

| Item | Weight (kg) |
|:-----|:------------|
| Total Cargo Weight | |
| **Max Payload (per config)** | |
| **Under/Over Limit** | ☐ Within limits ☐ OVER - DO NOT FLY |

---

## Dangerous Goods Declaration

| Question | Response |
|:---------|:---------|
| Does cargo contain dangerous goods? | ☐ No ☐ Yes |
| If yes, TDG documentation attached? | ☐ N/A ☐ Yes |
| If yes, proper packaging verified? | ☐ N/A ☐ Yes |
| If yes, TDG training current? | ☐ N/A ☐ Yes |

---

## Loading Verification

| Check | Verified |
|:------|:---------|
| Cargo weighed on calibrated scale | ☐ |
| Within payload limit | ☐ |
| CG within limits | ☐ |
| Cargo secured | ☐ |
| No loose items | ☐ |
| Lid/hook secure | ☐ |
| Movement check passed | ☐ |

---

## Ground Contact

| Field | Entry |
|:------|:------|
| Receiving Contact Name | |
| Contact Phone | |
| Delivery Confirmed | ☐ |

---

## Pre-Flight Verification

| Check | Verified |
|:------|:---------|
| Route clear of obstacles | ☐ |
| Weather acceptable | ☐ |
| Battery capacity adequate | ☐ |
| Alternate landing sites identified | ☐ |
| Communication confirmed | ☐ |

---

## Signatures

### Loading

| Field | Entry |
|:------|:------|
| Loaded By | |
| Signature | |
| Time | |

### PIC Acceptance

| Field | Entry |
|:------|:------|
| PIC | |
| Signature | |
| Time | |

---

## Delivery Confirmation

| Field | Entry |
|:------|:------|
| Delivery Time | |
| Received By | |
| Signature | |
| Condition | ☐ Good ☐ Damaged - Notes: |

---

## Notes

| Notes |
|:------|
| |
| |

---

**Document Control:** FRM-CARGO v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Competency Check Form',
  'form',
  'FRM-COMPCHECK',
  'Forms',
  '# AERIA SOLUTIONS LTD

# COMPETENCY CHECK FORM

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-COMPCHECK |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Assessment Information

| Field | Entry |
|:------|:------|
| **Person Assessed** | |
| **Position** | |
| **Assessment Date** | |
| **Assessor** | |
| **Assessment Type** | ☐ Initial ☐ Recurrent ☐ Upgrade ☐ Return to duty |

---

## Assessment Purpose

| Purpose | Select |
|:--------|:-------|
| PIC qualification | ☐ |
| VO qualification | ☐ |
| Instructor qualification | ☐ |
| Equipment type rating | ☐ |
| Procedure competency | ☐ |
| Annual currency | ☐ |
| Other: | ☐ |

---

## Knowledge Assessment

| Topic | Method | Result |
|:------|:-------|:-------|
| Regulations (CARs Part IX) | ☐ Written ☐ Verbal | ☐ Pass ☐ Fail |
| Company procedures | ☐ Written ☐ Verbal | ☐ Pass ☐ Fail |
| Emergency procedures | ☐ Written ☐ Verbal | ☐ Pass ☐ Fail |
| Weather limitations | ☐ Written ☐ Verbal | ☐ Pass ☐ Fail |
| Airspace requirements | ☐ Written ☐ Verbal | ☐ Pass ☐ Fail |
| Safety procedures | ☐ Written ☐ Verbal | ☐ Pass ☐ Fail |

Written test score (if applicable): ___% Pass mark: ___%

---

## Practical Skills Assessment

### Pre-Flight

| Skill | Demonstrated | Rating |
|:------|:-------------|:-------|
| FLHA completion | ☐ | ☐ S ☐ U |
| Site assessment | ☐ | ☐ S ☐ U |
| Pre-flight inspection | ☐ | ☐ S ☐ U |
| System setup | ☐ | ☐ S ☐ U |
| Crew briefing | ☐ | ☐ S ☐ U |

### Flight Operations

| Skill | Demonstrated | Rating |
|:------|:-------------|:-------|
| Takeoff | ☐ | ☐ S ☐ U |
| Hover control | ☐ | ☐ S ☐ U |
| Forward flight | ☐ | ☐ S ☐ U |
| Turns/maneuvering | ☐ | ☐ S ☐ U |
| Altitude control | ☐ | ☐ S ☐ U |
| Speed control | ☐ | ☐ S ☐ U |
| Position hold | ☐ | ☐ S ☐ U |
| Approach | ☐ | ☐ S ☐ U |
| Landing | ☐ | ☐ S ☐ U |

### Emergency Procedures

| Procedure | Demonstrated | Rating |
|:----------|:-------------|:-------|
| Loss of GPS | ☐ | ☐ S ☐ U |
| Low battery response | ☐ | ☐ S ☐ U |
| Lost link procedure | ☐ | ☐ S ☐ U |
| Emergency landing | ☐ | ☐ S ☐ U |
| Flyaway response | ☐ | ☐ S ☐ U |

### Post-Flight

| Skill | Demonstrated | Rating |
|:------|:-------------|:-------|
| Post-flight inspection | ☐ | ☐ S ☐ U |
| Documentation | ☐ | ☐ S ☐ U |
| Equipment securing | ☐ | ☐ S ☐ U |

**Rating Key:** S = Satisfactory, U = Unsatisfactory

---

## Equipment Type (if applicable)

| Field | Entry |
|:------|:------|
| Aircraft type | |
| Payload type | |
| Competency demonstrated | ☐ Yes ☐ No |

---

## CRM/Human Factors

| Competency | Rating |
|:-----------|:-------|
| Situational awareness | ☐ S ☐ U |
| Decision making | ☐ S ☐ U |
| Communication | ☐ S ☐ U |
| Crew coordination | ☐ S ☐ U ☐ N/A |
| Workload management | ☐ S ☐ U |

---

## Overall Assessment

| Result | Select |
|:-------|:-------|
| **COMPETENT** | ☐ |
| **NOT YET COMPETENT** | ☐ |

---

## Strengths Observed

| Strengths |
|:----------|
| |
| |

---

## Areas for Improvement

| Areas | Required Action |
|:------|:----------------|
| | |
| | |

---

## Follow-Up Required

☐ None required

☐ Additional training: ____________________

☐ Re-assessment required by: ____________________

☐ Restrictions: ____________________

---

## Authorization Granted

Based on this assessment:

| Authorization | Granted |
|:--------------|:--------|
| PIC privileges | ☐ Yes ☐ No |
| Aircraft type: | ☐ Yes ☐ No |
| BVLOS operations | ☐ Yes ☐ No |
| Instructor privileges | ☐ Yes ☐ No |
| Other: | ☐ Yes ☐ No |

---

## Signatures

### Candidate

| Field | Entry |
|:------|:------|
| Name | |
| Signature | |
| Date | |

### Assessor

| Field | Entry |
|:------|:------|
| Name | |
| Qualification | |
| Signature | |
| Date | |

### Operations Manager Approval

| Field | Entry |
|:------|:------|
| Name | |
| Signature | |
| Date | |

---

**Document Control:** FRM-COMPCHECK v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Competency Assessment',
  'form',
  'FRM-COMPETENCY',
  'Forms',
  '# AERIA SOLUTIONS LTD

# COMPETENCY ASSESSMENT FORM

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-COMPETENCY |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | CAR 901.56, SECOR Element E, BC OHS Reg |

---

## PURPOSE

This form documents the assessment of worker competency in specific tasks, equipment operation, or procedures. Competency assessments verify that workers can safely and effectively perform job functions after training.

**Competency = Knowledge + Skills + Ability to Apply**

---

## SECTION 1: ASSESSMENT INFORMATION

| Field | Entry |
|:------|:------|
| **Assessment Date** | |
| **Assessment Type** | ☐ Initial ☐ Periodic ☐ Re-assessment ☐ Post-Incident |
| **Assessment #** | COMP- |
| **Related Training Record #** | TR- |

---

## SECTION 2: WORKER INFORMATION

| Field | Entry |
|:------|:------|
| **Worker Name** | |
| **Position** | |
| **Employee ID** | |
| **Date of Hire** | |
| **Training Completed Date** | |
| **Previous Assessment Date** | ☐ N/A - Initial |

---

## SECTION 3: ASSESSOR INFORMATION

| Field | Entry |
|:------|:------|
| **Assessor Name** | |
| **Position** | |
| **Qualifications to Assess** | |

---

## SECTION 4: COMPETENCY BEING ASSESSED

### 4.1 Category

| Category | Select |
|:---------|:-------|
| **RPAS Operations** | |
| RPAS Pilot - Basic Operations | ☐ |
| RPAS Pilot - Advanced Operations | ☐ |
| RPAS Pilot - Specific Aircraft Type | ☐ |
| Visual Observer | ☐ |
| Payload Operator | ☐ |
| **Equipment Operation** | |
| Specific equipment: | ☐ |
| Vehicle operation | ☐ |
| Survey equipment | ☐ |
| **Procedures** | |
| Emergency procedures | ☐ |
| Specific SOP: | ☐ |
| **Safety** | |
| FLHA completion | ☐ |
| Hazard recognition | ☐ |
| PPE use | ☐ |
| First aid | ☐ |
| **Other** | ☐ |

### 4.2 Specific Competency Title

| Field | Entry |
|:------|:------|
| **Competency Title** | |
| **Description** | |
| **Reference Documents** | |

---

## SECTION 5: KNOWLEDGE ASSESSMENT

### 5.1 Knowledge Areas Assessed

| # | Knowledge Area | Method | Result |
|:--|:---------------|:-------|:-------|
| 1 | | ☐ Oral ☐ Written | ☐ Satisfactory ☐ Unsatisfactory |
| 2 | | ☐ Oral ☐ Written | ☐ Satisfactory ☐ Unsatisfactory |
| 3 | | ☐ Oral ☐ Written | ☐ Satisfactory ☐ Unsatisfactory |
| 4 | | ☐ Oral ☐ Written | ☐ Satisfactory ☐ Unsatisfactory |
| 5 | | ☐ Oral ☐ Written | ☐ Satisfactory ☐ Unsatisfactory |
| 6 | | ☐ Oral ☐ Written | ☐ Satisfactory ☐ Unsatisfactory |

### 5.2 Written Test (If Applicable)

| Field | Entry |
|:------|:------|
| Test administered | ☐ Yes ☐ No |
| Score | / ( %) |
| Pass mark | % |
| Result | ☐ Pass ☐ Fail |

### 5.3 Knowledge Assessment Notes

| Notes |
|:------|
| |
| |

---

## SECTION 6: PRACTICAL/SKILLS ASSESSMENT

### 6.1 Practical Tasks Assessed

| # | Task/Skill | Demonstrated | Assessor Notes |
|:--|:-----------|:-------------|:---------------|
| 1 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 2 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 3 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 4 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 5 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 6 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 7 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 8 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 9 | | ☐ Sat ☐ Unsat ☐ N/A | |
| 10 | | ☐ Sat ☐ Unsat ☐ N/A | |

**Sat = Satisfactory | Unsat = Unsatisfactory | N/A = Not Applicable**

### 6.2 Equipment Used for Assessment

| Equipment | Serial # |
|:----------|:---------|
| | |
| | |
| | |

### 6.3 Conditions During Assessment

| Field | Entry |
|:------|:------|
| Location | |
| Weather (if outdoor) | |
| Duration of assessment | |
| Any limitations | |

---

## SECTION 7: RPAS PILOT COMPETENCY (If Applicable)

### 7.1 Aircraft Information

| Field | Entry |
|:------|:------|
| Aircraft Type | |
| Registration | |
| Serial Number | |

### 7.2 Flight Assessment

| Manoeuvre/Skill | Demonstrated | Notes |
|:----------------|:-------------|:------|
| Pre-flight inspection | ☐ Sat ☐ Unsat | |
| System startup | ☐ Sat ☐ Unsat | |
| Takeoff | ☐ Sat ☐ Unsat | |
| Hover (if applicable) | ☐ Sat ☐ Unsat | |
| Forward flight | ☐ Sat ☐ Unsat | |
| Turns | ☐ Sat ☐ Unsat | |
| Altitude control | ☐ Sat ☐ Unsat | |
| Position hold | ☐ Sat ☐ Unsat | |
| Autonomous flight | ☐ Sat ☐ Unsat ☐ N/A | |
| Return to home | ☐ Sat ☐ Unsat | |
| Landing | ☐ Sat ☐ Unsat | |
| Emergency procedures | ☐ Sat ☐ Unsat | |
| Post-flight inspection | ☐ Sat ☐ Unsat | |
| Documentation | ☐ Sat ☐ Unsat | |

### 7.3 Crew Resource Management

| Skill | Demonstrated | Notes |
|:------|:-------------|:------|
| Communication with crew | ☐ Sat ☐ Unsat | |
| Situational awareness | ☐ Sat ☐ Unsat | |
| Decision making | ☐ Sat ☐ Unsat | |
| Workload management | ☐ Sat ☐ Unsat | |

### 7.4 Flight Details

| Field | Entry |
|:------|:------|
| Number of flights | |
| Total flight time | min |
| Maximum altitude | ft AGL |
| Maximum distance | m |

---

## SECTION 8: SAFETY AWARENESS ASSESSMENT

| Item | Demonstrated |
|:-----|:-------------|
| Identifies hazards appropriately | ☐ Yes ☐ No |
| Applies controls effectively | ☐ Yes ☐ No |
| Uses required PPE correctly | ☐ Yes ☐ No |
| Follows procedures | ☐ Yes ☐ No |
| Recognizes when to stop work | ☐ Yes ☐ No |
| Communicates safety concerns | ☐ Yes ☐ No |

---

## SECTION 9: OVERALL ASSESSMENT RESULT

### 9.1 Summary

| Area | Result |
|:-----|:-------|
| Knowledge | ☐ Satisfactory ☐ Unsatisfactory |
| Practical Skills | ☐ Satisfactory ☐ Unsatisfactory |
| Safety Awareness | ☐ Satisfactory ☐ Unsatisfactory |
| **OVERALL RESULT** | ☐ **COMPETENT** ☐ **NOT YET COMPETENT** |

### 9.2 Competency Statement

| If Competent |
|:-------------|
| ☐ Worker is competent to perform the assessed task/operation independently |
| ☐ Worker is competent to perform with noted restrictions (see below) |

| If Not Yet Competent |
|:---------------------|
| ☐ Additional training required |
| ☐ Additional supervised practice required |
| ☐ Re-assessment required |
| ☐ Not suitable for this task |

### 9.3 Restrictions/Conditions (If Any)

| Restrictions |
|:-------------|
| |
| |

---

## SECTION 10: DEVELOPMENT AREAS

### 10.1 Areas for Improvement

| Area | Development Action | Timeline |
|:-----|:-------------------|:---------|
| | | |
| | | |
| | | |

### 10.2 Additional Training Required

| Training | Provider | Target Date |
|:---------|:---------|:------------|
| | | |
| | | |

---

## SECTION 11: RE-ASSESSMENT REQUIREMENTS

| Field | Entry |
|:------|:------|
| Re-assessment required | ☐ Yes ☐ No |
| Re-assessment date | |
| Reason | |

---

## SECTION 12: COMPETENCY VALIDITY

| Field | Entry |
|:------|:------|
| **Competency Valid From** | |
| **Competency Valid Until** | |
| **Reassessment Frequency** | ☐ 6 months ☐ 12 months ☐ 24 months ☐ Other: |

---

## SECTION 13: WORKER ACKNOWLEDGEMENT

**I acknowledge that:**
- ☐ I participated in this competency assessment
- ☐ The assessment was conducted fairly
- ☐ I understand the result and any restrictions
- ☐ I understand the development areas identified
- ☐ I will request assistance if I am unsure about any task

| Field | Entry |
|:------|:------|
| **Worker Name** | |
| **Signature** | |
| **Date** | |

---

## SECTION 14: ASSESSOR CERTIFICATION

**I certify that:**
- ☐ This assessment was conducted according to established criteria
- ☐ The worker was given fair opportunity to demonstrate competency
- ☐ The results accurately reflect the worker''s demonstrated ability
- ☐ Any restrictions are appropriate for the worker''s current skill level

| Field | Entry |
|:------|:------|
| **Assessor Name** | |
| **Signature** | |
| **Date** | |

---

## SECTION 15: MANAGEMENT APPROVAL

| Field | Entry |
|:------|:------|
| **Approved By** | |
| **Position** | |
| **Date** | |
| **Signature** | |

---

## SECTION 16: FOLLOW-UP (For Re-Assessment)

| Field | Entry |
|:------|:------|
| Re-assessment Date | |
| Re-assessment Result | ☐ Competent ☐ Not Yet Competent |
| Assessed By | |
| Notes | |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| SECOR Element E | 3 years |
| CAR 901.56 (pilot competency) | Duration of employment |
| Best Practice | Duration of employment + 5 years |

---

**Document Control:** FRM-COMPETENCY v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Contractor Safety',
  'form',
  'FRM-CONTRACTOR',
  'Forms',
  '# AERIA SOLUTIONS LTD

# CONTRACTOR SAFETY ORIENTATION

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-CONTRACTOR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | BC OHS Reg 3.23, SECOR Element E, WCA |

---

## PURPOSE

This form documents the safety orientation provided to contractors, subcontractors, and their workers before they begin work at Aeria Solutions Ltd worksites or on Aeria-controlled projects. Orientation ensures all personnel understand site hazards, safety requirements, and emergency procedures.

---

## SECTION 1: CONTRACTOR INFORMATION

| Field | Entry |
|:------|:------|
| **Company Name** | |
| **Business Address** | |
| **Phone** | |
| **Email** | |
| **WorkSafeBC Account #** | |
| **COR/SECOR Certified** | ☐ Yes - Cert #: ☐ No |
| **Primary Contact Name** | |
| **Primary Contact Phone** | |

---

## SECTION 2: CONTRACT INFORMATION

| Field | Entry |
|:------|:------|
| **Project/Contract Name** | |
| **Client (if applicable)** | |
| **Work Location(s)** | |
| **Contract Start Date** | |
| **Contract End Date** | |
| **Scope of Work** | |

---

## SECTION 3: CONTRACTOR PERSONNEL

**All contractor personnel working on site must be listed and sign this form:**

| # | Name | Position | Orientation Date | Signature |
|:--|:-----|:---------|:-----------------|:----------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |

---

## SECTION 4: PRE-QUALIFICATION VERIFICATION

### 4.1 Documentation Verified

| Document | Verified | Expiry Date | Notes |
|:---------|:---------|:------------|:------|
| WorkSafeBC clearance letter | ☐ | | |
| Liability insurance certificate | ☐ | | |
| COR/SECOR certificate (if applicable) | ☐ | ☐ N/A | |
| Safety program/manual | ☐ | | |
| Applicable licenses/certifications | ☐ | | |

### 4.2 Worker Certifications Verified

| Certification | Required | Verified |
|:--------------|:---------|:---------|
| Trade certifications | ☐ Yes ☐ No | ☐ |
| First Aid | ☐ Yes ☐ No | ☐ |
| WHMIS | ☐ Yes ☐ No | ☐ |
| TDG | ☐ Yes ☐ No | ☐ |
| RPAS Pilot Certificate | ☐ Yes ☐ No | ☐ |
| Vehicle/equipment licenses | ☐ Yes ☐ No | ☐ |
| Other: | ☐ Yes ☐ No | ☐ |

---

## SECTION 5: SITE-SPECIFIC ORIENTATION

### 5.1 Company Overview

| Topic | Covered | Contractor Initials |
|:------|:--------|:--------------------|
| Aeria Solutions company overview | ☐ | |
| Nature of operations (RPAS) | ☐ | |
| Key personnel and contacts | ☐ | |
| Site layout and access | ☐ | |

### 5.2 Health & Safety Policies

| Topic | Covered | Contractor Initials |
|:------|:--------|:--------------------|
| Health & Safety Policy | ☐ | |
| Drug and alcohol policy | ☐ | |
| Violence and harassment policy | ☐ | |
| Environmental policy | ☐ | |
| Smoking/vaping policy | ☐ | |

### 5.3 Rights and Responsibilities

| Topic | Covered | Contractor Initials |
|:------|:--------|:--------------------|
| Right to know about hazards | ☐ | |
| Right to participate in safety | ☐ | |
| Right to refuse unsafe work | ☐ | |
| Responsibility to follow safe work procedures | ☐ | |
| Responsibility to report hazards | ☐ | |
| Responsibility to report incidents | ☐ | |
| Stop work authority | ☐ | |

---

## SECTION 6: HAZARD AWARENESS

### 6.1 Site/Project Hazards

| Hazard | Present | Discussion | Contractor Initials |
|:-------|:--------|:-----------|:--------------------|
| **RPAS Operations** | | | |
| Rotating propellers | ☐ | ☐ | |
| Aircraft in flight | ☐ | ☐ | |
| Battery/fire hazards | ☐ | ☐ | |
| RF emissions | ☐ | ☐ | |
| **Physical Hazards** | | | |
| Slips, trips, falls | ☐ | ☐ | |
| Manual handling | ☐ | ☐ | |
| Vehicle traffic | ☐ | ☐ | |
| Noise | ☐ | ☐ | |
| Working at heights | ☐ | ☐ | |
| **Environmental** | | | |
| Weather exposure | ☐ | ☐ | |
| Terrain hazards | ☐ | ☐ | |
| Wildlife | ☐ | ☐ | |
| Remote location | ☐ | ☐ | |
| **Other Hazards** | | | |
| Electrical | ☐ | ☐ | |
| Chemical (WHMIS) | ☐ | ☐ | |
| Confined spaces | ☐ | ☐ | |
| Hot work | ☐ | ☐ | |
| Other: | ☐ | ☐ | |

### 6.2 Client Site-Specific Hazards (If on Client Site)

| Hazard | Present | Discussion |
|:-------|:--------|:-----------|
| | ☐ | ☐ |
| | ☐ | ☐ |
| | ☐ | ☐ |

---

## SECTION 7: SAFE WORK REQUIREMENTS

### 7.1 PPE Requirements

| PPE | Required | Contractor Confirms |
|:----|:---------|:--------------------|
| Safety footwear | ☐ Yes ☐ No | ☐ Have ☐ Need |
| High-visibility vest | ☐ Yes ☐ No | ☐ Have ☐ Need |
| Hard hat | ☐ Yes ☐ No | ☐ Have ☐ Need |
| Safety glasses | ☐ Yes ☐ No | ☐ Have ☐ Need |
| Hearing protection | ☐ Yes ☐ No | ☐ Have ☐ Need |
| Gloves | ☐ Yes ☐ No | ☐ Have ☐ Need |
| Other: | ☐ Yes ☐ No | ☐ Have ☐ Need |

### 7.2 Work Coordination

| Requirement | Discussed | Contractor Initials |
|:------------|:----------|:--------------------|
| Daily check-in requirements | ☐ | |
| Work permit requirements | ☐ | |
| FLHA requirements | ☐ | |
| Tailgate meeting participation | ☐ | |
| Coordination with Aeria crews | ☐ | |
| Communication protocols | ☐ | |
| Work hours and access | ☐ | |

### 7.3 Specific Work Restrictions

| Restriction | Applicable |
|:------------|:-----------|
| | ☐ |
| | ☐ |
| | ☐ |

---

## SECTION 8: EMERGENCY PROCEDURES

### 8.1 Emergency Contacts

| Contact | Name | Phone |
|:--------|:-----|:------|
| Aeria Site Contact | | |
| Aeria Emergency Contact | | |
| Emergency Services | 911 | |
| Nearest Hospital | | |

### 8.2 Emergency Procedures Reviewed

| Procedure | Covered | Contractor Initials |
|:----------|:--------|:--------------------|
| Fire/evacuation procedure | ☐ | |
| Medical emergency procedure | ☐ | |
| RPAS emergency (if applicable) | ☐ | |
| Severe weather procedure | ☐ | |
| Muster/assembly point location | ☐ | |
| How to report emergencies | ☐ | |

### 8.3 Emergency Equipment Locations

| Equipment | Location |
|:----------|:---------|
| First aid kit | |
| Fire extinguisher | |
| AED (if applicable) | |
| Emergency exits | |
| Muster point | |

---

## SECTION 9: INCIDENT REPORTING

| Requirement | Covered | Contractor Initials |
|:------------|:--------|:--------------------|
| Report ALL incidents to Aeria immediately | ☐ | |
| Report near misses and hazards | ☐ | |
| Complete Aeria incident report forms | ☐ | |
| Cooperate with investigations | ☐ | |
| WorkSafeBC reporting requirements | ☐ | |

---

## SECTION 10: ENVIRONMENTAL REQUIREMENTS

| Requirement | Applicable | Covered |
|:------------|:-----------|:--------|
| Waste disposal procedures | ☐ Yes ☐ No | ☐ |
| Spill prevention and response | ☐ Yes ☐ No | ☐ |
| Sensitive area restrictions | ☐ Yes ☐ No | ☐ |
| Noise/dust control | ☐ Yes ☐ No | ☐ |

---

## SECTION 11: SECURITY

| Requirement | Covered | Contractor Initials |
|:------------|:--------|:--------------------|
| Site access procedures | ☐ | |
| Sign-in/sign-out requirements | ☐ | |
| Vehicle parking | ☐ | |
| Equipment security | ☐ | |
| Confidentiality requirements | ☐ | |
| Photography/recording restrictions | ☐ | |

---

## SECTION 12: CONTRACTOR SAFETY REQUIREMENTS

### 12.1 Contractor Responsibilities

| Requirement | Acknowledged |
|:------------|:-------------|
| Follow all Aeria safety rules and procedures | ☐ |
| Maintain own safety program and documentation | ☐ |
| Ensure workers are trained and competent | ☐ |
| Provide required PPE to workers | ☐ |
| Report all incidents, near misses, and hazards | ☐ |
| Participate in safety meetings as required | ☐ |
| Cooperate with safety inspections | ☐ |
| Maintain WorkSafeBC coverage | ☐ |
| Comply with all applicable regulations | ☐ |

### 12.2 Prohibited Actions

| Prohibited | Acknowledged |
|:-----------|:-------------|
| Working under influence of drugs/alcohol | ☐ |
| Bypassing safety devices | ☐ |
| Unauthorized entry to restricted areas | ☐ |
| Operating equipment without authorization | ☐ |
| Working outside approved scope | ☐ |
| Interfering with RPAS operations | ☐ |

---

## SECTION 13: QUESTIONS AND CONCERNS

| Field | Entry |
|:------|:------|
| Questions raised during orientation | |
| Concerns identified | |
| How concerns will be addressed | |

---

## SECTION 14: CONTRACTOR DECLARATION

**By signing below, the contractor representative and all listed personnel acknowledge:**

- ☐ We have received this safety orientation
- ☐ We understand the hazards associated with work at this site
- ☐ We understand and will comply with all safety requirements
- ☐ We have had the opportunity to ask questions
- ☐ We understand incident and hazard reporting requirements
- ☐ We understand emergency procedures and muster locations
- ☐ We will ensure all personnel follow these requirements
- ☐ We will notify Aeria before bringing additional personnel on site

### Contractor Representative Signature

| Field | Entry |
|:------|:------|
| **Company Name** | |
| **Representative Name** | |
| **Position** | |
| **Signature** | |
| **Date** | |

---

## SECTION 15: AERIA AUTHORIZATION

**I confirm that:**
- ☐ This contractor has been oriented to site safety requirements
- ☐ Required documentation has been verified
- ☐ The contractor is authorized to begin work
- ☐ Conditions/restrictions have been communicated

| Field | Entry |
|:------|:------|
| **Aeria Representative Name** | |
| **Position** | |
| **Signature** | |
| **Date** | |

---

## SECTION 16: RENEWAL/RE-ORIENTATION

**Re-orientation required when:**
- Returning after 6+ months absence
- Significant changes to site or operations
- After a serious incident
- At Aeria''s discretion

| Re-Orientation | Date | Conducted By |
|:---------------|:-----|:-------------|
| | | |
| | | |

---

## SECTION 17: ADDITIONAL PERSONNEL

**For personnel added after initial orientation:**

| # | Name | Position | Date | Oriented By | Signature |
|:--|:-----|:---------|:-----|:------------|:----------|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

---

## ATTACHMENTS

| Attachment | Included |
|:-----------|:---------|
| WorkSafeBC clearance letter | ☐ |
| Insurance certificate | ☐ |
| COR/SECOR certificate | ☐ |
| List of certifications | ☐ |
| Site map | ☐ |
| Emergency contact card | ☐ |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| BC OHS Regulation | Duration of contract + 3 years |
| SECOR Element E | 3 years |
| Best Practice | 5 years |

---

**Document Control:** FRM-CONTRACTOR v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Corrective Action',
  'form',
  'FRM-CORRECTIVE',
  'Forms',
  '# AERIA SOLUTIONS LTD

# CORRECTIVE ACTION REQUEST / TRACKING

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-CORRECTIVE |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | SECOR Element I, BC OHS Reg, ISO 45001 |

---

## PURPOSE

This form documents corrective actions arising from incidents, inspections, audits, hazard reports, or other sources. It tracks actions from identification through implementation and verification to ensure issues are effectively resolved and prevented from recurring.

---

## SECTION 1: CORRECTIVE ACTION REQUEST

| Field | Entry |
|:------|:------|
| **CAR Number** | CAR- |
| **Date Initiated** | |
| **Initiated By** | |
| **Position** | |
| **Priority** | ☐ Critical ☐ High ☐ Medium ☐ Low |

### Priority Definitions

| Priority | Definition | Response Time |
|:---------|:-----------|:--------------|
| Critical | Imminent danger; regulatory non-compliance | Immediate |
| High | Significant risk; recurring issue | Within 7 days |
| Medium | Moderate risk; improvement needed | Within 30 days |
| Low | Minor issue; opportunity for improvement | Within 90 days |

---

## SECTION 2: SOURCE OF CORRECTIVE ACTION

| Source | Select | Reference # |
|:-------|:-------|:------------|
| Incident/Accident | ☐ | INC- |
| Near Miss/Hazard Report | ☐ | NM- |
| Investigation | ☐ | INV- |
| Workplace Inspection | ☐ | INSP- |
| Internal Audit | ☐ | AUD- |
| External Audit (SECOR/COR) | ☐ | |
| Management Review | ☐ | |
| Worker Concern/Suggestion | ☐ | |
| Regulatory Requirement | ☐ | |
| Client Requirement | ☐ | |
| Other | ☐ | |

---

## SECTION 3: ISSUE DESCRIPTION

### 3.1 Non-Conformance / Issue

| Field | Entry |
|:------|:------|
| **Issue Title** | |
| **Date Identified** | |
| **Location** | |
| **Department/Area** | |

### 3.2 Description of Issue

**Describe what was found, observed, or reported:**

| Description |
|:------------|
| |
| |
| |
| |

### 3.3 Regulatory/Standard Reference (If Applicable)

| Requirement | Reference |
|:------------|:----------|
| BC OHS Regulation | Section: |
| SECOR Element | |
| CAR/Standard | |
| Company Procedure | |
| Other | |

### 3.4 Evidence/Documentation

| Evidence | Attached |
|:---------|:---------|
| Photos | ☐ |
| Documents | ☐ |
| Inspection report | ☐ |
| Audit finding | ☐ |
| Witness statements | ☐ |
| Other: | ☐ |

---

## SECTION 4: IMMEDIATE/INTERIM ACTION

**What was done immediately to control the hazard or address the issue?**

| Action | Date | By Whom |
|:-------|:-----|:--------|
| | | |
| | | |
| | | |

| Field | Entry |
|:------|:------|
| Hazard controlled | ☐ Yes ☐ No ☐ N/A |
| Work stopped | ☐ Yes ☐ No ☐ N/A |
| Personnel removed from risk | ☐ Yes ☐ No ☐ N/A |

---

## SECTION 5: ROOT CAUSE ANALYSIS

### 5.1 5 Whys Analysis

| Level | Why? |
|:------|:-----|
| Problem Statement | |
| Why 1 | |
| Why 2 | |
| Why 3 | |
| Why 4 | |
| Why 5 | |

### 5.2 Root Cause Category

| Category | Identified |
|:---------|:-----------|
| **Management System** | |
| Inadequate procedure | ☐ |
| Procedure not followed | ☐ |
| Inadequate training | ☐ |
| Inadequate supervision | ☐ |
| Inadequate communication | ☐ |
| Resource constraints | ☐ |
| **Human Factors** | |
| Knowledge/skill gap | ☐ |
| Fatigue | ☐ |
| Complacency | ☐ |
| Time pressure | ☐ |
| **Equipment/Tools** | |
| Equipment failure | ☐ |
| Inadequate maintenance | ☐ |
| Wrong equipment for task | ☐ |
| **Environment** | |
| Workplace conditions | ☐ |
| External factors | ☐ |

### 5.3 Root Cause Statement

| Root Cause |
|:-----------|
| |
| |

---

## SECTION 6: CORRECTIVE ACTIONS

### 6.1 Hierarchy of Controls Consideration

**Actions should follow the hierarchy (most effective first):**

| Level | Control Type | Considered |
|:------|:-------------|:-----------|
| 1 | Elimination - Remove the hazard entirely | ☐ |
| 2 | Substitution - Replace with less hazardous | ☐ |
| 3 | Engineering - Isolate people from hazard | ☐ |
| 4 | Administrative - Change the way work is done | ☐ |
| 5 | PPE - Protect the worker | ☐ |

### 6.2 Corrective Actions Required

| # | Corrective Action | Hierarchy | Responsible | Target Date | Status |
|:--|:------------------|:----------|:------------|:------------|:-------|
| 1 | | ☐ E ☐ S ☐ Eng ☐ A ☐ PPE | | | ☐ Open |
| 2 | | ☐ E ☐ S ☐ Eng ☐ A ☐ PPE | | | ☐ Open |
| 3 | | ☐ E ☐ S ☐ Eng ☐ A ☐ PPE | | | ☐ Open |
| 4 | | ☐ E ☐ S ☐ Eng ☐ A ☐ PPE | | | ☐ Open |
| 5 | | ☐ E ☐ S ☐ Eng ☐ A ☐ PPE | | | ☐ Open |

**E=Elimination | S=Substitution | Eng=Engineering | A=Administrative | PPE=Personal Protective Equipment**

### 6.3 Preventive Actions

**What will be done to prevent recurrence?**

| # | Preventive Action | Responsible | Target Date |
|:--|:------------------|:------------|:------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## SECTION 7: RESOURCES REQUIRED

| Resource | Required | Details |
|:---------|:---------|:--------|
| Budget | ☐ Yes ☐ No | $ |
| Equipment | ☐ Yes ☐ No | |
| Training | ☐ Yes ☐ No | |
| External contractor | ☐ Yes ☐ No | |
| Management approval | ☐ Yes ☐ No | |

---

## SECTION 8: COMMUNICATION

| Communication | Required | Completed | Date |
|:--------------|:---------|:----------|:-----|
| Workers in affected area | ☐ Yes ☐ No | ☐ | |
| All workers (safety alert) | ☐ Yes ☐ No | ☐ | |
| Safety meeting | ☐ Yes ☐ No | ☐ | |
| Client notification | ☐ Yes ☐ No | ☐ | |
| Regulatory notification | ☐ Yes ☐ No | ☐ | |
| Procedure/document update | ☐ Yes ☐ No | ☐ | |

---

## SECTION 9: ASSIGNMENT AND APPROVAL

### 9.1 Assigned To

| Field | Entry |
|:------|:------|
| **Primary Responsible Person** | |
| **Position** | |
| **Date Assigned** | |
| **Target Completion Date** | |

### 9.2 Approval to Proceed

| Field | Entry |
|:------|:------|
| **Approved By** | |
| **Position** | |
| **Date** | |
| **Signature** | |

---

## SECTION 10: ACTION IMPLEMENTATION

### 10.1 Implementation Log

| Action # | Implementation Details | Date Completed | Completed By |
|:---------|:-----------------------|:---------------|:-------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

### 10.2 Implementation Notes

| Notes |
|:------|
| |
| |

---

## SECTION 11: VERIFICATION OF EFFECTIVENESS

### 11.1 Verification Method

| Method | Used |
|:-------|:-----|
| Follow-up inspection | ☐ |
| Observation of work practices | ☐ |
| Document review | ☐ |
| Worker feedback | ☐ |
| Monitoring period | ☐ Duration: |
| Other: | ☐ |

### 11.2 Verification Results

| Question | Response |
|:---------|:---------|
| Actions implemented as planned | ☐ Yes ☐ No ☐ Partial |
| Issue/hazard eliminated or controlled | ☐ Yes ☐ No ☐ Partial |
| No recurrence observed | ☐ Yes ☐ No ☐ Too early |
| Workers aware of changes | ☐ Yes ☐ No |
| Documentation updated | ☐ Yes ☐ No ☐ N/A |

### 11.3 Effectiveness Statement

| Effectiveness |
|:--------------|
| ☐ **Effective** - Corrective actions have resolved the issue |
| ☐ **Partially Effective** - Further action required (see below) |
| ☐ **Not Effective** - Issue persists, new CAR required |

### 11.4 Additional Actions (If Required)

| Additional Action | Responsible | Due Date |
|:------------------|:------------|:---------|
| | | |
| | | |

---

## SECTION 12: CLOSURE

| Field | Entry |
|:------|:------|
| **All actions completed** | ☐ Yes |
| **Effectiveness verified** | ☐ Yes |
| **Documentation updated** | ☐ Yes |
| **Communication completed** | ☐ Yes |
| **CAR Status** | ☐ **CLOSED** |
| **Closed By** | |
| **Position** | |
| **Date Closed** | |
| **Signature** | |

---

## SECTION 13: MANAGEMENT SIGN-OFF

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Operations Manager | | | |

---

## SECTION 14: LESSONS LEARNED

| Lessons Learned |
|:----------------|
| |
| |

| Shared With | Date |
|:------------|:-----|
| Safety meeting | |
| All staff communication | |
| Training materials updated | |

---

## TRACKING LOG

| Date | Status Update | By |
|:-----|:--------------|:---|
| | | |
| | | |
| | | |
| | | |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| SECOR Element I | 3 years |
| Audit-related CARs | 3 years (or until next audit cycle) |
| Best Practice | 5 years |

---

**Document Control:** FRM-CORRECTIVE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Emergency Drill',
  'form',
  'FRM-DRILL',
  'Forms',
  '# AERIA SOLUTIONS LTD

# EMERGENCY DRILL RECORD

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-DRILL |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | BC OHS Reg 4.13-4.18, SECOR Element F |

---

## PURPOSE

This form documents emergency response drills and exercises conducted to test emergency procedures, train workers, and identify areas for improvement. Regular drills ensure workers are prepared to respond effectively to emergencies.

**BC OHS Regulation 4.18:** Emergency procedures must be reviewed as often as necessary to ensure they remain effective.

---

## SECTION 1: DRILL INFORMATION

| Field | Entry |
|:------|:------|
| **Drill Record #** | DRILL- |
| **Date** | |
| **Start Time** | |
| **End Time** | |
| **Duration** | minutes |
| **Location** | |
| **Drill Type** | ☐ Announced ☐ Unannounced |

---

## SECTION 2: EMERGENCY TYPE

| Emergency Type | Select |
|:---------------|:-------|
| **Fire / Evacuation** | ☐ |
| **Medical Emergency** | ☐ |
| **RPAS Emergency** | |
| - Flyaway | ☐ |
| - Loss of control | ☐ |
| - Crash/collision | ☐ |
| - Battery fire | ☐ |
| **Severe Weather** | ☐ |
| **Vehicle Accident** | ☐ |
| **Wildlife Encounter** | ☐ |
| **Working Alone Emergency** | ☐ |
| **Spill/Environmental** | ☐ |
| **Security Incident** | ☐ |
| **Communication Failure** | ☐ |
| **Full-Scale (Multiple Scenarios)** | ☐ |
| **Tabletop Exercise** | ☐ |
| **Other** | ☐ Specify: |

---

## SECTION 3: DRILL SCENARIO

### 3.1 Scenario Description

| Scenario |
|:---------|
| |
| |
| |
| |

### 3.2 Objectives

| # | Drill Objective |
|:--|:----------------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

### 3.3 Procedures Being Tested

| Procedure | Reference |
|:----------|:----------|
| | ERP Section: |
| | SOP: |
| | QRC: |

---

## SECTION 4: DRILL COORDINATION

| Role | Name | Contact |
|:-----|:-----|:--------|
| Drill Coordinator | | |
| Safety Observer | | |
| Evaluator(s) | | |
| First Aid Attendant | | |

### 4.1 External Participants (If Applicable)

| Organization | Contact | Role |
|:-------------|:--------|:-----|
| | | |
| | | |

### 4.2 Pre-Drill Notifications

| Notified | Contact | Time |
|:---------|:--------|:-----|
| Building management | ☐ | |
| Emergency services (if applicable) | ☐ | |
| Client (if on client site) | ☐ | |
| Workers | ☐ (if announced) | |

---

## SECTION 5: PARTICIPANTS

| # | Name | Position | Role in Drill |
|:--|:-----|:---------|:--------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |

**Total Participants:** ______

### 5.1 Absentees

| Name | Reason | Follow-Up Required |
|:-----|:-------|:-------------------|
| | | ☐ |
| | | ☐ |

---

## SECTION 6: DRILL TIMELINE

| Time | Event/Action | Notes |
|:-----|:-------------|:------|
| | Drill initiated | |
| | | |
| | | |
| | | |
| | | |
| | | |
| | Drill concluded | |
| | Debrief started | |
| | Debrief concluded | |

---

## SECTION 7: EVACUATION DRILL SPECIFICS (If Applicable)

### 7.1 Evacuation Times

| Metric | Time |
|:-------|:-----|
| Alarm sounded | |
| First person at muster point | |
| Last person at muster point | |
| **Total evacuation time** | |
| Target evacuation time | |
| Met target | ☐ Yes ☐ No |

### 7.2 Headcount

| Item | Count |
|:-----|:------|
| Expected at muster point | |
| Actual at muster point | |
| All accounted for | ☐ Yes ☐ No |
| Missing persons | |

### 7.3 Evacuation Observations

| Item | Satisfactory | Needs Improvement |
|:-----|:-------------|:------------------|
| Alarm heard throughout building | ☐ | ☐ |
| Exit routes clear | ☐ | ☐ |
| Emergency lighting functional | ☐ | ☐ |
| Workers used correct exits | ☐ | ☐ |
| Mobility-impaired assisted | ☐ N/A | ☐ N/A |
| Fire wardens performed duties | ☐ | ☐ |
| Muster point appropriate | ☐ | ☐ |
| Headcount conducted efficiently | ☐ | ☐ |

---

## SECTION 8: MEDICAL EMERGENCY DRILL SPECIFICS (If Applicable)

| Item | Observed | Notes |
|:-----|:---------|:------|
| Emergency recognized promptly | ☐ Yes ☐ No | |
| First aid summoned correctly | ☐ Yes ☐ No | |
| 911 called (if applicable) | ☐ Yes ☐ No ☐ N/A | |
| First aid kit located | ☐ Yes ☐ No | |
| AED located (if applicable) | ☐ Yes ☐ No ☐ N/A | |
| First aid rendered appropriately | ☐ Yes ☐ No | |
| Scene made safe | ☐ Yes ☐ No | |
| Information provided to EMS | ☐ Yes ☐ No ☐ N/A | |

---

## SECTION 9: RPAS EMERGENCY DRILL SPECIFICS (If Applicable)

| Item | Observed | Notes |
|:-----|:---------|:------|
| Emergency recognized promptly | ☐ Yes ☐ No | |
| Appropriate emergency procedure initiated | ☐ Yes ☐ No | |
| Communication clear (PIC/VO) | ☐ Yes ☐ No | |
| Area cleared if necessary | ☐ Yes ☐ No ☐ N/A | |
| Emergency landing executed | ☐ Yes ☐ No ☐ N/A | |
| Aircraft secured/made safe | ☐ Yes ☐ No | |
| Battery safety managed | ☐ Yes ☐ No | |
| Incident reported correctly | ☐ Yes ☐ No | |
| Notifications made as required | ☐ Yes ☐ No | |

---

## SECTION 10: EQUIPMENT TESTED

| Equipment | Functional | Notes |
|:----------|:-----------|:------|
| Fire alarm system | ☐ Yes ☐ No ☐ N/A | |
| Public address system | ☐ Yes ☐ No ☐ N/A | |
| Emergency lighting | ☐ Yes ☐ No ☐ N/A | |
| Fire extinguishers accessible | ☐ Yes ☐ No ☐ N/A | |
| First aid kit stocked | ☐ Yes ☐ No | |
| AED | ☐ Yes ☐ No ☐ N/A | |
| Communication devices | ☐ Yes ☐ No | |
| Emergency exits | ☐ Yes ☐ No | |
| Spill kit | ☐ Yes ☐ No ☐ N/A | |
| Fire suppression (battery) | ☐ Yes ☐ No ☐ N/A | |

---

## SECTION 11: EVALUATION

### 11.1 Objectives Met

| # | Objective | Met | Notes |
|:--|:----------|:----|:------|
| 1 | | ☐ Yes ☐ No ☐ Partial | |
| 2 | | ☐ Yes ☐ No ☐ Partial | |
| 3 | | ☐ Yes ☐ No ☐ Partial | |
| 4 | | ☐ Yes ☐ No ☐ Partial | |

### 11.2 Overall Performance Rating

| Rating | Select |
|:-------|:-------|
| Excellent - All objectives met, no significant issues | ☐ |
| Good - Most objectives met, minor issues identified | ☐ |
| Satisfactory - Objectives partially met, improvements needed | ☐ |
| Needs Improvement - Significant deficiencies identified | ☐ |
| Unsatisfactory - Major failures, immediate action required | ☐ |

### 11.3 Strengths Observed

| Strengths |
|:----------|
| |
| |
| |

### 11.4 Areas for Improvement

| # | Area for Improvement | Priority |
|:--|:---------------------|:---------|
| 1 | | ☐ H ☐ M ☐ L |
| 2 | | ☐ H ☐ M ☐ L |
| 3 | | ☐ H ☐ M ☐ L |
| 4 | | ☐ H ☐ M ☐ L |
| 5 | | ☐ H ☐ M ☐ L |

---

## SECTION 12: DEBRIEF

### 12.1 Debrief Conducted

| Field | Entry |
|:------|:------|
| Debrief held | ☐ Yes |
| Date/Time | |
| Facilitated by | |
| Attendees | |

### 12.2 Key Discussion Points

| Discussion Points |
|:------------------|
| |
| |
| |

### 12.3 Participant Feedback

| Feedback |
|:---------|
| |
| |
| |

---

## SECTION 13: CORRECTIVE ACTIONS

| # | Corrective Action | Responsible | Due Date | Status |
|:--|:------------------|:------------|:---------|:-------|
| 1 | | | | ☐ Open |
| 2 | | | | ☐ Open |
| 3 | | | | ☐ Open |
| 4 | | | | ☐ Open |
| 5 | | | | ☐ Open |

### 13.1 Procedure Updates Required

| Procedure | Update Required | Responsible | Due Date |
|:----------|:----------------|:------------|:---------|
| ERP | ☐ Yes ☐ No | | |
| SOP | ☐ Yes ☐ No | | |
| QRC | ☐ Yes ☐ No | | |

---

## SECTION 14: TRAINING NEEDS IDENTIFIED

| Training Need | For Whom | Priority |
|:--------------|:---------|:---------|
| | | ☐ H ☐ M ☐ L |
| | | ☐ H ☐ M ☐ L |
| | | ☐ H ☐ M ☐ L |

---

## SECTION 15: NEXT DRILL

| Field | Entry |
|:------|:------|
| Next drill type | |
| Tentative date | |
| Focus areas | |

---

## SECTION 16: SIGNATURES

### Drill Coordinator

| Field | Entry |
|:------|:------|
| Name | |
| Signature | |
| Date | |

### Safety Observer/Evaluator

| Field | Entry |
|:------|:------|
| Name | |
| Signature | |
| Date | |

### Management Review

| Field | Entry |
|:------|:------|
| Reviewed By | |
| Position | |
| Date | |
| Signature | |
| Comments | |

---

## ATTACHMENTS

| Attachment | Included |
|:-----------|:---------|
| Photos/video | ☐ |
| Floor plan/evacuation map | ☐ |
| Participant sign-in sheet | ☐ |
| Evaluator notes | ☐ |
| Previous drill report (comparison) | ☐ |

---

## DRILL SCHEDULE TRACKING

| Drill Type | Frequency | Last Conducted | Next Due |
|:-----------|:----------|:---------------|:---------|
| Fire/Evacuation | Annual | | |
| Medical Emergency | Annual | | |
| RPAS Emergency | Annual | | |
| Working Alone | Annual | | |
| Spill Response | Annual | | |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| BC OHS Regulation | 3 years |
| SECOR Element F | 3 years |
| Best Practice | 5 years |

---

**Document Control:** FRM-DRILL v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Field Level Hazard Assessment',
  'form',
  'FRM-FLHA',
  'Forms',
  '# AERIA SOLUTIONS LTD

# FIELD LEVEL HAZARD ASSESSMENT (FLHA)

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-FLHA |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Site Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Time** | |
| **Location/Site** | |
| **Project/Job** | |
| **Completed By** | |

---

## Weather Conditions

| Condition | Current | Acceptable? |
|:----------|:--------|:------------|
| Temperature | ___°C | ☐ Yes ☐ No |
| Wind | ___ km/h Direction: ___ | ☐ Yes ☐ No |
| Visibility | ___ km | ☐ Yes ☐ No |
| Precipitation | ☐ None ☐ Rain ☐ Snow | ☐ Yes ☐ No |
| Cloud Ceiling | ___ ft AGL | ☐ Yes ☐ No |

---

## Fit for Duty

All personnel confirm they are fit for duty:

| Name | Fit for Duty? | Signature |
|:-----|:--------------|:----------|
| | ☐ Yes ☐ No | |
| | ☐ Yes ☐ No | |
| | ☐ Yes ☐ No | |
| | ☐ Yes ☐ No | |

---

## Hazard Assessment

### Step 1: Identify Hazards

| Category | Hazards Present | Details |
|:---------|:----------------|:--------|
| **Terrain** | ☐ Slopes ☐ Unstable ground ☐ Water ☐ Obstacles | |
| **Traffic** | ☐ Vehicle ☐ Pedestrian ☐ Aircraft | |
| **Wildlife** | ☐ Bears ☐ Other animals ☐ Insects | |
| **Environmental** | ☐ Heat ☐ Cold ☐ UV ☐ Noise | |
| **Electrical** | ☐ Power lines ☐ Equipment | |
| **Chemical** | ☐ Fuels ☐ Batteries ☐ Other | |
| **Other** | | |

### Step 2: Assess & Control

| Hazard | Risk (H/M/L) | Controls | Responsible |
|:-------|:-------------|:---------|:------------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

**Risk Rating:**
- **H** = High (Stop work; additional controls required)
- **M** = Medium (Proceed with controls in place)
- **L** = Low (Proceed with awareness)

---

## PPE Required

| PPE | Required? | Verified? |
|:----|:----------|:----------|
| Safety footwear | ☐ Yes ☐ No | ☐ |
| High-visibility vest | ☐ Yes ☐ No | ☐ |
| Hard hat | ☐ Yes ☐ No | ☐ |
| Safety glasses | ☐ Yes ☐ No | ☐ |
| Hearing protection | ☐ Yes ☐ No | ☐ |
| Gloves | ☐ Yes ☐ No | ☐ |
| Other: ___________ | ☐ Yes ☐ No | ☐ |

---

## Emergency Information

| Item | Details |
|:-----|:--------|
| Emergency contact | |
| Nearest hospital | |
| First aid kit location | |
| Rally point | |
| Communication method | |
| Working alone check-in | ☐ N/A Time: ___ Contact: ___ |

---

## Pre-Task Discussion

Briefing conducted: ☐ Yes

Topics covered:
- ☐ Scope of work
- ☐ Hazards identified
- ☐ Controls in place
- ☐ Emergency procedures
- ☐ Communication plan

---

## Go/No-Go Decision

☐ **GO** - All hazards controlled; proceed with work

☐ **NO-GO** - Uncontrolled hazards; do not proceed

If NO-GO, reason: _______________________________________________

---

## Changes During Work

If conditions change, reassess:

| Time | Change | New Controls | Initials |
|:-----|:-------|:-------------|:---------|
| | | | |
| | | | |

---

## End of Day Review

| Item | Status |
|:-----|:-------|
| Incidents/near misses | ☐ None ☐ Yes (report separately) |
| Injuries | ☐ None ☐ Yes (report separately) |
| Issues for next day | |

---

## Signatures

All personnel have reviewed this assessment and understand the hazards and controls:

| Name | Signature | Date |
|:-----|:----------|:-----|
| | | |
| | | |
| | | |
| | | |

---

**Document Control:** FRM-FLHA v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'LOG RPAS Flight Log',
  'form',
  'FRM-FLIGHT',
  'Forms',
  '# AERIA SOLUTIONS LTD

# RPAS FLIGHT LOG

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-FLIGHT-LOG |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Flight Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Project/Client** | |
| **Location** | |
| **Coordinates** | Lat: _______ Long: _______ |

---

## Personnel

| Role | Name | Certificate # |
|:-----|:-----|:--------------|
| **PIC** | | |
| **VO** | | |
| **Other Crew** | | |

---

## Aircraft Information

| Field | Entry |
|:------|:------|
| **Aircraft Type** | |
| **Registration/ID** | |
| **Serial Number** | |
| **Payload** | |

---

## Pre-Flight

| Check | Status |
|:------|:-------|
| FLHA completed | ☐ Yes |
| Pre-flight inspection | ☐ Pass ☐ Defect noted |
| Batteries charged | ☐ Yes |
| Weather verified | ☐ Yes |
| Airspace authorization | ☐ N/A ☐ NAV CANADA ☐ Zone |
| NOTAMs reviewed | ☐ Yes |
| Site survey | ☐ Complete |

---

## Weather at Operation

| Condition | Value |
|:----------|:------|
| Temperature | ___°C |
| Wind | ___ km/h Dir: ___ |
| Visibility | ___ km |
| Ceiling | ___ ft AGL |
| Conditions | ☐ VMC |

---

## Flight Record

| Flight # | Takeoff Time | Landing Time | Flight Time | Battery ID | Max Alt AGL | Notes |
|:---------|:-------------|:-------------|:------------|:-----------|:------------|:------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |

---

## Operation Type

| Type | Selected |
|:-----|:---------|
| Basic | ☐ |
| Advanced | ☐ |
| BVLOS (L1C Declaration) | ☐ |
| SFOC | ☐ SFOC #: _______ |

---

## Distance from People

| Distance | Maintained? |
|:---------|:------------|
| Minimum horizontal distance | ☐ 30m ☐ 5m (Advanced) ☐ N/A |

---

## Flight Summary

| Item | Value |
|:-----|:------|
| **Total Flights** | |
| **Total Flight Time** | |
| **Operation Success** | ☐ Yes ☐ Partial ☐ No |

---

## Incidents/Occurrences

☐ None

☐ Yes - Details:

| Item | Details |
|:-----|:--------|
| Description | |
| Reported? | ☐ Yes ☐ Pending |

---

## Post-Flight

| Check | Status |
|:------|:-------|
| Post-flight inspection | ☐ Pass ☐ Defect noted |
| Aircraft secured | ☐ Yes |
| Data downloaded | ☐ Yes ☐ N/A |
| Defects recorded | ☐ None ☐ Yes (see maintenance log) |

---

## Airspace Authorization Details (if applicable)

| Field | Entry |
|:------|:------|
| Authorizing body | ☐ NAV CANADA ☐ Zone |
| Reference # | |
| Valid period | |
| Conditions | |

---

## PIC Declaration

I certify that this flight log is accurate and complete, and that all operations were conducted in compliance with CARs Part IX and company procedures.

| Field | Entry |
|:------|:------|
| PIC Signature | |
| Date | |

---

## Retention

This record shall be retained for 10 years per CARs 901.65.

---

**Document Control:** FRM-FLIGHT-LOG v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Fitness For Duty',
  'form',
  'FRM-IMSAFE',
  'Forms',
  '# AERIA SOLUTIONS LTD

# IMSAFE FITNESS FOR DUTY CHECKLIST

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-IMSAFE |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | CAR 602.02, CAR 602.03, Standard 922, SECOR Element C |

---

## PURPOSE

The IMSAFE checklist is a personal fitness-for-duty self-assessment tool used by pilots and flight crew before conducting RPAS operations. This checklist ensures crew members are physically and mentally fit to safely perform their duties.

**Pilots must be fit for duty before every flight. If ANY item is checked "NO" or raises concern, the pilot should not fly until the condition is resolved.**

---

## REGULATORY BASIS

**CAR 602.02 - Fitness of Flight Crew Members:**
No person shall act as a flight crew member if they are suffering from any impairment that would affect their ability to safely perform their duties.

**CAR 602.03 - Alcohol and Drugs:**
No person shall act as a crew member within 12 hours after consuming alcohol or while under the influence of any drug that impairs their faculties.

---

## SECTION 1: ASSESSMENT INFORMATION

| Field | Entry |
|:------|:------|
| **Date** | |
| **Time** | |
| **Name** | |
| **Position** | ☐ PIC ☐ Pilot ☐ Visual Observer ☐ Payload Operator |
| **Project/Client** | |
| **Location** | |

---

## SECTION 2: IMSAFE SELF-ASSESSMENT

**Answer honestly. Your safety and the safety of others depends on it.**

### I - ILLNESS

*Am I suffering from any illness or symptoms that could affect my performance?*

| Question | Response |
|:---------|:---------|
| Am I free from illness or infection? | ☐ YES ☐ NO |
| Am I free from cold/flu symptoms? | ☐ YES ☐ NO |
| Am I free from fever? | ☐ YES ☐ NO |
| Am I free from nausea or stomach upset? | ☐ YES ☐ NO |
| Am I free from headache or migraine? | ☐ YES ☐ NO |
| Am I free from dizziness or vertigo? | ☐ YES ☐ NO |
| Is my vision normal (with correction if required)? | ☐ YES ☐ NO |
| Is my hearing normal? | ☐ YES ☐ NO |

| If any "NO" - Details: |
|:-----------------------|
| |

**ILLNESS STATUS:** ☐ FIT ☐ UNFIT

---

### M - MEDICATION

*Am I taking any medication that could affect my ability to safely operate?*

| Question | Response |
|:---------|:---------|
| Am I free from any medications that cause drowsiness? | ☐ YES ☐ NO |
| Am I free from any medications that impair judgment? | ☐ YES ☐ NO |
| Am I free from any medications that affect coordination? | ☐ YES ☐ NO |
| Am I free from any medications with "do not operate machinery" warnings? | ☐ YES ☐ NO |
| Have I consulted a physician about flying while on any current medications? | ☐ YES ☐ NO ☐ N/A |

**Common medications that may impair performance:**
- Antihistamines (allergy medication)
- Sleep aids
- Pain medications (especially opioids)
- Anti-anxiety medications
- Some blood pressure medications
- Cannabis products (including CBD)

| Current Medications (if any): |
|:------------------------------|
| |

| If any concern - Details: |
|:--------------------------|
| |

**MEDICATION STATUS:** ☐ FIT ☐ UNFIT

---

### S - STRESS

*Am I under significant stress that could affect my concentration or judgment?*

| Question | Response |
|:---------|:---------|
| Am I free from significant personal stress? | ☐ YES ☐ NO |
| Am I free from significant work-related stress? | ☐ YES ☐ NO |
| Am I free from financial concerns that are distracting? | ☐ YES ☐ NO |
| Am I free from relationship problems that are distracting? | ☐ YES ☐ NO |
| Can I focus fully on the task at hand? | ☐ YES ☐ NO |
| Am I able to make sound decisions without distraction? | ☐ YES ☐ NO |

| If any "NO" - Details: |
|:-----------------------|
| |

**STRESS STATUS:** ☐ FIT ☐ UNFIT

---

### A - ALCOHOL

*Have I consumed alcohol recently or am I suffering from aftereffects?*

| Question | Response |
|:---------|:---------|
| Have I been alcohol-free for at least 12 hours? | ☐ YES ☐ NO |
| Am I free from any aftereffects of alcohol (hangover)? | ☐ YES ☐ NO |
| Is my blood alcohol content 0.00%? | ☐ YES ☐ NO ☐ UNCERTAIN |

**Regulatory Requirement:** CAR 602.03 requires a minimum 12-hour period between consumption of alcohol and acting as crew member. Best practice is 24 hours ("bottle to throttle").

| If any "NO" or "UNCERTAIN" - Details: |
|:--------------------------------------|
| |

**ALCOHOL STATUS:** ☐ FIT ☐ UNFIT

---

### F - FATIGUE

*Am I adequately rested to safely perform my duties?*

| Question | Response |
|:---------|:---------|
| Did I get adequate sleep last night (7+ hours recommended)? | ☐ YES ☐ NO |
| Hours of sleep last night: | _____ hours |
| Am I feeling alert and rested? | ☐ YES ☐ NO |
| Have I had adequate rest in the past 48 hours? | ☐ YES ☐ NO |
| Am I free from symptoms of fatigue (yawning, difficulty concentrating)? | ☐ YES ☐ NO |
| Have I avoided extended periods of physical exertion? | ☐ YES ☐ NO |
| Am I free from jet lag or circadian rhythm disruption? | ☐ YES ☐ NO |

**Fatigue Warning Signs:**
- Difficulty concentrating
- Slower reaction times
- Irritability
- Microsleeps or nodding off
- Difficulty remembering recent events

| If any "NO" - Details: |
|:-----------------------|
| |

**FATIGUE STATUS:** ☐ FIT ☐ UNFIT

---

### E - EMOTION / EATING

*Am I emotionally stable and properly nourished?*

#### Emotion

| Question | Response |
|:---------|:---------|
| Am I emotionally stable and in a good mental state? | ☐ YES ☐ NO |
| Am I free from anger, anxiety, or depression that could affect judgment? | ☐ YES ☐ NO |
| Am I free from recent emotional trauma or upset? | ☐ YES ☐ NO |
| Am I able to remain calm under pressure? | ☐ YES ☐ NO |

#### Eating/Hydration

| Question | Response |
|:---------|:---------|
| Have I eaten properly today? | ☐ YES ☐ NO |
| Am I adequately hydrated? | ☐ YES ☐ NO |
| Am I free from low blood sugar symptoms? | ☐ YES ☐ NO |
| Do I have food and water for the planned operation? | ☐ YES ☐ NO |

| If any "NO" - Details: |
|:-----------------------|
| |

**EMOTION/EATING STATUS:** ☐ FIT ☐ UNFIT

---

## SECTION 3: OVERALL FITNESS DETERMINATION

### Summary

| Category | Status |
|:---------|:-------|
| **I** - Illness | ☐ FIT ☐ UNFIT |
| **M** - Medication | ☐ FIT ☐ UNFIT |
| **S** - Stress | ☐ FIT ☐ UNFIT |
| **A** - Alcohol | ☐ FIT ☐ UNFIT |
| **F** - Fatigue | ☐ FIT ☐ UNFIT |
| **E** - Emotion/Eating | ☐ FIT ☐ UNFIT |

### Overall Determination

| Determination | Select |
|:--------------|:-------|
| **FIT FOR DUTY** - All categories satisfactory | ☐ |
| **FIT WITH LIMITATIONS** - Minor concerns, can proceed with caution | ☐ |
| **UNFIT FOR DUTY** - One or more categories unsatisfactory | ☐ |

### If Fit With Limitations

| Limitations/Precautions: |
|:-------------------------|
| |
| |

---

## SECTION 4: DECLARATION

**I certify that:**

- ☐ I have honestly assessed my fitness for duty
- ☐ I understand that flying while unfit endangers myself and others
- ☐ I will not operate if any condition could impair my performance
- ☐ I will immediately cease operations if my condition changes
- ☐ I understand I have stop-work authority if I become unfit during operations

| Field | Entry |
|:------|:------|
| **Name (Print)** | |
| **Signature** | |
| **Date** | |
| **Time** | |

---

## SECTION 5: SUPERVISOR VERIFICATION (If Required)

*Complete if worker has declared limitations or supervisor deems verification necessary*

| Field | Entry |
|:------|:------|
| Supervisor observation of fitness | ☐ Appears Fit ☐ Concern Noted |
| Discussion held with worker | ☐ Yes ☐ No |
| Decision | ☐ Cleared for Duty ☐ Restricted ☐ Removed from Duty |
| Restrictions (if any) | |
| Supervisor Name | |
| Supervisor Signature | |
| Date/Time | |

---

## SECTION 6: MID-DAY / CONTINUOUS ASSESSMENT

**For extended operations, reassess fitness throughout the day:**

| Time | Status | Notes | Initials |
|:-----|:-------|:------|:---------|
| | ☐ Fit ☐ Changed | | |
| | ☐ Fit ☐ Changed | | |
| | ☐ Fit ☐ Changed | | |
| | ☐ Fit ☐ Changed | | |

**If status changes to UNFIT during operations:**
1. Immediately cease flight operations
2. Notify crew/supervisor
3. Transfer PIC duties if possible
4. Document reason for change

---

## SECTION 7: END OF DAY CONFIRMATION

| Field | Entry |
|:------|:------|
| Operations completed safely | ☐ Yes |
| Any fitness concerns during operations | ☐ No ☐ Yes - Details: |
| Signature | |
| Time | |

---

## QUICK REFERENCE: IMSAFE

| Letter | Category | Key Questions |
|:-------|:---------|:--------------|
| **I** | Illness | Any symptoms that could affect performance? |
| **M** | Medication | Taking anything that could impair abilities? |
| **S** | Stress | Under pressure that could affect judgment? |
| **A** | Alcohol | Free from alcohol for 12+ hours? No aftereffects? |
| **F** | Fatigue | Well rested? Alert? Adequate sleep? |
| **E** | Emotion/Eating | Emotionally stable? Properly nourished? |

**Remember: If in doubt, don''t fly.**

---

## GUIDANCE

### When to Ground Yourself

- Any illness with symptoms (even mild cold/flu)
- Any medication with "may cause drowsiness" or similar warnings
- Significant personal stress or emotional upset
- Less than 12 hours since last alcoholic drink
- Any alcohol aftereffects (hangover)
- Less than 6 hours of sleep in past 24 hours
- Extreme hunger or dehydration
- Feeling "off" for any reason

### Crew Responsibility

All crew members have:
- **Responsibility** to self-assess fitness
- **Authority** to declare themselves unfit
- **Duty** to report fitness concerns about other crew
- **Protection** from reprisal for fitness decisions

### Supervisor Responsibility

Supervisors should:
- Observe crew for signs of impairment
- Question fitness if concerns arise
- Support crew who declare themselves unfit
- Never pressure crew to fly when unfit
- Document any fitness-related decisions

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| CAR 901.57 (flight records) | 12 months |
| SECOR Element C | 3 years |
| Best Practice | Retain with flight log |

---

**Document Control:** FRM-IMSAFE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Incident Report',
  'form',
  'FRM-INCIDENT',
  'Forms',
  '# AERIA SOLUTIONS LTD

# INCIDENT REPORT

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-INCIDENT |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Report Information

| Field | Entry |
|:------|:------|
| **Report Date** | |
| **Report Number** | |
| **Reported By** | |
| **Contact Phone** | |

---

## Incident Classification

| Type | Select |
|:-----|:-------|
| Injury | ☐ |
| Property Damage | ☐ |
| Environmental | ☐ |
| Near Miss | ☐ |
| RPAS Occurrence | ☐ |
| Security | ☐ |
| Other | ☐ ____________ |

---

## Severity

| Level | Select |
|:------|:-------|
| Minor | ☐ No injury; minor property damage |
| Moderate | ☐ First aid injury; moderate damage |
| Serious | ☐ Medical treatment; significant damage |
| Major | ☐ Lost time injury; major damage |
| Critical | ☐ Fatality; permanent disability; catastrophic damage |

---

## Incident Details

| Field | Entry |
|:------|:------|
| **Date of Incident** | |
| **Time of Incident** | |
| **Location** | |
| **Project/Client** | |

---

## Description

**What happened?** (Describe the sequence of events)

| Description |
|:------------|
| |
| |
| |
| |
| |

---

## Persons Involved

| Name | Role | Injury? | Treatment |
|:-----|:-----|:--------|:----------|
| | | ☐ Yes ☐ No | |
| | | ☐ Yes ☐ No | |
| | | ☐ Yes ☐ No | |

---

## Equipment Involved

| Equipment | ID/Serial | Damage |
|:----------|:----------|:-------|
| | | |
| | | |

---

## Witnesses

| Name | Contact | Statement Taken? |
|:-----|:--------|:-----------------|
| | | ☐ |
| | | ☐ |

---

## Immediate Actions Taken

| Actions |
|:--------|
| |
| |
| |

---

## Root Cause Analysis (Initial)

| Factor | Contribute? | Details |
|:-------|:------------|:--------|
| Human factors | ☐ Yes ☐ No | |
| Equipment failure | ☐ Yes ☐ No | |
| Environmental | ☐ Yes ☐ No | |
| Procedure/training | ☐ Yes ☐ No | |
| Other | ☐ Yes ☐ No | |

---

## Regulatory Reporting Required?

| Authority | Required? | Reported? | Reference # |
|:----------|:----------|:----------|:------------|
| Transport Canada/TSB | ☐ Yes ☐ No | ☐ | |
| WorkSafeBC | ☐ Yes ☐ No | ☐ | |
| Environment | ☐ Yes ☐ No | ☐ | |
| Client | ☐ Yes ☐ No | ☐ | |

---

## Photos/Documentation

| Item | Attached? |
|:-----|:----------|
| Photos | ☐ Yes ☐ No ☐ N/A |
| Diagrams/sketches | ☐ Yes ☐ No ☐ N/A |
| Statements | ☐ Yes ☐ No ☐ N/A |
| Flight data | ☐ Yes ☐ No ☐ N/A |

---

## Follow-up Required

| Action | Assigned To | Due Date | Status |
|:-------|:------------|:---------|:-------|
| | | | ☐ Open |
| | | | ☐ Open |
| | | | ☐ Open |

---

## Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Reporter | | | |
| Supervisor/Manager | | | |

---

## Management Review

| Field | Entry |
|:------|:------|
| Reviewed By | |
| Review Date | |
| Investigation Level | ☐ Basic ☐ Full |
| Additional Actions | |

---

## Closure

| Field | Entry |
|:------|:------|
| All actions complete | ☐ Yes |
| Closed By | |
| Closure Date | |

---

**Document Control:** FRM-INCIDENT v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Worksite Inspection',
  'form',
  'FRM-INSPECTION',
  'Forms',
  '# AERIA SOLUTIONS LTD

# WORKSITE INSPECTION FORM

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-INSPECTION |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Inspection Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Time** | |
| **Location/Site** | |
| **Project** | |
| **Inspector** | |
| **Inspection Type** | ☐ Daily ☐ Weekly ☐ Project startup ☐ Special |

---

## Worksite Conditions

| Item | Status | Comments |
|:-----|:-------|:---------|
| Access/egress clear | ☐ S ☐ U ☐ N/A | |
| Work area organized | ☐ S ☐ U ☐ N/A | |
| Housekeeping | ☐ S ☐ U ☐ N/A | |
| Lighting adequate | ☐ S ☐ U ☐ N/A | |
| Ventilation adequate | ☐ S ☐ U ☐ N/A | |
| Weather appropriate | ☐ S ☐ U ☐ N/A | |

**S = Satisfactory, U = Unsatisfactory, N/A = Not Applicable**

---

## Safety Documentation

| Item | Status | Comments |
|:-----|:-------|:---------|
| FLHA completed | ☐ S ☐ U ☐ N/A | |
| FLHA current for conditions | ☐ S ☐ U ☐ N/A | |
| Emergency plan available | ☐ S ☐ U ☐ N/A | |
| Emergency contacts posted | ☐ S ☐ U ☐ N/A | |
| Permits in place (if required) | ☐ S ☐ U ☐ N/A | |

---

## Personal Protective Equipment

| Item | Status | Comments |
|:-----|:-------|:---------|
| Required PPE identified | ☐ S ☐ U ☐ N/A | |
| PPE available | ☐ S ☐ U ☐ N/A | |
| PPE being worn | ☐ S ☐ U ☐ N/A | |
| PPE in good condition | ☐ S ☐ U ☐ N/A | |

---

## Equipment

| Item | Status | Comments |
|:-----|:-------|:---------|
| RPAS in good condition | ☐ S ☐ U ☐ N/A | |
| Pre-flight completed | ☐ S ☐ U ☐ N/A | |
| Batteries properly stored | ☐ S ☐ U ☐ N/A | |
| Tools/equipment maintained | ☐ S ☐ U ☐ N/A | |
| Vehicles in good condition | ☐ S ☐ U ☐ N/A | |
| First aid kit stocked | ☐ S ☐ U ☐ N/A | |
| Communication devices working | ☐ S ☐ U ☐ N/A | |
| Fire extinguisher available | ☐ S ☐ U ☐ N/A | |

---

## Environmental

| Item | Status | Comments |
|:-----|:-------|:---------|
| No spills/leaks | ☐ S ☐ U ☐ N/A | |
| Waste properly managed | ☐ S ☐ U ☐ N/A | |
| Spill kit available | ☐ S ☐ U ☐ N/A | |
| Wildlife considerations addressed | ☐ S ☐ U ☐ N/A | |

---

## Emergency Preparedness

| Item | Status | Comments |
|:-----|:-------|:---------|
| Emergency procedures known | ☐ S ☐ U ☐ N/A | |
| Rally point identified | ☐ S ☐ U ☐ N/A | |
| First aid provider on site | ☐ S ☐ U ☐ N/A | |
| Route to hospital known | ☐ S ☐ U ☐ N/A | |
| Working alone protocol in place | ☐ S ☐ U ☐ N/A | |

---

## Personnel

| Item | Status | Comments |
|:-----|:-------|:---------|
| All personnel briefed | ☐ S ☐ U ☐ N/A | |
| Personnel fit for duty | ☐ S ☐ U ☐ N/A | |
| Qualifications current | ☐ S ☐ U ☐ N/A | |
| Communication maintained | ☐ S ☐ U ☐ N/A | |

---

## Hazards Observed

| Hazard | Location | Priority | Action Required |
|:-------|:---------|:---------|:----------------|
| | | ☐ H ☐ M ☐ L | |
| | | ☐ H ☐ M ☐ L | |
| | | ☐ H ☐ M ☐ L | |
| | | ☐ H ☐ M ☐ L | |

**Priority: H = High (immediate), M = Medium (today), L = Low (scheduled)**

---

## Deficiencies Identified

| # | Deficiency | Assigned To | Due Date | Status |
|:--|:-----------|:------------|:---------|:-------|
| 1 | | | | ☐ Open |
| 2 | | | | ☐ Open |
| 3 | | | | ☐ Open |
| 4 | | | | ☐ Open |

---

## Positive Observations

| # | Observation |
|:--|:------------|
| 1 | |
| 2 | |

---

## Overall Site Status

☐ **Satisfactory** - No significant issues

☐ **Needs Attention** - Minor issues to address

☐ **Unsatisfactory** - Significant issues require correction before continuing

---

## Sign-Off

| Field | Entry |
|:------|:------|
| Inspector | |
| Signature | |
| Date | |

---

## Follow-Up

| Field | Entry |
|:------|:------|
| Follow-up required | ☐ No ☐ Yes |
| Follow-up date | |
| Completed by | |

---

**Document Control:** FRM-INSPECTION v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Investigation Report',
  'form',
  'FRM-INVESTIGATION',
  'Forms',
  '# AERIA SOLUTIONS LTD

# INCIDENT INVESTIGATION REPORT

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-INVESTIGATION |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | WCA Div 10 S.68-72, BC OHS Reg, SECOR Element G |

---

## SECTION 1: REPORT INFORMATION

| Field | Entry |
|:------|:------|
| **Investigation Number** | INV- |
| **Related Incident Report** | INC- |
| **Investigation Type** | ☐ Basic ☐ Full ☐ TSB Reportable |
| **Report Status** | ☐ Preliminary (48hr) ☐ Final (30 day) |
| **Date of Incident** | |
| **Date Investigation Started** | |
| **Date Report Completed** | |
| **Lead Investigator** | |
| **Investigation Team** | |

---

## SECTION 2: INCIDENT SUMMARY

### 2.1 Classification

| Severity | Select | Definition |
|:---------|:-------|:-----------|
| Level 1 - Fatality | ☐ | Work-related death |
| Level 2 - Serious Injury | ☐ | Hospitalization, permanent disability, amputation |
| Level 3 - Lost Time | ☐ | Lost time injury beyond day of incident |
| Level 4 - Medical Treatment | ☐ | Requires medical attention beyond first aid |
| Level 5 - First Aid | ☐ | First aid treatment only |
| Level 6 - Near Miss (High Potential) | ☐ | No injury, but SIF potential existed |
| Level 7 - Near Miss (Low Potential) | ☐ | No injury, low potential for serious harm |
| Level 8 - Property/Equipment Only | ☐ | Damage to property or equipment |

### 2.2 Incident Type

| Type | Select |
|:-----|:-------|
| Personal Injury | ☐ |
| RPAS Occurrence | ☐ |
| Vehicle Incident | ☐ |
| Property Damage | ☐ |
| Environmental Release | ☐ |
| Fire/Explosion | ☐ |
| Security/Theft | ☐ |
| Near Miss | ☐ |
| Other: | |

### 2.3 Brief Description

| Field | Entry |
|:------|:------|
| Location | |
| Project/Client | |
| Task Being Performed | |
| Weather Conditions | |
| Brief Summary (2-3 sentences) | |

---

## SECTION 3: PERSONS INVOLVED

### 3.1 Injured Party (if applicable)

| Field | Entry |
|:------|:------|
| Name | |
| Position | |
| Employer | ☐ Aeria ☐ Subcontractor: ____________ |
| Date of Birth | |
| Experience (years) | |
| Time on Task | |
| Injury Description | |
| Body Part(s) Affected | |
| Treatment Provided | ☐ None ☐ First Aid ☐ Medical ☐ Hospital |
| Lost Time | ☐ No ☐ Yes - Days: ___ |
| WorkSafeBC Claim Filed | ☐ N/A ☐ Yes - Claim #: |

### 3.2 Witnesses

| Name | Position | Contact | Statement Attached |
|:-----|:---------|:--------|:-------------------|
| | | | ☐ |
| | | | ☐ |
| | | | ☐ |

### 3.3 Other Personnel Involved

| Name | Role in Incident |
|:-----|:-----------------|
| | |
| | |

---

## SECTION 4: SEQUENCE OF EVENTS

### 4.1 Timeline

Complete timeline from normal operations through incident to stabilization:

| Time | Event Description | Source |
|:-----|:------------------|:-------|
| | Normal operations / baseline | |
| | First deviation from normal | |
| | | |
| | | |
| | | |
| | Incident occurs | |
| | | |
| | Discovery / recognition | |
| | Emergency response | |
| | Stabilization | |

### 4.2 Detailed Narrative

**What happened?** Provide complete factual description of the incident, including events leading up to, during, and after:

| Narrative |
|:----------|
| |
| |
| |
| |
| |
| |
| |

---

## SECTION 5: EVIDENCE DOCUMENTATION

### 5.1 Physical Evidence

| Item | Description | Location Found | Collected By | Storage Location |
|:-----|:------------|:---------------|:-------------|:-----------------|
| | | | | |
| | | | | |
| | | | | |

### 5.2 Documentation Collected

| Item | Collected | Attached |
|:-----|:----------|:---------|
| Photographs | ☐ Yes ☐ No | ☐ |
| Video footage | ☐ Yes ☐ No ☐ N/A | ☐ |
| RPAS flight data/logs | ☐ Yes ☐ No ☐ N/A | ☐ |
| FLHA from day of incident | ☐ Yes ☐ No | ☐ |
| Pre-flight checklist | ☐ Yes ☐ No ☐ N/A | ☐ |
| Training records | ☐ Yes ☐ No | ☐ |
| Maintenance records | ☐ Yes ☐ No ☐ N/A | ☐ |
| Procedures/SOPs | ☐ Yes ☐ No | ☐ |
| Previous inspection reports | ☐ Yes ☐ No | ☐ |
| Witness statements | ☐ Yes ☐ No | ☐ |
| Diagrams/sketches | ☐ Yes ☐ No | ☐ |
| Weather data | ☐ Yes ☐ No | ☐ |
| Other: | ☐ Yes ☐ No | ☐ |

---

## SECTION 6: ROOT CAUSE ANALYSIS

### 6.1 Immediate Causes (Direct Causes)

**What unsafe acts or conditions directly caused or contributed to the incident?**

#### Unsafe Acts (What people did or didn''t do)

| Category | Present | Description |
|:---------|:--------|:------------|
| Operating without authorization | ☐ | |
| Failure to warn/secure | ☐ | |
| Operating at improper speed | ☐ | |
| Removing/bypassing safety devices | ☐ | |
| Using defective equipment | ☐ | |
| Improper use of equipment | ☐ | |
| Failure to use PPE | ☐ | |
| Improper loading/lifting | ☐ | |
| Improper positioning | ☐ | |
| Servicing equipment in operation | ☐ | |
| Distraction/inattention | ☐ | |
| Failure to follow procedure | ☐ | |
| Other: | ☐ | |

#### Unsafe Conditions (What physical conditions existed)

| Category | Present | Description |
|:---------|:--------|:------------|
| Inadequate guards/barriers | ☐ | |
| Defective tools/equipment | ☐ | |
| Inadequate warning systems | ☐ | |
| Congestion/clutter | ☐ | |
| Poor housekeeping | ☐ | |
| Hazardous environmental conditions | ☐ | |
| Inadequate lighting | ☐ | |
| Excessive noise | ☐ | |
| Inadequate ventilation | ☐ | |
| Weather conditions | ☐ | |
| Terrain hazards | ☐ | |
| Other: | ☐ | |

### 6.2 Contributing Factors (Basic Causes)

**Why did the unsafe acts or conditions exist?**

#### Human/Personal Factors

| Factor | Contributed | Details |
|:-------|:------------|:--------|
| **Physical Capability** | | |
| Inadequate physical capability | ☐ | |
| Fatigue | ☐ | |
| Illness/medical condition | ☐ | |
| Impairment (drugs/alcohol) | ☐ | |
| **Mental/Psychological** | | |
| Lack of knowledge | ☐ | |
| Lack of skill | ☐ | |
| Stress | ☐ | |
| Complacency | ☐ | |
| Distraction | ☐ | |
| Time pressure | ☐ | |
| Poor judgement/decision-making | ☐ | |
| **Motivation** | | |
| Improper motivation | ☐ | |
| Shortcut taken | ☐ | |

#### Job/Task Factors

| Factor | Contributed | Details |
|:-------|:------------|:--------|
| **Procedures** | | |
| No procedure exists | ☐ | |
| Procedure inadequate | ☐ | |
| Procedure not followed | ☐ | |
| Procedure not understood | ☐ | |
| **Training** | | |
| Initial training inadequate | ☐ | |
| Refresher training inadequate | ☐ | |
| No task-specific training | ☐ | |
| **Supervision** | | |
| Inadequate supervision | ☐ | |
| Improper work assignment | ☐ | |
| **Tools/Equipment** | | |
| Improper tool/equipment | ☐ | |
| Tool/equipment defective | ☐ | |
| Maintenance inadequate | ☐ | |
| **Work Environment** | | |
| Workspace inadequate | ☐ | |
| Environmental exposure | ☐ | |
| Workload/staffing | ☐ | |

#### Organizational/Management System Factors

| Factor | Contributed | Details |
|:-------|:------------|:--------|
| Inadequate hazard assessment | ☐ | |
| Inadequate hazard controls | ☐ | |
| Inadequate inspection program | ☐ | |
| Inadequate training program | ☐ | |
| Inadequate emergency response | ☐ | |
| Inadequate change management | ☐ | |
| Resource constraints | ☐ | |
| Safety culture issues | ☐ | |
| Communication breakdown | ☐ | |
| Contractor management | ☐ | |
| Previous corrective actions inadequate | ☐ | |

### 6.3 Five Whys Analysis

Start with the incident and ask "Why?" to drill down to root cause(s):

| Level | Question | Answer |
|:------|:---------|:-------|
| **Problem Statement** | What happened? | |
| **Why 1** | Why did that happen? | |
| **Why 2** | Why did that happen? | |
| **Why 3** | Why did that happen? | |
| **Why 4** | Why did that happen? | |
| **Why 5** | Why did that happen? | |

**Additional causal pathways** (if multiple root causes):

| Causal Pathway 2 | Answer |
|:-----------------|:-------|
| Why 1 | |
| Why 2 | |
| Why 3 | |
| Why 4 | |
| Why 5 | |

### 6.4 Root Cause Summary

| Root Cause # | Description | Category |
|:-------------|:------------|:---------|
| 1 | | ☐ Human ☐ Equipment ☐ Environment ☐ Procedure ☐ Management |
| 2 | | ☐ Human ☐ Equipment ☐ Environment ☐ Procedure ☐ Management |
| 3 | | ☐ Human ☐ Equipment ☐ Environment ☐ Procedure ☐ Management |

---

## SECTION 7: CORRECTIVE ACTIONS

### 7.1 Immediate Actions (Already Taken)

| Action | Date Completed | Completed By |
|:-------|:---------------|:-------------|
| | | |
| | | |
| | | |

### 7.2 Corrective Actions Required

**Apply Hierarchy of Controls** - Select highest feasible level:

| Priority | Action | Hierarchy Level | Root Cause Addressed | Responsible | Target Date | Completion Date | Verified |
|:---------|:-------|:----------------|:---------------------|:------------|:------------|:----------------|:---------|
| 1 | | ☐ Elimination ☐ Substitution ☐ Engineering ☐ Administrative ☐ PPE | RC# | | | | ☐ |
| 2 | | ☐ Elimination ☐ Substitution ☐ Engineering ☐ Administrative ☐ PPE | RC# | | | | ☐ |
| 3 | | ☐ Elimination ☐ Substitution ☐ Engineering ☐ Administrative ☐ PPE | RC# | | | | ☐ |
| 4 | | ☐ Elimination ☐ Substitution ☐ Engineering ☐ Administrative ☐ PPE | RC# | | | | ☐ |
| 5 | | ☐ Elimination ☐ Substitution ☐ Engineering ☐ Administrative ☐ PPE | RC# | | | | ☐ |

**Hierarchy of Controls:**
1. **Elimination** - Physically remove the hazard
2. **Substitution** - Replace with less hazardous alternative
3. **Engineering Controls** - Isolate people from the hazard
4. **Administrative Controls** - Change the way people work
5. **PPE** - Protect the worker with personal equipment

### 7.3 Justification for Control Level Selected

If controls below engineering level are selected, explain why higher-level controls are not reasonably practicable:

| Justification |
|:--------------|
| |
| |

---

## SECTION 8: EFFECTIVENESS VERIFICATION

### 8.1 Verification Plan

| Action # | Verification Method | Verification Criteria | Verification Date | Verified By |
|:---------|:--------------------|:----------------------|:------------------|:------------|
| 1 | ☐ Inspection ☐ Audit ☐ Observation ☐ Data Review | | | |
| 2 | ☐ Inspection ☐ Audit ☐ Observation ☐ Data Review | | | |
| 3 | ☐ Inspection ☐ Audit ☐ Observation ☐ Data Review | | | |

### 8.2 Recurrence Monitoring

| Check | Response |
|:------|:---------|
| Monitoring period | ☐ 30 days ☐ 60 days ☐ 90 days ☐ Other: ___ |
| Has incident recurred during monitoring? | ☐ Yes ☐ No |
| If yes, additional actions required | |

---

## SECTION 9: REGULATORY REPORTING

### 9.1 External Reporting Requirements

| Authority | Reporting Threshold | Required | Reported | Date | Reference # |
|:----------|:--------------------|:---------|:---------|:-----|:------------|
| **WorkSafeBC** | Fatality, serious injury, major structural failure, hazmat release | ☐ Yes ☐ No | ☐ | | |
| **TSB** | RPAS fatality, serious injury from contact, collision with manned aircraft | ☐ Yes ☐ No | ☐ | | |
| **Transport Canada** | RPAS occurrence per CAR 901.49 | ☐ Yes ☐ No | ☐ | | |
| **Environment** | Environmental release | ☐ Yes ☐ No | ☐ | | |
| **Client** | Per contract requirements | ☐ Yes ☐ No | ☐ | | |

### 9.2 Internal Distribution

| Recipient | Date Provided |
|:----------|:--------------|
| Operations Manager | |
| Accountable Executive | |
| Affected Workers | |
| Joint H&S Committee/Rep | |
| Posted on Safety Board | ☐ Date: |

---

## SECTION 10: LESSONS LEARNED

### 10.1 Key Lessons

| Lesson # | Description | Communication Method |
|:---------|:------------|:---------------------|
| 1 | | ☐ Safety Meeting ☐ Toolbox Talk ☐ Email ☐ Training |
| 2 | | ☐ Safety Meeting ☐ Toolbox Talk ☐ Email ☐ Training |
| 3 | | ☐ Safety Meeting ☐ Toolbox Talk ☐ Email ☐ Training |

### 10.2 Similar Incidents

| Has similar incident occurred before? | ☐ Yes ☐ No |
|:--------------------------------------|:-----------|
| If yes, reference previous investigation | |
| Were previous corrective actions effective? | |
| What additional actions needed? | |

---

## SECTION 11: APPROVALS

### 11.1 Investigation Team Sign-Off

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Lead Investigator | | | |
| Team Member | | | |
| Team Member | | | |
| Worker Representative | | | |

### 11.2 Management Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Operations Manager | | | |
| Accountable Executive (if Level 1-3) | | | |

### 11.3 Closure

| Field | Entry |
|:------|:------|
| All corrective actions completed | ☐ Yes |
| All actions verified effective | ☐ Yes |
| Closed By | |
| Closure Date | |

---

## ATTACHMENTS

| Attachment | Included |
|:-----------|:---------|
| Witness statements | ☐ |
| Photographs | ☐ |
| Diagrams/sketches | ☐ |
| Flight data/logs | ☐ |
| Training records | ☐ |
| Maintenance records | ☐ |
| Applicable procedures | ☐ |
| FLHA | ☐ |
| Medical reports (if applicable) | ☐ |
| Other: | ☐ |

---

## DOCUMENT RETENTION

**Minimum Retention Period:** 5 years or as required by regulatory authority

| Regulatory Requirement | Retention |
|:-----------------------|:----------|
| BC OHS / WorkSafeBC | Not specified; best practice 5 years |
| SECOR/COR | 3 years minimum |
| RPAS (CAR 901.49) | 12 months |

---

**Document Control:** FRM-INVESTIGATION v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Maintenance Log',
  'form',
  'FRM-MAINT',
  'Forms',
  '# AERIA SOLUTIONS LTD

# MAINTENANCE LOG

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-MAINT |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Aircraft Information

| Field | Entry |
|:------|:------|
| **Aircraft Type** | |
| **Registration/ID** | |
| **Serial Number** | |

---

## Current Status

| Item | Value |
|:-----|:------|
| Total Flight Hours | |
| Last Scheduled Maintenance | |
| Next Scheduled Maintenance Due | |

---

## Maintenance Entry

| Field | Entry |
|:------|:------|
| **Date** | |
| **Entry #** | |
| **Flight Hours at Entry** | |
| **Maintenance Type** | ☐ Scheduled ☐ Unscheduled ☐ Inspection |

---

## Reason for Maintenance

☐ 10-hour inspection
☐ 25-hour inspection
☐ 50-hour inspection
☐ Defect correction
☐ Damage repair
☐ Component replacement
☐ Firmware update
☐ Pre-flight defect
☐ Post-flight defect
☐ Other: ________________

---

## Defect/Issue Description

| Description |
|:------------|
| |
| |

---

## Work Performed

| Item | Description |
|:-----|:------------|
| | |
| | |
| | |
| | |

---

## Parts Replaced/Used

| Part Description | Part Number | Serial # (if applicable) | Qty |
|:-----------------|:------------|:-------------------------|:----|
| | | | |
| | | | |
| | | | |

---

## Test/Verification

| Test | Result |
|:-----|:-------|
| Visual inspection | ☐ Pass ☐ Fail |
| Functional test | ☐ Pass ☐ Fail ☐ N/A |
| Ground test | ☐ Pass ☐ Fail ☐ N/A |
| Test flight | ☐ Pass ☐ Fail ☐ N/A |

---

## Return to Service

☐ **Aircraft serviceable** - approved for flight

☐ **Aircraft unserviceable** - requires additional work

If unserviceable, reason: ______________________________

---

## Sign-Off

| Field | Entry |
|:------|:------|
| Performed By | |
| Date | |
| Signature | |

| Field | Entry |
|:------|:------|
| Approved By (PRM) | |
| Date | |
| Signature | |

---

## Next Scheduled Maintenance

| Interval | Due At | Notes |
|:---------|:-------|:------|
| 10-hour | ___ hrs | |
| 25-hour | ___ hrs | |
| 50-hour | ___ hrs | |

---

## Notes

| Notes |
|:------|
| |
| |

---

## Document Retention

Retain this record for:
- Life of aircraft + 2 years, OR
- 10 years, whichever is greater

---

**Document Control:** FRM-MAINT v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Near Miss Hazard Report',
  'form',
  'FRM-NEARMISS',
  'Forms',
  '# AERIA SOLUTIONS LTD

# NEAR MISS / HAZARD REPORT

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-NEARMISS |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | SECOR Element G, BC OHS Reg, SMS |

---

## PURPOSE

This form is for reporting:
- **Near Misses** - Events that could have resulted in injury, illness, or damage but did not
- **Hazards** - Unsafe conditions or practices that could cause harm
- **Safety Concerns** - Observations that may affect safety

**Your report helps prevent future incidents. All reports are valued and will be reviewed.**

---

## SECTION 1: REPORTER INFORMATION

| Field | Entry |
|:------|:------|
| **Date of Report** | |
| **Your Name** | |
| **Position** | |
| **Contact Phone** | |
| **Contact Email** | |
| **Anonymous Report** | ☐ Check if you wish to remain anonymous |

---

## SECTION 2: EVENT/HAZARD INFORMATION

| Field | Entry |
|:------|:------|
| **Date of Event/Observation** | |
| **Time** | |
| **Location** | |
| **Project/Client** | |

---

## SECTION 3: CLASSIFICATION

### 3.1 Type of Report

| Type | Select | Definition |
|:-----|:-------|:-----------|
| **Near Miss** | ☐ | An event occurred but no injury/damage resulted |
| **Hazard** | ☐ | Unsafe condition or practice observed |
| **Safety Concern** | ☐ | General safety observation or suggestion |

### 3.2 Category

| Category | Select |
|:---------|:-------|
| Slip, trip, fall hazard | ☐ |
| Struck by / struck against | ☐ |
| Equipment / tool issue | ☐ |
| Vehicle / driving | ☐ |
| RPAS / flight operations | ☐ |
| Electrical | ☐ |
| Chemical / hazmat | ☐ |
| Ergonomic / manual handling | ☐ |
| Environmental (weather, terrain) | ☐ |
| Wildlife | ☐ |
| Security | ☐ |
| Procedure / training issue | ☐ |
| PPE issue | ☐ |
| Housekeeping | ☐ |
| Other: | |

### 3.3 Potential Severity

**If this had resulted in an incident, how serious could it have been?**

| Potential Severity | Select |
|:-------------------|:-------|
| **Fatality / Permanent Disability** | ☐ |
| **Serious Injury (lost time, hospitalization)** | ☐ |
| **Minor Injury (first aid, medical treatment)** | ☐ |
| **Property Damage Only** | ☐ |
| **Uncertain** | ☐ |

### 3.4 SIF Potential (Serious Injury/Fatality)

| Question | Response |
|:---------|:---------|
| Was high hazard energy present? (height, moving equipment, electrical, etc.) | ☐ Yes ☐ No |
| Could outcome have been serious under slightly different circumstances? | ☐ Yes ☐ No |
| Was there a single factor that prevented serious injury? | ☐ Yes ☐ No |
| **SIF Potential Identified** | ☐ Yes ☐ No |

**Note:** If SIF Potential = Yes, full investigation may be required.

---

## SECTION 4: DESCRIPTION

### 4.1 What Happened / What Did You Observe?

**Describe in detail what occurred or what you observed:**

| Description |
|:------------|
| |
| |
| |
| |
| |
| |

### 4.2 What Could Have Happened?

**Describe the potential consequences if this had resulted in an incident:**

| Potential Consequences |
|:-----------------------|
| |
| |
| |

### 4.3 What Prevented Injury/Damage?

**What factors prevented this from becoming an actual incident?**

| Preventive Factors |
|:-------------------|
| |
| |

---

## SECTION 5: CONTRIBUTING FACTORS

**What factors may have contributed to this near miss or hazard?**

| Factor Category | Contributed | Details |
|:----------------|:------------|:--------|
| **Human Factors** | | |
| Fatigue | ☐ | |
| Distraction | ☐ | |
| Rushing / time pressure | ☐ | |
| Lack of knowledge/training | ☐ | |
| Complacency | ☐ | |
| Communication issue | ☐ | |
| **Equipment** | | |
| Equipment malfunction | ☐ | |
| Wrong tool for job | ☐ | |
| Inadequate maintenance | ☐ | |
| Missing guards/safety devices | ☐ | |
| **Environment** | | |
| Weather conditions | ☐ | |
| Poor lighting | ☐ | |
| Noise | ☐ | |
| Terrain/surface conditions | ☐ | |
| Housekeeping | ☐ | |
| **Procedures** | | |
| No procedure exists | ☐ | |
| Procedure unclear | ☐ | |
| Procedure not followed | ☐ | |
| **Other** | ☐ | |

---

## SECTION 6: IMMEDIATE ACTIONS

### 6.1 Actions Already Taken

| Action | Taken By | Date/Time |
|:-------|:---------|:----------|
| | | |
| | | |
| | | |

### 6.2 Was the Hazard Controlled?

| Status | Select |
|:-------|:-------|
| Hazard eliminated | ☐ |
| Hazard controlled (temporary) | ☐ |
| Hazard still exists | ☐ |
| Not applicable (event-based) | ☐ |

---

## SECTION 7: SUGGESTED ACTIONS

**What do you think should be done to prevent recurrence?**

| Your Suggestions |
|:-----------------|
| |
| |
| |
| |

---

## SECTION 8: WITNESSES

| Name | Contact |
|:-----|:--------|
| | |
| | |

---

## SECTION 9: PHOTOS / DOCUMENTATION

| Item | Attached |
|:-----|:---------|
| Photos of hazard/location | ☐ Yes ☐ No |
| Sketch/diagram | ☐ Yes ☐ No |
| Other documentation | ☐ Yes ☐ No |

---

## SECTION 10: REPORTER SIGNATURE

| Field | Entry |
|:------|:------|
| Signature | |
| Date | |

---

# MANAGEMENT RESPONSE (Office Use)

---

## SECTION 11: RECEIPT AND REVIEW

| Field | Entry |
|:------|:------|
| **Report Number** | NM- |
| **Received By** | |
| **Date Received** | |
| **Reviewed By** | |
| **Date Reviewed** | |

### 11.1 Assessment

| Question | Response |
|:---------|:---------|
| Valid concern requiring action | ☐ Yes ☐ No |
| SIF potential confirmed | ☐ Yes ☐ No |
| Full investigation required | ☐ Yes ☐ No |
| If yes, Investigation # | INV- |

### 11.2 Priority

| Priority | Select | Response Time |
|:---------|:-------|:--------------|
| Critical | ☐ | Immediate |
| High | ☐ | Within 24 hours |
| Medium | ☐ | Within 7 days |
| Low | ☐ | Within 30 days |

---

## SECTION 12: CORRECTIVE ACTIONS

| # | Action | Hierarchy Level | Responsible | Target Date | Completion Date | Verified |
|:--|:-------|:----------------|:------------|:------------|:----------------|:---------|
| 1 | | ☐ Elim ☐ Sub ☐ Eng ☐ Admin ☐ PPE | | | | ☐ |
| 2 | | ☐ Elim ☐ Sub ☐ Eng ☐ Admin ☐ PPE | | | | ☐ |
| 3 | | ☐ Elim ☐ Sub ☐ Eng ☐ Admin ☐ PPE | | | | ☐ |
| 4 | | ☐ Elim ☐ Sub ☐ Eng ☐ Admin ☐ PPE | | | | ☐ |

**Hierarchy of Controls:** Elimination > Substitution > Engineering > Administrative > PPE

---

## SECTION 13: COMMUNICATION

| Communication | Completed | Date |
|:--------------|:----------|:-----|
| Feedback provided to reporter | ☐ | |
| Shared at safety meeting | ☐ | |
| Safety alert issued | ☐ | |
| Procedure updated | ☐ | |
| Training provided | ☐ | |
| Posted on safety board | ☐ | |

---

## SECTION 14: ROOT CAUSE (If Full Investigation Not Required)

### Quick 5 Whys

| Level | Why? |
|:------|:-----|
| Problem | |
| Why 1 | |
| Why 2 | |
| Why 3 | |
| Why 4 | |
| Why 5 | |

**Root Cause Summary:** |

---

## SECTION 15: CLOSURE

| Field | Entry |
|:------|:------|
| All actions completed | ☐ Yes |
| Effectiveness verified | ☐ Yes |
| Closed By | |
| Date | |
| Signature | |

---

## SECTION 16: MANAGEMENT SIGN-OFF

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Operations Manager | | | |

---

## TRENDING / STATISTICS (Optional)

| Category | Code |
|:---------|:-----|
| Event Type | ☐ NM - Near Miss ☐ HZ - Hazard ☐ SC - Safety Concern |
| Body Part (if applicable) | |
| Nature (if applicable) | |
| Location Category | ☐ Office ☐ Field ☐ Client Site ☐ Vehicle ☐ Other |
| Operation Type | ☐ RPAS ☐ Survey ☐ Travel ☐ Maintenance ☐ Office ☐ Other |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| Near miss reports | 3 years minimum |
| SIF potential events | 5 years recommended |

---

**Document Control:** FRM-NEARMISS v5.0 | Aeria Solutions Ltd

---

## SUBMISSION INSTRUCTIONS

1. Complete Sections 1-10
2. Submit to your supervisor or Operations Manager
3. You will receive feedback on actions taken
4. **All reports are confidential and non-punitive**

**Submit to:** safety@aeria.ai or hand deliver to supervisor
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'New Worker Orientation',
  'form',
  'FRM-NEWWORKER',
  'Forms',
  '# AERIA SOLUTIONS LTD

# NEW WORKER ORIENTATION CHECKLIST

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-NEWWORKER |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | BC OHS Reg 3.22-3.25, SECOR Element E |

---

## REGULATORY REQUIREMENT

**BC OHS Regulation 3.23:** Employer must ensure orientation is provided to young and new workers **before the worker begins work**.

**Definitions (BC OHS 3.22):**
- **Young Worker:** Under 25 years of age
- **New Worker:** New to workplace OR new to work that may pose risk to health and safety

---

## SECTION 1: WORKER INFORMATION

| Field | Entry |
|:------|:------|
| **Worker Name** | |
| **Position/Title** | |
| **Date of Birth** | |
| **Young Worker (<25)?** | ☐ Yes ☐ No |
| **Start Date** | |
| **Orientation Date** | |
| **Department/Team** | |
| **Direct Supervisor** | |
| **Employment Type** | ☐ Full-time ☐ Part-time ☐ Contractor ☐ Temporary |

---

## SECTION 2: SUPERVISOR INFORMATION

| Field | Entry |
|:------|:------|
| **Supervisor Name** | |
| **Supervisor Phone** | |
| **Supervisor Email** | |
| **Alternate Contact Name** | |
| **Alternate Contact Phone** | |

**(BC OHS 3.23(2)(a) requirement)**

---

## SECTION 3: RIGHTS AND RESPONSIBILITIES

**BC OHS 3.23(2)(b): Rights and responsibilities under the Workers Compensation Act and OHS Regulation**

| Topic | Covered | Worker Initials |
|:------|:--------|:----------------|
| **Worker Rights:** | | |
| Right to know about hazards | ☐ | |
| Right to participate in safety | ☐ | |
| Right to refuse unsafe work (BC OHS 3.12) | ☐ | |
| Right to report unsafe conditions without reprisal | ☐ | |
| **Worker Responsibilities:** | | |
| Follow safe work procedures | ☐ | |
| Use required PPE | ☐ | |
| Report hazards to supervisor | ☐ | |
| Report injuries and incidents immediately | ☐ | |
| Not work while impaired | ☐ | |
| Cooperate with safety committee | ☐ | |
| **Employer Responsibilities:** | | |
| Provide safe workplace | ☐ | |
| Provide training and supervision | ☐ | |
| Provide required PPE | ☐ | |
| Investigate incidents | ☐ | |

---

## SECTION 4: REPORTING HAZARDS AND UNSAFE CONDITIONS

**BC OHS 3.23(2)(c): Procedures for reporting unsafe conditions**

| Topic | Covered | Worker Initials |
|:------|:--------|:----------------|
| How to report hazards to supervisor | ☐ | |
| Near miss reporting process (FRM-NEARMISS) | ☐ | |
| Who to contact if supervisor unavailable | ☐ | |
| Location of hazard reporting forms | ☐ | |
| Non-retaliation policy explained | ☐ | |

**Supervisor Contact for Safety Concerns:**

| Contact | Name | Phone |
|:--------|:-----|:------|
| Primary | | |
| Alternate | | |
| Operations Manager | | |

---

## SECTION 5: RIGHT TO REFUSE UNSAFE WORK

**BC OHS 3.23(2)(d): Right to refuse unsafe work per Section 3.12**

| Topic | Covered | Worker Initials |
|:------|:--------|:----------------|
| When you can refuse work (imminent danger) | ☐ | |
| **Process explained:** | | |
| 1. Report concern to supervisor immediately | ☐ | |
| 2. Supervisor investigates immediately | ☐ | |
| 3. If unresolved, WorkSafeBC notified | ☐ | |
| Worker will not be disciplined for good-faith refusal | ☐ | |
| Work may be reassigned (written notice required) | ☐ | |

---

## SECTION 6: WORKPLACE HAZARDS

**BC OHS 3.23(2)(e): Hazards the worker may be exposed to, including risk of robbery/assault**

### 6.1 General Workplace Hazards

| Hazard Category | Applicable | Hazards Discussed | Worker Initials |
|:----------------|:-----------|:------------------|:----------------|
| **Physical Hazards** | | | |
| Slips, trips, falls | ☐ | | |
| Manual handling / ergonomics | ☐ | | |
| Vehicle / driving | ☐ | | |
| Weather exposure (heat, cold, UV) | ☐ | | |
| Noise | ☐ | | |
| Wildlife | ☐ | | |
| Terrain hazards | ☐ | | |
| **Electrical** | ☐ | | |
| **Chemical** | | | |
| Battery hazards | ☐ | | |
| WHMIS / SDS | ☐ | | |
| **Security/Violence** | | | |
| Working alone risks | ☐ | | |
| Robbery / theft risk | ☐ | | |
| Confrontation / assault risk | ☐ | | |
| De-escalation techniques | ☐ | | |

### 6.2 RPAS-Specific Hazards (if applicable)

| Hazard | Applicable | Discussed | Worker Initials |
|:-------|:-----------|:----------|:----------------|
| Rotating propellers | ☐ | ☐ | |
| LiPo battery fire/thermal runaway | ☐ | ☐ | |
| RF exposure | ☐ | ☐ | |
| Eye strain (screen time) | ☐ | ☐ | |
| Equipment weight (lifting) | ☐ | ☐ | |
| Remote location hazards | ☐ | ☐ | |
| Client site hazards | ☐ | ☐ | |

---

## SECTION 7: WORKPLACE HEALTH AND SAFETY RULES

**BC OHS 3.23(2)(f): Workplace health and safety rules**

| Rule/Policy | Covered | Worker Initials |
|:------------|:--------|:----------------|
| Health & Safety Policy signed | ☐ | |
| Drug and alcohol policy | ☐ | |
| Violence and harassment policy | ☐ | |
| Fit for duty requirements (IMSAFE) | ☐ | |
| Smoking / vaping policy | ☐ | |
| Cell phone / distraction policy | ☐ | |
| PPE requirements | ☐ | |
| Housekeeping expectations | ☐ | |
| Fatigue management | ☐ | |
| Working alone procedures | ☐ | |

---

## SECTION 8: SAFE WORK PROCEDURES

**BC OHS 3.23(2)(g): Safe work procedures relevant to worker''s tasks**

| Procedure | Applicable | Reviewed | Worker Initials |
|:----------|:-----------|:---------|:----------------|
| **RPAS Operations** | | | |
| Pre-flight procedures | ☐ | ☐ | |
| Flight operations | ☐ | ☐ | |
| Post-flight procedures | ☐ | ☐ | |
| Emergency procedures (RPAS) | ☐ | ☐ | |
| Battery handling and charging | ☐ | ☐ | |
| **Field Operations** | | | |
| Site assessment | ☐ | ☐ | |
| FLHA completion | ☐ | ☐ | |
| Working alone check-in | ☐ | ☐ | |
| Vehicle operation | ☐ | ☐ | |
| **Office** | | | |
| Office safety | ☐ | ☐ | |
| Ergonomics | ☐ | ☐ | |

---

## SECTION 9: EMERGENCY PROCEDURES

### 9.1 Emergency Equipment Location

**BC OHS 3.23(2)(h): Location and use of emergency equipment**

| Equipment | Location | Demonstrated | Worker Initials |
|:----------|:---------|:-------------|:----------------|
| Fire extinguisher | | ☐ | |
| First aid kit | | ☐ | |
| AED (if applicable) | | ☐ | |
| Emergency exits | | ☐ | |
| Assembly/muster point | | ☐ | |
| Emergency phone | | ☐ | |
| Eye wash station | | ☐ | |
| Spill kit | | ☐ | |

### 9.2 Emergency Procedures

| Procedure | Covered | Worker Initials |
|:----------|:--------|:----------------|
| Fire / evacuation | ☐ | |
| Medical emergency | ☐ | |
| Severe weather | ☐ | |
| Vehicle accident | ☐ | |
| RPAS emergency (flyaway, crash) | ☐ | |
| Wildlife encounter | ☐ | |
| Emergency contact numbers | ☐ | |

---

## SECTION 10: FIRST AID

### 10.1 First Aid Facilities

**BC OHS 3.23(2)(i): Location of first aid facilities**

| Facility | Location |
|:---------|:---------|
| First aid room (if applicable) | |
| First aid kit(s) | |
| First aid attendant name(s) | |

### 10.2 How to Get First Aid

**BC OHS 3.23(2)(j): How to summon first aid and report injuries**

| Topic | Covered | Worker Initials |
|:------|:--------|:----------------|
| How to summon first aid | ☐ | |
| First aid attendant contact | ☐ | |
| 911 procedure | ☐ | |
| Field first aid procedures | ☐ | |

---

## SECTION 11: INJURY AND ILLNESS REPORTING

**BC OHS 3.23(2)(k): How to report illnesses and injuries**

| Topic | Covered | Worker Initials |
|:------|:--------|:----------------|
| Report ALL injuries immediately to supervisor | ☐ | |
| Incident report form location and completion | ☐ | |
| WorkSafeBC claim process | ☐ | |
| Return to work / modified duties | ☐ | |
| First aid record completion | ☐ | |

---

## SECTION 12: WHMIS

**BC OHS 3.23(2)(l): WHMIS information per Part 5**

| Topic | Covered | Worker Initials |
|:------|:--------|:----------------|
| WHMIS overview (if handling chemicals) | ☐ | |
| How to read SDS (Safety Data Sheets) | ☐ | |
| Location of SDS | ☐ | |
| Hazard symbols/pictograms | ☐ | |
| Labeling requirements | ☐ | |
| Chemical storage | ☐ | |

**WHMIS applicable to role?** ☐ Yes ☐ No

---

## SECTION 13: COMPANY-SPECIFIC TRAINING

| Topic | Covered | Worker Initials |
|:------|:--------|:----------------|
| Company structure and key personnel | ☐ | |
| Safety Management System (SMS) overview | ☐ | |
| Quality/document control | ☐ | |
| Communication protocols | ☐ | |
| Toolbox/tailgate meetings | ☐ | |
| Joint H&S Committee / H&S Representative | ☐ | |
| Safety suggestions process | ☐ | |
| Disciplinary policy | ☐ | |

---

## SECTION 14: PPE REQUIREMENTS

| PPE Item | Required for Role | Issued | Fit Verified | Worker Initials |
|:---------|:------------------|:-------|:-------------|:----------------|
| Safety footwear | ☐ Yes ☐ No | ☐ | ☐ | |
| High-visibility vest | ☐ Yes ☐ No | ☐ | ☐ | |
| Hard hat | ☐ Yes ☐ No | ☐ | ☐ | |
| Safety glasses | ☐ Yes ☐ No | ☐ | ☐ | |
| Hearing protection | ☐ Yes ☐ No | ☐ | ☐ | |
| Gloves | ☐ Yes ☐ No | ☐ | ☐ | |
| Sun protection | ☐ Yes ☐ No | ☐ | ☐ | |
| Other: | ☐ Yes ☐ No | ☐ | ☐ | |

---

## SECTION 15: ADDITIONAL TRAINING REQUIRED

| Training | Required | Scheduled Date | Completed |
|:---------|:---------|:---------------|:----------|
| Transport Canada Pilot Certificate | ☐ | | ☐ |
| Company RPAS training | ☐ | | ☐ |
| First Aid | ☐ | | ☐ |
| WHMIS | ☐ | | ☐ |
| Driver training | ☐ | | ☐ |
| TDG | ☐ | | ☐ |
| Client-specific orientation | ☐ | | ☐ |
| Other: | ☐ | | ☐ |

---

## SECTION 16: DOCUMENTS PROVIDED

| Document | Provided | Worker Initials |
|:---------|:---------|:----------------|
| Employee handbook | ☐ | |
| Health & Safety Policy | ☐ | |
| Emergency contact card | ☐ | |
| Relevant procedures/SOPs | ☐ | |
| QRCs (Quick Reference Cards) | ☐ | |
| Access credentials | ☐ | |

---

## SECTION 17: WORKER DECLARATION

**I confirm that:**

- ☐ I have received orientation covering all items checked above
- ☐ I understand the hazards associated with my work
- ☐ I understand my rights and responsibilities
- ☐ I know how to report hazards and incidents
- ☐ I understand I have the right to refuse unsafe work
- ☐ I know where emergency equipment is located
- ☐ I know how to get first aid
- ☐ I have had the opportunity to ask questions
- ☐ I agree to follow all safety rules and procedures

| Field | Entry |
|:------|:------|
| **Worker Name (Print)** | |
| **Worker Signature** | |
| **Date** | |

---

## SECTION 18: SUPERVISOR/TRAINER DECLARATION

**I confirm that:**

- ☐ This worker has been oriented to all applicable items above
- ☐ The worker demonstrated understanding of the material
- ☐ All questions were answered
- ☐ Required PPE has been issued
- ☐ Additional training requirements have been identified and scheduled

| Field | Entry |
|:------|:------|
| **Trainer/Supervisor Name (Print)** | |
| **Trainer/Supervisor Signature** | |
| **Position** | |
| **Date** | |

---

## SECTION 19: ADDITIONAL NOTES

| Notes |
|:------|
| |
| |
| |

---

## FOLLOW-UP

### 19.1 Additional Training Observation (BC OHS 3.24)

**If observation reveals safety concerns OR worker requests additional training:**

| Date | Observation/Request | Training Provided | Trainer |
|:-----|:--------------------|:------------------|:--------|
| | | | |
| | | | |

### 19.2 30-Day Check-In

| Field | Entry |
|:------|:------|
| Check-in Date | |
| Check-in Conducted By | |
| Worker comfortable with role | ☐ Yes ☐ No |
| Additional training needed | ☐ Yes ☐ No |
| Concerns identified | |
| Actions taken | |

---

## DOCUMENT RETENTION

**BC OHS Regulation 3.25:** Employer must keep records of all orientation and training.

| Requirement | Retention Period |
|:------------|:-----------------|
| Orientation records | 5 years (best practice) |
| Training records | Duration of employment + 5 years |

---

**Document Control:** FRM-NEWWORKER v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'New Personnel Orientation',
  'form',
  'FRM-ORIENTATION',
  'Forms',
  '# AERIA SOLUTIONS LTD

# NEW PERSONNEL ORIENTATION CHECKLIST

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-ORIENTATION |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Employee Information

| Field | Entry |
|:------|:------|
| **Name** | |
| **Position** | |
| **Start Date** | |
| **Supervisor** | |
| **Orientation Completed By** | |

---

## Day 1 - Administrative

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| Welcome and introductions | ☐ | | |
| Office/facility tour | ☐ | | |
| Workspace setup | ☐ | | |
| IT systems access | ☐ | | |
| Contact information collected | ☐ | | |
| Emergency contact collected | ☐ | | |
| Payroll/HR paperwork | ☐ | | |
| ID/access cards issued | ☐ | | |

---

## Company Overview

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| Company history and mission | ☐ | | |
| Organization structure | ☐ | | |
| Services and operations | ☐ | | |
| RPOC certificate overview | ☐ | | |
| Key contacts | ☐ | | |

---

## Safety Orientation (Required - Day 1)

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| HSE policy overview | ☐ | | |
| Safety responsibilities | ☐ | | |
| Hazard identification | ☐ | | |
| FLHA process | ☐ | | |
| PPE requirements | ☐ | | |
| Emergency procedures | ☐ | | |
| Emergency contacts/numbers | ☐ | | |
| First aid locations | ☐ | | |
| Incident reporting | ☐ | | |
| Right to refuse unsafe work | ☐ | | |
| Working alone procedures | ☐ | | |
| Violence & harassment prevention | ☐ | | |
| Fit for duty requirements | ☐ | | |

---

## Safety Management System

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| SMS overview | ☐ | | |
| Safety reporting (non-punitive) | ☐ | | |
| Risk management principles | ☐ | | |
| Safety communication | ☐ | | |

---

## Regulatory Overview

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| CARs Part IX overview | ☐ | | |
| RPOC requirements | ☐ | | |
| Pilot certification requirements | ☐ | | |
| Record keeping requirements | ☐ | | |

---

## Role-Specific Training

### For Pilots (PIC/SIC)

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| Company operations manual | ☐ | | |
| Flight procedures | ☐ | | |
| Pre/post flight procedures | ☐ | | |
| Emergency procedures | ☐ | | |
| Aircraft type training | ☐ | | |
| Competency check | ☐ | | |
| CRM principles | ☐ | | |

### For Visual Observers

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| VO responsibilities | ☐ | | |
| Communication protocols | ☐ | | |
| Emergency procedures | ☐ | | |
| Standard calls | ☐ | | |

### For Ground Operations

| Item | Completed | Date | Initials |
|:-----|:----------|:-----|:---------|
| Survey procedures | ☐ | | |
| Equipment operation | ☐ | | |
| Field safety | ☐ | | |
| Data handling | ☐ | | |

---

## Policies and Procedures Review

| Document | Reviewed | Date | Initials |
|:---------|:---------|:-----|:---------|
| Safety Policy (HSE-001) | ☐ | | |
| Fit for Duty Policy (HSE-013) | ☐ | | |
| Privacy Policy (ADM-001) | ☐ | | |
| Disciplinary Policy (ADM-003) | ☐ | | |
| Occurrence Reporting (SMS-005) | ☐ | | |

---

## Certifications Verified

| Certification | Verified | Expiry | Copy on File |
|:--------------|:---------|:-------|:-------------|
| Pilot Certificate | ☐ | | ☐ |
| Basic/Advanced certificate | ☐ | | ☐ |
| Driver''s license | ☐ | | ☐ |
| First aid | ☐ | | ☐ |
| Other: | ☐ | | ☐ |

---

## Equipment Issued

| Item | Serial/ID | Issued | Signature |
|:-----|:----------|:-------|:----------|
| | | ☐ | |
| | | ☐ | |
| | | ☐ | |
| | | ☐ | |

---

## Follow-Up Training Required

| Training | Due Date | Completed |
|:---------|:---------|:----------|
| | | ☐ |
| | | ☐ |
| | | ☐ |

---

## Employee Acknowledgment

I confirm that I have received orientation as documented above. I understand my responsibilities and have been given the opportunity to ask questions.

| Field | Entry |
|:------|:------|
| Employee Name | |
| Signature | |
| Date | |

---

## Supervisor Verification

I verify that this employee has completed the required orientation.

| Field | Entry |
|:------|:------|
| Supervisor Name | |
| Signature | |
| Date | |

---

## Operations Manager Approval

| Field | Entry |
|:------|:------|
| Name | |
| Signature | |
| Date | |

---

**Document Control:** FRM-ORIENTATION v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Post Flight Checklist',
  'form',
  'FRM-POSTFLIGHT',
  'Forms',
  '# AERIA SOLUTIONS LTD

# POST-FLIGHT CHECKLIST

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-POSTFLIGHT |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Flight Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Aircraft** | |
| **PIC** | |
| **Flights Completed** | |

---

## Immediate Post-Landing

| Item | Check |
|:-----|:------|
| Motors stopped | ☐ |
| Aircraft secured | ☐ |
| Battery disconnected | ☐ |
| Propellers stopped | ☐ |

---

## Aircraft Inspection

### Airframe

| Item | Check | Notes |
|:-----|:------|:------|
| Frame - damage inspection | ☐ OK ☐ Defect | |
| Arms - cracks, damage | ☐ OK ☐ Defect | |
| Landing gear | ☐ OK ☐ Defect | |
| Screws/fasteners | ☐ OK ☐ Defect | |

### Propulsion

| Item | Check | Notes |
|:-----|:------|:------|
| Propellers - damage | ☐ OK ☐ Defect | |
| Propeller mounting | ☐ OK ☐ Defect | |
| Motors - debris, damage | ☐ OK ☐ Defect | |
| Motor temperature | ☐ Normal ☐ Hot | |

### Battery

| Item | Check | Notes |
|:-----|:------|:------|
| Battery condition | ☐ OK ☐ Defect | |
| Swelling check | ☐ None ☐ Swelling | |
| Temperature | ☐ Normal ☐ Hot | |
| Remaining voltage | ___ V | |

### Payload

| Item | Check | Notes |
|:-----|:------|:------|
| Payload secure | ☐ OK ☐ N/A | |
| Payload damage | ☐ None ☐ Damage | |
| Data captured | ☐ Verified ☐ N/A | |

---

## Data Management

| Item | Check |
|:-----|:------|
| SD card removed (if applicable) | ☐ N/A ☐ Done |
| Data downloaded | ☐ N/A ☐ Done |
| Data backed up | ☐ N/A ☐ Done |
| Data verified | ☐ N/A ☐ Done |

---

## Equipment Securing

| Item | Check |
|:-----|:------|
| Aircraft in case/secured | ☐ |
| Controller powered off | ☐ |
| Controller secured | ☐ |
| Batteries to storage | ☐ |
| All equipment accounted for | ☐ |

---

## Defects Identified

☐ No defects

☐ Defects found - details:

| Component | Defect Description | Action Required |
|:----------|:-------------------|:----------------|
| | | |
| | | |

**If defects found:** Complete maintenance log entry.

---

## Flight Log Completion

| Item | Check |
|:-----|:------|
| All flights logged | ☐ |
| Flight times recorded | ☐ |
| Total flight time calculated | ☐ |
| Incidents documented | ☐ N/A ☐ Done |
| PIC signature on log | ☐ |

---

## Occurrences

☐ No occurrences to report

☐ Occurrence - complete SMS report:
- Description: ____________________
- Report submitted: ☐

---

## Battery Management

| Battery ID | Flights This Session | Cycles to Date | Storage Charge | Status |
|:-----------|:---------------------|:---------------|:---------------|:-------|
| | | | ☐ Done | ☐ OK ☐ Retire |
| | | | ☐ Done | ☐ OK ☐ Retire |
| | | | ☐ Done | ☐ OK ☐ Retire |
| | | | ☐ Done | ☐ OK ☐ Retire |

---

## Notes/Observations

| Item |
|:-----|
| |
| |
| |

---

## Debrief Completed

| Item | Check |
|:-----|:------|
| Crew debrief | ☐ Done ☐ Solo operation |
| Issues discussed | ☐ N/A ☐ Done |
| Lessons learned noted | ☐ N/A ☐ Done |

---

| Field | Entry |
|:------|:------|
| PIC Initials | |
| Time | |

---

**Document Control:** FRM-POSTFLIGHT v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Pre Flight Checklist',
  'form',
  'FRM-PREFLIGHT',
  'Forms',
  '# AERIA SOLUTIONS LTD

# PRE-FLIGHT CHECKLIST

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-PREFLIGHT |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Flight Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Aircraft** | |
| **PIC** | |
| **Location** | |

---

## Documentation Review

| Item | Check |
|:-----|:------|
| FLHA completed | ☐ |
| Weather verified acceptable | ☐ |
| NOTAMs reviewed | ☐ |
| Airspace authorization (if required) | ☐ N/A ☐ Obtained |
| Site survey complete | ☐ |
| Crew briefing completed | ☐ |

---

## Aircraft Visual Inspection

### Airframe

| Item | Check |
|:-----|:------|
| Frame/body - no damage | ☐ |
| Arms - secure, no cracks | ☐ |
| Landing gear - intact | ☐ |
| Screws/fasteners - tight | ☐ |
| Covers/panels - secure | ☐ |

### Propulsion

| Item | Check |
|:-----|:------|
| Propellers - no damage, chips, cracks | ☐ |
| Propellers - correct orientation | ☐ |
| Propellers - secure | ☐ |
| Motors - spin freely | ☐ |
| Motors - no debris | ☐ |

### Battery

| Item | Check |
|:-----|:------|
| Battery charged | ☐ |
| Battery - no swelling/damage | ☐ |
| Battery - secure connection | ☐ |
| Battery voltage | ___ V |
| Battery secured to aircraft | ☐ |

### Payload (if applicable)

| Item | Check |
|:-----|:------|
| Payload mounted secure | ☐ |
| Payload connections verified | ☐ |
| Payload powered/functional | ☐ |
| Weight within limits | ☐ |

---

## Controller/GCS

| Item | Check |
|:-----|:------|
| Controller charged | ☐ |
| Controller battery level | ___% |
| Antennas extended/positioned | ☐ |
| Display visible | ☐ |
| Control sticks centered | ☐ |
| Switches in correct position | ☐ |

---

## System Power-Up

| Item | Check |
|:-----|:------|
| Controller powered on first | ☐ |
| Aircraft powered on | ☐ |
| Link established | ☐ |
| GPS acquired | ☐ Sats: ___ |
| Compass calibrated (if required) | ☐ N/A ☐ Done |
| Home point set | ☐ |
| Flight mode correct | ☐ |
| Failsafe settings verified | ☐ |

---

## System Checks

| Item | Check |
|:-----|:------|
| Telemetry displaying | ☐ |
| Control response test | ☐ |
| Camera/payload functioning | ☐ |
| SD card inserted (if applicable) | ☐ |
| Return-to-home altitude set | ___ m AGL |
| Geofence set (if applicable) | ☐ N/A ☐ Set |
| No error warnings | ☐ |

---

## Environment Check

| Item | Check |
|:-----|:------|
| Takeoff area clear | ☐ |
| Landing area identified | ☐ |
| Obstacles identified | ☐ |
| Wind acceptable | ☐ |
| No persons in takeoff zone | ☐ |

---

## Final Checks

| Item | Check |
|:-----|:------|
| VO positioned | ☐ N/A ☐ Yes |
| Communication confirmed | ☐ |
| Emergency procedures reviewed | ☐ |
| Sterile area established | ☐ |

---

## Go/No-Go

☐ **GO** - All checks pass; cleared for flight

☐ **NO-GO** - Issue identified: _______________________

---

## Notes

| Issue/Observation |
|:------------------|
| |
| |

---

| Field | Entry |
|:------|:------|
| PIC Initials | |
| Time | |

---

**Document Control:** FRM-PREFLIGHT v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Work Refusal',
  'form',
  'FRM-REFUSAL',
  'Forms',
  '# AERIA SOLUTIONS LTD

# WORK REFUSAL REPORT

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-REFUSAL |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | BC OHS Reg 3.12, WCA Section 3.12, SECOR Element B |

---

## REGULATORY BASIS

**BC OHS Regulation 3.12 - Right to Refuse Unsafe Work:**

A worker may refuse to carry out work if the worker has reasonable cause to believe that performing the work would create an undue hazard to the health and safety of:
- The worker, or
- Any other person

**This is a protected right. Workers must not be discriminated against for exercising this right in good faith.**

---

## SECTION 1: WORKER INFORMATION

| Field | Entry |
|:------|:------|
| **Date of Refusal** | |
| **Time of Refusal** | |
| **Worker Name** | |
| **Position** | |
| **Department/Crew** | |
| **Contact Phone** | |
| **Work Location** | |
| **Project/Client** | |

---

## SECTION 2: WORK BEING REFUSED

| Field | Entry |
|:------|:------|
| **Task/Work Being Refused** | |
| **Equipment Involved (if any)** | |
| **Location of Work** | |

### 2.1 Description of Work

**Describe the specific work you are refusing to perform:**

| Description |
|:------------|
| |
| |
| |

---

## SECTION 3: REASON FOR REFUSAL

### 3.1 Nature of Hazard

**Describe the hazard or unsafe condition that is causing you to refuse the work:**

| Hazard Description |
|:-------------------|
| |
| |
| |
| |

### 3.2 Hazard Category

| Category | Select |
|:---------|:-------|
| Physical hazard (equipment, machinery, heights) | ☐ |
| Environmental hazard (weather, terrain, wildlife) | ☐ |
| Chemical hazard | ☐ |
| Electrical hazard | ☐ |
| Inadequate PPE | ☐ |
| Inadequate training for task | ☐ |
| Equipment defect or malfunction | ☐ |
| Procedure not adequate/not followed | ☐ |
| Violence/harassment concern | ☐ |
| Fatigue/fitness for duty | ☐ |
| RPAS-related hazard | ☐ |
| Other | ☐ |

### 3.3 Why Do You Believe This Creates an Undue Hazard?

| Explanation |
|:------------|
| |
| |
| |

### 3.4 What Could Happen If You Performed This Work?

| Potential Consequences |
|:-----------------------|
| |
| |

---

## SECTION 4: PRIOR ATTEMPTS TO RESOLVE

| Question | Response |
|:---------|:---------|
| Did you report this concern to your supervisor before refusing? | ☐ Yes ☐ No |
| If yes, when? | |
| What was the response? | |
| Were any actions taken? | ☐ Yes ☐ No |
| If yes, what actions? | |
| Why were these actions insufficient? | |

---

## SECTION 5: WORKER DECLARATION

**I declare that:**

- ☐ I have reasonable cause to believe this work would create an undue hazard
- ☐ I have reported my concern to my supervisor
- ☐ I am refusing this work in good faith for safety reasons
- ☐ I understand my employer will investigate this refusal
- ☐ I am willing to perform other work assigned to me while this is being resolved
- ☐ I understand I will not be disciplined for this good-faith refusal

| Field | Entry |
|:------|:------|
| **Worker Signature** | |
| **Date** | |
| **Time** | |

---

## SECTION 6: SUPERVISOR NOTIFICATION

| Field | Entry |
|:------|:------|
| **Supervisor Notified** | |
| **Position** | |
| **Date/Time Notified** | |
| **Method of Notification** | ☐ In Person ☐ Phone ☐ Radio ☐ Other: |

---

# EMPLOYER INVESTIGATION (Complete Below)

---

## SECTION 7: INITIAL RESPONSE

| Field | Entry |
|:------|:------|
| **Investigation Started** | Date: Time: |
| **Investigator Name** | |
| **Position** | |

### 7.1 Immediate Actions Taken

| Action | Taken |
|:-------|:------|
| Worker removed from hazardous area | ☐ Yes ☐ No ☐ N/A |
| Work area made safe | ☐ Yes ☐ No ☐ N/A |
| Other workers warned | ☐ Yes ☐ No ☐ N/A |
| Work stopped in affected area | ☐ Yes ☐ No ☐ N/A |
| Worker assigned alternate work | ☐ Yes ☐ No |

### 7.2 Alternate Work Assigned

| Field | Entry |
|:------|:------|
| Alternate work description | |
| Location | |
| Duration | |

---

## SECTION 8: INVESTIGATION

### 8.1 Investigation Activities

| Activity | Completed | Notes |
|:---------|:----------|:------|
| Spoke with refusing worker | ☐ | |
| Inspected work area/equipment | ☐ | |
| Reviewed relevant procedures | ☐ | |
| Reviewed hazard assessments (FLHA) | ☐ | |
| Spoke with witnesses | ☐ | |
| Consulted with safety representative | ☐ | |
| Reviewed equipment records | ☐ | |
| Tested equipment (if applicable) | ☐ | |
| Took photos | ☐ | |

### 8.2 Witnesses Interviewed

| Name | Position | Summary of Information |
|:-----|:---------|:-----------------------|
| | | |
| | | |

### 8.3 Documents Reviewed

| Document | Findings |
|:---------|:---------|
| | |
| | |

### 8.4 Investigation Findings

**Describe findings of the investigation:**

| Findings |
|:---------|
| |
| |
| |
| |

---

## SECTION 9: DETERMINATION

### 9.1 Hazard Assessment

| Question | Response |
|:---------|:---------|
| Was there an undue hazard present? | ☐ Yes ☐ No ☐ Partial |
| If yes, describe the hazard: | |
| Risk level of identified hazard | ☐ High ☐ Medium ☐ Low |

### 9.2 Determination

| Determination | Select |
|:--------------|:-------|
| **VALID REFUSAL** - Undue hazard confirmed | ☐ |
| **VALID CONCERN** - Hazard present but can be controlled | ☐ |
| **NO UNDUE HAZARD** - Work can proceed safely | ☐ |

### 9.3 Explanation of Determination

| Explanation |
|:------------|
| |
| |
| |

---

## SECTION 10: CORRECTIVE ACTIONS

### 10.1 Actions to Address Hazard

| # | Corrective Action | Responsible | Completion Date |
|:--|:------------------|:------------|:----------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

### 10.2 Actions Before Work Can Resume

| Action Required | Completed |
|:----------------|:----------|
| | ☐ |
| | ☐ |
| | ☐ |

### 10.3 Work Resumption

| Field | Entry |
|:------|:------|
| Work may resume | ☐ Yes ☐ No - Further action required |
| Conditions (if any) | |
| Date/Time work may resume | |

---

## SECTION 11: WORKER NOTIFICATION OF OUTCOME

| Field | Entry |
|:------|:------|
| Worker notified of outcome | ☐ Yes |
| Date/Time notified | |
| Notified by | |
| Method | ☐ In Person ☐ Phone ☐ Written |

### 11.1 Worker Response to Outcome

| Response | Select |
|:---------|:-------|
| Worker accepts determination and will resume work | ☐ |
| Worker accepts determination with noted actions completed | ☐ |
| Worker does not accept determination (proceed to Section 12) | ☐ |

---

## SECTION 12: UNRESOLVED REFUSAL - WORKSAFEBC INVOLVEMENT

**If the matter is not resolved between worker and employer:**

### 12.1 WorkSafeBC Notification

| Field | Entry |
|:------|:------|
| WorkSafeBC contacted | ☐ Yes |
| Date/Time | |
| Contact method | ☐ Phone: 1-888-621-7233 ☐ Online |
| Reference/File # | |
| WorkSafeBC Officer assigned | |

### 12.2 WorkSafeBC Investigation

| Field | Entry |
|:------|:------|
| Officer attended | ☐ Yes ☐ No (phone investigation) |
| Date of investigation | |
| WorkSafeBC determination | |

### 12.3 WorkSafeBC Orders (If Any)

| Order | Details |
|:------|:--------|
| | |
| | |

---

## SECTION 13: RESOLUTION

| Field | Entry |
|:------|:------|
| Matter resolved | ☐ Yes |
| Resolution date | |
| Resolution summary | |
| Worker returned to original work | ☐ Yes ☐ No |
| If no, explain | |

---

## SECTION 14: SIGNATURES

### Investigator

| Field | Entry |
|:------|:------|
| Name | |
| Position | |
| Signature | |
| Date | |

### Worker Acknowledgement of Outcome

| Field | Entry |
|:------|:------|
| I acknowledge I have been informed of the investigation outcome | |
| Worker Signature | |
| Date | |

### Management Approval

| Field | Entry |
|:------|:------|
| Reviewed By | |
| Position | |
| Signature | |
| Date | |

---

## SECTION 15: FOLLOW-UP

| Field | Entry |
|:------|:------|
| Follow-up required | ☐ Yes ☐ No |
| If yes, describe | |
| Follow-up completed | ☐ Date: |
| Procedure/SWP update required | ☐ Yes ☐ No |
| Training required | ☐ Yes ☐ No |

---

## IMPORTANT REMINDERS

### Worker Rights:
- You have the right to refuse unsafe work
- You must not be discriminated against for a good-faith refusal
- You are entitled to be paid while the investigation is conducted
- You may be assigned reasonable alternate work

### Employer Obligations:
- Investigate the refusal immediately
- Not discriminate against the worker
- Remedy any unsafe condition found
- Notify WorkSafeBC if matter is not resolved

### WorkSafeBC Contact:
- **Phone:** 1-888-621-7233
- **After Hours:** 1-866-922-4357

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| BC OHS Regulation | 3 years |
| SECOR Element B | 3 years |
| Best Practice | 5 years |

---

**Document Control:** FRM-REFUSAL v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'RPAS-INCIDENT RPAS Incident Report',
  'form',
  'FRM-RPAS',
  'Forms',
  '# AERIA SOLUTIONS LTD

# RPAS INCIDENT / OCCURRENCE REPORT

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-RPAS-INCIDENT |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | CAR 901.49, TSB Regulations SOR/2014-37, Standard 922 |

---

## IMPORTANT: CEASE OPERATIONS REQUIREMENT

**Per CAR 901.49:** The pilot-in-command must **immediately cease operation** and not resume until incident analysis is complete if any of the following occur.

---

## SECTION 1: REPORT INFORMATION

| Field | Entry |
|:------|:------|
| **Report Number** | RPAS-INC- |
| **Date of Report** | |
| **Report Completed By** | |
| **Position** | |
| **Date of Occurrence** | |
| **Time of Occurrence (Local)** | |
| **Time of Occurrence (UTC)** | |

---

## SECTION 2: OCCURRENCE CLASSIFICATION

### 2.1 CAR 901.49 Cease Operations Events

**Check all that apply:**

| Event Type | Applies | Details |
|:-----------|:--------|:--------|
| **Injury** - Injury requiring medical attention | ☐ | |
| **Contact** - Unintended contact between aircraft and persons | ☐ | |
| **Damage** - Damage to airframe, control station, payload, or C2 link affecting safe operation | ☐ | |
| **Boundary Violation** - Exceeded horizontal or vertical boundaries | ☐ | |
| **Collision/Near Collision** - Collision or risk of collision with another aircraft | ☐ | |
| **Loss of Control** - Aircraft became uncontrollable | ☐ | |
| **Flyaway** - Aircraft flew away from pilot | ☐ | |
| **Missing Aircraft** - Aircraft cannot be located | ☐ | |
| **Police/CADORS Report** - Police report or CADORS filed | ☐ | |

### 2.2 TSB Reportable Occurrences

**Report IMMEDIATELY to TSB (1-800-387-3557) if:**

| TSB Reportable Event | Applies |
|:---------------------|:--------|
| Person killed or seriously injured from contact with RPAS | ☐ |
| RPAS (>25 kg) accident meeting reportable criteria | ☐ |
| Collision between RPAS (any size) and manned aircraft | ☐ |

### 2.3 Severity Assessment

| Severity | Select | Definition |
|:---------|:-------|:-----------|
| **Accident** | ☐ | Death, serious injury, or aircraft missing/inaccessible |
| **Serious Incident** | ☐ | High potential for accident; significant damage |
| **Incident** | ☐ | Occurrence affecting safety but not accident |
| **Near Miss** | ☐ | Event that could have resulted in accident/incident |

---

## SECTION 3: OPERATION DETAILS

### 3.1 Flight Information

| Field | Entry |
|:------|:------|
| **Operation Type** | ☐ Basic ☐ Advanced ☐ BVLOS ☐ SFOC |
| **SFOC Number (if applicable)** | |
| **Flight Purpose** | ☐ Survey ☐ Inspection ☐ Delivery ☐ Training ☐ Other: |
| **Client/Project** | |
| **Site Name** | |
| **Coordinates** | Lat: Long: |
| **Elevation (AMSL)** | |
| **Flight Start Time** | |
| **Flight End Time** | |
| **Total Flight Time** | |

### 3.2 Weather Conditions at Time of Occurrence

| Condition | Value |
|:----------|:------|
| Wind Speed | km/h |
| Wind Direction | ° |
| Gusts | km/h |
| Visibility | km |
| Temperature | °C |
| Cloud Ceiling | ft AGL |
| Precipitation | ☐ None ☐ Light ☐ Moderate ☐ Heavy |
| Weather Source | ☐ METAR ☐ On-site ☐ App: |

### 3.3 Airspace

| Field | Entry |
|:------|:------|
| Airspace Class | ☐ G ☐ E ☐ D ☐ C ☐ Other: |
| Distance to Aerodrome | nm |
| NAV CANADA Authorization | ☐ N/A ☐ Yes - Auth #: |
| NOTAM | ☐ N/A ☐ Yes - NOTAM #: |

---

## SECTION 4: AIRCRAFT INFORMATION

### 4.1 RPAS Details

| Field | Entry |
|:------|:------|
| Manufacturer | |
| Model | |
| Registration | |
| Serial Number | |
| Firmware Version | |
| Controller S/N | |
| Payload | |
| Payload S/N | |

### 4.2 Aircraft Status

| Condition | Before Occurrence | After Occurrence |
|:----------|:------------------|:-----------------|
| Airframe | ☐ Serviceable ☐ Unserviceable | ☐ Serviceable ☐ Unserviceable |
| Motors | ☐ Serviceable ☐ Unserviceable | ☐ Serviceable ☐ Unserviceable |
| Propellers | ☐ Serviceable ☐ Unserviceable | ☐ Serviceable ☐ Unserviceable |
| Battery | ☐ Serviceable ☐ Unserviceable | ☐ Serviceable ☐ Unserviceable |
| Payload | ☐ Serviceable ☐ Unserviceable | ☐ Serviceable ☐ Unserviceable |
| Control Station | ☐ Serviceable ☐ Unserviceable | ☐ Serviceable ☐ Unserviceable |

### 4.3 Battery Information

| Field | Entry |
|:------|:------|
| Battery ID(s) | |
| Charge Level at Start | % |
| Charge Level at Occurrence | % |
| Battery Cycles | |
| Last Charge Date | |

### 4.4 Last Maintenance

| Field | Entry |
|:------|:------|
| Date | |
| Type | ☐ Scheduled ☐ Unscheduled |
| Work Performed | |
| Performed By | |

---

## SECTION 5: PERSONNEL

### 5.1 Flight Crew

| Role | Name | Certificate # | Certificate Type | Hours on Type |
|:-----|:-----|:--------------|:-----------------|:--------------|
| PIC | | | ☐ Basic ☐ Advanced | |
| Pilot (if dual) | | | ☐ Basic ☐ Advanced | |
| Visual Observer | | | N/A | |
| Visual Observer | | | N/A | |
| Payload Operator | | | N/A | |

### 5.2 PIC Status

| Check | Response |
|:------|:---------|
| Fit for duty (IMSAFE) assessment completed | ☐ Yes ☐ No |
| Recency current (within 24 months) | ☐ Yes ☐ No |
| Type trained on aircraft | ☐ Yes ☐ No |
| Site familiar / briefed | ☐ Yes ☐ No |
| Hours in last 24 hours | |
| Hours in last 7 days | |

### 5.3 Persons Injured

| Name | Affiliation | Injury Type | Treatment | WorkSafeBC Claim |
|:-----|:------------|:------------|:----------|:-----------------|
| | ☐ Aeria ☐ Client ☐ Public | | ☐ None ☐ First Aid ☐ Medical ☐ Hospital | ☐ N/A ☐ Filed |
| | ☐ Aeria ☐ Client ☐ Public | | ☐ None ☐ First Aid ☐ Medical ☐ Hospital | ☐ N/A ☐ Filed |

---

## SECTION 6: OCCURRENCE DESCRIPTION

### 6.1 Phase of Flight

| Phase | Select |
|:------|:-------|
| Pre-flight / Ground | ☐ |
| Takeoff | ☐ |
| Climb | ☐ |
| Cruise / En Route | ☐ |
| Manoeuvring | ☐ |
| Descent | ☐ |
| Approach | ☐ |
| Landing | ☐ |
| Post-flight / Ground | ☐ |

### 6.2 Flight Mode

| Mode | Select |
|:-----|:-------|
| Manual | ☐ |
| Attitude/Stabilized | ☐ |
| Position Hold | ☐ |
| Autonomous/Waypoint | ☐ |
| Return to Home | ☐ |
| Failsafe Active | ☐ |
| Other: | |

### 6.3 Narrative Description

**Describe what happened in sequence - before, during, and after the occurrence:**

| Narrative |
|:----------|
| |
| |
| |
| |
| |
| |
| |
| |

### 6.4 Flight Data

| Data | Available | Preserved | Location |
|:-----|:----------|:----------|:---------|
| Telemetry logs | ☐ Yes ☐ No | ☐ Yes | |
| Flight controller logs | ☐ Yes ☐ No | ☐ Yes | |
| App flight records | ☐ Yes ☐ No | ☐ Yes | |
| Video (FPV/recorded) | ☐ Yes ☐ No | ☐ Yes | |
| Photos | ☐ Yes ☐ No | ☐ Yes | |
| ADS-B data | ☐ Yes ☐ No ☐ N/A | ☐ Yes | |

---

## SECTION 7: IMMEDIATE CAUSE ANALYSIS

### 7.1 Technical Factors

| Factor | Contributed | Details |
|:-------|:------------|:--------|
| Airframe failure/damage | ☐ Yes ☐ No ☐ Unknown | |
| Motor failure | ☐ Yes ☐ No ☐ Unknown | |
| Propeller failure | ☐ Yes ☐ No ☐ Unknown | |
| Battery failure/depletion | ☐ Yes ☐ No ☐ Unknown | |
| Flight controller malfunction | ☐ Yes ☐ No ☐ Unknown | |
| GPS failure/interference | ☐ Yes ☐ No ☐ Unknown | |
| Compass error/interference | ☐ Yes ☐ No ☐ Unknown | |
| C2 link loss/interference | ☐ Yes ☐ No ☐ Unknown | |
| Payload issue | ☐ Yes ☐ No ☐ Unknown | |
| Sensor failure | ☐ Yes ☐ No ☐ Unknown | |
| Software/firmware issue | ☐ Yes ☐ No ☐ Unknown | |
| Failsafe malfunction | ☐ Yes ☐ No ☐ Unknown | |

### 7.2 Human Factors

| Factor | Contributed | Details |
|:-------|:------------|:--------|
| Loss of situational awareness | ☐ Yes ☐ No | |
| Spatial disorientation | ☐ Yes ☐ No | |
| Fatigue | ☐ Yes ☐ No | |
| Distraction | ☐ Yes ☐ No | |
| Task overload | ☐ Yes ☐ No | |
| Inadequate pre-flight | ☐ Yes ☐ No | |
| Procedure not followed | ☐ Yes ☐ No | |
| Poor decision making | ☐ Yes ☐ No | |
| Inadequate crew coordination | ☐ Yes ☐ No | |
| Training deficiency | ☐ Yes ☐ No | |
| Experience level | ☐ Yes ☐ No | |
| Complacency | ☐ Yes ☐ No | |

### 7.3 Environmental Factors

| Factor | Contributed | Details |
|:-------|:------------|:--------|
| Wind (exceeded limits) | ☐ Yes ☐ No | |
| Gusts (unexpected) | ☐ Yes ☐ No | |
| Precipitation | ☐ Yes ☐ No | |
| Temperature (extreme) | ☐ Yes ☐ No | |
| Visibility | ☐ Yes ☐ No | |
| Sun glare | ☐ Yes ☐ No | |
| Terrain/obstacles | ☐ Yes ☐ No | |
| Birds/wildlife | ☐ Yes ☐ No | |
| EMI/RF interference | ☐ Yes ☐ No | |
| Magnetic interference | ☐ Yes ☐ No | |

### 7.4 Organizational Factors

| Factor | Contributed | Details |
|:-------|:------------|:--------|
| Inadequate procedures | ☐ Yes ☐ No | |
| Inadequate training program | ☐ Yes ☐ No | |
| Inadequate maintenance program | ☐ Yes ☐ No | |
| Pressure to complete mission | ☐ Yes ☐ No | |
| Resource constraints | ☐ Yes ☐ No | |
| Inadequate risk assessment | ☐ Yes ☐ No | |

---

## SECTION 8: IMMEDIATE ACTIONS TAKEN

| Time | Action | By Whom |
|:-----|:-------|:--------|
| | | |
| | | |
| | | |
| | | |

---

## SECTION 9: REGULATORY NOTIFICATIONS

### 9.1 TSB Notification (if required)

| Field | Entry |
|:------|:------|
| TSB notified | ☐ Yes ☐ No ☐ N/A |
| Date/Time notified | |
| Notified by | |
| TSB Contact/Reference | |
| TSB file number | |

**TSB Contact:** 1-800-387-3557 (24/7)

### 9.2 Transport Canada Notification (if required)

| Field | Entry |
|:------|:------|
| TC notified | ☐ Yes ☐ No ☐ N/A |
| Date/Time notified | |
| Method | ☐ Phone ☐ Email ☐ CADORS |
| Reference number | |

### 9.3 Other Notifications

| Authority | Notified | Date | Reference |
|:----------|:---------|:-----|:----------|
| WorkSafeBC | ☐ Yes ☐ No ☐ N/A | | |
| NAV CANADA | ☐ Yes ☐ No ☐ N/A | | |
| Police | ☐ Yes ☐ No ☐ N/A | | |
| Client | ☐ Yes ☐ No | | |
| Insurance | ☐ Yes ☐ No | | |

---

## SECTION 10: ANALYSIS BEFORE RESUMING OPERATIONS

**Per CAR 901.49: Analysis must be completed before resuming operations.**

### 10.1 Analysis Completed

| Item | Completed |
|:-----|:----------|
| All relevant factors identified | ☐ |
| Root cause(s) determined | ☐ |
| Corrective actions identified | ☐ |
| Aircraft inspected/repaired | ☐ |
| Safe to resume operations | ☐ |

### 10.2 Root Cause Summary

| Root Cause | Description |
|:-----------|:------------|
| Primary | |
| Contributing | |
| Contributing | |

### 10.3 Corrective Actions Before Resuming

| Action | Completed | Date | By Whom |
|:-------|:----------|:-----|:--------|
| | ☐ | | |
| | ☐ | | |
| | ☐ | | |

---

## SECTION 11: AUTHORIZATION TO RESUME OPERATIONS

| Field | Entry |
|:------|:------|
| Analysis complete | ☐ Yes |
| Corrective actions implemented | ☐ Yes |
| Aircraft serviceable | ☐ Yes |
| **Authorization to resume operations** | ☐ Granted |
| Authorized By | |
| Position | |
| Date | |
| Signature | |

---

## SECTION 12: FULL INVESTIGATION REQUIRED

| Criteria | Response |
|:---------|:---------|
| Full investigation required | ☐ Yes ☐ No |
| If yes, Investigation Report # | INV- |
| Lead Investigator assigned | |

---

## SECTION 13: SIGNATURES

### Report Completion

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| PIC | | | |
| Supervisor | | | |

### Management Review

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Operations Manager | | | |

---

## ATTACHMENTS

| Attachment | Included |
|:-----------|:---------|
| Flight logs (exported) | ☐ |
| Telemetry data | ☐ |
| Photos of aircraft/scene | ☐ |
| Video footage | ☐ |
| Witness statements | ☐ |
| Weather data | ☐ |
| Pre-flight checklist | ☐ |
| FLHA | ☐ |
| Maintenance records | ☐ |
| Manufacturer inspection report | ☐ |
| Other: | ☐ |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| CAR 901.49 analysis records | 12 months |
| Full investigation records | 24 months recommended |
| TSB reportable occurrences | Retain indefinitely |

---

**Document Control:** FRM-RPAS-INCIDENT v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Safety Meeting Minutes',
  'form',
  'FRM-SAFETYMEETING',
  'Forms',
  '# AERIA SOLUTIONS LTD

# SAFETY MEETING MINUTES

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-SAFETYMEETING |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | SECOR Element H, WCA Section 43 |

---

## SECTION 1: MEETING INFORMATION

| Field | Entry |
|:------|:------|
| **Meeting Date** | |
| **Meeting Time** | Start: End: |
| **Location** | ☐ Office ☐ Virtual ☐ Field Site: |
| **Meeting Type** | ☐ Monthly Safety Meeting ☐ H&S Committee ☐ Special ☐ Other: |
| **Chair/Facilitator** | |
| **Minutes Recorded By** | |

---

## SECTION 2: ATTENDANCE

### 2.1 Attendees

| # | Name | Position | Signature |
|:--|:-----|:---------|:----------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |

**Total Attendees:** ______

### 2.2 Absent

| Name | Reason |
|:-----|:-------|
| | |
| | |

### 2.3 Quorum

| Quorum Required | ☐ Yes - Met ☐ Yes - Not Met ☐ N/A |

---

## SECTION 3: REVIEW OF PREVIOUS MEETING

### 3.1 Previous Minutes

| Item | Status |
|:-----|:-------|
| Date of previous meeting | |
| Previous minutes reviewed | ☐ Yes |
| Previous minutes approved | ☐ Yes ☐ With amendments |
| Amendments (if any) | |

### 3.2 Action Items from Previous Meeting

| # | Action Item | Responsible | Due Date | Status | Notes |
|:--|:------------|:------------|:---------|:-------|:------|
| 1 | | | | ☐ Complete ☐ In Progress ☐ Overdue | |
| 2 | | | | ☐ Complete ☐ In Progress ☐ Overdue | |
| 3 | | | | ☐ Complete ☐ In Progress ☐ Overdue | |
| 4 | | | | ☐ Complete ☐ In Progress ☐ Overdue | |
| 5 | | | | ☐ Complete ☐ In Progress ☐ Overdue | |

---

## SECTION 4: SAFETY STATISTICS REVIEW

### 4.1 Incident Summary (Since Last Meeting)

| Metric | Count | Details |
|:-------|:------|:--------|
| Fatalities | | |
| Lost Time Injuries | | |
| Medical Treatment Injuries | | |
| First Aid Injuries | | |
| Near Misses Reported | | |
| Property Damage Incidents | | |
| RPAS Occurrences | | |
| Environmental Incidents | | |
| **Total Recordable Incidents** | | |

### 4.2 Year-to-Date Statistics

| Metric | YTD | Previous Year |
|:-------|:----|:--------------|
| Total Incidents | | |
| Lost Time Injuries | | |
| Lost Time Injury Frequency Rate | | |
| Days Since Last LTI | | |
| Near Miss Reports | | |

### 4.3 Leading Indicators

| Metric | This Period | Target |
|:-------|:------------|:-------|
| Inspections completed | | |
| FLHAs completed | | |
| Training sessions delivered | | |
| Safety observations | | |
| Hazards corrected | | |

---

## SECTION 5: INCIDENT REVIEW

### 5.1 Incidents Since Last Meeting

| Incident # | Date | Type | Brief Description | Investigation Status |
|:-----------|:-----|:-----|:------------------|:---------------------|
| | | | | ☐ Complete ☐ In Progress |
| | | | | ☐ Complete ☐ In Progress |
| | | | | ☐ Complete ☐ In Progress |

### 5.2 Incident Investigations Reviewed

| Incident # | Root Cause Summary | Corrective Actions | Status |
|:-----------|:-------------------|:-------------------|:-------|
| | | | |
| | | | |

### 5.3 Lessons Learned

| Lesson | Communication Plan |
|:-------|:-------------------|
| | |
| | |

---

## SECTION 6: INSPECTION REVIEW

### 6.1 Inspections Completed

| Inspection Type | Date | Conducted By | Findings |
|:----------------|:-----|:-------------|:---------|
| | | | |
| | | | |
| | | | |

### 6.2 Outstanding Inspection Items

| Finding | Location | Priority | Responsible | Due Date | Status |
|:--------|:---------|:---------|:------------|:---------|:-------|
| | | ☐ H ☐ M ☐ L | | | |
| | | ☐ H ☐ M ☐ L | | | |
| | | ☐ H ☐ M ☐ L | | | |

---

## SECTION 7: HAZARD REPORTS REVIEW

### 7.1 Hazards/Near Misses Reported

| Report # | Date | Hazard/Near Miss | Location | Action Taken |
|:---------|:-----|:-----------------|:---------|:-------------|
| | | | | |
| | | | | |
| | | | | |

### 7.2 Trends Identified

| Trend | Analysis | Action Required |
|:------|:---------|:----------------|
| | | |
| | | |

---

## SECTION 8: SAFETY TOPIC / TRAINING

### 8.1 Safety Topic Presented

| Field | Entry |
|:------|:------|
| Topic | |
| Presented By | |
| Duration | minutes |

### 8.2 Key Points

| Key Points Covered |
|:-------------------|
| |
| |
| |
| |

### 8.3 Upcoming Training

| Training | Date | Attendees |
|:---------|:-----|:----------|
| | | |
| | | |

---

## SECTION 9: REGULATORY / COMPLIANCE UPDATES

### 9.1 Regulatory Changes

| Item | Details | Impact | Action Required |
|:-----|:--------|:-------|:----------------|
| | | | |
| | | | |

### 9.2 Certifications / Expiries

| Certification | Holder | Expiry Date | Status |
|:--------------|:-------|:------------|:-------|
| | | | ☐ Current ☐ Expiring Soon ☐ Expired |
| | | | ☐ Current ☐ Expiring Soon ☐ Expired |

### 9.3 Audit Status

| Audit | Date | Status | Findings |
|:------|:-----|:-------|:---------|
| SECOR | | ☐ Scheduled ☐ Complete ☐ N/A | |
| Client | | ☐ Scheduled ☐ Complete ☐ N/A | |
| Internal | | ☐ Scheduled ☐ Complete ☐ N/A | |

---

## SECTION 10: POLICY / PROCEDURE UPDATES

### 10.1 Documents Reviewed or Updated

| Document | Change | Effective Date |
|:---------|:-------|:---------------|
| | | |
| | | |

### 10.2 New Procedures Required

| Topic | Reason | Responsible | Due Date |
|:------|:-------|:------------|:---------|
| | | | |

---

## SECTION 11: EQUIPMENT / MAINTENANCE

### 11.1 Equipment Issues

| Equipment | Issue | Status | Action |
|:----------|:------|:-------|:-------|
| | | ☐ Resolved ☐ In Progress | |
| | | ☐ Resolved ☐ In Progress | |

### 11.2 New Equipment / PPE

| Item | Purpose | Training Required |
|:-----|:--------|:------------------|
| | | ☐ Yes ☐ No |
| | | ☐ Yes ☐ No |

---

## SECTION 12: WORKER CONCERNS / SUGGESTIONS

### 12.1 Concerns Raised

| Concern | Raised By | Discussion | Resolution / Action |
|:--------|:----------|:-----------|:--------------------|
| | | | |
| | | | |
| | | | |

### 12.2 Suggestions / Ideas

| Suggestion | Raised By | Discussion | Action |
|:-----------|:----------|:-----------|:-------|
| | | | |
| | | | |

### 12.3 Positive Observations / Recognition

| Recognition | Details |
|:------------|:--------|
| | |
| | |

---

## SECTION 13: NEW BUSINESS

| Item | Discussion | Decision / Action |
|:-----|:-----------|:------------------|
| | | |
| | | |
| | | |

---

## SECTION 14: ACTION ITEMS FROM THIS MEETING

| # | Action Item | Responsible | Due Date | Priority |
|:--|:------------|:------------|:---------|:---------|
| 1 | | | | ☐ H ☐ M ☐ L |
| 2 | | | | ☐ H ☐ M ☐ L |
| 3 | | | | ☐ H ☐ M ☐ L |
| 4 | | | | ☐ H ☐ M ☐ L |
| 5 | | | | ☐ H ☐ M ☐ L |
| 6 | | | | ☐ H ☐ M ☐ L |
| 7 | | | | ☐ H ☐ M ☐ L |
| 8 | | | | ☐ H ☐ M ☐ L |

---

## SECTION 15: NEXT MEETING

| Field | Entry |
|:------|:------|
| Next Meeting Date | |
| Time | |
| Location | |
| Chair | |
| Agenda Items (Preliminary) | |

---

## SECTION 16: MEETING CLOSURE

| Field | Entry |
|:------|:------|
| Meeting Adjourned | Time: |
| Minutes Prepared By | |
| Date Prepared | |

---

## SECTION 17: APPROVAL

### Minutes Approved By:

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Chair | | | |
| Operations Manager | | | |

---

## DISTRIBUTION

| Distributed To | Method | Date |
|:---------------|:-------|:-----|
| All Employees | ☐ Email ☐ Posted ☐ Meeting | |
| Management | ☐ Email ☐ Meeting | |
| Safety Board | ☐ Posted | |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| WCA Section 43 | 2 years |
| SECOR Element H | 3 years |
| Best Practice | 5 years |

---

**Document Control:** FRM-SAFETYMEETING v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Worksite Inspection',
  'form',
  'FRM-SITEINSP',
  'Forms',
  '# AERIA SOLUTIONS LTD

# WORKSITE INSPECTION CHECKLIST

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-SITEINSP |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | BC OHS Reg 3.5-3.8, SECOR Element D, WCA Section 21 |

---

## PURPOSE

Regular workplace inspections identify hazards before they cause incidents. This form documents systematic inspections of worksites, equipment, and work practices to ensure compliance with safety standards and regulatory requirements.

**BC OHS Regulation 3.5:** Employer must ensure regular inspections are made of all workplaces, including buildings, structures, grounds, excavations, tools, equipment, machinery, and work methods and practices.

---

## SECTION 1: INSPECTION INFORMATION

| Field | Entry |
|:------|:------|
| **Inspection Date** | |
| **Inspection Type** | ☐ Scheduled ☐ Pre-Job ☐ Follow-up ☐ Requested ☐ Random |
| **Inspection Frequency** | ☐ Daily ☐ Weekly ☐ Monthly ☐ Quarterly ☐ Annual |
| **Location/Site** | |
| **Project/Client** | |
| **Inspection Start Time** | |
| **Inspection End Time** | |

---

## SECTION 2: INSPECTOR INFORMATION

| Role | Name | Signature |
|:-----|:-----|:----------|
| Lead Inspector | | |
| Inspector 2 (if applicable) | | |
| Worker Representative | | |
| Site Contact | | |

---

## SECTION 3: INSPECTION SCOPE

**Areas/Items Inspected:**

| Area/Item | Inspected |
|:----------|:----------|
| ☐ Office / indoor workspace | |
| ☐ Field site | |
| ☐ Vehicles | |
| ☐ RPAS equipment | |
| ☐ Storage areas | |
| ☐ Emergency equipment | |
| ☐ PPE | |
| ☐ Tools and equipment | |
| ☐ Work practices observed | |
| ☐ Documentation review | |
| ☐ Other: | |

---

## SECTION 4: GENERAL WORKPLACE CONDITIONS

### 4.1 Housekeeping and Order

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Work areas clean and organized | ☐ | ☐ | ☐ | |
| Aisles and walkways clear | ☐ | ☐ | ☐ | |
| Storage areas orderly | ☐ | ☐ | ☐ | |
| Waste properly disposed | ☐ | ☐ | ☐ | |
| Spills cleaned up promptly | ☐ | ☐ | ☐ | |
| Materials properly stored | ☐ | ☐ | ☐ | |
| Cords/cables not creating trip hazards | ☐ | ☐ | ☐ | |

**S = Satisfactory | U = Unsatisfactory | N/A = Not Applicable**

### 4.2 Floors, Surfaces, and Terrain

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Floor surfaces in good condition | ☐ | ☐ | ☐ | |
| No slip/trip hazards | ☐ | ☐ | ☐ | |
| Floor openings protected | ☐ | ☐ | ☐ | |
| Mats/gratings secure | ☐ | ☐ | ☐ | |
| Outdoor surfaces safe (ice, mud, uneven) | ☐ | ☐ | ☐ | |
| Adequate drainage | ☐ | ☐ | ☐ | |

### 4.3 Lighting and Ventilation

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Adequate lighting in work areas | ☐ | ☐ | ☐ | |
| Emergency lighting functional | ☐ | ☐ | ☐ | |
| Exterior lighting adequate | ☐ | ☐ | ☐ | |
| Ventilation adequate | ☐ | ☐ | ☐ | |
| Air quality acceptable | ☐ | ☐ | ☐ | |

---

## SECTION 5: FIRE SAFETY AND EMERGENCY EQUIPMENT

### 5.1 Fire Prevention

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Fire extinguishers accessible | ☐ | ☐ | ☐ | |
| Fire extinguishers inspected (current tag) | ☐ | ☐ | ☐ | |
| Fire extinguisher type appropriate | ☐ | ☐ | ☐ | |
| No blocked fire exits | ☐ | ☐ | ☐ | |
| Exit signs visible and illuminated | ☐ | ☐ | ☐ | |
| Emergency evacuation routes posted | ☐ | ☐ | ☐ | |
| Flammable materials properly stored | ☐ | ☐ | ☐ | |
| No smoking violations | ☐ | ☐ | ☐ | |
| Battery charging area safe | ☐ | ☐ | ☐ | |

### 5.2 Emergency Equipment

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| First aid kit stocked and accessible | ☐ | ☐ | ☐ | |
| First aid kit inspection current | ☐ | ☐ | ☐ | |
| AED present (if required) | ☐ | ☐ | ☐ | |
| AED inspection current | ☐ | ☐ | ☐ | |
| Emergency phone numbers posted | ☐ | ☐ | ☐ | |
| Eye wash station (if required) | ☐ | ☐ | ☐ | |
| Spill kit accessible | ☐ | ☐ | ☐ | |
| Emergency shower (if required) | ☐ | ☐ | ☐ | |

---

## SECTION 6: ELECTRICAL SAFETY

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Electrical panels accessible | ☐ | ☐ | ☐ | |
| Panel covers in place | ☐ | ☐ | ☐ | |
| Circuits properly labeled | ☐ | ☐ | ☐ | |
| Extension cords in good condition | ☐ | ☐ | ☐ | |
| No daisy-chained power strips | ☐ | ☐ | ☐ | |
| GFCIs where required | ☐ | ☐ | ☐ | |
| Outlets/switches in good condition | ☐ | ☐ | ☐ | |
| No exposed wiring | ☐ | ☐ | ☐ | |
| Battery chargers in good condition | ☐ | ☐ | ☐ | |

---

## SECTION 7: TOOLS AND EQUIPMENT

### 7.1 General Tools

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Hand tools in good condition | ☐ | ☐ | ☐ | |
| Power tools in good condition | ☐ | ☐ | ☐ | |
| Guards in place on power tools | ☐ | ☐ | ☐ | |
| Tools properly stored when not in use | ☐ | ☐ | ☐ | |
| Defective tools removed from service | ☐ | ☐ | ☐ | |
| Correct tools being used for job | ☐ | ☐ | ☐ | |

### 7.2 RPAS Equipment

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Aircraft visually in good condition | ☐ | ☐ | ☐ | |
| Propellers undamaged | ☐ | ☐ | ☐ | |
| Batteries properly stored | ☐ | ☐ | ☐ | |
| Battery storage containers used | ☐ | ☐ | ☐ | |
| Charging area properly set up | ☐ | ☐ | ☐ | |
| Controller/GCS in good condition | ☐ | ☐ | ☐ | |
| Cases and transport equipment | ☐ | ☐ | ☐ | |
| Maintenance logs current | ☐ | ☐ | ☐ | |
| Registration visible | ☐ | ☐ | ☐ | |

### 7.3 Field Equipment

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Survey equipment properly stored | ☐ | ☐ | ☐ | |
| Tripods and mounts in good condition | ☐ | ☐ | ☐ | |
| GPS/GNSS equipment | ☐ | ☐ | ☐ | |
| Communications equipment functional | ☐ | ☐ | ☐ | |
| Portable weather equipment | ☐ | ☐ | ☐ | |

---

## SECTION 8: VEHICLES

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Vehicle in good mechanical condition | ☐ | ☐ | ☐ | |
| Lights functional | ☐ | ☐ | ☐ | |
| Windshield/mirrors clean and undamaged | ☐ | ☐ | ☐ | |
| Tires in good condition | ☐ | ☐ | ☐ | |
| Emergency kit present | ☐ | ☐ | ☐ | |
| First aid kit in vehicle | ☐ | ☐ | ☐ | |
| Fire extinguisher in vehicle | ☐ | ☐ | ☐ | |
| Cargo properly secured | ☐ | ☐ | ☐ | |
| Registration/insurance current | ☐ | ☐ | ☐ | |
| Pre-trip inspection completed | ☐ | ☐ | ☐ | |

---

## SECTION 9: PERSONAL PROTECTIVE EQUIPMENT (PPE)

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Required PPE available | ☐ | ☐ | ☐ | |
| PPE in good condition | ☐ | ☐ | ☐ | |
| Workers wearing required PPE | ☐ | ☐ | ☐ | |
| PPE properly stored | ☐ | ☐ | ☐ | |
| Safety footwear | ☐ | ☐ | ☐ | |
| High-visibility clothing | ☐ | ☐ | ☐ | |
| Hard hats | ☐ | ☐ | ☐ | |
| Safety glasses/eye protection | ☐ | ☐ | ☐ | |
| Hearing protection | ☐ | ☐ | ☐ | |
| Gloves | ☐ | ☐ | ☐ | |
| Respiratory protection (if required) | ☐ | ☐ | ☐ | |

---

## SECTION 10: HAZARDOUS MATERIALS / WHMIS

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| SDS binder accessible | ☐ | ☐ | ☐ | |
| SDS sheets current | ☐ | ☐ | ☐ | |
| Chemicals properly labeled | ☐ | ☐ | ☐ | |
| Chemicals properly stored | ☐ | ☐ | ☐ | |
| Incompatible chemicals separated | ☐ | ☐ | ☐ | |
| Secondary containment where required | ☐ | ☐ | ☐ | |
| LiPo batteries stored in fireproof containers | ☐ | ☐ | ☐ | |
| Fuel stored properly | ☐ | ☐ | ☐ | |

---

## SECTION 11: ERGONOMICS AND OFFICE SAFETY

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Workstations properly set up | ☐ | ☐ | ☐ | |
| Monitor height appropriate | ☐ | ☐ | ☐ | |
| Chairs adjustable and in good condition | ☐ | ☐ | ☐ | |
| Adequate desk space | ☐ | ☐ | ☐ | |
| Keyboard/mouse positioning | ☐ | ☐ | ☐ | |
| Adequate breaks from screen time | ☐ | ☐ | ☐ | |
| Heavy items stored at waist height | ☐ | ☐ | ☐ | |
| Filing cabinets stable (not top-heavy) | ☐ | ☐ | ☐ | |

---

## SECTION 12: WORK PRACTICES OBSERVED

| Practice | S | U | N/A | Comments/Findings |
|:---------|:--|:--|:----|:------------------|
| Safe lifting techniques used | ☐ | ☐ | ☐ | |
| Proper body mechanics | ☐ | ☐ | ☐ | |
| Pre-flight checklists completed | ☐ | ☐ | ☐ | |
| FLHAs being completed | ☐ | ☐ | ☐ | |
| Tailgate meetings held | ☐ | ☐ | ☐ | |
| Procedures being followed | ☐ | ☐ | ☐ | |
| Working alone check-ins occurring | ☐ | ☐ | ☐ | |
| Good communication observed | ☐ | ☐ | ☐ | |
| No rushing observed | ☐ | ☐ | ☐ | |
| Stop work authority understood | ☐ | ☐ | ☐ | |

---

## SECTION 13: DOCUMENTATION AND SIGNAGE

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Safety policy posted | ☐ | ☐ | ☐ | |
| Emergency procedures posted | ☐ | ☐ | ☐ | |
| First aid personnel posted | ☐ | ☐ | ☐ | |
| WCB poster displayed | ☐ | ☐ | ☐ | |
| Hazard warning signs present | ☐ | ☐ | ☐ | |
| Required certifications current | ☐ | ☐ | ☐ | |
| Inspection records current | ☐ | ☐ | ☐ | |
| Training records accessible | ☐ | ☐ | ☐ | |

---

## SECTION 14: SECURITY

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Doors/windows secure | ☐ | ☐ | ☐ | |
| Valuable equipment secured | ☐ | ☐ | ☐ | |
| Access control functioning | ☐ | ☐ | ☐ | |
| Visitors signed in | ☐ | ☐ | ☐ | |
| Vehicles locked when unattended | ☐ | ☐ | ☐ | |
| RPAS equipment secured | ☐ | ☐ | ☐ | |

---

## SECTION 15: FIELD SITE SPECIFIC (If Applicable)

| Item | S | U | N/A | Comments/Findings |
|:-----|:--|:--|:----|:------------------|
| Site access controlled | ☐ | ☐ | ☐ | |
| Launch/landing area clear | ☐ | ☐ | ☐ | |
| Obstacles identified and marked | ☐ | ☐ | ☐ | |
| Weather conditions monitored | ☐ | ☐ | ☐ | |
| Wildlife hazards assessed | ☐ | ☐ | ☐ | |
| Communications verified | ☐ | ☐ | ☐ | |
| Emergency egress routes clear | ☐ | ☐ | ☐ | |
| Client site rules followed | ☐ | ☐ | ☐ | |
| Permits/authorizations in place | ☐ | ☐ | ☐ | |

---

## SECTION 16: FINDINGS SUMMARY

### 16.1 Hazards/Deficiencies Found

| # | Finding | Location | Risk Level | Immediate Action Taken |
|:--|:--------|:---------|:-----------|:-----------------------|
| 1 | | | ☐ H ☐ M ☐ L | |
| 2 | | | ☐ H ☐ M ☐ L | |
| 3 | | | ☐ H ☐ M ☐ L | |
| 4 | | | ☐ H ☐ M ☐ L | |
| 5 | | | ☐ H ☐ M ☐ L | |
| 6 | | | ☐ H ☐ M ☐ L | |
| 7 | | | ☐ H ☐ M ☐ L | |
| 8 | | | ☐ H ☐ M ☐ L | |

### 16.2 Positive Observations

| Positive Observations |
|:----------------------|
| |
| |
| |

---

## SECTION 17: CORRECTIVE ACTIONS REQUIRED

| # | Corrective Action | Responsible | Target Date | Priority | Status |
|:--|:------------------|:------------|:------------|:---------|:-------|
| 1 | | | | ☐ H ☐ M ☐ L | ☐ Open |
| 2 | | | | ☐ H ☐ M ☐ L | ☐ Open |
| 3 | | | | ☐ H ☐ M ☐ L | ☐ Open |
| 4 | | | | ☐ H ☐ M ☐ L | ☐ Open |
| 5 | | | | ☐ H ☐ M ☐ L | ☐ Open |
| 6 | | | | ☐ H ☐ M ☐ L | ☐ Open |
| 7 | | | | ☐ H ☐ M ☐ L | ☐ Open |
| 8 | | | | ☐ H ☐ M ☐ L | ☐ Open |

**Priority Response Times:**
- **High:** Immediate correction required (same day)
- **Medium:** Correction within 7 days
- **Low:** Correction within 30 days

---

## SECTION 18: FOLLOW-UP FROM PREVIOUS INSPECTION

| Previous Finding | Status | Verified |
|:-----------------|:-------|:---------|
| | ☐ Closed ☐ Open ☐ In Progress | ☐ |
| | ☐ Closed ☐ Open ☐ In Progress | ☐ |
| | ☐ Closed ☐ Open ☐ In Progress | ☐ |
| | ☐ Closed ☐ Open ☐ In Progress | ☐ |

---

## SECTION 19: INSPECTION SUMMARY

| Summary | Entry |
|:--------|:------|
| **Total Items Inspected** | |
| **Satisfactory** | |
| **Unsatisfactory** | |
| **N/A** | |
| **Overall Rating** | ☐ Satisfactory ☐ Needs Improvement ☐ Unsatisfactory |

---

## SECTION 20: INSPECTOR CERTIFICATION

**I certify that this inspection was conducted thoroughly and findings are accurately recorded.**

| Field | Entry |
|:------|:------|
| **Lead Inspector Name** | |
| **Signature** | |
| **Date** | |

---

## SECTION 21: MANAGEMENT REVIEW

| Field | Entry |
|:------|:------|
| **Reviewed By** | |
| **Position** | |
| **Date** | |
| **Signature** | |
| **Comments** | |

---

## SECTION 22: ACTION ITEM CLOSURE

**Complete this section when corrective actions are verified:**

| # | Action Completed | Verified By | Date | Effective |
|:--|:-----------------|:------------|:-----|:----------|
| 1 | ☐ | | | ☐ Yes ☐ No |
| 2 | ☐ | | | ☐ Yes ☐ No |
| 3 | ☐ | | | ☐ Yes ☐ No |
| 4 | ☐ | | | ☐ Yes ☐ No |
| 5 | ☐ | | | ☐ Yes ☐ No |
| 6 | ☐ | | | ☐ Yes ☐ No |
| 7 | ☐ | | | ☐ Yes ☐ No |
| 8 | ☐ | | | ☐ Yes ☐ No |

| All Actions Closed | Date | Verified By |
|:-------------------|:-----|:------------|
| ☐ Yes | | |

---

## DISTRIBUTION

| Distributed To | Method | Date |
|:---------------|:-------|:-----|
| Operations Manager | ☐ Email ☐ Hard Copy | |
| Site Supervisor | ☐ Email ☐ Hard Copy | |
| Safety Board | ☐ Posted | |
| Affected Workers | ☐ Meeting ☐ Email | |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| BC OHS Regulation | 3 years |
| SECOR Element D | 3 years |
| Best Practice | 5 years |

---

**Document Control:** FRM-SITEINSP v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Site Survey Form',
  'form',
  'FRM-SITESURVEY',
  'Forms',
  '# AERIA SOLUTIONS LTD

# SITE SURVEY FORM

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-SITESURVEY |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Survey Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Surveyed By** | |
| **Project/Client** | |
| **Location Name** | |
| **Address/Description** | |
| **Coordinates** | Lat: _______ Long: _______ |

---

## Site Access

| Item | Details |
|:-----|:--------|
| Access route | |
| Gate/security | ☐ None ☐ Gate code: ___ ☐ Contact required |
| Vehicle access | ☐ Yes ☐ No ☐ Partial |
| Parking location | |
| Walking distance to ops area | |
| Site contact | Name: _______ Phone: _______ |

---

## Airspace Assessment

| Item | Entry |
|:-----|:------|
| Controlled airspace | ☐ No ☐ Yes - Class: ___ |
| Distance to aerodrome | ___ NM |
| Distance to heliport | ___ NM |
| NAV CANADA zone | ☐ No ☐ Yes |
| Authorization required | ☐ No ☐ Yes |
| NOTAMs affecting area | ☐ None ☐ Yes - Details: ___ |
| Other restrictions | |

---

## Terrain & Obstacles

### Terrain

| Feature | Present? | Details |
|:--------|:---------|:--------|
| Flat terrain | ☐ | |
| Hills/slopes | ☐ | |
| Water bodies | ☐ | |
| Vegetation | ☐ | |
| Buildings | ☐ | |

### Obstacles

| Obstacle | Height AGL | Location | Marked? |
|:---------|:-----------|:---------|:--------|
| Power lines | | | ☐ |
| Towers | | | ☐ |
| Trees | | | |
| Buildings | | | |
| Other: | | | |

---

## Operations Area

| Item | Entry |
|:-----|:------|
| Proposed takeoff location | Coords: _______ |
| Proposed landing location | ☐ Same ☐ Different: _______ |
| Alternate landing options | |
| Operations area dimensions | ___ m x ___ m |
| Maximum required altitude | ___ m AGL |

---

## People & Property

| Item | Entry |
|:-----|:------|
| Bystanders expected | ☐ None ☐ Few ☐ Many |
| Ability to control access | ☐ Full ☐ Partial ☐ Limited |
| Nearby buildings | ☐ None ☐ Occupied ☐ Unoccupied |
| Critical infrastructure | ☐ None ☐ Present: ___ |
| Sensitive areas | ☐ None ☐ Present: ___ |

---

## Communication

| Item | Entry |
|:-----|:------|
| Cell coverage | ☐ Good ☐ Partial ☐ None |
| Radio coverage | ☐ Yes ☐ No ☐ Unknown |
| Emergency services access | ☐ Good ☐ Limited |
| Nearest hospital | Name: ___ Distance: ___ |

---

## Environmental Factors

| Factor | Notes |
|:-------|:------|
| Typical wind patterns | |
| Sun position issues | |
| Noise concerns | |
| Wildlife observed | |
| Environmental sensitivities | |

---

## Hazards Identified

| Hazard | Risk | Mitigation |
|:-------|:-----|:-----------|
| | | |
| | | |
| | | |
| | | |

---

## Photos/Sketches

| Item | Taken? | Description |
|:-----|:-------|:------------|
| Overview photo | ☐ | |
| Takeoff area | ☐ | |
| Obstacles | ☐ | |
| Access route | ☐ | |
| Site sketch | ☐ | |

---

## Operations Suitability

| Operation Type | Suitable? | Notes |
|:---------------|:----------|:------|
| Basic operations | ☐ Yes ☐ No | |
| Advanced operations | ☐ Yes ☐ No | |
| BVLOS | ☐ Yes ☐ No | |
| Night operations | ☐ Yes ☐ No | |

---

## Recommendations

| Category | Recommendation |
|:---------|:---------------|
| Authorization | |
| Crew | |
| Equipment | |
| Timing | |
| Other | |

---

## Site Approved for Operations

☐ **Yes** - Site approved with conditions below

☐ **No** - Site not suitable for operations

Conditions/Restrictions:

| Conditions |
|:-----------|
| |
| |

---

## Sign-Off

| Field | Entry |
|:------|:------|
| Surveyed By | |
| Signature | |
| Date | |

| Field | Entry |
|:------|:------|
| Reviewed By | |
| Signature | |
| Date | |

---

**Document Control:** FRM-SITESURVEY v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Tailgate Meeting',
  'form',
  'FRM-TAILGATE',
  'Forms',
  '# AERIA SOLUTIONS LTD

# TAILGATE / TOOLBOX MEETING RECORD

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-TAILGATE |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | SECOR Element H, BC OHS Reg |

---

## PURPOSE

Tailgate (toolbox) meetings are brief safety discussions held before work begins. They ensure all crew members understand the day''s tasks, hazards, and controls.

---

## SECTION 1: MEETING INFORMATION

| Field | Entry |
|:------|:------|
| **Date** | |
| **Time** | |
| **Location/Site** | |
| **Project/Client** | |
| **Meeting Leader** | |
| **Duration** | minutes |

---

## SECTION 2: ATTENDANCE

**All attendees must sign acknowledging participation:**

| # | Name (Print) | Company | Signature |
|:--|:-------------|:--------|:----------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |

**Total Attendees:** ______

---

## SECTION 3: WORK SCOPE REVIEW

### 3.1 Today''s Tasks

| Task | Location | Lead Person |
|:-----|:---------|:------------|
| | | |
| | | |
| | | |
| | | |

### 3.2 Equipment to be Used

| Equipment | Inspected | Operator |
|:----------|:----------|:---------|
| | ☐ | |
| | ☐ | |
| | ☐ | |

---

## SECTION 4: SAFETY TOPIC

### 4.1 Topic Discussed

| Field | Entry |
|:------|:------|
| **Today''s Safety Topic** | |

| Topic Options (check if discussed) |
|:-----------------------------------|
| ☐ FLHA completion and review |
| ☐ Hazard recognition |
| ☐ PPE requirements |
| ☐ Emergency procedures |
| ☐ Weather conditions |
| ☐ Working alone |
| ☐ Fatigue management |
| ☐ Manual handling |
| ☐ Slips, trips, falls |
| ☐ Vehicle safety |
| ☐ RPAS safety |
| ☐ Battery safety |
| ☐ Wildlife awareness |
| ☐ Heat/cold stress |
| ☐ Client site rules |
| ☐ Recent incident review |
| ☐ Near miss discussion |
| ☐ Lessons learned |
| ☐ Other: _____________ |

### 4.2 Key Points Discussed

| Key Points |
|:-----------|
| |
| |
| |
| |

---

## SECTION 5: HAZARD REVIEW

### 5.1 Site/Environmental Conditions

| Condition | Status | Notes |
|:----------|:-------|:------|
| Weather | ☐ Acceptable ☐ Monitor ☐ Concern | |
| Terrain | ☐ Acceptable ☐ Concern | |
| Traffic | ☐ Acceptable ☐ Concern | |
| Public/Bystanders | ☐ None ☐ Present - Controlled | |
| Wildlife | ☐ No concerns ☐ Awareness required | |
| Other sites/crews | ☐ None ☐ Present - Coordinated | |

### 5.2 Hazards Identified Today

| Hazard | Risk Level | Control Measures |
|:-------|:-----------|:-----------------|
| | ☐ H ☐ M ☐ L | |
| | ☐ H ☐ M ☐ L | |
| | ☐ H ☐ M ☐ L | |
| | ☐ H ☐ M ☐ L | |
| | ☐ H ☐ M ☐ L | |

### 5.3 High-Risk Activities Today

| High-Risk Activity | Additional Controls |
|:-------------------|:--------------------|
| ☐ BVLOS operations | |
| ☐ Working at heights | |
| ☐ Heavy lifting | |
| ☐ Working near traffic | |
| ☐ Working alone | |
| ☐ Hot work | |
| ☐ Confined space | |
| ☐ Electrical hazards | |
| ☐ Dangerous goods | |
| ☐ Other: | |

---

## SECTION 6: PPE REQUIREMENTS

| PPE | Required Today | Verified |
|:----|:---------------|:---------|
| Safety footwear | ☐ Yes ☐ No | ☐ |
| High-visibility vest | ☐ Yes ☐ No | ☐ |
| Hard hat | ☐ Yes ☐ No | ☐ |
| Safety glasses | ☐ Yes ☐ No | ☐ |
| Hearing protection | ☐ Yes ☐ No | ☐ |
| Gloves | ☐ Yes ☐ No | ☐ |
| Sun protection | ☐ Yes ☐ No | ☐ |
| Other: | ☐ Yes ☐ No | ☐ |

**All required PPE available and in good condition?** ☐ Yes ☐ No

---

## SECTION 7: EMERGENCY PREPAREDNESS

| Item | Confirmed |
|:-----|:----------|
| Emergency contact numbers available | ☐ |
| First aid kit location known | ☐ |
| First aid qualified person identified | |
| Rally/muster point identified | |
| Communication method confirmed | ☐ Radio ☐ Cell ☐ Other: |
| Emergency procedures reviewed | ☐ |
| Vehicle keys accessible (if applicable) | ☐ |
| Nearest hospital/medical facility | |

---

## SECTION 8: COMMUNICATION

### 8.1 Radio/Communication Check

| Person | Call Sign/Channel | Check |
|:-------|:------------------|:------|
| | | ☐ |
| | | ☐ |
| | | ☐ |

### 8.2 Working Alone (if applicable)

| Field | Entry |
|:------|:------|
| Working alone today | ☐ Yes ☐ No |
| Check-in schedule | Every ___ minutes |
| Contact person | |
| Contact method | ☐ Phone ☐ Radio ☐ App |

---

## SECTION 9: LESSONS LEARNED / RECENT INCIDENTS

| Item | Details |
|:-----|:--------|
| Recent incident discussed | ☐ Yes ☐ No ☐ N/A |
| Incident reference | |
| Key lessons | |
| Previous shift issues | |

---

## SECTION 10: WORKER INPUT

### 10.1 Questions or Concerns Raised

| Concern Raised | Raised By | Resolution |
|:---------------|:----------|:-----------|
| | | |
| | | |
| | | |

### 10.2 Suggestions

| Suggestion | Raised By | Action |
|:-----------|:----------|:-------|
| | | |
| | | |

---

## SECTION 11: ACTION ITEMS

| Action | Responsible | Due |
|:-------|:------------|:----|
| | | |
| | | |
| | | |

---

## SECTION 12: FLHA CONFIRMATION

| FLHA Status | Response |
|:------------|:---------|
| FLHA completed for today? | ☐ Yes - FLHA #: _______ |
| FLHA reviewed with crew? | ☐ Yes |
| All crew signed FLHA? | ☐ Yes |

---

## SECTION 13: GO / NO-GO DECISION

**Based on this discussion, the crew confirms:**

| Decision | Select |
|:---------|:-------|
| **GO** - All hazards identified and controlled; safe to proceed | ☐ |
| **CONDITIONAL GO** - Proceed with noted restrictions | ☐ |
| **NO-GO** - Unsafe conditions; do not proceed | ☐ |

**If Conditional or No-Go, explain:**

| Explanation |
|:------------|
| |
| |

---

## SECTION 14: MEETING LEADER CONFIRMATION

**I confirm that:**

- ☐ All crew members were present and participated
- ☐ Today''s tasks and hazards were discussed
- ☐ Safety topic was covered
- ☐ Questions and concerns were addressed
- ☐ Emergency procedures were reviewed
- ☐ All crew understand stop work authority

| Field | Entry |
|:------|:------|
| **Meeting Leader Name** | |
| **Signature** | |
| **Date/Time** | |

---

## SECTION 15: END OF DAY REVIEW (Optional)

**Complete at end of shift:**

| Item | Status |
|:-----|:-------|
| Incidents / near misses today | ☐ None ☐ Yes - Reported |
| Injuries today | ☐ None ☐ Yes - Reported |
| New hazards identified | ☐ None ☐ Yes - Details: |
| Issues for next shift | |
| Equipment issues | ☐ None ☐ Yes - Details: |

| Field | Entry |
|:------|:------|
| End of Day Review By | |
| Time | |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| Tailgate meeting records | 2 years minimum |
| SECOR audit requirement | 3 years |

---

**Document Control:** FRM-TAILGATE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Training Attendance',
  'form',
  'FRM-TRAINING',
  'Forms',
  '# AERIA SOLUTIONS LTD

# TRAINING ATTENDANCE RECORD

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-TRAINING |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | BC OHS Reg 3.22-3.25, SECOR Element E, CAR 901.56 |

---

## PURPOSE

This form documents training sessions delivered to workers, including attendance, content covered, and participant acknowledgement. Training records are required to demonstrate compliance with regulatory requirements and to verify worker competency.

---

## SECTION 1: TRAINING SESSION INFORMATION

| Field | Entry |
|:------|:------|
| **Training Record #** | TR- |
| **Date** | |
| **Start Time** | |
| **End Time** | |
| **Duration** | hours |
| **Location** | ☐ Office ☐ Field ☐ Virtual ☐ Client Site ☐ External |
| **Training Provider** | ☐ Internal ☐ External: |

---

## SECTION 2: TRAINING DETAILS

### 2.1 Training Category

| Category | Select |
|:---------|:-------|
| **Regulatory/Certification** | |
| Transport Canada RPAS certification | ☐ |
| First Aid / CPR | ☐ |
| WHMIS | ☐ |
| TDG (Transportation of Dangerous Goods) | ☐ |
| H2S Alive | ☐ |
| **Company Training** | |
| New worker orientation | ☐ |
| RPAS type training | ☐ |
| Equipment-specific training | ☐ |
| Procedure/SOP training | ☐ |
| Software/application training | ☐ |
| **Safety Training** | |
| Hazard awareness | ☐ |
| Emergency response | ☐ |
| Working alone procedures | ☐ |
| PPE use and care | ☐ |
| Incident reporting | ☐ |
| **Refresher Training** | ☐ |
| **Other** | ☐ Specify: |

### 2.2 Training Title and Description

| Field | Entry |
|:------|:------|
| **Training Title** | |
| **Course/Module Number (if applicable)** | |
| **Description** | |

---

## SECTION 3: INSTRUCTOR/TRAINER INFORMATION

| Field | Entry |
|:------|:------|
| **Instructor Name** | |
| **Instructor Qualifications** | |
| **Organization (if external)** | |
| **Contact Information** | |

---

## SECTION 4: TRAINING CONTENT

### 4.1 Topics Covered

| # | Topic | Duration | Covered |
|:--|:------|:---------|:--------|
| 1 | | min | ☐ |
| 2 | | min | ☐ |
| 3 | | min | ☐ |
| 4 | | min | ☐ |
| 5 | | min | ☐ |
| 6 | | min | ☐ |
| 7 | | min | ☐ |
| 8 | | min | ☐ |

### 4.2 Training Materials Used

| Material | Used |
|:---------|:-----|
| Presentation/slides | ☐ |
| Video | ☐ |
| Written materials/handouts | ☐ |
| Practical demonstration | ☐ |
| Hands-on exercise | ☐ |
| Online module | ☐ |
| Equipment/tools | ☐ |
| Other: | ☐ |

### 4.3 Practical Component

| Field | Entry |
|:------|:------|
| **Practical component included** | ☐ Yes ☐ No |
| **Description of practical exercises** | |
| **Equipment used** | |

---

## SECTION 5: ASSESSMENT

### 5.1 Assessment Method

| Method | Used | Pass Mark |
|:-------|:-----|:----------|
| Written test | ☐ | % |
| Oral examination | ☐ | |
| Practical demonstration | ☐ | |
| Observation | ☐ | |
| No formal assessment | ☐ | N/A |

### 5.2 Assessment Results (if applicable)

| Participant Name | Assessment Score | Pass/Fail |
|:-----------------|:-----------------|:----------|
| | | ☐ Pass ☐ Fail |
| | | ☐ Pass ☐ Fail |
| | | ☐ Pass ☐ Fail |
| | | ☐ Pass ☐ Fail |
| | | ☐ Pass ☐ Fail |
| | | ☐ Pass ☐ Fail |

---

## SECTION 6: ATTENDANCE RECORD

**All attendees must sign acknowledging:**
- Attendance at training session
- Understanding of content presented
- Commitment to apply training in work activities

| # | Name (Print) | Position | Signature | Date |
|:--|:-------------|:---------|:----------|:-----|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |
| 10 | | | | |
| 11 | | | | |
| 12 | | | | |

**Total Attendees:** ______

---

## SECTION 7: TRAINING EFFECTIVENESS

### 7.1 Participant Feedback (Optional)

| Question | Poor | Fair | Good | Excellent |
|:---------|:-----|:-----|:-----|:----------|
| Content relevance | ☐ | ☐ | ☐ | ☐ |
| Instructor effectiveness | ☐ | ☐ | ☐ | ☐ |
| Training materials | ☐ | ☐ | ☐ | ☐ |
| Overall satisfaction | ☐ | ☐ | ☐ | ☐ |

### 7.2 Comments/Suggestions

| Comments |
|:---------|
| |
| |

---

## SECTION 8: FOLLOW-UP REQUIREMENTS

| Requirement | Applicable | Details |
|:------------|:-----------|:--------|
| Refresher training required | ☐ Yes ☐ No | Frequency: |
| Certificate issued | ☐ Yes ☐ No | Certificate #: |
| Expiry date | ☐ Yes ☐ No | Date: |
| Additional training needed | ☐ Yes ☐ No | Details: |
| Competency check required | ☐ Yes ☐ No | Date: |

---

## SECTION 9: CERTIFICATION TRACKING (If Applicable)

| Participant | Certificate # | Issue Date | Expiry Date |
|:------------|:--------------|:-----------|:------------|
| | | | |
| | | | |
| | | | |
| | | | |

---

## SECTION 10: INSTRUCTOR CERTIFICATION

**I certify that:**
- ☐ Training was delivered as documented above
- ☐ All topics were covered adequately
- ☐ Participants had opportunity to ask questions
- ☐ Assessment was conducted fairly (if applicable)
- ☐ Attendance record is accurate

| Field | Entry |
|:------|:------|
| **Instructor Name** | |
| **Signature** | |
| **Date** | |

---

## SECTION 11: MANAGEMENT APPROVAL

| Field | Entry |
|:------|:------|
| **Reviewed By** | |
| **Position** | |
| **Date** | |
| **Signature** | |
| **Comments** | |

---

## ATTACHMENTS

| Attachment | Included |
|:-----------|:---------|
| Training materials/handouts | ☐ |
| Presentation slides | ☐ |
| Assessment papers | ☐ |
| Certificates issued | ☐ |
| Photos | ☐ |
| Other: | ☐ |

---

## DISTRIBUTION

| Copy To | Method |
|:--------|:-------|
| Training file | ☐ |
| Individual personnel files | ☐ |
| Instructor | ☐ |

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| BC OHS Regulation | Duration of employment + 3 years |
| SECOR Element E | 3 years |
| Transport Canada (pilot training) | As per CAR 901.56 |
| Best Practice | Duration of employment + 5 years |

---

**Document Control:** FRM-TRAINING v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Training Record',
  'form',
  'FRM-TREC',
  'Forms',
  '# AERIA SOLUTIONS LTD

# TRAINING RECORD

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-TREC |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Trainee Information

| Field | Entry |
|:------|:------|
| **Name** | |
| **Position** | |
| **Employee ID** | |
| **Start Date** | |

---

## Training Session Details

| Field | Entry |
|:------|:------|
| **Training Topic** | |
| **Training Date** | |
| **Duration** | |
| **Location** | |
| **Trainer** | |

---

## Training Type

| Type | Select |
|:-----|:-------|
| Initial | ☐ |
| Recurrent | ☐ |
| Remedial | ☐ |
| Upgrade | ☐ |
| Specialized | ☐ |

---

## Delivery Method

| Method | Select |
|:-------|:-------|
| Classroom | ☐ |
| Practical/Hands-on | ☐ |
| Online/eLearning | ☐ |
| On-the-job | ☐ |
| Self-study | ☐ |
| Combination | ☐ |

---

## Learning Objectives

| # | Objective | Achieved? |
|:--|:----------|:----------|
| 1 | | ☐ Yes ☐ No |
| 2 | | ☐ Yes ☐ No |
| 3 | | ☐ Yes ☐ No |
| 4 | | ☐ Yes ☐ No |
| 5 | | ☐ Yes ☐ No |

---

## Topics Covered

| Topic | Covered |
|:------|:--------|
| | ☐ |
| | ☐ |
| | ☐ |
| | ☐ |
| | ☐ |

---

## Assessment

### Assessment Method

| Method | Used |
|:-------|:-----|
| Written test | ☐ Score: ___% |
| Practical demonstration | ☐ |
| Verbal questioning | ☐ |
| Observation | ☐ |
| None required | ☐ |

### Assessment Result

| Result | Select |
|:-------|:-------|
| **Competent** | ☐ |
| **Not yet competent** | ☐ |
| **Deferred** | ☐ |

If not competent, follow-up required:

| Follow-up Required |
|:-------------------|
| |

---

## Materials Provided

| Material | Provided |
|:---------|:---------|
| Training manual | ☐ |
| Reference documents | ☐ |
| Certificate | ☐ |
| Other: | ☐ |

---

## Regulatory/Certification Training

| Item | Entry |
|:-----|:------|
| Certificate/license related | ☐ No ☐ Yes: ___ |
| External provider | ☐ No ☐ Yes: ___ |
| Certification # | |
| Expiry date | |

---

## Training Linked To

| Requirement | Reference |
|:------------|:----------|
| Regulatory requirement | |
| Company procedure | |
| Job qualification | |
| Competency standard | |

---

## Currency/Recurrent Training

| Item | Entry |
|:-----|:------|
| Recurrent training required | ☐ No ☐ Yes |
| Recurrent interval | |
| Next recurrent due | |

---

## Notes

| Notes |
|:------|
| |
| |

---

## Signatures

### Trainee Acknowledgment

I confirm that I have received and understood this training.

| Field | Entry |
|:------|:------|
| Trainee Name | |
| Signature | |
| Date | |

### Trainer Certification

I certify that this training was delivered as documented.

| Field | Entry |
|:------|:------|
| Trainer Name | |
| Signature | |
| Date | |

### Competency Assessor (if different)

| Field | Entry |
|:------|:------|
| Assessor Name | |
| Signature | |
| Date | |

---

## File In

☐ Employee training file
☐ Training records database
☐ Certificate file

---

**Document Control:** FRM-TREC v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Witness Statement',
  'form',
  'FRM-WITNESS',
  'Forms',
  '# AERIA SOLUTIONS LTD

# WITNESS STATEMENT FORM

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-WITNESS |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | WCA Div 10, SECOR Element G, BC OHS Reg |

---

## PURPOSE

This form is used to document witness accounts of incidents, near misses, or safety-related events. Witness statements are essential for thorough incident investigations and help establish facts, identify root causes, and prevent recurrence.

**All witness statements are confidential and used solely for investigation and safety improvement purposes.**

---

## SECTION 1: INCIDENT REFERENCE

| Field | Entry |
|:------|:------|
| **Related Incident # (if known)** | INC- / INV- |
| **Date of Incident** | |
| **Time of Incident** | |
| **Location of Incident** | |
| **Brief Description of Incident** | |

---

## SECTION 2: WITNESS INFORMATION

| Field | Entry |
|:------|:------|
| **Witness Name** | |
| **Position/Title** | |
| **Department/Crew** | |
| **Employer** | ☐ Aeria Solutions ☐ Other: |
| **Contact Phone** | |
| **Contact Email** | |
| **Date of Statement** | |
| **Time of Statement** | |

---

## SECTION 3: WITNESS LOCATION AND INVOLVEMENT

### 3.1 Position at Time of Incident

| Field | Entry |
|:------|:------|
| Where were you when the incident occurred? | |
| Approximate distance from incident | |
| What were you doing at the time? | |

### 3.2 Level of Involvement

| Involvement | Select |
|:------------|:-------|
| Direct witness - saw the incident occur | ☐ |
| Heard the incident but did not see it | ☐ |
| Arrived immediately after the incident | ☐ |
| Was told about the incident by others | ☐ |
| Involved in the response/assistance | ☐ |
| Other: | ☐ |

### 3.3 Relationship to Persons Involved

| Field | Entry |
|:------|:------|
| Do you know the person(s) involved? | ☐ Yes ☐ No |
| If yes, relationship (coworker, supervisor, etc.) | |

---

## SECTION 4: WITNESS STATEMENT

### 4.1 Before the Incident

**Describe what you observed BEFORE the incident occurred:**
- What activities were taking place?
- Did you notice anything unusual?
- What were the conditions (weather, lighting, noise, etc.)?

| Statement |
|:----------|
| |
| |
| |
| |
| |

### 4.2 During the Incident

**Describe what you observed DURING the incident:**
- What exactly did you see or hear?
- What happened first, then what happened next?
- Who was involved and what were they doing?

| Statement |
|:----------|
| |
| |
| |
| |
| |
| |
| |
| |

### 4.3 After the Incident

**Describe what you observed AFTER the incident:**
- What actions were taken?
- Who responded and how?
- What was the condition of person(s)/equipment involved?

| Statement |
|:----------|
| |
| |
| |
| |
| |

---

## SECTION 5: SPECIFIC OBSERVATIONS

### 5.1 Equipment Involved

| Question | Response |
|:---------|:---------|
| Was equipment involved? | ☐ Yes ☐ No ☐ Unknown |
| If yes, what equipment? | |
| Condition of equipment before incident | |
| Any equipment malfunction observed? | ☐ Yes ☐ No ☐ Unknown |
| If yes, describe | |

### 5.2 Environmental Conditions

| Condition | Observation |
|:----------|:------------|
| Weather | |
| Lighting | ☐ Good ☐ Poor ☐ N/A |
| Noise level | ☐ Normal ☐ Loud ☐ N/A |
| Ground/surface conditions | |
| Visibility | ☐ Good ☐ Restricted |
| Other conditions | |

### 5.3 Work Activities

| Question | Response |
|:---------|:---------|
| What work was being performed? | |
| Were procedures being followed? | ☐ Yes ☐ No ☐ Unknown |
| Was PPE being worn? | ☐ Yes ☐ No ☐ Unknown |
| If yes, what PPE? | |
| Any rushing or time pressure observed? | ☐ Yes ☐ No ☐ Unknown |
| Any communication issues? | ☐ Yes ☐ No ☐ Unknown |

### 5.4 Contributing Factors

**In your opinion, what may have contributed to this incident?**

| Contributing Factors |
|:---------------------|
| |
| |
| |

---

## SECTION 6: ADDITIONAL INFORMATION

### 6.1 Other Witnesses

**Do you know of others who witnessed the incident?**

| Name | Contact | What They May Have Seen |
|:-----|:--------|:------------------------|
| | | |
| | | |
| | | |

### 6.2 Photos, Video, or Documentation

| Question | Response |
|:---------|:---------|
| Did you take any photos or video? | ☐ Yes ☐ No |
| If yes, available for investigation? | ☐ Yes ☐ No |
| Are you aware of any other documentation? | ☐ Yes ☐ No |
| If yes, describe | |

### 6.3 Prior Concerns

| Question | Response |
|:---------|:---------|
| Had you noticed any safety concerns prior to this incident? | ☐ Yes ☐ No |
| If yes, describe | |
| Were these concerns reported? | ☐ Yes ☐ No |
| If yes, to whom and when? | |

---

## SECTION 7: SKETCH/DIAGRAM (Optional)

**Draw a simple sketch showing positions of people, equipment, and your location at the time of the incident:**

| Sketch Area |
|:------------|
| |
| |
| |
| |
| |
| |
| |
| |
| |
| |

**Legend/Notes:**

| Notes |
|:------|
| |
| |

---

## SECTION 8: CLARIFYING QUESTIONS

**The investigator may ask additional questions. Record responses here:**

| Question | Response |
|:---------|:---------|
| | |
| | |
| | |
| | |
| | |

---

## SECTION 9: STATEMENT REVIEW

### 9.1 Accuracy Confirmation

**Please review your statement and confirm:**

- ☐ I have read (or had read to me) this statement
- ☐ The information I have provided is true and accurate to the best of my knowledge
- ☐ I have had the opportunity to make corrections or additions
- ☐ I understand this statement may be used in the incident investigation

### 9.2 Corrections or Additions

| Corrections/Additions |
|:----------------------|
| |
| |

---

## SECTION 10: WITNESS DECLARATION

**I declare that this statement is true and accurate to the best of my knowledge and recollection. I understand that this statement will be used for incident investigation purposes only.**

| Field | Entry |
|:------|:------|
| **Witness Name (Print)** | |
| **Witness Signature** | |
| **Date** | |
| **Time** | |

---

## SECTION 11: STATEMENT TAKEN BY

| Field | Entry |
|:------|:------|
| **Investigator/Interviewer Name** | |
| **Position** | |
| **Date** | |
| **Time** | |
| **Location of Interview** | |
| **Statement Method** | ☐ Written by Witness ☐ Verbal - Recorded by Investigator |
| **Signature** | |

---

## SECTION 12: CONFIDENTIALITY NOTE

This witness statement is **CONFIDENTIAL** and will be used solely for the purpose of incident investigation and safety improvement.

- Witness information will be protected to the extent possible
- The statement may be shared with:
  - Internal investigators
  - WorkSafeBC (if required by regulation)
  - Transport Canada/TSB (for aviation occurrences)
  - Legal counsel (if required)
- The witness will not be subject to retaliation for providing this statement

---

## SECTION 13: FOLLOW-UP

| Field | Entry |
|:------|:------|
| Follow-up required with witness | ☐ Yes ☐ No |
| If yes, reason | |
| Follow-up completed | ☐ Date: |
| Additional statement taken | ☐ Yes ☐ No |

---

## INSTRUCTIONS FOR INVESTIGATORS

1. **Interview as soon as possible** after the incident while details are fresh
2. **Interview witnesses separately** to prevent influence
3. **Use open-ended questions** (what, where, when, who, how)
4. **Do not lead the witness** or suggest answers
5. **Allow the witness to tell their story** before asking specific questions
6. **Clarify any ambiguous statements**
7. **Thank the witness** for their cooperation
8. **Maintain confidentiality**

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| WCA Division 10 | Duration of investigation + 2 years |
| SECOR Element G | 3 years |
| Best Practice | 5 years |

---

**Document Control:** FRM-WITNESS v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Working Alone Check In',
  'form',
  'FRM-WORKALONE',
  'Forms',
  '# AERIA SOLUTIONS LTD

# WORKING ALONE CHECK-IN LOG

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-WORKALONE |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Regulatory Basis** | BC OHS Reg 4.20-4.23, SECOR Element C |

---

## REGULATORY REQUIREMENTS

**BC OHS Regulation 4.20.1 - Working Alone or in Isolation:**
Employer must identify all assignments where workers are working alone or in isolation, and determine if risk of injury exists.

**BC OHS Regulation 4.21 - Procedure Required:**
If risk exists, employer must develop and implement a written procedure to eliminate or minimize the risk, including effective communication system to check well-being at intervals appropriate to the risk.

**BC OHS Regulation 4.22-4.23 - Training and Records:**
Workers must be trained on procedures, and records must be kept for at least one year.

---

## DEFINITIONS

- **Working Alone:** Working at a location where assistance is not readily available if needed
- **Working in Isolation:** Working in circumstances where assistance is not readily available due to location, time, or nature of work

---

## SECTION 1: ASSIGNMENT INFORMATION

| Field | Entry |
|:------|:------|
| **Date** | |
| **Worker Name** | |
| **Position** | |
| **Cell Phone** | |
| **Alternate Contact Method** | ☐ Radio Channel: ☐ Satellite: ☐ App: |
| **Project/Client** | |
| **Site Location** | |
| **Site Coordinates** | Lat: Long: |
| **Nearest Town/Landmark** | |
| **Vehicle Plate # (if applicable)** | |

---

## SECTION 2: DESIGNATED CONTACT PERSON

| Field | Entry |
|:------|:------|
| **Contact Person Name** | |
| **Contact Phone (Primary)** | |
| **Contact Phone (Backup)** | |
| **Contact Email** | |
| **Contact Location** | ☐ Office ☐ Remote ☐ Other: |

**Backup Contact (if primary unavailable):**

| Field | Entry |
|:------|:------|
| **Backup Contact Name** | |
| **Backup Contact Phone** | |

---

## SECTION 3: WORK DETAILS

### 3.1 Planned Activities

| Time | Planned Activity | Location |
|:-----|:-----------------|:---------|
| | | |
| | | |
| | | |
| | | |

### 3.2 Duration

| Field | Entry |
|:------|:------|
| **Departure Time** | |
| **Expected Arrival at Site** | |
| **Expected Work Duration** | hours |
| **Expected Return Time** | |
| **Next Scheduled Check-In** | |

---

## SECTION 4: HAZARD ASSESSMENT

### 4.1 Working Alone Hazards Identified

| Hazard | Applicable | Controls |
|:-------|:-----------|:---------|
| Remote location | ☐ | |
| Limited cell service | ☐ | |
| Wildlife (bears, etc.) | ☐ | |
| Terrain hazards | ☐ | |
| Weather exposure | ☐ | |
| Driving hazards | ☐ | |
| Medical emergency | ☐ | |
| RPAS equipment hazards | ☐ | |
| Public interaction | ☐ | |
| Fatigue | ☐ | |
| Other: | ☐ | |

### 4.2 Emergency Preparedness

| Item | Confirmed |
|:-----|:----------|
| Cell phone charged | ☐ |
| Backup communication (satellite/radio) | ☐ Yes ☐ N/A |
| First aid kit | ☐ |
| Emergency supplies (water, food, blanket) | ☐ |
| Vehicle emergency kit | ☐ |
| Bear spray (if applicable) | ☐ |
| Personal locator beacon (if applicable) | ☐ |
| Emergency contact numbers known | ☐ |
| Nearest hospital/medical known | |

---

## SECTION 5: CHECK-IN SCHEDULE

**Based on risk assessment, check-in frequency is:**

| Risk Level | Check-In Interval |
|:-----------|:------------------|
| Low Risk | ☐ Every 2 hours |
| Moderate Risk | ☐ Every 1 hour |
| High Risk | ☐ Every 30 minutes |
| Custom | ☐ Every ___ minutes |

**Check-in Method:** ☐ Phone Call ☐ Text ☐ Radio ☐ App Check-In ☐ Other: _______

---

## SECTION 6: PRE-DEPARTURE CONFIRMATION

**Worker confirms:**

- ☐ I understand the check-in procedure and schedule
- ☐ I have reliable communication method(s)
- ☐ I know who to contact and how
- ☐ I have emergency supplies
- ☐ I will contact immediately if plans change
- ☐ I understand to return or seek shelter if conditions become unsafe
- ☐ FLHA has been completed for today''s work

| Field | Entry |
|:------|:------|
| **Worker Signature** | |
| **Date/Time** | |

**Contact Person confirms:**

- ☐ I understand the check-in schedule
- ☐ I am available for the duration of this assignment
- ☐ I understand the escalation procedure if check-in is missed

| Field | Entry |
|:------|:------|
| **Contact Person Signature** | |
| **Date/Time** | |

---

## SECTION 7: CHECK-IN LOG

### Instructions:
- Worker initiates check-in at scheduled times
- Contact person records status
- If check-in is missed, follow escalation procedure immediately

| Check # | Scheduled Time | Actual Time | Method | Worker Status | Contact Initials |
|:--------|:---------------|:------------|:-------|:--------------|:-----------------|
| 1 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 2 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 3 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 4 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 5 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 6 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 7 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 8 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 9 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 10 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |

**Additional Rows if Needed:**

| Check # | Scheduled Time | Actual Time | Method | Worker Status | Contact Initials |
|:--------|:---------------|:------------|:-------|:--------------|:-----------------|
| 11 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |
| 12 | | | ☐ Ph ☐ Txt ☐ Rad | ☐ OK ☐ Issue ☐ Missed | |

---

## SECTION 8: ISSUES REPORTED DURING CHECK-IN

| Check # | Issue Reported | Action Taken |
|:--------|:---------------|:-------------|
| | | |
| | | |
| | | |

---

## SECTION 9: MISSED CHECK-IN ESCALATION

**IF CHECK-IN IS MISSED - FOLLOW THIS PROCEDURE:**

### Step 1: Immediate (0-10 minutes overdue)
| Action | Completed | Time | By |
|:-------|:----------|:-----|:---|
| Attempt contact by phone | ☐ | | |
| Attempt contact by text | ☐ | | |
| Attempt contact by alternate method | ☐ | | |

### Step 2: 10-15 Minutes Overdue
| Action | Completed | Time | By |
|:-------|:----------|:-----|:---|
| Continue attempts every 5 minutes | ☐ | | |
| Contact backup contact person | ☐ | | |
| Contact Operations Manager | ☐ | | |

### Step 3: 15+ Minutes Overdue
| Action | Completed | Time | By |
|:-------|:----------|:-----|:---|
| Notify Operations Manager immediately | ☐ | | |
| Prepare to initiate emergency response | ☐ | | |
| If no contact within 30 minutes - call 911 | ☐ | | |

### Emergency Contacts

| Contact | Name | Phone |
|:--------|:-----|:------|
| Operations Manager | | |
| Emergency Services | 911 | |
| RCMP (non-emergency) | | |
| SAR (Search and Rescue) | | |

---

## SECTION 10: END OF ASSIGNMENT

### 10.1 Worker Sign-Off

| Field | Entry |
|:------|:------|
| **Actual Return Time** | |
| **Any Incidents/Issues** | ☐ No ☐ Yes - Details: |
| **Any Near Misses** | ☐ No ☐ Yes - Reported: |
| **Equipment Issues** | ☐ No ☐ Yes - Details: |
| **Worker Signature** | |
| **Date/Time** | |

### 10.2 Contact Person Sign-Off

| Field | Entry |
|:------|:------|
| **Final Check-In Received** | Time: |
| **All Check-Ins Completed** | ☐ Yes ☐ No - Explain: |
| **Any Issues During Assignment** | ☐ No ☐ Yes - Details: |
| **Contact Person Signature** | |
| **Date/Time** | |

---

## SECTION 11: CHANGE OF PLANS DURING ASSIGNMENT

**If plans change during the assignment, document here:**

| Time | Change | Notified Contact | New Expected Return |
|:-----|:-------|:-----------------|:--------------------|
| | | ☐ Yes | |
| | | ☐ Yes | |
| | | ☐ Yes | |

---

## SECTION 12: SUPERVISOR REVIEW

| Field | Entry |
|:------|:------|
| **Reviewed By** | |
| **Date** | |
| **Concerns Identified** | ☐ No ☐ Yes - Details: |
| **Follow-Up Required** | ☐ No ☐ Yes - Action: |
| **Signature** | |

---

## QUICK REFERENCE CARD (Tear-Off for Worker)

---

### WORKING ALONE CHECK-IN REMINDER

**Date:** _____________ **Worker:** _____________

**Contact Person:** _____________ **Phone:** _____________

**Backup Contact:** _____________ **Phone:** _____________

**Check-In Schedule:**
- ☐ Every 30 min ☐ Every 1 hr ☐ Every 2 hrs ☐ Other: _____

**Check-In Times:**
1. _______ 2. _______ 3. _______ 4. _______
5. _______ 6. _______ 7. _______ 8. _______

**Expected Return Time:** _____________

**If I cannot make contact:**
1. Try all communication methods
2. Move to higher ground/better signal
3. If emergency - activate PLB or call 911

**Emergency Numbers:**
- 911
- Operations Manager: _____________
- RCMP: _____________

---

## DOCUMENT RETENTION

| Requirement | Retention Period |
|:------------|:-----------------|
| BC OHS Regulation 4.23 | 1 year minimum |
| SECOR Element C | 3 years |
| Best Practice | 3 years |

---

## NOTES

| Notes |
|:------|
| |
| |
| |

---

**Document Control:** FRM-WORKALONE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY['Forms']::TEXT[],
  CURRENT_DATE
);

