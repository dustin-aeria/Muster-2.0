import { useState, useEffect } from 'react'
import {
  Plus,
  Search,
  Edit2,
  Archive,
  Trash2,
  X,
  Plane,
  Wrench,
  Ship,
  Camera,
  Package,
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Calculator
} from 'lucide-react'
import { getEquipment, createEquipment, updateEquipment, archiveEquipment, deleteEquipment, logAmendment } from '../lib/api'
import { calculateEquipmentRates, calculateEquipmentDayRate } from '../lib/rateCalculator'

const EQUIPMENT_TYPES = [
  { value: 'rpas_small', label: 'RPAS <25kg', icon: Plane },
  { value: 'rpas_medium', label: 'RPAS 25-150kg', icon: Plane },
  { value: 'sensor', label: 'Sensor', icon: Camera },
  { value: 'vessel', label: 'Vessel', icon: Ship },
  { value: 'other', label: 'Other', icon: Package }
]

const EQUIPMENT_CATEGORIES = [
  'RPAS <25kg',
  'RPAS 25-150kg',
  'Sensor - Camera',
  'Sensor - LiDAR',
  'Sensor - Thermal',
  'Sensor - Multispectral',
  'Water - Boat',
  'Water - USV',
  'Ground Support',
  'Other'
]

// TC 922.XX Safety Assurance Declarations
const DECLARATIONS = [
  { key: '922_04', label: '922.04', description: 'General requirements' },
  { key: '922_05', label: '922.05', description: 'C2 link' },
  { key: '922_06', label: '922.06', description: 'UTM' },
  { key: '922_07', label: '922.07', description: 'Geo-awareness' },
  { key: '922_08', label: '922.08', description: 'Remote ID' },
  { key: '922_09', label: '922.09', description: 'Lights' },
  { key: '922_10', label: '922.10', description: 'Maintenance' },
  { key: '922_11', label: '922.11', description: 'Safety features' },
  { key: '922_12', label: '922.12', description: 'RPAS operations over people' }
]

const DEFAULT_DECLARATIONS = {
  '922_04': false,
  '922_05': false,
  '922_06': false,
  '922_07': false,
  '922_08': false,
  '922_09': false,
  '922_10': false,
  '922_11': false,
  '922_12': false
}

