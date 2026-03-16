import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft, Save, Calendar, DollarSign, Users, MapPin,
  FileText, Plane, AlertTriangle, CheckCircle2, Circle,
  Loader2, MoreVertical, Trash2, Clock, Package, ClipboardCheck,
  Shield, ChevronDown, ChevronUp, Plus, X, Phone, Mail,
  Download, Building2, Briefcase, Percent, Info, AlertCircle,
  ThumbsUp, ThumbsDown, Minus, UserPlus, Search
} from 'lucide-react'
import {
  getProject, updateProject, deleteProject,
  getTailgateMeetings, createTailgateMeeting, updateTailgateMeeting,
  getOperators, getEquipment, getServices, getModifiers
} from '../lib/api'
import SiteTab from '../components/SiteTab'
import FieldDocsTab from '../components/FieldDocsTab'
import CalendarSync from '../components/CalendarSync'

// ============================================
// CONSTANTS
// ============================================

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft', color: 'bg-gray-100 text-gray-700' },
  { value: 'active', label: 'Active', color: 'bg-green-100 text-green-700' },
  { value: 'complete', label: 'Complete', color: 'bg-blue-100 text-blue-700' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-500' }
]

const SAVE_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  SAVING: 'saving',
  SAVED: 'saved',
  ERROR: 'error'
}

const TABS = [
  { id: 'admin', label: 'Admin', icon: Briefcase },
  { id: 'site', label: 'Site', icon: MapPin },
  { id: 'field', label: 'Field Docs', icon: ClipboardCheck }
]

const ROLE_OPTIONS = [
  { value: 'PIC', label: 'Pilot in Command' },
  { value: 'VO', label: 'Visual Observer' },
  { value: 'Payload Op', label: 'Payload Operator' },
  { value: 'Safety', label: 'Safety Lead' },
  { value: 'Other', label: 'Other' }
]

const RATE_TYPES = [
  { value: 'hourly', label: 'Hourly' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' }
]

// ============================================
// HELPER COMPONENTS
// ============================================

function SaveIndicator({ status }) {
  if (status === SAVE_STATUS.SAVING) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-gray-500">
        <Loader2 className="w-4 h-4 animate-spin" />
        Saving...
      </span>
    )
  }
  if (status === SAVE_STATUS.SAVED) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-green-600">
        <CheckCircle2 className="w-4 h-4" />
        Saved
      </span>
    )
  }
  if (status === SAVE_STATUS.ERROR) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-red-600">
        <AlertCircle className="w-4 h-4" />
        Error saving
      </span>
    )
  }
  if (status === SAVE_STATUS.PENDING) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-amber-600">
        <Circle className="w-3 h-3 fill-current" />
        Unsaved
      </span>
    )
  }
  return null
}

