# AERIA SOLUTIONS LTD

# PAYLOAD MANAGEMENT POLICY

---

| Field | Value |
|:------|:------|
| **Document Number** | OPS-006 |
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

This policy establishes requirements for the installation, operation, and management of payloads on Aeria Solutions RPAS to ensure safe operations and quality data collection.

---

## 2. Scope

This policy applies to:
- All payloads mounted on Aeria RPAS
- Cameras, LiDAR, thermal sensors, and other imaging devices
- Delivery and specialized payloads
- Payload operators and technicians

---

## 3. Definitions

| Term | Definition |
|:-----|:-----------|
| **Payload** | Equipment carried by RPAS other than equipment required for flight |
| **MTOW** | Maximum Take-Off Weight |
| **CG** | Centre of Gravity |
| **Gimbal** | Stabilization mount for camera/sensor |

---

## 4. References

| Reference | Description |
|:----------|:------------|
| CAR 901.19 | RPAS equipment requirements |
| Aircraft Flight Manuals | Payload limitations |
| MCM-001 | Maintenance Control Manual |

---

## 5. Policy

### 5.1 Approved Payloads

Only approved payloads shall be mounted on company aircraft.

**Approved payloads are:**
- Listed in aircraft configuration records
- Within weight limitations
- Compatible with aircraft mounting systems
- Maintained per MCM requirements

### 5.2 Payload Categories

| Category | Examples | Requirements |
|:---------|:---------|:-------------|
| **Standard Camera** | RGB cameras, mapping cameras | Standard operations |
| **Thermal/IR** | FLIR, thermal sensors | Privacy considerations |
| **LiDAR** | Aerial laser scanning | Enhanced procedures |
| **Multispectral** | Agricultural/environmental sensors | Standard operations |
| **Delivery** | Package delivery systems | SFOC typically required |
| **Specialized** | Custom sensors, equipment | Operations Manager approval |

### 5.3 Weight and Balance

**Before any flight with payload:**
1. Verify total weight including payload does not exceed MTOW
2. Verify CG remains within limits
3. Verify mounting is secure
4. Document configuration

**Weight Calculation:**
```
Aircraft empty weight
+ Battery weight
+ Payload weight
= Total take-off weight (must be ≤ MTOW)
```

### 5.4 Mounting Requirements

Payloads shall be:
- Mounted using approved attachment methods
- Secured to prevent in-flight detachment
- Balanced to maintain CG limits
- Inspected before each flight
- Removed and reinstalled per MCM procedures

**Do not modify aircraft or mounts without Operations Manager approval.**

### 5.5 Payload Pre-Flight

Before payload operations:
1. Verify payload is properly mounted
2. Check all connections (power, data)
3. Verify payload function (camera, sensor test)
4. Confirm storage/recording ready
5. Check gimbal operation (if applicable)
6. Document payload configuration on flight log

### 5.6 Payload Operations

During flight:
- Monitor payload function via telemetry/link
- Operate payload per mission requirements
- Report any payload anomalies
- Do not adjust physical mount in flight

### 5.7 Data Management

**Imagery and sensor data:**
- Download data after each flight
- Back up data promptly
- Label files with flight/project reference
- Process per client or project requirements
- Handle data per privacy and confidentiality requirements

### 5.8 Dangerous Goods

**Payloads shall not contain dangerous goods unless:**
- Properly declared and approved
- Handled per Transportation of Dangerous Goods Regulations
- Operations Manager has approved in advance

Examples requiring special handling:
- Radioactive sources (certain sensors)
- Flammable substances
- Lithium batteries beyond aircraft batteries

### 5.9 Privacy Considerations

When operating cameras/sensors:
- Consider privacy implications
- Avoid capturing private property where possible
- Handle data per privacy policies
- Follow client/contract requirements
- See ADM-004 Privacy Policy

### 5.10 Payload Maintenance

- Payloads shall be maintained per manufacturer requirements
- Document maintenance in equipment records
- Calibrate sensors as required
- Report defects immediately
- Do not use damaged or malfunctioning payloads

---

## 6. Payload Inventory

Operations Manager maintains payload inventory including:
- Payload identification
- Serial numbers
- Compatible aircraft
- Weight
- Calibration status
- Maintenance records

---

## 7. Roles & Responsibilities

| Role | Responsibilities |
|:-----|:-----------------|
| **Operations Manager** | Approve payloads; maintain inventory; oversee maintenance |
| **PIC** | Verify weight/balance; inspect mounting; operate safely |
| **Payload Operator** | Operate payload; manage data; report issues |

---

## 8. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| OPS-010-PR | Payload Operations Procedure |
| MCM-001 | Maintenance Control Manual |
| MCM-004-PR | Payload Maintenance Procedure |
| ADM-004 | Privacy Policy |

---

## 9. Approval

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Author | — | — | March 11, 2026 |
| Approved By | Dustin Wales | _________________ | _________________ |

---

**Document Control:** OPS-006 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
