import React from "react";
import DetailsFlightCard from "../utils/Flights/DetailsFlightCard";
import FlightStep from "../utils/Flights/FlightStep";
import { BiBox, BiBriefcase, BiCheck, BiLock } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsHeadphones,
  BsShieldCheck,
} from "react-icons/bs";
import FlightDetailsDynamicHeader from "./FlightDetailsDynamicHeader";
import { flightSteps } from "./FlightStep";
import { NavLink } from "react-router";

const FlightDetails = () => {
  return (
    <div className="min-h-screen bg-[#F7F2E9] ">
      <FlightDetailsDynamicHeader
        title="Flight Details"
        subtitle="Review your selected flight before proceeding"
        currentStep={2}
        steps={flightSteps}
      />
      <main className="container px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 dynamic-paddingUP-Down flightCarHotelContainer ">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#2D5A43] text-white rounded-2xl p-6 flex justify-between items-center">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-bold">
                UA
              </div>
              <div>
                <h3 className="font-bold">United Airlines</h3>
                <p className="text-xs text-gray-300">
                  SFO 8:15 AM → SJO 2:45 PM · 6h 30m · Nonstop
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Boeing 737-800 · Premium Economy
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">$856</p>
              <button className="text-[10px] underline text-gray-300">
                Change flight
              </button>
            </div>
          </div>

          <DetailsFlightCard
            title="Outbound Flight"
            number="1"
            time="8:15 AM"
            arrivalTime="2:45 PM"
            date="May 10, 2026"
          />

          <DetailsFlightCard
            title="Return Flight"
            number="2"
            time="10:00 AM"
            arrivalTime="4:20 PM"
            date="May 17, 2026"
          />
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#2D4A3E] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                3
              </span>
              <h3 className="text-[#2D4A3E] font-bold text-lg">
                Fare Rules & Flexibility
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <BiBox
                icon={<BiCheck className="text-green-600" />}
                label="Free Cancellation"
                sub="Up to 24 hrs before"
                active
              />
              <BiBox
                icon={<div className="rotate-45 font-bold">↺</div>}
                label="Date Change"
                sub="$75 fee applies"
              />
              <BiBox
                icon={<BiBriefcase size={20} />}
                label="1 Bag Included"
                sub="+$45 for 2nd bag"
              />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-6">
            <h3 className="text-[#2D4A3E] font-bold text-xl mb-6">
              Price Breakdown
            </h3>
            <div className="space-y-4 mb-6 border-b pb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Premium Economy × 2</span>
                <span className="font-bold text-gray-800">$856</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Taxes & fees</span>
                <span className="font-bold text-gray-800">$86</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-[#2D4A3E]">Total</span>
              <span className="text-2xl font-bold text-[#2D4A3E]">$942</span>
            </div>

            <NavLink to='/passenger-details'>
              <button className="w-full bg-[#215E41] hover:bg-[#1A4A33] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-4 transition-all">
                <BsArrowRight size={18} /> Continue to Passengers
              </button>
            </NavLink>
            <button className="w-full border border-[#215E41] text-[#215E41] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              <BsArrowLeft size={18} /> Back to Flights
            </button>

            <div className="mt-8 flex justify-center gap-4 text-[10px] text-gray-400 font-medium">
              <span className="flex items-center gap-1">
                <BiLock size={12} /> Secure
              </span>
              <span className="flex items-center gap-1">
                <BsShieldCheck size={12} /> Protected
              </span>
              <span className="flex items-center gap-1">
                <BsHeadphones size={12} /> 24/7 Support
              </span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default FlightDetails;
