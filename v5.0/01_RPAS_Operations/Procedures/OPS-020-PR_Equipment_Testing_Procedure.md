# AERIA SOLUTIONS LTD

# EQUIPMENT TESTING PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-020-PR |
| **Version** | v5.0 |
| **Effective Date** | March 18, 2026 |
| **Review Date** | March 18, 2027 |
| **Document Owner** | Maintenance Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure establishes systematic testing requirements for all RPAS equipment to ensure operational safety and reliability.

---

## 2. Testing Schedule

Aeria requires testing at four scheduled times:

| Schedule | When | Purpose |
|:---------|:-----|:--------|
| **NEW** | Upon purchase of new equipment | Verify equipment before operational use |
| **PRE-OPERATION** | Immediately before any operation | Confirm readiness for specific task |
| **POST-MAINTENANCE** | After any maintenance activity | Verify repairs/updates successful |
| **ANNUAL** | Every 12 months | Comprehensive system verification |

---

## 3. Testing Procedures

### 3.1 System Start-Up Test

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Power On | Power up RPAS | No error messages |
| Boot Sequence | Observe initialization | Completes normally |
| LED Indicators | Check all status lights | Correct colors/patterns |
| Sound Alerts | Listen for startup tones | Normal sounds |

**Result:** ☐ CLEAR ☐ GROUND

### 3.2 Ground Control Checks

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Controller Power | Power up controller | Full charge, no errors |
| App Connection | Launch flight app | Connects to RPAS |
| Telemetry | Verify data display | All parameters showing |
| Video Feed | Check FPV/camera feed | Clear image |
| Controls | Move sticks (motors off) | Correct response on screen |

**Result:** ☐ CLEAR ☐ GROUND

### 3.3 Payload Pre-Flight Checks

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Attachment | Verify payload secure | No movement |
| Power | Confirm payload powered | Indicators normal |
| Function | Test payload operation | Responds correctly |
| Obstruction | Check for interference | Nothing blocking |

**Result:** ☐ CLEAR ☐ GROUND

### 3.4 Launch Test

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Motor Start | Arm and spin up motors | All motors spin evenly |
| Lift Off | Gentle takeoff to 2m | Stable lift |
| Hover | Hold position | Stable hover, no drift |
| Audio | Listen for sounds | Normal motor sound |

**Result:** ☐ CLEAR ☐ GROUND

### 3.5 Communication Checks

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Link Strength | Check signal indicators | Strong signal |
| Range Test | Move controller orientation | No dropouts |
| Interference | Monitor for interference | Clean signal |

**Result:** ☐ CLEAR ☐ GROUND

### 3.6 Attitude and Movement Tests

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Pitch Forward | Gentle forward input | Smooth response |
| Pitch Backward | Gentle backward input | Smooth response |
| Roll Left | Gentle left input | Smooth response |
| Roll Right | Gentle right input | Smooth response |
| Yaw Left | Rotate left | Smooth rotation |
| Yaw Right | Rotate right | Smooth rotation |
| Altitude Up | Increase altitude | Smooth climb |
| Altitude Down | Decrease altitude | Smooth descent |

**Result:** ☐ CLEAR ☐ GROUND

### 3.7 Mode Change Test

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| GPS Mode | Verify in GPS/P mode | Holds position |
| Sport Mode | Switch to sport (if testing) | Responds correctly |
| Return GPS | Switch back to GPS mode | Stable return |

**Result:** ☐ CLEAR ☐ GROUND

### 3.8 Payload In-Flight Checks

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Gimbal | Test gimbal movement | Smooth response |
| Camera | Take test photo/video | Quality acceptable |
| Data | Verify data recording | Files created |

**Result:** ☐ CLEAR ☐ GROUND

### 3.9 Normal Flight Test

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Navigation | Fly simple pattern | Accurate flight |
| Waypoint (if equipped) | Test auto waypoint | Follows path |
| Stability | Observe flight characteristics | No oscillations |

**Result:** ☐ CLEAR ☐ GROUND

### 3.10 RTH Functions Test

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| RTH Initiate | Trigger RTH | Begins return |
| RTH Altitude | Observe altitude change | Rises to set altitude |
| RTH Path | Observe return path | Direct to home |
| RTH Land | Allow auto landing | Lands safely |

**Result:** ☐ CLEAR ☐ GROUND

---

## 4. Equipment Testing Record

### 4.1 Test Record Form

