-- Batch 6 of 8
-- Documents 101 to 120 of 155
-- Run this in Supabase SQL Editor

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Privacy Policy',
  'policy',
  'ADM-001',
  'Administrative',
  '# AERIA SOLUTIONS LTD

# PRIVACY POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | ADM-001 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Accountable Executive |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes requirements for the collection, use, and protection of personal information in accordance with applicable privacy legislation.

---

## 2. Scope

This policy applies to:
- All personal information collected by Aeria Solutions
- All personnel handling personal information
- Information about employees, clients, and third parties

---

## 3. Policy Statement

Aeria Solutions is committed to protecting the privacy of individuals whose personal information we collect and handle. We comply with the Personal Information Protection Act (PIPA) of British Columbia and other applicable privacy legislation.

---

## 4. Regulatory Framework

| Legislation | Application |
|:------------|:------------|
| BC Personal Information Protection Act (PIPA) | BC private sector |
| Personal Information Protection and Electronic Documents Act (PIPEDA) | Federal/interprovincial |
| Privacy Act | Federal government interactions |

---

## 5. Privacy Principles

### 5.1 Accountability

- Aeria Solutions is responsible for personal information under our control
- The Accountable Executive is responsible for privacy compliance
- All personnel must follow privacy requirements

### 5.2 Identifying Purposes

We collect personal information for:
- Employment and personnel management
- Client services and contracts
- Regulatory compliance
- Safety and operational requirements
- Business administration

### 5.3 Consent

- Obtain consent before collecting personal information
- Explain purpose of collection
- Consent may be express or implied depending on sensitivity
- Individuals may withdraw consent (subject to legal requirements)

### 5.4 Limiting Collection

- Collect only information necessary for identified purposes
- Collect by fair and lawful means
- Do not collect information indiscriminately

### 5.5 Limiting Use, Disclosure, and Retention

- Use information only for purposes identified
- Do not disclose without consent (except as required by law)
- Retain only as long as necessary
- Dispose of securely when no longer needed

### 5.6 Accuracy

- Keep personal information accurate and current
- Update when individuals provide new information
- Correct errors promptly

### 5.7 Safeguards

- Protect information with appropriate security
- Physical, technical, and administrative safeguards
- Level of protection appropriate to sensitivity

### 5.8 Openness

- Make privacy practices available
- Explain what information we hold
- Explain how we use and protect it

### 5.9 Individual Access

- Individuals may request access to their information
- Respond within 30 days
- Provide information in understandable form
- Correct errors if identified

### 5.10 Challenging Compliance

- Individuals may challenge our compliance
- Investigate all complaints
- Take corrective action if needed

---

## 6. Types of Information Collected

### 6.1 Employee Information

| Type | Purpose |
|:-----|:--------|
| Contact information | Employment administration |
| Employment history | Qualification verification |
| Training records | Competency management |
| Certifications | Regulatory compliance |
| Emergency contacts | Safety |
| Payroll information | Compensation |

### 6.2 Client Information

| Type | Purpose |
|:-----|:--------|
| Contact information | Service delivery |
| Site information | Operations planning |
| Contract details | Business administration |

### 6.3 Operational Data

- Flight data and logs (required by regulation)
- Imagery and survey data (client deliverables)
- Safety and incident data (regulatory requirement)

---

## 7. Data Protection

### 7.1 Electronic Information

- Access controls on systems
- Encryption for sensitive data
- Secure passwords
- Regular backups
- Secure disposal

### 7.2 Physical Information

- Locked storage for sensitive documents
- Clean desk practices
- Secure disposal (shredding)
- Limited access to files

### 7.3 Data Breach Response

If a privacy breach occurs:
1. Contain the breach
2. Assess scope and impact
3. Notify affected individuals if significant risk
4. Notify authorities if required
5. Document and review

---

## 8. RPAS Imagery and Privacy

### 8.1 Aerial Imagery Considerations

When collecting aerial imagery:
- Avoid capturing identifiable individuals when not necessary
- Be aware of private property in imagery
- Follow client data handling requirements
- Secure imagery during processing

### 8.2 Client Data

- Handle client data per contract requirements
- Return or destroy data per agreement
- Do not retain client data beyond need
- Protect during transfer

---

## 9. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Accountable Executive** | Overall privacy compliance |
| **Operations Manager** | Implement privacy practices |
| **All Personnel** | Follow privacy requirements |

---

## 10. Access Requests

