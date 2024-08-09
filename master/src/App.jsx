
import LoginPage from "./Pages/login"
import { Routes, Route, Outlet } from "react-router-dom"
import RegisterPage from "./Pages/register"
import HomePage from "./Pages/home"
import BillingPage from "./Pages/billings"
import EventFormPage from "./Pages/eventform"
import { useState } from "react"

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
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: events.length + 1, participants: event.participants.split(', ') }]);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="billings" element={<BillingPage events={events}/>} />
          <Route path="eventform" element={<EventFormPage addEvent={addEvent} />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </>
  )
}

export default App
