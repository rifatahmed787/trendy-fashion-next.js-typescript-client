/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

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

  const headerClasses = `fixed top-0 h-10 z-30 w-full border-b border-gray-200 transition-transform duration-300 ${
    isHeaderVisible ? "translate-y-0" : "-translate-y-full"
  } bg-gradient-to-r from-[#FA9A10] via-[#FF960C] to-[#FFBF5E]`;

  return (
    <div className={headerClasses}>
      <div className="mx-auto grid max-w-screen-xl grid-cols-4 gap-5">
        <div className="flex justify-center">
          <Link href="/" className="flex justify-center items-center">
            <div className="my-auto text-sm leading-3 border-r border-r-gray-900 pr-2 hidden md:block">
              <a
                href="tel:+8801752555788"
                className=" flex items-center space-x-1"
              >
                <span className="text-[14px]">24/7 customer service</span>
              </a>
            </div>
            <h1 className="font-bold text-sm pl-5">Policy:</h1>
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
            <p className="text-sm">
              “If you do build a great experience, customers tell each other
              about that. Word of mouth is very powerful.” – Jeff Bezos, founder
              of Amazon
            </p>
          </Marquee>
        </div>
        <div className=" flex gap-10 ">
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
              className="text-gray-700 my-1 "
              width={26}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TyneNavbar;
