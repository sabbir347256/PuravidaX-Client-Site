import React from "react";
import { BiCheck } from "react-icons/bi";

const AdvantureDynamicHeader = ({ title, subtitle, currentStep, steps }) => {
  return (
    <header className="heroBg text-white text-center">
      <div className="py-10">
        <p className="text-[10px] md:text-xs tracking-[0.2em] font-bold text-emerald-400 mb-4 uppercase">
          AI Trip Designer
        </p>

        <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-xs md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          {subtitle}
        </p>

        <div className="flex items-center justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-6 px-4">
          {steps?.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                {/* Step Item */}
                <div className="flex flex-col items-center gap-2 shrink-0 min-w-[70px] md:min-w-[100px]">
                  <div
                    className={`w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-base font-bold border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-[#F2A65A] border-[#F2A65A] text-[#1a3d2f] shadow-[0_0_12px_rgba(242,166,90,0.4)]"
                        : isCompleted
                          ? "bg-[#1F6B4E] border-[#1F6B4E] text-white"
                          : "bg-transparent border-gray-600 text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <BiCheck className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      step.id
                    )}
                  </div>

                  <span
                    className={`text-[9px] md:text-xs uppercase tracking-wider font-bold whitespace-nowrap ${
                      isActive || isCompleted ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div
                    className={`w-8 md:w-16 h-[1px] mb-6 md:mb-7 shrink-0 transition-colors duration-500 ${
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
