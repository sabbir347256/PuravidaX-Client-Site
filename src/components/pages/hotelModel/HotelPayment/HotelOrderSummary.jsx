import React from "react";
import { BiLock, BiLockAlt } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";

const HotelOrderSummary = () => {
  return (
    <div className="w-full lg:w-[380px]">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 sticky top-8">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        <div className="space-y-4 mb-6">
          <span className="text-gray-500">🏨 Nayara Tented Camp</span>
          {/* <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">✈️ Premium Economy × 2</span>
            <span className="font-bold">$856</span>
          </div> */}
          <div className="flex justify-between items-center text-sm border-t pt-4">
            <span className="text-gray-500 text-xs">Jungle Luxury Tent × 7 nights</span>
            <span className="font-bold text-xs">$84</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 text-xs">Daily Breakfast</span>
            <span className="font-bold text-xs">$86</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-4 mb-8">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-2xl text-emerald-700">$1,026</span>
        </div>
        <div className="space-y-3">
          <button
            type="submit"
            className="w-full bg-[#1e5f43] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
          >
            <BiLockAlt size={16} /> Pay Now — $1,026
          </button>
          <button
            type="button"
            className="w-full border-2 border-emerald-800 text-emerald-800 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
          >
            Save Draft — Pay Later
          </button>
        </div>
        <div className="mt-6 flex justify-between text-[10px] text-gray-400 px-2">
          <span className="flex items-center gap-1">
            <BiLock size={10} /> Secure
          </span>
          <span className="flex items-center gap-1">
            <FiRotateCcw size={10} /> Free Cancellation
          </span>
          <span className="flex items-center gap-1">
            <BsHeadphones size={10} /> 24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelOrderSummary;
