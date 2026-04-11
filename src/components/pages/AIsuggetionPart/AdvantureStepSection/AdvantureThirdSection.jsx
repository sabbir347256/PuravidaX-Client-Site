import React from "react";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import AdvantureDynamicHeader from "../AdventureHeader/AdvantureDynamicHeader";
import { advantureSteps } from "../AdventureHeader/AdvantureStep";
import { useNavigate } from "react-router";

const AdvantureThirdSection = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      travelerTypes: ["Wellness & Mindfulness", "Nature & Wildlife"],
      celebration: "",
    },
  });

  const selectedTypes = watch("travelerTypes") || [];
  const selectedCelebration = watch("celebration");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Step 3 Data:", data);
    navigate("/finishing-touch");
  };

  const travelerOptions = [
    "Adventure & Discovery",
    "Wellness & Mindfulness",
    "Relaxation & Renewal",
    "Nature & Wildlife",
    "Culture & Connection",
    "Photography & Art",
    "Food & Cooking",
    "Surfing & Water Sports",
  ];

  const celebrationOptions = [
    "Honeymoon",
    "Anniversary",
    "Birthday",
    "Babymoon",
    "Just Because",
  ];
  return (
    <div>
      <AdvantureDynamicHeader
        title="Design Your Adventure"
        subtitle="Tell us what you want. We'll craft your perfect Costa Rica experience"
        currentStep={3}
        steps={advantureSteps}
      />
      <div className="min-h-screen">
        <div className=" flex justify-center px-4 py-8 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-[2.5rem] shadow-xl p-10 md:p-16 max-w-4xl w-full border border-gray-100"
          >
            <p className="text-[#52a37a] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Step 3 of 5
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              What kind of traveler are you?
            </h1>
            <p className="text-gray-500 text-sm mb-10 leading-relaxed">
              Choose what speaks to you — I'll weave these into a cohesive
              journey.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {travelerOptions.map((option) => (
                <label key={option} className="cursor-pointer group">
                  <input
                    type="checkbox"
                    value={option}
                    {...register("travelerTypes")}
                    className="hidden"
                  />
                  <div
                    className={`px-6 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${
                      selectedTypes.includes(option)
                        ? "bg-[#2a6d4f] border-[#2a6d4f] text-white shadow-md"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#52a37a]"
                    }`}
                  >
                    {option}
                  </div>
                </label>
              ))}
            </div>

            <h2 className="text-md font-bold text-gray-900 mb-6">
              Are you celebrating something special?
            </h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {celebrationOptions.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    value={option}
                    {...register("celebration")}
                    className="hidden"
                  />
                  <div
                    className={`px-6 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${
                      selectedCelebration === option
                        ? "bg-[#2a6d4f] border-[#2a6d4f] text-white shadow-md"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#52a37a]"
                    }`}
                  >
                    {option}
                  </div>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                className="px-8 py-3 rounded-xl border border-[#2a6d4f] text-[#2a6d4f] font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-[#2a6d4f] text-white font-bold text-sm hover:bg-[#1e4d38] transition-all flex items-center gap-2"
              >
                Next <BsArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvantureThirdSection;
