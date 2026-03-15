import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import {
  MapPin, Plus, X, ChevronDown, ChevronUp, AlertTriangle, Info,
  Shield, Navigation, Target, Plane, Users, Radio, Phone, Building2,
  AlertCircle, CheckCircle2, HardHat, Trash2, Copy, Edit2, Eye,
  Layers, Route, Circle, Square, Triangle, Crosshair, Flag,
  Hospital, Flame, ShieldAlert
} from 'lucide-react'
import mapboxgl from 'mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

// ============================================
// CONSTANTS
// ============================================

// You'll need to set your Mapbox token
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || ''

const POPULATION_CATEGORIES = [
  { value: 'controlled', label: 'Controlled Ground Area', description: 'No uninvolved people', density: 0 },
  { value: 'sparsely', label: 'Sparsely Populated', description: '<10 people/km²', density: 1 },
  { value: 'populated', label: 'Populated', description: '10-1500 people/km²', density: 2 },
  { value: 'gathering', label: 'Gathering of People', description: '>1500 people/km²', density: 3 },
  { value: 'assembly', label: 'Assembly of People', description: 'Open-air assemblies', density: 4 }
]

const UA_CATEGORIES = [
  { value: '1m_25ms', label: '≤1m / ≤25m/s', maxDim: 1, maxSpeed: 25 },
  { value: '3m_25ms', label: '≤3m / ≤25m/s', maxDim: 3, maxSpeed: 25 },
  { value: '8m_25ms', label: '≤8m / ≤25m/s', maxDim: 8, maxSpeed: 25 },
  { value: '3m_35ms', label: '≤3m / ≤35m/s', maxDim: 3, maxSpeed: 35 },
  { value: '8m_35ms', label: '≤8m / ≤35m/s', maxDim: 8, maxSpeed: 35 }
]

const GRC_MATRIX = {
  controlled: { '1m_25ms': 1, '3m_25ms': 2, '8m_25ms': 3, '3m_35ms': 3, '8m_35ms': 4 },
  sparsely: { '1m_25ms': 2, '3m_25ms': 3, '8m_25ms': 4, '3m_35ms': 4, '8m_35ms': 5 },
  populated: { '1m_25ms': 4, '3m_25ms': 5, '8m_25ms': 6, '3m_35ms': 6, '8m_35ms': 7 },
  gathering: { '1m_25ms': 6, '3m_25ms': 7, '8m_25ms': 8, '3m_35ms': 8, '8m_35ms': 9 },
  assembly: { '1m_25ms': 8, '3m_25ms': 9, '8m_25ms': 10, '3m_35ms': 10, '8m_35ms': 10 }
}

const GROUND_MITIGATIONS = {
  M1A: {
    name: 'M1A - Strategic Mitigation',
    description: 'Reduce number of people at risk through operational restrictions',
    reductions: { none: 0, low: 0, medium: -1, high: -2 },
    guidance: {
      low: 'Basic operational procedures in place',
      medium: 'Documented procedures, trained personnel, area assessment',
      high: 'Comprehensive risk management, restricted access, monitoring systems'
    }
  },
  M1B: {
    name: 'M1B - Sheltering/Shielding',
    description: 'People protected by structures or terrain',
    reductions: { none: 0, low: 0, medium: -1, high: -2 },
    guidance: {
      low: 'Some natural protection available',
      medium: 'Most people in vehicles or structures',
      high: 'All people in robust structures providing full protection'
    }
  },
  M2: {
    name: 'M2 - Effects Reduction (Parachute/FTS)',
    description: 'Reduce impact energy through parachute, airbag, or FTS',
    reductions: { none: 0, low: -1, medium: -2, high: -4 },
    guidance: {
      low: 'Basic energy reduction system',
      medium: 'Tested system reducing energy by >80%',
      high: 'Certified FTS or parachute with high reliability'
    }
  }
}

const ARC_LEVELS = [
  { value: 'ARC-a', label: 'ARC-a', description: 'Atypical airspace, very low risk', color: 'bg-green-100 text-green-700' },
  { value: 'ARC-b', label: 'ARC-b', description: 'Low density airspace', color: 'bg-lime-100 text-lime-700' },
  { value: 'ARC-c', label: 'ARC-c', description: 'Medium density airspace', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'ARC-d', label: 'ARC-d', description: 'High density airspace', color: 'bg-red-100 text-red-700' }
]

const TMPR_OPTIONS = [
  { value: 'VLOS', label: 'VLOS', reduction: 1, description: 'Visual Line of Sight operations' },
  { value: 'EVLOS', label: 'EVLOS', reduction: 1, description: 'Extended Visual Line of Sight' },
  { value: 'BVLOS', label: 'BVLOS', reduction: 0, description: 'Beyond Visual Line of Sight' }
]

