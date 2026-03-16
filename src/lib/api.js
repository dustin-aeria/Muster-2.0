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

// ============================================
// TASKS
// ============================================

export async function getTasks(includeArchived = false) {
  let query = supabase
    .from('tasks')
    .select('*')
    .order('due_date', { ascending: true, nullsFirst: false })
    .order('priority', { ascending: false })

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getTask(id) {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createTask(task) {
  const { data, error } = await supabase
    .from('tasks')
    .insert(task)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateTask(id, updates) {
  const { data, error } = await supabase
    .from('tasks')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteTask(id) {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// TIME ENTRIES
// ============================================

export async function getTimeEntries(filters = {}) {
  let query = supabase
    .from('time_entries')
    .select('*')
    .order('entry_date', { ascending: false })

  if (filters.startDate) {
    query = query.gte('entry_date', filters.startDate)
  }
  if (filters.endDate) {
    query = query.lte('entry_date', filters.endDate)
  }
  if (filters.projectId) {
    query = query.eq('project_id', filters.projectId)
  }
  if (filters.operatorId) {
    query = query.eq('operator_id', filters.operatorId)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getTimeEntry(id) {
  const { data, error } = await supabase
    .from('time_entries')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createTimeEntry(entry) {
  const { data, error } = await supabase
    .from('time_entries')
    .insert(entry)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateTimeEntry(id, updates) {
  const { data, error } = await supabase
    .from('time_entries')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteTimeEntry(id) {
  const { error } = await supabase
    .from('time_entries')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// EXPENSES
// ============================================

export async function getExpenses(includeArchived = false, filters = {}) {
  let query = supabase
    .from('expenses')
    .select('*')
    .order('expense_date', { ascending: false })

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }
  if (filters.category) {
    query = query.eq('category', filters.category)
  }
  if (filters.projectId) {
    query = query.eq('project_id', filters.projectId)
  }
  if (filters.startDate) {
    query = query.gte('expense_date', filters.startDate)
  }
  if (filters.endDate) {
    query = query.lte('expense_date', filters.endDate)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getExpense(id) {
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createExpense(expense) {
  const { data, error } = await supabase
    .from('expenses')
    .insert(expense)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateExpense(id, updates) {
  const { data, error } = await supabase
    .from('expenses')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteExpense(id) {
  const { error } = await supabase
    .from('expenses')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// PROJECT STAGES
// ============================================

export async function getProjectStages() {
  const { data, error } = await supabase
    .from('project_stages')
    .select('*')
    .eq('status', 'active')
    .order('sort_order')

  if (error) throw error
  return data
}

export async function createProjectStage(stage) {
  const { data, error } = await supabase
    .from('project_stages')
    .insert(stage)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateProjectStage(id, updates) {
  const { data, error } = await supabase
    .from('project_stages')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteProjectStage(id) {
  const { error } = await supabase
    .from('project_stages')
    .update({ status: 'archived' })
    .eq('id', id)

  if (error) throw error
}

// ============================================
// PROJECTS
// ============================================

export async function getProjects(includeArchived = false, filters = {}) {
  let query = supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }
  if (filters.stageId) {
    query = query.eq('stage_id', filters.stageId)
  }
  if (filters.status) {
    query = query.eq('status', filters.status)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getProject(id) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createProject(project) {
  const { data, error } = await supabase
    .from('projects')
    .insert(project)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateProject(id, updates) {
  const { data, error } = await supabase
    .from('projects')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteProject(id) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// PROJECT RESOURCES
// ============================================

export async function getProjectResources(projectId) {
  const { data, error } = await supabase
    .from('project_resources')
    .select('*')
    .eq('project_id', projectId)
    .order('resource_type')
    .order('resource_name')

  if (error) throw error
  return data
}

export async function createProjectResource(resource) {
  const { data, error } = await supabase
    .from('project_resources')
    .insert(resource)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateProjectResource(id, updates) {
  const { data, error } = await supabase
    .from('project_resources')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteProjectResource(id) {
  const { error } = await supabase
    .from('project_resources')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// TAILGATE MEETINGS
// ============================================

export async function getTailgateMeetings(projectId = null) {
  let query = supabase
    .from('tailgate_meetings')
    .select('*')
    .order('meeting_date', { ascending: false })

  if (projectId) {
    query = query.eq('project_id', projectId)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getTailgateMeeting(id) {
  const { data, error } = await supabase
    .from('tailgate_meetings')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createTailgateMeeting(meeting) {
  const { data, error } = await supabase
    .from('tailgate_meetings')
    .insert(meeting)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateTailgateMeeting(id, updates) {
  const { data, error } = await supabase
    .from('tailgate_meetings')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteTailgateMeeting(id) {
  const { error } = await supabase
    .from('tailgate_meetings')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// NOTIFICATION LOG
// ============================================

export async function logNotification(notification) {
  const { data, error } = await supabase
    .from('notification_log')
    .insert(notification)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getNotificationLog(sourceType = null, sourceId = null) {
  let query = supabase
    .from('notification_log')
    .select('*')
    .order('created_at', { ascending: false })

  if (sourceType) query = query.eq('source_type', sourceType)
  if (sourceId) query = query.eq('source_id', sourceId)

  const { data, error } = await query
  if (error) throw error
  return data
}

// ============================================
// TRAINING - LEARNING PATHS
// ============================================

export async function getLearningPaths(includeArchived = false) {
  let query = supabase
    .from('learning_paths')
    .select('*')
    .order('category')
    .order('name')

  if (!includeArchived) {
    query = query.neq('status', 'archived')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getLearningPath(id) {
  const { data, error } = await supabase
    .from('learning_paths')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createLearningPath(path) {
  const { data, error } = await supabase
    .from('learning_paths')
    .insert(path)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateLearningPath(id, updates) {
  const { data, error } = await supabase
    .from('learning_paths')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteLearningPath(id) {
  const { error } = await supabase
    .from('learning_paths')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// TRAINING - MODULES
// ============================================

export async function getModulesForPath(pathId) {
  const { data, error } = await supabase
    .from('training_modules')
    .select('*')
    .eq('path_id', pathId)
    .order('sequence')

  if (error) throw error
  return data
}

export async function createModule(module) {
  const { data, error } = await supabase
    .from('training_modules')
    .insert(module)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateModule(id, updates) {
  const { data, error } = await supabase
    .from('training_modules')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteModule(id) {
  const { error } = await supabase
    .from('training_modules')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// TRAINING - MODULE ITEMS
// ============================================

export async function getItemsForModule(moduleId) {
  const { data, error } = await supabase
    .from('module_items')
    .select('*')
    .eq('module_id', moduleId)
    .order('sequence')

  if (error) throw error
  return data
}

export async function createModuleItem(item) {
  const { data, error } = await supabase
    .from('module_items')
    .insert(item)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateModuleItem(id, updates) {
  const { data, error } = await supabase
    .from('module_items')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteModuleItem(id) {
  const { error } = await supabase
    .from('module_items')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// TRAINING - RECORDS & PROGRESS
// ============================================

export async function getTrainingRecordsForOperator(operatorId) {
  const { data, error } = await supabase
    .from('training_records')
    .select(`
      *,
      learning_paths (*),
      module_completions (module_id, completed_at),
      item_completions (item_id, completed_at, supervisor_id)
    `)
    .eq('operator_id', operatorId)
    .order('assigned_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getAllTrainingRecords() {
  const { data, error } = await supabase
    .from('training_records')
    .select(`
      *,
      learning_paths (name, category),
      operators (name)
    `)
    .order('due_date', { ascending: true, nullsFirst: false })

  if (error) throw error
  return data
}

export async function getTrainingRecord(id) {
  const { data, error } = await supabase
    .from('training_records')
    .select(`
      *,
      learning_paths (*),
      module_completions (module_id, completed_at),
      item_completions (item_id, completed_at, supervisor_id, supervisor_notes)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function assignTraining(operatorId, pathId, dueDate = null, assignedBy = null) {
  const { data, error } = await supabase
    .from('training_records')
    .insert({
      operator_id: operatorId,
      path_id: pathId,
      due_date: dueDate,
      assigned_by: assignedBy,
      status: 'not_started'
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateTrainingRecord(id, updates) {
  const { data, error } = await supabase
    .from('training_records')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function startTraining(recordId) {
  const { data, error } = await supabase
    .from('training_records')
    .update({
      status: 'in_progress',
      started_at: new Date().toISOString()
    })
    .eq('id', recordId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function completeTraining(recordId) {
  const { data, error } = await supabase
    .from('training_records')
    .update({
      status: 'completed',
      completed_at: new Date().toISOString()
    })
    .eq('id', recordId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function completeItem(recordId, itemId, supervisorId = null, supervisorNotes = null) {
  const { data, error } = await supabase
    .from('item_completions')
    .insert({
      record_id: recordId,
      item_id: itemId,
      supervisor_id: supervisorId,
      supervisor_notes: supervisorNotes
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function completeModule(recordId, moduleId) {
  const { data, error } = await supabase
    .from('module_completions')
    .insert({
      record_id: recordId,
      module_id: moduleId
    })
    .select()
    .single()

  if (error) throw error
  return data
}

// ============================================
// TRAINING - CERTIFICATIONS
// ============================================

export async function getCertificationsForOperator(operatorId) {
  const { data, error } = await supabase
    .from('certifications')
    .select('*')
    .eq('operator_id', operatorId)
    .order('expiry_date', { ascending: true, nullsFirst: false })

  if (error) throw error
  return data
}

export async function getAllCertifications() {
  const { data, error } = await supabase
    .from('certifications')
    .select(`
      *,
      operators (name)
    `)
    .order('expiry_date', { ascending: true, nullsFirst: false })

  if (error) throw error
  return data
}

export async function createCertification(cert) {
  const { data, error } = await supabase
    .from('certifications')
    .insert(cert)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateCertification(id, updates) {
  const { data, error } = await supabase
    .from('certifications')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteCertification(id) {
  const { error } = await supabase
    .from('certifications')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// TRAINING - FULL PATH WITH MODULES & ITEMS
// ============================================

export async function getFullLearningPath(pathId) {
  // Get the path
  const { data: path, error: pathError } = await supabase
    .from('learning_paths')
    .select('*')
    .eq('id', pathId)
    .single()

  if (pathError) throw pathError

  // Get modules
  const { data: modules, error: modulesError } = await supabase
    .from('training_modules')
    .select('*')
    .eq('path_id', pathId)
    .order('sequence')

  if (modulesError) throw modulesError

  // Get items for each module
  const modulesWithItems = await Promise.all(
    modules.map(async (module) => {
      const { data: items, error: itemsError } = await supabase
        .from('module_items')
        .select('*')
        .eq('module_id', module.id)
        .order('sequence')

      if (itemsError) throw itemsError
      return { ...module, items: items || [] }
    })
  )

  return { ...path, modules: modulesWithItems }
}
