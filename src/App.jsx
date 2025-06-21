// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Features from "./components/Features.jsx";
import Slideshow from "./components/Slideshow.jsx";
import CoolieBookingSteps from "./components/CoolieBookingSteps.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />

      {/* Slideshow Component */}
      <Slideshow />
      {/* Coolie Booking Steps Component */}
      <CoolieBookingSteps />
      {/* Main Content Area */}
      <main className="p-4">
        {/* Main Features Component */}
        <Features />
        {/* Footer Component */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
