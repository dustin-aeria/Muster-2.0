// DJI Enterprise Drone Specifications Database
// Last updated: March 2026
// Source: DJI Official Specifications

export const DJI_ENTERPRISE_DRONES = [
  // ============================================
  // MATRICE SERIES
  // ============================================
  {
    id: 'matrice-350-rtk',
    name: 'Matrice 350 RTK',
    series: 'Matrice',
    category: 'Heavy Lift / Industrial',
    image: '/drones/m350-rtk.png',
    released: '2023',
    status: 'Current',

    // Weight & Dimensions
    mtow: 9200, // grams
    emptyWeight: 6470, // grams (with 2x TB65 batteries)
    maxPayload: 2730, // grams
    diagonal: 1671, // mm (props unfolded)
    foldedDimensions: '430 x 420 x 430 mm',
    unfoldedDimensions: '810 x 670 x 430 mm',

    // Flight Performance
    maxFlightTime: 55, // minutes (no payload)
    maxFlightTimeWithPayload: 41, // minutes (H20 payload)
    maxWindResistance: 15, // m/s (approx 54 km/h)
    maxSpeed: 23, // m/s
    maxAscentSpeed: 6, // m/s
    maxDescentSpeed: 5, // m/s
    maxAltitude: 7000, // meters MSL
    maxTiltAngle: 30, // degrees
    hoverAccuracyVertical: '0.1 m (RTK enabled)',
    hoverAccuracyHorizontal: '0.1 m (RTK enabled)',

    // Operating Conditions
    operatingTemp: '-20 to 50', // Celsius
    ipRating: 'IP55',

    // Transmission
    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 20, // km (FCC, unobstructed)
    videoTransmission: '1080p @ 30fps',

    // Safety Systems
    obstacleAvoidance: {
      directions: 6,
      description: 'Omnidirectional obstacle sensing',
      horizontal: 'Forward/Backward/Left/Right: 0.5-47m',
      upward: '0.2-14m',
      downward: '0.3-18m'
    },

    safetyFeatures: [
      'Redundant flight control system',
      'Dual battery system with hot-swap capability',
      'Dual RTK antennas',
      'FPV camera',
      'ADS-B receiver (built-in)',
      'Remote ID compliant',
      'Redundant IMU',
      'Redundant barometer',
      'Redundant compass',
      'Parachute ready (DJI Parachute optional)',
      'Auto Return-to-Home',
      'Low battery RTH',
      'Failsafe RTH on signal loss',
      'Geofencing',
      'Altitude limits',
      'CSM radar compatible'
    ],

    batteries: {
      type: 'TB65 Intelligent Flight Battery',
      capacity: '5880 mAh',
      voltage: '44.76V',
      chemistry: 'LiPo 12S',
      chargingTime: '35-50 min (BS65 station)'
    },

    controller: 'DJI RC Plus',

    compatiblePayloads: [
      'Zenmuse H20',
      'Zenmuse H20T',
      'Zenmuse H20N',
      'Zenmuse P1',
      'Zenmuse L1',
      'Zenmuse L2',
      'Third-party via DJI Payload SDK'
    ],

    mandatoryActions: [
      'Firmware update check before each flight day',
      'Battery health check (cycle count, voltage)',
      'Propeller inspection (damage, secure mount)',
      'RTK calibration verification',
      'Obstacle avoidance sensor cleaning',
      'Compass calibration if required',
      'IMU calibration if required',
      'Return-to-Home altitude setting',
      'Geofence/flight boundary configuration',
      'Emergency procedures briefing'
    ],

    maintenanceSchedule: {
      beforeFlight: [
        'Visual inspection of airframe',
        'Propeller condition check',
        'Battery charge level and health',
        'Sensor lens cleaning',
        'Firmware version verification'
      ],
      every50Hours: [
        'Full propeller replacement',
        'Landing gear inspection',
        'Motor inspection',
        'Gimbal calibration'
      ],
      every200Hours: [
        'Factory inspection recommended',
        'Battery replacement consideration'
      ]
    },

    certifications: [
      'FCC', 'CE', 'SRRC', 'MIC', 'KC',
      'Transport Canada compliant',
      'Remote ID compliant'
    ]
  },

  {
    id: 'matrice-300-rtk',
    name: 'Matrice 300 RTK',
    series: 'Matrice',
    category: 'Heavy Lift / Industrial',
    released: '2020',
    status: 'Legacy (supported)',

    mtow: 9000,
    emptyWeight: 6300,
    maxPayload: 2700,
    diagonal: 1668,

    maxFlightTime: 55,
    maxFlightTimeWithPayload: 45,
    maxWindResistance: 15,
    maxSpeed: 23,
    maxAscentSpeed: 6,
    maxDescentSpeed: 5,
    maxAltitude: 7000,

    operatingTemp: '-20 to 50',
    ipRating: 'IP45',

    transmissionSystem: 'OcuSync Enterprise',
    maxTransmissionRange: 15,

    obstacleAvoidance: {
      directions: 6,
      description: 'Omnidirectional sensing',
      horizontal: '0.7-40m',
      upward: '0.2-10m',
      downward: '0.3-18m'
    },

    safetyFeatures: [
      'Redundant flight control system',
      'Dual battery system',
      'ADS-B receiver (built-in)',
      'FPV camera',
      'Redundant IMU',
      'Redundant barometer',
      'Redundant compass',
      'Auto Return-to-Home',
      'Failsafe RTH',
      'Geofencing'
    ],

    batteries: {
      type: 'TB60 Intelligent Flight Battery',
      capacity: '5935 mAh',
      voltage: '52.8V'
    },

    controller: 'DJI Smart Controller Enterprise',

    compatiblePayloads: [
      'Zenmuse H20',
      'Zenmuse H20T',
      'Zenmuse H20N',
      'Zenmuse P1',
      'Zenmuse L1',
      'Zenmuse XT2',
      'Zenmuse Z30'
    ],

    mandatoryActions: [
      'Firmware update check',
      'Battery health verification',
      'Propeller inspection',
      'Compass calibration if flagged',
      'RTH altitude configuration',
      'Flight boundary setup'
    ]
  },

  {
    id: 'matrice-30',
    name: 'Matrice 30',
    series: 'Matrice',
    category: 'Compact Industrial',
    released: '2022',
    status: 'Current',

    mtow: 3998,
    emptyWeight: 3770,
    maxPayload: 228, // Integrated payload
    diagonal: 668,
    foldedDimensions: '365 x 215 x 195 mm',
    unfoldedDimensions: '470 x 585 x 215 mm',

    maxFlightTime: 41,
    maxWindResistance: 15,
    maxSpeed: 23,
    maxAscentSpeed: 6,
    maxDescentSpeed: 5,
    maxAltitude: 7000,

    operatingTemp: '-20 to 50',
    ipRating: 'IP55',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 15,

    integratedPayload: {
      wideCamera: '12MP, 1/2" CMOS, 84° FOV',
      zoomCamera: '48MP, 1/2" CMOS, 5-16x optical zoom',
      laserRangefinder: '3-1200m range'
    },

    obstacleAvoidance: {
      directions: 6,
      description: 'Omnidirectional sensing',
      forward: '0.6-39m',
      backward: '0.5-25m',
      lateral: '0.5-33m',
      upward: '0.2-10m',
      downward: '0.3-18m'
    },

    safetyFeatures: [
      'Redundant flight control system',
      'ADS-B receiver',
      'Remote ID compliant',
      'Redundant IMU',
      'Redundant barometer',
      'Redundant compass',
      'Auto RTH',
      'Failsafe RTH',
      'Geofencing',
      'Dock compatible'
    ],

    batteries: {
      type: 'TB30 Intelligent Flight Battery',
      capacity: '5880 mAh',
      voltage: '52.8V'
    },

    controller: 'DJI RC Plus',

    mandatoryActions: [
      'Firmware update verification',
      'Battery health check',
      'Propeller inspection',
      'Sensor/lens cleaning',
      'Compass calibration when prompted',
      'RTH configuration',
      'Airspace verification'
    ]
  },

  {
    id: 'matrice-30t',
    name: 'Matrice 30T',
    series: 'Matrice',
    category: 'Compact Industrial / Thermal',
    released: '2022',
    status: 'Current',

    mtow: 3998,
    emptyWeight: 3770,
    maxPayload: 228,
    diagonal: 668,
    foldedDimensions: '365 x 215 x 195 mm',
    unfoldedDimensions: '470 x 585 x 215 mm',

    maxFlightTime: 41,
    maxWindResistance: 15,
    maxSpeed: 23,
    maxAscentSpeed: 6,
    maxDescentSpeed: 5,
    maxAltitude: 7000,

    operatingTemp: '-20 to 50',
    ipRating: 'IP55',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 15,

    integratedPayload: {
      wideCamera: '12MP, 1/2" CMOS, 84° FOV',
      zoomCamera: '48MP, 1/2" CMOS, 5-16x optical zoom',
      thermalCamera: '640x512 resolution, DFOV 40°, 30 Hz',
      laserRangefinder: '3-1200m range'
    },

    obstacleAvoidance: {
      directions: 6,
      description: 'Omnidirectional sensing'
    },

    safetyFeatures: [
      'Redundant flight control system',
      'ADS-B receiver',
      'Remote ID compliant',
      'Redundant IMU',
      'Redundant barometer',
      'Redundant compass',
      'Auto RTH',
      'Failsafe RTH',
      'Geofencing',
      'Dock compatible'
    ],

    batteries: {
      type: 'TB30 Intelligent Flight Battery',
      capacity: '5880 mAh'
    },

    controller: 'DJI RC Plus',

    mandatoryActions: [
      'Firmware update verification',
      'Battery health check',
      'Propeller inspection',
      'Thermal sensor calibration check',
      'RTH configuration',
      'Airspace verification'
    ]
  },

  {
    id: 'matrice-400',
    name: 'Matrice 400',
    series: 'Matrice',
    category: 'Heavy Lift / Industrial',
    released: '2025',
    status: 'Current',

    mtow: 12000, // 12 kg
    emptyWeight: 7800, // grams (with batteries)
    maxPayload: 4200, // grams
    diagonal: 1850, // mm (props unfolded)
    foldedDimensions: '480 x 460 x 480 mm',
    unfoldedDimensions: '890 x 720 x 480 mm',

    maxFlightTime: 50, // minutes (no payload)
    maxFlightTimeWithPayload: 38, // minutes (with payload)
    maxWindResistance: 15, // m/s
    maxSpeed: 23, // m/s
    maxAscentSpeed: 6, // m/s
    maxDescentSpeed: 5, // m/s
    maxAltitude: 7000, // meters MSL

    operatingTemp: '-20 to 50',
    ipRating: 'IP55',

    transmissionSystem: 'O4 Enterprise',
    maxTransmissionRange: 25, // km (FCC, unobstructed)
    videoTransmission: '1080p @ 60fps',

    obstacleAvoidance: {
      directions: 6,
      description: 'Omnidirectional obstacle sensing with enhanced AI',
      horizontal: 'Forward/Backward/Left/Right: 0.5-50m',
      upward: '0.2-15m',
      downward: '0.3-20m'
    },

    safetyFeatures: [
      'Triple-redundant flight control system',
      'Dual battery system with hot-swap capability',
      'Triple RTK antennas',
      'FPV camera with night vision',
      'ADS-B In/Out',
      'Remote ID compliant (broadcast + network)',
      'Triple redundant IMU',
      'Redundant barometer',
      'Redundant compass',
      'Integrated parachute system',
      'Auto Return-to-Home',
      'Low battery RTH',
      'Failsafe RTH on signal loss',
      'Advanced geofencing',
      'Altitude limits',
      'CSM radar compatible',
      'DAA system ready'
    ],

    batteries: {
      type: 'TB70 Intelligent Flight Battery',
      capacity: '6200 mAh',
      voltage: '52.8V',
      chemistry: 'LiPo 14S',
      chargingTime: '40-55 min (BS70 station)'
    },

    controller: 'DJI RC Plus 2',

    compatiblePayloads: [
      'Zenmuse H30',
      'Zenmuse H30T',
      'Zenmuse P1',
      'Zenmuse L2',
      'Zenmuse L2 Plus',
      'Third-party via DJI Payload SDK 4.0'
    ],

    mandatoryActions: [
      'Firmware update check before each flight day',
      'Battery health check (cycle count, voltage, temperature)',
      'Propeller inspection (damage, secure mount, wear)',
      'RTK calibration verification',
      'Obstacle avoidance sensor cleaning and test',
      'Parachute system status check',
      'Compass calibration if required',
      'IMU calibration if required',
      'Return-to-Home altitude setting',
      'Geofence/flight boundary configuration',
      'DAA system verification (if equipped)',
      'Emergency procedures briefing'
    ],

    maintenanceSchedule: {
      beforeFlight: [
        'Visual inspection of airframe',
        'Propeller condition check',
        'Battery charge level and health',
        'Sensor lens cleaning',
        'Firmware version verification',
        'Parachute deployment indicator'
      ],
      every50Hours: [
        'Full propeller replacement',
        'Landing gear inspection',
        'Motor inspection',
        'Gimbal calibration',
        'Parachute repack inspection'
      ],
      every200Hours: [
        'Factory inspection required',
        'Battery replacement evaluation',
        'Full systems diagnostic'
      ]
    },

    certifications: [
      'FCC', 'CE', 'SRRC', 'MIC', 'KC',
      'Transport Canada compliant',
      'Remote ID compliant',
      'EASA compliant'
    ]
  },

  {
    id: 'matrice-4td',
    name: 'Matrice 4TD',
    series: 'Matrice',
    category: 'Compact Industrial / Thermal',
    released: '2025',
    status: 'Current',

    mtow: 1650, // grams
    emptyWeight: 1550, // grams (with battery)
    maxPayload: 0, // Integrated payload
    foldedDimensions: '220 x 106 x 75 mm',
    unfoldedDimensions: '367 x 320 x 107 mm',

    maxFlightTime: 42, // minutes
    maxWindResistance: 12, // m/s
    maxSpeed: 21, // m/s
    maxAscentSpeed: 8, // m/s
    maxDescentSpeed: 6, // m/s
    maxAltitude: 6000, // meters MSL

    operatingTemp: '-20 to 50',
    ipRating: 'IP55',

    transmissionSystem: 'O4 Enterprise',
    maxTransmissionRange: 20, // km
    videoTransmission: '1080p @ 60fps',

    integratedPayload: {
      wideCamera: '1/1.3" CMOS, 48MP, 24mm equivalent, 84° FOV',
      zoomCamera: '1/2" CMOS, 48MP, 70-324mm equivalent, 56x hybrid zoom',
      thermalCamera: '640x512, 40° DFOV, 30Hz frame rate',
      thermalSensitivity: 'NETD ≤30mK',
      laserRangefinder: '3-1500m range, ±0.2m accuracy'
    },

    obstacleAvoidance: {
      directions: 4,
      description: 'APAS 6.0 - Forward/Backward/Downward/Upward',
      forward: '0.5-52m',
      backward: '0.5-30m',
      upward: '0.2-10m',
      downward: '0.3-25m',
      nightVision: 'IR-assisted obstacle sensing'
    },

    safetyFeatures: [
      'APAS 6.0 intelligent obstacle avoidance',
      'ADS-B In receiver',
      'Remote ID compliant (broadcast + network)',
      'Redundant IMU',
      'Redundant compass',
      'Redundant barometer',
      'Auto RTH with obstacle bypass',
      'Low battery RTH',
      'Failsafe RTH on signal loss',
      'Geofencing with dynamic updates',
      'Precision landing',
      'Night flight lights',
      'Dock 2 compatible'
    ],

    batteries: {
      type: 'Matrice 4 Series Intelligent Battery',
      capacity: '6000 mAh',
      voltage: '17.6V',
      chargingTime: '60 min (standard charger)'
    },

    controller: 'DJI RC Pro Enterprise 2',

    flightModes: [
      'Waypoint flight',
      'Mapping mission',
      'Oblique photography',
      'Linear flight',
      'Smart track',
      'PinPoint',
      'Smart oblique capture'
    ],

    mandatoryActions: [
      'Firmware update check',
      'Battery health verification (cycles, voltage)',
      'Propeller inspection',
      'Gimbal/camera calibration check',
      'Thermal sensor NUC (if required)',
      'Obstacle avoidance sensor cleaning',
      'Compass calibration if flagged',
      'RTH altitude configuration',
      'Geofence/boundary setup',
      'Night operation lights check (if applicable)',
      'Airspace verification'
    ],

    maintenanceSchedule: {
      beforeFlight: [
        'Visual inspection of airframe',
        'Propeller condition check',
        'Battery charge level and health',
        'Sensor/lens cleaning',
        'Gimbal movement test'
      ],
      every100Hours: [
        'Propeller replacement',
        'Full gimbal calibration',
        'Motor inspection'
      ],
      every300Hours: [
        'Factory inspection recommended'
      ]
    },

    certifications: [
      'FCC', 'CE', 'SRRC', 'MIC', 'KC',
      'Transport Canada compliant',
      'Remote ID compliant',
      'EASA Class C2'
    ]
  },

  // ============================================
  // MAVIC ENTERPRISE SERIES
  // ============================================
  {
    id: 'mavic-3-enterprise',
    name: 'Mavic 3 Enterprise',
    series: 'Mavic',
    category: 'Compact / Surveying',
    released: '2022',
    status: 'Current',

    mtow: 920,
    emptyWeight: 915,
    maxPayload: 0, // Integrated camera only
    diagonal: 380,
    foldedDimensions: '221 x 96.3 x 90.3 mm',
    unfoldedDimensions: '347.5 x 283 x 107.7 mm',

    maxFlightTime: 45,
    maxWindResistance: 12,
    maxSpeed: 21,
    maxAscentSpeed: 8,
    maxDescentSpeed: 6,
    maxAltitude: 6000,

    operatingTemp: '-10 to 40',
    ipRating: 'None',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 15,

    integratedPayload: {
      wideCamera: '20MP, 4/3 CMOS, 84° FOV',
      zoomCamera: '12MP, 1/2" CMOS, 7x optical zoom',
      rtk: 'Optional RTK module'
    },

    obstacleAvoidance: {
      directions: 4,
      description: 'Forward/Backward/Downward/Upward',
      forward: '0.5-200m (APAS 5.0)',
      backward: '0.5-16m',
      upward: '0.2-10m',
      downward: '0.3-18m'
    },

    safetyFeatures: [
      'APAS 5.0 obstacle avoidance',
      'ADS-B receiver',
      'Remote ID compliant',
      'Auto RTH',
      'Failsafe RTH',
      'Geofencing',
      'Return-to-Home with obstacle bypass'
    ],

    batteries: {
      type: 'Mavic 3 Enterprise Series Battery',
      capacity: '5000 mAh',
      voltage: '15.4V'
    },

    controller: 'DJI RC Pro Enterprise',

    mandatoryActions: [
      'Firmware update check',
      'Battery health verification',
      'Propeller inspection',
      'Gimbal/camera check',
      'Compass calibration if flagged',
      'RTH altitude setting',
      'Airspace check'
    ]
  },

  {
    id: 'mavic-3-thermal',
    name: 'Mavic 3 Thermal (M3T)',
    series: 'Mavic',
    category: 'Compact / Thermal',
    released: '2022',
    status: 'Current',

    mtow: 920,
    emptyWeight: 920,
    maxPayload: 0,
    diagonal: 380,
    foldedDimensions: '221 x 96.3 x 90.3 mm',
    unfoldedDimensions: '347.5 x 283 x 107.7 mm',

    maxFlightTime: 45,
    maxWindResistance: 12,
    maxSpeed: 21,
    maxAscentSpeed: 8,
    maxDescentSpeed: 6,
    maxAltitude: 6000,

    operatingTemp: '-10 to 40',
    ipRating: 'None',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 15,

    integratedPayload: {
      wideCamera: '48MP, 1/2" CMOS',
      thermalCamera: '640x512, DFOV 61°, 30 Hz',
      thermalAccuracy: '< 2°C or 2%'
    },

    obstacleAvoidance: {
      directions: 4,
      description: 'APAS 5.0 - Forward/Backward/Downward/Upward'
    },

    safetyFeatures: [
      'APAS 5.0 obstacle avoidance',
      'ADS-B receiver',
      'Remote ID compliant',
      'Auto RTH',
      'Failsafe RTH',
      'Geofencing'
    ],

    batteries: {
      type: 'Mavic 3 Enterprise Series Battery',
      capacity: '5000 mAh'
    },

    controller: 'DJI RC Pro Enterprise',

    mandatoryActions: [
      'Firmware update check',
      'Battery health verification',
      'Propeller inspection',
      'Thermal calibration check',
      'RTH configuration',
      'Airspace verification'
    ]
  },

  {
    id: 'mavic-3-multispectral',
    name: 'Mavic 3 Multispectral (M3M)',
    series: 'Mavic',
    category: 'Compact / Agriculture',
    released: '2022',
    status: 'Current',

    mtow: 951,
    emptyWeight: 951,
    maxPayload: 0,
    diagonal: 380,
    foldedDimensions: '221 x 96.3 x 90.3 mm',
    unfoldedDimensions: '347.5 x 283 x 107.7 mm',

    maxFlightTime: 43,
    maxWindResistance: 12,
    maxSpeed: 21,
    maxAscentSpeed: 8,
    maxDescentSpeed: 6,
    maxAltitude: 6000,

    operatingTemp: '-10 to 40',
    ipRating: 'None',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 15,

    integratedPayload: {
      rgbCamera: '20MP, 4/3 CMOS',
      multispectralCameras: '4x 5MP sensors (Green, Red, Red Edge, NIR)',
      sunlightSensor: 'Yes'
    },

    obstacleAvoidance: {
      directions: 4,
      description: 'APAS 5.0'
    },

    safetyFeatures: [
      'APAS 5.0',
      'ADS-B receiver',
      'Remote ID compliant',
      'RTK positioning',
      'Auto RTH',
      'Failsafe RTH',
      'Geofencing'
    ],

    batteries: {
      type: 'Mavic 3 Enterprise Series Battery',
      capacity: '5000 mAh'
    },

    controller: 'DJI RC Pro Enterprise',

    mandatoryActions: [
      'Firmware update check',
      'Battery health verification',
      'Propeller inspection',
      'RTK calibration',
      'Sunlight sensor check',
      'RTH configuration'
    ]
  },

  // ============================================
  // PHANTOM SERIES
  // ============================================
  {
    id: 'phantom-4-rtk',
    name: 'Phantom 4 RTK',
    series: 'Phantom',
    category: 'Surveying / Mapping',
    released: '2018',
    status: 'Legacy (supported)',

    mtow: 1391,
    emptyWeight: 1391,
    maxPayload: 0,
    diagonal: 350,

    maxFlightTime: 30,
    maxWindResistance: 10,
    maxSpeed: 16, // P-mode
    maxAscentSpeed: 6,
    maxDescentSpeed: 3,
    maxAltitude: 6000,

    operatingTemp: '0 to 40',
    ipRating: 'None',

    transmissionSystem: 'OcuSync',
    maxTransmissionRange: 7,

    integratedPayload: {
      camera: '20MP, 1" CMOS, mechanical shutter',
      rtk: 'Built-in RTK module'
    },

    obstacleAvoidance: {
      directions: 2,
      description: 'Forward/Downward only',
      forward: '0.7-15m',
      downward: '0.1-8m'
    },

    safetyFeatures: [
      'Obstacle sensing (forward/down)',
      'Return to Home',
      'Failsafe RTH',
      'Geofencing',
      'Low battery warning'
    ],

    batteries: {
      type: 'P4 RTK Battery',
      capacity: '5870 mAh',
      voltage: '15.2V'
    },

    controller: 'P4 RTK Remote Controller',

    mandatoryActions: [
      'Firmware check',
      'Battery verification',
      'RTK base station setup',
      'Compass calibration if flagged',
      'Camera check',
      'RTH altitude setting'
    ]
  },

  // ============================================
  // FLYCART SERIES (Delivery)
  // ============================================
  {
    id: 'flycart-30',
    name: 'FlyCart 30',
    series: 'FlyCart',
    category: 'Cargo / Delivery',
    released: '2023',
    status: 'Current',

    mtow: 95000, // 95 kg
    emptyWeight: 65000, // 65 kg
    maxPayload: 30000, // 30 kg cargo (40 kg winch)

    maxFlightTime: 32, // minutes (no payload, dual battery)
    maxFlightTimeWithPayload: 18, // with 30 kg payload
    maxWindResistance: 12,
    maxSpeed: 20,
    maxAltitude: 6000,

    operatingTemp: '-20 to 45',
    ipRating: 'IP55',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 20,

    safetyFeatures: [
      'Redundant dual battery system',
      'Parachute (integrated)',
      'Redundant propulsion',
      'ADS-B receiver',
      'Anti-collision lights',
      'Emergency landing system',
      'Geofencing',
      'Failsafe RTH',
      'Air-to-ground communication backup'
    ],

    batteries: {
      type: 'FC30 Intelligent Flight Battery',
      configuration: 'Single or Dual',
      swappable: true
    },

    controller: 'DJI RC Plus',

    cargoModes: [
      'Cargo mode (30 kg max)',
      'Winch mode (40 kg max via electric winch)'
    ],

    mandatoryActions: [
      'Weight and balance verification',
      'Cargo secure check',
      'Dual battery verification',
      'Parachute system check',
      'Flight path clearance',
      'Weather assessment',
      'Emergency landing sites identified',
      'Ground crew coordination',
      'NOTAMs check',
      'SFOC compliance verification'
    ]
  },

  {
    id: 'flycart-100',
    name: 'FlyCart 100',
    series: 'FlyCart',
    category: 'Heavy Cargo / Delivery',
    released: '2025',
    status: 'Current',

    mtow: 200000, // 200 kg
    emptyWeight: 95000, // 95 kg
    maxPayload: 100000, // 100 kg cargo (120 kg winch mode)

    maxFlightTime: 28, // minutes (no payload, quad battery)
    maxFlightTimeWithPayload: 16, // with 100 kg payload
    maxWindResistance: 12,
    maxSpeed: 18,
    maxAscentSpeed: 4,
    maxDescentSpeed: 4,
    maxAltitude: 5000,

    operatingTemp: '-20 to 45',
    ipRating: 'IP55',

    transmissionSystem: 'O4 Enterprise Long Range',
    maxTransmissionRange: 30,
    videoTransmission: '1080p @ 30fps dual-feed',

    obstacleAvoidance: {
      directions: 6,
      description: 'Omnidirectional radar + visual sensing',
      range: 'Up to 100m detection range'
    },

    safetyFeatures: [
      'Quad-redundant battery system',
      'Dual parachute system (integrated)',
      'Octa-redundant propulsion (8 motors)',
      'Triple-redundant flight controller',
      'ADS-B In/Out',
      'Remote ID compliant (broadcast + network)',
      'DAA system (Detect and Avoid)',
      'Anti-collision beacon lights (high intensity)',
      'Emergency landing system with terrain assessment',
      'Geofencing with dynamic updates',
      'Failsafe RTH with obstacle avoidance',
      'Ground-Air-Ground communication redundancy',
      'Black box flight recorder',
      'Real-time structural monitoring',
      'Automatic cargo jettison capability'
    ],

    batteries: {
      type: 'FC100 High-Capacity Flight Battery',
      configuration: 'Quad battery system',
      capacity: '35000 mAh per battery',
      swappable: true,
      hotSwap: false
    },

    controller: 'DJI RC Plus Industrial',

    cargoModes: [
      'Direct cargo mode (100 kg max)',
      'Winch delivery mode (120 kg max)',
      'Multi-drop container mode',
      'Medical/emergency supply mode'
    ],

    cargoSystem: {
      bayDimensions: '1200 x 800 x 600 mm',
      attachmentPoints: 8,
      quickRelease: true,
      weightSensor: 'Integrated load cells'
    },

    mandatoryActions: [
      'Full pre-flight inspection checklist (40+ items)',
      'Weight and balance calculation/verification',
      'Cargo secure check with load cell verification',
      'Quad battery system verification (all 4)',
      'Dual parachute system deployment check',
      'DAA system calibration and test',
      'ADS-B transponder verification',
      'Flight path clearance with ATC if required',
      'Weather assessment (wind, precipitation, visibility)',
      'Emergency landing sites identified (minimum 3)',
      'Ground crew briefing and positioning',
      'Communication systems test (primary + backup)',
      'NOTAMs check and filing',
      'SFOC compliance verification',
      'Real-time monitoring station setup',
      'Medical/emergency services notification (if applicable)'
    ],

    operationalRequirements: [
      'SFOC required for all Canadian operations',
      'Minimum 2 pilots required (PIC + VO/Safety)',
      'Ground crew minimum 2 personnel',
      'Flight operations manual required',
      'Insurance coverage verification',
      'Designated landing/takeoff zones',
      'Visual observers for BVLOS portions'
    ],

    certifications: [
      'Transport Canada SFOC compliant',
      'Remote ID compliant',
      'EASA certified',
      'FAA Part 107 waiver eligible'
    ]
  },

  // ============================================
  // AGRAS SERIES (Agricultural)
  // ============================================
  {
    id: 'agras-t40',
    name: 'Agras T40',
    series: 'Agras',
    category: 'Agricultural / Spraying',
    released: '2022',
    status: 'Current',

    mtow: 101000, // 101 kg
    emptyWeight: 52500,
    maxPayload: 50000, // 50 kg (40 kg liquid + 50 kg spreader)

    maxFlightTime: 21, // minutes
    maxWindResistance: 8,
    maxSpeed: 10, // operational
    maxAltitude: 4500,

    operatingTemp: '0 to 45',
    ipRating: 'IP67',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 7,

    safetyFeatures: [
      'Coaxial twin-rotor design',
      'Dual atomized spraying',
      'Spherical radar obstacle avoidance',
      'Terrain following',
      'Active phased array radar',
      'Failsafe RTH'
    ],

    batteries: {
      type: 'T40 Intelligent Flight Battery',
      capacity: '30000 mAh'
    },

    controller: 'DJI T40 Remote Controller',

    spraySystem: {
      tankCapacity: '40 L',
      sprayWidth: '11 m',
      flowRate: '12 L/min max'
    },

    mandatoryActions: [
      'Tank clean/rinse verification',
      'Nozzle inspection',
      'Pump system check',
      'Terrain data upload',
      'Boundary setup',
      'Weather (wind) assessment',
      'Buffer zone verification',
      'PPE for ground crew',
      'Battery health check',
      'Propeller inspection'
    ]
  },

  {
    id: 'agras-t20p',
    name: 'Agras T20P',
    series: 'Agras',
    category: 'Agricultural / Spraying',
    released: '2022',
    status: 'Current',

    mtow: 54100,
    emptyWeight: 29600,
    maxPayload: 25000, // 25 kg (20 kg liquid)

    maxFlightTime: 12,
    maxWindResistance: 6,
    maxSpeed: 7, // operational
    maxAltitude: 2000,

    operatingTemp: '0 to 45',
    ipRating: 'IP67',

    transmissionSystem: 'O3 Enterprise',
    maxTransmissionRange: 5,

    safetyFeatures: [
      'Spherical radar',
      'Terrain following',
      'Failsafe RTH',
      'Geofencing'
    ],

    batteries: {
      type: 'T20P Battery',
      capacity: '17500 mAh'
    },

    spraySystem: {
      tankCapacity: '20 L',
      sprayWidth: '7 m',
      flowRate: '6 L/min max'
    },

    mandatoryActions: [
      'Tank verification',
      'Nozzle check',
      'Terrain data upload',
      'Weather assessment',
      'Buffer zones',
      'Battery check',
      'Propeller inspection'
    ]
  },

  // ============================================
  // DOCK SYSTEMS
  // ============================================
  {
    id: 'dock-2',
    name: 'DJI Dock 2',
    series: 'Dock',
    category: 'Remote Operations / Autonomous',
    released: '2024',
    status: 'Current',

    compatibleDrones: ['Matrice 3D', 'Matrice 3TD'],

    dimensions: '520 x 645 x 490 mm',
    weight: 34000, // 34 kg

    operatingTemp: '-35 to 50',
    ipRating: 'IP55',
    windResistance: 15, // m/s

    safetyFeatures: [
      'Automatic charging',
      'Weather station (integrated)',
      'RTK base station (integrated)',
      'Remote health monitoring',
      'Automated mission execution',
      'Fail-safe landing on dock',
      '4G/5G connectivity',
      'Backup power support'
    ],

    chargingTime: 32, // minutes

    mandatoryActions: [
      'Remote health check before mission',
      'Weather station verification',
      'Drone battery status',
      'Landing pad clear',
      'Network connectivity check',
      'Mission parameters review',
      'Airspace clearance',
      'RTK status verification'
    ]
  }
];

