import Accordian from "@/components/UI/Pages/Accordian/Accordian";
import React from "react";
import faq from "../../../assets/BannerImg/accordian.jpg";
import Image from "next/image";

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
        <Accordian />
      </div>
    </div>
  );
};

export default Faq;
