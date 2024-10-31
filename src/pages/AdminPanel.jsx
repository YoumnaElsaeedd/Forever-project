import React from 'react';
import SideBar from '../components/SideBar';
import Navbar2 from '../components/Navbar2';
import Add from './Add';
import List from './List';
import Orders from './Orders';
import { Routes, Route } from 'react-router-dom';


function AdminPanel() {
  return (
    <div class='custom-section' className='bg-gray-50 min-h-screen'>
      <>
        <Navbar2 />
        <hr />
        <div className='flex w-full'>
          <SideBar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='add' element={<Add />} />
              <Route path='list' element={<List />} />
              <Route path='orders' element={<Orders />} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  );
}

export default AdminPanel;

