import React from "react";
import { useForm } from "react-hook-form";
import { HotelStep } from "../HotelStep/HotelStep";
import HotelDynamicHeader from "../HotelStep/HotelDynamicHeader";
import HotelPaymentSystem from "./HotelPaymentSystem";
import HotelOrderSummary from "./HotelOrderSummary";

const HotelPaymentSection = () => {
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
        <HotelDynamicHeader
          title={"Complete Hotel Booking"}
          subtitle={"Secure your room — free cancellation until May 8."}
          currentStep={4}
          steps={HotelStep}
        ></HotelDynamicHeader>
        <div className="min-h-screen globalBg md:p-8 text-gray-800 flightCarHotelContainer">
          <div className="container dynamic-paddingUP-Down">
            <header className="mb-6">
              <h1 className="text-2xl font-bold">Complete Hotel Booking</h1>
              <p className="text-gray-500 text-sm font-medium">
                Secure your room — free cancellation until May 8.
              </p>
            </header>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col lg:flex-row gap-8"
            >
              <div className="flex-1 space-y-6">
                <HotelPaymentSystem register={register} />
                {/* <CardDetails register={register} />
                <BillingAddress register={register} /> */}
              </div>

              <HotelOrderSummary />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPaymentSection;
