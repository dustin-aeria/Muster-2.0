# AERIA SOLUTIONS LTD

# SAFETY ASSURANCE DECLARATIONS

---

| Field | Value |
|:------|:------|
| **Document Number** | GOV-005 |
| **Version** | v5.0 |
| **Effective Date** | March 19, 2026 |
| **Review Date** | March 19, 2027 |
| **Document Owner** | Accountable Executive |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | March 19, 2026 | Initial release - AIM 2026 compliance update | Dustin Wales |

---

## 1. Purpose

This document establishes the requirements and processes for developing, submitting, and maintaining Safety Assurance (SA) Declarations to Transport Canada for complex RPAS operations, including Level 1 Complex (L1C) operations.

---

## 2. Scope

This document applies to:
- Level 1 Complex (L1C) Declaration for BVLOS operations
- Safety Assurance Declarations for operations requiring Standard 922 compliance
- All personnel involved in declaration development and maintenance
- Flight training operations conducted under L1C Declaration

---

## 3. Regulatory Basis

| Regulation | Requirement |
|:-----------|:------------|
| CAR 901.67-901.76 | Level 1 Complex operations requirements |
| CAR 901.194 | Safety assurance declaration requirements |
| Standard 922 | RPAS Safety Assurance |
| Standard 922.67 | L1C declaration requirements |
| AC 903-001 | SORA methodology guidance |

---

## 4. Definitions

| Term | Definition |
|:-----|:-----------|
| **SA Declaration** | Safety Assurance Declaration - A declaration to the Minister demonstrating how the applicant meets applicable requirements and safety objectives |
| **L1C** | Level 1 Complex - Operations category for BVLOS in specific conditions |
| **SORA** | Specific Operations Risk Assessment - Methodology for assessing RPAS operational risk |
| **ConOps** | Concept of Operations - Description of intended operation |
| **GRC** | Ground Risk Class - Classification of ground impact risk |
| **ARC** | Air Risk Class - Classification of air collision risk |
| **SAIL** | Specific Assurance and Integrity Level - Target level of safety assurance |
| **OSO** | Operational Safety Objectives - Safety objectives derived from SORA |

---

## 5. Safety Assurance Declaration Types

### 5.1 Level 1 Complex (L1C) Declaration

**Purpose:** Authorize BVLOS operations over unpopulated areas in uncontrolled airspace

**Scope of L1C:**
- Small RPA (less than 25 kg)
- Operations over unpopulated areas
- Uncontrolled airspace (Class G)
- Visual meteorological conditions (VMC)
- Daytime operations (unless otherwise authorized)

**Aeria L1C Declaration Number:** [Insert Declaration Number]

### 5.2 Other SA Declarations

Additional SA Declarations may be developed for:
- Operations requiring deviation from standard conditions
- Novel operations not covered by existing frameworks
- Operations requiring specific safety case demonstration

---

## 6. L1C Declaration Requirements

### 6.1 Eligibility Requirements

To hold an L1C Declaration, the operator must:

| Requirement | Aeria Compliance |
|:------------|:-----------------|
| Hold valid RPOC | RPOC #930355 |
| Have established SMS | SMS-001 |
| Have established MCM | MCM-001 |
| Have qualified L1C pilots | Per OPS-004, OPS-007-PR |
| Have approved aircraft | Per L1C Declaration aircraft list |

### 6.2 Pilot Requirements for L1C Operations

Pilots conducting L1C operations must:

1. **Hold Pilot Certificate - Advanced Operations** (TC-issued)
2. **Hold Pilot Certificate - Level 1 Complex Operations** (TC-issued)
3. Complete L1C ground training per Standard 922.67
4. Complete L1C practical training
5. Pass L1C competency assessment
6. Hold company BVLOS authorization letter
7. Maintain L1C currency (1 BVLOS flight per 90 days)

**Note:** The TC-issued L1C Certificate is separate from company authorization. Both are required.

### 6.3 Aircraft Requirements

Aircraft authorized for L1C operations must:

| Requirement | Documentation |
|:------------|:--------------|
| Be listed on L1C Declaration | Declaration aircraft list |
| Meet Standard 922.07 requirements | MCM records |
| Have functional C2 link | Pre-flight verification |
| Have lost link procedures | Aircraft configuration |
| Have telemetry capability | System verification |
| Be maintained per MCM | Maintenance records |

### 6.4 Operational Limitations

L1C operations are limited to:

