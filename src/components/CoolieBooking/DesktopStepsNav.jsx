import React from 'react';
import StepCircle from './StepCircle.jsx';
import ProgressLine from './ProgressLine.jsx';

const DesktopStepsNav = ({ steps, activeStep, setActiveStep }) => (
  <div className="flex items-center justify-between p-10  mb-12">
    {steps.map((step, index) => (
      <div key={step.id} className="flex items-center">
        <StepCircle 
          step={step}
          index={index}
          activeStep={activeStep}
          onClick={() => setActiveStep(index)}
        />
        {index < steps.length - 1 && (
          <ProgressLine isCompleted={activeStep > index} />
        )}
      </div>
    ))}
  </div>
);

export default DesktopStepsNav;