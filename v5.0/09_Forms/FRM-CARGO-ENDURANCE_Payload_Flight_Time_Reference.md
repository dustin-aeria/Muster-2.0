# AERIA SOLUTIONS LTD

# CARGO DELIVERY ENDURANCE REFERENCE

## Payload vs Flight Time Tables

---

| Field | Value |
|:------|:------|
| **Form Number** | FRM-CARGO-ENDURANCE |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |

---

## Amendment History

| Version | Date | Description | Approved By |
|:--------|:-----|:------------|:------------|
| v1.0 | January 15, 2017 | Initial release | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — added environmental factor adjustments | Dustin Wales |
| v2.1 | February 11, 2019 | Annual review — enhanced mission planning calculator | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — updated form fields | Dustin Wales |
| v3.1 | February 22, 2021 | Annual review — added practical mission range tables | Dustin Wales |
| v3.2 | February 14, 2022 | Annual review — improved abort decision points | Dustin Wales |
| v3.3 | February 20, 2023 | Annual review — added FlyCart 100 endurance data | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — aligned with SFOC range and endurance planning | Dustin Wales |
| v4.1 | November 4, 2025 | Updated for Level 1 Complex endurance requirements | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## Purpose

This reference document provides payload versus flight time and range data for cargo delivery aircraft. Use these tables for flight planning to ensure adequate endurance for mission completion with required reserves.

**IMPORTANT:** Always plan with a minimum 30% battery reserve.

---

## DJI FLYCART 30 ENDURANCE TABLES

### Dual Battery Configuration (30 kg Max Payload)

| Payload (kg) | Flight Time (min) | Max Range (km) | Speed for Max Range |
|:-------------|:------------------|:---------------|:--------------------|
| 0 | 28 | 16.0 | 10 m/s |
| 5 | 25 | 14.5 | 10 m/s |
| 10 | 22 | 12.8 | 10 m/s |
| 15 | 19 | 11.0 | 9 m/s |
| 20 | 16 | 9.3 | 9 m/s |
| 25 | 13 | 7.5 | 8 m/s |
| 30 | 10 | 5.8 | 8 m/s |

### Single Battery Configuration (40 kg Max Payload)

| Payload (kg) | Flight Time (min) | Max Range (km) | Speed for Max Range |
|:-------------|:------------------|:---------------|:--------------------|
| 0 | 16 | 9.0 | 10 m/s |
| 10 | 14 | 7.8 | 9 m/s |
| 20 | 11 | 6.2 | 9 m/s |
| 30 | 9 | 5.0 | 8 m/s |
| 40 | 8 | 4.6 | 8 m/s |

### FlyCart 30 Quick Reference Graph

```
Flight Time vs Payload (Dual Battery)

28 min |*
       |  *
24 min |    *
       |      *
20 min |        *
       |          *
16 min |            *
       |              *
12 min |                *
       |                  *
 8 min |                    *
       +----+----+----+----+----+----+----
       0    5   10   15   20   25   30 kg
```

---

## DJI FLYCART 100 ENDURANCE TABLES

### Standard Quad Battery Configuration (65 kg Max Payload)

| Payload (kg) | Flight Time (min) | Max Range (km) | Speed for Max Range |
|:-------------|:------------------|:---------------|:--------------------|
| 0 | 32 | 20.0 | 12 m/s |
| 10 | 29 | 18.1 | 12 m/s |
| 20 | 26 | 16.2 | 11 m/s |
| 30 | 23 | 14.4 | 11 m/s |
| 40 | 20 | 12.5 | 10 m/s |
| 50 | 17 | 10.6 | 10 m/s |
| 60 | 14 | 8.7 | 9 m/s |
| 65 | 12 | 7.5 | 9 m/s |

### FlyCart 100 Quick Reference Graph

```
Flight Time vs Payload

32 min |*
       |  *
28 min |    *
       |      *
24 min |        *
       |          *
20 min |            *
       |              *
16 min |                *
       |                  *
12 min |                    *
       +----+----+----+----+----+----+----
       0   10   20   30   40   50   60  65 kg
```

---

## ENVIRONMENTAL FACTORS

### Wind Impact on Endurance

Headwind reduces effective range and increases flight time required:

| Headwind | Range Reduction | Time Increase |
|:---------|:----------------|:--------------|
| 5 m/s | ~15% | ~10% |
| 10 m/s | ~30% | ~20% |
| 15 m/s (FC100 limit) | ~45% | ~35% |

**Planning Guidance:** Add wind factor to required flight time.

### Temperature Impact on Batteries