const SAIL_MATRIX = {
  1: { 'ARC-a': 'I', 'ARC-b': 'II', 'ARC-c': 'IV', 'ARC-d': 'VI' },
  2: { 'ARC-a': 'I', 'ARC-b': 'II', 'ARC-c': 'IV', 'ARC-d': 'VI' },
  3: { 'ARC-a': 'II', 'ARC-b': 'II', 'ARC-c': 'IV', 'ARC-d': 'VI' },
  4: { 'ARC-a': 'III', 'ARC-b': 'III', 'ARC-c': 'IV', 'ARC-d': 'VI' },
  5: { 'ARC-a': 'IV', 'ARC-b': 'IV', 'ARC-c': 'IV', 'ARC-d': 'VI' },
  6: { 'ARC-a': 'V', 'ARC-b': 'V', 'ARC-c': 'V', 'ARC-d': 'VI' },
  7: { 'ARC-a': 'VI', 'ARC-b': 'VI', 'ARC-c': 'VI', 'ARC-d': 'VI' }
}

const SAIL_COLORS = {
  'I': 'bg-green-500',
  'II': 'bg-lime-500',
  'III': 'bg-yellow-500',
  'IV': 'bg-orange-500',
  'V': 'bg-red-500',
  'VI': 'bg-red-700'
}

const HAZARD_CATEGORIES = [
  { value: 'wildlife', label: 'Wildlife' },
  { value: 'terrain', label: 'Terrain' },
  { value: 'weather', label: 'Weather' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'people', label: 'People' },
  { value: 'airspace', label: 'Airspace' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'other', label: 'Other' }
]

const CONTROL_TYPES = [
  { value: 'eliminate', label: 'Eliminate' },
  { value: 'substitute', label: 'Substitute' },
  { value: 'engineering', label: 'Engineering Control' },
  { value: 'administrative', label: 'Administrative Control' },
  { value: 'ppe', label: 'PPE' },
  { value: 'monitor', label: 'Monitor/Observe' }
]

const PPE_ITEMS = [
  { id: 'hivis', label: 'Hi-Vis Vest' },
  { id: 'safety_glasses', label: 'Safety Glasses' },
  { id: 'hard_hat', label: 'Hard Hat' },
  { id: 'steel_toe', label: 'Steel-toe Boots' },
  { id: 'hearing', label: 'Hearing Protection' },
  { id: 'gloves', label: 'Work Gloves' },
  { id: 'first_aid', label: 'First Aid Kit' },
  { id: 'fire_ext', label: 'Fire Extinguisher' },
  { id: 'sun_protection', label: 'Sun Protection' },
  { id: 'bug_spray', label: 'Insect Repellent' }
]

// ============================================
// HELPER COMPONENTS
// ============================================

function Section({ title, children, defaultOpen = true, badge = null }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-medium bg-brand-100 text-brand-700 rounded-full">
              {badge}
            </span>
          )}
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && <div className="p-6">{children}</div>}
    </div>
  )
}

function InfoTooltip({ children }) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <Info className="w-4 h-4" />
      </button>
      {show && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg">
          {children}
        </div>
      )}
    </div>
  )
}

// ============================================
// SITE SELECTOR
// ============================================

