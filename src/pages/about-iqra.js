import React from 'react';
import { FaCommentAlt, FaBookOpen, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import Layout from '@/components/Shared/Layout';
import Link from 'next/link';

const data = [
    {
        name: 'Iqra',
        title1: 'Latest Trends in Cloud Computing for 2024',
        description1: 'Explore the newest trends in cloud computing for 2024, including multi-cloud strategies, edge computing, and serverless architecture. Stay ahead in the evolving cloud landscape.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/cloud_trends_2024',
        reading_time: 'Read in 15 min'
    },
    {
        name: 'Iqra',
        title1: 'Understanding Cloud Security in the Modern Era',
        description1: 'This article delves into the essential security practices for protecting your data in the cloud. Learn about encryption, compliance, and security frameworks for cloud environments.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/cloud_security_tips',
        reading_time: 'Read in 18 min'
    },
    {
        name: 'Iqra',
        title1: 'How to Optimize Cloud Costs for Your Business',
        description1: 'Cloud cost optimization is critical for maximizing return on investment. Learn strategies to reduce cloud expenses, from autoscaling to using the right cloud provider services.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/cloud_cost_optimization',
        reading_time: 'Read in 12 min'
    },
    {
        name: 'Iqra',
        title1: 'A Guide to Cloud Migration: Best Practices',
        description1: 'Moving to the cloud can be complex. This guide offers a step-by-step approach to cloud migration, helping businesses make a smooth transition without compromising performance or security.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/cloud_migration_guide',
        reading_time: 'Read in 22 min'
    },
    {
        name: 'Iqra',
        title1: 'Top Cloud Providers Compared: AWS, Azure, and Google Cloud',
        description1: 'Compare the leading cloud providers—AWS, Azure, and Google Cloud—on services, pricing, and features to find out which platform is best for your business needs in 2024.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/cloud_providers_comparison',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Iqra',
        title1: 'The Role of Artificial Intelligence in Cloud Computing',
        description1: 'Discover how artificial intelligence is revolutionizing cloud computing with automation, predictive analytics, and improved cloud service management.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/ai_cloud_integration',
        reading_time: 'Read in 19 min'
    },
];

const Cloud_Computing = () => {
    return (
        <Layout>
            {/* New Section for Profile, About, and Contact */}
            <div className="relative bg-white shadow-lg py-16 mt-28 text-gray-800">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-x-10">
                    {/* Profile Picture Section */}
                    <div className="flex-shrink-0 mt-6 relative rounded-full overflow-hidden border-4 border-[#DDD0C8] shadow-lg transition-all duration-300 hover:border-gray-900 group"> {/* Added padding */}
                        <img
                            className="w-[150px] h-[150px] rounded-full object-cover shadow-xl transition-transform duration-500 hover:scale-105"
                            src="/images/iqra-profile.jpg"
                            alt="Profile Picture"
                        />
                    </div>

                    {/* About Section - Centered */}
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-blue-400 uppercase tracking-wider text-md mb-2">Author</h3>
                        <h2 className="text-blackk text-4xl font-bold mb-4 tracking-wide">Iqra Arshad</h2>
                        <p className="text-black text-lg leading-relaxed">
                            Iqra Arshad is a Cloud Computing Researcher and Blogger, passionate about exploring cloud technologies, including scalable infrastructures and security. Through her blog, she shares insights on emerging trends and innovative solutions, helping both tech enthusiasts and professionals stay informed about the evolving cloud landscape.</p>
                    </div>

                    {/* Social Links Section */}
                    <div className="flex-shrink-0 text-center md:text-right">
                        <h4 className="text-blue-400 uppercase tracking-wider text-md mb-4">Find Iqra Elsewhere:</h4>
                        <ul className="space-y-4 flex flex-col items-center">
                            {/* LinkedIn */}
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/your-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition-transform duration-300 hover:scale-125 hover:text-black"
                                >
                                    <FaLinkedin className="text-4xl" />
                                </a>
                            </li>

                            {/* Email */}
                            <li>
                                <a
                                    href="mailto:iqra@gmail.com"
                                    className="transform transition-transform duration-300 hover:scale-125 hover:text-black"
                                >
                                    <FaEnvelope className="text-4xl" />
                                </a>
                            </li>

                            {/* Twitter */}
                            <li>
                                <a
                                    href="https://twitter.com/your-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition-transform duration-300 hover:scale-125 hover:text-black"
                                >
                                    <FaTwitter className="text-4xl" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Main Content Section */}
            <div className="container m-12">
                <div className="row flex mt-28">
                    <div className="flex w-4/5">
                        <div className="flex w-full flex-wrap justify-between justify-center">
                            {data.map((prod) => (
                                <div
                                    key={prod.title1}
                                    className="w-full mb-4 sm:w-1/2 md:w-1/3 m-4 p-4 flex lg:w-full justify-between
                                        transform transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/50 hover:-translate-y-1 
                                        bg-white "
                                >
                                    <div className='g-0 p-8'>
                                        <Link href="/about-iqra">
                                            <img
                                                className="w-[80px] h-[60px] rounded-full object-cover hover:scale-110 transition-transform duration-500"
                                                src={prod.profilePhoto}
                                                alt={`${prod.name}'s profile`}
                                            />
                                        </Link>
                                    </div>
                                    <div className="mb-4">
                                        <Link
                                            className="mb-5 text-2xl font-bold tracking-tight text-blue-400 dark:text-white"
                                            href="">
                                            {prod.name}
                                        </Link>
                                        <Link href={prod.link1}>
                                            <h1 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                                                {prod.title1}
                                            </h1>
                                        </Link>
                                        <p className="mb-3 font-normal text-black dark:text-gray-400">
                                            {prod.description1}
                                        </p>
                                        <Link
                                            className='text-blue-400 font-bold text-lg'
                                            href={prod.link1}>
                                            Read More...
                                        </Link>
                                        <div className='flex flex-row justify-center items-center space-x-8 bg-white p-4 mt-8 hover:shadow-xl transition duration-300'>
                                            <div className='flex items-center space-x-2'>
                                                <FaBookOpen className='text-black dark:text-gray-300' />
                                                <span className='font-medium text-lg text-black dark:text-gray-300'>
                                                    {prod.reading_time}
                                                </span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <FaCommentAlt className='text-black dark:text-gray-300' />
                                                <span className='font-medium text-lg text-black dark:text-gray-300'>
                                                    0 comments
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="mt-10 border-gray-200 dark:border-white" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <Link href="/load_more" className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-colors duration-300 text-xl">
                        Load More
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Cloud_Computing;