import React from "react";

const FlightStep = ({ number, label, active, completed }) => {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${active ? "bg-[#5BA471] text-white" : "bg-gray-700 text-gray-400"}`}
      >
        {number}
      </div>
      <span
        className={`text-xs font-medium whitespace-nowrap ${active ? "text-white" : "text-gray-500"}`}
      >
        {label}
      </span>
    </div>
  );
};

export default FlightStep;
