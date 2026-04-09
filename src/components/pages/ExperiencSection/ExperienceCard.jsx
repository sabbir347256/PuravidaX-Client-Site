import React from "react";
import { BiMapPin } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { SiTarget } from "react-icons/si";

const ExperienceCard = ({ data }) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#1e5d44]/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
            {data.tag}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <CgLock size={14} />
            <span>{data.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <SiTarget size={14} className="text-orange-400 fill-orange-400" />
            <span className="font-bold text-slate-700">{data.rating}</span>
            <span className="text-slate-400">({data.reviews})</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
          {data.title}
        </h3>

        <div className="flex items-center gap-1 text-slate-400 text-xs mb-4">
          <BiMapPin size={14} className="text-red-400" />
          <span>{data.location}</span>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          A magical ride along pristine beaches as the sun dips below the
          Pacific horizon.
        </p>

        <div className="flex justify-between items-end">
          <div className="mb-2">
            <span className="text-2xl font-black text-slate-900">
              ${data.price}
            </span>
            <span className="text-slate-400 text-xs ml-1">per {data.unit}</span>
          </div>
          <button className="globalButtonColor hover:bg-[#154231] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95">
            Book Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
