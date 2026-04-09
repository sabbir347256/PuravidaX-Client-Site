import { useForm } from "react-hook-form";
import { BiCalendar, BiCar, BiInfoCircle, BiLock } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import CarDetailsDynamicHeader from "../../utils/Cars/CarDetailsDynamicHeader";
import { carSteps } from "../../utils/Cars/CarStep";
import { useNavigate } from "react-router";

const DriverInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Sarah",
      lastName: "Johnson",
      dob: "1992-03-15",
      email: "sarah.j@email.com",
      licenseNumber: "Y4829341",
      issuingCountry: "United States",
      issueDate: "2016-05-10",
      expiryDate: "2028-05-10",
      ageRange: "25-64",
      addSecondDriver: false,
    },
  });

  const basePrice = 385;
  const isAdditionalDriver = watch("addSecondDriver");
  const totalPrice = isAdditionalDriver ? basePrice + 70 : basePrice;
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
navigate('/car-payment')
    // alert("Check console for form data!");
  };
  return (
    <div>
      <CarDetailsDynamicHeader
        title="Driver Details"
        subtitle="We need your license info to prepare your rental agreement"
        currentStep={3}
        steps={carSteps}
      ></CarDetailsDynamicHeader>
      <div className="min-h-screen   dynamic-paddingUP-Down text-slate-900">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flightCarHotelContainer grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-[#1a4d3a] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h2 className="text-2xl font-bold text-[#1a4d3a]">
                  Primary Driver
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">First Name</label>
                  <input
                    {...register("firstName")}
                    className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Last Name</label>
                  <input
                    {...register("lastName")}
                    className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Date of Birth</label>
                  <div className="relative">
                    <input
                      type="date"
                      {...register("dob")}
                      className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all appearance-none"
                    />
                    <BiCalendar
                      className="absolute right-4 top-4 text-slate-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-bold mb-4">Driver Age Range</p>
                <div className="flex gap-3">
                  {["18–24", "25–64", "65+"].map((range) => (
                    <label key={range} className="cursor-pointer group">
                      <input
                        type="radio"
                        value={range}
                        {...register("ageRange")}
                        className="sr-only peer"
                      />
                      <div className="px-6 py-2 rounded-xl border-2 border-stone-200 text-slate-400 font-bold peer-checked:border-[#1a4d3a] peer-checked:text-[#1a4d3a] group-hover:border-stone-300 transition-all">
                        {range}
                      </div>
                    </label>
                  ))}
                </div>
                <p className="flex items-center gap-2 text-xs text-slate-400 mt-4">
                  <BiInfoCircle size={14} /> Drivers aged 18–24 incur a $12/day
                  young driver surcharge.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-[#1a4d3a] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h2 className="text-2xl font-bold text-[#1a4d3a]">
                  Driver's License
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">License Number</label>
                  <input
                    {...register("licenseNumber")}
                    className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Issuing Country</label>
                  <input
                    {...register("issuingCountry")}
                    className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Issue Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      {...register("issueDate")}
                      className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all appearance-none"
                    />
                    <BiCalendar
                      className="absolute right-4 top-4 text-slate-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Expiry Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      {...register("expiryDate")}
                      className="w-full bg-[#f4f4f0] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-600 transition-all appearance-none"
                    />
                    <BiCalendar
                      className="absolute right-4 top-4 text-slate-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#f0f9f4] border border-emerald-100 p-5 rounded-2xl flex gap-4">
                <BiInfoCircle
                  className="text-emerald-600 shrink-0 mt-0.5"
                  size={20}
                />
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  Costa Rica accepts foreign licenses for up to 90 days. An
                  International Driving Permit is recommended but not required.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 sticky top-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Rental Summary
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-3 font-bold text-slate-800">
                  <BiCar size={22} className="text-red-500 fill-red-500" />
                  <span>Toyota RAV4 4×4</span>
                </div>

                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-400">Base rental (7 days)</span>
                  <span className="text-slate-900 font-bold text-base">
                    ${basePrice}
                  </span>
                </div>

                {isAdditionalDriver && (
                  <div className="flex justify-between items-center text-sm font-medium animate-in fade-in slide-in-from-top-1">
                    <span className="text-emerald-700">
                      Additional Driver (7 days)
                    </span>
                    <span className="text-emerald-700 font-bold text-base">
                      +$70
                    </span>
                  </div>
                )}

                <hr className="border-stone-100" />

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-slate-900">
                    Total
                  </span>
                  <span className="text-3xl font-extrabold text-slate-900">
                    ${totalPrice}
                  </span>
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#1a4d3a] hover:bg-[#133a2b] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                  >
                    <BiLock size={18} />
                    Proceed to Payment
                  </button>
                  <button
                    type="button"
                    className="w-full border-2 border-[#1a4d3a] text-[#1a4d3a] py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all"
                  >
                    <BsArrowLeft size={18} />
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverInfo;
