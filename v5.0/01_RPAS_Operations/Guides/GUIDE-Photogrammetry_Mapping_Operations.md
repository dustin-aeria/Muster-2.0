# AERIA SOLUTIONS LTD

# PHOTOGRAMMETRY MAPPING OPERATIONS GUIDE

## DJI Matrice 350 RTK with Zenmuse P1

---

| Field | Value |
|:------|:------|
| **Document Number** | GUIDE-Photogrammetry |
| **Version** | v5.0 |
| **Effective Date** | March 11, 2026 |
| **Aircraft** | DJI Matrice 350 RTK |
| **Payload** | Zenmuse P1 / P3 |
| **Approved By** | Dustin Wales, Accountable Executive |

---

## 1. System Overview

### 1.1 Zenmuse P1 Specifications

| Parameter | Specification |
|:----------|:--------------|
| Sensor | Full-frame (35.9 × 24 mm) |
| Resolution | 45 MP (8192 × 5460) |
| Pixel Size | 4.4 μm |
| Lens Options | 24mm / 35mm / 50mm |
| Shutter | Mechanical (global) |
| Min Shutter Speed | 1/2000 s |
| ISO Range | 100-25600 |
| Supported Formats | JPEG / DNG (RAW) |
| Storage | 512 GB internal + SD card |
| Smart Oblique | 3 orientations (nadir + 2 oblique) |
| Weight | 800 g (with 35mm lens) |

### 1.2 Zenmuse P3 Specifications (Alternative)

| Parameter | Specification |
|:----------|:--------------|
| Sensor | 4/3 CMOS |
| Resolution | 48 MP |
| Lens | 24mm equivalent |
| Shutter | Mechanical |
| Weight | 350 g |
| Best For | Lighter payload, general mapping |

### 1.3 M350 RTK Specifications (Photogrammetry Config)

| Parameter | P1 Config | P3 Config |
|:----------|:----------|:----------|
| Max Flight Time | ~45 min | ~50 min |
| Max Wind Resistance | 12 m/s | 12 m/s |
| Operating Temp | -20°C to +50°C | -20°C to +50°C |
| RTK Positioning | Centimeter-level | Centimeter-level |

### 1.4 RTK Options

| Option | Equipment | Best For |
|:-------|:----------|:---------|
| **DJI D-RTK 2** | D-RTK 2 Mobile Station | Simple setup, DJI ecosystem |
| **Emlid RS2** | RS2/RS2+ Base + Rover | Flexibility, NTRIP, existing survey gear |
| **NTRIP** | Network subscription | Urban areas with cell coverage |
| **PPK** | Post-processed | Remote areas, highest accuracy |

### 1.5 GSD Calculator

| Flight Height (AGL) | GSD (35mm lens) | GSD (24mm lens) | GSD (50mm lens) |
|:--------------------|:----------------|:----------------|:----------------|
| 60 m | 0.73 cm/px | 1.07 cm/px | 0.51 cm/px |
| 80 m | 0.97 cm/px | 1.43 cm/px | 0.68 cm/px |
| 100 m | 1.22 cm/px | 1.78 cm/px | 0.85 cm/px |
| 120 m | 1.46 cm/px | 2.14 cm/px | 1.02 cm/px |
| 150 m | 1.83 cm/px | 2.67 cm/px | 1.28 cm/px |

**Formula:** GSD (cm/px) = (Flight Height × Pixel Size) / Focal Length

---

## 2. Equipment Checklist

### 2.1 Aircraft & Payload

| Item | Quantity | Check |
|:-----|:---------|:------|
| DJI M350 RTK | 1 | ☐ |
| TB65 Batteries (charged) | 3+ sets | ☐ |
| Zenmuse P1 | 1 | ☐ |
| P1 Lens (24mm / 35mm / 50mm) | As needed | ☐ |
| DJI RC Plus Controller | 1 | ☐ |
| Controller batteries (charged) | 2 | ☐ |
| MicroSD cards (128GB+) | 2 | ☐ |
| Lens cleaning kit | 1 | ☐ |
| Lens cloth / blower | 1 | ☐ |
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
| Emlid Reach RS2/RS2+ (Rover) | 1 | ☐ |
| RS2 Batteries or power source | Sufficient | ☐ |
| Survey tripod | 1 | ☐ |
| Tribrach | 1 | ☐ |
| 2m survey pole | 1 | ☐ |
| Bipod for pole | 1 | ☐ |
| LoRa antenna | 1 | ☐ |
| Mobile device with Emlid Flow | 1 | ☐ |
| Mobile hotspot (for NTRIP) | 1 | ☐ |

### 2.4 Ground Control Points

| Item | Quantity | Check |
|:-----|:---------|:------|
| GCP targets (60×60 cm min) | 10+ | ☐ |
| Target stakes/weights | As needed | ☐ |
| Spray paint (for natural targets) | 1 can | ☐ |
| GCP log sheet | 1 | ☐ |

### 2.5 Support Equipment

