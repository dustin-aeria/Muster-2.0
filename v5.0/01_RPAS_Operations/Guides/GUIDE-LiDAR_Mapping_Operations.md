# AERIA SOLUTIONS LTD

# LiDAR MAPPING OPERATIONS GUIDE

## DJI Matrice 350 RTK with Zenmuse L2

---

| Field | Value |
|:------|:------|
| **Document Number** | GUIDE-LiDAR |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Aircraft** | DJI Matrice 350 RTK |
| **Payload** | Zenmuse L2 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. System Overview

### 1.1 Zenmuse L2 Specifications

| Parameter | Specification |
|:----------|:--------------|
| Laser Wavelength | 905 nm (invisible) |
| Range | 450 m @ 10% reflectivity |
| Point Rate | Up to 240,000 pts/sec |
| Returns | Up to 5 returns |
| Accuracy (Vertical) | 4 cm @ 150 m |
| Accuracy (Horizontal) | 5 cm @ 150 m |
| FOV | 70° |
| Scan Rate | 160 Hz |
| IP Rating | IP54 |
| Weight | 905 g |
| IMU | Integrated high-precision |
| Camera | 4/3 CMOS, 20 MP RGB |

### 1.2 M350 RTK Specifications (LiDAR Config)

| Parameter | Specification |
|:----------|:--------------|
| Max Flight Time (L2) | ~42 minutes |
| Max Wind Resistance | 12 m/s |
| Operating Temp | -20°C to +50°C |
| RTK Positioning | Centimeter-level |
| IP Rating | IP55 |

### 1.3 RTK Options

| Option | Equipment | Best For |
|:-------|:----------|:---------|
| **DJI D-RTK 2** | D-RTK 2 Mobile Station | Simple setup, DJI ecosystem |
| **Emlid RS2** | RS2/RS2+ Base + Rover | Flexibility, NTRIP, existing survey gear |
| **NTRIP** | Network subscription | Urban areas with cell coverage |

---

## 2. Equipment Checklist

### 2.1 Aircraft & Payload

| Item | Quantity | Check |
|:-----|:---------|:------|
| DJI M350 RTK | 1 | ☐ |
| TB65 Batteries (charged) | 3+ sets | ☐ |
| Zenmuse L2 | 1 | ☐ |
| DJI RC Plus Controller | 1 | ☐ |
| Controller batteries (charged) | 2 | ☐ |
| MicroSD cards (256GB+) | 2 | ☐ |
| Lens cleaning kit | 1 | ☐ |
| Sunshade for controller | 1 | ☐ |

### 2.2 DJI RTK Setup

| Item | Quantity | Check |
|:-----|:---------|:------|
| D-RTK 2 Mobile Station | 1 | ☐ |
| D-RTK 2 Battery (charged) | 2 | ☐ |
| Tripod (heavy-duty) | 1 | ☐ |
| Tripod adapter | 1 | ☐ |

### 2.3 Emlid RTK Setup

| Item | Quantity | Check |
|:-----|:---------|:------|
| Emlid Reach RS2/RS2+ (Base) | 1 | ☐ |
| Emlid Reach RS2/RS2+ (Rover) | 1 (optional) | ☐ |
| RS2 Batteries or power source | Sufficient | ☐ |
| Survey tripod | 1 | ☐ |
| Tribrach | 1 | ☐ |
| 2m survey pole (if using rover) | 1 | ☐ |
| Bipod for pole | 1 | ☐ |
| LoRa antenna (if not using NTRIP) | 1 | ☐ |
| Mobile device with Emlid Flow | 1 | ☐ |
| Mobile hotspot (for NTRIP) | 1 | ☐ |

### 2.4 Support Equipment

| Item | Quantity | Check |
|:-----|:---------|:------|
| Landing pad | 1 | ☐ |
| Ground control points (GCPs) | 5+ | ☐ |
| Measuring tape / survey rod | 1 | ☐ |
| Laptop with DJI Terra | 1 | ☐ |
| Field notebook | 1 | ☐ |
| Sunscreen / bug spray | As needed | ☐ |

---

## 3. Project Planning Workflow

### 3.1 Desktop Planning (Before Field Visit)

#### Client Requirements Checklist

| Requirement | Details to Confirm |
|:------------|:-------------------|
| Project area | Boundary coordinates or KML/SHP file |
| Deliverables | Point cloud format, DEM, contours, orthomosaic |
| Accuracy | Horizontal and vertical requirements |
| Coordinate system | Projection, datum, vertical datum |
| Point density | Minimum points per square meter |
| Classification | Required classes (ground, vegetation, buildings) |
| Timeline | Delivery deadline |
| Access | Site access permissions, contacts |

#### Desktop Site Analysis

1. **Review Satellite Imagery**
   - Google Earth / Google Maps
   - Identify obstacles, vegetation, structures
   - Assess terrain complexity

2. **Check Airspace**
   - NAV CANADA airspace map
   - Identify controlled airspace
   - Check for NOTAMs
   - Determine authorization requirements

3. **Plan RTK Strategy**

   | Scenario | RTK Method |
   |:---------|:-----------|
   | Good cell coverage | NTRIP |
   | Remote, no cell | D-RTK 2 or Emlid LoRa base |
   | Multiple flights over days | Establish fixed base point |
   | Client has survey control | Use client's control points |

4. **Flight Planning (Desktop)**

   **In DJI Pilot 2 or DJI FlightHub 2:**
   - Import site boundary (KML/SHP)
   - Plan flight lines
   - Calculate number of flights needed
   - Estimate battery requirements
   - Identify takeoff/landing locations

