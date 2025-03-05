import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/Common/FeatureCard';


const Home = () => {
  const features = [
    {
      icon: <i className="fas fa-route text-green-500 text-3xl"></i>,
      title: "Smart Routing",
      description: "Automatically routes complaints to the right departments for faster resolution."
    },
    {
      icon: <i className="fas fa-gavel text-blue-500 text-3xl"></i>,
      title: "Efficient Governance",
      description: "Streamline operations, reduce bureaucratic delays, and build trust with data-driven insights."
    },
    {
      icon: <i className="fas fa-chart-line text-purple-500 text-3xl"></i>,
      title: "AI-Driven Insights",
      description: "Analyze trends, predict issues, and generate actionable recommendations."
    },
    {
      icon: <i className="fas fa-tags text-red-500 text-3xl"></i>,
      title: "Automatic Classification",
      description: "Prioritize complaints by urgency, category, and potential impact."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Welcome to CitizenVoice AI
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-600">
            Empowering Citizens, Streamlining Governance
          </h2>
          <p className="mb-8 text-gray-700">
            Your one-stop solution for smarter, faster complaint resolution. Our AI-powered platform 
            aggregates complaints from government portals, social media, and forums, analyzes them 
            using advanced NLP, and routes them to the right authorities.
            {/* {solo_fucnt} */}
          </p>
          <Link 
            to="/complaint" 
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 inline-block  "
          >
            File Complaint
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="home-image.png" 
            alt="CitizenVoice AI Hero" 
            className="w-full h-auto rounded-lg "
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;