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
    <div className="min-h-screen bg-[#fdfaf5]">
      <div className="heroBg  pt-16 pb-12 px-6 ">
        <header className="container">
          <nav className="text-white/60 text-sm mb-4">
            Home / <span className="text-white">Experiences</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 italic">
            Discover Costa Rica{" "}
            <span className="text-emerald-400 not-italic font-medium">
              Experiences
            </span>
          </h1>

          <form
            onSubmit={handleSubmit(onSearch)}
            className="flex bg-white rounded-xl p-2 shadow-lg"
          >
            <input
              {...register("searchTerm")}
              placeholder="Search experiences, places..."
              className="flex-1 px-4 py-2 outline-none text-slate-700"
            />
            <button className="globalButtonColor text-white px-8 py-2 rounded-lg font-bold hover:bg-[#154231] transition-colors">
              Search
            </button>
          </form>
        </header>
      </div>

      <div>
        <div className=" ">
          <div className="bg-white border-b">
            <div className="flex flex-wrap gap-3  container   p-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                    activeFilter === cat
                      ? "bg-[#1e5d44] text-white border-[#1e5d44]"
                      : "bg-white text-slate-600 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container dynamic-paddingUP-Down">
            {filteredData.map((exp) => (
              <ExperienceCard key={exp.id} data={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
