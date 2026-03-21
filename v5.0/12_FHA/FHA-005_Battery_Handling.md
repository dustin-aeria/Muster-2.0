# AERIA SOLUTIONS LTD

# FORMAL HAZARD ASSESSMENT

## Lithium Battery Handling

---

| Field | Value |
|:------|:------|
| **FHA Number** | FHA-005 |
| **Version** | v5.0 |
| **Activity** | LiPo/Li-Ion Battery Handling, Storage, Transport |
| **Assessment Date** | March 11, 2026 |
| **Assessed By** | Operations Manager |
| **Next Review** | March 11, 2027 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## Amendment History

| Version | Date | Changes | Approved By |
|:--------|:-----|:--------|:------------|
| v1.0 | January 15, 2017 | Initial release | Dustin Wales |
| v2.0 | February 5, 2018 | Annual review — updated charging protocols | Dustin Wales |
| v3.0 | February 10, 2020 | Annual review — expanded fire response procedures | Dustin Wales |
| v4.0 | February 8, 2024 | Annual review — updated retirement criteria | Dustin Wales |
| v5.0 | March 11, 2026 | Complete program rebuild — web platform integration | Dustin Wales |

---

## 1. Scope

This FHA covers the handling, charging, storage, transport, and disposal of lithium polymer (LiPo) and lithium-ion (Li-Ion) batteries used in RPAS operations.

---

## 2. Lithium Battery Hazards Overview

| Hazard | Potential Consequence |
|:-------|:---------------------|
| Thermal runaway | Fire, explosion, toxic gases |
| Physical damage | Internal short, fire |
| Overcharging | Swelling, fire |
| Over-discharging | Cell damage, reduced capacity |
| Short circuit | Rapid heating, fire |
| Exposure to elements | Degradation, failure |

---

## 3. Hazard Analysis

### 3.1 Charging Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 1.1 | Fire during charging | Overcharge, defect, damage | Fire, property damage | 2 | 4 | 8-M | Proper charger, monitoring, fireproof surface, LiPo bag | 4-L |
| 1.2 | Overcharging | Charger malfunction, wrong settings | Swelling, fire | 2 | 4 | 8-M | Balanced charger, proper settings, monitoring | 4-L |
| 1.3 | Charging damaged battery | Undetected damage | Fire, explosion | 2 | 5 | 10-M | Pre-charge inspection, damage criteria | 4-L |
| 1.4 | Charging at wrong temperature | Cold/hot environment | Damage, fire | 2 | 3 | 6-L | Temperature awareness, wait for room temp | 3-L |
| 1.5 | Unattended charging | Left alone | Uncontrolled fire | 2 | 4 | 8-M | Never leave unattended, use timers | 4-L |

### 3.2 Storage Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 2.1 | Fire in storage | Self-ignition, damage | Fire, property damage | 2 | 4 | 8-M | LiPo bag, fireproof container, storage charge | 4-L |
| 2.2 | Full charge storage | Improper storage voltage | Degradation, swelling | 3 | 3 | 9-M | Storage charge (3.8V/cell), discharge to storage | 4-L |
| 2.3 | Deep discharge | Stored depleted | Cell damage, fire risk on charge | 2 | 3 | 6-L | Storage charge, periodic check | 3-L |
| 2.4 | Temperature extremes | Vehicle storage, outdoor | Degradation, fire risk | 3 | 3 | 9-M | Climate-controlled storage, avoid vehicle | 4-L |
| 2.5 | Physical damage in storage | Stacking, impacts | Internal damage | 2 | 4 | 8-M | Proper cases, padding, organization | 4-L |

### 3.3 Transport Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 3.1 | Fire in vehicle | Damage, temperature, short | Vehicle fire | 2 | 4 | 8-M | Fireproof container, secured, climate consideration | 4-L |
| 3.2 | Short circuit | Exposed terminals, contact | Fire | 2 | 4 | 8-M | Terminal protection, individual bags | 4-L |
| 3.3 | Impact damage | Unsecured, accident | Internal damage, fire | 2 | 4 | 8-M | Secure storage, padded cases | 4-L |

