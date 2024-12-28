"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AccountIcon from "../../public/codicon--account.png";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerInfo, logoutCustomerAsync } from "@/redux/slice/customerProfile/customerProfileSlice";
import { useRouter } from "next/navigation";

const accountDetailsSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const customerInformation = useSelector(getCustomerInfo);

  const handleLogout = () => {
    dispatch(logoutCustomerAsync()).then((result) => {
      if (logoutCustomerAsync.fulfilled.match(result)) {
        router.push("/consumer/productsListingPage");
      }
    })
  }

  return (
    <div className="">
      <div id="title" className="border bg-red-200 border-red-500 rounded-sm py-5 px-3 m-3 flex">
        <div id="profileLogo">
          <Image
            src={AccountIcon}
            alt="account-icon"
            className="cursor-pointer w-10 h-10"
          />
        </div>
        <div
          id="profileNameAndEmail"
          className="ml-3 max-w-64 flex items-center"
        >
          <h4 className=" italic">{`Hi ${customerInformation?.first_name || ""}`}</h4>
        </div>
      </div>

      <div id="accountContents">
        <Link href="/consumer/accountDetails">
          <div className=" text-sm m-3 p-2 italic hover:underline hover:bg-red-200">
            P r o f i l e
          </div>
        </Link>
        <Link href="/consumer/accountDetails/accountOrderDetails">
          <div className="text-sm m-3 p-2 italic hover:underline hover:bg-red-200">
            O r d e r s
          </div>{" "}
        </Link>
        <Link href="">
          <div onClick={handleLogout} className="text-sm m-3 p-2 italic hover:underline hover:bg-red-200">
            L o g o u t
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default accountDetailsSidebar;
