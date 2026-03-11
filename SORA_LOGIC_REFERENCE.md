# SORA 2.5 Logic Reference

> Quick reference for implementing JARUS SORA 2.5 in Muster 2.0. Based on JAR_doc_25 (Main Body) and annexes.

---

## Overview

SORA determines a **SAIL (Specific Assurance and Integrity Level)** from I to VI by combining:
- **Ground Risk Class (GRC)** — risk to people on the ground
- **Air Risk Class (ARC)** — risk of collision with manned aircraft

```
SAIL = f(Final GRC, Residual ARC)
```

---

## Step 1: Determine Intrinsic GRC (iGRC)

**Inputs:**
- Population density category
- UA (drone) characteristics (size + speed)

### Population Categories (Table 3)

| Category | Density | Description |
|----------|---------|-------------|
| Controlled | 0 | No unauthorized people allowed |
| Remote | < 5/km² | Forests, deserts, large farms |
| Lightly | < 50/km² | Small farms, large-lot residential |
| Sparsely | < 500/km² | Homes/small businesses, ~1 acre lots |
| Suburban | < 5,000/km² | Single-family, apartments, commercial |
| High Density | < 50,000/km² | Multistory buildings, downtown |
| Assembly | > 50,000/km² | Large gatherings, concerts, sports |

### UA Characteristics (Table 2 columns)

| Category | Max Dimension | Max Speed |
|----------|---------------|-----------|
| 1m/25ms | ≤ 1m | ≤ 25 m/s |
| 3m/35ms | ≤ 3m | ≤ 35 m/s |
| 8m/75ms | ≤ 8m | ≤ 75 m/s |
| 20m/120ms | ≤ 20m | ≤ 120 m/s |
| 40m/200ms | ≤ 40m | ≤ 200 m/s |

### iGRC Matrix (Table 2)

|  | 1m/25ms | 3m/35ms | 8m/75ms | 20m/120ms | 40m/200ms |
|--|---------|---------|---------|-----------|-----------|
| **Controlled** | 1 | 1 | 2 | 3 | 3 |
| **Remote** | 2 | 3 | 4 | 5 | 6 |
| **Lightly** | 3 | 4 | 5 | 6 | 7 |
| **Sparsely** | 4 | 5 | 6 | 7 | 8 |
| **Suburban** | 5 | 6 | 7 | 8 | 9 |
| **High Density** | 6 | 7 | 8 | 9 | 10 |
| **Assembly** | 7 | 8 | — | — | — |

`—` = Outside SORA scope (Category C / Certified required)

---

## Step 2: Apply Ground Mitigations → Final GRC

**Mitigations (Annex B, Table 11):**

| Mitigation | Description | Low | Med | High |
|------------|-------------|-----|-----|------|
| **M1(A)** | Sheltering - people under structures | -1 | -2 | N/A |
| **M1(B)** | Operational restrictions (time/space) | N/A | -1 | -2 |
| **M1(C)** | Ground observers can warn people | -1 | N/A | N/A |
| **M2** | Impact dynamics reduced (parachute, frangibility) | N/A | -1 | -2 |

**Rules:**
- M1(A) at medium robustness CANNOT combine with M1(B)
- M3 (ERP) was **removed** in SORA 2.5 — no longer a mitigation
- Final GRC cannot go below 1

```
Final GRC = max(1, iGRC + mitigation_reductions)
```

---

## Step 3: Determine Initial ARC

**Air Risk Classes (Figure 6):**

| ARC | Airspace Type | Encounter Rate |
|-----|---------------|----------------|
| **ARC-a** | Segregated/restricted | Negligible |
| **ARC-b** | Uncontrolled rural, low altitude | Low |
| **ARC-c** | Controlled or urban uncontrolled | Medium |
| **ARC-d** | Airport/heliport environment | High |

---

## Step 4: Apply Tactical Mitigations (TMPR) → Residual ARC

**Tactical Mitigation Performance Requirements:**

| TMPR | Description | ARC Reduction | Min Robustness |
|------|-------------|---------------|----------------|
| **VLOS** | See-and-avoid by pilot | -1 | Low |
| **EVLOS** | Visual observers provide separation | -1 | Low |
| **DAA** | Detect and Avoid system onboard | -2 | Medium |

```
Residual ARC = Initial ARC - TMPR reduction
```

**Example:** ARC-c with VLOS (low robustness) → ARC-b

---

## Step 5: Determine SAIL (Table 7)

Cross-reference Final GRC (rows) with Residual ARC (columns):

| GRC | ARC-a | ARC-b | ARC-c | ARC-d |
|-----|-------|-------|-------|-------|
| **1-2** | I | II | IV | VI |
| **3** | II | II | IV | VI |
| **4** | III | III | IV | VI |
| **5** | IV | IV | IV | VI |
| **6** | V | V | V | VI |
| **7** | VI | VI | VI | VI |

