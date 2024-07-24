import InputForm from "../Elements/Input/index";

const FormRegister =  () => {
  return (
    <form action="">
      <InputForm 
      label='Full Name' 
      type='text' 
      placeholder='Inser Your Name Here' 
      name='Full Name'/>

      <InputForm 
      label='Email' 
      type='email' 
      placeholder='example@gmail.com' 
      name='email'/>

      <InputForm 
      label='Pasword' 
      type='pasword' 
      placeholder='***' 
      name='pasword'/>
      
      <InputForm 
      label='Confirm Password'  
      type='pasword' 
      placeholder='***' 
      name='confirmPassword'/>
    </form>
  )
}

export default FormRegister