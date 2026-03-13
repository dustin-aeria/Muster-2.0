/**
 * Optimized Google Form Templates
 *
 * Design Principles:
 * - Mobile-first (large touch targets, single column)
 * - 2-3 minute completion time for daily forms
 * - Sections with progress bar
 * - Conditional logic where supported
 * - Accessibility compliant
 * - Reduced checkbox fatigue
 */

// ============================================
// IMSAFE - FITNESS FOR DUTY (Optimized)
// Original: 358 lines, ~15 minutes
// Optimized: ~2 minutes, 6 key questions
// ============================================
export const IMSAFE_FORM = {
  title: 'IMSAFE Fitness for Duty',
  description: 'Quick self-assessment before flight operations. Be honest - your safety depends on it.',
  sections: [
    {
      title: 'Flight Information',
      description: 'Auto-filled where possible',
      questions: [
        { title: 'Date', type: 'date', required: true },
        { title: 'Your Name', type: 'text', required: true },
        {
          title: 'Role Today',
          type: 'dropdown',
          required: true,
          options: ['Pilot in Command (PIC)', 'Pilot', 'Visual Observer', 'Payload Operator']
        },
        { title: 'Project/Location', type: 'text', required: true }
      ]
    },
    {
      title: 'IMSAFE Check',
      description: 'Answer YES if you are FIT. Any NO = discuss with supervisor before flying.',
      questions: [
        {
          title: 'I - ILLNESS: Am I free from illness, symptoms, fever, headache, or anything affecting my performance?',
          type: 'multipleChoice',
          required: true,
          options: ['YES - I am healthy', 'NO - I have symptoms']
        },
        {
          title: 'M - MEDICATION: Am I free from medications that cause drowsiness or impairment?',
          type: 'multipleChoice',
          required: true,
          options: ['YES - No impairing medications', 'NO - I am on medication that may affect me']
        },
        {
          title: 'S - STRESS: Am I free from significant stress that could affect my concentration?',
          type: 'multipleChoice',
          required: true,
          options: ['YES - I can focus fully', 'NO - I am significantly stressed']
        },
        {
          title: 'A - ALCOHOL: Have I been alcohol-free for 12+ hours with no aftereffects?',
          type: 'multipleChoice',
          required: true,
          options: ['YES - 12+ hours, no effects', 'NO - Less than 12 hours or have aftereffects']
        },
        {
          title: 'F - FATIGUE: Did I get adequate sleep (7+ hours) and feel alert?',
          type: 'multipleChoice',
          required: true,
          options: ['YES - Well rested and alert', 'NO - Tired or inadequate sleep']
        },
        {
          title: 'E - EMOTION/EATING: Am I emotionally stable and properly nourished/hydrated?',
          type: 'multipleChoice',
          required: true,
          options: ['YES - Stable and nourished', 'NO - Emotional concerns or not properly fed']
        }
      ]
    },
    {
      title: 'Declaration',
      questions: [
        {
          title: 'Overall Fitness Status',
          type: 'multipleChoice',
          required: true,
          options: [
            'FIT FOR DUTY - All clear',
            'FIT WITH LIMITATIONS - Minor concerns, can proceed with caution',
            'UNFIT FOR DUTY - Cannot fly today'
          ]
        },
        {
          title: 'If any concerns, explain briefly',
          type: 'paragraph',
          required: false
        },
        {
          title: 'I confirm I have honestly assessed my fitness and will stop operations if my condition changes',
          type: 'multipleChoice',
          required: true,
          options: ['I confirm']
        }
      ]
    }
  ]
}