5. **Resource Planning**

   | Resource | Calculation |
   |:---------|:------------|
   | Flight time | Area ÷ coverage rate |
   | Batteries | (Total flight time ÷ 35 min) + 1 spare |
   | Storage | ~5GB per 10 min of flight |
   | GCPs | Based on area and accuracy needs |
   | Personnel | PIC + VO if required |

#### Pre-Mission Documentation

| Document | Purpose |
|:---------|:--------|
| Site map with flight plan | Visual reference |
| Airspace authorization | If required |
| Client contact info | Communication |
| Emergency contacts | Safety |
| Equipment checklist | Packing |
| Weather briefing | Go/no-go decision |

---

## 4. Pre-Field Site Assessment

### 4.1 Field Site Assessment

| Factor | Consideration |
|:-------|:--------------|
| Terrain | Slope, vegetation density, obstructions |
| Coverage area | Calculate flight lines needed |
| Access | RTK base station placement |
| Cell coverage | NTRIP viability |
| Airspace | Authorization requirements |
| Weather | Wind, precipitation forecast |

### 4.2 Flight Parameter Planning

#### Recommended Settings by Application

| Application | AGL | Speed | Overlap | Point Density |
|:------------|:----|:------|:--------|:--------------|
| **Topographic Survey** | 80-100m | 10-12 m/s | 50% side | 100-150 pts/m² |
| **Forestry / Vegetation** | 100-120m | 10 m/s | 60% side | 80-120 pts/m² |
| **Corridor (Power Lines)** | 60-80m | 8-10 m/s | 50% side | 150-200 pts/m² |
| **Stockpile / Mining** | 50-80m | 8 m/s | 50% side | 150-200 pts/m² |
| **Construction Site** | 60-80m | 8 m/s | 50% side | 150-200 pts/m² |
| **Detailed / High-Res** | 50-60m | 6-8 m/s | 60% side | 200-300 pts/m² |

#### Point Density Calculator

| Flight Height (AGL) | Approximate Point Density |
|:--------------------|:--------------------------|
| 50 m | 300 pts/m² |
| 80 m | 180 pts/m² |
| 100 m | 150 pts/m² |
| 120 m | 120 pts/m² |
| 150 m | 100 pts/m² |

### 4.3 Coverage Estimation

| Parameter | Formula |
|:----------|:--------|
| Swath Width | Height × 1.4 (70° FOV) |
| Overlap Distance | Swath × (1 - Overlap%) |
| Flight Lines | Site Width ÷ Overlap Distance |

**Example:** 100m AGL, 50% overlap
- Swath = 100 × 1.4 = 140m
- Overlap distance = 140 × 0.5 = 70m line spacing

---

## 5. DJI D-RTK 2 Workflow

### 5.1 D-RTK 2 Base Station Setup

#### Physical Setup

1. **Select Location**
   - Clear sky view (no obstructions above 15°)
   - Stable ground
   - Known survey point OR open area for averaging

2. **Deploy Tripod**
   - Level using bubble level
   - Secure legs firmly
   - Mark position for repeatability

3. **Mount D-RTK 2**
   - Attach to tripod adapter
   - Connect antenna
   - Insert charged battery
   - Power ON (hold 3 seconds)

4. **Wait for Convergence**
   - Status light flashes during acquisition
   - Solid GREEN = RTK fixed ready
   - Typical time: 2-5 minutes

#### DJI Pilot 2 - Base Station Configuration

1. **Open DJI Pilot 2** on RC Plus

2. **Navigate to RTK Settings**
   - Tap aircraft icon → RTK
   - Enable RTK toggle

3. **Select RTK Source: D-RTK 2 Mobile Station**

4. **Configure Base Coordinates**

   | Method | When to Use | Steps |
   |:-------|:------------|:------|
   | **Manual Input** | Known survey mark | Enter Lat, Long, Ellipsoid Height (WGS84) |
   | **Current Position** | Unknown point | Let D-RTK 2 average position (5+ min recommended) |
   | **Quick Start** | Repeat site | Use stored coordinates |

5. **Verify Connection**
   - Aircraft RTK status shows "FIX"
   - Positioning accuracy shown in app

### 5.2 Aircraft RTK Verification

Before flight, confirm:

| Check | Expected Status |
|:------|:----------------|
| RTK Status | FIX |
| Horizontal Accuracy | < 2 cm |
| Vertical Accuracy | < 3 cm |
| Satellites | 20+ |
| Link Quality | Strong |

---

## 6. Emlid RS2 Workflow

### 6.1 Overview of Methods

| Method | Requirements | When to Use |
|:-------|:-------------|:------------|
| **NTRIP** | Cell data, NTRIP subscription | Urban, good cell coverage |
| **LoRa Base-Rover** | RS2 base + LoRa | No cell coverage, < 8km baseline |
| **Post-Processing (PPK)** | RS2 logging + base data | Remote areas, highest accuracy |

### 6.2 Emlid Flow App Setup

#### Initial Configuration

1. **Download Emlid Flow** (iOS/Android)

2. **Connect to RS2**
   - Power ON RS2
   - Connect phone to RS2 WiFi hotspot
   - Default: `reach:xx:xx` / Password: `emlidreach`

3. **Update Firmware** (if needed)
   - Check for updates in app
   - Update before field work

### 6.3 NTRIP Configuration (Emlid RS2 as Rover)

This method uses a network RTK service to send corrections directly to the M350.

