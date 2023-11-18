"use client";

import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "../UI/Button";
import { IProduct } from "@/Types/products";
import Link from "next/link";
import Ratings from "../UI/Rating/Rating";
import ICONS from "../shared/Icons/AllIcons";
import Image from "next/image";

const ProductDetail = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  const [image, setImage] = useState(1);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="rounded-lg mb-4">
                {product_details?.productImage?.map((imageSrc, i) => (
                  <div
                    key={i}
                    className={`mb-4 flex items-center justify-center ${
                      image === i ? "block" : "hidden"
                    }`}
                  >
                    <Image
                      width={500}
                      height={300}
                      src={imageSrc}
                      alt={`Image ${i + 1}`}
                      className="w-full h-96 rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="flex -mx-2 mb-4">
                {product_details?.productImage?.map((imageSrc, i) => (
                  <div className="flex-1 px-2" key={i}>
                    <button
                      onClick={() => setImage(i)}
                      className={`focus:outline-none w-full rounded-lg h-24 md:h-32  flex items-center justify-center ${
                        image === i ? "ring-2 ring-primary-100 ring-inset" : ""
                      }`}
                    >
                      <span className="text-2xl">
                        <Image
                          width={100}
                          height={100}
                          src={imageSrc}
                          alt={`Image ${i + 1}`}
                          className="rounded-lg"
                        />
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-5">
            <h2 className="text-sm text-gray-500 tracking-widest">ON SALE</h2>
            <h1 className="text-gray-900 text-3xl font-bold mb-1 title">
              {product_details?.productName}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Ratings
                  starClassName="w-4 h-4 lg:w-5 lg:h-5"
                  ratings={product_details?.productRating || 0}
                />
                <span className="text-gray-600 ml-3 font-semibold">
                  20 Reviews
                </span>
              </span>
              <span className="flex items-center  ml-3 pl-3 gap-1 py-2 border-l-2 border-gray-200 space-x-2s">
                <Link href="#" className="block text-white z-10">
                  <Icon
                    icon="ri:facebook-fill"
                    width={25}
                    className="text-gray-500 group-hover:text-brand "
                  />
                </Link>
                <Link href="#" className="block text-white z-10">
                  <Icon
                    icon="mdi:instagram"
                    width={25}
                    className="text-gray-500 group-hover:text-brand "
                  />
                </Link>
                <Link href="#" className="block text-white z-10">
                  <Icon
                    icon="mdi:twitter"
                    width={25}
                    className="text-gray-500 group-hover:text-brand "
                  />
                </Link>
              </span>
            </div>
            <p className="text-base">{product_details?.productDetails}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-none text-base pl-3 pr-10">
                    {product_details?.productSize?.map((size) => (
                      <>
                        <option>{size}</option>
                      </>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <span className="font-bold title text-2xl text-gray-900">
                  $ {product_details?.productPrice}
                </span>
              </div>
              <div className="flex items-center">
                <Button
                  title="Add To Cart"
                  icon=""
                  className="bg-primary-100 px-3 py-2 rounded-lg text-black"
                />
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {ICONS.heart_fill_icon}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
