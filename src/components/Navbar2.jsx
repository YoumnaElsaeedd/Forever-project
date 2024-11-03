import React from 'react'
import logo  from '../assets/admin_assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar2=()=> {
  const navigate= useNavigate('')
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
    <img className='w-[max(10%,80px)]' src={logo} alt="" />
    <button onClick={() => navigate('/login')}  className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Log Out</button>
  </div>
  )
}

export default Navbar2