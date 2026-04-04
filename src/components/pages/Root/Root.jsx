import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/signup"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-16">
        <Outlet></Outlet>
      </div>
      {!shouldHideFooter && <Footer></Footer>}
    </div>
  );
};

export default Root;
// className='max-w-[1440px] mx-auto'
