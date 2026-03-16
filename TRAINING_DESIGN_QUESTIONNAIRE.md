# Training System Design Questionnaire
## Aeria Solutions - MusterApp 2.0

Work through these questions to define what the training system should actually do. Your answers will drive the redesign.

---

## SECTION 1: Training Philosophy

### 1.1 What is the primary purpose of this training system?
- [ ] Regulatory compliance (prove to Transport Canada we trained people)
- [ ] Actual skill development (make people better at their jobs)
- [ ] Client/audit readiness (show documentation when asked)
- [ ] Onboarding efficiency (get new hires productive faster)
- [ ] All of the above
- [ ] Other: _______________________

### 1.2 Who is the primary user?
- [ ] New hires going through orientation
- [ ] Existing pilots doing annual recurrency
- [ ] Supervisors signing off on competencies
- [ ] Safety manager tracking compliance
- [ ] Operations manager assigning training
- [ ] All of the above

### 1.3 What's broken about training today (before this app)?
_Write your pain points here:_




---

## SECTION 2: Training Structure

### 2.1 Should training be organized by:

**Option A: Role-Based** (what your TCP-001 defines)
- All Personnel → Safety basics, SMS orientation
- RPAS Pilots → Flight ops, emergency procedures, aircraft-specific
- Visual Observers → VO procedures, standard calls, airspace
- Ground Crew → Equipment handling, site setup, battery safety
- Operations Managers → SMS oversight, auditing, incident review

**Option B: Track-Based** (current implementation)
- Onboarding → Read all policies
- Field Operations → Field readiness
- Pilot Recurrency → Annual flight skills
- Management & SMS → Safety oversight

**Option C: Hybrid**
- Role determines WHAT you need
- Tracks determine WHEN (orientation vs recurrent vs upgrade)

Your choice: [ A / B / C ]

Notes:




### 2.2 What training types do you need? (from TCP-001)

| Type | Include? | Notes |
|------|----------|-------|
| Orientation (new hire) | Yes / No | |
| Initial (first time in role) | Yes / No | |
| Recurrent (annual refresh) | Yes / No | |
| Upgrade (new equipment/role) | Yes / No | |
| Remedial (after incident) | Yes / No | |

### 2.3 What should happen when someone joins?

TCP-001-PR defines a detailed orientation:
- Pre-arrival prep
- Day 1: 4 x 30-min sessions (company overview, safety, SMS, role intro)
- Week 1: Safety orientation, SMS orientation
- Week 2-4: Role-specific training
- Day 30: Follow-up check-in
- Day 90: Final review

**Question:** Should the app guide this process step-by-step, or just track completion?

Your answer:




---

## SECTION 3: Content & Documents

### 3.1 You have 168+ documents. How should they be used in training?

| Document Type | Count | Use in Training? | How? |
|---------------|-------|------------------|------|
| Policies (GOV, OPS, SMS, HSE, etc.) | ~50 | | Read & acknowledge / Quiz / Reference only |
| Procedures (-PR docs) | ~40 | | Read & acknowledge / Demonstrate / Reference only |
| Forms (FRM-*) | 30 | | Learn to fill out / Reference only |
| Quick Reference Cards (QRC-*) | 13 | | Memorize / Carry in field / Reference only |
| Formal Hazard Assessments (FHA-*) | 20+ | | Review before job type / Reference only |
| Guides (GUIDE-*) | 7 | | Read & quiz / Reference only |
| Manuals (SMS-001, MCM-001, TCP-001) | 3 | | Read sections / Reference only |

### 3.2 Which documents are MANDATORY reads for new hires?

List them (or categories):




### 3.3 Which documents need annual re-acknowledgment?

List them:




### 3.4 Should quizzes be generated FROM document content?
- [ ] Yes - pull key points from each policy and quiz on them
- [ ] No - manually create quiz questions
- [ ] Hybrid - auto-generate but allow manual override

---

## SECTION 4: Competency & Sign-Offs

### 4.1 What skills require WITNESSED demonstration?

From your forms and TCP, these seem to need sign-off:

