import React, { useContext } from 'react'
import { ShopContext } from '../context/shoppContext'
import Title from './Title'

const CartTotal= ()=> {
    const {currency,delivery_fee,AmountCart}=useContext(ShopContext)
  return (
    <div className='w-full'>
       <div className='text-2xl flex items-center'>
  <Title text1={'CART'} text2={'TOTALS'} />
  <p className='h-0.5 w-8 bg-slate-900 ml-4'></p>
</div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{currency} {AmountCart()}.00</p>

            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>

            </div>
            <hr/>
            <div className='flex justify-between'>
            <b>Total</b>
           <b> {currency} {AmountCart() === 0 ? 0 : (+AmountCart() + +delivery_fee)}.00 </b>


            </div>

        </div>

    </div>
  )
}

export default CartTotal