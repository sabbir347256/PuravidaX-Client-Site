import React from "react";

const BillingAddress = ({register}) => {
  return (
    <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-6">Billing Address</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold mb-2">First Name</label>
          <input
            {...register("firstName")}
            className="w-full p-4 globalBg border  rounded-xl"
          />
        </div>
        <div>
          <label className="block text-xs font-bold mb-2">Last Name</label>
          <input
            {...register("lastName")}
            className="w-full p-4 globalBg border  rounded-xl"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-xs font-bold mb-2">Address</label>
        <input
          {...register("address")}
          placeholder="Street address"
          className="w-full p-4 globalBg border  rounded-xl"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold mb-2">City</label>
          <input
            {...register("city")}
            className="w-full p-4 globalBg border  rounded-xl"
          />
        </div>
        <div>
          <label className="block text-xs font-bold mb-2">State</label>
          <input
            {...register("state")}
            className="w-full p-4 globalBg border  rounded-xl"
          />
        </div>
        <div>
          <label className="block text-xs font-bold mb-2">ZIP</label>
          <input
            {...register("zip")}
            className="w-full p-4 globalBg border  rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
