import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    feedback: '',
    rating: 3
  });

  const [errors, setErrors] = useState({});

  const categories = [
    'General Feedback',
    'Service Complaint',
    'Suggestion',
    'Appreciation',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    // Category validation
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    // Feedback validation
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    } else if (formData.feedback.trim().length < 10) {
      newErrors.feedback = 'Feedback must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit form data
      console.log('Form submitted:', formData);
      alert('Thank you for your feedback!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        feedback: '',
        rating: 3
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Citizen Feedback Form
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number (Optional)
            </label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Category Select */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
              Feedback Category
            </label>
            <select 
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black ${
                errors.category ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
              }`}
            >
              <option value="" className="text-gray-500">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category} className="text-black">
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Rating Input */}
          <div>
            <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
              Overall Satisfaction Rating
            </label>
            <div className="flex items-center">
              <input 
                type="range" 
                id="rating"
                name="rating"
                min="1" 
                max="5" 
                value={formData.rating}
                onChange={handleChange}
                className="w-full h-2 bg-green-200 rounded-md appearance-none cursor-pointer"
              />
              <span className="ml-4 text-gray-700 font-semibold">
                {formData.rating}/5
              </span>
            </div>
          </div>

          {/* Feedback Textarea */}
          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">
              Your Feedback
            </label>
            <textarea 
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 resize-none text-black ${
                errors.feedback ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
              }`}
              placeholder="Share your detailed feedback here..."
            />
            {errors.feedback && (
              <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit" 
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300 font-semibold"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;