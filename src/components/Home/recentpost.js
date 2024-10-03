import Image from 'next/image';
import Link from 'next/link';

const Blogpost = [
  {
    id: 1,
    imageUrl: '/images/w16.jpg',
    title: 'Generative AI and its Future Applications',
    titleLink: '/portfolio',
    categories: [{ name: 'AI', link: '/category/ai' }],
  },
  {
    id: 2,
    imageUrl: '/images/w1.jpg',
    title: 'Blockchain Interoperability',
    titleLink: '/shuchu-lento',
    categories: [{ name: 'Blockchain', link: '/category/blockchain' }],
  },
  {
    id: 3,
    imageUrl: '/images/w13.jpg',
    title: 'Green Cloud Computing',
    titleLink: '/rubber-ducky',
    categories: [{ name: 'Cloud Computing', link: '/category/cloudcomputing' }],
  },
  {
    id: 4,
    imageUrl: '/images/header-bg.jpg',
    title: 'Formation of IT',
    titleLink: '/project-four',
    categories: [{ name: 'IT', link: '/category/it' }],
  },
  {
    id: 5,
    imageUrl: '/images/w15.jpg',
    title: 'The Role of AI in Sustainable Development',
    titleLink: '/project-five',
    categories: [{ name: 'AI', link: '/category/ai' }],
  },
  {
    id: 6,
    imageUrl: '/images/blockchain.webp',
    title: 'Blockchain for Digital Identity',
    titleLink: '/project-six',
    categories: [{ name: 'Blockchain', link: '/category/blockchain' }],
  },
];

export default function RecentPost() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center text-[#323232] mb-10">Latest Blog Posts</h1>

      {/* Grid layout for the blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Blogpost.map((card) => (
          <div key={card.id} className="relative border border-gray-300 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill // Updated from layout="fill"
                style={{ objectFit: 'cover' }} // Updated from objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-75 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 bg-white">
              {/* Title as a clickable link with hover effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                <Link href={card.titleLink} className="hover:text-blue-500 transition-colors duration-300">
                  {card.title}
                </Link>
              </h3>

              {/* Category links */}
              <div className="flex space-x-2">
                {card.categories.map((category, index) => (
                  <span key={index} className="text-gray-600 text-sm">
                    <Link href={category.link} className="flex items-center hover:text-yellow-500 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5 13l4 4L19 7l-1.414-1.414L9 14.172l-3.586-3.586L5 13z" />
                      </svg>
                      {category.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <Link href="/load_more" className="bg-[#323232] text-[#DDD0C8] font-semibold py-3 px-6 rounded-lg hover:bg-[#DDD0C8] hover:text-white transition-colors duration-300 text-xl">
          Load More
        </Link>
      </div>
    </div>
  );
}
