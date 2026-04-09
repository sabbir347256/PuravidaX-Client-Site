import { useForm, useWatch } from "react-hook-form";
import {
  FaArrowLeft,
  FaCogs,
  FaIdCard,
  FaMapMarkerAlt,
  FaMountain,
  FaPhoneAlt,
  FaShieldAlt,
  FaSnowflake,
  FaSuitcase,
  FaUsers,
} from "react-icons/fa";
import RentalPart from "./RentalPart";
import CarDetailsDynamicHeader from "../../utils/Cars/CarDetailsDynamicHeader";
import { carSteps } from "../../utils/Cars/CarStep";

const CarDetails = () => {

  const carInfo = {
    name: "Toyota RAV4 4x4",
    pricePerDay: 55,
    days: 7,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    features: [
      { icon: <FaUsers />, label: "5 Passengers" },
      { icon: <FaSuitcase />, label: "4 Large Bags" },
      { icon: <FaCogs />, label: "Automatic" },
      { icon: <FaSnowflake />, label: "Air Conditioning" },
      { icon: <FaMapMarkerAlt />, label: "GPS Included" },
      { icon: <FaPhoneAlt />, label: "24/7 Roadside Assist" },
      { icon: <FaShieldAlt />, label: "Full Coverage" },
      { icon: <FaMountain />, label: "4WD All-Terrain" },
    ],
  };

  const extrasList = [
    {
      id: "child_seat",
      name: "Child Seat (0-3 yrs)",
      desc: "Certified safety seat",
      price: 35,
    },
    {
      id: "booster_seat",
      name: "Booster Seat (4-11 yrs)",
      desc: "High-back booster",
      price: 28,
    },
    {
      id: "sim_card",
      name: "Costa Rica SIM Card",
      desc: "5GB data, unlimited calls",
      price: 22,
    },
    {
      id: "camping_kit",
      name: "Camping Kit",
      desc: "Tent, sleeping bags, cookware",
      price: 55,
    },
  ];

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      carName: carInfo.name,
      basePrice: carInfo.pricePerDay * carInfo.days,
      selectedExtras: [],
    },
  });

  const selectedExtrasIDs =
    useWatch({
      control,
      name: "selectedExtras",
    }) || [];

  const baseTotal = carInfo.pricePerDay * carInfo.days;
  const selectedExtrasData = extrasList.filter((item) =>
    selectedExtrasIDs.includes(item.id),
  );
  const extrasTotal = selectedExtrasData.reduce(
    (sum, item) => sum + item.price,
    0,
  );
  const finalTotal = baseTotal + extrasTotal;

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      selectedExtrasDetails: selectedExtrasData,
      totalAmount: finalTotal,
    };
    console.log("Full Booking Data:", finalData);
    alert("Check console for full data!");
  };
  return (
    
    <div>
      <CarDetailsDynamicHeader
        title="Car Details"
        subtitle="Select seats for both passengers - outbound and return"
        currentStep={2}
        steps={carSteps}
      ></CarDetailsDynamicHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#FAF9F6] flightCarHotelContainer  dynamic-paddingUP-Down" 
      >
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <img
                src={carInfo.image}
                alt={carInfo.name}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  {carInfo.name}
                </h1>
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">
                  SUV • Automatic • 4WD • 5 seats
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {carInfo.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl text-sm text-gray-700"
                    >
                      <span className="text-emerald-600">{f.icon}</span>{" "}
                      {f.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#112B1E] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
                  1
                </span>
                <h2 className="text-xl font-bold text-gray-800">
                  Rental Details
                </h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Pickup
                  </p>
                  <p className="font-bold text-gray-800">
                    SJO Airport Terminal
                  </p>
                  <p className="text-sm text-gray-500">
                    May 10, 2026 • 3:30 PM
                  </p>
                </div>
                <div className="hidden md:block border-l border-gray-200"></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Return
                  </p>
                  <p className="font-bold text-gray-800">
                    SJO Airport Terminal
                  </p>
                  <p className="text-sm text-gray-500">
                    May 17, 2026 • 12:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#112B1E] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
                  2
                </span>
                <h2 className="text-xl font-bold text-gray-800">
                  Extras & Protection
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800 text-sm">
                      Full Coverage Insurance
                    </p>
                    <p className="text-xs text-gray-400">
                      Included - zero excess
                    </p>
                  </div>
                  <span className="text-emerald-600 font-bold text-xs uppercase">
                    Included
                  </span>
                </div>

                {extrasList.map((extra) => (
                  <div
                    key={extra.id}
                    className="py-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-gray-800 text-sm">
                        {extra.name}
                      </p>
                      <p className="text-xs text-gray-400">{extra.desc}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-gray-700">
                        ${extra.price}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value={extra.id}
                          {...register("selectedExtras")}
                          className="sr-only peer"
                        />
                        <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="heroBg text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
                  3
                </span>
                <h2 className="text-xl font-bold text-gray-800">
                  Pickup Instructions
                </h2>
              </div>
              <div className="bg-emerald-50/50 rounded-2xl p-5 text-sm text-gray-700 space-y-2 border border-emerald-100">
                <p className="font-bold mb-2">After landing at SJO:</p>
                <p>1. Exit customs and collect your bags</p>
                <p>
                  2. Look for the{" "}
                  <span className="font-bold">PuraVida Rentals</span> desk in
                  Arrivals Hall A
                </p>
                <p>3. Show your booking confirmation & driver's license</p>
                <p>4. Your vehicle will be waiting in Lot B, Bay 12</p>
                <p className="pt-2 flex items-center gap-2 font-semibold">
                  <FaPhoneAlt size={12} /> 24/7 Rental Support:{" "}
                  <span className="text-emerald-700">+506 2290-8000</span>
                </p>
              </div>
            </div>
          </div>

          <RentalPart carInfo={carInfo} extrasList={extrasList} subMitButtonText={'Driver Details'} backButtonText={'Back To Cars'}></RentalPart>
        </div>
      </form>
    </div>
  );
};

export default CarDetails;
