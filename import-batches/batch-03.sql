-- Batch 3 of 8
-- Documents 41 to 60 of 155
-- Run this in Supabase SQL Editor

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Safety Management System Manual',
  'guide',
  'SMS-001',
  'Safety',
  '# AERIA SOLUTIONS LTD

# SAFETY MANAGEMENT SYSTEM MANUAL

---

| Field | Value |
|:------|:------|
| **Document Number** | SMS-001 |
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

## 1. Introduction

### 1.1 Purpose

This Safety Management System (SMS) Manual establishes the framework for managing safety at Aeria Solutions Ltd. The SMS provides a systematic approach to identifying hazards, managing risks, and continuously improving safety performance in all RPAS operations.

### 1.2 Scope

This SMS applies to:
- All RPAS operations conducted under Aeria Solutions RPOC
- All company personnel, contractors, and subcontractors
- All activities that could affect safety of flight operations
- Integration with Health, Safety & Environment programs

### 1.3 Regulatory Basis

| Regulation | Requirement |
|:-----------|:------------|
| CAR 901.218 | RPAS operator SMS requirements |
| Standard 922.01 | SMS implementation standards |
| BC OHS Regulation | Workplace safety requirements |
| Energy Safety Canada | SECOR safety management elements |

---

## 2. Safety Policy

### 2.1 Safety Policy Statement

Aeria Solutions Ltd is committed to:
1. Managing safety as a core business function
2. Achieving the highest practicable level of safety performance
3. Complying with all regulatory requirements
4. Providing resources for effective safety management
5. Ensuring all personnel understand their safety responsibilities
6. Encouraging safety reporting without fear of reprisal
7. Continuously improving safety performance

**Safety is everyone''s responsibility, and no task is so urgent that it cannot be done safely.**

### 2.2 Safety Objectives

| Objective | Target |
|:----------|:-------|
| Zero harm to people | No injuries from operations |
| Zero public incidents | No harm to public or property |
| 100% occurrence reporting | All occurrences reported |
| Continuous improvement | Annual safety performance improvement |
| Full regulatory compliance | No regulatory findings |

### 2.3 Management Commitment

The Accountable Executive commits to:
- Allocating adequate resources for SMS implementation
- Promoting safety culture throughout the organization
- Personally reviewing safety performance
- Taking action on safety concerns
- Leading by example in safety compliance

---

## 3. SMS Components

The Aeria Solutions SMS consists of four components:

### 3.1 Safety Policy and Objectives
- Safety policy statement
- Safety objectives and targets
- Management commitment
- Accountability structure

### 3.2 Safety Risk Management
- Hazard identification
- Risk assessment
- Risk mitigation
- Change management

### 3.3 Safety Assurance
- Safety performance monitoring
- Safety audits and inspections
- Investigation and root cause analysis
- Corrective action management
- Continuous improvement

### 3.4 Safety Promotion
- Safety training
- Safety communication
- Safety culture

---

## 4. Safety Accountabilities

### 4.1 Organization Chart

```
┌─────────────────────────────────────┐
│       Accountable Executive         │
│         (Dustin Wales)              │
│   Ultimate safety accountability    │
└──────────────┬──────────────────────┘
               │
┌──────────────┴──────────────────────┐
│       Operations Manager            │
│         (Geoff Mullins)             │
│   Person Responsible for           │
│   Maintenance (PRM)                 │
│   Day-to-day safety management     │
└──────────────┬──────────────────────┘
               │
┌──────────────┴──────────────────────┐
│   Pilots-in-Command / All Workers   │
│   Safe conduct of operations       │
└─────────────────────────────────────┘
```

### 4.2 Accountable Executive Responsibilities

| Responsibility | Description |
|:---------------|:------------|
| Ultimate accountability | Accountable for SMS and safety |
| Resources | Ensure adequate resources for safety |
| Policy | Approve safety policy |
| Review | Review safety performance |
| Authority | Final authority on safety decisions |

### 4.3 Operations Manager / PRM Responsibilities

| Responsibility | Description |
|:---------------|:------------|
| Implementation | Implement and maintain SMS |
| Risk management | Manage hazard identification and risk assessment |
| Monitoring | Monitor safety performance |
| Training | Ensure safety training is delivered |
| Communication | Communicate safety information |
| Investigation | Lead incident investigations |
| Reporting | Report to Accountable Executive |

### 4.4 PIC / Worker Responsibilities

| Responsibility | Description |
|:---------------|:------------|
| Compliance | Follow safety policies and procedures |
| Reporting | Report hazards and occurrences |
| Participation | Participate in safety activities |
| Improvement | Suggest safety improvements |

---

## 5. Safety Risk Management

### 5.1 Hazard Identification

Hazards are identified through:
- Formal Hazard Assessments (FHAs)
- Field Level Hazard Assessments (FLHAs)
- Safety reporting (voluntary)
- Incident investigation
- Inspections and audits
- Change management process

### 5.2 Risk Assessment

Risks are assessed using:
- Likelihood × Severity matrix
- Assignment to risk categories
- Determination of risk acceptability

| Risk Level | Acceptability | Action Required |
|:-----------|:--------------|:----------------|
| Critical | Unacceptable | Do not proceed until reduced |
| High | Unacceptable | Additional controls; AE approval |
| Medium | Tolerable | Controls required; monitor |
| Low | Acceptable | Standard procedures |

### 5.3 Risk Mitigation

Risks are mitigated using the hierarchy of controls:
1. Elimination
2. Substitution
3. Engineering controls
4. Administrative controls
5. Personal protective equipment

### 5.4 Change Management

Changes that could affect safety require assessment:
- New operations or procedures
- New equipment or aircraft
- Organizational changes
- Regulatory changes
- Significant operational changes

---

## 6. Safety Assurance

### 6.1 Safety Performance Monitoring

| Indicator | Frequency | Responsibility |
|:----------|:----------|:---------------|
| Occurrence reports | Ongoing | Operations Manager |
| Audit findings | Per schedule | Operations Manager |
| Training currency | Monthly | Operations Manager |
| Equipment status | Ongoing | PRM |
| Near-miss reports | Ongoing | All personnel |

### 6.2 Safety Reporting

**Types of Reports:**
- Occurrence reports (mandatory)
- Hazard reports (voluntary)
- Near-miss reports (encouraged)
- Safety concerns (any time)

**Reporting Channels:**
- Direct to supervisor/Operations Manager
- Safety reporting form (FRM-HAZREP)
- Anonymous reporting (available)

**Non-Punitive Policy:**
Reports made in good faith will not result in punitive action, unless involving:
- Willful misconduct
- Gross negligence
- Criminal activity

### 6.3 Occurrence Investigation

All occurrences are investigated to:
- Determine root causes
- Identify system deficiencies
- Develop corrective actions
- Prevent recurrence

Investigation depth is proportional to:
- Actual or potential consequences
- Likelihood of recurrence
- Organizational implications

### 6.4 Audits

| Audit Type | Frequency | Purpose |
|:-----------|:----------|:--------|
| Internal SMS audit | Annual | Verify SMS effectiveness |
| Operational audit | Annual | Verify procedure compliance |
| External audit | As scheduled | Regulatory/SECOR compliance |

### 6.5 Continuous Improvement

Improvement sources include:
- Investigation findings
- Audit findings
- Safety data trends
- Industry learnings
- Regulatory changes
- Personnel suggestions

---

## 7. Safety Promotion

### 7.1 Safety Training

| Training | Who | Frequency |
|:---------|:----|:----------|
| SMS awareness | All personnel | Orientation + annual |
| Hazard assessment | All operations personnel | Orientation + annual |
| Emergency procedures | All personnel | Annual |
| Safety reporting | All personnel | Orientation + annual |

### 7.2 Safety Communication

Safety information is communicated through:
- Safety briefings
- Toolbox talks
- Safety alerts
- Document distribution
- Safety meetings

### 7.3 Safety Culture

Characteristics of our safety culture:
- Open reporting
- Just response to errors
- Learning from events
- Continuous improvement
- Management commitment visible

---

## 8. Documentation

### 8.1 SMS Documentation

| Document | Purpose |
|:---------|:--------|
| SMS-001 | SMS Manual (this document) |
| SMS-002-PR through SMS-006-PR | SMS procedures |
| HSE series | Health, Safety & Environment |
| OPS series | Operations |
| MCM series | Maintenance |
| FHA series | Formal Hazard Assessments |

### 8.2 Records

| Record | Retention |
|:-------|:----------|
| Occurrence reports | 10 years |
| Hazard reports | 5 years |
| Investigation reports | 10 years |
| Audit reports | 5 years |
| Meeting minutes | 3 years |
| Training records | Employment + 3 years |

---

## 9. Management Review

### 9.1 Review Frequency

The Accountable Executive reviews SMS performance:
- Quarterly: Key metrics review
- Annually: Comprehensive SMS review

### 9.2 Review Content

Annual review includes:
- Safety performance against objectives
- Status of corrective actions
- Audit findings and trends
- Regulatory changes
- Resource adequacy
- SMS improvement opportunities

### 9.3 Outcomes

Review outcomes are documented and may include:
- Changes to safety policy
- Resource allocation
- Objective updates
- Procedure changes

---

## 10. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| SMS-002-PR | Risk Assessment Procedure |
| SMS-003-PR | Change Management Procedure |
| SMS-004-PR | Internal Reporting Procedure |
| SMS-005 | Occurrence Reporting Policy |
| SMS-006-PR | SMS Audit Procedure |
| HSE-008 | Incident Investigation Policy |
| GOV-003 | Organizational Structure & Accountability |

---

## 11. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** SMS-001 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Risk Assessment Procedure',
  'procedure',
  'SMS-002-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# RISK ASSESSMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | SMS-002-PR |
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

This procedure describes how to assess and manage risks within the Safety Management System.

---

## 2. Scope

This procedure applies to:
- All hazards identified through any means
- New operations or changes
- Safety-related decision making

---

## 3. References

| Reference | Description |
|:----------|:------------|
| SMS-001 | Safety Management System Manual |
| HSE-003 | Hazard Assessment Policy |
| HSE-004 | Hazard Control Policy |

