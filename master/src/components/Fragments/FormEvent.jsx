import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { useDispatch } from 'react-redux';
import { addEvent } from '../../redux/slices/eventSlice';
import React, { useState } from 'react';

const FormEvent = () => {

    const dispatch = useDispatch()
    const [eventData, setEventData] = useState({
        id: new Date().toISOString(),
        eventName: '',
        totalCost: '',
        participants: '',
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
            placeholder='Rp.' 
            name='totalCost'
            htmlFor='EventCost'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>

            <InputForm
            value={eventData.descripton} onChange={handleChange}

            wrapp='col-span-12 sm:col-span-6'
            label='description' 
            type='text' 
            placeholder='Event Description' 
            name='description'
            htmlFor='Description'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1  p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>

            <Button 
            type='submit'  
            variant='col-span-4 bg-gradient-to-r from-sky-400 to-sky-600 w-full text-white font-bold sm:col-span-2 hover:bg-sky-500 hover:shadow-md h-10 font-semibold rounded-lg'>
                Save
            </Button>

            
        </form>
    )
}

export default FormEvent