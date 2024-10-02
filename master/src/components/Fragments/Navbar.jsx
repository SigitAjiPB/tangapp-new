import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" sticky top-0 h-screen  bg-sky-500 max-w-min hidden md:block">
        <div className='flex justify-center items-center space-x-2 bg-sky-600 pl-4 pr-14 p-4'>
            <div className='bg-slate-500 rounded-full h-8 w-8'>
            </div>

            <div className='text-white text-sm'>   
                <p>name</p>
                <span>country</span>
            </div>

        </div>
      <ul className=" px-6">
        <li><Link to="/" className="text-white">Dashboard</Link></li>
        <li><Link to="/eventform" className="text-white">Events</Link></li>
        <li><Link to="/billings" className="text-white">Billings</Link></li>
        <li><Link to="/Settings" className="text-white">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;