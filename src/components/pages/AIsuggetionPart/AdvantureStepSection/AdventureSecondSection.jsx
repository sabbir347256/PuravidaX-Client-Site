import React from "react";
import { useForm } from "react-hook-form";
import { BiHeart, BiHome, BiMinus, BiPlus, BiUser } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AdvantureDynamicHeader from "../AdventureHeader/AdvantureDynamicHeader";
import { advantureSteps } from "../AdventureHeader/AdvantureStep";
import { useNavigate } from "react-router";

const AdventureSecondSection = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      travelerType: "Solo",
      adults: 2,
      children: 0,
    },
  });

  const travelerType = watch("travelerType");
  const adults = watch("adults");
  const children = watch("children");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert("Form Submitted! Check Console.");
    navigate('/traveler-options')
  };

  const travelerOptions = [
    { id: "Solo", label: "Solo", sub: "Just me", icon: <BiUser size={24} /> },
    {
      id: "Couple",
      label: "Couple",
      sub: "Partner & I",
      icon: <BiHeart size={24} />,
    },
    {
      id: "Family",
      label: "Family",
      sub: "With kids",
      icon: <BiHome size={24} />,
    },
    {
      id: "Friends",
      label: "Friends",
      sub: "Group trip",
      icon: <BiUser size={24} />,
    },
  ];
  return (
    <div>
      <AdvantureDynamicHeader
        title="Design Your Adventure"
        subtitle="Tell us what you want. We'll craft your perfect Costa Rica experience"
        currentStep={2}
        steps={advantureSteps}
      />
      <div className="min-h-screen flex items-center justify-center p-4 md:p-4">
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-16 shadow-sm adventureContainer w-full border border-stone-100">
          <div className="mb-6">
            <span className="text-emerald-500 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Step 2 of 5
            </span>
          </div>

          <div className="mb-10">
            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Who's sharing this adventure?
            </h1>
            <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
              This shapes everything — from the pace of each day to the kind of
              experiences I'll find for you.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {travelerOptions.map((option) => (
                <label
                  key={option.id}
                  className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                    travelerType === option.id
                      ? "border-emerald-600 bg-emerald-50/30 text-emerald-900"
                      : "border-stone-100 bg-white text-slate-400 hover:border-emerald-200"
                  }`}
                >
                  <input
                    type="radio"
                    value={option.id}
                    {...register("travelerType")}
                    className="sr-only"
                  />
                  <div
                    className={`${travelerType === option.id ? "text-emerald-600" : "text-slate-400"}`}
                  >
                    {option.icon}
                  </div>
                  <span className="mt-2 font-bold text-slate-900">
                    {option.label}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {option.sub}
                  </span>
                </label>
              ))}
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-between py-4 border-b border-stone-100">
                <div>
                  <p className="font-bold text-slate-900">Adults</p>
                  <p className="text-xs text-slate-400 font-medium">Ages 18+</p>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => setValue("adults", Math.max(1, adults - 1))}
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-stone-50 transition-colors"
                  >
                    <BiMinus size={18} />
                  </button>
                  <span className="text-xl font-bold text-slate-900 w-4 text-center">
                    {adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => setValue("adults", adults + 1)}
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-stone-50 transition-colors"
                  >
                    <BiPlus size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-stone-100">
                <div>
                  <p className="font-bold text-slate-900">Children</p>
                  <p className="text-xs text-slate-400 font-medium">
                    Ages 2–17
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() =>
                      setValue("children", Math.max(0, children - 1))
                    }
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-stone-50 transition-colors"
                  >
                    <BiMinus size={18} />
                  </button>
                  <span className="text-xl font-bold text-slate-900 w-4 text-center">
                    {children}
                  </span>
                  <button
                    type="button"
                    onClick={() => setValue("children", children + 1)}
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-stone-50 transition-colors"
                  >
                    <BiPlus size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all active:scale-95"
              >
                <BsArrowLeft size={18} />
                Back
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-10 py-3 globalButtonColor hover:bg-[#133a2b] text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-900/10"
              >
                Next
                <BsArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdventureSecondSection;
