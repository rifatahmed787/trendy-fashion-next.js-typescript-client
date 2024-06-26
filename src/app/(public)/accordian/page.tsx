import React from "react";
import ProductAccordian from "@/components/UI/Pages/Accordian/ProductAccordian";
import Heading from "@/components/UI/Heading/Heading";

const Faq = () => {
  return (
    <section>
      <div className="my-10 max-w-screen-2xl mx-auto">
        <div className="text-center py-10"><Heading Heading="FAQ" /></div>
        <ProductAccordian />
      </div>
    </section>
  );
};

export default Faq;
