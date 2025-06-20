import React, { useState } from 'react';
import {
  Search, Calendar, FileText, Briefcase, Coffee, Activity,
  MapPin, Train, ArrowUpRight, ChevronRight, Star, Clock, Shield
} from 'lucide-react';

const PrimaryFeatureCard = ({ icon: Icon, title1, title2, description, gradientFrom, gradientTo, customIcon, iconSrc, badge }) => {
  return (
    <div className="group relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-15 transition-all duration-700`} />
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-red-100 to-orange-100 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500" />

      <div className="relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full mb-4">
            <Star className="w-3 h-3" />
            {badge}
          </div>
        )}

        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            {customIcon ? (
              <img 
                src={iconSrc} 
                alt={`${title1} ${title2}`} 
                className="w-8 h-8 brightness-0 invert"
              />
            ) : (
              <Icon className="w-8 h-8 text-white" />
            )}
          </div>
          
          <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 cursor-pointer hover:bg-red-50 hover:border-red-200">
            <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title1} {title2}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors">
          Explore Feature
          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

const SecondaryFeatureCard = ({ icon: Icon, title1, title2, customIcon, iconSrc }) => {
  return (
            <div className="group relative rounded-2xl p-6 bg-white border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 group-hover:bg-white rounded-xl flex items-center justify-center shadow-sm transition-all duration-300">
          {customIcon ? (
            <img 
              src={iconSrc} 
              alt={`${title1} ${title2}`} 
              className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <Icon className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" />
          )}
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 group-hover:text-red-900 transition-colors">
            {title1} {title2}
          </h4>
        </div>

        <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  );
};

const Features = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const primaryFeatures = [
    {
      icon: Search,
      title1: "Smart Train",
      title2: "Search",
      description: "Find the perfect train for your journey with our intelligent search engine. Get real-time availability and best route suggestions.",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-600",
      customIcon: true,
      iconSrc: "/logos/Train_Search.png",
      badge: "Most Popular"
    },
    {
      icon: Activity,
      title1: "Live Train",
      title2: "Tracking",
      description: "Track your train in real-time with precise location updates, delay notifications, and arrival predictions.",
      gradientFrom: "from-red-500",
      gradientTo: "to-red-600",
      customIcon: true,
      iconSrc: "/logos/Running_Status.png",
      badge: "Real-time"
    },
    {
      icon: FileText,
      title1: "Instant PNR",
      title2: "Status",
      description: "Check your ticket status instantly with detailed journey information and seat confirmation updates.",
      gradientFrom: "from-pink-500",
      gradientTo: "to-red-500",
      customIcon: true,
      iconSrc: "/logos/PNR_Status.png"
    }
  ];

  const secondaryFeatures = [
    { icon: Calendar, title1: "Seat", title2: "Availability", customIcon: true, iconSrc: "/logos/Seat_Availability.png" },
    { icon: MapPin, title1: "Route", title2: "Information", customIcon: true, iconSrc: "/logos/Route.png" },
    { icon: Train, title1: "Coach", title2: "Layout", customIcon: true, iconSrc: "/logos/Coach_Layout.png" },
    { icon: Briefcase, title1: "My", title2: "Trips", customIcon: true, iconSrc: "/logos/My_Trips.png" },
    { icon: Coffee, title1: "Order", title2: "Food", customIcon: true, iconSrc: "/logos/Order_Food.png" },
    { icon: null, title1: "Rail", title2: "Madad", customIcon: true, iconSrc: "/logos/Rail_madad.png" },
  
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 font-medium text-sm rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Built for modern travelers
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              Seamless Train Travel
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From planning your journey to tracking your train in real-time, we've got every aspect of your travel covered with cutting-edge technology.
          </p>
        </div>

        {/* Primary Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {primaryFeatures.map((feature, idx) => (
            <PrimaryFeatureCard key={idx} {...feature} />
          ))}
        </div>

        {/* Value Propositions */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 border border-red-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Save Time", desc: "Get all train information in one place. No more jumping between multiple apps and websites." },
                { icon: Shield, title: "Stay Updated", desc: "Real-time notifications about delays, platform changes, and seat confirmations." },
                { icon: Star, title: "Travel Smart", desc: "Make informed decisions with comprehensive route information and travel insights." }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Show All Features Button */}
        {showAllFeatures && (
  <>
    <div className="text-center mb-8 mt-20">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Features</h3>
      <p className="text-gray-600">Explore more tools to enhance your travel experience</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500">
      {secondaryFeatures.map((feature, idx) => (
        <SecondaryFeatureCard key={idx} {...feature} />
      ))}
    </div>

    {/* Show Less Button */}
    <div className="text-center mt-8">
      <button
        onClick={() => setShowAllFeatures(false)}
        className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-red-500 text-red-600 font-semibold rounded-full hover:bg-red-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
        Show Less Features
      </button>
    </div>
  </>
)}

        {/* Secondary Features (shown only if button clicked) */}
        {!showAllFeatures && (
  <div className="text-center mt-8">
    <button
      onClick={() => setShowAllFeatures(true)}
      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-full hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      <Clock className="w-5 h-5" />
      Show All Features
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
)}

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join millions of travelers who trust us for their daily commute and long-distance journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Download App
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-600 transition-all duration-300">
                Book Your Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;