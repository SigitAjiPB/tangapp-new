
import { useContext } from "react";
import { Link } from "react-router-dom";


const AuthLayout = (props) => {

  

    const {children, type, tittle} = props;
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='w-full max-w-xs'>
        <h1 className='text-3xl font-bold mb-2 text-sky-400'>{tittle}</h1>
        <p className='font-medium text-slate-500 mb-8'>
          Welcome, pls Enter your Details
        </p>
        {children}
        <NavAuth type={type}></NavAuth>
      </div>
    </div>
  )
}

const NavAuth = ({ type }) => {
  if (type === 'login') {
    return (
      <p className='text-sm mt-5 text-center text-slate-500'>
        Don't have an account?{' '}
        <Link to='/register' className='font-bold text-sky-400'>
          Register
        </Link>
      </p>
    )
  } else {
    return (
      <p className='text-sm mt-5 text-center'>
        Already have an acount?{' '}
        <Link to='/login' className='font-bold text-sky-400'>
          Login
        </Link>
      </p>
    )
  }
}

export default AuthLayout
