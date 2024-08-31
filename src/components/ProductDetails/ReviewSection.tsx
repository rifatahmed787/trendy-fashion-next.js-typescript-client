import React, { useCallback, useEffect, useState } from "react";
import { IProduct } from "@/Types/products";
import { IProductReview } from "@/Types/review";
import Image from "next/image";
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
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import { Button } from "../UI/Button";
import EditReviewForm from "./EditReviewForm";

const ReviewSection = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal, onClose, isOpen } = useModal();
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const [reviewId, setReviewId] = useState<number | null>(null);
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

  const reviewDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (reviewId) {
      deleteReview(reviewId);
    }
  };

  const openEditModal = (reviewId: number) => {
    setReviewId(reviewId);
    openModal("editReview");
  };
  const openDeleteModal = (reviewId: number) => {
    setReviewId(reviewId);
    openModal("delete");
  };

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
      onClose();
    }
  }, [
    deleteData?.message,
    deleteError,
    isDeleteError,
    isDeleteSuccess,
    onClose,
  ]);

  return (
    <section>
      {" "}
      <div className="relative h-[450px] overflow-auto custom-scrollbar">
        {product_details?.productReviews &&
        product_details.productReviews.length > 0 ? (
          <>
            {product_details?.productReviews?.map((review: IProductReview) => (
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
                      <h4 className="font-bold">
                        {review?.reviewer?.username}
                      </h4>
                      <span className="text-xs ">
                        {formatTimestamp(review.createdAt)}
                      </span>
                    </div>
                  </div>
                  {user?.id == review?.reviewerId && (
                    <>
                      <Dropdown>
                        <p
                          onClick={() => openEditModal(review.id)}
                          className="cursor-pointer py-1.5 font-semibold font-secondary"
                        >
                          Edit
                        </p>
                        <p
                          onClick={() => openDeleteModal(review.id)}
                          className="cursor-pointer py-1.5 font-semibold font-secondary"
                        >
                          Delete
                        </p>
                      </Dropdown>
                      {/* Review edit modal */}
                      <Modal isOpen={isOpen("editReview")} onClose={onClose}>
                        <ModalBody>
                          <ModalHeader title="Edit Review" onClose={onClose} />
                          <EditReviewForm reviewId={reviewId}/>
                        </ModalBody>
                      </Modal>

                      {/* Review delete modal */}
                      <Modal isOpen={isOpen("delete")} onClose={onClose}>
                        <ModalBody className="w-11/12 md:w-3/4 lg:w-1/4">
                          <ModalHeader title="Delete" onClose={onClose} />
                          <Paragraph className="text-center">
                            Are you sure you want to delete this <b>Review</b>?
                          </Paragraph>
                          <div className="pt-5 flex justify-center items-center gap-3">
                            <Button
                              className="border border-primary-100"
                              onClick={onClose}
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={reviewDeleteHandler}
                              className="bg-red-500 text-white"
                              icon={
                                isDeleteLoading
                                  ? ICONS.button_loading_icon
                                  : undefined
                              }
                              isDisabled={isDeleteLoading}
                            >
                              Delete
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
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
    </section>
  );
};

export default ReviewSection;