To request access to personal information:
1. Submit written request to Operations Manager
2. Include identification
3. Specify information requested
4. Response within 30 days

---

## 11. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| ADM-001-PR | Privacy Procedure |
| ADM-002-PR | Record Retention Procedure |
| OPS-007 | Flight Data Recording Policy |

---

**Document Control:** ADM-001 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Record Retention Procedure',
  'procedure',
  'ADM-002-PR',
  'Administrative',
  '# AERIA SOLUTIONS LTD

# RECORD RETENTION PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | ADM-002-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to manage records through their lifecycle from creation to disposal.

---

## 2. Scope

This procedure applies to all company records.

---

## 3. Procedure

### 3.1 Record Creation

When creating records:
1. Use standard formats where available
2. Include date and author
3. Use clear naming conventions
4. File in appropriate location
5. Apply security if sensitive

**Naming conventions:**
- [Category]-[Subject]-[Date]
- Example: Flight_Log_2026-03-11

### 3.2 Record Organization

**Electronic records:**
- Use folder structure per category
- Main categories:
  - Operations (flight logs, reports)
  - Safety (incidents, assessments)
  - Training (records, certificates)
  - Personnel (employee files)
  - Finance (invoices, contracts)
  - Corporate (policies, correspondence)

**Physical records:**
- File alphabetically or chronologically
- Label clearly
- Use consistent system within category
- Index for retrieval

### 3.3 Record Storage

**Electronic:**
- Store on company systems (backed up)
- Do not store on personal devices only
- Use cloud storage for collaboration
- Back up critical records off-site

**Physical:**
- Store in filing cabinets
- Label drawers/folders
- Climate-appropriate storage
- Secure access for sensitive records

### 3.4 Record Backup

**Frequency:**
- Daily: Active working files
- Weekly: All company records
- Monthly: Full system backup

**Verification:**
- Test restore quarterly
- Verify backup completeness
- Document backup success/failure

### 3.5 Record Retrieval

When retrieving records:
1. Use index/search to locate
2. Sign out physical files if removing
3. Return to proper location
4. Maintain organization

### 3.6 Record Review

Annual record review:
1. Identify records past retention
2. Check for legal holds
3. Prepare disposal list
4. Obtain authorization
5. Execute disposal
6. Document completed disposal

### 3.7 Record Disposal

**Authorization required:**
- Operations Manager approval for routine
- Accountable Executive for significant records

**Disposal process:**
1. Verify retention period expired
2. Confirm no legal hold
3. Select disposal method
4. Execute disposal
5. Document disposal

**Disposal methods:**

| Record Type | Method |
|:------------|:-------|
| Confidential paper | Cross-cut shred |
| Non-confidential paper | Recycle |
| Electronic files | Secure delete |
| Hard drives | Physical destruction or DOD wipe |
| CDs/DVDs | Physical destruction |
| USB drives | Secure wipe or destroy |

### 3.8 Legal Hold

When notified of potential litigation or investigation:
1. Identify potentially relevant records
2. Notify all personnel who may have records
3. Suspend routine disposal
4. Preserve records in current state
5. Document hold parameters
6. Maintain until hold released

### 3.9 Retention Schedule Application

**Calculate retention date:**
- Event date + retention period = eligible disposal date
- Events: Document date, employment end, project completion, etc.

**Example calculations:**

| Record | Event | Period | Eligible Disposal |
|:-------|:------|:-------|:------------------|
| Flight log 2026-03-11 | Operation date | 10 years | March 2036 |
| Personnel file (term 2025-12-31) | Employment end | 7 years | December 2032 |
| Contract (completed 2024-06-15) | Completion | 7 years | June 2031 |

---

## 4. Specific Record Types

### 4.1 Flight Records

- Store electronically with backup
- Index by date and aircraft
- Cross-reference to personnel records
- 10-year retention from operation date

### 4.2 Personnel Files

- Physical files in locked cabinet
- Electronic backup
- Access limited to management
- Employment + 7 years retention

### 4.3 Training Records

- Organized by employee
- Electronic preferred
- Link to certificates and assessments
- Employment + 3 years retention

### 4.4 Client Records

- Per contract requirements
- Segregate by client
- Return or destroy per agreement
- Retain invoice/contract records 7 years

---

## 5. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| ADM-002 | Record Retention Policy |
| ADM-001 | Privacy Policy |
| OPS-007 | Flight Data Recording Policy |

---

