# AERIA SOLUTIONS LTD

# PAYLOAD OPERATIONS PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-010-PR |
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

This procedure describes the installation, operation, and management of payloads on Aeria Solutions aircraft.

---

## 2. Scope

This procedure applies to:
- All payload operations
- Camera, LiDAR, thermal, and other sensors
- Payload operators and PICs

---

## 3. References

| Reference | Description |
|:----------|:------------|
| OPS-006 | Payload Management Policy |
| MCM-004-PR | Payload Maintenance Procedure |
| Aircraft manuals | Payload specifications |

---

## 4. Procedure

### 4.1 Payload Selection

Select payload based on:
- Mission requirements
- Data type needed
- Aircraft compatibility
- Weight and balance
- Conditions (weather, lighting)

Verify payload is approved for aircraft.

### 4.2 Weight and Balance

Before installing payload:

**Calculate:**
```
Aircraft empty weight:      _____ g
Battery weight:             _____ g
Payload weight:             _____ g
Accessories/mounts:         _____ g
                           ─────────
TOTAL:                      _____ g
MTOW:                       _____ g
```

**Total must not exceed MTOW.**

For CG-sensitive aircraft, verify CG within limits per aircraft manual.

### 4.3 Payload Installation

#### Standard Camera/Gimbal

| Step | Action |
|:-----|:-------|
| 1 | Power off aircraft |
| 2 | Mount payload per aircraft procedure |
| 3 | Verify secure attachment |
| 4 | Connect power cable |
| 5 | Connect data cable (if applicable) |
| 6 | Verify gimbal moves freely |
| 7 | Power on and verify function |

#### LiDAR/Specialized Sensors

- Follow sensor-specific mounting procedure
- Verify calibration requirements
- Configure data collection settings
- Test before flight

### 4.4 Pre-Flight Payload Checks

| Check | Verification |
|:------|:-------------|
| **Mounting** | Secure, no play |
| **Connections** | Power and data connected |
| **Lens/Sensor** | Clean, undamaged |
| **Storage** | SD card/storage installed, formatted |
| **Settings** | Correct for mission |
| **Function test** | Trigger capture; verify |
| **Gimbal** | Full range of motion |

### 4.5 Payload Operation During Flight

**Responsibility division:**

| Role | Duties |
|:-----|:-------|
| PIC | Safe flight; aircraft control; flight decisions |
| Payload Operator | Payload operation; data capture; monitoring |

**If PIC is also payload operator:**
- Flight safety takes priority
- Use automated capture when possible
- Do not sacrifice situational awareness

**Communication:**
- PO informs PIC of capture status
- PIC informs PO of positioning
- Clear communication prevents conflicts

### 4.6 Data Collection Modes

| Mode | Use |
|:-----|:----|
| **Manual trigger** | Individual photos; specific targets |
| **Interval** | Time-based capture; mapping |
| **Distance-based** | Distance-triggered; photogrammetry |
| **Video** | Continuous recording; inspection |
| **Automated mission** | Pre-planned capture points |

Select mode based on mission requirements.

### 4.7 Mapping/Survey Operations

For mapping and survey:
1. Plan flight path with appropriate overlap
2. Configure camera settings (shutter, interval)
3. Verify ground sample distance meets requirements
4. Capture ground control points if needed
5. Monitor coverage during flight
6. Verify data immediately after flight

### 4.8 Thermal Operations

For thermal imaging:
1. Allow sensor to stabilize (warm-up)
2. Configure temperature range
3. Note ambient conditions for calibration
4. Capture reference images
5. Consider sun angle and reflections

### 4.9 LiDAR Operations

For LiDAR:
1. Calibrate before flight
2. Configure point density settings
3. Monitor storage capacity
4. Verify IMU/GNSS function
5. Complete required ground control

### 4.10 Post-Flight Data Management

| Step | Action |
|:-----|:-------|
| 1 | Remove storage media safely |
| 2 | Download data immediately |
| 3 | Verify data transferred completely |
| 4 | Review sample images/data |
| 5 | Label with flight/project info |
| 6 | Back up to secondary location |
| 7 | Format media for next flight |

### 4.11 Payload Removal/Storage

After operations:
1. Power down payload
2. Disconnect cables
3. Remove payload carefully
4. Clean lens/sensor if needed
5. Store in protective case
6. Note any issues for maintenance

---

## 5. Troubleshooting

| Issue | Action |
|:------|:-------|
| No image capture | Check SD card; check camera settings; power cycle |
| Gimbal not responding | Check connections; calibrate; power cycle |
| Poor image quality | Clean lens; adjust settings; check vibration |
| Storage full | Replace/empty media; adjust resolution if needed |
| Connection error | Check cables; try different cable |

**If issue cannot be resolved, do not fly with malfunctioning payload.**

---

## 6. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **PIC** | Overall safety; weight/balance; flight decisions |
| **Payload Operator** | Install, operate, manage data; report issues |
| **Operations Manager** | Maintain payload inventory; oversee maintenance |

---

## 7. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-006 | Payload Management Policy |
| MCM-004-PR | Payload Maintenance Procedure |
| ADM-004 | Privacy Policy |
| Aircraft Manuals | Payload specifications |

---

**Document Control:** OPS-010-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
