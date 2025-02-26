"use client"
import { useState } from "react";
import LocationModal from "./LocationModal";

const Content1 = () => {

  const [showModal, setShowModal] = useState(false);
  return (
    
    <>
    <div className="h-[2]"></div>
  <header className="bg-gradient-to-r from-orange-400 via-amber-600 to-orange-300 text-white h-auto py-6">
    <div className="flex flex-wrap justify-between items-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <span className="text-center md:text-left text-2xl mb-4 md:mb-0">
          Check out the best plans available in your locality. We are sure
          you will be pleased to see the offers scaling far beyond your
          expectations!
        </span>
        
        <button className="mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"onClick={() => setShowModal(true)}>
          View Plans
        </button>
      </div>
    </div>
    {showModal && <LocationModal onClose={() => setShowModal(false)} />}
  </header>
</>

  );
};

export default Content1;
