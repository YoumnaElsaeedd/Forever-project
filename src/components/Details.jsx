import React from 'react';
import { useParams } from 'react-router-dom';
import { assets, products } from '../assets/frontend_assets/assets';

function Details() {
  const { productId } = useParams();
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <>
    <div className=' sm:flex mt-10 gap-6  '>
    <div className=' sm:w-1/2 flex'>
      <img src={product.image[0]} alt={product.name} className='w-1/4 h-40 mr-10 ' />
      <img src={product.image[0]} alt={product.name} className='' />
      </div>
      <div className='w-1/2'>
      <h1 className='text-3xl text-stone-950 mb-2'>{product.name}</h1>
      <div className='flex items-center w-4 mb-3 h-4'>
      <img src={assets.star_icon}/>
      <img src={assets.star_icon}/>
      <img src={assets.star_icon}/>
      <img src={assets.star_icon}/>
      <img src={assets.star_dull_icon}/>
      <h1>(122)</h1>
      </div> 
      <p className='text-3xl text-stone-950 mb-2'>${product.price}</p>
      <p className='text-gray-600 mb-5 w-2/3'>{product.description}</p>
      <h1> Select Size </h1>
      <div className="sizes-buttons">
        {product.sizes.map((size, index) => (
          <button key={index} className="border m-auto w-12 h-10  gap-5">
            {size}
          </button>
        ))}
        
      </div>
      <button class="bg-black text-white px-8 py-3 text-sm mt-5 active:bg-gray-700">ADD TO CART</button>
      <div className='bg-slate-300 h-0.5 mt-10'></div>
      <div className='text-gray-600 mt-6'>
      <p>100% Original product.</p>
      <p>Cash on delivery is available on this product..</p>
      <p>Easy return and exchange policy within 7 days.</p>
      </div>
      </div>
      </div>









    </>
  );
}

export default Details;


