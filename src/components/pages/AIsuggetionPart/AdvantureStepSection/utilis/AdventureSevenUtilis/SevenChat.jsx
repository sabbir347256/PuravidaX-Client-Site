import React from "react";
import {
  Send,
  Check,
  Utensils,
  Package,
  Sparkles,
  Calendar,
} from "lucide-react";
import { MdQuickreply } from "react-icons/md";
const SevenChat = () => {
  return (
    <div className="max-w-md mx-auto bg-[#fdfbf7] min-h-screen flex flex-col  border border-gray-100 shadow-2xl rounded-[2rem] overflow-hidden">
      <div className="bg-white p-6 border-b border-gray-50 flex items-center gap-4">
        <div className="w-12 h-12 globalButtonColor rounded-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 rounded-lg flex items-center justify-center">
            <div className="w-4 h-2 bg-white rounded-full opacity-80" />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-gray-900 text-lg">Your AI Concierge</h2>
          <div className="flex items-center gap-2 text-[11px] text-[#52a37a] font-medium uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#52a37a] rounded-full animate-pulse" />
            Online — Ready to help
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <span className="block text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          8:24 AM
        </span>

        <div className="flex flex-col gap-2 max-w-[85%]">
          <div className="bg-[#f8f6f0] p-5 rounded-2xl rounded-tl-none text-[13px] text-gray-700 leading-relaxed shadow-sm">
            Good morning, Sarah! 🇪🇸 <br />
            <br />I noticed the weather looks perfect for your volcano hike
            tomorrow. I've also found a hidden waterfall nearby that couples
            absolutely love — want me to add a short detour after your hike?
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="globalButtonColor text-white p-5 rounded-2xl rounded-tr-none text-[13px] leading-relaxed max-w-[85%] shadow-md">
            How far is the waterfall from the volcano trail?
          </div>
          <span className="text-[10px] text-gray-400 font-medium">8:26 AM</span>
        </div>

        <div className="flex flex-col gap-2 max-w-[85%]">
          <div className="bg-[#f8f6f0] p-5 rounded-2xl rounded-tl-none text-[13px] text-gray-700 leading-relaxed shadow-sm">
            It's just a 20-minute walk from the main trail — a natural pool
            surrounded by lush ferns where you can swim. Very few tourists know
            about it. 🌿 <br />
            <br />
            I'd suggest going right after the hike, before your hot springs
            session. That gives you the perfect day arc: volcanic views →
            waterfall magic → relaxing hot springs at sunset. ✨
          </div>
        </div>

        <div className="bg-[#f2f4f3] rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">🗓️</span>
            <h4 className="font-bold text-[#1e4533] text-sm">
              Updated Day 2 Plan
            </h4>
          </div>
          <div className="space-y-3 text-[12px] font-medium text-gray-600">
            <div className="flex items-center gap-3">
              <span>🌋</span> 8:00 AM — Volcano Hike
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">💦</span> 12:30 PM — Hidden
              Waterfall
            </div>
            <div className="flex items-center gap-3">
              <span>🍽️</span> 2:00 PM — Lunch in La Fortuna
            </div>
            <div className="flex items-center gap-3">
              <span>♨️</span> 5:30 PM — Hot Springs at sunset
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-50">
        <div className="flex flex-wrap gap-2 mb-6">
          <MdQuickreply icon={<Check size={12} />} text="Update my itinerary" />
          <MdQuickreply
            icon={<Utensils size={12} />}
            text="Find a romantic restaurant"
          />
          <MdQuickreply
            icon={<Package size={12} />}
            text="What should I pack?"
          />
          <MdQuickreply
            icon={<Sparkles size={12} />}
            text="Add couples spa to Day 3"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Ask your concierge anything.."
            className="w-full bg-[#f9f9f9] border border-gray-100 rounded-xl py-4 px-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e4533]/10 transition-all"
          />
          <button className="absolute right-2 top-2 bottom-2 globalButtonColor text-white p-3 rounded-lg hover:bg-[#163527] transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SevenChat;
