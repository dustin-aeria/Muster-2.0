# AERIA SOLUTIONS LTD

# SURVEY & MAPPING OPERATIONS GUIDE

---

| Field | Value |
|:------|:------|
| **Document Number** | GUIDE-SURVEY |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Review Date** | March 11, 2027 |
| **Document Owner** | Operations Manager |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. Introduction

This guide provides information for conducting aerial survey and mapping operations using RPAS, including photogrammetry, orthomosaic generation, volumetric surveys, and LiDAR data collection.

---

## 2. Survey Operation Types

| Type | Description | Output |
|:-----|:------------|:-------|
| **Orthomosaic** | Georeferenced aerial imagery | 2D orthorectified image |
| **Digital Surface Model** | Elevation from photogrammetry | DSM/DTM raster |
| **Stockpile Volume** | Volumetric measurement | Volume calculations |
| **Topographic Survey** | Ground elevation mapping | Contours, surfaces |
| **LiDAR Survey** | Laser scanning | Point cloud, surfaces |
| **Progress Monitoring** | Repeat surveys | Change detection |

---

## 3. Flight Planning for Survey

### 3.1 Coverage Planning

**Key Parameters:**

| Parameter | Description | Typical Value |
|:----------|:------------|:--------------|
| **GSD** | Ground Sample Distance (cm/pixel) | 1-5 cm mapping; 5-10 cm inspection |
| **Forward Overlap** | Overlap between consecutive images | 75-85% |
| **Side Overlap** | Overlap between adjacent lines | 65-75% |
| **Flight Altitude** | Determines GSD | Based on camera + GSD needed |
| **Flight Speed** | Affects image quality | Match to capture interval |

**GSD Calculation:**
```
GSD (cm/pixel) = (Sensor Width × Flight Height) / (Focal Length × Image Width)
```

Most planning software calculates this automatically.

### 3.2 Flight Pattern Options

| Pattern | Use |
|:--------|:----|
| **Grid (lawn mower)** | Standard mapping |
| **Double grid (crosshatch)** | Complex terrain, 3D modeling |
| **Circular/Orbit** | Single structures, points of interest |
| **Terrain following** | Varying elevation sites |
| **Corridor** | Linear features (roads, pipelines) |

### 3.3 Planning Software

Use mission planning software to:
- Define survey area
- Calculate flight lines
- Set altitude and overlap
- Estimate flight time and battery requirements
- Generate waypoints for aircraft

---

## 4. Ground Control Points (GCPs)

### 4.1 When GCPs Required

| Accuracy Requirement | GCP Approach |
|:--------------------|:-------------|
| Relative only | GCPs optional |
| ±30cm absolute | RTK/PPK GNSS on aircraft |
| ±5cm absolute | GCPs + RTK/PPK |
| Survey-grade | GCPs + full QC |

### 4.2 GCP Placement

**Guidelines:**
- Minimum 5 GCPs for small sites
- 1 GCP per 100m × 100m for larger sites
- Place at corners and edges of survey area
- Include some in middle
- Place on varied terrain (not just flat areas)
- Avoid placing on edges of surfaces (roads, buildings)

### 4.3 GCP Targets

| Type | Size | Visibility |
|:-----|:-----|:-----------|
| Survey markers (painted) | 50cm × 50cm | Good for most GSDs |
| AeroPoints (smart GCPs) | Standard | Automatic coordinate capture |
| Checkered targets | 60cm × 60cm | High contrast |

**Target requirements:**
- High contrast with background
- Visible in imagery
- Stable position during survey
- Not disturbed between measurement and flight

### 4.4 GCP Survey

Measure GCPs using:
- Survey-grade GNSS (preferred)
- RTK base station
- Total station (tie to known control)

Record:
- Point ID
- Easting, Northing, Elevation
- Coordinate system
- Photo of point

---

## 5. LiDAR Operations

### 5.1 LiDAR System Components

- Laser scanner unit
- GNSS receiver (for positioning)
- IMU (for orientation)
- Data storage
- Power system

