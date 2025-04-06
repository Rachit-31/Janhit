import React from 'react';
import { FaPen, FaVoteYea, FaMapMarkerAlt, FaBell } from 'react-icons/fa';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-transparent to-[#fcede3] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 - Raise Issues Easily */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="text-5xl text-gray-900 mb-6">
              <FaPen />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Raise Issues Easily</h3>
            <p className="text-gray-600 text-base">
              Quickly report civic problems with a few clicks from your home or on the go.
            </p>
          </div>

          {/* Card 2 - Vote to Prioritize */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="text-5xl text-gray-900 mb-6">
              <FaVoteYea />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Vote to Prioritize</h3>
            <p className="text-gray-600 text-base">
              Community members can vote on issues to bring the most urgent ones to attention.
            </p>
          </div>

          {/* Card 3 - Location-based Reporting */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="text-5xl text-gray-900 mb-6">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Location-based Reporting</h3>
            <p className="text-gray-600 text-base">
              All issues are pinned on the map for better visualization and response planning.
            </p>
          </div>

          {/* Card 4 - Notifications */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="text-5xl text-gray-900 mb-6">
              <FaBell />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Get Notified on Resolution</h3>
            <p className="text-gray-600 text-base">
              Stay informed as the municipality works to resolve your reported issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
