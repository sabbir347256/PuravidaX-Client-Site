
const SubscriptionSection = () => {
  return (
    <div className="bg-[#F7F2E9] dynamic-Padding flex items-center justify-center">
      <div className="bg-white rounded-[40px] shadow-sm w-full max-w-6xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#5BA471]"></div>
            <span className="text-[#5BA471] font-bold tracking-widest text-xs uppercase">
              Stay Connected
            </span>
          </div>

          <h2 className="text-[#2D4A3E] text-3xl md:text-4xl font-bold leading-tight">
            Get Travel Updates &{" "}
            <span className="italic font-serif text-[#4A7D5E]">
              Exclusive Offers
            </span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg">
            Subscribe for travel tips, seasonal deals, and hidden gems from
            Costa Rica.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#F9F7F2] border border-gray-200 rounded-xl px-6 py-4 w-full sm:w-80 outline-none focus:ring-2 focus:ring-[#2D4A3E] transition-all"
          />
          <button className="bg-[#2D4A3E] hover:bg-[#1F362D] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
