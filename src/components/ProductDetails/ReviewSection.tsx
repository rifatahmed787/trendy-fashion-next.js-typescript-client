"client";
import { IProduct } from "@/Types/products";
import { IProductReview } from "@/Types/review";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Ratings from "../UI/Rating/Rating";
import SubTitle from "../UI/SubTitle/SubTitle";
import Paragraph from "../UI/Paragraph/Paragraph";
import ICONS from "../shared/Icons/AllIcons";
import { useAppSelector } from "@/Hooks/useRedux";
import useModal from "@/Hooks/useModal";
import Dropdown from "../UI/Dropdown";
import {
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} from "@/Redux/features/review/reviewApi";
import { get_error_messages } from "@/lib/Error_message";
import ToastContainer from "../UI/Toast";
import DeleteModal from "../UI/DeleteModal";

const ReviewSection = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal, onClose } = useModal();
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const [
    updateReview,
    {
      data: updateData,
      isError: isUpdateError,
      error: updateError,
      isSuccess: isUpdateSuccess,
      isLoading: isUpdateLoading,
    },
  ] = useUpdateReviewMutation();

  const [
    deleteReview,
    {
      data: deleteData,
      isError: isDeleteError,
      error: deleteError,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
    },
  ] = useDeleteReviewMutation();

  const reviewDeleteHandler = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    deleteReview({
      id: product_details?.id,
    });
  };

  //error and success handlaing
  useEffect(() => {
    if (isDeleteError && deleteError && "data" in deleteError) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(deleteError);
      setAlertMessages(error_messages);
    } else if (isDeleteSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(deleteData?.message);
      onClose()
    }
  }, [deleteData?.message, deleteError, isDeleteError, isDeleteSuccess, onClose]);
  useEffect(() => {
    if (isUpdateError && updateError && "data" in updateError) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(updateError);
      setAlertMessages(error_messages);
    } else if (isUpdateSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(updateData?.message);
    }
  }, [updateData?.message, updateError, isUpdateError, isUpdateSuccess]);

  return (
    <div className="relative h-[450px] overflow-auto custom-scrollbar">
      {product_details?.productReviews &&
      product_details.productReviews.length > 0 ? (
        <>
          {product_details.productReviews.map((review: IProductReview) => (
            <div
              key={review.id}
              className="container flex flex-col w-full max-w-6xl p-6 mx-auto divide-y rounded-md "
            >
              <div className="flex items-center justify-between">
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
                {user?.id && isLoggedIn && (
                  <>
                    <Dropdown>
                      <p className="cursor-pointer py-1.5 font-semibold font-secondary">
                        Edit
                      </p>
                      <p onClick={() => openModal("delete")} className="cursor-pointer py-1.5 font-semibold font-secondary">
                        Delete
                      </p>
                    </Dropdown>
                    {product_details && <DeleteModal deleteHandler={reviewDeleteHandler} Loading={isDeleteLoading} />}
                  </>
                )}
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

      <div className="sticky bottom-0 bg-white p-6 w-full">
        {user?.id && isLoggedIn ? (
          <button
            className="flex items-center gap-2 px-3 py-2 text-white font-semibold bg-primary-100 cursor-pointer"
            onClick={() => openModal("review")}
          >
            <span className="text-base md:text-lg font-secondary text-white font-semibold ">
              Write A Review
            </span>
            {ICONS.chat_icon}
          </button>
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
      {/* Toast */}
      {isAlertOpen && (
        <ToastContainer
          type={AlertType}
          messages={AlertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          className="absolute  top-0 z-50 left-0 right-0 mx-auto flex justify-center"
        />
      )}
    </div>
  );
};

export default ReviewSection;
