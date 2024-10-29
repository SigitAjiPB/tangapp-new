
import LoginPage from "./Pages/login"
import { Routes, Route, Outlet } from "react-router-dom"
import RegisterPage from "./Pages/register"
import HomePage from "./Pages/home"
import BillingPage from "./Pages/billings"
import EventFormPage from "./Pages/eventform"
import ProfilePage from "./Pages/profile"
import DetailEventPage from "./Pages/detailEvent"
import SettingPage from "./Pages/settings"
import UserPage from "./Pages/user"

function Dashboard() {
  return (
    <div className="wrapper">
      <HomePage>
        <Outlet/>
      </HomePage>
    </div>
  )
}


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="billings" element={<BillingPage/>} />
          <Route path="eventform" element={<EventFormPage />} />
          <Route path="settings" element={<SettingPage />} />
          <Route path="/detail/:id" element={<DetailEventPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

    </>
  )
}

export default App
