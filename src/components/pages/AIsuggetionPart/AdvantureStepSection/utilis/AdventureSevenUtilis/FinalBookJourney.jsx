import React from "react";
import { useForm } from "react-hook-form";
import {
  Plane,
  MapPin,
  Calendar,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Dayrow from "./Dayrow";
const FinalBookJourney = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting Journey Booking:", data);
    alert("Journey Booked Successfully!");
  };

  const tripSummary = [
    { label: "Premium Economy Flights", price: "$856" },
    { label: "Hand-Picked Stays (7 nights)", price: "$1,680" },
    { label: "Private Transfers", price: "$420" },
    { label: "12 Curated Experiences", price: "$1,290" },
  ];
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="relative h-64 rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 text-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1200"
            alt="Cityscape"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/30">
              ✨ Honeymoon Journey
            </span>
            <h1 className="text-4xl font-bold mt-3">Your Costa Rica Story</h1>
            <div className="flex items-center gap-4 mt-2 text-sm opacity-90 font-medium">
              <span className="flex items-center gap-1.5">
                <Plane size={14} /> May 10–17, 2026
              </span>
              <span>• 7 unforgettable days</span>
            </div>
            <p className="text-2xl font-bold mt-4 text-[#52a37a]">
              $4,246{" "}
              <span className="text-xs font-normal text-white/70">
                estimated for 2
              </span>
            </p>
          </div>
        </div>

        <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-2">
          Your Journey Arc
        </h2>

        {/* Chapter 1 */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
          <span className="globalButtonColor text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase">
            Chapter 1 • Days 1-4
          </span>
          <div className="mt-4 flex items-center gap-2 text-[#52a37a]">
            <MapPin size={16} />
            <h3 className="font-bold text-lg">Arenal & La Fortuna</h3>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mt-1">
            Into the Rainforest
          </h4>
          <p className="text-gray-400 text-xs italic mt-2">
            "Arrive to volcanic landscapes, jungle trails, and natural hot
            springs under the stars"
          </p>

          <div className="mt-8 space-y-6">
            <Dayrow
              day="1"
              title="Arrival & Lodge Check-in"
              sub="Nayara Tented Camp - Private Volcano Suite"
            />
            <Dayrow
              day="2"
              title="Arenal Volcano Hike + Hidden Waterfall ✨"
              sub="Updated by concierge • Hot springs at sunset"
            />
            <Dayrow
              day="3"
              title="Couples Spa & Cloud Forest"
              sub="Monteverde Cloud Forest guided walk"
            />
            <Dayrow
              day="4"
              title="Coffee Farm Morning → Transfer South"
              sub="Scenic drive to Nicoya Peninsula"
            />
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
          <span className="globalButtonColor text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase">
            Chapter 2 • Days 5-7
          </span>
          <div className="mt-4 flex items-center gap-2 text-[#52a37a]">
            <MapPin size={16} />
            <h3 className="font-bold text-lg">Nicoya Peninsula</h3>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mt-1">
            The Pacific Coast
          </h4>
          <p className="text-gray-400 text-xs italic mt-2">
            "Transition to golden beaches, oceanfront wellness, and your private
            sunset dinner"
          </p>

          <div className="mt-8 space-y-6">
            <Dayrow
              day="5"
              title="Beach Arrival & Surfing Lesson"
              sub="Santa Teresa Beach - Hotel Punta Islita"
            />
            <Dayrow
              day="6"
              title="Sunset Horseback Ride + Beach Dinner 🇪🇸"
              sub="Private dining table on the sand"
            />
            <Dayrow
              day="7"
              title="Morning Yoga → Departure"
              sub="Farewell breakfast • Transfer to SJO"
            />
          </div>
        </div>

        {/* Final Summary Card & Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-lg">💰</span>
            <h3 className="font-bold text-lg">What's Included</h3>
          </div>

          <div className="space-y-4 mb-8">
            {tripSummary.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-gray-600 font-medium">{item.label}</span>
                <span className="font-bold text-gray-900">{item.price}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm font-bold text-gray-900">
                Estimated Total for 2
              </span>
              <span className="text-xl font-bold text-[#52a37a]">$4,246</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 globalButtonColor text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#163527] transition-all shadow-lg shadow-green-900/20"
          >
            Book My Journey <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinalBookJourney;
