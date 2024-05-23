"use client";

import Layout from "@/components/layout";
import DashboardButtons from "@/components/dashboardButtons";
import DashboardData from "@/components/dashboardData";
import SetPriceOfMetalForm from "@/components/setPriceOfMetalForm";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ConsumerLayout from "../../components/consumerLayout";
import AdOne from "../../../public/assets/ad-1.jpg";
import NewArrivalsOne from "../../../public/assets/image23.png";
import NewArrivalsTwo from "../../../public/assets/image25.png";
import NewArrivalsThree from "../../../public/assets/image26.png";
import NewArrivalsFour from "../../../public/assets/image27.png";
import NewArrivalsFive from "../../../public/assets/image28.png";
import CategoryOne from "@/../../public/assets/categories1.jpg";
import CategoryTwo from "@/../../public/assets/categories2.jpg";
import CategoryThree from "@/../../public/assets/categories3.jpg";
import CategoryFour from "@/../../public/assets/categories4.jpg";
import CategoryFive from "@/../../public/assets/categories5.jpg";
import ShopCollectionImage from "@/../../public/assets/image34.png";
import AeroplaneIcon from "@/../../public/material-symbols-light--flight.png";
import ClockIcon from "@/../../public/clarity--clock-line.png";
import ReturnIcon from "@/../../public/icon-park-outline--back.png";
import DiamondBangles from "@/../../public/Copy_of_a-removebg-preview.png";
import DiamondPearls from "@/../../public/diamond.png";
import DiamondBracelet from "@/../../public/427b8639-ecdc-4bb9-b0d5-65b3d0daadbc.png";
import NewsletterPhoto from "@/../../public/gold-jewelry-3790542-1920_orig.jpg";
import NewsletterBgPhoto from "@/../../public/gold-jewelry-diwali-background-ai-generated-free-photo.jpg";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import * as React from "react";
// import CategoryBackroundImage from "@/../../public/Pexels-Photo-by-Fidan-Nur.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

