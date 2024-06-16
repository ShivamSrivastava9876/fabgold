"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AccountIcon from "../../public/assets/account-icon.png";

const accountDetailsSidebar = () => {
  return (
    <div className="">
      <div id="title" className="bg-red-400 rounded-sm py-5 px-3 m-3 flex">
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
          <h4 className="text-white italic">Hi, Kasim Baig</h4>
        </div>
      </div>

      <div id="accountContents">
        <Link href="/consumerHomepage/accountDetails">
          <div className=" text-sm m-5 p-2 italic bg-white hover:bg-red-200">
            P r o f i l e
          </div>
        </Link>
        <Link href="/consumerHomepage/accountDetails/accountOrderDetails">
          <div className="text-sm  m-5 p-2 italic bg-white hover:bg-red-200">
            O r d e r s
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default accountDetailsSidebar;
