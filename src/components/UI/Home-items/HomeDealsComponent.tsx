/* eslint-disable react/no-unescaped-entities */
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
import { useGetBestSellerProductsQuery } from "@/Redux/features/products/productApi";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import CartProduct from "../CartProduct";
import { IProduct } from "@/Types/products";
import ICONS from "@/components/shared/Icons/AllIcons";

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

  const { data: bestProducts, isLoading } = useGetBestSellerProductsQuery({});

  const best_seller_products = bestProducts?.data;

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

  const handleReload = () => {
    window.location.reload();
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
          <div className="relative mt-7 mb-6">
            <Image
              width={300}
              height={64}
              src={image1}
              alt=""
              className="h-64 w-full rounded-lg"
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
              className="h-64 w-full rounded-lg"
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
          <h1 className=" ml-5 text-2xl font-bold relative after:absolute after:content-normal after:bg-primary-100 after:left-0 after:bottom-0 after:w-full after:h-0.5 title">
            Deals of the Week
          </h1>
          {/* <hr /> */}
          <Swiper
            slidesPerView={3}
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
                slidesPerView: 3,
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
            {isLoading ? (
              <div className="flex items-center gap-10">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            ) : (
              <>
                {best_seller_products?.length > 0 ? (
                  <>
                    {" "}
                    {best_seller_products?.map((product: IProduct) => {
                      return (
                        <SwiperSlide className="hover:z-50 " key={product.id}>
                          <CartProduct product={product} />
                        </SwiperSlide>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="flex justify-center items-center gap-2 min-h-[46vh]">
                      <h1>Can't Load the data! Please</h1>{" "}
                      <button
                        onClick={handleReload}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm flex items-center px-2 py-1 gap-1"
                      >
                        {ICONS.refresh}
                        reload
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {/* swiper button */}
            <div className="mt-5 flex items-center justify-center gap-3 text-center">
              <button
                className="prev-button absolute left-0 top-[30%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 duration-300 hover:bg-primary-100 text-black"
                onClick={goPrevButton}
              >
                <Icon icon="ep:arrow-left-bold" />
              </button>
              <button
                className="next-button absolute right-0 top-[30%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 duration-300 hover:bg-primary-100 text-black"
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
            className="relative h-[412px] rounded-lg bg-cover bg-center"
          >
            <span className="absolute inset-0 rounded-lg bg-black opacity-20"></span>
            <div className="gird absolute grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex w-[100%] items-center justify-center text-[#e7e7e7] md:w-[50%] lg:w-[50%]">
                <div className="mx-4">
                  <h3 className="ml-10 mt-20 w-32 rounded-full bg-primary-100 p-1 text-center text-3 text-black font-bold md:mt-12 lg:mt-20">
                    Kids Fashion
                  </h3>
                  <h1 className="ml-10 text-[45px] font-bold uppercase title">
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
