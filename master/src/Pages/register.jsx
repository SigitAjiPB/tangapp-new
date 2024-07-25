import AuthLayout from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"
import Button from "../components/Elements/Button"

const RegisterPage = () =>  {
  return (
    <AuthLayout tittle='Register' type='register'>
      <FormRegister/>
      <Button variant="bg-blue-600 w-full">Register</Button>
    </AuthLayout>
  )
}
export default RegisterPage