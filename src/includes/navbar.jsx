import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/shoppContext';

function Navbar() {
  const [show, setShow] = useState(false);
  const { setShowSearch , getCartCount } = useContext(ShopContext); 

  return (
    <>
      <div className="flex items-center justify-between py-5  font-medium">
        <img src={assets.logo} className='w-36' alt="Logo" />
        <ul className="hidden sm:flex gap-5 text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to="/about"  className="flex flex-col items-center gap-1 ">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to="/collection"  className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to="/contact"  className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <Link to="/login">
           <button className="border rounded-full px-3  text-sm "> Admin Panel</button>
         </Link>

        </ul>
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-5 cursor-pointer" onClick={() => setShowSearch(true)} alt="Search" />
         <Link to='/LoginUser'><img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" /></Link>
        

        
          
          <div className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
            <NavLink to="/Cart">
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </NavLink>
          </div>
          <img src={assets.menu_icon} className="w-5 cursor-pointer bg-white transition-all sm:hidden " onClick={() => setShow(true)} alt="Menu" />
        </div>

        <div className={`absolute top-0 bottom-0 right-0 left-0 bg-white overflow-hidden flex-col ${show ? 'w-full' : 'w-0'}`}>
          <div>
            <img src={assets.dropdown_icon} alt="Close Menu" onClick={() => setShow(false)} />
            <p>back</p>
          </div>
          <ul className="flex flex-col gap-4">
            <NavLink to="/" className="flex flex-col items-center">
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center">
              <h2>About</h2>
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center">
              <h2>Collection</h2>
            </NavLink>
            <NavLink to="/login" className="flex flex-col items-center">
              <h2>Contact</h2>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="bg-slate-200 h-0.5 w-full mb-4"></div>
    </>
  );
}

export default Navbar;
