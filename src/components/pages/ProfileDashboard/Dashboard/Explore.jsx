import React from "react";
import ProfileDynamicHeader from "../HeaderPart/ProfileDynamicHeader";
import HotelCard from "../../hotelModel/hotelSection/HotelCard";

const Explore = () => {
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
  return (
    <div>
      <ProfileDynamicHeader
        breadcrumb="Hotels"
        title="Where You'll Stay"
        dateRange="May 10–17, 2026 · 7 nights across 2 iconic regions"
        details=""
      />
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

export default Explore;
