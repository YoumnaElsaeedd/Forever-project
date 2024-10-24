import React from 'react'
import Title from '../components/Title'
import NewSection from'../components/NewSection'
import { assets } from '../assets/frontend_assets/assets'

function About() {
  return (
    <>
    <div className='flex flex-col items-center my-10'>
  <Title text1="About" text2="Us" />
  <p className='h-0.5 w-8 bg-slate-900'></p>
</div>

<div className='flex flex-col sm:flex-row gap-9 items-center'>
  <img className='w-full sm:w-1/3 h-auto' src={assets.about_img} alt="About Us" />
  <div className='sm:w-1/2 m-10'>
    <p className='mb-8 text-slate-700 text-left'>
      Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
    </p>
    <p className='text-slate-700 text-left mb-7'>
      Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
    </p>
    <h1 className='text-black text-xl mb-8'>Our Mission</h1>
    <p className='text-slate-700 text-left mb-7'>
      Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
    </p>
  </div>
</div>

<div className='flex flex-col items-center my-10'>
  <Title text1='Why' text2='Choose Us' />
</div>

<div className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
  <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
    <b>Quality Assurance:</b>
    <p className='text-slate-700'>
      We meticulously select and vet each product to ensure it meets our stringent quality standards.
    </p>
  </div>

  <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
    <b>Convenience:</b>
    <p className='text-slate-700'>
      With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
    </p>
  </div>

  <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
    <b>Exceptional Customer Service:</b>
    <p className='text-slate-700'>
      Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
    </p>
  </div>
</div>

     <NewSection/>
     
    </>
  )
}

export default About