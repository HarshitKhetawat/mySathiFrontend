import React, { useState } from "react";
import {
  ArrowLeftRight,
  Search,
  Calendar,
  MapPin,
  Users,
  Clock,
  Train,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const MobileBookingForm = () => {
  const [activeTab, setActiveTab] = useState("coolie");
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl border border-gray-200 mx-4 overflow-hidden">
      <div className="p-4 sm:p-6">
        {/* Tabs as Radio Buttons - Mobile Optimized */}
        <div className="flex gap-2 sm:gap-4 mb-4 items-center bg-gray-100 p-1.5 rounded-2xl overflow-x-auto scrollbar-hide">
          <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer flex-shrink-0">
            <input
              type="radio"
              name="mobile-booking-tab"
              value="coolie"
              checked={activeTab === "coolie"}
              onChange={() => setActiveTab("coolie")}
              className="accent-orange-600 w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
              Coolie
            </span>
          </label>
          <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer flex-shrink-0">
            <input
              type="radio"
              name="mobile-booking-tab"
              value="book"
              checked={activeTab === "book"}
              onChange={() => setActiveTab("book")}
              className="accent-orange-600 w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
              Book
            </span>
          </label>
          <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer flex-shrink-0">
            <input
              type="radio"
              name="mobile-booking-tab"
              value="pnr"
              checked={activeTab === "pnr"}
              onChange={() => setActiveTab("pnr")}
              className="accent-orange-600 w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
              PNR Status
            </span>
          </label>
          <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer flex-shrink-0">
            <input
              type="radio"
              name="mobile-booking-tab"
              value="running"
              checked={activeTab === "running"}
              onChange={() => setActiveTab("running")}
              className="accent-orange-600 w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
              Train Search
            </span>
          </label>
        </div>

        {/* Form Content - Mobile Optimized */}
        <div className="transition-all duration-500">
          {activeTab === "coolie" && (
            <div className="space-y-4">
              <div className="w-full">
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  PNR Number
                </label>
                <div className="relative">
                  <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter 10-digit PNR"
                    className="w-full pl-9 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 touch-target"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-3 text-sm rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-target">
                  Search PNR for Coolie Booking
                </button>
              </div>
            </div>
          )}

          {activeTab === "book" && (
            <div className="space-y-4">
              <div className="w-full">
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  From Station
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="New Delhi"
                    value={fromStation}
                    onChange={(e) => setFromStation(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 touch-target"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  To Station
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Mumbai"
                    value={toStation}
                    onChange={(e) => setToStation(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 touch-target"
                  />
                </div>
              </div>

              {/* Mobile swap button */}
              <div className="flex justify-center">
                <button
                  onClick={swapStations}
                  className="p-3 bg-orange-100 border-2 border-orange-200 rounded-xl hover:bg-orange-200 transition-all duration-200 touch-target"
                >
                  <ArrowLeftRight className="w-5 h-5 text-orange-600" />
                </button>
              </div>

              <div className="w-full">
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Journey Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-9 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 touch-target"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-3 text-sm rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-target">
                  Search
                </button>
              </div>
            </div>
          )}

          {activeTab === "pnr" && (
            <div className="space-y-4">
              <div className="w-full">
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  PNR Number
                </label>
                <div className="relative">
                  <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter 10-digit PNR"
                    className="w-full pl-9 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 touch-target"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-3 text-sm rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-target">
                  Check Status
                </button>
              </div>
              <div className="text-xs text-gray-500 p-3 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>
                    Get real-time confirmation probability with AI prediction
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "running" && (
            <div className="space-y-4">
              <div className="w-full">
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Train Details
                </label>
                <div className="relative">
                  <Train className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Train name or number"
                    className="w-full pl-9 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 touch-target"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-3 text-sm rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-target">
                  Track Live
                </button>
              </div>
              <div className="text-xs text-gray-500 p-3 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>
                    Real-time location, delays, and platform information
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileBookingForm;