### 3.4 Handling Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 4.1 | Physical damage | Drop, puncture, crush | Fire, explosion | 2 | 4 | 8-M | Careful handling, protection, inspection | 4-L |
| 4.2 | Connector damage | Forced connection, wrong polarity | Short circuit, fire | 2 | 3 | 6-L | Proper connection technique, inspection | 3-L |
| 4.3 | Swollen battery use | Ignoring warning signs | Fire, explosion | 2 | 5 | 10-M | Inspection criteria, immediate retirement | 4-L |
| 4.4 | Hot battery handling | After flight | Burns | 3 | 2 | 6-L | Cool-down period, gloves if necessary | 3-L |

### 3.5 Fire Response Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 5.1 | Fire spread | Uncontrolled LiPo fire | Property damage, injury | 2 | 4 | 8-M | Isolation, fire-resistant storage, response training | 4-L |
| 5.2 | Toxic fumes | LiPo fire byproducts | Inhalation injury | 2 | 3 | 6-L | Evacuation, ventilation, respiratory protection | 3-L |
| 5.3 | Re-ignition | Hot spots, incomplete extinguish | Secondary fire | 3 | 3 | 9-M | Monitoring, water submersion after, 24-hour watch | 4-L |

### 3.6 Disposal Hazards

| # | Hazard | Cause | Consequence | L | S | Risk | Controls | Residual Risk |
|:--|:-------|:------|:------------|:--|:--|:-----|:---------|:--------------|
| 6.1 | Fire during disposal | Charged battery, damage | Fire | 2 | 3 | 6-L | Discharge before disposal, proper disposal facility | 3-L |
| 6.2 | Environmental contamination | Improper disposal | Pollution | 2 | 2 | 4-L | Recycling facility, proper disposal | 2-L |

---

## 4. Control Summary

### Safe Charging

| Control | Requirement |
|:--------|:------------|
| Charger | Manufacturer-approved balanced charger |
| Location | Fireproof surface, away from flammables |
| Container | LiPo bag or fireproof box |
| Supervision | Never leave unattended |
| Temperature | Room temperature (15-25°C) |
| Inspection | Visual check before charging |

### Safe Storage

| Control | Requirement |
|:--------|:------------|
| Charge level | Storage charge (40-60%, 3.8V/cell) |
| Container | LiPo bag or fireproof container |
| Location | Room temperature, away from flammables |
| Inspection | Monthly for stored batteries |
| Organization | Separated, protected from damage |

### Safe Transport

| Control | Requirement |
|:--------|:------------|
| Container | Fireproof battery case |
| Terminals | Protected/covered |
| Security | Secured against movement |
| Quantity | Minimize number transported |
| Documentation | Air transport regulations if flying |

### Retirement Criteria

| Condition | Action |
|:----------|:-------|
| Visible swelling | Retire immediately |
| Physical damage (dent, puncture) | Retire immediately |
| Exceeded cycle limit | Retire |
| Significant capacity loss (>20%) | Retire |
| Age limit reached | Retire |
| Any sign of internal damage | Retire |

---

## 5. Emergency Response

### Battery Fire

1. **EVACUATE** - Clear area immediately
2. **DO NOT** use water initially (can spread)
3. **ISOLATE** - Move burning battery if safe (metal tool)
4. **SMOTHER** - Sand, dry chemical, fire blanket
5. **VENTILATE** - Toxic fumes
6. **MONITOR** - May reignite for hours
7. **CALL 911** - If fire spreads or is significant

### Swollen/Damaged Battery

1. **ISOLATE** - Move to fireproof container
2. **MONITOR** - Watch for 30+ minutes
3. **DO NOT** charge or use
4. **DISPOSE** - Proper hazardous waste facility

---

## 6. Training Requirements

| Training | Requirement |
|:---------|:------------|
| Battery safety | All personnel using LiPo batteries |
| Fire response | All personnel |
| Charger operation | Before use |
| Disposal procedures | All personnel |

---

## 7. Signatures

| Role | Name | Signature | Date |
|:-----|:-----|:----------|:-----|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | Dustin Wales | | |

---

**Document Control:** FHA-005 v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
