/**
 * FillableForm.jsx
 * Interactive form component with visually engaging, clickable fields
 */

import { useState, useRef } from 'react'
import { FIELD_TYPES } from '../lib/formParser'
import {
  Check,
  X,
  Calendar,
  Mail,
  Phone,
  Hash,
  FileText,
  PenLine,
  ChevronRight,
  AlertCircle
} from 'lucide-react'

// Clickable Yes/No toggle for boolean fields
function YesNoToggle({ value, onChange, disabled }) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => !disabled && onChange(true)}
        disabled={disabled}
        className={`
          flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all
          ${value === true
            ? 'bg-green-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <Check className="w-5 h-5" />
        <span>Yes</span>
      </button>
      <button
        type="button"
        onClick={() => !disabled && onChange(false)}
        disabled={disabled}
        className={`
          flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all
          ${value === false
            ? 'bg-red-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 border border-gray-200'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <X className="w-5 h-5" />
        <span>No</span>
      </button>
    </div>
  )
}

// Clickable checkbox card - entire card is clickable
function CheckboxCard({ field, value, onChange, disabled }) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!value)}
      disabled={disabled}
      className={`
        w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left
        ${value
          ? 'border-green-500 bg-green-50'
          : 'border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {/* Checkbox indicator */}
      <div className={`
        w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-colors
        ${value
          ? 'bg-green-600 text-white'
          : 'border-2 border-gray-300 bg-white'
        }
      `}>
        {value && <Check className="w-4 h-4" />}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`font-medium ${value ? 'text-green-800' : 'text-gray-900'}`}>
          {field.label}
        </p>
        {field.description && (
          <p className="text-sm text-gray-500 mt-1">{field.description}</p>
        )}
      </div>

      {/* Status indicator */}
      <div className={`
        px-2 py-1 rounded text-xs font-medium
        ${value ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500'}
      `}>
        {value ? 'Complete' : 'Pending'}
      </div>
    </button>
  )
}

// Input field card with icon and label
function InputCard({ field, value, onChange, error, disabled }) {
  const inputRef = useRef(null)

  const getIcon = () => {
    switch (field.type) {
      case FIELD_TYPES.DATE: return Calendar
      case FIELD_TYPES.EMAIL: return Mail
      case FIELD_TYPES.PHONE: return Phone
      case FIELD_TYPES.NUMBER: return Hash
      case FIELD_TYPES.SIGNATURE: return PenLine
      default: return FileText
    }
  }

  const Icon = getIcon()

  const baseInputClasses = `
    w-full px-4 py-3 border-2 rounded-xl transition-all text-gray-900
    focus:ring-0 focus:border-brand-500 focus:bg-brand-50
    ${error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'}
    ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
  `

  const renderInput = () => {
    switch (field.type) {
      case FIELD_TYPES.DATE:
        return (
          <input
            ref={inputRef}
            type="date"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={baseInputClasses}
          />
        )

      case FIELD_TYPES.TIME:
        return (
          <input
            ref={inputRef}
            type="time"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={baseInputClasses}
          />
        )

      case FIELD_TYPES.EMAIL:
        return (
          <input
            ref={inputRef}
            type="email"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter email address"
            disabled={disabled}
            className={baseInputClasses}
          />
        )

      case FIELD_TYPES.PHONE:
        return (
          <input
            ref={inputRef}
            type="tel"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter phone number"
            disabled={disabled}
            className={baseInputClasses}
          />
        )

      case FIELD_TYPES.NUMBER:
        return (
          <input
            ref={inputRef}
            type="number"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter number"
            disabled={disabled}
            className={baseInputClasses}
          />
        )

      case FIELD_TYPES.TEXTAREA:
        return (
          <textarea
            ref={inputRef}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            rows={4}
            disabled={disabled}
            className={baseInputClasses}
          />
        )

      case FIELD_TYPES.SIGNATURE:
        return (
          <div className="space-y-3">
            <input
              ref={inputRef}
              type="text"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Type your full name as digital signature"
              disabled={disabled}
              className={`${baseInputClasses} text-xl italic`}
              style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
            />
            {value && (
              <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                <Check className="w-4 h-4" />
                <span>Digitally signed on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</span>
              </div>
            )}
          </div>
        )

      case FIELD_TYPES.SELECT:
        return (
          <select
            ref={inputRef}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={baseInputClasses}
          >
            <option value="">Select an option...</option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        )

      default:
        return (
          <input
            ref={inputRef}
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            disabled={disabled}
            className={baseInputClasses}
          />
        )
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="w-8 h-8 rounded-lg bg-[#132163] flex items-center justify-center">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <label className="font-medium text-gray-900">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
        {value && !error && (
          <div className="flex items-center gap-1 text-green-600 text-sm">
            <Check className="w-4 h-4" />
            <span>Filled</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4">
        {renderInput()}
        {error && (
          <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

export default function FillableForm({
  fields,
  values,
  onChange,
  errors = {},
  disabled = false
}) {
  // Group fields by type for better organization
  const checkboxFields = fields.filter(f => f.type === FIELD_TYPES.CHECKBOX)
  const inputFields = fields.filter(f => f.type !== FIELD_TYPES.CHECKBOX)

  const handleFieldChange = (fieldId, value) => {
    onChange({
      ...values,
      [fieldId]: value
    })
  }

  // Calculate completion progress
  const totalFields = fields.length
  const completedFields = fields.filter(f => {
    const val = values[f.id]
    if (f.type === FIELD_TYPES.CHECKBOX) return val === true
    return val !== undefined && val !== null && val !== ''
  }).length
  const progressPercent = totalFields > 0 ? Math.round((completedFields / totalFields) * 100) : 0

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      {totalFields > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Form Progress</span>
            <span className="text-sm text-gray-500">{completedFields} of {totalFields} fields</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                progressPercent === 100 ? 'bg-green-500' : 'bg-brand-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {progressPercent === 100 && (
            <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <Check className="w-4 h-4" />
              All fields completed! Ready to submit.
            </p>
          )}
        </div>
      )}

      {/* Input fields */}
      {inputFields.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-[#132163] mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Form Fields
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {inputFields.map((field) => (
              <div
                key={field.id}
                className={`
                  ${field.type === FIELD_TYPES.TEXTAREA ? 'lg:col-span-2' : ''}
                  ${field.type === FIELD_TYPES.SIGNATURE ? 'lg:col-span-2' : ''}
                `}
              >
                <InputCard
                  field={field}
                  value={values[field.id]}
                  onChange={(val) => handleFieldChange(field.id, val)}
                  error={errors[field.id]}
                  disabled={disabled}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Checkbox/Checklist fields */}
      {checkboxFields.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-[#132163] mb-4 flex items-center gap-2">
            <Check className="w-5 h-5" />
            Checklist Items
            <span className="text-sm font-normal text-gray-500 ml-2">
              (Click anywhere on an item to check/uncheck)
            </span>
          </h3>
          <div className="space-y-3">
            {checkboxFields.map((field) => (
              <CheckboxCard
                key={field.id}
                field={field}
                value={values[field.id]}
                onChange={(val) => handleFieldChange(field.id, val)}
                disabled={disabled}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {fields.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Fillable Fields Detected</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            This form template doesn't contain recognizable fillable fields.
            Forms should use markdown tables with empty cells for input areas.
          </p>
        </div>
      )}
    </div>
  )
}

// Export YesNoToggle for use in other components
export { YesNoToggle, CheckboxCard, InputCard }
