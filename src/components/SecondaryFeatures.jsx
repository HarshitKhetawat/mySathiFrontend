// components/SecondaryFeatures.jsx
import { Activity, MapPin, Train, ArrowUpRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title1, title2, bgColor, iconColor, gradientFrom, gradientTo, customIcon, iconSrc }) => {
  return (
    <button className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        {/* Icon container */}
        <div className={`relative w-16 h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {customIcon ? (
            <img src={iconSrc} alt={`${title1} ${title2}`} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <Icon className={`w-8 h-8 text-white`} />
          )}
          
          {/* Floating action indicator */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
            <ArrowUpRight className="w-3 h-3 text-gray-600" />
          </div>
        </div>
        
        {/* Text content */}
        <div className="text-center space-y-1">
          <div className="text-base font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {title1}
          </div>
          {title2 && (
            <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {title2}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </button>
  );
};

const SecondaryFeatures = () => {
  const features = [
    {
      icon: Activity,
      title1: "Running",
      title2: "Status",
      bgColor: "bg-red-50",
      iconColor: "text-red-400",
      gradientFrom: "from-white",
      gradientTo: "to-red-100",
      customIcon: true,
      iconSrc: "/logos/Running_Status.png"
    },
    {
      icon: MapPin,
      title1: "Route",
      title2: "",
      bgColor: "bg-red-50",
      iconColor: "text-red-400",
      gradientFrom: "from-white",
      gradientTo: "to-red-100",
      customIcon: true,
      iconSrc: "/logos/Route.png"
    },
    {
      icon: Train,
      title1: "Coach",
      title2: "Layout",
      bgColor: "bg-red-50",
      iconColor: "text-red-400",
      gradientFrom: "from-white",
      gradientTo: "to-red-100",
      customIcon: true,
      iconSrc: "/logos/Coach_Layout.png"
    }
  ];

  return (
    <div className="px-4 mb-8">
      
      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title1={feature.title1}
            title2={feature.title2}
            bgColor={feature.bgColor}
            iconColor={feature.iconColor}
            gradientFrom={feature.gradientFrom}
            gradientTo={feature.gradientTo}
            customIcon={feature.customIcon}
            iconSrc={feature.iconSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryFeatures;