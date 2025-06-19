import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Live Train Status",
    description: "Track your train in real-time across India.",
    buttonText: "Check Now",
  },
  {
    image: "/images/slide2.jpg",
    title: "PNR Prediction & Status",
    description: "Know if your waitlisted ticket will get confirmed.",
    buttonText: "Check PNR",
  },
  {
    image: "/images/slide3.jpg",
    title: "Seat & Coach Info",
    description: "Find seat availability, coach layout & more.",
    buttonText: "Explore Tools",
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center px-4 md:px-10 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-6">{slide.description}</p>
              <button className="bg-white text-black px-6 py-2 font-medium rounded-full shadow hover:bg-gray-200">
                {slide.buttonText}
              </button>
              <p className="text-xs mt-2 italic">*T&C Apply</p>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full text-black z-20"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full text-black z-20"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
