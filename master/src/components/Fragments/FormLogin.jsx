import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";
import { useRef, useEffect } from "react";
const FormLogin =  () => {
  
  const handleLogin = (e) => {
    const email = e.target.Email.value
    const password = e.target.Password.value

    e.preventDefault()
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)


    window.location.href = "/"
  }

  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);


  return (
    <form onSubmit={handleLogin}>
      <InputForm
      ref = {emailRef}
      htmlFor='Email'
      label='Email' 
      type='email' 
      id='Email'
      name='Email'
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2 mb-2'
      placeholder='example@gmail.com'/>
      <InputForm 
      htmlFor='Password'
      label='Password' 
      type='password' 
      placeholder='***' 
      name='Password'
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2  mb-6'/>
      
      <Button variant="bg-sky-400 w-full text-white font-bold" type="submit">Login</Button>
    </form>
  )
}

export default FormLogin