import React from 'react';
import { Link } from 'react-router-dom';
import dashboardSvg from '../../assets/svg/dashboard.svg'
import billingsSvg from '../../assets/svg/billings.svg'
import eventSvg from '../../assets/svg/events.svg'
import settingSvg from '../../assets/svg/setting.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import leftSvg from '../../assets/svg/left.svg'
import Button from '../Elements/Button';
import { useLogin } from '../../hooks/useLogin';
import { useIatLogin } from '../../hooks/useIatLogin';
import{ useState } from 'react';




const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
      setIsExpanded(true);
    };
  
    const handleMouseLeave = () => {
      setIsExpanded(true); // Tetap expanded saat mouse keluar
    };
  
    const handleClose = () => {
      setIsExpanded(false);
    };

    const username = useLogin()
    const userIat = useIatLogin()

    const handleLogout = ()=> {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }


  return (
    <nav className={`z-20  sidebar-transition sticky top-0 h-screen bg-gradient-to-r from-sky-400 to-sky-600 hidden lg:flex lg:flex-col  ${isExpanded ? 'min-w-max' : 'min-w-max'}`} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

        <div>
          {isExpanded &&
            <button onClick={handleClose} className={`z-50 top-5 shadow-md -right-6 bg-gradient-to-r from-sky-400 to-sky-600 h-12 w-12 rounded-full p-4 flex items-center justify-center ${isExpanded ? 'absolute' : 'hidden'}`}>
                {<img src={leftSvg} alt="close" />}
            </button>}
        </div>

        <Link  to='/user' className='flex justify-center items-center  py-6 bg-gradient-to-r from-sky-500 to-sky-700'>
            <div className='bg-slate-50 rounded-full h-10 w-10'>
            </div>

            <div  className='text-white text-sm flex items-center justify-center flex-col' >   
                {isExpanded && <span className='ml-2'>{`${username}`}</span>}
                {isExpanded && <span className='ml-2'>{`${userIat}`}</span>}
            </div >
        </Link>


        <ul className="flex flex-col justify-between h-full">

            <div className=''>
                    <Link to="/" className="text-white flex space-x-3 p-6 hover:bg-sky-400  items-center" >
                        <img className='h-8' src={dashboardSvg} alt="" />
                        {isExpanded && <span className="pr-12 text-lg">Dashboard</span>}
                    </Link>

                    <Link to="/eventform" className="text-white flex items-center space-x-3 p-6 hover:bg-sky-400 " >
                        <img className='h-8' src={eventSvg} alt="" />
                            {isExpanded && <span className="pr-8 text-lg">Event Form</span>}
                    </Link>

                    <Link to="/billings" className="text-white flex space-x-3 p-6 hover:bg-sky-400 items-center" >
                        <img className='h-8' src={billingsSvg} alt="" />
                            {isExpanded && <span className="pr-8 text-lg">Billings</span>}
                    </Link>

                    <Link to="/settings" className="text-white flex space-x-3 p-6 hover:bg-sky-400 items-center" >
                        <img className='h-8' src={settingSvg} alt="" />
                            {isExpanded && <span className="pr-8 text-lg">Settings</span>}
                    </Link>
            </div>

            <Button onClick={handleLogout} variant='hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 w-full p-5 text-white space-x-2 flex items-center' >
                <img className='h-10 ' src={logoutSvg} alt="" />
                {isExpanded && <span className="pr-8 text-lg">Logout</span>}
            </Button>
        </ul>
    </nav>
  );
};

export default Navbar;