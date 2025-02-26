// components/FTTHSection.js
import React from 'react';

const FTTHSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-24">
      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Fiber To The Home
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Fiber to the Home (FTTH) is a setup of optical fiber directly from a
          central point to any individual buildings like residences, apartment
          buildings, or businesses. It provides unmatched ultra-speed Internet
          access for its users.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Now browsing, downloading, and uploading have changed the way we use
          the internet with Gigantic FTTH solutions. It comes with a comprehensive
          solution for all your data and voice needs, offering an unparalleled
          experience for accessing information, entertainment, and more—without
          compromises on speed and cost.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our daily activities like HD video streaming, heavy file downloads, and
          uploads will be faster and better than ever. Whether you are a video lover,
          a serious gamer, or someone who simply loves to surf the net, FTTH is the
          best solution for you.
        </p>
      </section>

      <section className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-blue-600">Why Choose FTTH?</h3>
        <ul className="mt-6 space-y-4 text-lg">
          <li>✔ High-Speed Internet without buffering</li>
          <li>✔ Seamless HD Video Streaming</li>
          <li>✔ Faster Uploads and Downloads</li>
          <li>✔ Reliable Connectivity for Homes and Businesses</li>
          <li>✔ Cost-Effective Solution for Modern Needs</li>
        </ul>
      </section>
    </div>
  );
};

export default FTTHSection;
