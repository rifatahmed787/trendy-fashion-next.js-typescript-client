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
                  className={`w-4/5 h-64 md:h-96 animate-pulse rounded-lg bg-gray-100 mb-4 flex items-center justify-center mx-auto ${
                    image === i + 1 ? "block" : "hidden"
                  }`}
                >
                  <svg
                    className="w-10 h-10 text-gray-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="flex -mx-2 mb-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="flex-1 px-2" key={i}>
                  <button
                    onClick={() => setImage(i + 1)}
                    className={`focus:outline-none w-4/5 rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center mx-auto ${
                      image === i + 1
                        ? "ring-2 ring-gray-100 ring-inset animate-pulse"
                        : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section with product details */}
        <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-5">
          <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse mb-2"></div>
          <div className="h-8 w-1/2 bg-gray-300 rounded-md animate-pulse mb-2"></div>

          <span className="flex items-center py-3">
            <Ratings starClassName="w-4 h-4 lg:w-5 lg:h-5" ratings={0} />
          </span>
          {/* Social media icons */}

          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>

          {/* Updated text elements */}
          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>

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
