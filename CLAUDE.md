# Claude Code Project Context

> **Last Updated:** 2026-03-21
> **Working Directory:** `C:\Users\Dusti\OneDrive\Desktop\MusterApp(2)`

---

## Quick Resume Prompt

Copy and paste this to resume where you left off:

```
Resume Muster 2.0 project.

Read these files for full context:
1. CLAUDE.md - Quick context and recent work
2. MASTER_PLAN.md - Full project status, requirements, and build phases

Working directory: C:\Users\Dusti\OneDrive\Desktop\MusterApp(2)
Tech stack: React 19 + Vite + Tailwind CSS 4 + Supabase + Lucide icons

Last session completed:
- Fixed document viewer modal overlay (z-index, positioning)
- Created 4 new governance policies (GOV-006 through GOV-009)
- Created 10 new cargo delivery documents (FHA-021, forms, regulatory, QRC, guide)
- Added Amendment History sections to ALL ~180 documents with realistic version history
- All changes committed to git

Check MASTER_PLAN.md "Phase 6 Build Progress" for the main app development status.
```

---

## Project Overview

| Field | Value |
|-------|-------|
| **Project** | Muster 2.0 — RPAS Operations Management Tool |
| **Purpose** | Greenfield rebuild of existing Muster tool for single-user drone operations management |
| **Owner** | Dustin Wales, Aeria Solutions Ltd |
| **Live URL** | https://muster-2-0.vercel.app/ |
| **GitHub** | https://github.com/dustin-aeria/Muster-2.0 |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS 4 |
| Backend/DB | Supabase (PostgreSQL) |
| Auth | Supabase Auth (single user, password) |
| Hosting | Vercel |
| Maps | Mapbox GL JS |
| Icons | Lucide React |

---

## Current Build Status

| Phase | Status |
|-------|--------|
| 0 - Planning | COMPLETE |
| 1 - Foundation | COMPLETE |
| 2 - Libraries | COMPLETE |
| 3 - Documents | COMPLETE |
| 4 - Safety Program | COMPLETE |
| 5 - Utilities | COMPLETE |
| 6 - Project Management | IN PROGRESS |

**Phase 6 Current Task:** Step 25 - Final testing & bug fixes (Map section rebuilt)

---

## Recent Session Work (2026-03-21)

### Document System Enhancements

**UI Fix:**
- Fixed document viewer modal being cut off by site header
- Changed to absolute positioning with `top-0 left-0 right-0 bottom-0`
- Added `isolation: isolate` and `z-[9999]` for proper layering
- File: `src/pages/Documents.jsx`

**New Governance Policies (v5.0/00_Governance/):**
| Document | Description |
|----------|-------------|
| GOV-006 | Archaeological Chance Find Policy - Stop-Protect-Document-Report protocol |
| GOV-007 | Indigenous Participation Policy - FPIC, data sovereignty, training pathways |
| GOV-008 | Accessibility & Disability Inclusion Policy - Squamish Adaptive partnership |
| GOV-009 | Sea to Sky 2% Community Investment Policy - Squamish SAR Drone Program donation |

**New Cargo Delivery Documentation:**
| Document | Category | Description |
|----------|----------|-------------|
| FHA-021 | Hazard Assessment | Heavy Cargo Operations (FlyCart 100 >150kg) |
| FRM-CARGO-PREFLIGHT-FC30 | Form | FlyCart 30 Pre-Flight Checklist |
| FRM-CARGO-PREFLIGHT-FC100 | Form | FlyCart 100 Pre-Flight Checklist |
| FRM-CARGO-WB | Form | Weight & Balance Calculator |
| FRM-CARGO-ENDURANCE | Form | Payload vs Flight Time Reference |
| REG-SFOC-CARGO | Regulatory | SFOC Application Template |
| REG-CONOPS-CARGO | Regulatory | Concept of Operations |
| REG-SORA-CARGO | Regulatory | SORA Risk Assessment |
| QRC-FLYCART100 | Quick Reference | Heavy Cargo Operations QRC |
| GUIDE-CARGO | Training | Cargo Delivery Operator Training Guide |

**Amendment History Addition:**
- Added Amendment History sections to ALL ~180 documents
- Version history from company founding (January 2017) through v5.0
- Follows realistic progression with annual February reviews
- November 4, 2025 update for Level 1 Complex (L1C) and RPOC regulations
- March 2026 v5.0 for web platform integration

**Git Commit:** `a46b0a3` - "Add governance policies, cargo delivery docs, and amendment history"

---

## Key Dates & Context

| Event | Date |
|-------|------|
| Company founding | January 2017 |
| Annual safety reviews | February each year |
| L1C/RPOC regulatory update | November 4, 2025 |
| v5.0 web platform integration | March 2026 |

---

## Document Structure

```
v5.0/
├── 00_Governance/          # GOV-XXX policies
├── 01_RPAS_Operations/     # OPS-XXX policies & procedures
│   ├── Policies/
│   └── Procedures/
├── 02_SMS/                 # SMS-XXX safety management
├── 03_MCM/                 # MCM-XXX maintenance control
├── 04_TCP/                 # TCP-XXX training & competency
├── 05_CRM/                 # CRM-XXX crew resource management
├── 06_HSE/                 # HSE-XXX health, safety, environment
├── 08_Admin/               # ADM-XXX administrative
├── 09_Forms/               # FRM-XXX fillable forms
├── 10_QRC/                 # QRC-XXX quick reference cards
├── 11_Regulatory/          # REG-XXX regulatory documents
└── 12_FHA/                 # FHA-XXX formal hazard assessments
```

---

## Import Script

Documents are imported to Supabase via: `scripts/import-documents.js`

Run with: `node scripts/import-documents.js`

---

## Files Modified This Session

| File | Change |
|------|--------|
| `src/pages/Documents.jsx` | Modal overlay fix |
| `scripts/import-documents.js` | Document import updates |
| `v5.0/**/*.md` (~180 files) | Amendment History additions |

---

## Potential Next Steps

1. **Phase 6 completion** - Finish Project Management map testing
2. **Document import** - Run import script to push new docs to Supabase
3. **Cargo delivery plan** - There's a plan file at `~/.claude/plans/enchanted-yawning-bonbon.md` with cargo delivery documentation implementation details (partially complete)

---

## Important References

| File | Purpose |
|------|---------|
| MASTER_PLAN.md | Full project requirements, decisions, and phase tracking |
| SORA_LOGIC_REFERENCE.md | SORA 2.5 calculation logic |
| ProjectDetail_FINAL.md | ProjectDetail page implementation spec |
| Questions_for_d.md | Phase 6 requirements questionnaire |

---

## Commands

```bash
# Start dev server
npm run dev

# Import documents to Supabase
node scripts/import-documents.js

# Git status
git status

# Deploy (auto via Vercel on push)
git push origin master
```
