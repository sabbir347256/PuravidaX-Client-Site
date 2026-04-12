import React from "react";
import { useForm } from 'react-hook-form';
import { User, Bot, Check, Waves } from 'lucide-react';
const AiPart = () => {
  const { handleSubmit } = useForm({
    defaultValues: {
      itinerary: [
        { time: "8:00 AM", activity: "Volcano Hike" },
        {
          time: "12:30 PM",
          activity: "Hidden Waterfall",
          icon: <Waves className="w-4 h-4 inline ml-1 text-cyan-600" />,
        },
        { time: "2:00 PM", activity: "Lunch in Town" },
        { time: "5:30 PM", activity: "Hot Springs at Sunset" },
      ],
    },
  });

  const onSubmit = (data) => {
    console.log("Itinerary Updated:", data);
  };
  return (
    <div className="min-h-screen  text-slate-800 custom-container">
      <div className=" bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <header className="p-4 border-b border-slate-50 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#5BB38D] rounded-full flex items-center justify-center text-xl">
            🤖
          </div>
          <div>
            <h2 className="font-bold text-slate-900 leading-tight">
              Pura Vida Concierge
            </h2>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-slate-400">
                Online · Personalized for your trip
              </span>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 max-w-[85%] shadow-sm">
              <p className="text-[15px] leading-relaxed">
                Good morning, Sarah! ☀️ I noticed the weather looks perfect for
                your volcano hike tomorrow. I've also found a hidden waterfall
                nearby that couples love — want me to add a short detour after
                your hike?
              </p>
              <span className="text-[10px] text-slate-400 mt-2 block">
                9:14 AM
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#1B5E41] text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] shadow-md">
              <p className="text-[15px]">
                How far is the waterfall from the volcano trail?
              </p>
              <span className="text-[10px] text-emerald-200 mt-2 block text-right">
                9:16 AM
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 max-w-[85%] shadow-sm self-start">
              <p className="text-[15px] leading-relaxed">
                It's just a 20-minute walk from the main trail — a natural pool
                surrounded by ferns where you can swim. Very few tourists know
                about it. I'd suggest going right after the hike, before your
                hot springs session. Here's your updated Day 2 plan:
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="bg-[#F8FAF9] rounded-2xl p-6 border border-emerald-50">
                <div className="space-y-4 mb-6">
                  {[
                    { time: "8:00 AM", label: "Volcano Hike" },
                    {
                      time: "12:30 PM",
                      label: "Hidden Waterfall",
                      hasIcon: true,
                    },
                    { time: "2:00 PM", label: "Lunch in Town" },
                    { time: "5:30 PM", label: "Hot Springs at Sunset" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center py-2 border-b border-emerald-100/50 last:border-0"
                    >
                      <span className="w-24 text-sm font-semibold text-emerald-600 uppercase tracking-tight">
                        {item.time}
                      </span>
                      <span className="text-slate-700 font-medium flex items-center">
                        {item.label}
                        {item.hasIcon && (
                          <Waves className="w-4 h-4 ml-2 text-cyan-500" />
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B5E41] hover:bg-[#154a33] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-900/10"
                >
                  <Check className="w-5 h-5" />
                  Update My Itinerary
                </button>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 block ml-2">
                9:17 AM
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPart;
