import { useState, useEffect } from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
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
        <nav className=" bg-[#DDD0C8] text-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-[#323232] text-3xl font-bold">
                    <Link href="/" className="hover:text-white transition duration-300">ITGlimps</Link>
                </div>

                {/* Menu Items */}
                <ul className="hidden md:flex space-x-10 text-lg text-[#323232] font-medium">
                    {['Home'].map((item) => (
                        <li key={item} className="relative group">
                            <Link
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                                className="relative transition duration-300 transform hover:scale-105"
                            >
                                <span className="hover:text-white transition duration-300">{item}</span>
                                <span className="absolute left-0 bottom-0 h-[2px] bg-[#DDD0C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </li>
                    ))}

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
                                        className={`px-2 py-1 hover:text-white transition ${selectedCategory === category ? 'font-bold underline' : ''}`}
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
                    <li className="relative group">
                        <Link
                            href="/aboutus"
                            className="relative transition duration-300 transform hover:scale-105"
                        >
                            <span className="hover:text-white transition duration-300">About Us</span>
                            <span className="absolute left-0 bottom-0 h-[2px] bg-[#DDD0C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/contactus"
                            className="relative transition duration-300 transform hover:scale-105"
                        >
                            <span className="hover:text-white transition duration-300">Contact Us</span>
                            <span className="absolute left-0 bottom-0 h-[2px] bg-[#DDD0C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>

                    {/* Blog Link */}
                    <li className="relative group">
                        <Link
                            href="/blog"
                            className="relative transition duration-300 transform hover:scale-105"
                        >
                            <span className="hover:text-white transition duration-300">Blog</span>
                            <span className="absolute left-0 bottom-0 h-[2px] bg-[#DDD0C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                </ul>

                {/* Search and Login Icons */}
                <div className="flex items-center space-x-6">
                    <Link href="/search" className="text-[#323232] hover:text-white transition duration-300 transform hover:scale-110">
                        <FaSearch size={20} />
                    </Link>
                    <Link href="/login" className="text-[#323232] hover:text-white transition duration-300 transform hover:scale-110">
                        <FaSignInAlt size={20} />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button id="menu-btn" className="text-[#323232] hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden px-6 py-4 bg-white shadow-md">
                <ul className="space-y-4 text-lg text-[#323232] font-medium">
                    {['Home', 'Blog', 'Categories', 'About Us', 'Contact Us'].map((item) => (
                        <li key={item}>
                            <Link
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                                className="block hover:text-white transition duration-300"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
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
                    0%, 100% {
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

                /* Border Surround */
                .group:hover > a {
                    border: 2px solid #323232; /* Gold */
                    border-radius: 4px;
                    padding: 4px; /* Adjust padding for border */
                    transition: border 0.3s ease;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
