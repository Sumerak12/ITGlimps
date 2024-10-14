import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'animate.css/animate.min.css'; // Ensure Animate.css is imported

export default function ModernHeroSection() {
  const fullText = "Welcome to ITGlimpse – simplifying technology's future. Explore the latest in IT, AI, Cloud Computing, and Blockchain!";
  const [displayText, setDisplayText] = useState(''); // State to control the displayed text
  const typingSpeed = 45; // Faster typing speed
  const pauseDuration = 4000; // Increased pause duration

  useEffect(() => {
    let index = 0;
    let typeInterval;

    const typeText = () => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayText('');
          index = 0;
          startTyping();
        }, pauseDuration);
      }
    };

    const startTyping = () => {
      typeInterval = setInterval(typeText, typingSpeed);
    };

    setTimeout(() => {
      startTyping();
    }, 200);

    return () => clearInterval(typeInterval);
  }, [fullText]);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cloud-computing.jpg"
          alt="Background"
          fill // Use 'fill' instead of 'layout="fill"'
          style={{ objectFit: 'cover' }} // Use style prop for object fit
          className="opacity-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-start w-full h-full px-6 md:px-12 lg:px-24 text-white">
        <h1 className="text-3xl md:text-4xl italic font-bold leading-tight mb-6">
          {displayText}
        </h1>
      </div>
    </div>
  );
}  