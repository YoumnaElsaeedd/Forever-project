import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/frontend_assets/assets';
import Card from './Card';

function  BestSellers() {
    const [data,setdate]=useState([])
    useEffect(()=>{
        setdate(products.slice(11,16))
    },[])
  return (
    <>
    <div className='flex justify-center items-center my-10'>
        <Title text1="Best" text2="Sellers" />
        <p className='h-0.5 w-8 bg-slate-900 items-center'></p>
        </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 m-4'>
       {data.map((el)=>{
          return <Card obj ={el}/>
       })}

    </div>
    </>
  )
}

export default BestSellers;