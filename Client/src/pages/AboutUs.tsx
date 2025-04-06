import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#f5f4ea] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gray-800 animate-fade-in">
          About Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-fade-in delay-200">
          We aim to create a transparent civic engagement platform where citizens can raise local issues, vote on them, and stay informed throughout the resolution process.
        </p>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <img
            src="https://www.livemint.com/lm-img/img/2025/03/28/original/RCB_1743129770003.jpg"
            alt="Community"
            className="rounded-lg shadow-lg w-full animate-fade-in"
          />
          <div className="text-left animate-fade-in delay-200">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Our mission is to make civic engagement easy and effective. We empower citizens to highlight issues like potholes, garbage, or broken streetlights and vote on them, so local authorities can prioritize better. With our platform, everyone can contribute to building a cleaner, safer neighborhood.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20 flex-col-reverse md:flex-row">
          <div className="text-left animate-fade-in">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We envision a future where city governance is fully participatory. By using modern technology, we want to connect residents directly with municipal authorities to drive timely action, reduce inefficiencies, and boost civic satisfaction across all communities.
            </p>
          </div>
          <img
            src="https://www.livemint.com/lm-img/img/2025/03/28/original/RCB_1743129770003.jpg"
            alt="Vision"
            className="rounded-lg shadow-lg w-full animate-fade-in delay-200"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-16"></div>

        {/* Team Section */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-semibold mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Member 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <img
                src="https://www.livemint.com/lm-img/img/2025/03/28/original/RCB_1743129770003.jpg"
                alt="Rachit Jain"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">Rachit Jain</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
            {/* Member 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <img
                src="https://www.livemint.com/lm-img/img/2025/03/28/original/RCB_1743129770003.jpg"
                alt="Ankit Sharma"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">Ankit Sharma</h3>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>
            {/* Member 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <img
                src="https://www.livemint.com/lm-img/img/2025/03/28/original/RCB_1743129770003.jpg"
                alt="Simran Kaur"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">Simran Kaur</h3>
              <p className="text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
