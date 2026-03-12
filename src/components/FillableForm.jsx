/**
 * FillableForm.jsx
 * Interactive form component that renders parsed fields as inputs
 */

import { useState, useRef } from 'react'
import { FIELD_TYPES } from '../lib/formParser'
import { CheckSquare, Square, Calendar, Mail, Phone, Hash, FileText, PenLine } from 'lucide-react'

function FieldInput({ field, value, onChange, error }) {
  const inputRef = useRef(null)

  const baseInputClasses = `
    w-full px-3 py-2 border rounded-lg transition-colors
    focus:ring-2 focus:ring-brand-500 focus:border-brand-500
    ${error ? 'border-red-300 bg-red-50' : 'border-gray-300'}
  `

  switch (field.type) {
    case FIELD_TYPES.CHECKBOX:
      return (
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={value || false}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <span className={`
            w-5 h-5 flex items-center justify-center rounded border-2 transition-colors
            ${value
              ? 'bg-brand-600 border-brand-600 text-white'
              : 'border-gray-300 group-hover:border-brand-400'
            }
          `}>
            {value && <CheckSquare className="w-4 h-4" />}
          </span>
          <span className="text-gray-700">{field.label}</span>
        </label>
      )

    case FIELD_TYPES.DATE:
      return (
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            ref={inputRef}
            type="date"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClasses} pl-10`}
          />
        </div>
      )

    case FIELD_TYPES.TIME:
      return (
        <input
          ref={inputRef}
          type="time"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
        />
      )

    case FIELD_TYPES.EMAIL:
      return (
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            ref={inputRef}
            type="email"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${baseInputClasses} pl-10`}
          />
        </div>
      )

    case FIELD_TYPES.PHONE:
      return (
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            ref={inputRef}
            type="tel"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${baseInputClasses} pl-10`}
          />
        </div>
      )

    case FIELD_TYPES.NUMBER:
      return (
        <div className="relative">
          <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            ref={inputRef}
            type="number"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${baseInputClasses} pl-10`}
          />
        </div>
      )

    case FIELD_TYPES.TEXTAREA:
      return (
        <textarea
          ref={inputRef}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={3}
          className={baseInputClasses}
        />
      )

    case FIELD_TYPES.SIGNATURE:
      return (
        <div className="space-y-2">
          <div className="relative">
            <PenLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Type your full name as signature"
              className={`${baseInputClasses} pl-10 font-signature italic`}
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            />
          </div>
          {value && (
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <CheckSquare className="w-3 h-3 text-green-500" />
              Digitally signed on {new Date().toLocaleDateString()}
            </p>
          )}
        </div>
      )

    case FIELD_TYPES.SELECT:
      return (
        <select
          ref={inputRef}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
        >
          <option value="">Select...</option>
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
          placeholder={field.placeholder}
          className={baseInputClasses}
        />
      )
  }
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

  return (
    <div className="space-y-6">
      {/* Regular input fields */}
      {inputFields.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputFields.map((field) => (
            <div
              key={field.id}
              className={`
                ${field.type === FIELD_TYPES.TEXTAREA ? 'md:col-span-2' : ''}
                ${field.type === FIELD_TYPES.SIGNATURE ? 'md:col-span-2' : ''}
              `}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <FieldInput
                field={field}
                value={values[field.id]}
                onChange={(val) => handleFieldChange(field.id, val)}
                error={errors[field.id]}
              />
              {errors[field.id] && (
                <p className="mt-1 text-sm text-red-600">{errors[field.id]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Checkbox fields */}
      {checkboxFields.length > 0 && (
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Checklist Items</h4>
          <div className="space-y-3">
            {checkboxFields.map((field) => (
              <div key={field.id}>
                <FieldInput
                  field={field}
                  value={values[field.id]}
                  onChange={(val) => handleFieldChange(field.id, val)}
                  error={errors[field.id]}
                />
                {errors[field.id] && (
                  <p className="mt-1 text-sm text-red-600 ml-8">{errors[field.id]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {fields.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <FileText className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>No fillable fields detected in this form.</p>
          <p className="text-sm mt-1">The form may not have table-based input fields.</p>
        </div>
      )}
    </div>
  )
}
