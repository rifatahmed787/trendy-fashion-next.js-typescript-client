"use client";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import tastmonialImage1 from "../../../assets/GoldSmithTestimonials/goldImage1.webp";
import tastmonialImage2 from "../../../assets/GoldSmithTestimonials/goldImage2.webp";
import tastmonialImage3 from "../../../assets/GoldSmithTestimonials/goldImage3.webp";
import tastmonialImage4 from "../../../assets/GoldSmithTestimonials/goldImage4.webp";
import tastmonialImage5 from "../../../assets/GoldSmithTestimonials/goldImage5.webp";
import tastmonialImage6 from "../../../assets/GoldSmithTestimonials/goldImage6.webp";
import tastmonialImage7 from "../../../assets/GoldSmithTestimonials/goldImage7.webp";
import tastmonialImage8 from "../../../assets/GoldSmithTestimonials/goldImage8.webp";
import Image from "next/image";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};

const HomeGoldTastmonial = () => {
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
    <div className="group">
      <div>
        <h1 className="mt-14 text-center text-3xl font-semibold">#GoldSmith</h1>
        <p className="mt-8 text-center text-[14px] text-[#727272]">
          Tag <span className="font-semibold text-[#1f1f1f]">@ninetheme</span>{" "}
          in your Instagram posts for a chance to be featured here.
        </p>
        <p className="mt-5 text-center text-[14px] text-[#727272]">
          Find more inspiration on our{" "}
          <span className="font-semibold text-[#1f1f1f]">
            Instagram account.
          </span>
        </p>
      </div>{" "}
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mx-auto mt-16 w-[100%]"
      >
        {/* part 1 */}
        <SwiperSlide className="hover:z-50 ">
          <div className="relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage1}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        {/* part 2 */}
        <SwiperSlide className="hover:z-50  ">
          <div className="group relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage2}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        {/* part 3 */}
        <SwiperSlide className="hover:z-50  ">
          <div className="group relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage3}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        {/* part 4 */}
        <SwiperSlide className=" hover:z-50 ">
          <div className="group relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage4}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        {/* part 5 */}
        <SwiperSlide className=" hover:z-50 ">
          <div className="group relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage5}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        {/* part 6 */}
        <SwiperSlide className="hover:z-50  ">
          <div className="group relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage6}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        {/* part 7 */}
        <SwiperSlide className=" hover:z-50 ">
          <div className="group relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage7}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        {/* part 8 */}
        <SwiperSlide className="hover:z-50  ">
          <div className="group relative h-40 w-40 overflow-hidden">
            <Image
              width={undefined}
              src={tastmonialImage8}
              alt=""
              className="h-40 w-40 rounded-full duration-300 group-hover:scale-110"
            />
            <Icon
              icon="skill-icons:instagram"
              width={30}
              className="absolute left-0 top-0 hidden duration-300 group-hover:block"
            />
            <p className="absolute bottom-[-30px] left-0 right-0 m-auto flex items-center justify-center text-white duration-300 group-hover:bottom-0 group-hover:left-[0%] group-hover:right-[0%] group-hover:top-[0%]">
              #goldsimth
            </p>
          </div>
        </SwiperSlide>
        <div className="mt-5 flex items-center justify-center gap-3 text-center">
          <button
            className="prev-button absolute left-0 top-[30%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb]  group-hover:text-black"
            onClick={goPrevButton}
          >
            <Icon icon="ep:arrow-left-bold" />
          </button>
          <button
            className="next-button absolute right-0 top-[30%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb]  group-hover:text-black"
            onClick={goNextButton}
          >
            <Icon icon="ep:arrow-right-bold" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeGoldTastmonial;
