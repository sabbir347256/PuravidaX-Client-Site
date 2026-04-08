import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { FaArrowLeft, FaIdCard } from "react-icons/fa";

const RentalPart = ({ carInfo, extrasList }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
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
    console.log({
      ...data,
      carName: carInfo.name,
      totalAmount: finalTotal,
      extrasDetails: selectedExtrasData,
    });
  };
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-10">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Rental Summary</h3>

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
              <span className="font-bold text-gray-800">+${item.price}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center py-6">
          <p className="text-xl font-bold text-gray-800">Total</p>
          <p className="text-3xl font-black text-gray-800">${finalTotal}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="w-full globalButtonColor hover:bg-[#43926e] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-100"
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

      <div className="hidden">
        {extrasList.map((extra) => (
          <input
            key={extra.id}
            type="checkbox"
            value={extra.id}
            {...register("selectedExtras")}
          />
        ))}
      </div>
    </div>
  );
};

export default RentalPart;
