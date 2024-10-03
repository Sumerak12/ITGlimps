import React from 'react';
import { FaCommentAlt, FaBookOpen } from 'react-icons/fa';
import Layout from '@/components/Shared/Layout';
import Link from 'next/link';

const data = [
    // Ayesha's Blogs (Blockchain-related)
    {
        name: 'Ayesha',
        title1: 'Introduction to Blockchain Technology',
        description1: 'Discover the basics of blockchain technology, its core principles, and its potential to revolutionize industries like finance, healthcare, and logistics.',
        image1: '/images/ayesha-profile.jpg',  // Update with profile image URL
        link1: '/blockchain_introduction',
        reading_time: 'Read in 15 min'
    },
    {
        name: 'Ayesha',
        title1: 'Blockchain Trends to Watch in 2024',
        description1: 'Stay updated on the latest trends in blockchain technology for 2024, from decentralized finance (DeFi) to non-fungible tokens (NFTs) and beyond.',
        image1: '/images/ayesha-profile.jpg',  // Update with profile image URL
        link1: '/blockchain_trends_2024',
        reading_time: 'Read in 18 min'
    },

    // Sumaira's Blogs (Artificial Intelligence-related)
    {
        name: 'Sumaira',
        title1: 'A Beginner’s Guide to Artificial Intelligence',
        description1: 'Learn the basics of artificial intelligence, including machine learning, neural networks, and how AI is being used to solve complex problems across industries.',
        image1: '/images/sumaira-profile.jpg',  // Update with profile image URL
        link1: '/ai_guide',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'AI and Its Role in Healthcare Innovation',
        description1: 'Explore how artificial intelligence is transforming the healthcare industry, from diagnostic tools to personalized treatment plans and robotic surgeries.',
        image1: '/images/sumaira-profile.jpg',  // Update with profile image URL
        link1: '/ai_healthcare_innovation',
        reading_time: 'Read in 19 min'
    },

    // Iqra's Blogs (Cloud Computing-related)
    {
        name: 'Iqra',
        title1: 'How to Build Your First Web Application Using Cloud Computing',
        description1: 'Learn how to leverage cloud computing services to build, deploy, and scale your first web application with ease.',
        image1: '/images/iqra-profile.jpg',  // Update with profile image URL
        link1: '/web_app_cloud_guide',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Iqra',
        title1: 'Cloud Security: Best Practices for Protecting Your Data',
        description1: 'Understand the top cloud security practices that organizations must follow to ensure the safety and privacy of their data in the cloud.',
        image1: '/images/iqra-profile.jpg',  // Update with profile image URL
        link1: '/cloud_security_tips',
        reading_time: 'Read in 16 min'
    },
    {
        name: 'Iqra',
        title1: 'Top Cloud Providers in 2024: AWS, Azure, and Google Cloud',
        description1: 'Compare the top cloud providers and find out which one is best suited for your organization based on features, pricing, and services.',
        image1: '/images/iqra-profile.jpg',  // Update with profile image URL
        link1: '/top_cloud_providers_2024',
        reading_time: 'Read in 18 min'
    },

    // Sumaira's Additional Blog (AI-related)
    {
        name: 'Sumaira',
        title1: 'Understanding the Ethics of Artificial Intelligence',
        description1: 'Dive into the ethical implications of artificial intelligence, including privacy concerns, bias in algorithms, and the future of AI regulations.',
        image1: '/images/sumaira-profile.jpg',  // Update with profile image URL
        link1: '/ai_ethics_guide',
        reading_time: 'Read in 17 min'
    }
];

const IT = () => {
    return (
        <Layout>
            <div className="container m-12">
                <div className="row flex mt-28">
                    <div className='flex w-4/5'>
                        <div className="flex w-full flex-wrap justify-between justify-center">
                            {data.map((prod) => (
                                <div key={prod.title1} className="w-full mb-4 sm:w-1/2 md:w-1/3 m-4 p-4 flex lg:w-full justify-between
                                transform transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/50 hover:-translate-y-1 
                                bg-white ">
                                    <div className='g-0 p-8'>
                                        <a href="#">
                                            <img
                                                className="w-[80px] h-[70px] rounded-full object-cover hover:scale-110 transition-transform duration-500"  // Changed to rounded-full for profile photo
                                                src={prod.image1}
                                                alt={prod.title1}
                                            />
                                        </a>
                                    </div>
                                    <div className="mb-4">
                                        <Link className="mb-5 text-2xl hover:text-green-700 font-bold tracking-tight text-rose-700 dark:text-white" href="">
                                            {prod.name}
                                        </Link>
                                        <Link href={prod.link1}>
                                            <h1 className="mb-2 text-2xl hover:text-violet-400 font-bold tracking-tight text-gray-900 dark:text-white">
                                                {prod.title1}
                                            </h1>
                                        </Link>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prod.description1}</p>
                                        <Link className='text-sky-500 hover:text-fuchsia-950 font-bold text-lg' href={prod.link1}>
                                            Read More...
                                        </Link>
                                        <div className='flex flex-row justify-center items-center space-x-8 bg-white p-4 mt-8 hover:shadow-xl transition duration-300'>
                                            <div className='flex items-center space-x-2'>
                                                <FaBookOpen className='text-rose-700 dark:text-gray-300' />
                                                <span className='font-medium text-lg text-rose-700 dark:text-gray-300'>{prod.reading_time}</span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <FaCommentAlt className='text-violet-700 dark:text-gray-300' />
                                                <span className='font-medium text-lg text-violet-700 dark:text-gray-300'>0 comments</span>
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
                    <Link href="/load_more" className="bg-[#323232] text-[#DDD0C8] font-semibold py-3 px-6 rounded-lg hover:bg-[#DDD0C8] hover:text-white transition-colors duration-300 text-xl">
                        Load More
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default IT;