| Temperature | Battery Capacity Effect |
|:------------|:-----------------------|
| +20°C to +40°C | Normal (100%) |
| +10°C to +20°C | Slight reduction (95%) |
| 0°C to +10°C | Moderate reduction (90%) |
| -10°C to 0°C | Significant reduction (80%) |
| -20°C to -10°C | Severe reduction (70%) |

**Planning Guidance:** Reduce expected endurance for cold operations.

### Altitude Impact

| Altitude (MSL) | Performance Impact |
|:---------------|:-------------------|
| Sea level to 1000m | Normal |
| 1000m to 2000m | ~5% reduction |
| 2000m to 3000m | ~10% reduction |
| 3000m to 4000m | ~15% reduction |
| Above 4000m | Consult manufacturer |

---

## MISSION PLANNING CALCULATOR

### Step 1: Determine Base Endurance

| Item | Entry |
|:-----|:------|
| Aircraft | ☐ FlyCart 30 ☐ FlyCart 100 |
| Configuration | |
| Cargo Weight | _________ kg |
| Base Flight Time (from table) | _________ min |
| Base Max Range (from table) | _________ km |

### Step 2: Apply Environmental Factors

| Factor | Adjustment | Applied |
|:-------|:-----------|:--------|
| Headwind component | ×_______ | ☐ |
| Temperature factor | ×_______ | ☐ |
| Altitude factor | ×_______ | ☐ |
| **Adjusted Flight Time** | _________ min | |
| **Adjusted Max Range** | _________ km | |

### Step 3: Mission Requirements

| Item | Value |
|:-----|:------|
| One-way distance | _________ km |
| Return required? | ☐ Yes ☐ No |
| Total distance | _________ km |
| Estimated flight time | _________ min |
| Reserve (30% minimum) | _________ min |
| **Total Required** | _________ min |

### Step 4: Go/No-Go

| Check | Result |
|:------|:-------|
| Adjusted Flight Time | _________ min |
| Total Required | _________ min |
| Margin | _________ min |
| **Adequate?** | ☐ Yes ☐ No |

---

## PRACTICAL MISSION RANGES

### FlyCart 30 - Practical One-Way Delivery Range

With 30% reserve and return to base:

| Payload | One-Way Range (km) | One-Way Time (min) |
|:--------|:-------------------|:-------------------|
| 10 kg | 4.5 | 8 |
| 20 kg | 3.3 | 6 |
| 30 kg | 2.0 | 4 |

### FlyCart 100 - Practical One-Way Delivery Range

With 30% reserve and return to base:

| Payload | One-Way Range (km) | One-Way Time (min) |
|:--------|:-------------------|:-------------------|
| 20 kg | 5.7 | 9 |
| 40 kg | 4.4 | 7 |
| 60 kg | 3.0 | 5 |
| 65 kg | 2.6 | 4 |

### FlyCart 100 - One-Way Delivery (No Return)

With 30% reserve, one-way only:

| Payload | Max One-Way Range (km) | Flight Time (min) |
|:--------|:-----------------------|:------------------|
| 20 kg | 11.3 | 18 |
| 40 kg | 8.8 | 14 |
| 60 kg | 6.1 | 10 |
| 65 kg | 5.3 | 8 |

---

## EMERGENCY CONSIDERATIONS

### Minimum Safe Return Fuel

| Aircraft | Minimum Battery for Emergency |
|:---------|:------------------------------|
| FlyCart 30 | 30% remaining |
| FlyCart 100 | 35% remaining |

### Abort Decision Points

| Checkpoint | FC30 Minimum | FC100 Minimum |
|:-----------|:-------------|:--------------|
| Start delivery approach | 50% | 55% |
| Initiate return | 40% | 45% |
| Emergency landing required | 25% | 30% |

---

## NOTES

- All values are approximate and based on optimal conditions
- Actual performance may vary based on aircraft condition, weather, and payload characteristics
- Always verify with manufacturer specifications
- When in doubt, plan conservatively
- Wind at altitude may differ significantly from surface wind

---

## Related Documents

| Doc ID | Title |
|:-------|:------|
| OPS-013 | Cargo Delivery Operations Policy |
| OPS-013-PR | Cargo Delivery Procedure |
| FRM-CARGO-WB | Weight & Balance Calculator |
| QRC-DELIVERY | Cargo Delivery Quick Reference |
| QRC-FLYCART100 | FlyCart 100 Quick Reference |

---

**Document Control:** FRM-CARGO-ENDURANCE v5.0 | Aeria Solutions Ltd
