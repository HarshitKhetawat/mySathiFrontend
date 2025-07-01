import React from 'react';

const ProgressLine = ({ isCompleted }) => (
  <div className="flex-1 mx-4">
    <div className={`h-1 rounded-full transition-all duration-500 ${
      isCompleted 
        ? 'bg-gradient-to-r from-red-400 to-red-600' 
        : 'bg-gray-300'
    }`}></div>
  </div>
);

export default ProgressLine;