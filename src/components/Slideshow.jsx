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
  const [activeTab, setActiveTab] = useState('book');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  return (
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
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full text-white z-30 transition-all duration-300 border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full text-white z-30 transition-all duration-300 border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
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
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              {slides[current].icon}
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            {slides[current].description}
          </p>
        </div>
      </div>

      {/* Enhanced Booking Form */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-30">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-6">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-gray-50 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('book')}
                className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === 'book'
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" />
                  Book Train Tickets
                </div>
              </button>
              <button
                onClick={() => setActiveTab('pnr')}
                className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === 'pnr'
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  PNR Status
                </div>
              </button>
              <button
                onClick={() => setActiveTab('running')}
                className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === 'running'
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Train className="w-4 h-4" />
                  Live Tracking
                </div>
              </button>
              <button
                onClick={() => setActiveTab('coolie')}
                className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === 'coolie'
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Coolie Services
                </div>
              </button>
            </div>

            {/* Form Content */}
            <div className="transition-all duration-500">
              {activeTab === 'book' && (
                <div className="flex flex-col md:flex-row items-end gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">From Station</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="New Delhi"
                        value={fromStation}
                        onChange={(e) => setFromStation(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={swapStations}
                    className="p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-orange-300 transition-all duration-200 group"
                  >
                    <ArrowLeftRight className="w-5 h-5 text-gray-500 group-hover:text-orange-500" />
                  </button>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">To Station</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Mumbai"
                        value={toStation}
                        onChange={(e) => setToStation(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Journey Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 text-sm rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Search Trains
                  </button>
                </div>
              )}

              {activeTab === 'pnr' && (
                <div className="flex flex-col md:flex-row items-end gap-4">
                  <div className="flex-1 max-w-md">
                    <label className="block text-sm font-medium text-gray-700 mb-2">PNR Number</label>
                    <div className="relative">
                      <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter 10-digit PNR number"
                        className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 text-sm rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Check Status
                  </button>
                  <div className="flex-1 text-xs text-gray-500 p-3 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-green-600" />
                      <span>Get real-time confirmation probability with AI prediction</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'running' && (
                <div className="flex flex-col md:flex-row items-end gap-4">
                  <div className="flex-1 max-w-md">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Train Details</label>
                    <div className="relative">
                      <Train className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Train name or number (e.g., 12345 or Rajdhani)"
                        className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 text-sm rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Track Live
                  </button>
                  <div className="flex-1 text-xs text-gray-500 p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>Real-time location, delays, and platform information</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'coolie' && (
                <div className="flex flex-col md:flex-row items-end gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Station</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-white">
                        <option value="">Select your station</option>
                        <option value="NDLS">New Delhi (NDLS)</option>
                        <option value="BCT">Mumbai Central (BCT)</option>
                        <option value="HWH">Howrah (HWH)</option>
                        <option value="MAS">Chennai Central (MAS)</option>
                        <option value="SBC">Bangalore City (SBC)</option>
                        <option value="JAT">Jammu Tawi (JAT)</option>
                        <option value="PNBE">Patna Junction (PNBE)</option>
                        <option value="LKO">Lucknow (LKO)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-white">
                        <option value="">Choose service type</option>
                        <option value="boarding">Boarding Assistance</option>
                        <option value="deboarding">Deboarding Assistance</option>
                        <option value="both">Both Boarding & Deboarding</option>
                        <option value="luggage">Luggage Carrying Only</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="datetime-local"
                        className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 text-sm rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Book Coolie
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;