import React from "react";

const CostaricaFrame = () => {
  return (
    <div className="bg-[#f5eee6] text-[#2d4a3e] dynamic-Padding">
      <div className=" container allPY">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest border-l-2 border-[#2d4a3e] pl-2">
            Visual Stories
          </span>
          <h1 className="text-5xl font-bold mt-2">
            Costa Rica in{" "}
            <span className="italic font-medium text-[#4a7c59]">
              Every Frame
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 grid grid-cols-3 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                alt="Beach"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/dunn8qryc/image/upload/v1775166229/d130f38725de9a0c0e85b35f61d91b4d99f373fb_qjzmi4.jpg"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                alt="Parrot"
              />
            </div>

            <div className="col-span-1 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                alt="Toucan"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1542332213-31f87348057f"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                alt="Volcano"
              />
            </div>
          </div>
          <div className="md:col-span-1 overflow-hidden rounded-2xl">
            <img
              src="https://res.cloudinary.com/dunn8qryc/image/upload/v1775166229/d130f38725de9a0c0e85b35f61d91b4d99f373fb_qjzmi4.jpg"
              className="w-full h-full min-h-[550px] object-cover hover:scale-105 transition-transform duration-500"
              alt="Hanging Bridge"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostaricaFrame;