| Item | Quantity | Check |
|:-----|:---------|:------|
| Landing pad | 1 | ☐ |
| Laptop with processing software | 1 | ☐ |
| External SSD (1TB+) | 1 | ☐ |
| Field notebook | 1 | ☐ |
| Sunscreen / bug spray | As needed | ☐ |

---

## 3. Project Planning Workflow

### 3.1 Client Requirements Checklist

| Requirement | Details to Confirm |
|:------------|:-------------------|
| Project area | Boundary coordinates or KML/SHP file |
| Deliverables | Orthomosaic, DSM, DTM, 3D model, contours |
| GSD requirement | Typically 1-3 cm for survey grade |
| Accuracy | Horizontal and vertical requirements |
| Coordinate system | Projection, datum, vertical datum |
| Timeline | Delivery deadline |
| Access | Site access permissions, contacts |
| Imagery type | Nadir only, oblique, or both |

### 3.2 GSD and Altitude Planning

#### Selecting Appropriate GSD

| Application | Typical GSD | Flight Height (35mm) |
|:------------|:------------|:---------------------|
| High-accuracy survey | 1.0-1.5 cm | 80-120 m |
| General mapping | 1.5-2.5 cm | 120-200 m |
| Large area reconnaissance | 2.5-5.0 cm | 200-400 m |
| Stockpile / volume | 1.0-2.0 cm | 80-160 m |
| Construction monitoring | 1.5-2.5 cm | 120-200 m |
| Agriculture | 2.0-4.0 cm | 160-320 m |

#### Lens Selection Guide

| Lens | Best For | Notes |
|:-----|:---------|:------|
| 24mm | Large areas, wide coverage | More images per area |
| 35mm | General purpose, balanced | Most versatile |
| 50mm | Detail, higher GSD at altitude | Fewer images, narrower swath |

### 3.3 Coverage and Overlap Planning

#### Standard Overlap Settings

| Mission Type | Front Overlap | Side Overlap | Notes |
|:-------------|:--------------|:-------------|:------|
| Standard mapping | 75% | 65% | General purpose |
| Complex terrain | 80% | 70% | Hills, vegetation |
| 3D modeling | 80% | 75% | Vertical surfaces |
| Corridor mapping | 80% | 60% | Roads, pipelines |
| Stockpile | 80% | 75% | Volume accuracy |
| Flat terrain | 70% | 60% | Optimal efficiency |

### 3.4 Flight Time Estimation

| Factor | Impact |
|:-------|:-------|
| Area size | Primary factor |
| Overlap settings | Higher overlap = more images = more time |
| Flight altitude | Higher = wider swath = less time |
| Wind conditions | Reduce speed = more time |
| Lens choice | Wider lens = fewer flight lines |

**Rule of thumb:** ~30-50 hectares per battery at 100m AGL with standard overlap

### 3.5 Desktop Site Analysis

1. **Review Satellite Imagery**
   - Google Earth / Google Maps
   - Identify obstacles, vegetation, structures
   - Note elevation changes

2. **Check Airspace**
   - NAV CANADA airspace map
   - Identify controlled airspace
   - Check for NOTAMs
   - Determine authorization requirements

3. **Plan GCP Distribution**
   - Minimum 5 GCPs for small sites
   - Perimeter + interior distribution
   - Accessible locations
   - Maximum 300m spacing

4. **Sun Position Planning**
   - Avoid harsh shadows (midday ideal)
   - Consistent lighting across area
   - Plan flight time accordingly

---

## 4. Pre-Field Site Assessment

### 4.1 Site Reconnaissance

| Factor | Consideration |
|:-------|:--------------|
| Terrain | Slope, elevation changes, obstructions |
| Vegetation | Canopy, seasonal changes, shadows |
| Structures | Height, reflective surfaces, power lines |
| Access | GCP placement accessibility |
| Lighting | Sun angle, shadow patterns |

### 4.2 Weather Requirements

| Condition | Requirement | Impact |
|:----------|:------------|:-------|
| Wind | <10 m/s (ideal <6 m/s) | Image sharpness |
| Cloud | Overcast preferred OR clear | Even lighting |
| Precipitation | None | Lens/sensor protection |
| Visibility | >5 km | Image quality |
| Sun angle | 30-60° elevation | Shadow management |

### 4.3 Optimal Flight Windows

| Season | Best Time | Avoid |
|:-------|:----------|:------|
| Summer | 9-11 AM, 3-5 PM | Midday harsh shadows |
| Winter | 10 AM - 2 PM | Low sun angle |
| Spring/Fall | 10 AM - 3 PM | Rapidly changing conditions |

**For consistent results:** Overcast days provide even, shadow-free lighting

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
   | **Current Position** | Unknown point | Let D-RTK 2 average position (5+ min) |
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
| **PPK** | RS2 logging + base data | Remote areas, highest accuracy |

### 6.2 Emlid Flow App Setup

#### Initial Configuration

1. **Download Emlid Flow** (iOS/Android)