function EquipmentModal({ equipment, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'rpas_small',
    category: '',
    serial_number: '',
    manufacturer: '',
    model: '',
    rate_day: '',
    rate_week: '',
    purchase_price: '',
    days_to_pay_off: '',
    maintenance_notes: '',
    notes: '',
    declarations: { ...DEFAULT_DECLARATIONS }
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (equipment) {
      setFormData({
        name: equipment.name || '',
        type: equipment.type || 'rpas_small',
        category: equipment.category || '',
        serial_number: equipment.serial_number || '',
        manufacturer: equipment.manufacturer || '',
        model: equipment.model || '',
        rate_day: equipment.rate_day || '',
        rate_week: equipment.rate_week || '',
        purchase_price: equipment.purchase_price || '',
        days_to_pay_off: equipment.days_to_pay_off || '',
        maintenance_notes: equipment.maintenance_notes || '',
        notes: equipment.notes || '',
        declarations: { ...DEFAULT_DECLARATIONS, ...equipment.declarations }
      })
    }
  }, [equipment])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const data = {
        ...formData,
        rate_day: formData.rate_day ? parseFloat(formData.rate_day) : null,
        rate_week: formData.rate_week ? parseFloat(formData.rate_week) : null,
        purchase_price: formData.purchase_price ? parseFloat(formData.purchase_price) : null,
        days_to_pay_off: formData.days_to_pay_off ? parseInt(formData.days_to_pay_off) : null
      }

      if (equipment) {
        await updateEquipment(equipment.id, data)
        await logAmendment('equipment', equipment.id, `Updated equipment: ${data.name}`)
      } else {
        await createEquipment(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const toggleDeclaration = (key) => {
    setFormData(prev => ({
      ...prev,
      declarations: {
        ...prev.declarations,
        [key]: !prev.declarations[key]
      }
    }))
  }

  // Calculate suggested daily rate using rate calculator
  const calculatedRate = formData.purchase_price && formData.days_to_pay_off
    ? calculateEquipmentDayRate(parseFloat(formData.purchase_price), parseInt(formData.days_to_pay_off))
    : null

  const applyCalculatedRate = () => {
    if (calculatedRate) {
      const rates = calculateEquipmentRates(calculatedRate)
      setFormData(prev => ({
        ...prev,
        rate_day: rates.day,
        rate_week: rates.week
      }))
    }
  }

  const autoCalculateWeek = () => {
    if (formData.rate_day) {
      const rates = calculateEquipmentRates(parseFloat(formData.rate_day))
      setFormData(prev => ({
        ...prev,
        rate_week: rates.week
      }))
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {equipment ? 'Edit Equipment' : 'Add Equipment'}
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
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="e.g., DJI M300 RTK"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type *
              </label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              >
                {EQUIPMENT_TYPES.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              >
                <option value="">Select category...</option>
                {EQUIPMENT_CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Identification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Manufacturer
              </label>
              <input
                type="text"
                value={formData.manufacturer}
                onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="e.g., DJI"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="e.g., Matrice 300 RTK"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Serial Number
              </label>
              <input
                type="text"
                value={formData.serial_number}
                onChange={(e) => setFormData({ ...formData, serial_number: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
            </div>
          </div>

          {/* Rate Calculator */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Calculator className="w-4 h-4" />
              Rate Calculator
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Purchase Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.purchase_price}
                  onChange={(e) => setFormData({ ...formData, purchase_price: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Days to Pay Off</label>
                <input
                  type="number"
                  value={formData.days_to_pay_off}
                  onChange={(e) => setFormData({ ...formData, days_to_pay_off: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="e.g., 100"
                />
              </div>
              <div className="flex items-end">
                {calculatedRate && (
                  <button
                    type="button"
                    onClick={applyCalculatedRate}
                    className="w-full px-3 py-2 bg-brand-100 text-brand-700 rounded-lg hover:bg-brand-200 text-sm font-medium"
                  >
                    Apply ${calculatedRate}/day
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Rates */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Rates ($)
              </label>
              {formData.rate_day && (
                <button
                  type="button"
                  onClick={autoCalculateWeek}
                  className="inline-flex items-center gap-1 text-xs text-brand-600 hover:text-brand-700 font-medium"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Auto-calc week (4× day)
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Day Rate *</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.rate_day}
                  onChange={(e) => setFormData({ ...formData, rate_day: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ring-2 ring-brand-200"
                  placeholder="Base rate"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Week Rate</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.rate_week}
                  onChange={(e) => setFormData({ ...formData, rate_week: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* TC 922.XX Declarations */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              TC 922.XX Safety Assurance Declarations
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {DECLARATIONS.map((dec) => (
                <button
                  key={dec.key}
                  type="button"
                  onClick={() => toggleDeclaration(dec.key)}
                  className={`flex items-center gap-2 p-2 rounded-lg border text-left text-sm transition-colors ${
                    formData.declarations[dec.key]
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {formData.declarations[dec.key] ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0" />
                  )}
                  <div>
                    <span className="font-medium">{dec.label}</span>
                    <p className="text-xs opacity-75">{dec.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Maintenance Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maintenance Notes
            </label>
            <textarea
              value={formData.maintenance_notes}
              onChange={(e) => setFormData({ ...formData, maintenance_notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="Current maintenance status, last service date, etc."
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
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
              {saving ? 'Saving...' : equipment ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function getEquipmentIcon(type) {
  const typeConfig = EQUIPMENT_TYPES.find(t => t.value === type)
  return typeConfig?.icon || Package
}

function getStatusBadge(status) {
  switch (status) {
    case 'active':
      return <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
    case 'maintenance':
      return <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">Maintenance</span>
    case 'archived':
      return <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs font-medium">Archived</span>
    default:
      return null
  }
}

export default function Equipment() {
  const [equipment, setEquipment] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingEquipment, setEditingEquipment] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    loadEquipment()
  }, [showArchived])

  const loadEquipment = async () => {
    try {
      const data = await getEquipment(showArchived)
      setEquipment(data)
    } catch (err) {
      console.error('Failed to load equipment:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleArchive = async (item) => {
    if (!confirm(`Archive ${item.name}?`)) return
    try {
      await archiveEquipment(item.id)
      await logAmendment('equipment', item.id, `Archived equipment: ${item.name}`)
      loadEquipment()
    } catch (err) {
      alert('Failed to archive: ' + err.message)
    }
  }

  const handleSetMaintenance = async (item) => {
    try {
      await updateEquipment(item.id, { status: 'maintenance' })
      await logAmendment('equipment', item.id, `Set equipment to maintenance: ${item.name}`)
      loadEquipment()
    } catch (err) {
      alert('Failed to update: ' + err.message)
    }
  }

  const handleSetActive = async (item) => {
    try {
      await updateEquipment(item.id, { status: 'active' })
      await logAmendment('equipment', item.id, `Set equipment to active: ${item.name}`)
      loadEquipment()
    } catch (err) {
      alert('Failed to update: ' + err.message)
    }
  }

  const handleDelete = async (item) => {
    if (!confirm(`Permanently delete ${item.name}? This cannot be undone.`)) return
    try {
      await deleteEquipment(item.id)
      loadEquipment()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.manufacturer?.toLowerCase().includes(search.toLowerCase()) ||
    item.model?.toLowerCase().includes(search.toLowerCase()) ||
    item.serial_number?.toLowerCase().includes(search.toLowerCase())
  )

  const formatCurrency = (value) => {
    if (!value) return '—'
    return `$${parseFloat(value).toLocaleString()}`
  }

  const countDeclarations = (declarations) => {
    if (!declarations) return { compliant: 0, total: DECLARATIONS.length }
    const compliant = Object.values(declarations).filter(v => v === true).length
    return { compliant, total: DECLARATIONS.length }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Equipment</h1>
          <p className="text-gray-500">RPAS, sensors, vessels, and other equipment</p>
        </div>
        <button
          onClick={() => { setEditingEquipment(null); setModalOpen(true) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          Add Equipment
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search equipment..."
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

      {/* List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      ) : filteredEquipment.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            {search ? 'No equipment matches your search' : 'No equipment yet'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Equipment</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden md:table-cell">Category</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden lg:table-cell">Day Rate</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden lg:table-cell">Declarations</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden md:table-cell">Status</th>
                <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEquipment.map((item) => {
                const Icon = getEquipmentIcon(item.type)
                const { compliant, total } = countDeclarations(item.declarations)
                return (
                  <>
                    <tr
                      key={item.id}
                      className={`hover:bg-gray-50 ${item.status === 'archived' ? 'opacity-50' : ''}`}
                    >
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                          className="flex items-center gap-3 text-left"
                        >
                          {expandedId === item.id ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <Icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            {(item.manufacturer || item.model) && (
                              <p className="text-sm text-gray-500">
                                {[item.manufacturer, item.model].filter(Boolean).join(' ')}
                              </p>
                            )}
                          </div>
                        </button>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        {item.category && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                            {item.category}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <span className="font-medium">{formatCurrency(item.rate_day)}</span>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
                          compliant === total
                            ? 'bg-green-100 text-green-700'
                            : compliant > 0
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-gray-100 text-gray-500'
                        }`}>
                          {compliant === total ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            <AlertCircle className="w-3 h-3" />
                          )}
                          {compliant}/{total}
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        {getStatusBadge(item.status)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => { setEditingEquipment(item); setModalOpen(true) }}
                            className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          {item.status === 'active' && (
                            <button
                              onClick={() => handleSetMaintenance(item)}
                              className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg"
                              title="Set to Maintenance"
                            >
                              <Wrench className="w-4 h-4" />
                            </button>
                          )}
                          {item.status === 'maintenance' && (
                            <button
                              onClick={() => handleSetActive(item)}
                              className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg"
                              title="Set to Active"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          )}
                          {item.status !== 'archived' && (
                            <button
                              onClick={() => handleArchive(item)}
                              className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                              title="Archive"
                            >
                              <Archive className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(item)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {expandedId === item.id && (
                      <tr>
                        <td colSpan={6} className="px-4 py-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Details</h4>
                              <div className="space-y-1 text-sm">
                                {item.serial_number && (
                                  <p className="text-gray-600">
                                    <span className="text-gray-500">S/N:</span> {item.serial_number}
                                  </p>
                                )}
                                <p className="text-gray-600">
                                  <span className="text-gray-500">Type:</span>{' '}
                                  {EQUIPMENT_TYPES.find(t => t.value === item.type)?.label || item.type}
                                </p>
                                {item.category && (
                                  <p className="text-gray-600">
                                    <span className="text-gray-500">Category:</span> {item.category}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Rates</h4>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-gray-500">Day:</span>{' '}
                                  <span className="font-medium">{formatCurrency(item.rate_day)}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Week:</span>{' '}
                                  <span className="font-medium">{formatCurrency(item.rate_week)}</span>
                                </div>
                                {item.purchase_price && (
                                  <>
                                    <div>
                                      <span className="text-gray-500">Purchase:</span>{' '}
                                      <span className="font-medium">{formatCurrency(item.purchase_price)}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Pay-off:</span>{' '}
                                      <span className="font-medium">{item.days_to_pay_off || '—'} days</span>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">TC 922.XX Declarations</h4>
                              <div className="flex flex-wrap gap-1">
                                {DECLARATIONS.map(dec => (
                                  <span
                                    key={dec.key}
                                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                                      item.declarations?.[dec.key]
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-gray-100 text-gray-400'
                                    }`}
                                    title={dec.description}
                                  >
                                    {dec.label}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          {(item.maintenance_notes || item.notes) && (
                            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                              {item.maintenance_notes && (
                                <div>
                                  <h4 className="text-sm font-medium text-gray-700 mb-1">Maintenance Notes</h4>
                                  <p className="text-sm text-gray-600">{item.maintenance_notes}</p>
                                </div>
                              )}
                              {item.notes && (
                                <div>
                                  <h4 className="text-sm font-medium text-gray-700 mb-1">Notes</h4>
                                  <p className="text-sm text-gray-600">{item.notes}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <EquipmentModal
          equipment={editingEquipment}
          onClose={() => { setModalOpen(false); setEditingEquipment(null) }}
          onSave={() => { setModalOpen(false); setEditingEquipment(null); loadEquipment() }}
        />
      )}
    </div>
  )
}
