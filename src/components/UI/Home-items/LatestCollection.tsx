"use client";
import { Icon } from "@iconify/react";
import { Autoplay, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import ICONS from "@/components/shared/Icons/AllIcons";
import image from "../../../assets/HomePageBannerImg/homeslide.png";
import "./Latest.module.css";

const LatestCollection = () => {
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
  return (
    <div className="my-10 px-5 md:px-10">
      <div className="my-5 grid grid-cols-1 gap-0 md:grid-cols-8 md:gap-5 lg:gap-5 items-center">
        <div className="col-span-3 mb-5 mt-7">
          <Image
            width={undefined}
            height={undefined}
            src={image}
            alt=""
            className="w-11/12 md:w-full rounded-lg"
          />
        </div>

        <div className="col-span-5 ">
          <h1 className=" ml-5 text-2xl font-bold relative after:absolute after:content-normal after:bg-primary-100 after:left-0 after:bottom-0 after:w-44 after:h-0.5 mb-5 title">
            Latest Collections
          </h1>
          {/* <hr /> */}
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={10}
            speed={1500}
            // breakpoints={{
            //   340: {
            //     slidesPerView: 1,
            //     spaceBetween: 20,
            //   },
            //   640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   768: {
            //     slidesPerView: 3,
            //     spaceBetween: 40,
            //   },
            //   1024: {
            //     slidesPerView: 3,
            //     spaceBetween: 50,
            //   },
            // }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            loop={true}
            modules={[Navigation, Autoplay, Grid]}
            className="mySwiper mx-auto  w-[100%] flex justify-center items-center "
          >
            {/* part 1 */}
            <SwiperSlide className="hover:z-50 ">
              <section className="">
                <div className="group h-fit w-full">
                  <div className="relative overflow-hidden">
                    <Image
                      width={300}
                      height={64}
                      className="h-52 w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-80"
                      src="https://ninetheme.com/themes/goldsmith/wp-content/uploads/2021/12/37000208_OR_B-450x450.webp"
                      alt=""
                    />
                    <div className="absolute -bottom-10 flex w-full transition-all duration-300 group-hover:bottom-0 ">
                      <button className="relative inline-flex items-center justify-center w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out button-group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-5 bg-primary-200 first-span ease">
                          <Icon icon="mdi:cart-heart" width={20} />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform second-span ease bg-gray-800">
                          Add To Cart
                        </span>
                        <span className="relative invisible ">Add To Cart</span>
                      </button>
                    </div>
                    <div className="absolute right-2 top-0">
                      <Icon
                        icon="mdi:heart-outline"
                        className="cursor-pointer rounded-full p-1 hover:text-gray-500"
                        width={25}
                        height={64}
                      />
                      <Icon
                        icon="iconamoon:restart-fill"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-200 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                      <Icon
                        icon="basil:eye-outline"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                    </div>
                  </div>
                  <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
                  <del className="text-sm text-red-700">$49</del>
                  <p className="ml-1 mt-2 inline-block text-sm text-gray-700">
                    $35
                  </p>
                </div>
              </section>
            </SwiperSlide>
            {/* part 2 */}
            <SwiperSlide className="hover:z-50 ">
              <section className="">
                <div className="group h-fit w-full">
                  <div className="relative overflow-hidden">
                    <Image
                      width={300}
                      height={64}
                      className="h-52 w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-80"
                      src="https://ninetheme.com/themes/goldsmith/wp-content/uploads/2021/12/37000208_OR_B-450x450.webp"
                      alt=""
                    />
                    <div className="absolute -bottom-10 flex w-full transition-all duration-300 group-hover:bottom-0 ">
                      <button className="relative inline-flex items-center justify-center w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out button-group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-5 bg-primary-200 first-span ease">
                          <Icon icon="mdi:cart-heart" width={20} />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform second-span ease bg-gray-800">
                          Add To Cart
                        </span>
                        <span className="relative invisible ">Add To Cart</span>
                      </button>
                    </div>
                    <div className="absolute right-2 top-0">
                      <Icon
                        icon="mdi:heart-outline"
                        className="cursor-pointer rounded-full p-1 hover:text-gray-500"
                        width={25}
                        height={64}
                      />
                      <Icon
                        icon="iconamoon:restart-fill"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-200 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                      <Icon
                        icon="basil:eye-outline"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                    </div>
                  </div>
                  <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
                  <del className="text-sm text-red-700">$49</del>
                  <p className="ml-1 mt-2 inline-block text-sm text-gray-700">
                    $35
                  </p>
                </div>
              </section>
            </SwiperSlide>
            {/* <SwiperSlide className="hover:z-50 ">
              <section className="">
                <div className="group h-fit w-full">
                  <div className="relative overflow-hidden">
                    <Image
                      width={300}
                      height={64}
                      className="h-52 w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-80"
                      src="https://ninetheme.com/themes/goldsmith/wp-content/uploads/2021/12/37000208_OR_B-450x450.webp"
                      alt=""
                    />
                    <div className="absolute -bottom-10 flex w-full transition-all duration-300 group-hover:bottom-0 ">
                      <button className="relative inline-flex items-center justify-center w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out button-group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-5 bg-primary-200 first-span ease">
                          <Icon icon="mdi:cart-heart" width={20} />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform second-span ease bg-gray-800">
                          Add To Cart
                        </span>
                        <span className="relative invisible ">Add To Cart</span>
                      </button>
                    </div>
                    <div className="absolute right-2 top-0">
                      <Icon
                        icon="mdi:heart-outline"
                        className="cursor-pointer rounded-full p-1 hover:text-gray-500"
                        width={25}
                        height={64}
                      />
                      <Icon
                        icon="iconamoon:restart-fill"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-200 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                      <Icon
                        icon="basil:eye-outline"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                    </div>
                  </div>
                  <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
                  <del className="text-sm text-red-700">$49</del>
                  <p className="ml-1 mt-2 inline-block text-sm text-gray-700">
                    $35
                  </p>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide className="hover:z-50 ">
              <section className="">
                <div className="group h-fit w-full">
                  <div className="relative overflow-hidden">
                    <Image
                      width={300}
                      height={64}
                      className="h-52 w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-80"
                      src="https://ninetheme.com/themes/goldsmith/wp-content/uploads/2021/12/37000208_OR_B-450x450.webp"
                      alt=""
                    />
                    <div className="absolute -bottom-10 flex w-full transition-all duration-300 group-hover:bottom-0 ">
                      <button className="relative inline-flex items-center justify-center w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out button-group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-5 bg-primary-200 first-span ease">
                          <Icon icon="mdi:cart-heart" width={20} />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform second-span ease bg-gray-800">
                          Add To Cart
                        </span>
                        <span className="relative invisible ">Add To Cart</span>
                      </button>
                    </div>
                    <div className="absolute right-2 top-0">
                      <Icon
                        icon="mdi:heart-outline"
                        className="cursor-pointer rounded-full p-1 hover:text-gray-500"
                        width={25}
                        height={64}
                      />
                      <Icon
                        icon="iconamoon:restart-fill"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-200 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                      <Icon
                        icon="basil:eye-outline"
                        className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 hover:text-gray-500 group-hover:translate-x-0"
                        width={25}
                      />
                    </div>
                  </div>
                  <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
                  <del className="text-sm text-red-700">$49</del>
                  <p className="ml-1 mt-2 inline-block text-sm text-gray-700">
                    $35
                  </p>
                </div>
              </section>
            </SwiperSlide> */}

            {/* swiper button */}
            <div className="flex items-center justify-end gap-5 pr-5 mt-3">
              <SwiperButtonPrev />
              <SwiperButtonNext />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
