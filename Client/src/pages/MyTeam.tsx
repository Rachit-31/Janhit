import React from "react";

const teamMembers = [
  {
    name: "Om Shukla",
    rollNo: "22236",
    email: "omshukla2403@gmail.com",
    img: "https://via.placeholder.com/120",
    socials: ["linkedin", "twitter"]
  },
  {
    name: "Rachit Jain",
    email: "rachitjainjaipur@gmail.com",
    img: "https://via.placeholder.com/120",
    socials: ["linkedin", "twitter"]
  },
  {
    name: "Rohan Pal",
    email: "22243@iiitu.ac.in",
    img: "https://via.placeholder.com/120",
    socials: ["dribbble", "twitter"]
  },
];

const Team = () => {
  return (
    <div className="bg-[#fbfbf3] py-10 px-4 md:px-20 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase tracking-wide">OUR TEAMS</h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          We’re proud of our team and always looking for more people with a similar passion & experience for stellar marketing. If that’s you, email us at <a href="mailto:frontend@thestarthaus.com" className="underline">frontend@thestarthaus.com</a>.
        </p>
      </div>

      <div className="space-y-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center md:items-start md:justify-between gap-10`}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />

            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-xl font-semibold uppercase">{member.name}</h2>
              {/* <p className="text-sm italic text-gray-600 mb-2">{member.role}</p> */}
              <a href={`mailto:${member.email}`} className="text-sm text-gray-800 underline block mb-4">
                {member.email}
              </a>
              {/* <p className="text-sm text-gray-700">{member.bio}</p> */}

              <div className="mt-4 flex justify-center md:justify-start gap-3">
                {member.socials.map((social, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs"
                  >
                    {social.charAt(0).toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
