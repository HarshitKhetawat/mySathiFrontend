// components/QuickHelp.jsx
import React from 'react';
import { Hand } from 'lucide-react';

const QuickHelp = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <Hand className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <p className="text-gray-800 font-medium">Need help?</p>
            <p className="text-gray-600">Book a <span className="text-red-500 font-medium">coolie</span></p>
          </div>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-gray-400">👆</span>
        </div>
      </div>
    </div>
  );
};

export default QuickHelp;