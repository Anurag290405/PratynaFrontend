import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4 text-green-600">About CitizenVoice</h4>
          <p className="text-gray-600 text-sm">
            Empowering citizens through innovative AI-driven governance solutions.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-green-600">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/complaint" className="text-gray-700 hover:text-green-600 block">File Complaint</Link>
            <Link to="/feedback" className="text-gray-700 hover:text-green-600 block">Provide Feedback</Link>
            <Link to="/help" className="text-gray-700 hover:text-green-600 block">Help Center</Link>
            <Link to="/faq" className="text-gray-700 hover:text-green-600 block">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-green-600">Contact Us</h4>
          <div className="text-gray-700">
            <p>1234 Civic Plaza, Indore</p>
            <p>Madhya Pradesh, India</p>
            <p>Phone: +91 123 456 7890</p>
            <p>Email: support@citizenvoice.ai</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-green-600">Newsletter</h4>
          <p className="text-gray-600 mb-4">
            Stay updated with our latest initiatives and improvements
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} CitizenVoice AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;