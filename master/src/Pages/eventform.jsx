import FormEvent from "../components/Fragments/FormEvent"
// import DetailPreview from "../components/Fragments/DetailPreview"
import UserSearch from "../components/Fragments/DetailPreview"
const EventFormPage = ({addEvent}) => {
    return (
        <>
            <section className="bg-white">  
                <div className="lg:grid lg:grid-cols-12">
                    <main
                    className=" place-items-center grid-cols-6 bg-sky-50 justify-center py-8  lg:col-span-8 lg:py-12 xl:col-span-6 border"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Create Event
                            </h1>

                            <FormEvent addEvent={addEvent}/>
                        
                        </div>

                    </main>

                    <UserSearch></UserSearch>

                </div>
            </section>
        </>
    )
}

export default EventFormPage