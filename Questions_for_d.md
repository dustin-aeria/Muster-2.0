# Project Detail Page - Questions for Dustin

> Answer each question so we can build exactly what you need. Write your answer after each question.

---

## SECTION A: Overall Structure & Layout

### A1. Tab Organization
The old Muster has 20+ tabs organized by phases (Plan, Field, Post-Field). What structure works for you?
- Few tabs (5-6) with dense content per tab?
- More tabs (10-15) with focused content per tab?
- Phase-based grouping with sub-tabs?
- Something else? 

**Answer:**
id like it to be fewer tabs, that flow down a scrolling page intuitively and neatly - auto popoulating and calculating where relavnt along the way. for instance, it could potentisally be two pages, admin & on site. admin would be things not related to the specific site but to the task at hand, adding the who, what, when, what equipment, serviecs, contact edtails, needs analysis, post field work processing, qaqc, data deliverbales and all that kind of stuff - then site would be the unified map where i would select the site(s), asdd hazards, flight areas (calculate operational volume), emergency muster sites, evac routes, all that kind of stuff. then have repeatable sections for hazard identifatrion, asessment and control input (using my hazard matrix of course) - inpouting emergency contcts, including things like entry plans, on site rewquiremtns, site set up etc etc. the admin page should be where all the calculations for a rough cost estimate would come - every time i add equipment or service or operator i would pick what pricing scheme and for how long (perhaps a smart button sdaying duratrion of field deployment would be an otion), whic would all add to a cost table. then - as its own tab (so i supoopse a 3rd tab) would be a field docxs tasb - which would simpole be a tailgate go/nogo doc. date, lcoation, ppl, objectives, hazrds, risk, controls (both pre idnetified and identifed in the firld), fit for work, go/no go - thats what thius needs to be. keeping in mind that this may need to happen once or mamyu times depding on days in the field. sdomtimes more than once a day.

### A2. Information Density
When viewing project details, do you prefer:
- Compact/dense layouts (more info visible, less scrolling)?
- Spacious layouts (one thing at a time, more whitespace)?
- Collapsible sections (expand what you need)?


**Answer:**
spacious layouts - easy to follow and read

### A3. Navigation Style
For moving between project sections:
- Horizontal tabs across top?
- Vertical sidebar navigation?
- Breadcrumb-style navigation?
- Something else?

**Answer:**
i think i prefer horiozontal trabs

### A4. Mobile Usage
How often will you use the project detail page on mobile vs desktop?
- Mostly desktop
- Mostly mobile (field use)
- 50/50

**Answer:**
planing mostly happens on desktop and then tailgates happen in the field on a mobile, same with most forms
---

## SECTION B: Multi-Site Support

### B1. Sites per Project
Does one project ever have multiple operation sites?
- Yes, multiple sites (e.g., a survey spanning 3 different locations)
- No, one project = one site

**Answer:**
yes, very often. asndf i need to be able to plan and view them  in one map (siute 1, site 2, site 3 all weiht their own unqiue markings like site 1 hazards, site 1 evac, site 1 launch etc)
### B2. Site Independence
If multi-site: Should each site have its own:
- SORA assessment? (Y/N)
- Map/boundaries? (Y/N)
- Crew assignments? (Y/N)
- Tailgate meeting? (Y/N)

**Answer:**
yes to all - when identifying hazards, some relate to all siotes, it should be simple to click a button that says for al sites or soemhting so i dont have to repeat myself on that. think baout how when  ion the mnap i can be identifying hazards based on the map (click hazard, label, and describe whcih would auto populate into a list below for that site but then also some hazards you can see on a map and id be inputing those manually - they might actually relate to all sites for sintance willflife, so id likre tpo be able to toggle for all sites on)

### B3. Site Aggregation
If multi-site: How should project-level totals work?
- Show highest SAIL across all sites?
- Sum costs across all sites?
- Separate everything by site?

**Answer:**
ground and air risks are site specific and therefore should be associated to each - as i implement mitigations, eacxh of those initial scores would be affected equally to give me SAILs, i would use the hgihest SAIL to give me my OSO requirments.

---

## SECTION C: Unified Map Page

### C1. Map Tools Required
Which drawing tools do you need on the map? (Check all that apply)
- yes - Site boundary polygon (this is for the entire project site area, not used for calcualting operational volume - which is flgiht specific)
- yes -  Flight path lines or flight area (we would use these for calcualting operational volume)
- yes -  No-go zones
- yes -  Obstacles (towers, wires, trees) - with name and descirption
- yes - Pilot/GCS location marker
- yes - Launch point
- yes - Landing point (should be able to make launch/;land the same if want to)
- yes -  Muster point (emergency assembly)
- yes - Evacuation route
- yes - Emergency facilities (hospital, fire station)
- [ ] Other: _______________

