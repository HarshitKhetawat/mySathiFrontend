// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Features from "./components/Features.jsx";
import Slideshow from "./components/Slideshow.jsx";
import CoolieBookingSteps from "./components/CoolieBookingSteps.jsx";
import SeatAvailabilityPage from "./components/SeatAvailability.jsx"; // ✅ Import this component

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component with props */}
      <Header activeTab={currentPage} onTabChange={setCurrentPage} />

      {/* Conditional Rendering Based on Selected Tab */}
      {currentPage === "home" && (
        <>
          <Slideshow />
          <CoolieBookingSteps />
          <main className="p-4">
            <Features />
            <Footer />
          </main>
        </>
      )}

      {currentPage === "seat-availability" && (
        <main className="p-4">
          <SeatAvailabilityPage />
        </main>
      )}

      {/* You can add more pages similarly */}
      {/* Example:
        {currentPage === "ticket-booking" && <TicketBookingPage />}
      */}
    </div>
  );
};

export default App;
