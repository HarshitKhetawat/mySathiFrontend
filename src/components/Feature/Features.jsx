import React from "react";
import { Search, FileText, Activity, Star, Clock, Shield } from "lucide-react";
import PrimaryFeatureCard from "./PrimaryFeatureCard";
import CallToAction from "./CallToAction";
import SecondaryFeaturesSection from "./SecondaryFeaturesSection";

const Features = () => {
  const primaryFeatures = [
    {
      icon: Search,
      title1: "Smart Train",
      title2: "Search",
      description:
        "Find the perfect train for your journey with our intelligent search engine. Get real-time availability and best route suggestions.",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-600",
      customIcon: true,
      iconSrc: "/logos/Train_Search.png",
      badge: "Most Popular",
      cardStyle: "elevated",
    },
    {
      icon: Activity,
      title1: "Live Train",
      title2: "Tracking",
      description:
        "Track your train in real-time with precise location updates, delay notifications, and arrival predictions.",
      gradientFrom: "from-red-500",
      gradientTo: "to-red-600",
      customIcon: true,
      iconSrc: "/logos/Running_Status.png",
      badge: "Real-time",
      cardStyle: "glassmorphism",
    },
    {
      icon: FileText,
      title1: "Instant PNR",
      title2: "Status",
      description:
        "Check your ticket status instantly with detailed journey information and seat confirmation updates.",
      gradientFrom: "from-pink-500",
      gradientTo: "to-red-500",
      customIcon: true,
      iconSrc: "/logos/PNR_Status.png",
      badge: "Instant Updates",
      cardStyle: "minimal",
    },
  ];

  return (
    <div
      className="py-24 px-4 sm:px-8 lg:px-16"
      style={{ backgroundColor: "#FAFAFF" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 font-medium text-sm rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Built for modern travelers
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              Seamless Train Travel
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From planning your journey to tracking your train in real-time,
            we've got every aspect of your travel covered with cutting-edge
            technology.
          </p>
        </div>

        {/* Primary Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {primaryFeatures.map((feature, idx) => (
            <PrimaryFeatureCard key={idx} {...feature} />
          ))}
        </div>

        {/* Value Propositions */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-red-50 rounded-3xl p-8 border border-red-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Save Time",
                  desc: "Get all train information in one place. No more jumping between multiple apps and websites.",
                },
                {
                  icon: Shield,
                  title: "Stay Updated",
                  desc: "Real-time notifications about delays, platform changes, and seat confirmations.",
                },
                {
                  icon: Star,
                  title: "Travel Smart",
                  desc: "Make informed decisions with comprehensive route information and travel insights.",
                },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Features Section */}
        <SecondaryFeaturesSection />
      </div>
      <div>
        <CallToAction />
      </div>
    </div>
  );
};

export default Features;
