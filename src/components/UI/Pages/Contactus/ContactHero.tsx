/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import contact from "../../../../assets/shopImage/cloth.jpg";

const ContactHero = () => {
  return (
    <section className="px-2 py-16 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl title">
                <span className="block xl:inline">Connect with </span>
                <span className="block text-primary-100 xl:inline">Us</span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl">
                We invite you to explore, engage, and be part of our narrative.
                Whether it's through our products, stories, or moments shared,
                we're thrilled to have you here.
              </p>
              <h3 className="text-lg font-bold title">
                Thank you for being part of our story.
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl relative flex justify-center items-center group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary-100 opacity-25 group-hover:w-full group-hover:h-96"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 cursor-pointer "></span>
              <Image
                src={contact}
                width={undefined}
                height={undefined}
                alt="contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
