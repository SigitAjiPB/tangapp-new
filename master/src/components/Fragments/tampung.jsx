const FormLogin = () => {
  const googleLogin = () => {
    const redirectUri = 'http://localhost:8080/auth/google' // Your specified redirect URI
    window.location.href = redirectUri
  }

  return (
    <>
      <button onClick={googleLogin}>Login with Google</button>
    </>
  )
}

export default FormLogin
