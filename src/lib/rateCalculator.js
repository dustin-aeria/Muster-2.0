// ============================================
// RATE CALCULATOR UTILITIES
// Handles rate conversions, modifiers, and pricing
// ============================================

// Standard rate multipliers
export const RATE_MULTIPLIERS = {
  // Personnel rates
  WEEK_FROM_DAY: 4.5,           // 5 days = 4.5x day rate
  HALF_DAY_FROM_DAY: 0.55,      // Half day = 55% of day
  HOURLY_FROM_DAY: 1 / 7.5,     // 7.5 hour work day
  TRAVEL_FROM_FIELD: 0.5,       // Travel day = 50% of field rate

  // Equipment rates
  EQUIPMENT_WEEK_FROM_DAY: 4.0, // 5 days = 4x day rate for equipment
}

// Common modifier percentages
export const COMMON_MODIFIERS = {
  RUSH_50: 1.5,           // +50% rush fee
  RUSH_100: 2.0,          // +100% urgent
  AFTER_HOURS: 1.25,      // +25% after hours
  REMOTE_PREMIUM: 1.15,   // +15% remote location
  HOLIDAY: 1.5,           // +50% holiday rate
  VOLUME_10: 0.9,         // -10% for 10+ days
  VOLUME_20: 0.85,        // -15% for 20+ days
  ANNUAL_CONTRACT: 0.8,   // -20% annual contract
}

/**
 * Calculate all rate variations from a base day rate for personnel
 * @param {number} dayRate - The base day rate
 * @returns {object} Object containing all rate variations
 */
export function calculatePersonnelRates(dayRate) {
  if (!dayRate || dayRate <= 0) return null

  return {
    hourly: Math.round(dayRate * RATE_MULTIPLIERS.HOURLY_FROM_DAY * 100) / 100,
    halfDay: Math.round(dayRate * RATE_MULTIPLIERS.HALF_DAY_FROM_DAY * 100) / 100,
    day: dayRate,
    week: Math.round(dayRate * RATE_MULTIPLIERS.WEEK_FROM_DAY * 100) / 100,
    travel: Math.round(dayRate * RATE_MULTIPLIERS.TRAVEL_FROM_FIELD * 100) / 100,
  }
}

/**
 * Calculate all rate variations from a base day rate for equipment
 * @param {number} dayRate - The base day rate
 * @returns {object} Object containing all rate variations
 */
export function calculateEquipmentRates(dayRate) {
  if (!dayRate || dayRate <= 0) return null

  return {
    day: dayRate,
    week: Math.round(dayRate * RATE_MULTIPLIERS.EQUIPMENT_WEEK_FROM_DAY * 100) / 100,
  }
}

/**
 * Calculate equipment day rate from purchase price and target payoff days
 * @param {number} purchasePrice - Total equipment purchase price
 * @param {number} daysToPayOff - Target number of billing days to pay off
 * @returns {number} Calculated daily rate
 */
export function calculateEquipmentDayRate(purchasePrice, daysToPayOff) {
  if (!purchasePrice || !daysToPayOff || daysToPayOff <= 0) return null
  return Math.round((purchasePrice / daysToPayOff) * 100) / 100
}

/**
 * Apply a modifier to a base rate
 * @param {number} baseRate - The base rate
 * @param {object} modifier - Modifier object with type and value
 * @returns {number} Modified rate
 */
export function applyModifier(baseRate, modifier) {
  if (!baseRate || !modifier) return baseRate

  switch (modifier.modifier_type) {
    case 'percentage':
      // Value is percentage to add (e.g., 50 for +50%)
      return Math.round(baseRate * (1 + modifier.value / 100) * 100) / 100
    case 'multiplier':
      // Value is multiplier (e.g., 1.5 for 50% more)
      return Math.round(baseRate * modifier.value * 100) / 100
    case 'flat_fee':
      // Value is flat amount to add
      return Math.round((baseRate + modifier.value) * 100) / 100
    default:
      return baseRate
  }
}

/**
 * Apply multiple modifiers to a base rate
 * @param {number} baseRate - The base rate
 * @param {array} modifiers - Array of modifier objects
 * @returns {number} Modified rate
 */
