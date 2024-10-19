// components/AutoSlider.js
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const categories = [
    { title: 'Cloud computing', imageSrc: '/images/w10.jpg' },
    { title: 'IT', imageSrc: '/images/IT.jpg' },
    { title: 'AI', imageSrc: '/images/w15.jpg' },
    { title: 'Blockchain', imageSrc: '/images/w1.jpg' },
    { title: 'Cloud computing', imageSrc: '/images/w11.jpg' },
    { title: 'Blockchain', imageSrc: '/images/w3.jpg' },
    { title: 'AI', imageSrc: '/images/w20.jpg' },
];

export default function AutoSlider() {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const scrollSpeed = 1; // Speed of the scroll

    useEffect(() => {
        let animationFrameId;

        const startScrolling = () => {
            if (!containerRef.current || isPaused) return;

            containerRef.current.scrollLeft += scrollSpeed;
            if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
                containerRef.current.scrollLeft = 0;
            }
            animationFrameId = requestAnimationFrame(startScrolling);
        };

        animationFrameId = requestAnimationFrame(startScrolling);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <div className="mt-12">
            <h2 className="text-4xl font-bold text-center text-[#323232] mb-10">
                Latest Blog Posts
            </h2>
            <div
                className="relative overflow-hidden w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                ref={containerRef}
            >
                <div className="flex space-x-4" style={{ width: '200%' }}>
                    {categories.concat(categories).map((category, index) => (
                        <div
                            key={index}
                            className="relative w-[220px] h-[150px] rounded-lg overflow-hidden shadow-lg group flex-shrink-0 bg-gradient-to-br from-gray-100 to-white hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-full h-full relative">
                                <Image
                                    src={category.imageSrc}
                                    alt={category.title}
                                    fill
                                    className="rounded-lg transition-transform duration-300 group-hover:scale-105 object-cover" // Use object-cover to maintain aspect ratio
                                />
                            </div>
                            {/* Decorative double-line borders at the top */}
                            <div className="absolute -top-2 left-0 w-full border-t-4 border-double border-blue-500"></div>
                            <div className="absolute -top-4 left-0 w-full border-t-4 border-double border-green-500"></div>
                            <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded-full text-gray-900 font-semibold text-sm shadow-sm">
                                {category.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
