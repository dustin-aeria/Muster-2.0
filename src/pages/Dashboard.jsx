import {
  Users,
  Plane,
  Briefcase,
  FileText,
  Shield,
  Calendar,
  Clock,
  DollarSign,
  FolderOpen
} from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Libraries',
    items: [
      { name: 'Operators', icon: Users, href: '/operators', description: 'Team members and certifications' },
      { name: 'Equipment', icon: Plane, href: '/equipment', description: 'Fleet and rates' },
      { name: 'Services', icon: Briefcase, href: '/services', description: 'Service catalog and pricing' },
    ]
  },
  {
    title: 'Documents',
    items: [
      { name: 'Policies', icon: FileText, href: '/policies', description: 'Company policies' },
      { name: 'Procedures', icon: FileText, href: '/procedures', description: 'Operating procedures' },
      { name: 'Hazard Assessments', icon: Shield, href: '/fha', description: 'FHAs and JHAs' },
    ]
  },
  {
    title: 'Projects',
    items: [
      { name: 'Projects', icon: FolderOpen, href: '/projects', description: 'Project planning and management' },
    ]
  },
  {
    title: 'Safety',
    items: [
      { name: 'Incidents', icon: Shield, href: '/incidents', description: 'Incident tracking' },
      { name: 'Inspections', icon: FileText, href: '/inspections', description: 'Inspection records' },
    ]
  },
  {
    title: 'Utilities',
    items: [
      { name: 'Tasks', icon: FileText, href: '/tasks', description: 'Task management' },
      { name: 'Time Tracking', icon: Clock, href: '/time', description: 'Time logs' },
      { name: 'Expenses', icon: DollarSign, href: '/expenses', description: 'Expense tracking' },
      { name: 'Calendar', icon: Calendar, href: '/calendar', description: 'Schedule' },
    ]
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome to Muster</p>
      </div>

      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="p-2 bg-brand-50 rounded-lg">
                  <item.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
