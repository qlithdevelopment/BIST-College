import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import TopBar from '../components/common/TopBar';
import MiddleNav from '../components/common/MiddleNav';
import Footer from '../components/common/Footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar/>
      <MiddleNav/>
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
     <div>
      <Footer/>
     </div>
    </div>
  );
};

export default RootLayout;