GRC > 7 = Outside SORA (Category C)

---

## Step 6: Containment Requirements

Based on **adjacent area population** and **SAIL**:

- If adjacent area has **same or lower** population → no additional containment
- If adjacent area has **higher** population → must demonstrate containment OR use higher population for GRC

**Adjacent area distance:** `min(35km, max(5km, speed_m/s × 180s))`

---

## Step 7: OSO Compliance

24 Operational Safety Objectives must be met at required robustness level based on SAIL.

**Robustness Codes:**
- O = Optional
- L = Low
- M = Medium
- H = High

**Key OSOs by Category:**

| Category | OSOs |
|----------|------|
| Technical Issues | 01, 02, 03, 04, 05, 06, 07, 10, 11 |
| External Systems | 08, 13 |
| Human Error | 09, 12, 16, 17, 18, 19, 20 |
| Adverse Conditions | 21, 22, 23, 24 |

Note: OSOs 14 and 15 were **removed** in SORA 2.5.

---

## Operational Volume Calculation

**Components:**
1. **Flight Geography** — where the flight is planned
2. **Contingency Volume** — buffer for loss of control
3. **Ground Risk Buffer** — buffer for uncontrolled descent

**Formulas:**
```
Contingency Volume = Aircraft_Speed_m/s × 10 seconds (horizontal)
Ground Risk Buffer = 1:1 to altitude (e.g., 100m altitude = 100m horizontal)
Operational Volume = Flight Geography + Contingency + Ground Risk Buffer
```

---

## Transport Canada Specifics

### Regulatory Pathways

| Pathway | Criteria |
|---------|----------|
| **Basic** | VLOS, <25kg, uncontrolled airspace |
| **Advanced** | VLOS, <25kg, controlled/near people |
| **SFOC** | BVLOS, >25kg, special operations |
| **Level 1 Complex** | Higher risk BVLOS with SORA |

### SFOC Triggers (CAR 903.01)

- Weight > 150kg
- Altitude > 400ft AGL (uncontrolled)
- Extended BVLOS
- BVLOS near aerodrome
- Hazardous payload

### MPD (Manufacturer Performance Declaration)

Required for certain SFOC operations. Declaration requirements scale with SAIL:

| SAIL | Declaration Type | Third-Party Required |
|------|------------------|---------------------|
| I-II | Self-declaration | No |
| III-IV | Detailed with evidence | No |
| V-VI | Verified/Certified | Yes |

---

## Quick Calculation Flow

```
1. Select population category →
2. Select UA characteristics →
3. Look up iGRC in matrix →
4. Apply ground mitigations (M1A, M1B, M1C, M2) →
5. Get Final GRC (min 1) →
6. Determine Initial ARC from airspace →
7. Apply TMPR (VLOS/EVLOS/DAA) →
8. Get Residual ARC →
9. Cross-reference in SAIL matrix →
10. Check OSO requirements for that SAIL →
11. Verify containment if adjacent area differs
```

---

## Common Scenarios

### Scenario A: Rural VLOS Survey
- Population: Remote (< 5/km²)
- UA: DJI M300 (≤1m, <25m/s) → 1m/25ms category
- iGRC: **2**
- Mitigations: None needed
- Final GRC: **2**
- Airspace: Uncontrolled rural → ARC-b
- TMPR: VLOS → ARC-a
- **SAIL: I**

### Scenario B: Urban Inspection
- Population: Suburban
- UA: M300 → 1m/25ms
- iGRC: **5**
- Mitigations: M1(A) medium (people in buildings) → -2
- Final GRC: **3**
- Airspace: Uncontrolled urban → ARC-c
- TMPR: VLOS → ARC-b
- **SAIL: II**

### Scenario C: BVLOS Pipeline
- Population: Remote
- UA: Fixed wing (≤3m, 35m/s) → 3m/35ms
- iGRC: **3**
- Mitigations: None
- Final GRC: **3**
- Airspace: Uncontrolled rural → ARC-b
- TMPR: DAA medium → ARC-a (if equipped) or None → ARC-b
- **SAIL: II** (with DAA) or **II** (VLOS with observers)

---

## References

- JAR_doc_25: SORA 2.5 Main Body
- JAR_doc_26: Annex A - ConOps Template
- JAR_doc_27: Annex B - Ground Risk Mitigations
- JAR_doc_28: Annex E - OSO Requirements
- SORA-Annex-C: Air Risk Assessment
- SORA-Annex-D: TMPR Guidance
- Transport Canada AC 922-001
- Transport Canada TP15530