---

## 4. Procedure

### 4.1 Risk Assessment Framework

Risk = Likelihood × Severity

Assessment determines:
- How likely is harm to occur?
- How severe would the consequences be?
- What is the overall risk level?

### 4.2 Likelihood Assessment

| Rating | Description | Criteria |
|:-------|:------------|:---------|
| **High** | Likely | Expected to occur; has occurred frequently |
| **Medium** | Possible | Could occur; has occurred in industry |
| **Low** | Unlikely | Not expected but possible |

### 4.3 Severity Assessment

| Rating | Description | Criteria |
|:-------|:------------|:---------|
| **High** | Major | Fatality, permanent disability, aircraft destroyed, major property damage |
| **Medium** | Moderate | Medical treatment, lost time, significant aircraft damage, moderate property damage |
| **Low** | Minor | First aid, minor injury, minor damage |

### 4.4 Risk Matrix

|  | Low Severity | Medium Severity | High Severity |
|:---|:---:|:---:|:---:|
| **High Likelihood** | Medium | High | Critical |
| **Medium Likelihood** | Low | Medium | High |
| **Low Likelihood** | Low | Low | Medium |

### 4.5 Risk Acceptability

| Level | Acceptability | Action |
|:------|:--------------|:-------|
| **Critical** | Unacceptable | Do not proceed; implement controls to reduce before starting |
| **High** | Unacceptable | Implement additional controls; obtain AE approval to proceed |
| **Medium** | Tolerable | Implement controls; proceed with awareness |
| **Low** | Acceptable | Standard procedures; monitor |

### 4.6 Risk Assessment Process

#### Step 1: Identify the Hazard
- What is the hazard?
- Who/what could be harmed?
- How could harm occur?

#### Step 2: Assess Likelihood
- Has this occurred before?
- How often could it occur?
- Consider frequency of exposure

#### Step 3: Assess Severity
- What is the worst realistic outcome?
- Consider actual vs. potential
- Consider all consequences (people, property, environment, operations)

#### Step 4: Determine Risk Level
Use the risk matrix.

#### Step 5: Determine Controls
If risk is not acceptable:
- Identify controls using hierarchy
- Assess effectiveness of controls
- Determine residual risk

#### Step 6: Approve and Implement
- Document assessment
- Obtain approval (High/Critical risks)
- Implement controls
- Monitor effectiveness

### 4.7 Control Hierarchy

Apply controls in order of effectiveness:

| Priority | Control Type | Example |
|:---------|:-------------|:--------|
| 1 | Elimination | Cancel operation in dangerous weather |
| 2 | Substitution | Use different route to avoid obstacle |
| 3 | Engineering | Geofencing, physical barriers |
| 4 | Administrative | Procedures, training, checklists |
| 5 | PPE | Safety equipment |

Use multiple controls when appropriate (defense in depth).

### 4.8 Residual Risk

After controls are applied, reassess the risk:
- Does the risk level change?
- Is the residual risk acceptable?
- Are additional controls needed?

**Document both initial and residual risk levels.**

### 4.9 Documentation

Risk assessments are documented in:
- FHAs (standard operations)
- FLHAs (field-level daily assessments)
- Change management forms
- Project risk assessments

### 4.10 Review and Update

Risk assessments shall be reviewed:
- Annually (FHAs)
- After incidents
- When conditions change
- When controls fail

---

## 5. Approval Requirements

| Risk Level | Approval Authority |
|:-----------|:-------------------|
| Low | PIC/Supervisor |
| Medium | PIC/Supervisor |
| High | Operations Manager + Accountable Executive |
| Critical | Accountable Executive (must reduce before proceeding) |

---

## 6. Examples

### Example 1: Weather Risk
- **Hazard:** High wind forecast (30 km/h)
- **Potential harm:** Loss of control, crash
- **Likelihood:** Medium (winds variable)
- **Severity:** Medium (aircraft damage, possible injury)
- **Initial Risk:** Medium
- **Controls:** Monitor conditions; set lower wind limit; be prepared to abort
- **Residual Risk:** Low (with controls)
- **Approval:** PIC

### Example 2: BVLOS in New Area
- **Hazard:** Unknown obstacles in flight path
- **Potential harm:** Collision, crash
- **Likelihood:** Medium (unsurveyed area)
- **Severity:** High (aircraft loss, potential injury)
- **Initial Risk:** High
- **Controls:** Complete site survey; identify obstacles; adjust flight path
- **Residual Risk:** Medium (with survey complete)
- **Approval:** Operations Manager

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| SMS-001 | Safety Management System Manual |
| HSE-003 | Hazard Assessment Policy |
| HSE-001-PR | Formal Hazard Assessment Procedure |
| FRM-RISK | Risk Assessment Form |

---

**Document Control:** SMS-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Change Management Procedure',
  'procedure',
  'SMS-003-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# CHANGE MANAGEMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | SMS-003-PR |
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

This procedure ensures that changes that could affect safety are properly assessed and managed before implementation.

---

## 2. Scope

This procedure applies to changes including:
- New operations or procedures
- New aircraft or equipment
- Organizational changes
- Regulatory changes
- Significant operational changes
- Changes to safety-critical systems

---

## 3. References

| Reference | Description |
|:----------|:------------|
| SMS-001 | Safety Management System Manual |
| SMS-002-PR | Risk Assessment Procedure |
| CAR 901.218 | SMS requirements including change management |

---

## 4. Procedure

### 4.1 Types of Changes

| Type | Examples |
|:-----|:---------|
| **Operational** | New mission type, new operating area, new client type |
| **Technical** | New aircraft, new payload, software changes |
| **Organizational** | Personnel changes, role changes, restructuring |
| **Procedural** | New procedures, revised procedures |
| **Regulatory** | New regulations, amended requirements |
| **Environmental** | New operating environment, site changes |

### 4.2 Change Identification

Changes may be identified through:
- Business development (new contracts, capabilities)
- Equipment acquisition
- Regulatory updates
- Safety recommendations
- Audit findings
- Management decisions

### 4.3 Change Assessment Process

#### Step 1: Document the Change
Complete change assessment form (FRM-CHANGE):
- Description of proposed change
- Reason for change
- Scope and impact
- Implementation timeline

#### Step 2: Identify Potential Hazards
Consider:
- What could go wrong with this change?
- What existing hazards are affected?
- What new hazards might be introduced?
- Who/what could be affected?

#### Step 3: Assess Risks
For each identified hazard:
- Assess likelihood and severity
- Determine risk level
- Compare to current state

Use SMS-002-PR Risk Assessment Procedure.

#### Step 4: Identify Mitigations
If risks are unacceptable:
- Identify controls or modifications
- Reassess residual risk
- Determine if change should proceed

#### Step 5: Plan Implementation
- Define implementation steps
- Identify resources needed
- Plan training requirements
- Define communication plan
- Set timelines

#### Step 6: Approve Change
| Change Risk Level | Approval |
|:------------------|:---------|
| Low impact | Operations Manager |
| Medium impact | Operations Manager + AE notification |
| High impact | Accountable Executive |
| Regulatory significance | Accountable Executive + regulatory notification if required |

#### Step 7: Implement Change
- Execute implementation plan
- Deliver required training
- Communicate change
- Update documents
- Monitor implementation

#### Step 8: Review Effectiveness
After implementation:
- Verify change working as intended
- Monitor for unexpected effects
- Collect feedback
- Adjust as needed
- Close change management record

### 4.4 Change Categories

| Category | Description | Approval Level |
|:---------|:------------|:---------------|
| **Minor** | Low impact; within existing procedures | Operations Manager |
| **Moderate** | Affects procedures or operations | Operations Manager |
| **Significant** | Major operational change; affects RPOC | Accountable Executive |
| **Regulatory** | Requires Transport Canada notification | Accountable Executive |

### 4.5 Emergency Changes

If urgent change is needed:
1. Operations Manager may authorize temporary measure
2. Full assessment completed as soon as practical
3. Document rationale for urgency
4. Accountable Executive informed

### 4.6 Regulatory Notification

Some changes require notification to Transport Canada:
- Changes to RPOC (contact information, aircraft)
- Changes to declared operations (L1C)
- Changes affecting SMS structure

See CARs 901.214-901.221 for requirements.

---

## 5. Documentation

### Change Assessment Form (FRM-CHANGE)
- Change description
- Hazard identification
- Risk assessment
- Mitigations
- Implementation plan
- Approvals
- Review notes

### Retention
- Change management records: 5 years

---

## 6. Examples

### Example 1: New Aircraft Type
**Change:** Add new aircraft model to fleet

**Assessment:**
- Hazards: Unfamiliar operation, different characteristics
- Risk: Medium (new equipment risk)
- Mitigations: Type training, familiarization, supervised initial operations
- Implementation: Training program, checkout requirements, document updates
- Approval: Operations Manager

### Example 2: New BVLOS Operation Type
**Change:** Conduct BVLOS over water (previously only over land)

**Assessment:**
- Hazards: Water recovery challenges, different emergency procedures
- Risk: High (new operating environment)
- Mitigations: Updated procedures, specific training, flotation consideration
- Implementation: Procedure development, training, L1C review
- Approval: Accountable Executive; verify L1C coverage

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| SMS-001 | Safety Management System Manual |
| SMS-002-PR | Risk Assessment Procedure |
| FRM-CHANGE | Change Assessment Form |
| GOV-002-PR | Document Control Procedure |

---

**Document Control:** SMS-003-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Internal Reporting Procedure',
  'procedure',
  'SMS-004-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# INTERNAL REPORTING PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | SMS-004-PR |
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

This procedure describes the internal safety reporting system for hazards, occurrences, and safety concerns.

---

## 2. Scope

This procedure applies to:
- All safety-related reports
- All Aeria Solutions personnel
- Contractors and subcontractors

---

## 3. References

| Reference | Description |
|:----------|:------------|
| SMS-001 | Safety Management System Manual |
| SMS-005 | Occurrence Reporting Policy |
| HSE-008 | Incident Investigation Policy |

---