#### Option A: RS2 + NTRIP → DJI Via Bluetooth

**Not directly supported.** DJI M350 cannot receive corrections from Emlid via Bluetooth.

#### Option B: NTRIP Direct to DJI Pilot 2

1. **In DJI Pilot 2:**
   - RTK Settings → RTK Source → Custom Network RTK

2. **Enter NTRIP Credentials:**

   | Field | Value |
   |:------|:------|
   | Host | Your NTRIP caster address |
   | Port | Typically 2101 |
   | Username | Your account username |
   | Password | Your account password |
   | Mountpoint | Select appropriate base |

3. **Verify Fix Status**
   - Wait for RTK FIX
   - Confirm accuracy values

**Note:** This method does not use Emlid hardware for the drone. Use Emlid RS2 separately to collect GCPs if needed.

### 6.4 Emlid RS2 as Base Station (LoRa to Rover)

For collecting GCPs while using DJI RTK for the drone:

#### Base Station Setup

1. **Physical Setup**
   - Mount RS2 on tripod over known point OR averaging position
   - Level carefully
   - Clear sky view

2. **Emlid Flow - Base Mode Configuration**

   | Setting | Value |
   |:--------|:------|
   | Mode | Base |
   | Base Coordinates | Manual (known point) OR Average |
   | Average Time | 5-10 minutes minimum |
   | Output | LoRa |

3. **If Using Known Point:**
   - Enter coordinates in Emlid Flow
   - Select correct coordinate system
   - Input ellipsoidal height (not orthometric unless using geoid)

4. **If Averaging:**
   - Select "Average SINGLE" for approximately known
   - Select "Average FIX" if receiving NTRIP (higher accuracy)
   - Let average for 5-10 minutes

5. **LoRa Settings:**

   | Setting | Recommended |
   |:--------|:------------|
   | Frequency | Check local regulations (varies by country) |
   | Air Data Rate | 9.11 kb/s (balance of range/rate) |
   | Output Power | 20 dBm |

#### Rover Setup (for GCP Collection)

1. **Mount RS2 on Survey Pole**
   - Measure and enter pole height accurately
   - Use bipod for stability

2. **Emlid Flow - Rover Mode Configuration**

   | Setting | Value |
   |:--------|:------|
   | Mode | Rover |
   | Correction Input | LoRa |
   | Matching Base Settings | Same frequency/data rate |

3. **Verify RTK Fix**
   - Status should show "FIX"
   - AR ratio > 3.0
   - Age of differential < 2 seconds

4. **Collect GCPs**
   - Navigate to target
   - Wait for stable FIX
   - Collect point (average 10-30 seconds)
   - Record point name/number

### 6.5 Emlid Flow - Point Collection Settings

#### Survey Settings

| Setting | Recommended Value |
|:--------|:------------------|
| Coordinate System | WGS84 or local (match project) |
| Elevation | Ellipsoidal (recommended for LiDAR) |
| Auto-save | ON |
| Collection Mode | Point averaging |
| Averaging Time | 30 seconds for GCPs |

#### Stakeout (for placing GCPs)

1. Import target coordinates
2. Use stakeout function to navigate
3. Place GCP target at indicated position

---

## 7. DJI Pilot 2 - Mission Planning

### 7.1 Creating a LiDAR Mission

1. **Open DJI Pilot 2**

2. **Select Flight → Mapping**

3. **Choose Mission Type:**

   | Type | Use Case |
   |:-----|:---------|
   | Area | Standard site mapping |
   | Linear | Corridors, roads, power lines |
   | Waypoint | Custom complex paths |

4. **Draw Area**
   - Tap corners on map
   - Adjust boundary precisely

### 7.2 LiDAR Mission Parameters

#### Camera/Payload Settings

| Setting | Description | Recommendation |
|:--------|:------------|:---------------|
| Payload | Zenmuse L2 | Select L2 |
| Laser Return | Single/Multiple | Multiple (vegetation) |
| Point Cloud Coloring | True Color / None | True Color |
| RGB Capture | ON/OFF | ON for colorized point cloud |

#### Flight Settings

| Setting | Description | Typical Value |
|:--------|:------------|:--------------|
| Flight Altitude | AGL height | 80-100m standard |
| Speed | Ground speed | 8-12 m/s |
| Sidelap | Overlap between lines | 50-60% |
| Course Angle | Flight line direction | Perpendicular to slope |
| Margin | Extended coverage | 20-30m |

#### Terrain Follow Settings

| Setting | When to Use |
|:--------|:------------|
| Terrain Follow OFF | Flat terrain |
| Terrain Follow ON | Hilly/sloped terrain |
| DEM Source | DJI map / Import custom |
| Safety Height | Add 20-30m buffer |

### 7.3 Advanced Settings

#### IMU Calibration Settings

| Setting | Recommendation |
|:--------|:---------------|
| IMU Warmup | Enable (2-3 min) |
| Calibration Flight | Enable for highest accuracy |

**Calibration Flight Pattern:**
- Automatic figure-8 at start/end
- Required for best IMU alignment
- Adds ~2 minutes to mission

#### Return-to-Home Settings

| Setting | Value |
|:--------|:------|
| RTH Altitude | Higher than obstacles |
| Low Battery RTH | 25% recommended |
| Critical Battery | 15% |

---

## 8. Flight Operations

### 8.1 Pre-Flight Checks

#### RTK Verification Checklist

| Item | Check |
|:-----|:------|
| Base station operational | ☐ |
| RTK link established | ☐ |
| FIX status confirmed | ☐ |
| Accuracy values acceptable | ☐ |
| Satellite count adequate (>20) | ☐ |

