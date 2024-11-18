// import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export const login = () => {
  // Redirect the user to the backend's Google OAuth endpoint
  window.location.href = 'http://localhost:8080/api/auth/google'
}

export const getUsername = (token) => {
  const decoded = jwtDecode(token)
  return decoded.name
}
export const getIat = (token) => {
  const decoded = jwtDecode(token)
  return decoded.exp
}
