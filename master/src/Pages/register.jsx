import AuthLayout from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"
import Button from "../components/Elements/Button"

const RegisterPage = () =>  {
  return (
    <AuthLayout tittle='Register' type='register'>
      <FormRegister/>
      <Button variant="bg-sky-400 text-white font-bold w-full">Register</Button>
    </AuthLayout>
  )
}
export default RegisterPage