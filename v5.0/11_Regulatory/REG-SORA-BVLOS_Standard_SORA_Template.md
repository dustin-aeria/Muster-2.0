# AERIA SOLUTIONS LTD

# STANDARD BVLOS SORA ASSESSMENT TEMPLATE

---

| Field | Value |
|:------|:------|
| **Document Number** | REG-SORA-BVLOS |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | June 15, 2020 | Initial release based on SORA 2.0 | Dustin Wales |
| v2.0 | February 14, 2022 | Updated to SORA 2.5 methodology | Dustin Wales |
| v3.0 | February 13, 2023 | Enhanced mitigation documentation | Dustin Wales |
| v4.0 | February 12, 2024 | Improved OSO mapping | Dustin Wales |
| v4.1 | February 10, 2025 | Added L1C/RPOC integration | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild - web platform integration | Dustin Wales |

---

## Document Purpose

This template provides a standardized format for conducting Specific Operations Risk Assessment (SORA) evaluations for BVLOS operations. The SORA methodology (version 2.5) is the internationally recognized framework for assessing UAS operational risk and is used by Transport Canada for BVLOS authorization.

**This template is designed to:**
- Guide users through the SORA 2.5 process systematically
- Ensure all required elements are documented
- Support SFOC applications and L1C declarations
- Provide a consistent risk assessment format

---

## Instructions for Use

1. Complete all fillable sections marked with `[ENTER: ...]`
2. Delete instructional text in italics before submission
3. Attach supporting documentation as referenced
4. Have assessment reviewed by Operations Manager
5. Submit with SFOC application or retain for L1C operations

---

# SORA ASSESSMENT

## 1. Administrative Information

### 1.1 Assessment Details

| Field | Entry |
|:------|:------|
| **SORA Reference Number** | [ENTER: SORA-YYYY-XXX] |
| **Date of Assessment** | [ENTER: Date] |
| **Assessor Name** | [ENTER: Name and qualifications] |
| **Reviewer Name** | [ENTER: Name and qualifications] |
| **Review Date** | [ENTER: Date] |
| **Status** | [ENTER: Draft / Under Review / Approved] |

### 1.2 Operation Identification

| Field | Entry |
|:------|:------|
| **Operation Name** | [ENTER: Descriptive name] |
| **Client (if applicable)** | [ENTER: Client name or N/A] |
| **Project Reference** | [ENTER: Project number or reference] |
| **Proposed Start Date** | [ENTER: Date] |
| **Proposed End Date** | [ENTER: Date or "Ongoing"] |
| **Authorization Pathway** | [ENTER: SFOC / L1C Declaration / Other] |

---

## 2. Concept of Operations Summary

### 2.1 Operation Description

*Provide a brief summary of the operation including purpose, type of mission, and key characteristics.*

[ENTER: Narrative description of the operation, 2-3 paragraphs covering:
- Purpose of the operation (survey, inspection, delivery, etc.)
- General method of operation
- Key operational characteristics
- Justification for BVLOS]

### 2.2 UAS Description

| Parameter | Specification |
|:----------|:--------------|
| **UAS Manufacturer/Model** | [ENTER: Manufacturer and model] |
| **Registration Number** | [ENTER: C-XXX or registration] |
| **Maximum Takeoff Mass (MTOM)** | [ENTER: kg] |
| **Maximum Operating Speed** | [ENTER: m/s or km/h] |
| **Maximum Flight Time** | [ENTER: minutes] |
| **Propulsion Type** | [ENTER: Multi-rotor / Fixed-wing / Hybrid] |
| **Characteristic Dimension** | [ENTER: Maximum dimension in m] |
| **Kinetic Energy at Vmax** | [ENTER: Joules at maximum speed] |

### 2.3 Operating Area

| Parameter | Specification |
|:----------|:--------------|
| **Location(s)** | [ENTER: Geographic description] |
| **GPS Coordinates** | [ENTER: Center point and radius or polygon vertices] |
| **Operational Volume** | [ENTER: Horizontal and vertical dimensions] |
| **Maximum Altitude AGL** | [ENTER: feet/meters AGL] |
| **Maximum Distance from PIC** | [ENTER: km] |
| **Airspace Class** | [ENTER: Class G / E / D / C] |

### 2.4 Personnel

