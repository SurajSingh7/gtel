"use client";

import { useState, useEffect } from "react";

export default function TailwindAutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "/images/asset 1.jpeg",
      title: "Accelerate your business",
      subtitle:
        "Gigantic Enterprise solutions gives you the fastest fiber internet services",
    },
    {
      id: 2,
      image:
        "/images/asset 2.jpeg",
      title: "Reliable Connectivity",
      subtitle:
        "Experience uninterrupted, high-speed internet connectivity with us.",
    },
    {
      id: 3,
      image:
        "/images/asset 3.png",
      title: "Innovative Solutions",
      subtitle: "We provide tailored solutions for your unique business needs.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Slider visible on screens larger than mobile (sm: and up) */}
      {/* <div className="h-[95]"></div> */}
      <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[60vh] lg:h-[70vh] overflow-hidden mt-10 hidden md:block">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6 sm:px-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg mt-2">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-4 rounded-full hover:bg-opacity-75 transition"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-4 rounded-full hover:bg-opacity-75 transition"
        >
          &#8250;
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"} transition-all`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>

     
      <div className="lg:hidden mt-20 ">
      </div>
      
    </div>
  );
}