### 5.2 LiDAR Flight Planning

| Parameter | Consideration |
|:----------|:--------------|
| Altitude | Affects point density and coverage |
| Speed | Affects point spacing along track |
| Line spacing | Based on swath width and overlap |
| Scan settings | Points per second, FOV |

### 5.3 LiDAR Calibration

Before survey flight:
- Calibration flight pattern (crossing lines)
- Verify IMU alignment
- Check GNSS lock
- Verify data recording

### 5.4 LiDAR Ground Control

- Control points for accuracy verification
- May use GCPs or known features
- Checkpoints for accuracy assessment

---

## 6. Data Collection Best Practices

### 6.1 Imaging Best Practices

| Factor | Best Practice |
|:-------|:--------------|
| **Weather** | Clear or overcast (consistent lighting); avoid harsh shadows |
| **Time of day** | Avoid midday (harsh shadows); morning/evening for low-angle |
| **Sun angle** | Sun at back or high angle; avoid shooting into sun |
| **Wind** | Low wind for image sharpness |
| **Camera settings** | Fast shutter; low ISO; fixed focus |

### 6.2 Flight Execution

- Verify mission uploaded correctly
- Start mission with good GNSS lock
- Monitor progress during flight
- Note any issues (battery swap, weather change)
- Complete full coverage before ending

### 6.3 Data Verification

After flight, verify:
- All images captured
- Image quality acceptable
- Coverage complete (review on ground if possible)
- GNSS data recorded
- Metadata correct

---

## 7. Common Applications

### 7.1 Stockpile Volumes

**Process:**
1. Plan survey covering all stockpiles
2. Fly with appropriate GSD (2-5cm)
3. Process to create DSM
4. Define base plane
5. Calculate cut/fill volumes

**Accuracy factors:**
- GSD
- Ground control
- Edge definition
- Base plane definition

### 7.2 Construction Progress

**Process:**
1. Establish consistent flight plan
2. Fly at regular intervals
3. Process with consistent parameters
4. Compare to design surfaces
5. Generate progress reports

### 7.3 Agriculture

**Process:**
1. Plan coverage of fields
2. Use appropriate sensor (RGB, multispectral)
3. Process to create vegetation indices
4. Analyze crop health patterns

### 7.4 Land Survey/Topographic

**Process:**
1. Establish ground control
2. Fly with high overlap
3. Process to create DSM/DTM
4. Generate contours
5. Export to CAD/GIS formats

---

## 8. Data Processing Overview

### 8.1 Photogrammetry Workflow

1. **Import** images
2. **Align** images (tie points)
3. **Mark GCPs** (if using)
4. **Optimize** alignment
5. **Build** dense point cloud
6. **Build** mesh (if needed)
7. **Build** DSM
8. **Build** orthomosaic
9. **Export** products

### 8.2 Quality Control

| Check | Method |
|:------|:-------|
| GCP residuals | Review in processing report |
| Checkpoint accuracy | Compare to independent points |
| Visual inspection | Check for artifacts, gaps, blurring |
| Coverage | Verify entire area processed |

---

## 9. Deliverables

### 9.1 Common Deliverable Formats

| Product | Format |
|:--------|:-------|
| Orthomosaic | GeoTIFF, ECW, JPEG2000 |
| DSM/DTM | GeoTIFF, LAS, XYZ |
| Point cloud | LAS, LAZ, PLY |
| Contours | DXF, SHP |
| Volumes | Report (PDF, Excel) |
| 3D model | OBJ, FBX |

### 9.2 Coordinate Systems

**Always confirm:**
- Horizontal datum (NAD83, WGS84)
- Vertical datum (CGVD28, CGVD2013)
- Projection (UTM zone, state plane)
- Units (meters, feet)

---

## 10. Key References

| Document | Content |
|:---------|:--------|
| OPS-006 | Payload Management Policy |
| OPS-010-PR | Payload Operations Procedure |
| FHA-5.x | Survey & Data Collection FHAs |

---

**Document Control:** GUIDE-SURVEY v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
