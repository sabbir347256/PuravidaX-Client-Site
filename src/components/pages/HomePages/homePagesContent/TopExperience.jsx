import React from "react";

const TopExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Sunset Beach Horseback Ride",
      location: "Guanacaste",
      rating: "4.9",
      duration: "3h",
      price: "$89",
      tag: "POPULAR",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      title: "Arenal Volcano Hike",
      location: "La Fortuna",
      rating: "4.8",
      duration: "6h",
      price: "$65",
      tag: "ADVENTURE",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id: 3,
      title: "Private Waterfall Hike",
      location: "Arenal",
      rating: "5.0",
      duration: "4h",
      price: "$95",
      tag: "HIDDEN GEM",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      id: 4,
      title: "Yoga & Wellness Retreat",
      location: "Nicoya",
      rating: "4.7",
      duration: "Full Day",
      price: "$120",
      tag: "WELLNESS",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
  ];
  return (
    <div className="bg-gray-100  dynamic-Padding">
      <section className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-green-600 text-sm font-medium mb-2">
              — What To Do
            </p>
            <h2 className="text-5xl font-bold">
              Top <span className="text-green-600 italic">Experiences</span>
            </h2>
          </div>
          <button className="bg-primary hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  From {item.price}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <div className="flex items-center text-sm text-gray-500 gap-2">
                  ⭐ {item.rating}
                  <span>•</span>
                  {item.duration}
                  <span>•</span>
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopExperience;
