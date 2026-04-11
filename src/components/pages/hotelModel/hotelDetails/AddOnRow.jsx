import React from "react";

const AddOnRow = ({ name, register, icon, title, desc, price }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl shadow-sm border border-gray-100">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-sm text-gray-800">{title}</h4>
          <p className="text-xs text-gray-400">{desc}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="font-bold text-gray-700">${price}</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" {...register(name)} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2a6d4f]"></div>
        </label>
      </div>
    </div>
  );
};

export default AddOnRow;
