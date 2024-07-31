
import LoginPage from "./Pages/login"
import { Routes, Route, Outlet } from "react-router-dom"
import RegisterPage from "./Pages/register"
import HomePage from "./Pages/home"
import EventFormPage from "./Pages/formEvent"
// import HomePage from "./Pages/home"

function Dashboard() {
  return (
    <>
      <HomePage>
        <Outlet/>
      </HomePage>
    </>
  )
}


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="eventform" element={<EventFormPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </>
  )
}

export default App