## 4. Procedure

### 4.1 What to Report

**Report immediately:**
- Occurrences (incidents, accidents)
- Near-misses with significant potential
- Equipment malfunctions
- Regulatory deviations
- Injuries

**Report as identified:**
- Hazards observed
- Safety concerns
- Procedure problems
- Suggestions for improvement
- Environmental issues

### 4.2 How to Report

#### Verbal Report (Immediate)
For urgent matters:
- Report to supervisor/PIC immediately
- Report to Operations Manager as soon as practical
- Call emergency services if needed

#### Written Report
Follow up verbal reports with written documentation:
- Occurrence Report (FRM-OCC) for incidents
- Hazard Report (FRM-HAZREP) for hazards and concerns

#### Anonymous Reporting
If preferred:
- Submit unsigned hazard report
- Email safety concerns to designated address
- Reports will be investigated regardless of source

### 4.3 Report Content

**Occurrence Report includes:**
- Date, time, location
- Description of what happened
- People involved
- Equipment involved
- Injuries or damage
- Immediate actions taken
- Contributing factors (if known)
- Reporter information

**Hazard Report includes:**
- Date observed
- Location
- Description of hazard
- Potential consequences
- Suggested controls
- Reporter information (optional)

### 4.4 Reporting Timeline

| Report Type | Timeframe |
|:------------|:----------|
| Verbal (urgent) | Immediately |
| Occurrence report | Within 24 hours |
| Hazard report | Within 48 hours |
| External reporting | Per regulatory requirements |

### 4.5 Report Processing

**Operations Manager shall:**
1. Receive and log all reports
2. Assess urgency and severity
3. Assign for investigation if needed
4. Track corrective actions
5. Provide feedback to reporter
6. Report trends to Accountable Executive

### 4.6 Investigation Triggers

Investigate when:
- Injury occurred
- Significant damage
- Near-miss with high potential
- Regulatory deviation
- Systemic issue indicated
- Repeat occurrence

See HSE-006-PR Incident Investigation Procedure.

### 4.7 Corrective Actions

Based on reports and investigations:
- Identify corrective actions
- Assign responsibility
- Set target dates
- Track completion
- Verify effectiveness

### 4.8 Non-Punitive Reporting

**Policy:**
Reports made in good faith will not result in punitive action.

**This protection does not apply to:**
- Willful misconduct
- Gross negligence
- Deliberate violation
- Criminal acts
- False or malicious reports

### 4.9 Confidentiality

- Reporter identity protected where possible
- Information shared on need-to-know basis
- Investigation findings may be shared (anonymized)
- Lessons learned communicated appropriately

### 4.10 Feedback

Reporters will receive:
- Acknowledgment of report
- Summary of actions taken
- Closure notification

Anonymous reporters will see outcomes through:
- General safety communications
- Lessons learned briefings

### 4.11 Metrics and Trends

Operations Manager tracks:
- Number of reports by type
- Response times
- Corrective action completion
- Recurring issues
- Trends over time

Review with Accountable Executive quarterly.

---

## 5. Reporting Forms

| Form | Use |
|:-----|:----|
| FRM-OCC | Occurrence Report |
| FRM-HAZREP | Hazard Report |
| FRM-INCINV | Incident Investigation Report |

---

## 6. External Reporting

Some events require external reporting:
- Transport Canada (reportable occurrences)
- WorkSafeBC (serious injuries)
- Client (per contract requirements)

See SMS-005 Occurrence Reporting Policy for requirements.

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| SMS-005 | Occurrence Reporting Policy |
| HSE-006-PR | Incident Investigation Procedure |
| FRM-OCC | Occurrence Report Form |
| FRM-HAZREP | Hazard Report Form |

---

**Document Control:** SMS-004-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Occurrence Reporting Policy',
  'policy',
  'SMS-005',
  'Safety',
  '# AERIA SOLUTIONS LTD

# OCCURRENCE REPORTING POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | SMS-005 |
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

This policy establishes requirements for reporting aviation occurrences to Transport Canada and other authorities as required by regulation.

---

## 2. Scope

This policy applies to:
- All RPAS operations under Aeria RPOC
- All reportable occurrences as defined
- All personnel involved in operations

---

## 3. Definitions

| Term | Definition |
|:-----|:-----------|
| **Reportable Occurrence** | An event that must be reported to Transport Canada per CARs |
| **Aviation Occurrence** | An accident or incident related to aircraft operation |
| **Accident** | Occurrence resulting in death, injury, or substantial damage |
| **Incident** | Occurrence other than accident that affects or could affect safety |

---

## 4. References

| Reference | Description |
|:----------|:------------|
| CARs 901.50-901.52 | RPAS reporting requirements |
| Transportation Safety Board Regulations | TSB notification requirements |
| SMS-001 | Safety Management System Manual |

---

## 5. Policy

### 5.1 General Requirement

**All occurrences shall be reported internally immediately.**

Reportable occurrences shall also be reported to Transport Canada within required timeframes.

### 5.2 Reportable Occurrences (Transport Canada)

Per CARs 901.50, reportable occurrences include:

| Occurrence | Reporting Required |
|:-----------|:-------------------|
| Injury to any person requiring medical attention | Yes |
| Aircraft damage affecting airworthiness | Yes |
| Collision with another aircraft | Yes |
| Collision with person, vehicle, or structure | Yes |
| Loss of control of aircraft | Yes |
| Entry into controlled airspace without authorization | Yes |
| Near collision with manned aircraft | Yes |
| Fire or smoke | Yes |
| Emergency requiring emergency procedures | Yes |

### 5.3 TSB Notification

The Transportation Safety Board must be notified of:
- Accidents causing death or serious injury
- Mid-air collisions
- Other accidents as defined in TSB Regulations

### 5.4 Reporting Timelines

| Report Type | Timeline |
|:------------|:---------|
| TSB notification (accident) | Immediately |
| TC reportable occurrence | As soon as possible; within 72 hours |
| Internal occurrence report | Within 24 hours |
| WorkSafeBC (serious injury) | Immediately |

### 5.5 How to Report to Transport Canada

**Methods:**
- Online: Transport Canada Civil Aviation Issues Reporting System (CAIRS)
- Phone: Transport Canada Regional Office
- Written: Transport Canada Civil Aviation

**Information to include:**
- Date, time, location
- Operator name and RPOC number
- Aircraft information
- PIC information
- Description of occurrence
- Injuries or damage
- Actions taken

### 5.6 Internal Reporting

All occurrences, reportable or not, shall be:
1. Reported to Operations Manager immediately
2. Documented on FRM-OCC
3. Investigated per HSE-006-PR
4. Tracked for corrective actions

### 5.7 Evidence Preservation

After any occurrence:
- Preserve all evidence
- Do not alter or delete flight data
- Photograph aircraft and scene
- Secure damaged components
- Document everything

### 5.8 Who Reports

| Report | Responsible Party |
|:-------|:------------------|
| Internal report | PIC or witness |
| Transport Canada | Operations Manager or AE |
| TSB | Accountable Executive |
| WorkSafeBC | Operations Manager |

### 5.9 Coordination

Operations Manager coordinates all external reporting to ensure:
- Accurate information
- Timely submission
- Proper documentation
- Follow-up responses

---

## 6. Non-Reportable Occurrences

Even if not reportable to TC, document and investigate:
- Near-misses without injury or damage
- Equipment malfunctions not affecting safety
- Deviations from procedures
- Minor incidents

These help identify trends and prevent future occurrences.

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Accountable Executive** | Ensure reporting compliance; submit TSB notifications |
| **Operations Manager** | Coordinate TC reporting; manage investigations |
| **PIC** | Report all occurrences internally; preserve evidence |
| **All Personnel** | Report any occurrence immediately |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| SMS-004-PR | Internal Reporting Procedure |
| HSE-006-PR | Incident Investigation Procedure |
| FRM-OCC | Occurrence Report Form |
| FRM-TCREP | TC Occurrence Report Template |

---

## 9. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** SMS-005 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'SMS Audit Procedure',
  'procedure',
  'SMS-006-PR',
  'Safety',
  '# AERIA SOLUTIONS LTD

# SMS AUDIT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | SMS-006-PR |
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

This procedure describes the internal audit process for verifying SMS effectiveness and compliance.

---

## 2. Scope

This procedure applies to:
- Internal SMS audits
- Operational compliance audits
- Preparation for external audits

---

## 3. References

| Reference | Description |
|:----------|:------------|
| SMS-001 | Safety Management System Manual |
| CAR 901.218 | SMS requirements |
| Energy Safety Canada | SECOR audit requirements |

---

## 4. Procedure

### 4.1 Audit Schedule

| Audit Type | Frequency |
|:-----------|:----------|
| Full SMS audit | Annual |
| Operational audit | Annual |
| Focus audit (specific area) | As needed |
| Pre-certification audit | Before external audits |

Operations Manager maintains audit schedule.

### 4.2 Audit Planning

**Before audit:**
1. Define audit scope
2. Develop audit checklist
3. Schedule audit dates
4. Notify affected personnel
5. Gather reference documents
6. Arrange access/logistics

### 4.3 Audit Checklist

SMS audit covers:
- Safety policy and objectives
- Accountability structure
- Hazard identification processes
- Risk assessment practices
- Safety reporting system
- Investigation processes
- Change management
- Safety training
- Safety communication
- Management review
- Documentation and records
- Continuous improvement

### 4.4 Conducting the Audit

**Methods:**
- Document review
- Personnel interviews
- Observation of activities
- Records sampling
- Process verification

**Auditor approach:**
- Objective and impartial
- Evidence-based findings
- Constructive tone
- Focus on system effectiveness

### 4.5 Audit Findings

**Finding categories:**

| Category | Definition |
|:---------|:-----------|
| **Non-Conformance** | Failure to meet regulatory requirement |
| **Deficiency** | Gap in procedure or implementation |
| **Observation** | Area for improvement; not a failure |
| **Positive Finding** | Example of good practice |

### 4.6 Audit Report

Report includes:
- Audit date and scope
- Auditor(s)
- Areas reviewed
- Findings by category
- Positive observations
- Recommendations
- Corrective action requirements