2. **Connect to RS2**
   - Power ON RS2
   - Connect phone to RS2 WiFi hotspot
   - Default: `reach:xx:xx` / Password: `emlidreach`

3. **Update Firmware** (if needed)

### 6.3 NTRIP Configuration

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

### 6.4 Emlid RS2 as Base Station (for GCP Collection)

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

3. **LoRa Settings:**

   | Setting | Recommended |
   |:--------|:------------|
   | Frequency | 915 MHz (North America ISM) |
   | Air Data Rate | 9.11 kb/s |
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

### 6.5 PPK Workflow (Post-Processed Kinematic)

For highest accuracy in remote areas:

1. **Setup RS2 Base**
   - Configure to log raw GNSS data
   - Log throughout entire flight
   - Record accurate base position

2. **M350 Flight**
   - Fly mission as normal
   - RTK not required during flight

3. **Post-Processing**
   - Download RS2 base log
   - Download M350 flight log
   - Process in Emlid Studio or compatible software
   - Apply corrections to image positions

---

## 7. DJI Pilot 2 - Mission Planning

### 7.1 Creating a Photogrammetry Mission

1. **Open DJI Pilot 2**

2. **Select Flight → Mapping**

3. **Choose Mission Type:**

   | Type | Use Case |
   |:-----|:---------|
   | 2D Photogrammetry | Standard orthomosaic mapping |
   | 3D Oblique | 3D models, building facades |
   | Linear | Corridors, roads, pipelines |
   | Waypoint | Custom flight paths |

4. **Draw Area**
   - Tap corners on map
   - Adjust boundary precisely
   - Add margin for edge coverage

### 7.2 Camera Settings

#### Zenmuse P1 Settings

| Setting | Recommended | Notes |
|:--------|:------------|:------|
| Image Format | JPEG + DNG | DNG for post-processing flexibility |
| White Balance | Auto or Cloudy | Consistent across mission |
| ISO | Auto (100-400) | Keep low for quality |
| Shutter | Auto (1/1000+) | Prevent motion blur |
| Aperture | f/4 - f/5.6 | Sharpest range |
| Focus | Infinity (∞) | Set before flight |
| Mechanical Shutter | ON | Essential for mapping |

#### Focus Procedure

1. Before flight, point camera at distant object
2. Set focus to manual
3. Focus on infinity
4. Lock focus setting
5. Verify in test image

### 7.3 Mission Parameters

#### Flight Settings

| Setting | Description | Typical Value |
|:--------|:------------|:--------------|
| Flight Altitude | AGL height | Based on GSD calc |
| Speed | Ground speed | 8-15 m/s |
| Front Overlap | Image overlap in flight direction | 75-80% |
| Side Overlap | Overlap between flight lines | 65-75% |
| Course Angle | Flight line direction | Perpendicular to slope |
| Margin | Extended coverage | 20-30m |

#### Terrain Follow Settings

| Setting | When to Use |
|:--------|:------------|
| Terrain Follow OFF | Flat terrain (<5% slope) |
| Terrain Follow ON | Hilly/sloped terrain |
| DEM Source | DJI map / Import custom |
| Safety Height | Add 20-30m buffer |

### 7.4 Smart Oblique Mode (3D Mapping)

For 3D model generation:

1. **Enable Smart Oblique**
   - Captures nadir + 2 oblique angles
   - Approximately 3x more images

2. **Settings:**

   | Setting | Value |
   |:--------|:------|
   | Gimbal Pitch Angle | Auto (oblique) |
   | Front Overlap | 80% |
   | Side Overlap | 75% |

3. **Best For:**
   - Building modeling
   - Vertical surface capture
   - Complete 3D reconstruction

### 7.5 Corridor Mapping

For linear features:

1. **Select Linear Mission**

2. **Draw Corridor**
   - Place waypoints along route
   - Set corridor width

3. **Settings:**

   | Setting | Value |
   |:--------|:------|
   | Corridor Width | Feature width + 30m each side |
   | Overlap | 80% front, 60% side |
   | Flight Pattern | Follow terrain |

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

#### P1 Camera Checks

| Item | Check |
|:-----|:------|
| Lens clean (no debris/moisture/fingerprints) | ☐ |
| Lens cap removed | ☐ |
| Focus set to infinity | ☐ |
| Storage space adequate | ☐ |
| Test image captured and reviewed | ☐ |
| Gimbal moves freely | ☐ |
| Mechanical shutter enabled | ☐ |

#### Aircraft Checks

| Item | Check |
|:-----|:------|
| Batteries charged (>95%) | ☐ |
| Props secure and undamaged | ☐ |
| Arms locked | ☐ |
| Firmware current | ☐ |
| Compass calibrated (if prompted) | ☐ |

### 8.2 Image Quality Verification

Before full mission:

1. **Capture Test Images**
   - Fly short test pattern
   - Review images on controller

2. **Check For:**
   - Sharpness (no motion blur)
   - Exposure (histogram centered)
   - Focus (details crisp)
   - No lens flare or artifacts

