import React from "react";
import { useForm } from "react-hook-form";
import { BiCreditCard, BiLock, BiLockAlt, BiLockOpen } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";
import FlightDetailsDynamicHeader from "../FlightDetailsDynamicHeader";
import { flightSteps } from "../FlightStep";

const PaymentSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymentMethod: "credit-card",
      cardholderName: "Sarah Johnson",
      firstName: "Sarah",
      lastName: "Johnson",
      city: "San Francisco",
      state: "CA",
      zip: "94110",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Check the console for the form data!");
  };
  return (
    <div>
        <FlightDetailsDynamicHeader title={'Procced Paymen'} subtitle={'Enhance your journey with add-ons and services'} currentStep={6} steps={flightSteps}></FlightDetailsDynamicHeader>
      <div className="min-h-screen globalBg  md:p-8 text-gray-800">
        <div className="container dynamic-paddingUP-Down">
          <header className="mb-6">
            <h1 className="text-2xl font-bold">Complete Flight Booking</h1>
            <p className="text-gray-500 text-sm font-medium">
              Secure your seats — your Costa Rica adventure starts here.
            </p>
          </header>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row gap-8"
          >
            <div className="flex-1 space-y-6">
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6">Payment Method</h2>

                <div className="grid grid-cols-4 gap-3 mb-8">
                  {["Credit Card", "PayPal", "Apple Pay", "Google Pay"].map(
                    (method) => (
                      <label key={method} className="cursor-pointer group">
                        <input
                          type="radio"
                          value={method}
                          {...register("paymentMethod")}
                          className="hidden peer"
                        />
                        <div className="flex flex-col items-center justify-center p-3 border-2 rounded-xl border-gray-100 peer-checked:border-emerald-600 transition-all h-full text-center">
                          {method === "Credit Card" && (
                            <BiCreditCard size={20} className="mb-1" />
                          )}
                          <span className="text-[10px] font-bold uppercase tracking-tight">
                            {method}
                          </span>
                        </div>
                      </label>
                    ),
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Card Number
                    </label>
                    <input
                      {...register("cardNumber")}
                      placeholder="**** **** **** 4242"
                      className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold mb-2">
                        Cardholder Name
                      </label>
                      <input
                        {...register("cardholderName")}
                        className="w-full p-4 bg-gray-50 border-none rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2">
                        Expiry Date
                      </label>
                      <input
                        {...register("expiry")}
                        placeholder="MM/YY"
                        className="w-full p-4 bg-gray-50 border-none rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2">
                        CVV
                      </label>
                      <input
                        {...register("cvv")}
                        placeholder="..."
                        className="w-full p-4 bg-gray-50 border-none rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 flex items-center text-[10px] text-gray-400 gap-2">
                  <BiLockOpen size={12} className="text-emerald-600" />
                  256-bit SSL encryption • PCI DSS Compliant • Fully Secure
                </p>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6">Billing Address</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold mb-2">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      className="w-full p-4 bg-gray-50 border-none rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      className="w-full p-4 bg-gray-50 border-none rounded-xl"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold mb-2">
                    Address
                  </label>
                  <input
                    {...register("address")}
                    placeholder="Street address"
                    className="w-full p-4 bg-gray-50 border-none rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-xs font-bold mb-2">City</label>
                    <input
                      {...register("city")}
                      className="w-full p-4 bg-gray-50 border-none rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2">
                      State
                    </label>
                    <input
                      {...register("state")}
                      className="w-full p-4 bg-gray-50 border-none rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2">ZIP</label>
                    <input
                      {...register("zip")}
                      className="w-full p-4 bg-gray-50 border-none rounded-xl"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="w-full lg:w-[380px]">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 sticky top-8">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      ✈️ Premium Economy × 2
                    </span>
                    <span className="font-bold">$856</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t pt-4">
                    <span className="text-gray-500 text-xs">
                      Travel Insurance
                    </span>
                    <span className="font-bold text-xs">$84</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 text-xs">Taxes & fees</span>
                    <span className="font-bold text-xs">$86</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4 mb-8">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl text-emerald-700">
                    $1,026
                  </span>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-[#1e5f43] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
                  >
                    <BiLockAlt size={16} /> Pay Now — $1,026
                  </button>
                  <button
                    type="button"
                    className="w-full border-2 border-emerald-800 text-emerald-800 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
                  >
                    Save Draft — Pay Later
                  </button>
                </div>

                <div className="mt-6 flex justify-between text-[10px] text-gray-400 px-2">
                  <span className="flex items-center gap-1">
                    <BiLock size={10} /> Secure
                  </span>
                  <span className="flex items-center gap-1">
                    <FiRotateCcw size={10} /> Free Cancellation
                  </span>
                  <span className="flex items-center gap-1">
                    <BsHeadphones size={10} /> 24/7 Support
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