#### L2 Payload Checks

| Item | Check |
|:-----|:------|
| Lens clean (no debris/moisture) | ☐ |
| Gimbal moves freely | ☐ |
| MicroSD inserted and formatted | ☐ |
| Storage space adequate | ☐ |

#### Aircraft Checks

| Item | Check |
|:-----|:------|
| Batteries charged (>95%) | ☐ |
| Props secure and undamaged | ☐ |
| Arms locked | ☐ |
| Firmware current | ☐ |
| Compass calibrated (if prompted) | ☐ |

### 8.2 Mission Execution

#### Startup Sequence

1. **Power ON Base Station First**
   - Wait for RTK ready status

2. **Power ON Aircraft**
   - Allow IMU warmup (2-3 min)
   - Verify RTK FIX

3. **Verify in DJI Pilot 2:**
   - RTK status: FIX
   - Satellites: 20+
   - Accuracy: <2cm horizontal

4. **Upload Mission**
   - Review parameters
   - Check altitude clearances
   - Verify coverage area

5. **Execute Mission**
   - Slide to start
   - Monitor throughout
   - Do not interrupt unless necessary

#### During Flight Monitoring

| Parameter | Watch For |
|:----------|:----------|
| RTK Status | Should remain FIX |
| Battery Level | Plan landing at 25% |
| Storage | Adequate remaining |
| GPS Count | Should not drop significantly |
| Link Quality | Maintain connection |

### 8.3 Multi-Battery Operations

For large sites requiring multiple flights:

1. **Plan Missions with Overlap**
   - 10-15% overlap between missions
   - Use common tie lines

2. **Between Flights:**
   - Land at 25% battery
   - Swap batteries quickly
   - Keep aircraft powered if possible (preserves IMU)
   - If power cycled, allow new IMU warmup

3. **Base Station:**
   - Keep running continuously
   - Do not move between flights
   - If moved, re-survey position

---

## 9. Ground Control Points (GCPs)

### 9.1 GCP Placement Strategy

| Site Size | Minimum GCPs | Placement |
|:----------|:-------------|:----------|
| Small (<10 ha) | 5 | 4 corners + 1 center |
| Medium (10-50 ha) | 7-9 | Perimeter + distributed interior |
| Large (>50 ha) | 10+ | Grid pattern, max 300m spacing |

### 9.2 GCP Target Specifications

| Specification | Requirement |
|:--------------|:------------|
| Size | 60cm × 60cm minimum |
| Pattern | High contrast (black/white checkerboard) |
| Material | Durable, flat, weather-resistant |
| Placement | Flat, visible from above |
| Securing | Weighted/staked to prevent movement |

### 9.3 Surveying GCPs with Emlid RS2

#### Collection Procedure

1. **Setup Base Station** (per Section 5.4)

2. **Configure Rover**
   - Mount on survey pole
   - Enter exact pole height
   - Verify RTK FIX

3. **At Each GCP:**
   - Position pole at target center
   - Level bubble centered
   - Hold stable

4. **In Emlid Flow:**
   - Tap "Collect"
   - Enter point name (e.g., GCP01)
   - Average for 30 seconds minimum
   - Confirm FIX maintained throughout
   - Save point

5. **Document:**
   - Photo of GCP with surroundings
   - Notes on any issues
   - Verify in point list

### 9.4 GCP Data Export

From Emlid Flow:

1. **Projects → Select Project**
2. **Export**
3. **Select Format:**
   - CSV (most compatible)
   - DXF
   - GeoJSON
   - Shapefile

4. **Coordinate Settings:**
   - Match LiDAR project datum
   - Include ellipsoidal heights

---

## 10. Data Management

### 10.1 Data Storage Requirements

| Data Type | Typical Size | Storage Recommendation |
|:----------|:-------------|:-----------------------|
| L2 LAS/LAZ per flight | 2-10 GB | 256GB+ card |
| RGB imagery | 1-5 GB | Same card or separate |
| Full project (processed) | 10-100 GB | External SSD |

### 10.2 File Structure

```
Project_Name/
├── 01_Raw_Data/
│   ├── Flight_01/
│   │   ├── LiDAR/
│   │   └── RGB/
│   ├── Flight_02/
│   └── GCPs/
├── 02_Processed/
│   ├── Point_Cloud/
│   ├── DEM/
│   └── Orthomosaic/
├── 03_Deliverables/
└── 04_Documentation/
    ├── Flight_Logs/
    ├── GCP_Report/
    └── QC_Report/
```

### 10.3 Post-Flight Data Transfer

1. **Remove MicroSD Safely**
   - Power off aircraft first
   - Use card reader

2. **Copy Data**
   - Transfer to laptop/SSD
   - Verify file integrity
   - Do NOT delete from card until verified

3. **Backup**
   - Create redundant copy immediately
   - Cloud backup if available

4. **Format Card**
   - Only after verified backup
   - Format in aircraft (not computer)

---

## 11. DJI Terra Processing (Quick Start)

### 11.1 Import Data

1. **Open DJI Terra**
2. **New Project → LiDAR Point Cloud**
3. **Import Data**
   - Select all L2 data files from flight
   - Verify detection of embedded trajectory

### 11.2 Processing Settings

#### Quality Settings

| Setting | Options | Recommendation |
|:--------|:--------|:---------------|
| Point Cloud Density | Sparse/Medium/Dense | Dense for surveys |
| Accuracy | Normal/High | High for deliverables |

