import React from "react";
import { BiCheck } from "react-icons/bi";

const FlightDetailsDynamicHeader = ({
  title,
  subtitle,
  currentStep,
  steps,
}) => {
  return (
    <header className="bg-[#133123] text-white">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        <p className="text-sm md:text-base text-gray-300 mb-8">{subtitle}</p>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {steps?.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-2 shrink-0">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border transition-all duration-200 ${
                      isCompleted
                        ? "bg-[#1F6B4E] border-[#1F6B4E] text-white"
                        : isActive
                          ? "bg-[#1F6B4E] border-[#1F6B4E] text-white"
                          : "bg-[#5E746B]/40 border-[#7A8C84] text-[#C7D1CC]"
                    }`}
                  >
                    {isCompleted ? <BiCheck size={14} /> : step.id}
                  </div>

                  <span
                    className={`text-sm whitespace-nowrap ${
                      isActive || isCompleted
                        ? "text-white font-medium"
                        : "text-[#A8B5AF]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {!isLast && (
                  <div
                    className={`w-8 md:w-10 h-[1px] shrink-0 ${
                      step.id < currentStep ? "bg-[#F2A65A]" : "bg-[#5F6F68]"
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

export default FlightDetailsDynamicHeader;
