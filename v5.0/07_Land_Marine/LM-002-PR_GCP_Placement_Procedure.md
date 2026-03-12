# AERIA SOLUTIONS LTD

# GROUND CONTROL POINT (GCP) PLACEMENT PROCEDURE

---

| Field | Value |
|:------|:------|
| **Document Number** | LM-002-PR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Purpose

This procedure describes how to place and survey ground control points (GCPs) for RPAS photogrammetry missions.

---

## 2. Scope

This procedure applies to all GCP placement for photogrammetry projects.

---

## 3. Procedure

### 3.1 Planning GCP Layout

**Determine number of GCPs:**

| Area Size | Minimum GCPs |
|:----------|:-------------|
| < 5 hectares | 5 |
| 5-20 hectares | 7-9 |
| > 20 hectares | 9+ (add 1 per 5 ha) |

**Layout principles:**
- Distribute evenly across site
- Place at corners and center
- Include elevation variations
- Consider flight line overlap

### 3.2 GCP Placement

**Target selection:**
- Use high-contrast targets (black/white)
- Size: visible at flight altitude
- Minimum size: 5x GSD (ground sample distance)

| GSD | Minimum Target Size |
|:----|:--------------------|
| 2 cm | 10 cm |
| 5 cm | 25 cm |
| 10 cm | 50 cm |

**Placement requirements:**
1. Place on flat, stable surface
2. Avoid shadows if possible
3. Secure against wind
4. Clear of obstructions above
5. Visible from flight altitude

**Document placement:**
- Take ground photo of each GCP
- Note GCP ID and location description
- Record placement time

### 3.3 GCP Survey

**Survey each point:**
1. Set up GPS/GNSS on target center
2. Allow adequate occupation time:
   - RTK: minimum 30 seconds, 1+ minute recommended
   - PPK: minimum 2 minutes per point
3. Record coordinates
4. Verify accuracy indicator (PDOP, fix quality)
5. Document any concerns

**Accuracy requirements:**
- Horizontal: ± 2 cm
- Vertical: ± 3 cm
- Better accuracy if project requires

### 3.4 Check Points

**Place additional check points:**
- Minimum 2-3 check points per project
- Survey same as GCPs
- Use for accuracy verification post-processing
- Distribute across project area

### 3.5 Documentation

Record for each GCP:
- GCP ID (unique identifier)
- Coordinates (Easting, Northing, Elevation)
- Coordinate system and datum
- Geoid model (if applicable)
- Occupation time
- Accuracy/quality indicators
- Photo of GCP placement
- Date and surveyor

### 3.6 Quality Control

**Before leaving site:**
- Verify all GCPs collected
- Check for any outliers in data
- Confirm coordinates saved
- Back up data if possible

**Post-processing:**
- Review all GCP data
- Verify coordinate transformations
- Check for systematic errors
- Document final coordinates

---

## 4. Coordinate System Standards

**Default coordinate systems:**

| Application | Coordinate System |
|:------------|:------------------|
| BC projects | NAD83(CSRS) / BC Albers or UTM |
| Local grids | As specified by client |
| Elevation | CGVD2013 or orthometric height |

Always confirm coordinate requirements with client before survey.

---

## 5. Troubleshooting

| Issue | Action |
|:------|:-------|
| Poor satellite geometry | Wait or return later |
| Unable to get fix | Check obstructions; try different location |
| High PDOP | Increase occupation time; note in record |
| GCP moved | Re-survey before flight or exclude |

---

## 6. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| LM-001 | Land Survey Operations Policy |
| LM-001-PR | Land Survey Procedure |
| GUIDE-Survey_Mapping | Survey & Mapping Operations Guide |

---

**Document Control:** LM-002-PR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
