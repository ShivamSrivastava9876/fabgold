"use client";

import ConsumerLayout from "../../../../components/consumerLayout";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import ProductImageOne from "@/../../public/product-list/JE04059-YGP900_11_listfront.png";
import ProductImageTwo from "@/../../public/product-list/01-300x300.jpg";
import ProductImageThree from "@/../../public/product-list/05-300x300.jpg";
import ProductImageFour from "@/../../public/product-list/Copy of a (1).jpg";
import ProductImageFive from "@/../../public/product-list/JE05164-1YP900_11_listfront (1).png";
import ProductImageSix from "@/../../public/product-list/image 37 (1).png";
import { Card, CardContent } from "@/components/ui/card";
import WishListImage from "@/../../public/ph--heart-thin.png";
import WishListAddedImage from "@/../../public/mdi--heart.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { getCustomerProductDetailsAsync } from "@/redux/slice/customerProductList/customerProductListSlice";

const ProductDescriptionPage = () => {
  const params = useParams();
  const productId = params.productId;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomerProductDetailsAsync(productId));
  }, [dispatch]);

  const [selectedProductPhoto, setSelectedProductPhoto] = useState(null);
  const [purityDropdown, setPurityDropdown] = useState(false);
  const [selectedPuritySpc, setSelectedPuritySpc] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const productPhotos = [
    {
      productPhotoId: 101,
      photo: ProductImageOne,
    },
    {
      productPhotoId: 102,
      photo: ProductImageFour,
    },
    {
      productPhotoId: 103,
      photo: ProductImageFive,
    },
    {
      productPhotoId: 104,
      photo: ProductImageThree,
    },
    {
      productPhotoId: 105,
      photo: ProductImageTwo,
    },
  ];

  const handlePuritySpcSelection = (purity) => {
    setSelectedPuritySpc(purity);
    setPurityDropdown(false);
  };

  const handleSelectedProduct = (photo) => {
    setSelectedProductPhoto(photo);
  };

  const togglePurityDropdown = () => {
    setPurityDropdown(!purityDropdown);
  };

  return (
    <ConsumerLayout>
      <div
        id="productDescription"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div
          id="productPhotos"
          className="flex flex-col pt-8 px-10 lg:pb-8 lg:px-24 xl:pb-16 xl:px-36 items-center"
        >
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1 w-full">
                  <Card className="rounded-none">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <span className="text-4xl font-semibold">
                        <Image
                          src={selectedProductPhoto || productPhotos[0].photo}
                          alt="selected product"
                          className=""
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <Carousel className="w-full max-w-sm ">
            <CarouselContent className="-ml-1">
              {productPhotos.map((productPhoto, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-4/5 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card
                      className="rounded-none"
                      onClick={() => handleSelectedProduct(productPhoto.photo)}
                    >
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          <Image
                            src={productPhoto.photo}
                            alt={productPhoto.productPhotoId}
                            className=""
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-none h-full -left-1" />
            <CarouselNext className="rounded-none h-full -right-1" />
          </Carousel>
        </div>
        <div id="productDetails" className="px-4">
          <div className="flex px-2 pt-7 pb-4">
            <div id="productTitleAndDescription" className="w-11/12">
              <div className="text-sm italic">Product Id: GLR116686-FXY20</div>
              <div className="text-5xl font-lobster my-2">
                Ethereal Essence Yellow Gold Ring for Women
              </div>
              <div className="text-sm italic my-4">
                This gold ring, a timeless symbol of majesty and sophistication.
                Crafted from lustrous gold, and the ring features intricate
                detailing reminiscent of a bygone era, exuding an aura of
                opulence and grandeur.
              </div>
            </div>
            <div id="wishlistAndShare" className="w-1/12 flex justify-center">
              {false ? (
                <Image
                  alt="wishlist"
                  src={WishListAddedImage}
                  className="h-8 w-8"
                />
              ) : (
                <Image alt="wishlist" src={WishListImage} className="h-8 w-8" />
              )}
            </div>
          </div>

          <div id="productPriceAndSpecifications" className="mb-12">
            <div id="price" className="italic font-bold text-3xl">
              ₹45,800{" "}
              <span className="text-sm">
                inclusive of all taxes and charges
              </span>
            </div>

            <div
              id="productSpecifications"
              className="grid grid-cols-2 gap-10 mt-8"
            >
              <div id="puritySelection" className="relative px-5">
                <div className="flex flex-col justify-center">
                  <button
                    onClick={togglePurityDropdown}
                    className="flex items-center text-sm italic"
                  >
                    Purity
                    <span
                      className={`ml-2 transform transition-transform duration-200 ${
                        purityDropdown ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div className="">
                    <Input
                      type="sortMethod"
                      placeholder=""
                      className="font-bold text-sm my-1 h-8 border-2 rounded-sm border-[#aa4978]"
                      disabled={true}
                      value={selectedPuritySpc}
                    />
                  </div>
                </div>
                {purityDropdown && (
                  <div className="absolute right-0 mt-1 text-xs w-full border-black bg-white border shadow-lg z-10">
                    <ul>
                      {["18kt", "22kt", "23kt", "24kt"].map((purity) => (
                        <li
                          key={purity}
                          onClick={() => handlePuritySpcSelection(purity)}
                          className="px-4 py-3 hover:bg-gray-200 font-bold cursor-pointer flex items-center"
                        >
                          <div className="italic">{purity}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                id="quantitySelection"
                className="flex justify-center flex-col"
              >
                <div className="text-sm italic">Quantity</div>
                <div>
                  <button
                    onClick={handleDecrease}
                    className="px-4 py-2 bg-[#e9b8d0] hover:bg-gray-300 mr-1 rounded-full"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleChange}
                    className="w-12 text-center border-t border-b italic border-gray-300"
                  />
                  <button
                    onClick={handleIncrease}
                    className="px-4 py-2 bg-[#e9b8d0] hover:bg-gray-300 ml-1 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="addToCart"
            className="flex flex-col items-center space-y-2 my-10 px-7"
          >
            <Button className="text-base italic bg-[#BB1140] w-2/3">
              Add to cart
            </Button>
            <Button variant="outline" className="italic font-semibold w-2/3">
              Buy now
            </Button>
          </div>
        </div>
      </div>
      <div id="relatedProducts"></div>
    </ConsumerLayout>
  );
};

export default ProductDescriptionPage;
