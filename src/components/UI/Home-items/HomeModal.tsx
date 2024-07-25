"use client";
import { IOffer } from "@/Types/offerModal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import WhiteButton from "@/components/Button/SecondaryButton";
import count from "../../../assets/offerLogo/timecount.png";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import SubTitle from "../SubTitle/SubTitle";

type HomeOfferModalProps = {
  offer: IOffer[];
};

const HomeModal = ({ offer }: HomeOfferModalProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const startTime = new Date(offer[0].startTime).getTime();
      const endTime = new Date(offer[0].endTime).getTime();
      const now = new Date().getTime();

      let difference = endTime - now;
      if (difference < 0) difference = 0;

      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(timeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [offer]);

  return (
    <section className="px-5 md:px-10">
      <div className="relative max-w-screen-2xl mx-auto mt-16">
        <Image
          width={100}
          height={100}
          src={offer[0].img}
          alt={offer[0].categoryName}
          className="w-full h-[400px] md:h-[350px] rounded-md mx-auto"
        />
        <div className="absolute left-1/3 top-1/4 md:top-1/2 z-20">
          <h3 className="text-xl md:text-2xl bg-red-600 px-5 py-3 rounded-bl-3xl rounded-tr-3xl font-secondary font-semibold text-white transform -rotate-[55deg]">
            UPTO {offer[0].percent}% OFF
          </h3>
        </div>
        <div className=" absolute top-1/3 md:top-0 left-10 md:left-1/4 w-full h-[250px] md:h-[350px]">
          <Image
            src={count}
            alt="count-down"
            layout="fill"
            objectFit="contain"
            className="relative"
          />

          <div className="absolute pt-4 top-1/4 left-0 right-0 z-10 flex justify-center">
            <SubTitle
              SubTitle={`On ${offer[0].categoryName}`}
              className=" text-white "
            />
          </div>
          <div className="absolute pt-3 inset-0 flex flex-col justify-center items-center text-white text-lg md:text-2xl font-primary font-bold">
            <p>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </p>
          </div>
        </div>

        <div className="absolute bottom-7 right-5">
          <Link href={"/"}>
            <WhiteButton text="Buy Now" />
          </Link>
        </div>
        <div className="absolute right-5 top-5 cursor-pointer">
          <h5>
            <RxCross2 className="text-2xl md:text-4xl" />
          </h5>
        </div>
      </div>
    </section>
  );
};

export default HomeModal;
