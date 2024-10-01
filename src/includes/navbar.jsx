import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  const [show,setshow]=useState(false);
  return (
    <>
    <div className="flex  justify-between items-center p-4">
      <img src={assets.logo} />
      <ul className=' hidden sm:flex gap-4 '>
        <NavLink to='/' className=' flex flex-col items-center'>
          <h2>HOME</h2>
          <div className='bg-gray-400 w-1/2 h-0.5 hidden'> </div>
        </NavLink>
        <NavLink to='/about'  className=' flex flex-col items-center'>
          <h2>ABOUT</h2>
          <div className='bg-gray-400 w-1/2 h-0.5 hidden'> </div>
        </NavLink>
        <NavLink to='/collection'  className=' flex flex-col items-center'>
          <h2>COLLECTION</h2>
          <div className='bg-gray-400 w-1/2 h-0.5 hidden'> </div>
        </NavLink>
        <NavLink to='/contact'  className=' flex flex-col items-center'>
          <h2>CONTACT</h2>
          <div className='bg-gray-400 w-1/2 h-0.5 hidden'> </div>
        </NavLink>
        <Link to="/login">
            <button className="border rounded-full px-3">Admin Panel</button>
          </Link>
      </ul>
      <div className='flex gap-4'>
        <img src={assets.search_icon} className='w-5'/>
        <img src={assets.profile_icon} className='w-5'/>
        <div className='relative'>
          <img src={assets.cart_icon} className='w-5'/>
          <span className='absolute bg-black rounded-full h-4 w-4 text-sm right-[-5] bottom-0 left-2 text-white '>10</span>
        </div>
        
        <img src={assets.menu_icon} className='sm:hidden w-5' onClick={()=>{setshow(true)}}/>
      </div>


      

      <div className={` absolute top-0 bottom-0 right-0 left-0 bg-white overflow-hidden flex-col ${show ? "w-full" :"w-0"}`} >
        <div>
        <img src={assets.dropdown_icon} alt="" onClick={()=>setshow(false)} />
        <p>back</p>
      </div>
      <ul className='flex flex-col gap-4 '>
        <NavLink to='/' className=' flex flex-col items-center'>
          <h2>Home</h2>
        </NavLink>
        <NavLink to='/about'  className=' flex flex-col items-center'>
          <h2>About</h2>
        </NavLink>
        <NavLink to='/collection'  className=' flex flex-col items-center'>
          <h2>Collection</h2>
        </NavLink>
        <NavLink to='/Login'  className=' flex flex-col items-center'>
          <h2>Contact</h2>
        </NavLink>
      </ul>
      </div>
  
    </div>
    <div className='bg-slate-200 h-0.5 w-full mb-4'></div>
    </>
  )
}

export default Navbar