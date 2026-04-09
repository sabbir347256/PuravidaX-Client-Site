import React from "react";
import { BiCheck } from "react-icons/bi";

const AdvantureDynamicHeader = ({ title, subtitle, currentStep, steps }) => {
  return (
    <header className="heroBg py-10 md:py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <p className="text-[10px] md:text-xs tracking-[0.2em] font-bold text-emerald-400 mb-4 uppercase">
          AI Trip Designer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          {title}
        </h1>

        <p className="text-sm md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex items-center justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-4">
          {steps?.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                {/* Step Item */}
                <div className="flex flex-col items-center gap-3 shrink-0 group">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-[#F2A65A] border-[#F2A65A] text-[#1a3d2f] shadow-[0_0_15px_rgba(242,166,90,0.3)]"
                        : isCompleted
                          ? "bg-[#1F6B4E] border-[#1F6B4E] text-white"
                          : "bg-transparent border-gray-600 text-gray-500"
                    }`}
                  >
                    {isCompleted ? <BiCheck size={24} /> : step.id}
                  </div>

                  <span
                    className={`text-[10px] md:text-xs uppercase tracking-wider font-bold transition-colors ${
                      isActive || isCompleted ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {!isLast && (
                  <div
                    className={`w-8 md:w-16 h-[1px] mb-7 shrink-0 transition-colors duration-500 ${
                      step.id < currentStep ? "bg-[#F2A65A]" : "bg-gray-700"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default AdvantureDynamicHeader;
