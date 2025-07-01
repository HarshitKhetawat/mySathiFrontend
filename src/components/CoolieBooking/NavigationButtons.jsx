import React from 'react';
import { ChevronRight } from 'lucide-react';

const NavigationButtons = ({ activeStep, stepsLength, setActiveStep }) => (
  <div className="flex justify-between mt-8">
    <button 
      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
      disabled={activeStep === 0}
      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        activeStep === 0 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
          : 'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 hover:shadow-lg'
      }`}
    >
      Previous Step
    </button>
    
    <button 
      onClick={() => setActiveStep(Math.min(stepsLength - 1, activeStep + 1))}
      disabled={activeStep === stepsLength - 1}
      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        activeStep === stepsLength - 1 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
          : 'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 hover:shadow-lg'
      }`}
    >
      Next Step
      <ChevronRight className="w-4 h-4 ml-2" />
    </button>
  </div>
);

export default NavigationButtons;