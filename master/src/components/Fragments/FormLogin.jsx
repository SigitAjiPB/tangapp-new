import InputForm from "../Elements/Input/index";

const FormLogin =  () => {
  return (
    <form action="">
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
    </form>
  )
}

export default FormLogin