/**
 * WorkflowProgress.jsx
 * Visual workflow progress indicator with history timeline
 */

import { Check, Circle, Clock, XCircle, ChevronRight, User, MessageSquare } from 'lucide-react'
import { format, parseISO } from 'date-fns'

function StepIcon({ status, isCurrent }) {
  if (status === 'completed') {
    return (
      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
        <Check className="w-5 h-5 text-white" />
      </div>
    )
  }

  if (status === 'rejected') {
    return (
      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
        <XCircle className="w-5 h-5 text-white" />
      </div>
    )
  }

  if (isCurrent) {
    return (
      <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center animate-pulse">
        <Clock className="w-5 h-5 text-white" />
      </div>
    )
  }

  return (
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
      <Circle className="w-5 h-5 text-gray-400" />
    </div>
  )
}

export function WorkflowSteps({ steps, currentStepId, status }) {
  const currentIndex = steps.findIndex(s => s.id === currentStepId)

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isPast = index < currentIndex || status === 'completed'
        const isCurrent = step.id === currentStepId && status === 'active'
        const isRejected = status === 'cancelled' && step.id === currentStepId

        return (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <StepIcon
                status={isPast ? 'completed' : isRejected ? 'rejected' : 'pending'}
                isCurrent={isCurrent}
              />
              <span className={`
                mt-2 text-xs font-medium text-center max-w-[80px]
                ${isCurrent ? 'text-brand-600' : isPast ? 'text-green-600' : 'text-gray-500'}
              `}>
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`
                flex-1 h-0.5 mx-2 mt-[-1rem]
                ${isPast ? 'bg-green-500' : 'bg-gray-200'}
              `} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export function WorkflowHistory({ history }) {
  if (!history || history.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500 text-sm">
        No history yet
      </div>
    )
  }

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {history.map((entry, index) => (
          <li key={index}>
            <div className="relative pb-8">
              {index !== history.length - 1 && (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`
                    h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white
                    ${entry.action === 'approve' || entry.action === 'submitted' || entry.action === 'started'
                      ? 'bg-green-500'
                      : entry.action === 'reject'
                        ? 'bg-red-500'
                        : 'bg-gray-400'
                    }
                  `}>
                    {entry.action === 'approve' || entry.action === 'submitted' ? (
                      <Check className="h-4 w-4 text-white" />
                    ) : entry.action === 'reject' ? (
                      <XCircle className="h-4 w-4 text-white" />
                    ) : entry.action === 'started' ? (
                      <Clock className="h-4 w-4 text-white" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-white" />
                    )}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-900">
                      <span className="font-medium capitalize">{entry.action}</span>
                      {' at '}
                      <span className="font-medium">{entry.step}</span>
                    </p>
                    {entry.comment && (
                      <p className="mt-1 text-sm text-gray-500 flex items-start gap-1">
                        <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {entry.comment}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {entry.by_name || entry.by}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-xs text-gray-500">
                    {entry.at && format(parseISO(entry.at), 'MMM d, yyyy')}
                    <br />
                    {entry.at && format(parseISO(entry.at), 'h:mm a')}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function WorkflowProgress({
  instance,
  template,
  onAction,
  canTakeAction = true
}) {
  const steps = template?.steps || []
  const currentStep = steps.find(s => s.id === instance?.current_step_id)
  const availableActions = currentStep?.actions || []

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {instance?.template_name || 'Workflow'}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              {instance?.entity_title}
            </p>
          </div>
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${instance?.status === 'active' ? 'bg-blue-100 text-blue-700' :
              instance?.status === 'completed' ? 'bg-green-100 text-green-700' :
              'bg-red-100 text-red-700'}
          `}>
            {instance?.status}
          </span>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="px-6 py-6">
        <WorkflowSteps
          steps={steps}
          currentStepId={instance?.current_step_id}
          status={instance?.status}
        />
      </div>

      {/* Actions */}
      {instance?.status === 'active' && canTakeAction && availableActions.length > 0 && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Current step: <span className="font-medium">{currentStep?.name}</span>
            </p>
            <div className="flex gap-2">
              {availableActions.includes('reject') && (
                <button
                  onClick={() => onAction?.('reject')}
                  className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Reject
                </button>
              )}
              {availableActions.includes('request_changes') && (
                <button
                  onClick={() => onAction?.('request_changes')}
                  className="px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Request Changes
                </button>
              )}
              {availableActions.includes('approve') && (
                <button
                  onClick={() => onAction?.('approve')}
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg"
                >
                  Approve
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* History */}
      <div className="px-6 py-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-4">History</h4>
        <WorkflowHistory history={instance?.history} />
      </div>
    </div>
  )
}
