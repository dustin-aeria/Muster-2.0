import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Layout from './components/layout/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Operators from './pages/Operators'
import Equipment from './pages/Equipment'
import Services from './pages/Services'
import Documents from './pages/Documents'
import Forms from './pages/Forms'
import WorkflowTasks from './pages/WorkflowTasks'
import Workflows from './pages/Workflows'
import WorkflowTemplates from './pages/WorkflowTemplates'

// Protected route wrapper
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Layout>{children}</Layout>
}

// Placeholder page for routes not yet built
function ComingSoon({ title }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-500">Coming soon in Phase 2+</p>
    </div>
  )
}

function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <Routes>
      {/* Auth routes */}
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Libraries */}
      <Route path="/operators" element={<ProtectedRoute><Operators /></ProtectedRoute>} />
      <Route path="/equipment" element={<ProtectedRoute><Equipment /></ProtectedRoute>} />
      <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />

      {/* Documents */}
      <Route path="/documents" element={<ProtectedRoute><Documents /></ProtectedRoute>} />
      <Route path="/policies" element={<ProtectedRoute><Documents /></ProtectedRoute>} />
      <Route path="/procedures" element={<ProtectedRoute><Documents /></ProtectedRoute>} />
      <Route path="/fha" element={<ProtectedRoute><Documents /></ProtectedRoute>} />
      <Route path="/forms" element={<ProtectedRoute><Forms /></ProtectedRoute>} />

      {/* Workflows */}
      <Route path="/workflow-tasks" element={<ProtectedRoute><WorkflowTasks /></ProtectedRoute>} />
      <Route path="/workflows" element={<ProtectedRoute><Workflows /></ProtectedRoute>} />
      <Route path="/workflow-templates" element={<ProtectedRoute><WorkflowTemplates /></ProtectedRoute>} />

      {/* Projects */}
      <Route path="/projects" element={<ProtectedRoute><ComingSoon title="Projects" /></ProtectedRoute>} />

      {/* Safety */}
      <Route path="/incidents" element={<ProtectedRoute><ComingSoon title="Incidents" /></ProtectedRoute>} />
      <Route path="/inspections" element={<ProtectedRoute><ComingSoon title="Inspections" /></ProtectedRoute>} />
      <Route path="/capas" element={<ProtectedRoute><ComingSoon title="CAPAs" /></ProtectedRoute>} />
      <Route path="/jhsc" element={<ProtectedRoute><ComingSoon title="JHSC" /></ProtectedRoute>} />

      {/* Utilities */}
      <Route path="/tasks" element={<ProtectedRoute><ComingSoon title="Tasks" /></ProtectedRoute>} />
      <Route path="/time" element={<ProtectedRoute><ComingSoon title="Time Tracking" /></ProtectedRoute>} />
      <Route path="/expenses" element={<ProtectedRoute><ComingSoon title="Expenses" /></ProtectedRoute>} />
      <Route path="/calendar" element={<ProtectedRoute><ComingSoon title="Calendar" /></ProtectedRoute>} />

      {/* Settings */}
      <Route path="/settings" element={<ProtectedRoute><ComingSoon title="Settings" /></ProtectedRoute>} />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
