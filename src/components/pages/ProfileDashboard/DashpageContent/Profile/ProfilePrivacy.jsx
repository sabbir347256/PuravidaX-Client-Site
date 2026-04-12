import React from "react";
import { useForm } from "react-hook-form";

const ProfilePrivacy = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      twoFactor: true,
      locationServices: true,
      marketingEmails: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const settings = [
    {
      id: "twoFactor",
      title: "Two-Factor Authentication",
      description: "Extra security for your account",
    },
    {
      id: "locationServices",
      title: "Location Services",
      description: "Allow location for nearby experiences",
    },
    {
      id: "marketingEmails",
      title: "Marketing Emails",
      description: "Receive special offers and updates",
    },
  ];
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl w-full">
      <h2 className="text-xl font-bold text-[#1B4332] mb-8">
        Privacy & Security
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        {settings.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-5 border-b border-gray-50 last:border-0"
          >
            <div>
              <h3 className="text-[15px] font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register(item.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#24634B]"></div>
            </label>
          </div>
        ))}

        <div className="flex flex-wrap gap-3 mt-8 pt-4">
          <button
            type="button"
            className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Change Password
          </button>
          <button
            type="button"
            className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Download My Data
          </button>
          <button
            type="button"
            className="px-6 py-2.5 border border-red-200 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePrivacy;
