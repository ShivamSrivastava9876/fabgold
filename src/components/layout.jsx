import React, { ReactNode } from "react";
import Header from "./header";
import SideBar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className=" bg-gray-100">
      <div className="flex min-h-screen">
        <div className="min-h-screen bg-[#BB1140] md:w-[261px] w-16.3125">
          <SideBar />
        </div>
        <div className="w-full bg-gray-100">
          <Header />
          <div className="content flex flex-col justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
