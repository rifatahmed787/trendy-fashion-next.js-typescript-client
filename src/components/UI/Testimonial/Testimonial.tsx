/* eslint-disable react/no-unescaped-entities */
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ICONS from "@/components/shared/Icons/AllIcons";

import Image from "next/image";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button className="text-lg " onClick={() => swiper.slideNext()}>
      {ICONS.arrow_long_right}
    </button>
  );
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button className="text-2xl " onClick={() => swiper.slidePrev()}>
      {ICONS.arrow_long_left}
    </button>
  );
};

export default function TestimonialCarousel() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      modules={[Navigation]}
      className="w-full h-full flex flex-col"
    >
      <SwiperSlide>
        <div className="container px-5 md:px-10 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                {ICONS.koma_icon}
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    width={30}
                    height={30}
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    {/* <p className="text-primary font-inter border-none text-sm text-right font-bold flex items-center gap-2 ">
                      {Array.from({ length: book.rating }, (_, index) => (
                        <span key={index}>{ICONS.star_icon}</span>
                      ))}
                      {book.rating}
                    </p> */}
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container px-5 md:px-10 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                {ICONS.koma_icon}
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    width={30}
                    height={30}
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container px-5 md:px-10 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                {ICONS.koma_icon}
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    width={30}
                    height={30}
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container px-5 md:px-10 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                {ICONS.koma_icon}
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    width={30}
                    height={30}
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div className="flex items-center justify-end gap-5 mb-5 pr-5 md:pr-10">
        <SwiperButtonPrev />
        <SwiperButtonNext />
      </div>
    </Swiper>
  );
}
