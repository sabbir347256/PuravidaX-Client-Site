import React from "react";
import { useForm } from "react-hook-form";

const HotelSummerySection = ({
  data,
  primaryBtnText,
  secondaryBtnText,
  onAction,
}) => {
  const { handleSubmit } = useForm ();

  const onSubmit = (formData) => {
    // যখন বাটনে ক্লিক হবে, তখন এই ফাংশনটি কল হবে
    // এবং মেইন পেজ থেকে আসা onAction ফাংশনটিকে ডেটা পাঠাবে
    onAction(formData);
  };
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Stay</h2>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400 font-medium">Check-in</span>
          <span className="text-slate-900 font-bold">{data.checkIn}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400 font-medium">Check-out</span>
          <span className="text-slate-900 font-bold">{data.checkOut}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400 font-medium">Duration</span>
          <span className="text-slate-900 font-bold">{data.duration}</span>
        </div>

        <div className="flex justify-between items-center text-sm border-b border-stone-100 pb-4">
          <span className="text-slate-400 font-medium">Guests</span>
          <span className="text-slate-900 font-bold">{data.guests}</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-slate-500 font-medium">
            From {data.pricePerNight}/night
          </span>
          <span className="text-2xl font-bold text-slate-900">
            {data.totalPrice}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Primary Action Button */}
        <button
          type="submit"
          className="w-full bg-[#1a4d3a] hover:bg-[#133a2b] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <BedDouble size={20} />
          {primaryBtnText}
        </button>

        {/* Secondary Button */}
        <button
          type="button"
          className="w-full border-2 border-[#1a4d3a] text-[#1a4d3a] py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all"
          onClick={() => console.log("Back button clicked")}
        >
          <ArrowLeft size={18} />
          {secondaryBtnText}
        </button>
      </form>
    </div>
  );
};

export default HotelSummerySection;
