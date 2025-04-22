// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store';
import { ShoppingCart } from 'lucide-react'; // ✅ Lucide cart icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useStore((state) => state.cart);

  return (
    <header className="bg-white text-[#1F2937] shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-[#6B4F31]">
          <Link to="/">RayWatchStore</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#f39c12] font-medium transition duration-200">Home</Link>
          <Link to="/shop" className="hover:text-[#f39c12] font-medium transition duration-200">Shop</Link>
          <Link to="/track-order" className="hover:text-[#f39c12] font-medium transition duration-200">Track Order</Link>
          <Link to="/faqs" className="hover:text-[#f39c12] font-medium transition duration-200">FAQs</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#1F2937" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Cart Icon */}
        <div className="relative ml-4">
          <Link to="/cart" className="flex items-center">
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FF4E50] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
            <ShoppingCart className="w-6 h-6 text-[#1F2937]" />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/" className="block hover:text-[#f39c12]">Home</Link>
          <Link to="/shop" className="block hover:text-[#f39c12]">Shop</Link>
          <Link to="/track-order" className="block hover:text-[#f39c12]">Track Order</Link>
          <Link to="/faqs" className="block hover:text-[#f39c12]">FAQs</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
