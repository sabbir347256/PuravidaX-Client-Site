import { CheckCircle2, Bot, Waves } from "lucide-react";
import ProfileDynamicHeader from "../../HeaderPart/ProfileDynamicHeader";
const Memories = () => {
  const photos = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSu9pTIKEoX0MxuZqdHGiPYYI5oFhBg25PA&s",
      alt: "Beach",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbII-zIgH8sKnc5secAMG3J01z1zpIi__01A&s",
      alt: "Lakeside Mountains",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQcyMTR9em4Md6CE71gJ_jGAmpNXhm_BAfg&s",
      alt: "Spices",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsL75SdUcTK4Scm0uP35r00k9ChAVg0ie3g&s",
      alt: "City Skyline",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHlERkn0uUuCBKdpREABrLHh1w3HIySHcMA&s",
      alt: "Food Dish",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsL75SdUcTK4Scm0uP35r00k9ChAVg0ie3g&s",
      alt: "Spa Treatment",
    },
    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSThPJfQ3TioPDh4xyExePO8nRfdnedN_E9EQ&s",
      alt: "Beach Sunset",
    },
    {
      id: 8,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjJ2jhFR9Rot5_TKojHbF-SqKWUJwOesjXg&s",
      alt: "Mountain Lake",
    },
  ];
  const moods = [
    {
      label: "Adventurous",
      emoji: "🏔️",
      bgColor: "bg-gray-100",
      textColor: "text-slate-800",
    },
    {
      label: "Romantic",
      emoji: "💕",
      bgColor: "bg-orange-50",
      textColor: "text-amber-600",
    },
    {
      label: "Peaceful",
      emoji: "☁️",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      label: "Awe-Inspiring",
      emoji: "🌟",
      bgColor: "bg-gray-100",
      textColor: "text-slate-800",
    },
  ];
  return (
    <div>
      <ProfileDynamicHeader
        breadcrumb="Memories"
        title="Your Memories"
        dateRange="48 moments captured across 7 days in Costa Rica"
        details=""
      />
      <div className="w-full bg-slate-50 py-6 px-6 md:px-12 lg:px-20 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-gray-100 shadow-sm">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-slate-900">Trip Mood</h3>
          <div className="flex flex-wrap gap-2">
            {moods.map((mood, index) => (
              <div
                key={index}
                className={`${mood.bgColor} ${mood.textColor} flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer`}
              >
                <span>{mood.emoji}</span>
                <span>{mood.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="bg-[#1e6b4b] hover:bg-[#165239] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors">
            Share Album
          </button>
          <button className="border-2 border-[#1e6b4b] text-[#1e6b4b] hover:bg-[#1e6b4b] hover:text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all">
            Download All
          </button>
        </div>
      </div>
      <div className=" py-6 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;
