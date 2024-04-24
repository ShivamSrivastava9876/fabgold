"use client"

import Layout from "@/components/layout";
import DashboardButtons from "@/components/dashboardButtons";
import DashboardData from "@/components/dashboardData";
import SetPriceOfMetalForm from "@/components/setPriceOfMetalForm"
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
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import required modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Dashboard = () => {

  const router = useRouter();

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
          <div id="contentOnAdImage" className="absolute top-1/4 md:left-20 px-8">
            <div id="adContent" className="flex">
              <div className=" font-lobster md:text-4xl lg:text-7xl md:mr-4 mr-1 text-[#BB1140]">20% off on</div>
              <div>
                <div className=" font-lobster md:text-3xl lg:text-6xl text-[#BB1140]">
                  Wedding gifts
                </div>
                <div className=" font-lobster md:text-3xl lg:text-6xl md:mt-4 text-[#BB1140]">
                  Iconic best sellers
                </div>
              </div>
            </div>
            <div id="buyNow"></div>
          </div>
        </div>

        <div id="newArrivals" className="my-4">
          <div className="md:text-4xl text-2xl text-[#BB1140] text-center font-lobster">New arrivals</div>
          <div className="md:text-xl text-sm text-[#BB1140] text-center font-bold">Know more about our new products</div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
              navigationOptions: {
                color: '#BB1140',
              },
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + ' bg-pink-500 w-3 h-3 rounded-full"></span>';
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
                className="w-full h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsFour}
                alt="Small Photo 4"
                className="w-full h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsThree}
                alt="Small Photo 4"
                className="w-full h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsTwo}
                alt="Small Photo 4"
                className="w-full h-auto object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={NewArrivalsOne}
                alt="Small Photo 4"
                className="w-full h-auto object-scale-down"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div id="categories">
          
        </div>

      </ConsumerLayout>
    </>
  );
};

export default Dashboard;

