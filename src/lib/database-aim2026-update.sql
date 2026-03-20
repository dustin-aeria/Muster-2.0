-- AIM 2026 Compliance Update - Add new documents
-- Run this in your Supabase SQL Editor

-- Add Safety Assurance Declarations Policy (GOV-018)
INSERT INTO documents (
  doc_number,
  title,
  doc_type,
  category,
  version,
  status,
  content
) VALUES (
  'GOV-018',
  'Safety Assurance Declarations',
  'policy',
  'Governance',
  'v5.0',
  'active',
  '# AERIA SOLUTIONS LTD

# SAFETY ASSURANCE DECLARATIONS

---

| Field | Value |
|:------|:------|
| **Document Number** | GOV-018 |
| **Version** | v5.0 |
| **Effective Date** | March 19, 2026 |
| **Review Date** | March 19, 2027 |
| **Document Owner** | Accountable Executive |
| **Approved By** | Dustin Wales, Accountable Executive |

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

## 5. L1C Declaration Requirements

### 5.1 Eligibility Requirements

To hold an L1C Declaration, the operator must:
- Hold valid RPOC
- Have established SMS
- Have established MCM
- Have qualified L1C pilots (TC L1C Certificate required)
- Have approved aircraft per L1C Declaration

### 5.2 Pilot Requirements for L1C Operations

Pilots conducting L1C operations must:
1. Hold Pilot Certificate - Advanced Operations (TC-issued)
2. Hold Pilot Certificate - Level 1 Complex Operations (TC-issued)
3. Complete L1C ground training per Standard 922.67
4. Complete L1C practical training
5. Pass L1C competency assessment
6. Hold company BVLOS authorization letter
7. Maintain L1C currency (1 BVLOS flight per 90 days)

### 5.3 Operational Limitations

L1C operations are limited to:
- Unpopulated areas only
- Class G (uncontrolled) airspace
- Per declaration altitude limits
- VMC conditions only
- Daylight unless otherwise specified
- Within C2 link capability
- Small RPA (less than 25 kg MTOW)

---

## 6. SORA Methodology

### 6.1 Overview

The Specific Operations Risk Assessment (SORA) methodology is used to:
- Assess operational risk systematically
- Determine required safety assurance level
- Identify operational safety objectives
- Support SA Declaration development

### 6.2 Ground Risk Class (GRC)

GRC is determined by:
- Intrinsic ground risk (based on RPA characteristics)
- Operational scenario (populated vs unpopulated)
- Application of mitigations

### 6.3 Air Risk Class (ARC)

ARC is determined by:
- Airspace type (controlled vs uncontrolled)
- Traffic density
- Altitude
- Proximity to airports

### 6.4 SAIL Determination

SAIL combines GRC and ARC to determine required assurance level.
L1C operations typically: SAIL II-III

---

## 7. Declaration Maintenance

### 7.1 Change Management

Changes requiring declaration amendment:
- Add new aircraft type
- Change operational area type
- Change altitude limits
- Significant procedure changes
- Organizational changes (AE, PRM)

### 7.2 Annual Review

The Accountable Executive shall conduct annual review of:
- Declaration compliance
- ConOps accuracy
- SORA currency
- Operational experience
- Incident/occurrence history
- Regulatory changes affecting declaration

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| RPAS-012 | BVLOS Operations Policy |
| RPAS-041 | Pilot Training Procedure |
| TRAIN-009 | Safety Management System Manual |
| TRAIN-006 | Maintenance Control Manual |

---

**Document Control:** GOV-018 v5.0 | Aeria Solutions Ltd'
);

-- Add EVLOS Operations Procedure (RPAS-049)
INSERT INTO documents (
  doc_number,
  title,
  doc_type,
  category,
  version,
  status,
  content
) VALUES (
  'RPAS-049',
  'EVLOS Operations',
  'procedure',
  'RPAS Operations',
  'v5.0',
  'active',
  '# AERIA SOLUTIONS LTD

# EVLOS OPERATIONS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | RPAS-049 |
| **Version** | v5.0 |
| **Effective Date** | March 19, 2026 |
| **Review Date** | March 19, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure establishes requirements for conducting Extended Visual Line-of-Sight (EVLOS) operations using Visual Observers to extend the operational range beyond the PIC''s direct visual line of sight.

---

## 2. Definitions

| Term | Definition |
|:-----|:-----------|
| **EVLOS** | Extended Visual Line-of-Sight - Operations where the PIC uses Visual Observers to maintain continuous visual contact with the RPA |
| **VLOS** | Visual Line-of-Sight - Operations where the PIC maintains direct visual contact |
| **VO** | Visual Observer - Person maintaining visual contact with RPA and communicating with PIC |
| **Handoff** | Transfer of visual tracking responsibility from one VO to another |
| **Coverage Zone** | Geographic area where a VO can maintain effective visual contact |

---

## 3. EVLOS vs BVLOS

| Aspect | EVLOS | BVLOS |
|:-------|:------|:------|
| Visual contact | Maintained via VOs | Not maintained |
| Authorization | Advanced Operations | L1C Declaration or SFOC |
| Pilot certificate | Advanced | L1C or SFOC |

**EVLOS is NOT BVLOS** - Visual contact is maintained throughout.

---

## 4. Personnel Requirements

### 4.1 PIC Requirements

- Hold Pilot Certificate - Advanced Operations
- Be authorized on aircraft type
- Complete EVLOS briefing
- Maintain communication with all VOs

### 4.2 Visual Observer Requirements

- Complete VO training per RPAS-047
- Complete EVLOS-specific briefing
- Have adequate vision to track RPA
- Have reliable communication with PIC
- Understand handoff procedures

---

## 5. Communication Protocol

### Standard Calls

| Call | Meaning |
|:-----|:--------|
| "VO1, visual" | VO1 has visual contact |
| "VO1, entering overlap" | RPA approaching handoff zone |
| "VO2, I have visual" | VO2 confirms visual for handoff |
| "VO1, handoff complete" | VO1 releases tracking responsibility |
| "Visual lost" | Cannot see RPA |
| "Land now" | Emergency landing required |

---

## 6. Handoff Procedure

1. Outgoing VO: "RPA entering overlap zone"
2. Incoming VO: Acquires visual, confirms "I have visual"
3. PIC: Confirms both VOs have visual
4. Outgoing VO: Maintains visual until clear of zone
5. Outgoing VO: "Handoff complete, releasing"
6. Incoming VO: Now primary tracker

**Critical Rule:** NEVER release visual contact until incoming VO confirms visual acquisition.

---

## 7. Lost Visual Procedure

If any VO loses visual contact:
1. Immediately call: "Lost visual, [last known position/direction]"
2. PIC: Stop lateral movement, initiate hover/orbit
3. Other VOs: Attempt to acquire visual
4. If visual regained: Continue operations
5. If visual not regained within 30 seconds: Initiate return to last known visual position
6. Document occurrence

---

## 8. Weather Limitations

| Condition | Requirement |
|:----------|:------------|
| Visibility | Minimum 3 SM |
| Cloud ceiling | Minimum 500 ft above flight altitude |
| Precipitation | Light or none |

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| RPAS-015 | Crew Qualifications |
| RPAS-047 | Visual Observer Training |
| RPAS-037 | Flight Conduct |
| RPAS-044 | Emergency Procedures Manual |

---

**Document Control:** RPAS-049 v5.0 | Aeria Solutions Ltd'
);

-- Verify the inserts
SELECT doc_number, title, doc_type, category, status
FROM documents
WHERE doc_number IN ('GOV-018', 'RPAS-049');
