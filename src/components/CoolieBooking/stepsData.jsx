import { Search, MapPin, Package, CreditCard, CheckCircle, User } from 'lucide-react';

export const stepsData = [
  {
    id: 1,
    title: "Enter PNR Details",
    description: "Insert PNR Number or Train Number and journey date",
    icon: <Search className="w-6 h-6" />,
    details: [
      "Enter your 10-digit PNR number",
      "Verify train details and journey date",
      "Check passenger information"
    ],
    tip: "Keep your ticket handy to quickly enter the PNR number. Double-check the train number and date for accuracy."
  },
  {
    id: 2,
    title: "Select Station & Platform",
    description: "Choose your boarding/deboarding station and platform",
    icon: <MapPin className="w-6 h-6" />,
    details: [
      "Select boarding station (First Platform/Last Platform)",
      "Choose entry/exit preferences",
      "Confirm platform details"
    ],
    tip: "Choose the platform closest to your coach position to minimize walking distance with your luggage."
  },
  {
    id: 3,
    title: "Baggage Details",
    description: "Specify number of bags and weight",
    icon: <Package className="w-6 h-6" />,
    details: [
      "Select number of bags (1-4 bags)",
      "Enter weight for each bag",
      "Check weight limits and charges"
    ],
    tip: "Be accurate with bag weights to avoid additional charges. Standard weight limit is 40kg per bag."
  },
  {
    id: 4,
    title: "Personal Information",
    description: "Fill in passenger and contact details",
    icon: <User className="w-6 h-6" />,
    details: [
      "Enter customer name and mobile number",
      "Add alternate contact number",
      "Verify seat and coach information"
    ],
    tip: "Ensure your mobile number is active as the coolie will contact you directly for coordination."
  },
  {
    id: 5,
    title: "Payment",
    description: "Pay booking amount online or COD",
    icon: <CreditCard className="w-6 h-6" />,
    details: [
      "Review total booking amount",
      "Choose payment method (Online/COD)",
      "Complete secure payment process"
    ],
    tip: "Online payment is recommended for faster processing. COD is available but may have additional charges."
  },
  {
    id: 6,
    title: "Confirmation",
    description: "Get booking confirmation and coolie assignment",
    icon: <CheckCircle className="w-6 h-6" />,
    details: [
      "Receive booking confirmation",
      "Get coolie contact details",
      "Track coolie arrival at platform"
    ],
    tip: "Save the coolie's contact number and booking reference for easy communication at the station."
  }
];