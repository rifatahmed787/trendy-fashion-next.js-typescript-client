/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useGetAccordianQuery } from "@/Redux/features/accordian/accordianApi";
import { IAccordian } from "@/Types/accordian";
import AccordianSkeleton from "@/components/Skeleton/AccordianSkeleton";

const ProductAccordian = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const {
    data: accordians,
    isError,
    isLoading,
    error,
  } = useGetAccordianQuery({});
  console.log(accordians);

  const handleToggle = (question: string) => {
    setActiveIndex(activeIndex === question ? null : question);
  };

  const Accordian = accordians?.data;

  const ProductAccordians = Accordian?.filter(
    (accordianItem: any) => accordianItem?.category === "product"
  );

  const PaymentAccordians = Accordian?.filter(
    (paymentItem: any) => paymentItem.category === "payment"
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center ">
      {isLoading ? (
        <>
          <AccordianSkeleton />
        </>
      ) : (
        <>
          {" "}
          <div className="faq-container">
            <h3 className="text-lg md:text-2xl font-primary text-center font-semibold py-5 relative  before:content-normal before:absolute before:w-full before:left-0 before:bottom-0 before:bg-primary-100 before:h-0.5">
              Product related FAQ's
            </h3>
            {!isError &&
              !error &&
              ProductAccordians?.map((accordian: IAccordian) => (
                <div key={accordian.id}>
                  <div
                    className={`faq ${
                      activeIndex === accordian?.question ? "active" : ""
                    }`}
                  >
                    <h3 className="faq-title font-bold font-secondary text-xl">Q. {accordian?.question}</h3>
                    <p
                      className={`faq-text font-primary ${
                        activeIndex === accordian?.question ? "show" : ""
                      }`}
                    >
                      Ans. {accordian?.answer}
                    </p>
                    <button
                      className="faq-toggle"
                      onClick={() => handleToggle(accordian?.question)}
                    >
                      <Icon icon="ep:arrow-down" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}

      {/* payment related accordian */}
      {isLoading ? (
        <>
          <AccordianSkeleton />
        </>
      ) : (
        <>
          <div className="faq-container">
            <h3 className="text-lg md:text-2xl text-center font-primary font-semibold py-5 relative  before:content-normal before:absolute before:w-full before:left-0 before:bottom-0 before:bg-primary-100 before:h-0.5">
              Payment related FAQ's
            </h3>
            {!isError &&
              !error &&
              PaymentAccordians?.map((payment: IAccordian) => (
                <>
                  <div
                    className={`faq ${
                      activeIndex === payment?.question ? "active" : ""
                    }`}
                    key={payment?.question}
                  >
                    <h3 className="faq-title font-secondary font-bold text-xl ">Q. {payment?.question}</h3>
                    <p
                      className={`faq-text font-primary ${
                        activeIndex === payment?.question ? "show" : ""
                      }`}
                    >
                      Ans. {payment?.answer}
                    </p>
                    <button
                      className="faq-toggle"
                      onClick={() => handleToggle(payment?.question)}
                    >
                      <Icon icon="ep:arrow-down" />
                    </button>
                  </div>
                </>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductAccordian;
