"use client";
import WhiteButton from "@/components/Button/SecondaryButton";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import SubTitle from "../SubTitle/SubTitle";
import { IHero } from "@/Types/hero";
import Image from "next/image";

type heroSectionProps = {
  hero_section: IHero[];
};

const HeroSection = ({ hero_section }: heroSectionProps) => {
  return (
    <section className="mb-16">
      <div className="max-w-screen-2xl mx-auto relative">
        <Image
          src={hero_section[0]?.img}
          alt={hero_section[0]?.title}
          width={100}
          height={100}
          className="w-full h-[350px] lg:h-[450px]"
        />
        <div className="py-10 lg:py-20 px-10 absolute left-5 top-0">
          <Paragraph className="md:text-[18px] lg:text-[20px]">
            {hero_section[0]?.subTitle}
          </Paragraph>

          <SubTitle
            SubTitle={hero_section[0]?.title}
            className="py-7 md:text-[30px] lg:text-[50px] text-gray-100"
          />
          <Paragraph className="lg:w-1/2 text-gray-700">
            {hero_section[0]?.paragraph}
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