3. **Adjust if Needed:**
   - Increase shutter speed for blur
   - Adjust exposure compensation
   - Verify focus at infinity

### 8.3 Mission Execution

#### Startup Sequence

1. **Power ON Base Station First**
   - Wait for RTK ready status

2. **Power ON Aircraft**
   - Allow warmup (2-3 min)
   - Verify RTK FIX

3. **Verify in DJI Pilot 2:**
   - RTK status: FIX
   - Satellites: 20+
   - Accuracy: <2cm horizontal

4. **Camera Setup**
   - Verify settings
   - Check storage
   - Take test shot

5. **Upload Mission**
   - Review parameters
   - Check altitude clearances
   - Verify coverage area

6. **Execute Mission**
   - Slide to start
   - Monitor throughout
   - Watch image capture indicator

#### During Flight Monitoring

| Parameter | Watch For |
|:----------|:----------|
| RTK Status | Should remain FIX |
| Battery Level | Plan landing at 25% |
| Image Counter | Images capturing |
| Storage | Adequate remaining |
| GPS Count | Should not drop |
| Camera Status | No errors |

### 8.4 Multi-Battery Operations

For large sites:

1. **Plan Missions with Overlap**
   - 10-15% overlap between missions
   - Consistent settings across flights

2. **Between Flights:**
   - Land at 25% battery
   - Swap batteries quickly
   - Verify camera settings unchanged
   - Check storage space

3. **Image Numbering:**
   - Continuous numbering preferred
   - Note first/last image per flight

4. **Base Station:**
   - Keep running continuously
   - Do not move between flights

### 8.5 Lighting Considerations

| Condition | Action |
|:----------|:-------|
| Direct sun appearing | Monitor for shadows |
| Cloud passing | Wait for consistent conditions |
| Sun angle changing | Complete area before change |
| Glare/reflections | Adjust flight direction |

---

## 9. Ground Control Points (GCPs)

### 9.1 GCP Requirements

| Site Size | Minimum GCPs | Distribution |
|:----------|:-------------|:-------------|
| Small (<5 ha) | 5 | 4 corners + 1 center |
| Medium (5-25 ha) | 7-9 | Perimeter + interior |
| Large (25-100 ha) | 10-15 | Grid, max 200m spacing |
| Very Large (>100 ha) | 15+ | Grid, max 300m spacing |

### 9.2 GCP Target Specifications

| Specification | Requirement |
|:--------------|:------------|
| Size | 60×60 cm minimum (8+ pixels at GSD) |
| Pattern | High contrast checkerboard or cross |
| Color | Black/white or bright colors |
| Material | Durable, non-reflective |
| Visibility | Clear from flight altitude |

#### Target Size by GSD

| GSD | Minimum Target Size |
|:----|:--------------------|
| 1 cm | 40 cm |
| 2 cm | 50 cm |
| 3 cm | 60 cm |
| 5 cm | 80 cm |

### 9.3 GCP Placement Rules

1. **Distribution:**
   - Around perimeter of site
   - Interior points for large areas
   - Avoid clustering

2. **Location:**
   - Flat, stable surfaces
   - Clear visibility from above
   - Accessible for survey
   - Away from shadows/overhangs

3. **Avoid:**
   - Moving surfaces (vehicles, water)
   - Heavy vegetation
   - Reflective surfaces
   - Areas with elevation ambiguity

### 9.4 Surveying GCPs with Emlid RS2

#### Collection Procedure

1. **Setup Base Station** (per Section 6.4)

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
   - Average for 30+ seconds
   - Confirm FIX maintained
   - Save point

5. **Document:**
   - Photo of GCP with surroundings
   - Notes on any issues
   - Verify in point list

### 9.5 Check Points

Reserve 20% of GCPs as independent check points:
- Do not use in processing adjustment
- Use to verify final accuracy
- Minimum 2 check points per project

### 9.6 GCP Data Export

From Emlid Flow:

1. **Projects → Select Project**
2. **Export**
3. **Select Format:**
   - CSV (most compatible)
   - GeoJSON
   - Shapefile

4. **Coordinate Settings:**
   - Match project datum
   - Include ellipsoidal heights

---

## 10. Data Management

### 10.1 Data Storage Requirements

| Data Type | Typical Size | Storage Recommendation |
|:----------|:-------------|:-----------------------|
| P1 JPEG per image | 15-20 MB | 128GB+ card |
| P1 DNG per image | 90-100 MB | 512GB+ card |
| Mission (1000 images JPEG) | 15-20 GB | External SSD |
| Mission (1000 images DNG) | 90-100 GB | External SSD |
| Processed project | 50-200 GB | High-speed SSD |

### 10.2 File Structure