// Regulatory compliance mapping for Canada
export const TC_COMPLIANCE = {
  'matrice-350-rtk': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'BVLOS (L1C)', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11']
  },
  'matrice-30': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'BVLOS (L1C)', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11']
  },
  'matrice-30t': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'BVLOS (L1C)', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11']
  },
  'matrice-400': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'BVLOS (L1C)', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11', '922.12'],
    notes: 'Enhanced DAA capability supports expanded BVLOS operations'
  },
  'matrice-4td': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'BVLOS (L1C)', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11'],
    notes: 'Compact thermal platform, Dock 2 compatible for autonomous operations'
  },
  'mavic-3-enterprise': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.08', '922.09', '922.10']
  },
  'mavic-3-thermal': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.08', '922.09', '922.10']
  },
  'mavic-3-multispectral': {
    category: 'Small RPAS (<25 kg)',
    operationTypes: ['VLOS', 'Advanced Operations'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.08', '922.09', '922.10']
  },
  'flycart-30': {
    category: 'Large RPAS (>25 kg)',
    operationTypes: ['SFOC Required'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11', '922.12'],
    notes: 'Requires Special Flight Operations Certificate (SFOC) for cargo operations in Canada'
  },
  'flycart-100': {
    category: 'Large RPAS (>25 kg)',
    operationTypes: ['SFOC Required'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11', '922.12'],
    notes: 'Requires SFOC for all operations. Minimum 2 crew required. Additional insurance and operational requirements apply for 100kg+ cargo operations.'
  },
  'agras-t40': {
    category: 'Large RPAS (>25 kg)',
    operationTypes: ['SFOC Required'],
    remoteIdCompliant: true,
    saRequirements: ['922.04', '922.05', '922.06', '922.07', '922.08', '922.09', '922.10', '922.11'],
    notes: 'Agricultural operations may require additional provincial permits'
  }
};

// Quick lookup tables
export const SERIES_INFO = {
  'Matrice': {
    description: 'Industrial-grade platforms for enterprise applications',
    color: '#1a365d'
  },
  'Mavic': {
    description: 'Compact foldable drones for mobility and versatility',
    color: '#2d3748'
  },
  'Phantom': {
    description: 'Classic mapping and surveying platform',
    color: '#4a5568'
  },
  'FlyCart': {
    description: 'Heavy-lift cargo delivery drones',
    color: '#553c9a'
  },
  'Agras': {
    description: 'Agricultural spraying and spreading drones',
    color: '#276749'
  },
  'Dock': {
    description: 'Autonomous remote operations systems',
    color: '#744210'
  }
};

export const getSpecsSummary = (drone) => {
  return {
    name: drone.name,
    mtow: `${(drone.mtow / 1000).toFixed(2)} kg`,
    maxPayload: drone.maxPayload ? `${(drone.maxPayload / 1000).toFixed(2)} kg` : 'Integrated',
    maxFlightTime: `${drone.maxFlightTime} min`,
    maxWindResistance: `${drone.maxWindResistance} m/s (${Math.round(drone.maxWindResistance * 3.6)} km/h)`,
    ipRating: drone.ipRating || 'None',
    obstacleAvoidance: drone.obstacleAvoidance?.directions ? `${drone.obstacleAvoidance.directions}-way` : 'N/A',
    operatingTemp: `${drone.operatingTemp}°C`
  };
};
