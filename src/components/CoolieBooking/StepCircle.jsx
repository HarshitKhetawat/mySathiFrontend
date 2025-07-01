import React from 'react';

const StepCircle = ({ step, index, activeStep, onClick }) => (
  <div 
    className={`relative cursor-pointer transition-all duration-300 ${
      activeStep === index ? 'scale-110' : 'hover:scale-105'
    }`}
    onClick={onClick}
  >
    <div className={`w-15 h-15 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${
      activeStep === index 
        ? 'bg-gradient-to-br from-red-500 to-red-700 shadow-xl' 
        : 'bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700'
    }`}>
      {step.icon}
    </div>
    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 text-center">
      <div className={`font-semibold text-sm ${
        activeStep === index ? 'text-red-600' : 'text-gray-600'
      }`}>
        Step {step.id}
      </div>
    </div>
  </div>
);

export default StepCircle;