**Document Control:** ADM-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Record Retention Policy',
  'policy',
  'ADM-002',
  'Administrative',
  '# AERIA SOLUTIONS LTD

# RECORD RETENTION POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | ADM-002 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes requirements for retention and disposal of company records to ensure regulatory compliance and proper document management.

---

## 2. Scope

This policy applies to all records created or maintained by Aeria Solutions Ltd.

---

## 3. Policy Statement

Aeria Solutions maintains records for periods required by regulation and business need. Records are protected during their retention period and disposed of securely when no longer required.

---

## 4. Regulatory Framework

| Regulation | Requirement |
|:-----------|:------------|
| CARs 901.65 | Flight records retention |
| BC Employment Standards Act | Employment records |
| BC Personal Information Protection Act | Personal information |
| Canada Revenue Agency | Financial records |
| WorkSafeBC | Safety records |

---

## 5. Retention Periods

### 5.1 Aviation and Operational Records

| Record Type | Retention Period |
|:------------|:-----------------|
| Flight logs | 10 years after operation |
| Aircraft technical records | Life of aircraft + 2 years |
| Maintenance records | 10 years |
| Pilot qualification records | Employment + 3 years |
| SFOC/authorizations | 10 years |
| Occurrence reports | 10 years |
| Risk assessments | 10 years |

### 5.2 Safety Records

| Record Type | Retention Period |
|:------------|:-----------------|
| Incident/accident reports | 10 years |
| Investigation records | 10 years |
| Hazard assessments | 5 years after superseded |
| Safety meeting minutes | 5 years |
| Safety statistics | 10 years |
| Inspection records | 5 years |

### 5.3 Training Records

| Record Type | Retention Period |
|:------------|:-----------------|
| Training records | Employment + 3 years |
| Competency assessments | 5 years |
| Certificate copies | Currency + 2 years |
| Training materials | Until superseded + 2 years |

### 5.4 Employment Records

| Record Type | Retention Period |
|:------------|:-----------------|
| Personnel files | Employment + 7 years |
| Payroll records | 7 years |
| Time records | 5 years |
| Benefits records | Employment + 7 years |

### 5.5 Financial Records

| Record Type | Retention Period |
|:------------|:-----------------|
| Tax returns | 7 years |
| Financial statements | 7 years |
| Invoices | 7 years |
| Contracts | Completion + 7 years |
| Insurance records | Policy end + 7 years |

### 5.6 Corporate Records

| Record Type | Retention Period |
|:------------|:-----------------|
| Incorporation documents | Permanent |
| Minutes and resolutions | Permanent |
| RPOC and certificates | Permanent |
| Policies (superseded) | 10 years |
| Correspondence (significant) | 7 years |

---

## 6. Record Storage

### 6.1 Electronic Records

- Store on backed-up systems
- Use access controls
- Maintain organization/indexing
- Ensure format remains readable

### 6.2 Physical Records

- Store in appropriate environment
- Protect from damage
- Organize for retrieval
- Secure sensitive documents

### 6.3 Backup Requirements

- Regular backups of electronic records
- Off-site backup for critical records
- Test restoration periodically
- Document backup procedures

---

## 7. Record Disposal

### 7.1 Authorization

Records may only be disposed when:
- Retention period has expired
- No ongoing legal hold
- Disposal approved by Operations Manager

### 7.2 Disposal Methods

| Record Type | Disposal Method |
|:------------|:----------------|
| Paper (confidential) | Shred |
| Paper (non-confidential) | Recycle |
| Electronic | Secure deletion |
| Media | Physical destruction |

### 7.3 Documentation

Document disposal:
- Records disposed
- Disposal date
- Disposal method
- Person authorizing

---

## 8. Legal Hold

When litigation or investigation is anticipated:
- Preserve all relevant records
- Suspend normal disposal
- Notify affected personnel
- Document hold parameters
- Release only when authorized

---

## 9. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Operations Manager** | Overall record management |
| **All Personnel** | Follow retention requirements |
| **Accountable Executive** | Authorize disposal of significant records |

---

## 10. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| ADM-001 | Privacy Policy |
| ADM-001-PR | Record Retention Procedure |
| OPS-007 | Flight Data Recording Policy |

---

**Document Control:** ADM-002 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Disciplinary Procedure',
  'procedure',
  'ADM-003-PR',
  'Administrative',
  '# AERIA SOLUTIONS LTD

