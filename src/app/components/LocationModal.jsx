"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LocationModal = ({ onClose }) => {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [mobile, setMobile] = useState("");

  // Area options based on city
  const areaOptions = {
    Delhi: ["Delhi"],
    Gurgaon: ["Gurgaon"],
    Haryana: [
      "Omaxe City",
      "Verdhaman",
      "Apex Gree",
      "TDI City",
      "Ushey Tower",
      "White Lilly",
      "Metro View",
      "Parker Residency",
      "Tulip Grand",
      "Max Heights",
      "Green Escape",
      "Jindal City",
      "Ansal",
      "Others",
    ],
  };

  // Handle city change and reset area selection
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setArea(""); // Reset area when city changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city && area && mobile) {
      // Navigate to the city-specific page
      router.push(`/plans/${city.toLowerCase()}`); // e.g., "/plans/gurgaon"

      onClose(); // Close the modal
    } else {
      alert("Please fill in all fields.");
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling on close
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 sm:w-3/4 lg:w-1/3 shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-center text-gray-900 dark:text-white">
          Select Your Location
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              City
            </label>
            <select
              value={city}
              onChange={handleCityChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Haryana">Sonipat</option>
            </select>
          </div>

          {/* Show Area dropdown only when city is selected */}
          {city && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Area
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">Select Area</option>
                {/* Map areas based on the selected city */}
                {areaOptions[city]?.map((areaOption, index) => (
                  <option key={index} value={areaOption}>
                    {areaOption}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your 10-digit mobile number"
              maxLength={10}
              minLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
            {mobile && mobile.length !== 10 && (
              <p className="text-red-500 text-xs mt-1">
                Mobile number must be exactly 10 digits.
              </p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationModal;
