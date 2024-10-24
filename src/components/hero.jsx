import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='sm:flex border w-full items-center '>
        <div className='sm:w-1/2 justify-center items-center flex flex-col'>
        <div className='flex flex-col gap-7'>
            <div className='flex items-center gap-2'>
                <p className='bg-slate-900 w-5 h-0.5'></p>
                <h1 className='text-3xl text-gray-800'> Best Sellers</h1>
            </div>
            <div className='text-7xl flex items-center'> Latest Arrivals </div>
            <div className='flex items-center gap-2 '>
            <h1 className='text-3xl text-gray-800'> Shop Now</h1>
                <p className='bg-slate-900 w-6 h-0.5'></p>
            </div>
            </div>
            
        </div>
        <div className='sm:w-1/2 p-0 m-0'>
  <img src={assets.hero_img} className='w-full block p-0 m-0' alt='Hero' />
</div>

    </div>
  )
}

export default Hero