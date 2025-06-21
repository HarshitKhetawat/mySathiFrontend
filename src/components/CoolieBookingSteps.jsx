import React, { useState } from 'react';
import { ChevronRight, Search, MapPin, Package, CreditCard, CheckCircle, User } from 'lucide-react';

const CoolieBookingSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Enter PNR Details",
      description: "Insert PNR Number or Train Number and journey date",
      icon: <Search className="w-6 h-6" />,
      details: [
        "Enter your 10-digit PNR number",
        "Verify train details and journey date",
        "Check passenger information"
      ]
    },
    {
      id: 2,
      title: "Select Station & Platform",
      description: "Choose your boarding/deboarding station and platform",
      icon: <MapPin className="w-6 h-6" />,
      details: [
        "Select boarding station (First Platform/Last Platform)",
        "Choose entry/exit preferences",
        "Confirm platform details"
      ]
    },
    {
      id: 3,
      title: "Baggage Details",
      description: "Specify number of bags and weight",
      icon: <Package className="w-6 h-6" />,
      details: [
        "Select number of bags (1-4 bags)",
        "Enter weight for each bag",
        "Check weight limits and charges"
      ]
    },
    {
      id: 4,
      title: "Personal Information",
      description: "Fill in passenger and contact details",
      icon: <User className="w-6 h-6" />,
      details: [
        "Enter customer name and mobile number",
        "Add alternate contact number",
        "Verify seat and coach information"
      ]
    },
    {
      id: 5,
      title: "Payment",
      description: "Pay booking amount online or COD",
      icon: <CreditCard className="w-6 h-6" />,
      details: [
        "Review total booking amount",
        "Choose payment method (Online/COD)",
        "Complete secure payment process"
      ]
    },
    {
      id: 6,
      title: "Confirmation",
      description: "Get booking confirmation and coolie assignment",
      icon: <CheckCircle className="w-6 h-6" />,
      details: [
        "Receive booking confirmation",
        "Get coolie contact details",
        "Track coolie arrival at platform"
      ]
    }
  ];

  return (
    <div className="w-full p-6 min-h-screen" style={{backgroundColor: '#FFFAFA'}}>
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Coolie Booking: 6 Easy Steps
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Book your railway coolie service in just a few simple steps. Get reliable assistance for your luggage at any railway station.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mb-12 ">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center ">
              <div 
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${
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
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div className={`h-1 rounded-full transition-all duration-500 ${
                    activeStep > index 
                      ? 'bg-gradient-to-r from-red-400 to-red-600' 
                      : 'bg-gray-300'
                  }`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-16 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white mr-4">
              {steps[activeStep].icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {steps[activeStep].title}
              </h2>
              <p className="text-gray-600 mt-1">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Key Actions:</h3>
              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Pro Tip:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {activeStep === 0 && "Keep your ticket handy to quickly enter the PNR number. Double-check the train number and date for accuracy."}
                {activeStep === 1 && "Choose the platform closest to your coach position to minimize walking distance with your luggage."}
                {activeStep === 2 && "Be accurate with bag weights to avoid additional charges. Standard weight limit is 40kg per bag."}
                {activeStep === 3 && "Ensure your mobile number is active as the coolie will contact you directly for coordination."}
                {activeStep === 4 && "Online payment is recommended for faster processing. COD is available but may have additional charges."}
                {activeStep === 5 && "Save the coolie's contact number and booking reference for easy communication at the station."}
              </p>
            </div>
          </div>

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
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeStep === steps.length - 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 hover:shadow-lg'
              }`}
            >
              Next Step
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden max-w-4xl mx-auto">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div 
              key={step.id}
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
                    <p className="text-gray-600 text-sm mt-1">
                      {step.description}
                    </p>
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
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Book Your Coolie?
          </h3>
          <p className="text-gray-600 mb-6">
            Get reliable luggage assistance at your railway station with just a few clicks
          </p>
          <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoolieBookingSteps;