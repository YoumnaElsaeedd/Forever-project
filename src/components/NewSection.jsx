import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function NewSection() {
  return (
    <div className='justify-center items-center my-[200px]'>
        <div className='sm:flex flex-row justify-center gap-40  '>
            <div className='flex-col items-center text-center ' >
                <img src={assets.exchange_icon} alt="" className=' m-auto' />
                <h1 className='m-4 text-black text-lg'>Easy Exchange Policy</h1>
                <h1 className='text-gray-400 text-lg'>We offer hassle free exchange policy</h1>
            </div>
            <div className='flex-col items-center text-center' >
                <img src={assets.quality_icon} alt=""  className=' m-auto'/>
                <h1 className='m-4 text-black text-lg'>7 Days Return Policy</h1>
                <h1 className='text-gray-400 text-lg'>We provide 7 days free return policy</h1>
            </div>
            <div className='flex-col items-center text-center' >
                <img src={assets.support_img} alt=""className=' m-auto'  />
                <h1 className='m-4 text-black text-lg'>Best customer support</h1>
                <h1 className='text-gray-400 text-lg'>We provide 24/7 customer support</h1>
            </div>
        </div>
        <div className='sm:flex flex-col justify-center items-center my-11'>
            <div className='my-4 text-center' >
            <h1 className='text-4xl my-5'>Subscribe now & get 20% off</h1>
            <h1 className='text-gray-400 my-5 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>
            <form className='flex'>
              <input placeholder='Enter Your Email' type='text' className='border p-4 w-96'></input>
              <button className='border bg-black text-white p-4'> Subscribe</button>
            </form>
        </div> {/*form */}
    </div>
  )
}

export default NewSection