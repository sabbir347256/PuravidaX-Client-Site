import React from "react";

const RoomOptions = ({ id, register, title, details, price, total, tags, image }) => {
  return (
    <label className="flex border rounded-2xl overflow-hidden cursor-pointer hover:border-[#52a37a] transition-all has-[:checked]:border-[#52a37a] has-[:checked]:bg-[#f9fbf9]">
      <input
        type="radio"
        {...register("selectedRoom")}
        value={id}
        className="hidden"
      />
      <img src={image} alt={title} className="w-32 md:w-48 object-cover" />
      <div className="flex-1 p-4 flex justify-between">
        <div>
          <h4 className="font-bold text-gray-800">{title}</h4>
          <p className="text-[10px] text-gray-500 mb-2">{details}</p>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-[9px] px-2 py-1 rounded text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right border-l pl-4 flex flex-col justify-center min-w-[100px]">
          <div className="text-xl font-bold text-gray-800">${price}</div>
          <div className="text-[10px] text-gray-400">per night</div>
          <div className="text-[10px] text-gray-500 mt-1 font-medium">
            Total: ${total}
          </div>
          <div className="mt-2 w-5 h-5 border-2 rounded-full ml-auto flex items-center justify-center peer-checked:bg-green-500">
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 transition-opacity"></div>
          </div>
        </div>
      </div>
    </label>
  );
};

export default RoomOptions;
