"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const handleToggle = (question: string) => {
    setActiveIndex(activeIndex === question ? null : question);
  };

  const productsAccordian = [
    {
      question: "What materials are used in manufacturing this product?",
      answer:
        "Our product is crafted using high-quality, durable materials such as stainless steel, aluminum, and BPA-free plastic for maximum performance and safety.",
    },
    {
      question: "How can I maintain and clean this product?",
      answer:
        "To maintain this product's longevity, regular cleaning with mild soap and water is recommended. Specific cleaning instructions are provided in the product manual.",
    },
    {
      question: "Does this product come with a warranty?",
      answer:
        "Yes, this product includes a standard one-year warranty against manufacturing defects. Extended warranty options are also available for purchase.",
    },
    {
      question: " What is the product's energy consumption rating?",
      answer:
        "Our product is designed with energy efficiency in mind, adhering to the highest standards. The energy rating specifics are detailed in the product specifications.",
    },
    {
      question: "Is this product suitable for both indoor and outdoor use?",
      answer:
        "Yes, this product is versatile and suitable for both indoor and outdoor activities. However, specific weather-resistant features are detailed in the product description.",
    },
    {
      question: "Can I customize or personalize this product?",
      answer:
        "At this time, the product is available as shown. However, we offer customization options for bulk orders. Contact our support for more information.",
    },
    {
      question: "What safety features does this product offer?",
      answer:
        "Our product is equipped with multiple safety features ensuring user protection. Specific safety details are included in the user manual.",
    },
    {
      question: "Are replacement parts readily available for this product?",
      answer:
        "Yes, we provide replacement parts for this product, ensuring continued functionality and durability. Contact our support for spare parts availability.",
    },
    {
      question: "Is this product eco-friendly or recyclable?",
      answer:
        "Our product aligns with eco-friendly principles and is made from recyclable materials. It's our commitment to sustainability and reducing environmental impact.",
    },
    {
      question: "How does this product compare to similar items in the market?",
      answer:
        "Our product boasts unique features, enhanced performance, and competitive pricing, setting it apart from other similar products. A detailed comparison can be found on our website.",
    },
  ];

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
      <div className="faq-container">
        <h1 className="text-lg md:text-2xl text-center font-semibold py-5 relative  before:content-normal before:absolute before:w-full before:left-0 before:bottom-0 before:bg-primary-100 before:h-0.5">
          Product related FAQ
        </h1>
        {productsAccordian.map((product) => (
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

export default Accordian;
