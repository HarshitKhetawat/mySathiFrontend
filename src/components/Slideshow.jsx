import React, { useState, useEffect } from "react";
import { ArrowLeftRight, Search, Calendar, MapPin, Users, Clock, Train, CheckCircle, AlertCircle } from "lucide-react";

const slides = [
  {
    image: "/images/CoolieBanner.png",
    title: "Premium Coolie Services",
    description: "Book reliable railway porters for hassle-free boarding and luggage assistance.",
    icon: <Users className="w-8 h-8" />,
    color: "from-blue-600 to-purple-600"
  },
  {
    image: "/images/slide1.jpg",
    title: "PNR Status & Prediction",
    description: "Real-time ticket confirmation status with AI-powered prediction accuracy.",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "from-green-600 to-emerald-600"
  },
  {
    image: "/images/slide2.jpg",
    title: "Live Train Tracking",
    description: "Track your train's real-time location, delays, and platform information.",
    icon: <Train className="w-8 h-8" />,
    color: "from-orange-600 to-red-600"
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState('coolie');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        return next;
      });
    }, current === 0 ? 15000 : 6000);
    
    return () => clearInterval(timer);
  }, [current]);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  const BookingForm = ({ isMobile }) => (
    <div className={`${isMobile 
      ? 'bg-white shadow-xl rounded-2xl border border-gray-200 mx-4' 
      : 'bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20'
    } overflow-hidden`}>
      <div className={`${isMobile ? 'p-6' : 'p-4'}`}>
        
        {/* Tabs */}
        <div className={`flex gap-2 mb-4 ${
          isMobile 
            ? 'bg-gray-100 p-1.5 rounded-2xl' 
            : 'bg-gray-50 p-1 rounded-xl'
        } overflow-x-auto`}>
          <button
            onClick={() => setActiveTab('coolie')}
            className={`flex-1 px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'coolie'
                ? `${isMobile ? 'bg-purple-500 text-white' : 'bg-white text-purple-600'} shadow-md`
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              <span>Coolie</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('book')}
            className={`flex-1 px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'book'
                ? `${isMobile ? 'bg-orange-500 text-white' : 'bg-white text-orange-600'} shadow-md`
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              <span>Book</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('pnr')}
            className={`flex-1 px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'pnr'
                ? `${isMobile ? 'bg-green-500 text-white' : 'bg-white text-green-600'} shadow-md`
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>PNR</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('running')}
            className={`flex-1 px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'running'
                ? `${isMobile ? 'bg-blue-500 text-white' : 'bg-white text-blue-600'} shadow-md`
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Train className="w-4 h-4" />
              <span>Track</span>
            </div>
          </button>
        </div>

        {/* Form Content */}
        <div className="transition-all duration-500">
          {activeTab === 'coolie' && (
            <div className={`${isMobile ? 'space-y-4' : 'flex items-end gap-3'}`}>
              <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                <label className="block text-xs font-medium text-gray-700 mb-1">PNR Number</label>
                <div className="relative">
                  <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter 10-digit PNR"
                    className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className={`${isMobile ? 'w-full mt-4' : 'flex-shrink-0'}`}>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 text-sm rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Search PNR for Coolie Booking
                </button>
              </div>
            </div>
          )}

          {activeTab === 'book' && (
            <div className={`${isMobile ? 'space-y-4' : 'flex items-end gap-3'}`}>
              <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                <label className="block text-xs font-medium text-gray-700 mb-1">From Station</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="New Delhi"
                    value={fromStation}
                    onChange={(e) => setFromStation(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  />
                </div>
              </div>
              
              {!isMobile && (
                <div className="flex-shrink-0">
                  <button 
                    onClick={swapStations}
                    className="p-2.5 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-orange-300 transition-all duration-200 group"
                  >
                    <ArrowLeftRight className="w-4 h-4 text-gray-500 group-hover:text-orange-500" />
                  </button>
                </div>
              )}
              
              <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                <label className="block text-xs font-medium text-gray-700 mb-1">To Station</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Mumbai"
                    value={toStation}
                    onChange={(e) => setToStation(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  />
                </div>
              </div>

              {isMobile && (
                <div className="flex justify-center">
                  <button 
                    onClick={swapStations}
                    className="p-3 bg-orange-100 border-2 border-orange-200 rounded-xl hover:bg-orange-200 transition-all duration-200"
                  >
                    <ArrowLeftRight className="w-5 h-5 text-orange-600" />
                  </button>
                </div>
              )}

              <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                <label className="block text-xs font-medium text-gray-700 mb-1">Journey Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className={`${isMobile ? 'w-full mt-4' : 'flex-shrink-0'}`}>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 text-sm rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          )}

          {activeTab === 'pnr' && (
            <div className={`${isMobile ? 'space-y-4' : 'flex items-end gap-3'}`}>
              <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                <label className="block text-xs font-medium text-gray-700 mb-1">PNR Number</label>
                <div className="relative">
                  <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter 10-digit PNR"
                    className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  />
                </div>
              </div>
              <div className={`${isMobile ? 'w-full mt-4' : 'flex-shrink-0'}`}>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2.5 text-sm rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Check Status
                </button>
              </div>
              {!isMobile && (
                <div className="absolute -bottom-8 left-0 right-0 text-xs text-gray-500 p-2 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                    <span>Get real-time confirmation probability with AI prediction</span>
                  </div>
                </div>
              )}
              {isMobile && (
                <div className="text-xs text-gray-500 p-3 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Get real-time confirmation probability with AI prediction</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'running' && (
            <div className={`${isMobile ? 'space-y-4' : 'flex items-end gap-3'}`}>
              <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                <label className="block text-xs font-medium text-gray-700 mb-1">Train Details</label>
                <div className="relative">
                  <Train className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Train name or number"
                    className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>
              <div className={`${isMobile ? 'w-full mt-4' : 'flex-shrink-0'}`}>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2.5 text-sm rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Track Live
                </button>
              </div>
              {!isMobile && (
                <div className="absolute -bottom-8 left-0 right-0 text-xs text-gray-500 p-2 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-blue-600 flex-shrink-0" />
                    <span>Real-time location, delays, and platform information</span>
                  </div>
                </div>
              )}
              {isMobile && (
                <div className="text-xs text-gray-500 p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Real-time location, delays, and platform information</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      {/* Slideshow Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slideshow */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 md:p-4 rounded-full text-white z-30 transition-all duration-300 border border-white/20"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 md:p-4 rounded-full text-white z-30 transition-all duration-300 border border-white/20"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 md:bottom-24 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4">
          <div className="text-center mb-8 transform transition-all duration-700">
            <div className="flex justify-center mb-4">
              <div className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                {slides[current].icon}
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text">
              {slides[current].title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed px-4">
              {slides[current].description}
            </p>
          </div>
        </div>

        {/* Desktop Booking Form (overlaid on slideshow) */}
        <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-30">
          <div className="relative">
            <BookingForm isMobile={false} />
          </div>
        </div>
      </div>

      {/* Mobile Booking Form (below slideshow with proper spacing) */}
      <div className="md:hidden relative mt-6 mb-6">
        <BookingForm isMobile={true} />
      </div>
    </div>
  );
};

export default HeroSlideshow;