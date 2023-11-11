"use client";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import image1 from "../.../../../../assets/HomePageBannerImg/sectionthree.jpg";
import image2 from "../.../../../../assets/HomePageBannerImg/section3.jpg";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};
const HomeDealsComponent = () => {
  const swiperRef = useRef<SwiperRef>(null);

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
    <div className="my-10 px-5 md:px-10">
      <div className="my-5 grid grid-cols-1 gap-0 md:grid-cols-7 md:gap-5 lg:gap-5">
        <div className="col-span-2 mb-5 mt-7">
          <div className="my-2 flex items-center justify-center rounded-xl border-2 border-dotted border-primary-200 bg-[#FEF8E5] px-6 py-4">
            <div className="">
              <h2 className="mt-5 text-center text-[16px] font-bold text-gray-900">
                2nd shopping surprise
              </h2>
              <h2 className="mb-5 text-center text-[16px] font-bold text-gray-900">
                campaign!
              </h2>
              <p className="mb-7 flex cursor-pointer items-center rounded-full bg-primary-200 px-4 py-2 text-sm text-white">
                <span className="font-semibold">CheckProducts</span>{" "}
                <Icon width={20} icon="ic:baseline-arrow-right" />
              </p>
            </div>
          </div>
          <div className="relative my-7">
            <Image
              width={300}
              height={64}
              src={image1}
              alt=""
              className="h-64 w-full rounded-lg md:h-56"
            />
            <span className="absolute inset-0 top-0 left-0 bg-black opacity-40 rounded-lg"></span>
            <div className="absolute  bottom-0 flex h-full w-full items-end justify-center  pb-14 opacity-100 transition-all">
              <div className="flex items-center justify-center text-center text-primary-100">
                <div className="mx-auto">
                  <h3 className="text-[12px] font-bold uppercase">EARRINGS</h3>
                  <h1 className="my-2 text-[16px] font-bold uppercase">
                    Create your combo now!
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-7">
            <Image
              width={300}
              height={64}
              src={image2}
              alt=""
              className="h-64 w-full rounded-lg md:h-56"
            />
            <span className="absolute inset-0 top-0 left-0 bg-black opacity-40 rounded-lg"></span>
            <div className="absolute  bottom-0 flex h-full w-full items-end justify-center  pb-14 opacity-100 transition-all">
              <div className="flex items-center justify-center text-center text-primary-100">
                <div className="mx-auto">
                  <h3 className="text-[12px] font-bold uppercase">Buy Now</h3>
                  <h1 className="my-2 text-[16px] font-bold uppercase ">
                    Free Shipping On Over $50
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <h1 className=" ml-5 text-lg font-bold relative after:absolute after:content-normal after:bg-primary-100 after:left-0 after:bottom-0 after:w-full after:h-0.5">
            Deals of the Week
          </h1>
          {/* <hr /> */}
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            speed={1500}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
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
            className="mySwiper mx-auto mt-5 w-[100%]"
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

            {/* swiper button */}
            <div className="mt-5 flex items-center justify-center gap-3 text-center">
              <button
                className="prev-button absolute left-0 top-[30%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 duration-300 hover:bg-[#ffffffcb] text-black"
                onClick={goPrevButton}
              >
                <Icon icon="ep:arrow-left-bold" />
              </button>
              <button
                className="next-button absolute right-0 top-[30%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 duration-300 hover:bg-[#ffffffcb] text-black"
                onClick={goNextButton}
              >
                <Icon icon="ep:arrow-right-bold" />
              </button>
            </div>
          </Swiper>

          {/* section down kids fashion picture */}
          <div
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dztlowlu0/image/upload/e_improve:outdoor/be5sspn2qkqwraisfvkd.jpg")',
            }}
            className="relative h-96 rounded-lg bg-cover bg-center"
          >
            <span className="absolute inset-0 rounded-lg bg-black opacity-20"></span>
            <div className="gird absolute grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex w-[100%] items-center justify-center text-[#e7e7e7] md:w-[50%] lg:w-[50%]">
                <div className="mx-4">
                  <h3 className="ml-10 mt-20 w-32 rounded-full bg-primary-100 p-1 text-center text-3 text-black font-bold md:mt-12 lg:mt-20">
                    Kids Fashion
                  </h3>
                  <h1 className="ml-10 text-[45px] font-bold uppercase">
                    Let Our Future Be Stylish
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDealsComponent;
