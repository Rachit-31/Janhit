import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../ApiUri';
import { divIcon } from 'leaflet';

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  createdAt: string;
}

const DashboardUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API}/getUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // <-- make sure to set loading to false
      }
    };

    fetchUser(); 
  }, []);

  interface Issue {
    _id: string;
    title: string;
    description: string;
    category: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    status: string;
    createdBy: string;
    assignedTo: string | null;
    voteCount: number;
    averageRating: number;
    createdAt: string;
  }

  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API}/getUserIssues`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        // console.log('This is the response:', response.data);
        setIssues(response.data);
      } catch (error) {
        // console.error("Error fetching all the issues:", error);
      }
    };
  
    fetchIssues();
  }, []);
  
  // Log issues after state has been updated
  useEffect(() => {
    console.log('This is the issues:', issues);
  }, [issues]); // This will run whenever issues are updated
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium text-gray-600 animate-pulse">Loading user info...</div>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center text-red-500 mt-10">User data could not be loaded.</div>;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-500"; // yellow
      case "under_review":
        return "text-blue-500";   // blue
      case "assigned":
        return "text-purple-500"; // purple
      case "resolved":
        return "text-green-500";  // green
      default:
        return "text-gray-500";   // fallback color
    }
  };

  return (
    <div className="max-w-[80%] mx-auto mt-10 p-10 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">YOUR DASHBOARD</h1>
      
      <div className='flex flex-col gap-10 md:flex-row md:justify-between md:items-baseline items-center'>
        <div className="space-y-1 text-gray-800 md:w-[40%]">
          <div className='text-center font-semibold text-2xl border-b pb-2 border-gray-500'>Your Information</div>
          <div className='flex flex-col items-center'>
            <div className='w-full md:pl-10'>
              <div className='pt-5 text-xs text-gray-500'><strong>Name:</strong></div>
              <div className='border-2 ml-2 w-full md:w-[80%] border-gray-600  rounded-lg p-2 px-4'>{user.name}</div>
            </div>
            <div className='w-full md:pl-10'>
              <div className='pt-5 text-xs text-gray-500'><strong>Email:</strong></div>
              <div className='border-2 ml-2 w-full md:w-[80%] border-gray-600  rounded-lg p-2 px-4'>{user.email}</div>
            </div>
            <div className='w-full md:pl-10'>
              <div className='pt-5 text-xs text-gray-500'><strong>Adhaar No:</strong></div>
              <div className='border-2 ml-2 w-full md:w-[80%] border-gray-600  rounded-lg p-2 px-4'>{user.phone}</div>
            </div>
            <div className='w-full md:pl-10'>
              <div className='pt-5 text-xs text-gray-500'><strong>Created At:</strong></div>
              <div className='border-2 ml-2 w-full md:w-[80%] border-gray-600  rounded-lg p-2 px-4'>{new Date(user.createdAt).toLocaleString()}</div>
            </div>
            <div className='w-full md:pl-10'>
              <div className='pt-5 text-xs text-gray-500'><strong>Location (Lat, Lng):</strong></div>
              <div className='border-2 ml-2 w-full md:w-[80%] border-gray-600  rounded-lg p-2 px-4'>{user.location.coordinates[1]}, {user.location.coordinates[0]}</div>
            </div>
          </div>
          </div>

        <div className='md:w-[40%] w-full'>
          <div className='text-center font-semibold text-2xl border-b pb-2 border-gray-500'>Your Issues</div>
          <div className="pt-5 overflow-scroll max-h-[400px] flex flex-col gap-4">
            {issues && issues.length > 0 ? (
              issues.map((data, idx) => (
                <div key={idx} className='border-2 p-3 border-gray-500 rounded-lg'>
                  <div className='text-lg font-semibold '>{data.title}</div>
                  <div className='text-gray-500 text-sm'>{data.description == "" ? "No description" : data.description}</div>
                  <div className='text-xs text-gray-500 flex justify-between'>
                    <div>{data.category}</div>
                    <div className={`mt-2 ${getStatusColor(data.status)}`}>
                      {data.status}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No issues available.</div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardUser;
