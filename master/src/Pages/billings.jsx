
// import React, { useEffect, useState } from 'react';
// import Card from '../components/Elements/Card';


// const BillingPage = ()=> {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       const eventData = JSON.parse(localStorage.getItem('event')) || [];
//       setData(eventData);
      
//     }, []);

//     return(

//         <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  p-8 sm:p-6 gap-4'>
//             {data.map(( item ) => (
            
//                 <Card 
//                 eventname = {item.eventName} 
//                 eventdate = {item.date}
//                 eventcost = {item.totalCost}
//                 eventorganizer = {item.eventOrganizer}
//                 eventbio = {item.description}
//                 key = {item.id} to={`/detail/${item.id}`} 
//                 className=' relative block  overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-md'>

//                     <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600"></span>
                    
//                 </Card>

//             ))}
//         </div>
//     )
// }

// export default BillingPage

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BillingPage = ({ eventData, formState, handleClickToUpdate}) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')


  const filteredEvents = eventData.filter((event) => {
    const eventDate = new Date(event.eventDate);
    const start = startDate ? new Date(startDate) : new Date('1900-01-01')
    const end = endDate ? new Date(endDate) : new Date('2100-12-31')
    return eventDate >= start && eventDate <= end;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Event List</h1>
      <div className="mb-4">
        <label className="mr-2">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 mr-4"
        />
        <label className="mr-2">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2"
        />
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Event Name</th>
            <th className="py-2 px-4 border">Event Date</th>
            <th className="py-2 px-4 border">Participants</th>
            <th className="py-2 px-4 border">Event Type</th>
            <th className="py-2 px-4 border">Total Cost</th>
            <th className="py-2 px-4 border">Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td className="py-2 px-4 border">{event.eventName}</td>
              <td className="py-2 px-4 border">{event.eventDate}</td>
              <td className="py-2 px-4 border">{event.participants.map(participant => (
                <p key={participant.id}>{participant.participantName}</p>
              ))}</td>
              <td className="py-2 px-4 border">{event.eventType}</td>
              <td className="py-2 px-4 border">Rp. {event.eventCost}</td>
              <td className="py-2 px-4 border">
                <Link
                  to={`/detail/${event.id}`}
                >Detail</Link>
                <button
                  onClick={()=>handleClickToUpdate(event)}
                >update</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BillingPage;
