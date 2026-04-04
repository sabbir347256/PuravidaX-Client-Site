import React, { useState } from "react";

const TravelersReview = () => {
  const testimonials = [
    {
      stars: 5,
      text: `"Pura Vida made our honeymoon absolutely unforgettable. The personalized itinerary was beyond perfect — every detail was exactly us."`,
      name: "Sarah & James",
      location: "San Francisco, USA 🇺🇸",
    },
    {
      stars: 5,
      text: `"The private waterfall hike was just magical — secluded, stunning, and something we could never have found on our own."`,
      name: "Marcus T.",
      location: "London, UK 🇬🇧",
    },
    {
      stars: 5,
      text: `"The AI concierge felt like having a local best friend. It suggested a coffee farm visit that became the highlight of our entire trip."`,
      name: "Layla R.",
      location: "Toronto, Canada 🇨🇦",
    },
  ];

  const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

  return (
    <section className="dynamic-Padding bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-green-600 mb-2">Real Stories</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What Our <span className="italic">Travelers Say</span>
        </h2>

        <div className="relative">
          <div className="flex justify-center gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 rounded-xl shadow-md w-80 transition-all duration-300 ${
                  index === current
                    ? "opacity-100 scale-100"
                    : "opacity-50 scale-95 hidden sm:block"
                }`}
              >
                <div className="text-yellow-500 mb-2">
                  {"★".repeat(t.stars)}
                </div>
                <p className="italic mb-4">{t.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center uppercase font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition ${
                  current === idx ? "bg-green-700" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelersReview;
