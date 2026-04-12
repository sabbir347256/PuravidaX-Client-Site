import React from "react";
import { useForm } from "react-hook-form";
import { Calendar } from 'lucide-react';

const UpdateProfileSection = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      dob: "1992-03-15",
      location: "San Francisco, USA",
      bio: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl w-full">
      <h2 className="text-xl font-bold text-[#1B4332] mb-8">Edit Profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1B4332]">
              Full Name
            </label>
            <input
              {...register("fullName")}
              className="w-full bg-[#FAF9F6] border-none rounded-2xl p-4 text-gray-700 focus:ring-2 focus:ring-[#1B4332] outline-none"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1B4332]">Email</label>
            <input
              {...register("email")}
              className="w-full bg-[#FAF9F6] border-none rounded-2xl p-4 text-gray-700 focus:ring-2 focus:ring-[#1B4332] outline-none"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1B4332]">Phone</label>
            <input
              {...register("phone")}
              className="w-full bg-[#FAF9F6] border-none rounded-2xl p-4 text-gray-700 focus:ring-2 focus:ring-[#1B4332] outline-none"
              type="tel"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1B4332]">
              Date of Birth
            </label>
            <div className="relative">
              <input
                {...register("dob")}
                className="w-full bg-[#FAF9F6] border-none rounded-2xl p-4 text-gray-700 focus:ring-2 focus:ring-[#1B4332] outline-none appearance-none"
                type="date"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#1B4332]">
            Home Location
          </label>
          <input
            {...register("location")}
            className="w-full bg-[#FAF9F6] border-none rounded-2xl p-4 text-gray-700 focus:ring-2 focus:ring-[#1B4332] outline-none"
            type="text"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#1B4332]">Bio</label>
          <textarea
            {...register("bio")}
            placeholder="Tell us about yourself..."
            className="w-full bg-[#FAF9F6] border-none rounded-2xl p-4 text-gray-700 focus:ring-2 focus:ring-[#1B4332] outline-none min-h-[120px] resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-[#24634B] hover:bg-[#1B4332] text-white font-bold py-4 px-10 rounded-xl transition-colors duration-200"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileSection;