| Skill | Needs Witness? | Who Signs Off? | How Often? |
|-------|----------------|----------------|------------|
| Pre-flight inspection | Yes / No | | |
| Flight maneuvers | Yes / No | | |
| Emergency procedures | Yes / No | | |
| Post-flight procedures | Yes / No | | |
| Battery handling | Yes / No | | |
| Site survey | Yes / No | | |
| FLHA completion | Yes / No | | |
| GCP deployment | Yes / No | | |
| VO duties | Yes / No | | |

Add others:




### 4.2 What are the checkpoints for each skill?

Example from current system:
```
Pre-flight inspection:
- Propellers secure, no damage
- Battery charged and seated
- Camera/gimbal operational
- GPS lock confirmed
- Control surfaces responsive
```

Should these come from:
- [ ] Your existing FRM-PREFLIGHT form
- [ ] Your existing procedures (OPS-001-PR)
- [ ] Custom list in the app
- [ ] All of the above, merged

### 4.3 Who can sign off on skills?
- [ ] Any supervisor/manager
- [ ] Specific certified trainers only
- [ ] Role-specific (pilots sign off pilots, etc.)
- [ ] Operations Manager only

---

## SECTION 5: Currency & Recurrency

### 5.1 Your TCP-001 defines currency requirements:

| Requirement | Period | Track in App? |
|-------------|--------|---------------|
| PIC: 1 flight per 90 days | 90 days | Yes / No |
| BVLOS: 1 flight per 90 days | 90 days | Yes / No |
| Visual Observer: Annual refresher | 12 months | Yes / No |
| Emergency Procedures: Annual | 12 months | Yes / No |

Add others:




### 5.2 What should happen when currency lapses?
- [ ] Automatic notification to operator and manager
- [ ] Block from being assigned to flights
- [ ] Require remedial training before returning
- [ ] Just show warning, no enforcement
- [ ] Other: _______________________

### 5.3 How should recurrent training differ from initial?

Initial training (first time):
- Read everything
- Demonstrate all skills
- Full assessment

Recurrent training (annual):
- [ ] Same as initial (re-read, re-demonstrate everything)
- [ ] Abbreviated (quiz only, no re-reading)
- [ ] Focus on what's changed (new policies, incidents)
- [ ] Skills demonstration only (no reading)
- [ ] Scenario-based assessment
- [ ] Other: _______________________

---

## SECTION 6: Practical Training Elements

### 6.1 Should training include quizzes?
- [ ] Yes, multiple choice after reading
- [ ] Yes, but scenario-based ("what would you do")
- [ ] No, just read and acknowledge
- [ ] Optional for some tracks

### 6.2 What passing score for quizzes?
- [ ] 70%
- [ ] 80%
- [ ] 100% (must get all correct)
- [ ] No score, just review wrong answers

### 6.3 What happens if someone fails a quiz?
- [ ] Retake immediately
- [ ] Review material, retake after 24 hours
- [ ] Notify supervisor
- [ ] Schedule remedial training

### 6.4 Should training include scenarios?
Examples from current system:
- "You notice unmarked power lines at the job site. What do you do?"
- "Battery voltage dropping faster than expected mid-flight. Response?"

- [ ] Yes, critical for decision-making practice
- [ ] No, waste of time
- [ ] Only for certain roles (pilots, supervisors)

### 6.5 Should training include equipment checklists?
Physical verification before field work:
- First aid kit present
- Fire extinguisher charged
- PPE in good condition
- Comms devices working

- [ ] Yes, practical readiness check
- [ ] No, that's covered by FRM-PREFLIGHT form
- [ ] Integrate with existing forms

---

## SECTION 7: Tracking & Reporting

### 7.1 What needs to be tracked?

| Item | Track? | For How Long? |
|------|--------|---------------|
| Document acknowledgments | Yes / No | |
| Quiz scores | Yes / No | |
| Skill sign-offs | Yes / No | |
| Training completion dates | Yes / No | |
| Supervisor who signed off | Yes / No | |
| Time spent on training | Yes / No | |
| Number of quiz attempts | Yes / No | |

### 7.2 Who needs access to training records?
- [ ] Individual (their own records)
- [ ] Supervisors (their team)
- [ ] Operations Manager (everyone)
- [ ] External auditors (read-only export)

### 7.3 What reports do you need?

| Report | Need? | Notes |
|--------|-------|-------|
| Training completion by person | Yes / No | |
| Training completion by role | Yes / No | |
| Overdue training list | Yes / No | |
| Currency status dashboard | Yes / No | |
| Audit-ready training matrix | Yes / No | |
| Expiring certifications | Yes / No | |

---

## SECTION 8: Integration with Existing App

### 8.1 How should training connect to other MusterApp features?

| Feature | Integration? | How? |
|---------|--------------|------|
| Operators list | Yes / No | Auto-assign training based on role |
| Documents library | Yes / No | Pull content for reading |
| Flight logs | Yes / No | Track currency automatically |
| Safety reports | Yes / No | Trigger training after incidents |
| Job management | Yes / No | Block assignment if training incomplete |
| Certifications | Yes / No | Already tracking, just connect |

### 8.2 Should training block other actions?
- [ ] Can't be assigned to flight without completed training
- [ ] Can't log flights without current recurrency
- [ ] Warning only, no hard blocks
- [ ] No enforcement, just tracking

---

## SECTION 9: Quick Reference Cards (QRCs)

You have 13 QRCs for field use:
- QRC-EMERGENCY
- QRC-PREFLIGHT
- QRC-AIRSPACE
- QRC-WEATHER
- QRC-FLHA
- QRC-BVLOS
- QRC-BATTERY
- QRC-WILDLIFE
- QRC-FIRSTAID
- QRC-WORKINGALONE
- QRC-VOCALLS
- QRC-DELIVERY
- QRC-AVALANCHE

### 9.1 How should QRCs be used in training?
- [ ] Require memorization, quiz on content
- [ ] Review and acknowledge
- [ ] Available as reference only
- [ ] Different approach per QRC

### 9.2 Should QRCs be accessible in the field?
- [ ] Yes, add a "Field Reference" section in the app
- [ ] No, they print these out
- [ ] Yes, but separate from training

---

## SECTION 10: Formal Hazard Assessments (FHAs)

You have 20+ FHAs for different operation types:
- FHA-001 RPAS Flight Operations
- FHA-002 BVLOS Operations
- FHA-019 Cargo Delivery
- FHA-020 Avalanche Control
- etc.

### 10.1 How should FHAs be used?
- [ ] Review relevant FHA before each job type
- [ ] Acknowledge once during training, reference thereafter
- [ ] Quiz on hazards and controls
- [ ] Not in training, just reference

### 10.2 Should operators complete FLHAs (Field Level) through the app?
- [ ] Yes, digitize FRM-FLHA form
- [ ] No, paper forms work fine
- [ ] Yes, with pre-populated hazards from master FHA

---

## SECTION 11: Forms Integration

You have 30 forms. Which should be digitized and connected to training?

| Form | Digitize? | Connect to Training? |
|------|-----------|---------------------|
| FRM-IMSAFE (Fitness for Duty) | Yes / No | Yes / No |
| FRM-PREFLIGHT | Yes / No | Yes / No |
| FRM-POSTFLIGHT | Yes / No | Yes / No |
| FRM-FLHA | Yes / No | Yes / No |
| FRM-NEWWORKER | Yes / No | Yes / No |
| FRM-COMPETENCY | Yes / No | Yes / No |
| FRM-TRAINING | Yes / No | Yes / No |
| FRM-INCIDENT | Yes / No | Yes / No |
| FRM-NEARMISS | Yes / No | Yes / No |

---

## SECTION 12: Priorities

### 12.1 Rank these features by importance (1 = most important):

| Feature | Rank (1-10) |
|---------|-------------|
| New hire orientation workflow | |
| Document read & acknowledge | |
| Quizzes | |
| Scenario-based training | |
| Flight skill sign-offs | |
| Currency tracking | |
| Recurrent training prompts | |
| Audit-ready reports | |
| Integration with existing app features | |
| QRC/FHA reference library | |

### 12.2 What's the ONE thing that would make this useful immediately?

Your answer:




### 12.3 What can wait for Phase 2?

Your answer:




---

## SECTION 13: Your Ideas

### 13.1 What did you like about the current implementation (if anything)?




### 13.2 What specifically felt "shitty" about it?




### 13.3 Any other ideas or requirements?




---

## Next Steps

1. Fill out this questionnaire
2. We review together
3. Create a proper design based on YOUR content and needs
4. Build it right

---

*Document created: March 2026*
*For: Training System Redesign - MusterApp 2.0*
