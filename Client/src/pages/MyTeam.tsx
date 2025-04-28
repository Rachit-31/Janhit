import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    avatar:
      "\Rachit.jpeg",
    name: "RACHIT JAIN",
    description: "Full Stack Developer",
    linkedin:"https://www.linkedin.com/in/rachit-jain-697914256/",
    insta:"https://www.instagram.com/thisisrachitjain/",
  },
  {
    avatar:
      "\Om.jpeg",
    name: "OM SHUKLA",
    description: "Frontend Developer",
    linkedin:"https://www.linkedin.com/in/om-shukla-465850263/",
    insta:"https://www.instagram.com/gunjack2403/",
  },
  {
    avatar:
      "\Rohan.jpeg",
    name: "ROHAN PAL",
    description: "Content Writer",
    linkedin:"https://www.linkedin.com/in/rohanpal01/",
    insta:"https://www.instagram.com/rohanpal441/",
  },
];

const Team = () => {
  return (
    <div className='bg-[#f7f7f7]'>
      <section className="flex flex-col rounded-3xl px-6 py-16 max-w-7xl mx-auto mt-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6 leading-tight">
        Meet Our Team
      </h2>
      <div className="mx-auto mb-12 w-24 h-1 bg-gray-400 rounded-full" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {teamMembers.map((member, i) => (
          <div key={i} className="transform hover:-translate-y-2 transition-all duration-300">
            <TeamCard {...member} />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Team;