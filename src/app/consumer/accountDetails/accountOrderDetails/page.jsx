"use client";

import React, { useState } from "react";
import Image from "next/image";
import ConsumerLayout from "@/components/consumerLayout";
import AccountDetailsSidebar from "@/components/accountDetailsSidebar";
import HamburgerIcon from "@/../../public/charm--menu-hamburger.png";
import CrossIcon from "@/../../public/charm--cross.png";
import ProductImageOne from "@/../../public/product-list/JE04059-YGP900_11_listfront.png";

const AccountOrderDetails = () => {
  const orders = [
    {
      productPhotoId: 101,
      orderStatus: "Delivered",
      dateOfOrderPlaced: "23-02-2024",
      deliveryDate: "25-02-2024",
      photo: ProductImageOne,
      productId: "GLR116686-FXY20",
      productName: "Ethereal Essence Yellow Gold Ring for Women",
      quantity: 2,
      productPrice: "₹90,000",
      weight: "32.32gm",
      wishlist: true,
    },
    {
      productPhotoId: 101,
      orderStatus: "Delivered",
      dateOfOrderPlaced: "23-02-2024",
      deliveryDate: "25-02-2024",
      photo: ProductImageOne,
      productId: "GLR116686-FXY21",
      productName: "Ethereal Essence Yellow Gold Ring for Women",
      quantity: 2,
      productPrice: "₹90,000",
      weight: "32.32gm",
      wishlist: false,
    },
    {
      productPhotoId: 101,
      orderStatus: "Delivered",
      dateOfOrderPlaced: "23-02-2024",
      deliveryDate: "25-02-2024",
      photo: ProductImageOne,
      productId: "GLR116686-FXY21",
      productName: "Ethereal Essence Yellow Gold Ring for Women",
      quantity: 2,
      productPrice: "₹87,000",
      weight: "32.37gm",
      wishlist: true,
    },
  ];
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <ConsumerLayout>
      <div className="flex relative">
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        )}
        <div
          className={`absolute lg:static my-2 bg-gray-100 min-w-max w-full lg:w-1/4 border-2 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 z-50`}
        >
          <AccountDetailsSidebar />
          <button
            onClick={toggleSidebar}
            className={`fixed top-4 lg:hidden z-50 ${
              isSidebarOpen ? "right-3" : "-right-12"
            }`}
          >
            <Image
              src={isSidebarOpen ? CrossIcon : HamburgerIcon}
              alt="account-icon"
              className="cursor-pointer w-10 h-10"
            />
          </button>
        </div>

        <div className="py-6 px-12 w-full flex flex-col items-center">
          <h1 className="font-bold italic text-4xl">
            <u>O r</u> d e r s
          </h1>
          <div className="col-span-2 ">
            {orders.map((order) => (
              <div
                key={order.productId}
                id="order"
                className="flex md:flex-row justify-center items-center flex-col p-5 md:p-10 bg-white border border-[#c14d6e] m-8"
              >
                <Image src={order.photo} alt={order.productPhotoId} className="h-48 w-48" />
                <div id="orderDetails" className="px-10 py-1">
                  <div className="text-sm italic">
                    {order.orderStatus} on {order.deliveryDate}
                  </div>
                  <div className="text-sm italic mb-2">
                    Date of order placed: {order.dateOfOrderPlaced}
                  </div>
                  <div className="text-sm italic">{order.productName}</div>
                  <div className="text-sm italic mb-3">
                    Product Id: {order.productId}
                  </div>
                  <div className="text-sm italic">
                    Quantity: {order.quantity}
                  </div>
                  <div className="text-sm mb-5 italic">
                    Weight: {order.weight}
                  </div>
                  <div className="text-base italic">{order.productPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default AccountOrderDetails;
