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
      label='Email' 
      type='email' 
      placeholder='example@gmail.com' 
      name='email'/>
      <InputForm 
      label='Password' 
      type='password' 
      placeholder='***' 
      name='password'/>
      <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  )
}

export default FormLogin