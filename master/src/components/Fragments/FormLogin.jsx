import { useState } from 'react'
import { login } from '../../services/auth.service'

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('')

  const handleGoogleLogin = () => {
    const popup = window.open(
      'http://localhost:7878/v1/auth/google',
      '_blank',
      'width=500,height=600'
    )

    // Listen for the message event to capture the token
    const handleTokenMessage = (event) => {
      // Ensure the message is from our origin
      if (event.origin === window.location.origin && event.data.token) {
        localStorage.setItem('token', event.data.token)
        window.location.href = '/' // Redirect to home after successful login
      } else {
        setLoginFailed('Login failed. Please try again.')
      }
    }

    window.addEventListener('message', handleTokenMessage)

    // Clean up the event listener when the popup is closed
    const checkPopupClosed = setInterval(() => {
      if (!popup || popup.closed) {
        clearInterval(checkPopupClosed)
        window.removeEventListener('message', handleTokenMessage)
      }
    }, 500)
  }

  return (
    <div className='login-container'>
      {loginFailed && <p className='text-red-500'>{loginFailed}</p>}
      <button
        onClick={handleGoogleLogin}
        className='bg-sky-400 w-full text-white font-bold h-10 px-6 font-semibold rounded-lg'>
        Sign in with Google
      </button>
    </div>
  )
}

export default FormLogin
