import React from "react";
import { FaStripe } from "react-icons/fa";

const CarPaymentMethod = ({register}) => {
  const paymentMethods = [
    {
      name: "",
      icon: <FaStripe size={60} />,
    },
    // ,
    // {
    //   name: "PayPal",
    //   icon: <FaPaypal size={40} />,
    // },
    // {
    //   name: "Apple Pay",
    //   icon: <FaApplePay size={40} />,
    // },
    // {
    //   name: "Google Pay",
    //   icon: <FaGooglePay size={40} />,
    // },
  ];
  return (
    <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-6">Payment Method</h2>
      <div className="grid grid-cols-4 gap-3 mb-8">
        {paymentMethods.map((method, index) => (
          <label key={method.name} className="cursor-pointer group w-full">
            <input
              type="radio"
              value={method.name}
              {...register("paymentMethod")}
              className="hidden peer"
              defaultChecked={index === 0}
            />
            <div className="transition-all h-full text-center">
              <div className="flex flex-col items-center justify-center p-3 border-2 rounded-xl peer-checked:border-green-600 peer-checked:bg-gray-300">
                {method.icon}
                <span className="text-[16px] font-medium uppercase tracking-tight">
                  {method.name}
                </span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};

export default CarPaymentMethod;
