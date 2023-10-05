"use client";

import { Icon } from "@iconify/react";
import React from "react";
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
  return (
    <div className="hidden h-10  md:block bg-gradient-to-r from-violet-300 to-violet-400">
      <div className="mx-auto grid max-w-screen-xl grid-cols-4 gap-5  text-gray-900">
        <div className="flex justify-center">
          <Link href="/eid/collection">
            <Image
              src={imag2}
              alt=""
              className="h-[40px] w-[130px]"
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
              I can be a React component, multiple React components, or just
              some text.
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
          <div className="my-auto text-sm leading-3 border-r border-r-gray-900 pr-2">
            <a
              href="tel:+8801752555788"
              className="border-brand text- flex items-center space-x-1"
            >
              <Icon icon="material-symbols:phone-forwarded-outline-rounded" />
              <span className="text-brand text-[14px]">+8801752555788</span>
            </a>

            <a
              href="tel:+8801752555788"
              className="border-brand text- flex items-center space-x-1"
            >
              <Icon icon="maki:emergency-phone" />
              <span className="text-brand text-[14px]">+8801521423492</span>
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
