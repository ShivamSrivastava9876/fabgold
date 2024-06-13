"use client";

import React from "react";
import ConsumerLayout from "../../../components/consumerLayout";
import OrderSummary from "@/components/orderSummary";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import tick from "@/../../public/charm--circle-tick.png";
import grayTick from "@/../../public/charm--circle-tick--gray.png";

const checkoutAccountDetails = () => {
  const addresses = [
    {
      name: "Shivam Srivastava",
      addressLine: "Flat: 212/F, Ambegaon Bk",
      city: "Pune",
      state: "Maharashtra",
      pincode: 411046,
      contactNo: 1231231231,
    },
    {
      name: "Shivam Srivastava",
      addressLine: "Flat: 212/F, Ambegaon Bk",
      city: "Pune",
      state: "Maharashtra",
      pincode: 411046,
      contactNo: 1231231231,
    },
    {
      name: "Shivam Srivastava",
      addressLine: "Flat: 212/F, Ambegaon Bk",
      city: "Pune",
      state: "Maharashtra",
      pincode: 411046,
      contactNo: 1231231231,
    },
    {
      name: "Shivam Srivastava",
      addressLine: "Flat: 212/F, Ambegaon Bk",
      city: "Pune",
      state: "Maharashtra",
      pincode: 411046,
      contactNo: 1231231231,
    },
  ];

  return (
    <ConsumerLayout>
      <div id="progressStatus" className="w-full flex justify-center items-center mt-7">
        <div className="">
          <Image
            src={tick}
            width={100}
            height={100}
            alt="logo"
            objectFit="contain"
            objectPosition="center"
            className="w-10 h-10 rounded-full"
            // layout="fill"
          />
        </div>
        <div class="relative w-1/5 h-1 mb-4 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        <div className="">
          <Image
            src={grayTick}
            width={100}
            height={100}
            alt="logo"
            objectFit="contain"
            objectPosition="center"
            className="w-10 h-10 rounded-full"
            // layout="fill"
          />
        </div>
        <div class="relative w-1/5 h-1 mb-4 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        <div className="">
          <Image
            src={grayTick}
            width={100}
            height={100}
            alt="logo"
            objectFit="contain"
            objectPosition="center"
            className="w-10 h-10 rounded-full"
            // layout="fill"
          />
        </div>
      </div>
      <div
        id="accountDetails"
        className="md:grid md:grid-cols-3 md:gap-4 md:mx-28"
      >
        <div
          id="addressCreationAndSelection"
          className="col-span-2 my-8 px-4 py-4 bg-white"
        >
          <div id="addressCreation" className="mb-8 p-4 border-b-2">
            <h3 className="italic font-semibold mb-5">Add address</h3>
            <form id="addressCreation" className="space-y-6">
              <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-7">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name" className="italic text-sm">
                    Name
                  </Label>
                  <Input type="text" id="name" className="text-sm italic" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="mobile" className="italic text-sm">
                    Contact no
                  </Label>
                  <Input type="tel" id="mobile" className="text-sm italic" />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="italic text-sm">
                  Address
                </Label>
                <Input type="email" id="email" className="text-sm italic" />
              </div>

              <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-7">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email" className="italic text-sm">
                    City
                  </Label>
                  <Input type="email" id="email" className="text-sm italic" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email" className="italic text-sm">
                    State
                  </Label>
                  <Input type="email" id="email" className="text-sm italic" />
                </div>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="italic text-sm">
                  PIN code
                </Label>
                <Input type="email" id="email" className="text-sm italic" />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="italic w-3/5 rounded-sm"
                  variant={""}
                >
                  Add address
                </Button>
              </div>
            </form>
          </div>

          <div id="addressSelection" className="space-y-3">
            <h3 className="italic font-semibold ">Choose shipping address</h3>
          </div>

          <div id="addressSelection" className="space-y-5 mt-4">
            {addresses.map((address) => (
              <div id="specificAddress" className="flex space-x-6 border p-4">
                <input type="radio" />
                <div id="addressDetails">
                  <div className="italic text-xs">{address.name} </div>
                  <div className="italic text-xs">{address.addressLine}</div>
                  <div className="italic text-xs">{address.city} </div>
                  <div className="italic text-xs">{address.state}</div>
                  <div className="italic text-xs">{address.pincode}</div>
                  <div className="italic text-xs">
                    Contact number: {address.contactNo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="proceed"
          className="my-8 lg:mr-8 flex flex-col items-center h-min w-full px-4 bg-white"
        >
          <div className="mt-2 mb-4 border-y w-full">
            <div className="text-lg italic underline mb-4">Order summary</div>
            <div className="text-sm italic mb-2">Subtotal: ₹ 4,32,900</div>
            <div className="text-sm italic mb-2">Discount: 30%</div>
            <div className="text-sm italic mb-2">You save: ₹ 72,323</div>
            <div className="text-sm italic mb-2">Total: ₹ 3,51,000</div>
          </div>
          <Link href="/" className="w-full">
            <Button className="text-sm italic rounded-sm h-8 w-full mb-6">
              Proceed
            </Button>
          </Link>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default checkoutAccountDetails;
