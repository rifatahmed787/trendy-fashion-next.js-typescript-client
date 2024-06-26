/* eslint-disable react/no-unescaped-entities */
import { useGetProductsQuery } from "@/Redux/features/products/productApi";
import { IProduct } from "@/Types/products";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ICONS from "../shared/Icons/AllIcons";
import Button from "../UI/Button";
import CartProduct from "../UI/CartProduct";
import CardSkeleton from "../Skeleton/CardSkeleton";
import Paragraph from "../UI/Paragraph/Paragraph";
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
const RelatedProduct = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  const { data: products, isLoading } = useGetProductsQuery({});
  const filterProducts = products?.data?.data?.filter(
    (pro: IProduct) => pro.productCategory === product_details?.productCategory
  );
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      {" "}
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
            slidesPerView: 4,
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
            {filterProducts?.length > 0 ? (
              <>
                {filterProducts?.slice(0, 20).map((product: IProduct) => (
                  <SwiperSlide className="hover:z-50" key={product.id}>
                    <CartProduct product={product} />
                  </SwiperSlide>
                ))}
                {filterProducts?.length > 21 && (
                  <SwiperSlide
                    className="hover:z-50 my-auto"
                    key="view-all-products"
                  >
                    <Button title="View All" icon={ICONS.small_right_arrow} />
                  </SwiperSlide>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center gap-2 min-h-[45vh]">
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
    </div>
  );
};

export default RelatedProduct;
