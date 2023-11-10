/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import imag1 from "../../../assets/offerLogo/pic1.png";
import imag2 from "../../../assets/offerLogo/pic2.png";
import Link from "next/link";
import Image from "next/image";

/**
 *
 *
 */

const TyneNavbar = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    setPreviousScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, previousScroll]);

  const headerClasses = `fixed top-0 z-30 w-full border-b border-gray-200 transition-transform duration-300 ${
    isHeaderVisible ? "translate-y-0" : "-translate-y-full"
  } bg-gradient-to-r from-violet-300 to-violet-400`;
  return (
    <div className={headerClasses}>
      <div className="mx-auto grid max-w-screen-xl grid-cols-4 gap-5  text-gray-900">
        <div className="flex justify-center">
          <Link href="/" className="flex justify-center items-center">
            <div className="my-auto text-sm leading-3 border-r border-r-gray-900 pr-2 hidden md:block">
              <a
                href="tel:+8801752555788"
                className="border-brand flex items-center space-x-1"
              >
                <span className="text-brand text-[14px]">
                  24/7 customer service
                </span>
              </a>
            </div>
            <Image
              src={imag2}
              alt=""
              className="h-[40px] w-[130px] ml"
              width={100}
            />
          </Link>
        </div>
        <div className="col-span-2">
          <Marquee
            direction="left"
            autoFill={true}
            pauseOnClick={true}
            // speed="40"
            className="mt-2"
          >
            <p>
              “If you do build a great experience, customers tell each other
              about that. Word of mouth is very powerful.” – Jeff Bezos, founder
              of Amazon
            </p>
          </Marquee>
        </div>
        <div className=" flex gap-10 ">
          <Image
            src={imag1}
            alt=""
            className="-ml-[85px] h-[40px] w-[130px]"
            width={100}
          />
          <div className="my-auto text-sm leading-3 border-r border-r-gray-900 pr-2 hidden md:block">
            <a
              href="tel:+8801752555788"
              className="border-brand text- flex items-center space-x-1"
            >
              <Icon icon="material-symbols:phone-forwarded-outline-rounded" />
              <span className="text-brand text-[14px]">+8801945518927</span>
            </a>
          </div>

          <Link href="/goldsmith/contact">
            <Icon
              icon="subway:location-3"
              className="text-yellow-300 mt-2 "
              width={26}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TyneNavbar;
