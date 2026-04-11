import { useEffect } from "react";
import {
  BiCheck,
  BiCrown,
  BiDiamond,
  BiStar,
  BiWallet,
  BiWalletAlt,
} from "react-icons/bi";
import { BsArrowRight, BsArrowRightCircle, BsDiamond } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { GiSparkles } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import { IoSparkles } from "react-icons/io5";
import { RiLoader2Fill, RiLoader2Line } from "react-icons/ri";
import { useNavigate } from "react-router";

const AdventureFiveSection = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/complete-journey'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <header className="mb-10">
        <div className="flex justify-center mb-4">
          <span className="text-orange-400 text-2xl">✨</span>
        </div>
        <p className="text-[#52a37a] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
          AI Trip Planner
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Let's design your{" "}
          <span className="text-[#52a37a] italic font-serif">adventure</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
          A few questions so I can create your perfect Costa Rica journey.
        </p>
      </header>

      <div className="flex items-center gap-3 md:gap-5 mb-20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#1e4533] text-white flex items-center justify-center shadow-sm">
            <BiCheck size={18} strokeWidth={3} />
          </div>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            Dates
          </span>
        </div>
        <div className="h-[1px] w-12 md:w-20 bg-[#1e4533]" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#1e4533] text-white flex items-center justify-center shadow-sm">
            <BiCheck size={18} strokeWidth={3} />
          </div>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            Style
          </span>
        </div>
        <div className="h-[1px] w-12 md:w-20 bg-[#1e4533]" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#1e4533] text-white flex items-center justify-center shadow-sm">
            <BiCheck size={18} strokeWidth={3} />
          </div>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            Details
          </span>
        </div>
        <div className="h-[1px] w-12 md:w-20 bg-gray-200" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-[#52a37a] text-[#52a37a] flex items-center justify-center font-bold bg-white">
            4
          </div>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            Journey
          </span>
        </div>
      </div>

      <div className="w-full max-w-xl">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1e4533] mb-4">
            Crafting your story...
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            I'm weaving together the perfect experiences based on everything
            you've shared.
          </p>
        </div>

        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#f2f2eb] border border-transparent">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <BiCheck className="text-gray-900" size={20} strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-[#1e4533]">
              Understanding your travel style
            </span>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#f2f2eb] border border-transparent">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <BiCheck className="text-gray-900" size={20} strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-[#1e4533]">
              Finding the perfect regions for you
            </span>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#52a37a] shadow-sm">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <RiLoader2Line className="animate-spin text-[#52a37a]" size={20} />
            </div>
            <span className="text-sm font-medium text-[#1e4533]">
              Selecting romantic experiences...
            </span>
          </div>
        </div>

        <footer className="mt-12">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Considering 47 curated experiences, 12 hand-picked stays, and 8
            dining gems for your honeymoon adventure.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AdventureFiveSection;
