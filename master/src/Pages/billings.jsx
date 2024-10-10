
import React, { useEffect, useState } from 'react';
import Card from '../components/Elements/Card';


const BillingPage = ()=> {
    const [data, setData] = useState([]);

    useEffect(() => {
      const eventData = JSON.parse(localStorage.getItem('event')) || [];
      setData(eventData);
    }, []);

    return(

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 p-6 gap-4'>
            {data.map(( item ) => (
                <Card key = {item.id} to='/detail' className='relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-md'>
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600"></span>
                </Card>

            ))}
        </div>
    )
}

export default BillingPage