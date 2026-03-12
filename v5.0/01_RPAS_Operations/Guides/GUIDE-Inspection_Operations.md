# AERIA SOLUTIONS LTD

# INSPECTION OPERATIONS GUIDE

---

| Field | Value |
|:------|:------|
| **Document Number** | GUIDE-INSPECT |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Introduction

This guide provides information for conducting aerial inspection operations using RPAS, including infrastructure inspection, building assessment, and asset monitoring.

---

## 2. Inspection Types

| Type | Assets | Typical Sensors |
|:-----|:-------|:----------------|
| **Infrastructure** | Bridges, roads, pipelines | RGB, thermal |
| **Building** | Roofs, facades, structures | RGB, thermal |
| **Power/Utility** | Lines, towers, substations | RGB, thermal, zoom |
| **Industrial** | Tanks, stacks, flare systems | RGB, thermal, zoom |
| **Telecommunications** | Towers, antennas | RGB, zoom |
| **Wind Turbine** | Blades, nacelle, tower | RGB, zoom |
| **Solar Farm** | Panels, wiring | RGB, thermal |

---

## 3. Sensor Selection

### 3.1 RGB Camera

**Use for:**
- Visual defect identification
- Crack detection
- Corrosion assessment
- General condition documentation

**Requirements:**
- High resolution (20+ MP preferred)
- Zoom capability for detail
- Good low-light performance
- Stabilized gimbal

### 3.2 Thermal Camera

**Use for:**
- Heat anomalies
- Electrical hot spots
- Insulation defects
- Water intrusion
- Solar panel defects
- Process monitoring

**Requirements:**
- Adequate resolution (640×512 or higher preferred)
- Temperature range matching application
- Radiometric capability (for measurement)

**Considerations:**
- Time of day affects thermal contrast
- Delta-T (temperature difference) needed
- Emissivity of surfaces
- Environmental conditions

### 3.3 Zoom Camera

**Use for:**
- Detailed inspection from distance
- Maintaining safe distance from assets
- Reading labels/markings
- Inspecting hard-to-reach areas

**Requirements:**
- Optical zoom (not digital)
- Stabilization
- Remote control

---

## 4. Flight Planning for Inspection

### 4.1 Inspection Flight Considerations

| Factor | Consideration |
|:-------|:--------------|
| **Access** | Permissions, site access, airspace |
| **Obstacles** | Wires, structures, moving equipment |
| **Distance** | Maintain safe distance from energized/hazardous |
| **Angles** | Cover all inspection surfaces |
| **Lighting** | Best angle for defect visibility |
| **Wind** | Effects near structures |

### 4.2 Flight Patterns

| Pattern | Application |
|:--------|:------------|
| **Orbit** | Towers, tanks, single structures |
| **Vertical climb** | Facades, towers |
| **Grid** | Roofs, solar arrays |
| **Linear** | Pipelines, power lines |
| **Manual** | Complex structures, detail work |

### 4.3 Distance from Assets

| Asset | Minimum Distance | Notes |
|:------|:-----------------|:------|
| Power lines (energized) | 15m+ | Higher for higher voltage |
| Communications tower | 10m+ | RF interference consideration |
| Flare stacks | 50m+ | Heat, turbulence |
| Moving equipment | 30m+ | Cranes, conveyors |
| Building surface | 3-5m | Depends on structure |

Always confirm specific distance requirements with asset owner.

---

## 5. Thermal Inspection Techniques

### 5.1 Best Practices

**Timing:**
- Early morning or late afternoon (not midday)
- Sufficient temperature delta (ΔT)
- Solar loading considerations (for buildings)
- After dark for some applications

**Conditions:**
- Clear skies or consistent overcast
- Low wind (reduces convective cooling)
- Dry conditions (water affects readings)

**Technique:**
- Perpendicular to surface when possible
- Consistent distance for comparable images
- Overlap images for complete coverage
- Include reference (normal vs. anomaly)

### 5.2 Common Thermal Applications

| Application | What to Look For |
|:------------|:-----------------|
| **Electrical** | Hot connections, overloaded circuits |
| **Roofing** | Moisture intrusion, insulation gaps |
| **Solar panels** | Hot spots, failed cells |
| **Mechanical** | Bearing wear, friction |
| **Pipelines** | Temperature anomalies |

---

## 6. Power Line Inspection

### 6.1 Safety Requirements

- Maintain safe distance (voltage-dependent)
- Be aware of electromagnetic interference
- Watch for induced currents
- Coordinate with utility operations
- Follow utility safety requirements

### 6.2 Inspection Points

| Component | Inspect For |
|:----------|:------------|
| **Conductors** | Damage, sag, fraying |
| **Insulators** | Cracks, contamination, flashover marks |
| **Hardware** | Corrosion, damage, loose connections |
| **Towers/poles** | Structural issues, rust, damage |
| **Ground wire** | Damage, connections |
| **Vegetation** | Encroachment, clearance |

### 6.3 Thermal Signatures

| Finding | Potential Issue |
|:--------|:----------------|
| Hot splice | Failing connection |
| Hot insulator | Tracking, contamination |
| Hot conductor section | Damaged strand, overload |
| Cool section | Broken internal strands |

---

## 7. Building and Roof Inspection

### 7.1 Flight Approach

| Element | Approach |
|:--------|:---------|
| **Flat roof** | Grid pattern; thermal + RGB |
| **Pitched roof** | Multiple angles; cover all slopes |
| **Facades** | Vertical patterns; good lighting |
| **Details** | Manual flight; zoom lens |

### 7.2 Inspection Points

| Area | Look For |
|:-----|:---------|
| **Roofing** | Damage, ponding, debris, flashing |
| **Gutters** | Blockage, damage, alignment |
| **HVAC** | Condition, mounting, connections |
| **Penetrations** | Flashing, sealant condition |
| **Facades** | Cracks, staining, deterioration |
| **Windows** | Damage, seal failure |

---

## 8. Wind Turbine Inspection

### 8.1 Safety Considerations

- Coordinate with operator (may need turbine stopped)
- Wind effects near turbine
- Blade movement risk
- Lightning protection systems

### 8.2 Inspection Elements

| Component | Focus Areas |
|:----------|:------------|
| **Blades** | Leading edge erosion, cracks, lightning damage |
| **Nacelle** | Condition, leaks, component status |
| **Tower** | Corrosion, damage, foundation |
| **Hub** | Condition, fasteners |

### 8.3 Flight Pattern

Typical approach:
1. Orbit at distance for overview
2. Approach each blade individually
3. Systematic coverage from tip to root
4. Document both sides of blade
5. Nacelle and tower inspection

---

## 9. Documentation

### 9.1 Image Organization

| Element | Include |
|:--------|:--------|
| **File naming** | Asset ID, date, sequence |
| **GPS tagging** | Enable geolocation |
| **Metadata** | Camera settings preserved |
| **Log** | Flight details, conditions |

### 9.2 Reporting

**Include in reports:**
- Asset identification
- Date and conditions
- Methodology description
- Findings with images
- Location of defects
- Severity assessment (if qualified)
- Recommendations

---

## 10. Key References

| Document | Content |
|:---------|:--------|
| OPS-006 | Payload Management Policy |
| OPS-010-PR | Payload Operations Procedure |
| FHA-7.x | Industrial Site Operations FHAs |

---

**Document Control:** GUIDE-INSPECT v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
