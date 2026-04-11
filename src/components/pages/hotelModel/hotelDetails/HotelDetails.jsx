import React from "react";
import { useForm } from "react-hook-form";
import { BiCalendar, BiUser } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import RoomOptions from "./RoomOptions";
import HotelDynamicHeader from "../HotelStep/HotelDynamicHeader";
import { HotelStep } from "../HotelStep/HotelStep";
import AddOnRow from "./AddOnRow";
import { useNavigate } from "react-router";

const HotelDetails = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      selectedRoom: "jungle-luxury",
      addons: {
        breakfast: true,
        spa: false,
        airport: false,
      },
    },
  });

  const selectedRoomValue = watch("selectedRoom");
  const addonsValue = watch("addons");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate('/guest-details')
  };
  return (
    <div className="">
      <HotelDynamicHeader
        title={"Hotel Details"}
        subtitle={"Review amenities and choose your perfect room"}
        currentStep={2}
        steps={HotelStep}
      ></HotelDynamicHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flightCarHotelContainer flex flex-col lg:flex-row gap-8"
      >
        <div className="flex-1 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#1e4533] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              <h2 className="text-xl font-bold text-gray-800">
                Available Room Types
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <BiCalendar size={16} className="text-[#52a37a]" />
              <span>May 10-17, 2026 • 7 nights • 2 adults</span>
            </div>

            <div className="space-y-4">
              <RoomOptions
                id="jungle-luxury"
                register={register}
                title="Jungle Luxury Tent"
                details="King bed • 45m² • Jungle view • Private deck"
                price={320}
                total={2240}
                tags={["Free cancellation", "Breakfast included", "Wi-Fi"]}
                image="https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
              />
              <RoomOptions
                id="volcano-view"
                register={register}
                title="Volcano View Premium"
                details="King bed • 60m² • Volcano panorama • Private plunge pool"
                price={420}
                total={2940}
                tags={[
                  "Free cancellation",
                  "Breakfast + Dinner",
                  "Private pool",
                ]}
                image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#1e4533] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              <h2 className="text-xl font-bold text-gray-800">
                Add-ons for Your Stay
              </h2>
            </div>

            <div className="space-y-6">
              <AddOnRow
                name="addons.breakfast"
                register={register}
                icon="🍳"
                title="Daily Breakfast"
                desc="Full Costa Rican breakfast for 2 • 7 days"
                price={140}
              />
              <AddOnRow
                name="addons.spa"
                register={register}
                icon="💆"
                title="Spa Package"
                desc="2 x 60-min massages + hot spring access"
                price={180}
              />
            </div>
          </div>
        </div>

        <div className="lg:w-80">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm sticky top-10">
            <h3 className="text-lg font-bold mb-4">Your Selection</h3>
            <div className="space-y-3 text-sm border-b pb-4 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>🏨 {selectedRoomValue || "Select a room"}</span>
                <span>—</span>
              </div>
              {addonsValue.breakfast && (
                <div className="flex justify-between text-gray-600">
                  <span>🍳 Daily Breakfast</span>
                  <span className="text-[#52a37a] font-bold">$140</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg">Total</span>
              <span>—</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2a6d4f] hover:bg-[#1e4d38] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 mb-3"
            >
              <BiUser size={18} /> Enter Guest Details
            </button>
            <button
              type="button"
              className="w-full border border-[#2a6d4f] text-[#2a6d4f] py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              <BsArrowLeft size={18} /> Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelDetails;
