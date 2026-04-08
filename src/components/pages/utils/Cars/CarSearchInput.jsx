import React from 'react';

const CarSearchInput = ({label, type = "text", name, register, defaultValue}) => {
    return (
      <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold text-gray-400 ml-1 uppercase">
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        {...register(name)} 
        className="bg-[#F2F0EA] border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-[#2D4A3E] focus:ring-2 focus:ring-[#215E41] outline-none"
      />
    </div>
    );
};

export default CarSearchInput;