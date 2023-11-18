"use client";
import WhiteButton from "@/components/Button/SecondaryButton";
import { textVariant } from "@/components/FramerMotion/Motion/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <motion.div variants={textVariant(0.5)} className="py-20 px-10">
          <p className="uppercase">Premium quality</p>

          <h1 className="title text-2xl md:text-5xl uppercase font-bold py-5 lg:w-1/2">
            The best Product in the city.
          </h1>
          <p className="lg:w-1/2">
            Centuries before the advent of cloths, stationary served a highly
            practical purpose as efficient. High quality product served alway.
            This is our main goal to see happy the customer.
          </p>
          <div className="mt-10">
            <Link href={"/products"}>
              <WhiteButton text="Shop Now" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
