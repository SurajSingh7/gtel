// "use client";

// import { NewConnection } from "@/app/components/forms/NewConnection";
// import { useState } from "react";

// export default function Contact() {



//   return (
//     <>
//     <div className="h-40"></div>
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
//       <div className="container max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Contact Us
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h2 className="text-lg font-bold text-gray-700 mb-4">Contact Info</h2>
//             <p className="text-gray-600">
//               Gigantic Infotel Pvt. Ltd. <br />
//               508, 5th Floor, Usha Kiran Building, Azadpur, Delhi – 110033
//             </p>
//             <p className="mt-4 text-gray-600">
//               <strong>Phone:</strong> +91 8800069690 <br />
//               <strong>Email:</strong> sales@gtel.in, support@gtel.in
//             </p>
//           </div>
           
//         </div>
//       </div>
      
//     </div>
//     <div className="h-10"></div>
//     </>
//   );
// }

































// // "use client";

// // import { useState } from "react";

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     mobile: "",
// //     type: "Technical Support",
// //     subject: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name === "mobile") {
     
// //       if (!/^\d{0,10}$/.test(value)) {
// //         return; 
// //       }
// //     }

// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

  

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setSuccessMessage("");
// //     setErrorMessage("");

// //     // Client-side validation
// //     const { name, email, mobile, subject, message } = formData;

// //     if (!name || !email || !mobile || !subject || !message) {
// //       setErrorMessage("All fields are required.");
// //       setLoading(false);
// //       return;
// //     }

// //     if (!/^\d{10}$/.test(mobile)) {
// //       setErrorMessage("Mobile number must be exactly 10 digits.");
// //       setLoading(false);
      
// //     }

// //     try {
// //       const res = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (res.ok) {
// //         setSuccessMessage("Thank you! Your message has been sent successfully.");
// //         setFormData({
// //           name: "",
// //           email: "",
// //           mobile: "",
// //           type: "Technical Support",
// //           subject: "",
// //           message: "",
          
// //         });
// //         setTimeout(()=>{
// //           setSuccessMessage("")
// //         },2000)
        
// //       } else {
// //         throw new Error("Something went wrong. Please try again later.");
// //       }
// //     } catch (error) {
// //       setErrorMessage(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //     <div className="h-40"></div>
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
// //       <div className="container max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
// //         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
// //           Contact Us
// //         </h1>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div>
// //             <h2 className="text-lg font-bold text-gray-700 mb-4">Contact Info</h2>
// //             <p className="text-gray-600">
// //               Gigantic Infotel Pvt. Ltd. <br />
// //               508, 5th Floor, Usha Kiran Building, Azadpur, Delhi – 110033
// //             </p>
// //             <p className="mt-4 text-gray-600">
// //               <strong>Phone:</strong> +91 8800069690 <br />
// //               <strong>Email:</strong> sales@gtel.in, support@gtel.in
// //             </p>
// //           </div>
// //           <form
// //             onSubmit={handleSubmit}
// //             className="bg-gray-50 p-6 rounded-lg shadow-md"
// //           >
// //             <div className="mb-4">
// //               <label htmlFor="name" className="block font-bold text-gray-700">
// //                 Your Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="email" className="block font-bold text-gray-700">
// //                 Your Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="phone" className="block font-bold text-gray-700">
// //                 Mobile Number
// //               </label>
// //               <input
// //                 type="tel"
// //                 id="phone"
// //                 name="mobile"
// //                 value={formData.mobile}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="type" className="block font-bold text-gray-700">
// //                 Select Type
// //               </label>
// //               <select
// //                 id="type"
// //                 name="type"
// //                 value={formData.type}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
// //               >
// //                 <option value="Technical Support">Technical Support</option>
// //                 <option value="Sales Inquiry">Sales Inquiry</option>
// //                 <option value="General Query">General Query</option>
// //               </select>
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="subject" className="block font-bold text-gray-700">
// //                 Subject
// //               </label>
// //               <input
// //                 type="text"
// //                 id="subject"
// //                 name="subject"
// //                 value={formData.subject}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="message" className="block font-bold text-gray-700">
// //                 Your Message
// //               </label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 rows="4"
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
// //                 required
// //               ></textarea>
// //             </div>
// //             {successMessage && (
// //               <p className="text-green-500 mb-4">{successMessage}</p>
// //             )}
// //             {errorMessage && (
// //               <p className="text-red-500 mb-4">{errorMessage}</p>
// //             )}
// //             <button
// //               type="submit"
// //               className={`w-full px-4 py-2 text-white rounded-lg ${
// //                 loading
// //                   ? "bg-gray-400 cursor-not-allowed"
// //                   : "bg-orange-500 hover:bg-orange-600"
// //               }`}
// //               disabled={loading}
// //             >
// //               {loading ? "Submitting..." : "Submit"}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
      
// //     </div>
// //     <div className="h-10"></div>
// //     </>
// //   );
// // }

"use client";

import React, { useState, useRef } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    serviceType: "",
    supportType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleKeyDown = (e) => {
    const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
    if (!allowedKeys.includes(e.key) && (e.key < "0" || e.key > "9")) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      } else {
        setMessage("Error in submitting form.");
      }
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error in submitting form.");
    }
  };

  return (
    <>
      <div className="h-40"></div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-4">Contact Info</h2>
              <p className="text-gray-600">
                Gigantic Infotel Pvt. Ltd. <br />
                508, 5th Floor, Usha Kiran Building, Azadpur, Delhi – 110033
              </p>
              <p className="mt-4 text-gray-600">
                <strong>Phone:</strong> +91 8800069690 <br />
                <strong>Email:</strong> sales@gtel.in, support@gtel.in
              </p>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className="bg-white shadow-lg border border-gray-300 rounded-lg p-4"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-700">
                
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Name
                  </label>
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
                  <label className="block text-sm font-semibold text-gray-600">
                    Email
                  </label>
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
                  <label className="block text-sm font-semibold text-gray-600">
                    Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    maxLength="10"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter 10-digit number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    City
                  </label>
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
                  <label className="block text-sm font-semibold text-gray-600">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Service Type</option>
                    <option value="Fiber To The Home">Fiber To The Home</option>
                    <option value="High Speed Fibre Internet">
                      High Speed Fibre Internet
                    </option>
                    <option value="IPTV, OTT">IPTV, OTT</option>
                    <option value="Intercom & Telephony">
                      Intercom & Telephony
                    </option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Support Type
                  </label>
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

                {message && (
                  <div className="text-center text-green-600 font-semibold mb-4">
                    <p>{message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </>
  );
}
