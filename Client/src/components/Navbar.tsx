import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [creatorDropdownOpen, setCreatorDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-black font-bold text-xl">
            passionroot
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
            >
              For Brands <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${brandDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {brandDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn transition-all">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setCreatorDropdownOpen(!creatorDropdownOpen)}
            >
              For Creators <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${creatorDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {creatorDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn transition-all">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
        </div>

        {/* Right Side Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Careers</a>

          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
            >
              Login <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${loginDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {loginDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn transition-all">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</a>
              </div>
            )}
          </div>

          <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-700 transition-colors">
            Get access →
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-slideDown origin-top transition-all duration-300 ease-in-out">
          <div className="space-y-6 px-4 pb-6">
            <div>
              <button
                onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
              >
                For Brands <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${brandDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {brandDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                  <a href="#" className="block py-1 text-gray-700 hover:text-gray-900">Option 1</a>
                  <a href="#" className="block py-1 text-gray-700 hover:text-gray-900">Option 2</a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setCreatorDropdownOpen(!creatorDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
              >
                For Creators <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${creatorDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {creatorDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                  <a href="#" className="block py-1 text-gray-700 hover:text-gray-900">Option 1</a>
                  <a href="#" className="block py-1 text-gray-700 hover:text-gray-900">Option 2</a>
                </div>
              )}
            </div>

            <a href="#" className="block text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Careers</a>

            <div>
              <button
                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
              >
                Login <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${loginDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {loginDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                  <a href="#" className="block py-1 text-gray-700 hover:text-gray-900">Sign In</a>
                  <a href="#" className="block py-1 text-gray-700 hover:text-gray-900">Create Account</a>
                </div>
              )}
            </div>

            <a href="#" className="block w-full bg-gray-800 text-white px-4 py-2 rounded-md text-center hover:bg-gray-700 transition-colors">
              Get access →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;