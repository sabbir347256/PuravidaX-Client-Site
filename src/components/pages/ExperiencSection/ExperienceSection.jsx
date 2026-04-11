import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const experiencesData = [
    {
      id: 1,
      tag: "MOST POPULAR",
      title: "Sunset Beach Horseback Ride",
      location: "Guanacaste Coast",
      duration: "3 hours",
      rating: "4.9",
      reviews: 247,
      price: 89,
      unit: "person",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500",
      category: "Adventure",
    },
    {
      id: 2,
      tag: "ADVENTURE",
      title: "Arenal Volcano Hike",
      location: "La Fortuna, Arenal",
      duration: "8 hours",
      rating: "4.8",
      reviews: 312,
      price: 65,
      unit: "person",
      image:
        "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=500",
      category: "Outdoors",
    },
    {
      id: 3,
      tag: "HIDDEN GEM",
      title: "Private Waterfall Swim",
      location: "Arenal Rainforest",
      duration: "4 hours",
      rating: "5.0",
      reviews: 89,
      price: 95,
      unit: "person",
      image:
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=500",
      category: "Wellness",
    },
    {
      id: 4,
      tag: "CULTURE",
      title: "Coffee Farm Morning Tour",
      location: "Monteverde",
      duration: "Half day",
      rating: "4.9",
      reviews: 178,
      price: 55,
      unit: "person",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500",
      category: "Food & Culture",
    },
    {
      id: 5,
      tag: "ROMANCE",
      title: "Private Sunset Sailing",
      location: "Gulf of Nicoya",
      duration: "3 hours",
      rating: "5.0",
      reviews: 201,
      price: 145,
      unit: "couple",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500",
      category: "Water Sports",
    },
    {
      id: 6,
      tag: "THRILL",
      title: "Cloud Forest Zip-Line",
      location: "Monteverde",
      duration: "5 hours",
      rating: "4.7",
      reviews: 425,
      price: 75,
      unit: "person",
      image:
        "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=500",
      category: "Adventure",
    },
  ];
  const categories = [
    "All",
    "Adventure",
    "Wellness",
    "Wildlife",
    "Water Sports",
    "Food & Culture",
    "Outdoors",
    "Spa & Relaxation",
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const { register, handleSubmit } = useForm();

  const onSearch = (data) => {
    console.log("Searching for:", data.searchTerm);
  };

  const filteredData =
    activeFilter === "All"
      ? experiencesData
      : experiencesData.filter((item) => item.category === activeFilter);
  return (
    <div className="min-h-screen">
      <div className="heroBg pt-12 pb-10 md:pt-20 md:pb-16 px-4">
        <header className="container">
          <nav className="text-white/60 text-xs md:text-sm mb-4">
            Home / <span className="text-white">Experiences</span>
          </nav>

          <h1 className="globalHeadingTextSize font-bold text-white mb-6 md:mb-10  leading-tight">
            Discover Costa Rica{" "}
            <span className="text-[#1f6b4e] italic font-medium block md:inline">
              Experiences
            </span>
          </h1>

          <form
            onSubmit={handleSubmit(onSearch)}
            className="flex bg-white rounded-xl p-1.5 md:p-2 shadow-xl max-w-3xl"
          >
            <input
              {...register("searchTerm")}
              placeholder="Search experiences..."
              className="flex-1 px-3 md:px-5 py-2 md:py-3 outline-none text-slate-700 text-sm md:text-base w-full"
            />
            <button className="globalButtonColor text-white px-5 md:px-10 py-2 md:py-3 rounded-lg font-bold hover:bg-[#154231] transition-all text-sm md:text-base shrink-0">
              Search
            </button>
          </form>
        </header>
      </div>

      <div className="bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="lg:px-60">
          <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-3 overflow-x-auto no-scrollbar p-4 md:p-6 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 md:px-6 py-2 rounded-full border text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-[#1e5d44] text-white border-[#1e5d44] shadow-md"
                    : "bg-white text-slate-600 border-stone-200 hover:border-stone-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredData.length > 0 ? (
            filteredData.map((exp) => (
              <ExperienceCard key={exp.id} data={exp}  />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-400">
              No experiences found in this category.
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ExperienceSection;
