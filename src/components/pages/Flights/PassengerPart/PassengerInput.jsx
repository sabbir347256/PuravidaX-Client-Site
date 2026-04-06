import React from "react";

const PassengerInput = ({
  label,
  register,
  error,
  type = "text",
  placeholder = "",
}) => {
  return (
    <div>
      <label className="block text-xs font-medium text-[#2B2B2B] mb-1.5">
        {label}
      </label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#E5DED5] bg-[#F8F5F0] px-3 py-2.5 text-sm outline-none focus:border-[#1F6B4F]"
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default PassengerInput;
