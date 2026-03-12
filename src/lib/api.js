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
// FORM SUBMISSIONS
// ============================================

export async function getFormSubmissions(formId = null, status = null) {
  let query = supabase
    .from('form_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (formId) {
    query = query.eq('form_id', formId)
  }

  if (status) {
    query = query.eq('status', status)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getFormSubmission(id) {
  const { data, error } = await supabase
    .from('form_submissions')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createFormSubmission(submission) {
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('form_submissions')
    .insert({
      ...submission,
      created_by: user?.id
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateFormSubmission(id, updates) {
  const { data, error } = await supabase
    .from('form_submissions')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function submitFormSubmission(id) {
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('form_submissions')
    .update({
      status: 'submitted',
      submitted_at: new Date().toISOString(),
      submitted_by: user?.id,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteFormSubmission(id) {
  const { error } = await supabase
    .from('form_submissions')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// WORKFLOW TEMPLATES
// ============================================

export async function getWorkflowTemplates(includeInactive = false) {
  let query = supabase
    .from('workflow_templates')
    .select('*')
    .order('name')

  if (!includeInactive) {
    query = query.eq('status', 'active')
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getWorkflowTemplate(id) {
  const { data, error } = await supabase
    .from('workflow_templates')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createWorkflowTemplate(template) {
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('workflow_templates')
    .insert({
      ...template,
      created_by: user?.id
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateWorkflowTemplate(id, updates) {
  const { data, error } = await supabase
    .from('workflow_templates')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteWorkflowTemplate(id) {
  const { error } = await supabase
    .from('workflow_templates')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ============================================
// WORKFLOW INSTANCES
// ============================================

export async function getWorkflowInstances(status = null) {
  let query = supabase
    .from('workflow_instances')
    .select('*')
    .order('created_at', { ascending: false })

  if (status) {
    query = query.eq('status', status)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getWorkflowInstance(id) {
  const { data, error } = await supabase
    .from('workflow_instances')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function startWorkflow(templateId, entityType, entityId, entityTitle) {
  const { data: { user } } = await supabase.auth.getUser()

  // Get the template
  const template = await getWorkflowTemplate(templateId)
  if (!template) throw new Error('Workflow template not found')

  const steps = template.steps || []
  const firstStep = steps.find(s => s.order === 1) || steps[0]

  if (!firstStep) throw new Error('Workflow template has no steps')

  const { data, error } = await supabase
    .from('workflow_instances')
    .insert({
      template_id: templateId,
      template_name: template.name,
      entity_type: entityType,
      entity_id: entityId,
      entity_title: entityTitle,
      current_step_id: firstStep.id,
      current_step_name: firstStep.name,
      status: 'active',
      started_by: user?.id,
      history: [{
        step: firstStep.id,
        action: 'started',
        by: user?.id,
        by_name: user?.email,
        at: new Date().toISOString(),
        comment: ''
      }]
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function advanceWorkflow(instanceId, action, comment = '') {
  const { data: { user } } = await supabase.auth.getUser()

  // Get current instance
  const instance = await getWorkflowInstance(instanceId)
  if (!instance) throw new Error('Workflow instance not found')

  // Get template to find next step
  const template = await getWorkflowTemplate(instance.template_id)
  const steps = template?.steps || []
  const currentStepIndex = steps.findIndex(s => s.id === instance.current_step_id)
  const currentStep = steps[currentStepIndex]
  const nextStep = steps[currentStepIndex + 1]

  // Update history
  const newHistory = [
    ...instance.history,
    {
      step: instance.current_step_id,
      action: action,
      by: user?.id,
      by_name: user?.email,
      at: new Date().toISOString(),
      comment: comment
    }
  ]

  // Determine new status and step
  let updates = {
    history: newHistory,
    updated_at: new Date().toISOString()
  }

  if (action === 'approve' && nextStep) {
    // Move to next step
    updates.current_step_id = nextStep.id
    updates.current_step_name = nextStep.name

    if (nextStep.final) {
      updates.status = 'completed'
      updates.completed_at = new Date().toISOString()
    }
  } else if (action === 'reject') {
    updates.status = 'cancelled'
    updates.completed_at = new Date().toISOString()
  } else if (action === 'approve' && !nextStep) {
    // No next step, workflow is complete
    updates.status = 'completed'
    updates.completed_at = new Date().toISOString()
  }

  const { data, error } = await supabase
    .from('workflow_instances')
    .update(updates)
    .eq('id', instanceId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function assignWorkflow(instanceId, userId, userName, userEmail) {
  const { data, error } = await supabase
    .from('workflow_instances')
    .update({
      assigned_to: userId,
      assigned_to_name: userName,
      assigned_to_email: userEmail,
      updated_at: new Date().toISOString()
    })
    .eq('id', instanceId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getMyWorkflowTasks() {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return []

  const { data, error } = await supabase
    .from('workflow_instances')
    .select('*')
    .eq('assigned_to', user.id)
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
