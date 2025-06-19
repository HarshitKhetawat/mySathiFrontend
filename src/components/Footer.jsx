// components/Footer.jsx
import React from 'react';
import { Home, Calendar, FileText, Activity, MoreHorizontal } from 'lucide-react';

const Footer = ({ activeTab = 'Home', onTabChange }) => {
  const tabs = [
    {
      id: 'Home',
      label: 'Home',
      icon: Home,
    },
    {
      id: 'Bookings',
      label: 'Bookings',
      icon: Calendar,
    },
    {
      id: 'PNR Status',
      label: 'PNR Status',
      icon: FileText,
    },
    {
      id: 'Train Status',
      label: 'Train Status',
      icon: Activity,
    },
    {
      id: 'More',
      label: 'More',
      icon: MoreHorizontal,
    }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 safe-area-pb">
      {/* Home indicator line */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
      
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
                isActive ? 'text-orange-500' : 'text-gray-500'
              } hover:text-orange-400 transition-colors`}
            >
              <Icon 
                className={`w-6 h-6 mb-1 ${
                  isActive ? 'text-orange-500' : 'text-gray-500'
                }`} 
              />
              <span 
                className={`text-xs font-medium ${
                  isActive ? 'text-orange-500' : 'text-gray-500'
                } truncate`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;