#### Coordinate System

| Setting | Configuration |
|:--------|:--------------|
| Horizontal | Match client requirement (UTM, State Plane, etc.) |
| Vertical | Ellipsoidal OR Orthometric (specify geoid) |
| Output | Confirm with client |

### 11.3 GCP Integration

1. **Import GCPs**
   - File → Import GCPs
   - Select CSV or appropriate format
   - Match coordinate format

2. **Mark GCPs**
   - Locate in imagery
   - Click center of target
   - Verify residuals

3. **Adjustment**
   - Process with GCPs
   - Review residual report
   - Accept if within tolerance

### 11.4 Quality Check

| Metric | Acceptable | Action if Failed |
|:-------|:-----------|:-----------------|
| GCP Residual (H) | <5 cm | Verify GCP survey, re-mark |
| GCP Residual (V) | <10 cm | Verify GCP survey, re-mark |
| Point Cloud Gaps | None | Check for RTK dropouts |
| Noise Level | Low | Check flight parameters |

### 11.5 Export Options

| Format | Use Case |
|:-------|:---------|
| LAS 1.4 | Standard delivery |
| LAZ | Compressed delivery |
| PLY | Visualization |
| DXF | CAD integration |
| TIFF (DEM) | Elevation model |
| TIFF (Ortho) | Imagery |

---

## 12. Troubleshooting

### 12.1 RTK Issues

| Problem | Possible Cause | Solution |
|:--------|:---------------|:---------|
| No FIX | Poor sky view | Relocate base station |
| No FIX | Obstruction | Wait, move to open area |
| FLOAT only | Weak signal | Move closer to base, check antenna |
| RTK drops in flight | Range exceeded | Relocate base, use NTRIP |
| RTK drops in flight | Interference | Change frequency, check for RF sources |

### 12.2 Emlid RS2 Issues

| Problem | Possible Cause | Solution |
|:--------|:---------------|:---------|
| No FIX | Base corrections not received | Check LoRa settings match |
| No FIX | Wrong base coordinates | Verify input format |
| LoRa no link | Range | Move closer, check antenna |
| NTRIP fails | No data | Check cell signal, credentials |
| High age of differential | Slow link | Check connection speed |

### 12.3 L2 LiDAR Issues

| Problem | Possible Cause | Solution |
|:--------|:---------------|:---------|
| No points collected | Laser not activated | Check mission settings |
| Sparse points | Too high AGL | Lower flight altitude |
| Noisy points | Multipath / wet surface | Filter in post-processing |
| Missing areas | RTK dropout | Check flight log for gaps |
| RGB misaligned | Camera calibration | Recalibrate in Terra |

### 12.4 Mission Issues

| Problem | Possible Cause | Solution |
|:--------|:---------------|:---------|
| Mission won't start | RTK not FIX | Wait for FIX status |
| Aircraft RTH mid-mission | Low battery | Plan shorter missions |
| Terrain follow errors | Bad DEM | Import accurate DEM |
| Coverage gaps | Insufficient overlap | Increase sidelap % |

---

## 13. Safety Considerations

### 13.1 Laser Safety

| Hazard | Control |
|:-------|:--------|
| Eye exposure | Never look directly at laser aperture |
| Reflective surfaces | Avoid close-range scanning of mirrors/glass |
| People in scan area | Clear area below flight path |

**Zenmuse L2 is Class 1 Laser Product (eye-safe at rated distances)**

### 13.2 Flight Safety

| Hazard | Control |
|:-------|:--------|
| Obstacles | Pre-survey site, set appropriate altitude |
| Weather | Do not fly in rain, high wind, or lightning |
| Loss of link | Set appropriate failsafe |
| Battery depletion | Monitor, land at 25% |

### 13.3 RTK Base Station

| Hazard | Control |
|:-------|:--------|
| Tripod tip-over | Secure legs, use weights in wind |
| Equipment theft | Maintain visual contact |
| Trip hazard | Mark location, keep clear |

---

## 14. Quick Reference Settings

### 14.1 Standard Topographic Survey

| Parameter | Setting |
|:----------|:--------|
| Altitude | 80-100m AGL |
| Speed | 10 m/s |
| Sidelap | 50% |
| Return Mode | Multiple |
| RGB | ON |
| Terrain Follow | As needed |
| IMU Calibration | ON |

### 14.2 Forestry / Vegetation

| Parameter | Setting |
|:----------|:--------|
| Altitude | 100-120m AGL |
| Speed | 10 m/s |
| Sidelap | 60% |
| Return Mode | Multiple (important) |
| RGB | ON |
| Note | Multiple returns penetrate canopy |

### 14.3 Corridor (Power Lines, Roads)

| Parameter | Setting |
|:----------|:--------|
| Altitude | 60-80m AGL |
| Speed | 8 m/s |
| Sidelap | 50% |
| Corridor Width | As required + 30m buffer |
| Return Mode | Multiple |
| Note | Plan perpendicular cross-lines |

### 14.4 Stockpile / Volume

| Parameter | Setting |
|:----------|:--------|
| Altitude | 50-80m AGL |
| Speed | 6-8 m/s |
| Sidelap | 50% |
| Return Mode | Single or Multiple |
| RGB | ON |
| Note | Lower altitude for higher density |

---

## 15. Emlid Flow Quick Reference

### 15.1 Base Setup Summary

1. Power ON RS2
2. Connect phone to RS2 WiFi
3. Open Emlid Flow
4. Tap RS2 device
5. Mode → Base
6. Base coordinates → Enter or Average
7. Correction output → LoRa (set frequency/rate)
8. Apply

