# AERIA SOLUTIONS LTD

# MAINTENANCE CONTROL MANUAL

---

| Field | Value |
|:------|:------|
| **Document Number** | MCM-001 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Person Responsible for Maintenance (PRM) |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added new aircraft types | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — added LiDAR aircraft maintenance | Dustin Wales |
| v3.0 | February 18, 2020 | Annual review — updated inspection intervals | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — added component tracking | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — updated manufacturer references | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added maintenance release procedures | Dustin Wales |
| v4.0 | February 5, 2024 | Annual review — expanded fleet maintenance | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for RPOC airworthiness requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Introduction

### 1.1 Purpose

This Maintenance Control Manual (MCM) establishes the maintenance program for all RPAS operated under Aeria Solutions RPOC. It ensures aircraft are maintained in airworthy condition per regulatory requirements and manufacturer recommendations.

### 1.2 Scope

This manual applies to:
- All aircraft operated under Aeria RPOC
- All maintenance activities
- Person Responsible for Maintenance (PRM)
- Personnel performing maintenance

### 1.3 Regulatory Basis

| Regulation | Requirement |
|:-----------|:------------|
| CAR 901.221 | Maintenance requirements for RPAS |
| Standard 922.03 | Maintenance program standards |

---

## 2. Maintenance Organization

### 2.1 Person Responsible for Maintenance (PRM)

**Name:** Geoff Mullins

**Responsibilities:**
- Overall responsibility for aircraft airworthiness
- Ensure maintenance program is followed
- Approve maintenance personnel
- Manage maintenance records
- Release aircraft to service

### 2.2 Authorized Maintenance Personnel

Maintenance may be performed by:
- PRM
- Personnel authorized by PRM
- Manufacturer (specialized repairs)

Authorization is documented and tracked.

### 2.3 PIC Responsibilities

PICs are responsible for:
- Pre-flight inspections
- Reporting defects
- Post-flight inspections
- Not operating defective aircraft

---

## 3. Aircraft Registry

### 3.1 Aircraft Listing

The PRM maintains a registry of all aircraft including:
- Aircraft type/model
- Serial number
- Registration number
- Configuration (payloads, modifications)
- Service status

### 3.2 Aircraft Documents

For each aircraft, maintain:
- Manufacturer documentation
- Configuration records
- Maintenance history
- Current status

---

## 4. Maintenance Program

### 4.1 Maintenance Types

| Type | Description |
|:-----|:------------|
| **Pre-Flight** | Inspection before each flight |
| **Post-Flight** | Inspection after flights |
| **Scheduled** | Time or cycle-based maintenance |
| **Unscheduled** | Repairs and defect correction |
| **Overhaul** | Major maintenance per manufacturer |

### 4.2 Scheduled Maintenance

**Intervals:**
Per manufacturer recommendations or:

| Component | Interval |
|:----------|:---------|
| Full inspection | Every 50 flight hours or 6 months |
| Motor inspection | Every 25 flight hours |
| Propeller inspection | Every 10 flight hours |
| Firmware updates | As released |
| Battery replacement | Per manufacturer or performance |

Adjust based on manufacturer requirements for specific aircraft.

### 4.3 Maintenance Schedule

PRM maintains schedule showing:
- Aircraft identification
- Maintenance items due
- Due date/hours
- Status

### 4.4 Defect Reporting

**When defect found:**
1. Report to PRM immediately
2. Document on defect log
3. Assess airworthiness impact
4. Ground aircraft if unsafe
5. Schedule correction

### 4.5 No-Fly Defects

Aircraft shall not fly with:
- Structural damage
- Motor malfunction
- Control system issues
- Damaged propellers
- Battery issues
- GPS/navigation failure
- Any defect affecting safe flight

---

## 5. Maintenance Procedures

### 5.1 Pre-Flight Inspection

**Purpose:** Verify aircraft ready for flight

**Elements:** See MCM-003-PR Pre-Flight Inspection Procedure

**Performed by:** PIC

**Documentation:** Pre-flight checklist

### 5.2 Post-Flight Inspection

**Purpose:** Identify any issues from flight

**Elements:** See MCM-004-PR Post-Flight Inspection Procedure

**Performed by:** PIC

**Documentation:** Post-flight checklist, defect log

### 5.3 Scheduled Maintenance

**Purpose:** Preventive maintenance

**Elements:** See MCM-001-PR Scheduled Maintenance Procedure

**Performed by:** PRM or authorized personnel

**Documentation:** Maintenance log

### 5.4 Unscheduled Maintenance

**Purpose:** Correct defects

**Elements:** See MCM-002-PR Unscheduled Maintenance Procedure

**Performed by:** PRM or authorized personnel

**Documentation:** Work order, maintenance log

---

## 6. Battery Management

### 6.1 Battery Requirements

Batteries shall be:
- Appropriate for aircraft
- Properly stored
- Inspected before use
- Within service life

### 6.2 Battery Program

See MCM-005-PR Battery Management Procedure for:
- Charging procedures
- Storage requirements
- Cycle tracking
- Inspection criteria
- Retirement criteria

---

## 7. Firmware and Software

### 7.1 Update Management

Firmware/software updates:
- Review release notes
- Assess impact on operations
- Test before operational use
- Document version changes
- Roll back if issues

### 7.2 Version Control

Track current versions of:
- Flight controller firmware
- GCS/controller software
- Payload firmware
- Mission planning software

---

## 8. Configuration Control

### 8.1 Approved Configurations

Each aircraft has approved configuration:
- Base aircraft
- Approved payloads
- Approved modifications

### 8.2 Configuration Changes

Changes require:
- PRM approval
- Documentation update
- Weight/balance verification
- Operational testing

---

## 9. Records

### 9.1 Required Records

| Record | Content |
|:-------|:--------|
| Aircraft log | All maintenance performed |
| Flight log | Hours, cycles |
| Defect log | Defects and corrections |
| Battery log | Cycle counts, condition |
| Inspection records | Scheduled inspections |

### 9.2 Retention

| Record | Retention |
|:-------|:----------|
| Aircraft log | Life of aircraft + 2 years |
| Maintenance records | 3 years |
| Battery records | Life of battery + 1 year |
| Inspection checklists | 3 years |

---

## 10. Release to Service

### 10.1 Authority

Aircraft are released to service by:
- PRM (after maintenance)
- PIC (after pre-flight; routine operations)

### 10.2 Requirements

Aircraft may be released when:
- All maintenance complete
- No outstanding no-fly defects
- Pre-flight inspection complete
- Documentation current

---

## 11. Parts and Materials

### 11.1 Approved Parts

Use only:
- Manufacturer OEM parts
- PRM-approved equivalents
- Documented substitutions

### 11.2 Traceability

Maintain records of:
- Parts installed
- Source/supplier
- Date installed
- Serial numbers (where applicable)

---

## 12. Storage and Handling

### 12.1 Aircraft Storage

Aircraft shall be stored:
- In clean, dry environment
- Protected from damage
- Batteries removed (per battery procedure)
- Secured from unauthorized access

### 12.2 Battery Storage

See MCM-005-PR Battery Management Procedure

---

## 13. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001-PR | Scheduled Maintenance Procedure |
| MCM-002-PR | Unscheduled Maintenance Procedure |
| MCM-003-PR | Pre-Flight Inspection Procedure |
| MCM-004-PR | Post-Flight Inspection Procedure |
| MCM-005-PR | Battery Management Procedure |
| FRM-MAINT | Maintenance Log Form |
| FRM-BATT | Battery Log Form |

---

## 14. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| PRM | Geoff Mullins | _________________ | _________________ |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** MCM-001 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
