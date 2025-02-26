"use client";

import React from "react";

export default function AboutUs() {
  return (
    <>
    <div className='h-10'></div>
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-orange-600 sm:text-4xl mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto">
          The Best Broadband Internet Provider Company from Internet bandwidth to Internet telephony to Broadband Services and more, we offer such related services to both corporate as well as domestic users. Being a customer service-oriented organization, we always strive to build a long-term relationship with our clients by providing economical and best-in-class services in our order of business.
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Section 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our History</h3>
            <p className="text-gray-600">
              Gigantic Infotel Pvt. Ltd was founded in 2002 and currently working under Class “B” ISP of Delhi / NCR. We are one of the fastest-growing fixed wireless broadband service providers. Our vision is to deliver High-Speed Internet & Internet Solutions to businesses and the mass.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We aim to provide high-speed internet and solutions for businesses and individuals. We are committed to offering cutting-edge technology and exceptional service to meet the needs of our customers. 
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <p className="text-gray-600">
              We are a leading Internet Service Provider, system integrator of network security, and provide adaptable Integrated Network Solutions. With our innovative approach, we help businesses improve communication and accelerate their growth.
            </p>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            We all scour the web for hours and hours, finding and analyzing different things. You want to search tons of pages every day. But what if your internet connectivity issue becomes trouble? Gigantic, as our name suggests, offers complete Broadband, Managed, and Enterprise services. Sounds like magic, eh? But, we know, we are grabbing your attention to know more about us .
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We are proud to spread our wings in many states and also to provide our Internet services to operators as well as domestic users. Our focus is to enable an efficient infrastructure that comes with advanced and cutting-edge technology. Once you use our services, you will rely not only on our performance but consider it a wise investment.
          </p>
          <p className="text-lg text-gray-700">
            Our expertise in the design, integration, and management of communications infrastructure makes us a handpicked and singled-out partner for businesses.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/contact-us"
            className="bg-orange-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-orange-700 transition-all"
          >
            Get in Touch with Us
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
