/* eslint-disable react/no-unescaped-entities */
"use client";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import ICONS from "@/components/shared/Icons/AllIcons";
import { useRouter } from "next/navigation";
import { ILatestHero, IProduct } from "@/Types/products";
import CartProduct from "../CartProduct";
import { useGetLatestProductsQuery } from "@/Redux/features/products/productApi";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import WhiteButton from "@/components/Button/SecondaryButton";
import SubTitle from "../SubTitle/SubTitle";
import Paragraph from "../Paragraph/Paragraph";
import Heading from "../Heading/Heading";
import { Button } from "../Button";

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

interface latestCollectionProps {
  latestHero: ILatestHero[];
}

const LatestCollection = ({ latestHero }: latestCollectionProps) => {
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
    <section className="my-16 px-5 md:px-10">
      <div className="my-5 grid grid-cols-1 gap-0 h-auto lg:grid-cols-8 lg:gap-5 items-stretch max-w-screen-2xl mx-auto">
        <div className="col-span-2  flex px-0  ">
          <Image
            width={100}
            height={100}
            src={latestHero[0].imgOne}
            alt={latestHero[0].title}
            className="w-11/12 lg:w-full object-cover rounded-lg mx-auto"
          />
        </div>

        <div className="col-span-6 px-0 mt-10 lg:mt-0">
          <div className="flex flex-col md:flex-row justify-between gap-5 items-center mb-5">
            <Heading Heading="Latest Collections" />
            <Button
              title="All Products"
              className="px-4 py-2 bg-primary-100 text-white rounded-lg uppercase"
              onClick={() => router.push("/products")}
            >All Products</Button>
          </div>
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
            // loop={true}
            modules={[Navigation, Autoplay]}
            className="mx-auto my-10"
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
                    {latest_products?.slice(0, 20).map((product: IProduct) => (
                      <SwiperSlide className="hover:z-50" key={product.id}>
                        <CartProduct product={product} />
                      </SwiperSlide>
                    ))}
                    {latest_products?.length > 21 && (
                      <SwiperSlide
                        className="hover:z-50 my-auto"
                        key="view-all-products"
                      >
                        <Button
                          title="View All"
                          icon={ICONS.small_right_arrow}
                          variant="secondary"
                        >View All</Button>
                      </SwiperSlide>
                    )}
                  </>
                ) : (
                  <div className="flex justify-center items-center gap-2 min-h-[50vh]">
                    <Paragraph>Can't Load the data! Please</Paragraph>
                    <button
                      onClick={handleReload}
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm flex items-center px-2 py-1 gap-1"
                    >
                      {ICONS.refresh}
                      reload
                    </button>
                  </div>
                )}
              </>
            )}
            <div className="flex items-center justify-end gap-5 pr-5 mt-3">
              <SwiperButtonPrev />
              <SwiperButtonNext />
            </div>
          </Swiper>
          <div className="relative">
            <Image
              width={100}
              height={100}
              src={latestHero[0].imgTwo}
              alt={latestHero[0].title}
              className="w-full h-[200px] lg:h-full rounded-md mx-auto "
            />
            <div className="px-5 absolute left-5 top-8 z-20">
              <Paragraph className="text-base md:text-lg lg:text-xl font-bold py-3">
                {latestHero[0].subTitle}
              </Paragraph>
              <SubTitle SubTitle={latestHero[0].title} className="text-white" />
              <div className="py-5">
                <WhiteButton text="Buy Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