**Answer:**
i ansawered in the questions - others that would be nice to have is a distance measuring tool and an elevation across path/area tool. the elevation tool is more challenging, heres what id like it to do: when i select a flgiht path or flgiht area i need to know the highest elevation and lowest elevation across that area or path, specifically as it relates to AGL - because mesaasutring flgiht altitude is a vital part of flight planning - i want to stay under 400' at all times if i can, if the flgiht path has a stron elevation change, it can affect my AGL to either too low or too high and i need to plan to accomodate that.

### C2. Element Labeling
For each map element, what info do you need to capture?
- Name only?
- Name + color?
- Name + color + notes?
- Name + color + height (for obstacles)?

**Answer:**
name, color, notes, elevation, hazards... if you rad the ansxwers before youll get a good idea.

### C3. Element List Display
Below the map, how should elements be displayed?
- Simple list with name and color
- Grouped by type (obstacles, routes, points)
- Table with coordinates
- Cards with full details

**Answer:**
groupd by type in tables wiht coordinates and descirptions - for ones like paths or areas, the cooridnates could be the center point would suffice and then ill add descriptions

### C4. Operational Volume
Should the map auto-calculate operational volume?
- Yes, show contingency volume (speed × 10s) + ground risk buffer (1:1 altitude)
- No, I'll calculate manually
- Show it but let me override

**Answer:**
yes, show contingency volume (speed × 10s) + ground risk buffer (1:1 altitude)

### C5. Map Provider
Which map style do you prefer?
- Satellite imagery (like Google Earth)
- Street map style
- Topographic
- Aviation charts overlay
- Ability to switch between styles

**Answer:**
all of those options would be oideal, and ability to switch. 

---

## SECTION D: SORA Calculator

### D1. SORA Scope
How comprehensive should the SORA calculator be?
- Full SORA 2.5 (iGRC → mitigations → fGRC → ARC → TMPR → residual ARC → SAIL → OSO)
- Simplified (population + UA → SAIL, skip intermediate steps)
- Just show final SAIL, I'll calculate elsewhere

