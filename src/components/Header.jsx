import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const Header = ({ activeTab = 'Home', onTabChange }) => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const navItems = [
    { id: 'Bookings', label: 'Bookings', iconSrc: '/logos/Bookings.png' },
    { id: 'PNR Status', label: 'PNR Status', iconSrc: '/logos/PNR_Status.png' },
    { id: 'Train Status', label: 'Train Status', iconSrc: '/logos/Running_Status.png' },
    { id: 'More', label: 'More', iconSrc: '/logos/More.png' },
  ];

  const additionalItems = [
    { id: 'Help', label: 'Help', iconSrc: '/logos/Help.png' },
    { id: 'Login', label: 'Login', iconSrc: '/logos/login.png' },
  ];

  const handleMobileNavClick = (itemId) => {
    onTabChange?.(itemId);
    setIsMobileDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-lg border-b border-gray-100 px-4 py-4 z-50">
      {/* Top Section */}
      <div className="relative flex items-center justify-between w-full px-4">
        {/* Left - Logo and Menu */}
        <div className="flex items-center space-x-2 z-10">
          <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200 group">
            <img
              src="/logos/Three_lines.png"
              alt="Menu"
              className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
            />
          </button>
          <img
            src="/logos/mysathi_logo_white.png"
            alt="MySathi Logo"
            className="w-24 h-auto hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Right - Nav & Login (Desktop only) */}
        <div className="hidden md:flex items-center space-x-4 z-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onTabChange?.(item.id)}
                className={`group flex flex-col items-center p-3 hover:bg-gradient-to-br hover:from-white hover:to-orange-50 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg border border-transparent hover:border-orange-100 ${
                  isActive ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={item.iconSrc}
                    alt={item.label}
                    className={`w-6 h-6 transition-transform duration-200 group-hover:scale-110 ${
                      isActive ? 'brightness-110' : 'grayscale group-hover:grayscale-0'
                    }`}
                  />
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full"></div>
                  )}
                </div>
                <span className={`text-xs font-medium mt-1 transition-colors duration-200 ${
                  isActive ? 'text-orange-600' : 'text-gray-600 group-hover:text-orange-600'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Help & Login buttons (already using images) */}
          {additionalItems.map((item) => (
            <button
              key={item.id}
              className="group flex flex-col items-center p-2 hover:bg-gradient-to-br hover:from-white hover:to-red-50 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg border border-transparent hover:border-red-100"
              onClick={() => onTabChange?.(item.id)}
            >
              <div className="relative">
                <img
                  src={item.iconSrc}
                  alt={item.label}
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
              </div>
              <span className="text-xs text-gray-600 group-hover:text-red-600 font-medium transition-colors duration-200 mt-1">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile - Dropdown Toggle */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className={`p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200 group flex items-center space-x-1 ${
              isMobileDropdownOpen ? 'bg-gray-100' : ''
            }`}
          >
            {isMobileDropdownOpen ? (
              <X className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileDropdownOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl z-50 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Menu</h3>
            <p className="text-sm text-gray-600">Choose your destination</p>
          </div>

          {/* Navigation Items */}
          <div className="px-4 py-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-3">
              Navigation
            </div>
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 border border-orange-200 shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                    }`}
                  >
                    <img
                      src={item.iconSrc}
                      alt={item.label}
                      className={`w-5 h-5 ${isActive ? 'brightness-110' : 'grayscale'}`}
                    />
                    <span className="font-medium flex-1 text-left">{item.label}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-4 border-t border-gray-200"></div>

          {/* Additional Items */}
          <div className="px-4 py-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-3">
              Account & Support
            </div>
            <div className="space-y-2">
              {additionalItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-700 hover:bg-gray-50 hover:text-red-600"
                >
                  <img src={item.iconSrc} alt={item.label} className="w-5 h-5" />
                  <span className="font-medium flex-1 text-left">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
              MySathi - Your Travel Companion
            </p>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown when clicking outside */}
      {isMobileDropdownOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40"
          onClick={() => setIsMobileDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
