import React from 'react';
import { Link } from 'react-router-dom';
import dashboardSvg from '../../assets/svg/dashboard.svg'
import billingsSvg from '../../assets/svg/billings.svg'
import eventSvg from '../../assets/svg/events.svg'
import settingSvg from '../../assets/svg/setting.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import Button from '../Elements/Button';
import { useEffect, useState } from "react"

const Navbar = () => {

  const handleLogout = ()=> {
    localStorage.removeItem('token')
    window.location.href = '/login'
}
  return (
    <nav className=" sticky top-0 h-screen  bg-sky-500 hidden md:block min-w-max group ">
        <div className='flex justify-center items-center space-x-4 py-5 bg-sky-600 group-hover:pl-4 group-hover:py-4 group-hover:pr-14 '>
            <div className='bg-slate-500 rounded-full h-8 w-8'>
            </div>

            <div className='text-white text-sm hidden group-hover:block'>   
                <p>name</p>
                <span>country</span>
            </div>

        </div>
        <ul className="flex items-center justify-center flex-col ">

            <div className=''>
                    <Link to="/" className="text-white flex space-x-2 p-6 hover:bg-sky-400  items-center" >
                        <img className='h-8' src={dashboardSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Dashboard</span>
                    </Link>
                    <Link to="/eventform" className="text-white flex items-center space-x-2 p-6 hover:bg-sky-400 " >
                        <img className='h-8' src={eventSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Event Form</span>
                    </Link>
                    <Link to="/billings" className="text-white flex space-x-2 p-6 hover:bg-sky-400 items-center" >
                        <img className='h-8' src={billingsSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Billings</span>
                    </Link>
                    <Link to="/settings" className="text-white flex space-x-2 p-6 hover:bg-sky-400 items-center" >
                        <img className='h-8' src={settingSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Settings</span>
                    </Link>
            </div>

            <Button onClick={handleLogout} variant='hover:bg-red-400 w-full p-5 text-white space-x-2 flex items-center' >
                <img className='h-10 ' src={logoutSvg} alt="" />
                <span className='hidden group-hover:block pr-8'>Logout</span>
            </Button>
        </ul>
    </nav>
  );
};

export default Navbar;