```
Project_Name/
├── 01_Raw_Data/
│   ├── Flight_01/
│   │   ├── JPEG/
│   │   └── DNG/
│   ├── Flight_02/
│   └── Flight_Log/
├── 02_GCPs/
│   ├── GCP_Survey_Data.csv
│   ├── GCP_Photos/
│   └── Survey_Report/
├── 03_Processed/
│   ├── Project_Files/
│   ├── Orthomosaic/
│   ├── DSM/
│   ├── DTM/
│   └── 3D_Model/
├── 04_Deliverables/
│   ├── Final_Orthomosaic/
│   ├── Final_DSM/
│   ├── Contours/
│   └── Report/
└── 05_Documentation/
    ├── Flight_Log/
    ├── QC_Report/
    └── Metadata/
```

### 10.3 Post-Flight Data Transfer

1. **Remove Storage Media Safely**
   - Power off aircraft first
   - Use card reader

2. **Copy Data**
   - Transfer to laptop/SSD
   - Verify file count matches camera counter
   - Check for corrupt files

3. **Backup**
   - Create redundant copy immediately
   - Cloud backup if available

4. **Organize**
   - Sort by flight
   - Rename if needed
   - Document in flight log

5. **Format Card**
   - Only after verified backup
   - Format in camera (not computer)

---

## 11. DJI Terra Processing (Quick Start)

### 11.1 Create New Project

1. **Open DJI Terra**
2. **File → New**
3. **Select Project Type:**

   | Type | Output |
   |:-----|:-------|
   | 2D Map | Orthomosaic, DSM |
   | 3D Model | Textured mesh |
   | 2D + 3D | All products |

4. **Name project**
5. **Select folder location**

### 11.2 Import Images

1. **Click Import**
2. **Select image folder**
3. **Terra automatically detects:**
   - Image positions
   - Camera parameters
   - Flight metadata

4. **Review import:**
   - Verify image count
   - Check coverage on map

### 11.3 Configure Settings

#### Quality Settings

| Setting | Options | Recommendation |
|:--------|:--------|:---------------|
| Resolution | Low/Med/High/Ultra | High for survey |
| 3D Quality | Low/Med/High | High for deliverables |

#### Coordinate System

| Setting | Configuration |
|:--------|:--------------|
| Horizontal | Match client requirement |
| Vertical | Ellipsoidal or Orthometric |
| Geoid | Select if using orthometric |

### 11.4 GCP Integration

1. **Click GCP Manager**
2. **Import GCP File**
   - Select CSV or compatible format
   - Configure column mapping
   - Verify coordinate system

3. **Mark GCPs in Images:**
   - For each GCP:
     - Find in image thumbnails
     - Click target center
     - Mark in 3+ images (5+ preferred)

4. **Optimize:**
   - Run GCP optimization
   - Review residuals

### 11.5 Process

1. **Click Reconstruct**
2. **Monitor Progress:**
   - Image alignment
   - Dense point cloud
   - Mesh generation
   - Texture mapping
   - Orthomosaic generation

3. **Processing Time:**
   - Depends on image count and quality settings
   - Typical: 2-8 hours for large projects

### 11.6 Review Results

1. **Quality Report:**
   - GCP residuals
   - Image alignment statistics
   - Coverage verification

2. **Visual Check:**
   - Orthomosaic completeness
   - DSM quality
   - 3D model accuracy

---

## 12. Complete Processing Workflow

### 12.1 Processing Software Options

| Software | Strengths | Best For |
|:---------|:----------|:---------|
| **DJI Terra** | Native DJI support, integrated | Quick processing, standard delivery |
| **Pix4Dmapper** | Industry standard, reliable | Professional survey, reporting |
| **Agisoft Metashape** | Flexible, powerful | Research, complex projects |
| **WebODM** | Free, open source | Budget projects, learning |
| **Bentley ContextCapture** | Enterprise, BIM integration | Large infrastructure |
| **RealityCapture** | Fast, high quality 3D | 3D modeling focus |

### 12.2 Pix4Dmapper Workflow

#### Step 1: Create New Project

1. Open Pix4Dmapper
2. Project → New Project
3. Name and set location
4. Add images (drag/drop or browse)

#### Step 2: Image Properties

1. **Select Coordinate System:**
   - For RTK: Use embedded coordinates
   - Set output coordinate system

2. **Camera Model:**
   - Usually auto-detected
   - Verify for P1: Full-frame 45MP

#### Step 3: Processing Options

**Initial Processing:**

| Setting | Recommended |
|:--------|:------------|
| Keypoint Image Scale | Full (for accuracy) |
| Matching Image Pairs | Aerial Grid or Corridor |
| Calibration | Standard |

**Point Cloud and Mesh:**

| Setting | Recommended |
|:--------|:------------|
| Point Density | Optimal |
| Minimum Matches | 3 |
| Point Cloud Filters | Enabled |

**DSM, Orthomosaic:**

| Setting | Recommended |
|:--------|:------------|
| GSD | Auto (or specify) |
| DSM Method | Inverse Distance Weighting |
| Merge Tiles | Enabled |

#### Step 4: GCP Integration

1. **GCP/MTP Manager**
2. **Import GCPs:**
   - File → Import → Select CSV
   - Configure format
   - Set coordinate system

3. **Mark in Images:**
   - Click each GCP
   - Mark in images (5+ per GCP)
   - Use reproject to assist

