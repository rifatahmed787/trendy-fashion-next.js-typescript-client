/* eslint-disable react/no-unescaped-entities */
"use client";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import ICONS from "@/components/shared/Icons/AllIcons";
import image from "../../../assets/HomePageBannerImg/homeslide.png";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { IProduct } from "@/Types/products";
import CartProduct from "../CartProduct";
import { useGetLatestProductsQuery } from "@/Redux/features/products/productApi";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import WhiteButton from "@/components/Button/SecondaryButton";

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

const LatestCollection = () => {
  const router = useRouter();
  const {
    data: latestProducts,

    isLoading,
  } = useGetLatestProductsQuery({});

  const latest_products = latestProducts?.data;

  const handleReload = () => {
    window.location.reload();
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
            className="w-11/12 md:w-full rounded-lg mx-auto"
          />
        </div>

        <div className="col-span-5 ">
          <div className="flex flex-col md:flex-row justify-between gap-5 items-center mb-5">
            <h1 className=" ml-5 text-2xl font-bold relative after:absolute after:content-normal after:bg-primary-100 after:left-0 after:bottom-0 after:w-44 after:h-0.5 mb-5 title">
              Latest Collections
            </h1>
            <Button
              title="All Products"
              className="px-2 md:px-4 py-1 md:py-2 bg-primary-100 text-gray-800 rounded-lg"
              onClickHandler={() => router.push("/products")}
            />
          </div>
          {/* <hr /> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
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
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mx-auto"
          >
            {isLoading ? (
              <div className="flex items-center gap-10">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            ) : (
              <>
                {latest_products?.length > 0 ? (
                  <>
                    {" "}
                    {latest_products?.map((product: IProduct) => {
                      return (
                        <SwiperSlide className="hover:z-50 " key={product.id}>
                          <CartProduct product={product} />
                        </SwiperSlide>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="flex justify-center items-center gap-2 min-h-[45vh]">
                      <h1>Can't Load the data! Please</h1>{" "}
                      <button
                        onClick={handleReload}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm flex items-center px-2 py-1 gap-1"
                      >
                        reload
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {/* swiper button */}
            <div className="flex items-center justify-end gap-5 pr-5 mt-3">
              <SwiperButtonPrev />
              <SwiperButtonNext />
            </div>
          </Swiper>
          <div className="latest-product-super px-5 mt-5 py-3">
            <h5 className="py-3 title font-bold text-lg md:text-xl">
              Top Quality of Product Store !
            </h5>
            <h1 className="text-xl md:text-3xl font-bold title pb-3 text-white">
              Find your Exciting Products at Our Trendy Shop.
            </h1>
            <div className="pb-3">
              <WhiteButton text="Buy Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
