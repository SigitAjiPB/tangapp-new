import React from 'react';
import { Link } from 'react-router-dom';
import dashboardSvg from '../../assets/svg/dashboard.svg'

const Navbar = () => {
  return (
    <nav className=" sticky top-0 h-screen  bg-sky-500 hidden md:block min-w-max group">
        <div className='flex justify-center items-center space-x-2 py-5 bg-sky-600 group-hover:pl-4 group-hover:py-4 group-hover:pr-14'>
            <div className='bg-slate-500 rounded-full h-8 w-8'>
            </div>

            <div className='text-white text-sm hidden group-hover:block'>   
                <p>name</p>
                <span>country</span>
            </div>

        </div>
      <ul className="">
        <li className='p-6 hover:bg-sky-400'>
            <Link to="/" className="text-white flex " >
                <img className='h-8' src={dashboardSvg} alt="" />
                <span className='hidden group-hover:block pr-14'>Dashboard</span>
            </Link>
        </li>
        {/* <li className='p-6 hover:bg-sky-400'><Link to="/eventform" className="text-white">Events</Link></li>
        <li className='p-6 hover:bg-sky-400'><Link to="/billings" className="text-white">Billings</Link></li>
        <li className='p-6 hover:bg-sky-400'><Link to="/Settings" className="text-white">Settings</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;