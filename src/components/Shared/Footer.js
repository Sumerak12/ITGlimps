import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('Please agree to the terms before subscribing.');
      return;
    }
    alert(`Subscribed with email: ${email}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(footerTop <= windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#EDE5E1]  text-[#323232] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1: Website Title, Summary, and Newsletter */}
          <div className="transition-transform duration-500 transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-2 text-[#323232]">ITGlimps</h2>
            <p className="text-[#323232] mb-4">
              Stay updated with the latest IT news and trends.
            </p>
            {/* Newsletter Subscription */}
            <div className='py-5'>
              <h3 className="text-xl font-semibold mb-0 text-[#323232]">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col">
                <div className="relative mb-4 group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-b-2 border-[#323232] w-full py-2 text-white focus:outline-none focus:ring-0 transition-all duration-300"
                    required
                  />
                  <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#323232]">
                    <FaEnvelope />
                  </span>
                  <div className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#323232] transform origin-left transition-transform duration-500 ease-in-out ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center bg-[#323232] text-[#DDD0C8] py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-[#DDD0C8] transition-colors duration-300"
                >
                  Subscribe <FaPaperPlane className="ml-2" />
                </button>
              </form>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="mr-2 cursor-pointer w-5 h-5 border-gray-400 text-[#323232] focus:ring-yellow-500 focus:ring-opacity-50 checked:bg-yellow-500"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label htmlFor="agree" className="text-[#323232] cursor-pointer">I agree to the terms and conditions</label>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="transition-transform duration-500 transform hover:scale-105 gap-4" style={{ marginLeft: '200px'  }}>
            <h3 className="text-xl font-semibold mb-4 text-[#323232]">Categories</h3>
            <ul className="space-y-2">
              {['IT', 'Cloud Computing', 'AI', 'Blockchain'].map((category) => (
                <li key={category}>
                  <a href={`/${category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors duration-300">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pages */}
          <div className="transition-transform duration-500 transform hover:scale-105 gap-4" style={{ marginLeft: '90px' }}>
            <h3 className="text-xl font-semibold mb-4 text-[#323232]">Pages</h3>
            <ul className="space-y-2">
              {['Home', 'Blog', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="transition-transform duration-500 transform hover:scale-105 text-center">
            <h3 className="text-2xl font-serif mb-4 text-[#323232]">Follow Us</h3>
            <p className="text-[#323232] mb-6">Stay connected with us on social media!</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-125 hover:text-white">
                <FaFacebook size={28} className="transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-125 hover:text-white">
                <FaTwitter size={28} className="transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-125 hover:text-white">
                <FaLinkedin size={28} className="transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-3 text-center text-[#323232]">
          <p>© 2024 ITGlimps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
