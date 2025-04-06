import React from 'react';
import { FaPen, FaVoteYea, FaMapMarkerAlt, FaBell } from 'react-icons/fa';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-transparent to-[#f5f4ea] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card Template */}
          {[
            {
              icon: <FaPen />,
              title: 'Raise Issues Easily',
              desc: 'Quickly report civic problems with a few clicks from your home or on the go.',
            },
            {
              icon: <FaVoteYea />,
              title: 'Vote to Prioritize',
              desc: 'Community members can vote on issues to bring the most urgent ones to attention.',
            },
            {
              icon: <FaMapMarkerAlt />,
              title: 'Location-based Reporting',
              desc: 'All issues are pinned on the map for better visualization and response planning.',
            },
            {
              icon: <FaBell />,
              title: 'Get Notified on Resolution',
              desc: 'Stay informed as the municipality works to resolve your reported issues.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center min-h-[320px] transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl text-gray-900 mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;