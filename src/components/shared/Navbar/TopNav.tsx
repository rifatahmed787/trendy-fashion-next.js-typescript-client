/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Logo from "../../../assets/Logo/trendy.svg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductSearchbar from "@/components/Products/ProductSearchbar";
import Image from "next/image";
import ICONS from "../Icons/AllIcons";

const TopNav = () => {
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

  const headerClasses = `fixed top-0 py-2 bg-white z-40 w-full border-b border-gray-200 transition-transform duration-300 md:px-16 hidden md:block ${
    isHeaderVisible ? "translate-y-0" : "-translate-y-auto"
  }`;

  return (
    <div className={headerClasses}>
      <div className="flex items-center justify-between font-medium mx-auto max-w-screen-xl">
        <div className="flex justify-center">
          <div className="z-50 flex w-full justify-between p-1 ml-3 md:ml-0 md:w-auto">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-14 md:cursor-pointer"
                width={undefined}
                height={undefined}
              />
            </Link>
          </div>
        </div>
        <div>
          <a
            href="tel:+8801752555788"
            className="border-brand flex items-center gap-1"
          >
            <div className="text-primary-100 bg-white p-1 shadow-md rounded-md">
              {ICONS.mobile}
            </div>
            <p className="flex flex-col text-base font-inter">
              <span>Call Us</span>
              <span className="text-gray-400 tracking-widest">
                {" "}
                +8801945518927
              </span>
            </p>
          </a>
        </div>
        <div>
          <ProductSearchbar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
