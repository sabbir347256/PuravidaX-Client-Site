import React from "react";
import { useForm } from "react-hook-form";
import { BiCrown, BiDiamond, BiStar, BiWallet } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";
import { advantureSteps } from "../AdventureHeader/AdvantureStep";
import AdvantureDynamicHeader from "../AdventureHeader/AdvantureDynamicHeader";
import { useNavigate } from "react-router";

const AdventureFourSection = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      budget: "mid-range",
      pace: "balanced",
    },
  });

  const selectedBudget = watch("budget");
  const selectedPace = watch("pace");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/crafting");
  };

  const budgetOptions = [
    {
      id: "budget",
      label: "Budget",
      desc: "Under $100/day",
      icon: <BiWallet size={24} />,
    },
    {
      id: "mid-range",
      label: "Mid-Range",
      desc: "$100-250/day",
      icon: <BiStar size={24} />,
    },
    {
      id: "premium",
      label: "Premium",
      desc: "$250-500/day",
      icon: <BiDiamond size={24} />,
    },
    {
      id: "luxury",
      label: "Luxury",
      desc: "$500+/day",
      icon: <BiCrown size={24} />,
    },
  ];

  const paceOptions = [
    { id: "unhurried", label: "Unhurried" },
    { id: "balanced", label: "Balanced" },
    { id: "full-days", label: "Full Days" },
  ];
  return (
    <div>
      <AdvantureDynamicHeader
        title="Design Your Adventure"
        subtitle="Tell us what you want. We'll craft your perfect Costa Rica experience"
        currentStep={4}
        steps={advantureSteps}
      />
      <div className="min-h-screen">
        <div className=" flex justify-center  px-4 py-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12  max-w-4xl w-full border border-gray-100"
          >
            <div className="mb-8">
              <p className="text-[#52a37a] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Step 4 of 5
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                The finishing touches
              </h1>
              <p className="text-gray-500 text-sm">
                These details help me find the perfect balance of comfort and
                surprise.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-md font-bold text-gray-900 mb-6">
                Where do you feel most comfortable?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {budgetOptions.map((opt) => (
                  <label key={opt.id} className="cursor-pointer group">
                    <input
                      type="radio"
                      value={opt.id}
                      {...register("budget")}
                      className="hidden"
                    />
                    <div
                      className={`h-full flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-200 ${
                        selectedBudget === opt.id
                          ? "bg-[#f4f9f6] border-[#52a37a] text-[#2a6d4f]"
                          : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                      }`}
                    >
                      <div
                        className={`mb-3 ${selectedBudget === opt.id ? "text-[#52a37a]" : "text-gray-300"}`}
                      >
                        {opt.icon}
                      </div>
                      <span
                        className={`font-bold text-sm mb-1 ${selectedBudget === opt.id ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {opt.label}
                      </span>
                      <span className="text-[10px] whitespace-nowrap opacity-60">
                        {opt.desc}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-md font-bold text-gray-900 mb-6">
                How do you like your days?
              </h2>
              <div className="flex flex-wrap gap-4">
                {paceOptions.map((opt) => (
                  <label key={opt.id} className="cursor-pointer">
                    <input
                      type="radio"
                      value={opt.id}
                      {...register("pace")}
                      className="hidden"
                    />
                    <div
                      className={`px-8 py-3 rounded-full border-2 text-sm font-bold transition-all duration-200 ${
                        selectedPace === opt.id
                          ? "bg-[#2a6d4f] border-[#2a6d4f] text-white"
                          : "bg-white border-gray-100 text-gray-500 hover:border-gray-200"
                      }`}
                    >
                      {opt.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="px-8 py-3 rounded-xl border-2 border-gray-100 text-[#2a6d4f] font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-[#2a6d4f] text-white font-bold text-sm hover:bg-[#1e4d38] transition-all flex items-center gap-2"
              >
                Create My Journey <GiSparkles size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdventureFourSection;
