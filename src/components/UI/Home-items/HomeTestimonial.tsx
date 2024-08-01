/* eslint-disable react/no-unescaped-entities */
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TiStarFullOutline } from "react-icons/ti";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ICONS from "@/components/shared/Icons/AllIcons";

import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";
import SubTitle from "../SubTitle/SubTitle";
import Heading from "../Heading/Heading";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button
      className="text-lg text-primary-100"
      onClick={() => swiper.slideNext()}
    >
      {ICONS.arrow_long_right}
    </button>
  );
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button
      className="text-2xl text-primary-100"
      onClick={() => swiper.slidePrev()}
    >
      {ICONS.arrow_long_left}
    </button>
  );
};

export default function TestimonialCarousel() {
  return (
    <section className="px-5 md:px-10 group pt-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center my-5">
          <Heading Heading="Client Reviews" />
        </div>
        <Swiper
          slidesPerView={"auto"}
          pagination={true}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          modules={[Navigation]}
          className="mt-16"
        >
          <SwiperSlide>
            <div className="h-full pl-10 pr-5 py-5 bg-gray-100 relative before:absolute before:content-normal before:bg-primary-100 before:w-12 before:h-12 before:left-0 before:top-0 before:rounded-br-full rounded border-r-4 border-primary-100 after:absolute after:content-normal after:bg-primary-100 after:w-12 after:h-12 after:left-0 after:bottom-0 after:rounded-tr-full">
              <p className="pt-5">{ICONS.koma_icon}</p>
              <Paragraph className="leading-relaxed mb-5 text-black">
                Trendy Fashion is very trustable to buy the product. There are
                various types of product in this website. The product they serve
                is genuine and comport.
              </Paragraph>
              <a className="inline-flex items-center">
                <Image
                  width={30}
                  height={30}
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <SubTitle
                    SubTitle="Md Tamim"
                    className="font-semibold text-base md:text-lg lg:text-xl text-gray-900"
                  />

                  <Paragraph className="text-gray-500 flex items-center gap-3 text-sm">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Paragraph>
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full pl-10 pr-5 py-5 bg-gray-100 relative before:absolute before:content-normal before:bg-primary-100 before:w-12 before:h-12 before:left-0 before:top-0 before:rounded-br-full rounded border-r-4 border-primary-100 after:absolute after:content-normal after:bg-primary-100 after:w-12 after:h-12 after:left-0 after:bottom-0 after:rounded-tr-full">
              <p className="pt-5">{ICONS.koma_icon}</p>
              <Paragraph className="leading-relaxed mb-5 text-black">
                Trendy Fashion is very trustable to buy the product. There are
                various types of product in this website. The product they serve
                is genuine and comport.
              </Paragraph>
              <a className="inline-flex items-center">
                <Image
                  width={30}
                  height={30}
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <SubTitle
                    SubTitle="Md Tamim"
                    className="font-semibold text-base md:text-lg lg:text-xl text-gray-900"
                  />

                  <Paragraph className="text-gray-500 flex items-center gap-3 text-sm">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Paragraph>
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full pl-10 pr-5 py-5 bg-gray-100 relative before:absolute before:content-normal before:bg-primary-100 before:w-12 before:h-12 before:left-0 before:top-0 before:rounded-br-full rounded border-r-4 border-primary-100 after:absolute after:content-normal after:bg-primary-100 after:w-12 after:h-12 after:left-0 after:bottom-0 after:rounded-tr-full">
              <p className="pt-5">{ICONS.koma_icon}</p>
              <Paragraph className="leading-relaxed mb-5 text-black">
                Trendy Fashion is very trustable to buy the product. There are
                various types of product in this website. The product they serve
                is genuine and comport.
              </Paragraph>
              <a className="inline-flex items-center">
                <Image
                  width={30}
                  height={30}
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <SubTitle
                    SubTitle="Md Tamim"
                    className="font-semibold text-base md:text-lg lg:text-xl text-gray-900"
                  />

                  <Paragraph className="text-gray-500 flex items-center gap-3 text-sm">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Paragraph>
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full pl-10 pr-5 py-5 bg-gray-100 relative before:absolute before:content-normal before:bg-primary-100 before:w-12 before:h-12 before:left-0 before:top-0 before:rounded-br-full rounded border-r-4 border-primary-100 after:absolute after:content-normal after:bg-primary-100 after:w-12 after:h-12 after:left-0 after:bottom-0 after:rounded-tr-full">
              <p className="pt-5">{ICONS.koma_icon}</p>
              <Paragraph className="leading-relaxed mb-5 text-black">
                Trendy Fashion is very trustable to buy the product. There are
                various types of product in this website. The product they serve
                is genuine and comport.
              </Paragraph>
              <a className="inline-flex items-center">
                <Image
                  width={30}
                  height={30}
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <SubTitle
                    SubTitle="Md Tamim"
                    className="font-semibold text-base md:text-lg lg:text-xl text-gray-900"
                  />

                  <Paragraph className="text-gray-500 flex items-center gap-3 text-sm">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Paragraph>
                </span>
              </a>
            </div>
          </SwiperSlide>

          <div className="flex items-center justify-center gap-5 mb-5 mt-10 pr-5 md:pr-10">
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
