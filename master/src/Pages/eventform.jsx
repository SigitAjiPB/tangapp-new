import FormEvent from "../components/Fragments/FormEvent"
import DetailPreview from "../components/Fragments/DetailPreview"
const EventFormPage = ({addEvent}) => {
    return (
        <>
            <section className="bg-white">
                <div className="lg:grid lg:grid-cols-12">



                    <main
                    className="flex  bg-sky-50 justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6 border"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Welcome to Tangapp
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500"> MAKE EVENT HERE!! {`>:(`}
                            </p>

                            <FormEvent addEvent={addEvent}/>
                        
                        </div>

                    </main>

                    <DetailPreview></DetailPreview>

                </div>
            </section>
        </>
    )
}

export default EventFormPage