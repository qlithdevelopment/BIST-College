import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Courses',
    dropdown: [
      { label: '+2 Science', path: '/courses/science' },
      { label: '+2 Commerce', path: '/courses/commerce' },
    ],
  },
  {
    label: 'Admission',
    dropdown: [
      { label: 'Admission Procedure', path: '/admission/procedure' },
      { label: 'Fee Structure', path: '/admission/fees' },
      { label: 'Rules & Regulations', path: '/admission/rules' },
    ],
  },
  { label: 'About Us', path: '/about' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState('');

  const isActive = (path) => location.pathname === path;
  const isDropdownItemActive = (dropdown) =>
    dropdown.some((item) => location.pathname.startsWith(item.path));

  return (
    <nav className="bg-primary shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo left on all screens */}
        <Link to="/" className="text-2xl font-bold text-white lg:hidden block">
          <img
            src="https://bistbbsr.com/wp-content/uploads/2022/04/Untitled-design-35.png"
            alt="Logo"
            className="w-16"
          />
        </Link>

        {/* Desktop Nav Left */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setHoveredDropdown(item.label)}
                onMouseLeave={() => setHoveredDropdown('')}
              >
                <button
                  className={`font-medium hover:text-white ${
                    hoveredDropdown === item.label ||
                    isDropdownItemActive(item.dropdown)
                      ? 'text-white'
                      : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>

                <AnimatePresence>
                  {hoveredDropdown === item.label && (
                    <motion.div
                      key="dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-40"
                    >
                      {item.dropdown.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 ${
                            isActive(sub.path)
                              ? 'bg-blue-50 text-blue-600 font-semibold'
                              : 'text-black'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={idx}
                to={item.path}
                className={`font-medium hover:text-white ${
                  isActive(item.path) ? 'text-white' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Right - Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 w-72 h-screen bg-white shadow-lg z-50 lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-blue-600"
              >
                BIST Menu
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} className="text-blue-600" />
              </button>
            </div>

            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, idx) =>
                item.dropdown ? (
                  <div key={idx}>
                    <div
                      onClick={() =>
                        setHoveredDropdown((prev) =>
                          prev === item.label ? '' : item.label
                        )
                      }
                      className={`font-medium cursor-pointer py-2 hover:text-blue-600 ${
                        isDropdownItemActive(item.dropdown)
                          ? 'text-blue-700'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </div>
                    <AnimatePresence>
                      {hoveredDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {item.dropdown.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              to={sub.path}
                              onClick={() => {
                                setHoveredDropdown('');
                                setMobileMenuOpen(false);
                              }}
                              className={`block text-sm py-1 hover:text-blue-600 ${
                                isActive(sub.path)
                                  ? 'text-blue-700 font-semibold'
                                  : 'text-gray-700'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 font-medium ${
                      isActive(item.path)
                        ? 'text-blue-700'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
