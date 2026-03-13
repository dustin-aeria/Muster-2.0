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
// DOCUMENTS
// ============================================

export async function getDocuments(docType = null, includeArchived = false) {
  let query = supabase
    .from('documents')
    .select('*')
    .order('doc_type')
    .order('title')

  if (docType) {
    query = query.eq('doc_type', docType)
  }

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getDocument(id) {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createDocument(document) {
  const { data, error } = await supabase
    .from('documents')
    .insert(document)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateDocument(id, updates) {
  const { data, error } = await supabase
    .from('documents')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function archiveDocument(id) {
  return updateDocument(id, { status: 'archived' })
}

export async function deleteDocument(id) {
  const { error } = await supabase
    .from('documents')
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

// ============================================
// INCIDENTS
// ============================================

export async function getIncidents(includeArchived = false) {
  let query = supabase
    .from('incidents')
    .select('*')
    .order('incident_date', { ascending: false })

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getIncident(id) {
  const { data, error } = await supabase
    .from('incidents')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createIncident(incident) {
  const { data, error } = await supabase
    .from('incidents')
    .insert(incident)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateIncident(id, updates) {
  const { data, error } = await supabase
    .from('incidents')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteIncident(id) {
  const { error } = await supabase
    .from('incidents')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// CAPAS (Corrective and Preventive Actions)
// ============================================

export async function getCAPAs(includeArchived = false) {
  let query = supabase
    .from('capas')
    .select('*')
    .order('due_date', { ascending: true })

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getCAPA(id) {
  const { data, error } = await supabase
    .from('capas')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createCAPA(capa) {
  const { data, error } = await supabase
    .from('capas')
    .insert(capa)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateCAPA(id, updates) {
  const { data, error } = await supabase
    .from('capas')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteCAPA(id) {
  const { error } = await supabase
    .from('capas')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// JHSC (Joint Health & Safety Committee)
// ============================================

export async function getJHSCMeetings(includeArchived = false) {
  let query = supabase
    .from('jhsc_meetings')
    .select('*')
    .order('meeting_date', { ascending: false })

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getJHSCMeeting(id) {
  const { data, error } = await supabase
    .from('jhsc_meetings')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createJHSCMeeting(meeting) {
  const { data, error } = await supabase
    .from('jhsc_meetings')
    .insert(meeting)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateJHSCMeeting(id, updates) {
  const { data, error } = await supabase
    .from('jhsc_meetings')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteJHSCMeeting(id) {
  const { error } = await supabase
    .from('jhsc_meetings')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// INSPECTIONS
// ============================================

export async function getInspections(includeArchived = false) {
  let query = supabase
    .from('inspections')
    .select('*')
    .order('inspection_date', { ascending: false })

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getInspection(id) {
  const { data, error } = await supabase
    .from('inspections')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createInspection(inspection) {
  const { data, error } = await supabase
    .from('inspections')
    .insert(inspection)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateInspection(id, updates) {
  const { data, error } = await supabase
    .from('inspections')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteInspection(id) {
  const { error } = await supabase
    .from('inspections')
    .delete()
    .eq('id', id)

  if (error) throw error
}
