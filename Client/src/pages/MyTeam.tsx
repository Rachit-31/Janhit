import user from '../assets/userImgM.jpg'

const teamMembers = [
  {
    name: "Om Shukla",
    rollNo: "22236",
    email: "omshukla2403@gmail.com",
    img: user,
    socials: ["linkedin", "twitter"]
  },
  {
    name: "Rachit Jain",
    rollNo: "22240",
    email: "rachitjainjaipur@gmail.com",
    img: user,
    socials: ["linkedin", "twitter"]
  },
  {
    name: "Rohan Pal",
    rollNo: "22243",
    email: "22243@iiitu.ac.in",
    img: user,
    socials: ["dribbble", "twitter"]
  },
];

const Team = () => {
  return (
    <div className="bg-[#fbfbf3] py-10 px-4 md:px-20 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase tracking-wide">OUR TEAM</h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          We’re proud of our team and always looking for more people with a similar passion & experience for stellar marketing. If that’s you, email us at <a href="mailto:frontend@thestarthaus.com" className="underline">frontend@thestarthaus.com</a>.
        </p>
      </div>

      {/* // Team data */}
      <div className="flex flex-col items-center md:gap-5 gap-10 ">
          {
            teamMembers.map((mem, idx) => (
              <div key={idx} className={`border-b py-[25px] rounded-xl w-[60%] sm:p-[25px] md:rounded-full shadow shadow-gray-300 border-b-gray-400 flex flex-col md:w-full justify-around md:flex-row ${idx%2 == 1 ? "md:flex-row-reverse md:pl-[20%]" : "md:pr-[20%]"} items-center md:items-start `}>
                <img src={mem.img} alt={mem.name} className="rounded-full border w-32 h-32 border-black" />
                <div className="self-center items-center">
                  <p className="text-3xl text-center font-semibold">{mem.name}</p>
                  <p className="text-center">{mem.rollNo}</p>
                  <a href={`mailto:${mem.email}`} className="text-center underline text-gray-600 ">{mem.email}</a>
                  <div className="flex text-center justify-around">
                    {
                      mem.socials.map((val, id) => (
                        <a href="" className="text-blue-400 underline">{val}</a>
                      )) 
                    }
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Team;
