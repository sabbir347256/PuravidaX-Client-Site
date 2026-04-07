import React from "react";

const CardDetails = ({ register }) => {
  return (
    <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-6">Card Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold mb-2">Card Number</label>
          <input
            {...register("cardNumber")}
            placeholder="**** **** **** 4242"
            className="w-full p-4 globalBg border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold mb-2">
              Cardholder Name
            </label>
            <input
              {...register("cardholderName")}
              className="w-full p-4 globalBg border rounded-xl"
            />
          </div>
          <div>
            <label className="block text-xs font-bold mb-2">Expiry Date</label>
            <input
              {...register("expiry")}
              placeholder="MM/YY"
              className="w-full p-4 globalBg border rounded-xl"
            />
          </div>
          <div>
            <label className="block text-xs font-bold mb-2">CVV</label>
            <input
              {...register("cvv")}
              placeholder="..."
              className="w-full p-4 globalBg border rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
