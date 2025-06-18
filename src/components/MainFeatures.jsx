// components/MainFeatures.jsx

import { Search, Calendar, FileText } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title1, title2, bgColor, iconColor, customIcon, iconSrc }) => {
  return (
    <button className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center space-y-2 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}>
        {customIcon ? (
          <img src={iconSrc} alt={`${title1} ${title2}`} className="w-6 h-6" />
        ) : (
          <Icon className={`w-6 h-6 ${iconColor}`} />
        )}
      </div>
      <span className="text-sm font-medium text-gray-800">{title1}</span>
      <span className="text-sm font-medium text-gray-800">{title2}</span>
    </button>
  );
};

const MainFeatures = () => {
  const features = [
    {
      icon: Search,
      title1: "Train",
      title2: "Search",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      customIcon: true,
      iconSrc: "/logos/Train_Search.png" // Replace with your logo path
    },
    {
      icon: Calendar,
      title1: "Seat",
      title2: "Availability",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      customIcon: true,
      iconSrc: "/logos/Seat_Availability.png" // Replace with your logo path
    },
    {
      icon: FileText,
      title1: "PNR",
      title2: "Status",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      customIcon: true,
      iconSrc: "/logos/PNR_Status.png" // Replace with your logo path
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title1={feature.title1}
          title2={feature.title2}
          bgColor={feature.bgColor}
          iconColor={feature.iconColor}
          customIcon={feature.customIcon}
          iconSrc={feature.iconSrc}
        />
      ))}
    </div>
  );
};

export default MainFeatures;