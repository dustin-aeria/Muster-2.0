import { supabase } from './supabase'

// ============================================
// OPERATORS
// ============================================

export async function getOperators(includeArchived = false) {
  let query = supabase
    .from('operators')
    .select('*')
    .order('name')

  if (!includeArchived) {
    query = query.eq('status', 'active')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getOperator(id) {
  const { data, error } = await supabase
    .from('operators')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createOperator(operator) {
  const { data, error } = await supabase
    .from('operators')
    .insert(operator)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateOperator(id, updates) {
  const { data, error } = await supabase
    .from('operators')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function archiveOperator(id) {
  return updateOperator(id, { status: 'archived' })
}

export async function deleteOperator(id) {
  const { error } = await supabase
    .from('operators')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// EQUIPMENT
// ============================================

export async function getEquipment(includeArchived = false) {
  let query = supabase
    .from('equipment')
    .select('*')
    .order('name')

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getEquipmentItem(id) {
  const { data, error } = await supabase
    .from('equipment')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createEquipment(equipment) {
  const { data, error } = await supabase
    .from('equipment')
    .insert(equipment)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateEquipment(id, updates) {
  const { data, error } = await supabase
    .from('equipment')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function archiveEquipment(id) {
  return updateEquipment(id, { status: 'archived' })
}

export async function deleteEquipment(id) {
  const { error } = await supabase
    .from('equipment')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// SERVICES
// ============================================

export async function getServices(includeArchived = false) {
  let query = supabase
    .from('services')
    .select('*')
    .order('category')
    .order('name')

  if (!includeArchived) {
    query = query.eq('status', 'active')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getService(id) {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createService(service) {
  const { data, error } = await supabase
    .from('services')
    .insert(service)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateService(id, updates) {
  const { data, error } = await supabase
    .from('services')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function archiveService(id) {
  return updateService(id, { status: 'archived' })
}

export async function deleteService(id) {
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// SERVICE MODIFIERS
// ============================================

export async function getModifiers() {
  const { data, error } = await supabase
    .from('service_modifiers')
    .select('*')
    .eq('status', 'active')
    .order('name')

  if (error) throw error
  return data
}

export async function createModifier(modifier) {
  const { data, error } = await supabase
    .from('service_modifiers')
    .insert(modifier)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateModifier(id, updates) {
  const { data, error } = await supabase
    .from('service_modifiers')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteModifier(id) {
  const { error } = await supabase
    .from('service_modifiers')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// AMENDMENTS
// ============================================

export async function logAmendment(tableName, recordId, changeSummary, previousValues = null, newValues = null) {
  const { error } = await supabase
    .from('amendments')
    .insert({
      table_name: tableName,
      record_id: recordId,
      change_summary: changeSummary,
      previous_values: previousValues,
      new_values: newValues
    })

  if (error) console.error('Failed to log amendment:', error)
}

export async function getAmendments(tableName, recordId) {
  const { data, error } = await supabase
    .from('amendments')
    .select('*')
    .eq('table_name', tableName)
    .eq('record_id', recordId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
