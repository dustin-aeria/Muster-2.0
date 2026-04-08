# AERIA SOLUTIONS LTD

# AUTOMATION AND TECHNOLOGY MANAGEMENT POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | CRM-003 |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | February 12, 2019 | Initial release - basic automation guidance | Dustin Wales |
| v2.0 | February 10, 2020 | Expanded mode awareness section | Dustin Wales |
| v3.0 | February 8, 2021 | Added automation complacency prevention | Dustin Wales |
| v3.1 | February 14, 2022 | Updated for new aircraft automation features | Dustin Wales |
| v4.0 | February 13, 2023 | Enhanced software management protocols | Dustin Wales |
| v4.1 | February 12, 2024 | Added AI/autonomous system considerations | Dustin Wales |
| v4.2 | February 10, 2025 | Expanded manual skill retention requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild - web platform integration | Dustin Wales |

---

## 1. Purpose

This policy establishes requirements for the effective management of automation and technology in RPAS operations. As RPAS become increasingly automated, proper understanding, monitoring, and management of these systems is critical to safe operations.

---

## 2. Scope

This policy applies to:
- All RPAS flight operations
- All personnel operating automated systems
- Software and firmware management
- AI-enabled and autonomous RPAS systems
- Ground control systems and applications

---

## 3. References

| Reference | Description |
|:----------|:------------|
| CRM-001 | Crew Resource Management Manual |
| OPS-001 | RPAS Flight Operations Policy |
| OPS-005 | BVLOS Operations Policy |
| MCM-001 | Maintenance Control Manual |
| TCP-001 | Training and Competency Program Manual |

---

## 4. Automation Philosophy

### 4.1 Guiding Principles

Aeria Solutions adopts the following automation philosophy:

1. **Pilot Authority:** The PIC always retains ultimate authority and responsibility regardless of automation level
2. **Appropriate Use:** Automation should be used appropriately for the situation, not by default
3. **Understanding First:** Pilots must understand what automation is doing before relying on it
4. **Monitoring Required:** Automated systems require active monitoring, not passive observation
5. **Manual Capability:** Pilots must maintain the ability to operate manually when automation fails
6. **Trust but Verify:** Automation outputs should be verified against other sources when practical

### 4.2 Automation is Not Infallible

**Common automation failures:**
- Sensor failures providing incorrect inputs
- Software bugs causing unexpected behavior
- GPS signal loss or degradation
- Magnetic interference affecting navigation
- Environmental conditions exceeding parameters
- Unexpected mode transitions
- Communication failures

**Operator responsibility:**
- Recognize automation failures
- Take appropriate corrective action
- Revert to manual control when necessary
- Report automation anomalies

---

## 5. Automation Levels and Understanding

### 5.1 RPAS Automation Levels

| Level | Description | Pilot Role | Examples |
|:------|:------------|:-----------|:---------|
| **Level 0** | No automation | Full manual control | Rate mode, acro mode |
| **Level 1** | Stability assistance | Pilot commands, system stabilizes | Attitude mode |
| **Level 2** | Position hold | System maintains position, pilot directs | GPS hold, position mode |
| **Level 3** | Guided flight | System follows waypoints, pilot monitors | Waypoint mission |
| **Level 4** | Autonomous mission | System executes mission, pilot supervises | Automated survey |
| **Level 5** | Full autonomy | System makes all decisions | Not currently authorized |

### 5.2 Understanding Requirements

**Before using any automation level, pilots must understand:**
- How the automation works (basic principle)
- What inputs it requires (sensors, GPS, etc.)
- What behavior to expect in normal operation
- How it will behave in degraded conditions
- How to recognize automation failure
- How to disengage and take manual control
- Recovery procedures from automation failures

### 5.3 Automation Training Requirements

| Automation Level | Training Requirement |
|:-----------------|:---------------------|
| **Level 0-2** | Basic pilot certificate |
| **Level 3** | Mission planning training |
| **Level 4** | Advanced automation training |
| **Level 5** | Not authorized for operations |

---

## 6. Mode Awareness

### 6.1 Mode Awareness Definition

Mode awareness is understanding:
- What mode the system is currently in
- What the system is currently doing
- What the system will do next
- How to change modes when needed

### 6.2 Mode Awareness Requirements

**PICs must:**
- Verbally confirm mode selection during flight
- Announce mode changes
- Verify mode indicated matches expected behavior
- Recognize unintended mode changes
- Know how to force mode changes if needed

### 6.3 Common Mode Awareness Errors

| Error | Description | Prevention |
|:------|:------------|:-----------|
| **Mode confusion** | Uncertainty about current mode | Verify mode on display, observe behavior |
| **Unintended mode change** | System changed mode unexpectedly | Monitor mode indicator, understand triggers |
| **Mode misselection** | Selected wrong mode | Verify selection before confirming |
| **Automation surprise** | Unexpected automation behavior | Understand automation logic thoroughly |

