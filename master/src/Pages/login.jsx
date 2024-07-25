import AuthLayout from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FormLogin"
import Button from "../components/Elements/Button"

const LoginPage = () =>  {
  return (
    <AuthLayout tittle='Login' type='login'>
      <FormLogin/>
      <Button variant="bg-blue-600 w-full">Login</Button>
    </AuthLayout>
  )
}
export default LoginPage