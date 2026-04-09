import React from "react";
import { useForm } from "react-hook-form";
import PaymentMethod from "../Flights/Payment/PaymentMethod";
import ExperienceSummary from "./ExperienceSummary";

const ExperiencePaymentSection = () => {
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
      <div>
        <div className="min-h-screen globalBg md:p-8 text-gray-800 flightCarHotelContainer">
          <div className="container dynamic-paddingUP-Down">
            <header className="mb-6">
              <h1 className="text-2xl font-bold">Complete Your Booking</h1>
              <p className="text-gray-500 text-sm font-medium">
                Secure payment — your adventure is just one step away.
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

              <ExperienceSummary />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePaymentSection;
