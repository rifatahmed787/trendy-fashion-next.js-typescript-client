import React from "react";
import faq from "../../../assets/BannerImg/accordian.jpg";
import Image from "next/image";
import ProductAccordian from "@/components/UI/Pages/Accordian/ProductAccordian";

const Faq = () => {
  return (
    <div>
      <Image
        src={faq}
        width={undefined}
        height={undefined}
        alt="accordian"
        className="h-[40vh] md:h-[60vh]"
      />

      <div className="my-10">
        <ProductAccordian />
      </div>
    </div>
  );
};

export default Faq;
