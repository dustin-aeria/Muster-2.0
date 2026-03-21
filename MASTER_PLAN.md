# Muster 2.0 — Master Planning Document

> **Purpose:** Single source of truth for the Muster rebuild. Contains all requirements, decisions, questions, and progress tracking. If Claude crashes, paste this file to resume exactly where we left off.

---

## Project Overview

| Field | Value |
|-------|-------|
| **Project** | Muster 2.0 — RPAS Operations Management Tool |
| **Goal** | Greenfield rebuild of existing Muster tool. Cleaner, leaner, purpose-built for single user (not SaaS). |
| **Working Directory** | `C:\Users\Dusti\OneDrive\Desktop\MusterApp(2)` |
| **Original Codebase** | `C:\Users\Dusti\Desktop\Muster` (reference only, do not modify) |
| **Status** | PLANNING COMPLETE — Ready for Phase 1 |
| **Last Updated** | 2026-03-21 |

---

## Core Pillars

1. **Libraries** — Operators, Equipment, Services, FHAs/JHAs, Policies & Procedures
2. **Project Management** — Map planning, SORA, cost estimation, timelines, notifications, in-field tools
3. **Safety Program** — Incidents, CAPAs, JHSC, Inspections
4. **General Utilities** — Tasks, Time Tracking, Expenses, Calendar, Forms
5. **Google Drive Integration** — Auto-save all submissions to Drive (hard requirement)

---

## Current Phase: Planning Complete ✓

All requirements clarified. Tech stack finalized. Build phases defined. Ready to begin Phase 1: Foundation.

---

## Requirements (Answered)

---

## SECTION A: Fundamental Architecture

### A1. Users & Access
**Question:** Is this now single-user (just you) or will others use it? The old system had roles (Admin, Management, Operator, Viewer). Do you still need that?

**Answer:** no, this will just be a tool for me

---

### A2. Multi-tenant?
**Question:** If multi-user: same organization only, or multi-tenant (multiple separate organizations)?

**Answer:** just one user

---

### A3. Authentication
**Question:** Authentication needed at all, or is this a private tool behind your own access controls?

**Answer:** i do need it to be behind a pssword incase someone accidently access it 

---

### A4. Deployment & Hosting
**Question:** Self-hosted or cloud-hosted? Where does this run? (Vercel, your own server, local-first with sync?) Domain/URL expectations?

**Answer:** vercel and ill use a vercel domain for the meantime

---

### A5. Offline / Field Use
**Question:** You mentioned mobile field use. Do you need offline capability? (IMSAFE checks, tailgate meetings when cell signal is poor). If yes: full offline with sync, or just graceful degradation?

**Answer:** no i will always have internet or cellular - no offline sync necessary

---

### A6. Git-Native Documents — Workflow
**Question:** For policies/procedures/FHAs stored in Git:
- Is this a GitHub/GitLab repo the app reads/writes to via API?
- Or a local git repo on a server the app manages?
- Or embedded git (isomorphic-git) in the app itself?

**Answer:** [PENDING]

---

### A7. Git-Native Documents — Access & Conflicts
**Question:** Who can edit these docs? Just you, or do others need access? How should we handle edit conflicts if multiple people edit simultaneously?

**Answer:** only me

---

## SECTION B: Libraries

### B1. Operator Certifications
**Question:** Do certifications expire? Need expiry tracking and alerts (e.g., "Pilot certificate expires in 30 days")?

**Answer:** They do, but for tracking i need things to be simple: perahps, almost like a spread sheet (but nice looking obviously), wiht oeprsators name, and then i input their certificate details. fucntional, and helpful for tracking is optimal but it must also be simple and not be so complicated that it bugs out

---

### B2. Operator Roles
**Question:** "Roles" — is this just a label/tag, or does it affect permissions/capabilities in the app?

**Answer:** its just a label/tag - its so when i add an operator to a project i can tag that they are the pilot or a vo or biologist etc

---

