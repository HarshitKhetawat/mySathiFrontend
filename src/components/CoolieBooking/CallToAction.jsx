import React from 'react';

const CallToAction = () => (
  <div className="mt-12 text-center max-w-7xl mx-auto">
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Ready to Book Your Coolie?
      </h3>
      <p className="text-gray-600 mb-6">
        Get reliable luggage assistance at your railway station with just a few clicks
      </p>
      <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl">
        Start Booking Now
      </button>
    </div>
  </div>
);

export default CallToAction;