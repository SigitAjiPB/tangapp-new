// import FormEvent from "../components/Fragments/FormEvent"
// import UserSearch from "../components/Fragments/DetailPreview"

import InputForm from "../components/Elements/Input"
import TextareaForm from "../components/Elements/Textarea/index"
import ParticipantLayout from "../components/Fragments/ParticipantLayout"


const EventFormPage = ({addEvent}) => {
    return (
        <>
            <section className="bg-white">  
                <div className="lg:grid lg:grid-cols-12 justify-items-center">
                    {/* <main
                    className=" place-items-center grid-cols-6 bg-sky-50 justify-center py-8 px-6 lg:col-span-8 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Create Event
                            </h1>

                            <FormEvent addEvent={addEvent}/>
                        
                        </div>

                    </main>
                    <UserSearch></UserSearch> */}


                    
                    <div className="grid grid-cols-6 lg:col-span-12 bg-slate-200 max-w-xl p-6">
                    <div className="col-span-6"><span>Create EVent</span></div>
                        <form className="col-span-6 grid grid-cols-6 gap-4 p-4">
                            <InputForm
                                wrapp='col-span-6 sm:col-span-2'
                                label='Event Name' 
                                type='text' 
                                placeholder='Event Name' 
                                name='eventName'
                                htmlFor='EventName'
                                labelStyle="block text-sm font-medium text-gray-700"
                                inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                            ></InputForm>
                            <InputForm
                                wrapp='col-span-6 sm:col-span-2'
                                label='Event Name' 
                                type='text' 
                                placeholder='Event Name' 
                                name='eventName'
                                htmlFor='EventName'
                                labelStyle="block text-sm font-medium text-gray-700"
                                inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                            ></InputForm>
                            <InputForm
                                wrapp='col-span-6 sm:col-span-2'
                                label='Event Name' 
                                type='text' 
                                placeholder='Event Name' 
                                name='eventName'
                                htmlFor='EventName'
                                labelStyle="block text-sm font-medium text-gray-700"
                                inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                            ></InputForm>

                            <TextareaForm
                                textareaStyle='w-full rounded-lg p-2 text-sm'
                                wrapp = 'col-span-6'
                                name = "eventDescribtion"
                                htmlFor ="eventDescribtion"
                                label ="Event Describtion"
                                labelStyle = " block text-sm font-medium text-gray-700"
                            ></TextareaForm>

                            <ParticipantLayout></ParticipantLayout>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default EventFormPage