### B3. Operator Rates
**Question:** Can one operator have multiple rate types? (e.g., hourly for some work, daily for others on the same project)

**Answer:** just have it so you can always choose which one to use. it woudlnt be based on work type, it would just be selected at some point whiuch rate we will use to calcualte

---

### B4. Equipment Maintenance
**Question:** "Maintenance notes" — just freeform text, or actual maintenance scheduling? (next service due date, hours until service, alerts)

**Answer:** just freeeform notes

---

### B5. Equipment Documents
**Question:** "Associated documents" for equipment — stored where? Git-native like policies, or file uploads to cloud storage?

**Answer:** no equipment needs assocaited docs 

---

### B6. Equipment Usage Tracking
**Question:** Do you track flight hours / usage hours for equipment?

**Answer:** we do but not here

---

### B7. Services — Complex Rate Example
**Question:** Give me a concrete example of a complex service rate structure so I understand the combinations. E.g., "Base fee $500 + $50/acre + $100/hr for processing"?

**Answer:** [PENDING]so in some cases like photogrammetry i could charge by the hour, day, week but also acre, line km, data amount ect. also youll find at the prpject level that i have modifiers, like rush job and such, that i want to keep

---

### B8. Archive vs Delete
**Question:** What's the distinction? Archive = soft delete (hidden but recoverable)? Or archive = completed/historical reference that should still be searchable?

**Answer:** anytime an edit is made id like a ammendments document updated - just a reference to what was changed, when

---

## SECTION C: Project Management

