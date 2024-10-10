import React from 'react';
import { FaCommentAlt, FaBookOpen } from 'react-icons/fa';
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
                                            className="mb-5 text-2xl hover:text-green-700 font-bold tracking-tight text-rose-700 dark:text-white"
                                            href="">
                                            {prod.name}
                                        </Link>
                                        <Link href={prod.link1}>
                                            <h1 className="mb-2 text-2xl hover:text-violet-400 font-bold tracking-tight text-gray-900 dark:text-white">
                                                {prod.title1}
                                            </h1>
                                        </Link>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {prod.description1}
                                        </p>
                                        <Link
                                            className='text-sky-500 hover:text-fuchsia-950 font-bold text-lg'
                                            href={prod.link1}>
                                            Read More...
                                        </Link>
                                        <div className='flex flex-row justify-center items-center space-x-8 bg-white p-4 mt-8'>
                                            <div className='flex items-center space-x-2'>
                                                <FaBookOpen className='text-rose-700 dark:text-gray-300' />
                                                <span className='font-medium text-lg text-rose-700 dark:text-gray-300'>
                                                    {prod.reading_time}
                                                </span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <FaCommentAlt className='text-violet-700 dark:text-gray-300' />
                                                <span className='font-medium text-lg text-violet-700 dark:text-gray-300'>
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
                    <Link href="/load_more" className="bg-[#323232] text-[#DDD0C8] font-semibold py-3 px-6 rounded-lg hover:bg-[#EDE5E1] hover:text-white transition-colors duration-300 text-xl">
                        Load More
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Cloud_Computing;
