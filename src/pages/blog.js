import React, { useState, useEffect } from 'react';
import { FaCommentAlt, FaBookOpen } from 'react-icons/fa';
import Layout from '@/components/Shared/Layout';
import Image from 'next/image';
import Link from 'next/link';

const data = [
    {
        name: 'Ayesha',
        title1: 'Introduction to Cloud Computing',
        description1: 'In this age of endless newfangled organizational tools, the spreadsheet holds firm. Frederick O’Brien explains how, from engineering to design, they can still provide a rock-solid foundation for your work.',
        profilePhoto: '/images/ayesha-profile.jpg',
        link1: '/cloud_computing',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'A Beginner’s Guide to Artificial Intelligence',
        description1: 'In this age of endless newfangled organizational tools, the spreadsheet holds firm. Frederick O’Brien explains how, from engineering to design, they can still provide a rock-solid foundation for your work.',
        profilePhoto: '/images/sumaira-profile.jpg',
        link1: '/ai_guide',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Iqra',
        title1: 'How to Build Your First Web Application',
        description1: 'In this age of endless newfangled organizational tools, the spreadsheet holds firm. Frederick O’Brien explains how, from engineering to design, they can still provide a rock-solid foundation for your work.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/web_app_guide',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'Understanding Cybersecurity and Best Practices',
        description1: 'In this age of endless newfangled organizational tools, the spreadsheet holds firm. Frederick O’Brien explains how, from engineering to design, they can still provide a rock-solid foundation for your work.',
        profilePhoto: '/images/sumaira-profile.jpg',
        link1: '/cybersecurity_tips',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Ayesha',
        title1: 'Top Programming Languages to Learn in 2024',
        description1: 'In this age of endless newfangled organizational tools, the spreadsheet holds firm. Frederick O’Brien explains how, from engineering to design, they can still provide a rock-solid foundation for your work.',
        profilePhoto: '/images/ayesha-profile.jpg',
        link1: '/programming_languages',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Iqra',
        title1: 'Exploring Machine Learning for Beginners',
        description1: 'In this age of endless newfangled organizational tools, the spreadsheet holds firm. Frederick O’Brien explains how, from engineering to design, they can still provide a rock-solid foundation for your work.',
        profilePhoto: '/images/iqra-profile.jpg',
        link1: '/machine_learning',
        reading_time: 'Read in 20 min'
    },
];

const Blog = () => {
    const [comments, setComments] = useState([]);

    // Simulating comments count or other dynamic content on the client side
    useEffect(() => {
        // Fetch comments count or any client-side dynamic data if necessary
        setComments(Array(data.length).fill(0)); // For example, setting 0 comments for now
    }, []);

    return (
        <Layout>
            <div className="container m-12">
                <div className="row flex mt-28">
                    <div className='flex w-4/5 '>
                        <div className="flex w-full flex-wrap justify-between justify-center">
                            {data.map((prod, index) => (
                                <div
                                    key={index}
                                    className="w-full mb-4 sm:w-1/2 md:w-1/3 m-4 p-4 flex lg:w-full justify-between
                                        transform transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 hover:-translate-y-1 
                                        bg-white "
                                >
                                    <div className='g-0 p-8'>
                                        <a href="#">
                                            <Image
                                                className="w-[100px] h-[60px] rounded-full object-cover hover:scale-110 transition-transform duration-500"
                                                src={prod.profilePhoto}
                                                width={800}
                                                height={300}
                                                alt={`${prod.name}'s profile`}
                                            />
                                        </a>
                                    </div>
                                    <div className="mb-4">
                                        <Link className="mb-5 text-2xl hover:scale-105 font-bold tracking-tight text-blue-400 dark:text-white" href="">
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
                                        <Link className='text-blue-400 font-bold text-lg' href={prod.link1}>
                                            Continue Reading...
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
                                                    {comments[index]} comments
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
}

export default Blog;
