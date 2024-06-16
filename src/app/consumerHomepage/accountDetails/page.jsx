"use client";

import React, { useState } from "react";
import Image from "next/image";
import ConsumerLayout from "../../../components/consumerLayout";
import AccountDetailsSidebar from "@/components/accountDetailsSidebar";
import HamburgerIcon from "@/../../public/charm--menu-hamburger.png";
import CrossIcon from "@/../../public/charm--cross.png";

const AccountDetails = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <ConsumerLayout>
      <div className="flex">
        <div
          className={`absolute md:static my-2 bg-gray-100 min-w-max w-full md:w-1/4 border-2 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <AccountDetailsSidebar />
          <button
            onClick={toggleSidebar}
            className={`fixed top-4 md:hidden z-50 ${isSidebarOpen ? "right-3" : "-right-12"}`}
          >
            <Image
              src={isSidebarOpen ? CrossIcon : HamburgerIcon}
              alt="account-icon"
              className="cursor-pointer w-10 h-10"
            />
          </button>
        </div>

        <div className="my-6 mx-12 w-full">
          <h1 className="font-bold italic text-4xl flex justify-center md:block w-full"><u>P r</u> o f i l e</h1>
          <div id="info" className="">
            <div className="text-2xl italic my-5"><u>Pers</u>onal information</div>
            <div className="text-sm italic my-5">Name: Kasim Baig</div>
            <div className="text-sm italic my-5">Email address: kasim.baig@gmail.com</div>
            <div className="text-sm italic my-5">Contact number: 8768768760</div>
            <div className="text-sm italic my-5">Gender: Male</div>
            <div className="text-sm italic my-5">Birth day: 07-07-1996</div>
            <div className="text-sm italic my-5">Password: ********</div>
          </div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default AccountDetails;
