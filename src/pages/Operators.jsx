import { useState, useEffect } from 'react'
import {
  Plus,
  Search,
  Edit2,
  Archive,
  Trash2,
  X,
  User,
  Mail,
  Phone,
  Award,
  DollarSign,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Calculator
} from 'lucide-react'
import { getOperators, createOperator, updateOperator, archiveOperator, deleteOperator, logAmendment } from '../lib/api'
import { format, parseISO, differenceInDays } from 'date-fns'
import { calculatePersonnelRates, formatCurrency as formatCurrencyUtil } from '../lib/rateCalculator'

const ROLE_OPTIONS = [
  'PIC - Basic',
  'PIC - Advanced',
  'PIC - Complex',
  'PIC - Specialized',
  'Visual Observer',
  'Ground Supervisor',
  'Payload Operator',
  'Field Biologist',
  'Marine Mammal Observer',
  'HSE Officer',
  'Boat Operator',
  'Field Technician',
  'Project Manager',
  'Data Analyst'
]

function OperatorModal({ operator, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roles: [],
    rate_hourly: '',
    rate_half_day: '',
    rate_day: '',
    rate_week: '',
    travel_rate_day: '',
    notes: '',
    certifications: []
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (operator) {
      setFormData({
        name: operator.name || '',
        email: operator.email || '',
        phone: operator.phone || '',
        roles: operator.roles || [],
        rate_hourly: operator.rate_hourly || '',
        rate_half_day: operator.rate_half_day || '',
        rate_day: operator.rate_day || '',
        rate_week: operator.rate_week || '',
        travel_rate_day: operator.travel_rate_day || '',
        notes: operator.notes || '',
        certifications: operator.certifications || []
      })
    }
  }, [operator])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const data = {
        ...formData,
        rate_hourly: formData.rate_hourly ? parseFloat(formData.rate_hourly) : null,
        rate_half_day: formData.rate_half_day ? parseFloat(formData.rate_half_day) : null,
        rate_day: formData.rate_day ? parseFloat(formData.rate_day) : null,
        rate_week: formData.rate_week ? parseFloat(formData.rate_week) : null,
        travel_rate_day: formData.travel_rate_day ? parseFloat(formData.travel_rate_day) : null,
      }

      if (operator) {
        await updateOperator(operator.id, data)
        await logAmendment('operators', operator.id, `Updated operator: ${data.name}`)
      } else {
        await createOperator(data)
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const toggleRole = (role) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter(r => r !== role)
        : [...prev.roles, role]
    }))
  }

  const addCertification = () => {
    setFormData(prev => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        { name: '', number: '', issued_date: '', expiry_date: '', issuer: '', notes: '' }
      ]
    }))
  }

  const updateCertification = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) =>
        i === index ? { ...cert, [field]: value } : cert
      )
    }))
  }

  const removeCertification = (index) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {operator ? 'Edit Operator' : 'Add Operator'}
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
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
            </div>
          </div>

          {/* Roles */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Roles
            </label>
            <div className="flex flex-wrap gap-2">
              {ROLE_OPTIONS.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => toggleRole(role)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    formData.roles.includes(role)
                      ? 'bg-brand-100 text-brand-700 border-2 border-brand-500'
                      : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200'
                  }`}
                >
                  {role}
                </button>
              ))}
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
                  onClick={() => {
                    const rates = calculatePersonnelRates(parseFloat(formData.rate_day))
                    if (rates) {
                      setFormData(prev => ({
                        ...prev,
                        rate_hourly: rates.hourly,
                        rate_half_day: rates.halfDay,
                        rate_week: rates.week,
                        travel_rate_day: rates.travel
                      }))
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs text-brand-600 hover:text-brand-700 font-medium"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Auto-calculate from day rate
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Hourly</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.rate_hourly}
                  onChange={(e) => setFormData({ ...formData, rate_hourly: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Half Day</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.rate_half_day}
                  onChange={(e) => setFormData({ ...formData, rate_half_day: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Day *</label>
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
                <label className="block text-xs text-gray-500 mb-1">Week</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.rate_week}
                  onChange={(e) => setFormData({ ...formData, rate_week: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Travel/Day</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.travel_rate_day}
                  onChange={(e) => setFormData({ ...formData, travel_rate_day: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="0.00"
                />
              </div>
            </div>
            <p className="mt-1.5 text-xs text-gray-500">
              Week = 4.5× Day | Half Day = 55% Day | Hourly = Day÷7.5 | Travel = 50% Day
            </p>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Certifications
              </label>
              <button
                type="button"
                onClick={addCertification}
                className="text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                + Add Certification
              </button>
            </div>
            <div className="space-y-3">
              {formData.certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-gray-700">
                      Certification {index + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeCertification(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Certificate Name"
                      value={cert.name}
                      onChange={(e) => updateCertification(index, 'name', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Certificate Number"
                      value={cert.number}
                      onChange={(e) => updateCertification(index, 'number', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Issuer"
                      value={cert.issuer}
                      onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Issued</label>
                        <input
                          type="date"
                          value={cert.issued_date}
                          onChange={(e) => updateCertification(index, 'issued_date', e.target.value)}
                          className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Expires</label>
                        <input
                          type="date"
                          value={cert.expiry_date}
                          onChange={(e) => updateCertification(index, 'expiry_date', e.target.value)}
                          className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {formData.certifications.length === 0 && (
                <p className="text-sm text-gray-500 italic">No certifications added</p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
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
              {saving ? 'Saving...' : operator ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function CertificationBadge({ cert }) {
  if (!cert.expiry_date) return null

  const daysUntilExpiry = differenceInDays(parseISO(cert.expiry_date), new Date())

  let colorClass = 'bg-green-100 text-green-700'
  if (daysUntilExpiry < 0) {
    colorClass = 'bg-red-100 text-red-700'
  } else if (daysUntilExpiry < 30) {
    colorClass = 'bg-orange-100 text-orange-700'
  } else if (daysUntilExpiry < 90) {
    colorClass = 'bg-yellow-100 text-yellow-700'
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${colorClass}`}>
      <Award className="w-3 h-3" />
      {cert.name}
      {daysUntilExpiry < 0 && ' (Expired)'}
      {daysUntilExpiry >= 0 && daysUntilExpiry < 30 && ` (${daysUntilExpiry}d)`}
    </span>
  )
}