// ============================================
// PRE-FLIGHT CHECKLIST (Optimized)
// Original: 172 lines, ~10 minutes
// Optimized: ~3 minutes, section-based
// ============================================
export const PREFLIGHT_FORM = {
  title: 'Pre-Flight Checklist',
  description: 'Complete before each flight. Checks are grouped - confirm ALL items in each group pass.',
  sections: [
    {
      title: 'Flight Setup',
      questions: [
        { title: 'Date', type: 'date', required: true },
        { title: 'Aircraft ID', type: 'text', required: true },
        { title: 'PIC Name', type: 'text', required: true },
        { title: 'Location', type: 'text', required: true }
      ]
    },
    {
      title: 'Documentation',
      description: 'Confirm ALL items are complete',
      questions: [
        {
          title: 'Documentation Complete?',
          description: 'FLHA done, Weather checked, NOTAMs reviewed, Airspace authorization (if needed), Site survey complete, Crew briefed',
          type: 'multipleChoice',
          required: true,
          options: ['All documentation complete', 'Missing items - cannot proceed']
        }
      ]
    },
    {
      title: 'Aircraft Inspection',
      description: 'Visual inspection of airframe, propulsion, and battery',
      questions: [
        {
          title: 'Airframe Check',
          description: 'Frame intact, arms secure, landing gear OK, all fasteners tight, panels secure',
          type: 'multipleChoice',
          required: true,
          options: ['All airframe checks PASS', 'Issue found']
        },
        {
          title: 'Propulsion Check',
          description: 'Props undamaged, correct orientation, secure, motors spin freely, no debris',
          type: 'multipleChoice',
          required: true,
          options: ['All propulsion checks PASS', 'Issue found']
        },
        {
          title: 'Battery Check',
          description: 'Charged, no swelling/damage, secure connection, properly mounted',
          type: 'multipleChoice',
          required: true,
          options: ['Battery checks PASS', 'Issue found']
        },
        { title: 'Battery Voltage', type: 'text', required: true, description: 'Enter voltage (e.g., 24.5V)' }
      ]
    },
    {
      title: 'Payload',
      questions: [
        {
          title: 'Payload Status',
          type: 'multipleChoice',
          required: true,
          options: ['No payload this flight', 'Payload mounted, connected, functional, within weight limits', 'Payload issue']
        }
      ]
    },
    {
      title: 'Controller & Power-Up',
      questions: [
        {
          title: 'Controller Ready',
          description: 'Charged, antennas positioned, display visible, sticks centered, switches correct',
          type: 'multipleChoice',
          required: true,
          options: ['Controller ready', 'Issue found']
        },
        { title: 'Controller Battery %', type: 'text', required: true },
        {
          title: 'System Link & GPS',
          description: 'Controller on first, aircraft powered, link established, GPS acquired, home point set',
          type: 'multipleChoice',
          required: true,
          options: ['All systems linked and ready', 'Issue with link or GPS']
        },
        { title: 'GPS Satellites', type: 'text', required: true, description: 'Number of satellites' },
        { title: 'RTH Altitude (m AGL)', type: 'text', required: true }
      ]
    },
    {
      title: 'Environment',
      questions: [
        {
          title: 'Environment Check',
          description: 'Takeoff area clear, landing area identified, obstacles noted, wind acceptable, no persons in zone',
          type: 'multipleChoice',
          required: true,
          options: ['Environment safe for flight', 'Hazard identified']
        }
      ]
    },
    {
      title: 'Final Decision',
      questions: [
        {
          title: 'GO / NO-GO',
          type: 'multipleChoice',
          required: true,
          options: ['GO - All checks pass, cleared for flight', 'NO-GO - Issue prevents flight']
        },
        {
          title: 'If NO-GO, describe the issue',
          type: 'paragraph',
          required: false
        },
        { title: 'PIC Initials', type: 'text', required: true },
        { title: 'Time', type: 'time', required: true }
      ]
    }
  ]
}

