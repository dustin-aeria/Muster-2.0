import { useState, useEffect } from 'react'
import {
  Plus,
  Search,
  Edit2,
  Archive,
  Trash2,
  X,
  Briefcase,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Tag,
  Percent,
  Settings,
  Package
} from 'lucide-react'
import {
  getServices, createService, updateService, archiveService, deleteService,
  getModifiers, createModifier, updateModifier, deleteModifier,
  logAmendment
} from '../lib/api'
import { formatCurrency as formatCurrencyUtil, getRateUnitLabel } from '../lib/rateCalculator'

const SERVICE_CATEGORIES = [
  'Consulting',
  'Training',
  'Field Operations',
  'Data Processing',
  'Deliverables',
  'Specialized',
  'Mob/Demob',
  'Insurance',
  'Travel',
  'Other'
]

const RATE_UNITS = [
  { value: 'hour', label: 'Per Hour' },
  { value: 'half_day', label: 'Per Half Day' },
  { value: 'day', label: 'Per Day' },
  { value: 'week', label: 'Per Week' },
  { value: 'project', label: 'Per Project' },
  { value: 'each', label: 'Each' },
  { value: 'per_hectare', label: 'Per Hectare' },
  { value: 'per_km', label: 'Per Kilometer' },
  { value: 'per_gb', label: 'Per GB' },
  { value: 'per_image', label: 'Per Image' }
]

const MODIFIER_TYPES = [
  { value: 'percentage', label: 'Percentage (+/- %)', example: 'e.g., 25 for +25%' },
  { value: 'multiplier', label: 'Multiplier (x)', example: 'e.g., 1.5 for 50% more' },
  { value: 'flat_fee', label: 'Flat Fee ($)', example: 'e.g., 500 flat charge' }
]

// Output deliverables that services can produce
const OUTPUT_DELIVERABLES = [
  // Mapping & Survey
  { id: 'orthomosaic', label: 'Orthomosaic', category: 'Mapping' },
  { id: 'dsm', label: 'DSM (Digital Surface Model)', category: 'Mapping' },
  { id: 'dtm', label: 'DTM (Digital Terrain Model)', category: 'Mapping' },
  { id: 'contours', label: 'Contour Lines', category: 'Mapping' },
  { id: 'georeferenced_images', label: 'Georeferenced Images', category: 'Mapping' },
  // 3D & Modeling
  { id: 'point_cloud', label: 'Point Cloud', category: '3D' },
  { id: '3d_mesh', label: '3D Mesh Model', category: '3D' },
  { id: '3d_textured', label: '3D Textured Model', category: '3D' },
  { id: 'cad_drawings', label: 'CAD Drawings', category: '3D' },
  // LiDAR
  { id: 'lidar_point_cloud', label: 'LiDAR Point Cloud', category: 'LiDAR' },
  { id: 'classified_point_cloud', label: 'Classified Point Cloud', category: 'LiDAR' },
  { id: 'intensity_map', label: 'Intensity Map', category: 'LiDAR' },
  // Volumetrics
  { id: 'volumetric_report', label: 'Volumetric Report', category: 'Analysis' },
  { id: 'cut_fill_analysis', label: 'Cut/Fill Analysis', category: 'Analysis' },
  { id: 'change_detection', label: 'Change Detection Report', category: 'Analysis' },
  // Bathymetric
  { id: 'bathymetric_surface', label: 'Bathymetric Surface', category: 'Bathymetric' },
  { id: 'depth_contours', label: 'Depth Contours', category: 'Bathymetric' },
  { id: 'velocity_profile', label: 'Velocity Profile (ADCP)', category: 'Bathymetric' },
  { id: 'discharge_calc', label: 'Discharge Calculations', category: 'Bathymetric' },
  // Spectral & Environmental
  { id: 'ndvi', label: 'NDVI', category: 'Spectral' },
  { id: 'ndre', label: 'NDRE', category: 'Spectral' },
  { id: 'thermal_mosaic', label: 'Thermal Mosaic', category: 'Spectral' },
  { id: 'vegetation_health', label: 'Vegetation Health Map', category: 'Spectral' },
  { id: 'species_classification', label: 'Species Classification', category: 'Environmental' },
  { id: 'wildlife_count', label: 'Wildlife Count/Report', category: 'Environmental' },
  // Inspection
  { id: 'inspection_report', label: 'Inspection Report', category: 'Inspection' },
  { id: 'defect_map', label: 'Defect/Anomaly Map', category: 'Inspection' },
  { id: 'annotated_images', label: 'Annotated Images', category: 'Inspection' },
  // Media
  { id: 'video_raw', label: 'Raw Video', category: 'Media' },
  { id: 'video_edited', label: 'Edited Video', category: 'Media' },
  { id: 'photos_raw', label: 'Raw Photos', category: 'Media' },
  { id: 'photos_edited', label: 'Edited Photos', category: 'Media' },
  // Reports
  { id: 'flight_log', label: 'Flight Log', category: 'Reports' },
  { id: 'accuracy_report', label: 'Accuracy Report', category: 'Reports' },
  { id: 'qaqc_report', label: 'QA/QC Report', category: 'Reports' },
  { id: 'technical_report', label: 'Technical Report', category: 'Reports' },
]

