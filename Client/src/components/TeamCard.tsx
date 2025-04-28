import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

interface TeamCardProps {
    avatar: string;
    name: string;
    description: string;
    linkedin:string;
    insta: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ avatar, name, description, linkedin, insta}) => (
    <div className="bg-[#e5e5e5] rounded-full shadow-md flex flex-col items-center px-6 pt-10 pb-6 w-64 h-96 mx-auto">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-4 border-4 border-gray-200">
            <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
            />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">{name}</h3>
        <p className="text-gray-600 text-center mb-4 font-semibold text-md">{description}</p>
        <div className="flex gap-4 mt-auto">
            <a href={linkedin} aria-label="Dribbble" className="bg-gray-700 hover:bg-blue-400 text-white rounded-full p-3 text-xl transition-colors"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook" className="bg-gray-700 hover:bg-blue-600 text-white rounded-full p-3 text-xl transition-colors"><FaFacebookF /></a>
            <a href={insta} aria-label="Google Plus" className="bg-gray-700 hover:bg-pink-500 text-white rounded-full p-3 text-xl transition-colors"><FaInstagram /></a>
        </div>
    </div>
);

export default TeamCard;