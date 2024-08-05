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
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2'
      placeholder='example@gmail.com'/>
      <InputForm 
      htmlFor='Password'
      label='Password' 
      type='password' 
      placeholder='***' 
      name='Password'
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2'/>
      
      <Button variant="bg-sky-400 w-full text-white font-bold" type="submit">Login</Button>
    </form>
  )
}

export default FormLogin