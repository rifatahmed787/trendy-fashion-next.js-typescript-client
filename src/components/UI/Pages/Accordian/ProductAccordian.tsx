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

  const productsAccordian = accordians?.data;

  const paymentAccordian = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and sometimes other local payment methods. The available options are displayed at the checkout.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we take the security of your payment information very seriously. We use industry-standard encryption and security protocols to ensure that your data is protected.",
    },
    {
      question: "Do you store my credit card information?",
      answer:
        "For your security, we do not store credit card information on our servers. All payment details are handled by our secure payment processing partners.",
    },
    {
      question:
        "Are there any additional fees for using a specific payment method?",
      answer:
        "We do not charge any additional fees for using most payment methods. However, depending on your location or the payment method chosen, there might be currency conversion or bank fees, which are determined by your bank or payment provider.",
    },
    {
      question: "Can I change my payment method after placing an order?",
      answer:
        "Once an order is placed, the payment method cannot be changed. If necessary, you might need to cancel the order and place a new one with the preferred payment method.",
    },
    {
      question: "What happens if my payment is declined?",
      answer:
        "If your payment is declined, please double-check the payment information or try an alternate payment method. If the issue persists, contact our support team for assistance.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      {isLoading ? (
        <>
          <AccordianSkeleton />
        </>
      ) : (
        <>
          {" "}
          <div className="faq-container">
            <h1 className="text-lg md:text-2xl text-center font-semibold py-5 relative  before:content-normal before:absolute before:w-full before:left-0 before:bottom-0 before:bg-primary-100 before:h-0.5">
              Product related FAQ
            </h1>
            {!isError &&
              !error &&
              productsAccordian?.map((accordian: IAccordian) => (
                <>
                  <div
                    className={`faq ${
                      activeIndex === accordian?.question ? "active" : ""
                    }`}
                    key={accordian?.id}
                  >
                    <h3 className="faq-title">Q. {accordian?.question}</h3>
                    <p
                      className={`faq-text ${
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
                </>
              ))}
          </div>
        </>
      )}

      {/* payment related accordian */}
      <div className="faq-container">
        <h1 className="text-lg md:text-2xl text-center font-semibold py-5 relative  before:content-normal before:absolute before:w-full before:left-0 before:bottom-0 before:bg-primary-100 before:h-0.5">
          Payment related FAQ
        </h1>
        {paymentAccordian.map((product) => (
          <>
            <div
              className={`faq ${
                activeIndex === product.question ? "active" : ""
              }`}
              key={product.question}
            >
              <h3 className="faq-title">Q. {product.question}</h3>
              <p
                className={`faq-text ${
                  activeIndex === product.question ? "show" : ""
                }`}
              >
                Ans. {product.answer}
              </p>
              <button
                className="faq-toggle"
                onClick={() => handleToggle(product.question)}
              >
                <Icon icon="ep:arrow-down" />
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductAccordian;
