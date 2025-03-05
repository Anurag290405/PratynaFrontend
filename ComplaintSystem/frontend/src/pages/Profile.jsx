import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: '123 Civic Avenue, Indore, MP',
    occupation: 'Software Engineer',
    dateOfBirth: '1990-05-15',
    aadharNumber: '1234 5678 9012',
  });

  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangePassword(prev => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    console.log('Profile Updated:', profileData);
    setIsEditing(false);
  };

  const savePassword = (e) => {
    e.preventDefault();
    if (changePassword.newPassword !== changePassword.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Password Change Attempted');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-green-600">My Profile</h1>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing ? (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                {['firstName', 'lastName', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 mb-2">{field.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={profileData[field]}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Additional Details</h2>
                <div>
                  <label className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="3"
                  />
                </div>
                {['occupation', 'dateOfBirth', 'aadharNumber'].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 mb-2">{field.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={field === 'dateOfBirth' ? 'date' : 'text'}
                      name={field}
                      value={profileData[field]}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                ))}
                <button 
                  onClick={saveProfile}
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                <div className="space-y-2 text-gray-700">
                  {Object.entries(profileData).map(([key, value]) => (
                    <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>
            <form onSubmit={savePassword} className="grid md:grid-cols-2 gap-6">
              {['currentPassword', 'newPassword', 'confirmPassword'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 mb-2">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="password"
                    name={field}
                    value={changePassword[field]}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              ))}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
