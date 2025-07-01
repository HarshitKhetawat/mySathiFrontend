import React from 'react';
import MobileStepItem from './MobileStepItem.jsx';

const MobileLayout = ({ steps, activeStep, setActiveStep }) => (
  <div className="lg:hidden max-w-4xl mx-auto">
    <div className="space-y-4">
      {steps.map((step, index) => (
        <MobileStepItem 
          key={step.id}
          step={step}
          index={index}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ))}
    </div>
  </div>
);

export default MobileLayout;