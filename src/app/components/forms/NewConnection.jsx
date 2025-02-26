"use client";

import React, { useState, useRef } from "react";
import { useEffect } from "react";

export function NewConnection() {
  const [isFormVisible, setFormVisible] = useState(false);
  const formRef = useRef(null); 

  const [message, setMessage] = useState(""); // State to store the message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    serviceType: "",
    supportType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleForm = () => setFormVisible(!isFormVisible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const closeFormOnOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setFormVisible(false);
    }
  };

  const handleKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
    ]; // Allow navigation and editing keys

    if (
      !allowedKeys.includes(e.key) && // Allow editing/navigation keys
      (e.key < "0" || e.key > "9") // Block non-numeric keys
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener("mousedown", closeFormOnOutsideClick);
    } else {
      document.removeEventListener("mousedown", closeFormOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeFormOnOutsideClick);
    };
  }, [isFormVisible]);



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setMessage("Form submitted successfully!"); // Set the success message
  //       setFormData({
  //         name: "",
  //         email: "",
  //         mobile: "",
  //         city: "",
  //         serviceType: "",
  //         supportType: "",
  //       });
       
  //       setTimeout(()=>{
  //           setFormVisible(false)
  //       },1000)
       
  //     } else {
  //       setMessage("Error in submitting form."); // Set error message
  //       console.log('respppp', response);
  //     }
  //     setTimeout(() => {
  //       setMessage("");
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     setMessage("Error in submitting form.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submission

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          serviceType: "",
          supportType: "",
        });
        setTimeout(() => {
          setFormVisible(false);
        }, 1000);
      } else {
        setMessage("Error in submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error in submitting form.");
    } finally {
      setIsSubmitting(false); // End submission regardless of success/error
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };
  return (
    <div>
      {/* Sticky Button */}
      <button
        onClick={toggleForm}
        className="fixed bottom-4 right-4 bg-orange-600 text-white font-semibold px-3 py-1 rounded-full shadow-lg hover:bg-orange-700 transition-all z-50"
      >
        New Connection
      </button>

      {/* Popup Form */}
      {isFormVisible && (
        <div
          ref={formRef}
          className="fixed bottom-16 text-sm right-4 bg-white shadow-lg border border-gray-300 rounded-lg w-80 p-2 z-50"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-700">New Connection</h3>

         

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">Mobile</label>
              <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  maxLength="10" // Limit to 10 digits
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter 10-digit number"
                />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Service Type</option>
                <option value="Fiber To The Home">Fiber To The Home</option>
                <option value="High Speed Fibre Internet">High Speed Fibre Internet</option>
                <option value="IPTV, OTT">IPTV, OTT</option>
                <option value="Intercom & Telephony">Intercom & Telephony</option>
                
                <option value="Enterprise">Enterprise</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">Support Type</label>
              <select
                name="supportType"
                value={formData.supportType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Support Type</option>
                <option value="Technical Support">Technical Support</option>
                <option value="New Connection">New Connection</option>
                <option value="Billing & Recharge">Billing & Recharge</option>
              </select>
            </div>
            

             {/* Success or Error Message */}
          {message && (
            <div className="text-center text-green-600 font-semibold mb-4">
              <p>{message}</p>
            </div>
          )}

<button
          type="submit"
          disabled={isSubmitting} // Disable button during submission
          className={`w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:bg-orange-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
          </form>
        </div>
      )}
    </div>
  );
}
