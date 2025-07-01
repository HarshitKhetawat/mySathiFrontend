import React, { useState } from 'react';
import { stepsData } from './stepsData.jsx';
import Header from './Header.jsx';
import DesktopStepsNav from './DesktopStepsNav.jsx';
import StepDetails from './StepDetails.jsx';
import MobileLayout from './MobileLayout.jsx';
import CallToAction from './CallToAction.jsx';

const CoolieBookingSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full p-6 min-h-screen" style={{backgroundColor: '#FFFAFA'}}>
      <Header />

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <DesktopStepsNav 
          steps={stepsData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <StepDetails 
          step={stepsData[activeStep]}
          activeStep={activeStep}
          stepsLength={stepsData.length}
          setActiveStep={setActiveStep}
        />
      </div>

      <MobileLayout 
        steps={stepsData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />

      <CallToAction />
    </div>
  );
};

export default CoolieBookingSteps;