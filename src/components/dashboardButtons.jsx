// components/UserComponent.js
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "../../public/assets/Icons/searchIcon.svg";
import { useDispatch } from "react-redux";
import { searchProductAsync } from "@/redux/slice/product/productSlice";
import Link from "next/link";
import { getGoldRateAsync, getSilverRateAsync } from "@/redux/slice/metalRate/metalRateSlice";

const DashboardComponent = ({
    priceOfMetal,
    setPriceOfMetal
}) => {
    const dispatch = useDispatch();

    const handlePriceOfMetal = () => {
        setPriceOfMetal(!priceOfMetal);
    };

    let currentDate = new Date().toDateString();
    currentDate = currentDate.replace(/^([A-Z][a-z]+)(\s)/, '$1, ');

    useEffect(() => {
        dispatch(getGoldRateAsync());
        dispatch(getSilverRateAsync());
    }, [dispatch]);

    return (
        <div className="flex items-center justify-between flex-wrap w-full mb-8">
            {/* User Title */}
            <h1 className="text-2xl mx-2 m-2 font-bold">Dashboard</h1>

            <div className="flex flex-row flex-wrap items-center">
                {/* Right-hand side Buttons */}
                
                <div id="current date" className="flex space-x-2 m-2 mx-2">
                    <h4 className="font-semibold">Date:</h4>
                    <div className="font-semibold text-gray-600">{currentDate}</div>
                </div>

                <Link href="#addProduct" className="flex items-center relative">
                    <div className="flex items-center space-x-4 mx-2 relative">
                        {/* Button 1 */}
                        {!priceOfMetal && <button
                            className="flex items-center px-8 py-2 bg-[#ba4465] hover:bg-[#BB1140] text-white rounded-full shadow transition-transform duration-300 transform"
                            onClick={handlePriceOfMetal}
                        >
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg> */}
                            Update metal rates
                        </button>}
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default DashboardComponent;