### 4.7 Corrective Actions

For each finding:
1. Identify root cause
2. Develop corrective action
3. Assign responsibility
4. Set target date
5. Implement correction
6. Verify effectiveness
7. Close finding

**Timelines:**

| Finding Type | Correction Timeline |
|:-------------|:-------------------|
| Non-Conformance | Within 30 days |
| Deficiency | Within 60 days |
| Observation | Within 90 days |

### 4.8 Follow-Up

Operations Manager:
- Tracks all corrective actions
- Verifies completion
- Verifies effectiveness
- Reports to Accountable Executive
- Updates status in audit tracking

### 4.9 External Audit Preparation

Before external audits (TC, SECOR):
1. Review previous audit findings
2. Verify all corrective actions closed
3. Conduct pre-audit internal review
4. Ensure documentation current
5. Brief personnel
6. Prepare logistics

### 4.10 Audit Records

Retain:
- Audit reports: 5 years
- Corrective action records: 5 years
- Supporting evidence: 3 years

---

## 5. Auditor Qualifications

Internal auditors should:
- Understand SMS principles
- Know regulatory requirements
- Be objective and impartial
- Have audit training (preferred)
- Not audit their own work

For small organizations, Operations Manager may audit with AE review.

---

## 6. Management Review

Audit results are input to management review:
- Quarterly: Summary of findings
- Annual: Full audit results and trends

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| SMS-001 | Safety Management System Manual |
| FRM-AUDIT | Audit Checklist |
| FRM-CAR | Corrective Action Record |

---

**Document Control:** SMS-006-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Scheduled Maintenance Procedure',
  'procedure',
  'MCM-001-PR',
  'Maintenance',
  '# AERIA SOLUTIONS LTD

# SCHEDULED MAINTENANCE PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | MCM-001-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Person Responsible for Maintenance (PRM) |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes scheduled maintenance activities for RPAS to ensure continued airworthiness.

---

## 2. Scope

This procedure applies to:
- All aircraft in Aeria fleet
- Time and cycle-based maintenance
- PRM and authorized personnel

---

## 3. References

| Reference | Description |
|:----------|:------------|
| MCM-001 | Maintenance Control Manual |
| Aircraft Manuals | Manufacturer requirements |

---

## 4. Procedure

### 4.1 Maintenance Schedule

PRM maintains maintenance schedule tracking:
- Aircraft identification
- Maintenance item
- Interval (hours, cycles, calendar)
- Last performed
- Next due

### 4.2 Standard Intervals

| Item | Interval | Notes |
|:-----|:---------|:------|
| Visual inspection | Every 10 hours | All external components |
| Motor check | Every 25 hours | Bearings, heat, debris |
| Full inspection | Every 50 hours or 6 months | Comprehensive check |
| Firmware review | Quarterly | Check for updates |
| Propeller replacement | Per manufacturer | Or if damaged |
| Battery assessment | Monthly | Capacity, condition |

Adjust per manufacturer requirements for specific aircraft.

### 4.3 Pre-Maintenance

**Before maintenance:**
1. Remove aircraft from service
2. Gather tools and documentation
3. Review maintenance requirements
4. Ensure clean work area
5. Ground aircraft (remove batteries)

### 4.4 Inspection Procedures

#### 10-Hour Visual Inspection
| Component | Check |
|:----------|:------|
| Airframe | Cracks, damage, fasteners |
| Arms | Damage, fold mechanism |
| Props | Chips, cracks, balance |
| Motors | Debris, damage |
| Landing gear | Damage, security |
| Antennas | Damage, orientation |
| Cables | Routing, damage, connections |

#### 25-Hour Motor Inspection
| Check | Method |
|:------|:-------|
| Visual | Debris, damage |
| Rotation | Smooth, no grinding |
| Temperature (after run) | Compare motors |
| Mounts | Security, cracking |
| Wiring | Connection security |

#### 50-Hour Full Inspection
All above plus:
| Component | Check |
|:----------|:------|
| Flight controller | Mounting, connections |
| GPS | Mounting, antenna |
| ESCs | Connections, condition |
| Internal wiring | Chafing, security |
| All screws/fasteners | Torque check |
| Firmware | Version check |

### 4.5 Maintenance Tasks

| Task | Procedure |
|:-----|:----------|
| Propeller replacement | Remove old; install correct rotation; verify security |
| Motor replacement | Disconnect; remove; install matching motor; connect; test |
| Firmware update | Follow manufacturer procedure; test all functions after |
| Calibration | Compass, IMU per manufacturer |
| Cleaning | Remove debris; clean lenses; check vents |

### 4.6 Documentation

**Record:**
- Date
- Aircraft identification
- Maintenance performed
- Time/cycles at maintenance
- Parts replaced (with details)
- Tests performed
- Personnel performing work
- PRM sign-off

**Use:** FRM-MAINT Maintenance Log Form

### 4.7 Quality Check

After maintenance:
- Visual check of work performed
- Verify all fasteners secure
- Verify all connections made
- No tools or materials left in aircraft
- Test systems before returning to service

### 4.8 Return to Service

PRM verifies:
- All scheduled items completed
- Documentation complete
- No outstanding defects
- Aircraft ready for service

Sign off in maintenance log.

---

## 5. Maintenance Tracking

PRM tracks:
- Hours/cycles per aircraft
- Maintenance completed
- Upcoming maintenance
- Parts usage

Review schedule monthly; project upcoming needs.

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001 | Maintenance Control Manual |
| MCM-002-PR | Unscheduled Maintenance Procedure |
| FRM-MAINT | Maintenance Log Form |
| Aircraft Manuals | Manufacturer procedures |

---

**Document Control:** MCM-001-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Maintenance Control Manual',
  'guide',
  'MCM-001',
  'Maintenance',
  '# AERIA SOLUTIONS LTD

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
| v5.0 | March 11, 2026 | Complete program rebuild | Dustin Wales |

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
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Unscheduled Maintenance Procedure',
  'procedure',
  'MCM-002-PR',
  'Maintenance',
  '# AERIA SOLUTIONS LTD

# UNSCHEDULED MAINTENANCE PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | MCM-002-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Person Responsible for Maintenance (PRM) |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to address unscheduled maintenance including defect correction and repairs.

---

## 2. Scope

This procedure applies to:
- Defect correction
- Damage repair
- Component replacement
- Troubleshooting

---

## 3. References

| Reference | Description |
|:----------|:------------|
| MCM-001 | Maintenance Control Manual |
| Aircraft Manuals | Manufacturer procedures |

---

## 4. Procedure

### 4.1 Defect Identification

Defects may be identified through:
- Pre-flight inspection
- In-flight observation
- Post-flight inspection
- System alerts/warnings
- Ground checks

### 4.2 Defect Reporting

**When defect found:**
1. Ground aircraft (if airworthiness affected)
2. Report to PRM immediately
3. Document on defect log (FRM-DEFECT)
4. Include:
   - Date and time
   - Aircraft identification
   - Description of defect
   - How discovered
   - Reporter name

### 4.3 Defect Assessment

PRM assesses:
- Nature and extent of defect
- Airworthiness impact
- Safety implications
- Repair requirements

**Classifications:**

| Category | Description | Action |
|:---------|:------------|:-------|
| **No-Fly** | Affects safe flight | Ground until corrected |
| **Monitor** | Minor; monitor for degradation | May fly with conditions |
| **Defer** | Cosmetic; no safety impact | Schedule correction |

### 4.4 Repair Planning

For each repair:
1. Identify repair method
2. Obtain required parts
3. Review manufacturer guidance
4. Assign personnel
5. Schedule repair
6. Prepare documentation

### 4.5 Repair Procedures

**General repair steps:**

| Step | Action |
|:-----|:-------|
| 1 | Remove aircraft from service |
| 2 | Remove batteries, secure aircraft |
| 3 | Document existing condition (photos) |
| 4 | Perform repair per manufacturer guidance |
| 5 | Use approved parts |
| 6 | Inspect completed repair |
| 7 | Perform functional test |
| 8 | Document work performed |
| 9 | Return to service (PRM approval) |

### 4.6 Common Repairs

| Issue | Repair Procedure |
|:------|:-----------------|
| Damaged propeller | Replace with correct propeller; verify rotation |
| Motor issue | Replace motor; calibrate ESC; test |
| Broken arm | Assess damage; replace arm or entire frame |
| GPS issue | Troubleshoot; replace unit if defective |
| ESC failure | Replace ESC; calibrate; test |
| Damaged landing gear | Replace leg; verify stability |
| Loose connections | Reseat; verify; test |

### 4.7 Parts Replacement

When replacing parts:
- Use OEM or approved equivalent parts
- Document part number and source
- Record serial numbers (where applicable)
- Verify correct installation
- Update configuration records

### 4.8 Testing After Repair

After any repair:
1. Visual inspection of repair
2. System power-up test
3. Control response test
4. Motor run test (if applicable)
5. Test flight (if significant repair)

**Test flight protocol:**
- Controlled environment
- Short duration
- Verify all functions
- Observe for anomalies

### 4.9 Documentation

**Document on FRM-MAINT:**
- Date of repair
- Description of defect
- Repair performed
- Parts used
- Tests performed
- Personnel performing work
- PRM sign-off

**Close defect log entry** referencing maintenance record.

### 4.10 Return to Service

PRM verifies:
- Repair complete and correct
- Testing completed successfully
- Documentation complete
- No other outstanding defects
- Aircraft serviceable

Sign off in maintenance log.

---

## 5. Beyond Capability Repairs

If repair beyond capability:
- Contact manufacturer
- Send to authorized service center
- Document all communications
- Track until resolved

---

## 6. Trend Tracking

PRM tracks:
- Common defects by aircraft
- Repeat defects
- Part failures
- Environmental factors

Use trends to:
- Adjust scheduled maintenance
- Identify systemic issues
- Inform procurement decisions

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001 | Maintenance Control Manual |
| MCM-001-PR | Scheduled Maintenance Procedure |
| FRM-DEFECT | Defect Log |
| FRM-MAINT | Maintenance Log Form |

