import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300 text-center group">
      <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full 
        bg-green-100 group-hover:bg-green-200 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-600 transition">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;