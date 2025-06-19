import React from 'react';
import { Hand, ArrowRight, Sparkles } from 'lucide-react';

const QuickHelp = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 rounded-xl p-5 mb-6 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Icon container with enhanced styling */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <img src="/logos/Coolie.png" alt="" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-yellow-600" />
            </div>
          </div>
          
          {/* Text content */}
          <div className="space-y-1">
            <p className="text-gray-800 font-semibold text-lg">Need help?</p>
            <p className="text-gray-600 text-sm">
              Book a <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-md">coolie</span> for assistance
            </p>
          </div>
        </div>
        
        {/* Action button */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-md group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
            <img src="/logos/Clickable.png" alt="" />
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent rounded-full opacity-50"></div>
    </div>
  );
};

export default QuickHelp;