import { IProduct } from "@/Types/products";
import { IProductReview } from "@/Types/review";
import Image from "next/image";
import React from "react";
import Ratings from "../UI/Rating/Rating";

const ReviewSection = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (
    <div className="relative h-32 overflow-auto">
      {product_details?.productReviews?.map((review: IProductReview) => (
        <div
          key={review.id}
          className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md "
        >
          <div className="flex space-x-4">
            <div>
              <Image
                width={20}
                height={20}
                src={review?.reviewer?.avatar}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <Ratings
                starClassName="w-4 h-4 lg:w-5 lg:h-5"
                ratings={review?.rating || 0}
              />
              <h4 className="font-bold">{review?.reviewer?.username}</h4>
              <span className="text-xs dark:text-gray-400">
                {formatTimestamp(review.createdAt)}
              </span>
            </div>
          </div>

          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>{review?.reviewText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
