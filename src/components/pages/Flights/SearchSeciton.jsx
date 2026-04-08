import React from "react";
import FlightCard from "../utils/Flights/FlightCard";
import SearchInput from "../utils/Flights/SearchInput";
import { BiSearch } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

const SearchSeciton = () => {
  // useForm initialize
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="min-h-screen bg-[#F7F2E9]">
      <section className="bg-[#112B1E] pt-12 pb-24">
        <div className="container">
          <p className="text-[#5BA471] text-xs font-bold uppercase tracking-widest mb-2">
            Book Your Flight
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-medium mb-8">
            Search Flights to Costa Rica
          </h1>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Top Grid: Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <SearchInput label="FROM" name="from" register={register} />
                <SearchInput label="TO" name="to" register={register} />
                <SearchInput
                  label="DEPARTURE"
                  name="departure"
                  type="date"
                  register={register}
                />
                <SearchInput
                  label="RETURN"
                  name="return"
                  type="date"
                  register={register}
                />
              </div>

              {/* Bottom Row: Selects & Button */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col lg:flex-row gap-4 w-full md:w-auto">
                  <select
                    {...register("class")}
                    className="bg-[#F2F0EA] px-4 py-2 rounded-lg text-sm font-medium border-none outline-none"
                  >
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                  </select>

                  <select
                    {...register("passengers")}
                    className="bg-[#F2F0EA] px-4 py-2 rounded-lg text-sm font-medium border-none outline-none"
                  >
                    <option value="1 Passenger">1 Passenger</option>
                    <option value="2 Passengers">2 Passengers</option>
                    <option value="3 Passengers">3 Passengers</option>
                  </select>

                  <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer ml-2">
                    <input
                      type="checkbox"
                      {...register("priceAlerts")}
                      className="rounded text-[#2D4A3E]"
                    />
                    Price Alerts
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#215E41] hover:bg-[#1A4A33] text-white px-8 py-3 rounded-xl flex items-center gap-2 font-semibold transition-all w-full md:w-auto justify-center"
                >
                  <BiSearch size={18} /> Search Flights
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className=" flight-dynamic-Padding container dynamic-paddingUP-Down flightCarHotelContainer">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#2D4A3E] text-xl font-bold">
            Your Flight Options
          </h2>
          <button className="bg-[#F2F0EA] px-4 py-2 rounded-full text-xs font-bold border border-gray-200">
            Sort: Best Match
          </button>
        </div>

        <div className="bg-[#E9F0EB] border border-[#D1E1D6] rounded-xl p-4 flex items-center gap-3 mb-8">
          <GiSparkles className="text-[#215E41]" size={18} />
          <p className="text-[#215E41] text-sm font-medium">
            <span className="font-bold">AI Recommendation:</span> I found
            nonstop flights that land early enough for your first evening plans
            at the lodge.
          </p>
        </div>

        <div className="space-y-4">
          <NavLink to='/flight-details'>
            <FlightCard
              airline="United Airlines"
              model="Boeing 737-800"
              depTime="8:15 AM"
              depCity="SFO"
              arrTime="2:45 PM"
              arrCity="SJO"
              duration="6h 30m · Nonstop"
              price="428"
              tag="Recommended"
              tagColor="bg-[#D1F7E2] text-[#215E41]"
              isSelected
            />
          </NavLink>
          <FlightCard
            airline="Alaska Airlines"
            model="Airbus A321"
            depTime="11:00 AM"
            depCity="SFO"
            arrTime="6:15 PM"
            arrCity="SJO"
            duration="7h 15m · Nonstop"
            price="456"
            subtext="Per Person · Late Arrival"
          />
          <FlightCard
            airline="Copa Airlines"
            model="Boeing 737 MAX"
            depTime="7:00 AM"
            depCity="SFO"
            arrTime="4:45 PM"
            arrCity="SJO"
            duration="9h 45m · 1 stop (PTY)"
            price="392"
            tag="Cheapest"
            tagColor="bg-[#FEF3C7] text-[#92400E]"
          />
        </div>
      </section>
    </div>
  );
};

export default SearchSeciton;
