
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LocationModal from "./LocationModal";
import AnnouncementAnimation from "./AnnouncementAnimation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);  // Sticky when scrolling down 50px
      } else {
        setIsSticky(false);  // Reset to initial state
      }

      // Check if scrolling down or up
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsSticky(true);  // Keep header sticky
      } else {
        // Scrolling up
        setIsSticky(false);  // Hide the header
      }

      setLastScrollY(window.scrollY);  // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${
        isSticky
          ? "bg-gray-900 bg-opacity-80 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-r from-orange-500 via-amber-600 to-orange-500"
      } text-white fixed top-0 left-0 w-full z-50 transition-all ease-in-out duration-300`}
    >
      <AnnouncementAnimation/>

      {/* Top Section - Contact Info, My Account, and Payment Links */}
      {/* <div className="flex flex-col md:flex-row items-center md:justify-between space-y-2 md:space-y-0 bg-gray-700 py-2 px-4"> */}
        <div
      className={`flex flex-col md:flex-row items-center md:justify-between space-y-2 md:space-y-0 bg-gray-700 py-2 px-4 transition-transform ${
        isSticky ? "hidden" : "flex"
      }`} >
        
       
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base">
          <div className="flex items-center">
            📞 <span className="ml-1">+91 8860606969</span>
          </div>
          <div className="flex items-center">
            📧 <span className="ml-1">sales@gtel.in</span>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center md:hidden bg-orange-500 hover:bg-orange-600 text-white px-1 rounded-sm transition"
          >
            Our Plans
          </button>
        </div>

        {/* My Account and Payment Links */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setShowModal(true)}
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md transition"
          >
            Our Plans
          </button>
          <a
            href="https://selfcare.gtel.in/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-blue-500 transition"
          >
            📘 My Account
          </a>
          <a
            href="https://selfcare.gtel.in/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-blue-400 transition"
          >
            🪙 Payment & Utilities
          </a>
        </div>
      </div>

      {/* Main Section - Logo and Navigation */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo (1).png"
            alt="Gigantic Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className={`hidden md:flex space-x-6 text-sm lg:text-base`}>
          <Link href="/" className="hover:text-yellow-300 transition">
            HOME
          </Link>
          <Link href="/About" className="hover:text-yellow-300 transition">
            ABOUT US
          </Link>


            {/* SERVICES Dropdown */}
            <div
              className="group relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <Link
                href="#"
                className="text-white px-4 py-2 rounded-lg hover:text-yellow-200 transition duration-300 hover:bg-gradient-to-r from-orange-500 to-amber-600"
              >
                SERVICES
              </Link>
              {showServicesDropdown && (
                <div className="dropdown-content absolute bg-transparent text-gray-800 p-4 rounded-lg w-60 -mt-2 mx-auto transition-transform duration-300 transform">
                  <div className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 p-2 rounded-lg mt-5">
                    <Link
                      href="/FTTH"
                      onClick={() => setShowServicesDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      Fiber to the Home
                    </Link>
                    <div className="border-t border-gray-300 my-2"></div>
                    <Link
                      href="/HighSpeed"
                      onClick={() => setShowServicesDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      High Speed Fiber Internet
                    </Link>
                    <div className="border-t border-gray-300 my-2"></div>
                    <Link
                      href="/Intercom"
                      onClick={() => setShowServicesDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      Intercom & Telephony
                    </Link>
                  </div>
                </div>
              )}
            </div>

             {/* SOLUTIONS Dropdown */}
            <div
              className="group relative"
              onMouseEnter={() => setShowSolutionsDropdown(true)}
              onMouseLeave={() => setShowSolutionsDropdown(false)}
            >
              <Link
                href="#"
                className="text-white -mt-2 px-4 py-2 rounded-lg hover:text-yellow-300 transition duration-300 hover:bg-gradient-to-r from-orange-500 to-amber-600"
              >
                SOLUTIONS
              </Link>
              {showSolutionsDropdown && (
                <div className="dropdown-content absolute bg-transparent text-gray-800 p-4 rounded-lg w-60 -mt-2 mx-auto transition-transform duration-300 transform">
                  <div className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 p-2 rounded-lg mt-5">
                    <Link
                      href="/CCTV"
                      onClick={() => setShowSolutionsDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      CCTV
                    </Link>
                    <div className="border-t border-gray-300 my-2"></div>
                    <Link
                      href="/AutomaticBoomBarier"
                      onClick={() => setShowSolutionsDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      Automatic Boom Barrier
                    </Link>
                    <div className="border-t border-gray-300 my-2"></div>
                    <Link
                      href="/VideoDoor"
                      onClick={() => setShowSolutionsDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      Video Door Phone
                    </Link>
                    <div className="border-t border-gray-300 my-2"></div>
                    <Link
                      href="/SmartHome"
                      onClick={() => setShowSolutionsDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      Smart Home Automation
                    </Link>
                    <div className="border-t border-gray-300 my-2"></div>
                    <Link
                      href="Biometric"
                      onClick={() => setShowSolutionsDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      IP Biometric System with Access Control
                    </Link>
                    <div className="border-t border-gray-300 my-2"></div>
                    <Link
                      href="/WifiZone"
                      onClick={() => setShowSolutionsDropdown(false)}
                      className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition duration-200"
                    >
                      Wi-Fi Zone & Hotspot
                    </Link>
                  </div>
                </div>
              )}
            </div>

          <Link href="/IPTV" className="hover:text-yellow-300 transition">
            INTERNET TV/IPTV
          </Link>
          <Link href="/enterprise" className="hover:text-yellow-300 transition">
            ENTERPRISES
          </Link>
          <Link href="/contact-us" className="hover:text-yellow-300 transition">
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition"
          >
            {showMenu ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <nav className="space-y-4">
            <Link href="/" onClick={() => setShowMenu(false)} className="block py-2 hover:text-orange-300">
              HOME
            </Link>
            <Link href="/About" onClick={() => setShowMenu(false)}  className="block py-2 hover:text-orange-300">
              ABOUT US
            </Link>
            {/* Services Dropdown */}
            <div
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              className="w-full text-left py-2 hover:text-orange-300 flex justify-between items-center"
            >
              SERVICES
              <span>{showServicesDropdown ? "-" : "+"}</span>
            </div>
            {showServicesDropdown && (
              <div className="pl-4 space-y-2">
                <Link href="/FTTH" onClick={() => setShowMenu(false)}  className="block py-2 hover:text-orange-300">
                  Fiber to the Home
                </Link>
                <Link
                  href="/HighSpeed" onClick={() => setShowMenu(false)} 
                  className="block py-2 hover:text-orange-300"
                >
                  High Speed Fiber Internet
                </Link>
                <Link
                  href="/Intercom" onClick={() => setShowMenu(false)} 
                  className="block py-2 hover:text-orange-300"
                >
                  Intercom & Telephony
                </Link>
              </div>
            )}
            {/* Solutions Dropdown */}
            <div
              onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
              className="w-full text-left py-2 hover:text-orange-300 flex justify-between items-center"
            >
              SOLUTIONS
              <span>{showSolutionsDropdown ? "-" : "+"}</span>
            </div>
            {showSolutionsDropdown && (
              <div className="pl-4 space-y-2">
                
                
                <Link href="/CCTV" onClick={() => setShowMenu(false)}  className="block py-2 hover:text-orange-300">
                  CCTV
                </Link>
                <Link
                  href="/AutomaticBoomBarier" onClick={() => setShowMenu(false)} 
                  className="block py-2 hover:text-orange-300"
                >
                  Automatic Boom Barrier
                </Link>
                <Link
                  href="/VideoDoor" onClick={() => setShowMenu(false)} 
                  className="block py-2 hover:text-orange-300"
                >
                  Video Door Phone
                </Link>


                <Link href="/SmartHome" onClick={() => setShowMenu(false)}  className="block py-2 hover:text-orange-300">
                Smart Home Automation
                </Link>
                <Link
                  href="/Biometric" onClick={() => setShowMenu(false)} 
                  className="block py-2 hover:text-orange-300"
                >
                   IP Biometric System with Access Control
                </Link>
                <Link
                  href="/WifiZone" onClick={() => setShowMenu(false)} 
                  className="block py-2 hover:text-orange-300"
                >
                  Wi-Fi Zone & Hotspot
                </Link>

              </div>

            )}
            <Link href="/IPTV" onClick={() => setShowMenu(false)}  className="block py-2 hover:text-orange-300">
              INTERNET TV/IPTV
            </Link>
            <Link href="/enterprise" onClick={() => setShowMenu(false)}  className="block py-2 hover:text-orange-300">
              ENTERPRISES
            </Link>
            <Link href="/contact-us" onClick={() => setShowMenu(false)}  className="block py-2 hover:text-orange-300">
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
           {/* Location Modal */}
          {showModal && <LocationModal onClose={() => setShowModal(false)} />}
    </header>
  );
};

export default Header;
