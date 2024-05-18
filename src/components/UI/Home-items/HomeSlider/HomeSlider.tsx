"use client";

import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.module.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import bannerImage1 from "../../../../assets/HomePageBannerImg/slider1.jpg";
import bannerImage2 from "../../../../assets/HomePageBannerImg/slider2.jpg";
import bannerImage3 from "../../../../assets/HomePageBannerImg/slider3.jpg";
import bannerImage4 from "../../../../assets/HomePageBannerImg/slider4.jpg";
import bannerImage5 from "../../../../assets/HomePageBannerImg/slider5.jpg";
import rightImage from "../../../../assets/HomePageBannerImg/righslider.jpg";
import rightImage1 from "../../../../assets/HomePageBannerImg/rightslider1.jpg";

import Paragraph from "../../Paragraph/Paragraph";
import Image from "next/image";
import Link from "next/link";
import BrandButton from "@/components/Button/PrimaryButton";
import WhiteButton from "@/components/Button/SecondaryButton";
import RightToLeft from "../../Framer-motion/RightToLeft";
import ZoomIn from "../../Framer-motion/ZoomIn";
import BottomToTop from "../../Framer-motion/BottomToTop";
import FadeIn from "../../Framer-motion/FadeIn";
import Title from "../../Title/Title";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};

const images = [
  {
    id: 1,
    img: bannerImage1,
    title: "Discover Trendy Fashion at Unbeatable Prices Today",
  },
  {
    id: 2,
    img: bannerImage2,
    title: "Exclusive Deals on Latest Tech Gadgets Now",
  },
  {
    id: 3,
    img: bannerImage3,
    title: "Upgrade Your Home with Stylish Furniture Collections",
  },
  {
    id: 4,
    img: bannerImage4,
    title: "Shop Premium Beauty Products for Glowing Skin",
  },
  {
    id: 5,
    img: bannerImage5,
    title: "Find Unique Gifts for Every Occasion Here",
  },
];

const HomePageBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  const goPrevButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNextButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <FadeIn>
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 md:gap-5 max-w-screen-2xl mx-auto">
          <div className="group col-span-2">
            <Swiper
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              autoplay={{
                delay: 33000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper mx-auto w-[100%]"
              speed={1500}
            >
              {images?.map((image, index) => (
                <SwiperSlide className="bg-[#EEEEEE] " key={image?.id}>
                  <div className="relative text-white">
                    <>
                      <Image
                        src={image?.img}
                        alt=""
                        className="h-[50vh] md:h-[60vh] lg:h-[100vh] w-full"
                        width={undefined}
                      />
                    </>

                    <span className="absolute top-0 bg-black left-0 opacity-60 inset-0"></span>
                    <div className="absolute left-5 top-[20%] md:top-[30%] ml-14 w-[65%]">
                      {activeIndex === index && (
                        <>
                          <RightToLeft>
                            <Title title={image?.title} />
                          </RightToLeft>

                          <ZoomIn>
                            <Paragraph className="my-5">
                              Fashion is very important. It is life-enhancing
                              and, <br /> like everything that gives pleasure,
                              it is worth doing well.
                            </Paragraph>
                          </ZoomIn>

                          <BottomToTop>
                            <div className="flex gap-3 md:gap-5 pt-3">
                              <BrandButton text="Click Collection" icon="" />
                              <WhiteButton text="Buy Now" />
                            </div>
                          </BottomToTop>
                        </>
                      )}
                      {activeIndex !== index && (
                        <div>
                          <div>
                            <Title title={image.title} />
                          </div>
                          <Paragraph className="my-5">
                            Fashion is very important. It is life-enhancing and,{" "}
                            <br /> like everything that gives pleasure, it is
                            worth doing well.
                          </Paragraph>
                          <div className="flex gap-3 md:gap-5 pt-3">
                            <BrandButton text="Click Collection" icon="" />
                            <WhiteButton text="Buy Now" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider button */}
              <div className="mt-5 flex items-center justify-center gap-3 text-center">
                <button
                  className="prev-button absolute left-0 top-[40%] md:top-[45%]  z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                  onClick={goPrevButton}
                >
                  <Icon icon="ep:arrow-left-bold" />
                </button>
                <button
                  className="next-button absolute right-3 md:right-0 top-[40%] md:top-[45%]  z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                  onClick={goNextButton}
                >
                  <Icon icon="ep:arrow-right-bold" />
                </button>
              </div>
            </Swiper>
          </div>

          <div className="relative">
            <Image
              src={rightImage}
              alt=""
              className="w-full hidden lg:block lg:h-[100vh]"
              width={undefined}
            />
            <Image
              src={rightImage1}
              alt=""
              className="h-[50vh] md:h-[70vh] w-full block lg:hidden"
              width={undefined}
            />
            <span className="absolute top-0 bg-black left-0 opacity-50 inset-0 h-[50vh] md:h-[70vh] lg:h-[100vh]"></span>
            <div className="absolute  bottom-0 flex h-full w-full items-end justify-center  pb-14 opacity-100 transition-all">
              <div className="flex items-center justify-center text-center text-white">
                <div className="mx-auto">
                  <h3 className="text-[12px] font-bold uppercase font-primary">
                    All products
                  </h3>
                  <h1 className="font-smeibold my-2 text-[26px] uppercase font-primary">
                    Product Sale
                  </h1>
                  <h4>15 NOV - 25 NOV</h4>
                  <Link href="/" className="mt-3 underline font-tertiary">
                    See More Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default HomePageBanner;