// ============================================
// FLHA - FIELD LEVEL HAZARD ASSESSMENT (Optimized)
// ============================================
export const FLHA_FORM = {
  title: 'Field Level Hazard Assessment (FLHA)',
  description: 'Identify hazards and controls before starting work. Required daily.',
  sections: [
    {
      title: 'Site Information',
      questions: [
        { title: 'Date', type: 'date', required: true },
        { title: 'Time', type: 'time', required: true },
        { title: 'Location/Site', type: 'text', required: true },
        { title: 'Project/Job', type: 'text', required: true },
        { title: 'Your Name', type: 'text', required: true }
      ]
    },
    {
      title: 'Weather Check',
      questions: [
        { title: 'Temperature (°C)', type: 'text', required: true },
        { title: 'Wind Speed (km/h)', type: 'text', required: true },
        {
          title: 'Wind Direction',
          type: 'dropdown',
          options: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'Calm']
        },
        { title: 'Visibility (km)', type: 'text', required: true },
        {
          title: 'Precipitation',
          type: 'multipleChoice',
          options: ['None', 'Light Rain', 'Heavy Rain', 'Snow', 'Fog']
        },
        {
          title: 'Weather Acceptable for Operations?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes - conditions acceptable', 'No - weather prevents operations']
        }
      ]
    },
    {
      title: 'Crew Fitness',
      questions: [
        {
          title: 'All crew members have confirmed they are fit for duty (IMSAFE complete)?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes - all crew fit', 'No - crew fitness concern']
        }
      ]
    },
    {
      title: 'Hazard Identification',
      description: 'Select ALL hazards present at this site',
      questions: [
        {
          title: 'Terrain Hazards',
          type: 'checkbox',
          options: ['Slopes/uneven ground', 'Water/drowning risk', 'Obstacles', 'Unstable surface', 'None']
        },
        {
          title: 'Traffic Hazards',
          type: 'checkbox',
          options: ['Vehicle traffic', 'Pedestrians', 'Other aircraft', 'None']
        },
        {
          title: 'Environmental Hazards',
          type: 'checkbox',
          options: ['Extreme heat', 'Extreme cold', 'UV exposure', 'High noise', 'Wildlife', 'None']
        },
        {
          title: 'Electrical/Chemical Hazards',
          type: 'checkbox',
          options: ['Power lines', 'Electrical equipment', 'Fuels', 'Batteries', 'Other chemicals', 'None']
        },
        {
          title: 'Other Hazards Not Listed',
          type: 'paragraph',
          required: false
        }
      ]
    },
    {
      title: 'Controls & PPE',
      questions: [
        {
          title: 'What controls are in place for identified hazards?',
          description: 'Describe barriers, procedures, or actions taken',
          type: 'paragraph',
          required: true
        },
        {
          title: 'PPE Required',
          type: 'checkbox',
          options: ['Safety footwear', 'High-vis vest', 'Hard hat', 'Safety glasses', 'Hearing protection', 'Gloves', 'Other']
        },
        {
          title: 'All required PPE verified present?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes', 'No']
        }
      ]
    },
    {
      title: 'Emergency Preparedness',
      questions: [
        { title: 'Emergency Contact Number', type: 'text', required: true },
        { title: 'Nearest Hospital/Medical', type: 'text', required: true },
        { title: 'Rally Point Location', type: 'text', required: true },
        {
          title: 'First aid kit on site?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes', 'No']
        }
      ]
    },
    {
      title: 'Go / No-Go',
      questions: [
        {
          title: 'Pre-Task Briefing Conducted?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes - all crew briefed on hazards and controls', 'No']
        },
        {
          title: 'Decision',
          type: 'multipleChoice',
          required: true,
          options: ['GO - All hazards controlled, proceed with work', 'NO-GO - Uncontrolled hazards, cannot proceed']
        },
        {
          title: 'If NO-GO, explain',
          type: 'paragraph',
          required: false
        }
      ]
    }
  ]
}

