import InputForm from "../Elements/Input"
import TextareaForm from "../Elements/Textarea"

const FormEvent = ()=> {
    return (
        <form className="mt-8 grid grid-cols-6 gap-6">
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            name='event_name'
            htmlFor='EventName'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Date of Event' 
            type='date' 
            placeholder='Event Date' 
            name='event_date'
            htmlFor='EventDate'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Event Orgenizer' 
            type='text' 
            placeholder='Event Orgenigger' 
            name='event_orgenizer'
            htmlFor='EventOrgenizer'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            <InputForm 
            wrapp='col-span-6 sm:col-span-3'
            label='Event Cost' 
            type='number' 
            placeholder='Event Cost' 
            name='event_cost'
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
            
        </form>
    )
}

export default FormEvent