### 15.2 Rover Setup Summary

1. Power ON RS2
2. Connect phone to RS2 WiFi
3. Open Emlid Flow
4. Tap RS2 device
5. Mode → Rover
6. Correction input → LoRa (match base settings)
7. Apply
8. Wait for FIX

### 15.3 Point Collection Summary

1. Verify FIX status
2. Tap Survey
3. New Project (or select existing)
4. Navigate to point
5. Tap Collect
6. Enter name
7. Wait for averaging
8. Save

### 15.4 Common LoRa Settings (Canada)

| Setting | Value |
|:--------|:------|
| Frequency | 902-928 MHz (ISM band) |
| Air Data Rate | 9.11 kb/s |
| Output Power | 20 dBm |

**Note:** Verify local regulations for your specific region.

---

## 16. Deliverable Checklist

### 16.1 Standard LiDAR Deliverables

| Deliverable | Format | Check |
|:------------|:-------|:------|
| Classified Point Cloud | LAS/LAZ | ☐ |
| Ground Points Only | LAS/LAZ | ☐ |
| Digital Elevation Model | GeoTIFF | ☐ |
| Contours (optional) | DXF/SHP | ☐ |
| Orthomosaic (optional) | GeoTIFF | ☐ |
| Flight Report | PDF | ☐ |
| GCP Report | PDF/CSV | ☐ |
| Accuracy Report | PDF | ☐ |

### 16.2 Documentation

| Document | Contents | Check |
|:---------|:---------|:------|
| Flight Log | Times, batteries, conditions | ☐ |
| GCP Survey Report | Coordinates, methods, accuracy | ☐ |
| Processing Report | Software, settings, results | ☐ |
| QC Report | Accuracy assessment | ☐ |
| Metadata | Datum, projection, units | ☐ |

---

## 17. Complete Processing Workflow

### 17.1 Processing Software Options

| Software | Strengths | Best For |
|:---------|:----------|:---------|
| **DJI Terra** | Native L2 support, integrated workflow | Standard processing, quick turnaround |
| **Terrasolid** | Advanced classification, power line tools | Utility corridor, complex projects |
| **LiDAR360** | Full feature set, reasonable cost | General purpose, multiple sensors |
| **Global Mapper** | GIS integration, versatile | GIS workflows, format conversion |
| **CloudCompare** | Free, powerful analysis | QC, visualization, comparison |
| **QGIS + LAStools** | Free, scriptable | Budget projects, automation |
| **Pix4Dmatic** | Combined photogrammetry + LiDAR | Hybrid workflows |

### 17.2 DJI Terra - Complete Workflow

#### Step 1: Create New Project

1. Open DJI Terra
2. File → New Project
3. Select **LiDAR Point Cloud**
4. Name project (use date_site naming)
5. Choose project folder location

#### Step 2: Import Data

1. Click **Import**
2. Navigate to raw L2 data folder
3. Select all `.LiDAR` folders from flights
4. Terra automatically detects:
   - Point cloud data
   - Trajectory data
   - RGB imagery (if captured)

#### Step 3: Configure Coordinate System

1. Click **Settings** → **Coordinate System**
2. Set **Horizontal Coordinate System:**

   | Common Options | EPSG Code |
   |:---------------|:----------|
   | UTM Zone 10N (BC Coast) | 32610 |
   | UTM Zone 11N (BC Interior) | 32611 |
   | NAD83 / BC Albers | 3005 |
   | WGS 84 | 4326 |

3. Set **Vertical Coordinate System:**

   | Option | When to Use |
   |:-------|:------------|
   | Ellipsoidal (HAE) | Most LiDAR work, no geoid needed |
   | CGVD2013 | Canadian orthometric heights |
   | CGVD28 | Legacy Canadian projects |
   | EGM96/EGM2008 | International projects |

4. If using orthometric heights, select appropriate geoid model

#### Step 4: Import Ground Control Points

1. Click **GCP Manager**
2. **Import** → Select GCP file
3. Configure import settings:

   | Setting | Value |
   |:--------|:------|
   | File format | CSV, TXT, etc. |
   | Delimiter | Comma, Tab, Space |
   | Column order | Name, Easting, Northing, Elevation |
   | Coordinate system | Match GCP survey datum |
   | Skip header | If applicable |

4. Verify GCPs appear on map

#### Step 5: Mark GCPs in Imagery

1. For each GCP:
   - Click GCP in list
   - Find target in RGB imagery
   - Click center of target
   - Verify marker placement

2. Mark at least 3 GCPs (5+ recommended)

3. Review residuals after marking

#### Step 6: Processing Settings

1. Click **Reconstruct** → **Settings**

2. **Point Cloud Quality:**

   | Setting | Effect |
   |:--------|:-------|
   | Low | Fast processing, sparse cloud |
   | Medium | Balanced |
   | High | Slow processing, dense cloud |

3. **Point Cloud Optimization:**
   - Enable for cleaner results
   - Adds processing time

4. **RGB Colorization:**
   - Enable to colorize points with RGB imagery
   - Disable for faster processing

5. **Output Settings:**

   | Output | Format Options |
   |:-------|:---------------|
   | Point Cloud | LAS, LAZ, PLY, PCD |
   | DEM | GeoTIFF |
   | DSM | GeoTIFF |
   | Orthomosaic | GeoTIFF |

#### Step 7: Process

1. Click **Start Reconstruct**
2. Monitor progress (can take hours for large projects)
3. Do not interrupt processing

