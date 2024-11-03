import InputForm from "../Elements/Input";




const CreateEvent = ()=> {
  return (
    <div className="wrapper-form-createEvent grid grid-cols-12 ">
      <h1>Create Event</h1>
      <form className="col-span-10 bg-slate-200 grid grid-cols-7">
      <InputForm
            
            wrapp='col-span-6 sm:col-span-3'
            label='Event Name' 
            type='text' 
            placeholder='Event Name' 
            name='eventName'
            htmlFor='EventName'
            labelStyle="block text-sm font-medium text-gray-700"
            inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"/>
            
            <InputForm />
      </form>
    </div>
  )
}

export default CreateEvent