"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Plan } from "@/app/components/forms/Plan";

const PlanPage = () => {
  const params = useParams();
  const [location, setLocation] = useState("");
  const formRef = useRef(null);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const [isChannelsModalVisible, setChannelsModalVisible] = useState(false);
  const [channels, setChannels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredChannels, setFilteredChannels] = useState(channels); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
  });

  const allPlans = {
    delhi: [
      {
        id: 1,name: "₹425",speed: "50 Mbps",data: "Unlimited", calls: "Not Available",ott: "Not Available","Refundable Security Deposite": " 1K",
rental: "₹1200",
        channelkey: "425",
      },
      {
        id: 2,
        name: "₹499",
        speed: "35 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "165+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Zee5, Shemaroome, Stage",
        channels: "165+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹1497",
        channelkey: "499",
      },
      {
        id: 3,
        name: "₹636",
        speed: "75 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Not Available",
        channels: "200+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹1908",
        channelkey: "636",
      },
      {
        id: 4,
        name: "₹699",
        speed: "100 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Zee5, Shemaroome, Stage",
        channels: "200+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2097",
        channelkey: "699",
      },
      {
        id: 5,
        name: "₹799",
        speed: "150 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Sonyliv Premium, Zee5Shamaroome, Stage, Alt-Balaji, Hungama Play, Hungama Music",
        channels: "200+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2397",
        channelkey: "636",
      },
      {
        id: 6,
        name: "₹999",
        channelkey: "999",
        speed: "200 Mbps",
        "On Demand IPTV/OTT": "225+ HD Channels",
        data: "Unlimited",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "225+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2997",
      },
      {
        id: 7,
        name: "₹1199",
        channelkey: "999",
        speed: "300 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "225+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "225+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹3597",
      },
      {
        id: 8,
        name: "₹1499",
        channelkey: "1499",
        speed: "400 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "245+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "245+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹4497",
      },
      {
        id: 9,
        name: "₹2499",
        channelkey: "1499",
        speed: "500 Mbps",
        "On Demand IPTV/OTT": "245+ HD Channels",
        data: "Unlimited",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "245+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹7497",
      },
      {
        id: 10,
        name: "₹3599",
        channelkey: "1499",
        speed: "UPTO 1 Gbps",
        "On Demand IPTV/OTT": "245+ HD Channels",
        data: "Unlimited",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "245+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹10797",
      },
    ],
    gurgaon: [
      {
        id: 1,name: "₹425",speed: "50 Mbps",data: "Unlimited", calls: "Not Available",ott: "Not Available","Refundable Security Deposite": " 1K",
rental: "₹1200",
        channelkey: "425",
      },
      {
        id: 2,
        name: "₹499",
        speed: "35 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "165+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Zee5, Shemaroome, Stage",
        channels: "165+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹1497",
        channelkey: "499",
      },
      {
        id: 3,
        name: "₹636",
        speed: "75 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Not Available",
        channels: "200+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹1908",
        channelkey: "636",
      },
      {
        id: 4,
        name: "₹699",
        speed: "100 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Zee5, Shemaroome, Stage",
        channels: "200+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2097",
        channelkey: "699",
      },
      {
        id: 5,
        name: "₹799",
        speed: "150 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Sonyliv Premium, Zee5Shamaroome, Stage, Alt-Balaji, Hungama Play, Hungama Music",
        channels: "200+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2397",
        channelkey: "636",
      },
      {
        id: 6,
        name: "₹999",
        channelkey: "999",
        speed: "200 Mbps",
        "On Demand IPTV/OTT": "225+ HD Channels",
        data: "Unlimited",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "225+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2997",
      },
      {
        id: 7,
        name: "₹1199",
        channelkey: "999",
        speed: "300 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "225+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "225+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹3597",
      },
    ],
    haryana: [
      {
        id: 1,name: "₹425",speed: "50 Mbps",data: "Unlimited", calls: "Not Available",ott: "Not Available","Refundable Security Deposite": " 1K",
rental: "₹1200",
        channelkey: "425",
      },
      {
        id: 2,
        name: "₹499",
        speed: "35 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "165+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Zee5, Shemaroome, Stage",
        channels: "165+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹1497",
        channelkey: "499",
      },
      {
        id: 3,
        name: "₹636",
        speed: "75 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Not Available",
        channels: "200+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹1908",
        channelkey: "636",
      },
      {
        id: 4,
        name: "₹699",
        speed: "100 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Zee5, Shemaroome, Stage",
        channels: "200+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2097",
        channelkey: "699",
      },
      {
        id: 5,
        name: "₹799",
        speed: "150 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "200+ SD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Sonyliv Premium, Zee5Shamaroome, Stage, Alt-Balaji, Hungama Play, Hungama Music",
        channels: "200+ SD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2397",
        channelkey: "636",
      },
      {
        id: 6,
        name: "₹999",
        channelkey: "999",
        speed: "200 Mbps",
        "On Demand IPTV/OTT": "225+ HD Channels",
        data: "Unlimited",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "225+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹2997",
      },
      {
        id: 7,
        name: "₹1199",
        channelkey: "999",
        speed: "300 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "225+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "225+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹3597",
      },
      {
        id: 8,
        name: "₹1499",
        channelkey: "1499",
        speed: "400 Mbps",
        data: "Unlimited",
        "On Demand IPTV/OTT": "245+ HD Channels",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "245+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹4497",
      },
      {
        id: 9,
        name: "₹2499",
        channelkey: "1499",
        speed: "500 Mbps",
        "On Demand IPTV/OTT": "245+ HD Channels",
        data: "Unlimited",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "245+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹7497",
      },
      {
        id: 10,
        name: "₹3599",
        channelkey: "1499",
        speed: "UPTO 1 Gbps",
        "On Demand IPTV/OTT": "245+ HD Channels",
        data: "Unlimited",
        calls: "Local & STD Calls Unlimited*",
        ott: "Amazon Lite*, Hotstar Super, Sonyliv Premium, Zee5",
        channels: "245+ HD Channels",
        "Refundable Security Deposite": "NIL / 2K",
        rental: "₹10797",
      },
    ],
  };

  const toggleForm = () => setFormVisible(!isFormVisible);
  const toggleChannelsModal = () =>
    setChannelsModalVisible(!isChannelsModalVisible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Filter channels based on search query
    setFilteredChannels(
      channels.filter((channel) =>
        channel.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, channels]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/planform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          message: "",
        });
      } else {
        setMessage("Error in submitting form.");
      }
      setTimeout(() => {
        setMessage("");
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error in submitting form.");
    }
  };

  const closeFormOnOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setFormVisible(false);
    }
  };

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener("click", closeFormOnOutsideClick);
    } else {
      document.removeEventListener("click", closeFormOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeFormOnOutsideClick);
    };
  }, [isFormVisible]);

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
    if (params?.location) {
      setLocation(params.location);
      setPlans(allPlans[params.location.toLowerCase()] || []);
    }
  }, [params]);

  const handleViewChannels = async (channelkey) => {
    try {
      const response = await fetch(`/channels.json`);
      const data = await response.json();
      const planChannels = data[channelkey] || [];
      setChannels(planChannels);
      toggleChannelsModal();
    } catch (error) {
      console.error("Error fetching channels:", error);
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setFormData({
      ...formData,
      planDetails: `Plan: ${plan.name}, Speed: ${plan.speed}, Data: ${plan.data}`,
    });
    toggleForm();
  };

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="h-5"></div>
    <div className="bg-gray-100 min-h-screen mt-32 relative">
      <header className=" text-black py-6 ">
        <h1 className="text-center text-3xl font-bold capitalize">
          Plans for {location}
        </h1>
      </header>
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {plans.length > 0 ? (
            plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative transform transition duration-300 hover:scale-105"
              >
                <div className="h-20"></div>
                <div className="relative h-40 bg-gray-200">
                  <img
                    src={`/images/planimage1.jpg`}
                    alt="Plan"
                    className="object-cover h-full w-full"
                  />
                </div>

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-center rounded-b-full w-24 h-12 flex items-center justify-center text-lg font-semibold">
                  {plan.name}
                </div>

                <div className="p-6">
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>
                      <strong>Speed:</strong> {plan.speed}
                    </li>
                    <li>
                      <strong>Data:</strong> {plan.data}
                    </li>
                    <li>
                      <strong>Calls:</strong> {plan.calls}
                    </li>
                    <li>
                      <strong>On Demand IPTV/OTT : </strong>{plan["On Demand IPTV/OTT"]}
                    </li>
                    <li>
                      <strong>OTT Apps:</strong> {plan.ott}
                    </li>
                    <li>
                      <strong>Refundable Security Deposite: </strong> {plan["Refundable Security Deposite"]}
                    </li>
                    <li>
                      <strong>Rental:</strong> {plan.rental}
                    </li>
                   
                  </ul>
                  {/* <button
                    onClick={() => handlePlanSelect(plan)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold mt-6 py-3 px-6 rounded-full block mx-auto shadow-lg"
                  >
                    <Plan/>
                  </button> */}
               
                  <Plan className=""/>
                   
                    

                  <button
                    onClick={() => handleViewChannels(plan.channelkey)}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold mt-4 py-2 px-4 rounded-full block mx-auto shadow-lg"
                  >
                    View Channels
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">
              No plans available for this location.
            </div>
          )}
        </div>
      </main>
      <br />

      <div className="m-16 mx-center py-2">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
  <h3 className="text-lg font-bold mb-4">Terms &amp; Conditions:</h3>
  <ul className="list-disc list-inside space-y-2">
    <li>Taxes extra as applicable.</li>
    <li>All Plans are on a prepaid basis.</li>
    <li>Download / Upload speed indicated is Speed up to our ISP node.</li>
    <li>Prices are subject to change without prior notice.</li>
    <li>All the OTT Apps and their activation are Subject to Availability.</li>
    <li>
      <strong>Amazon Lite*</strong> <strong> subscription is available only on 3 Months,
      6 Months, and 12 Months of Internet package.</strong>
    </li>
    <li>
      User has to redeem the Amazon code as Lite only, and if the code has been
      redeemed as Prime, then Gigantic would not be able to help for any kind of
      issue in this regard for the current subscription or in the future unless
      it is redeemed as Amazon Lite.
    </li>
    <li>
      Gigantic has no control over OTT Apps; hence the OTT subscriptions shall
      be governed by the policies of app owners.
    </li>
    <li>
      All New Installations are required to Opt for at least 3 Months of Plan
      for the first time.
    </li>
    <li>IPTV Set Top Box is needed to access the Live Channels.</li>
    <li>
      Any dispute shall be subject to the jurisdiction of the courts at Delhi.
    </li>
    <li>
      For detailed Terms &amp; Conditions, visit{' '}
      <Link
        href="/Terms"
        
       
        className="text-blue-600 hover:underline"
      >
        https://www.gtel.in/terms-conditions/
      </Link>
    </li>
  </ul>
</div>
</div>


{isChannelsModalVisible && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl p-6 relative overflow-hidden">
      <button
        onClick={toggleChannelsModal}
        className="absolute top-2 right-2 text-red-600 font-bold text-lg hover:bg-red-100 rounded-full p-2 transition"
      >
        X
      </button>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Channel List */}
      <div className="max-h-80 overflow-y-auto">
        <ul className="space-y-2">
          {filteredChannels.length > 0 ? (
            filteredChannels.map((channel) => (
              <li
                key={channel.id}
                className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer transition"
              >
                {channel.id} {channel.name} ({channel.number})
              </li>
            ))
          ) : (
            <li className="text-gray-600">No channels found</li>
          )}
        </ul>
      </div>
    </div>
  </div>
)}


      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={formRef}
            className="bg-white shadow-lg border border-gray-300 rounded-lg w-full max-w-md p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-700">
              {selectedPlan?.name}
            </h3>
            {message && (
              <div className="text-center text-green-600 font-semibold mb-4">
                {message}
              </div>
            )}
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
                  maxLength="10" // Limit to 10 digits
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
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default PlanPage;