export default function Operators() {
  const [operators, setOperators] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showArchived, setShowArchived] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingOperator, setEditingOperator] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    loadOperators()
  }, [showArchived])

  const loadOperators = async () => {
    try {
      const data = await getOperators(showArchived)
      setOperators(data)
    } catch (err) {
      console.error('Failed to load operators:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleArchive = async (op) => {
    if (!confirm(`Archive ${op.name}?`)) return
    try {
      await archiveOperator(op.id)
      await logAmendment('operators', op.id, `Archived operator: ${op.name}`)
      loadOperators()
    } catch (err) {
      alert('Failed to archive: ' + err.message)
    }
  }

  const handleDelete = async (op) => {
    if (!confirm(`Permanently delete ${op.name}? This cannot be undone.`)) return
    try {
      await deleteOperator(op.id)
      loadOperators()
    } catch (err) {
      alert('Failed to delete: ' + err.message)
    }
  }

  const filteredOperators = operators.filter(op =>
    op.name.toLowerCase().includes(search.toLowerCase()) ||
    op.email?.toLowerCase().includes(search.toLowerCase()) ||
    op.roles?.some(r => r.toLowerCase().includes(search.toLowerCase()))
  )

  const formatCurrency = (value) => {
    if (!value) return '—'
    return `$${parseFloat(value).toLocaleString()}`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Operators</h1>
          <p className="text-gray-500">Personnel who can be assigned to projects</p>
        </div>
        <button
          onClick={() => { setEditingOperator(null); setModalOpen(true) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          <Plus className="w-5 h-5" />
          Add Operator
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search operators..."
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
      ) : filteredOperators.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <User className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            {search ? 'No operators match your search' : 'No operators yet'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Name</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden md:table-cell">Roles</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden lg:table-cell">Day Rate</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 hidden lg:table-cell">Certifications</th>
                <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOperators.map((op) => (
                <>
                  <tr
                    key={op.id}
                    className={`hover:bg-gray-50 ${op.status === 'archived' ? 'opacity-50' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setExpandedId(expandedId === op.id ? null : op.id)}
                        className="flex items-center gap-2 text-left"
                      >
                        {expandedId === op.id ? (
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{op.name}</p>
                          {op.email && (
                            <p className="text-sm text-gray-500">{op.email}</p>
                          )}
                        </div>
                      </button>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {op.roles?.slice(0, 2).map((role) => (
                          <span
                            key={role}
                            className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {role}
                          </span>
                        ))}
                        {op.roles?.length > 2 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                            +{op.roles.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="font-medium">{formatCurrency(op.rate_day)}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {op.certifications?.slice(0, 2).map((cert, i) => (
                          <CertificationBadge key={i} cert={cert} />
                        ))}
                        {op.certifications?.length > 2 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                            +{op.certifications.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => { setEditingOperator(op); setModalOpen(true) }}
                          className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        {op.status !== 'archived' && (
                          <button
                            onClick={() => handleArchive(op)}
                            className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                            title="Archive"
                          >
                            <Archive className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(op)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedId === op.id && (
                    <tr>
                      <td colSpan={5} className="px-4 py-4 bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Contact</h4>
                            <div className="space-y-1 text-sm">
                              {op.email && (
                                <p className="flex items-center gap-2 text-gray-600">
                                  <Mail className="w-4 h-4" /> {op.email}
                                </p>
                              )}
                              {op.phone && (
                                <p className="flex items-center gap-2 text-gray-600">
                                  <Phone className="w-4 h-4" /> {op.phone}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Rates</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-gray-500">Hourly:</span>{' '}
                                <span className="font-medium">{formatCurrency(op.rate_hourly)}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Half Day:</span>{' '}
                                <span className="font-medium">{formatCurrency(op.rate_half_day)}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Day:</span>{' '}
                                <span className="font-medium">{formatCurrency(op.rate_day)}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Week:</span>{' '}
                                <span className="font-medium">{formatCurrency(op.rate_week)}</span>
                              </div>
                              <div className="col-span-2">
                                <span className="text-gray-500">Travel Day:</span>{' '}
                                <span className="font-medium">{formatCurrency(op.travel_rate_day)}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Certifications</h4>
                            {op.certifications?.length > 0 ? (
                              <div className="space-y-2">
                                {op.certifications.map((cert, i) => (
                                  <div key={i} className="text-sm">
                                    <p className="font-medium">{cert.name}</p>
                                    {cert.number && <p className="text-gray-500">#{cert.number}</p>}
                                    {cert.expiry_date && (
                                      <p className="text-gray-500">
                                        Expires: {format(parseISO(cert.expiry_date), 'MMM d, yyyy')}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500 italic">No certifications</p>
                            )}
                          </div>
                        </div>
                        {op.notes && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Notes</h4>
                            <p className="text-sm text-gray-600">{op.notes}</p>
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
      )}

      {/* Modal */}
      {modalOpen && (
        <OperatorModal
          operator={editingOperator}
          onClose={() => { setModalOpen(false); setEditingOperator(null) }}
          onSave={() => { setModalOpen(false); setEditingOperator(null); loadOperators() }}
        />
      )}
    </div>
  )
}