export function applyModifiers(baseRate, modifiers) {
  if (!baseRate || !modifiers || modifiers.length === 0) return baseRate

  return modifiers.reduce((rate, modifier) => applyModifier(rate, modifier), baseRate)
}

/**
 * Calculate total cost for a line item
 * @param {number} rate - Unit rate
 * @param {number} quantity - Number of units
 * @param {array} modifiers - Optional modifiers to apply
 * @returns {object} Cost breakdown
 */
export function calculateLineCost(rate, quantity, modifiers = []) {
  const baseRate = rate || 0
  const qty = quantity || 0
  const modifiedRate = applyModifiers(baseRate, modifiers)
  const subtotal = modifiedRate * qty

  return {
    baseRate,
    modifiedRate,
    quantity: qty,
    subtotal: Math.round(subtotal * 100) / 100,
    modifiersApplied: modifiers.length > 0,
  }
}

/**
 * Calculate project totals from an array of line items
 * @param {array} lineItems - Array of line item objects with rate, quantity, modifiers
 * @param {object} options - Options like overhead, markup percentages
 * @returns {object} Project cost summary
 */
export function calculateProjectTotals(lineItems, options = {}) {
  const {
    overheadPercent = 0,
    markupPercent = 0,
    discountPercent = 0,
  } = options

  // Calculate subtotals by category
  const categorized = lineItems.reduce((acc, item) => {
    const category = item.category || 'Other'
    if (!acc[category]) acc[category] = 0
    const cost = calculateLineCost(item.rate, item.quantity, item.modifiers || [])
    acc[category] += cost.subtotal
    return acc
  }, {})

  const subtotal = Object.values(categorized).reduce((sum, val) => sum + val, 0)
  const overhead = subtotal * (overheadPercent / 100)
  const subtotalWithOverhead = subtotal + overhead
  const markup = subtotalWithOverhead * (markupPercent / 100)
  const subtotalWithMarkup = subtotalWithOverhead + markup
  const discount = subtotalWithMarkup * (discountPercent / 100)
  const total = subtotalWithMarkup - discount

  return {
    byCategory: categorized,
    subtotal: Math.round(subtotal * 100) / 100,
    overhead: Math.round(overhead * 100) / 100,
    markup: Math.round(markup * 100) / 100,
    discount: Math.round(discount * 100) / 100,
    total: Math.round(total * 100) / 100,
  }
}

/**
 * Convert a rate from one unit to another
 * @param {number} rate - The rate value
 * @param {string} fromUnit - Current unit (hour, half_day, day, week)
 * @param {string} toUnit - Target unit
 * @returns {number} Converted rate
 */
export function convertRate(rate, fromUnit, toUnit) {
  if (!rate || fromUnit === toUnit) return rate

  // Convert everything to day rate first
  let dayRate = rate
  switch (fromUnit) {
    case 'hour':
      dayRate = rate * 7.5
      break
    case 'half_day':
      dayRate = rate / 0.55
      break
    case 'week':
      dayRate = rate / 4.5
      break
    case 'day':
    default:
      dayRate = rate
  }

  // Convert from day rate to target
  switch (toUnit) {
    case 'hour':
      return Math.round(dayRate / 7.5 * 100) / 100
    case 'half_day':
      return Math.round(dayRate * 0.55 * 100) / 100
    case 'week':
      return Math.round(dayRate * 4.5 * 100) / 100
    case 'day':
    default:
      return Math.round(dayRate * 100) / 100
  }
}

/**
 * Format currency for display
 * @param {number} value - The value to format
 * @param {boolean} showCents - Whether to show cents
 * @returns {string} Formatted currency string
 */
export function formatCurrency(value, showCents = true) {
  if (value === null || value === undefined) return '—'
  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  })
  return formatter.format(value)
}

/**
 * Get rate unit label for display
 * @param {string} unit - The unit code
 * @returns {string} Human-readable label
 */
export function getRateUnitLabel(unit) {
  const labels = {
    hour: '/hr',
    half_day: '/half-day',
    day: '/day',
    week: '/week',
    project: '/project',
    each: '/each',
    per_hectare: '/ha',
    per_km: '/km',
    per_km2: '/km²',
    per_gb: '/GB',
    per_image: '/image',
  }
  return labels[unit] || `/${unit}`
}
