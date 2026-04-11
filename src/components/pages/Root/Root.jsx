import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/signup"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <div className="min-h-screen flex flex-col globalBg"> 
      <Navbar />
      <div className="mt-16 flex-grow"> 
        <Outlet />
      </div>
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Root;
// className='max-w-[1440px] mx-auto'
