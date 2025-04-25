import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <div className="mb-4">
                    <p className="text-gray-600 uppercase tracking-wide text-sm md:text-base">
                        THE PLATFORM FOR LOCAL CIVIC ENGAGEMENT
                    </p>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                    Your City, Your Voice — आपका शहर, आपकी आवाज़
                </h1>

                <div className="mb-8 md:mb-12">
                    <p className="text-gray-600 text-lg mx-auto max-w-3xl">
                        The fastest way to report civic issues in your area.
                        Raise complaints, vote on local problems, and track resolutions — all in one place.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                    <Link
                        to="/map"
                        className="bg-gray-900 text-white px-8 py-3 rounded-md flex items-center justify-center hover:bg-gray-800 transition duration-300"
                    >
                        Report an issue <span className="ml-2">→</span>
                    </Link>
                    <Link to='/myteam' className="border border-gray-500 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 font-bold">
                        Contact our team
                    </Link>
                </div>


                <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/3GVlKTg0Xy0"
                        title="How It Works"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>


                <p className="text-gray-500 mt-6 text-sm">
                    वीडियो देखें और समझें — कैसे आप अपने शहर की आवाज़ बन सकते हैं।
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
