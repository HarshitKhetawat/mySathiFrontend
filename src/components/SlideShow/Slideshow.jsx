import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BookingForm from "./BookingForm";
import MobileBookingForm from "./MobileBookingForm";

const CarouselData = [
  {
    headerText: null,
    subText: "Sub Text One",
    image: "/images/CoolieBanner.png",
  },
  {
    headerText: "Header Text Two",
    subText: null,
    image: "https://picsum.photos/1200/800",
  },
  {
    headerText: null,
    subText: null,
    image: "https://picsum.photos/720/720",
  },
  {
    headerText: "Header Text Four",
    subText: "Sub Text Four",
    image: "https://picsum.photos/1920/1080",
  },
  {
    headerText: "Header Text Five",
    subText: "Sub Text Five",
    image: "https://picsum.photos/480/360",
  },
];

const Arrow = ({ style, onClick, icon, arrowType }) => {
  const baseStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.5)",
    border: "none",
    borderRadius: "50%",
    width: 48,
    height: 48,
    zIndex: 2,
    color: "white",
    fontSize: 24,
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    transition: "background 0.2s",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };

  if (arrowType === "left") {
    baseStyle.left = 16;
  } else {
    baseStyle.right = 16;
  }

  return (
    <button
      style={{ ...style, ...baseStyle }}
      onClick={onClick}
      aria-label="arrow"
    >
      {icon}
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  nextArrow: <Arrow icon={<FaArrowRight />} arrowType="right" />,
  prevArrow: <Arrow icon={<FaArrowLeft />} arrowType="left" />,
};

const Slideshow = () => (
  <div className="relative">
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <Slider {...settings}>
        {CarouselData.map((slide, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={slide.headerText || slide.subText || `Slide ${idx + 1}`}
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                borderRadius: 0,
              }}
            />
            {(slide.headerText || slide.subText) && (
              <div
                style={{
                  position: "absolute",
                  bottom: 40,
                  left: 40,
                  color: "white",
                  background: "rgba(0,0,0,0.4)",
                  padding: "16px 24px",
                  borderRadius: "8px",
                }}
              >
                {slide.headerText && (
                  <h2 style={{ margin: 0 }}>{slide.headerText}</h2>
                )}
                {slide.subText && <p style={{ margin: 0 }}>{slide.subText}</p>}
              </div>
            )}
          </div>
        ))}
      </Slider>
      {/* Desktop BookingForm overlay */}
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-full max-w-7xl z-10"
        style={{ bottom: 32 }}
      >
        <BookingForm isMobile={false} />
      </div>
    </div>

    {/* Mobile BookingForm below slideshow */}
    <div className="lg:hidden px-4 py-6 bg-gray-50">
      <MobileBookingForm />
    </div>
  </div>
);

export default Slideshow;