// ============================================
// INCIDENT REPORT (Optimized)
// ============================================
export const INCIDENT_FORM = {
  title: 'Incident Report',
  description: 'Report any incident, injury, or near miss. Complete as soon as possible after the event.',
  sections: [
    {
      title: 'Incident Details',
      questions: [
        { title: 'Date of Incident', type: 'date', required: true },
        { title: 'Time of Incident', type: 'time', required: true },
        { title: 'Location', type: 'text', required: true },
        { title: 'Your Name (Reporter)', type: 'text', required: true },
        {
          title: 'Incident Type',
          type: 'multipleChoice',
          required: true,
          options: ['Near Miss', 'Minor Injury (first aid)', 'Serious Injury (medical attention)', 'Property Damage', 'Environmental Release', 'Aircraft Incident']
        }
      ]
    },
    {
      title: 'What Happened',
      questions: [
        {
          title: 'Describe what happened',
          description: 'Be specific: what was the task, what went wrong, what was the outcome',
          type: 'paragraph',
          required: true
        },
        {
          title: 'Persons Involved',
          description: 'Names of anyone involved or injured',
          type: 'paragraph',
          required: false
        },
        {
          title: 'Witnesses',
          description: 'Names of witnesses',
          type: 'paragraph',
          required: false
        }
      ]
    },
    {
      title: 'Immediate Response',
      questions: [
        {
          title: 'What immediate actions were taken?',
          type: 'paragraph',
          required: true
        },
        {
          title: 'Medical attention required?',
          type: 'multipleChoice',
          required: true,
          options: ['No medical attention needed', 'First aid administered on site', 'Sent to medical facility', 'Emergency services called']
        },
        {
          title: 'Operations stopped?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes - work stopped', 'No - able to continue safely', 'N/A']
        }
      ]
    },
    {
      title: 'Contributing Factors',
      questions: [
        {
          title: 'What factors contributed to this incident?',
          type: 'checkbox',
          options: ['Weather/environment', 'Equipment failure', 'Human error', 'Inadequate procedures', 'Training gap', 'Communication breakdown', 'Time pressure', 'Fatigue', 'Other']
        },
        {
          title: 'Additional details on contributing factors',
          type: 'paragraph',
          required: false
        }
      ]
    },
    {
      title: 'Follow-Up',
      questions: [
        {
          title: 'Supervisor notified?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes', 'No - will notify immediately after submission']
        },
        {
          title: 'Recommended actions to prevent recurrence',
          type: 'paragraph',
          required: false
        },
        {
          title: 'Photos/evidence attached?',
          type: 'multipleChoice',
          options: ['Yes - will email separately', 'No photos needed', 'N/A']
        }
      ]
    }
  ]
}

// ============================================
// WORKSITE INSPECTION (Optimized)
// ============================================
export const INSPECTION_FORM = {
  title: 'Worksite Inspection',
  description: 'Regular safety inspection of work area. Quick daily check.',
  sections: [
    {
      title: 'Inspection Info',
      questions: [
        { title: 'Date', type: 'date', required: true },
        { title: 'Time', type: 'time', required: true },
        { title: 'Location', type: 'text', required: true },
        { title: 'Inspector Name', type: 'text', required: true }
      ]
    },
    {
      title: 'Site Conditions',
      description: 'Rate each area. Flag any concerns.',
      questions: [
        {
          title: 'Housekeeping (clean, organized, clear paths)',
          type: 'multipleChoice',
          required: true,
          options: ['Satisfactory', 'Minor issues noted', 'Unsatisfactory - action required']
        },
        {
          title: 'PPE Compliance (all workers wearing required PPE)',
          type: 'multipleChoice',
          required: true,
          options: ['Satisfactory', 'Minor issues noted', 'Unsatisfactory - action required']
        },
        {
          title: 'Equipment Condition (tools and equipment in good order)',
          type: 'multipleChoice',
          required: true,
          options: ['Satisfactory', 'Minor issues noted', 'Unsatisfactory - action required']
        },
        {
          title: 'Hazard Controls (barriers, signs, controls in place)',
          type: 'multipleChoice',
          required: true,
          options: ['Satisfactory', 'Minor issues noted', 'Unsatisfactory - action required']
        },
        {
          title: 'Emergency Equipment (first aid, fire extinguisher accessible)',
          type: 'multipleChoice',
          required: true,
          options: ['Satisfactory', 'Minor issues noted', 'Unsatisfactory - action required']
        }
      ]
    },
    {
      title: 'Findings',
      questions: [
        {
          title: 'Describe any issues found',
          type: 'paragraph',
          required: false
        },
        {
          title: 'Corrective actions taken or required',
          type: 'paragraph',
          required: false
        },
        {
          title: 'Overall Site Status',
          type: 'multipleChoice',
          required: true,
          options: ['SAFE - Continue operations', 'CONDITIONAL - Address issues before continuing', 'UNSAFE - Stop work until resolved']
        }
      ]
    }
  ]
}

