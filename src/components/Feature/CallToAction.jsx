import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-15  px-4 sm:px-8 lg:px-16" style={{backgroundColor: '#FAFAFF'}}>
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <div className="text-center">
          <div className="bg-red-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join millions of travelers who trust us for their daily commute and long-distance journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Download App
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-600 transition-all duration-300">
                Book Your Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;