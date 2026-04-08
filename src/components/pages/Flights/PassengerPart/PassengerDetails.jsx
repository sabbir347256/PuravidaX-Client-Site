import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import PassengerInput from "./PassengerInput";
import SelectField from "./SelectField";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { BiLock, BiUser } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import FlightDetailsDynamicHeader from "../FlightDetailsDynamicHeader";
import { flightSteps } from "../FlightStep";
import { useNavigate } from "react-router";

const PassengerDetails = () => {
  const navigate = useNavigate();
  const defaultPassenger = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
    passportNumber: "",
    passportExpiry: "",
  };
  const pricePerPassenger = 428;
  const taxesPerPassenger = 43;

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      passengers: [{ ...defaultPassenger }],
      contact: {
        email: "",
        phone: "",
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "passengers",
  });

  const passengers = watch("passengers");
  const contact = watch("contact");

  const passengerCount = passengers?.length || 0;
  const flightTotal = passengerCount * pricePerPassenger;
  const taxTotal = passengerCount * taxesPerPassenger;
  const grandTotal = flightTotal + taxTotal;

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    navigate('/extras')
  };
  return (
    <div>
      <FlightDetailsDynamicHeader
        title={"Passenger Details"}
        subtitle={"Enter details as they appear on you passport"}
        currentStep={3}
        steps={flightSteps}
      ></FlightDetailsDynamicHeader>
      <div className="min-h-screen bg-[#F7F3EE] dynamic-paddingUP-Down flightCarHotelContainer">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2 space-y-6">
            {fields?.map((field, index) => (
              <div
                key={field.id}
                className="bg-white rounded-2xl border border-[#E8E1D8] shadow-sm p-5 md:p-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#1F6B4F] text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="text-[#1D3C34] font-bold text-lg">
                      Passenger {index + 1}
                      {index === 0 ? " — Lead Passenger" : ""}
                    </h3>
                  </div>

                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-medium"
                    >
                      <FiTrash2 size={16} />
                      Remove
                    </button>
                  )}
                </div>

                <div className="border border-[#ECE6DE] rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-[#1F6B4F] text-white text-[11px] font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1D3C34]">
                        Adult Passenger
                      </p>
                      <p className="text-xs text-gray-500">18 Years Or Older</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PassengerInput
                      label="First Name"
                      register={register(`passengers.${index}.firstName`, {
                        required: "First name is required",
                      })}
                      error={errors?.passengers?.[index]?.firstName?.message}
                      placeholder="Sarah"
                    />

                    <PassengerInput
                      label="Last Name"
                      register={register(`passengers.${index}.lastName`, {
                        required: "Last name is required",
                      })}
                      error={errors?.passengers?.[index]?.lastName?.message}
                      placeholder="Johnson"
                    />

                    <PassengerInput
                      label="Date Of Birth"
                      type="date"
                      register={register(`passengers.${index}.dateOfBirth`, {
                        required: "Date of birth is required",
                      })}
                      error={errors?.passengers?.[index]?.dateOfBirth?.message}
                    />

                    <PassengerInput
                      label="Nationality"
                      register={register(`passengers.${index}.nationality`, {
                        required: "Nationality is required",
                      })}
                      error={errors?.passengers?.[index]?.nationality?.message}
                      placeholder="United States"
                    />

                    <SelectField
                      label="Gender"
                      register={register(`passengers.${index}.gender`, {
                        required: "Gender is required",
                      })}
                      error={errors?.passengers?.[index]?.gender?.message}
                      options={["Male", "Female", "Other"]}
                    />

                    <PassengerInput
                      label="Passport Number"
                      register={register(`passengers.${index}.passportNumber`, {
                        required: "Passport number is required",
                      })}
                      error={
                        errors?.passengers?.[index]?.passportNumber?.message
                      }
                      placeholder="US4829341"
                    />

                    <PassengerInput
                      label="Passport Expiry"
                      type="date"
                      register={register(`passengers.${index}.passportExpiry`, {
                        required: "Passport expiry is required",
                      })}
                      error={
                        errors?.passengers?.[index]?.passportExpiry?.message
                      }
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* ADD PASSENGER BUTTON */}
            <button
              type="button"
              onClick={() => append({ ...defaultPassenger })}
              className="w-full bg-white border-2 border-dashed border-[#1F6B4F]/30 hover:border-[#1F6B4F] rounded-2xl p-5 flex items-center justify-center gap-3 text-[#1F6B4F] font-semibold transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-[#1F6B4F] text-white flex items-center justify-center">
                <FiPlus size={18} />
              </span>
              Add Another Passenger
            </button>

            {/* CONTACT INFO */}
            <div className="bg-white rounded-2xl border border-[#E8E1D8] shadow-sm p-5 md:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-full bg-[#1F6B4F] text-white text-xs font-bold flex items-center justify-center">
                  3
                </div>
                <h3 className="text-[#1D3C34] font-bold text-lg">
                  Contact Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PassengerInput
                  label="Email Address"
                  register={register("contact.email", {
                    required: "Email is required",
                  })}
                  error={errors?.contact?.email?.message}
                  placeholder="sarah@gmail.com"
                />

                <PassengerInput
                  label="Phone Number"
                  register={register("contact.phone", {
                    required: "Phone number is required",
                  })}
                  error={errors?.contact?.phone?.message}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Your boarding pass and booking confirmation will be sent to this
                email.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-[#E8E1D8] shadow-sm p-5 sticky top-6">
              <h3 className="text-[#1D3C34] text-xl font-bold mb-5">
                Your Booking
              </h3>

              <div className="space-y-3 border-b border-[#ECE6DE] pb-4 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Flight ({passengerCount} passenger)</span>
                  <span className="font-semibold text-[#1D3C34]">
                    ${flightTotal}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Taxes & fees</span>
                  <span className="font-semibold text-[#1D3C34]">
                    ${taxTotal}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-5">
                <span className="text-lg font-bold text-[#1D3C34]">
                  Total So Far
                </span>
                <span className="text-2xl font-bold text-[#1D3C34]">
                  ${grandTotal}
                </span>
              </div>

              {/* Passenger Quick Summary */}
              <div className="mb-5 space-y-3">
                <h4 className="font-semibold text-[#1D3C34] text-sm">
                  Passenger Details
                </h4>

                {passengers?.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#F8F5F0] border border-[#ECE6DE] p-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <BiUser className="text-[#1F6B4F]" />
                      <span className="text-sm font-semibold text-[#1D3C34]">
                        Passenger {i + 1}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      {p.firstName || "First Name"} {p.lastName || "Last Name"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Passport: {p.passportNumber || "Not added"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Nationality: {p.nationality || "Not added"}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F6B4F] hover:bg-[#18553f] text-white py-3.5 rounded-xl font-semibold transition-all"
              >
                Choose Your Seats
              </button>

              <button
                type="button"
                className="w-full mt-3 border border-[#1F6B4F] text-[#1F6B4F] py-3.5 rounded-xl font-semibold"
              >
                Back
              </button>

              <div className="mt-5 flex justify-center gap-4 text-[10px] text-gray-400">
                <span className="flex items-center gap-1">
                  <BiLock size={12} /> Data Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <BsShieldCheck size={12} /> GDPR Safe
                </span>
              </div>

              {contact?.email && (
                <p className="mt-4 text-xs text-center text-gray-500">
                  Confirmation email will go to{" "}
                  <span className="font-medium text-[#1D3C34]">
                    {contact.email}
                  </span>
                </p>
              )}
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default PassengerDetails;
