import { MapPin, Star } from "lucide-react";
import React from "react";

const SixHotelCard = ({ data }) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row h-auto md:h-[320px] mb-6">
      <div
        className="w-full md:w-[45%] bg-cover bg-center h-56 md:h-full"
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className="w-full md:w-[55%] p-8 flex flex-col justify-between">
        <div>
          <span className="bg-[#e8f5ed] text-[#52a37a] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {data.days}
          </span>
          <h4 className="text-2xl font-bold mt-4 text-[#1e4533]">
            {data.name}
          </h4>
          <div className="flex items-center text-gray-400 text-xs mt-1 gap-1">
            <MapPin size={14} /> {data.location}
          </div>

          <div className="flex gap-2 mt-4">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-gray-50 text-gray-400 px-3 py-1.5 rounded-lg border border-gray-100 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-gray-500 text-xs italic leading-relaxed line-clamp-3">
            "{data.description}"
          </p>
        </div>

        <div className="flex justify-between items-end mt-4">
          <div>
            <span className="text-3xl font-bold text-[#1e4533]">
              ${data.price}
            </span>
            <span className="text-[10px] text-gray-400 ml-1 font-medium">
              per night
            </span>
          </div>
          <div className="flex items-center gap-1 text-orange-400 text-sm font-bold">
            <Star size={14} fill="currentColor" /> {data.rating}
            <span className="text-gray-400 font-normal ml-1">
              ({data.reviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixHotelCard;
