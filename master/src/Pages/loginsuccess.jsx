import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const LoginSuccess = () => {
  const [user, setUser] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')

    if (token) {
      try {
        // Custom decode function for the JWT payload
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const decodedPayload = JSON.parse(atob(base64))

        setUser({
          email: decodedPayload.email,
          name: decodedPayload.name,
        })
      } catch (error) {
        console.error('Failed to decode token:', error)
      }
    }
  }, [location])

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <h1>Error: Unable to decode token</h1>
      )}
    </div>
  )
}

export default LoginSuccess
