import eyeView from '../assets/svg/eye.svg'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// const events = [
//     {
//         id: 1,
//         name: 'Dapur Jorok 1',
//         totalCost: 30000,
//         participants:['sigit', 'ilham', 'fathur', 'ripqi'],
//         date: '2022-01-01',
//         eventOrgenizer:'Suep',
//         descripton: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam?`
//     },

// ]


const BillingPage = ()=> {
    const [data, setData] = useState([]);

    useEffect(() => {
      const eventData = JSON.parse(localStorage.getItem('events')) || [];
      setData(eventData);
    }, []);

    return(
        <div className="lg:grid lg:grid-cols-12">

            
            <div className="mb-20 overflow-x-auto rounded-lg lg:col-span-12 mt-10">
            <h1>Event List</h1>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Event</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Event Organizer</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Event Cost</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Participants</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Details</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    { data.map((event, index) => (

                        <tr key={index} className=" text-center odd:bg-sky-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex justify-center items-center">{index+1}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.eventName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.date}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.eventOrganizer}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Rp. {" "} {event.totalCost !== undefined && event.totalCost !== null ? event.totalCost.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) : 'N/A'}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{event.participants !== undefined && event.totalCost !== null ? event.participants.length : 'N/A'}</td>
                            <td className="whitespace-nowrap px-4 py-2 ">
                                <Link
                                    to = {`/detail/${event.id}`}
                                    className="flex min-w-min gap-2 justify-center items-center rounded  bg-sky-400 py-2 text-xs font-medium text-white hover:bg-sky-500"
                                >
                                    <p className='hidden lg:inline-block'>View</p>
                                    <img src={eyeView} alt="EyeView" className='h-3 text-center'  />
                                </Link>
                            </td>
                        </tr>
                        ))}

                </tbody>
            </table>
            </div>
        </div>
    )

    

}

export default BillingPage