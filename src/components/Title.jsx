import React from 'react'


const Title =({text1,text2})=> {
  return (
    <div className='flex justify-center items-center gap-4'>
        <h1 className='text-gray-500 text-2xl'> {text1} <span className='text-gray-800 text-2xl'>{text2}</span></h1>
        <p className='h-0.5 w-8 bg-slate-900 '></p>
    </div>
  )
}

export default Title