import Invoice from "../components/Fragments/Invoice"
import InputForm from "../components/Elements/Input"
import TextareaForm from "../components/Elements/Textarea/index"
import DynamicInput from "../components/Elements/User-Input/ResultInput"

const EventFormPage = ({addEvent}) => {
    

    return (
        <> 
            <section className=" shadow-md rounded-md m-4 p-8 border">  
                    <div className="text-2xl text-slate-800 px-4 flex w-full justify-between">
                        <span>Create Event</span>
                        <button className="px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded">Submit</button>
                    </div>
                    <form className=" grid grid-cols-6 gap-4 p-4">
                        <InputForm
                            wrapp='col-span-6 sm:col-span-2'
                            label='Event Name' 
                            type='text' 
                            placeholder='Event Name' 
                            name='eventName'
                            htmlFor='EventName'
                            labelStyle="block text-sm font-medium text-gray-700"
                            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border"
                            
                        ></InputForm>
                        <InputForm
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
                            wrapp='col-span-6 sm:col-span-2'
                            label='Event Cost' 
                            type='text' 
                            placeholder='Rp. -,' 
                            name='eventCost'
                            htmlFor='EventCost'
                            labelStyle="block text-sm font-medium text-gray-700"
                            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border"
                        ></InputForm>

                        <TextareaForm
                            textareaStyle='w-full rounded-lg text-sm outline-none mt-1 p-2 border-gray-200 bg-white text-gray-700 shadow-sm outline-none border'
                            wrapp = 'col-span-6'
                            name = "eventDescribtion"
                            htmlFor ="eventDescribtion"
                            label ="Event Describtion"
                            labelStyle = " block text-sm font-medium text-gray-700"
                            placeholder='Describ your event here' 
                        ></TextareaForm>

                        <DynamicInput/>

                        <Invoice/>

                        
                    </form>
            </section>
        </>
    )
}

export default EventFormPage