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
    <>
      <div className="pt-16 pb-5">
        <h1 className="text-xl md:text-4xl text-center font-semibold relative  before:content-normal before:absolute before:w-1/2 md:before:w-1/5 before:-bottom-2 before:bg-primary-100 before:h-1 title">
          What Our Client Say
        </h1>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={true}
        speed={1000}
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
          <div className="container px-5 md:px-10 py-10 mx-auto ">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 w-full">
                <div className="h-full bg-gray-100 p-8 relative before:absolute before:content-normal before:bg-primary-100 before:w-10 before:h-10 before:left-0 before:top-0 before:rounded-br-full rounded border-r-4 border-primary-100 after:absolute after:content-normal after:bg-primary-100 after:w-10 after:h-10 after:left-0 after:bottom-0 after:rounded-tr-full">
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
                      <span className="text-gray-500 text-sm">
                        UI DEVELOPER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="flex items-center justify-center gap-5 mb-5 pr-5 md:pr-10">
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </Swiper>
    </>
  );
}
