import React from 'react';
import DetailList from './DetailList.jsx';
import ProTip from './ProTip.jsx';
import NavigationButtons from './NavigationButtons.jsx';

const StepDetails = ({ step, activeStep, stepsLength, setActiveStep }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 mt-16 border border-gray-200 hover:border-red-300 transition-all duration-300">
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white mr-4">
        {step.icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
        <p className="text-gray-600 mt-1">{step.description}</p>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      <DetailList details={step.details} title="Key Actions" />
      <ProTip tip={step.tip} />
    </div>

    <NavigationButtons 
      activeStep={activeStep}
      stepsLength={stepsLength}
      setActiveStep={setActiveStep}
    />
  </div>
);

export default StepDetails;
