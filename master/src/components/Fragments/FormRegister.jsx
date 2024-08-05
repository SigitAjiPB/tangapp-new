import InputForm from "../Elements/Input/index";

const FormRegister =  () => {
  return (
    <form action="">
      <InputForm 
      label='Full Name' 
      type='text' 
      placeholder='Inser Your Name Here' 
      name='full_name'
      htmlFor='FullName'
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2'/>

      <InputForm 
      label='Email' 
      type='email' 
      placeholder='example@gmail.com' 
      name='email'
      htmlFor= 'Email'
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2'/>

      <InputForm 
      label='Password' 
      type='password' 
      placeholder='***' 
      name='password'
      htmlFor='Password'
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2'/>
      
      <InputForm 
      label='Confirm Password'  
      type='password' 
      placeholder='***' 
      name='confirmPassword'
      htmlFor='ConfirmPassword'
      labelStyle='block text-slate-700 text-sm font-bold mb-2'
      inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2'/>
    </form>
  )
}

export default FormRegister