### 6.4 Mode Announcement Protocol

**Call out loud:**
- Mode selection: "Selecting waypoint mode"
- Mode confirmation: "Waypoint mode active, proceeding to waypoint 1"
- Mode change detected: "Mode changed to position hold"
- Mode override: "Taking manual control, attitude mode"

---

## 7. Technology Limitations

### 7.1 GPS Limitations

| Limitation | Impact | Mitigation |
|:-----------|:-------|:-----------|
| **Satellite visibility** | Position loss | Monitor satellite count, avoid obstructed areas |
| **Multipath errors** | Position inaccuracy | Avoid urban canyons, cliff faces |
| **Jamming/interference** | Position loss | Pre-flight interference check |
| **HDOP degradation** | Reduced accuracy | Monitor HDOP, delay if poor |

**Minimum GPS requirements:**
- 10+ satellites (12+ preferred)
- HDOP below 2.0
- Position fix stable for 60 seconds

### 7.2 Compass/Magnetometer Limitations

| Limitation | Impact | Mitigation |
|:-----------|:-------|:-----------|
| **Magnetic interference** | Heading errors, toilet bowl effect | Calibrate on site, avoid metal |
| **Declination errors** | Navigation errors | Verify calibration current |
| **EMI from motors** | Heading drift | Maintain manufacturer separation |

**Pre-flight compass requirements:**
- Calibration within 30 days or after travel
- No interference indications
- Heading agrees with known reference

### 7.3 Sensor Limitations

| Sensor | Limitations | Monitoring |
|:-------|:------------|:-----------|
| **Barometer** | Pressure changes, temperature effects | Cross-check with visual altitude |
| **IMU** | Drift over time, temperature sensitivity | Monitor attitude stability |
| **Obstacle sensors** | Limited range, missed objects, reflections | Visual scanning still required |
| **Optical flow** | Requires texture, fails over water | Ensure appropriate surface |

### 7.4 Communication Limitations

| System | Limitations | Mitigation |
|:-------|:------------|:-----------|
| **RC link** | Range, interference, obstacles | Monitor link quality, maintain LoS |
| **Video link** | Latency, degradation, loss | Do not rely solely on FPV |
| **Telemetry** | Update rate, dropouts | Cross-reference multiple indicators |
| **Cellular** | Coverage, latency, congestion | Primary control via RC |

---

## 8. Manual Skill Retention

### 8.1 Policy Statement

All PICs must maintain proficiency in manual flight operations. Over-reliance on automation degrades manual flying skills, creating risk when automation fails.

### 8.2 Manual Flight Currency Requirements

| Requirement | Frequency | Documentation |
|:------------|:----------|:--------------|
| **Manual takeoff/landing** | Every flight | Flight log |
| **Manual hover/positioning** | Monthly | Training record |
| **Attitude mode flight** | Quarterly | Training record |
| **Emergency procedure practice** | Quarterly | Training record |
| **Manual navigation exercise** | Annually | Competency assessment |

### 8.3 Manual Skills to Maintain

**Essential manual skills:**
- Stable hover in all orientations
- Precise landing without positioning aids
- Manual approach and landing
- Manual altitude control
- Recovery from unusual attitudes
- Flight without GPS assistance
- Flight without position hold

### 8.4 Automation Dependency Prevention

**To prevent automation dependency:**
- Practice manual skills regularly
- Occasionally fly early portions manually
- Conduct manual landings when practical
- Challenge yourself with manual precision tasks
- Do not default to automation for simple tasks

---

## 9. Software and Firmware Management

### 9.1 Update Policy

**Before installing any software/firmware update:**
1. Review release notes for changes
2. Assess impact on operations
3. Test in non-critical environment
4. Obtain Operations Manager approval for major updates
5. Document update in maintenance records
6. Conduct test flight after update

### 9.2 Update Approval Process

| Update Type | Approval Required | Testing Required |
|:------------|:------------------|:-----------------|
| **Critical security patch** | Operations Manager | Functional test |
| **Minor update (bug fixes)** | PIC | Functional test |
| **Major update (new features)** | Operations Manager | Full test flight |
| **Beta/experimental** | Not permitted | N/A |

### 9.3 Version Documentation

**Maintain records of:**
- Aircraft firmware version
- Controller firmware version
- Mobile app version
- Ground control software version
- Payload firmware version

### 9.4 Rollback Capability

**Before updating:**
- Document current working version
- Understand rollback procedure
- Ensure rollback is possible
- If rollback not possible, delay update until thoroughly tested

### 9.5 Multi-Fleet Consistency

