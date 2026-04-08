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
  //   const carInfo = {
  //     name: "Toyota RAV4 4x4",
  //     pricePerDay: 55,
  //     days: 7,
  //     image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf", // আপনার ইমেজের লিঙ্ক এখানে দিন
  //     features: [
  //       { icon: <FaUsers />, label: "5 Passengers" },
  //       { icon: <FaSuitcase />, label: "4 Large Bags" },
  //       { icon: <FaCogs />, label: "Automatic" },
  //       { icon: <FaSnowflake />, label: "Air Conditioning" },
  //       { icon: <FaMapMarkerAlt />, label: "GPS Included" },
  //       { icon: <FaPhoneAlt />, label: "24/7 Roadside Assist" },
  //       { icon: <FaShieldAlt />, label: "Full Coverage" },
  //       { icon: <FaMountain />, label: "4WD All-Terrain" },
  //     ],
  //   };

  //   const [extras, setExtras] = useState([
  //     {
  //       id: 1,
  //       name: "Full Coverage Insurance",
  //       desc: "Included - zero excess",
  //       price: 0,
  //       status: "Included",
  //     },
  //     {
  //       id: 2,
  //       name: "GPS / Navigation",
  //       desc: "Pre-loaded offline maps",
  //       price: 0,
  //       status: "Included",
  //     },
  //     {
  //       id: 3,
  //       name: "Child Seat (0-3 yrs)",
  //       desc: "Certified safety seat",
  //       price: 35,
  //       selected: false,
  //     },
  //     {
  //       id: 4,
  //       name: "Booster Seat (4-11 yrs)",
  //       desc: "High-back booster",
  //       price: 28,
  //       selected: false,
  //     },
  //     {
  //       id: 5,
  //       name: "Costa Rica SIM Card",
  //       desc: "5GB data, unlimited calls",
  //       price: 22,
  //       selected: false,
  //     },
  //     {
  //       id: 6,
  //       name: "Camping Kit",
  //       desc: "Tent, sleeping bags, cookware",
  //       price: 55,
  //       selected: false,
  //     },
  //   ]);

  //   const toggleExtra = (id) => {
  //     setExtras(
  //       extras.map((item) =>
  //         item.id === id ? { ...item, selected: !item.selected } : item,
  //       ),
  //     );
  //   };

  //   const baseTotal = carInfo.pricePerDay * carInfo.days;
  //   const extrasTotal = extras.reduce(
  //     (sum, item) => sum + (item.selected ? item.price : 0),
  //     0,
  //   );
  //   const finalTotal = baseTotal + extrasTotal;

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
    // <div className="bg-[#FAF9F6] min-h-screen p-4 md:p-10">
    //   <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
    //     <div className="lg:col-span-2 space-y-6">
    //       <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
    //         <img
    //           src={carInfo.image}
    //           alt={carInfo.name}
    //           className="w-full h-64 md:h-96 object-cover"
    //         />
    //         <div className="p-6">
    //           <h1 className="text-3xl font-bold text-gray-800">
    //             {carInfo.name}
    //           </h1>
    //           <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">
    //             SUV • Automatic • 4WD • 5 seats
    //           </p>

    //           <div className="grid grid-cols-2 gap-3 mt-6">
    //             {carInfo.features.map((f, i) => (
    //               <div
    //                 key={i}
    //                 className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl text-sm text-gray-700"
    //               >
    //                 <span className="text-emerald-600">{f.icon}</span> {f.label}
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
    //         <div className="flex items-center gap-3 mb-4">
    //           <span className="heroBg text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
    //             1
    //           </span>
    //           <h2 className="text-xl font-bold text-gray-800">
    //             Rental Details
    //           </h2>
    //         </div>
    //         <div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">
    //           <div>
    //             <p className="text-[10px] font-bold text-gray-400 uppercase">
    //               Pickup
    //             </p>
    //             <p className="font-bold text-gray-800">SJO Airport Terminal</p>
    //             <p className="text-sm text-gray-500">May 10, 2026 • 3:30 PM</p>
    //           </div>
    //           <div className="hidden md:block border-l border-gray-200"></div>
    //           <div>
    //             <p className="text-[10px] font-bold text-gray-400 uppercase">
    //               Return
    //             </p>
    //             <p className="font-bold text-gray-800">SJO Airport Terminal</p>
    //             <p className="text-sm text-gray-500">May 17, 2026 • 12:00 PM</p>
    //           </div>
    //         </div>
    //         <div className="mt-4 flex justify-between items-center px-2">
    //           <p className="text-gray-600 font-medium">
    //             ${carInfo.pricePerDay}/day × {carInfo.days} days
    //           </p>
    //           <p className="text-2xl font-bold text-gray-800">${baseTotal}</p>
    //         </div>
    //       </div>

    //       <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
    //         <div className="flex items-center gap-3 mb-6">
    //           <span className="heroBg text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
    //             2
    //           </span>
    //           <h2 className="text-xl font-bold text-gray-800">
    //             Extras & Protection
    //           </h2>
    //         </div>
    //         <div className="divide-y divide-gray-100">
    //           {extras.map((extra) => (
    //             <div
    //               key={extra.id}
    //               className="py-4 flex items-center justify-between"
    //             >
    //               <div>
    //                 <p className="font-bold text-gray-800 text-sm">
    //                   {extra.name}
    //                 </p>
    //                 <p className="text-xs text-gray-400">{extra.desc}</p>
    //               </div>
    //               <div className="flex items-center gap-4">
    //                 {extra.status === "Included" ? (
    //                   <span className="text-emerald-600 font-bold text-xs uppercase tracking-tight">
    //                     Included
    //                   </span>
    //                 ) : (
    //                   <>
    //                     <span className="font-bold text-gray-700">
    //                       ${extra.price}
    //                     </span>
    //                     <button
    //                       onClick={() => toggleExtra(extra.id)}
    //                       className={`w-10 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${extra.selected ? "bg-emerald-500" : "bg-gray-200"}`}
    //                     >
    //                       <div
    //                         className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${extra.selected ? "translate-x-4" : "translate-x-0"}`}
    //                       ></div>
    //                     </button>
    //                   </>
    //                 )}
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //   <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
    //     <div className="flex items-center gap-3 mb-4">
    //       <span className="heroBg text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
    //         3
    //       </span>
    //       <h2 className="text-xl font-bold text-gray-800">
    //         Pickup Instructions
    //       </h2>
    //     </div>
    //     <div className="bg-emerald-50/50 rounded-2xl p-5 text-sm text-gray-700 space-y-2 border border-emerald-100">
    //       <p className="font-bold mb-2">After landing at SJO:</p>
    //       <p>1. Exit customs and collect your bags</p>
    //       <p>
    //         2. Look for the{" "}
    //         <span className="font-bold">PuraVida Rentals</span> desk in
    //         Arrivals Hall A
    //       </p>
    //       <p>3. Show your booking confirmation & driver's license</p>
    //       <p>4. Your vehicle will be waiting in Lot B, Bay 12</p>
    //       <p className="pt-2 flex items-center gap-2 font-semibold">
    //         <FaPhoneAlt size={12} /> 24/7 Rental Support:{" "}
    //         <span className="text-emerald-700">+506 2290-8000</span>
    //       </p>
    //     </div>
    //   </div>
    //     </div>

    //     <div className="lg:col-span-1">
    //       <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-10">
    //         <h3 className="text-lg font-bold text-gray-800 mb-6">
    //           Rental Summary
    //         </h3>

    //         <div className="space-y-4 border-b border-gray-100 pb-6">
    //           <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
    //             🚗 {carInfo.name}
    //           </div>
    //           <div className="flex justify-between text-sm text-gray-500">
    //             <span>
    //               ${carInfo.pricePerDay}/day × {carInfo.days}
    //             </span>
    //             <span className="font-bold text-gray-800">${baseTotal}</span>
    //           </div>

    //           {extras
    //             .filter((e) => e.selected)
    //             .map((item) => (
    //               <div
    //                 key={item.id}
    //                 className="flex justify-between text-sm text-gray-500"
    //               >
    //                 <span>{item.name}</span>
    //                 <span className="font-bold text-gray-800">
    //                   +${item.price}
    //                 </span>
    //               </div>
    //             ))}
    //         </div>

    //         <div className="flex justify-between items-center py-6">
    //           <p className="text-xl font-bold text-gray-800">Total</p>
    //           <p className="text-3xl font-black text-gray-800">${finalTotal}</p>
    //         </div>

    //         <div className="space-y-3">
    //           <button className="w-full bg-[#52AD83] hover:bg-[#43926e] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
    //             <FaIdCard /> Driver Details
    //           </button>
    //           <button className="w-full border-2 border-emerald-600 text-emerald-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all">
    //             <FaArrowLeft size={12} /> Back to Cars
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <CarDetailsDynamicHeader
        title="Car Details"
        subtitle="Select seats for both passengers - outbound and return"
        currentStep={2}
        steps={carSteps}
      ></CarDetailsDynamicHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#FAF9F6] min-h-screen p-4 md:p-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          {/* <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-10">
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              Rental Summary
            </h3>

            <div className="space-y-4 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                🚗 {carInfo.name}
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>
                  ${carInfo.pricePerDay}/day × {carInfo.days} days
                </span>
                <span className="font-bold text-gray-800">${baseTotal}</span>
              </div>
              {selectedExtrasData.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm text-gray-500"
                >
                  <span>{item.name}</span>
                  <span className="font-bold text-gray-800">
                    +${item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center py-6">
              <p className="text-xl font-bold text-gray-800">Total</p>
              <p className="text-3xl font-black text-gray-800">${finalTotal}</p>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full bg-[#52AD83] hover:bg-[#43926e] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-100"
              >
                <FaIdCard /> Driver Details
              </button>
              <button
                type="button"
                className="w-full border-2 border-emerald-600 text-emerald-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all"
              >
                <FaArrowLeft size={12} /> Back to Cars
              </button>
            </div>
          </div>
        </div> */}
          <RentalPart carInfo={carInfo} extrasList={extrasList}></RentalPart>
        </div>
      </form>
    </div>
  );
};

export default CarDetails;
