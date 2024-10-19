// import React from 'react'

// export const slider = () => {
//     const images = [
//         { src: '/images/cloudcomputing.webp', label: 'Cloud Computing' },
//         { src: '/images/blockchain.webp', label: 'Blockchain' },
//         { src: '/images/imge.webp', label: 'AI' },
//         { src: '/images/imm4.webp', label: 'Blockchain' },
//         { src: '/images/imm3.webp', label: 'Cloud Computing' },
//         { src: '/images/w19.jpg', label: 'AI' },
//         { src: '/images/w20.jpg', label: 'Blockchain' },
//         { src: '/images/w15.jpg', label: 'Cloud Computing' },
//     ];
    
//     const categories = ['IT', 'AI', 'Blockchain', 'Cloud Computing'];
    
//     const [selectedCategory, setSelectedCategory] = useState('IT');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [direction, setDirection] = useState(1); // Direction of the slide (1 = forward, -1 = backward)
    
//     // Filter images based on selected category
//     const filteredImages = selectedCategory === 'IT'
//         ? images
//         : images.filter(image => image.label === selectedCategory);
    
//     // Automatically slide images
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => {
//                 const newIndex = prevIndex + direction;
//                 if (newIndex >= filteredImages.length || newIndex < 0) {
//                     setDirection(-direction); // Reverse the direction when limits are reached
//                     return prevIndex;
//                 }
//                 return newIndex;
//             });
//         }, 3000); // Adjust the speed of the sliding effect
    
//         return () => clearInterval(interval); // Cleanup interval on unmount
//     }, [filteredImages, direction]);
//   return (
//     <div>
//   <li className="relative group">
//           <span className="hover:text-white transition duration-300 cursor-pointer">
//             Categories
//           </span>

//           {/* Slider Section */}
//           <div className="absolute left-0 hidden group-hover:block mt-2 w-[600px] bg-[#DDD0C8] border border-[#323232] rounded-lg shadow-lg z-10 p-2 transition-transform duration-300 transform scale-95 group-hover:scale-100">
//             {/* Small Navbar inside the slider */}
//             <nav className="flex space-x-1.5 mb-2 text-[#323232] text-xs">
//               {categories.map((category, index) => (
//                 <button
//                   key={index}
//                   className={`px-2 py-1 hover:text-white transition ${
//                     selectedCategory === category ? 'font-bold underline' : ''
//                   }`}
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </nav>

//             {/* Image Slider */}
//             <div className="relative w-full h-[200px] overflow-hidden">
//               <div className="flex animate-slide continuous-slide">
//                 {filteredImages.map((image, index) => (
//                   <div key={index} className="relative w-[150px] h-[200px] flex-shrink-0 mx-2">
//                     <img
//                       src={image.src}
//                       alt={`Gallery Image ${index + 1}`}
//                       className="w-full h-full object-cover rounded-md"
//                     />
//                     {/* Text Overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <p className="text-white text-sm font-bold animate-slide-text">
//                         {image.label}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </li>
//     </div>
//   )
// }
