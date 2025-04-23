import React from 'react';
import userImg from '../assets/userImg.jpg'; // adjust to your actual image path

type Issue = {
  id: number;
  title: string;
  status: 'Open' | 'Resolved' | 'In Progress';
  date: string;
};

const mockUser = {
  name: 'Khubsurat Munda',
  age: 29,
  position: 'Civil Engineer, Mumbai',
  profileImage: userImg,
  issues: [
    { id: 1, title: 'Potholes on Link Road', status: 'Open', date: '2025-04-15' },
    { id: 2, title: 'Street light not working', status: 'Resolved', date: '2025-03-28' },
    { id: 3, title: 'Overflowing garbage bin', status: 'In Progress', date: '2025-04-10' },
    { id: 4, title: 'Street Dogs', status: 'In Progress', date: '2025-04-10' },
  ] as Issue[],
};

const DashboardUser: React.FC = () => {
  const { name, age, position, profileImage, issues } = mockUser;

  return (
    <div className="min-h-screen bg-[#fbfbf3] text-black p-8">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-2xl p-6 mb-10">
        <img src={profileImage} alt="User" className="w-28 h-28 rounded-full border border-black object-cover" />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-700">Age: {age}</p>
          <p className="text-sm text-gray-700">Address/Position: {position}</p>
        </div>
      </div>

      {/* Issues Section */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Previously raised Issues</h2>
        <div className="space-y-4">
          {issues.map((issue) => (
            <div key={issue.id} className="p-4 border rounded-lg bg-[#fdfaf0]">
              <h3 className="font-semibold">{issue.title}</h3>
              <p className="text-sm text-gray-600">Status: <span className="font-medium">{issue.status}</span></p>
              <p className="text-xs text-gray-500">Date: {issue.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