#### Step 8: Review Results

1. **Point Cloud Tab:**
   - Rotate, zoom to inspect
   - Check for gaps, noise
   - Verify coverage

2. **Quality Report:**
   - Review GCP residuals
   - Check point density
   - Note any warnings

### 17.3 Point Cloud Classification

#### DJI Terra Classification

1. **Automatic Classification:**
   - Terra provides basic ground classification
   - Review and refine as needed

2. **Classification Classes (ASPRS Standard):**

   | Class | Description |
   |:------|:------------|
   | 0 | Created, never classified |
   | 1 | Unclassified |
   | 2 | Ground |
   | 3 | Low Vegetation (0-0.5m) |
   | 4 | Medium Vegetation (0.5-2m) |
   | 5 | High Vegetation (>2m) |
   | 6 | Building |
   | 7 | Low Point (noise) |
   | 9 | Water |
   | 17 | Bridge Deck |
   | 18 | High Noise |

#### Manual Classification Refinement

For areas requiring manual correction:
1. Select points using polygon/lasso tool
2. Assign correct classification
3. Focus on:
   - Ground under dense vegetation
   - Building edges
   - Bridge decks
   - Water surfaces

### 17.4 Generating Terrain Products

#### Digital Elevation Model (DEM)

1. **In DJI Terra:**
   - Products → DEM
   - Select ground points only (Class 2)
   - Set resolution (typically 0.1-1.0m)
   - Choose interpolation method

2. **Resolution Guidelines:**

   | Application | Resolution |
   |:------------|:-----------|
   | Detailed engineering | 0.1 - 0.25m |
   | Topographic mapping | 0.25 - 0.5m |
   | General terrain | 0.5 - 1.0m |
   | Regional overview | 1.0 - 5.0m |

#### Digital Surface Model (DSM)

1. **In DJI Terra:**
   - Products → DSM
   - Use first returns (all classes)
   - Set resolution
   - Process

#### Contours

1. **In DJI Terra:**
   - Products → Contours
   - Based on DEM
   - Set contour interval

2. **Contour Intervals:**

   | Terrain | Major | Minor |
   |:--------|:------|:------|
   | Flat | 1.0m | 0.25m |
   | Rolling | 2.0m | 0.5m |
   | Hilly | 5.0m | 1.0m |
   | Mountainous | 10.0m | 2.0m |

### 17.5 Exporting Deliverables

#### Point Cloud Export

1. File → Export → Point Cloud
2. Select format:

   | Format | Use Case | Notes |
   |:-------|:---------|:------|
   | LAS 1.4 | Standard delivery | Full attribution |
   | LAZ | Compressed delivery | 5-10x smaller |
   | PLY | Visualization | Good for meshes |
   | E57 | BIM/CAD | Interoperability |

3. Configure export:
   - Include RGB (if colorized)
   - Include intensity
   - Include classification
   - Set coordinate precision

#### Raster Export (DEM/DSM/Ortho)

1. File → Export → Raster
2. Select products
3. Configure:

   | Setting | Options |
   |:--------|:--------|
   | Format | GeoTIFF (most compatible) |
   | Compression | LZW or None |
   | Bit Depth | 32-bit float for DEM |
   | Tiling | Enable for large areas |

#### Vector Export (Contours)

1. File → Export → Vector
2. Select format:
   - DXF (CAD)
   - SHP (GIS)
   - KML (Google Earth)

---

## 18. Viewing and Visualization

### 18.1 Quick Viewing Options

#### DJI Terra Viewer (Built-in)

- **Pros:** Already open, no export needed
- **Cons:** Limited tools
- **Use for:** Quick QC, basic inspection

#### Windows 3D Viewer

- Some versions support LAS/LAZ
- Very basic viewing only

### 18.2 CloudCompare (Free, Recommended)

#### Installation
- Download from: cloudcompare.org
- Available for Windows, Mac, Linux

#### Opening LiDAR Data

1. File → Open
2. Select LAS/LAZ file
3. Configure import:
   - **Coordinate shift:** Apply if coordinates are large (recommended)
   - **Load color:** Yes if RGB available
   - **Load scalar fields:** Yes for classification, intensity

#### Basic Navigation

| Action | Control |
|:-------|:--------|
| Rotate | Left-click + drag |
| Pan | Right-click + drag OR Shift + left-click |
| Zoom | Scroll wheel |
| Reset view | Press "1" key |
| Top-down view | Press "8" key |

#### Display Settings

1. **Color by Classification:**
   - Select point cloud in DB Tree
   - Properties → Colors → Scalar Field
   - Choose "Classification"
   - Apply color ramp

2. **Color by Elevation:**
   - Edit → Colors → Height Ramp
   - Select colorscale
   - Set range

3. **Color by Intensity:**
   - Properties → Scalar Field
   - Select "Intensity"

4. **Point Size:**
   - Properties → Point size
   - Adjust for visibility

#### Measurement Tools

| Tool | How to Use |
|:-----|:-----------|
| Point picking | Select points, view coordinates |
| Distance | Tools → Distances → Point-to-point |
| Cross-section | Tools → Segmentation → Cross Section |
| Volume | Tools → Volume → 2.5D Volume |

#### Quality Check Workflow

1. **Check Coverage:**
   - View from top
   - Look for gaps

2. **Check Ground Classification:**
   - Color by classification
   - Look for misclassified points

3. **Check Noise:**
   - View from side
   - Look for floating/buried points

4. **Check Density:**
   - Tools → Statistics → Compute statistical parameters
   - Note point density per m²

