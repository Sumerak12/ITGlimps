import { FaSearch, FaSignInAlt } from 'react-icons/fa'; // Importing icons from react-icons
// import React, { useState, useEffect } from 'react'; // Import React and useState
// import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="relative  shadow-lg">
  {/* Container for Header Content */}
  <div className="max-w-7xl mx-auto flex flex-col items-center px-6 py-6">
    {/* Brand Name Centered */}
    <h1 className="text-5xl font-serif text-[#323232]  transition duration-300 mb-4">
      ITGlimps
    </h1>

    {/* Navigation Links and Icons */}
    <nav className="w-full flex items-center justify-between">
      <ul className="flex space-x-8 text-lg font-serif text-[#323232]">
        <li>
          <Link
            href="/"
            className="relative  transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            Home
          </Link>
        </li>
         {/* Categories Link */}
   <li>
    <Link href="./slider"
    className="relative  transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500">
      Categories
    </Link>
   </li>
        <li>
          <Link
            href="/blog"
            className="relative transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/aboutus"
            className="relative  transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contactus"
            className="relative  transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            Contact Us
          </Link>
        </li>
       
      </ul>

      {/* Icons on the right */}
      <div className="flex space-x-6 ml-6">
        <Link href="/search" className="text-[#323232]  transition-transform duration-300">
          <FaSearch size={24} />
        </Link>
        <Link href="/login" className="text-[#323232]  transition-transform duration-300">
          <FaSignInAlt size={24} />
        </Link>
      </div>
    </nav>
  </div>

  {/* Custom Styles */}
  <style jsx global>{`
    .text-[#323232] {
      color: #323232; /* dark-gray */
    }
    .hover\:text-[#323232]:hover {
      color: white; /* Gold */
    }
    nav {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Enhanced Underline Animation */
    @keyframes underline {
      0% {
        transform: scaleX(0);
      }
      50% {
        transform: scaleX(1.1);
      }
      100% {
        transform: scaleX(1);
      }
    }

    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes fadeInOut {
      0%,
      100% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }

    .continuous-slide {
      animation: slide 20s linear infinite;
    }

    .animate-slide-text {
      animation: fadeInOut 5s ease-in-out infinite;
    }

    .absolute {
      transition: transform 0.3s ease;
    }

    /* Categories Specific Styles */
    .group:hover > span {
      color: white; /* Change text color on hover */
    }

    .group:hover > div {
      border: 2px solid #323232; /* Dark gray border on hover */
      border-radius: 4px;
      padding: 4px; /* Adjust padding for border */
      transition: border 0.3s ease;
    }

    #menu-btn:focus + #mobile-menu {
      display: block;
    }
  `}</style>
</header>

  );
}
