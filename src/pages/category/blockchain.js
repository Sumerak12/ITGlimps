import React from 'react';
import { FaCommentAlt, FaBookOpen } from 'react-icons/fa'; // Import icons
import Layout from '@/components/Shared/Layout';
import Link from 'next/link';
import Image from 'next/image';
import  { useState, useEffect } from 'react';

const data = [
    {
        name: 'Ayesha',
        title1: 'Introduction to Blockchain Technology',
        description1: 'Explore the fundamentals of blockchain technology and how it’s transforming industries like finance, healthcare, and logistics with decentralized systems.',
        profileImage: '/images/ayesha-profile.jpg', // Add profile image
        link1: '/blockchain_introduction',
        reading_time: 'Read in 20 min',
    },
    {
        name: 'Ayesha',
        title1: 'A Beginner’s Guide to Blockchain Development',
        description1: 'A comprehensive guide for beginners to start developing on the blockchain, including smart contracts, decentralized apps, and key tools used in the industry.',
        profileImage: '/images/ayesha-profile.jpg', // Add profile image
        link1: '/blockchain_guide',
        reading_time: 'Read in 20 min',
    },
    {
        name: 'Ayesha',
        title1: 'How to Build Your First Decentralized Application (DApp)',
        description1: 'Learn how to create your first decentralized application on the Ethereum blockchain using Solidity and other essential tools.',
        profileImage: '/images/ayesha-profile.jpg', // Add profile image
        link1: '/dapp_guide',
        reading_time: 'Read in 20 min',
    },
    {
        name: 'Ayesha',
        title1: 'Understanding Blockchain Security Best Practices',
        description1: 'Security is key in blockchain technology. This blog covers the best practices for ensuring the security of blockchain networks and smart contracts.',
        profileImage: '/images/ayesha-profile.jpg', // Add profile image
        link1: '/blockchain_security_tips',
        reading_time: 'Read in 20 min',
    },
    {
        name: 'Ayesha',
        title1: 'Top Blockchain Platforms to Watch in 2024',
        description1: 'An overview of the top blockchain platforms such as Ethereum, Polkadot, and Solana, and how they’re shaping the future of decentralized technologies.',
        profileImage: '/images/ayesha-profile.jpg', // Add profile image
        link1: '/top_blockchain_platforms_2024',
        reading_time: 'Read in 20 min',
    },
    {
        name: 'Ayesha',
        title1: 'Exploring the Future of Blockchain and Web3',
        description1: 'Discover how blockchain is driving the future of the internet through Web3 technologies and decentralized finance (DeFi).',
        profileImage: '/images/ayesha-profile.jpg', // Add profile image
        link1: '/blockchain_future_web3',
        reading_time: 'Read in 20 min',
    },
];

const Blockchain= () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Optionally return a loading state here
    }
    return (
        <Layout>
            <div className="container m-12">
                <div className="row flex mt-28">
                    <div className='flex w-4/5'>
                        <div className="flex w-full flex-wrap justify-between justify-center">
                            {data.map((prod, index) => (
                                <div key={index} className="w-full mb-4 sm:w-1/2 md:w-1/3 m-4 p-4 flex lg:w-full justify-between
                                transform transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/50 hover:-translate-y-1 
                                bg-white ">
                                    <div className='g-0 p-8'>
                                        <Link href={prod.link1}>
                                            <Image
                                                className="w-[80px] h-[60px] rounded-full object-cover hover:scale-110 transition-transform duration-500"
                                                src={prod.profileImage}
                                                alt={prod.title1}
                                                width={80}
                                                height={60}
                                                priority
                                            />
                                        </Link>
                                    </div>
                                    <div className="mb-4">
                                        <Link className="mb-5 text-2xl font-bold tracking-tight text-blue-400 dark:text-white" href={prod.link1}>
                                            {prod.name}
                                        </Link>
                                        <Link href={prod.link1}>
                                            <h1 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                                                {prod.title1}
                                            </h1>
                                        </Link>
                                        <p className="mb-3 font-normal text-black dark:text-gray-400">{prod.description1}</p>
                                        <Link className='text-blue-400 font-bold text-lg' href={prod.link1}>
                                            Read More...
                                        </Link>
                                        <div className='flex flex-row justify-center items-center space-x-8 bg-white p-4 mt-8 hover:shadow-xl transition duration-300'>
                                            <div className='flex items-center space-x-2'>
                                                <FaBookOpen className='text-black dark:text-gray-300' />
                                                <span className='font-medium text-lg text-black dark:text-gray-300'>{prod.reading_time}</span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <FaCommentAlt className='text-black dark:text-gray-300' />
                                                <span className='font-medium text-lg text-black dark:text-gray-300'>0 comments</span>
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
}


export default Blockchain;
