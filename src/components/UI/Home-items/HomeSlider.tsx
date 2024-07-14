"use client";

import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import rightImage from "../../../assets/HomePageBannerImg/righslider.jpg";
import rightImage1 from "../../../assets/HomePageBannerImg/rightslider1.jpg";

import Paragraph from "../Paragraph/Paragraph";
import Image from "next/image";
import Link from "next/link";
import BrandButton from "@/components/Button/PrimaryButton";
import WhiteButton from "@/components/Button/SecondaryButton";
import RightToLeft from "../Framer-motion/RightToLeft";
import ZoomIn from "../Framer-motion/ZoomIn";
import BottomToTop from "../Framer-motion/BottomToTop";
import FadeIn from "../Framer-motion/FadeIn";
import Title from "../Title/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetSliderQuery } from "@/Redux/features/slider/sliderApi";
import { ISlider } from "@/Types/slider";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};

type HomePageBannerProps = {
  sliders: ISlider[];
};
const HomePageBanner = ({ sliders }: HomePageBannerProps) => {
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
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-2">
          <div className="group col-span-3">
            <Swiper
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              autoplay={{
                delay: 5500,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mx-auto w-[100%] h-[50vh] md:h-[60vh] lg:h-[80vh] swiper-scale-effect"
              speed={1500}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
            >
              {sliders?.length > 0 &&
                sliders?.map((slider, index: number) => (
                  <SwiperSlide
                    className="bg-[#EEEEEE] swiper-slide"
                    key={slider?.id}
                  >
                    <div className="relative text-white swiper-slide-cover">
                      <>
                        <Image
                          src={slider?.img}
                          alt="slider"
                          className="w-full object-cover"
                          width={100}
                          height={100}
                          quality={100}
                          priority={true}
                        />
                      </>

                      <span className="absolute top-0 bg-black left-0 opacity-20 inset-0"></span>
                      <div className="absolute left-5 md:left-16 top-[16%] ml-14 w-3/4">
                        {activeIndex === index && (
                          <>
                            <RightToLeft>
                              <div className="w-11/12">
                                <Title title={slider?.title} />
                              </div>
                            </RightToLeft>

                            <ZoomIn>
                              <Paragraph className="my-5 w-full lg:w-4/6">
                                {slider?.des}
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
                            <div className="w-full lg:w-11/12">
                              <Title title={slider?.title} />
                            </div>
                            <Paragraph className="my-5 w-full lg:w-4/6">
                              {slider?.des}
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
                  className="prev-button absolute -translate-x-full group-hover:translate-x-1 -left-10 group-hover:left-0 md:group-hover:left-2 top-[40%] md:top-[45%]  z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-500 group-hover:bg-[#ffffffcb] group-hover:text-black"
                  onClick={goPrevButton}
                >
                  <IoIosArrowBack className="text-xl md:text-2xl" />
                </button>
                <button
                  className="next-button absolute translate-x-full group-hover:-translate-x-1 -right-10 group-hover:right-0 md:group-hover:right-2 top-[40%] md:top-[45%]  z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-500 group-hover:bg-[#ffffffcb] group-hover:text-black"
                  onClick={goNextButton}
                >
                  <IoIosArrowForward className="text-xl md:text-2xl" />
                </button>
              </div>
            </Swiper>
          </div>

          <div className="relative">
            <Image
              src={rightImage}
              alt=""
              className="w-full hidden lg:block lg:h-[80vh]"
              width={undefined}
            />
            <span className="hidden lg:block absolute top-0 bg-black left-0 opacity-50 inset-0 lg:h-[80vh]"></span>
            <Image
              src={rightImage1}
              alt=""
              className="h-[50vh] md:h-[70vh] w-full block lg:hidden"
              width={undefined}
            />
            <span className="block lg:hidden absolute top-0 bg-black left-0 opacity-50 inset-0 h-[50vh] md:h-[70vh]"></span>
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
