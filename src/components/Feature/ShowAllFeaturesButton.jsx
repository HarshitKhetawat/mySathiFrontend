import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';

const ShowAllFeaturesButton = ({ showAllFeatures, onToggle }) => {
  return (
    <div className="text-center mt-8">
      {!showAllFeatures ? (
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Clock className="w-5 h-5" />
          Show All Features
          <ChevronRight className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-red-500 text-red-600 font-semibold rounded-full hover:bg-red-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Show Less Features
        </button>
      )}
    </div>
  );
};

export default ShowAllFeaturesButton;