const DELIVERABLE_CATEGORIES = [...new Set(OUTPUT_DELIVERABLES.map(d => d.category))]

function ServiceModal({ service, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    base_unit: 'day',
    base_rate: '',
    alternate_rates: {},
    pricing_options: '',
    output_deliverables: [],
    notes: ''
  })
  const [newAltUnit, setNewAltUnit] = useState('')
  const [newAltRate, setNewAltRate] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (service) {
      setFormData({
        name: service.name || '',
        category: service.category || '',
        description: service.description || '',
        base_unit: service.base_unit || 'day',
        base_rate: service.base_rate || '',
        alternate_rates: service.alternate_rates || {},
        pricing_options: service.pricing_options || '',
        output_deliverables: service.output_deliverables || [],
        notes: service.notes || ''
      })
    }
  }, [service])

  const toggleDeliverable = (deliverableId) => {
    setFormData(prev => ({
      ...prev,
      output_deliverables: prev.output_deliverables.includes(deliverableId)
        ? prev.output_deliverables.filter(d => d !== deliverableId)
        : [...prev.output_deliverables, deliverableId]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const data = {
        ...formData,
        base_rate: formData.base_rate ? parseFloat(formData.base_rate) : null
      }

      if (service) {
        await updateService(service.id, data)
        await logAmendment('services', service.id, `Updated service: ${data.name}`)
      } else {
        await createService(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const addAlternateRate = () => {
    if (!newAltUnit || !newAltRate) return
    setFormData(prev => ({
      ...prev,
      alternate_rates: {
        ...prev.alternate_rates,
        [newAltUnit]: parseFloat(newAltRate)
      }
    }))
    setNewAltUnit('')
    setNewAltRate('')
  }

  const removeAlternateRate = (key) => {
    setFormData(prev => {
      const updated = { ...prev.alternate_rates }
      delete updated[key]
      return { ...prev, alternate_rates: updated }
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {service ? 'Edit Service' : 'Add Service'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="e.g., RPAS Survey - Basic"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              >
                <option value="">Select category...</option>
                {SERVICE_CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="Brief description of the service"
              />
            </div>
          </div>

          {/* Primary Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Rate
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Rate Unit</label>
                <select
                  value={formData.base_unit}
                  onChange={(e) => setFormData({ ...formData, base_unit: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                >
                  {RATE_UNITS.map(u => (
                    <option key={u.value} value={u.value}>{u.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Rate ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.base_rate}
                  onChange={(e) => setFormData({ ...formData, base_rate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Alternate Rates */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alternate Rates
            </label>
            <div className="space-y-2">
              {Object.entries(formData.alternate_rates).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <span className="flex-1 text-sm">
                    <span className="font-medium">${value.toLocaleString()}</span>
                    <span className="text-gray-500 ml-2">
                      {RATE_UNITS.find(u => u.value === key)?.label || key}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => removeAlternateRate(key)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div className="flex gap-2">
                <select
                  value={newAltUnit}
                  onChange={(e) => setNewAltUnit(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="">Add rate unit...</option>
                  {RATE_UNITS.filter(u => u.value !== formData.base_unit && !formData.alternate_rates[u.value]).map(u => (
                    <option key={u.value} value={u.value}>{u.label}</option>
                  ))}
                </select>
                <input
                  type="number"
                  step="0.01"
                  placeholder="$"
                  value={newAltRate}
                  onChange={(e) => setNewAltRate(e.target.value)}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <button
                  type="button"
                  onClick={addAlternateRate}
                  disabled={!newAltUnit || !newAltRate}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 text-sm"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pricing Options / Notes
            </label>
            <textarea
              value={formData.pricing_options}
              onChange={(e) => setFormData({ ...formData, pricing_options: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="Additional pricing details, volume discounts, etc."
            />
          </div>

          {/* Output Deliverables */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Output Deliverables
              </span>
            </label>
            <p className="text-xs text-gray-500 mb-3">Select the deliverables this service produces</p>

            {formData.output_deliverables.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.output_deliverables.map(delId => {
                  const del = OUTPUT_DELIVERABLES.find(d => d.id === delId)
                  return del ? (
                    <span
                      key={delId}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                    >
                      {del.label}
                      <button
                        type="button"
                        onClick={() => toggleDeliverable(delId)}
                        className="hover:text-green-900"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ) : null
                })}
              </div>
            )}

            <div className="border border-gray-200 rounded-lg max-h-48 overflow-y-auto">
              {DELIVERABLE_CATEGORIES.map(category => (
                <div key={category} className="border-b border-gray-100 last:border-0">
                  <div className="px-3 py-1.5 bg-gray-50 text-xs font-medium text-gray-600 sticky top-0">
                    {category}
                  </div>
                  <div className="p-2 flex flex-wrap gap-1.5">
                    {OUTPUT_DELIVERABLES.filter(d => d.category === category).map(del => (
                      <button
                        key={del.id}
                        type="button"
                        onClick={() => toggleDeliverable(del.id)}
                        className={`px-2 py-1 rounded text-xs transition-colors ${
                          formData.output_deliverables.includes(del.id)
                            ? 'bg-green-100 text-green-700 font-medium'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {del.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Internal Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : service ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ModifierModal({ modifier, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    modifier_type: 'percentage',
    value: ''
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (modifier) {
      setFormData({
        name: modifier.name || '',
        description: modifier.description || '',
        modifier_type: modifier.modifier_type || 'percentage',
        value: modifier.value || ''
      })
    }
  }, [modifier])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const data = {
        ...formData,
        value: parseFloat(formData.value)
      }

      if (modifier) {
        await updateModifier(modifier.id, data)
      } else {
        await createModifier(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const selectedType = MODIFIER_TYPES.find(t => t.value === formData.modifier_type)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {modifier ? 'Edit Modifier' : 'Add Modifier'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="e.g., Rush Fee"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="When/how this applies"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              value={formData.modifier_type}
              onChange={(e) => setFormData({ ...formData, modifier_type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            >
              {MODIFIER_TYPES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Value *
            </label>
            <input
              type="number"
              step="0.01"
              required
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder={selectedType?.example}
            />
            <p className="mt-1 text-xs text-gray-500">{selectedType?.example}</p>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : modifier ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function Services() {
  const [services, setServices] = useState([])
  const [modifiers, setModifiers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [activeTab, setActiveTab] = useState('services')
  const [serviceModalOpen, setServiceModalOpen] = useState(false)
  const [modifierModalOpen, setModifierModalOpen] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [editingModifier, setEditingModifier] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    loadData()
  }, [showArchived])

  const loadData = async () => {
    try {
      const [servicesData, modifiersData] = await Promise.all([
        getServices(showArchived),
        getModifiers()
      ])
      setServices(servicesData)
      setModifiers(modifiersData)
    } catch (err) {
      console.error('Failed to load data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleArchiveService = async (service) => {
    if (!confirm(`Archive ${service.name}?`)) return
    try {
      await archiveService(service.id)
      await logAmendment('services', service.id, `Archived service: ${service.name}`)
      loadData()
    } catch (err) {
      alert('Failed to archive: ' + err.message)
    }
  }

  const handleDeleteService = async (service) => {
    if (!confirm(`Permanently delete ${service.name}? This cannot be undone.`)) return
    try {
      await deleteService(service.id)
      loadData()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const handleDeleteModifier = async (modifier) => {
    if (!confirm(`Delete ${modifier.name}?`)) return
    try {
      await deleteModifier(modifier.id)
      loadData()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const filteredServices = services.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category?.toLowerCase().includes(search.toLowerCase()) ||
    s.description?.toLowerCase().includes(search.toLowerCase())
  )

  // Group services by category
  const servicesByCategory = filteredServices.reduce((acc, service) => {
    const cat = service.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(service)
    return acc
  }, {})

  const formatCurrency = (value) => {
    if (!value) return '—'
    return `$${parseFloat(value).toLocaleString()}`
  }

  const formatModifierValue = (modifier) => {
    switch (modifier.modifier_type) {
      case 'percentage':
        return `${modifier.value > 0 ? '+' : ''}${modifier.value}%`
      case 'multiplier':
        return `×${modifier.value}`
      case 'flat_fee':
        return `+$${parseFloat(modifier.value).toLocaleString()}`
      default:
        return modifier.value
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-500">Service catalog with rate structures</p>
        </div>
        <button
          onClick={() => {
            if (activeTab === 'services') {
              setEditingService(null)
              setServiceModalOpen(true)
            } else {
              setEditingModifier(null)
              setModifierModalOpen(true)
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          Add {activeTab === 'services' ? 'Service' : 'Modifier'}
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab('services')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'services'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Services ({services.length})
          </button>
          <button
            onClick={() => setActiveTab('modifiers')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'modifiers'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Modifiers ({modifiers.length})
          </button>
        </nav>
      </div>

      {activeTab === 'services' ? (
        <>
          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showArchived}
                onChange={(e) => setShowArchived(e.target.checked)}
                className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
              Show archived
            </label>
          </div>

          {/* Services List */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                {search ? 'No services match your search' : 'No services yet'}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                <div key={category} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-gray-500" />
                      {category}
                      <span className="text-gray-400 font-normal">({categoryServices.length})</span>
                    </h3>
                  </div>
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Service</th>
                        <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Rate</th>
                        <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Alt. Rates</th>
                        <th className="text-right px-4 py-2 text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {categoryServices.map((service) => (
                        <>
                          <tr
                            key={service.id}
                            className={`hover:bg-gray-50 ${service.status === 'archived' ? 'opacity-50' : ''}`}
                          >
                            <td className="px-4 py-3">
                              <button
                                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                                className="flex items-center gap-2 text-left"
                              >
                                {expandedId === service.id ? (
                                  <ChevronUp className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-gray-400" />
                                )}
                                <div>
                                  <p className="font-medium text-gray-900">{service.name}</p>
                                  {service.description && (
                                    <p className="text-sm text-gray-500 truncate max-w-xs">{service.description}</p>
                                  )}
                                </div>
                              </button>
                            </td>
                            <td className="px-4 py-3 hidden md:table-cell">
                              <span className="font-medium">{formatCurrency(service.base_rate)}</span>
                              <span className="text-sm text-gray-500 ml-1">
                                /{service.base_unit}
                              </span>
                            </td>
                            <td className="px-4 py-3 hidden lg:table-cell">
                              {Object.keys(service.alternate_rates || {}).length > 0 ? (
                                <span className="text-sm text-gray-500">
                                  +{Object.keys(service.alternate_rates).length} rates
                                </span>
                              ) : (
                                <span className="text-sm text-gray-400">—</span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => { setEditingService(service); setServiceModalOpen(true) }}
                                  className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                                  title="Edit"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                {service.status !== 'archived' && (
                                  <button
                                    onClick={() => handleArchiveService(service)}
                                    className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                                    title="Archive"
                                  >
                                    <Archive className="w-4 h-4" />
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDeleteService(service)}
                                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          {expandedId === service.id && (
                            <tr>
                              <td colSpan={4} className="px-4 py-4 bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Primary Rate</h4>
                                    <p className="text-sm">
                                      <span className="font-medium text-lg">{formatCurrency(service.base_rate)}</span>
                                      <span className="text-gray-500 ml-1">
                                        {RATE_UNITS.find(u => u.value === service.base_unit)?.label || service.base_unit}
                                      </span>
                                    </p>
                                  </div>
                                  {Object.keys(service.alternate_rates || {}).length > 0 && (
                                    <div>
                                      <h4 className="text-sm font-medium text-gray-700 mb-2">Alternate Rates</h4>
                                      <div className="space-y-1">
                                        {Object.entries(service.alternate_rates).map(([key, value]) => (
                                          <p key={key} className="text-sm">
                                            <span className="font-medium">{formatCurrency(value)}</span>
                                            <span className="text-gray-500 ml-1">
                                              {RATE_UNITS.find(u => u.value === key)?.label || key}
                                            </span>
                                          </p>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {(service.output_deliverables?.length > 0) && (
                                  <div className="mt-4 pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1.5">
                                      <Package className="w-4 h-4" />
                                      Output Deliverables
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                      {service.output_deliverables.map(delId => {
                                        const del = OUTPUT_DELIVERABLES.find(d => d.id === delId)
                                        return del ? (
                                          <span
                                            key={delId}
                                            className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs"
                                          >
                                            {del.label}
                                          </span>
                                        ) : null
                                      })}
                                    </div>
                                  </div>
                                )}
                                {(service.pricing_options || service.notes) && (
                                  <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.pricing_options && (
                                      <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-1">Pricing Options</h4>
                                        <p className="text-sm text-gray-600">{service.pricing_options}</p>
                                      </div>
                                    )}
                                    {service.notes && (
                                      <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-1">Notes</h4>
                                        <p className="text-sm text-gray-600">{service.notes}</p>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        /* Modifiers Tab */
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {modifiers.length === 0 ? (
            <div className="text-center py-12">
              <Percent className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No modifiers yet</p>
              <p className="text-sm text-gray-400 mt-1">Add modifiers like rush fees, after-hours rates, etc.</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Name</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Type</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Value</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden md:table-cell">Description</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {modifiers.map((modifier) => (
                  <tr key={modifier.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-900">{modifier.name}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs capitalize">
                        {modifier.modifier_type.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`font-medium ${
                        modifier.modifier_type === 'percentage' && modifier.value > 0
                          ? 'text-green-600'
                          : modifier.modifier_type === 'percentage' && modifier.value < 0
                            ? 'text-red-600'
                            : 'text-gray-900'
                      }`}>
                        {formatModifierValue(modifier)}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-sm text-gray-500">{modifier.description || '—'}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => { setEditingModifier(modifier); setModifierModalOpen(true) }}
                          className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteModifier(modifier)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Modals */}
      {serviceModalOpen && (
        <ServiceModal
          service={editingService}
          onClose={() => { setServiceModalOpen(false); setEditingService(null) }}
          onSave={() => { setServiceModalOpen(false); setEditingService(null); loadData() }}
        />
      )}
      {modifierModalOpen && (
        <ModifierModal
          modifier={editingModifier}
          onClose={() => { setModifierModalOpen(false); setEditingModifier(null) }}
          onSave={() => { setModifierModalOpen(false); setEditingModifier(null); loadData() }}
        />
      )}
    </div>
  )
}
