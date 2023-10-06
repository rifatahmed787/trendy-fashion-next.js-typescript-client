"use client";

import { Icon } from "@iconify/react";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImage1 from "../../../../assets/HomePageBannerImg/BannerImage1.jpg";
import bannerImage2 from "../../../../assets/HomePageBannerImg/BannerImage2.jpg";
import bannerImage3 from "../../../../assets/HomePageBannerImg/bannerImage3.png";
import bannerImage4 from "../../../../assets/HomePageBannerImg/bannerImage4.png";

import Paragraph from "../Paragraph/Paragraph";
import Image from "next/image";
import Link from "next/link";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};

const HomePageBanner = () => {
  const swiperRef = useRef<SwiperRef>(null); // Use a single useRef for Swiper instance

  // Function to slide to the previous slide
  const goPrevButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to slide to the next slide
  const goNextButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-5">
        <div className="group col-span-2">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper mx-auto w-[100%]"
          >
            <SwiperSlide className="bg-[#EEEEEE] ">
              <div className="relative text-white">
                <Image
                  src={bannerImage2}
                  alt=""
                  className="h-[100vh] w-full"
                  width={undefined}
                />
                <div className="absolute left-0 top-[30%] ml-14 w-[65%]">
                  <h3 className="font-bold md:text-[35px] lg:text-[50px]">
                    Meet The Line of <br />
                    The Millenninum
                  </h3>
                  <Paragraph className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Labore fugiat aliquam voluptatibus qui deleniti modi
                  </Paragraph>
                  <div className="flex gap-5">
                    <button>click collection</button>
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranp bg-[#EEEEEE]">
              <div className="relative text-white">
                <Image
                  src={bannerImage1}
                  alt=""
                  className="h-[100vh] w-full"
                  width={undefined}
                />
                <div className="absolute left-0 top-[30%] ml-14 w-[65%]">
                  <h3 className=" font-bold md:text-[35px] lg:text-[50px]">
                    New Moder <br />
                    Collection
                  </h3>
                  <Paragraph className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Labore fugiat aliquam voluptatibus qui deleniti modi
                  </Paragraph>
                  <button>shop now</button>
                </div>
              </div>
            </SwiperSlide>

            <div className="mt-5 flex items-center justify-center gap-3 text-center">
              <button
                className="prev-button absolute left-0 top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goPrevButton}
              >
                <Icon icon="ep:arrow-left-bold" />
              </button>
              <button
                className="next-button absolute right-0 top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goNextButton}
              >
                <Icon icon="ep:arrow-right-bold" />
              </button>
            </div>
          </Swiper>
        </div>

        <div className="relative">
          <Image
            src={bannerImage3}
            alt=""
            className="hidden w-full md:block md:h-[100vh] lg:block lg:h-[100vh]"
            width={undefined}
          />
          <Image
            src={bannerImage4}
            alt=""
            className="h-[50vh] w-full sm:block md:hidden lg:hidden"
            width={undefined}
          />
          <div className="absolute  bottom-0 flex h-full w-full items-end justify-center  pb-14 opacity-100 transition-all">
            <div className="flex items-center justify-center text-center text-white">
              <div className="mx-auto">
                <h3 className="text-[12px] font-bold uppercase">Gold Pierc</h3>
                <h1 className="font-smeibold my-2 text-[26px] uppercase">
                  Flash Sale
                </h1>
                <h4>15 NOV - 25 NOV</h4>
                <Link href="/" className="mt-3 underline">
                  See More Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
