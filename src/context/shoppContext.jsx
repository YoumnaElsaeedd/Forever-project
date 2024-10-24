import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ToastContainer, toast } from 'react-toastify';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = '10';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  


  
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItem);
    
    if (!size) {
      toast.error('Select the product size');
      return;
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData); 
  };

  // Function to get the total count of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    
    for (const itemId in cartItem) {
      const sizes = cartItem[itemId]; 
      for (const size in sizes) {
        try {
          
          if (sizes[size] > 0) {
            totalCount += sizes[size];
          }
        } catch (error) {
        
          console.error(error);
        }
      }
    }
    
    return totalCount;
  };
  
const updatedQuantity =async (itemId,size,quantity)=>{
     let cartData =structuredClone(cartItem)
      cartData[itemId][size]=quantity;
      setCartItem(cartData)
}

const AmountCart= ()=>{
  let totalAmount=0;
  for(const items in cartItem){
    let itemInfo=products.find((product)=>product._id===items)
    for(const item in cartItem[items]){
      try{
        if(cartItem [items][item]>0){
          totalAmount+=itemInfo.price * cartItem[items][item] 
        }
      }
      catch(error){

      }
    }
  }
  return totalAmount
}
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    updatedQuantity,
    AmountCart
    
    
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

