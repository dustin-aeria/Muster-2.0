# AERIA SOLUTIONS LTD

# CARGO WEIGHT & BALANCE CALCULATOR

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-CARGO-WB |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Amendment History

| Version | Date | Description | Author |
|:--------|:-----|:------------|:-------|
| v1.0 | January 15, 2017 | Initial release | Dustin Wales |
| v2.0 | February 10, 2020 | Updated form fields | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## Flight Information

| Field | Entry |
|:------|:------|
| **Date** | |
| **Flight Number** | |
| **PIC** | |
| **Aircraft** | ☐ FlyCart 30 ☐ FlyCart 100 |

---

## SECTION 1: AIRCRAFT SELECTION

### FlyCart 30 Specifications

| Parameter | Dual Battery | Single Battery |
|:----------|:-------------|:---------------|
| Empty Weight | 55 kg | 55 kg |
| Battery Weight | 24 kg | 12 kg |
| Operating Empty Weight | 79 kg | 67 kg |
| Max Payload | 30 kg | 40 kg |
| MTOW | 95 kg | 95 kg |

### FlyCart 100 Specifications

| Parameter | Standard Config |
|:----------|:----------------|
| Empty Weight | 155 kg |
| Quad Battery Weight | 48 kg |
| Operating Empty Weight | 203 kg |
| Max Payload | 65 kg |
| MTOW | 220 kg |

---

## SECTION 2: WEIGHT CALCULATION

### Step 1: Select Aircraft Configuration

**FlyCart 30:**
☐ Dual Battery (30 kg max payload)
☐ Single Battery (40 kg max payload)

**FlyCart 100:**
☐ Standard Quad Battery (65 kg max payload)

### Step 2: Record Weights

| Component | Weight (kg) |
|:----------|:------------|
| Operating Empty Weight (from table above) | |
| Cargo Weight (weighed on scale) | |
| Container/Packaging Weight | |
| Additional Equipment | |
| **TOTAL CARGO** | |
| **TOTAL TAKEOFF WEIGHT** | |

### Step 3: Verify Against Limits

**FlyCart 30:**

| Check | Value | Limit | Pass? |
|:------|:------|:------|:------|
| Cargo Weight | ___ kg | ≤30 kg (dual) or ≤40 kg (single) | ☐ |
| Total Takeoff Weight | ___ kg | ≤95 kg | ☐ |

**FlyCart 100:**

| Check | Value | Limit | Pass? |
|:------|:------|:------|:------|
| Cargo Weight | ___ kg | ≤65 kg | ☐ |
| Total Takeoff Weight | ___ kg | ≤220 kg | ☐ |

---

## SECTION 3: CENTER OF GRAVITY VERIFICATION

### FlyCart 30 CG Requirements

| Axis | Requirement | Verified |
|:-----|:------------|:---------|
| Longitudinal | Cargo centered in bay | ☐ |
| Lateral | Equal weight distribution L/R | ☐ |
| Vertical | Heavy items low in bay | ☐ |

**CG Check Method:**
1. Cargo placed in center of bay
2. No single heavy item offset from center
3. Visual inspection of aircraft level when loaded
4. Controller CG indication (if available)

### FlyCart 100 CG Requirements

| Axis | Requirement | Value | Limit | Pass? |
|:-----|:------------|:------|:------|:------|
| Longitudinal (X) | From load cells | ___ | ±100mm | ☐ |
| Lateral (Y) | From load cells | ___ | ±100mm | ☐ |

**Load Cell Array Verification:**

| Load Cell | Reading (kg) | Expected Range |
|:----------|:-------------|:---------------|
| Front Left | | |
| Front Right | | |
| Rear Left | | |
| Rear Right | | |
| **Total** | | Matches scale weight ± 1kg |

| Item | Check |
|:-----|:------|
| All load cells reading | ☐ |
| No single cell overloaded | ☐ |
| Balance within limits | ☐ |
| CG indicator GREEN on controller | ☐ |

---

## SECTION 4: CARGO LOADING REQUIREMENTS

### General Loading Guidelines

| Requirement | Check |
|:------------|:------|
| Cargo centered in bay | ☐ |
| Heavy items placed low | ☐ |
| Weight evenly distributed | ☐ |
| No sharp edges exposed | ☐ |
| Cargo properly padded | ☐ |

### Securing Requirements

| Item | Check |
|:-----|:------|
| Primary restraints in place | ☐ |
| Secondary restraints (if heavy) | ☐ |
| No movement when bay tilted | ☐ |
| Restraints not over-tightened | ☐ |
| All latches engaged | ☐ |

### Winch Mode Additional Checks

| Item | Check |
|:-----|:------|
| Attachment point load rated | ☐ |
| Cargo balanced for suspension | ☐ |
| No risk of tangling/spinning | ☐ |
| Lifting point centered | ☐ |

---

## SECTION 5: FLIGHT ENDURANCE IMPACT

### FlyCart 30 Endurance Table

| Cargo (kg) | Flight Time (min) | Max Range (km) |
|:-----------|:------------------|:---------------|
| 0 | 28 | 16.0 |
| 5 | 25 | 14.5 |
| 10 | 22 | 12.8 |
| 15 | 19 | 11.0 |
| 20 | 16 | 9.3 |
| 25 | 13 | 7.5 |
| 30 | 10 | 5.8 |
| 40 (single batt) | 8 | 4.6 |

### FlyCart 100 Endurance Table

| Cargo (kg) | Flight Time (min) | Max Range (km) |
|:-----------|:------------------|:---------------|
| 0 | 32 | 20.0 |
| 10 | 29 | 18.1 |
| 20 | 26 | 16.2 |
| 30 | 23 | 14.4 |
| 40 | 20 | 12.5 |
| 50 | 17 | 10.6 |
| 60 | 14 | 8.7 |
| 65 | 12 | 7.5 |

### Endurance Calculation

| Item | Value |
|:-----|:------|
| Planned Cargo Weight | ___ kg |
| Expected Flight Time (from table) | ___ min |
| Required Flight Time (mission) | ___ min |
| Reserve Required (30%) | ___ min |
| **Total Time Required** | ___ min |
| **Adequate Endurance?** | ☐ Yes ☐ No |

---

## SECTION 6: SUMMARY AND APPROVAL

### Weight Summary

| Parameter | Value | Limit | Status |
|:----------|:------|:------|:-------|
| Cargo Weight | ___ kg | ___ kg | ☐ OK ☐ OVER |
| Total Takeoff Weight | ___ kg | ___ kg | ☐ OK ☐ OVER |
| CG Position | | Within limits | ☐ OK ☐ OUT |
| Endurance | ___ min | ___ min req | ☐ OK ☐ INSUFFICIENT |

### GO / NO-GO Decision

**ALL of the following must be checked for GO:**

| Requirement | Check |
|:------------|:------|
| Cargo weight within limit | ☐ |
| Total weight within MTOW | ☐ |
| CG within limits | ☐ |
| Cargo properly secured | ☐ |
| Endurance adequate | ☐ |

---

☐ **GO** - Weight and balance within limits; cleared for flight

☐ **NO-GO** - Issue: _______________________________________

---

## Notes / Observations

| |
|:--|
| |
| |
| |

---

## Signatures

| Role | Initials | Time |
|:-----|:---------|:-----|
| Cargo Handler | | |
| PIC Verification | | |

---

**Document Control:** FRM-CARGO-WB v5.0 | Aeria Solutions Ltd