```
RPAS EQUIPMENT TEST RECORD

RPAS Information:
- Make/Model: _________________
- Serial Number: _______________
- Registration: ________________

Test Information:
- Date: _______________________
- Tester Name: _________________
- Testing Schedule: ☐ NEW  ☐ PRE-OP  ☐ POST-MAINT  ☐ ANNUAL

Test Results:
┌────────────────────────────┬───────┬────────┐
│ Procedure                  │ CLEAR │ GROUND │
├────────────────────────────┼───────┼────────┤
│ System Start-Up            │   ☐   │   ☐    │
│ Ground Control Checks      │   ☐   │   ☐    │
│ Payload Pre-Flight Checks  │   ☐   │   ☐    │
│ Launch Test                │   ☐   │   ☐    │
│ Communication Checks       │   ☐   │   ☐    │
│ Attitude and Movements     │   ☐   │   ☐    │
│ Mode Change                │   ☐   │   ☐    │
│ Payload In-Flight          │   ☐   │   ☐    │
│ Normal Flight              │   ☐   │   ☐    │
│ RTH Functions              │   ☐   │   ☐    │
└────────────────────────────┴───────┴────────┘

OVERALL STATUS:  ☐ CLEAR    ☐ LOCKOUT

Notes/Issues Found:
_______________________________________________
_______________________________________________

Tester Signature: _____________ Date: _________
```

---

## 5. Status Definitions

### 5.1 CLEAR Status

Equipment has passed all required tests and is **approved for operational use**.

- All test procedures completed
- All results within acceptable parameters
- No safety concerns identified
- Equipment may be used for operations

### 5.2 LOCKOUT Status

Equipment has **failed one or more tests** and is **NOT approved for operational use**.

- One or more test procedures failed
- Safety concern identified
- Equipment must be tagged and removed from service
- Must not be used until issue resolved and re-tested

### 5.3 LOCKOUT Procedure

| Step | Action |
|:-----|:-------|
| 1 | Immediately cease use of equipment |
| 2 | Attach LOCKOUT tag to equipment |
| 3 | Document issue in testing record |
| 4 | Notify Maintenance Manager |
| 5 | Store separately from operational equipment |
| 6 | Schedule repair/maintenance |
| 7 | After repair, conduct full test procedure |
| 8 | Only return to service with CLEAR status |

---

## 6. Testing Requirements by Schedule

### 6.1 NEW Equipment Testing

**When:** Before first operational use of any new equipment

**Tests Required:** ALL (full test procedure)

**Additional Requirements:**
- Verify registration marking
- Verify insurance coverage
- Add to equipment inventory
- Create maintenance record in AirData
- Document baseline performance

### 6.2 Pre-Operation Testing

**When:** Immediately before each operation (part of Kit Preparation Flow)

**Tests Required:**
- Visual inspection
- Battery check
- Ground control checks
- Basic function verification

**Note:** Full testing not required if equipment has valid ANNUAL or recent POST-MAINTENANCE clearance and no issues since.

### 6.3 Post-Maintenance Testing

**When:** After any maintenance activity including:
- Hardware repairs
- Part replacements
- Software/firmware updates
- Calibration changes

**Tests Required:** ALL (full test procedure)

**Additional Documentation:**
- What maintenance was performed
- Parts replaced (if any)
- Pre-maintenance issue
- Post-maintenance test results

### 6.4 Annual Testing

**When:** Every 12 months from last annual test

**Tests Required:** ALL (full test procedure)

**Additional Requirements:**
- Review maintenance history
- Check for manufacturer service bulletins
- Update firmware if available
- Inspect wear components (props, motors, batteries)
- Recalibrate if needed

---

## 7. Battery-Specific Testing

Batteries require additional testing:

| Test | Procedure | Pass Criteria |
|:-----|:----------|:--------------|
| Visual | Inspect for swelling, damage | No deformation |
| Charge | Full charge cycle | Reaches 100% |
| Capacity | Compare to rated capacity | >80% of rated |
| Balance | Check cell balance | Within 0.05V |
| Temperature | Monitor during charge/discharge | Within limits |

**Battery LOCKOUT triggers:**
- Any visible swelling
- Capacity <80% of rated
- Cell imbalance >0.1V
- Unusual temperature behavior
- Physical damage

---

## 8. Roles & Responsibilities

| Role | Responsibility |
|:-----|:---------------|
| **Maintenance Manager** | Overall testing program, annual tests, lockout decisions |
| **Operations Manager** | Ensure pre-operation testing completed |
| **PIC** | Pre-operation checks, report issues |
| **All Crew** | Report any equipment concerns |

---

## 9. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001 | Maintenance Control Manual |
| MCM-005-PR | Battery Management Procedure |
| OPS-016-PR | General Operations Flow |

---

**Document Control:** OPS-020-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
