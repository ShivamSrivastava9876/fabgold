import React, { ReactNode } from "react";
import ConsumerHeader from "./consumerHeader";
import ConsumerFooter from "./consumerFooter";

const ConsumerLayout = ({ children }) => {
  return (
    <div className=" bg-gray-100">
      <div className="flex min-h-screen">
        <div className="w-full bg-gray-100">
          <ConsumerHeader />
          <div className="">{children}</div>
          <ConsumerFooter />
        </div>
      </div>
    </div>
  );
};

export default ConsumerLayout;
