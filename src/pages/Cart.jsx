import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets'; 
import { ShopContext } from '../context/shoppContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products: contextProducts, currency, cartItem, updatedQuantity } = useContext(ShopContext); 
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <div className='flex items-center'>
          <Title text1={'Your'} text2={'Cart'} />
         
        </div>
      </div>

      <div>
        {cartData.map((item, index) => {
          const DataInCart = contextProducts.find((product) => product._id === item._id);

          return DataInCart ? (
            <div key={index} className='py-4 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] text-gray-700 gap-4 items-center'>
              <div className='flex items-start gap-6'>
                {DataInCart.image && DataInCart.image.length > 0 ? (
                  <img src={DataInCart.image[0]} className='w-16 sm:w-20' alt={DataInCart.name} />
                ) : (
                  <div>No Image Available</div>
                )}
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{DataInCart.name}</p>
                  <div className='flex items-center gap-5'>
                    <p>{currency} {DataInCart.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
                <input
                  onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updatedQuantity(item._id, item.size, Number(e.target.value))}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type='number'
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updatedQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  className='w-4 mt-1 mr-4 sm:w-5 cursor-pointer'
                  alt='Remove'
                />
              </div>
            </div>
          ) : null;
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
        </div>
      </div>

      <div className='w-full text-end'>
        <button onClick={() => navigate('/checkout')} className='bg-black text-white text-sm my-8 px-8 py-3'>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;

