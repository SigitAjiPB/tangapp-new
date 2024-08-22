import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";
import { useRef, useEffect, useState } from "react";
import { login } from "../../services/auth.service";
const FormLogin =  () => {
  const [loginFailed, setLoginFailed] = useState('')
  
  const handleLogin = (e) => {

    const username = e.target.username.value
    const password = e.target.Password.value

    e.preventDefault()
    // localStorage.setItem('email', email)
    // localStorage.setItem('password', password)
    window.location.href = "/"
    const data = {
      username: username,
      password: password
    }

    login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res)
      } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data);
        
      }
    })

  }

  const usernameRef = useRef(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);


  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-500">{loginFailed}</p>}
      <InputForm
      ref = {usernameRef}
      htmlFor='username'
      label='Username' 
      type='text' 
      id='username'
      name='username'
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