# DISCIPLINARY PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | ADM-003-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to address conduct and performance concerns through progressive discipline.

---

## 2. Scope

This procedure applies to all disciplinary matters.

---

## 3. Procedure

### 3.1 Identifying Concerns

When concern identified:
1. Document specific behavior/issue
2. Note dates and circumstances
3. Gather any supporting information
4. Determine category (performance/conduct)
5. Assess severity

### 3.2 Investigation (if needed)

For significant concerns:
1. Notify individual of concern
2. Conduct interviews
3. Review relevant records
4. Document findings
5. Determine facts
6. Make recommendation

**During investigation:**
- Maintain confidentiality
- Be objective
- Gather facts before conclusions
- Document all steps

### 3.3 Progressive Discipline Steps

**Step 1: Informal Discussion**
1. Meet privately with employee
2. Explain specific concern
3. Listen to their perspective
4. Clarify expectations
5. Offer support
6. Document conversation (notes in file)

**Step 2: Verbal Warning**
1. Meet privately with employee
2. State this is a formal verbal warning
3. Explain specific issue
4. Reference any prior discussions
5. State expected behavior
6. Outline consequences if continues
7. Document in personnel file

**Step 3: Written Warning**
1. Prepare written warning document
2. Meet with employee
3. Review document together
4. Explain expectations and timeline
5. Allow employee response
6. Obtain signature (acknowledgment)
7. File in personnel record
8. Set follow-up date

**Step 4: Final Written Warning**
1. Prepare final warning document
2. Meet with employee
3. Clearly state final warning status
4. Review pattern/issues
5. State termination will follow if repeated
6. Create improvement plan with specifics
7. Obtain signature
8. File in personnel record
9. Set review dates

**Step 5: Termination**
1. Gather documentation
2. Consult with Accountable Executive
3. Prepare termination letter
4. Meet with employee
5. Explain decision
6. Provide written notice
7. Arrange return of property
8. Process final pay per Employment Standards

### 3.4 Written Warning Content

Include in written warnings:
- Employee name and position
- Date
- Description of specific incidents/concerns
- Reference to prior warnings
- Company policy/standard violated
- Expected behavior
- Timeline for improvement
- Consequences if not corrected
- Support available
- Signature lines

### 3.5 Serious Misconduct

For serious misconduct, progressive steps may be bypassed:

1. Assess severity of misconduct
2. Investigate facts
3. Consider administrative leave during investigation
4. Consult with Accountable Executive
5. If termination warranted, proceed to Step 5
6. Document decision and rationale

**Examples of serious misconduct:**
- Safety violations creating imminent danger
- Falsification of records
- Theft, fraud, dishonesty
- Violence or credible threats
- Working while impaired
- Harassment
- Gross insubordination

### 3.6 Employee Response

At each step, employee may:
- Provide their perspective
- Present relevant information
- Have time to respond (if requested)
- Appeal decision (per policy)

### 3.7 Appeal Process

Employee appeal process:
1. Submit written appeal within 5 business days
2. Address to Accountable Executive
3. Include:
   - Decision being appealed
   - Basis for appeal
   - Supporting information
4. Accountable Executive reviews
5. May interview employee and others
6. Written decision within 10 business days
7. Decision is final

### 3.8 Documentation and Records

**Maintain documentation of:**
- All warnings issued
- Investigation notes
- Employee responses
- Meeting notes
- Appeal and outcome

**Retention:**
- Disciplinary records: Employment + 7 years

---

## 4. Special Considerations

### 4.1 Performance vs. Conduct

**Performance issues:**
- Focus on coaching
- Provide training if skill gap
- Set clear, measurable expectations
- Allow reasonable time to improve

**Conduct issues:**
- Focus on behavior, not person
- Reference specific policy
- Make clear expected behavior
- Progress more quickly if willful

### 4.2 Consistency

- Apply discipline consistently
- Similar situations get similar treatment
- Consider all circumstances
- Document reasoning for decisions

---

## 5. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| ADM-003 | Disciplinary Policy |
| HSE-014 | Violence & Harassment Prevention Policy |
| HSE-011-PR | Fit for Duty Procedure |
| SMS-004-PR | Internal Reporting Procedure |

---

**Document Control:** ADM-003-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'Disciplinary Policy',
  'policy',
  'ADM-003',
  'Administrative',
  '# AERIA SOLUTIONS LTD

