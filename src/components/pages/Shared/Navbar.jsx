import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import CustomButton from "../utils/CustomButton";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: "Flights", path: "/flights" },
    { name: "Hotels", path: "/hotels" },
    { name: "Car Rentals", path: "/cars" },
    { name: "Plan Your Trip", path: "/plan-trip" },
    { name: "Rewards", path: "/rewards" },
  ];
  return (
    <nav className="w-full bg-[#1a3a2a] text-white fixed top-0 z-50 cp">
      <div className="mediumDeviceContainer">
        <div className="flex items-center justify-between h-16">
          <div className="items-start text-start gap-2">
            <img
              src="https://res.cloudinary.com/dunn8qryc/image/upload/v1775605273/460debcf4221f79a0116a837f2d356714eecf599_pm9t7g.png"
              alt="logo"
              className="w-full h-24"
            />
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks?.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-green-400 font-semibold"
                      : "hover:text-green-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <button className="border px-3 py-1 rounded-md text-sm">
                🌐 EN
              </button>
              <NavLink to="/login">
                <CustomButton
                  text={"Log In"}
                  padding={"px-4 py-1"}
                  rounded={"rounded-md"}
                  hover={"bg-green-600"}
                  border={"border"}
                ></CustomButton>
              </NavLink>
              <NavLink to="/signup">
                <CustomButton
                  text={"Sign Up"}
                  bg={"bg-green-700"}
                  padding={"px-4 py-1"}
                  rounded={"rounded-md"}
                  hover={"bg-green-600"}
                ></CustomButton>
              </NavLink>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <ImCross size={20} /> : <CgMenuRightAlt size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden bg-green-800 overflow-hidden transition-all duration-500 ${
          open ? "max-h-full py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-lg hover:text-green-300"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 mt-4 w-full px-6 md:hidden">
            <CustomButton
              text={"🌐 EN"}
              padding={"py-2"}
              rounded={"rounded-md"}
              hover={"bg-green-600"}
              border={"border"}
            ></CustomButton>
            <CustomButton
              text={"Log In"}
              padding={"px-4 py-2"}
              rounded={"rounded-md"}
              hover={"bg-green-600"}
              border={"border"}
            ></CustomButton>
            <CustomButton
              text={"Sign Up"}
              bg={"bg-green-500"}
              padding={"px-4 py-2"}
              rounded={"rounded-md"}
              hover={"bg-green-600"}
            ></CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