| Parameter | Limitation |
|:----------|:-----------|
| Location | Unpopulated areas only |
| Airspace | Class G (uncontrolled) |
| Altitude | Per declaration (max 400 ft AGL typical) |
| Weather | VMC only |
| Time | Daylight unless otherwise specified |
| Range | Within C2 link capability |
| Aircraft weight | Small RPA (less than 25 kg MTOW) |

---

## 7. SORA Methodology

### 7.1 Overview

The Specific Operations Risk Assessment (SORA) methodology is used to:
- Assess operational risk systematically
- Determine required safety assurance level
- Identify operational safety objectives
- Support SA Declaration development

### 7.2 SORA Process

```
┌─────────────────────────────────────────────────────────────┐
│                    SORA Process Flow                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Step 1: Define ConOps (Concept of Operations)               │
│          ↓                                                   │
│  Step 2: Determine Ground Risk Class (GRC)                   │
│          ↓                                                   │
│  Step 3: Determine Air Risk Class (ARC)                      │
│          ↓                                                   │
│  Step 4: Calculate SAIL (Assurance Level)                    │
│          ↓                                                   │
│  Step 5: Identify OSOs (Safety Objectives)                   │
│          ↓                                                   │
│  Step 6: Document Mitigations                                │
│          ↓                                                   │
│  Step 7: Compile Declaration                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.3 Ground Risk Class (GRC)

GRC is determined by:
- Intrinsic ground risk (based on RPA characteristics)
- Operational scenario (populated vs unpopulated)
- Application of mitigations

| GRC Level | Description |
|:----------|:------------|
| GRC 1 | Very low (controlled ground area) |
| GRC 2 | Low (sparsely populated) |
| GRC 3 | Medium (unpopulated with mitigations) |
| GRC 4+ | Higher risk (requires enhanced mitigations) |

**L1C typically operates at GRC 2-3**

### 7.4 Air Risk Class (ARC)

ARC is determined by:
- Airspace type (controlled vs uncontrolled)
- Traffic density
- Altitude
- Proximity to airports

| ARC Level | Description |
|:----------|:------------|
| ARC-a | Very low (atypical airspace) |
| ARC-b | Low (uncontrolled, low traffic) |
| ARC-c | Medium (airspace with some traffic) |
| ARC-d | High (controlled airspace) |

**L1C operations in Class G: Typically ARC-b**

### 7.5 SAIL Determination

SAIL combines GRC and ARC to determine required assurance level:

| SAIL | Description | Typical Operations |
|:-----|:------------|:-------------------|
| SAIL I | Low | Basic VLOS |
| SAIL II | Medium-Low | EVLOS, simple BVLOS |
| SAIL III | Medium | L1C BVLOS typical |
| SAIL IV | Medium-High | Complex BVLOS |
| SAIL V-VI | High | Urban, over people |

**Aeria L1C operations: SAIL II-III**

### 7.6 Operational Safety Objectives (OSOs)

OSOs are derived from SAIL level and address:
- Technical requirements
- Operational requirements
- Training requirements
- Containment requirements
- Command and control requirements

---

## 8. Concept of Operations (ConOps)

### 8.1 ConOps Requirements

Each L1C operation type requires a documented ConOps including:

| Element | Description |
|:--------|:------------|
| **Operation Description** | What, where, why |
| **Operational Volume** | Geographic boundaries |
| **Flight Geography** | Terrain, obstacles |
| **Ground Risk Assessment** | Population, infrastructure |
| **Air Risk Assessment** | Traffic, airspace |
| **Aircraft Information** | Type, capabilities, limitations |
| **C2 Link** | Technology, range, redundancy |
| **Lost Link Procedures** | Automated and manual responses |
| **Emergency Procedures** | Response to abnormal situations |
| **Personnel Requirements** | Qualifications, roles |

### 8.2 Aeria L1C ConOps

Aeria maintains ConOps documentation for:
- Linear infrastructure inspection (pipelines, powerlines)
- Survey and mapping operations
- Remote site operations
- Flight training operations

ConOps documents are maintained separately and referenced in the L1C Declaration.

---

## 9. Declaration Development Process

### 9.1 New Declaration Development

```
┌─────────────────────────────────────────────────────────────┐
│              Declaration Development Process                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Identify Operation Need                                  │
│     → Determine if SA Declaration required                   │
│                                                              │
│  2. Develop ConOps                                           │
│     → Document intended operations                           │
│                                                              │
│  3. Conduct SORA                                             │
│     → Assess GRC, ARC, determine SAIL                        │
│                                                              │
│  4. Identify OSOs                                            │
│     → List required safety objectives                        │
│                                                              │
│  5. Document Mitigations                                     │
│     → How each OSO is met                                    │
│                                                              │
│  6. Compile Declaration Package                              │
│     → All required documentation                             │
│                                                              │
│  7. AE Review and Approval                                   │
│     → Internal review before submission                      │
│                                                              │
│  8. Submit to Transport Canada                               │
│     → Via TC portal or designated method                     │
│                                                              │
│  9. TC Review                                                │
│     → Address any questions/requests                         │
│                                                              │
│  10. Declaration Acceptance                                  │
│      → Receive accepted declaration                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 9.2 Declaration Package Contents

