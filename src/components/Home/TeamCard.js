import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: 'AI Expert',
    role: 'Artificial Intelligence Specialist',
    imageUrl: '/images/sumaira-profile.jpg',
  },
  {
    id: 2,
    name: 'Cloud Computing Researcher',
    role: 'Cloud Architect',
    imageUrl: '/images/iqra-profile.jpg',
  },
  {
    id: 3,
    name: 'Blockchain Expert',
    role: 'Blockchain Developer',
    imageUrl: '/images/ayesha-profile.jpg',
  },
];

export default function TeamRoundCards() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
            {/* Round Card Image */}

            <div className="relative rounded-full overflow-hidden w-56 h-56 border-4 border-black shadow-lg transition-all duration-300  group">
              <Link href="/about-iqra">
                {/* Use the Link component properly */}
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-110 "
                  />
              </Link>
            </div>

            {/* Text Below Round Card */}
            <div className="text-center mt-6 p-4 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <Link href="/about-iqra">
                <h3 className="text-gray-900 text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700 text-base italic">{member.role}</p>
              </Link>

            </div>
          </div>
        ))}
      </div>

      {/* Additional Style */}
      <style jsx>{`
        .border-beige {
          border-color: #EDE5E1; /* Beige color */
        }
      `}</style>
    </div>
  );
}
