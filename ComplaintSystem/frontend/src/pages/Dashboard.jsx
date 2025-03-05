import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userData] = useState({
    name: 'Anshi',
    totalComplaints: 5,
    resolvedComplaints: 3,
    pendingComplaints: 2
  });

  const [complaints] = useState([
    {
      id: 1,
      department: 'Municipal Corporation',
      description: 'Damaged road near Main Street',
      status: 'In Progress',
      date: '2024-02-15',
      priority: 'High'
    },
    {
      id: 2,
      department: 'Water Supply',
      description: 'Water contamination in Sector 7',
      status: 'Pending',
      date: '2024-02-10',
      priority: 'High'
    },
    {
      id: 3,
      department: 'Public Works',
      description: 'Broken streetlights in Park Area',
      status: 'Resolved',
      date: '2024-01-25',
      priority: 'Medium'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-600">
            Welcome, {userData.name}
          </h1>
          <p className="text-gray-600">Your Complaints Dashboard</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Total Complaints
            </h3>
            <div className="text-4xl font-bold text-green-600">
              {userData.totalComplaints}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Resolved Complaints
            </h3>
            <div className="text-4xl font-bold text-green-600">
              {userData.resolvedComplaints}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Pending Complaints
            </h3>
            <div className="text-4xl font-bold text-red-600">
              {userData.pendingComplaints}
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Recent Complaints
            </h2>
            <Link 
              to="/complaints" 
              className="text-green-600 hover:text-green-800"
            >
              View All Complaints
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-gray-700 font-semibold border-b">Department</th>
                  <th className="p-3 text-left text-gray-700 font-semibold border-b">Description</th>
                  <th className="p-3 text-left text-gray-700 font-semibold border-b">Status</th>
                  <th className="p-3 text-left text-gray-700 font-semibold border-b">Priority</th>
                  <th className="p-3 text-left text-gray-700 font-semibold border-b">Date</th>
                  <th className="p-3 text-left text-gray-700 font-semibold border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id} className="hover:bg-gray-50 transition">
                    <td className="p-3 text-gray-800 border-b">{complaint.department}</td>
                    <td className="p-3 text-gray-800 border-b max-w-xs truncate">{complaint.description}</td>
                    <td className="p-3 border-b">
                      <span 
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}
                      >
                        {complaint.status}
                      </span>
                    </td>
                    <td className="p-3 border-b">
                      <span 
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(complaint.priority)}`}
                      >
                        {complaint.priority}
                      </span>
                    </td>
                    <td className="p-3 text-gray-800 border-b">{complaint.date}</td>
                    <td className="p-3 border-b">
                      <Link 
                        to={`/complaint/${complaint.id}`} 
                        className="text-green-600 hover:text-green-800 font-medium"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <Link 
                to="/complaint/new" 
                className="block bg-green-500 text-white py-3 text-center rounded-lg hover:bg-green-600 transition"
              >
                File New Complaint
              </Link>
              <Link 
                to="/profile" 
                className="block bg-blue-500 text-white py-3 text-center rounded-lg hover:bg-blue-600 transition"
              >
                Update Profile
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Notifications
            </h2>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  Your complaint #2 has been updated to "In Progress"
                </p>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  New response received for complaint #1
                </p>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;