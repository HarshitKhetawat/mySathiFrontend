import React from "react";
import Header from "../components/Header/Header";
import Slideshow from "../components/SlideShow/Slideshow";
import CoolieBookingSteps from "../components/CoolieBooking/CoolieBookingSteps";
import Features from "../components/Feature/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Slideshow />
      <CoolieBookingSteps />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