# DISCIPLINARY POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | ADM-003 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Accountable Executive |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This policy establishes a fair and consistent approach to addressing conduct and performance issues while maintaining a safe and professional work environment.

---

## 2. Scope

This policy applies to all Aeria Solutions personnel.

---

## 3. Policy Statement

Aeria Solutions uses a progressive discipline approach to address conduct and performance concerns. The goal is to correct behavior and support improvement. For serious violations, immediate action up to and including termination may be warranted.

---

## 4. Principles

### 4.1 Fairness

- Consistent application across personnel
- Proportionate to the concern
- Opportunity to respond
- Documentation of process

### 4.2 Progressive Approach

Address issues through escalating steps when appropriate:
1. Informal discussion
2. Verbal warning
3. Written warning
4. Final written warning
5. Termination

### 4.3 Safety First

Safety violations may warrant accelerated or immediate action. Unsafe actions put lives at risk and are treated seriously.

---

## 5. Types of Concerns

### 5.1 Performance Issues

- Failure to meet job requirements
- Quality concerns
- Attendance issues
- Skill deficiencies

**Approach:** Coaching, training, clear expectations, time to improve.

### 5.2 Conduct Issues

- Policy violations
- Unprofessional behavior
- Insubordination
- Breach of confidentiality

**Approach:** Progressive discipline appropriate to severity.

### 5.3 Serious Misconduct

- Safety violations endangering life
- Falsification of records (including flight logs)
- Theft or fraud
- Violence or threats
- Impairment at work
- Harassment or discrimination
- Gross negligence

**Approach:** May warrant immediate termination without progressive steps.

---

## 6. Progressive Discipline Steps

### 6.1 Informal Discussion

- Private conversation
- Clarify expectations
- Provide support
- Document conversation (notes)

### 6.2 Verbal Warning

- Formal verbal warning
- Explain specific concern
- State expected behavior
- Outline consequences of continuation
- Document in personnel file

### 6.3 Written Warning

- Formal written warning
- Detail specific incidents
- Reference prior discussions
- Set improvement expectations and timeline
- Employee acknowledgment
- Filed in personnel record

### 6.4 Final Written Warning

- Clear statement of final warning
- Detail pattern or specific violation
- State that further issues may result in termination
- Improvement plan with specific timeline
- Employee acknowledgment
- Filed in personnel record

### 6.5 Termination

- When other steps have not resulted in improvement
- Or when misconduct warrants immediate termination
- Documentation of process followed
- Return of company property
- Final pay per employment standards

---

## 7. Investigation

For significant concerns:
1. Gather facts before action
2. Interview involved parties
3. Review relevant records
4. Consider all information
5. Determine appropriate action
6. Document findings

Employee may be placed on administrative leave during investigation.

---

## 8. Employee Rights

- Right to know specific concerns
- Opportunity to respond before decision
- Right to be treated with dignity
- Right to appeal (to Accountable Executive)
- Protection from retaliation for good faith concerns

---

## 9. Documentation

All disciplinary actions documented:
- Date of incident(s)
- Description of concern
- Prior discussions/warnings
- Employee response
- Action taken
- Expectations going forward
- Signatures

---

## 10. Appeals

Employees may appeal disciplinary action:
1. Submit written appeal within 5 business days
2. Address appeal to Accountable Executive
3. Include basis for appeal
4. Review completed within 10 business days
5. Decision is final

---

## 11. Relationship to Safety Reporting

**Important:** This policy does not apply to:
- Good faith safety reporting
- Refusing unsafe work (per HSE-018)
- Reporting fatigue or fitness concerns

These are protected activities under safety management policy.

---

## 12. Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Accountable Executive** | Final authority; hear appeals |
| **Operations Manager** | Administer discipline; investigate |
| **All Personnel** | Follow policies; report concerns |

---

## 13. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| HSE-014 | Violence & Harassment Prevention Policy |
| HSE-013 | Fit for Duty Policy |
| HSE-018 | Refuse Unsafe Work Policy |
| SMS-004-PR | Internal Reporting Procedure |

---

**Document Control:** ADM-003 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-AVALANCHE Avalanche Control Log',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-BATTERY Battery Log',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-CARGO Cargo Manifest',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-COMPCHECK Competency Check Form',
  'form',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-FLHA Field Level Hazard Assessment',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-FLIGHT LOG RPAS Flight Log',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-INCIDENT Incident Report',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-INSPECTION Worksite Inspection',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-MAINT Maintenance Log',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-ORIENTATION New Personnel Orientation',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-POSTFLIGHT Post Flight Checklist',
  'form',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-PREFLIGHT Pre Flight Checklist',
  'form',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-SITESURVEY Site Survey Form',
  'form',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'FRM-TREC Training Record',
  'policy',
  NULL,
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
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

INSERT INTO documents (title, doc_type, doc_number, category, content, version, status, tags, effective_date)
VALUES (
  'QRC-AIRSPACE Airspace Quick Reference',
  'guide',
  NULL,
  'Quick Reference',
  '# QUICK REFERENCE CARD

# AIRSPACE QUICK REFERENCE

---

| **QRC Number** | QRC-AIRSPACE |
|:---------------|:--------------|
| **Version** | v5.0 |

---

## RPAS AIRSPACE RULES

### UNCONTROLLED AIRSPACE (Class G)

| Requirement | Limit |
|:------------|:------|
| Max altitude | **122m / 400ft AGL** |
| Authorization | **None required** |
| Certificate | Basic or Advanced |

### CONTROLLED AIRSPACE (Class C, D, E)

| Requirement | Details |
|:------------|:--------|
| Authorization | **Required BEFORE flight** |
| How to obtain | NAV CANADA Zone or RPAS portal |
| Certificate | Advanced certificate required |
| Notice | Apply min 14 days in advance |

---

## NAV CANADA ZONE

**Online:** navcanada.ca/RPAS

**Requirements:**
- Create account
- Select location and time
- Submit request
- Wait for authorization
- Fly only as authorized

---

## AIRSPACE CLASSES

| Class | Type | RPAS Allowed? |
|:------|:-----|:--------------|
| **A** | High-level controlled | No |
| **B** | High-level controlled | No |
| **C** | Control zone (major airport) | Authorization required |
| **D** | Control zone (smaller airport) | Authorization required |
| **E** | Low-level controlled | Authorization required |
| **F** | Restricted/Advisory | Check NOTAM |
| **G** | Uncontrolled | Yes (≤122m AGL) |

---

## DISTANCE FROM AERODROMES

### Uncontrolled Aerodromes

| Zone | Restriction |
|:-----|:------------|
| Within 3 NM | Max 200 ft AGL |
| Within 1 NM | Max 100 ft AGL |
| On aerodrome | No flight without permission |

### Controlled Aerodromes

| Zone | Restriction |
|:-----|:------------|
| Control zone | Authorization required |
| Within 5.6 km (3 NM) | Authorization usually required |

---

## HELIPORTS

| Distance | Restriction |
|:---------|:------------|
| Within 1 NM | Max 200 ft AGL |
| On heliport | No flight without permission |

---

## AUTHORIZATION PROCESS

1. **IDENTIFY** airspace using app/charts
2. **DETERMINE** authorization needed
3. **APPLY** via NAV CANADA Zone (14 days ahead)
4. **RECEIVE** authorization with conditions
5. **COMPLY** with all conditions
6. **DOCUMENT** authorization in flight log

---

## NO-FLY AREAS

**Always prohibited without special authorization:**
- Forest fires/emergency scenes
- Advertised events (concerts, sports)
- Military zones
- Active NOTAM areas
- National parks (check specific rules)
- Prisons
- Nuclear facilities

---

## CHECK BEFORE FLIGHT

1. **NAV Drone App** or equivalent
2. **Current NOTAMs**
3. **Temporary Flight Restrictions**
4. **Local hazards and restrictions**

---

## KEY CONTACTS

| Service | Contact |
|:--------|:--------|
| NAV CANADA RPAS | navcanada.ca/RPAS |
| NAV CANADA (flight info) | 1-866-992-7433 |
| Transport Canada | tc.gc.ca/RPAS |

---

## QUICK DISTANCE REFERENCE

| Distance | Meters | Feet |
|:---------|:-------|:-----|
| 1 NM | 1,852 m | 6,076 ft |
| 3 NM | 5,556 m | 18,228 ft |
| 5.6 km | 5,600 m | ~3 NM |
| 122 m | 122 m | 400 ft |

---

## IF UNCERTAIN

**When in doubt:**
- Do NOT fly
- Get authorization
- Contact NAV CANADA
- Consult Operations Manager

---

**Document Control:** QRC-AIRSPACE v5.0 | Aeria Solutions Ltd
',
  '1.0',
  'active',
  ARRAY[]::TEXT[],
  CURRENT_DATE
);

