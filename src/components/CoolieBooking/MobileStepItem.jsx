import React from 'react';
import { ChevronRight } from 'lucide-react';

const MobileStepItem = ({ step, index, activeStep, setActiveStep }) => (
  <div 
    className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
      activeStep === index ? 'ring-2 ring-red-400' : ''
    }`}
  >
    <div 
      className="p-4 cursor-pointer"
      onClick={() => setActiveStep(activeStep === index ? -1 : index)}
    >
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 ${
          activeStep === index 
            ? 'bg-gradient-to-br from-red-500 to-red-700' 
            : 'bg-gradient-to-br from-red-400 to-red-600'
        }`}>
          {step.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-lg">
            Step {step.id}: {step.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{step.description}</p>
        </div>
        <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
          activeStep === index ? 'rotate-90' : ''
        }`} />
      </div>
    </div>
    
    {activeStep === index && (
      <div className="px-4 pb-4 border-t border-gray-100">
        <div className="pt-4">
          <ul className="space-y-2">
            {step.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
);

export default MobileStepItem;