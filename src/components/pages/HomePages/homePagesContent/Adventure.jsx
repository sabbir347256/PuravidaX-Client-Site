import React from "react";
import { BiCompass, BiLeaf } from "react-icons/bi";
import { SiTarget } from "react-icons/si";

const Adventure = () => {
  return (
    <section className="bg-[#f5f5f2] py-28">
      <div className="grid lg:grid-cols-2 gap-32 items-center container">
        <div>
          <p className="text-green-600 text-sm mb-2">What We Offer</p>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Create Your Costa Rica <br />
            <span className="text-green-600 italic font-semibold">
              Adventure
            </span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-md">
            Your personal AI concierge crafts a journey that’s uniquely yours —
            from volcanic peaks to golden beaches.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 bg-white rounded-xl p-8 shadow-sm border">
              <div className="bg-green-600 text-white p-3 rounded-lg">
                <BiLeaf size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Sustainable Travel
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Explore with a purpose. Our eco-tours support local
                  conservation and communities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-8 shadow-sm border">
              <div className="bg-green-600 text-white p-3 rounded-lg">
                <BiCompass size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Unique Experiences
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  From zip-lining through cloud forests to private sunset
                  sailing — unlock experiences most travelers never find.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-8 shadow-sm border">
              <div className="bg-green-600 text-white p-3 rounded-lg">
                <SiTarget size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Earn Rewards Every Trip
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Book experiences and earn Vida Points. Redeem for discounts,
                  room upgrades, and exclusive perks on future adventures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://res.cloudinary.com/dunn8qryc/image/upload/v1775166229/d130f38725de9a0c0e85b35f61d91b4d99f373fb_qjzmi4.jpg"
            alt="Waterfall"
            className="w-full h-[670px] object-cover rounded-3xl shadow-lg"
          />

          {/* Floating Card */}
          <div className="absolute bottom-5 left-5 bg-white rounded-xl px-5 py-3 shadow-md flex items-center gap-3">
            <div className="bg-green-600 text-white p-2 rounded-lg">📍</div>
            <div>
              <p className="font-semibold text-sm text-gray-800">
                Arenal Volcano, La Fortuna
              </p>
              <p className="text-xs text-gray-500">
                4.9 ★ · Most popular destination
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adventure;
