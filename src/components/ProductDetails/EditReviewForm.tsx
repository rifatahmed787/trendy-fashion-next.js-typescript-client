import React, { useEffect, useState } from "react";
import useModal from "@/Hooks/useModal";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import ToastContainer from "../UI/Toast";
import ICONS from "../shared/Icons/AllIcons";
import { get_error_messages } from "@/lib/Error_message";
import TextArea from "../UI/Form-items/TextArea";
import { useAppSelector } from "@/Hooks/useRedux";
import RatingPicker from "../UI/Rating/RatingPicker";
import {
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
} from "@/Redux/features/review/reviewApi";
import { Button } from "../UI/Button";
import Paragraph from "../UI/Paragraph/Paragraph";

const EditReviewForm = (reviewId: any) => {
  const id = reviewId?.reviewId;
  const { onClose } = useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAppSelector((state) => state.auth);

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

  const { data: singleReviewData, isLoading } = useGetSingleReviewQuery(id);
  console.log(singleReviewData);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const [review_form, setReviewForm] = useState({
    rating: singleReviewData?.data?.rating as number,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await updateReview({
        id: id,
        data: {
          rating: review_form.rating,
          reviewText: data.reviewText,
        },
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  // Error and success handling
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
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [
    updateData?.message,
    updateError,
    isUpdateError,
    isUpdateSuccess,
    onClose,
  ]);

  return (
    <>
      <div className="w-4/5 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <Paragraph>Loading</Paragraph>
          ) : (
            <>
              <div className="mb-3">
                <RatingPicker
                  current_value={review_form.rating as number}
                  clickHandler={(value) =>
                    setReviewForm((prev) => ({
                      ...prev,
                      ["rating"]: Number(value),
                    }))
                  }
                />
              </div>
              <Controller
                name="reviewText"
                control={control}
                defaultValue={singleReviewData?.data?.reviewText}
                rules={{ required: "Please write something" }}
                render={({ field }) => (
                  <TextArea
                    label="Write your review!"
                    onChange={field.onChange}
                    currentValue={field.value}
                    placeHolder=""
                    id="textId"
                    htmlFor="textId"
                  />
                )}
              />
              {errors.reviewText && (
                <Paragraph className="text-red-500 text-sm">
                  {(errors.reviewText.message as string) ||
                    "Please write something"}
                </Paragraph>
              )}

              <Button
                type="submit"
                title="Submit"
                className=" bg-primary-100 w-full 
                          text-base font-semibold font-secondary text-white rounded my-10"
                icon={isUpdateLoading ? ICONS.button_loading_icon : undefined}
                isDisabled={isUpdateLoading}
              >
                Submit
              </Button>
            </>
          )}
        </form>
        {isAlertOpen && (
          <ToastContainer
            type={AlertType}
            messages={AlertMessages}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
            className="bottom-3"
          />
        )}
      </div>
    </>
  );
};

export default EditReviewForm;
