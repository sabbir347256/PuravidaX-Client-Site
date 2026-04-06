import React, { useMemo, useState } from "react";
import FlightDetailsDynamicHeader from "../FlightDetailsDynamicHeader";
import { flightSteps } from "../FlightStep";
import { NavLink } from "react-router";

const BaggageDetails = () => {
  const initialSections = [
    {
      id: 1,
      title: "Baggage",
      items: [
        {
          id: 1,
          title: "1st Checked Bag (23kg)",
          subtitle: "Included in your fare · per passenger",
          price: 0,
          included: true,
          selected: true,
          icon: "🧳",
        },
        {
          id: 2,
          title: "2nd Checked Bag (23kg)",
          subtitle: "$45 per bag, per passenger",
          price: 90,
          selected: false,
          icon: "📦",
        },
        {
          id: 3,
          title: "Sports Equipment",
          subtitle: "Surfboard, bike, or golf clubs · per item",
          price: 75,
          selected: false,
          icon: "🏂",
        },
      ],
    },
    {
      id: 2,
      title: "In-Flight Meals",
      items: [
        {
          id: 4,
          title: "Vegetarian Meal",
          subtitle: "Pre-ordered for both passengers · return included",
          price: 24,
          selected: false,
          icon: "🥗",
        },
        {
          id: 5,
          title: "Vegan Meal",
          subtitle: "Plant-based · pre-ordered for both passengers",
          price: 24,
          selected: false,
          icon: "🌿",
        },
        {
          id: 6,
          title: "Premium Meal",
          subtitle: "Chef-curated meal · both passengers",
          price: 38,
          selected: false,
          icon: "🍷",
        },
      ],
    },
    {
      id: 3,
      title: "Comfort & Services",
      items: [
        {
          id: 7,
          title: "Priority Boarding",
          subtitle: "Board first, settle in stress-free · both passengers",
          price: 18,
          selected: false,
          icon: "⚡",
        },
        {
          id: 8,
          title: "Travel Insurance",
          subtitle: "Medical, cancellation & delay coverage · full trip",
          price: 84,
          selected: true,
          icon: "🛡️",
        },
        {
          id: 9,
          title: "In-Flight Wi-Fi",
          subtitle: "Stream & browse for the full flight · both passengers",
          price: 22,
          selected: false,
          icon: "📶",
        },
        {
          id: 10,
          title: "Fast-Track Immigration",
          subtitle: "Skip queues at SJO on arrival",
          price: 32,
          selected: false,
          icon: "🚨",
        },
      ],
    },
  ];

  const flightBaseFare = 856;
  const taxesAndFees = 86;

  const [sections, setSections] = useState(initialSections);

  const handleToggle = (sectionId, itemId) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId && !item.included
                  ? { ...item, selected: !item.selected }
                  : item,
              ),
            }
          : section,
      ),
    );
  };

  const selectedExtras = useMemo(() => {
    return sections.flatMap((section) =>
      section.items.filter((item) => !item.included && item.selected),
    );
  }, [sections]);

  const extrasTotal = useMemo(() => {
    return selectedExtras.reduce((sum, item) => sum + item.price, 0);
  }, [selectedExtras]);

  const total = flightBaseFare + taxesAndFees + extrasTotal;

  return (
    <div>
      <FlightDetailsDynamicHeader
        title={"Add Extras"}
        subtitle={"Enhance your journey with add-ons and services"}
        currentStep={4}
        steps={flightSteps}
      ></FlightDetailsDynamicHeader>
      <div className="min-h-screen bg-[#f6f3ee] py-8 dynamic-paddingUP-Down ">
        <div className="container grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            {sections?.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl border border-[#e8e1d8] bg-white p-8 shadow-sm "
              >
                <div className="mb-10 flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1f5f46] text-xs font-semibold text-white">
                    {section.id}
                  </div>
                  <h3 className="text-base font-semibold text-[#20382d] md:text-lg">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 border-b pb-4"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f4ef] text-xl">
                          {item.icon}
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-[#21362c] md:text-[15px] mb-2 ">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-xs ">{item.subtitle}</p>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        {item.included ? (
                          <span className="text-sm font-semibold text-[#2d7b5d]">
                            Included
                          </span>
                        ) : (
                          <span className="text-sm font-semibold text-[#304439]">
                            ${item.price}
                          </span>
                        )}

                        <button
                          type="button"
                          disabled={item.included}
                          onClick={() => handleToggle(section.id, item.id)}
                          className={`relative h-6 w-11 rounded-full transition-all ${
                            item.included
                              ? "cursor-not-allowed bg-[#e6e3dd]"
                              : item.selected
                                ? "bg-[#2c7256]"
                                : "bg-[#e6e3dd]"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
                              item.selected ? "left-[22px]" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-2xl border border-[#e8e1d8] bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <h3 className="text-base font-semibold text-[#25372d] md:text-lg">
              Your Booking
            </h3>

            <div className="mt-4 space-y-2 border-b border-[#ece6de] pb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#7c817d]">✈ Flight (x 2)</span>
                <span className="font-medium text-[#2d372f]">
                  ${flightBaseFare}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-[#7c817d]">Taxes & fees</span>
                <span className="font-medium text-[#2d372f]">
                  ${taxesAndFees}
                </span>
              </div>

              {selectedExtras.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-[#7c817d]">{item.title}</span>
                  <span className="font-medium text-[#2d372f]">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-[#25372d]">
                Total
              </span>
              <span className="text-xl font-bold text-[#25372d]">${total}</span>
            </div>

            <div className="mt-5 space-y-3">
              <NavLink to='/seat-plan'>
                <button className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1c543b]">
                  Choose Your Seats
                </button>
              </NavLink>

              <button className="w-full rounded-xl border border-[#2b6b50] bg-white px-4 py-3 text-sm font-semibold text-[#2b6b50] transition hover:bg-[#f5faf7]">
                Back
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between text-xs text-[#a0a39f]">
              <span>Free Cancellation</span>
              <span>24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaggageDetails;
