import React from "react";
import AdvantureDynamicHeader from "../AdventureHeader/AdvantureDynamicHeader";
import { advantureSteps } from "../AdventureHeader/AdvantureStep";
import { useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

const AdventureFirstSection = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      arrivalDate: "2026-05-10",
      departureDate: "2026-05-17",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Step 1 Data:", data);
    navigate('/second-step-adventure')
  };
  return (
    <div className="min-h-screen ">
      <AdvantureDynamicHeader
        title="Design Your Adventure"
        subtitle="Tell us what you want. We'll craft your perfect Costa Rica experience"
        currentStep={1}
        steps={advantureSteps}
      />

      <div className="px-4 py-8">
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-16 shadow-sm border border-stone-100 adventureContainer w-full">
          <div className="mb-4 md:mb-6">
            <span className="text-emerald-500 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Step 1 of 5
            </span>
          </div>

          <div className="mb-8 md:mb-12">
            <h1 className="text-xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight leading-tight">
              When does your story begin?
            </h1>
            <p className="text-slate-500 text-sm md:text-lg lg:text-lg font-medium leading-relaxed">
              I'll use this to find the best weather, events, and seasonal
              experiences for you.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-14">
              <div className="space-y-2 md:space-y-3">
                <label className="text-xs md:text-sm font-bold text-slate-800 ml-1">
                  Arrival Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    {...register("arrivalDate", { required: true })}
                    className="w-full bg-[#f4f4f0] border-none rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 text-base md:text-lg font-medium focus:ring-2 focus:ring-emerald-600 transition-all appearance-none cursor-pointer"
                  />
                  <BiCalendar
                    className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={22}
                  />
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-xs md:text-sm font-bold text-slate-800 ml-1">
                  Departure Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    {...register("departureDate", { required: true })}
                    className="w-full bg-[#f4f4f0] border-none rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 text-base md:text-lg font-medium focus:ring-2 focus:ring-emerald-600 transition-all appearance-none cursor-pointer"
                  />
                  <BiCalendar
                    className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={22}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="w-full md:w-auto globalButtonColor hover:bg-[#133a2b] text-white px-8 md:px-12 py-3 md:py-3 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 text-base md:text-lg transition-all active:scale-95 shadow-lg shadow-emerald-900/10"
              >
                Next
                <BsArrowRight size={20} className="mt-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdventureFirstSection;