### 18.3 QGIS with LAStools / PDAL

#### Setup

1. Install QGIS (qgis.org)
2. Install Point Cloud plugins:
   - Plugins → Manage Plugins
   - Search "Point Cloud"
   - Install relevant plugins

#### Native Point Cloud Support (QGIS 3.18+)

1. Layer → Add Layer → Add Point Cloud Layer
2. Select LAS/LAZ file
3. Configure styling in Layer Properties

#### Viewing DEMs in QGIS

1. Layer → Add Layer → Add Raster Layer
2. Select GeoTIFF DEM
3. Style with:
   - Singleband pseudocolor (elevation)
   - Hillshade
   - Combination

### 18.4 Global Mapper

#### Opening Data

1. File → Open Data File(s)
2. Select LAS/LAZ
3. Configure import options

#### Point Cloud Display

1. **Analysis → LiDAR Module**
2. Display modes:
   - Elevation
   - Classification
   - Intensity
   - RGB

#### Quick Tools

| Tool | Purpose |
|:-----|:--------|
| Path Profile | Cross-section analysis |
| Volume | Stockpile calculation |
| View Shed | Visibility analysis |
| 3D View | Perspective viewing |

### 18.5 Potree (Web-Based Viewing)

#### When to Use
- Client viewing without software
- Web publishing
- Large dataset streaming

#### Creating Potree Output

1. **Using PotreeConverter:**
   ```
   PotreeConverter.exe input.las -o output_folder
   ```

2. **Host on Web Server:**
   - Upload output folder
   - Access via web browser
   - No plugins required

### 18.6 Quick Visualization Checklist

| Check | Tool | What to Look For |
|:------|:-----|:-----------------|
| Coverage complete | CloudCompare (top view) | No gaps in area of interest |
| Point density adequate | CloudCompare stats | Meets spec (e.g., 100 pts/m²) |
| Ground classification correct | CloudCompare (by class) | Vegetation removed from ground |
| No excessive noise | CloudCompare (side view) | Clean ground surface |
| RGB alignment | CloudCompare (RGB color) | Colors match features |
| DEM reasonable | QGIS hillshade | No artifacts, smooth terrain |
| Contours smooth | QGIS/CAD | No jagged lines |

### 18.7 Common Visualization Issues

| Issue | Cause | Solution |
|:------|:------|:---------|
| All points one color | No scalar field loaded | Load classification/intensity |
| Points too small | Default point size | Increase in display settings |
| Slow performance | Too many points visible | Subsample or limit display |
| Coordinates look wrong | Different CRS | Check/transform coordinate system |
| Holes in data | RTK dropout or obstruction | Review flight log, re-fly if needed |
| Striping patterns | Boresight error | Recalibrate or adjust in processing |

---

## 19. Quality Control Procedures

### 19.1 QC Checklist

#### Point Cloud QC

| Check | Method | Acceptable |
|:------|:-------|:-----------|
| Point density | CloudCompare statistics | ≥ spec requirement |
| Noise level | Visual side-view inspection | Minimal outliers |
| Coverage | Top-down view | 100% of AOI covered |
| Classification | Color by class, visual check | Ground accurate |
| RTK status | Review flight logs | FIX maintained |

#### Accuracy QC

| Check | Method | Acceptable |
|:------|:-------|:-----------|
| GCP residuals (H) | Terra report | < 5 cm |
| GCP residuals (V) | Terra report | < 10 cm |
| Check point test | Compare to withheld GCPs | Within spec |
| Relative accuracy | Overlap comparison | < 5 cm difference |

#### Deliverable QC

| Check | Method | Acceptable |
|:------|:-------|:-----------|
| File opens | Test in target software | Opens without error |
| CRS correct | Check properties | Matches spec |
| Classification present | Check LAS header | Required classes present |
| DEM reasonable | Hillshade visualization | No artifacts |

### 19.2 QC Report Template

```
PROJECT QC REPORT

Project: [Name]
Date Collected: [Date]
Date Processed: [Date]
Operator: [Name]

FLIGHT STATISTICS
- Total flights: X
- Total flight time: XX minutes
- RTK status: FIX maintained / Issues noted

POINT CLOUD STATISTICS
- Total points: X,XXX,XXX
- Point density: XXX pts/m²
- Area covered: XX hectares

ACCURACY ASSESSMENT
GCP Residuals:
| GCP | Easting (m) | Northing (m) | Elevation (m) |
|-----|-------------|--------------|---------------|
| CP01 | 0.02 | 0.01 | 0.03 |
| ... | ... | ... | ... |

RMSE: H = 0.XX m, V = 0.XX m

DELIVERABLES
☐ Point cloud (LAS/LAZ)
☐ Ground-classified points
☐ DEM
☐ Contours
☐ Orthomosaic
☐ Flight report

NOTES:
[Any issues or observations]

QC By: _________________ Date: _________
```

---

## 20. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| FHA-015 | LiDAR Operations Formal Hazard Assessment |
| OPS-006 | Payload Management Policy |
| OPS-010-PR | Payload Operations Procedure |
| FRM-PREFLIGHT | Pre-Flight Checklist |
| QRC-BATTERY | Battery Safety Quick Reference |
| GUIDE-Survey | Survey & Mapping Operations Guide |

---

## 21. Revision History

| Version | Date | Description | Author |
|:--------|:-----|:------------|:-------|
| v5.0 | March 11, 2026 | Initial release | Aeria Solutions |

---

**Document Control:** GUIDE-LiDAR v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
