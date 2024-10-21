import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/shoppContext';

function Navbar() {
  const [show, setShow] = useState(false);
  const { setShowSearch , getCartCount } = useContext(ShopContext); 

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden sm:flex gap-4">
          <NavLink to="/" className="flex flex-col items-center">
            <h2>HOME</h2>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center">
            <h2>ABOUT</h2>
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center">
            <h2>COLLECTION</h2>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center">
            <h2>CONTACT</h2>
          </NavLink>
          <Link to="/login">
            <button className="border rounded-full px-3">Admin Panel</button>
          </Link>
        </ul>
        <div className="flex gap-4">
          <img src={assets.search_icon} className="w-5 cursor-pointer" onClick={() => setShowSearch(true)} alt="Search" />
          <img src={assets.profile_icon} className="w-5" alt="Profile" />
          <div className="relative">
            <img src={assets.cart_icon} className="w-5" alt="Cart" />
            <NavLink to="/Cart">
            <span className="absolute bg-black rounded-full h-4 w-4 pl-2 text-sm right-[-6] bottom-0 left-2 text-white">{getCartCount()}</span>
          </NavLink>
          </div>
          <img src={assets.menu_icon} className="sm:hidden w-5" onClick={() => setShow(true)} alt="Menu" />
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
