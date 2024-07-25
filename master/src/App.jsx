
import LoginPage from "./Pages/login"
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./Pages/register"

function App() {

  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        {/* <LoginPage/> */}
        {/* <RegisterPage/> */}
      </div>
    </>
  )
}

export default App
