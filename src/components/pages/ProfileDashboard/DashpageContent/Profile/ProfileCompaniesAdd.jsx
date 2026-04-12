import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, UserPlus, X } from 'lucide-react';

const ProfileCompaniesAdd = () => {
  const [showForm, setShowForm] = useState(false);
  const [companions, setCompanions] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      info: "Passport: **4829",
      isPrimary: true,
    },
    {
      id: 2,
      name: "James Johnson",
      email: "james.j@email.com",
      info: "Vegetarian",
      isPrimary: false,
    },
  ]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newCompanion = {
    //   id: Date.now(),
      name: data.name,
      email: data.email,
      info: `Passport: **${data.passport.slice(-4)}`,
      isPrimary: false,
    };

    setCompanions([...companions, newCompanion]);
    setShowForm(false);
    reset();
  };
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl w-full">
      <h2 className="text-xl font-bold text-[#1B4332] mb-6">
        Travel Companions
      </h2>

      <div className="space-y-4 mb-6">
        {companions.map((person) => (
          <div
            key={person.id}
            className="bg-[#FAF9F6] rounded-2xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={`https://ui-avatars.com/api/?name=${person.name}&background=random`}
                  alt={person.name}
                />
              </div>
              <div>
                <h4 className="font-bold text-[#1B4332]">{person.name}</h4>
                <p className="text-xs text-gray-500">
                  {person.email} <span className="mx-1">•</span> {person.info}
                </p>
              </div>
            </div>
            {person.isPrimary && (
              <span className="bg-[#24634B] text-white text-[10px] font-bold px-3 py-1 rounded-lg">
                Primary
              </span>
            )}
          </div>
        ))}
      </div>

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] font-bold py-2.5 px-6 rounded-xl hover:bg-[#FAF9F6] transition-colors"
        >
          <Plus size={18} />
          Add Travel Companion
        </button>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#F0F4F2] border border-emerald-100 rounded-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#1B4332] flex items-center gap-2">
              <UserPlus size={18} /> New Companion
            </h3>
            <button type="button" onClick={() => setShowForm(false)}>
              <X size={20} className="text-gray-400 hover:text-red-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="bg-white border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#1B4332] outline-none"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              className="bg-white border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#1B4332] outline-none"
            />
            <input
              {...register("passport", { required: true })}
              placeholder="Passport Number"
              className="bg-white border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#1B4332] outline-none"
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button
              type="submit"
              className="bg-[#24634B] text-white font-bold py-2 px-6 rounded-xl text-sm hover:bg-[#1B4332]"
            >
              Add Companion
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-500 text-sm font-medium hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileCompaniesAdd;
