import { IProduct } from "@/Types/products";
import { IProductReview } from "@/Types/review";
import Image from "next/image";
import React from "react";
import Ratings from "../UI/Rating/Rating";
import SubTitle from "../UI/SubTitle/SubTitle";
import Paragraph from "../UI/Paragraph/Paragraph";

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
    <div className="relative h-[450px] overflow-auto">
      {product_details?.productReviews && product_details.productReviews.length > 0 ? (
        <>
          {product_details.productReviews.map((review: IProductReview) => (
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
                    className="object-cover w-12 h-12 rounded-full "
                  />
                </div>
                <div>
                  <Ratings
                    starClassName="w-4 h-4 lg:w-5 lg:h-5"
                    ratings={review?.rating || 0}
                  />
                  <h4 className="font-bold">{review?.reviewer?.username}</h4>
                  <span className="text-xs ">
                    {formatTimestamp(review.createdAt)}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2 text-sm ">
                <Paragraph>{review?.reviewText}</Paragraph>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex justify-center items-center h-[450px]">
          <SubTitle SubTitle="No Review Available" />
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
