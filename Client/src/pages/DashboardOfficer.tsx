// OfficialsDashboard.tsx
import React from 'react';
import OfficialImg from '../assets/userImgM.jpg'

// Mock data for officials
const mockOfficialsData = {
  'officer-1': {
    name: 'Rajesh Kumar',
    role: 'Municipal Officer',
    department: 'Urban Services',
    contact: 'rajesh.kumar@delhimunicipal.in',
    region: 'Delhi North Zone',
    areaAssigned: 'Urban Planning & Waste Management',
    image: OfficialImg,
    bio: 'Rajesh Kumar has served the Delhi Municipal Corporation for over 15 years, focusing on urban infrastructure and community sanitation.',
    recentActivities: ['Oversaw road repair project in Karol Bagh', 'Launched Smart Bin initiative', 'Held community grievance redressal meet'],
  },
  'officer-2': {
    name: 'Sita Devi',
    role: 'City Engineer',
    department: 'Public Works',
    contact: 'sita.devi@delhicityengg.in',
    region: 'Delhi South Zone',
    areaAssigned: 'Road Infrastructure & Construction',
    image: OfficialImg,
    bio: 'Sita Devi is known for her expertise in civil engineering and road safety measures.',
    recentActivities: ['Completed flyover construction in Saket', 'Conducted citywide road safety survey'],
  },
};

const DashboardOfficer: React.FC = () => {
  const officialId = 'officer-1'; 
  const official = mockOfficialsData[officialId];

  return (
    <div className="p-8 bg-[#f5f5dc] text-black min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <img
            src={official.image}
            alt={official.name}
            className="w-32 h-32 rounded-full object-cover border-2 border-black"
          />
          <div>
            <h1 className="text-3xl font-bold">{official.name}</h1>
            <p className="text-gray-700">{official.role} - {official.department}</p>
            <p className="text-gray-600 text-sm mt-1">{official.contact}</p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <p><strong>Region:</strong> {official.region}</p>
          <p><strong>Area Assigned:</strong> {official.areaAssigned}</p>
          <p><strong>About:</strong> {official.bio}</p>
        </div>

        {/* Recent Activities */}
        {official.recentActivities && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {official.recentActivities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOfficer;
