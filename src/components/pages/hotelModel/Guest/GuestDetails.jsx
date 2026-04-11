import React from "react";
import { useForm } from "react-hook-form";
import { BiLock } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import HotelDynamicHeader from "../HotelStep/HotelDynamicHeader";
import { HotelStep } from "../HotelStep/HotelStep";
import { useNavigate } from "react-router";

const GuestDetails = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      arrivalTime: "2:00 PM (Standard check-in)",
      roomPreference: "No preference",
      specialOccasion: "None",
      dietary: [],
      additionalNotes: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Final Booking Data:", data);
    alert("Proceeding to Payment...");
    navigate('/hotel-booking-payment')
  };
  return (
    <div>
      <HotelDynamicHeader
        title={"Guest Details"}
        subtitle={"Tell us about your guests so we can prepare everything perfectly"}
        currentStep={3}
        steps={HotelStep}
      ></HotelDynamicHeader>
      <div className=" min-h-screen text-gray-800">
        <div className="flightCarHotelContainer">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row gap-8"
          >
            <div className="flex-1 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#1e4533] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <h2 className="text-xl font-bold">Lead Guest</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold ml-1">First Name</label>
                    <input
                      {...register("firstName")}
                      className="bg-[#f2f2eb] border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#52a37a]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold ml-1">Last Name</label>
                    <input
                      {...register("lastName")}
                      className="bg-[#f2f2eb] border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#52a37a]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold ml-1">Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="bg-[#f2f2eb] border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#52a37a]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold ml-1">Phone</label>
                    <input
                      {...register("phone")}
                      className="bg-[#f2f2eb] border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#52a37a]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#1e4533] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <h2 className="text-xl font-bold">Check-In Preferences</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold ml-1">
                      Estimated Arrival Time
                    </label>
                    <input
                      {...register("arrivalTime")}
                      className="bg-[#f2f2eb] border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#52a37a]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold ml-1">
                      Room Preference
                    </label>
                    <input
                      {...register("roomPreference")}
                      className="bg-[#f2f2eb] border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#52a37a]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold ml-1">
                    Special Occasion?
                  </label>
                  <input
                    {...register("specialOccasion")}
                    className="bg-[#f2f2eb] border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#52a37a]"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#1e4533] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <h2 className="text-xl font-bold">Special Requests</h2>
                </div>
                <label className="text-xs font-bold mb-3 block">
                  Dietary Restrictions / Allergies
                </label>
                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    "Vegetarian",
                    "Vegan",
                    "Gluten-free",
                    "Nut allergy",
                    "Halal",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={item}
                        {...register("dietary")}
                        className="w-4 h-4 rounded border-gray-300 text-[#2a6d4f] focus:ring-[#2a6d4f]"
                      />
                      {item}
                    </label>
                  ))}
                </div>
                <label className="text-xs font-bold mb-2 block">
                  Additional Notes for the Hotel
                </label>
                <textarea
                  {...register("additionalNotes")}
                  className="w-full bg-[#f2f2eb] border-none rounded-xl p-4 text-sm min-h-[120px] outline-none focus:ring-2 focus:ring-[#52a37a]"
                  placeholder="e.g. We'd love a room away from the road..."
                />
              </div>
            </div>

            <div className="lg:w-96">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm sticky top-10 border border-gray-100">
                <h3 className="text-lg font-bold mb-6">Booking Summary</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🏨</span>
                    <span className="text-sm font-medium text-gray-600">
                      Nayara Tented Camp
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <span className="text-lg">🛏️</span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Jungle Luxury Tent
                        </p>
                        <p className="text-[11px] text-gray-400">
                          May 10–17 • 7 nights
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-800">$2,240</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <span className="text-lg">🍳</span>
                      <span className="text-sm font-medium text-gray-700">
                        Daily Breakfast
                      </span>
                    </div>
                    <span className="font-bold text-gray-800">$140</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-6 mb-8">
                  <span className="font-bold text-xl">Total</span>
                  <span className="font-bold text-xl">$2,380</span>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-[#2a6d4f] hover:bg-[#1e4d38] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <BiLock size={18} /> Proceed to Payment
                  </button>
                  <button
                    type="button"
                    className="w-full border border-[#2a6d4f] text-[#2a6d4f] py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                  >
                    <BsArrowLeft size={18} /> Back to Rooms
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuestDetails;
