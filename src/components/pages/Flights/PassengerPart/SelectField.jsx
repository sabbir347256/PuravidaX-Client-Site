import React from "react";

const SelectField = ({ label, register, error, options = [] }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-[#2B2B2B] mb-1.5">
        {label}
      </label>
      <select
        {...register}
        className="w-full rounded-lg border border-[#E5DED5] bg-[#F8F5F0] px-3 py-2.5 text-sm outline-none focus:border-[#1F6B4F]"
      >
        <option value="">Select</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;
