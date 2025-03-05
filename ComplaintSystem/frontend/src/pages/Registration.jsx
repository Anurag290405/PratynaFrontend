import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (registrationData.password !== registrationData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Additional validation checks
    const { firstName, lastName, email, password, phoneNumber } = registrationData;
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulated registration logic
    console.log('Registration Attempted:', registrationData);
    
    // Successful registration
    navigate('/dashboard');
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-green-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            CitizenVoice AI
          </h2>
          <p className="text-gray-800 mb-6">
            Create your account to get started
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-black text-sm mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={registrationData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-black text-sm mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={registrationData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-black text-sm mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={registrationData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-black text-sm mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={registrationData.phoneNumber}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
              placeholder="10-digit phone number"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-black text-sm mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword.password ? 'text' : 'password'}
                name="password"
                value={registrationData.password}
                onChange={handleChange}
                required
                minLength="8"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="At least 8 characters"
              />
              <div 
                onClick={() => togglePasswordVisibility('password')}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-green-600"
              >
                {showPassword.password ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-black text-sm mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showPassword.confirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={registrationData.confirmPassword}
                onChange={handleChange}
                required
                minLength="8"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                placeholder="Confirm your password"
              />
              <div 
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-green-600"
              >
                {showPassword.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
              checked={registrationData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label 
              htmlFor="rememberMe" 
              className="ml-2 text-sm text-black"
            >
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-101 shadow-md"
          >
            Create Account
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-black">
            Already have an account? 
            <Link 
              to="/login" 
              className="text-green-600 ml-1 hover:text-green-500 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;