import React, { useState } from "react";
import CustomButton from "../../utils/CustomButton";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Flights");

  const tabs = ["Flights", "Hotels", "Car Rental"];

  return (
    <div className="relative w-full h-screen">
      <img
        src="https://res.cloudinary.com/dunn8qryc/image/upload/v1775166229/d130f38725de9a0c0e85b35f61d91b4d99f373fb_qjzmi4.jpg"
        alt="Costa Rica"
        className="w-full md:h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/20"></div>
      <div className="absolute inset-0 flex flex-col md:justify-center top-28 md:top-0 text-white container">
        <div className="mb-4">
          <span className="bg-green-800/70 px-4 py-1 rounded-full text-sm">
            ● Costa Rica's #1 Travel Concierge
          </span>
        </div>
        <h1 className="text-4xl md:text-[60px] lg:text-[78px] font-bold leading-tight max-w-xl">
          Discover <br /> <span className="text-green-400">Authentic</span>
          <br />
          Costa Rica
        </h1>
        <p className="mt-4 max-w-md text-gray-200">
          From rainforests to pristine beaches—let your concierge curate your
          ultimate escape.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap">
          {/* <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600">
            ✨ Plan My Adventure
          </button> */}
          <CustomButton text={' ✨ Plan My Adventure'} border={'border'} padding={'px-6 py-3'} hover={'bg-white/10'} rounded={'rounded-lg'}></CustomButton>
          <CustomButton text={'🌿 Browse Experiences'} border={'border'} padding={'px-6 py-3'} hover={'bg-white/10'} rounded={'rounded-lg'}></CustomButton>
        </div>
      </div>
      <div className="absolute md:bottom-[-60px] left-1/2 transform -translate-x-1/2 w-full md:px-4">
        <div className="max-w-5xl mx-auto bg-white md:rounded-xl shadow-lg p-6">
          <div className="flex gap-6 border-b mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-green-600 text-primary"
                    : "text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Origin (SFO, San Francisco)"
              className="bg-gray-100 p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Destination (SJO, San José)"
              className="bg-gray-100 p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Dates (Oct 12 - Oct 24)"
              className="bg-gray-100 p-3 rounded-lg outline-none"
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="2 persons"
                className="bg-gray-100 p-3 rounded-lg outline-none w-full"
              />
              <button className="bg-primary text-white px-5 rounded-lg hover:bg-green-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
