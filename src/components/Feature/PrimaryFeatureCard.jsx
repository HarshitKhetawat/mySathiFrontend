import React from "react";
import { ArrowUpRight, ChevronRight, Star } from "lucide-react";
import CallToAction from "./CallToAction";

const PrimaryFeatureCard = ({
  icon: Icon,
  title1,
  title2,
  description,
  gradientFrom,
  gradientTo,
  customIcon,
  iconSrc,
  badge,
  cardStyle = "default", // New prop to determine card design
}) => {
  // Different card designs based on cardStyle prop
  const getCardDesign = () => {
    switch (cardStyle) {
      case "elevated":
        return {
          cardClass:
            "group relative rounded-3xl p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-red-100 shadow-xl hover:shadow-2xl hover:border-red-200 transition-all duration-500 hover:-translate-y-3 overflow-hidden",
          decorativeElements: (
            <>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-200 to-pink-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-orange-200 to-red-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md" />
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            </>
          ),
          iconContainer:
            "w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6",
        };

      case "minimal":
        return {
          cardClass:
            "group relative rounded-3xl p-8 bg-white border border-gray-200 hover:border-red-300 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden",
          decorativeElements: (
            <>
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-50 to-pink-50 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-red-50 to-orange-50 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </>
          ),
          iconContainer:
            "w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-3xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2",
        };

      case "glassmorphism":
        return {
          cardClass:
            "group relative rounded-3xl p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/90 transition-all duration-700 hover:-translate-y-2 overflow-hidden",
          decorativeElements: (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-300/30 to-pink-300/30 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-tr from-orange-300/30 to-red-300/30 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500 blur-lg" />
            </>
          ),
          iconContainer:
            "w-16 h-16 bg-gradient-to-br from-red-500/90 to-red-600/90 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-115 group-hover:rotate-3",
        };

      default:
        return {
          cardClass:
            "group relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden",
          decorativeElements: (
            <>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-red-100 to-orange-100 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500" />
            </>
          ),
          iconContainer:
            "w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
        };
    }
  };

  const design = getCardDesign();

  return (
    <div
      className={design.cardClass}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-15 transition-all duration-700`}
      />

      {/* Decorative elements */}
      {design.decorativeElements}

      <div className="relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full mb-4">
            <Star className="w-3 h-3" />
            {badge}
          </div>
        )}

        <div className="flex items-start justify-between mb-6">
          <div className={design.iconContainer}>
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
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {title1} {title2}
          </h3>
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

export default PrimaryFeatureCard;
