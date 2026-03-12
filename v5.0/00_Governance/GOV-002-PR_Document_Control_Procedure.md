# AERIA SOLUTIONS LTD

# DOCUMENT CONTROL PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | GOV-002-PR |
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

This procedure provides step-by-step instructions for creating, revising, approving, distributing, and archiving controlled documents in accordance with GOV-002 Document Control Policy.

---

## 2. Scope

This procedure applies to all controlled documents within the Aeria Solutions safety and operations program.

---

## 3. References

| Doc ID | Document Title |
|:-------|:---------------|
| GOV-001 | Master Program Index |
| GOV-002 | Document Control Policy |

---

## 4. Procedure

### 4.1 Creating a New Document

**Who:** Document author (typically Operations Manager or subject matter expert)

| Step | Action |
|:-----|:-------|
| 1 | Identify the need for a new document |
| 2 | Determine document type (policy, procedure, form, etc.) |
| 3 | Assign document number per GOV-001 numbering system |
| 4 | Use the standard document template (Section 5) |
| 5 | Draft content following the standard structure |
| 6 | Include all required elements (see Section 5) |
| 7 | Submit for review and approval (see 4.3) |

---

### 4.2 Revising an Existing Document

**Who:** Document owner or designated author

| Step | Action |
|:-----|:-------|
| 1 | Identify the revision needed |
| 2 | Open the current master version |
| 3 | Make required changes |
| 4 | Update the version number: |
|   | — Minor revision: v5.0 → v5.1 |
|   | — Major revision: v5.1 → v6.0 |
|   | — Administrative fix: v5.1 → v5.1.1 |
| 5 | Update effective date to new release date |
| 6 | Update review date (typically +12 months) |
| 7 | Add entry to Amendment History table |
| 8 | Submit for approval (see 4.3) |

---

### 4.3 Approving a Document

**Who:** Approver (AE for policies, Ops Manager for procedures/forms)

| Step | Action |
|:-----|:-------|
| 1 | Review document for: |
|   | — Accuracy and completeness |
|   | — Regulatory compliance |
|   | — Consistency with other documents |
|   | — Practical usability |
| 2 | Request changes if needed; return to author |
| 3 | If approved: sign/initial approval section |
| 4 | Notify author of approval |
| 5 | Proceed to distribution (see 4.4) |

---

### 4.4 Distributing a Document

**Who:** Operations Manager or document administrator

| Step | Action |
|:-----|:-------|
| 1 | Save approved document to master location |
| 2 | Update document management system / web tool |
| 3 | Update GOV-001 Master Program Index if new document |
| 4 | Remove or archive previous version |
| 5 | Notify affected personnel of new/revised document |
| 6 | For significant changes: brief personnel at next safety meeting |

**Notification Methods:**
- Email to affected personnel
- Announcement in document management system
- Discussion at safety meeting
- Note in Lessons Learned register if revision stems from incident

---

### 4.5 Conducting Document Reviews

**Who:** Document owner

**When:** Annually, or triggered by:
- Regulatory change
- Operational change
- Incident or audit finding
- Personnel feedback

| Step | Action |
|:-----|:-------|
| 1 | Open current document |
| 2 | Review against current: |
|   | — Regulations (CARs, BC OHS) |
|   | — Operations (do we still do it this way?) |
|   | — Other documents (consistency) |
|   | — Lessons learned (any relevant incidents?) |
| 3 | If no changes needed: |
|   | — Update review date only |
|   | — Note "Annual review — no changes" in Amendment History |
| 4 | If changes needed: |
|   | — Follow revision process (4.2) |
| 5 | Document review completion |

---

### 4.6 Archiving Obsolete Documents

**Who:** Operations Manager or document administrator

| Step | Action |
|:-----|:-------|
| 1 | Move superseded document to archive folder |
| 2 | Rename with "_OBSOLETE_[date]" suffix or mark clearly |
| 3 | Retain for required period (see GOV-002 Section 5.5) |
| 4 | After retention period: may delete or continue archiving |
| 5 | Never delete documents related to open incidents or audits |

---

### 4.7 Managing Printed Copies

| Step | Action |
|:-----|:-------|
| 1 | Printed copies are uncontrolled by default |
| 2 | Footer states "Uncontrolled when printed" |
| 3 | For field kits: replace printed documents when revisions occur |
| 4 | Personnel responsible for discarding outdated printed copies |
| 5 | QRCs and checklists in field kits: review quarterly for currency |

---

## 5. Standard Document Template

### Required Elements — All Documents

```markdown
# AERIA SOLUTIONS LTD

# [DOCUMENT TITLE]

---

| Field | Value |
|:------|:------|
| **Document Number** | [XXX-000 or XXX-000-PR] |
| **Version** | v5.0 |
| **Effective Date** | [Date] |
| **Review Date** | [Date + 12 months] |
| **Document Owner** | [Role] |
| **Approved By** | [Name, Role] |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v5.0 | [Date] | [Description] | [Name] |

---

## 1. Purpose
[Why this document exists]

## 2. Scope
[Who and what it applies to]

## 3. Definitions (if needed)
[Key terms]

## 4. References
[Related regulations, documents]

## 5. [Policy Statement / Procedure Steps]
[Main content]

## 6. Roles & Responsibilities
[Who does what]

## 7. Related Documents
[Cross-references]

## 8. Approval
[Signature block]

---

**Document Control:** [Doc ID] [Version] | Aeria Solutions Ltd | Uncontrolled when printed
```

---

### Structure by Document Type

| Type | Key Sections |
|:-----|:-------------|
| **Policy** | Purpose, Scope, Policy Statement, Roles & Responsibilities |
| **Procedure** | Purpose, Scope, Step-by-step instructions with clear actions |
| **Manual** | Multiple chapters covering a complete system |
| **Form** | Title, version, fields, instructions |
| **QRC** | Title, critical info only, fits on one page |

---

## 6. Document File Naming

**Standard Format:**
```
[DOC-ID]_Document_Title.md
```

**Examples:**
- `GOV-001_Master_Program_Index.md`
- `RPAS-001-PR_Pre-Flight_Procedure.md`
- `FRM-FLHA_Field_Level_Hazard_Assessment.md`
- `QRC-001_Emergency_Procedures.md`

**Rules:**
- Use underscores between words
- No spaces in filenames
- Use document ID as prefix
- Keep titles concise

---

## 7. Version Numbering

| Change Type | Version Change | Example |
|:------------|:---------------|:--------|
| **Major** (new program, restructure) | Increment first number | v5.0 → v6.0 |
| **Minor** (content changes) | Increment second number | v5.0 → v5.1 |
| **Administrative** (typos, formatting) | Add third number | v5.1 → v5.1.1 |

---

## 8. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Document Author** | Draft content, submit for review, make revisions |
| **Document Owner** | Ensure document is current, initiate reviews |
| **Operations Manager** | Manage document system, approve procedures, coordinate distribution |
| **Accountable Executive** | Approve policies, final authority on document system |
| **All Personnel** | Use current versions, report issues, discard obsolete copies |

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| GOV-001 | Master Program Index |
| GOV-002 | Document Control Policy |
| ADM-001-PR | Record Retention Procedure |

---

## 10. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** GOV-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
