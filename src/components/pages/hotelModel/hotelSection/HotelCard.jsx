import React from "react";
import { BiMapPin } from "react-icons/bi";
import { SiTarget } from "react-icons/si";
import { NavLink } from "react-router";

const HotelCard = ({ hotel }) => {
  const {
    image,
    name,
    location,
    type,
    tags,
    description,
    price,
    cancellation,
    rating,
    reviews,
  } = hotel;
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-3/5 p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>

          <div className="flex items-center text-gray-400 text-sm mb-4">
            <BiMapPin size={14} className="mr-1" />
            <span>
              {location} • {type}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#f2f4f1] text-[#6d7a6e] text-xs px-3 py-1.5 rounded-full flex items-center gap-1 font-medium"
              >
                {tag.icon} {tag.label}
              </span>
            ))}
          </div>

          <p className="text-gray-500 italic text-sm leading-relaxed mb-6">
            "{description}"
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-[#52a37a] text-2xl font-bold">${price}</span>
            <span className="text-gray-400 text-xs">
              per night • {cancellation}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <SiTarget className="text-orange-400 fill-orange-400" size={16} />
              <span className="font-bold text-gray-700">{rating}</span>
              <span className="text-gray-400 text-xs">({reviews})</span>
            </div>
            <NavLink to='/hotel-details'>
              <button className="bg-[#52a37a] hover:bg-[#448b67] text-white px-6 py-2.5 rounded-xl font-semibold transition-colors text-sm">
                View & Book
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
