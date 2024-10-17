import React from 'react';
import { FaCommentAlt, FaBookOpen } from 'react-icons/fa';
import Layout from '@/components/Shared/Layout';
import Link from 'next/link';

const data = [
    {
        name: 'Sumaira',
        title1: 'Introduction to Artificial Intelligence',
        description1: 'Explore the basics of Artificial Intelligence and how it’s revolutionizing industries like healthcare, finance, and technology with automation and smart systems.',
        image1: '/images/sumaira-profile.jpg', // Updated to profile photo
        link1: '/ai_introduction',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'A Beginner’s Guide to Artificial Intelligence',
        description1: 'A comprehensive guide for beginners to understand the principles of AI, including machine learning, neural networks, and AI applications in various sectors.',
        image1: '/images/sumaira-profile.jpg', // Updated to profile photo
        link1: '/ai_guide',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'How AI is Shaping Web Application Development',
        description1: 'Discover how AI is transforming web development, from AI-powered tools to enhancing user experiences with intelligent features.',
        image1: '/images/sumaira-profile.jpg', // Updated to profile photo
        link1: '/ai_web_app_guide',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'AI and Cybersecurity: Best Practices for Safeguarding Data',
        description1: 'Learn about the intersection of AI and cybersecurity, including how AI is used to detect and prevent cyber threats more effectively.',
        image1: '/images/sumaira-profile.jpg', // Updated to profile photo
        link1: '/ai_cybersecurity_tips',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'Top AI Programming Languages to Learn in 2024',
        description1: 'An overview of the best programming languages for AI development in 2024, including Python, R, and TensorFlow, and how they are used in AI projects.',
        image1: '/images/sumaira-profile.jpg', // Updated to profile photo
        link1: '/top_ai_programming_languages_2024',
        reading_time: 'Read in 20 min'
    },
    {
        name: 'Sumaira',
        title1: 'Exploring Machine Learning: A Guide for Beginners',
        description1: 'An introduction to machine learning, one of the core components of AI, and how it helps computers learn from data to make intelligent decisions.',
        image1: '/images/sumaira-profile.jpg', // Updated to profile photo
        link1: '/machine_learning_beginners',
        reading_time: 'Read in 20 min'
    }
];

const Artificial_Intelligence = () => {
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
                                                className="w-[80px] h-[60px] rounded-full object-cover hover:scale-110 transition-transform duration-500"
                                                src={prod.image1}
                                                alt={prod.title1}
                                            />
                                        </a>
                                    </div>
                                    <div className="mb-4">
                                        <Link className="mb-5 text-2xl font-bold tracking-tight text-blue-400 dark:text-white" href="">
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

export default Artificial_Intelligence;
