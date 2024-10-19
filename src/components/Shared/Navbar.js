import { useState, useEffect } from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
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
    const [direction, setDirection] = useState(1);

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
                    setDirection(-direction);
                    return prevIndex;
                }
                return newIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [filteredImages, direction]);

    return (
        <nav className="bg-white text-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-[#323232] text-3xl font-bold">
                    <Link href="/" className="hover:text-black transition duration-300">ITGlimps</Link>
                </div>
                <ul className="hidden md:flex space-x-10 text-lg text-[#323232] font-medium">
                    {['Home', 'Blog', 'About Us', 'Contact Us'].map((item) => (
                        <li key={item} className="relative group">
                            <Link
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                                className="relative hover:text-black transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#323232] hover:before:w-full before:transition-all before:duration-500"
                            >
                                <span className="hover:text-black transition duration-300">{item}</span>
                                <span className="absolute left-0 bottom-0 h-[2px] bg-[#DDD0C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </li>
                    ))}
                    {/* Categories Link */}
                    <li className="relative group">
                        <span className="hover:text-black transition duration-300 cursor-pointer">Categories</span>
                        <div className="absolute left-0 hidden group-hover:block mt-2 w-[600px] bg-[#DDD0C8] border border-[#323232] rounded-lg shadow-lg z-10 p-2 transition-transform duration-300 transform scale-95 group-hover:scale-100">
                            <nav className="flex space-x-1.5 mb-2 text-[#323232] text-xs">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`px-2 py-1 hover:text-black transition ${selectedCategory === category ? 'font-bold underline' : ''}`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </nav>
                            <div className="relative w-full h-[200px] overflow-hidden">
                                <div className="flex animate-slide continuous-slide">
                                    {filteredImages.map((image, index) => (
                                        <div key={index} className="relative w-[150px] h-[200px] flex-shrink-0 mx-2">
                                            <image
                                                src={image.src}
                                                alt={`Gallery Image ${index + 1}`}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <p className="text-white text-sm font-bold animate-slide-text">{image.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex items-center space-x-6">
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="text-[#323232] hover:text-black transition-transform duration-300"
                    >
                        <FaSearch size={24} />
                    </button>
                    {showSearch && (
                        <div className="absolute right-6 mt-[90px] w-[300px] z-50">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 bg-white border border-[#323232] rounded-full shadow-md focus:outline-none focus:ring focus:border-[#DDD0C8] text-sm font-serif transition-all duration-500 ease-in-out"
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: '16px',
                                    color: '#323232',
                                }}
                            />
                        </div>
                    )}
                    <Link href="/login" className="text-[#323232] hover:text-black transition duration-300 transform hover:scale-110">
                        <FaSignInAlt size={20} />
                    </Link>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button id="menu-btn" className="text-[#323232] hover:text-black">
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
                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-black transition duration-300">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
