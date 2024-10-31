import React from 'react'
import addIcon from '../assets/admin_assets/add_icon.png'
import orderIcon from '../assets/admin_assets/order_icon.png'
import { NavLink } from 'react-router-dom'


const SideBar= ()=> {
  return (
    <div class='custom-section' className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/AdminPanel/add'>
              <img className='w-5 h-5' src={addIcon}/>
              <p className='hidden md:block'> Add Items </p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/AdminPanel/list'>
              <img className='w-5 h-5' src={orderIcon}/>
              <p className='hidden md:block'> List Items </p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/AdminPanel/orders'>
              <img className='w-5 h-5' src={orderIcon}/>
              <p className='hidden md:block'> Orders </p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar