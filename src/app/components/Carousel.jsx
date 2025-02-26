"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Carousel() {

  const router = useRouter("");
  const slides = [
    { title: 'Wifi-Zone', href: "/WifiZone", image: '/images/asset 19.png', description: 'Connect everywhere seamlessly with our Wifi-Zone solutions.' },
    { title: 'Home-Automation', href: "/SmartHome", image: '/images/asset 15.png', description: 'Experience smarter living with our home automation systems.' },
    { title: 'Video Door Phone', href: "/VideoDoor", image: '/images/asset 16.png', description: 'Secure your home with advanced video door phone systems.' },
    { title: 'IP BioMetrix', href: "/Biometric", image: '/images/asset 17.png', description: 'Keep security at your fingertips with IP BioMetrix.' },
    { title: 'Entertainment', href: "/IPTV", image: '/images/asset 12.png', description: 'Enjoy endless entertainment at lightning-fast speeds.' },
    { title: 'CCTV', href: "/CCTV", image: '/images/asset 18.png', description: 'Monitor and protect with state-of-the-art CCTV systems.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const visibleSlides = slides
    .slice(currentIndex, currentIndex + 3)
    .concat(slides.slice(0, Math.max(0, currentIndex + 3 - slides.length)));

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-800">Our Solutions</h2>
      <p className="mb-12 text-center text-lg text-gray-500">
        Explore a wide range of smart and secure solutions tailored to your needs.
      </p>

      {/* Carousel Wrapper */}
      <div className="relative">
        <div className="flex overflow-x-auto md:flex-nowrap md:space-x-6 space-x-4 md:px-0 px-4 py-4">
          {visibleSlides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg border border-gray-200 bg-white transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 px-4 py-4">
                    <p className="text-sm">{slide.description}</p>
                    <button className="mt-4 px-6 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-colors" onClick={() => {
                      router.push(slide.href)
                    }}>
                      Learn More
                    </button>
                  </div>
                </div>
                {/* Title */}
                <div className="mt-4 text-center text-lg font-semibold text-gray-800">{slide.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
