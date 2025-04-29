import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-b from-[#2b2b2b] via-[#1e1e1e] to-black
 text-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                    {/* Logo */}
                    <div className="md:col-span-4">
                        <a href="/" className="text-white text-3xl font-bold">
                            Janhit
                        </a>
                        <p className="text-sm text-gray-300 mt-2">Your City, Your Voice — आपका शहर, आपकी आवाज़</p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Report an Issue</a></li>
                            <li><a href="#">Live Map</a></li>
                            <li><a href="#">How It Works</a></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Community</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Volunteer</a></li>
                            <li><a href="#">Municipal Login</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4">
                        <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-300 mb-4">Join our newsletter to get the latest updates on civic improvements.</p>
                        <form className="flex flex-col sm:flex-row items-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 w-full sm:w-auto rounded-md text-white"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-5 mb-6">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaYoutube size={20} />
                    </a>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row md:justify-between">
                    <p className="text-sm text-gray-400">
                        © 2025 Janhit. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-400 mt-2 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
