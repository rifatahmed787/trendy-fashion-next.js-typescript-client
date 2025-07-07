"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/Types/products";
import Link from "next/link";
import Ratings from "../UI/Rating/Rating";
import ICONS from "../shared/Icons/AllIcons";
import Image from "next/image";
import { useAppSelector } from "@/Hooks/useRedux";
import { useAddProductInWishMutation } from "@/Redux/features/wishlist/wishApi";
import { useAddToCartMutation } from "@/Redux/features/cart/cartApi";
import { get_error_messages } from "@/lib/Error_message";
import useModal from "@/Hooks/useModal";
import ToastContainer from "../UI/Toast";
import AddReviewModal from "./AddReviewModal";
import { MultiSelect } from "../UI/MultiSelector/MultiSelect";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// const FormSchema = z.object({
//   frameworks: z
//     .array(z.string().min(1))
//     .min(1)
//     .nonempty("Please select at least one framework."),
// });

const ProductDetail = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  const [largeImage, setLargeImage] = useState<string | undefined>(
    product_details?.productImages
      ? product_details?.productImages[0]
      : undefined
  );
  const { openModal } = useModal();

  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const [color, setColor] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);

  // color options
  const [colorSelectedOptions, setColorSelectedOptions] = useState<string[]>(
    []
  );
  const colorOptions =
    product_details?.productColors?.map((color) => ({
      label: color,
      value: color,
    })) || [];
  // sizes options
  const [sizesSelectedOptions, setSizesSelectedOptions] = useState<string[]>(
    []
  );
  const sizesOptions =
    product_details?.productSizes?.map((size) => ({
      label: size,
      value: size,
    })) || [];

  useEffect(() => {
    setColor(colorSelectedOptions);
    setSize(sizesSelectedOptions);
  }, [colorSelectedOptions, sizesSelectedOptions]);
  // add in wish mutation hook
  const [
    addProductInWish,
    {
      data: addToWishData,
      isLoading: isAddToWisLoading,
      isError,
      error,
      isSuccess,
    },
  ] = useAddProductInWishMutation();

  const [
    addProductInCart,
    {
      data: addToCart,
      isLoading: cartIsLoading,
      isError: cartIsError,
      error: cartError,
      isSuccess: cartIsSuccess,
    },
  ] = useAddToCartMutation();

  //wishListHandler
  const wishListHandler = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    isLoggedIn
      ? addProductInWish({
          productId: product_details?.id,
          userId: user?.id,
        })
      : openModal("login");
  };

  const addCardHandler = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    isLoggedIn
      ? addProductInCart({
          productId: product_details?.id,
          userId: user?.id,
          productSize: size,
          productColor: color,
        })
      : openModal("login");
  };

  useEffect(() => {
    if (product_details?.productImages) {
      setLargeImage(product_details?.productImages[0]);
    }
  }, [product_details]);

  //error and success handling
  useEffect(() => {
    if (isError && error && "data" in error) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(error);
      setAlertMessages(error_messages);
    } else if (isSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(addToWishData?.message);
    }
  }, [addToWishData?.message, error, isError, isSuccess]);

  useEffect(() => {
    if (cartIsError && cartError && "data" in cartError) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(cartError);
      setAlertMessages(error_messages);
    } else if (cartIsSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(addToCart?.message);
    }
  }, [addToCart?.message, cartError, cartIsError, cartIsSuccess]);

  return (
    <>
      <div className=" my-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-8">
            <Zoom>
              <Image
                className="w-full h-[300px] md:h-[500px] rounded-lg bg-contain mx-auto"
                src={
                  largeImage ||
                  (product_details?.productImages
                    ? product_details?.productImages[0]
                    : "")
                }
                alt={`${product_details?.productName}`}
                width={100}
                height={100}
                quality={100}
                unoptimized={false}
              />
            </Zoom>

            {product_details?.productImages &&
            product_details?.productImages.length > 1 ? (
              <div className="grid grid-cols-4 gap-3 mt-4 justify-items-center items-center">
                {product_details?.productImages
                  .slice(0, 4)
                  ?.map((img, index) => (
                    <div key={index}>
                      <Image
                        onClick={() => setLargeImage(img)}
                        className={`rounded-lg cursor-pointer w-16 h-16 md:w-24 md:h-24 ${
                          largeImage === img
                            ? "border-4 p-2 border-primary-100"
                            : "border p-2"
                        }`}
                        src={img}
                        alt={`${product_details?.productName} ${index + 1}`}
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
              </div>
            ) : null}
          </div>

          <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-5">
            <h2 className="text-sm text-gray-500 tracking-widest font-secondary">
              ON SALE
            </h2>
            <h1 className="text-gray-900 text-3xl font-bold mb-1 font-primary">
              {product_details?.productName}
            </h1>
            <div className="flex mb-4">
              <p className="flex items-center">
                <Ratings
                  starClassName="w-4 h-4 lg:w-5 lg:h-5"
                  ratings={product_details?.productRating || 0}
                />
                <span className="text-gray-600 ml-3 pl-3 py-2 border-l-2 font-semibold text-xl font-primary">
                  {product_details?.productReviews?.length ? (
                    <>
                      {product_details?.productReviews?.length}{" "}
                      {product_details?.productReviews?.length === 1
                        ? "review"
                        : "reviews"}
                    </>
                  ) : (
                    "No reviews"
                  )}
                </span>
              </p>
              <span className="flex items-center ml-3 pl-3 gap-1 py-2 border-l-2 border-gray-200 space-x-2s">
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
            <p className="text-base font-secondary">
              {product_details?.productDetails}
            </p>
            <div className="flex gap-5 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <MultiSelect
                options={colorOptions}
                onValueChange={(selectedColors) =>
                  setColorSelectedOptions(selectedColors)
                }
                defaultValue={colorSelectedOptions}
                placeholder="Select Colors"
                variant="inverted"
                animation={1}
                maxCount={10}
              />
              <MultiSelect
                options={sizesOptions}
                onValueChange={(selectedSizes) =>
                  setSizesSelectedOptions(selectedSizes)
                }
                defaultValue={sizesSelectedOptions}
                placeholder="Select Sizes"
                variant="inverted"
                animation={1}
                maxCount={10}
              />
            </div>

            <div className="flex justify-between">
              <div>
                <span className="font-bold font-primary text-2xl md:text-5xl py-5 text-gray-900">
                  $ {product_details?.productPrice}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={addCardHandler}
                  className="bg-primary-100 px-3 py-2"
                >
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-semibold text-base md:text-lg">
                      Add To Cart
                    </span>
                    {cartIsLoading ? (
                      ICONS.button_loading_icon
                    ) : (
                      <Icon icon="mdi:cart-outline" width={20} />
                    )}
                  </div>
                </button>
                <button
                  onClick={wishListHandler}
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  {isAddToWisLoading
                    ? ICONS.button_loading_icon
                    : ICONS.heart_fill_icon}
                </button>
              </div>
            </div>

            {/* Review modal */}
            <AddReviewModal product_details={product_details} />
          </div>
        </div>
      </div>
      {/* Toast */}
      {isAlertOpen && (
        <ToastContainer
          type={AlertType}
          messages={AlertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          className="bottom-3"
        />
      )}
    </>
  );
};

export default ProductDetail;
