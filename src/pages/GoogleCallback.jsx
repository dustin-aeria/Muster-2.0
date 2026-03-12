/**
 * GoogleCallback.jsx
 * Handles OAuth2 callback from Google
 */

import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { exchangeCodeForTokens, storeGoogleTokens, getGoogleUserInfo } from '../lib/googleAuth'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'

export default function GoogleCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('processing')
  const [error, setError] = useState(null)
  const [userEmail, setUserEmail] = useState(null)

  useEffect(() => {
    handleCallback()
  }, [])

  const handleCallback = async () => {
    const code = searchParams.get('code')
    const errorParam = searchParams.get('error')

    if (errorParam) {
      setStatus('error')
      setError(errorParam === 'access_denied' ? 'Access was denied' : errorParam)
      return
    }

    if (!code) {
      setStatus('error')
      setError('No authorization code received')
      return
    }

    try {
      // Exchange code for tokens
      const tokens = await exchangeCodeForTokens(code)
      storeGoogleTokens(tokens)

      // Get user info
      const userInfo = await getGoogleUserInfo(tokens.access_token)
      setUserEmail(userInfo.email)

      setStatus('success')

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/google-forms')
      }, 2000)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {status === 'processing' && (
          <>
            <Loader className="w-12 h-12 text-brand-600 mx-auto mb-4 animate-spin" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Connecting to Google...</h2>
            <p className="text-gray-500">Please wait while we complete the connection.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Connected!</h2>
            <p className="text-gray-500 mb-4">
              Successfully connected as <strong>{userEmail}</strong>
            </p>
            <p className="text-sm text-gray-400">Redirecting to Google Forms...</p>
          </>
        )}

        {status === 'error' && (
          <>
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Connection Failed</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => navigate('/google-forms')}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  )
}
