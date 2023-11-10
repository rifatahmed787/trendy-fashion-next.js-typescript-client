"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const EcommerceStats = () => {
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = countRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <div className="pt-14">
        <h2 className="font-bold text-xl md:text-4xl text-center relative before:absolute before:content-normal before:w-4/5 md:before:w-[41%] before:h-1 before:bg-primary-100 before:-bottom-2 ">
          Fueling Revolutionary Progress.
        </h2>
      </div>

      <div className="grid gap-8 grid-cols-2 md:grid-cols-4 my-10">
        <div className="text-center">
          <p className="mb-5 font- relative before:absolute before:content-normal before:w-1/2 md:before:w-1/3 before:h-1 before:bg-primary-100 before:-bottom-2">
            Total Products
          </p>
          <h6 className="text-xl md:text-3xl font-bold" ref={countRef}>
            {isVisible && <CountUp start={100} end={3200} duration={6} />}+
          </h6>
        </div>
        <div className="text-center">
          <p className="mb-5 font- relative before:absolute before:content-normal before:w-1/2 md:before:w-1/3 before:h-1 before:bg-primary-100 before:-bottom-2">
            Total Reviews
          </p>
          <h6 className="text-xl md:text-3xl font-bold">
            {isVisible && <CountUp start={100} end={3300} duration={6} />}+
          </h6>
        </div>
        <div className="text-center">
          <p className="mb-5 font- relative before:absolute before:content-normal before:w-1/2 md:before:w-[40%] before:h-1 before:bg-primary-100 before:-bottom-2">
            Happy Customer
          </p>
          <h6 className="text-xl md:text-3xl font-bold">
            {isVisible && <CountUp start={100} end={400} duration={6} />}+
          </h6>
        </div>
        <div className="text-center">
          <p className="mb-5 font- relative before:absolute before:content-normal before:w-1/2 md:before:w-[44%] before:h-1 before:bg-primary-100 before:-bottom-2">
            Worldwide Branch
          </p>
          <h3 className="text-xl md:text-3xl font-bold">
            {isVisible && <CountUp start={10} end={200} duration={6} />}
          </h3>
        </div>
      </div>
    </>
  );
};

export default EcommerceStats;
