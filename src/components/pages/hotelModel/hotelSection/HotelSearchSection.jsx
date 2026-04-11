import React from "react";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import HotelCard from "./HotelCard";

const HotelSearchSection = () => {
  const hotels = [
    {
      id: 1,
      name: "Nayara Tented Camp",
      location: "Arenal Volcano, La Fortuna",
      type: "Eco-Luxury Lodge",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", // Example image
      tags: [
        { label: "Eco-Certified", icon: "🌿" },
        { label: "Private Pool", icon: "🏊" },
        { label: "Volcano Views", icon: "🌋" },
        { label: "Wildlife", icon: "🐆" },
      ],
      description:
        "Wake to howler monkeys, soak in your private pool overlooking the volcano, and fall asleep to the sounds of the rainforest.",
      price: 320,
      cancellation: "Free cancellation",
      rating: 4.9,
      reviews: 847,
    },
  ];
  const { register, handleSubmit } = useForm({
    defaultValues: {
      destination: "Costa Rica",
      checkIn: "2026-05-10",
      checkOut: "2026-05-17",
      guests: "2 Adults",
    },
  });

  const onSubmit = (data) => {
    console.log("Search Query:", data);
    // Add your routing or API logic here
  };

  return (
    <div className="">
      <div className=" heroBg">
        <div className="container">
          <p className="text-[#63b389] text-sm font-medium mb-2 uppercase tracking-wide">
            Explore Freely
          </p>
          <h1 className="text-white text-4xl font-bold mb-8">
            Hand-Picked Hotels & Lodges
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">
                  Destination
                </label>
                <input
                  {...register("destination")}
                  className="bg-[#f7f7f2] border-none rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-[#52a37a] outline-none"
                  placeholder="Where to?"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">
                  Check-In
                </label>
                <input
                  type="date"
                  {...register("checkIn")}
                  className="bg-[#f7f7f2] border-none rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-[#52a37a] outline-none appearance-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">
                  Check-Out
                </label>
                <input
                  type="date"
                  {...register("checkOut")}
                  className="bg-[#f7f7f2] border-none rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-[#52a37a] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">
                  Guests
                </label>
                <select
                  {...register("guests")}
                  className="bg-[#f7f7f2] border-none rounded-xl p-4 text-gray-700 focus:ring-2 focus:ring-[#52a37a] outline-none appearance-none"
                >
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>Family (2+2)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-[#52a37a] hover:bg-[#448b67] text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              <BiSearch size={18} />
              Find Hotels
            </button>
          </form>
        </div>
      </div>
      <div className="flightCarHotelContainer p-10 min-h-screen">
        <div className=" mb-6 bg-[#eff6f0] border border-[#d1e4d5] p-3 rounded-xl flex items-center gap-2 text-[#4a7c59] text-sm">
          <div className="">
            <span>🤖</span>
            <strong>AI Picks:</strong> Both properties are eco-certified and
            match your wellness & nature preferences perfectly.
          </div>
        </div>

        <div className="">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelSearchSection;
