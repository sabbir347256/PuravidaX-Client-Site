import { Star } from "lucide-react";
import React from "react";
import UpdateProfileSection from "./UpdateProfileSection";
import ProfileCompaniesAdd from "./ProfileCompaniesAdd";
import ProfileMoneyCardAdd from "./ProfileMoneyCardAdd";
import ProfilePrivacy from "./ProfilePrivacy";
import ProfileDynamicHeader from "../../HeaderPart/ProfileDynamicHeader";

const Profile = () => {
  const stats = [
    { label: "Trips Taken", value: "3" },
    { label: "Vida Points", value: "1,280" },
    { label: "Avg Rating", value: "4.9", hasStar: true },
    { label: "Countries", value: "2" },
  ];
  return (
    <div>
      <ProfileDynamicHeader
        breadcrumb="Profile"
        title="My Profile"
        dateRange=""
        details=""
      ></ProfileDynamicHeader>
      <div className="flex flex-col lg:flex-row gap-6 custom-container w-full min-h-screen globalBg">
        <div className="w-full lg:w-1/3 xl:w-1/4">
          <div className="sticky bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#1B4332] mb-1">
                Sarah Johnson
              </h2>
              <p className="text-slate-400 text-sm mb-4">sarah.j@email.com</p>

              <div className="inline-flex items-center gap-1.5 bg-[#F0F7F4] px-4 py-2 rounded-full border border-[#E2E8E4]">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-[#52796F] text-sm font-bold">
                  Premium Member
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#FAF9F6] rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-2xl font-bold text-[#1B4332] flex items-center gap-1">
                    {stat.value}
                    {stat.hasStar && (
                      <Star className="w-5 h-5 fill-[#1B4332]" />
                    )}
                  </div>
                  <div className="text-slate-400 text-xs font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col gap-6">
          <UpdateProfileSection />
          <ProfileCompaniesAdd />
          <ProfileMoneyCardAdd />
          <ProfilePrivacy />
        </div>
      </div>
    </div>
  );
};

export default Profile;
