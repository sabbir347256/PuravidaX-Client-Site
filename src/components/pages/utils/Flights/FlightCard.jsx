import React from "react";
import { CiPlane } from "react-icons/ci";

const FlightCard = ({airline,model,depTime,depCity,arrTime,arrCity,duration,price, tag, tagColor, isSelected, subtext}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-transparent hover:border-gray-200 transition-all flex flex-col md:flex-row items-center gap-8">
      <div className="flex items-center gap-4 w-full md:w-1/4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-[10px] text-gray-400">
          LOGO
        </div>
        <div>
          <p className="text-sm font-bold text-[#2D4A3E]">{airline}</p>
          <p className="text-[10px] text-gray-400">{model}</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between w-full px-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-[#2D4A3E]">{depTime}</p>
          <p className="text-xs text-gray-400">{depCity}</p>
        </div>
        <div className="flex flex-col items-center flex-1 px-4">
          <p className="text-[10px] text-gray-400 mb-1">{duration}</p>
          <div className="w-full h-[1px] bg-gray-200 relative">
            <CiPlane
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-300"
              size={14}
            />
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-lg font-bold text-[#2D4A3E]">{arrTime}</p>
          <p className="text-xs text-gray-400">{arrCity}</p>
        </div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col items-center md:items-end gap-2">
        {tag && (
          <span
            className={`${tagColor} text-[10px] px-2 py-1 rounded-md font-bold`}
          >
            {tag}
          </span>
        )}
        <div className="text-right">
          <p className="text-2xl font-bold text-[#215E41]">${price}</p>
          <p className="text-[10px] text-gray-400">{subtext || "Per Person"}</p>
        </div>
        <button
          className={`${isSelected ? "bg-[#215E41] text-white" : "border border-[#215E41] text-[#215E41]"} px-8 py-2 rounded-xl text-sm font-bold w-full md:w-28 transition-colors`}
        >
          Select
        </button>                          
      </div>
    </div>
  );
};

export default FlightCard;
