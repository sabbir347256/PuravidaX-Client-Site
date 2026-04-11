import React from "react";
import SevenChat from "./SevenChat";
import FinalBookJourney from "./FinalBookJourney";

const SevenUtillis = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-[450px] lg:sticky lg:top-8">
          <SevenChat />
        </div>

        <div className="w-full lg:flex-1">
          <FinalBookJourney />
        </div>
      </div>
    </div>
  );
};

export default SevenUtillis;
