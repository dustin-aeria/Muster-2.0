# AERIA SOLUTIONS LTD

# BATTERY MANAGEMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | MCM-005-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Person Responsible for Maintenance (PRM) |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes the management of lithium polymer (LiPo) and lithium-ion batteries used in RPAS operations, ensuring safe handling and optimal performance.

---

## 2. Scope

This procedure applies to:
- All flight batteries
- Controller batteries
- Ground equipment batteries
- All personnel handling batteries

---

## 3. References

| Reference | Description |
|:----------|:------------|
| MCM-001 | Maintenance Control Manual |
| Manufacturer Guidelines | Battery-specific requirements |
| Transport Canada | Lithium battery transport |

---

## 4. Procedure

### 4.1 Battery Identification

Each battery shall be:
- Labeled with unique identifier
- Tracked in battery log (FRM-BATT)

Track:
- Battery ID
- Type/capacity
- Aircraft compatibility
- Acquisition date
- Cycle count
- Condition status

### 4.2 Pre-Flight Battery Check

Before flight:

| Check | Criteria |
|:------|:---------|
| Visual | No swelling, damage, or deformation |
| Connectors | Clean, undamaged |
| Charge level | Per mission requirements (typically 100%) |
| Temperature | Room temperature (15-25°C ideal) |
| Cycle count | Within service limits |

**Do not fly with:**
- Swollen battery
- Damaged casing
- Damaged connectors
- Battery that has been dropped/impacted
- Cold battery (<10°C)
- Battery beyond cycle limit

### 4.3 Charging

#### Charging Environment
- Well-ventilated area
- Away from flammable materials
- On fireproof surface (LiPo bag, ceramic tile)
- Never unattended

#### Charging Procedure

| Step | Action |
|:-----|:-------|
| 1 | Inspect battery before charging |
| 2 | Use correct charger for battery type |
| 3 | Select correct battery settings (cell count, type) |
| 4 | Connect balance lead first, then main lead |
| 5 | Select appropriate charge rate (typically 1C) |
| 6 | Monitor during charging |
| 7 | Disconnect when complete |
| 8 | Allow to cool before use |

#### Charging Parameters

| Parameter | Typical Setting |
|:----------|:----------------|
| Mode | Balance charge |
| Rate | 1C (or per manufacturer) |
| Voltage per cell | 4.2V (LiPo) |

### 4.4 Storage

#### Short-Term Storage (Days)
- Store at 40-60% charge
- Room temperature
- Away from heat sources
- Away from flammable materials
- In LiPo safe bag or case

#### Long-Term Storage (Weeks+)
- Discharge to storage voltage (3.7-3.85V per cell)
- Use storage charge function on charger
- Check monthly and recharge to storage level
- Room temperature, low humidity

#### Storage Location
- Fire-resistant container
- Away from direct sunlight
- Away from metal objects
- Secure from unauthorized access
- Not in vehicle in hot weather

### 4.5 Transport

**Ground Transport:**
- In LiPo safe bags
- Terminals protected
- Secured to prevent movement
- Not in extreme temperatures

**Air Transport:**
- Carry-on only (not checked)
- Per airline requirements
- Terminals protected
- Within allowed limits

### 4.6 Cycle Tracking

**Record for each battery:**
- Date of charge/use
- Discharge level (ending %)
- Any anomalies

**Cycle count:**
- One cycle = full charge to discharge
- Track cumulative cycles

### 4.7 Performance Monitoring

**Monitor for:**
- Reduced flight time
- Voltage sag under load
- Unbalanced cells
- Puffiness/swelling
- Heating during charge or discharge

**Action thresholds:**

| Indicator | Action |
|:----------|:-------|
| 10% reduced capacity | Flag for monitoring |
| 20% reduced capacity | Consider retirement |
| Cell imbalance >0.1V | Investigate; balance charge |
| Any swelling | Remove from service immediately |
| Excessive heat | Investigate; may retire |

### 4.8 Battery Retirement

**Retire battery when:**
- Physical damage or swelling
- Capacity reduced >20%
- Persistent cell imbalance
- Cycle limit reached (per manufacturer)
- Age limit reached (typically 2-3 years)
- Any safety concern

**Retirement procedure:**
1. Remove from service
2. Label "RETIRED - DO NOT USE"
3. Update battery log
4. Store safely until disposal
5. Dispose properly (see 4.9)

### 4.9 Disposal

**LiPo batteries are hazardous waste.**

Disposal procedure:
1. Discharge completely (use resistor/light bulb)
2. Salt water soak method (optional, controversial)
3. Take to battery recycling facility
4. Do NOT dispose in regular waste
5. Document disposal

### 4.10 Emergency - Battery Fire

**If battery smoking or on fire:**
1. Evacuate immediate area
2. Do NOT use water
3. Use ABC dry chemical extinguisher or sand
4. Allow to burn out in safe area if possible
5. Monitor for re-ignition for 30 minutes
6. Ventilate area (toxic fumes)
7. Report incident

See HSE-008-PR Spill Response Procedure.

---

## 5. Battery Log

Maintain FRM-BATT for each battery:
- Battery ID
- Type and capacity
- Purchase/first use date
- Cycle count
- Condition notes
- Retirement date (when applicable)

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| MCM-001 | Maintenance Control Manual |
| FRM-BATT | Battery Log Form |
| OPS-011-PR | Emergency Procedures (RPAS) |
| HSE-008-PR | Spill Response Procedure |

---

**Document Control:** MCM-005-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
