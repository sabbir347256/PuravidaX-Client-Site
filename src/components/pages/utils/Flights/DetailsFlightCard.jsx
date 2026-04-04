import React from "react";
import { BiBadge, BiBriefcase } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { FaUtensilSpoon } from "react-icons/fa";
import { WiFire } from "react-icons/wi";

const DetailsFlightCard = ({ title, number, time, arrivalTime, date }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#2D4A3E] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
          {number}
        </span>
        <h3 className="text-[#2D4A3E] font-bold text-lg">{title}</h3>
      </div>
      <div className="bg-[#F9F8F4] rounded-xl p-6 mb-4 flex justify-between items-center text-[#2D4A3E]">
        <div className="text-center md:text-left">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
            Departure
          </p>
          <p className="text-2xl font-black">{time}</p>
          <p className="text-[11px] font-bold">San Francisco (SFO)</p>
          <p className="text-[10px] text-gray-400">{date} · Terminal 3</p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-gray-200 mx-8"></div>
        <div className="text-center md:text-right">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
            Arrival
          </p>
          <p className="text-2xl font-black">{arrivalTime}</p>
          <p className="text-[11px] font-bold">San Jose (SJO)</p>
          <p className="text-[10px] text-gray-400">{date} · Terminal A</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <BiBadge icon={<CiPlane size={14} />} label="Boeing 737-800" />
        <BiBadge
          icon={<BiBriefcase size={14} />}
          label="23kg Checked Bag Included"
        />
        <BiBadge icon={<FaUtensilSpoon size={14} />} label="Meal Included" />
        <BiBadge icon={<WiFire size={14} />} label="Wi-Fi Available" />
      </div>
    </div>
  );
};

export default DetailsFlightCard;
