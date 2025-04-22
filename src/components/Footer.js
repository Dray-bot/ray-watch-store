// Footer Section
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Add icons for social media

const Footer = () => {
  return (
    <footer className="bg-[#F9F7F1] text-[#333333] py-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg text-[#6B4F31]">&copy; 2025 RayWatchStore. All rights reserved.</p>
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a href="https://www.facebook.com/profile.php?id=61558139240477&ref=ig_profile_ac" className="text-[#3B5998] hover:text-[#6B4F31] transition-colors">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/raywatchstore_backup?igsh=ZzYxNzlyYnNuZzU3" className="text-[#E4405F] hover:text-[#6B4F31] transition-colors">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="text-[#1DA1F2] hover:text-[#6B4F31] transition-colors">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
