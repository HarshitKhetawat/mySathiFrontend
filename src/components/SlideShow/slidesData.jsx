import React from "react";
import { Users, CheckCircle, Train } from "lucide-react";

export const slides = [
  {
    image: "/images/CoolieBanner.png",
    title: "Premium Coolie Services",
    description: "Book reliable railway porters for hassle-free boarding and luggage assistance.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    image: "/images/slide1.jpg",
    title: "PNR Status & Prediction",
    description: "Real-time ticket confirmation status with AI-powered prediction accuracy.",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "from-green-600 to-emerald-600"
  },
  {
    image: "/images/slide2.jpg",
    title: "Live Train Tracking",
    description: "Track your train's real-time location, delays, and platform information.",
    icon: <Train className="w-8 h-8" />,
    color: "from-orange-600 to-red-600"
  },
];