import { useState } from "react";

const email = localStorage.getItem('email')

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

const EventFormPage = ()=> {
    const [nameEvent, setNameEvent] = useState([''])
    return(
        <div className="p-8 flex flex-col">

            <div className="overflow-x-auto rounded-lg">
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
                            <tr key={event.id} className=" text-center odd:bg-sky-200">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex justify-center items-center">{event.id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.date}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.eventOrgenizer}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Rp. {" "}{event.totalCost.toLocaleString('id-ID', {styles:"currency", currency:"IDR"})}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.participants.length}</td>
                                <td className="whitespace-nowrap px-4 py-2 ">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-sky-400 px-4 py-2 text-xs font-medium text-white hover:bg-sky-500"
                                    >
                                        View
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

export default EventFormPage