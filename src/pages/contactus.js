import { useEffect, useState } from 'react';
import Layout from '@/components/Shared/Layout';
import { AiOutlineEnvironment, AiOutlineMessage, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
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

                <div className="flex flex-col justify-center items-start space-y-10 px-8 md:px-20 mb-10 mt-10">
                    {/* Send a Message Form Section */}
                    <div className="w-full bg-white shadow-lg rounded-lg p-8 mx-auto max-w-3xl">
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

                    <div className="relative w-full flex flex-col items-center justify-center py-12">
                        {/* Flower Pattern Background */}
                        <div className="absolute inset-0">
                            <svg
                                viewBox="0 0 200 200"
                                className="h-full w-full"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <defs>
                                    {/* Flower Shape Definition */}
                                    <path id="flower" d="M10,30 C10,10 30,10 30,30 C30,50 10,50 10,30 Z" fill="rgba(255, 200, 200, 0.3)" />
                                </defs>

                                {/* Repeating Flower Patterns */}
                                <use xlinkHref="#flower" x="20" y="10" />
                                <use xlinkHref="#flower" x="70" y="30" />
                                <use xlinkHref="#flower" x="30" y="80" />
                                <use xlinkHref="#flower" x="100" y="50" />
                                <use xlinkHref="#flower" x="150" y="20" />
                                <use xlinkHref="#flower" x="80" y="120" />
                                <use xlinkHref="#flower" x="120" y="140" />
                                <use xlinkHref="#flower" x="10" y="150" />
                                <use xlinkHref="#flower" x="60" y="160" />
                                <use xlinkHref="#flower" x="140" y="100" />
                            </svg>
                        </div>

                        {/* Content Section */}
                        <div className="relative z-10 w-full max-w-6xl px-8">
                            <h2 className="text-4xl font-bold text-center text-[#323232] mb-12">Contact Us</h2>

                            {/* Flex container for Email, Call, and Chat */}
                            <div className="flex justify-around items-center space-x-8 bg-[#EDE5E1] shadow-lg rounded-lg p-12">
                                {/* Email Section */}
                                <a href="mailto:itglimpse@gmail.com" className="flex flex-col items-center">
                                    <div className="p-4 border-2 border-[#323232] rounded-full mb-4">
                                        <AiOutlineMail className="text-4xl text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">itglimpse@gmail.com</h3>
                                    <p className="text-lg text-gray-700 mb-1">Have questions?</p>
                                    <p className="text-lg text-gray-700">We're here to help you!</p>
                                </a>

                                {/* Call Section */}
                                <a href="tel:03001234567" className="flex flex-col items-center">
                                    <div className="p-4 border-2 border-[#323232] rounded-full mb-4">
                                        <AiOutlinePhone className="text-4xl text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">03001234567</h3>
                                    <p className="text-gray-600">Monday - Thursday 7:00am - 5:00pm</p>
                                    <p className="text-gray-600">Friday 7:00am - 1:00pm</p>
                                </a>

                                {/* Chat Section */}
                                <a href="javascript:void(0);" className="flex flex-col items-center">
                                    <div className="p-4 border-2 border-[#323232] rounded-full mb-4">
                                        <AiOutlineMessage className="text-4xl text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">+92 3001234567</h3>
                                    <p className="text-gray-600">Monday - Thursday 7:00am - 5:00pm</p>
                                    <p className="text-gray-600">Friday 7:00am - 1:00pm</p>
                                </a>
                            </div>

                            {/* Decorative Border or Wave at the Bottom */}
                            <div className="mt-12">
                                <div className="h-20 bg-gradient-to-t from-gray-200 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
