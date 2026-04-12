import { Bell, Plane, Clock, CheckCircle2, Gift, Bot } from "lucide-react";
import { useForm } from "react-hook-form";
import ProfileDynamicHeader from "../../HeaderPart/ProfileDynamicHeader";
const Notifications = () => {
  const { register } = useForm({
    defaultValues: {
      pushNotifications: true,
      emailNotifications: true,
      whatsapp: false,
      smsNotifications: false,
      tripUpdates: true,
      marketingOffers: false,
    },
  });

  const alerts = [
    {
      id: 1,
      type: "flight",
      title: "Trip Update: Flight Confirmed",
      description:
        "Your United Airlines flight SFO → SJO on May 10 has been confirmed. Check-in opens 24h before departure.",
      time: "2 hours ago",
      icon: <Plane className="w-5 h-5 text-blue-500" />,
      borderColor: "border-l-[#A3D9A5]",
    },
    {
      id: 2,
      type: "reminder",
      title: "Reminder: Complete Travel Preferences",
      description:
        "You haven't completed your dietary preferences yet. Add them to ensure personalized dining recommendations.",
      time: "5 hours ago",
      icon: <Clock className="w-5 h-5 text-red-400" />,
      borderColor: "border-l-[#F8C8C8]",
    },
    {
      id: 3,
      type: "booking",
      title: "Booking Confirmed: Monteverde Cloud Forest",
      description:
        "Your Monteverde Cloud Forest tour on May 12 is confirmed. Meeting point details sent to your email.",
      time: "Yesterday",
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
      borderColor: "border-l-[#A3D9A5]",
    },
    {
      id: 4,
      type: "offer",
      title: "Special Offer: Exclusive Wellness Package",
      description:
        "We've unlocked a 20% discount on the Couples Spa Ritual at Nayara for your honeymoon. Expires in 3 days.",
      time: "2 days ago",
      icon: <Gift className="w-5 h-5 text-orange-400" />,
      borderColor: "border-l-transparent",
    },
    {
      id: 5,
      type: "concierge",
      title: "Concierge: Updated Day 2 Itinerary",
      description:
        "I've added the Hidden Waterfall detour to Day 2 as we discussed. View your updated plan in the Trip Hub.",
      time: "3 days ago",
      icon: <Bot className="w-5 h-5 text-blue-400" />,
      borderColor: "border-l-transparent",
    },
  ];

  const preferences = [
    {
      id: "pushNotifications",
      label: "Push Notifications",
      sub: "In-app & mobile alerts",
    },
    {
      id: "emailNotifications",
      label: "Email Notifications",
      sub: "sarah.j@email.com",
    },
    { id: "whatsapp", label: "Whatsapp", sub: "Exclusive deals and rewards" },
    {
      id: "smsNotifications",
      label: "SMS Notifications",
      sub: "+1 (555) 123-4567",
    },
    {
      id: "tripUpdates",
      label: "Trip Updates",
      sub: "Booking, weather, reminders",
    },
    {
      id: "marketingOffers",
      label: "Marketing & Offers",
      sub: "Exclusive deals and rewards",
    },
  ];

  return (
    <div>
      <ProfileDynamicHeader
        breadcrumb="Notifications"
        title="Notifications"
        dateRange=""
        details=""
      />
      <div className="p-4 md:p-8 space-y-10  min-h-screen">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm border-l-4 ${alert.borderColor}`}
            >
              <div className="mt-1 p-2 bg-gray-50 rounded-xl">{alert.icon}</div>
              <div className="flex-1">
                <h4 className="text-[15px] font-bold text-[#1B4332]">
                  {alert.title}
                </h4>
                <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                  {alert.description}
                </p>
                <span className="text-[11px] text-gray-400 mt-2 block font-medium uppercase tracking-wider">
                  {alert.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-50">
          <h2 className="text-xl font-bold text-[#1B4332] mb-8">
            Notification Preferences
          </h2>

          <div className="divide-y divide-gray-50">
            {preferences.map((pref) => (
              <div
                key={pref.id}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0 "
              >
                <div className="space-y-1">
                  <h3 className="text-[15px] font-bold text-[#1B4332]">
                    {pref.label}
                  </h3>
                  <p className="text-sm text-gray-400">{pref.sub}</p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    {...register(pref.id)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#24634B]"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
