import React from "react";

const SlideContent = ({ slide }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4">
      <div className="text-center mb-8 transform transition-all duration-700">
        <div className="flex justify-center mb-4">
          <div className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            {slide.icon}
          </div>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text">
          {slide.title}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed px-4">
          {slide.description}
        </p>
      </div>
    </div>
  );
};

export default SlideContent;