import InputForm from "../Elements/Input"
import TextareaForm from "../Elements/Textarea"
import Button from "../Elements/Button"
import { useDispatch } from 'react-redux';
import { addEvent } from '../../redux/slices/eventSlice';
import React, { useState } from 'react';

const FormEvent = () => {

  const dispatch = useDispatch()
  // const events = useSelector((state) => state.event.events)
    const [eventData, setEventData] = useState({
        id: new Date().toISOString(),
        eventName: '',
        totalCost: '',
        participants: [],
        date: '',
        eventOrganizer: '',
        description: ''
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
  
        setEventData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault() 
        dispatch(addEvent(eventData))
        console.log(eventData)
        setEventData({
          eventName: '',
          totalCost: '',
          participants: '',
          date: '',
          eventOrganizer: '',
          description: '',
        });
      };
    

    return (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
            <InputForm 
            value={eventData.eventName} 
            onChange={handleChange}
            
            wrapp='col-span-6 sm:col-span-3'
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            name='eventName'
            htmlFor='EventName'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            value={eventData.date} onChange={handleChange}
            
            wrapp='col-span-6 sm:col-span-3'
            label='Date of Event' 
            type='date' 
            placeholder='Event Date' 
            name='date'
            htmlFor='EventDate'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            value={eventData.eventOrganizer} onChange={handleChange}

            wrapp='col-span-6 sm:col-span-4'
            label='Event Orgenizer' 
            type='text' 
            placeholder='Event Orgenigger' 
            name='eventOrganizer'
            htmlFor='EventOrganizer'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>

            <InputForm
            value={eventData.totalCost} onChange={handleChange}

            wrapp='col-span-6 sm:col-span-2'
            label='Event Cost' 
            type='number' 
            placeholder='Event Cost' 
            name='totalCost'
            htmlFor='EventCost'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <TextareaForm
            
            wrapp='col-span-12 sm:col-span-6'
            label='Event Bio'
            htmlFor='EventBio'
            placeholder='Event Bio'
            labelStyle="block text-sm font-medium text-gray-700"
            textareaStyle='mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none'
            />

            <Button 
            type='submit'  
            variant='col-span-4 bg-sky-400 w-full text-white font-bold sm:row-start-3 sm:col-span-2 hover:bg-sky-500 hover:shadow-md'>
                Submit
            </Button>

            
        </form>
    )
}

export default FormEvent