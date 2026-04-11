import React from "react";
import { MessageSquare, Briefcase, CheckCircle2, Clock, Star,Plane, Hotel, Car, Bot, Calendar, Users } from 'lucide-react';
const DashboardPageContent = () => {
  const stats = [
    {
      label: "Total Bookings",
      value: "3",
      icon: <Briefcase className="w-5 h-5 text-emerald-700" />,
      bgColor: "bg-emerald-50",
    },
    {
      label: "Confirmed",
      value: "1",
      icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
      bgColor: "bg-green-50",
    },
    {
      label: "Drafts Pending",
      value: "2",
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      bgColor: "bg-amber-50",
    },
    {
      label: "Reward Points",
      value: "1,240",
      icon: <Star className="w-5 h-5 text-red-500" />,
      bgColor: "bg-red-50",
    },
  ];
  const trips = [
    {
      id: 1,
      title: 'Costa Rica Honeymoon',
      date: 'May 10–17, 2026',
      duration: '7 days',
      travelers: '2 travelers',
      status: 'Confirmed',
      statusColor: 'bg-emerald-100 text-emerald-700',
      tags: [
        { icon: <Plane className="w-4 h-4" />, label: 'United Airlines SFO→SJO' },
        { icon: <Hotel className="w-4 h-4" />, label: 'Nayara Tented Camp' },
        { icon: <Car className="w-4 h-4" />, label: 'Toyota RAV4 4×4' },
      ],
    },
    {
      id: 2,
      title: 'Nayara Tented Camp',
      status: 'Draft',
      statusColor: 'bg-orange-100 text-orange-700',
      draftDetails: 'Draft — Action needed · 4 nights',
      isDraft: true,
    },
  ];
  return (
    <div className="min-h-screen ">
      <div className="">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Good morning, Sarah! <span>☀️</span>
          </h1>
          <p className="text-gray-500 mt-1 text-lg">
            Your Costa Rica adventure is coming up in 54 days. Here's your trip
            hub.
          </p>
        </header>

        <div className="bg-[#1B3C31] rounded-[2rem] p-6 md:p-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#5BB38D] rounded-full flex items-center justify-center text-3xl">
              🤖
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-1">
                Your AI Concierge
              </h3>
              <p className="text-emerald-100/80 max-w-xl leading-relaxed">
                You have 2 draft bookings waiting. The weather looks perfect for
                your volcano hike! Want me to help you finalize your trip?
              </p>
            </div>
          </div>
          <button className="globalButtonColor hover:bg-[#366956] text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shrink-0 font-medium">
            <MessageSquare className="w-5 h-5 fill-white" />
            Open Chat
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
            >
              <div
                className={`${stat.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}
              >
                {stat.icon}
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
      <div className="">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Trips</h2>

        <div className="space-y-6 mb-8">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1518110668463-f367a34e836d?auto=format&fit=crop&q=80&w=300"
                  alt="Destination"
                  className="w-full md:w-32 h-24 object-cover rounded-2xl"
                />
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{trip.title}</h3>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold ${trip.statusColor}`}>
                      {trip.status}
                    </span>
                  </div>

                  {trip.isDraft ? (
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                      <Clock className="w-4 h-4 text-orange-400" />
                      {trip.draftDetails}
                    </div>
                  ) : (
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        {trip.date} · {trip.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {trip.travelers}
                      </div>
                    </div>
                  )}

                  {trip.isDraft ? (
                    <div className="flex gap-3">
                      <button className="globalButtonColor text-white px-6 py-2.5 rounded-xl font-medium text-sm">
                        Complete Booking
                      </button>
                      <button className="border border-[#1B5E41] text-[#1B5E41] px-6 py-2.5 rounded-xl font-medium text-sm">
                        Save for Later
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      {trip.tags.map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-gray-600 text-sm font-medium">
                          <span className="text-emerald-600">{tag.icon}</span>
                          {tag.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="globalButtonColor text-white p-4 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-[#1B5641] transition-colors">
            <Plane className="w-5 h-5 fill-white" /> Book Flights
          </button>
          <button className="bg-[#12241B] text-white p-4 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-black transition-colors">
            <Hotel className="w-5 h-5 fill-white" /> Find Hotels
          </button>
          <button className="border border-emerald-800 text-emerald-800 bg-white p-4 rounded-xl flex items-center justify-center gap-3 font-semibold">
            <Car className="w-5 h-5" /> Rent a Car
          </button>
          <button className="border border-emerald-800 text-emerald-800 bg-white p-4 rounded-xl flex items-center justify-center gap-3 font-semibold">
            <Bot className="w-5 h-5" /> AI Concierge
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardPageContent;
