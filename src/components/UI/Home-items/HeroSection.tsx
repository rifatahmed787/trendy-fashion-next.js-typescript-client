"use client";
import WhiteButton from "@/components/Button/SecondaryButton";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import SubTitle from "../SubTitle/SubTitle";

const HeroSection = () => {
  return (
    <section className="mb-16">
      <div className="hero-section max-w-screen-2xl mx-auto">
        <div className="py-20 px-10">
          <Paragraph className="md:text-[18px] lg:text-[20px]">Premium quality</Paragraph>

          <SubTitle SubTitle="The best Product in the city." className="py-7 md:text-[30px] lg:text-[50px] text-gray-100"/>
          <Paragraph className="lg:w-1/2 text-gray-700">
            Centuries before the advent of cloths, stationary served a highly
            practical purpose as efficient. High quality product served alway.
            This is our main goal to see happy the customer.
          </Paragraph>
          <div className="mt-10">
            <Link href={"/products"}>
              <WhiteButton text="Shop Now" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
