import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { IProduct } from "@/Types/products";
import Ratings from "./Rating/Rating";
const ProductCard = ({ product }: { product: IProduct }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="group h-fit w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <Image
            width={300}
            height={64}
            className={`h-52 w-full object-cover transition-transform duration-500 ${
              isHovered
                ? "transform scale-110 opacity-80 duration-700"
                : "transform-none opacity-100"
            }`}
            src={product?.productImage[isHovered ? 1 : 0]}
            alt="product image"
          />

          <div className="absolute -bottom-10 flex w-full transition-all duration-300 group-hover:bottom-0 ">
            <button className="relative inline-flex items-center justify-center w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out button-group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-5 bg-primary-200 first-span ease">
                <Icon icon="mdi:cart-heart" width={20} />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform second-span ease bg-gray-800 title">
                Add To Cart
              </span>
              <span className="relative invisible ">Add To Cart</span>
            </button>
          </div>
          <div className="absolute right-2 top-0">
            <Icon
              icon="mdi:heart-outline"
              className="cursor-pointer rounded-full p-1 hover:text-gray-500"
              width={25}
              height={64}
            />
            <Icon
              icon="iconamoon:restart-fill"
              className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-200 hover:text-gray-500 group-hover:translate-x-0"
              width={25}
            />
            <Icon
              icon="basil:eye-outline"
              className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 hover:text-gray-500 group-hover:translate-x-0"
              width={25}
            />
          </div>
        </div>
        <h2 className="mt-3 text-xl capitalize title">
          {product?.productName}
        </h2>

        <div className="flex gap-5 items-center">
          <del className="text-sm text-red-700">$49</del>
          <Ratings
            starClassName="w-4 h-4 lg:w-5 lg:h-5"
            ratings={product?.productRating || 0}
          />
        </div>
        <p className="ml-1 mt-2 inline-block text-lg font-bold text-gray-700">
          ${product?.productPrice}
        </p>
      </div>
    </>
  );
};

export default ProductCard;