L1C Declaration package includes:

| Document | Purpose |
|:---------|:--------|
| Declaration Form | Official submission form |
| ConOps | Operation description |
| SORA Documentation | Risk assessment |
| SMS Summary | Safety management system overview |
| MCM Summary | Maintenance program overview |
| Training Program Summary | Pilot qualification program |
| Aircraft List | Authorized aircraft |
| Pilot Qualification Requirements | How pilots are qualified |
| Emergency Procedures | Response procedures |
| Supporting Documents | As required |

---

## 10. Declaration Maintenance

### 10.1 Validity

L1C Declaration remains valid provided:
- Operations remain within declared parameters
- No significant changes to operations, aircraft, or procedures
- Compliance is maintained
- No suspension or revocation by TC

### 10.2 Change Management

Changes requiring declaration amendment:

| Change Type | Action Required |
|:------------|:----------------|
| Add new aircraft type | Submit amendment |
| Change operational area type | Review and possibly amend |
| Change altitude limits | Submit amendment |
| Significant procedure change | Review necessity of amendment |
| Organizational changes (AE, PRM) | Notify TC; possible amendment |
| SMS/MCM significant changes | Review necessity of amendment |

### 10.3 Amendment Process

1. Identify change requiring amendment
2. Develop updated documentation
3. AE review and approval
4. Submit amendment to TC
5. Await acceptance
6. Implement only after acceptance

### 10.4 Annual Review

The Accountable Executive shall conduct annual review of:
- Declaration compliance
- ConOps accuracy
- SORA currency
- Operational experience
- Incident/occurrence history
- Regulatory changes affecting declaration

Document review in ADM-007 Management Review.

---

## 11. Compliance Monitoring

### 11.1 Ongoing Compliance

Ensure ongoing compliance through:
- Pre-flight verification of declaration parameters
- Pilot L1C Certificate verification
- Aircraft authorization verification
- Weather/airspace verification
- Post-flight documentation

### 11.2 Deviation Reporting

Any deviation from declaration parameters:
1. Report per SMS-004-PR Internal Reporting
2. Investigate root cause
3. Implement corrective action
4. Assess need for declaration amendment
5. Report to TC if required

---

## 12. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Accountable Executive** | Sign declarations; ensure compliance; approve amendments; annual review |
| **Operations Manager** | Develop declaration packages; manage amendments; ensure pilot qualifications; monitor compliance |
| **PIC** | Verify authorization before L1C operations; comply with declaration parameters; report deviations |

---

## 13. Records

### 13.1 Required Records

| Record | Description |
|:-------|:------------|
| Current Declaration | Accepted declaration document |
| ConOps Documents | Current and historical |
| SORA Documentation | Risk assessments |
| Amendment History | All amendments and correspondence |
| Compliance Records | Evidence of ongoing compliance |
| Annual Reviews | Management review documentation |

### 13.2 Retention

| Record | Retention Period |
|:-------|:-----------------|
| Accepted Declarations | Life of declaration + 5 years |
| SORA Documentation | Life of declaration + 5 years |
| Amendment Records | Life of declaration + 5 years |
| Annual Reviews | 5 years |

---

## 14. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-005 | BVLOS Operations Policy |
| OPS-007-PR | Pilot Training Procedure |
| OPS-009-PR | BVLOS Operations Procedure |
| SMS-001 | Safety Management System Manual |
| MCM-001 | Maintenance Control Manual |
| TCP-001 | Training & Competency Program Manual |
| GOV-004 | Regulatory Compliance Matrix |

---

## 15. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 19, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** GOV-005 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
