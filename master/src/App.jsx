
import LoginPage from "./Pages/login"
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./Pages/register"
import HomePage from "./Pages/home"
// import EventFormPage from "./Pages/formEvent"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/eventform" element={<EventFormPage />} /> */}
      </Routes>

    </>
  )
}

export default App
