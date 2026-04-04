import React from "react";

const AdventureCreateSection = () => {
  return (
    <div className="w-full dynamic-Padding flex items-center justify-center bg-gradient-to-r from-green-900 via-green-800 to-green-900">
      <div className="text-center max-w-2xl px-4">
        <p className="text-green-400 tracking-widest text-sm mb-4">— READY?</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Start Your Costa Rica Adventure{" "}
          <span className="text-green-400 italic">Today</span>
        </h1>
        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Join thousands of travelers who've discovered their perfect Costa Rica
          story. Your journey begins with a single click.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Create Free Account
          </button>

          <button className="border border-green-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Sign In →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureCreateSection;
