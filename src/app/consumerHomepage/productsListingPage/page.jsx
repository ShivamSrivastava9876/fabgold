"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FilterImage from "@/../../public/mage--filter.png";
import ProductImageOne from "@/../../public/product-list/JE04059-YGP900_11_listfront.png";
import ProductImageTwo from "@/../../public/product-list/01-300x300.jpg";
import ProductImageThree from "@/../../public/product-list/05-300x300.jpg";
import ProductImageFour from "@/../../public/product-list/Copy of a (1).jpg";
import ProductImageFive from "@/../../public/product-list/JE05164-1YP900_11_listfront (1).png";
import ProductImageSix from "@/../../public/product-list/image 37 (1).png";
import WishListImage from "@/../../public/ph--heart-thin.png";
import WishListAddedImage from "@/../../public/mdi--heart.png";

import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React, { useState } from "react";
import ConsumerLayout from "../../../components/consumerLayout";
import Link from "next/link";

const productListingPage = () => {
  let side = "left";
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedSortMethod, setSelectedSortMethod] = useState("");
  const productList = [
    {
      productImage: ProductImageOne,
      productPrice: "₹50,000",
      productName: "Peacock charm Gold Stud Earring",
      wishlist: false,
    },
    {
      productImage: ProductImageTwo,
      productPrice: "₹50,000",
      productName: "Peacock charm Gold Stud Earring",
      wishlist: true,
    },
    {
      productImage: ProductImageThree,
      productPrice: "₹50,000",
      productName: "Peacock charm Gold Stud Earring",
      wishlist: false,
    },
    {
      productImage: ProductImageFour,
      productPrice: "₹50,000",
      productName: "Peacock charm Gold Stud Earring",
      wishlist: false,
    },
    {
      productImage: ProductImageFive,
      productPrice: "₹50,000",
      productName: "Peacock charm Gold Stud Earring",
      wishlist: false,
    },
    {
      productImage: ProductImageSix,
      productPrice: "₹50,000",
      productName: "Peacock charm Gold Stud Earring",
      wishlist: false,
    },
  ];

  const handlePriceChange = (priceRange) => {
    setSelectedPriceRange((prevSelected) =>
      prevSelected === priceRange ? "" : priceRange
    );
    setIsPriceDropdownOpen(false);
  };

  const handleSortChange = (sortMethod) => {
    setSelectedSortMethod((prevSelected) =>
      prevSelected === sortMethod ? "" : sortMethod
    );
    setIsSortDropdownOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  return (
    <ConsumerLayout>
      <div className=" w-full h-10 hidden lg:flex bg-[#e66e90] justify-around items-center">
        <div className="mx-8 px-5 flex bg-[#c73760] text-xl font-bold">
          <Image src={FilterImage} className="h-6 w-6 mr-2" />
          Filters
        </div>
        <div className="mx-8 px-10 relative">
          <button
            onClick={togglePriceDropdown}
            className="flex items-center font-semibold"
          >
            Price
            <span
              className={`ml-2 transform transition-transform duration-200 ${
                isPriceDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>
          {isPriceDropdownOpen && (
            <div className="absolute mt-1 text-xs w-full h-64 border-black overflow-hidden overflow-y-scroll top-7 right-0 bg-white border shadow-lg z-10">
              <ul>
                {[
                  "Less than ₹5,000",
                  "₹5,000 - ₹10,000",
                  "₹10,000 - ₹15,000",
                  "₹15,000 - ₹20,000",
                  "₹20,000 - ₹30,000",
                  "₹30,000 - ₹40,000",
                  "₹40,000 - ₹50,000",
                  "₹50,000 - ₹1,00,000",
                  "Above ₹1,00,000",
                ].map((priceRange) => (
                  <li
                    key={priceRange}
                    className="px-4 py-3 hover:bg-gray-200 font-bold cursor-pointer flex items-center"
                  >
                    <input
                      type="radio"
                      id={priceRange}
                      name="priceRange"
                      checked={selectedPriceRange === priceRange}
                      onChange={() => handlePriceChange(priceRange)}
                      className="mr-2"
                    />
                    <label htmlFor={priceRange}>{priceRange}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mx-8 font-semibold px-10">Material</div>
        <div className="mx-8 font-semibold px-5">Category</div>
        <div className="mx-8 font-semibold px-10">Collections</div>
      </div>

      <div className="flex flex-wrap items-center mt-0 lg:mt-2">
        {/* Screen size less than lg */}
        <Sheet key={side} className="">
          <SheetTrigger asChild>
            <Button variant="outline" className="m-2 h-10 font-bold lg:hidden">
              <Image src={FilterImage} className="h-6 w-6 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="overflow-y-scroll">
            <SheetHeader>
              <SheetTitle className="text-xl">Filters</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="mx-3">
                <div className="relative">
                  <button
                    onClick={togglePriceDropdown}
                    className="flex items-center font-semibold text-sm"
                  >
                    Price
                    <span
                      className={`ml-2 transform transition-transform duration-200 ${
                        isPriceDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isPriceDropdownOpen && (
                    <div className="mt-1 text-xs w-full bg-white shadow-lg z-10">
                      <ul>
                        {[
                          "Less than ₹5,000",
                          "₹5,000 - ₹10,000",
                          "₹10,000 - ₹15,000",
                          "₹15,000 - ₹20,000",
                          "₹20,000 - ₹30,000",
                          "₹30,000 - ₹40,000",
                          "₹40,000 - ₹50,000",
                          "₹50,000 - ₹1,00,000",
                          "Above ₹1,00,000",
                        ].map((priceRange) => (
                          <li
                            key={priceRange}
                            className="px-4 py-3 hover:bg-gray-200 font-bold cursor-pointer flex items-center"
                          >
                            <input
                              type="radio"
                              id={priceRange}
                              name="priceRange"
                              checked={selectedPriceRange === priceRange}
                              onChange={() => handlePriceChange(priceRange)}
                              className="mr-2"
                            />
                            <label htmlFor={priceRange}>{priceRange}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Apply filters</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Sort by methods */}
        <div className="mx-2 sm:mx-0 lg:mx-2 pl-3 pr-2 h-10 bg-white rounded-md relative flex items-center border">
          <button
            onClick={toggleSortDropdown}
            className="flex items-center text-xs font-bold"
          >
            Sort by
            <span
              className={`ml-2 transform transition-transform duration-200 ${
                isSortDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>
          {isSortDropdownOpen && (
            <div className="absolute mt-3 text-xs w-full h-64 border-black overflow-hidden overflow-y-scroll top-7 right-0 bg-white border shadow-lg z-10">
              <ul>
                {[
                  "Popularity",
                  "Newly listed",
                  "Price high to low",
                  "Price low to high",
                ].map((sortMethod) => (
                  <li
                    key={sortMethod}
                    className="px-4 py-3 hover:bg-gray-200 font-bold cursor-pointer flex items-center"
                  >
                    <input
                      type="radio"
                      id={sortMethod}
                      name="sortMethod"
                      checked={selectedSortMethod === sortMethod}
                      onChange={() => handleSortChange(sortMethod)}
                      className="mr-2"
                    />
                    <label htmlFor={sortMethod}>{sortMethod}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="ml-2">
            <Input
              type="sortMethod"
              placeholder=""
              className="font-bold text-sm my-1 h-8"
              disabled={true}
              value={selectedSortMethod}
            />
          </div>
        </div>
      </div>

      <div id="ProductList" className="my-10 flex flex-col items-center">
        <div className="text-5xl md:text-6xl font-lobster text-[#c14d6e]">
          J e w e l l e r i e s
        </div>
        <div></div>
      </div>

      <div
        id="products"
        className="mb-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-3"
      >
        {productList.map((product) => (
          <Link
            href="/consumerHomepage/productDescriptionPage"
            id=""
            className="border border-[#c14d6e] flex flex-col justify-center items-center m-5 p-3"
          >
            <div
              id="imageAndWishlist"
              className="relative flex justify-center items-center h-[300px] max-w-[300px]"
            >
              <Image src={product.productImage} className="" />
              {product.wishlist ? (
                <Image
                  src={WishListAddedImage}
                  className="absolute top-1 right-1 h-8 w-8"
                />
              ) : (
                <Image
                  src={WishListImage}
                  className="absolute top-1 right-1 h-8 w-8"
                />
              )}
            </div>
            <div id="priceAndName" className="my-2 w-full">
              <div className="text-sm italic">{product.productPrice}</div>
              <div className=" text-sm italic">{product.productName}</div>
            </div>
          </Link>
        ))}
      </div>
    </ConsumerLayout>
  );
};

export default productListingPage;
