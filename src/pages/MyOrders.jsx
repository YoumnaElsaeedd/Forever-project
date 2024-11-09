import React, { useContext } from 'react';
import { ShopContext } from '../context/shoppContext';
import Title from '../components/Title';

const MyOrders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl flex justify-start'>
        <Title text1={"MY"} text2={'ORDERS'} />
      </div>
      <div>
        {products.length > 0 && products.slice(1, 4).map((item, index) => (
          <div key={item.id || index} className='py-4 border-t border-b text-gray-700 flex flex-col gap-4 md:flex-row md:items-center'>
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
              <div className='flex-grow'>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-500'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 2</p>
                  <p>Size: M</p>
                </div>
                
                <p>Date: <span className='text-gray-400'>{item.orderDate || '3, Nov, 2024'}</span></p>
                <div className='flex items-center gap-2 mt-4'>
                  <p className='w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
              </div>
            </div>
            <div className='ml-auto'>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
