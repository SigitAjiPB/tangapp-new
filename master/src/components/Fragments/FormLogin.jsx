import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";

const FormLogin =  () => {
  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)

    window.location.href = "/"
  }
  return (
    <form onSubmit={handleLogin}>
      <InputForm 
      htmlFor='Email'
      label='Email' 
      type='email' 
      id='Email'
      name='Email'
      placeholder='example@gmail.com'/>
      <InputForm 
      htmlFor='Password'
      label='Password' 
      type='password' 
      placeholder='***' 
      name='Password'/>
      <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  )
}

export default FormLogin