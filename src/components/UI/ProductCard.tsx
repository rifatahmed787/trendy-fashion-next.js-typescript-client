import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { IProduct } from "@/Types/products";
import Ratings from "./Rating/Rating";
import Link from "next/link";
import { useAddProductInWishMutation } from "@/Redux/features/wishlist/wishApi";
import ToastContainer from "./Toast";
import { get_error_messages } from "@/lib/Error_message";
import { useAppSelector } from "@/Hooks/useRedux";
import useModal from "@/Hooks/useModal";
import ICONS from "../shared/Icons/AllIcons";
import { useAddToCartMutation } from "@/Redux/features/cart/cartApi";

const ProductCard = ({ product }: { product: IProduct }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useModal();
  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

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
          productId: product?.id,
          userId: user?.id,
        })
      : openModal("login");
  };

  const addCardHandler = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    isLoggedIn
      ? addProductInCart({
          productId: product?.id,
          userId: user?.id,
        })
      : openModal("login");
  };

  //error and success handlaing
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
            <button
              onClick={addCardHandler}
              className="relative inline-flex items-center justify-center w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out button-group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-5 bg-primary-200 first-span ease">
                {cartIsLoading ? (
                  ICONS.button_loading_icon
                ) : (
                  <Icon icon="mdi:cart-heart" width={20} />
                )}
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform second-span ease bg-gray-800 title">
                Add To Cart
              </span>
              <span className="relative invisible ">Add To Cart</span>
            </button>
          </div>
          <div className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm">
            {product?.quantity > 0 ? (
              <>
                <h5 className="bg-primary-100 rounded-full px-2 py-0.5 font-semibold title">
                  In Stock
                </h5>
              </>
            ) : (
              <>
                <h5 className="bg-red-500 text-white rounded-full px-2 py-0.5 font-semibold title">
                  Stock Out
                </h5>
              </>
            )}
          </div>
          <div className="absolute right-2 top-0">
            <button onClick={wishListHandler}>
              {" "}
              {isAddToWisLoading ? (
                ICONS.button_loading_icon
              ) : (
                <Icon
                  icon="mdi:heart-outline"
                  className="cursor-pointer rounded-full p-1 hover:text-primary-100"
                  width={35}
                />
              )}
            </button>

            <Icon
              icon="iconamoon:restart-fill"
              className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-200 hover:text-primary-100 group-hover:translate-x-0"
              width={28}
            />
            <Link href={`/products/productdetails/${product?.id}`}>
              <Icon
                icon="basil:eye-outline"
                className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 hover:text-primary-100 group-hover:translate-x-0"
                width={28}
              />
            </Link>
          </div>
        </div>
        <h2 className="mt-3 text-xl capitalize title">
          {product?.productName}
        </h2>

        <div className="flex gap-5 items-center">
          <del className="text-sm text-red-700">${product?.oldPrice}</del>
          <Ratings
            starClassName="w-4 h-4 lg:w-5 lg:h-5"
            ratings={product?.productRating || 0}
          />
        </div>
        <p className="ml-1 mt-2 inline-block text-lg font-bold text-gray-700">
          ${product?.productPrice}
        </p>
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
    </>
  );
};

export default ProductCard;
