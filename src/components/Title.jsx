import React from 'react'


const Title =({text1,text2})=> {
  return (
    <div className='flex justify-center items-center gap-4'>
        <h1 className='text-gray-500 text-5xl'> {text1} <span className='text-gray-800 text-5xl'>{text2}</span></h1>
    </div>
  )
}

export default Title