import { IProduct } from "@/Types/products";
import { IProductReview } from "@/Types/review";
import Image from "next/image";
import React from "react";
import Ratings from "../UI/Rating/Rating";
import SubTitle from "../UI/SubTitle/SubTitle";
import Paragraph from "../UI/Paragraph/Paragraph";
import ICONS from "../shared/Icons/AllIcons";
import { useAppSelector } from "@/Hooks/useRedux";
import useModal from "@/Hooks/useModal";

const ReviewSection = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal } = useModal();
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="relative h-[450px] overflow-auto">
      {product_details?.productReviews &&
      product_details.productReviews.length > 0 ? (
        <>
          {product_details.productReviews.map((review: IProductReview) => (
            <div
              key={review.id}
              className="container flex flex-col w-full max-w-6xl p-6 mx-auto divide-y rounded-md "
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
        <div className="flex flex-col gap-10 justify-center items-center h-[450px]">
          <SubTitle SubTitle="No Review Available" />
        </div>
      )}
      <div className="p-6">
        {user?.id || isLoggedIn ? (
          <>
            {product_details && (
              <button
                className="flex items-center gap-2 px-3 py-2 text-white font-semibold bg-primary-100 cursor-pointer"
                onClick={() => openModal("review")}
              >
                <span className="text-base md:text-lg font-secondary text-white font-semibold ">
                  Write A Review
                </span>
                {ICONS.chat_icon}
              </button>
            )}
          </>
        ) : (
          <button
            className="flex items-center gap-2 px-3 py-2 text-white font-semibold bg-primary-100 cursor-pointer"
            onClick={() => openModal("login")}
          >
            <span className="text-base md:text-lg font-secondary  font-semibold">
              Write A Review
            </span>
            {ICONS.chat_icon}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