**For fleet operations:**
- Maintain consistent versions across similar aircraft when practical
- Document any version variations
- Brief pilots on version differences
- Phase updates across fleet, not all at once

---

## 10. Automation Complacency Prevention

### 10.1 Understanding Complacency

Automation complacency occurs when operators:
- Trust automation without verification
- Reduce monitoring due to perceived reliability
- Fail to maintain situational awareness
- Are slow to recognize automation failures
- Hesitate to take manual control

### 10.2 Complacency Warning Signs

| Warning Sign | Description |
|:-------------|:------------|
| **Reduced scanning** | Not checking instruments, airspace |
| **Distraction** | Attending to non-essential tasks during flight |
| **Surprise at automation behavior** | Not expecting what automation does |
| **Slow response to anomalies** | Taking longer to notice and react |
| **Over-trust** | "It's always worked before" thinking |
| **Skill fade** | Difficulty with manual operations |

### 10.3 Complacency Prevention Strategies

**Active monitoring:**
- Continuously scan instruments
- Cross-check automation outputs
- Maintain visual awareness
- Anticipate automation actions
- Challenge unexpected behaviors

**Deliberate practice:**
- Regular manual flying
- Abnormal procedure practice
- Scenario-based training
- Self-assessment of skills

**Crew practices:**
- Verbalize automation status
- Challenge each other
- Discuss automation behaviors
- Share observations

### 10.4 Structured Automation Monitoring

**During automated flight:**
- Check position every 30 seconds
- Verify altitude is correct
- Confirm heading/track as expected
- Monitor battery consumption rate
- Scan for traffic and obstacles
- Check link quality indicators
- Verify next waypoint is correct

---

## 11. AI and Autonomous System Considerations

### 11.1 AI in RPAS Operations

AI-enabled features increasingly appear in RPAS systems:
- Intelligent flight modes (ActiveTrack, Spotlight)
- Obstacle avoidance systems
- Automated subject detection
- Flight planning optimization
- Anomaly detection

### 11.2 AI System Limitations

**Critical limitations of AI systems:**

| Limitation | Description | Mitigation |
|:-----------|:------------|:-----------|
| **Training data bias** | AI behavior limited by training | Understand system capabilities |
| **Edge cases** | AI may fail in unusual situations | Monitor actively, maintain manual backup |
| **False confidence** | AI may act confidently when wrong | Verify AI decisions |
| **Opacity** | Cannot always understand AI reasoning | Focus on outcomes, not process |
| **Environmental sensitivity** | AI may fail in new environments | Test in new conditions carefully |

### 11.3 AI Feature Authorization

| AI Feature Type | Authorization | Requirements |
|:----------------|:--------------|:-------------|
| **Obstacle avoidance** | Authorized | Not substitute for visual scanning |
| **Intelligent tracking** | Authorized | Manual override ready |
| **Automated takeoff/landing** | Authorized | Pilot ready to intervene |
| **Autonomous decision-making** | Not authorized | Pilot must make go/no-go decisions |
| **Unsupervised operations** | Not authorized | Pilot must supervise all flights |

### 11.4 Future Autonomous Operations

**As autonomous capabilities evolve:**
- Regulatory approval required before use
- Thorough testing and validation required
- Risk assessment for autonomous features
- Manual override always available
- Pilot supervision required
- Clear boundaries on autonomous authority

---

## 12. Incident Reporting

### 12.1 Automation-Related Events to Report

**Report any of the following:**
- Unexpected automation behavior
- Mode changes without pilot input
- Automation failure requiring manual takeover
- GPS or sensor anomalies affecting automation
- Software bugs or glitches
- Near-misses related to automation
- Automation complacency observations

### 12.2 Reporting Process

1. Complete flight and ensure safety
2. Document details while fresh
3. Report via SMS reporting system
4. Include automation mode, software versions
5. Preserve flight logs if available
6. Participate in investigation as needed

---

## 13. Roles and Responsibilities

### 13.1 Accountable Executive

- Ensure automation management policy is implemented
- Provide resources for automation training
- Review automation-related incidents

### 13.2 Operations Manager

- Approve software/firmware updates
- Monitor automation incident trends
- Ensure training program addresses automation
- Develop automation procedures

### 13.3 PICs

- Understand automation systems used
- Maintain mode awareness during flight
- Retain manual flying skills
- Report automation anomalies
- Follow software update procedures
- Actively prevent automation complacency

---

## 14. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| CRM-001 | Crew Resource Management Manual |
| CRM-002 | Fatigue Risk Management |
| OPS-001 | RPAS Flight Operations Policy |
| MCM-001 | Maintenance Control Manual |
| TCP-001 | Training and Competency Program Manual |
| OPS-011-PR | Emergency Procedures (RPAS) |

---

**Document Control:** CRM-003 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
