import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {
  LayoutDashboard,
  Users,
  Plane,
  Briefcase,
  FileText,
  Shield,
  FolderOpen,
  Calendar,
  Clock,
  DollarSign,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  {
    name: 'Libraries',
    icon: FolderOpen,
    children: [
      { name: 'Operators', href: '/operators', icon: Users },
      { name: 'Equipment', href: '/equipment', icon: Plane },
      { name: 'Services', href: '/services', icon: Briefcase },
    ]
  },
  {
    name: 'Documents',
    icon: FileText,
    children: [
      { name: 'All Documents', href: '/documents', icon: FileText },
      { name: 'Policies', href: '/policies', icon: FileText },
      { name: 'Procedures', href: '/procedures', icon: FileText },
      { name: 'Hazard Assessments', href: '/fha', icon: Shield },
    ]
  },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  {
    name: 'Safety',
    icon: Shield,
    children: [
      { name: 'Incidents', href: '/incidents', icon: Shield },
      { name: 'Inspections', href: '/inspections', icon: FileText },
      { name: 'CAPAs', href: '/capas', icon: FileText },
      { name: 'JHSC', href: '/jhsc', icon: Users },
    ]
  },
  {
    name: 'Utilities',
    icon: Clock,
    children: [
      { name: 'Tasks', href: '/tasks', icon: FileText },
      { name: 'Time Tracking', href: '/time', icon: Clock },
      { name: 'Expenses', href: '/expenses', icon: DollarSign },
      { name: 'Calendar', href: '/calendar', icon: Calendar },
    ]
  },
]

function NavItem({ item, collapsed }) {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = item.href
    ? location.pathname === item.href
    : item.children?.some(child => location.pathname === child.href)

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={clsx(
            'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors',
            isActive ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-100'
          )}
        >
          <item.icon className="w-5 h-5 flex-shrink-0" />
          {!collapsed && (
            <>
              <span className="flex-1 font-medium">{item.name}</span>
              <ChevronDown className={clsx('w-4 h-4 transition-transform', open && 'rotate-180')} />
            </>
          )}
        </button>
        {!collapsed && open && (
          <div className="mt-1 ml-4 pl-4 border-l border-gray-200 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                  location.pathname === child.href
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                <child.icon className="w-4 h-4" />
                <span className="text-sm">{child.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      to={item.href}
      className={clsx(
        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
        isActive ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-100'
      )}
    >
      <item.icon className="w-5 h-5 flex-shrink-0" />
      {!collapsed && <span className="font-medium">{item.name}</span>}
    </Link>
  )
}

export default function Layout({ children }) {
  const { user, signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Muster</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-8rem)]">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">
                {user?.email?.[0]?.toUpperCase() || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.email || 'User'}
              </p>
            </div>
            <button
              onClick={signOut}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-4 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <Link
            to="/settings"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