function SiteSelector({ sites, activeSiteId, onSelectSite, onAddSite, onRemoveSite, onRenameSite }) {
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')

  const startEdit = (site) => {
    setEditingId(site.id)
    setEditName(site.name)
  }

  const saveEdit = () => {
    if (editName.trim()) {
      onRenameSite(editingId, editName.trim())
    }
    setEditingId(null)
    setEditName('')
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {sites.map((site, idx) => {
        const isActive = site.id === activeSiteId
        const isEditing = editingId === site.id
        const color = `hsl(${idx * 60}, 70%, 50%)`

        return (
          <div key={site.id} className="flex items-center">
            {isEditing ? (
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onBlur={saveEdit}
                  onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
                  className="px-2 py-1 border rounded text-sm w-24"
                  autoFocus
                />
              </div>
            ) : (
              <button
                onClick={() => onSelectSite(site.id)}
                onDoubleClick={() => startEdit(site)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: isActive ? 'white' : color }} />
                {site.name}
              </button>
            )}
            {sites.length > 1 && (
              <button
                onClick={() => onRemoveSite(site.id)}
                className="ml-1 p-1 text-gray-400 hover:text-red-500"
                title="Remove site"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        )
      })}
      <button
        onClick={onAddSite}
        className="flex items-center gap-1 px-3 py-1.5 text-sm text-brand-600 hover:text-brand-700 font-medium"
      >
        <Plus className="w-4 h-4" />
        Add Site
      </button>
    </div>
  )
}

// ============================================
// MAP COMPONENT
// ============================================

function SiteMap({ site, onUpdateSite, allSites }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const draw = useRef(null)
  const [mapStyle, setMapStyle] = useState('satellite-streets-v12')
  const [mapLoaded, setMapLoaded] = useState(false)

  const mapStyles = [
    { value: 'satellite-streets-v12', label: 'Satellite' },
    { value: 'streets-v12', label: 'Streets' },
    { value: 'outdoors-v12', label: 'Topographic' },
    { value: 'light-v11', label: 'Light' }
  ]

  useEffect(() => {
    if (!mapContainer.current || !MAPBOX_TOKEN) return

    mapboxgl.accessToken = MAPBOX_TOKEN

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/${mapStyle}`,
      center: site?.center || [-123.1, 49.25],
      zoom: site?.zoom || 12
    })

    draw.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        line_string: true,
        point: true,
        trash: true
      }
    })

    map.current.addControl(draw.current, 'top-left')
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.current.on('load', () => {
      setMapLoaded(true)
      // Load existing elements
      if (site?.elements?.length > 0) {
        const featureCollection = {
          type: 'FeatureCollection',
          features: site.elements.map(el => ({
            type: 'Feature',
            id: el.id,
            geometry: el.geometry,
            properties: el.properties || {}
          }))
        }
        draw.current.set(featureCollection)
      }
    })

    map.current.on('draw.create', handleDrawUpdate)
    map.current.on('draw.update', handleDrawUpdate)
    map.current.on('draw.delete', handleDrawDelete)

    return () => {
      map.current?.remove()
    }
  }, [MAPBOX_TOKEN])

  useEffect(() => {
    if (map.current && mapLoaded) {
      map.current.setStyle(`mapbox://styles/mapbox/${mapStyle}`)
    }
  }, [mapStyle, mapLoaded])

  const handleDrawUpdate = useCallback((e) => {
    const allFeatures = draw.current.getAll()
    const elements = allFeatures.features.map(f => ({
      id: f.id,
      type: f.geometry.type,
      geometry: f.geometry,
      properties: f.properties || {},
      name: f.properties?.name || `Element ${f.id.slice(0, 6)}`,
      color: f.properties?.color || '#3B82F6'
    }))
    onUpdateSite({ elements })
  }, [onUpdateSite])

  const handleDrawDelete = useCallback((e) => {
    const deletedIds = e.features.map(f => f.id)
    const remaining = (site?.elements || []).filter(el => !deletedIds.includes(el.id))
    onUpdateSite({ elements: remaining })
  }, [site?.elements, onUpdateSite])

  if (!MAPBOX_TOKEN) {
    return (
      <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <p className="text-gray-600 font-medium">Mapbox Token Required</p>
          <p className="text-sm text-gray-500 mt-1">
            Add VITE_MAPBOX_TOKEN to your .env file
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {/* Style Switcher */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Map Style:</span>
        {mapStyles.map(style => (
          <button
            key={style.value}
            onClick={() => setMapStyle(style.value)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              mapStyle === style.value
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {style.label}
          </button>
        ))}
      </div>

      {/* Map Container */}
      <div ref={mapContainer} className="h-[500px] rounded-lg overflow-hidden border border-gray-200" />

      {/* Drawing Instructions */}
      <p className="text-xs text-gray-500">
        Use the drawing tools on the map to add site boundaries, flight areas, obstacles, and points.
        Click elements to select, drag to move, double-click to edit vertices.
      </p>
    </div>
  )
}

// ============================================
// ELEMENT TABLES
// ============================================

function ElementTables({ elements, onUpdateElement, onDeleteElement, onHighlight }) {
  const groupedElements = useMemo(() => {
    const groups = {
      polygons: [],
      lines: [],
      points: []
    }

    ;(elements || []).forEach(el => {
      if (el.type === 'Polygon') groups.polygons.push(el)
      else if (el.type === 'LineString') groups.lines.push(el)
      else if (el.type === 'Point') groups.points.push(el)
    })

    return groups
  }, [elements])

  const getCenter = (geometry) => {
    if (geometry.type === 'Point') {
      return geometry.coordinates
    }
    if (geometry.type === 'Polygon') {
      const coords = geometry.coordinates[0]
      const lat = coords.reduce((sum, c) => sum + c[1], 0) / coords.length
      const lng = coords.reduce((sum, c) => sum + c[0], 0) / coords.length
      return [lng.toFixed(5), lat.toFixed(5)]
    }
    if (geometry.type === 'LineString') {
      const mid = Math.floor(geometry.coordinates.length / 2)
      return geometry.coordinates[mid]
    }
    return [0, 0]
  }

  const ElementTable = ({ title, items, icon: Icon }) => {
    if (items.length === 0) return null

    return (
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Icon className="w-4 h-4" />
          {title} ({items.length})
        </h4>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-2 w-8">Color</th>
              <th className="pb-2">Name</th>
              <th className="pb-2">Coordinates</th>
              <th className="pb-2">Notes</th>
              <th className="pb-2 w-20"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map(el => {
              const center = getCenter(el.geometry)
              return (
                <tr
                  key={el.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => onHighlight?.(el.id)}
                >
                  <td className="py-2">
                    <input
                      type="color"
                      value={el.color || '#3B82F6'}
                      onChange={(e) => onUpdateElement(el.id, { color: e.target.value })}
                      className="w-6 h-6 rounded cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className="py-2">
                    <input
                      type="text"
                      value={el.name || ''}
                      onChange={(e) => onUpdateElement(el.id, { name: e.target.value })}
                      className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      placeholder="Name this element"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className="py-2 text-gray-500 text-xs font-mono">
                    {Array.isArray(center) ? `${center[1]}, ${center[0]}` : '-'}
                  </td>
                  <td className="py-2">
                    <input
                      type="text"
                      value={el.properties?.notes || ''}
                      onChange={(e) => onUpdateElement(el.id, { properties: { ...el.properties, notes: e.target.value } })}
                      className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      placeholder="Notes"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className="py-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); onDeleteElement(el.id) }}
                      className="p-1 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <ElementTable title="Areas & Boundaries" items={groupedElements.polygons} icon={Square} />
      <ElementTable title="Routes & Paths" items={groupedElements.lines} icon={Route} />
      <ElementTable title="Points" items={groupedElements.points} icon={MapPin} />

      {elements?.length === 0 && (
        <p className="text-gray-500 text-sm text-center py-4">
          No map elements yet. Use the drawing tools above to add elements.
        </p>
      )}
    </div>
  )
}

// ============================================
// SORA CALCULATOR
// ============================================

function SORACalculator({ site, onUpdateSite, equipment }) {
  const sora = site?.sora || {}

  const updateSORA = (updates) => {
    onUpdateSite({ sora: { ...sora, ...updates } })
  }

  // Get UA characteristics from equipment
  const soraEquipment = (equipment || []).filter(e => e.has_sora_specs)
  const selectedEquipmentId = sora.equipment_id
  const selectedEquipment = soraEquipment.find(e => e.equipment_id === selectedEquipmentId)

  // Calculate iGRC
  const population = sora.population || 'populated'
  const uaCategory = sora.ua_category || '3m_25ms'
  const iGRC = GRC_MATRIX[population]?.[uaCategory] || 5

  // Calculate fGRC with mitigations
  const mitigations = sora.mitigations || {}
  let mitigationReduction = 0
  Object.entries(GROUND_MITIGATIONS).forEach(([key, config]) => {
    const level = mitigations[key]?.level || 'none'
    mitigationReduction += config.reductions[level] || 0
  })
  const fGRC = Math.max(1, iGRC + mitigationReduction)

  // ARC and TMPR
  const initialARC = sora.initial_arc || 'ARC-b'
  const tmprType = sora.tmpr?.type || 'VLOS'
  const tmprOption = TMPR_OPTIONS.find(t => t.value === tmprType)
  const arcIndex = ARC_LEVELS.findIndex(a => a.value === initialARC)
  const residualArcIndex = Math.max(0, arcIndex - (tmprOption?.reduction || 0))
  const residualARC = ARC_LEVELS[residualArcIndex]?.value || 'ARC-a'

  // Calculate SAIL
  const sail = fGRC <= 7 ? SAIL_MATRIX[fGRC]?.[residualARC] || 'VI' : 'Outside SORA'

  return (
    <div className="space-y-6">
      {/* Visual Flow Diagram */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="text-center px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="text-xs text-gray-500">iGRC</div>
            <div className="text-2xl font-bold text-gray-900">{iGRC}</div>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="text-xs text-gray-500">Mitigations</div>
            <div className="text-2xl font-bold text-green-600">{mitigationReduction}</div>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="text-xs text-gray-500">fGRC</div>
            <div className="text-2xl font-bold text-gray-900">{fGRC}</div>
          </div>
          <div className="text-gray-400">+</div>
          <div className="text-center px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="text-xs text-gray-500">ARC</div>
            <div className="text-lg font-bold text-gray-900">{residualARC}</div>
          </div>
          <div className="text-gray-400">=</div>
          <div className={`text-center px-6 py-3 rounded-lg ${SAIL_COLORS[sail] || 'bg-gray-500'} text-white`}>
            <div className="text-xs opacity-80">SAIL</div>
            <div className="text-3xl font-bold">{sail}</div>
          </div>
        </div>
      </div>

      {/* Equipment Selection */}
      {soraEquipment.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Aircraft for SORA Assessment
          </label>
          <select
            value={selectedEquipmentId || ''}
            onChange={(e) => updateSORA({ equipment_id: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select aircraft...</option>
            {soraEquipment.map(e => (
              <option key={e.equipment_id} value={e.equipment_id}>
                {e.name} {e.max_dimension && `(${e.max_dimension}m, ${e.max_speed}m/s)`}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Population Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Population Category
        </label>
        <select
          value={population}
          onChange={(e) => updateSORA({ population: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          {POPULATION_CATEGORIES.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label} - {cat.description}
            </option>
          ))}
        </select>
      </div>

      {/* UA Characteristics */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          UA Characteristics (Max Dimension / Max Speed)
        </label>
        <select
          value={uaCategory}
          onChange={(e) => updateSORA({ ua_category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          {UA_CATEGORIES.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
      </div>

      {/* Ground Mitigations */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Ground Mitigations</h4>
        <div className="space-y-4">
          {Object.entries(GROUND_MITIGATIONS).map(([key, config]) => {
            const mitigation = mitigations[key] || {}
            return (
              <div key={key} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{config.name}</span>
                      <InfoTooltip>
                        <p className="font-medium mb-1">{config.description}</p>
                        <ul className="space-y-1">
                          <li><strong>Low:</strong> {config.guidance.low}</li>
                          <li><strong>Medium:</strong> {config.guidance.medium}</li>
                          <li><strong>High:</strong> {config.guidance.high}</li>
                        </ul>
                      </InfoTooltip>
                    </div>
                    <p className="text-sm text-gray-500">{config.description}</p>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {config.reductions[mitigation.level || 'none'] || 0} GRC
                  </span>
                </div>

                <div className="flex gap-2 mb-2">
                  {['none', 'low', 'medium', 'high'].map(level => (
                    <button
                      key={level}
                      onClick={() => updateSORA({
                        mitigations: { ...mitigations, [key]: { ...mitigation, level } }
                      })}
                      className={`px-3 py-1 text-sm rounded-full capitalize ${
                        (mitigation.level || 'none') === level
                          ? 'bg-brand-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>

                {mitigation.level && mitigation.level !== 'none' && (
                  <input
                    type="text"
                    value={mitigation.evidence || ''}
                    onChange={(e) => updateSORA({
                      mitigations: { ...mitigations, [key]: { ...mitigation, evidence: e.target.value } }
                    })}
                    placeholder="Evidence / justification..."
                    className="w-full px-3 py-2 border border-gray-200 rounded text-sm"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Air Risk */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Air Risk Classification</h4>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Initial ARC</label>
            <select
              value={initialARC}
              onChange={(e) => updateSORA({ initial_arc: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {ARC_LEVELS.map(arc => (
                <option key={arc.value} value={arc.value}>
                  {arc.label} - {arc.description}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">TMPR Type</label>
            <select
              value={tmprType}
              onChange={(e) => updateSORA({ tmpr: { ...sora.tmpr, type: e.target.value } })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {TMPR_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label} (-{opt.reduction} ARC)
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
          <span className="text-sm text-gray-600">Residual ARC:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            ARC_LEVELS.find(a => a.value === residualARC)?.color || ''
          }`}>
            {residualARC}
          </span>
        </div>
      </div>

      {/* fGRC > 7 Warning */}
      {fGRC > 7 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-800">Outside SORA Scope</p>
            <p className="text-sm text-red-700 mt-1">
              Final GRC of {fGRC} exceeds SORA limit of 7. Additional mitigations or approval process required.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// HAZARD TABLE
// ============================================

function HazardTable({ site, onUpdateSite, allSites }) {
  const hazards = site?.hazards || []

  const addHazard = () => {
    const newHazards = [...hazards, {
      id: Date.now(),
      site_id: site.id,
      applies_to_all: false,
      category: 'other',
      description: '',
      likelihood: 2,
      severity: 2,
      control_type: 'administrative',
      control_description: ''
    }]
    onUpdateSite({ hazards: newHazards })
  }

  const updateHazard = (id, field, value) => {
    const newHazards = hazards.map(h =>
      h.id === id ? { ...h, [field]: value } : h
    )
    onUpdateSite({ hazards: newHazards })
  }

  const removeHazard = (id) => {
    onUpdateSite({ hazards: hazards.filter(h => h.id !== id) })
  }

  const getRiskScore = (l, s) => l * s
  const getRiskColor = (score) => {
    if (score <= 4) return 'bg-green-100 text-green-700'
    if (score <= 9) return 'bg-yellow-100 text-yellow-700'
    if (score <= 15) return 'bg-orange-100 text-orange-700'
    return 'bg-red-100 text-red-700'
  }
  const getRiskLabel = (score) => {
    if (score <= 4) return 'Low'
    if (score <= 9) return 'Med'
    if (score <= 15) return 'High'
    return 'Crit'
  }

  // Estimate residual (simple reduction)
  const getResidual = (score, controlType) => {
    const reductions = {
      eliminate: 0.1,
      substitute: 0.3,
      engineering: 0.4,
      administrative: 0.6,
      ppe: 0.7,
      monitor: 0.8
    }
    return Math.ceil(score * (reductions[controlType] || 0.8))
  }

  return (
    <div className="space-y-4">
      {hazards.length === 0 ? (
        <p className="text-gray-500 text-sm py-4 text-center">No hazards identified yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2 w-8">All</th>
                <th className="pb-2">Category</th>
                <th className="pb-2">Hazard</th>
                <th className="pb-2 w-12">L</th>
                <th className="pb-2 w-12">S</th>
                <th className="pb-2 w-16">Risk</th>
                <th className="pb-2">Control</th>
                <th className="pb-2 w-16">Res.</th>
                <th className="pb-2 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {hazards.map(h => {
                const risk = getRiskScore(h.likelihood, h.severity)
                const residual = getResidual(risk, h.control_type)
                return (
                  <tr key={h.id}>
                    <td className="py-2">
                      <input
                        type="checkbox"
                        checked={h.applies_to_all}
                        onChange={(e) => updateHazard(h.id, 'applies_to_all', e.target.checked)}
                        className="rounded"
                        title="Applies to all sites"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <select
                        value={h.category}
                        onChange={(e) => updateHazard(h.id, 'category', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      >
                        {HAZARD_CATEGORIES.map(c => (
                          <option key={c.value} value={c.value}>{c.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="text"
                        value={h.description}
                        onChange={(e) => updateHazard(h.id, 'description', e.target.value)}
                        placeholder="Describe hazard..."
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2 pr-1">
                      <select
                        value={h.likelihood}
                        onChange={(e) => updateHazard(h.id, 'likelihood', parseInt(e.target.value))}
                        className="w-14 px-1 py-1 border border-gray-200 rounded text-sm text-center"
                      >
                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </td>
                    <td className="py-2 pr-1">
                      <select
                        value={h.severity}
                        onChange={(e) => updateHazard(h.id, 'severity', parseInt(e.target.value))}
                        className="w-14 px-1 py-1 border border-gray-200 rounded text-sm text-center"
                      >
                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </td>
                    <td className="py-2 pr-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${getRiskColor(risk)}`}>
                        {risk} {getRiskLabel(risk)}
                      </span>
                    </td>
                    <td className="py-2 pr-2">
                      <div className="flex gap-1">
                        <select
                          value={h.control_type}
                          onChange={(e) => updateHazard(h.id, 'control_type', e.target.value)}
                          className="w-28 px-1 py-1 border border-gray-200 rounded text-xs"
                        >
                          {CONTROL_TYPES.map(c => (
                            <option key={c.value} value={c.value}>{c.label}</option>
                          ))}
                        </select>
                        <input
                          type="text"
                          value={h.control_description}
                          onChange={(e) => updateHazard(h.id, 'control_description', e.target.value)}
                          placeholder="Control details..."
                          className="flex-1 px-2 py-1 border border-gray-200 rounded text-sm"
                        />
                      </div>
                    </td>
                    <td className="py-2 pr-2">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${getRiskColor(residual)}`}>
                        {residual}
                      </span>
                    </td>
                    <td className="py-2">
                      <button
                        onClick={() => removeHazard(h.id)}
                        className="p-1 text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={addHazard}
        className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
      >
        <Plus className="w-4 h-4" />
        Add Hazard
      </button>
    </div>
  )
}

// ============================================
// EMERGENCY PLANNING
// ============================================

function EmergencyPlanning({ site, onUpdateSite }) {
  const emergency = site?.emergency || {}

  const updateEmergency = (updates) => {
    onUpdateSite({ emergency: { ...emergency, ...updates } })
  }

  // Contacts
  const contacts = emergency.contacts || []
  const addContact = () => {
    updateEmergency({ contacts: [...contacts, { id: Date.now(), role: '', name: '', phone: '' }] })
  }
  const updateContact = (id, field, value) => {
    updateEmergency({ contacts: contacts.map(c => c.id === id ? { ...c, [field]: value } : c) })
  }
  const removeContact = (id) => {
    updateEmergency({ contacts: contacts.filter(c => c.id !== id) })
  }

  // Facilities
  const facilities = emergency.facilities || []
  const addFacility = () => {
    updateEmergency({ facilities: [...facilities, { id: Date.now(), type: 'hospital', name: '', address: '', distance: '', phone: '' }] })
  }
  const updateFacility = (id, field, value) => {
    updateEmergency({ facilities: facilities.map(f => f.id === id ? { ...f, [field]: value } : f) })
  }
  const removeFacility = (id) => {
    updateEmergency({ facilities: facilities.filter(f => f.id !== id) })
  }

  // PPE
  const ppe = emergency.ppe || []
  const togglePPE = (itemId) => {
    if (ppe.includes(itemId)) {
      updateEmergency({ ppe: ppe.filter(p => p !== itemId) })
    } else {
      updateEmergency({ ppe: [...ppe, itemId] })
    }
  }

  // Comms
  const comms = emergency.comms || {}
  const updateComms = (field, value) => {
    updateEmergency({ comms: { ...comms, [field]: value } })
  }

  return (
    <div className="space-y-8">
      {/* Emergency Contacts */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Emergency Contacts
        </h4>
        <div className="space-y-2">
          {contacts.length === 0 ? (
            <p className="text-gray-500 text-sm py-2">No emergency contacts added</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-2">Role</th>
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Phone</th>
                  <th className="pb-2 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {contacts.map(c => (
                  <tr key={c.id}>
                    <td className="py-2 pr-2">
                      <input
                        type="text"
                        value={c.role}
                        onChange={(e) => updateContact(c.id, 'role', e.target.value)}
                        placeholder="e.g., ATC, 911, Site Contact"
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="text"
                        value={c.name}
                        onChange={(e) => updateContact(c.id, 'name', e.target.value)}
                        placeholder="Name"
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="tel"
                        value={c.phone}
                        onChange={(e) => updateContact(c.id, 'phone', e.target.value)}
                        placeholder="Phone number"
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2">
                      <button onClick={() => removeContact(c.id)} className="p-1 text-gray-400 hover:text-red-500">
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button onClick={addContact} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700">
            <Plus className="w-4 h-4" /> Add Contact
          </button>
        </div>
      </div>

      {/* Emergency Facilities */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          <Hospital className="w-4 h-4" />
          Emergency Facilities
        </h4>
        <div className="space-y-2">
          {facilities.length === 0 ? (
            <p className="text-gray-500 text-sm py-2">No facilities added</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-2 w-24">Type</th>
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Address</th>
                  <th className="pb-2 w-20">Distance</th>
                  <th className="pb-2">Phone</th>
                  <th className="pb-2 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {facilities.map(f => (
                  <tr key={f.id}>
                    <td className="py-2 pr-2">
                      <select
                        value={f.type}
                        onChange={(e) => updateFacility(f.id, 'type', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      >
                        <option value="hospital">Hospital</option>
                        <option value="fire">Fire Station</option>
                        <option value="police">Police</option>
                        <option value="other">Other</option>
                      </select>
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="text"
                        value={f.name}
                        onChange={(e) => updateFacility(f.id, 'name', e.target.value)}
                        placeholder="Facility name"
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="text"
                        value={f.address}
                        onChange={(e) => updateFacility(f.id, 'address', e.target.value)}
                        placeholder="Address"
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="text"
                        value={f.distance}
                        onChange={(e) => updateFacility(f.id, 'distance', e.target.value)}
                        placeholder="e.g., 5 km"
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="tel"
                        value={f.phone}
                        onChange={(e) => updateFacility(f.id, 'phone', e.target.value)}
                        placeholder="Phone"
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="py-2">
                      <button onClick={() => removeFacility(f.id)} className="p-1 text-gray-400 hover:text-red-500">
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button onClick={addFacility} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700">
            <Plus className="w-4 h-4" /> Add Facility
          </button>
        </div>
      </div>

      {/* PPE Checklist */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          <HardHat className="w-4 h-4" />
          PPE Requirements
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {PPE_ITEMS.map(item => (
            <label
              key={item.id}
              className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                ppe.includes(item.id)
                  ? 'bg-brand-50 border-brand-300'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="checkbox"
                checked={ppe.includes(item.id)}
                onChange={() => togglePPE(item.id)}
                className="rounded text-brand-600"
              />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Communications */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          <Radio className="w-4 h-4" />
          Communications Plan
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Primary Radio Frequency</label>
            <input
              type="text"
              value={comms.primary_freq || ''}
              onChange={(e) => updateComms('primary_freq', e.target.value)}
              placeholder="e.g., 123.45 MHz"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Backup Frequency</label>
            <input
              type="text"
              value={comms.backup_freq || ''}
              onChange={(e) => updateComms('backup_freq', e.target.value)}
              placeholder="e.g., 121.50 MHz"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Team Channel</label>
            <input
              type="text"
              value={comms.team_channel || ''}
              onChange={(e) => updateComms('team_channel', e.target.value)}
              placeholder="e.g., Channel 5"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Check-in Interval</label>
            <input
              type="text"
              value={comms.checkin_interval || ''}
              onChange={(e) => updateComms('checkin_interval', e.target.value)}
              placeholder="e.g., Every 30 minutes"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Emergency Signals:</strong> MAYDAY (life threat), PAN PAN (urgency), ABORT (stop operations)
          </p>
        </div>
      </div>

      {/* Site-Specific Notes */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Site-Specific Notes</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Entry Plan</label>
            <textarea
              value={emergency.entry_plan || ''}
              onChange={(e) => updateEmergency({ entry_plan: e.target.value })}
              placeholder="Access routes, gate codes, permissions required..."
              rows={2}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">On-site Requirements</label>
            <textarea
              value={emergency.onsite_requirements || ''}
              onChange={(e) => updateEmergency({ onsite_requirements: e.target.value })}
              placeholder="Sign-in procedures, safety briefings, site rules..."
              rows={2}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN SITE TAB COMPONENT
// ============================================

export default function SiteTab({ project, onUpdate, equipment }) {
  const sites = project.sites || [{ id: 'site-1', name: 'Site 1' }]
  const [activeSiteId, setActiveSiteId] = useState(sites[0]?.id || 'site-1')

  const activeSite = sites.find(s => s.id === activeSiteId) || sites[0]

  const updateSites = (newSites) => {
    onUpdate({ sites: newSites })
  }

  const addSite = () => {
    const newSite = {
      id: `site-${Date.now()}`,
      name: `Site ${sites.length + 1}`
    }
    updateSites([...sites, newSite])
    setActiveSiteId(newSite.id)
  }

  const removeSite = (siteId) => {
    if (sites.length <= 1) return
    const newSites = sites.filter(s => s.id !== siteId)
    updateSites(newSites)
    if (activeSiteId === siteId) {
      setActiveSiteId(newSites[0].id)
    }
  }

  const renameSite = (siteId, newName) => {
    updateSites(sites.map(s => s.id === siteId ? { ...s, name: newName } : s))
  }

  const updateActiveSite = (updates) => {
    updateSites(sites.map(s => s.id === activeSiteId ? { ...s, ...updates } : s))
  }

  const updateElement = (elementId, updates) => {
    const elements = activeSite?.elements || []
    const newElements = elements.map(el =>
      el.id === elementId ? { ...el, ...updates } : el
    )
    updateActiveSite({ elements: newElements })
  }

  const deleteElement = (elementId) => {
    const elements = activeSite?.elements || []
    updateActiveSite({ elements: elements.filter(el => el.id !== elementId) })
  }

  // Calculate highest SAIL across all sites for project-level summary
  const getSiteSAIL = (site) => {
    const sora = site?.sora || {}
    const population = sora.population || 'populated'
    const uaCategory = sora.ua_category || '3m_25ms'
    const iGRC = GRC_MATRIX[population]?.[uaCategory] || 5

    const mitigations = sora.mitigations || {}
    let mitigationReduction = 0
    Object.entries(GROUND_MITIGATIONS).forEach(([key, config]) => {
      const level = mitigations[key]?.level || 'none'
      mitigationReduction += config.reductions[level] || 0
    })
    const fGRC = Math.max(1, iGRC + mitigationReduction)

    const initialARC = sora.initial_arc || 'ARC-b'
    const tmprType = sora.tmpr?.type || 'VLOS'
    const tmprOption = TMPR_OPTIONS.find(t => t.value === tmprType)
    const arcIndex = ARC_LEVELS.findIndex(a => a.value === initialARC)
    const residualArcIndex = Math.max(0, arcIndex - (tmprOption?.reduction || 0))
    const residualARC = ARC_LEVELS[residualArcIndex]?.value || 'ARC-a'

    return fGRC <= 7 ? SAIL_MATRIX[fGRC]?.[residualARC] || 'VI' : 'N/A'
  }

  const sailOrder = ['I', 'II', 'III', 'IV', 'V', 'VI']
  const highestSAIL = sites.reduce((highest, site) => {
    const sail = getSiteSAIL(site)
    if (sail === 'N/A') return highest
    if (!highest) return sail
    return sailOrder.indexOf(sail) > sailOrder.indexOf(highest) ? sail : highest
  }, null)

  return (
    <div className="space-y-6">
      {/* Site Selector */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <SiteSelector
            sites={sites}
            activeSiteId={activeSiteId}
            onSelectSite={setActiveSiteId}
            onAddSite={addSite}
            onRemoveSite={removeSite}
            onRenameSite={renameSite}
          />

          {highestSAIL && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Governing SAIL:</span>
              <span className={`px-3 py-1 rounded-full text-white font-bold ${SAIL_COLORS[highestSAIL] || 'bg-gray-500'}`}>
                {highestSAIL}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Map & Elements */}
      <Section title="Map & Elements" badge={`${(activeSite?.elements || []).length} elements`}>
        <SiteMap
          site={activeSite}
          onUpdateSite={updateActiveSite}
          allSites={sites}
        />
        <div className="mt-6 pt-6 border-t">
          <ElementTables
            elements={activeSite?.elements || []}
            onUpdateElement={updateElement}
            onDeleteElement={deleteElement}
          />
        </div>
      </Section>

      {/* SORA Calculator */}
      <Section title="SORA Assessment" badge={`SAIL ${getSiteSAIL(activeSite)}`}>
        <SORACalculator
          site={activeSite}
          onUpdateSite={updateActiveSite}
          equipment={equipment}
        />
      </Section>

      {/* Hazard Identification */}
      <Section title="Hazard Identification" badge={`${(activeSite?.hazards || []).length} hazards`}>
        <HazardTable
          site={activeSite}
          onUpdateSite={updateActiveSite}
          allSites={sites}
        />
      </Section>

      {/* Emergency Planning */}
      <Section title="Emergency Planning" defaultOpen={false}>
        <EmergencyPlanning
          site={activeSite}
          onUpdateSite={updateActiveSite}
        />
      </Section>
    </div>
  )
}