4. **Reoptimize:**
   - Process → Reoptimize
   - Review residuals

#### Step 5: Generate Outputs

1. **Point Cloud:**
   - LAZ/LAS format
   - Include classification if needed

2. **DSM/DTM:**
   - GeoTIFF format
   - Select resolution

3. **Orthomosaic:**
   - GeoTIFF format
   - Set compression
   - Generate tiles if large

4. **Quality Report:**
   - PDF format
   - Include for deliverables

### 12.3 Agisoft Metashape Workflow

#### Step 1: Add Photos

1. Workflow → Add Photos
2. Select all images
3. Photos appear in workspace

#### Step 2: Align Photos

1. **Workflow → Align Photos**
2. **Settings:**

   | Setting | Value |
   |:--------|:------|
   | Accuracy | High or Highest |
   | Generic Preselection | Yes |
   | Reference Preselection | Source |
   | Key Point Limit | 60,000 |
   | Tie Point Limit | 10,000 |

#### Step 3: Import GCPs

1. **Reference Panel → Import**
2. Select GCP file
3. Configure delimiter and columns
4. Set coordinate system

#### Step 4: Mark GCPs

1. For each GCP in Reference panel:
   - Right-click → Filter Photos by Marker
   - Find GCP in each photo
   - Place marker precisely

2. **Optimize Cameras:**
   - Tools → Optimize Cameras
   - Select all parameters

3. **Review Errors:**
   - Check GCP error values
   - Re-mark if >2× GSD

#### Step 5: Build Products

**Dense Cloud:**

| Setting | Value |
|:--------|:------|
| Quality | High or Ultra High |
| Depth Filtering | Moderate |

**DEM:**

| Setting | Value |
|:--------|:------|
| Source Data | Dense Cloud |
| Interpolation | Enabled |

**Orthomosaic:**

| Setting | Value |
|:--------|:------|
| Surface | DEM |
| Blending | Mosaic |
| Enable Color Correction | Yes |

#### Step 6: Export

1. **File → Export:**
   - Orthomosaic → GeoTIFF
   - DEM → GeoTIFF
   - Point Cloud → LAS

2. **Set Coordinate System** for each export

### 12.4 Quality Metrics

#### Acceptable Values

| Metric | Target | Maximum |
|:-------|:-------|:--------|
| GCP RMSE (H) | <1× GSD | 2× GSD |
| GCP RMSE (V) | <1.5× GSD | 3× GSD |
| Image Alignment | >95% | >90% |
| Reprojection Error | <0.5 px | 1.0 px |

#### If Metrics Exceed Limits:

1. Check GCP marking accuracy
2. Verify GCP survey quality
3. Review image quality for blur
4. Check for poor overlap areas
5. Consider additional images

---

## 13. Viewing and Visualization

### 13.1 Quick Viewing Options

#### DJI Terra Viewer (Built-in)
- Basic viewing and measurement
- Good for initial QC

#### Windows Photo Viewer
- Quick image review
- Check for blur, exposure

### 13.2 QGIS (Free GIS Software)

#### Opening Orthomosaic

1. Layer → Add Raster Layer
2. Select GeoTIFF file
3. Automatically georeferenced

#### Viewing DSM

1. Add as raster layer
2. Style options:
   - Singleband pseudocolor (elevation)
   - Hillshade effect
   - Transparency overlay

#### Tools

| Tool | Purpose |
|:-----|:--------|
| Measure | Distance, area |
| Value Tool | Elevation at point |
| Profile Tool | Cross-section |
| Print Layout | Map export |

### 13.3 Global Mapper

#### Loading Data

1. File → Open Data File(s)
2. Select orthomosaic/DSM

#### Useful Features

| Feature | Use |
|:--------|:----|
| 3D View | Perspective visualization |
| Path Profile | Elevation profiles |
| Contour Generation | Create contours from DSM |
| Volume Calculation | Stockpile volumes |
| Coordinate Converter | Datum transformations |

### 13.4 CloudCompare (3D Point Clouds)

#### Opening Data

1. File → Open
2. Select LAS/LAZ file

#### Visualization

| Display | Setting |
|:--------|:--------|
| Color by Height | Edit → Colors → Height Ramp |
| Color by RGB | Display RGB if available |
| Point Size | Properties → Point Size |

### 13.5 Web Visualization Options

#### Potree (Web Point Clouds)

1. Convert point cloud using PotreeConverter
2. Host on web server
3. View in browser

#### Cesium Ion

1. Upload orthomosaic or 3D tiles
2. Embed in web applications
3. Good for client sharing

#### DroneDeploy / Propeller

- Cloud processing and viewing
- Collaboration features
- No software required for clients

### 13.6 Visualization Quality Check

| Check | What to Look For |
|:------|:-----------------|
| Coverage | Complete, no gaps |
| Alignment | No "ghosting" or double images |
| Color balance | Consistent across area |
| Resolution | Details visible at expected scale |
| Georeferencing | Matches known features |

