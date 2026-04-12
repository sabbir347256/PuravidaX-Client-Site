import {
  LayoutDashboard,
  MessageSquare,
  Compass,
  Plane,
  Hotel,
  Car,
  User,
  Heart,
  LogOut,
  Menu,
  X,
  Send,
  MapPin,
  ArrowRight,
  Sparkles,
  Star,
  Lock,
  Calendar,
  User2,
} from "lucide-react";
import { useState } from "react";
import AdventureSevenSection from "../../AIsuggetionPart/AdvantureStepSection/AdventureSevenSection";
import { FaRobot, FaSignOutAlt } from "react-icons/fa";
import { RiMemoriesLine } from "react-icons/ri";
import DashboardPageContent from "../DashpageContent/DashboardPageContent";
import Navbar from "../../Shared/Navbar";
import AiPart from "../DashpageContent/AiPart/AiPart";
import Explore from "./Explore";
import { NavLink, Outlet } from "react-router";
const MainDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/profile-dashboard/home",
      icon: <LayoutDashboard size={18} />,
      section: "MAIN",
    },
    {
      name: "AI Concierge",
      path: "/profile-dashboard/ai-concierge",
      icon: <FaRobot size={18} />,
      section: "MAIN",
    },
    {
      name: "Explore",
      path: "/profile-dashboard/explore",
      icon: <Compass size={18} />,
      section: "MAIN",
    },
    // {
    //   name: "Flights",
    //   path: "/profile-dashboard/flights",
    //   icon: <Plane size={18} />,
    //   section: "BOOKING",
    // },
    // {
    //   name: "Hotels",
    //   path: "/profile-dashboard/hotels",
    //   icon: <Hotel size={18} />,
    //   section: "BOOKING",
    // },
    // {
    //   name: "Car Rentals",
    //   path: "/profile-dashboard/cars",
    //   icon: <Car size={18} />,
    //   section: "BOOKING",
    // },
    {
      name: "Profile",
      path: "/profile-dashboard/profile",
      icon: <User2 size={18} />,
      section: "ACCOUNT",
    },
    {
      name: "Notifications",
      path: "/profile-dashboard/notifications",
      icon: <RiMemoriesLine size={18} />,
      section: "ACCOUNT",
    },
    {
      name: "Memories",
      path: "/profile-dashboard/memories",
      icon: <RiMemoriesLine size={18} />,
      section: "ACCOUNT",
    },
    {
      name: "Sign Out",
      path: "/logout",
      icon: <FaSignOutAlt size={18} />,
      section: "ACCOUNT",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen globalBg">
      <div className="fixed top-0 w-full z-[60]">
        <Navbar />
      </div>

      <div className="flex flex-1 pt-16 relative overflow-hidden">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 heroBg text-white transition-transform duration-300 lg:translate-x-0 lg:static 
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-end lg:hidden mb-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto space-y-8 custom-scrollbar">
              {["MAIN", "ACCOUNT"].map((section) => (
                <div key={section}>
                  <p className="text-[10px] font-bold text-gray-500 tracking-widest mb-4 uppercase">
                    {section}
                  </p>
                  <ul className="space-y-1">
                    {menuItems
                      .filter((i) => i.section === section)
                      .map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsSidebarOpen(false)}
                          className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                              isActive
                                ? "bg-[#1e4533] text-[#52a37a] shadow-lg"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`
                          }
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </NavLink>
                      ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 min-w-0 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar bg-inherit">
          <header className="lg:hidden bg-white/80 backdrop-blur-md p-4 border-b flex justify-between items-center sticky top-0 z-30">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <h2 className="font-bold text-emerald-900">Adventure.AI</h2>
            <div className="w-8" />
          </header>

          <div className="">
            <div className="animate-in fade-in duration-500">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDashboard;
