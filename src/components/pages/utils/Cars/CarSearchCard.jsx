import React from "react";
import { IoBagSharp, IoCallOutline, IoShieldHalfSharp } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";


const CarSearchCard = ({ car, onSelect }) => {
  const {
    model,
    image,
    price,
    type,
    seats,
    bags,
    coverage,
    rating,
    rentals,
    description,
  } = car;

  const tags = type ? type.split(" | ") : [];
  const features = description ? description.split(" | ") : [];

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4 items-center gap-6 w-full ">
      <div className="w-full sm:min-w-full md:min-w-min md:w-1/4 h-44 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={image}
          alt={model}
          className="w-full h-full object-contain object-cover"
        />
      </div>

      <div className="flex-1 space-y-4">
        <div className="">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{model}</h3>
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 mx-1 globalBg text-xs font-semibold text-gray-500 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-gray-600">
          <span className="flex items-center gap-1.5 globalTextColor"><MdOutlineAirlineSeatReclineNormal size='20' /> {seats} seats</span>
          <span className="flex items-center gap-1.5 globalTextColor"><IoBagSharp  className="globalTextColor" size='18'></IoBagSharp > {bags} bags</span>
          <span className="flex items-center gap-1.5 text-green-700 font-semibold">
            <IoShieldHalfSharp size="18" ></IoShieldHalfSharp> {coverage}
          </span>
          {features.map((f, i) => (
            <span key={i} className="flex items-center gap-1.5 globalTextColor">
              <IoCallOutline size='18' ></IoCallOutline> {f}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col items-end justify-between self-stretch">
        <div className="text-right">
          <div className="text-3xl font-bold globalTextColor">${price}</div>
          <div className="text-sm text-gray-400 font-medium">
            /day · 7 days = ${price * 7}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-end gap-3 w-full">
          <button
            onClick={() => onSelect(car)}
            className=" py-3 px-6 rounded-xl font-bold transition-all bg-white border-2 border-emerald-800 globalTextColor hover:bg-emerald-800 hover:text-white"
          >
            Select & Book
          </button>

          {rating && (
            <div className="flex items-center gap-1 text-sm">
              <span className="text-orange-400">★</span>
              <span className="font-bold text-gray-700">{rating}</span>
              <span className="text-gray-400">
                · {rentals.toLocaleString()} rentals
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarSearchCard;
