import React from "react";
import {
  MessageSquare,
  Briefcase,
  CheckCircle2,
  Clock,
  Star,
  Plane,
  Hotel,
  Car,
  Bot,
  Calendar,
  Users,
} from "lucide-react";
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
      title: "Costa Rica Honeymoon",
      date: "May 10–17, 2026",
      duration: "7 days",
      travelers: "2 travelers",
      status: "Confirmed",
      statusColor: "bg-emerald-100 text-emerald-700",
      tags: [
        {
          icon: <Plane className="w-4 h-4" />,
          label: "United Airlines SFO→SJO",
        },
        { icon: <Hotel className="w-4 h-4" />, label: "Nayara Tented Camp" },
        { icon: <Car className="w-4 h-4" />, label: "Toyota RAV4 4×4" },
      ],
    },
    {
      id: 2,
      title: "Nayara Tented Camp",
      status: "Draft",
      statusColor: "bg-orange-100 text-orange-700",
      draftDetails: "Draft — Action needed · 4 nights",
      isDraft: true,
    },
  ];
  return (
    <div className="min-h-screen custom-container ">
      <div className="">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
            Good morning, Sarah! <span>☀️</span>
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Your Costa Rica adventure is coming up in{" "}
            <span className="font-bold text-emerald-600">54 days</span>. Here's
            your trip hub.
          </p>
        </header>
        <div className="bg-[#1B3C31] rounded-[2rem] p-6 md:p-10 mb-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 bg-[#5BB38D] rounded-full flex items-center justify-center text-4xl shrink-0 shadow-lg">
              🤖
            </div>
            <div>
              <h3 className="text-white font-semibold text-2xl mb-2">
                Your AI Concierge
              </h3>
              <p className="text-emerald-100/80 max-w-xl leading-relaxed text-base md:text-lg">
                You have 2 draft bookings waiting. The weather looks perfect for
                your volcano hike! Want me to help you finalize your trip?
              </p>
            </div>
          </div>
          <button className="globalButtonColor hover:bg-[#4a9c7a] text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all transform hover:scale-105 shrink-0 font-bold w-full lg:w-auto justify-center">
            <MessageSquare className="w-5 h-5 fill-white" />
            Open Chat
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`${stat.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl`}
              >
                {stat.icon}
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Trips</h2>
          <div className="space-y-6 mb-10">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm hover:border-emerald-200 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <img
                    src="https://images.unsplash.com/photo-1518110668463-f367a34e836d?auto=format&fit=crop&q=80&w=300"
                    alt="Destination"
                    className="w-full md:w-48 h-32 md:h-auto object-cover rounded-3xl"
                  />

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {trip.title}
                      </h3>
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight ${trip.statusColor}`}
                      >
                        {trip.status}
                      </span>
                    </div>

                    {trip.isDraft ? (
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 font-medium">
                        <Clock className="w-4 h-4 text-orange-500" />
                        {trip.draftDetails}
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-emerald-500" />
                          {trip.date} • {trip.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-gray-400" />
                          {trip.travelers}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {trip.isDraft ? (
                        <>
                          <button className="globalButtonColor text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors">
                            Complete Booking
                          </button>
                          <button className="border-2 border-gray-100 text-gray-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                            Save for Later
                          </button>
                        </>
                      ) : (
                        trip.tags.map((tag, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-gray-600 text-sm font-bold"
                          >
                            <span>{tag.icon}</span>
                            {tag.label}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="globalButtonColor text-white p-5 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-black transition-all">
            <Plane className="w-5 h-5" /> Book Flights
          </button>
          <button className="globalButtonColor text-white p-5 rounded-2xl flex items-center justify-center gap-3 font-bold hover:opacity-90 transition-all">
            <Hotel className="w-5 h-5" /> Find Hotels
          </button>
          <button className="border-2 border-emerald-800 text-emerald-800 bg-white p-5 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-emerald-50 transition-all">
            <Car className="w-5 h-5" /> Rent a Car
          </button>
          <button className="border-2 border-emerald-800 text-emerald-800 bg-white p-5 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-emerald-50 transition-all">
            <Bot className="w-5 h-5" /> AI Concierge
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageContent;
