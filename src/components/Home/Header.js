import { FaSearch, FaSignInAlt } from 'react-icons/fa'; // Importing icons from react-icons
import React, { useState, useEffect } from 'react'; // Import React and useState

export default function Header() {
  const images = [
    { src: '/images/cloudcomputing.webp', label: 'Cloud Computing' },
    { src: '/images/blockchain.webp', label: 'Blockchain' },
    { src: '/images/imge.webp', label: 'AI' },
    { src: '/images/imm4.webp', label: 'Blockchain' },
    { src: '/images/imm3.webp', label: 'Cloud Computing' },
    { src: '/images/w19.jpg', label: 'AI' },
    { src: '/images/w20.jpg', label: 'Blockchain' },
    { src: '/images/w15.jpg', label: 'Cloud Computing' },
];

const categories = ['IT', 'AI', 'Blockchain', 'Cloud Computing'];

const [selectedCategory, setSelectedCategory] = useState('IT');
const [currentIndex, setCurrentIndex] = useState(0);
const [direction, setDirection] = useState(1); // Direction of the slide (1 = forward, -1 = backward)

// Filter images based on selected category
const filteredImages = selectedCategory === 'IT'
    ? images
    : images.filter(image => image.label === selectedCategory);

// Automatically slide images
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            if (newIndex >= filteredImages.length || newIndex < 0) {
                setDirection(-direction); // Reverse the direction when limits are reached
                return prevIndex;
            }
            return newIndex;
        });
    }, 3000); // Adjust the speed of the sliding effect

    return () => clearInterval(interval); // Cleanup interval on unmount
}, [filteredImages, direction]);
  return (
    <header className="relative bg-[#DDD0C8] shadow-lg">
  {/* Container for Header Content */}
  <div className="max-w-7xl mx-auto flex flex-col items-center px-6 py-6">
    {/* Brand Name Centered */}
    <h1 className="text-5xl font-serif text-[#323232] hover:text-white transition duration-300 mb-4">
      ITGlimps
    </h1>

    {/* Navigation Links and Icons */}
    <nav className="w-full flex items-center justify-between">
      <ul className="flex space-x-8 text-lg font-serif text-[#323232]">
        <li>
          <a
            href="/"
            className="relative hover:text-white transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className="relative hover:text-white transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="/aboutus"
            className="relative hover:text-white transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/contactus"
            className="relative hover:text-white transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
          >
            Contact Us
          </a>
        </li>
        {/* Categories Link */}
        <li className="relative group">
          <span className="hover:text-white transition duration-300 cursor-pointer">
            Categories
          </span>

          {/* Slider Section */}
          <div className="absolute left-0 hidden group-hover:block mt-2 w-[600px] bg-[#DDD0C8] border border-[#323232] rounded-lg shadow-lg z-10 p-2 transition-transform duration-300 transform scale-95 group-hover:scale-100">
            {/* Small Navbar inside the slider */}
            <nav className="flex space-x-1.5 mb-2 text-[#323232] text-xs">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-2 py-1 hover:text-white transition ${
                    selectedCategory === category ? 'font-bold underline' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </nav>

            {/* Image Slider */}
            <div className="relative w-full h-[200px] overflow-hidden">
              <div className="flex animate-slide continuous-slide">
                {filteredImages.map((image, index) => (
                  <div key={index} className="relative w-[150px] h-[200px] flex-shrink-0 mx-2">
                    <img
                      src={image.src}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-sm font-bold animate-slide-text">
                        {image.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
      </ul>

      {/* Icons on the right */}
      <div className="flex space-x-6 ml-6">
        <a href="/search" className="text-[#323232] hover:text-white transition-transform duration-300">
          <FaSearch size={24} />
        </a>
        <a href="/login" className="text-[#323232] hover:text-white transition-transform duration-300">
          <FaSignInAlt size={24} />
        </a>
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
