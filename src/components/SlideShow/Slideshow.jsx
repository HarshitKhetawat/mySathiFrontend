import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import SlideshowNavigation from "./SlideshowNavigation";
import SlideContent from "./SlideContent";
import { slides } from "./slidesData.jsx";

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        return next;
      });
    }, current === 0 ? 16000 : 6000); 
    
    return () => clearInterval(timer);
  }, [current]);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full">
      {/* Slideshow Container */}
      <div className="relative w-full h-180 overflow-hidden">
        {/* Slideshow */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Navigation */}
        <SlideshowNavigation 
          prev={prev}
          next={next}
          current={current}
          slides={slides}
          setCurrent={setCurrent}
        />

        {/* Content */}
        <SlideContent slide={slides[current]} />

        {/* Desktop Booking Form (overlaid on slideshow) */}
        <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-30">
          <div className="relative">
            <BookingForm isMobile={false} />
          </div>
        </div>
      </div>

      {/* Mobile Booking Form (below slideshow with proper spacing) */}
      <div className="md:hidden relative mt-6 mb-6">
        <BookingForm isMobile={true} />
      </div>
    </div>
  );
};

export default HeroSlideshow;