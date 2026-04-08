import React from "react";
import { useForm } from "react-hook-form";
import SearchInput from "../../utils/Flights/SearchInput";
import { BiSearch } from "react-icons/bi";
import CarSearchInput from "../../utils/Cars/CarSearchInput";
import CarSearchCard from "../../utils/Cars/CarSearchCard";
import car1 from '../../../../images/1.jpg';
import car2 from '../../../../images/2.jpg';
import car3 from '../../../../images/3.jpg';
import { useNavigate } from "react-router";

const CarSearchSection = () => {
  const cars = [
    {
      image: car1,
      model: "Toyota RAV4 4x4",
      type: "Best Value | 4x4 AWD",
      price: 55,
      description: "Roadside assist",
      seats: 5,
      bags: 4,
      coverage: "Full coverage included",
      rating: 4.9,
      rentals: 2340,
    },
    {
      image: car2,
      model: "Hyundai Tucson",
      type: "Mid-size SUV | 4x4 AWD",
      price: 68,
      description: "Full coverage included",
      seats: 5,
      bags: 5,
      coverage: "Full coverage included",
      rating: 4.7,
      rentals: 1200,
    },
    {
      image: car3,
      model: "Suzuki Jimny",
      type: "Budget Pick | Compact 4x4",
      price: 42,
      description: "Basic coverage",
      seats: 4,
      bags: 2,
      coverage: "Basic coverage",
      rating: 4.5,
      rentals: 800,
    },
  ];

  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Final Submitted Form Data:", data);
    navigate('/car-details')
  };

  const handleSelect = (car) => {
    console.log("Card Selected:", car);
    setValue("selectedCar", car);
    handleSubmit(onSubmit)(); 
  };

  return (
    <div className="globalBg ">
      <section className="heroBg  pt-12 dynamic-paddingUP-Down ">
        <div className="container mx-auto px-4">
          <p className="text-[#5BA471] text-xs font-bold uppercase tracking-widest mb-2">
            Car Rental
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-medium mb-8">
            Choose your vehicle
          </h1>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <CarSearchInput
                  label="PICKUP LOCATION"
                  name="pickupLocation"
                  register={register}
                />
                <CarSearchInput
                  label="PICKUP DATE"
                  name="pickupDate"
                  type="date"
                  register={register}
                />
                <CarSearchInput
                  label="RETURN DATE"
                  name="returnDate"
                  type="date"
                  register={register}
                />
                <CarSearchInput
                  label="VEHICLE TYPE"
                  name="vehicleType"
                  register={register}
                />
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-[#215E41] hover:bg-[#1A4A33] text-white px-10 py-3.5 rounded-xl flex items-center gap-2 font-semibold transition-all shadow-lg"
                >
                  <BiSearch size={20} /> Search Cars
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="flightCarHotelContainer mx-auto px-4 dynamic-paddingUP-Down ">
        <div className="flex flex-col gap-4">
          {cars.map((car, index) => (
            <CarSearchCard key={index} car={car} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSearchSection;
