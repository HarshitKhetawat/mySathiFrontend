import React, { useState } from "react";
import { Calendar, MapPin, Train, Briefcase, Coffee } from "lucide-react";
import SecondaryFeatureCard from "./SecondaryFeatureCard";
import ShowAllFeaturesButton from "./ShowAllFeaturesButton";

const SecondaryFeaturesSection = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const secondaryFeatures = [
    {
      icon: Calendar,
      title1: "Seat",
      title2: "Availability",
      customIcon: true,
      iconSrc: "/logos/Seat_Availability.png",
    },
    {
      icon: MapPin,
      title1: "Route",
      title2: "Information",
      customIcon: true,
      iconSrc: "/logos/Route.png",
    },
    {
      icon: Train,
      title1: "Coach",
      title2: "Layout",
      customIcon: true,
      iconSrc: "/logos/Coach_Layout.png",
    },
    {
      icon: Briefcase,
      title1: "My",
      title2: "Trips",
      customIcon: true,
      iconSrc: "/logos/My_Trips.png",
    },
    {
      icon: Coffee,
      title1: "Order",
      title2: "Food",
      customIcon: true,
      iconSrc: "/logos/Order_Food.png",
    },
    {
      icon: null,
      title1: "Rail",
      title2: "Madad",
      customIcon: true,
      iconSrc: "/logos/Rail_madad.png",
    },
  ];

  const handleToggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <>
      {/* Secondary Features (shown only if button clicked) */}
      {showAllFeatures && (
        <>
          <div className="text-center mb-8 mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Features
            </h3>
            <p className="text-gray-600">
              Explore more tools to enhance your travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500">
            {secondaryFeatures.map((feature, idx) => (
              <SecondaryFeatureCard key={idx} {...feature} />
            ))}
          </div>
        </>
      )}

      {/* Show All Features Button */}
      <ShowAllFeaturesButton
        showAllFeatures={showAllFeatures}
        onToggle={handleToggleFeatures}
      />
    </>
  );
};

export default SecondaryFeaturesSection;