// ============================================
// POST-FLIGHT CHECKLIST (Optimized)
// ============================================
export const POSTFLIGHT_FORM = {
  title: 'Post-Flight Checklist',
  description: 'Complete after each flight to document status and any issues.',
  sections: [
    {
      title: 'Flight Summary',
      questions: [
        { title: 'Date', type: 'date', required: true },
        { title: 'Aircraft ID', type: 'text', required: true },
        { title: 'PIC Name', type: 'text', required: true },
        { title: 'Location', type: 'text', required: true },
        { title: 'Flight Duration (minutes)', type: 'text', required: true },
        { title: 'Number of Flights Today', type: 'text', required: true }
      ]
    },
    {
      title: 'Aircraft Status',
      questions: [
        {
          title: 'Any damage or issues observed?',
          type: 'multipleChoice',
          required: true,
          options: ['No - aircraft in good condition', 'Yes - issue found']
        },
        {
          title: 'If yes, describe the issue',
          type: 'paragraph',
          required: false
        },
        {
          title: 'Battery Status After Flight',
          type: 'multipleChoice',
          required: true,
          options: ['Normal - charging for next use', 'Low - needs extended charge', 'Issue - swelling, heat, damage']
        },
        { title: 'Battery % Remaining', type: 'text', required: false }
      ]
    },
    {
      title: 'Data & Storage',
      questions: [
        {
          title: 'Payload data captured successfully?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes', 'No - issue with capture', 'N/A - no payload']
        },
        {
          title: 'SD card removed and secured?',
          type: 'multipleChoice',
          options: ['Yes', 'No - left in aircraft', 'N/A']
        }
      ]
    },
    {
      title: 'Incidents',
      questions: [
        {
          title: 'Any incidents, near misses, or unusual events?',
          type: 'multipleChoice',
          required: true,
          options: ['No incidents', 'Yes - incident report required']
        },
        {
          title: 'If yes, briefly describe',
          type: 'paragraph',
          required: false
        }
      ]
    },
    {
      title: 'Completion',
      questions: [
        {
          title: 'Aircraft Status for Next Flight',
          type: 'multipleChoice',
          required: true,
          options: ['SERVICEABLE - Ready for next flight', 'GROUNDED - Requires maintenance or inspection']
        },
        { title: 'PIC Signature/Initials', type: 'text', required: true },
        { title: 'Time', type: 'time', required: true }
      ]
    }
  ]
}

// ============================================
// TAILGATE MEETING (Optimized)
// ============================================
export const TAILGATE_FORM = {
  title: 'Tailgate Safety Meeting',
  description: 'Quick crew briefing before starting work. Document attendance and topics.',
  sections: [
    {
      title: 'Meeting Info',
      questions: [
        { title: 'Date', type: 'date', required: true },
        { title: 'Time', type: 'time', required: true },
        { title: 'Location/Project', type: 'text', required: true },
        { title: 'Meeting Leader', type: 'text', required: true }
      ]
    },
    {
      title: 'Topics Covered',
      questions: [
        {
          title: 'Select topics discussed',
          type: 'checkbox',
          required: true,
          options: ["Today's scope of work", 'Hazards identified', 'Controls in place', 'Emergency procedures', 'Weather conditions', 'Equipment status', 'PPE requirements', 'Communication plan', 'Stop work authority']
        },
        {
          title: 'Additional topics or notes',
          type: 'paragraph',
          required: false
        }
      ]
    },
    {
      title: 'Attendance',
      description: 'List all attendees (comma separated)',
      questions: [
        {
          title: 'Attendee Names',
          description: 'Enter names of all crew members present',
          type: 'paragraph',
          required: true
        },
        { title: 'Number of Attendees', type: 'text', required: true }
      ]
    },
    {
      title: 'Confirmation',
      questions: [
        {
          title: 'All attendees understand the hazards and controls for today?',
          type: 'multipleChoice',
          required: true,
          options: ['Yes - all confirmed understanding', 'No - additional clarification needed']
        }
      ]
    }
  ]
}

// Export all templates
export const FORM_TEMPLATES = {
  'IMSAFE': IMSAFE_FORM,
  'Pre-Flight': PREFLIGHT_FORM,
  'FLHA': FLHA_FORM,
  'Incident Report': INCIDENT_FORM,
  'Worksite Inspection': INSPECTION_FORM,
  'Post-Flight': POSTFLIGHT_FORM,
  'Tailgate Meeting': TAILGATE_FORM
}
