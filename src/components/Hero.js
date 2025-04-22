// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://globalwatchco.com/wp-content/uploads/2024/01/gwc_luxury_timepiece_chopard_new_alpine_eagle_2023-edited.jpg')", // 🔥 Swap this when you’ve got your own
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-2xl tracking-tight">
          Timeless <span className="text-[#EAB308]">Elegance</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Elevate your presence with handcrafted luxury timepieces.
        </p>

        <Link
          to="/shop"
          className="inline-block bg-[#EAB308] text-black font-semibold py-3 px-8 rounded-full hover:bg-[#f39c12] transition-all duration-300 shadow-xl"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
