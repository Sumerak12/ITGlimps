import { useEffect, useState } from 'react';
import Layout from '@/components/Shared/Layout';
import { AiOutlineEnvironment, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

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
            <div className="relative min-h-screen bg-white-100 mt-28">
                {/* Header Section */}
                <div
                    className={`relative h-[70vh] flex items-center justify-center transition-opacity duration-700`}
                    style={{ opacity: opacity }}
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-[#EDE5E1] opacity-80"></div>

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

                {/* Container for Two Sections (Send a Message Form and Contact Info) */}
                <div className="flex flex-col lg:flex-row justify-center items-start space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 px-8 md:px-20 mb-10 mt-10"> {/* Adjust spacing and flex direction based on screen size */}
                    {/* Contact Information Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-10 lg:mt-10">
                        <h2 className="text-3xl font-bold text-navy-800 mb-6 text-center">Meet Us</h2>
                        {/* Contact Info Container */}
                        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">

                            {/* Display Email */}
                            <div className="mb-6 flex items-start space-x-4">
                                {/* Bold Email Icon with Aligned Text */}
                                <AiOutlineMail className="text-3xl font-bold text-black-800 mt-1" /> {/* Bold icon */}
                                <div className="text-left">
                                    <Link href="/" className="text-lg text-gray-800 underline">
                                        itglimpse@gmail.com
                                    </Link>
                                </div>
                            </div>

                            {/* Display Phone Number */}
                            <div className="mb-6 flex items-start space-x-4">
                                {/* Bold Phone Icon with Aligned Text */}
                                <AiOutlinePhone className="text-3xl font-bold text-black-800 mt-1" /> {/* Bold icon */}
                                <div className="text-left">
                                    <Link href="/" className="text-lg text-gray-800 underline">
                                        03001234567
                                    </Link>
                                </div>
                            </div>

                            {/* Display Address with Location Icon */}
                            <div className="mb-6 flex items-start space-x-4">
                                {/* Bold Location Icon with Aligned Text */}
                                <AiOutlineEnvironment className="text-3xl font-bold text-black-800 mt-1" /> {/* Location icon */}
                                <div className="text-left">
                                    <p className="text-gray-800 mt-2">House # 140, Faisal Villas Colony, Faisalabad, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Original Form (Send a Message) */}
                    <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-[#323232] mb-6 text-center">Send a Message</h2>

                        {/* Your Name Field */}
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-lg font-semibold text-navy-800 mb-3">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-5 py-4 bg-[#EDE5E1] text-gray-900 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600 transition duration-300 shadow-md"
                                style={{ borderRadius: '30px' }}
                            />
                        </div>

                        {/* Your Email Field */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-semibold text-navy-800 mb-3">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-5 py-4 bg-[#EDE5E1] text-gray-900 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600 transition duration-300 shadow-md"
                                style={{ borderRadius: '30px' }}
                            />
                        </div>

                        {/* Your Message Field */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-lg font-semibold text-navy-800 mb-3">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message"
                                rows="5"
                                className="w-full px-5 py-4 bg-[#EDE5E1] text-gray-900 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600 transition duration-300 shadow-md"
                                style={{ borderRadius: '30px' }}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="py-4 px-8 bg-[#323232] text-white text-lg font-semibold rounded-lg hover:bg-[#EDE5E1] hover:text-[#323232] transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}