function Section({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${className}`}>
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

function InputField({ label, type = 'text', value, onChange, placeholder, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
      />
    </div>
  )
}

function TextArea({ label, value, onChange, placeholder, rows = 3, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
      />
    </div>
  )
}

function SelectField({ label, value, onChange, options, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
      >
        <option value="">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

// ============================================
// ADMIN TAB COMPONENTS
// ============================================

const PROJECT_TYPES = [
  { id: 'mapping', label: 'Mapping' },
  { id: 'survey', label: 'Survey' },
  { id: 'inspection', label: 'Inspection' },
  { id: 'monitoring', label: 'Monitoring' },
  { id: 'photography', label: 'Photography/Video' },
  { id: 'lidar', label: 'LiDAR' },
  { id: 'thermal', label: 'Thermal' },
  { id: 'other', label: 'Other' }
]

const PROJECT_CONSTRAINTS = [
  { id: 'time_sensitive', label: 'Time-Sensitive' },
  { id: 'budget_constrained', label: 'Budget-Constrained' },
  { id: 'access_challenges', label: 'Access Challenges' },
  { id: 'weather_dependent', label: 'Weather-Dependent' },
  { id: 'permits_required', label: 'Permits Required' },
  { id: 'client_onsite', label: 'Client On-Site' }
]

function ProjectOverviewSection({ project, onUpdate, operators }) {
  const statusOption = STATUS_OPTIONS.find(s => s.value === project.status) || STATUS_OPTIONS[0]

  return (
    <Section title="Project Overview">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Author</label>
          <select
            value={project.author_id || ''}
            onChange={(e) => onUpdate({ author_id: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">Select author...</option>
            {operators.map(op => (
              <option key={op.id} value={op.id}>{op.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
          <select
            value={project.status || 'draft'}
            onChange={(e) => onUpdate({ status: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            {STATUS_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <InputField
          label="Field Start Date"
          type="date"
          value={project.start_date}
          onChange={(v) => onUpdate({ start_date: v })}
        />
        <InputField
          label="Field End Date"
          type="date"
          value={project.end_date}
          onChange={(v) => onUpdate({ end_date: v })}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <InputField
          label="Field Days"
          type="number"
          value={project.field_days}
          onChange={(v) => onUpdate({ field_days: parseInt(v) || 0 })}
          placeholder="Number of days"
        />
        <InputField
          label="Created Date"
          type="date"
          value={project.created_date}
          onChange={(v) => onUpdate({ created_date: v })}
        />
        <InputField
          label="Quote/Reference #"
          value={project.reference_number}
          onChange={(v) => onUpdate({ reference_number: v })}
          placeholder="e.g., Q-2024-001"
        />
      </div>
    </Section>
  )
}

function ClientInfoSection({ project, onUpdate }) {
  return (
    <Section title="Client Information">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InputField
          label="Client / Company"
          value={project.client_name}
          onChange={(v) => onUpdate({ client_name: v })}
          placeholder="Company or contact name"
        />
        <InputField
          label="Contact Email"
          type="email"
          value={project.client_email}
          onChange={(v) => onUpdate({ client_email: v })}
          placeholder="email@example.com"
        />
        <InputField
          label="Contact Phone"
          type="tel"
          value={project.client_phone}
          onChange={(v) => onUpdate({ client_phone: v })}
          placeholder="(604) 555-1234"
        />
      </div>
      <div className="mt-4">
        <TextArea
          label="Project Description / Scope"
          value={project.description}
          onChange={(v) => onUpdate({ description: v })}
          placeholder="Describe the project scope and detailed requirements..."
          rows={3}
        />
      </div>
    </Section>
  )
}

// Comprehensive data products for remote sensing
const DATA_PRODUCTS = [
  // Mapping & Survey
  { id: 'orthomosaic', label: 'Orthomosaic', category: 'Mapping' },
  { id: 'dsm', label: 'DSM (Digital Surface Model)', category: 'Mapping' },
  { id: 'dtm', label: 'DTM (Digital Terrain Model)', category: 'Mapping' },
  { id: 'dem', label: 'DEM (Digital Elevation Model)', category: 'Mapping' },
  { id: 'contours', label: 'Contour Lines', category: 'Mapping' },
  { id: 'slope_map', label: 'Slope Map', category: 'Mapping' },
  { id: 'aspect_map', label: 'Aspect Map', category: 'Mapping' },
  { id: 'hillshade', label: 'Hillshade', category: 'Mapping' },

  // 3D & Point Cloud
  { id: 'point_cloud', label: 'Point Cloud', category: '3D' },
  { id: 'classified_pc', label: 'Classified Point Cloud', category: '3D' },
  { id: '3d_model', label: '3D Model/Mesh', category: '3D' },
  { id: '3d_textured', label: '3D Textured Model', category: '3D' },

  // LiDAR
  { id: 'lidar_raw', label: 'LiDAR Raw Data', category: 'LiDAR' },
  { id: 'lidar_classified', label: 'LiDAR Classified', category: 'LiDAR' },
  { id: 'lidar_intensity', label: 'LiDAR Intensity', category: 'LiDAR' },
  { id: 'chm', label: 'Canopy Height Model', category: 'LiDAR' },

  // Volumetrics
  { id: 'volume', label: 'Volumetric Analysis', category: 'Analysis' },
  { id: 'cut_fill', label: 'Cut/Fill Analysis', category: 'Analysis' },
  { id: 'stockpile', label: 'Stockpile Measurement', category: 'Analysis' },
  { id: 'change_detection', label: 'Change Detection', category: 'Analysis' },

  // Bathymetric
  { id: 'bathymetry', label: 'Bathymetric Survey', category: 'Bathymetric' },
  { id: 'water_depth', label: 'Water Depth Map', category: 'Bathymetric' },
  { id: 'substrate', label: 'Substrate Classification', category: 'Bathymetric' },
  { id: 'shoreline', label: 'Shoreline Mapping', category: 'Bathymetric' },

  // Thermal & Multispectral
  { id: 'thermal', label: 'Thermal Imagery', category: 'Spectral' },
  { id: 'thermal_analysis', label: 'Thermal Analysis Report', category: 'Spectral' },
  { id: 'ndvi', label: 'NDVI', category: 'Spectral' },
  { id: 'multispectral', label: 'Multispectral Imagery', category: 'Spectral' },
  { id: 'vegetation_health', label: 'Vegetation Health Map', category: 'Spectral' },
  { id: 'crop_analysis', label: 'Crop Analysis', category: 'Spectral' },

  // Inspection
  { id: 'inspection_report', label: 'Inspection Report', category: 'Inspection' },
  { id: 'defect_map', label: 'Defect Mapping', category: 'Inspection' },
  { id: 'condition_assessment', label: 'Condition Assessment', category: 'Inspection' },
  { id: 'corrosion_map', label: 'Corrosion Mapping', category: 'Inspection' },

  // Visual
  { id: 'video', label: 'Video/Footage', category: 'Visual' },
  { id: 'photos', label: 'Still Photos', category: 'Visual' },
  { id: 'panorama', label: '360° Panorama', category: 'Visual' },
  { id: 'virtual_tour', label: 'Virtual Tour', category: 'Visual' },

  // Security & Surveillance
  { id: 'security_footage', label: 'Security Footage', category: 'Security' },
  { id: 'perimeter_survey', label: 'Perimeter Survey', category: 'Security' },
  { id: 'search_rescue', label: 'Search & Rescue Support', category: 'Security' },

  // Environmental
  { id: 'habitat_map', label: 'Habitat Mapping', category: 'Environmental' },
  { id: 'wetland_delineation', label: 'Wetland Delineation', category: 'Environmental' },
  { id: 'wildlife_survey', label: 'Wildlife Survey', category: 'Environmental' },
  { id: 'erosion_assessment', label: 'Erosion Assessment', category: 'Environmental' },
  { id: 'spill_assessment', label: 'Spill Assessment', category: 'Environmental' },

  // GIS & CAD
  { id: 'gis_layers', label: 'GIS Layers', category: 'Deliverable' },
  { id: 'cad_drawings', label: 'CAD Drawings', category: 'Deliverable' },
  { id: 'planimetrics', label: 'Planimetric Mapping', category: 'Deliverable' },
  { id: 'as_built', label: 'As-Built Survey', category: 'Deliverable' }
]

const DATA_PRODUCT_CATEGORIES = [...new Set(DATA_PRODUCTS.map(p => p.category))]

const GSD_OPTIONS = [
  { value: '', label: 'Not specified' },
  { value: '0.5cm', label: '< 0.5 cm (Ultra-high)' },
  { value: '1cm', label: '0.5-1 cm (Very High)' },
  { value: '2cm', label: '1-2 cm (High)' },
  { value: '5cm', label: '2-5 cm (Standard)' },
  { value: '10cm', label: '5-10 cm (Medium)' },
  { value: '20cm', label: '10-20 cm (Low)' },
  { value: '50cm', label: '20-50 cm (Very Low)' },
  { value: 'na', label: 'N/A' }
]

const ACCURACY_OPTIONS = [
  { value: '', label: 'Not specified' },
  { value: 'survey', label: 'Survey-grade (< 3cm)' },
  { value: 'high', label: 'High (3-10cm)' },
  { value: 'standard', label: 'Standard (10-30cm)' },
  { value: 'low', label: 'Low (30cm-1m)' },
  { value: 'relative', label: 'Relative only' },
  { value: 'na', label: 'N/A' }
]

const TERRAIN_OPTIONS = [
  { value: 'flat', label: 'Flat/Open' },
  { value: 'rolling', label: 'Rolling Hills' },
  { value: 'steep', label: 'Steep/Mountainous' },
  { value: 'forested', label: 'Forested' },
  { value: 'urban', label: 'Urban/Built-up' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'water', label: 'Over Water' },
  { value: 'coastal', label: 'Coastal' },
  { value: 'wetland', label: 'Wetland/Marsh' },
  { value: 'corridor', label: 'Linear Corridor' },
  { value: 'mixed', label: 'Mixed' }
]

const OPERATION_TYPE_OPTIONS = [
  { value: 'vlos', label: 'VLOS (Visual Line of Sight)' },
  { value: 'evlos', label: 'EVLOS (Extended VLOS)' },
  { value: 'bvlos', label: 'BVLOS (Beyond VLOS)' },
  { value: 'night', label: 'Night Operations' },
  { value: 'over_people', label: 'Over People' }
]

const AIRSPACE_OPTIONS = [
  { value: 'uncontrolled', label: 'Uncontrolled (Class G)' },
  { value: 'controlled', label: 'Controlled (requires authorization)' },
  { value: 'restricted', label: 'Restricted/Prohibited' },
  { value: 'national_park', label: 'National Park' },
  { value: 'military', label: 'Military Zone' },
  { value: 'unknown', label: 'Unknown - needs assessment' }
]

const PERMIT_TYPES = [
  // Aviation
  { id: 'sfoc', label: 'SFOC', category: 'Aviation' },
  { id: 'nav_canada', label: 'NAV CANADA Authorization', category: 'Aviation' },
  { id: 'notam', label: 'NOTAM', category: 'Aviation' },

  // Environmental - Federal
  { id: 'dfo', label: 'DFO (Fisheries & Oceans)', category: 'Environmental' },
  { id: 'eccc', label: 'ECCC (Environment & Climate)', category: 'Environmental' },
  { id: 'sara', label: 'SARA (Species at Risk)', category: 'Environmental' },
  { id: 'mbca', label: 'MBCA (Migratory Birds)', category: 'Environmental' },
  { id: 'parks_canada', label: 'Parks Canada', category: 'Environmental' },

  // Environmental - Provincial
  { id: 'wildlife_permit', label: 'Wildlife Permit', category: 'Environmental' },
  { id: 'fish_wildlife', label: 'Fish & Wildlife Authorization', category: 'Environmental' },
  { id: 'forestry', label: 'Forestry Permit', category: 'Environmental' },
  { id: 'water_license', label: 'Water License', category: 'Environmental' },

  // Land Access
  { id: 'land_access', label: 'Land Access Permission', category: 'Access' },
  { id: 'indigenous', label: 'Indigenous Consultation', category: 'Access' },
  { id: 'crown_land', label: 'Crown Land Permit', category: 'Access' },
  { id: 'private_property', label: 'Private Property Access', category: 'Access' },
  { id: 'utility_row', label: 'Utility ROW Access', category: 'Access' },
  { id: 'railway', label: 'Railway Access', category: 'Access' },

  // Other
  { id: 'municipal', label: 'Municipal Permit', category: 'Other' },
  { id: 'security_clearance', label: 'Security Clearance', category: 'Other' },
  { id: 'insurance_cert', label: 'Insurance Certificate', category: 'Other' },
  { id: 'noise_permit', label: 'Noise/Disturbance Permit', category: 'Other' }
]

const PERMIT_CATEGORIES = [...new Set(PERMIT_TYPES.map(p => p.category))]

function NeedsSubSection({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between text-left hover:bg-gray-100"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  )
}

function NeedsAnalysisSection({ project, onUpdate }) {
  const needs = project.needs_analysis || {}
  const [expandedPackage, setExpandedPackage] = useState(null)
  const [expandedSite, setExpandedSite] = useState(null)

  const updateNeeds = (updates) => {
    onUpdate({ needs_analysis: { ...needs, ...updates } })
  }

  // Deliverable packages
  const packages = needs.packages || []

  const addPackage = () => {
    const newPkg = {
      id: Date.now(),
      name: `Package ${packages.length + 1}`,
      products: [],
      gsd: '',
      accuracy: '',
      coordinate_system: '',
      formats: ''
    }
    updateNeeds({ packages: [...packages, newPkg] })
    setExpandedPackage(newPkg.id)
  }

  const updatePackage = (id, updates) => {
    updateNeeds({
      packages: packages.map(p => p.id === id ? { ...p, ...updates } : p)
    })
  }

  const removePackage = (id) => {
    updateNeeds({ packages: packages.filter(p => p.id !== id) })
  }

  const togglePackageProduct = (pkgId, productId) => {
    const pkg = packages.find(p => p.id === pkgId)
    if (!pkg) return
    const products = pkg.products || []
    const newProducts = products.includes(productId)
      ? products.filter(p => p !== productId)
      : [...products, productId]
    updatePackage(pkgId, { products: newProducts })
  }

  // Site requirements
  const siteReqs = needs.site_requirements || []

  const addSiteReq = () => {
    const newSite = {
      id: Date.now(),
      name: `Site ${siteReqs.length + 1}`,
      area_size: '',
      area_unit: 'ha',
      terrain: '',
      elevation_change: '',
      gcp_required: '',
      conditions: ''
    }
    updateNeeds({ site_requirements: [...siteReqs, newSite] })
    setExpandedSite(newSite.id)
  }

  const updateSiteReq = (id, updates) => {
    updateNeeds({
      site_requirements: siteReqs.map(s => s.id === id ? { ...s, ...updates } : s)
    })
  }

  const removeSiteReq = (id) => {
    updateNeeds({ site_requirements: siteReqs.filter(s => s.id !== id) })
  }

  const toggleArrayItem = (field, itemId) => {
    const current = needs[field] || []
    if (current.includes(itemId)) {
      updateNeeds({ [field]: current.filter(i => i !== itemId) })
    } else {
      updateNeeds({ [field]: [...current, itemId] })
    }
  }

  const flags = needs.flags || []

  return (
    <Section title="Needs Analysis">
      <div className="space-y-4">

        {/* Deliverable Packages */}
        <NeedsSubSection title={`Deliverable Packages (${packages.length})`}>
          <div className="space-y-3">
            {packages.length === 0 ? (
              <p className="text-gray-500 text-sm py-2 text-center">No packages defined yet</p>
            ) : (
              packages.map((pkg, idx) => (
                <div key={pkg.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="px-3 py-2 bg-gray-50 flex items-center gap-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                  >
                    <span className="text-xs font-medium text-gray-400">#{idx + 1}</span>
                    <input
                      type="text"
                      value={pkg.name}
                      onChange={(e) => { e.stopPropagation(); updatePackage(pkg.id, { name: e.target.value }) }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-2 py-1 text-sm font-medium bg-transparent border-0 focus:ring-0 focus:outline-none"
                      placeholder="Package name..."
                    />
                    <span className="text-xs text-gray-500">{(pkg.products || []).length} products</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); removePackage(pkg.id) }}
                      className="p-1 text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {expandedPackage === pkg.id ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                  {expandedPackage === pkg.id && (
                    <div className="p-3 space-y-3 bg-white">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Data Products</label>
                        <div className="flex gap-2 mb-2">
                          <select
                            onChange={(e) => {
                              if (e.target.value && !(pkg.products || []).includes(e.target.value)) {
                                togglePackageProduct(pkg.id, e.target.value)
                              }
                              e.target.value = ''
                            }}
                            className="flex-1 px-2 py-1.5 border border-gray-200 rounded text-sm"
                            defaultValue=""
                          >
                            <option value="" disabled>+ Add product...</option>
                            {DATA_PRODUCT_CATEGORIES.map(cat => (
                              <optgroup key={cat} label={cat}>
                                {DATA_PRODUCTS.filter(p => p.category === cat).map(product => (
                                  <option key={product.id} value={product.id} disabled={(pkg.products || []).includes(product.id)}>
                                    {product.label}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                          <input
                            type="text"
                            placeholder="Custom product..."
                            className="w-40 px-2 py-1.5 border border-gray-200 rounded text-sm"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && e.target.value.trim()) {
                                const customId = `custom_${e.target.value.trim()}`
                                if (!(pkg.products || []).includes(customId)) {
                                  const customProducts = pkg.customProducts || []
                                  updatePackage(pkg.id, {
                                    products: [...(pkg.products || []), customId],
                                    customProducts: [...customProducts, e.target.value.trim()]
                                  })
                                }
                                e.target.value = ''
                              }
                            }}
                          />
                        </div>
                        {(pkg.products || []).length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {(pkg.products || []).map(productId => {
                              const product = DATA_PRODUCTS.find(p => p.id === productId)
                              const label = product ? product.label : (pkg.customProducts || []).find(c => `custom_${c}` === productId) || productId
                              return (
                                <span
                                  key={productId}
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-brand-100 text-brand-700 rounded text-xs"
                                >
                                  {label}
                                  <button
                                    onClick={() => togglePackageProduct(pkg.id, productId)}
                                    className="hover:text-brand-900"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </span>
                              )
                            })}
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">GSD</label>
                          <select
                            value={pkg.gsd || ''}
                            onChange={(e) => updatePackage(pkg.id, { gsd: e.target.value })}
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                          >
                            {GSD_OPTIONS.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Accuracy</label>
                          <select
                            value={pkg.accuracy || ''}
                            onChange={(e) => updatePackage(pkg.id, { accuracy: e.target.value })}
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                          >
                            {ACCURACY_OPTIONS.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Coordinate System</label>
                          <input
                            type="text"
                            value={pkg.coordinate_system || ''}
                            onChange={(e) => updatePackage(pkg.id, { coordinate_system: e.target.value })}
                            placeholder="e.g., NAD83 UTM 10N"
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Formats</label>
                          <input
                            type="text"
                            value={pkg.formats || ''}
                            onChange={(e) => updatePackage(pkg.id, { formats: e.target.value })}
                            placeholder="e.g., GeoTIFF, LAS"
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
            <button
              onClick={addPackage}
              className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Deliverable Package
            </button>
          </div>
        </NeedsSubSection>

        {/* Site Requirements */}
        <NeedsSubSection title={`Site Requirements (${siteReqs.length})`}>
          <div className="space-y-3">
            {siteReqs.length === 0 ? (
              <p className="text-gray-500 text-sm py-2 text-center">No sites defined yet</p>
            ) : (
              siteReqs.map((site, idx) => (
                <div key={site.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="px-3 py-2 bg-gray-50 flex items-center gap-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => setExpandedSite(expandedSite === site.id ? null : site.id)}
                  >
                    <span className="text-xs font-medium text-gray-400">#{idx + 1}</span>
                    <input
                      type="text"
                      value={site.name}
                      onChange={(e) => { e.stopPropagation(); updateSiteReq(site.id, { name: e.target.value }) }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-2 py-1 text-sm font-medium bg-transparent border-0 focus:ring-0 focus:outline-none"
                      placeholder="Site name..."
                    />
                    {site.area_size && <span className="text-xs text-gray-500">{site.area_size} {site.area_unit}</span>}
                    <button
                      onClick={(e) => { e.stopPropagation(); removeSiteReq(site.id) }}
                      className="p-1 text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {expandedSite === site.id ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                  {expandedSite === site.id && (
                    <div className="p-3 space-y-3 bg-white">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Coverage Area</label>
                          <div className="flex gap-1">
                            <input
                              type="number"
                              value={site.area_size || ''}
                              onChange={(e) => updateSiteReq(site.id, { area_size: e.target.value })}
                              placeholder="Size"
                              className="flex-1 px-2 py-1.5 border border-gray-200 rounded text-sm"
                            />
                            <select
                              value={site.area_unit || 'ha'}
                              onChange={(e) => updateSiteReq(site.id, { area_unit: e.target.value })}
                              className="w-16 px-1 py-1.5 border border-gray-200 rounded text-sm"
                            >
                              <option value="ha">ha</option>
                              <option value="ac">ac</option>
                              <option value="km2">km²</option>
                              <option value="km">km</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Terrain</label>
                          <select
                            value={site.terrain || ''}
                            onChange={(e) => updateSiteReq(site.id, { terrain: e.target.value })}
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                          >
                            <option value="">Select...</option>
                            {TERRAIN_OPTIONS.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Elevation Change</label>
                          <input
                            type="text"
                            value={site.elevation_change || ''}
                            onChange={(e) => updateSiteReq(site.id, { elevation_change: e.target.value })}
                            placeholder="e.g., 50m"
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">GCPs</label>
                          <select
                            value={site.gcp_required || ''}
                            onChange={(e) => updateSiteReq(site.id, { gcp_required: e.target.value })}
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                          >
                            <option value="">Select...</option>
                            <option value="yes">We place</option>
                            <option value="client">Client provides</option>
                            <option value="existing">Existing</option>
                            <option value="ppk">PPK/RTK</option>
                            <option value="no">None</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Access & Conditions</label>
                        <input
                          type="text"
                          value={site.conditions || ''}
                          onChange={(e) => updateSiteReq(site.id, { conditions: e.target.value })}
                          placeholder="Access routes, obstacles, restrictions..."
                          className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
            <button
              onClick={addSiteReq}
              className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Site
            </button>
          </div>
        </NeedsSubSection>

        {/* Regulatory & Airspace */}
        <NeedsSubSection title="Regulatory Considerations" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Operation Type</label>
              <select
                value={needs.operation_type || ''}
                onChange={(e) => updateNeeds({ operation_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Select...</option>
                {OPERATION_TYPE_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Airspace</label>
              <select
                value={needs.airspace || ''}
                onChange={(e) => updateNeeds({ airspace: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Select...</option>
                {AIRSPACE_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Max AGL Required</label>
              <input
                type="text"
                value={needs.max_agl || ''}
                onChange={(e) => updateNeeds({ max_agl: e.target.value })}
                placeholder="e.g., 120m"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Permits & Authorizations Needed</label>
            <div className="flex gap-2 mb-2">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    const current = needs.permits_list || []
                    if (!current.includes(e.target.value)) {
                      updateNeeds({ permits_list: [...current, e.target.value] })
                    }
                  }
                  e.target.value = ''
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                defaultValue=""
              >
                <option value="" disabled>+ Add permit...</option>
                {PERMIT_CATEGORIES.map(cat => (
                  <optgroup key={cat} label={cat}>
                    {PERMIT_TYPES.filter(p => p.category === cat).map(permit => (
                      <option
                        key={permit.id}
                        value={permit.id}
                        disabled={(needs.permits_list || []).includes(permit.id)}
                      >
                        {permit.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <input
                type="text"
                placeholder="Custom permit..."
                className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    const customId = `custom_${Date.now()}`
                    const current = needs.permits_list || []
                    const customPermits = needs.custom_permits || {}
                    updateNeeds({
                      permits_list: [...current, customId],
                      custom_permits: { ...customPermits, [customId]: e.target.value.trim() }
                    })
                    e.target.value = ''
                  }
                }}
              />
            </div>
            {(needs.permits_list || []).length > 0 && (
              <div className="flex flex-wrap gap-2">
                {(needs.permits_list || []).map(permitId => {
                  const permit = PERMIT_TYPES.find(p => p.id === permitId)
                  const label = permit ? permit.label : (needs.custom_permits?.[permitId] || permitId)
                  return (
                    <span
                      key={permitId}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {label}
                      <button
                        onClick={() => updateNeeds({
                          permits_list: (needs.permits_list || []).filter(id => id !== permitId)
                        })}
                        className="hover:text-blue-900"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        </NeedsSubSection>

        {/* Environmental & Timing */}
        <NeedsSubSection title="Environmental & Timing" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Weather Sensitivity</label>
              <select
                value={needs.weather_sensitivity || ''}
                onChange={(e) => updateNeeds({ weather_sensitivity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Select...</option>
                <option value="low">Low - flexible conditions</option>
                <option value="moderate">Moderate - avoid rain/high wind</option>
                <option value="high">High - clear skies needed</option>
                <option value="critical">Critical - specific conditions required</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Lighting Requirements</label>
              <select
                value={needs.lighting || ''}
                onChange={(e) => updateNeeds({ lighting: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Select...</option>
                <option value="any">Any daylight</option>
                <option value="diffuse">Overcast preferred (diffuse)</option>
                <option value="sunny">Sunny preferred (shadows OK)</option>
                <option value="low_sun">Low sun angle needed</option>
                <option value="solar_noon">Solar noon (+/- 2hrs)</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Seasonal / Timing Notes</label>
            <textarea
              value={needs.timing_notes || ''}
              onChange={(e) => updateNeeds({ timing_notes: e.target.value })}
              placeholder="e.g., Before leaf-on, during low tide, avoid nesting season..."
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </NeedsSubSection>

        {/* Key Flags */}
        <div className="pt-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Quick Flags</label>
          <div className="flex flex-wrap gap-2">
            {PROJECT_CONSTRAINTS.map(flag => (
              <button
                key={flag.id}
                onClick={() => toggleArrayItem('flags', flag.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  flags.includes(flag.id)
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {flag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Primary Objective
              <span className="font-normal text-gray-400 ml-1">— What does success look like?</span>
            </label>
            <textarea
              value={needs.objective || ''}
              onChange={(e) => updateNeeds({ objective: e.target.value })}
              placeholder="Clear statement of what the client needs to achieve..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Key Risks / Concerns
              <span className="font-normal text-gray-400 ml-1">— What could go wrong?</span>
            </label>
            <textarea
              value={needs.risks || ''}
              onChange={(e) => updateNeeds({ risks: e.target.value })}
              placeholder="Weather, access, accuracy challenges, timeline..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

      </div>
    </Section>
  )
}

function NotificationContactsSection({ project, onUpdate }) {
  const contacts = project.notification_contacts || []

  const addContact = () => {
    const newContacts = [...contacts, { id: Date.now(), name: '', email: '', phone: '' }]
    onUpdate({ notification_contacts: newContacts })
  }

  const updateContact = (id, field, value) => {
    const newContacts = contacts.map(c =>
      c.id === id ? { ...c, [field]: value } : c
    )
    onUpdate({ notification_contacts: newContacts })
  }

  const removeContact = (id) => {
    onUpdate({ notification_contacts: contacts.filter(c => c.id !== id) })
  }

  return (
    <Section title="Notification Contacts">
      <p className="text-sm text-gray-500 mb-4">
        These contacts will receive GO/NO-GO notifications via email and SMS.
      </p>
      <div className="space-y-3">
        {contacts.length === 0 ? (
          <p className="text-gray-500 text-sm py-4 text-center">No notification contacts added</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-2 font-medium">Name</th>
                <th className="pb-2 font-medium">Email</th>
                <th className="pb-2 font-medium">Phone</th>
                <th className="pb-2 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts.map((c) => (
                <tr key={c.id}>
                  <td className="py-2 pr-3">
                    <input
                      type="text"
                      value={c.name}
                      onChange={(e) => updateContact(c.id, 'name', e.target.value)}
                      placeholder="Name"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                    />
                  </td>
                  <td className="py-2 pr-3">
                    <input
                      type="email"
                      value={c.email}
                      onChange={(e) => updateContact(c.id, 'email', e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                    />
                  </td>
                  <td className="py-2 pr-3">
                    <input
                      type="tel"
                      value={c.phone}
                      onChange={(e) => updateContact(c.id, 'phone', e.target.value)}
                      placeholder="(604) 555-1234"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                    />
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => removeContact(c.id)}
                      className="p-1 text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button
          onClick={addContact}
          className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Contact
        </button>
      </div>
    </Section>
  )
}

function CrewSection({ project, onUpdate, operators, modifiers }) {
  const crew = project.crew || []
  const [showLibrary, setShowLibrary] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const fieldDays = project.field_days || 0

  // Get rate based on rate type from operator
  const getRateForType = (operator, rateType) => {
    switch (rateType) {
      case 'hourly': return operator.rate_hourly || 0
      case 'half_day': return operator.rate_half_day || 0
      case 'daily': return operator.rate_day || 0
      case 'weekly': return operator.rate_week || 0
      case 'travel': return operator.travel_rate_day || 0
      default: return operator.rate_day || 0
    }
  }

  const addFromLibrary = (operator) => {
    const newCrew = [...crew, {
      id: Date.now(),
      source: 'library',
      operator_id: operator.id,
      name: operator.name,
      roles: operator.roles || [],
      role: operator.roles?.[0] || '',
      rate_type: 'daily',
      rate: operator.rate_day || 0,
      // Store all rates so we can switch
      rates: {
        hourly: operator.rate_hourly,
        half_day: operator.rate_half_day,
        daily: operator.rate_day,
        weekly: operator.rate_week,
        travel: operator.travel_rate_day
      },
      quantity: fieldDays || 1,
      modifiers: []
    }]
    onUpdate({ crew: newCrew })
    setShowLibrary(false)
    setSearchTerm('')
  }

  const addManual = () => {
    const newCrew = [...crew, {
      id: Date.now(),
      source: 'manual',
      name: '',
      role: '',
      rate_type: 'daily',
      rate: 0,
      rates: {},
      quantity: fieldDays || 1,
      modifiers: []
    }]
    onUpdate({ crew: newCrew })
  }

  const updateCrewMember = (id, field, value) => {
    const newCrew = crew.map(c => {
      if (c.id !== id) return c
      const updated = { ...c, [field]: value }
      // Auto-update rate when rate_type changes
      if (field === 'rate_type' && c.rates && c.rates[value]) {
        updated.rate = c.rates[value]
      }
      return updated
    })
    onUpdate({ crew: newCrew })
  }

  const toggleModifier = (id, modifier) => {
    const member = crew.find(c => c.id === id)
    if (!member) return
    const mods = member.modifiers || []
    const exists = mods.find(m => m.id === modifier.id)
    if (exists) {
      updateCrewMember(id, 'modifiers', mods.filter(m => m.id !== modifier.id))
    } else {
      updateCrewMember(id, 'modifiers', [...mods, modifier])
    }
  }

  const useFieldDays = (id) => {
    updateCrewMember(id, 'quantity', fieldDays)
  }

  const removeCrewMember = (id) => {
    onUpdate({ crew: crew.filter(c => c.id !== id) })
  }

  const calculateSubtotal = (member) => {
    let base = (member.rate || 0) * (member.quantity || 0)
    // Apply modifiers
    if (member.modifiers && member.modifiers.length > 0) {
      member.modifiers.forEach(mod => {
        if (mod.modifier_type === 'percentage') {
          base *= (1 + mod.value / 100)
        } else if (mod.modifier_type === 'multiplier') {
          base *= mod.value
        } else if (mod.modifier_type === 'flat_fee') {
          base += mod.value
        }
      })
    }
    return Math.round(base * 100) / 100
  }

  const filteredOperators = operators.filter(op => {
    const searchLower = searchTerm.toLowerCase()
    return op.name?.toLowerCase().includes(searchLower) ||
      op.roles?.some(r => r.toLowerCase().includes(searchLower))
  })

  const crewTotal = crew.reduce((sum, m) => sum + calculateSubtotal(m), 0)

  return (
    <Section title="Crew">
      <div className="space-y-4">
        {crew.length === 0 ? (
          <p className="text-gray-500 text-sm py-4 text-center">No crew assigned</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-2 font-medium">Name</th>
                  <th className="pb-2 font-medium">Role</th>
                  <th className="pb-2 font-medium">Rate Type</th>
                  <th className="pb-2 font-medium text-right">Rate</th>
                  <th className="pb-2 font-medium text-right">Qty</th>
                  <th className="pb-2 font-medium text-right">Subtotal</th>
                  <th className="pb-2 w-20"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {crew.map((member) => (
                  <tr key={member.id}>
                    <td className="py-2 pr-2">
                      {member.source === 'library' ? (
                        <span className="font-medium">{member.name}</span>
                      ) : (
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => updateCrewMember(member.id, 'name', e.target.value)}
                          placeholder="Name"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      )}
                    </td>
                    <td className="py-2 pr-2">
                      <select
                        value={member.role}
                        onChange={(e) => updateCrewMember(member.id, 'role', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      >
                        <option value="">Select role...</option>
                        {ROLE_OPTIONS.map(r => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 pr-2">
                      <select
                        value={member.rate_type}
                        onChange={(e) => updateCrewMember(member.id, 'rate_type', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      >
                        {RATE_TYPES.map(r => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="number"
                        value={member.rate}
                        onChange={(e) => updateCrewMember(member.id, 'rate', parseFloat(e.target.value) || 0)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded text-sm text-right"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={member.quantity}
                          onChange={(e) => updateCrewMember(member.id, 'quantity', parseFloat(e.target.value) || 0)}
                          className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-right"
                        />
                        {fieldDays > 0 && (
                          <button
                            onClick={() => useFieldDays(member.id)}
                            className="text-xs text-brand-600 hover:text-brand-700 whitespace-nowrap"
                            title="Use field days"
                          >
                            ={fieldDays}d
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="py-2 pr-2 text-right font-medium">
                      ${calculateSubtotal(member).toLocaleString()}
                    </td>
                    <td className="py-2">
                      <button
                        onClick={() => removeCrewMember(member.id)}
                        className="p-1 text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 font-semibold">
                  <td colSpan={5} className="py-2 text-right">Crew Total:</td>
                  <td className="py-2 text-right">${crewTotal.toLocaleString()}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <button
            onClick={() => setShowLibrary(true)}
            className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
          >
            <Users className="w-4 h-4" />
            Add from Library
          </button>
          <button
            onClick={addManual}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-700 font-medium"
          >
            <UserPlus className="w-4 h-4" />
            Add Manual Entry
          </button>
        </div>

        {/* Library Modal */}
        {showLibrary && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 max-h-[80vh] flex flex-col">
              <div className="p-4 border-b flex items-center justify-between">
                <h4 className="font-semibold">Select Operator</h4>
                <button onClick={() => setShowLibrary(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search operators..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="overflow-y-auto flex-1 p-2">
                {filteredOperators.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center py-4">No operators found</p>
                ) : (
                  <div className="space-y-1">
                    {filteredOperators.map(op => (
                      <button
                        key={op.id}
                        onClick={() => addFromLibrary(op)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{op.name}</span>
                          {op.rate_day && (
                            <span className="text-sm text-gray-500">${op.rate_day}/day</span>
                          )}
                        </div>
                        {op.roles?.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {op.roles.map(role => (
                              <span key={role} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                                {role}
                              </span>
                            ))}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}

function EquipmentSection({ project, onUpdate, equipment, modifiers }) {
  const assigned = project.equipment || []
  const [showLibrary, setShowLibrary] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const fieldDays = project.field_days || 0

  const addFromLibrary = (item) => {
    // Check if it has SORA specs
    const hasSoraSpecs = item.max_dimension || item.max_speed || item.mtow
    const newAssigned = [...assigned, {
      id: Date.now(),
      equipment_id: item.id,
      name: item.name,
      category: item.category || 'Equipment',
      has_sora_specs: hasSoraSpecs,
      max_dimension: item.max_dimension,
      max_speed: item.max_speed,
      mtow: item.mtow,
      rate_type: 'daily',
      rate: item.rate_day || 0,
      // Store all rates
      rates: {
        daily: item.rate_day,
        weekly: item.rate_week
      },
      quantity: fieldDays || 1,
      modifiers: []
    }]
    onUpdate({ equipment: newAssigned })
    setShowLibrary(false)
    setSearchTerm('')
  }

  const updateEquipment = (id, field, value) => {
    const newAssigned = assigned.map(e => {
      if (e.id !== id) return e
      const updated = { ...e, [field]: value }
      // Auto-update rate when rate_type changes
      if (field === 'rate_type' && e.rates && e.rates[value]) {
        updated.rate = e.rates[value]
      }
      return updated
    })
    onUpdate({ equipment: newAssigned })
  }

  const toggleModifier = (id, modifier) => {
    const item = assigned.find(e => e.id === id)
    if (!item) return
    const mods = item.modifiers || []
    const exists = mods.find(m => m.id === modifier.id)
    if (exists) {
      updateEquipment(id, 'modifiers', mods.filter(m => m.id !== modifier.id))
    } else {
      updateEquipment(id, 'modifiers', [...mods, modifier])
    }
  }

  const useFieldDays = (id) => {
    updateEquipment(id, 'quantity', fieldDays)
  }

  const removeEquipment = (id) => {
    onUpdate({ equipment: assigned.filter(e => e.id !== id) })
  }

  const calculateSubtotal = (item) => {
    let base = (item.rate || 0) * (item.quantity || 0)
    // Apply modifiers
    if (item.modifiers && item.modifiers.length > 0) {
      item.modifiers.forEach(mod => {
        if (mod.modifier_type === 'percentage') {
          base *= (1 + mod.value / 100)
        } else if (mod.modifier_type === 'multiplier') {
          base *= mod.value
        } else if (mod.modifier_type === 'flat_fee') {
          base += mod.value
        }
      })
    }
    return Math.round(base * 100) / 100
  }

  const filteredEquipment = equipment.filter(e => {
    const searchLower = searchTerm.toLowerCase()
    return e.name?.toLowerCase().includes(searchLower) ||
      e.category?.toLowerCase().includes(searchLower)
  })

  const equipmentTotal = assigned.reduce((sum, e) => sum + calculateSubtotal(e), 0)

  return (
    <Section title="Equipment">
      <div className="space-y-4">
        {assigned.length === 0 ? (
          <p className="text-gray-500 text-sm py-4 text-center">No equipment assigned</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-2 font-medium">Name</th>
                  <th className="pb-2 font-medium">Category</th>
                  <th className="pb-2 font-medium text-center">SORA</th>
                  <th className="pb-2 font-medium">Rate Type</th>
                  <th className="pb-2 font-medium text-right">Rate</th>
                  <th className="pb-2 font-medium text-right">Qty</th>
                  <th className="pb-2 font-medium text-right">Subtotal</th>
                  <th className="pb-2 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {assigned.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 pr-2 font-medium">{item.name}</td>
                    <td className="py-2 pr-2 text-gray-600">{item.category}</td>
                    <td className="py-2 pr-2 text-center">
                      {item.has_sora_specs ? (
                        <span className="text-green-600" title="Has UA specs for SORA">✓</span>
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </td>
                    <td className="py-2 pr-2">
                      <select
                        value={item.rate_type}
                        onChange={(e) => updateEquipment(item.id, 'rate_type', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      >
                        {RATE_TYPES.map(r => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => updateEquipment(item.id, 'rate', parseFloat(e.target.value) || 0)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded text-sm text-right"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateEquipment(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-right"
                        />
                        {fieldDays > 0 && (
                          <button
                            onClick={() => useFieldDays(item.id)}
                            className="text-xs text-brand-600 hover:text-brand-700 whitespace-nowrap"
                            title="Use field days"
                          >
                            ={fieldDays}d
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="py-2 pr-2 text-right font-medium">
                      ${calculateSubtotal(item).toLocaleString()}
                    </td>
                    <td className="py-2">
                      <button
                        onClick={() => removeEquipment(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 font-semibold">
                  <td colSpan={6} className="py-2 text-right">Equipment Total:</td>
                  <td className="py-2 text-right">${equipmentTotal.toLocaleString()}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        <button
          onClick={() => setShowLibrary(true)}
          className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
        >
          <Package className="w-4 h-4" />
          Add from Library
        </button>

        {/* Library Modal */}
        {showLibrary && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[80vh] flex flex-col">
              <div className="p-4 border-b flex items-center justify-between">
                <h4 className="font-semibold">Select Equipment</h4>
                <button onClick={() => setShowLibrary(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search equipment..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="overflow-y-auto flex-1 p-2">
                {filteredEquipment.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center py-4">No equipment found</p>
                ) : (
                  <div className="space-y-1">
                    {filteredEquipment.map(item => {
                      const hasSoraSpecs = item.max_dimension || item.max_speed || item.mtow
                      return (
                        <button
                          key={item.id}
                          onClick={() => addFromLibrary(item)}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center justify-between"
                        >
                          <div>
                            <span className="font-medium">{item.name}</span>
                            {item.category && (
                              <span className="text-sm text-gray-500 ml-2">({item.category})</span>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            {hasSoraSpecs && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">SORA</span>
                            )}
                            {item.rate_day && (
                              <span className="text-sm text-gray-500">${item.rate_day}/day</span>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}

function ServicesSection({ project, onUpdate, services, modifiers }) {
  const assigned = project.services || []
  const [showLibrary, setShowLibrary] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const addFromLibrary = (service) => {
    const newAssigned = [...assigned, {
      id: Date.now(),
      service_id: service.id,
      name: service.name,
      category: service.category,
      description: '',
      base_unit: service.base_unit || 'day',
      rate: service.base_rate || 0,
      // Store all rates
      rates: {
        base: service.base_rate,
        ...(service.alternate_rates || {})
      },
      alternate_rates: service.alternate_rates || {},
      quantity: 1,
      modifiers: [],
      output_deliverables: service.output_deliverables || []
    }]
    onUpdate({ services: newAssigned })
    setShowLibrary(false)
    setSearchTerm('')
  }

  const updateService = (id, field, value) => {
    const newAssigned = assigned.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    )
    onUpdate({ services: newAssigned })
  }

  const removeService = (id) => {
    onUpdate({ services: assigned.filter(s => s.id !== id) })
  }

  const calculateSubtotal = (service) => {
    let base = (service.rate || 0) * (service.quantity || 0)
    // Apply modifiers
    if (service.modifiers && service.modifiers.length > 0) {
      service.modifiers.forEach(mod => {
        if (mod.type === 'percent') {
          base *= (1 + mod.value / 100)
        } else {
          base += mod.value
        }
      })
    }
    return base
  }

  const filteredServices = services.filter(s => {
    return s.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const servicesTotal = assigned.reduce((sum, s) => sum + calculateSubtotal(s), 0)

  const MODIFIER_PRESETS = [
    { label: 'Rush Job (+15%)', type: 'percent', value: 15 },
    { label: 'Nonprofit (-10%)', type: 'percent', value: -10 },
    { label: 'Friends & Family (-20%)', type: 'percent', value: -20 }
  ]

  const toggleModifier = (serviceId, modifier) => {
    const service = assigned.find(s => s.id === serviceId)
    if (!service) return

    const modifiers = service.modifiers || []
    const exists = modifiers.find(m => m.label === modifier.label)

    if (exists) {
      updateService(serviceId, 'modifiers', modifiers.filter(m => m.label !== modifier.label))
    } else {
      updateService(serviceId, 'modifiers', [...modifiers, modifier])
    }
  }

  return (
    <Section title="Services">
      <div className="space-y-4">
        {assigned.length === 0 ? (
          <p className="text-gray-500 text-sm py-4 text-center">No services assigned</p>
        ) : (
          <div className="space-y-4">
            {assigned.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{service.name}</h4>
                  </div>
                  <button
                    onClick={() => removeService(service.id)}
                    className="p-1 text-gray-400 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-500 mb-1">Project-specific description</label>
                    <input
                      type="text"
                      value={service.description}
                      onChange={(e) => updateService(service.id, 'description', e.target.value)}
                      placeholder="e.g., 50 acre site survey"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Rate</label>
                    <input
                      type="number"
                      value={service.rate}
                      onChange={(e) => updateService(service.id, 'rate', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                    <input
                      type="number"
                      value={service.quantity}
                      onChange={(e) => updateService(service.id, 'quantity', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-gray-500">Modifiers:</span>
                  {MODIFIER_PRESETS.map(mod => {
                    const isActive = (service.modifiers || []).find(m => m.label === mod.label)
                    return (
                      <button
                        key={mod.label}
                        onClick={() => toggleModifier(service.id, mod)}
                        className={`text-xs px-2 py-1 rounded-full border ${
                          isActive
                            ? 'bg-brand-100 border-brand-300 text-brand-700'
                            : 'border-gray-300 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {mod.label}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-3 pt-3 border-t text-right">
                  <span className="text-sm text-gray-500">Subtotal: </span>
                  <span className="font-semibold">${calculateSubtotal(service).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => setShowLibrary(true)}
            className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
          >
            <Briefcase className="w-4 h-4" />
            Add from Library
          </button>
          {assigned.length > 0 && (
            <div className="text-right">
              <span className="text-sm text-gray-500">Services Total: </span>
              <span className="font-semibold text-lg">${servicesTotal.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Library Modal */}
        {showLibrary && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 max-h-[80vh] flex flex-col">
              <div className="p-4 border-b flex items-center justify-between">
                <h4 className="font-semibold">Select Service</h4>
                <button onClick={() => setShowLibrary(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search services..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="overflow-y-auto flex-1 p-2">
                {filteredServices.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center py-4">No services found</p>
                ) : (
                  <div className="space-y-1">
                    {filteredServices.map(service => (
                      <button
                        key={service.id}
                        onClick={() => addFromLibrary(service)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{service.name}</span>
                          {service.base_rate && (
                            <span className="text-sm text-gray-500">
                              ${service.base_rate}/{service.base_unit || 'unit'}
                            </span>
                          )}
                        </div>
                        {service.category && (
                          <span className="text-xs text-gray-500">{service.category}</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}

function CostSummarySection({ project, onUpdate }) {
  // Calculate totals
  const crewTotal = (project.crew || []).reduce((sum, m) => sum + (m.rate || 0) * (m.quantity || 0), 0)
  const equipmentTotal = (project.equipment || []).reduce((sum, e) => sum + (e.rate || 0) * (e.quantity || 0), 0)

  const calculateServiceSubtotal = (service) => {
    let base = (service.rate || 0) * (service.quantity || 0)
    if (service.modifiers && service.modifiers.length > 0) {
      service.modifiers.forEach(mod => {
        if (mod.type === 'percent') {
          base *= (1 + mod.value / 100)
        } else {
          base += mod.value
        }
      })
    }
    return base
  }

  const servicesTotal = (project.services || []).reduce((sum, s) => sum + calculateServiceSubtotal(s), 0)
  const otherCosts = project.other_costs || 0

  const labourTotal = crewTotal
  const materialsTotal = equipmentTotal + servicesTotal
  const subtotal = labourTotal + materialsTotal + otherCosts

  const overheadPercent = project.overhead_percent || 0
  const overhead = subtotal * (overheadPercent / 100)
  const estimatedCost = subtotal + overhead

  const markupPercent = project.markup_percent || 0
  const markup = estimatedCost * (markupPercent / 100)
  const quotedPrice = project.quoted_price || (estimatedCost + markup)

  const actualCost = project.actual_cost || 0
  const variance = estimatedCost - actualCost

  const exportToCSV = () => {
    const rows = [
      ['Category', 'Item', 'Rate', 'Quantity', 'Amount'],
      ['--- LABOUR ---', '', '', '', ''],
      ...(project.crew || []).map(m => [
        'Labour',
        `${m.name} (${m.role || 'No role'})`,
        m.rate,
        m.quantity,
        (m.rate || 0) * (m.quantity || 0)
      ]),
      ['', 'Labour Subtotal', '', '', labourTotal],
      ['--- MATERIALS ---', '', '', '', ''],
      ...(project.equipment || []).map(e => [
        'Equipment',
        e.name,
        e.rate,
        e.quantity,
        (e.rate || 0) * (e.quantity || 0)
      ]),
      ...(project.services || []).map(s => [
        'Service',
        `${s.name}${s.description ? ` - ${s.description}` : ''}`,
        s.rate,
        s.quantity,
        calculateServiceSubtotal(s)
      ]),
      ['', 'Materials Subtotal', '', '', materialsTotal],
      ['--- OTHER ---', '', '', '', ''],
      ['Other', 'Additional Costs', '', '', otherCosts],
      ['', '', '', '', ''],
      ['', 'SUBTOTAL', '', '', subtotal],
      ['', `Overhead (${overheadPercent}%)`, '', '', overhead],
      ['', 'ESTIMATED COST', '', '', estimatedCost],
      ['', `Markup (${markupPercent}%)`, '', '', markup],
      ['', 'QUOTED PRICE', '', '', quotedPrice]
    ]

    const csv = rows.map(row => row.map(cell =>
      typeof cell === 'string' && cell.includes(',') ? `"${cell}"` : cell
    ).join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${project.name || 'project'}_cost_estimate.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Section title="Cost Summary">
      <div className="space-y-6">
        {/* Labour Section */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            Labour
          </h4>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              {(project.crew || []).map(m => (
                <tr key={m.id}>
                  <td className="py-1.5">{m.name} ({m.role || 'No role'})</td>
                  <td className="py-1.5 text-right text-gray-600">
                    ${m.rate} × {m.quantity} {m.rate_type === 'daily' ? 'days' : m.rate_type === 'hourly' ? 'hrs' : 'wks'}
                  </td>
                  <td className="py-1.5 text-right font-medium w-28">
                    ${((m.rate || 0) * (m.quantity || 0)).toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold border-t">
                <td className="py-2">Labour Subtotal</td>
                <td></td>
                <td className="py-2 text-right">${labourTotal.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Materials Section */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
            <Package className="w-4 h-4 text-gray-400" />
            Materials
          </h4>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              {(project.equipment || []).map(e => (
                <tr key={e.id}>
                  <td className="py-1.5">{e.name}</td>
                  <td className="py-1.5 text-right text-gray-600">
                    ${e.rate} × {e.quantity}
                  </td>
                  <td className="py-1.5 text-right font-medium w-28">
                    ${((e.rate || 0) * (e.quantity || 0)).toLocaleString()}
                  </td>
                </tr>
              ))}
              {(project.services || []).map(s => (
                <tr key={s.id}>
                  <td className="py-1.5">
                    {s.name}
                    {s.description && <span className="text-gray-500"> - {s.description}</span>}
                    {(s.modifiers || []).length > 0 && (
                      <span className="text-xs text-brand-600 ml-2">
                        {s.modifiers.map(m => m.label).join(', ')}
                      </span>
                    )}
                  </td>
                  <td className="py-1.5 text-right text-gray-600">
                    ${s.rate} × {s.quantity}
                  </td>
                  <td className="py-1.5 text-right font-medium w-28">
                    ${calculateServiceSubtotal(s).toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold border-t">
                <td className="py-2">Materials Subtotal</td>
                <td></td>
                <td className="py-2 text-right">${materialsTotal.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Other Costs */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Other Costs</h4>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Travel, accommodation, etc.:</span>
            <div className="flex items-center">
              <span className="text-gray-500 mr-1">$</span>
              <input
                type="number"
                value={otherCosts}
                onChange={(e) => onUpdate({ other_costs: parseFloat(e.target.value) || 0 })}
                className="w-32 px-2 py-1 border border-gray-300 rounded text-sm text-right"
              />
            </div>
          </div>
        </div>

        {/* Totals */}
        <div className="border-t pt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-medium">${subtotal.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span>Overhead</span>
              <input
                type="number"
                value={overheadPercent}
                onChange={(e) => onUpdate({ overhead_percent: parseFloat(e.target.value) || 0 })}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-right"
              />
              <span className="text-gray-500">%</span>
            </div>
            <span className="font-medium">${overhead.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-lg font-semibold border-t pt-3">
            <span>Estimated Cost</span>
            <span>${estimatedCost.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span>Markup</span>
              <input
                type="number"
                value={markupPercent}
                onChange={(e) => onUpdate({ markup_percent: parseFloat(e.target.value) || 0 })}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-right"
              />
              <span className="text-gray-500">%</span>
            </div>
            <span className="font-medium">${markup.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between text-lg font-bold bg-brand-50 -mx-6 px-6 py-3 border-t border-brand-100">
            <span>Quoted Price</span>
            <div className="flex items-center">
              <span className="text-gray-500 mr-1">$</span>
              <input
                type="number"
                value={quotedPrice}
                onChange={(e) => onUpdate({ quoted_price: parseFloat(e.target.value) || 0 })}
                className="w-32 px-2 py-1 border border-brand-300 rounded text-right font-bold"
              />
            </div>
          </div>

          {/* Actual vs Estimated (Internal) */}
          <div className="border-t pt-4 mt-4">
            <p className="text-xs text-gray-500 mb-2">Internal tracking (not shown to client)</p>
            <div className="flex items-center justify-between text-sm">
              <span>Actual Cost</span>
              <div className="flex items-center">
                <span className="text-gray-500 mr-1">$</span>
                <input
                  type="number"
                  value={actualCost}
                  onChange={(e) => onUpdate({ actual_cost: parseFloat(e.target.value) || 0 })}
                  className="w-32 px-2 py-1 border border-gray-300 rounded text-sm text-right"
                />
              </div>
            </div>
            {actualCost > 0 && (
              <div className="flex justify-between text-sm mt-2">
                <span>Variance</span>
                <span className={variance >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {variance >= 0 ? '+' : ''}${variance.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Export Button */}
        <div className="border-t pt-4">
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
          >
            <Download className="w-4 h-4" />
            Export to CSV (QuickBooks format)
          </button>
        </div>
      </div>
    </Section>
  )
}

function PostFieldSection({ project, onUpdate }) {
  return (
    <Section title="Post-Field Notes">
      <div className="space-y-4">
        <TextArea
          label="Processing Requirements"
          value={project.processing_notes}
          onChange={(v) => onUpdate({ processing_notes: v })}
          placeholder="Describe processing requirements, software, deliverable specifications..."
          rows={3}
        />
        <TextArea
          label="QA/QC Notes"
          value={project.qaqc_notes}
          onChange={(v) => onUpdate({ qaqc_notes: v })}
          placeholder="Quality assurance and quality control requirements..."
          rows={3}
        />
        <TextArea
          label="Additional Notes"
          value={project.post_field_notes}
          onChange={(v) => onUpdate({ post_field_notes: v })}
          placeholder="Any other post-field notes..."
          rows={3}
        />
      </div>
    </Section>
  )
}

// ============================================
// ADMIN TAB
// ============================================

function AdminTab({ project, onUpdate, operators, equipment, services, modifiers }) {
  return (
    <div className="space-y-8">
      <ProjectOverviewSection project={project} onUpdate={onUpdate} operators={operators} />
      <ClientInfoSection project={project} onUpdate={onUpdate} />
      <NeedsAnalysisSection project={project} onUpdate={onUpdate} />
      <NotificationContactsSection project={project} onUpdate={onUpdate} />
      <CrewSection project={project} onUpdate={onUpdate} operators={operators} modifiers={modifiers} />
      <EquipmentSection project={project} onUpdate={onUpdate} equipment={equipment} modifiers={modifiers} />
      <ServicesSection project={project} onUpdate={onUpdate} services={services} modifiers={modifiers} />
      <CostSummarySection project={project} onUpdate={onUpdate} />
      <PostFieldSection project={project} onUpdate={onUpdate} />

      {/* Calendar Sync */}
      <Section title="Calendar Sync">
        <CalendarSync project={project} />
      </Section>
    </div>
  )
}

// SiteTab is now imported from ../components/SiteTab

// FieldDocsTab is now imported from ../components/FieldDocsTab

// ============================================
// MAIN COMPONENT
// ============================================

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  // State
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('admin')
  const [saveStatus, setSaveStatus] = useState(SAVE_STATUS.IDLE)
  const [menuOpen, setMenuOpen] = useState(false)

  // Library data
  const [operators, setOperators] = useState([])
  const [equipment, setEquipment] = useState([])
  const [services, setServices] = useState([])
  const [modifiers, setModifiers] = useState([])

  // Refs for auto-save
  const projectRef = useRef(project)
  const saveTimeoutRef = useRef(null)

  useEffect(() => {
    projectRef.current = project
  }, [project])

  // Load data
  useEffect(() => {
    loadData()

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [projectId])

  const loadData = async () => {
    setLoading(true)
    try {
      const [projectData, opsData, equipData, servData, modsData] = await Promise.all([
        getProject(projectId),
        getOperators(),
        getEquipment(),
        getServices(),
        getModifiers()
      ])
      setProject(projectData)
      setOperators(opsData || [])
      setEquipment(equipData || [])
      setServices(servData || [])
      setModifiers(modsData || [])
    } catch (err) {
      console.error('Failed to load project:', err)
      setError('Failed to load project')
    } finally {
      setLoading(false)
    }
  }

  // Auto-save with debounce
  const scheduleSave = useCallback((projectData) => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current)
    }

    setSaveStatus(SAVE_STATUS.PENDING)

    saveTimeoutRef.current = setTimeout(async () => {
      setSaveStatus(SAVE_STATUS.SAVING)
      try {
        await updateProject(projectId, projectData)
        setSaveStatus(SAVE_STATUS.SAVED)
        setTimeout(() => {
          setSaveStatus(prev => prev === SAVE_STATUS.SAVED ? SAVE_STATUS.IDLE : prev)
        }, 2000)
      } catch (err) {
        console.error('Failed to save:', err)
        setSaveStatus(SAVE_STATUS.ERROR)
      }
    }, 2000)
  }, [projectId])

  const handleUpdate = useCallback((updates) => {
    setProject(prev => {
      if (!prev) return prev
      const newProject = { ...prev, ...updates }
      projectRef.current = newProject
      scheduleSave(newProject)
      return newProject
    })
  }, [scheduleSave])

  const handleDelete = async () => {
    if (!confirm(`Delete "${project.name}"? This cannot be undone.`)) return

    try {
      await deleteProject(projectId)
      navigate('/projects')
    } catch (err) {
      console.error('Failed to delete:', err)
      alert('Failed to delete project')
    }
  }

  // Handle GO/NO-GO notification sending
  const handleSendNotification = async (notification) => {
    // In production, this would call Twilio API for SMS and an email service
    // For now, log the notification that would be sent
    console.log('Sending notification:', notification)

    const decisionLabels = {
      go: 'GO',
      nogo: 'NO-GO',
      conditional: 'CONDITIONAL'
    }

    const message = `NOTIFICATION FROM AERIA SOLUTIONS FIELD TEAM\n\n` +
      `Project: ${notification.project}\n` +
      `Decision: ${decisionLabels[notification.type] || notification.type}\n` +
      (notification.notes ? `Notes: ${notification.notes}\n` : '') +
      `\nMore information to come.`

    // Log contacts that would receive the notification
    notification.contacts?.forEach(contact => {
      console.log(`Would send to ${contact.name}:`)
      if (contact.email) console.log(`  Email: ${contact.email}`)
      if (contact.phone) console.log(`  SMS: ${contact.phone}`)
      console.log(`  Message: ${message}`)
    })

    // TODO: Integrate with Twilio for SMS and email service for email
    // For now, show a confirmation
    alert(`Notification sent to ${notification.contacts?.length || 0} contacts!\n\nDecision: ${decisionLabels[notification.type]}`)
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
      </div>
    )
  }

  // Error state
  if (error || !project) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Project Not Found</h2>
        <p className="text-gray-500 mb-4">{error}</p>
        <Link to="/projects" className="text-brand-600 hover:text-brand-700 font-medium">
          Back to Projects
        </Link>
      </div>
    )
  }

  const statusOption = STATUS_OPTIONS.find(s => s.value === project.status) || STATUS_OPTIONS[0]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/projects"
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={project.name || ''}
                onChange={(e) => handleUpdate({ name: e.target.value })}
                className="text-2xl font-bold text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0 p-0"
                placeholder="Project Name"
              />
              <select
                value={project.status}
                onChange={(e) => handleUpdate({ status: e.target.value })}
                className={`px-3 py-1 rounded-full text-sm font-medium border-0 ${statusOption.color}`}
              >
                {STATUS_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            {project.client_name && (
              <p className="text-gray-500 mt-1">{project.client_name}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SaveIndicator status={saveStatus} />

          {/* More menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-20 py-1">
                  <button
                    onClick={() => { handleDelete(); setMenuOpen(false) }}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Project
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8">
          {TABS.map(tab => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 border-b-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-brand-600 text-brand-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'admin' && (
          <AdminTab
            project={project}
            onUpdate={handleUpdate}
            operators={operators}
            equipment={equipment}
            services={services}
            modifiers={modifiers}
          />
        )}
        {activeTab === 'site' && (
          <SiteTab project={project} onUpdate={handleUpdate} equipment={project.equipment || []} />
        )}
        {activeTab === 'field' && (
          <FieldDocsTab
            project={project}
            onUpdate={handleUpdate}
            onSendNotification={handleSendNotification}
          />
        )}
      </div>
    </div>
  )
}
