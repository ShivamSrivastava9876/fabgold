"use client"

import SidebarLogo from "../../public/assets/LOGO.png";
import Image from "next/image";
import DashboardIcon from "../../public/assets/Icons/dashboard_icon.svg";
import UserIcon from "../../public/assets/Icons/user_icon.svg";
import CategoryIcon from "../../public/assets/Icons/category_icon.svg";
import ProductsIcon from "../../public/assets/Icons/products_icon.svg";
import ReportsIcon from "../../public/assets/Icons/reports_icon.svg";
import LogoutIcon from "../../public/assets/Icons/logout_icon.svg";
import OrderIcon from "../../public/assets/Icons/order-ascending.svg";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import { logoutUserAsync } from "@/redux/slice/login/loginSlice";
import { FiChevronDown } from 'react-icons/fi';

const SideBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);

  const modalClasses = isSidebarOpen ? 'block' : 'hidden';

  const handleLogout = () => {

    router.push('/login');
    dispatch(logoutUserAsync());
  }

  const handleReportClick = () => {
    setReportVisible(!reportVisible);
  }

  return (
    <>
      <div className={`fixed inset-0 z-40 bg-whitesmoke opacity-80 backdrop-blur-md transition-opacity ${modalClasses}`}></div>
      <button
        className="md:hidden absolute top-4 left-4 p-2 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {!isSidebarOpen ? <FiMenu size={24} style={{ color: 'black', position: 'absolute', top: 12 }} /> : <FiX size={24} style={{ color: '#BB1140', position: 'fixed', left: 264, top: 5, zIndex: 50 }} /> }
      </button>
      
      <div className={`fixed md:static left-0 z-50 top-0 h-full overflow-y-scroll md:overflow-y-auto bg-[#BB1140] w-16.3125 md:translate-x-0 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Side bar logo */}
        <div className="flex items-center justify-center md:mx-6 md:mt-8 mt-10 mx-10">
          <Image
            src={SidebarLogo}
            alt="logo"
            objectFit="contain"
            objectPosition="center"
          // layout="fill"
          />
        </div>

        <div className="w-full flex flex-col justify-between mt-2">
          <Link
            href="/"
            className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={DashboardIcon} alt="dashboard-icon" />

            <span className=" text-normal text-white font font-medium ">
              Dashboard
            </span>
          </Link>
          <Link
            href="/users"
            className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={UserIcon} alt="user-icon" />

            <span className=" text-normal text-white font-medium">Users</span>
          </Link>
          <Link
            href="/category"
            className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={CategoryIcon} alt="category-icon" />

            <span className=" text-normal text-white font-medium">
              Categories
            </span>
          </Link>
          <Link
            href="/productType"
            className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={ProductsIcon} alt="products-icon" />
            <span className="text-normal text-white font-medium">
              Product type
            </span>
          </Link>
          <Link
            href="/product"
            className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={ProductsIcon} alt="products-icon" />
            <span className=" text-normal text-white font-medium">
              Products
            </span>
          </Link>

          <Link
            href="/"
            className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={OrderIcon} alt="user-icon" />

            <span className="text-normal text-white font-medium">Orders</span>
          </Link>

          <Link
            href="/"
            className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={OrderIcon} alt="products-icon" />
            {/* <FontAwesomeIcon icon={faIndustry} /> */}
            <span className="text-normal text-white font-medium">Payment</span>
          </Link>

          <div
            onClick={handleReportClick}
            className="flex space-x-6 items-center px-6 py-4 relative cursor-pointer transition duration-300 ease-in-out 
            hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
            active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
          >
            <Image src={ReportsIcon} alt="product-icon" />

            <span className=" text-base text-white font-normal">
              Reports

            </span>
            <div className="flex justify-start">
              {reportVisible ? <FiChevronDown className="text-white transition-transform transform rotate-180" /> : <FiChevronDown className="text-blue-200 transition-transform transform rotate-0" />}
            </div>
          </div>


          {/* Sub reports */}
          <div
            className={`relative transition-max-h duration-500 ease-in-out overflow-hidden ${reportVisible ? "" : "h-0"}`}
          >
            <Link
              href="/orderReports"
              className="flex space-x-6 items-center px-6 py-4 relative cursor-pointer transition duration-300 ease-in-out 
              hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
              active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
            >
              {/* <Image src={ReportsIcon} alt="product-icon" /> */}

              <span className=" text-sm text-white font-normal">
                Order reports
              </span>
            </Link>
            <Link
              href="/productReports"
              className="flex space-x-6 items-center px-6 py-4 relative cursor-pointer transition duration-300 ease-in-out 
              hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
              active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
            >
              {/* <Image src={ReportsIcon} alt="product-icon" /> */}

              <span className=" text-sm text-white font-normal">
                Product reports
              </span>
            </Link>
            <Link
              href="/userReports"
              className="flex space-x-6 items-center px-6 py-4 relative cursor-pointer transition duration-300 ease-in-out 
              hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white 
              active:bg-blue-200 active:bg-opacity-20 active:border-l-4 focus:bg-blue-200 focus:bg-opacity-20 focus:border-l-4"
            >
              {/* <Image src={ReportsIcon} alt="product-icon" /> */}

              <span className=" text-sm text-white font-normal">
                User reports
              </span>
            </Link>
          </div>

          <div onClick={handleLogout} className="flex space-x-6 items-center px-6 py-4 relative transition duration-300 ease-in-out hover:bg-blue-200 hover:bg-opacity-20 hover:border-l-4 border-white cursor-pointer ">
            <Image src={LogoutIcon} alt="logout-icon" />

            <span className="text-normal text-white font-medium">Logout</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default SideBar;