---

**Document Control:** MCM-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Pre Flight Inspection Procedure',
  'procedure',
  'MCM-003-PR',
  'Maintenance',
  '# AERIA SOLUTIONS LTD

# PRE-FLIGHT INSPECTION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | MCM-003-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Person Responsible for Maintenance (PRM) |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes the pre-flight inspection requirements to verify aircraft airworthiness before each flight.

---

## 2. Scope

This procedure applies to:
- All flights
- All aircraft types
- PICs performing inspections

---

## 3. References

| Reference | Description |
|:----------|:------------|
| MCM-001 | Maintenance Control Manual |
| OPS-002-PR | Pre-Flight Procedure |
| Aircraft Manuals | Manufacturer checklists |

---

## 4. Procedure

### 4.1 General Requirements

**Pre-flight inspection shall be performed:**
- Before the first flight of each day
- After battery changes
- After any incident or hard landing
- After transport
- Anytime aircraft may have been affected

**Performed by:** PIC

**Duration:** Adequate time for thorough inspection

### 4.2 Inspection Environment

Perform inspection in:
- Good lighting
- Stable surface
- Clean area
- Protected from wind (for small components)

### 4.3 Visual Inspection Sequence

#### Airframe
| Item | Check |
|:-----|:------|
| Overall condition | Cracks, damage, deformation |
| Arms | Damage, fold locks (if applicable) |
| Body | Cracks, mounting holes, vents |
| Mounting screws | Present, secure |

#### Propellers
| Item | Check |
|:-----|:------|
| Each propeller | Chips, cracks, nicks |
| Balance | No significant damage affecting balance |
| Security | Tight on motor shaft |
| Orientation | Correct rotation direction |

#### Motors
| Item | Check |
|:-----|:------|
| Visual | Debris, damage |
| Bearings | Spin freely, no grinding |
| Mounting | Secure |
| Wiring | Connected, not damaged |

#### Landing Gear
| Item | Check |
|:-----|:------|
| Structure | Damage, cracks |
| Attachment | Secure |
| Feet/cushions | Present, condition |

#### Antennas
| Item | Check |
|:-----|:------|
| GPS antenna | Secure, upward facing |
| RC antennas | Secure, correct orientation |
| Telemetry | Secure |

#### Payload
| Item | Check |
|:-----|:------|
| Mount | Secure, no play |
| Gimbal | Moves freely |
| Lens | Clean, undamaged |
| Connections | Power/data connected |

### 4.4 Battery Inspection

| Item | Check |
|:-----|:------|
| Physical | No swelling, damage |
| Connectors | Clean, undamaged |
| Charge level | Adequate for mission |
| Temperature | Not cold/hot extreme |
| Installation | Correctly seated, locked |

### 4.5 Power-On System Checks

After powering aircraft:

| System | Verification |
|:-------|:-------------|
| **Controller link** | Bound, communicating |
| **Telemetry** | Displaying data |
| **GPS** | Satellites acquired, position valid |
| **Compass** | No errors, heading reasonable |
| **Battery level** | Displayed correctly |
| **RTH settings** | Home point set, altitude correct |
| **Motors** | Arm and spin briefly (safe area) |
| **Controls** | All axes respond correctly |
| **Gimbal** | Responds to control |
| **Camera** | Image displaying |

### 4.6 Control Check

With aircraft in safe position:
1. Check roll response
2. Check pitch response
3. Check yaw response
4. Check throttle response
5. Check mode switch
6. Check failsafe configured

### 4.7 No-Fly Conditions

**Do not fly if:**
- Structural damage visible
- Propeller damage beyond minor
- Motor not running smoothly
- Control issues
- Battery swelling or damage
- GPS not acquiring
- Compass errors not resolved
- Any system error not cleared
- Any doubt about airworthiness

### 4.8 Documentation

**Complete pre-flight checklist (FRM-PREFL):**
- Date and aircraft
- Items inspected
- Any issues noted
- PIC signature

**If defect found:**
- Note on checklist
- Report to PRM
- Document on defect log
- Ground aircraft if no-fly condition

### 4.9 Release to Service

PIC confirms:
- Pre-flight inspection complete
- All items satisfactory
- No outstanding defects
- Aircraft is serviceable for flight

---

## 5. Aircraft-Specific Procedures

Use manufacturer pre-flight checklists in addition to this procedure for:
- Aircraft-specific items
- Software-specific checks
- Payload-specific checks

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001 | Maintenance Control Manual |
| OPS-002-PR | Pre-Flight Procedure |
| FRM-PREFL | Pre-Flight Checklist |
| Aircraft Manuals | Manufacturer procedures |

---

**Document Control:** MCM-003-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Post Flight Inspection Procedure',
  'procedure',
  'MCM-004-PR',
  'Maintenance',
  '# AERIA SOLUTIONS LTD

# POST-FLIGHT INSPECTION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | MCM-004-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Person Responsible for Maintenance (PRM) |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes post-flight inspection requirements to identify issues that may have occurred during flight.

---

## 2. Scope

This procedure applies to:
- All flights
- All aircraft types
- PICs performing inspections

---

## 3. References

| Reference | Description |
|:----------|:------------|
| MCM-001 | Maintenance Control Manual |
| OPS-004-PR | Post-Flight Procedure |

---

## 4. Procedure

### 4.1 General Requirements

**Post-flight inspection shall be performed:**
- After each flight
- Before removing battery (initial check)
- After battery removed (detailed check)

**Performed by:** PIC

### 4.2 Immediate Post-Landing

| Step | Action |
|:-----|:-------|
| 1 | Allow props to stop completely |
| 2 | Quick visual check before approach |
| 3 | Power off systems |
| 4 | Remove battery (observe thermal caution) |
| 5 | Place in safe position |

### 4.3 Aircraft Inspection

Compare to pre-flight condition:

#### Airframe
| Item | Check |
|:-----|:------|
| Overall | New damage, stress marks |
| Arms | New damage, loosening |
| Body | New marks, debris |

#### Propellers
| Item | Check |
|:-----|:------|
| Each prop | New damage from flight |
| Security | Still tight |

#### Motors
| Item | Check |
|:-----|:------|
| Temperature | Compare across motors (one unusually hot?) |
| Debris | New debris accumulation |
| Sound | Any unusual sounds during shutdown |

#### Landing Gear
| Item | Check |
|:-----|:------|
| Condition | Damage from landing |

#### Payload
| Item | Check |
|:-----|:------|
| Mount | Still secure |
| Gimbal | Operating normally |
| Lens | New contamination |

### 4.4 Battery Check

| Item | Check |
|:-----|:------|
| Physical | Any swelling (compare to pre-flight) |
| Temperature | Hot? Allow to cool |
| Remaining charge | Note for logging |

### 4.5 Data Download

If applicable:
- Download flight data
- Download telemetry logs
- Check for error logs
- Preserve data from any anomalous flight

### 4.6 Cleaning

If needed:
- Remove debris from motors
- Clean vents
- Clean payload lens
- Remove dust/dirt from body

Do not use water or harsh cleaners.

### 4.7 Defect Reporting

**If any issue found:**
1. Document on post-flight checklist
2. Report to PRM
3. Enter in defect log
4. Ground aircraft if no-fly condition

### 4.8 Documentation

**Complete post-flight checklist (FRM-POSTFL):**
- Date and aircraft
- Flight time
- Any issues noted
- Battery state
- PIC signature

**Update flight log:**
- Flight hours
- Cycles
- Any observations

### 4.9 Between Flights

If flying again:
- Address any minor issues
- Replace battery
- Perform pre-flight inspection
- May abbreviate if immediate re-flight

### 4.10 End of Day

At end of operations:
- Thorough post-flight inspection
- Clean aircraft as needed
- Proper battery storage
- Secure aircraft in case
- Complete all documentation
- Submit logs/reports

---

## 5. After Hard Landing or Incident

After any abnormal landing or incident:
1. Do not fly again without detailed inspection
2. Report to PRM
3. Photograph any damage
4. Document fully
5. Await PRM assessment

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001 | Maintenance Control Manual |
| OPS-004-PR | Post-Flight Procedure |
| MCM-002-PR | Unscheduled Maintenance Procedure |
| FRM-POSTFL | Post-Flight Checklist |

---

**Document Control:** MCM-004-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Battery Management Procedure',
  'procedure',
  'MCM-005-PR',
  'Maintenance',
  '# AERIA SOLUTIONS LTD

# BATTERY MANAGEMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | MCM-005-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Person Responsible for Maintenance (PRM) |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes the management of lithium polymer (LiPo) and lithium-ion batteries used in RPAS operations, ensuring safe handling and optimal performance.

---

## 2. Scope

This procedure applies to:
- All flight batteries
- Controller batteries
- Ground equipment batteries
- All personnel handling batteries

---

## 3. References

| Reference | Description |
|:----------|:------------|
| MCM-001 | Maintenance Control Manual |
| Manufacturer Guidelines | Battery-specific requirements |
| Transport Canada | Lithium battery transport |

---

## 4. Procedure

### 4.1 Battery Identification

Each battery shall be:
- Labeled with unique identifier
- Tracked in battery log (FRM-BATT)

Track:
- Battery ID
- Type/capacity
- Aircraft compatibility
- Acquisition date
- Cycle count
- Condition status

### 4.2 Pre-Flight Battery Check

Before flight:

| Check | Criteria |
|:------|:---------|
| Visual | No swelling, damage, or deformation |
| Connectors | Clean, undamaged |
| Charge level | Per mission requirements (typically 100%) |
| Temperature | Room temperature (15-25°C ideal) |
| Cycle count | Within service limits |

**Do not fly with:**
- Swollen battery
- Damaged casing
- Damaged connectors
- Battery that has been dropped/impacted
- Cold battery (<10°C)
- Battery beyond cycle limit

### 4.3 Charging

#### Charging Environment
- Well-ventilated area
- Away from flammable materials
- On fireproof surface (LiPo bag, ceramic tile)
- Never unattended

#### Charging Procedure

