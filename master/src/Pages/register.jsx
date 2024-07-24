import AuthLayout from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"

const RegisterPage = () =>  {
  return (
    <AuthLayout tittle='Register' >
      <FormRegister/>
    </AuthLayout>
  )
}
export default RegisterPage