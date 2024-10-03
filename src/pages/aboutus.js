import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaLightbulb, FaShieldAlt, FaUsers, FaHandsHelping, FaBalanceScale, FaLeaf, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing necessary icons
import Layout from '@/components/Shared/Layout';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 md:px-6 py-10 mt-24">
        {/* First Column - Welcome Section */}
        <div className="flex-1 md:mr-7">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#323232] animate__animated animate__fadeInDown">
            Welcome Here!
          </h1>
          <p className="text-md md:text-lg mb-6 text-[#323232]" data-aos="fade-up">
            We are thrilled to have you in our vibrant community. Join us to connect, inspire, and empower each other.
          </p>
          <a
            href="/signup"
            className="w-1/4 py-4 px-6 text-lg font-semibold text-[#DDD0C8] bg-[#323232] rounded-lg shadow-lg hover:bg-[#DDD0C8] hover:text-white transition duration-300"
            data-aos="fade-up"
          >
            Get Started
          </a>
        </div>

        {/* Second Column - Images Section */}
        <div className="flex-1 grid grid-cols-1 gap-2 mt-8 md:mt-0">
          <div className="relative w-full h-80 overflow-hidden">
            <img
              src="/images/About.jpeg"
              alt="Description 1"
              className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-110 mt-2 ml-2" // Add margins here
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full flex flex-col mt-7 mb-8 items-center py-16 bg-[#DDD0C8]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%]">
          {/* First Column - Images with Random Arrangement */}
          <div className="flex flex-col space-y-4">
            {/* Top Row - Two Smaller Images with Overlap Effect */}
            <div className="flex justify-between relative mb-4">
              <div className="relative w-[48%] h-[200px] shadow-2xl overflow-hidden rounded-lg transition-transform transform hover:scale-105 z-10">
                <img
                  src="/images/im1.webp"  // Replace with your first image path
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[110px] left-[116px] w-[200px] h-[200px] shadow-2xl overflow-hidden rounded-lg transition-transform transform hover:scale-105 z-20">
                <img
                  src="/images/im2.webp"  // Replace with your second image path
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Row - Three Larger Images with Asymmetric Arrangement */}
            <div className="flex justify-between relative">
              <div className="relative w-[48%] h-[240px] shadow-2xl overflow-hidden rounded-lg transition-transform transform hover:scale-105 z-10">
                <img
                  src="/images/im3.webp"  // Replace with your third image path
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[-233px] left-[245px] w-[48%] h-[200px]  overflow-hidden rounded-lg transition-transform transform hover:scale-105 z-0">
                <img
                  src="/images/im6.webp"  // Replace with your fourth image path
                  alt="Image 4"
                  className="w-full h-50 object-cover"
                />
              </div>
              <div className="relative w-[48%] h-[240px] shadow-2xl overflow-hidden rounded-lg transition-transform transform hover:scale-105 z-10">
                <img
                  src="/images/im5.webp"  // Replace with your fifth image path
                  alt="Image 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          {/* Second Column - Our Story Section */}
          <div className="flex flex-col items-center p-6 bg-[#323232] rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl text-[#f5f5dc] font-bold mb-4 border-b-2 border-gray-600 pb-2">Our Story</h2>
            <p className="text-lg text-[#f5f5dc] text-justify leading-relaxed">
              In today’s fast-paced tech world, staying ahead requires more than just knowledge—it demands passion, curiosity, and insight into the future. ITGlimpse was created to explore and share the wonders of the digital age.
              <br /><br />
              Born from a vision to unite tech enthusiasts and professionals, ITGlimpse is a hub for reliable, accessible information on IT, Cloud Computing, Artificial Intelligence, and Blockchain. Our goal is simple: to bridge the gap between complex technological advances and everyday understanding.
              <br /><br />
              Through well-researched articles and practical guides, ITGlimpse has become a trusted resource, inspiring innovation and sparking conversations. We're more than a blog—we're a community committed to helping readers glimpse the future of IT.
            </p>
          </div>
        </div>
      </div>
      {/* Values Section */}
      <div className="py-16  ">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#323232]">Our Values</h2>
          <p className="text-lg text-[#323232] mt-4">
            We are committed to a set of core values that drive everything we do.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
          {/* Value Card 1 */}
          <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4">
              <FaLightbulb className="text-yellow-500 text-6xl transition-all duration-300 hover:scale-110 hover:text-orange-500" /> {/* Innovation Icon with animation */}
            </div>
            <h3 className="text-xl font-bold text-[#323232] mb-2">Innovation</h3>
            <p className="text-[#323232] text-center">
              We foster creativity and strive for excellence through continuous innovation.
            </p>
          </div>

          {/* Value Card 2 */}
          <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4">
              <FaShieldAlt className="text-blue-500 text-6xl transition-all duration-300 hover:scale-110 hover:text-indigo-500" /> {/* Integrity Icon with animation */}
            </div>
            <h3 className="text-xl font-bold text-[#323232] mb-2">Integrity</h3>
            <p className="text-[#323232] text-center">
              We uphold honesty, transparency, and strong moral principles in every action we take.
            </p>
          </div>

          {/* Value Card 3 */}
          <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4">
              <FaUsers className="text-green-500 text-6xl transition-all duration-300 hover:scale-110 hover:text-teal-500" /> {/* Customer Focus Icon with animation */}
            </div>
            <h3 className="text-xl font-bold text-[#323232] mb-2">Customer Focus</h3>
            <p className="text-[#323232] text-center">
              We place our customers at the center of everything we do, aiming to meet their needs effectively.
            </p>
          </div>

          {/* Value Card 4 */}
          <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4">
              <FaHandsHelping className="text-purple-500 text-6xl transition-all duration-300 hover:scale-110 hover:text-pink-500" /> {/* Collaboration Icon with animation */}
            </div>
            <h3 className="text-xl font-bold text-[#323232] mb-2">Collaboration</h3>
            <p className="text-[#323232]text-center">
              We believe in teamwork, fostering collaboration to achieve the best results.
            </p>
          </div>

          {/* Value Card 5 */}
          <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4">
              <FaBalanceScale className="text-pink-500 text-6xl transition-all duration-300 hover:scale-110 hover:text-red-500" /> {/* Fairness Icon with animation */}
            </div>
            <h3 className="text-xl font-bold text-[#323232] mb-2">Fairness</h3>
            <p className="text-[#323232] text-center">
              We are committed to fairness in our interactions with clients and employees alike.
            </p>
          </div>

          {/* Value Card 6 */}
          <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4">
              <FaLeaf className="text-green-600 text-6xl transition-all duration-300 hover:scale-110 hover:text-green-700" /> {/* Sustainability Icon with animation */}
            </div>
            <h3 className="text-xl font-bold text-[#323232] mb-2">Sustainability</h3>
            <p className="text-[#323232] text-center">
              We prioritize sustainable practices that protect our planet for future generations.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold mt-4 text-[#323232]">Meet Our Team</h2>
        <p className="text-lg text-[#323232] mt-4">
          We are a group of passionate individuals working together to make an impact.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-16 mb-16">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Profile Picture */}
          <div className="overflow-hidden rounded-full mb-4 transition-transform duration-300 transform hover:scale-110">
            <img
              src='/images/iqra-profile.jpg'
              alt="Team Member 1"
              className="w-32 h-32 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold text-[#323232] transition-colors duration-300 hover:text-white ">
            IQra
          </h3>
          <p className="text-[#323232] hover:text-white mb-4">Software Engineer</p>
          <p className="text-[#323232] hover:text-white text-center">
            Iqra is a highly skilled developer with a passion for building scalable applications.
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="overflow-hidden rounded-full mb-4 transition-transform duration-300 transform hover:scale-110">
            <img
              src="/images/ayesha-profile.jpg"
              alt="Team Member 2"
              className="w-32 h-32 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold text-[#323232] transition-colors duration-300 hover:text-white">
            Ayesha Siddique
          </h3>
          <p className="text-[#323232] hover:text-white mb-4">UI/UX Designer</p>
          <p className="text-[#323232] hover:text-white text-center">
            Ayesha specializes in creating intuitive and user-friendly design experiences.
          </p>

          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center bg-[#DDD0C8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="overflow-hidden rounded-full mb-4 transition-transform duration-300 transform hover:scale-110">
            <img
              src="/images/sumaira-profile.jpg"
              alt="Team Member 3"
              className="w-32 h-32 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold text-[#323232] transition-colors duration-300 hover:text-white ">
            Sumaira Kanwal
          </h3>
          <p className="text-[#323232] hover:text-white mb-4">Project Manager</p>
          <p className="text-[#323232] hover:text-white text-center">
            Sumaira ensures projects are delivered on time and within budget with exceptional leadership.
          </p>

          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-[#323232] hover:text-white transform transition-transform duration-300 hover:scale-110">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>


    </Layout>
  );
};

export default AboutUs;
