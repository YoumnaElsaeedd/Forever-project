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
    <div className='sm:flex flex-col sm:flex-row mt-10 gap-6 p-4'>
  <div className='sm:w-1/2 flex flex-col sm:flex-row items-center'>
    <img 
      src={product.image[0]} 
      alt={product.name} 
      className='w-2/3 sm:w-1/4 h-40 mb-4 sm:mr-10 object-cover' 
    />
    <img 
      src={product.image[0]} 
      alt={product.name} 
      className='w-full sm:w-3/4 object-cover' 
    />
  </div>

  <div className='sm:w-1/2'>
    <h1 className='text-2xl sm:text-3xl text-stone-950 mb-2'>{product.name}</h1>

    <div className='flex items-center mb-3'>
      <img src={assets.star_icon} className="w-4 h-4"/>
      <img src={assets.star_icon} className="w-4 h-4"/>
      <img src={assets.star_icon} className="w-4 h-4"/>
      <img src={assets.star_icon} className="w-4 h-4"/>
      <img src={assets.star_dull_icon} className="w-4 h-4"/>
      <h1 className="ml-2">(122)</h1>
    </div>

    <p className='text-xl sm:text-3xl text-stone-950 mb-2'>${product.price}</p>
    <p className='text-gray-600 mb-5'>{product.description}</p>

    <h1>Select Size</h1>
    <div className="flex flex-wrap gap-3 mt-2">
      {product.sizes.map((size, index) => (
        <button key={index} className="border px-4 py-2 w-12 h-10 text-center">
          {size}
        </button>
      ))}
    </div>

    <button className="bg-black text-white px-8 py-3 text-sm mt-5 w-full sm:w-auto active:bg-gray-700">
      ADD TO CART
    </button>

    <div className='bg-slate-300 h-0.5 mt-10'></div>

    <div className='text-gray-600 mt-6'>
      <p>100% Original product.</p>
      <p>Cash on delivery is available on this product.</p>
      <p>Easy return and exchange policy within 7 days.</p>
    </div>
  </div>
</div>










    </>
  );
}

export default Details;


