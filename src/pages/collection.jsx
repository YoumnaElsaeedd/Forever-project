import React, {  useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets, products } from '../assets/frontend_assets/assets';
import Card from '../components/Card';

function Collection() {

  const [show,setshow]=useState(false);
  const [Data,setData]=useState([]);
  const [Category,setCategory]=useState([])
  const [subCategory,setSubCategory]=useState([]);

  const handleChange = (e)=>{
    if(Category.includes(e.target.value)){
      setCategory((prev)=>prev.filter((el)=>el!== e.target.value))
    }else{
      setCategory([...Category,e.target.value])
    }
  } 

  const handleChange2 =(e)=>{
    if((subCategory.includes(e.target.value))){
      setSubCategory((prev)=>prev.filter((el)=>el !== e.target.value ))
    }else{
      setSubCategory([...subCategory,e.target.value])
    }  
  }

   const handleData=()=>{
   let  productsClone=products.slice()
   if(Category.length>0){
    productsClone=productsClone.filter((el)=>{
      return Category.includes(el.category)
    })
   }
    if(subCategory.length>0){
      productsClone=productsClone.filter((el)=>{
        return subCategory.includes(el.subCategory)
      })

    }
    setData(productsClone)
   }
    useEffect(()=>{
      handleData()
    },[Category,subCategory])
   
  return (
    <>
    <div className='sm:flex  mt-9 '>
      <div className='sm:flex flex-col gap-5'>
        <div className='flex  items-center gap-2 '>
        <h1  className='text-4xl text-black mb-4  mr-76font-semibold'>FILTERS</h1>
        <img src={assets.dropdown_icon} className={`sm:hidden ${show? 'rotate-90' : ''} h-8 w-5 align-top `} onClick={()=>{setshow(!show)}}/>
        </div>
      <div className={`sm:flex flex-col border p-5 ${show?'w-full':'hidden'} sm:block`} >
      <h1 className='text-2xl font-semibold text-black'>CATEGORIES</h1>
         <p className=''><input type='checkbox'value={'Men'} onChange={handleChange}/>MEN</p> 
         <p className=''><input type='checkbox' value={'Women'}onChange={handleChange}/>WOMEN</p> 
         <p className=''><input type='checkbox'value={'Kids'}onChange={handleChange}/>KIDS</p> 
      </div>

      <div className={`sm:flex flex-col border p-5 ${show?'w-full':'hidden'}`}>
      <h1 className='text-2xl font-semibold text-black'>TYPE</h1>
         <p className=''><input type='checkbox' value={'Topwear'} onChange={handleChange2}/>TOPWEAR</p> 
         <p className=''><input type='checkbox' value={'Bottomwear'}  onChange={handleChange2}/>BOTTOMWEAR</p> 
         <p className=''><input type='checkbox' value={'Winterwear'}  onChange={handleChange2} />WINTERWEAR</p> 
      </div>
    </div>

    <div className='block sm:flex-1 '>
      <div className='flex justify-between items-center'> 
       <div className='flex justify-center items-center ml-12'>
       <Title text1="All" text2="Collections"/>
       <p className='h-0.5 w-12 bg-slate-900 items-center'></p>
    </div>
   
      <select className='border-2 sm:border-gray-500 text-xl h-10 rounded-md '>
        <option value="relavent">sort by:relavent</option>
        <option value="Low-High">sort by : Low to High</option>
        <option value="High-Low"> sort by : High To Low</option>
      </select>
   </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-9'>
       {
        Data.map((el)=>{
          return  <Card key={el._id} obj ={el}/>
        })
       }
      </div>
      
    </div>
    </div>
</>
  )
}

export default Collection