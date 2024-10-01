import React from 'react'
import Title from '../components/Title'
import NewSection from'../components/NewSection'
import { assets } from '../assets/frontend_assets/assets'


function Contact() {
  return (
    <>
    <div className='flex flex-col items-center my-10'>
  <Title text1="CONTACT" text2="US" />
  <p className='h-0.5 w-8 bg-slate-900'></p>
</div>

<div className='flex flex-col sm:flex-row gap-9 items-center'>
  <img className='w-full sm:w-1/3 h-auto' src={assets.contact_img} alt="Contact Us" />
  
  <div className='sm:w-1/2 m-10'>
    <b className='mb-4 text-slate-700 text-left'>Our Store</b>
    <p className='text-slate-700 text-left mb-7'>54709 Willms Station</p>
    <p className='text-slate-700 text-left mb-7'>Suite 350, Washington, USA</p>
    <p className='text-slate-700 text-left mb-7'>Tel: (415) 555-0132</p>
    <p className='text-slate-700 text-left mb-7'>Email: admin@forever.com</p>
    
    <b className='mb-4 text-slate-700 text-left'>Careers at Forever</b>
    <p className='text-slate-700 text-left mb-7'>Learn more about our teams and job openings.</p>
    
    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
      EXPLORE JOBS
    </button>
  </div>
</div>

      <NewSection/>
    
    </>
  )
}

export default Contact