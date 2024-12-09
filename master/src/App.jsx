
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
import { useState } from "react"

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
  
const [formState, setFormState] = useState('create')
const [selectedEvent, setSelectedEvent] = useState(null)
  const [eventData, setEventData] = useState([
    {
        id: 1,
        eventName: 'Masak Masak S1',
        eventDate: '2022-01-01',
        eventCost: 120000,
        eventOrganizer: 'Leanne Graham',
        eventOrganizerId: 1,
        eventDescribtion: 'lorem100',
        participants: [
          {
            id: 2,
            participantName: 'Ervin Howell'
          }
        ],
        invoiceDetail: {
            id: 1,
            itemName: 'tepung',
            itemQuantity: 1,
            itemPrice: 10000,
            totalPrice:10000
        }
    },
    {
        id: 2,
        eventName: 'Masak Masak S2',
        eventDate: '2024-02-02',
        eventCost: 90000,
        eventOrganizer: 'Leanne Graham',
        eventOrganizerId: 2,
        eventDescribtion: 'lorem100',
        participants: [
          {
            id: 2,
            participantName: 'Ervin Howell'
          },
          {
            id: 3,
            participantName: 'Onda'
          }
        ],
        invoiceDetail: {
            id: 1,
            itemName: 'Garam',
            itemQuantity: 2,
            itemPrice: 4000,
            totalPrice:8000
        }
    }
])


const handleEventSubmit = (event) => { 
  if (formState === 'create') { 
    const newEvent = { ...event, id: eventData.length + 1 }
    setEventData([...eventData, newEvent])
  } else if (formState === 'update' && selectedEvent) { 
    const updatedEvents = eventData.map(ev => ev.id === selectedEvent.id ? { ...ev, ...event } : ev )
    setEventData(updatedEvents)
    setFormState('create')
    setSelectedEvent(null)
  } 
};

const handleClickToUpdate = (event) => {
  setSelectedEvent(event)
  setFormState('update')
}

console.log(formState)

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="billings" element={<BillingPage formState={formState} eventData={eventData} handleClickToUpdate={handleClickToUpdate}/>} />
          <Route path="eventform" element={<EventFormPage />} />
          <Route path="settings" element={<SettingPage />} />
          <Route path="/detail/:id" element={<DetailEventPage selectedEvent={selectedEvent} formState={formState} eventData={eventData} handleEventSubmit={handleEventSubmit}/>} />
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
