import InputForm from "../Elements/Input"
import TextareaForm from "../Elements/Textarea"
import Button from "../Elements/Button"
import { useState } from "react"

const FormEvent = ({ addEvent }) => {

  // ==========  Sebelum Perubahan  ==========
    const [event, setEvent] = useState({
      name: '',
      totalCost: '',
      participants: '',
      date: '',
      eventOrganizer: '',
      description: ''
    })
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value});
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        addEvent(event)
        setEvent({
          name: '',
          totalCost: '',
          participants: '',
          date: '',
          eventOrganizer: '',
          description: ''
        })
    }

    // ==========   Sesudah Perubahan  ============

    // const [eventName, setEventName] = useState('');
    // const [eventDate, setEventDate] = useState('');

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const newEvent = { name: eventName, date: eventDate };
    //   addEvent(newEvent);
    //   setEventName('');
    //   setEventDate('');
    // };

    return (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
            <InputForm 
            onChange = {handleChange}
            value = {event.name}
            wrapp='col-span-6 sm:col-span-3'
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            name='event_name'
            htmlFor='EventName'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            onChange = {handleChange}
            value = {event.date}
            wrapp='col-span-6 sm:col-span-3'
            label='Date of Event' 
            type='date' 
            placeholder='Event Date' 
            name='event_date'
            htmlFor='EventDate'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            onChange = {handleChange}
            value = {event.eventOrganizer}
            wrapp='col-span-6 sm:col-span-4'
            label='Event Orgenizer' 
            type='text' 
            placeholder='Event Orgenigger' 
            name='event_orgenizer'
            htmlFor='EventOrgenizer'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>

            <InputForm
            onChange = {handleChange} 
            value = {event.totalCost}
            wrapp='col-span-6 sm:col-span-2'
            label='Event Cost' 
            type='number' 
            placeholder='Event Cost' 
            name='event_cost'
            htmlFor='EventCost'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <TextareaForm
            onChange = {handleChange}
            value = {event.description}
            wrapp='col-span-12 sm:col-span-6'
            label='Event Bio'
            htmlFor='EventBio'
            placeholder='Event Bio'
            labelStyle="block text-sm font-medium text-gray-700"
            textareaStyle='mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none'
            />

            <Button 
            type='submit'  
            variant='col-span-4 bg-sky-400 w-full text-white font-bold sm:row-start-3 sm:col-span-2'>
                Submit
            </Button>

            
        </form>
    )
}

export default FormEvent