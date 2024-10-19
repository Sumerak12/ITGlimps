import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    id: 1,
    title: 'ARTIFICIAL INTELLIGENCE',
    subtitle: 'Stay Ahead with the Latest in Tech and Innovation',
    imageUrl: '/images/w20.jpg',
    link: '/category/ai',
  },
  {
    id: 2,
    title: 'CLOUD COMPUTING',
    subtitle: 'Empowering Businesses with Scalable, On-Demand Digital Solutions',
    imageUrl: '/images/w11.jpg',
    link: '/category/cloudcomputing',
  },
  {
    id: 3,
    title: 'BLOCKCHAIN',
    subtitle: 'Decentralizing Trust and Transforming Industries with Transparent Technology',
    imageUrl: '/images/w4.jpg',
    link: '/category/blockchain',
  },
  {
    id: 4,
    title: 'IT',
    subtitle: 'Harnessing Technology to Innovate, Streamline Operations, and Propel Businesses into the Future',
    imageUrl: '/images/image.jpeg',
    link: '/category/it',
  },
];

export default function ImageSlider() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center text-[#323232] mb-10">Blog Categories</h1>
      <div className="flex flex-nowrap overflow-x-auto gap-8">
        {cards.map((card) => (
          <Link
            href={card.link}
            key={card.id}
            className="group relative overflow-hidden border border-gray-300"
            style={{ width: '400px', height: '320px' }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill // Use fill instead of layout
                style={{ objectFit: 'cover' }} // Use style instead of objectFit
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Transparent Beige Div for Title and Subtitle with Increased Height */}
            <div className="absolute inset-0 bg-beige bg-opacity-70 h-full flex flex-col justify-center items-center p-6 transition-opacity duration-300 group-hover:bg-opacity-60">
              <div className="text-center bg-white bg-opacity-30 p-[10px] rounded-lg shadow-lg w-[210px] h-full flex flex-col justify-center">
                {/* Title as a Link with Underline */}
                <h3 className="text-[#323232] text-2xl font-bold mb-4 underline hover:text-blue-700 transition-colors duration-200">
                  {card.title}
                </h3>
                
                {/* Separator Line */}
                <hr className="w-30 border-t-2 border-gray-300 mb-4" />

                {/* Subtitle */}
                <p className="text-[#323232] text-base p-[5px]  w-[200px] ">{card.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