| Step | Action |
|:-----|:-------|
| 1 | Inspect battery before charging |
| 2 | Use correct charger for battery type |
| 3 | Select correct battery settings (cell count, type) |
| 4 | Connect balance lead first, then main lead |
| 5 | Select appropriate charge rate (typically 1C) |
| 6 | Monitor during charging |
| 7 | Disconnect when complete |
| 8 | Allow to cool before use |

#### Charging Parameters

| Parameter | Typical Setting |
|:----------|:----------------|
| Mode | Balance charge |
| Rate | 1C (or per manufacturer) |
| Voltage per cell | 4.2V (LiPo) |

### 4.4 Storage

#### Short-Term Storage (Days)
- Store at 40-60% charge
- Room temperature
- Away from heat sources
- Away from flammable materials
- In LiPo safe bag or case

#### Long-Term Storage (Weeks+)
- Discharge to storage voltage (3.7-3.85V per cell)
- Use storage charge function on charger
- Check monthly and recharge to storage level
- Room temperature, low humidity

#### Storage Location
- Fire-resistant container
- Away from direct sunlight
- Away from metal objects
- Secure from unauthorized access
- Not in vehicle in hot weather

### 4.5 Transport

**Ground Transport:**
- In LiPo safe bags
- Terminals protected
- Secured to prevent movement
- Not in extreme temperatures

**Air Transport:**
- Carry-on only (not checked)
- Per airline requirements
- Terminals protected
- Within allowed limits

### 4.6 Cycle Tracking

**Record for each battery:**
- Date of charge/use
- Discharge level (ending %)
- Any anomalies

**Cycle count:**
- One cycle = full charge to discharge
- Track cumulative cycles

### 4.7 Performance Monitoring

**Monitor for:**
- Reduced flight time
- Voltage sag under load
- Unbalanced cells
- Puffiness/swelling
- Heating during charge or discharge

**Action thresholds:**

| Indicator | Action |
|:----------|:-------|
| 10% reduced capacity | Flag for monitoring |
| 20% reduced capacity | Consider retirement |
| Cell imbalance >0.1V | Investigate; balance charge |
| Any swelling | Remove from service immediately |
| Excessive heat | Investigate; may retire |

### 4.8 Battery Retirement

**Retire battery when:**
- Physical damage or swelling
- Capacity reduced >20%
- Persistent cell imbalance
- Cycle limit reached (per manufacturer)
- Age limit reached (typically 2-3 years)
- Any safety concern

**Retirement procedure:**
1. Remove from service
2. Label "RETIRED - DO NOT USE"
3. Update battery log
4. Store safely until disposal
5. Dispose properly (see 4.9)

### 4.9 Disposal

**LiPo batteries are hazardous waste.**

Disposal procedure:
1. Discharge completely (use resistor/light bulb)
2. Salt water soak method (optional, controversial)
3. Take to battery recycling facility
4. Do NOT dispose in regular waste
5. Document disposal

### 4.10 Emergency - Battery Fire

**If battery smoking or on fire:**
1. Evacuate immediate area
2. Do NOT use water
3. Use ABC dry chemical extinguisher or sand
4. Allow to burn out in safe area if possible
5. Monitor for re-ignition for 30 minutes
6. Ventilate area (toxic fumes)
7. Report incident

See HSE-008-PR Spill Response Procedure.

---

## 5. Battery Log

Maintain FRM-BATT for each battery:
- Battery ID
- Type and capacity
- Purchase/first use date
- Cycle count
- Condition notes
- Retirement date (when applicable)

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001 | Maintenance Control Manual |
| FRM-BATT | Battery Log Form |
| OPS-011-PR | Emergency Procedures (RPAS) |
| HSE-008-PR | Spill Response Procedure |

---

**Document Control:** MCM-005-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'New Personnel Orientation Procedure',
  'procedure',
  'TCP-001-PR',
  'Training',
  '# AERIA SOLUTIONS LTD

# NEW PERSONNEL ORIENTATION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | TCP-001-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes the orientation process for new personnel joining Aeria Solutions.

---

## 2. Scope

This procedure applies to:
- All new employees
- Contractors performing ongoing work
- Personnel changing roles

---

## 3. References

| Reference | Description |
|:----------|:------------|
| TCP-001 | Training & Competency Program Manual |
| HSE-005 | Training & Competency Policy (HSE) |

---

## 4. Procedure

### 4.1 Pre-Arrival

Before first day:
1. Prepare orientation materials
2. Arrange workspace/equipment
3. Schedule orientation sessions
4. Notify relevant personnel
5. Prepare documentation

### 4.2 Day One - Core Orientation

| Session | Content | Duration | Delivered By |
|:--------|:--------|:---------|:-------------|
| Welcome | Introduction, overview, tour | 30 min | Operations Manager |
| Company Overview | History, services, clients, organization | 30 min | Operations Manager |
| Employment | Policies, expectations, admin matters | 30 min | Operations Manager |
| Document Access | Document system, key documents | 30 min | Operations Manager |

### 4.3 Safety Orientation

**Complete within first week:**

| Topic | Content | Approx Time |
|:------|:--------|:------------|
| Health & Safety Policy | HSE-001 review, commitment | 15 min |
| Worker Rights | HSE-002 - rights and responsibilities | 20 min |
| Hazard Assessment | FHA/FLHA process, participation | 30 min |
| Hazard Reporting | How to report hazards and concerns | 15 min |
| Emergency Procedures | Site-specific and operational | 30 min |
| First Aid | Locations, contacts | 10 min |
| PPE | Requirements, use, care | 20 min |
| Refuse Unsafe Work | Right and procedure | 15 min |
| Fit for Duty | Policy requirements | 15 min |

### 4.4 SMS Orientation

| Topic | Content | Approx Time |
|:------|:--------|:------------|
| SMS Overview | What is SMS, why it matters | 15 min |
| Safety Reporting | How to report, non-punitive policy | 20 min |
| Risk Assessment | Basic risk assessment concepts | 15 min |
| Safety Culture | Expectations, participation | 15 min |

### 4.5 Role-Specific Orientation

Based on role:

**RPAS Pilot:**
- Operations policies and procedures
- Aircraft type training
- Emergency procedures
- Documentation requirements
- Qualification requirements

**Visual Observer:**
- VO training per OPS-008-PR

**Ground Crew:**
- Site safety
- Support duties
- Equipment handling

### 4.6 Documentation Review

New personnel receive and acknowledge:
- Employee handbook (if applicable)
- Key policies relevant to role
- Safety policy (HSE-001)
- Worker rights (HSE-002)

### 4.7 Orientation Completion

**Complete orientation checklist (FRM-ORIENT):**
- Topics covered
- Dates
- Trainer signatures
- Trainee acknowledgment

**File in personnel record.**

### 4.8 Follow-Up

**Within 30 days:**
- Check-in with new personnel
- Address questions
- Verify settling in
- Additional training as needed

**Within 90 days:**
- Performance review
- Competency assessment
- Address any gaps

---

## 5. Orientation Checklist Summary

| Category | Items |
|:---------|:------|
| **Administration** | Welcome, workspace, systems access |
| **Company** | Overview, organization, culture |
| **Safety** | HSE policies, procedures, emergency |
| **SMS** | Reporting, risk assessment, culture |
| **Role-Specific** | Job duties, procedures, training |
| **Documentation** | Policy acknowledgments |

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| TCP-001 | Training & Competency Program Manual |
| HSE-001 | Health & Safety Policy Statement |
| HSE-002 | Worker Rights & Responsibilities Policy |
| FRM-ORIENT | Orientation Checklist |

---

**Document Control:** TCP-001-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Training Competency Program Manual',
  'guide',
  'TCP-001',
  'Training',
  '# AERIA SOLUTIONS LTD

# TRAINING & COMPETENCY PROGRAM MANUAL

---

| Field | Value |
|:------|:------|
| **Document Number** | TCP-001 |
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

## 1. Introduction

### 1.1 Purpose

This Training & Competency Program (TCP) Manual establishes the framework for ensuring all Aeria Solutions personnel have the knowledge, skills, and competency to perform their duties safely and effectively.

### 1.2 Scope

This program applies to:
- All Aeria Solutions employees
- Contractors performing operational work
- All roles: pilots, visual observers, ground crew, management

### 1.3 Regulatory Basis

| Regulation | Requirement |
|:-----------|:------------|
| CAR 901.54-901.66 | Pilot training and certification |
| Standard 922.01 | Training requirements |
| BC OHS Regulation | Worker training requirements |
| Energy Safety Canada | SECOR Element E - Training |

---

## 2. Training Framework

### 2.1 Training Types

| Type | Description |
|:-----|:------------|
| **Orientation** | New personnel introduction |
| **Initial** | Role-specific training before performing duties |
| **Recurrent** | Periodic refresher training |
| **Upgrade** | Training for new roles or responsibilities |
| **Remedial** | Training to address deficiencies |

### 2.2 Training Categories

| Category | Content |
|:---------|:--------|
| **Safety** | SMS, HSE, emergency procedures |
| **Operations** | RPAS operations, procedures |
| **Technical** | Aircraft systems, maintenance |
| **Regulatory** | CARs, company policies |
| **Role-Specific** | Job-specific skills |

---

## 3. Training Requirements by Role

### 3.1 All Personnel

| Training | Initial | Recurrent |
|:---------|:--------|:----------|
| Company orientation | Yes | — |
| Safety Management System | Yes | Annual |
| Hazard assessment | Yes | Annual |
| Emergency procedures | Yes | Annual |
| Fit for duty | Yes | As needed |

### 3.2 RPAS Pilot

| Training | Initial | Recurrent |
|:---------|:--------|:----------|
| Pilot certificate (TC) | Required | Per TC requirements |
| Company operations training | Yes | Annual |
| Aircraft type training | Per type | As needed |
| Emergency procedures | Yes | Annual |
| BVLOS (if authorized) | Yes | Annual |

### 3.3 Visual Observer

| Training | Initial | Recurrent |
|:---------|:--------|:----------|
| VO training | Yes | Annual |
| Emergency procedures | Yes | Annual |
| Communication protocol | Yes | Annual |

