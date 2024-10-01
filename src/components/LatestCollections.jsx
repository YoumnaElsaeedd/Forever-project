import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/frontend_assets/assets';
import Card from './Card';

function LatestCollections() {
    const [data,setdate]=useState([])
    useEffect(()=>{
        setdate(products.slice(1,11))
    },[])
  return (
    <>
    <div className='flex justify-center items-center my-10'>
        <Title text1="Latest" text2="Collections" />
        <p className='h-0.5 w-8 bg-slate-900 items-center'></p>
        </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 m-4'>
       {data.map((el)=>{
          return <Card key={el._id} obj ={el}/>
       })}

    </div>
    </>
  )
}

export default LatestCollections;