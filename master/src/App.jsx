
import LoginPage from "./Pages/login"
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./Pages/register"
import HomePage from "./Pages/home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </>
  )
}

export default App
