import React from "react";

const HotelSearchSection = () => {
  const hotelData = {
    checkIn: "May 10, 2026",
    checkOut: "May 17, 2026",
    duration: "7 nights",
    guests: "2 Adults",
    pricePerNight: "$320",
    totalPrice: "$2,240",
    hotelName: "Nayara Tented Camp", 
  };

  const handleBooking = (formData) => {
    console.log("Booking Submitted for:", hotelData.hotelName);
    console.log("Stay Details:", hotelData);
    console.log("Form/Action Data:", formData);
    alert("Check console for full data!");
  };
  return (
    <div className="min-h-screen bg-[#f9f8f6] p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side Content (Placeholder) */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold">{hotelData.hotelName}</h1>
          <p className="text-gray-600 mt-4 italic">
            পুরো পেজ এর কন্টেন্ট এখানে থাকবে...
          </p>
        </div>

        {/* Right Side - Dynamic Component */}
        <div className="lg:col-span-1">
          <YourStay
            data={hotelData}
            primaryBtnText="Choose Room Type"
            secondaryBtnText="Back to Hotels"
            onAction={handleBooking}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelSearchSection;