// import required modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ConsumerHomepage = () => {
  const router = useRouter();

  const categories = [
    {
      photo: CategoryOne,
      title: "Bangles",
    },
    {
      photo: CategoryTwo,
      title: "Bracelets",
    },
    {
      photo: CategoryThree,
      title: "Earrings",
    },
    {
      photo: CategoryFour,
      title: "Necklace",
    },
    {
      photo: CategoryFive,
      title: "Rings",
    },
  ];

  const products = [
    {
      photo: CategoryOne,
      title: "Bangles",
      price: "₹1,00,000",
    },
    {
      photo: CategoryTwo,
      title: "Bracelets",
      price: "₹1,00,000",
    },
    {
      photo: CategoryThree,
      title: "Earrings",
      price: "₹1,00,000",
    },
    {
      photo: CategoryFour,
      title: "Necklace",
      price: "₹1,00,000",
    },
    {
      photo: CategoryFive,
      title: "Rings",
      price: "₹1,00,000",
    },
  ];

  return (
    <>
      <ConsumerLayout>
        <div id="firstAd" className="relative">
          <Image
            src={AdOne}
            alt="logo"
            objectFit="contain"
            objectPosition="center"
            className="w-full"
          />
          <div
            id="contentOnAdImage"
            className="absolute top-1/4 md:left-20 px-8"
          >
            <div id="adContent" className="flex">
              <div className=" font-lobster text-lg md:text-4xl lg:text-7xl md:mr-4 mr-1 text-[#BB1140]">
                10% off on
              </div>
              <div>
                <div className=" font-lobster text-xl md:text-3xl lg:text-6xl text-[#BB1140]">
                  Wedding gifts
                </div>
                <div className=" font-lobster text-xl md:text-3xl lg:text-6xl md:mt-4 text-[#BB1140]">
                  Iconic best sellers
                </div>
              </div>
            </div>
            <div id="buyNow"></div>
          </div>
        </div>

        <div id="newArrivals" className="my-4">
          <div className="md:text-4xl text-2xl text-[#BB1140] text-center font-lobster">
            New arrivals
          </div>
          <div className="md:text-xl text-sm text-[#BB1140] text-center font-bold">
            Know more about our new products
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
              navigationOptions: {
                color: "#BB1140",
              },
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  ' bg-pink-500 w-3 h-3 rounded-full"></span>'
                );
              },
            }}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {/* <div className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6"></div>
            <div className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6"></div> */}
            <SwiperSlide>
              <Image
                src={NewArrivalsFive}
                alt="Small Photo 4"
                className="w-min h-40 md:w-full md:h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsFour}
                alt="Small Photo 4"
                className="w-min h-40 md:w-full md:h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsThree}
                alt="Small Photo 4"
                className="w-min h-40 md:w-full md:h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsTwo}
                alt="Small Photo 4"
                className="w-min h-40 md:w-full md:h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsOne}
                alt="Small Photo 4"
                className="w-min h-40 md:w-full md:h-auto object-scale-down"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          id="categories"
          className="relative h-60 flex items-center justify-around flex-wrap bg-gradient-to-r from-pink-100 to-pink-300"
        >
          <h1 className="font-lobster text-3xl md:text-4xl lg:text-6xl md:mr-4 text-[#BB1140]">
            Popular categories
          </h1>
          <Carousel className="w-full max-w-sm lg:max-w-lg">
            <CarouselContent className="-ml-1">
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 basis-1/3 md:basis-1/2 lg:basis-2/5"
                >
                  <div className="p-1 w-full">
                    <Card className="border-2 border-pink-700 rounded-none ">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <span className="text-2xl font-semibold">
                          <Image
                            src={category.photo}
                            width={180}
                            height={180}
                            alt="categoryPhoto"
                            objectFit="contain"
                            objectPosition="center"
                            className=""
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:flex hidden" />
            <CarouselNext className="lg:flex hidden" />
          </Carousel>
        </div>

        <div id="shopCollection" className="h-min flex flex-wrap bg-[#BB1140]">
          <div className="md:w-1/2 md:h-96">
            <Image
              src={ShopCollectionImage}
              alt="logo"
              objectFit="contain"
              objectPosition="center"
              className="w-full md:h-96"
            />
          </div>
          <div className="md:w-1/2 h-96 flex justify-center items-center p-10">
            <div
              id="contentShopCollection"
              className="border-4 border-white w-full h-full flex flex-col items-center justify-center space-y-5"
            >
              <div className="w-3/4 flex flex-col items-center">
                <div className="text-white font-lobster text-4xl md:text-6xl ">
                  Spring Jewellery
                </div>
                <div className="text-white font-poppins text-xl mt-3 flex justify-center font-bold italic">
                  Favourities
                </div>
              </div>
              <div className="w-3/4 flex flex-col items-center">
                <div>
                  <Button
                    variant="secondary"
                    className="text-[#BB1140] font-bold italic"
                  >
                    Shop collection
                  </Button>
                </div>
                <div className="text-white font-bold italic mt-2">
                  Discover this week&apos;s trending jewellery in India
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="ourServices" className="p-10 flex justify-center flex-wrap">
          <div className="flex space-x-3 mx-4 mb-4">
            <Image
              src={AeroplaneIcon}
              alt="logo"
              objectFit="contain"
              objectPosition="center"
              className="h-12 w-12"
            />
            <div>
              <div className="font-bold text-lg">Free shipping</div>
              <div className="text-sm">
                Free shipping on all orders above ₹1,00,000
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mx-4 mb-4">
            <Image
              src={ClockIcon}
              alt="logo"
              objectFit="contain"
              objectPosition="center"
              className="h-12 w-12"
            />
            <div>
              <div className="font-bold text-lg">Support 24*7</div>
              <div className="text-sm">
                Contact us 24 hours a day, 7 days a week
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mx-4 mb-4">
            <Image
              src={ReturnIcon}
              alt="logo"
              objectFit="contain"
              objectPosition="center"
              className="h-12 w-12"
            />
            <div>
              <div className="font-bold text-lg">30 days return</div>
              <div className="text-sm">
                Return it within 30 days for an exchange offer
              </div>
            </div>
          </div>
        </div>

        <div id="discountAndOffers" className="px-16 mb-14 relative">
          <div className="bg-gradient-to-t from-[#F22F65] to-[#DB8F8D] rounded-t-2xl py-4 px-7">
            <div className="font-lobster text-white text-4xl md:text-6xl my-2">
              Upto 5% off on all loose diamonds
            </div>
            <div className="text-white italic text-xl md:text-2xl">
              Iconic best sellers
            </div>
            <div className="my-3">
              <Button
                variant="secondary"
                className="text-[#BB1140] font-bold italic "
              >
                BUY NOW
              </Button>
            </div>
            <div className="absolute top-0 right-0 lg:block hidden">
              <Image
                src={DiamondBangles}
                alt="logo"
                objectFit="contain"
                objectPosition="center"
                className="h-80 w-96"
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#EFEFEF] via-[#F3D4E4] to-[#F4CBE0] rounded-b-2xl py-8 px-7 flex flex-col items-center">
            <div className="mb-4">
              <span class="font-bold text-3xl">UPTO</span>
              <span class="font-bold text-5xl"> 40% </span>
              <span class="font-bold text-3xl"> OFF</span>
            </div>
            <div className="font-bold text-gray-600 italic text-xl mb-2">
              On making charges
            </div>
            <div className="font-bold text-gray-600 italic text-lg">
              Embrace elegance, shed extra fees: Making charges off, adorn with
              savings.
            </div>
            <div className="absolute top-80 right-6 xl:block hidden">
              <Image
                src={DiamondPearls}
                alt="logo"
                objectFit="contain"
                objectPosition="center"
                className="h-28 w-56"
              />
            </div>
            <div className="absolute top-44 left-0 transform -rotate-12 2xl:block hidden">
              <Image
                src={DiamondBracelet}
                alt="logo"
                objectFit="contain"
                objectPosition="center"
                className="h-80 w-96"
              />
            </div>
          </div>
        </div>

        <div
          id="trendingProducts"
          className="mt-12 mb-12 md:mt-24 md:mb-16 flex flex-col justify-center items-center"
        >
          <h1 className="text-center text-[#BB1140] font-lobster text-4xl md:text-6xl mb-12">
            Our products
          </h1>
          <Carousel className="w-full max-w-sm md:max-w-4xl lg:max-w-5xl">
            <CarouselContent className="-ml-1">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 basis-2/3 md:basis-2/6 lg:basis-1/5"
                >
                  <div className="p-1 w-full">
                    <Card className="border border-[#BB1140] rounded-none ">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <span className="">
                          <Image
                            src={product.photo}
                            width={180}
                            height={180}
                            alt="categoryPhoto"
                            objectFit="contain"
                            objectPosition="center"
                            className=""
                          />
                          <h3 className="font-semibold px-2">
                            {product.title}
                          </h3>
                          <div className="px-2">{product.price}</div>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:flex hidden" />
            <CarouselNext className="lg:flex hidden" />
          </Carousel>
        </div>

        <div id="newsletter" className="my-4 px-6 md:px-16 py-8 w-full">
          <div className="flex flex-wrap">
            <div
              className="w-full md:w-7/12 rounded-t-2xl md:rounded-l-3xl md:rounded-tr-none"
              style={{
                backgroundImage: `url(${NewsletterBgPhoto.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="backdrop-blur-sm bg-pink-200/30 rounded-t-2xl md:rounded-l-3xl md:rounded-tr-none space-y-6 w-full h-full px-4 md:px-10 flex flex-col justify-center items-center ">
                <div className="flex flex-col p-4">
                  <div className="text-white font-lobster text-4xl md:text-6xl mb-3 flex justify-center">
                    Join our newsletter
                  </div>
                  <div className="text-white flex text-sm sm:text-sm md:text-base justify-center">
                    Be updated with all the latest trends and products
                  </div>
                </div>
                <div className="flex w-full flex-wrap space-y-2 justify-center max-w-sm items-center pb-3 space-x-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="text-white"
                  />
                  <Button type="submit" className="bg-[#BB1140] text-sm ">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <Image
              src={NewsletterPhoto}
              // width={}
              // height={}
              alt="newsLetterPhoto"
              objectFit="contain"
              objectPosition="center"
              className="md:w-5/12 md:rounded-r-3xl"
            />
          </div>
        </div>
      </ConsumerLayout>
    </>
  );
};

export default ConsumerHomepage;
