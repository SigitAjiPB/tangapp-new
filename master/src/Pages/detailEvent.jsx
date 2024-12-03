
import Invoice from '../components/Fragments/Invoice'
import InputForm from "../components/Elements/Input"
import TextareaForm from "../components/Elements/Textarea/index"
import DynamicInput from "../components/Elements/User-Input/ResultInput"
import OrganizerInput from "../components/Elements/Organizer_Input/OrganizerInput"
import React, { useState, useEffect } from 'react'
import { useIdLogin } from "../hooks/useIdLogin"

const DetailEventPage = () => {
  const userId = useIdLogin()

  const [inputValue, setInputValue] = useState('')
  const [isEditable, setIsEditable] = useState(false)
  const [message, setMessage] = useState('')


  const [eventData, setEventData] = useState([
      {
          id: 1,
          eventName: 'Masak Masak S1',
          eventDate: '2022-01-01',
          eventCost: 120000,
          eventOrganizer: 'Leanne Graham',
          eventOrganizerId: 1,
          eventDescribtion: 'lorem100',
          participants: {
              id: 1,
              participantName: 'Ervin Howell'
          },
          invoiceDetail: {
              id: 1,
              itemName: 'tepung',
              itemQuantity: 1,
              itemPrice: 10000,
              totalPrice:10000
          }
      }
  ])

  useEffect(()=> {
      if (userId === eventData[0].eventOrganizerId) {
          setIsEditable(true)
      } else {
          setIsEditable(false)
      }
  }, [userId])


  return (
      <> 
          <section className=" shadow-md rounded-md m-4 p-8 border">  
                  <div className="text-2xl text-slate-800 px-4 flex w-full justify-between">
                      <span>Detail Event</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded">Save Changes</button>
                  </div>
                  <form className=" grid grid-cols-6 gap-4 p-4">
                      <InputForm
                          readOnly = {`${isEditable && 'readOnly'}`}
                          value = {eventData[0].eventName}
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
                          
                          value={eventData[0].eventDate}
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
                          value={eventData[0].eventCost}
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
                          eventData={eventData}
                          />

                      <TextareaForm
                          textareaStyle='w-full rounded-lg text-sm outline-none mt-1 p-2 border-gray-200 bg-white text-gray-700 shadow-sm outline-none border'
                          wrapp = 'col-span-4'
                          name = "eventDescribtion"
                          htmlFor ="eventDescribtion"
                          label ="Event Describtion"
                          labelStyle = " block text-sm font-medium text-gray-700"
                          placeholder='Describ your event here' 
                          value = {eventData[0].eventDescribtion}
                      ></TextareaForm>

                      <DynamicInput 
                        eventData = {eventData}
                      />

                      <Invoice/>

                      
                  </form>
          </section>
      </>
  )
}

export default DetailEventPage