### 3.4 Ground Crew

| Training | Initial | Recurrent |
|:---------|:--------|:----------|
| Safety orientation | Yes | Annual |
| Role-specific duties | Yes | As needed |
| Emergency procedures | Yes | Annual |

### 3.5 Operations Manager

| Training | Initial | Recurrent |
|:---------|:--------|:----------|
| All PIC training | Yes | Per PIC requirements |
| SMS management | Yes | Annual |
| Regulatory compliance | Yes | Annual |
| Investigation | Yes | As needed |

---

## 4. Orientation Program

### 4.1 New Personnel Orientation

All new personnel complete orientation including:

| Topic | Content | Duration |
|:------|:--------|:---------|
| Company overview | History, services, organization | 30 min |
| Safety program | SMS, HSE, safety culture | 1 hour |
| Policies | Key policies, document access | 1 hour |
| Rights and responsibilities | Worker rights, reporting | 30 min |
| Emergency procedures | Site and operational | 30 min |
| Tour and introductions | Facilities, key personnel | 30 min |

See TCP-001-PR New Personnel Orientation Procedure.

### 4.2 Site Orientation

Before working at new sites:
- Site-specific hazards
- Emergency procedures
- Client requirements
- Communication protocols

---

## 5. Competency Assessment

### 5.1 Methods

| Method | Use |
|:-------|:----|
| Written test | Knowledge assessment |
| Practical demonstration | Skill assessment |
| Observation | On-the-job assessment |
| Checklist | Systematic competency check |
| Verbal assessment | Knowledge verification |

### 5.2 Competency Standards

For each role/task:
- Define required competencies
- Establish assessment criteria
- Document assessment results
- Track competency status

### 5.3 Reassessment

Reassess competency when:
- Currency lapses
- Performance issues identified
- Procedures change significantly
- After incidents involving the role

---

## 6. Training Delivery

### 6.1 Methods

| Method | Use |
|:-------|:----|
| Classroom | Group instruction |
| One-on-one | Individual coaching |
| Self-study | Documents, online modules |
| Practical | Hands-on training |
| On-the-job | Supervised work |

### 6.2 Instructors

Training delivered by:
- Operations Manager
- Chief Flight Instructor (flight training)
- Subject matter experts
- External providers (approved)

### 6.3 Training Materials

Maintain:
- Training syllabi
- Lesson plans
- Assessment tools
- Reference materials

---

## 7. Training Records

### 7.1 Required Records

For each person:
- Training completed (date, content, duration)
- Instructor/trainer
- Assessment results
- Certificates/qualifications
- Currency status

### 7.2 Record Format

Use FRM-TREC Training Record Form or equivalent system.

### 7.3 Retention

| Record | Retention |
|:-------|:----------|
| Training records | Employment + 3 years |
| Certificates (copies) | Current + 2 years |
| Assessment records | 5 years |

---

## 8. Currency and Recency

### 8.1 Currency Requirements

| Role/Skill | Currency |
|:-----------|:---------|
| PIC (per aircraft type) | 1 flight per 90 days |
| BVLOS | 1 BVLOS flight per 90 days |
| Visual Observer | Annual recurrent training |
| Emergency procedures | Annual recurrent training |

### 8.2 Currency Tracking

Operations Manager tracks:
- Expiring certifications
- Recurrent training due
- Currency status
- Upcoming requirements

### 8.3 Lapsed Currency

If currency lapses:
- Cannot perform role until restored
- Complete refresher training
- Demonstrate competency
- Document restoration

---

## 9. Training Program Management

### 9.1 Annual Training Plan

Operations Manager develops annual plan:
- Scheduled training events
- Certification renewals
- Recurrent training dates
- Resource requirements

### 9.2 Training Effectiveness

Evaluate training by:
- Assessment results
- On-the-job performance
- Incident/occurrence data
- Feedback from personnel

### 9.3 Continuous Improvement

Improve training based on:
- Evaluation results
- Regulatory changes
- New equipment/procedures
- Lessons learned

---

## 10. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| TCP-001-PR | New Personnel Orientation Procedure |
| TCP-002-PR | Training Delivery Procedure |
| TCP-003-PR | Competency Assessment Procedure |
| TCP-004-PR | Training Records Procedure |
| OPS-007-PR | Pilot Training Procedure |
| OPS-008-PR | Visual Observer Training Procedure |
| FRM-TREC | Training Record Form |

---

## 11. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** TCP-001 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Training Delivery Procedure',
  'procedure',
  'TCP-002-PR',
  'Training',
  '# AERIA SOLUTIONS LTD

# TRAINING DELIVERY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | TCP-002-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to plan, deliver, and evaluate training.

---

## 2. Scope

This procedure applies to all training delivered by Aeria Solutions.

---

## 3. Procedure

### 3.1 Training Planning

1. Identify training need
2. Define learning objectives
3. Develop training content
4. Select delivery method
5. Schedule training
6. Notify participants
7. Prepare materials

### 3.2 Delivery Methods

| Method | Use |
|:-------|:----|
| Classroom | Group knowledge transfer |
| Practical | Hands-on skill development |
| Self-study | Individual reading/review |
| On-the-job | Supervised practice |
| Online | Remote or flexible delivery |

### 3.3 Training Conduct

- Follow prepared content
- Engage participants
- Check understanding
- Allow questions
- Adapt to audience

### 3.4 Assessment

- Assess learning per objectives
- Document results
- Provide feedback
- Address gaps

### 3.5 Documentation

Record on FRM-TREC:
- Training delivered
- Date and duration
- Participants
- Trainer
- Assessment results

---

## 4. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| TCP-001 | Training & Competency Program Manual |
| TCP-003-PR | Competency Assessment Procedure |
| FRM-TREC | Training Record Form |

---

**Document Control:** TCP-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Competency Assessment Procedure',
  'procedure',
  'TCP-003-PR',
  'Training',
  '# AERIA SOLUTIONS LTD

# COMPETENCY ASSESSMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | TCP-003-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to assess and document competency.

---

## 2. Scope

This procedure applies to all competency assessments.

---

## 3. Procedure

### 3.1 Assessment Methods

| Method | Use |
|:-------|:----|
| Written test | Knowledge assessment |
| Practical demonstration | Skill assessment |
| Observation | On-the-job competency |
| Verbal questioning | Knowledge verification |

### 3.2 Assessment Process

1. Define competencies to assess
2. Select assessment method
3. Prepare assessment tools
4. Conduct assessment
5. Evaluate results
6. Document outcome
7. Provide feedback
8. Address gaps if needed

### 3.3 Standards

| Result | Action |
|:-------|:-------|
| Competent | Document; authorize for role |
| Not yet competent | Additional training; reassess |
| Failed | Review cause; training plan; reassess |

### 3.4 Documentation

Record:
- Person assessed
- Competencies assessed
- Assessment method
- Results
- Assessor
- Date
- Follow-up required

### 3.5 Reassessment

Reassess when:
- Currency lapses
- Performance concerns
- Procedure changes
- After incidents

---

## 4. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| TCP-001 | Training & Competency Program Manual |
| FRM-COMPCHECK | Competency Check Form |

---

**Document Control:** TCP-003-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Training Records Procedure',
  'procedure',
  'TCP-004-PR',
  'Training',
  '# AERIA SOLUTIONS LTD

# TRAINING RECORDS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | TCP-004-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes requirements for training records management.

---

## 2. Scope

This procedure applies to all training records.

---

## 3. Procedure

### 3.1 Required Records

For each person maintain:
- Training completed
- Certificates held (copies)
- Competency assessments
- Currency status
- Authorizations

### 3.2 Record Content

Each training record includes:
- Person name
- Training topic
- Date and duration
- Trainer
- Assessment result
- Signature/acknowledgment

### 3.3 File Organization

Organize by:
- Employee name
- Chronological within file
- Current certifications separate

### 3.4 Retention

| Record | Retention |
|:-------|:----------|
| Training records | Employment + 3 years |
| Certificate copies | Current + 2 years |
| Competency records | 5 years |

### 3.5 Access

- Operations Manager maintains records
- Personnel may access own records
- Regulatory access as required

### 3.6 Currency Tracking

Track and notify:
- Expiring certifications (30 days notice)
- Recurrent training due
- Currency requirements

---

## 4. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| TCP-001 | Training & Competency Program Manual |
| ADM-001-PR | Record Retention Procedure |
| FRM-TREC | Training Record Form |

---

**Document Control:** TCP-004-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Crew Coordination Procedure',
  'procedure',
  'CRM-001-PR',
  'Training',
  '# AERIA SOLUTIONS LTD

# CREW COORDINATION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | CRM-001-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes crew coordination practices for RPAS operations.

---

## 2. Scope

This procedure applies to all multi-crew operations.

---

## 3. Procedure

### 3.1 Pre-Operation Briefing

PIC briefs crew on:

| Topic | Content |
|:------|:--------|
| Mission | Objective, duration, area |
| Roles | Each person''s duties |
| Hazards | Key hazards from FLHA |
| Communication | Calls, channels |
| Emergency | Procedures, rally point |
| Questions | Confirm understanding |

All crew acknowledge briefing.

### 3.2 Standard Calls

| Call | Meaning |
|:-----|:--------|
| "Traffic, [dir]" | Other aircraft seen |
| "People, [dir]" | Person entering area |
| "Clear" | Area is clear |
| "Hold" | Maintain position |
| "Land" | Begin landing |
| "Land now" | Immediate landing |
| "Lost visual" | Cannot see aircraft |

### 3.3 During Operations

- Maintain communication
- Use standard calls
- Report hazards immediately
- Support PIC awareness
- Monitor for crew fatigue/issues

### 3.4 Challenge and Response

If concern about safety:
1. State concern clearly
2. State reason
3. Request action

Example: "I''m concerned about that wind gust. Should we hold position?"

### 3.5 Post-Operation Debrief

After operations:
- Review any issues
- Discuss what went well
- Discuss improvements
- Address concerns
- Document lessons learned

### 3.6 Sterile Cockpit

During critical phases:
- Focus on operation only
- No non-essential conversation
- Full attention to duties

