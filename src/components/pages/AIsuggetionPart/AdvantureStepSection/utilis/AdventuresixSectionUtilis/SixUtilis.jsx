import React from "react";
import SixHotelCard from "./SixHotelCard";
import TripSummery from "./TripSummery";

const SixUtilis = () => {
  const hotelData = {
    name: "Hotel Punta Islita",
    days: "Days 5-7",
    location: "Nicoya Peninsula, Guanacaste",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800",
    tags: ["Beachfront", "Infinity Pool", "Sunset Spa"],
    description:
      "A secluded coastal retreat where your celebration dinner will be set up on the beach under the stars.",
    price: 280,
    rating: 4.8,
    reviews: 632,
  };
  return (
    <div className="min-h-screen flightCarHotelContainer">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:flex-1">
          <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100 mb-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              Why I chose this for you
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              You told me you love adventure and wellness. So, I designed a
              journey that starts in the mountains — hiking and hot springs —
              then flows to the coast for beach mornings and sunset sailing. The
              pace is balanced, with space to breathe and moments of surprise
              along the way.
            </p>
          </div>

          <div className="space-y-6">
            <SixHotelCard data={hotelData} />
            <SixHotelCard data={hotelData} />
          </div>
        </div>

        <div className="w-full lg:w-[400px] lg:sticky lg:top-8">
          <TripSummery />
        </div>
      </div>
    </div>
  );
};

export default SixUtilis;
