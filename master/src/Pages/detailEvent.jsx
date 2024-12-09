
import Invoice from '../components/Fragments/Invoice'
import InputForm from "../components/Elements/Input"
import TextareaForm from "../components/Elements/Textarea/index"
import DynamicInput from "../components/Elements/User-Input/ResultInput"
import OrganizerInput from "../components/Elements/Organizer_Input/OrganizerInput"
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useIdLogin } from "../hooks/useIdLogin"

const DetailEventPage = ({ eventData, formState, handleEventSubmit, selectedEvent}) => {
    
  const { id } = useParams(); 
  const event = eventData.find(event => event.id === parseInt(id))
  const userId = useIdLogin()
  
    useEffect(()=> {
        if (userId === eventData[0].eventOrganizerId) {
            setIsEditable(true)
        } else {
            setIsEditable(false)
        }
    }, [userId])

  const [inputValue, setInputValue] = useState({
    id: 1,
    eventName: '',
    eventDate: '',
    eventCost: 0,
    eventOrganizer: '',
    eventOrganizerId: 0,
    eventDescribtion: '',
    participants: [
      {
        id: 0,
        participantName: ''
      }
    ],
    invoiceDetail: {
        id: 0,
        itemName: '',
        itemQuantity: 0,
        itemPrice: 0,
        totalPrice:0
    }
})


  const [isEditable, setIsEditable] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault() 
    handleEventSubmit(inputValue)
}

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
}

  if (!event) { 
    return <div>Event not found</div>
}


  return (
      <> 
          <section className=" shadow-md rounded-md m-4 p-8 border">  
                  <form onSubmit={()=>handleSubmit} className=" grid grid-cols-6 gap-4 p-4">
                  <div className="text-2xl col-span-6 text-slate-800 px-4 flex w-full justify-between">
                      <span>Detail Event</span>
                      <button type='submit' className="px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded">Save Changes</button>
                  </div>
                      <InputForm
                        onChange={handleChange}
                        readOnly = {`${isEditable && 'readOnly'}`}
                        value = {formState === 'update' ? selectedEvent.eventName : ''}
                        wrapp='col-span-6 sm:col-span-2 '
                        label='Event Name' 
                        type='text' 
                        placeholder='Event Name' 
                        name='eventName'
                        htmlFor='EventName'
                        labelStyle="block text-sm font-medium text-gray-700"
                        inputStyle={`mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border`}
                          
                      ></InputForm>
                      <InputForm
                          
                          value={formState === 'update' ? selectedEvent.eventDate : ''}
                          wrapp='col-span-6 sm:col-span-2'
                          label='Date' 
                          type='date' 
                          placeholder='Event Name' 
                          name='eventDate'
                          htmlFor='EventDate'
                          labelStyle="block text-sm font-medium text-gray-700"
                          inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border"
                      ></InputForm>
                      <InputForm
                          readOnly = {`${isEditable && 'readOnly'}`}
                          value={formState === 'update' ? selectedEvent.eventCost : ''}
                          wrapp='col-span-6 sm:col-span-2'
                          label='Event Cost' 
                          type='text' 
                          placeholder='Rp. -,' 
                          name='eventCost'
                          htmlFor='EventCost'
                          labelStyle="block text-sm font-medium text-gray-700"
                          inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border"
                      ></InputForm>

                      
                      <OrganizerInput
                          value = {formState === 'update' ? selectedEvent.eventOrganizer : ''}
                          eventData={eventData}
                          formState = {formState}
                          />

                      <TextareaForm
                          textareaStyle='w-full rounded-lg text-sm outline-none mt-1 p-2 border-gray-200 bg-white text-gray-700 shadow-sm outline-none border'
                          wrapp = 'col-span-4'
                          name = "eventDescribtion"
                          htmlFor ="eventDescribtion"
                          label ="Event Describtion"
                          labelStyle = " block text-sm font-medium text-gray-700"
                          placeholder='Describ your event here' 
                          value = {formState === 'update' ? selectedEvent.eventDescribtion : ''}
                      ></TextareaForm>

                      <DynamicInput 
                        participants = {formState === 'update' ? selectedEvent.participants : ''}
                        formState = {formState}
                      />

                      <Invoice/>

                      
                  </form>
          </section>
      </>
  )
}

export default DetailEventPage
