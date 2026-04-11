import { BiCheck, BiMapPin } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";
import { RiLoader2Fill, RiLoader2Line } from "react-icons/ri";
import SixUtilis from "./utilis/AdventuresixSectionUtilis/SixUtilis";

const AdventureSixSection = () => {
  return (
    <div>
      <div className=" heroBg text-white flex flex-col items-center justify-center ">
        <div className="container w-full lg:text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
            <GiSparkles size={14} className="text-[#52a37a]" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              AI-Crafted Itinerary
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Honeymoon Journey
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
            7 Days Of Adventure, Romance & Wonder — From Misty Volcanic Peaks To
            Golden Pacific Sunsets
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-left hover:bg-white/10 transition-colors">
              <p className="text-[#52a37a] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                Chapter 1 · Days 1-4
              </p>
              <h3 className="text-2xl font-bold mb-3">Into the Rainforest</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <BiMapPin size={14} /> <span>Arenal & La Fortuna</span>
              </div>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                "Arrive to volcanic landscapes, jungle trails, and natural hot
                springs under the stars"
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-left hover:bg-white/10 transition-colors">
              <p className="text-[#52a37a] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                Chapter 2 · Days 5-7
              </p>
              <h3 className="text-2xl font-bold mb-3">The Pacific Coast</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <BiMapPin size={14} /> <span>Nicoya Peninsula</span>
              </div>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                "Transition to golden beaches, oceanfront wellness, and your
                private sunset dinner"
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 globalButtonColor hover:bg-[#1e4d38] rounded-2xl flex items-center justify-center gap-3 font-bold transition-all shadow-lg">
              <BiCheck size={24} />
              Book This Journey — $4,246
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all">
              <LuSettings2 size={20} />
              Adjust Preferences
            </button>
          </div>
        </div>
      </div>
      <SixUtilis></SixUtilis>
    </div>
  );
};

export default AdventureSixSection;
