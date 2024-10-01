import React from 'react'
import { assets } from '../assets/frontend_assets/assets'


function Footer() {
  return (
    <>
    <div className='sm:flex flex-row justify-between p-10 sm:p-20 mt-10 sm:mt-20'>
    <div className='sm:w-1/2 flex flex-col items-center sm:items-start'>
        <img src={assets.logo} className='w-1/3 sm:w-1/4 mb-4' alt="Logo" />
        <h1 className='w-full sm:w-3/4 text-gray-700 text-center sm:text-left'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h1>
    </div>

    <div className='flex flex-col sm:flex-row gap-10 sm:gap-28 mt-10 sm:mt-0'>
        <div className='flex flex-col items-center sm:items-start text-gray-950'>
            <h1 className='text-2xl sm:text-3xl mb-3 sm:mb-5 text-gray-950'>COMPANY</h1>
            <h1 className='text-gray-700'>Home</h1>
            <h1 className='text-gray-700'>About Us</h1>
            <h1 className='text-gray-700'>Delivery</h1>
            <h1 className='text-gray-700'>Privacy Policy</h1>
        </div>

        <div className='flex flex-col items-center sm:items-start text-gray-950'>
            <h1 className='text-2xl sm:text-3xl mb-3 sm:mb-10 text-gray-950'>Get In Touch</h1>
            <h1 className='text-gray-700'>+1-000-000-0000</h1> 
            <h1 className='text-gray-700'>greatstackdev@gmail.com</h1>
            <a className='text-gray-700' href='https://www.instagram.com/greatstackdev/'>Instagram</a>
        </div>
    </div>
</div>

<div className='h-0.5 w-full bg-slate-200 mt-10'></div>

<div className='text-center my-4 text-gray-700'>
    <p>Copyright 2024@ greatstack.dev - All Rights Reserved.</p>
</div>

    </>
  )
}

export default Footer