import React from "react";

const ProfileDynamicHeader = ({ breadcrumb, title, dateRange, details }) => {
  return (
    <section className="w-full heroBg py-6 px-6 md:px-12 lg:px-20">
      <div className="">
        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
          <span className="hover:text-white cursor-pointer transition-colors">
            Home
          </span>
          <span>/</span>
          <span className="text-gray-300 font-medium">{breadcrumb}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>

        <p className="text-gray-400 text-base md:text-lg font-light">
          <span className="text-gray-300">{dateRange}</span>
          {details && (
            <>
              <span className="mx-2">·</span>
              <span>{details}</span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default ProfileDynamicHeader;