### C1. Map — Current Touchpoints
**Question:** You said the current map is accessed at three points (site, flight, emergency). What specific data is captured at each? (I'll audit the code, but your perspective helps)

**Answer:** basically i set the site are first, then i set flgiht parameters, then i input emergency points like muster and evac route. but realistically thats ridiculous to happen at three differnet points. we should be ablet o simplify it with one map page where i set the parameters entirely. for instance in the current webn tool, its two tabs for site and flgiht, but this can be one and it can include the emergnecy tab. and then below the map ill input the non map details from those tabs. 

---

### C2. Map — Ideal Flow
**Question:** What's the ideal single-page map flow? Draw everything first, then tag what's what? Or step-by-step wizard?

**Answer:** i want to be able to select from a suite of tools and place them in the map - things like obstacles, flight paht, site boundaires, pilot lcoation, evac routes, launch, land, no go zones etc, all given color and name when i input them. i open a map and start playing around, setting up mulitple sites in one, the works. everything is listed below by color and name. you get the idea

---

### C3. Operational Volume Calculation
**Question:** The "auto-calculating operational volume" — what inputs/outputs does this need? Does SORA GRC/ARC feed into this?

**Answer:** in the process of setting up SAIL and operational volume you will need to audit the JARUS SORA documents to make sure you set up accurate logic. For operational volume its risk buger and contingency volume added together - contginecny is aircraft speed in m/s x 10 seconds and ground risk bufer is 1:1 to altitude=, so if the flgiht is planned atr 100m you ad 100m horixontal. ill add the JARUS SORA docs to the folder.

---

### C4. SORA — What Broke?
**Question:** What specifically broke in the previous SORA implementation? (Incorrect SAIL determination? Wrong GRC/ARC? UI confusion? Calculation errors?) I need to know what to audit and fix.

**Answer:** its actually just very messy - all i really need is ARC x GRC + OSO integration. youll see it does that quite well but it could be cleaner (or maybe not, ill let you investiage)

---

### C5. SORA — Scope
**Question:** Do you need full SORA 2.5 compliance, or a simplified version for your actual use cases? What operational categories do you typically fly? (BVLOS, urban, over people, etc.)

**Answer:** I fly all use cases; but what i care about is getting a first look at my potential SAIL for planning purposes and knowing what OSOs i need to accomplish. 

---

### C6. Notifications — Triggers
**Question:** What triggers should fire notifications? List all that matter to you.

**Answer:** the onyl one that truly matters is go/nogo - tailgate meetings are in the field, and i want to select a group of people who will be notified when either of those is triggered. the purpose here is that we will be both in the field and likely in the air or on thge water and various parties will need to know that information. so id like to be able to inform them automatically

---

### C7. Notifications — Channels
**Question:** What channels? Email only? SMS? In-app? Push notifications?

**Answer:** email and sms

---

### C8. Notifications — Recipients
**Question:** Who receives notifications? Just you, or assigned team members? Client notifications?

**Answer:** anyone i add to the notifications list 

---

### C9. Notifications — Example Flow
**Question:** Give me one concrete example of a notification flow that matters to you. (e.g., "When a tailgate meeting is completed, email the safety manager with attendee list and sign-off status")

**Answer:** when a tailgate is triggered NO - a text and email goes out saying NOTIFCATION FROM AERIA SOLUTIOS FIELD TEAM - Due to x, y and z they have triggered NO GO. more informaiton to come. 

---

### C10. In-Field — IMSAFE Flow
**Question:** IMSAFE: what's the expected flow? Operator self-checks in before flight, data logged, notification sent? What happens if someone fails IMSAFE?

**Answer:** this is a self checking tool for everyone involved - no data needs to be logged, its just a reference

---

### C11. In-Field — Tailgate Meetings
**Question:** Tailgate meetings: who attends, what's recorded, what notifications trigger? Is sign-off required from all attendees?

**Answer:** objectives, project idfentiefed safety risks and controls, time, location, fit for duty, all that stuff. sign off is only required from the person giving the tailgate.

---

### C12. In-Field — Other Forms
**Question:** "Other field activities / forms" — are these predefined form templates, or do you need a form builder to create custom forms?

**Answer:** youll see i have forms made, but i think we should make them in google forms and have them be links to that. that way again all the data is pulled into google drive

---

### C13. Document Generation — Formats
**Question:** What output formats? PDF? Word (.docx)? Markdown? Which ones matter?

**Answer:** all i need is a text file of all the text informaiton, because my work flow is to take that and run it through claude for beautifucation. 

---

### C14. Document Generation — Types
**Question:** What documents specifically need generation? (Operational plans, cost summaries, SORA outputs — anything else?)

**Answer:** youll notice that there are aspects to the project plan that are internal facing (like needs analysis, cost estimate, time, crew, team etc) and there are aspects that are client facing like site plan, flgiht plan, anythign safety related. these would be the two things i would want to generate docs of - intenral and external plans

---

### C15. Document Generation — Audience
**Question:** Do generated documents need to look professional (client-facing with branding) or functional (internal use only)?

**Answer:** functional, ill make them professional using other tools

---

### C16. Project Phases — Pipeline
**Question:** Is the pipeline (prospect → proposal → active → complete → invoiced) fixed, or do you need custom/configurable stages?

**Answer:** custom configurable

---

### C17. Project Phases — Resource Assignment
**Question:** Do resources (operators, equipment, services) get assigned to specific phases, or to the project as a whole?

**Answer:** they get assigned to tasks, and their rates informa the projects cost estimator.

---

## SECTION D: Safety Program

### D1. Incidents — Regulatory Requirements
**Question:** Any regulatory requirements for incident logging format? (Transport Canada reportable events, WorkSafeBC requirements, etc.)

**Answer:** yes and you will have access to all the informaiton in my program when when you review the docs wehen we get started

---

### D2. Incidents — Severity Scale
**Question:** Severity classification: predefined scale (e.g., 1-5, or Near Miss / Minor / Major / Critical) or custom?

**Answer:** near miss to critical

---

### D3. Inspections — Checklists
**Question:** Checklists: predefined templates only, or do you need to build/customize checklists in-app?

**Answer:** we cna use the ones ive already made - for checklists because they are part of a more general in field tool, they would go with the IMSAFE tool or field tools or somehting like that.

---

### D4. Inspections — Scope
**Question:** What gets inspected? Equipment inspections? Site inspections? Facility inspections? All of the above?

**Answer:** youll see whne you review my poroigram materials

---

## SECTION E: General Utilities

### E1. Forms — Builder vs Predefined
**Question:** Do you need a form builder (create your own fields, conditional logic, etc.)? Or a fixed set of form types that you define once and reuse?

**Answer:** its nice to have a form builder incase i need it but it doesnt need to be anything special

---

### E2. Calendar — Integration
**Question:** Google Calendar sync, or standalone in-app calendar only? If sync: two-way (create in app ↔ appears in Google)?

**Answer:** two google calander sync is ideal

---

### E3. Time Tracking — Method
**Question:** Manual entry only, or live timer (start/stop button)? The old system had a timer — was that useful or overkill?

**Answer:** live timer is overkill. get rid of it

---

## SECTION F: Google Drive Integration

### F1. Folder Structure
**Question:** What folder structure in Drive? Examples:
- `Muster/Projects/ProjectName/Documents/`
- `Muster/2026/Projects/ProjectName/`
- Flat structure with naming conventions?

**Answer:** flat with naming conventions

---

### F2. Account Scope
**Question:** Your personal Google Drive, or a shared/team Drive? One service account for the app, or per-user OAuth login?

**Answer:** shared/team drive

---

## SECTION G: What's Being Cut

Confirm each item is OUT OF SCOPE for the rebuild:

| Feature | In Old Codebase | Cut? | Notes |
|---------|-----------------|------|-------|
| Gamification (XP, badges, quests) | Yes | yes | |
| Training module | Yes | yes | |
| Client portal | Yes | yes | |
| Multi-tenant teams | Yes |yes | |
| Onboarding flows | Yes |yes | |
| AI content generation (Claude quizzes) | Yes | yes | |
| Insurance tracking | Yes | yes | |
| Permit management (SFOC/RPPL) | Yes | yesa| |
| Compliance tracking | Yes | yes | |
| COR/SECOR audit features | Yes | yes| |
| Equipment spec sheets | Yes | yes| |
| Manufacturer declarations | Yes | yes | |
| Weather integration | Yes | yes | |

---

## SECTION H: Additional Context

### H1. Anything Else?
**Question:** Anything I haven't asked about that you know you need? Features, workflows, pet peeves from the old system?

**Answer:** there is a function in equipment where i write the price down adn then it calcaultes its rates based on the days padi off input - i stil want that

---

### H2. Non-Negotiables
**Question:** What are your absolute non-negotiables? The things that MUST work perfectly or the tool is useless?

**Answer:** [PENDING]

---

### H3. Pain Points
**Question:** What were the biggest pain points in the old system? What frustrated you most?

**Answer:** its too complicated and its too buggy - i just want a clean, working, useful tool. My business is a field operator who specializes in drone work, this tool is meant to help us plan projects and track safety.

---

## Decisions Log

| Decision | Choice | Rationale | Date |
|----------|--------|-----------|------|
| Database | Supabase (PostgreSQL) | Relational data model fits project→task→resource structure; cleaner than Firebase NoSQL | 2026-03-11 |
| Equipment declarations | Manual entry of 922.XX SADs | User checks which TC sections each drone is declared for; informs SORA auto-suggestions | 2026-03-11 |
| Document storage | DB with embedded amendments | Edit in-app, amendment table in document content, no external Git workflow | 2026-03-11 |
| Auth | Supabase Auth (password) | Single user, simple protection | 2026-03-11 |
| Offline support | None | Always has connectivity | 2026-03-11 |
| Map library | Mapbox GL JS | Better drawing tools, existing investment | 2026-03-11 |
| SMS provider | Twilio | Existing account | 2026-03-11 |
| Calendar sync | Google Calendar (two-way) | Milestones, inspections, JHSC, tasks | 2026-03-11 |
| Time tracking | Manual entry only | Live timer was overkill | 2026-03-11 |
| Forms | Link to Google Forms | Data goes to Drive, simpler than in-app builder | 2026-03-11 |
| Service modifiers | Percentage + flat fee options | Flexibility for rush jobs, etc. | 2026-03-11 |

---

## Tech Stack (FINAL)

| Layer | Choice | Notes |
|-------|--------|-------|
| Frontend | React 18 + Vite | Fast, familiar |
| Styling | Tailwind CSS | Utility-first, clean |
| Backend/DB | Supabase | PostgreSQL, built-in auth, edge functions |
| Auth | Supabase Auth | Simple password auth, single user |
| Hosting | Vercel | GitHub repo → auto-deploy |
| Maps | Mapbox GL JS | Drawing tools, flight planning |
| SMS | Twilio | Existing account |
| Email | Resend | Transactional notifications |
| Calendar | Google Calendar API | Two-way sync |
| File Storage | Google Drive API | Team Drive, flat structure with naming conventions |

### Document Storage (Policies/Procedures/FHAs)
- Stored in Supabase as markdown content
- Editable directly in web app (markdown editor)
- Amendment table embedded in document content (not separate metadata)
- On save: prompt for change summary → append row to amendment table → save

---

## Build Phases

| Phase | Scope | Status |
|-------|-------|--------|
| 0 | Planning & Architecture | COMPLETE |
| 1 | Foundation | COMPLETE |
| 2 | Libraries | COMPLETE |
| 3 | Documents | COMPLETE |
| 4 | Safety Program | COMPLETE |
| 5 | Utilities & Integrations | COMPLETE |
| 6 | Project Management | IN PROGRESS - Awaiting requirements clarification |

---

### Phase 1: Foundation
- [x] Create GitHub repo
- [x] Initialize React + Vite project
- [x] Configure Tailwind CSS
- [x] Set up Supabase project (database + auth)
- [x] Implement password auth (single user)
- [x] Create basic app shell (nav, layout, routing)
- [x] Deploy to Vercel (connect GitHub repo)
- [x] Set up environment variables

**Deliverable:** Working app shell with auth, deployed to Vercel

**Live URL:** https://muster-2-0.vercel.app/
**GitHub:** https://github.com/dustin-aeria/Muster-2.0

---

### Phase 2: Libraries
- [x] **Operators** — CRUD, name, roles (tags), rates (hourly/daily/weekly), contact, certifications with expiry, notes
- [x] **Equipment** — CRUD, name, type, serial, rates, status, maintenance notes, rate calculator (price ÷ days paid off), TC 922.XX declarations (SAD checkboxes for 922.04–922.12)
- [x] **Services** — CRUD, name, complex rate structure (hourly/daily/weekly + per-acre/per-km/per-GB), modifiers (rush %, flat fees)
- [x] Search/filter on all library views
- [x] Archive functionality with amendment logging

**Deliverable:** Fully functional libraries with clean table/card views

---

### Phase 3: Documents (Policies, Procedures, FHAs)
- [x] Database schema for documents (content as markdown)
- [x] Markdown editor component (in-app editing)
- [x] Amendment table embedded in document content
- [x] Auto-append amendment row on save (with change summary prompt)
- [x] Document list view with search
- [x] Add / Edit / Archive / Delete controls

**Deliverable:** Editable document library with version history in each document

---

### Phase 4: Safety Program
- [ ] **Incidents** — log, describe, classify (near miss → critical), assign owner, track status, regulatory fields
- [ ] **CAPAs** — link to incidents/inspections, assignee, due date, status
- [ ] **JHSC** — schedule meetings, record minutes, track action items
- [ ] **Inspections** — schedule, checklist-based, record findings, link to CAPAs
- [ ] Review existing program materials for field requirements

**Deliverable:** Complete safety tracking module

---

### Phase 5: Utilities & Integrations
- [ ] **Tasks** — create, assign to projects, prioritize, due dates, status, link to resources (informs cost)
- [ ] **Time Tracking** — manual entry, link to projects/operators, feed cost calculations
- [ ] **Expenses** — log by project/category, attach receipts (to Drive), track against budget
- [ ] **Calendar** — two-way Google Calendar sync (milestones, inspections, JHSC, tasks)
- [ ] **Google Drive** — auto-save submissions to Team Drive, flat structure with naming conventions
- [ ] **Forms** — link management for Google Forms

**Deliverable:** Utilities working with Google integrations live

---

### Phase 6: Project Management (Final, Integrative)
- [ ] **Unified Map Page** — single page with drawing toolbox:
  - Site boundaries, flight paths, no-go zones
  - Obstacles, pilot location, launch/land points
  - Evac routes, muster points
  - Each element: color + name, listed below map
  - Auto-calculate operational volume (contingency + ground risk buffer)
- [ ] **SORA Calculator** — ARC × GRC → SAIL, OSO requirements; auto-suggest TMPR/mitigations based on assigned equipment's 922.XX declarations
- [ ] **Resource Assignment** — assign operators/equipment/services to tasks
- [ ] **Cost Estimation** — auto-calculate from assigned resources + rates, contingency %, markup, modifiers
- [ ] **Project Phases** — custom configurable stages (prospect → invoiced)
- [ ] **In-Field Tools:**
  - IMSAFE self-check (reference only, no logging)
  - Tailgate meetings (objectives, risks, controls, sign-off, GO/NO-GO trigger)
- [ ] **Notifications** — Twilio SMS + email on GO/NO-GO, configurable recipient list
- [ ] **Document Generation** — text export (internal plan vs external plan)

**Deliverable:** Full project management with all integrations working

---

## Progress Log

| Date | Action | Notes |
|------|--------|-------|
| 2026-03-11 | Created MASTER_PLAN.md | Initial requirements questions |
| 2026-03-11 | User answered all questions | Requirements clarified |
| 2026-03-11 | Tech stack finalized | Supabase + React + Vite + Tailwind + Mapbox |
| 2026-03-11 | Build phases defined | 6 phases, project management last |
| 2026-03-11 | Created SORA_LOGIC_REFERENCE.md | SORA 2.5 calculation logic documented |
| 2026-03-11 | Reviewed existing SORA implementation | soraConfig.js has solid foundation to build from |
| 2026-03-11 | Defined equipment declarations approach | Manual 922.XX SAD entry per drone; auto-suggests TMPR in SORA |
| 2026-03-11 | Phase 1 complete | React + Vite + Tailwind + Supabase auth + Vercel deployment |
| 2026-03-11 | Phase 2 complete | Libraries built: Operators, Equipment, Services with full CRUD |
| 2026-03-11 | Phase 3 complete | Documents with markdown editor, amendment tracking, type filtering |
| 2026-03-12 | Phase 4 complete | Safety program: Incidents, CAPAs, JHSC, Inspections |
| 2026-03-12 | Phase 5 complete | Utilities: Tasks, Time Tracking, Expenses, Forms |
| 2026-03-13 | Phase 6 started | Projects list page built, project stages pipeline |
| 2026-03-13 | ProjectDetail v1 | Initial attempt - too stripped down, rejected |
| 2026-03-13 | ProjectDetail v2 | Rebuilt with SORA, costs, safety, tailgate - still needs work |
| 2026-03-13 | Created Questions_for_d.md | Comprehensive feature questionnaire for project detail page |
| 2026-03-15 | Map Section Rebuilt | 14 element types, toolbar, flight params, operational volume calculation |
| 2026-03-21 | Document viewer fix | Fixed modal being cut off by header (z-index, positioning) |
| 2026-03-21 | New governance policies | GOV-006 Archaeological, GOV-007 Indigenous, GOV-008 Accessibility, GOV-009 Sea to Sky 2% |
| 2026-03-21 | Cargo delivery docs | FHA-021, forms, regulatory, QRC, guide - 10 new documents |
| 2026-03-21 | Amendment History | Added to ALL ~180 documents with realistic version history from 2017 |
| 2026-03-21 | Git commit a46b0a3 | "Add governance policies, cargo delivery docs, and amendment history" |
| 2026-03-21 | Created CLAUDE.md | Quick resume context file for seamless re-entry |
| | | |

---

## Files Created

```
C:\Users\Dusti\OneDrive\Desktop\MusterApp(2)\
├── CLAUDE.md (quick resume context for Claude Code sessions)
├── MASTER_PLAN.md (this file)
├── SORA_LOGIC_REFERENCE.md (SORA 2.5 quick reference)
├── Questions_for_d.md (Phase 6 project detail requirements questionnaire)
├── Web Tool Rebuild.docx (original requirements doc)
├── Regulations/ (JARUS SORA docs, TC Part 9, AIM, etc.)
├── Formal Hazard Assessments/ (49 FHA templates)
├── Final Documents/ (policies, procedures, manuals)
├── Aeria Details/ (branding, brochures)
├── AERIA LOGO FILES/
└── src/
    ├── lib/
    │   ├── supabase.js (Supabase client)
    │   ├── api.js (CRUD functions for all tables)
    │   ├── database.sql (PostgreSQL schema - all phases)
    │   ├── database-phase3.sql (Phase 3 documents table)
    │   ├── database-phase4-safety.sql (Phase 4 safety tables)
    │   ├── database-phase5-utilities.sql (Phase 5 utilities tables)
    │   ├── database-phase6-projects.sql (Phase 6 project management tables)
    │   └── googleCalendar.js (Google Calendar API integration)
    ├── pages/
    │   ├── Operators.jsx (operators library)
    │   ├── Equipment.jsx (equipment with 922.XX declarations)
    │   ├── Services.jsx (services with complex rates)
    │   ├── Documents.jsx (policies, procedures, FHAs)
    │   ├── Forms.jsx (fillable forms)
    │   ├── Incidents.jsx (safety incidents)
    │   ├── CAPAs.jsx (corrective actions)
    │   ├── JHSC.jsx (safety committee meetings)
    │   ├── Inspections.jsx (safety inspections)
    │   ├── Tasks.jsx (task management)
    │   ├── TimeTracking.jsx (time entries)
    │   ├── Expenses.jsx (expense tracking)
    │   ├── Projects.jsx (project list with stages pipeline)
    │   └── ProjectDetail.jsx (project detail - IN PROGRESS)
    ├── components/
    │   ├── SiteTab.jsx (Site planning: map, SORA, hazards, emergency)
    │   ├── FieldDocsTab.jsx (Tailgate meetings, GO/NO-GO, IMSAFE)
    │   └── CalendarSync.jsx (Google Calendar sync UI)
    └── contexts/
        └── AuthContext.jsx (Supabase auth wrapper)
```

---

## Resume Instructions

If Claude crashes or session ends, paste this prompt into Claude Code:

```
Resume Muster 2.0 project.

Working directory: C:\Users\Dusti\OneDrive\Desktop\MusterApp(2)

Read these files to get context:
1. CLAUDE.md - Quick context and recent session work
2. MASTER_PLAN.md - Full project status, requirements, and build phases
3. ProjectDetail_FINAL.md - Current implementation spec for ProjectDetail page

Check the "Phase 6 Build Progress" section in MASTER_PLAN.md to see exactly where we left off. Continue from the next uncompleted task.

Tech stack: React 19 + Vite + Tailwind CSS 4 + Supabase + Lucide icons
Database: Supabase (PostgreSQL) - NOT Firebase
```

---

## Phase 6 Build Progress

### ProjectDetail.jsx Implementation

| Step | Task | Status | Notes |
|------|------|--------|-------|
| 1 | Admin Tab - Project Header & Status | COMPLETE | Editable name, status dropdown, save indicator |
| 2 | Admin Tab - Client & Dates section | COMPLETE | Client name/email/phone, field dates, days |
| 3 | Admin Tab - Deliverables (repeatable) | COMPLETE | Add/remove deliverable + date pairs |
| 4 | Admin Tab - Notification Contacts | COMPLETE | Name/email/phone for GO/NO-GO alerts |
| 5 | Admin Tab - Crew assignment | COMPLETE | Library + manual, roles, rates, "Use field days" button |
| 6 | Admin Tab - Equipment assignment | COMPLETE | Library selection, SORA indicator, rates |
| 7 | Admin Tab - Services assignment | COMPLETE | Library + project-specific notes, modifiers |
| 8 | Admin Tab - Cost Summary table | COMPLETE | Labour/Materials breakdown, overhead%, markup% |
| 9 | Admin Tab - CSV Export | COMPLETE | QuickBooks-compatible format |
| 10 | Admin Tab - Post-field notes | COMPLETE | Processing, QA/QC, additional notes |
| 11 | Site Tab - Map canvas setup | REBUILT | Mapbox GL JS with style switcher, better organization |
| 12 | Site Tab - Drawing tools | REBUILT | Full element type toolbar (14 types: site boundary, flight area, no-go zone, flight path, evac route, pilot location, launch/land points, obstacles, GCPs, etc.) |
| 13 | Site Tab - Element tables | REBUILT | Grouped by semantic category (Areas, Routes, Points, Hazards), type icons, color editing |
| 14 | Site Tab - Flight Parameters | NEW | Altitude/speed inputs, auto-calculated operational volume (contingency buffer + ground risk buffer) |
| 15 | Site Tab - SORA calculator | COMPLETE | Full iGRC/fGRC/SAIL flow, visual diagram |
| 16 | Site Tab - Hazard table | COMPLETE | Single-line entry, risk scoring |
| 17 | Site Tab - Emergency planning | COMPLETE | Contacts, facilities, PPE, comms |
| 18 | Field Docs Tab - Tailgate list | COMPLETE | Sorted list, view/new buttons |
| 19 | Field Docs Tab - Tailgate form | COMPLETE | Full form with all fields |
| 20 | Field Docs Tab - GO/NO-GO buttons | COMPLETE | 3 decision options |
| 21 | Field Docs Tab - Notifications | COMPLETE | Placeholder for Twilio/email |
| 22 | Field Docs Tab - IMSAFE reference | COMPLETE | Self-check reference card |
| 23 | Integration - Auto-save | COMPLETE | 2-second debounce, subtle indicator |
| 24 | Integration - Google Calendar sync | COMPLETE | OAuth, sync project dates/deliverables |
| 25 | Final testing & bug fixes | IN PROGRESS | Map rebuilt with proper element types, lint errors fixed |

### Current Task
**Step 25: Final testing & bug fixes** - Map section rebuilt

### Recent Changes (2026-03-15)
- **Map Section v2 - Major Improvements:**
  - Fullscreen toggle button to expand map view
  - All sites visible simultaneously (active site highlighted, others dimmed)
  - Per-element colors now working correctly (using GeoJSON layers instead of MapboxDraw styling)
  - Operational volume displays as dashed amber buffer polygon around flight areas/paths
  - Buffer calculated from flight params: (speed × 10s) + (altitude 1:1)
  - Added Turf.js for proper geospatial buffer calculations
  - Click on points shows popup with element name and site
  - 14 element types with semantic meaning
  - Element type toolbar with icons and categorized groups
  - Flight Parameters panel with altitude/speed inputs
  - Element tables grouped by category with type icons

### Last Updated
2026-03-15 - Map v2 with fullscreen, multi-site view, and operational volume visualization

---

## Original Resume Instructions

If Claude crashes or session ends:
1. Share this file with Claude
2. State: "Resume Muster 2.0 planning from MASTER_PLAN.md"
3. Claude will read the file and continue from current status
