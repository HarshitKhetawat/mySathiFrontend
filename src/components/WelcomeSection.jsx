import React from 'react';
import { User } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-r from-white via-gray-50 to-white px-4 py-2 rounded-xl shadow-sm border border-gray-200/70 flex items-center space-x-2">
      <span className="text-sm text-gray-500 font-medium">Welcome,</span>
      <span className="text-red-600 font-semibold text-base">XYZ</span>
      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
        <User className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default WelcomeSection;
