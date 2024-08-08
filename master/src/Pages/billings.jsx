import FormEvent from '../components/Fragments/FormEvent';
import eyeView from '../assets/svg/eye.svg'
import { useState } from "react";

// const email = localStorage.getItem('email')
const events = [
    {
        id: 1,
        name: 'Dapur Jorok 1',
        totalCost: 30000,
        participants:['sigit', 'ilham', 'fathur', 'ripqi'],
        date: '2022-01-01',
        eventOrgenizer:'Suep',
        descripton: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam?`
    },

    {
        id: 2,
        name: 'renang',
        totalCost: 150000,
        participants:['sigit', 'ilham', 'fathur', 'ripqi', 'Diaz'],
        date: '2024-08-03',
        eventOrgenizer:'Torterra',
        descripton: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam?`
    },

    {
        id: 3,
        name: 'muncak',
        totalCost: 400000,
        participants:['sigit', 'ilham', 'fathur', 'ripqi', 'Diaz'],
        date: '2024-08-24',
        eventOrgenizer:'kimung',
        descripton: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam?`
    },

]


const BillingPage = ()=> {
    const [event, setEvent] = useState ([
        {
            id: 1,
            name: 'Dapur Jorok 1',
            totalCost: 30000,
            participants:['sigit', 'ilham', 'fathur', 'ripqi'],
            date: '2022-01-01',
            eventOrgenizer:'Suep',
            descripton: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam?`
        },
    ])

    
    return(
        <div className="lg:grid lg:grid-cols-12">
            <div className='flex  bg-sky-50 justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6 border'>
                <div className="max-w-xl lg:max-w-3xl">
                    <FormEvent></FormEvent>
                </div>
            </div>


            
            <div className="mb-20 overflow-x-auto rounded-lg lg:col-span-12 mt-10">
            <h1>Event List</h1>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Event</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Event Orgenizer</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Event Cost</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Participants</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Details</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        events.map((event) => (
                            
                            <tr key={event.id} className=" text-center odd:bg-sky-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex justify-center items-center">{event.id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.date}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.eventOrgenizer}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Rp. {" "}{event.totalCost.toLocaleString('id-ID', {styles:"currency", currency:"IDR"})}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.participants.length}</td>
                                <td className="whitespace-nowrap px-4 py-2 ">
                                    <a
                                        href="#"
                                        className="flex min-w-min gap-2 justify-center items-center rounded  bg-sky-400 py-2 text-xs font-medium text-white hover:bg-sky-500"
                                    >
                                        <p className='hidden lg:inline-block'>View</p>
                                        <img src={eyeView} alt="EyeView" className='h-3 text-center'  />
                                    </a>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            </div>
        </div>
    )

    

}

export default BillingPage