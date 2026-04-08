import React from "react";
import { useForm } from "react-hook-form";
import { BiCreditCard, BiLock, BiLockAlt, BiLockOpen } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";
import FlightDetailsDynamicHeader from "../FlightDetailsDynamicHeader";
import { flightSteps } from "../FlightStep";
import OrderSummary from "./OrderSummary";
import CardDetails from "./CardDetails";
import BillingAddress from "./BillingAddress";
import PaymentMethod from "./PaymentMethod";

const PaymentSection = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
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
      <div >
        <FlightDetailsDynamicHeader
          title={"Proceed Payment"}
          subtitle={"Enhance your journey with add-ons and services"}
          currentStep={6}
          steps={flightSteps}
        ></FlightDetailsDynamicHeader>
        <div className="min-h-screen globalBg md:p-8 text-gray-800 flightCarHotelContainer">
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
                <PaymentMethod register={register} />
                {/* <CardDetails register={register} />
                <BillingAddress register={register} /> */}
              </div>

              <OrderSummary />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
