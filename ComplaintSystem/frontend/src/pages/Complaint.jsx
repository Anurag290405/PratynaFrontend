import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ComplaintForm = () => {
  const [complaintData, setComplaintData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    complaintType: '',
    description: '',
    priority: 'medium',
    attachment: null
  });

  const navigate = useNavigate();

  const departments = [
    'Municipal Corporation', 
    'Public Works', 
    'Water Supply', 
    'Electricity', 
    'Transportation'
  ];

  const complaintTypes = [
    'Infrastructure', 
    'Civic Issues', 
    'Public Service', 
    'Corruption', 
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setComplaintData(prev => ({
      ...prev,
      [name]: files ? files[0] : (type === 'checkbox' ? checked : value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement complaint submission logic
    console.log('Complaint Submitted:', complaintData);
    
    // Simulated submission (replace with actual submission logic)
    if (complaintData.name && complaintData.email && complaintData.description) {
      alert('Complaint submitted successfully!');
      navigate('/dashboard');
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-green-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            CitizenVoice AI
          </h2>
          <p className="text-black mb-6">
            Submit Your Civic Complaint
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-black text-sm mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={complaintData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black text-sm mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={complaintData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-black text-sm mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={complaintData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="Your contact number"
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-black text-sm mb-2">
                Department <span className="text-red-500">*</span>
              </label>
              <select
                id="department"
                name="department"
                value={complaintData.department}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

       

          <div>
            <label htmlFor="description" className="block text-black text-sm mb-2">
              Complaint Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={complaintData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              placeholder="Provide a detailed description of your complaint"
            ></textarea>
          </div>

          <div>
            <label htmlFor="solution" className="block text-black text-sm mb-2">
              Suggested Solution <span className="text-red-500">*</span>
            </label>
            <textarea
              id="solution"
              name="solution"
              value={complaintData.solution}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              placeholder="Suggest Solution of your complaint"
            ></textarea>
          </div>


          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="priority" className="block text-black text-sm mb-2">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={complaintData.priority}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label htmlFor="attachment" className="block text-black text-sm mb-2">
                Attachment (Optional)
              </label>
              <input
                id="attachment"
                type="file"
                name="attachment"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                accept=".pdf,.jpg,.png,.jpeg"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-101 shadow-md"
          >
            Submit Complaint
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-black">
            Already submitted a complaint? 
            <Link 
              to="/dashboard" 
              className="text-green-600 ml-1 hover:text-green-500 font-semibold"
            >
              View Dashboard
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;