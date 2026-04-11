import React from "react";

const Dayrow = ({ day, title, sub }) => {
  return (
    <div className="flex gap-6 items-start">
      <div className="text-[10px] font-bold text-[#52a37a] uppercase tracking-widest pt-1 min-w-[50px]">
        Day {day}
      </div>
      <div>
        <h5 className="font-bold text-sm text-gray-900">{title}</h5>
        <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
      </div>
    </div>
  );
};

export default Dayrow;