| Role | Qualification | Number |
|:-----|:--------------|:-------|
| **Pilot-in-Command** | [ENTER: Certificate type, BVLOS auth] | [ENTER: #] |
| **Visual Observer** | [ENTER: Training status] | [ENTER: #] |
| **Payload Operator** | [ENTER: Qualifications] | [ENTER: #] |
| **Other Crew** | [ENTER: Roles and qualifications] | [ENTER: #] |

---

## 3. Ground Risk Assessment

### 3.1 Intrinsic Ground Risk Class (iGRC)

*Determine the intrinsic GRC based on UAS characteristics and operational environment.*

#### 3.1.1 UAS Characteristic Dimension

| Category | Dimension | This Operation |
|:---------|:----------|:---------------|
| **1m or less** | Small UAS | [ ] |
| **1m to 3m** | Medium UAS | [ ] |
| **3m to 8m** | Large UAS | [ ] |
| **Greater than 8m** | Very Large UAS | [ ] |

**Selected:** [ENTER: Category]

#### 3.1.2 Population Density Category

| Category | Description | Criteria | This Operation |
|:---------|:------------|:---------|:---------------|
| **Controlled** | Controlled ground area | No uninvolved persons | [ ] |
| **Sparsely Populated** | Few people | <10 people/km² | [ ] |
| **Populated** | Residential/commercial | 10-1500 people/km² | [ ] |
| **Gathering of People** | Crowds, assemblies | >1500 people/km² | [ ] |

**Selected:** [ENTER: Category]

**Population Density Justification:**
[ENTER: Describe how population density was determined, including:
- Data sources used
- Methodology for assessment
- Any seasonal or temporal variations
- Supporting documentation references]

#### 3.1.3 Intrinsic GRC Determination

*Use the SORA 2.5 GRC matrix to determine iGRC:*

| Max UAS Dimension | Controlled | Sparsely Populated | Populated | Gathering |
|:------------------|:-----------|:-------------------|:----------|:----------|
| **1m or less** | 1 | 2 | 4 | 6 |
| **1m to 3m** | 2 | 3 | 5 | 7 |
| **3m to 8m** | 3 | 4 | 6 | 8 |
| **>8m** | 4 | 5 | 7 | 9 |

**Intrinsic GRC (iGRC):** [ENTER: Value from matrix]

### 3.2 Ground Risk Mitigations

*Apply mitigations to reduce GRC. Each mitigation must be substantiated.*

#### M1 - Strategic Mitigation for Ground Risk

| Criterion | Integrity Level | Adjustment | Applied |
|:----------|:----------------|:-----------|:--------|
| **M1-A: Operational restriction (flight over no people)** | Low/Medium/High | -1 to -4 | [ ] [ENTER: Level and adjustment] |
| **M1-B: Operational restriction (sheltered people)** | Low/Medium/High | -1 to -2 | [ ] [ENTER: Level and adjustment] |

**M1 Substantiation:**
[ENTER: Describe how M1 mitigation is achieved:
- How is the area controlled/restricted?
- What measures ensure no uninvolved persons?
- How is compliance verified?
- Supporting procedures referenced]

**M1 Adjustment Applied:** [ENTER: Value]

#### M2 - Effects of Ground Impact Reduced

| Criterion | Integrity Level | Adjustment | Applied |
|:----------|:----------------|:-----------|:--------|
| **M2: Parachute, frangibility, etc.** | Low/Medium/High | 0 to -2 | [ ] [ENTER: Level and adjustment] |

**M2 Substantiation:**
[ENTER: Describe any M2 mitigations:
- Parachute system specifications
- Frangibility design
- Testing/certification evidence
- Or state "Not Applied"]

**M2 Adjustment Applied:** [ENTER: Value or 0]

#### M3 - Emergency Response Plan (ERP)

| Criterion | Integrity Level | Adjustment | Applied |
|:----------|:----------------|:-----------|:--------|
| **M3: Effective ERP in place** | Low/Medium/High | -1 | [ ] [ENTER: Level] |

**M3 Substantiation:**
[ENTER: Describe ERP:
- ERP document reference
- Key elements (notification, response, coordination)
- Training on ERP
- Resources available]

**M3 Adjustment Applied:** [ENTER: Value or 0]

### 3.3 Final Ground Risk Class (GRC)

| Calculation | Value |
|:------------|:------|
| **Intrinsic GRC (iGRC)** | [ENTER: From 3.1.3] |
| **M1 Adjustment** | [ENTER: Value] |
| **M2 Adjustment** | [ENTER: Value] |
| **M3 Adjustment** | [ENTER: Value] |
| **Final GRC** | [ENTER: iGRC + adjustments, minimum 1] |

**Final GRC:** [ENTER: Value]

---

## 4. Air Risk Assessment

### 4.1 Initial Air Risk Class (ARC)

*Determine ARC based on airspace and operational environment.*

#### 4.1.1 Airspace Encounter Category

| Airspace | Typical ARC | This Operation |
|:---------|:------------|:---------------|
| **Uncontrolled, below 400ft AGL, rural** | ARC-a | [ ] |
| **Uncontrolled, below 400ft AGL, suburban/urban** | ARC-b | [ ] |
| **Controlled airspace or above 400ft** | ARC-c | [ ] |
| **Airport environment** | ARC-d | [ ] |

**Initial ARC:** [ENTER: ARC-a / ARC-b / ARC-c / ARC-d]

**ARC Justification:**
[ENTER: Describe airspace assessment:
- Airspace classification
- Altitude of operations
- Proximity to aerodromes
- Known traffic patterns
- Traffic density assessment]

### 4.2 Strategic Mitigations for Air Risk (TMPR)

*Tactical Mitigation Performance Requirements can reduce ARC.*

#### 4.2.1 Tactical Mitigations Applied

| Mitigation | Description | Integrity | Effect | Applied |
|:-----------|:------------|:----------|:-------|:--------|
| **TMPR - See and Avoid** | Visual observers, VO chain | Low/Medium/High | ARC reduction | [ ] |
| **TMPR - Detect and Avoid** | Electronic DAA system | Low/Medium/High | ARC reduction | [ ] |
| **TMPR - Airspace Restriction** | Operating in restricted airspace | N/A | ARC-a | [ ] |

**Tactical Mitigation Substantiation:**
[ENTER: Describe tactical mitigations:
- Method of detecting other aircraft
- VO positioning and capabilities
- DAA system specifications (if used)
- Communication protocols
- Procedural mitigations
- How collision avoidance is achieved]

### 4.3 Residual Air Risk Class

**Residual ARC:** [ENTER: Final ARC after mitigations]

**Residual ARC Justification:**
[ENTER: Summarize how residual ARC was determined]

---

## 5. SAIL Determination

### 5.1 SAIL Matrix

*Determine SAIL from intersection of final GRC and residual ARC:*

| Final GRC | ARC-a | ARC-b | ARC-c | ARC-d |
|:----------|:------|:------|:------|:------|
| **1-2** | I | II | IV | VI |
| **3-4** | II | II | IV | VI |
| **5-6** | III | III | IV | VI |
| **7+** | IV | IV | V | VI |

### 5.2 SAIL Result

| Parameter | Value |
|:----------|:------|
| **Final GRC** | [ENTER: From Section 3.3] |
| **Residual ARC** | [ENTER: From Section 4.3] |
| **SAIL** | [ENTER: I / II / III / IV / V / VI] |

---

## 6. Operational Safety Objectives (OSOs)

### 6.1 OSO Applicability

*Based on SAIL, identify required OSOs and their robustness levels.*

**SAIL Determined:** [ENTER: SAIL Level]

### 6.2 OSO Requirements and Compliance

#### Technical OSOs

| OSO | Description | Required Level | Compliance Method |
|:----|:------------|:---------------|:------------------|
| **OSO#01** | UAS design and manufacturing integrity | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#02** | UAS maintenance | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#03** | UAS developed to design standards | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#04** | UAS developed by competent organization | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#05** | UAS maintained by competent personnel | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |

#### Operational OSOs

| OSO | Description | Required Level | Compliance Method |
|:----|:------------|:---------------|:------------------|
| **OSO#06** | C3 link performance | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#07** | C3 link loss procedure | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#08** | UAS tracking | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#09** | UAS containment | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#10** | Define safe recovery area | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#11** | Remote pilot competency | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#12** | Multi-crew coordination | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#13** | Operating procedures | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#14** | Handling of abnormal situations | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |

#### Human Factors OSOs

| OSO | Description | Required Level | Compliance Method |
|:----|:------------|:---------------|:------------------|
| **OSO#17** | Human factors training | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#18** | Crew resource management | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#19** | Remote pilot fitness for duty | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |

#### Operational Volume OSOs

| OSO | Description | Required Level | Compliance Method |
|:----|:------------|:---------------|:------------------|
| **OSO#20** | Definition of operational volume | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#21** | Flight termination function | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#22** | High reliability of external systems | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#23** | Environmental conditions | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |
| **OSO#24** | Protection against tampering | [ENTER: O/L/M/H] | [ENTER: How compliance achieved] |

*Note: O=Optional, L=Low, M=Medium, H=High robustness*

### 6.3 OSO Compliance Summary

[ENTER: Narrative summary of how the operation achieves compliance with all required OSOs. Reference supporting documentation, procedures, and evidence.]

---

## 7. Adjacent Areas and Airspace

### 7.1 Adjacent Area Considerations

| Adjacent Area | Risk | Mitigation |
|:--------------|:-----|:-----------|
| [ENTER: Description] | [ENTER: Risk if UAS enters] | [ENTER: How prevented] |
| [ENTER: Description] | [ENTER: Risk if UAS enters] | [ENTER: How prevented] |
| [ENTER: Description] | [ENTER: Risk if UAS enters] | [ENTER: How prevented] |

### 7.2 Containment Strategy

[ENTER: Describe how the UAS is contained within the operational volume:
- Geofencing settings
- Automatic boundary actions
- Monitoring procedures
- Recovery procedures if approaching boundary]

---

## 8. Risk Summary and Conclusion

### 8.1 Risk Assessment Summary

| Parameter | Determination |
|:----------|:--------------|
| **Intrinsic Ground Risk Class** | [ENTER: iGRC] |
| **Final Ground Risk Class** | [ENTER: Final GRC] |
| **Initial Air Risk Class** | [ENTER: Initial ARC] |
| **Residual Air Risk Class** | [ENTER: Residual ARC] |
| **SAIL** | [ENTER: SAIL Level] |

### 8.2 Key Mitigations Summary

| Category | Key Mitigations |
|:---------|:----------------|
| **Ground Risk** | [ENTER: Summary of ground mitigations] |
| **Air Risk** | [ENTER: Summary of air mitigations] |
| **Technical** | [ENTER: Summary of technical mitigations] |
| **Operational** | [ENTER: Summary of operational mitigations] |

### 8.3 Conclusion

[ENTER: Concluding statement on the risk assessment:
- Overall risk level determination
- Confirmation that risks are acceptable
- Key conditions for safe operation
- Any limitations or restrictions
- Recommendation for approval/authorization]

---

## 9. Attachments and Supporting Documentation

| Attachment | Description | Document Reference |
|:-----------|:------------|:-------------------|
| **A** | Concept of Operations (CONOPS) | [ENTER: Reference] |
| **B** | Operating Area Maps | [ENTER: Reference] |
| **C** | UAS Technical Specifications | [ENTER: Reference] |
| **D** | Pilot Qualifications | [ENTER: Reference] |
| **E** | Emergency Response Plan | [ENTER: Reference] |
| **F** | Operating Procedures | [ENTER: Reference] |
| **G** | Training Records | [ENTER: Reference] |
| [ENTER: Additional as needed] | | |

---

## 10. Assessment Approval

### 10.1 Assessor Certification

I certify that this SORA assessment has been conducted in accordance with the SORA 2.5 methodology and accurately represents the risks and mitigations for the proposed operation.

| Field | Entry |
|:------|:------|
| **Assessor Name** | [ENTER: Name] |
| **Assessor Signature** | _________________________ |
| **Date** | [ENTER: Date] |

### 10.2 Review and Approval

| Field | Entry |
|:------|:------|
| **Reviewer Name** | [ENTER: Name] |
| **Reviewer Signature** | _________________________ |
| **Date** | [ENTER: Date] |
| **Approval Status** | [ ] Approved [ ] Approved with conditions [ ] Not approved |

**Conditions (if applicable):**
[ENTER: Any conditions of approval]

---

## 11. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-005 | BVLOS Operations Policy |
| OPS-009-PR | BVLOS Operations Procedure |
| REG-CONOPS-BVLOS | Standard BVLOS CONOPS Template |
| HSE-007 | Emergency Response Policy |
| GUIDE-BVLOS | BVLOS Operations Guide |

---

**Document Control:** REG-SORA-BVLOS v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
