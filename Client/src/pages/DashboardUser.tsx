import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../ApiUri';
import { FaHome, FaListAlt} from "react-icons/fa";
import noissue from '../assets/noIssues1.png'

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

const DashboardUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [activeSection, setActiveSection] = useState("account");  // 👈 move this UP here
  
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
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API}/getUserIssues`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        setIssues(response.data);
      } catch (error) {
        console.error("Error fetching all the issues:", error);
      }
    };

    fetchIssues();
  }, []);

  useEffect(() => {
    console.log('This is the issues:', issues);
  }, [issues]);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-500";
      case "under_review":
        return "text-blue-500";
      case "assigned":
        return "text-purple-500";
      case "resolved":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const handleSubmit = async () => { };

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

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-sm p-4">
        <div className="mb-8">
          <h2 className="text-xs font-semibold text-gray-500 mb-4">MENU</h2>
          <div className="space-y-2">
            <div
              className={`flex items-center p-2 rounded-md cursor-pointer ${activeSection === "account" ? "bg-purple-50" : "hover:bg-gray-100"}`}
              onClick={() => setActiveSection("account")}
            >
              <div className={`w-6 h-6 flex items-center justify-center mr-3 ${activeSection === "account" ? "text-purple-600" : "text-gray-500"}`}>
                <FaHome size={16} />
              </div>
              <span className={`${activeSection === "account" ? "text-purple-600 font-medium" : "text-gray-600"}`}>
                Account
              </span>
            </div>

            <div
              className={`flex items-center p-2 rounded-md cursor-pointer ${activeSection === "issues" ? "bg-purple-50" : "hover:bg-gray-100"}`}
              onClick={() => setActiveSection("issues")}
            >
              <div className={`w-6 h-6 flex items-center justify-center mr-3 ${activeSection === "issues" ? "text-purple-600" : "text-gray-500"}`}>
                <FaListAlt size={16} />
              </div>
              <span className={`${activeSection === "issues" ? "text-purple-600 font-medium" : "text-gray-600"}`}>
                All Issues
              </span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          {activeSection === "account" && (
            <div>
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-2">
                  <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden flex items-end justify-center">
                    <img
                      src="\public\Profile.png"
                      alt="Profile"
                      className="w-24 h-24 object-cover"
                    />
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-medium mb-6">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={user.name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location (lat, lng)</label>
                      <input
                        type="text"
                        name="location"
                        value={String(user.location.coordinates)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {activeSection === "issues" && (
            <div>
              <h2 className="text-lg font-medium mb-6">Your Issues</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                {issues.length > 0 ? (
                  issues.map((issue, idx) => (
                    <div key={idx} className="border-b border-gray-200 py-2">
                      <p className="font-medium">{issue.title}</p>
                      <p className='text-sm text-gray-500'>{issue.description}</p>
                      <span className='text-sm text-gray-600 pr-[1%]'>Status:</span>
                      <span className={`text-sm text-gray-600 ${getStatusColor(issue.status)}`}>{issue.status}</span> 
                    </div>
                  ))
                ) : (
                  <div className='flex flex-col items-center'>
                    <img src={noissue} className='opacity-50 md:w-[25%] w-[50%]' alt="" />
                    <p className="text-gray-500 font-mono">You have no issues</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;