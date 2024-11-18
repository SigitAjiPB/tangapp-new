import { useEffect } from 'react'

const AuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      // Store the token in localStorage
      localStorage.setItem('token', token)

      // Notify the parent window (the main app) that the login was successful
      window.opener.postMessage({ token }, window.location.origin)

      // Close the popup window
      window.close()
    }
  }, [])

  return <p>Completing authentication...</p>
}

export default AuthCallback
