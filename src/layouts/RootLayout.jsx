import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import TopBar from '../components/common/TopBar';
import MiddleNav from '../components/common/MiddleNav';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar/>
      <MiddleNav/>
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">CompanyName</h3>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="mb-4 md:mb-0">
                <h4 className="text-sm font-semibold mb-2 text-gray-300">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-300">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;