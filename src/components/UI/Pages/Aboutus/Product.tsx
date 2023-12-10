import Image from "next/image";
import Link from "next/link";
import React from "react";
import about from "../../../../assets/shopImage/cloth.jpg";

const Product = () => {
  return (
    <>
      <section className="px-2 pb-32 pt-10 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl title">
                  <span className="block xl:inline">
                    Best place to choose your{" "}
                  </span>
                  <span className="block text-primary-100 xl:inline">
                    Products
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl">
                  At Trendy Fashion, we believe in more than just products – we
                  believe in journeys, in connections, and in crafting
                  experiences that resonate with you. Our story began at a
                  humble kitchen table, fueled by a passion for innovation and a
                  desire to create something exceptional.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    href="/products"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg bg-primary-100 rounded-md sm:mb-0 sm:w-auto"
                  >
                    Shop Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <Image
                  src={about}
                  width={undefined}
                  height={undefined}
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
