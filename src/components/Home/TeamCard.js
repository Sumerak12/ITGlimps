import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'AI Expert',
    role: 'Artificial Intelligence Specialist',
    imageUrl: '/images/sumaira-profile.jpg',
  },
  {
    id: 2,
    name: 'Cloud Computing Expert',
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
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
            {/* Round Card Image */}
            <div className="relative rounded-full overflow-hidden w-56 h-56 border-4 border-[#DDD0C8] shadow-lg transition-all duration-300 hover:border-gray-900 group">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill // Updated from layout="fill"
                style={{ objectFit: 'cover' }} // Updated from objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text Below Round Card */}
            <div className="text-center mt-6 p-4 bg-[#DDD0C8] rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-gray-900 text-xl font-bold">{member.name}</h3>
              <p className="text-gray-700 text-base italic">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Style */}
      <style jsx>{`
        .border-beige {
          border-color: #f5f5dc; /* Beige color */
        }
      `}</style>
    </div>
  );
}
