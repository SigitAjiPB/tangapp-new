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
            <ul className="">
                {events.map ((event) => (
                        <li key={event.id} className="flex bg-blue-300 px-6 py-2 mt-4 justify-between">
                            <div name={event.name}>{event.name}</div>
                            <div totalCost={event.totalCost}>{event.totalCost}</div>
                            <div participant={event.participants}>{event.participants.length}</div>
                        </li>
                    ))}
            </ul>
        </div>
    )

    

}

export default EventFormPage