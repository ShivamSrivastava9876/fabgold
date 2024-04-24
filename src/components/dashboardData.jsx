import React, { useEffect } from "react";
import Image from "next/image";
import UserIcon from "../../public/assets/Icons/user_icon.svg";
import OrderIcon from "../../public/assets/Icons/order-ascendingBlack.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getGoldData, getGoldRateAsync, getSilverData, getSilverRateAsync } from "@/redux/slice/metalRate/metalRateSlice";

const DashboardData = () => {
  const dispatch = useDispatch();

  const lastGoldPrice = useSelector(getGoldData);
  const lastSilverPrice = useSelector(getSilverData);

  useEffect(() => {
    dispatch(getGoldRateAsync());
    dispatch(getSilverRateAsync());
  }, [dispatch]);

  return (
    <div className="mt-2 mb-8 space-y-8">
      <div id="dashboardDataFields" className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Link href="/users"
          id="totalUsers"
          className="flex w-17.0125 h-24 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none outline-none hover:bg-gray-100"
        >
          <div id="img" className="flex justify-center w-1/3">
            <Image src={UserIcon} alt="user-icon" className="w-8" />
          </div>
          <div id="details" className="flex flex-col mx-2 my-2 font-semibold">
            <span className="">Total users</span>
            <span id="data" className="font-bold">
              {/* {dashboardDetails?.all_users} */}
            </span>
          </div>
        </Link>

        <div
          id="newOrders"
          className="flex w-17.0125 h-24 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none outline-none hover:bg-gray-100"
        >
          <div id="img" className="flex justify-center w-1/3">
            <Image src={OrderIcon} alt="user-icon" className="w-8" />
          </div>
          <div id="details" className="flex flex-col mx-2 my-2 font-semibold">
            <span className="">New orders</span>
            <span id="data" className="font-bold ">
              {/* {dashboardDetails?.new_orders} */}
            </span>
          </div>
        </div>

        <Link
          href="/confirmOrders"
          id="confirmOrders"
          className="flex w-17.0125 h-24 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none outline-none hover:bg-gray-100"
        >
          <div id="img" className="flex justify-center w-1/3">
            <Image src={OrderIcon} alt="user-icon" className="w-8" />
          </div>
          <div id="details" className="flex flex-col mx-2 my-2 font-semibold">
            <span className="">Confirm orders</span>
            <span id="data" className="font-bold ">
              {/* {dashboardDetails?.confirm_order} */}
            </span>
          </div>
        </Link>

        <Link
          href="/deliveredOrders"
          id="deliverdOrder"
          className="flex w-17.0125 h-24 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none outline-none hover:bg-gray-100"
        >
          <div id="img" className="flex justify-center w-1/3">
            <Image src={OrderIcon} alt="user-icon" className="w-8" />
          </div>
          <div id="details" className="flex flex-col mx-2 my-2 font-semibold">
            <span className="">Deliverd orders</span>
            <span id="data" className="font-bold ">
              {/* {dashboardDetails?.delivered_order} */}
            </span>
          </div>
        </Link>

        <Link
          href="/cancelledOrders"
          id="cancelledOrders"
          className="flex w-17.0125 h-24 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none outline-none hover:bg-gray-100"
        >
          <div id="img" className="flex justify-center w-1/3">
            <Image src={OrderIcon} alt="user-icon" className="w-8" />
          </div>
          <div id="details" className="flex flex-col mx-2 my-2 font-semibold">
            <span className="">Cancelled orders</span>
            <span id="data" className="font-bold ">
              {/* {dashboardDetails?.cancelled_order} */}
            </span>
          </div>
        </Link>

        <Link
          href="/declinedOrders"
          id="declinedOrders"
          className="flex w-17.0125 h-24 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none outline-none hover:bg-gray-100"
        >
          <div id="img" className="flex justify-center w-1/3">
            <Image src={OrderIcon} alt="user-icon" className="w-8" />
          </div>
          <div id="details" className="flex flex-col mx-2 my-2 font-semibold">
            <span className="">Declined orders</span>
            <span id="data" className="font-bold ">
              {/* {dashboardDetails?.decline_order} */}
            </span>
          </div>
        </Link>

        <Link
          href="/liveManufacturingOrders"
          id="manufacturingOrders"
          className="flex w-17.0125 h-24 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none outline-none hover:bg-gray-100"
        >
          <div id="img" className="flex justify-center w-1/3">
            <Image src={OrderIcon} alt="user-icon" className="w-8" />
          </div>
          <div id="details" className="flex flex-col mx-2 my-2 font-semibold">
            <span className="">Manufacturing orders</span>
            <span id="data" className="font-bold ">
              {/* {dashboardDetails?.manufacring_count} */}
            </span>
          </div>
        </Link>
      </div>

      <div id="metalPrice">
        <h1 className=" text-xl font-bold px-2 mb-2 bg-[#e77f9c]">
          Metal rates
        </h1>
        <div className="flex">
          <div className="bg-white border border-gray-300 rounded-2xl px-4 py-2 flex space-x-10">
            <div id="goldRates" className="space-y-1" >
              <h3 className="font-semibold mb-2 underline">Gold rates</h3>
              <div className="flex space-x-2 ">
              <h5 className="font-semibold text-sm">24 kt = ₹ {lastGoldPrice.data?.price_24_kt} per gm</h5>
              </div>
              <div className="flex space-x-2 ">
              <h5 className="font-semibold text-sm">23 kt = ₹ {lastGoldPrice.data?.price_23_kt} per gm</h5>
              </div>
              <div className="flex space-x-2 ">
              <h5 className="font-semibold text-sm">22 kt = ₹ {lastGoldPrice.data?.price_22_kt} per gm</h5>
              </div>
              <div className="flex space-x-2 ">
                <h5 className="font-semibold text-sm">18 kt = ₹ {lastGoldPrice.data?.price_18_kt} per gm</h5>
              </div>
            </div>
            <div id="silverRates" className=" space-y-1">
              <h3 className="font-semibold mb-2 underline">Silver rates</h3>
              <div className="flex space-x-2 ">
                <h5 className="font-semibold text-sm">₹ {lastSilverPrice.data?.price_per_kg} per kg</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
