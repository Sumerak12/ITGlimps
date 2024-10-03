import { useEffect, useState } from 'react';
import Layout from '@/components/Shared/Layout';

export default function ContactPage() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const newOpacity = Math.max(1 - scrollTop / 490, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Layout>
            <div className="relative min-h-screen bg-gray-100 mt-28">
                {/* Header Section */}
                <div
                    className={`relative h-[70vh] flex items-center justify-center transition-opacity duration-700`}
                    style={{ opacity: opacity }}
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-[#DDD0C8] opacity-80"></div>

                    {/* SVG Pattern Background */}
                    <div className="absolute inset-0">
                        <svg
                            viewBox="0 0 200 200"
                            className="h-full w-full"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                {/* Organic Shapes Pattern */}
                                <pattern id="organic-shapes" patternUnits="userSpaceOnUse" width="200" height="200">
                                    <path d="M100,0 C150,50 150,150 100,200 C50,150 50,50 100,0 Z" fill="rgba(255, 255, 255, 0.1)" />
                                    <path d="M200,100 C150,150 50,150 0,100 C50,50 150,50 200,100 Z" fill="rgba(255, 255, 255, 0.2)" />
                                </pattern>

                                {/* Triangular Mosaic Pattern */}
                                <pattern id="triangular-mosaic" patternUnits="userSpaceOnUse" width="100" height="100">
                                    <polygon points="50,0 100,100 0,100" fill="rgba(0, 128, 128, 0.1)" />
                                    <polygon points="0,0 100,0 50,100" fill="rgba(0, 128, 128, 0.2)" />
                                </pattern>

                                {/* Spiral Waves Pattern */}
                                <pattern id="spiral-waves" patternUnits="userSpaceOnUse" width="300" height="300">
                                    <path d="M150,0 C230,100 70,100 150,200 C230,300 70,300 150,400" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" fill="none" />
                                </pattern>

                                {/* Dot Matrix Pattern */}
                                <pattern id="dot-matrix" patternUnits="userSpaceOnUse" width="20" height="20">
                                    <circle cx="10" cy="10" r="3" fill="rgba(255, 255, 255, 0.2)" />
                                </pattern>
                            </defs>

                            {/* Use patterns for background */}
                            <rect width="200" height="200" fill="url(#organic-shapes)" />
                            <rect width="200" height="200" fill="url(#triangular-mosaic)" />
                            <rect width="200" height="200" fill="url(#spiral-waves)" />
                            <rect width="200" height="200" fill="url(#dot-matrix)" />
                        </svg>
                    </div>

                    <div className="text-center z-10 text-white">
                        <h1 className="text-6xl text-[#323232] font-extrabold tracking-wider animate-fade-in">Contact Me</h1>
                        <p className="text-2xl text-[#323232] mt-4 animate-fade-in">Let’s Get in Touch</p>
                    </div>
                </div>

                <div className="container mx-auto py-10 px-5 flex flex-col items-center">
                    {/* Form Container */}
                    <div className="w-full max-w-4xl mx-auto px-10 bg-white rounded-lg transition-transform duration-300 transform hover:scale-105">
                        {/* Your Name Field */}
                        <div className="mb-8 mt-8 ">
                            <label htmlFor="name" className="block  text-lg font-semibold text-navy-800 mb-3">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-5 bg-[#DDD0C8] py-4 text-gray-900 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600 transition duration-300 shadow-md"
                                style={{ borderRadius: '30px' }}
                            />
                        </div>

                        {/* Your Email Field */}
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-lg font-semibold text-navy-800 mb-3">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-5 py-4 bg-[#DDD0C8] text-gray-900 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600 transition duration-300 shadow-md"
                                style={{ borderRadius: '30px' }}
                            />
                        </div>

                        {/* Your Message Field */}
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-lg font-semibold text-navy-800 mb-3">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message"
                                rows="5"
                                className="w-full px-5 bg-[#DDD0C8] py-4 text-gray-900 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600 transition duration-300 shadow-md"
                                style={{ borderRadius: '30px' }}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-1/4 ml-8 mb-8 py-4 px-6 text-lg font-semibold text-[#323232] bg-[#DDD0C8] rounded-lg shadow-lg hover:bg-[#323232] hover:text-white transition duration-300"
                            style={{ transition: 'color 0.3s' }} // Optional for smoother transition
                        >
                            Send Message
                        </button>




                    </div>
                </div>
            </div>
        </Layout>
    );
}