Critical phases: Takeoff, landing, emergencies, complex maneuvers.

---

## 4. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| CRM-001 | Crew Resource Management Manual |
| OPS-003-PR | Flight Conduct Procedure |

---

**Document Control:** CRM-001-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Crew Resource Management Manual',
  'guide',
  'CRM-001',
  'Training',
  '# AERIA SOLUTIONS LTD

# CREW RESOURCE MANAGEMENT MANUAL

---

| Field | Value |
|:------|:------|
| **Document Number** | CRM-001 |
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

## 1. Introduction

### 1.1 Purpose

This Crew Resource Management (CRM) Manual establishes principles and practices for effective crew coordination, communication, and decision-making during RPAS operations.

### 1.2 What is CRM?

CRM is a set of training procedures focused on:
- Communication
- Situational awareness
- Decision making
- Teamwork
- Workload management
- Error management

Originally developed for aviation, CRM principles apply to RPAS operations where multiple crew members work together.

### 1.3 Scope

This manual applies to:
- All RPAS flight operations
- PICs and crew members
- Any multi-person operation

---

## 2. CRM Principles

### 2.1 Communication

**Effective communication:**
- Clear and concise
- Uses standard terminology
- Confirms understanding
- Questions when unclear
- Assertive when safety is at stake

**Communication barriers:**
- Hierarchy (fear of speaking up)
- Distraction
- Assumptions
- Technical jargon
- Stress

### 2.2 Situational Awareness

**Maintaining awareness of:**
- Aircraft state and position
- Environment (weather, obstacles, traffic)
- Mission status
- Crew status
- Available resources

**Threats to situational awareness:**
- Task fixation
- Fatigue
- Complacency
- High workload
- Distraction

### 2.3 Decision Making

**Structured approach:**
1. Identify the problem
2. Gather information
3. Consider options
4. Evaluate options
5. Select action
6. Monitor results

**Time-critical decisions:**
- Act on available information
- Use checklists and procedures
- Default to safe option

### 2.4 Teamwork

**Effective teams:**
- Clear roles and responsibilities
- Mutual support
- Shared mental model
- Backup behavior
- Constructive conflict resolution

### 2.5 Workload Management

**Managing workload:**
- Prioritize tasks (aviate, navigate, communicate)
- Distribute tasks appropriately
- Recognize overload
- Accept help
- Use automation appropriately

### 2.6 Error Management

**Approach to errors:**
- Errors are inevitable
- Errors can be trapped
- Errors are learning opportunities
- Blame-free reporting
- System improvement focus

---

## 3. CRM in RPAS Operations

### 3.1 PIC Role

The PIC:
- Commands the operation
- Makes final decisions
- Delegates tasks
- Maintains overview
- Encourages input

### 3.2 Visual Observer Role

The VO:
- Maintains visual contact
- Provides information
- Speaks up about hazards
- Supports PIC awareness
- Follows communication protocol

### 3.3 Crew Coordination

**Briefings:**
- Pre-flight briefing covers mission, roles, hazards
- All crew acknowledge understanding
- Questions encouraged

**During operations:**
- Standard calls
- Position reports
- Hazard alerts
- Status updates

**Post-flight:**
- Debrief any issues
- Discuss improvements
- Share observations

### 3.4 Authority Gradient

Balance needed between:
- PIC authority (necessary for command)
- Open communication (necessary for safety)

**Too steep:** Crew won''t speak up
**Too flat:** Unclear leadership

**Optimal:** Clear command + encouraged input

---

## 4. Human Factors

### 4.1 Fatigue

**Effects:**
- Impaired judgment
- Slowed reactions
- Poor communication
- Reduced situational awareness

**Management:**
See HSE-010 Fatigue Management Policy

### 4.2 Stress

**Acute stress effects:**
- Tunnel vision
- Rushed decisions
- Communication breakdown
- Error increase

**Chronic stress effects:**
- Burnout
- Poor judgment
- Health effects

### 4.3 Complacency

**Risk factors:**
- Routine operations
- High experience
- Good safety record
- Boredom

**Mitigation:**
- Stay vigilant
- Use checklists every time
- Brief as if every flight is new
- Welcome observations from others

### 4.4 Distraction

**Common distractions:**
- Personal devices
- Conversation
- Client interaction
- Equipment issues
- Environment

**Mitigation:**
- Sterile cockpit concept (focus during critical phases)
- Task prioritization
- Crew support

---

## 5. Error Trapping

### 5.1 Swiss Cheese Model

Multiple barriers prevent incidents:
- Procedures
- Training
- Crew vigilance
- Equipment design
- Supervision

Each barrier has holes (weaknesses).
Incident occurs when holes align.

### 5.2 Crew Cross-Check

Crew members check each other:
- Verify checklist items
- Confirm critical actions
- Challenge if concern
- Backup if error seen

### 5.3 Challenge and Response

If concern about action:
1. State concern clearly
2. State reason
3. Request action

Example: "The altitude seems high for this area. We should verify the limit before proceeding higher."

If your concern is challenged:
1. Listen to response
2. If still concerned, state again
3. Escalate if safety issue

---

## 6. CRM Training

### 6.1 Initial Training

All flight crew receive:
- CRM principles overview
- Communication techniques
- Decision making
- Team coordination
- Fatigue management

### 6.2 Recurrent Training

Annual refresher on:
- CRM principles
- Lessons from incidents
- Scenario practice
- Human factors awareness

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| CRM-001-PR | Crew Coordination Procedure |
| CRM-002 | Fatigue Risk Management |
| HSE-010 | Fatigue Management Policy |
| OPS-003-PR | Flight Conduct Procedure |

---

## 8. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** CRM-001 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Fatigue Risk Management',
  'policy',
  'CRM-002',
  'Training',
  '# AERIA SOLUTIONS LTD

# FATIGUE RISK MANAGEMENT

---

| Field | Value |
|:------|:------|
| **Document Number** | CRM-002 |
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

This document establishes fatigue risk management principles and requirements for RPAS operations, supplementing HSE-010 Fatigue Management Policy with CRM and operational perspectives.

---

## 2. Scope

This document applies to:
- All RPAS flight operations
- PICs and crew
- Operations planning and scheduling

---

## 3. References

| Reference | Description |
|:----------|:------------|
| HSE-010 | Fatigue Management Policy |
| CRM-001 | Crew Resource Management Manual |
| HSE-013 | Fit for Duty Policy |

---

## 4. Understanding Fatigue

### 4.1 What is Fatigue?

Fatigue is physical and/or mental impairment resulting from:
- Insufficient sleep
- Extended wakefulness
- Circadian disruption (time zone, shift work)
- High workload
- Physical exertion

### 4.2 Fatigue Affects

| Function | Effect |
|:---------|:-------|
| **Judgment** | Poor decision making |
| **Reaction time** | Slowed responses |
| **Attention** | Difficulty concentrating |
| **Memory** | Forgetfulness |
| **Mood** | Irritability |
| **Communication** | Errors, poor clarity |
| **Coordination** | Physical performance |

### 4.3 Fatigue Risk in RPAS

**High-risk factors:**
- Early start times
- Long travel to sites
- Long operational days
- Multiple days without rest
- Physical work (site setup, hiking)
- Environmental stress (heat, cold)
- High-stakes missions

---

## 5. Fatigue Mitigation

### 5.1 Planning Stage

**Schedule to allow:**
- Adequate rest before operations
- Travel time not counting as work
- Rest days for multi-day projects
- Recovery time after demanding work

**Consider:**
- Start times and travel
- Expected duration
- Workload complexity
- Environmental conditions
- Crew experience level

### 5.2 Pre-Operation

**Workers:**
- Get adequate sleep (7-9 hours)
- Manage personal factors affecting sleep
- Report if not adequately rested
- Avoid alcohol 8+ hours before duty

**Supervisors:**
- Check in on crew readiness
- Observe for signs of fatigue
- Adjust plans if concerns

### 5.3 During Operations

**Self-monitor for:**
- Excessive yawning
- Heavy eyelids
- Difficulty concentrating
- Irritability
- Microsleeps

**Take action:**
- Take breaks
- Share workload
- Hydrate and eat
- Report if fatigue affecting performance
- Stop work if impaired

### 5.4 Crew Support

**Team approach:**
- Monitor each other
- Speak up if concerned about colleague
- Offer to take over tasks
- Support breaks

### 5.5 Driving

**Fatigue-related driving risks:**
- Drowsy driving is dangerous
- Similar impairment to alcohol
- Long drives after work

**Mitigate:**
- Rest before driving
- Plan breaks on long drives
- Consider overnight stay
- Share driving
- Stop if drowsy

---

## 6. Duty Limits

### 6.1 Flight Duty Limits

| Limit | Maximum |
|:------|:--------|
| Flight duty period | 14 hours |
| Flight time | 8 hours in 24 |
| Consecutive duty days | 7 |
| Minimum rest | 10 hours |

See HSE-010 for detailed limits.

### 6.2 Adjustments

**Reduce limits when:**
- Early start (<0600)
- Late finish (>2200)
- High workload
- Adverse conditions
- Worker not fully rested

---

## 7. Reporting and Response

### 7.1 Reporting Fatigue

**Workers should report:**
- If not fit for duty due to fatigue
- If fatigue develops during operations
- Concerns about schedule or workload

**No negative consequences for:**
- Reporting fatigue honestly
- Declining work due to fatigue
- Requesting schedule adjustment

### 7.2 Response to Fatigue

| Situation | Response |
|:----------|:---------|
| Worker reports not rested | Assess options; reassign or stand down |
| Fatigue during operations | Take break; reassess; stop if needed |
| Pattern of fatigue issues | Review scheduling; address root cause |

---

## 8. Education

All personnel receive training on:
- Effects of fatigue
- Personal fatigue management
- Recognizing fatigue in self and others
- Company fatigue policy
- Reporting procedures

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-010 | Fatigue Management Policy |
| HSE-013 | Fit for Duty Policy |
| CRM-001 | Crew Resource Management Manual |

---

**Document Control:** CRM-002 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

