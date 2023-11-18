"use client";
import React, { useState } from "react";
import Ratings from "../UI/Rating/Rating";

const DetailsSkeleton = () => {
  const [image, setImage] = useState(1);
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left section with product images */}
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="rounded-lg mb-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-64 md:h-80 animate-pulse rounded-lg bg-gray-100 mb-4 flex items-center justify-center ${
                    image === i + 1 ? "block" : "hidden"
                  }`}
                >
                  <span className="text-5xl"></span>
                </div>
              ))}
            </div>

            <div className="flex -mx-2 mb-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="flex-1 px-2" key={i}>
                  <button
                    onClick={() => setImage(i + 1)}
                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                      image === i + 1
                        ? "ring-2 ring-gray-100 ring-inset animate-pulse"
                        : ""
                    }`}
                  >
                    <span className="text-2xl"></span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section with product details */}
        <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-5">
          <h2 className="text-sm bg-gray-100 h-5 tracking-widest animate-pulse my-3"></h2>
          <h1 className="bg-gray-100 text-3xl font-bold mb-1 title animate-pulse my-3"></h1>
          <div className="flex mb-4 h-5 animate-pulse bg-gray-100">
            <span className="flex items-center">
              <Ratings starClassName="w-4 h-4 lg:w-5 lg:h-5" ratings={0} />
              <span className="bg-gray-100 h-5 ml-3 font-semibold"></span>
            </span>
            {/* Social media icons */}
          </div>
          <p className="text-base h-1 animate-pulse"></p>

          {/* Updated text elements */}
          <p className="bg-gray-100 h-1 animate-pulse w-4/5 mt-3"></p>
          <p className="bg-gray-100 h-1 animate-pulse w-3/5 mt-3"></p>
          <p className="bg-gray-100 h-1 animate-pulse w-2/5 mt-3"></p>

          {/* Color and Size selectors */}
          <div className="flex mt-6 h-5 animate-pulse items-center pb-5 border-b-2 border-gray-100 mb-5">
            {/* Color selector */}
            <div className="flex">
              <span className="mr-3"></span>
              {/* Color buttons */}
            </div>

            {/* Size selector */}
            <div className="flex ml-6 h-7 items-center mt-4">
              <span className="mr-3"></span>
              {/* Size dropdown */}
            </div>
          </div>

          {/* Price and action buttons */}
          <div className="flex justify-between h-10 animate-pulse mt-5">
            <div>
              <span className="font-bold title text-2xl bg-gray-100 h-5"></span>
            </div>
            <div className="flex items-center mt-5">
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