---

## 14. Quality Control Procedures

### 14.1 Field QC

#### Pre-Flight

| Check | Criteria |
|:------|:---------|
| Weather | Within limits |
| RTK status | FIX |
| Camera settings | Verified |
| Test images | Sharp, well-exposed |
| GCPs | Placed, surveyed |

#### Post-Flight

| Check | Criteria |
|:------|:---------|
| Image count | Matches plan |
| Coverage | Complete |
| Image quality | Spot-check for blur |
| RTK log | FIX maintained |
| Data backed up | Verified |

### 14.2 Processing QC

#### Alignment QC

| Metric | Acceptable |
|:-------|:-----------|
| Images aligned | >95% |
| Reprojection error | <1.0 pixel |
| Camera calibration | Converged |

#### GCP QC

| Metric | Acceptable |
|:-------|:-----------|
| GCP RMSE X | <2× GSD |
| GCP RMSE Y | <2× GSD |
| GCP RMSE Z | <3× GSD |
| Check point error | <3× GSD |

#### Product QC

| Check | Criteria |
|:------|:---------|
| Orthomosaic gaps | None |
| DSM artifacts | Minimal |
| Edge quality | Clean boundaries |
| Projection | Matches specification |

### 14.3 QC Report Template

```
PROJECT QC REPORT

Project: [Name]
Date Collected: [Date]
Date Processed: [Date]
Operator: [Name]

FLIGHT STATISTICS
- Total flights: X
- Total images: X,XXX
- Coverage area: XX hectares
- GSD achieved: X.X cm

IMAGE QUALITY
- Images used: X,XXX (XX%)
- Average reprojection error: X.XX pixels

ACCURACY ASSESSMENT

Ground Control Points:
| GCP ID | Error X (m) | Error Y (m) | Error Z (m) |
|--------|-------------|-------------|-------------|
| GCP01  | 0.XXX       | 0.XXX       | 0.XXX       |
| ...    | ...         | ...         | ...         |

RMSE: X = 0.XXX m, Y = 0.XXX m, Z = 0.XXX m

Check Points:
| CP ID  | Error X (m) | Error Y (m) | Error Z (m) |
|--------|-------------|-------------|-------------|
| CP01   | 0.XXX       | 0.XXX       | 0.XXX       |
| ...    | ...         | ...         | ...         |

Check Point RMSE: X = 0.XXX m, Y = 0.XXX m, Z = 0.XXX m

DELIVERABLES
☐ Orthomosaic (GeoTIFF)
☐ DSM (GeoTIFF)
☐ DTM (GeoTIFF)
☐ Contours (DXF/SHP)
☐ Point Cloud (LAS)
☐ 3D Model (OBJ)
☐ Quality Report (PDF)

NOTES:
[Any issues or observations]

QC By: _________________ Date: _________
```

---

## 15. Troubleshooting

### 15.1 Image Quality Issues

| Problem | Cause | Solution |
|:--------|:------|:---------|
| Motion blur | Slow shutter | Increase shutter speed |
| Overexposure | Too bright | Reduce exposure compensation |
| Underexposure | Too dark | Increase exposure compensation |
| Soft focus | Wrong focus | Reset focus to infinity |
| Lens flare | Sun in frame | Change flight direction |
| Vignetting | Lens issue | Check lens mounting |

### 15.2 RTK Issues

| Problem | Cause | Solution |
|:--------|:------|:---------|
| No FIX | Poor sky view | Relocate base station |
| FLOAT only | Weak signal | Wait, check obstructions |
| RTK drops | Range exceeded | Move base closer |
| Position jumps | Multipath | Avoid reflective surfaces |

### 15.3 Processing Issues

| Problem | Cause | Solution |
|:--------|:------|:---------|
| Images won't align | Poor overlap | Reflfly with more overlap |
| Low accuracy | Poor GCPs | Resurvey GCPs |
| Artifacts in ortho | Moving objects | Mask in processing |
| DSM holes | No data | Increase overlap |
| Color variation | Lighting change | Color correction |
| Wavy DSM | Rolling shutter | Use mechanical shutter |

### 15.4 GCP Issues

| Problem | Cause | Solution |
|:--------|:------|:---------|
| High residuals | Wrong marking | Re-mark carefully |
| Systematic error | Datum mismatch | Check coordinate systems |
| One GCP very high error | Survey error | Resurvey that GCP |
| All Z errors high | Ellipsoid/geoid | Verify height system |

---

## 16. Quick Reference Settings

### 16.1 Standard Mapping

| Parameter | Setting |
|:----------|:--------|
| Altitude | 100m AGL |
| Speed | 10-12 m/s |
| Front Overlap | 75% |
| Side Overlap | 65% |
| Lens | 35mm |
| GSD | ~1.2 cm |
| Shutter | Auto (1/1000+) |
| ISO | Auto (100-400) |

### 16.2 High-Accuracy Survey

