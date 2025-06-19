import React from 'react';
import { Sparkles } from 'lucide-react';

const QuickHelp = () => {
  return (
    <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl px-6 py-5 shadow-md hover:shadow-xl border border-red-100 hover:border-red-200 transition-all duration-300 group cursor-pointer">
      <div className="flex items-center justify-between">
        {/* Left Content */}
        <div className="flex items-center gap-4">
          {/* Icon with badge */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <img src="/logos/Coolie.png" alt="Coolie" className="w-7 h-7" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-yellow-600" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-800 font-semibold text-lg">Need help?</p>
            <p className="text-sm text-gray-600">
              Book a{' '}
              <span className="bg-red-100 text-red-600 font-medium px-2 py-0.5 rounded-md">
                coolie
              </span>{' '}
              for assistance
            </p>
          </div>
        </div>

        {/* Right Action Icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
          <img src="/logos/Clickable.png" alt="Click" className="w-5 h-5" />
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="mt-5 h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent rounded-full opacity-60"></div>
    </div>
  );
};

export default QuickHelp;
