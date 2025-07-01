import React from "react";
import { ArrowUpRight } from "lucide-react";

const SecondaryFeatureCard = ({
  icon: Icon,
  title1,
  title2,
  customIcon,
  iconSrc,
}) => {
  return (
    <div className="group relative rounded-2xl p-6 bg-white border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 group-hover:bg-white rounded-xl flex items-center justify-center shadow-sm transition-all duration-300">
          {customIcon ? (
            <img
              src={iconSrc}
              alt={`${title1} ${title2}`}
              className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity "
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

export default SecondaryFeatureCard;
