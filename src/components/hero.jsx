import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border-gray-400 '>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2 '>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font medium text-sm md:text-base'> Best Sellers</p>
            </div>
            <div className='text-7xl flex items-center'> Latest Arrivals </div>
            <div className='flex items-center gap-2 '>
            <h1  className='font medium text-sm md:text-base'> Shop Now</h1>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
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