**Answer:**
Full SORA 2.5 (iGRC → mitigations → fGRC → ARC → TMPR → residual ARC → SAIL → OSO
this system should include pull down info menus to help me work through these sections as the content is quite challenbging - detailed informative sections. for isntance, i dont know ahat erach OSO is or how to meet it specifically, so this syustem should explain each one and give me the how to meet various levels.

### D2. Population Categories
How do you want to select population category?
- Visual cards with descriptions (like old Muster)
- Simple dropdown
- Auto-detect from map (future feature)

**Answer:**
Simple dropdown

### D3. UA Characteristics
How do you select UA characteristics (size/speed)?
- Manual selection from predefined categories
- Auto-suggest based on assigned aircraft specs
- Enter custom values (dimension + speed)

**Answer:**
when in the admin i will be including the equipoment we will be using - ion that equipments library all the specs should be there - i will select which equioment to be used on the fdlight and we will use its specs - in the case where more than 1 piece of equipment is to be used, we will use the equipment with the hgihest potential risk

### D4. Ground Mitigations (M1, M2)
For each mitigation, what do you need to capture?
- Just enabled/disabled toggle
- Enabled + robustness level (low/medium/high)
- Enabled + robustness + evidence/justification text

**Answer:**
Enabled + robustness + evidence/justification text - there should be infomrative descirptions, perhaps in anohte rinformaiton pull down where i can learn about what each level needs and select based on descriptive content

### D5. Air Risk (ARC)
How do you determine ARC?
- Select initial ARC manually (ARC-a through ARC-d)
- Auto-suggest based on airspace class
- Both options

**Answer:**
Select initial ARC manually (ARC-a through ARC-d)

### D6. TMPR (Tactical Mitigation)
Do you use TMPR to reduce ARC?
- Yes, need VLOS/EVLOS/BVLOS options with robustness levels
- Sometimes, keep it simple
- No, I don't use TMPR

**Answer:**
Yes, need VLOS/EVLOS/BVLOS options with robustness levels

### D7. OSO Compliance Tracking
Do you need to track Operational Safety Objectives?
- Yes, full OSO compliance matrix with robustness levels per OSO
- Yes, but simplified (just checkboxes)
- No, I track OSO compliance elsewhere

**Answer:**
Yes, full OSO compliance matrix with robustness levels per OSO

### D8. Adjacent Area / Containment
Do you need the adjacent area and containment assessment?
- Yes, full assessment with containment method selection
- Just a note field for adjacent area considerations
- No

**Answer:**
Yes, full assessment with containment method selection

### D9. SORA Visual Display
How should SORA results be displayed?
- Visual flow diagram (iGRC → fGRC → ARC → SAIL)
- Simple summary cards
- Detailed tables
- All of the above

**Answer:**
Visual flow diagram (iGRC → fGRC → ARC → SAIL)

### D10. Equipment Declarations Integration
Should SORA auto-suggest mitigations based on aircraft's TC 922.XX declarations?
- Yes, show which SADs the aircraft has and suggest applicable mitigations
- No, I'll select mitigations manually

**Answer:**
Yes, show which SADs the aircraft has and suggest applicable mitigations
---

## SECTION E: Resource Assignment

### E1. Crew Assignment
How do you assign operators to a project?
- Select from Operators library, assign role (PIC, VO, etc.)
- Just add names manually
- Both options

**Answer:**
Both options - onlyt because someone might be from another company that we dont have as an operator

### E2. Crew Rates
For cost calculation, which rate do you use?
- Always daily rate
- Choose per assignment (hourly/daily/weekly)
- Different rates for different phases

**Answer:**
Choose per assignment (hourly/daily/weekly) 

### E3. Equipment vs Aircraft
Should equipment and aircraft be:
- Combined in one "Equipment" section
- Separate sections (Equipment + Aircraft)
- Aircraft is part of Flight Plan, Equipment is separate

**Answer:**
Combined in one "Equipment" section

### E4. Services Assignment
How do you assign services to a project?
- Select from Services library
- Add service details inline
- Both

**Answer:**
 Select from Services library - but id like a section when adding to incluide a xcustom descirpotion or edit the service for the project specific but not effect its library content

### E5. Resource Availability
Do you need to check if a resource is already booked on project dates?
- Yes, show conflicts
- No, I'll manage availability manually

**Answer:**
No, I'll manage availability manually

---

## SECTION F: Cost Estimation

### F1. Cost Categories
Which cost categories do you need? (Check all)
- [ ] Pre-field tasks (planning, permits, etc.)
- [ ] Crew (operators × days × rate)
- [ ] Equipment (equipment × days × rate)
- [ ] Aircraft (aircraft × days × rate)
- [ ] Services (from Services library)
- [ ] Travel/accommodation
- [ ] Expenses (receipts, actuals)
- [ ] Other: _______________

**Answer:**
check all - and they shoiuld organzie into a cost document by labour anbd materials

### F2. Field Days
How is "field days" determined?
- Manual input
- Calculated from project dates
- Per-resource (different resources, different days)

**Answer:**
when planning the project there will be a field days input - however ill manually input the number to calcualte services, operators and equipment agfainst for each one - having a quick button that automatically calcualkted that item against the number of field days would be a nice option

### F3. Overhead & Markup
Do you need overhead percentage and markup percentage?
- Yes, both (overhead % on costs, then markup % for profit)
- Just markup %
- No, I calculate final price elsewhere

**Answer:**
yes id like that in their as an option bnut not reqauired - kinda like how i have/want a button for modifying a price like rush job, fmaily frineds rate, non proft rate etc.

### F4. Cost Display
How should costs be displayed?
- Summary card with total only
- Expandable sections by category
- Full detailed table
- Both summary and detailed views

**Answer:**
Full detailed table - ideally written in a way thats compatible wiht uploading to qwuiuckboioks

### F5. Budget vs Actual
Do you need to track estimated vs actual costs?
- Yes, show variance
- No, just estimates

**Answer:**
Yes, show variance - but i dont want to send this to my clients i jsut weant to track it in the planner 

### F6. Quoted Price
Do you need a "quoted price" field separate from estimated cost?
- Yes (estimated cost is internal, quoted price is what client pays)
- No

**Answer:**
- Yes (estimated cost is internal, quoted price is what client pays)

---

## SECTION G: Safety Planning

### G1. Hazard Identification
How do you identify and track hazards?
- Add hazards with controls inline
- Link to FHA documents from library
- Both
- Just notes field

**Answer:**
- Both 

### G2. Emergency Contacts
What emergency contact info do you need?
- Names and phone numbers only
- Full contact cards (name, role, phone, email)
- Link to Operators library for contacts

**Answer:**
emergency contacts would be operators i select, but also and morpe iprotasntly, the air trafifc controller, 911, ambulance, site emergnecy, navc canada, flight informastionc enter, those tpyes of things

### G3. Emergency Facilities
Do you need to track nearby facilities?
- Yes (hospitals, fire stations, police) with addresses and distances
- Just notes
- Mark on map, no separate list

**Answer:**
Yes (hospitals, fire stations, police) with addresses and distances

### G4. PPE Requirements
How do you track PPE?
- Checklist of PPE items (hi-vis, hard hat, etc.)
- Notes field
- Not needed

**Answer:**
Checklist of PPE items (hi-vis, hard hat, etc.)

### G5. Communications Plan
What comms info do you need?
- Radio frequencies and channels
- Contact phone numbers
- Signal words (MAYDAY, PAN PAN, etc.)
- All of the above
- Just notes

**Answer:**
all of hte above

---

## SECTION H: Tailgate Meetings

### H1. Tailgate Frequency
How many tailgate meetings per project?
- One per project
- One per site (if multi-site)
- Multiple per project (one per day/session)

**Answer:**
it can happen at any time - as many times a day as needed and anywhere on or off site - so it needs to be entireely flexible and tracked when and who.

### H2. Tailgate Content
What goes in a tailgate meeting? (Check all)
- [ ] Date, time, location
- [ ] Objectives for the day
- [ ] Identified risks and controls
- [ ] Weather conditions
- [ ] Site conditions
- [ ] Attendees list
- [ ] Fit-for-duty confirmation per attendee
- [ ] Sign-off (who conducted)
- [ ] Other: _______________

**Answer:**
all of the above

### H3. GO/NO-GO Decision
How does the GO/NO-GO work?
- Buttons: GO / NO-GO / CONDITIONAL
- Include reason field for NO-GO
- Include conditions field for CONDITIONAL

**Answer:**
Buttons: GO / NO-GO / CONDITIONAL with a notes section if needed

### H4. GO/NO-GO Trigger
What happens when GO/NO-GO is triggered?
- Send notification to distribution list
- Log the decision with timestamp
- Both
- Just record it, no notification

**Answer:**
Both


### H5. Notification Recipients
Who receives GO/NO-GO notifications?
- Predefined list on the project (notification contacts)
- Select from Operators library
- Enter email/phone manually

**Answer:**
Predefined list on the project (notification contacts)

### H6. Notification Content
What should the notification say?
- Basic: "GO/NO-GO triggered for [Project] by [Person]"
- Detailed: Include reason, time, location
- Customizable template

**Answer:**
 Basic: "GO/NO-GO triggered for [Project] by [Person]" and any thing written in the notes section of the go/nogo/conditional - the reason i want this is because i will be screen shoting the flgiht plan and putting it in this section so that anyone who needs to know where we will be flying (as this is the ghihest risk concern for other operators), will know where we are flying and werther or not we intend to.
---

## SECTION I: Notifications

### I1. Notification Channels
Which channels do you need?
- Email only
- SMS only
- Both email and SMS
- In-app only

**Answer:**
 Both email and SMS

### I2. Other Notification Triggers
Besides GO/NO-GO, any other notifications needed?
- Project status changes?
- Upcoming project reminders?
- None, just GO/NO-GO

**Answer:**
None, just GO/NO-GO and whatever i put in the notes
---

## SECTION J: Document Generation

### J1. Export Types
What documents do you need to generate?
- Internal plan (all details for internal use)
- External plan (client-facing, selected sections)
- Both

**Answer:**
both

### J2. Export Format
What format for exports?
- Plain text (you beautify elsewhere)
- Markdown
- PDF
- Word document

**Answer:**
plan text

### J3. Export Sections
Which sections should be exportable? (Check all)
- [ ] Project overview
- [ ] Site/map details
- [ ] SORA assessment
- [ ] Crew assignments
- [ ] Equipment list
- [ ] Cost estimate
- [ ] Safety/emergency plan
- [ ] Tailgate record
- [ ] All of the above

**Answer:**
all of the above

---

## SECTION K: Field Tools (In-App)

### K1. IMSAFE Checklist
Do you need IMSAFE self-check in the app?
- Yes, as a reference tool (no data saved)
- Yes, with ability to record responses
- No

**Answer:**
 Yes, as a reference tool (no data saved)

### K2. Checklists
Do you need other checklists in the project?
- Yes, link to checklists from Forms/Documents library
- Yes, inline checklist builder
- No

**Answer:**
not yet

### K3. Weather Integration
Do you want weather data in the project?
- Yes, fetch current weather for site location
- No, I check weather separately

**Answer:**
No, I check weather separately
---

## SECTION L: Project Stages/Pipeline

### L1. Stage Configuration
The database has configurable stages (Prospect → Proposal → Planning → Active → Complete → Invoiced). Do you need:
- Ability to customize stages (add/remove/rename)
- Fixed stages as defined
- Simple status field (draft, active, complete, archived)

**Answer:**
Simple status field (draft, active, complete, archived)

### L2. Stage Transitions
Should there be rules for stage transitions?
- Yes (e.g., can't mark Complete without tailgate)
- No, free movement between stages

**Answer:**
No, free movement between stages
---

## SECTION M: Client Information

### M1. Client Details
What client info do you need on a project?
- Just client name
- Name + contact (email, phone)
- Full client profile (address, multiple contacts)
- Link to a Clients library (future)

**Answer:**
Name + contact (email, phone)

### M2. Notification Contacts
Are notification contacts the same as client contacts?
- Yes
- No, separate list (may include client + internal team + external stakeholders)

**Answer:**
No, separate list (may include client + internal team + external stakeholders)
---

## SECTION N: Dates & Scheduling

### N1. Date Fields
Which date fields do you need?
- Start date and end date
- Due date only
- Multiple date fields (proposal due, start, end, invoice date)

**Answer:**
the dates i often use are feidl start date, field end date (sometimes this is multiple mentions), and deliverable dates

### N2. Calendar Integration
Do you need Google Calendar sync for project dates?
- Yes, create calendar events for project dates
- No

**Answer:**
Yes, create calendar events for project dates

---

## SECTION O: Project Templates

### O1. Project Templates
Do you need project templates?
- Yes, save a project as template, create new projects from template
- No

**Answer:**
- No


### O2. Default Values
Should new projects have default values?
- Yes (e.g., default crew, default equipment, standard hazards)
- No, start blank

**Answer:**
No, start blank
---

## SECTION P: Auto-Save & UX

### P1. Auto-Save Behavior
How should saving work?
- Auto-save with debounce (saves 2 seconds after you stop typing)
- Manual save button only
- Both (auto-save + manual save option)

**Answer:**
- Auto-save with debounce (saves 2 seconds after you stop typing)

### P2. Save Feedback
How should save status be shown?
- Subtle indicator (small icon showing saved/saving/error)
- Toast notification
- No indicator needed

**Answer:**
 Subtle indicator (small icon showing saved/saving/error)

---

## SECTION Q: What's Missing?

### Q1. Features I Missed
What features do you need that I haven't asked about?

**Answer:**
trhe current map tool is lovely but doesnt work well. its ahrd to edit in the map, artifacats remain when theiy are deleted, biug like that make it useless. but the ability to visualize multiple sites wihtin a map, to see the flgiht path in 3d above the ground is amazing - these things make planning and risk assessment so engaging. i want the map tool to be smart, impressive, engagging but also clean and well working. io want you tel set this up perfectly, and if that means you need assitsance from me, use me. if we need APIs, or pulled ifno from mapbox or whatever, im here to help just walk me thorugh it. 

### Q2. Pain Points
What frustrated you most about the project detail page in old Muster?

**Answer:**
the layout was confusing - for isntance when inputing a hazard iut was like 5 lines of work - but in a simple table i could input in one line using pull down menus category, decription, liklliohood, severytitr, score, control type, description, residuals - it could still all be colour coated and visually appealing but simple and taking less space. easier to read. this is the samne problem wiht the SORA calcualtor. i appreascite visual egngmangment and appeal buit i also desperastly need simplified tools and usability. simple, functional, clean engagment using scmart solor scehemes, and step by step engamgent.

redundancy - while i appreciate having comprehesnive coverage, i do not want redundant input.

### Q3. Must-Haves
What are your absolute non-negotiables for the project detail page?

**Answer:**
calcualtions or auto populated content of any kind must follow clean, accurartete logic. for isntannce, the SAIL calcualtor must be an accurate tool based on the JARUS SORA regualtions. these cannot be poorly logiced

### Q4. Nice-to-Haves
What features would be nice but aren't essential?

**Answer:**


---

## SECTION R: Visual Reference

### R1. Screenshots
Can you share screenshots of what works well (from old Muster or other tools)?

**Answer:**

### R2. What Looked Bad
In the version I just pushed, what specifically looked wrong?

**Answer:**

---

*Save this file with your answers and let me know when ready to proceed.*
