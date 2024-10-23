import React from 'react';
import { Link } from 'react-router-dom';
import dashboardSvg from '../../assets/svg/dashboard.svg'
import billingsSvg from '../../assets/svg/billings.svg'
import eventSvg from '../../assets/svg/events.svg'
import settingSvg from '../../assets/svg/setting.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import Button from '../Elements/Button';
import { useLogin } from '../../hooks/useLogin';
import { useIatLogin } from '../../hooks/useIatLogin';

const Navbar = () => {

    const handleUserPage= ()=> {
        login(data, (status, res) => {  
            if(status) {
              localStorage.setItem('token', res)
            } else {
              setLoginFailed(res.response.data)
              
            }
            window.location.href = "/user"
          })
    }

    const username = useLogin()
    const userIat = useIatLogin()

    const handleLogout = ()=> {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }


  return (
    <nav className=" sticky top-0 h-screen  bg-gradient-to-r from-sky-400 to-sky-600 hidden md:block min-w-max group ">
        <Link onClick={handleUserPage} to='/user' className='flex justify-center items-center space-x-4 py-5 bg-gradient-to-r from-sky-500 to-sky-700 group-hover:pl-4 group-hover:py-4 group-hover:pr-14 '>
            <div className='bg-slate-50 rounded-full h-8 w-8'>
            </div>

            <div className='text-white text-sm hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:flex-col' >   
                <p>{username}</p>
                <span>{userIat}</span>
            </div>

        </Link>
        <ul className=" inline-block">

            <div className=''>
                    <Link to="/" className="text-white flex space-x-3 p-6 hover:bg-sky-400  items-center" >
                        <img className='h-8' src={dashboardSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Dashboard</span>
                    </Link>
                    <Link to="/eventform" className="text-white flex items-center space-x-3 p-6 hover:bg-sky-400 " >
                        <img className='h-8' src={eventSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Event Form</span>
                    </Link>
                    <Link to="/billings" className="text-white flex space-x-3 p-6 hover:bg-sky-400 items-center" >
                        <img className='h-8' src={billingsSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Billings</span>
                    </Link>
                    <Link to="/settings" className="text-white flex space-x-3 p-6 hover:bg-sky-400 items-center" >
                        <img className='h-8' src={settingSvg} alt="" />
                        <span className='hidden group-hover:block pr-8'>Settings</span>
                    </Link>
            </div>

            <Button onClick={handleLogout} variant='hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 w-full p-5 text-white space-x-2 flex items-center absolute bottom-0' >
                <img className='h-10 ' src={logoutSvg} alt="" />
                <span className='hidden group-hover:block pr-8'>Logout</span>
            </Button>
        </ul>
    </nav>
  );
};

export default Navbar;