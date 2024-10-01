import React from 'react'
import { assets } from '../assets/frontend_assets/assets'


function Footer() {
  return (
    <>
    <div className='sm:flex flex-row justify-between p-20 mt-20'>
        <div className=' sm:flex flex-col w-1/2'>
            <img src={assets.logo} className='sm:w-1/4' />
            <h1 className='sm:w-3/4 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                ,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
        </div>
        <div className='sm:flex flex-row gap-28 '>
        <div className=' sm:flex flex-col  justify-center  text-left  text-gray-950'>
            <h1 className=' text-3xl mb-5 flex text-gray-950'> COMPANY </h1>
                <h1 className=' text-gray-700'>Home</h1>
                <h1 className=' text-gray-700'>About Us</h1>
                <h1 className=' text-gray-700'>Delivery</h1>
                <h1 className=' text-gray-700'>Privacy Police</h1>

        </div>

        <div className=' sm:flex flex-col  justify-center  text-left  text-gray-950'>
            <h1 className=' text-3xl mb-10 flex text-gray-950' > Get In Touch</h1>
             <h1 className=' text-gray-700'>+1-000-000-0000</h1> 
               <h1 className=' text-gray-700'>greatstackdev@gmail.com</h1>
               <a className=' text-gray-700' href='https://www.instagram.com/greatstackdev/'>instagram</a>
        </div>
</div>
    </div>
    <div className='h-0.5 w-full bg-slate-200'></div>
    <div className='text-center my-4 text-gray-700'>
        <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer