// components/SecondaryFeatures.jsx
import { Activity, MapPin, Train } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title1, title2, bgColor, iconColor,customIcon, iconSrc }) => {
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

const SecondaryFeatures = () => {
  const features = [
    {
      icon: Activity,
      title1: "Running",
      title2: "Status",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      customIcon: true,
      iconSrc: "/logos/Running_Status.png" // Replace with your logo path
    },
    {
      icon: MapPin,
      title1: "Route",
      title2: "",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      customIcon: true,
      iconSrc: "/logos/Train_Search.png"
    },
    {
      icon: Train,
      title1: "Coach",
      title2: "Layout",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      customIcon: true,
      iconSrc: "/logos/Train_Search.png"
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
        />
      ))}
    </div>
  );
};

export default SecondaryFeatures;