import React from "react";
import { useForm } from "react-hook-form";
import {
  Plane,
  Home,
  Car,
  CheckCircle2,
  Lock,
  ShieldCheck,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router";
const TripSummery = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Booking initiated", data);
    navigate('/final-book-journey')
  };
  return (
    <div className="w-full max-w-[433px] space-y-6">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
            Trip Summary
          </p>
          <h2 className="text-sm font-bold text-gray-900">
            May 10–17, 2026 • 7 Days
          </h2>
        </div>

        <div className="space-y-5 mb-8">
          <div className="flex justify-between items-center text-[13px]">
            <div className="flex items-center gap-3 text-gray-600">
              <Plane size={16} className="text-[#52a37a]" />
              <span>Premium Economy Flights</span>
            </div>
            <span className="font-bold text-gray-900">$856</span>
          </div>

          <div className="flex justify-between items-center text-[13px]">
            <div className="flex items-center gap-3 text-gray-600">
              <Home size={16} className="text-[#52a37a]" />
              <span>Hand-Picked Stays (7 nights)</span>
            </div>
            <span className="font-bold text-gray-900">$1,680</span>
          </div>

          <div className="flex justify-between items-center text-[13px]">
            <div className="flex items-center gap-3 text-gray-600">
              <Car size={16} className="text-[#52a37a]" />
              <span>Private Transfers</span>
            </div>
            <span className="font-bold text-gray-900">$420</span>
          </div>

          <div className="flex justify-between items-center text-[13px]">
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 size={16} className="text-[#52a37a]" />
              <span>12 Curated Experiences</span>
            </div>
            <span className="font-bold text-gray-900">$1,290</span>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-between items-center mb-8">
          <span className="text-sm font-bold text-gray-900">
            Estimated Total (2 people)
          </span>
          <span className="text-2xl font-bold text-[#52a37a]">$4,246</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <button
            type="submit"
            className="w-full py-4 globalButtonColor text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#163527] transition-all"
          >
            <Lock size={16} />
            Secure & Book This Trip
          </button>

          <button
            type="button"
            className="w-full py-4 border border-gray-200 rounded-xl font-bold text-[13px] text-[#52a37a] hover:bg-gray-50 transition-all"
          >
            Adjust Preferences
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-gray-400">
          <ShieldCheck size={14} className="text-[#52a37a]" />
          <span className="text-[10px] font-medium">
            Free cancellation up to 48h before
          </span>
        </div>
      </div>

      <div className="bg-[#0b1e16] p-7 rounded-[1.5rem] text-white">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={14} className="text-[#52a37a]" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#52a37a]">
            AI Concierge Note
          </span>
        </div>

        <p className="text-[12px] text-gray-300 leading-relaxed mb-6">
          I found a hidden waterfall nearby that couples love — want me to add a
          20-minute detour after your volcano hike?
        </p>

        <button className="bg-[#1e2f27] hover:bg-[#263a30] px-4 py-2.5 rounded-lg flex items-center gap-2 text-[11px] font-bold transition-all">
          <MessageSquare
            size={14}
            fill="currentColor"
            className="text-[#52a37a] stroke-none"
          />
          Chat with Concierge
        </button>
      </div>
    </div>
  );
};

export default TripSummery;
