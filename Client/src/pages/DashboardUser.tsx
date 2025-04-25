import React, { useState } from "react";
import { FaHome, FaListAlt } from "react-icons/fa";

const DashboardUser: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"account" | "issues">("account");

  const [formData, setFormData] = useState({
    name: "Rachit Jain",
    email: "rachitjain@example.com",
    phone: "8003882854",
    location: "31.481124, 76.190682"
  });

  const [issues] = useState([
    { id: 1, title: "Pothole on Main Road", status: "Pending" },
    { id: 2, title: "Streetlight not working", status: "Assigned" },
    { id: 3, title: "Garbage collection delayed", status: "Resolved" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    // Add update logic here (API call, etc.)
  };

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
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location (lat, lng)</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeSection === "issues" && (
            <div>
              <h2 className="text-lg font-medium mb-6">Your Issues</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                {issues.length > 0 ? (
                  issues.map(issue => (
                    <div key={issue.id} className="border-b border-gray-200 py-2">
                      <p className="font-medium">{issue.title}</p>
                      <p className="text-sm text-gray-600">Status: {issue.status}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No issues found.</p>
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