| Parameter | Setting |
|:----------|:--------|
| Altitude | 80m AGL |
| Speed | 8-10 m/s |
| Front Overlap | 80% |
| Side Overlap | 70% |
| Lens | 35mm |
| GSD | ~1.0 cm |
| GCPs | 10+ per 25 ha |

### 16.3 3D Modeling (Oblique)

| Parameter | Setting |
|:----------|:--------|
| Mode | Smart Oblique |
| Altitude | 80-100m AGL |
| Speed | 8 m/s |
| Front Overlap | 80% |
| Side Overlap | 75% |
| Additional | Multiple angles |

### 16.4 Corridor Mapping

| Parameter | Setting |
|:----------|:--------|
| Mode | Linear |
| Altitude | 80-100m AGL |
| Speed | 10 m/s |
| Front Overlap | 80% |
| Corridor Width | Feature + 30m |
| Cross-lines | At intervals |

### 16.5 Stockpile Volume

| Parameter | Setting |
|:----------|:--------|
| Altitude | 60-80m AGL |
| Speed | 8 m/s |
| Front Overlap | 80% |
| Side Overlap | 75% |
| GCPs | 5+ around stockpile |
| Cross-lines | Recommended |

---

## 17. Emlid Flow Quick Reference

### 17.1 Base Setup Summary

1. Power ON RS2
2. Connect phone to RS2 WiFi
3. Open Emlid Flow
4. Tap RS2 device
5. Mode → Base
6. Base coordinates → Enter or Average
7. Correction output → LoRa
8. Apply

### 17.2 Rover Setup Summary

1. Power ON RS2
2. Connect phone to RS2 WiFi
3. Mode → Rover
4. Correction input → LoRa (match base)
5. Apply
6. Wait for FIX

### 17.3 Point Collection Summary

1. Verify FIX status
2. Tap Survey
3. New Project (or select existing)
4. Navigate to GCP
5. Place pole at target center
6. Tap Collect
7. Enter point name (GCP01, etc.)
8. Wait for averaging (30+ sec)
9. Save
10. Photo of GCP

---

## 18. Deliverable Checklist

### 18.1 Standard Deliverables

| Deliverable | Format | Check |
|:------------|:-------|:------|
| Orthomosaic | GeoTIFF | ☐ |
| DSM | GeoTIFF | ☐ |
| DTM (if classified) | GeoTIFF | ☐ |
| Contours | DXF/SHP | ☐ |
| Point Cloud | LAS/LAZ | ☐ |
| 3D Model (if requested) | OBJ/FBX | ☐ |
| Quality Report | PDF | ☐ |

### 18.2 Documentation

| Document | Contents | Check |
|:---------|:---------|:------|
| Flight Log | Date, times, images, conditions | ☐ |
| GCP Survey Report | Coordinates, methods, accuracy | ☐ |
| Processing Report | Software, settings, statistics | ☐ |
| Accuracy Report | GCP/check point analysis | ☐ |
| Metadata | CRS, GSD, date, extent | ☐ |

### 18.3 Delivery Format Guidelines

| Product | Typical Format | Notes |
|:--------|:---------------|:------|
| Orthomosaic | GeoTIFF | LZW compression for file size |
| DSM/DTM | GeoTIFF 32-bit float | No compression for elevation |
| Contours | DXF (CAD) or SHP (GIS) | Specify interval |
| Point Cloud | LAZ (compressed) | Include classification |
| 3D Mesh | OBJ + texture | Large file warning |

---

## 19. Safety Considerations

### 19.1 Flight Safety

| Hazard | Control |
|:-------|:--------|
| Obstacles | Survey site, maintain altitude |
| Weather | Monitor, abort if limits exceeded |
| Loss of link | Set appropriate failsafe |
| Battery | Land at 25%, monitor voltage |
| Airspace | Obtain required authorizations |

### 19.2 Sun and Glare

| Hazard | Control |
|:-------|:--------|
| Sun in camera | Plan flight direction |
| Controller glare | Use sunshade |
| Eye strain | Wear sunglasses |

### 19.3 Site Hazards

| Hazard | Control |
|:-------|:--------|
| Uneven terrain | Watch footing |
| Traffic | Maintain awareness |
| Wildlife | Maintain distance |
| Weather exposure | Appropriate clothing |

---

## 20. Related Documents

| Doc ID | Document Title |
|:-------|:---------------|
| GUIDE-Survey | Survey & Mapping Operations Guide |
| GUIDE-LiDAR | LiDAR Mapping Operations Guide |
| FHA-009 | Survey Operations FHA |
| OPS-006 | Payload Management Policy |
| OPS-010-PR | Payload Operations Procedure |
| FRM-PREFLIGHT | Pre-Flight Checklist |
| QRC-BATTERY | Battery Safety Quick Reference |

---

## 21. Revision History

| Version | Date | Description | Author |
|:--------|:-----|:------------|:-------|
| v5.0 | March 11, 2026 | Initial release | Aeria Solutions |

---

**Document Control:** GUIDE-Photogrammetry v5.0 | Aeria Solutions Ltd | Uncontrolled when printed
