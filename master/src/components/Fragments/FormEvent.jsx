import InputForm from "../Elements/Input"

const FormEvent = ()=> {
    return (
        <form className="mt-8 grid grid-cols-6 gap-6">
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Event Name' 
            type='text' 
            placeholder='Inser Your Event Name Here' 
            name='event_name'
            htmlFor='EventName'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Date of Event' 
            type='date' 
            placeholder='Inser Your Event Date Here' 
            name='event_date'
            htmlFor='EventDate'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Event Orgenizer' 
            type='text' 
            placeholder='Inser Event Orgenigger Here' 
            name='event_orgenizer'
            htmlFor='EventOrgenizer'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Event Cost' 
            type='number' 
            placeholder='Inser Your Event Cost Here' 
            name='event_cost'
            htmlFor='EventCost'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            
        </form>
    )
}

export default FormEvent