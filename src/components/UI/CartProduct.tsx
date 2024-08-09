import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "@/Types/products";
import Ratings from "./Rating/Rating";
import Link from "next/link";
import {
  useAddProductInWishMutation,
  useGetWishListQuery,
} from "@/Redux/features/wishlist/wishApi";
import { useAppSelector } from "@/Hooks/useRedux";
import useModal from "@/Hooks/useModal";
import { get_error_messages } from "@/lib/Error_message";
import ToastContainer from "./Toast";
import ICONS from "../shared/Icons/AllIcons";
import { useAddToCartMutation } from "@/Redux/features/cart/cartApi";
import { LuHeart } from "react-icons/lu";
import { IoIosHeart } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartProduct = ({ product }: { product: IProduct }) => {
  const [wishHover, setWishHover] = useState(false);
  const [compareHover, setCompareHover] = useState(false);
  const [detailsHover, setDetailsHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useModal();
  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  const { data: wishProducts, isLoading: wishProductLoading } =
    useGetWishListQuery({});

  const wish_list_data = wishProducts?.data;

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
  //error and success handlaing
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
            className={`h-60 w-full object-contain transition-transform duration-500 ${
              isHovered
                ? "transform scale-110 opacity-80 duration-700"
                : "transform-none opacity-100"
            }`}
            src={product?.productImages[isHovered ? 1 : 0]}
            alt={product?.productName}
          />

          <div className="absolute -bottom-14 flex w-full transition-all duration-300 group-hover:bottom-0 ">
            <button
              onClick={addCardHandler}
              className="relative inline-flex items-center justify-center w-full py-5 overflow-hidden font-medium text-white transition duration-300 ease-out button-group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-5 bg-primary-200 first-span ease">
                {cartIsLoading ? (
                  ICONS.button_loading_icon
                ) : (
                  <MdOutlineShoppingCart className="text-2xl" />
                )}
              </span>
              <span className="absolute text-xl font-secondary flex items-center justify-center w-full h-full text-white transition-all duration-300 transform second-span ease bg-gray-800">
                {cartIsLoading ? ICONS.button_loading_icon : <>Add To Cart</>}
              </span>
            </button>
          </div>
          <div className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm">
            {product?.stockOut ? (
              <>
                <h5 className="bg-red-500 text-white rounded-full px-2 py-0.5 font-semibold title">
                  Stock Out
                </h5>
              </>
            ) : (
              <>
                <h5 className="bg-primary-100 text-white rounded-full px-2 py-0.5 font-semibold title">
                  In Stock
                </h5>
              </>
            )}
          </div>
          <div className="absolute right-2 top-2">
            <button onClick={wishListHandler}>
              {isAddToWisLoading ? (
                ICONS.button_loading_icon
              ) : (
                <>
                  {wishProductLoading ? (
                    ICONS.button_loading_icon
                  ) : (
                    <>
                      {wish_list_data &&
                      wish_list_data.some(
                        (item: { productId: number | undefined }) =>
                          item.productId === product.id
                      ) ? (
                        <div className="flex items-center gap-1 relative">
                          <p
                            className={`absolute z-10 top-0 bottom-0 flex items-center ${
                              wishHover
                                ? "-translate-x-0 z-0 duration-500 right-8"
                                : "translate-x-full mr-12"
                            }`}
                          >
                            <span className="text-sm  text-gray-50  bg-primary-100 px-3 py-0.5">
                              WishList
                            </span>
                            <span className="w-4 h-4 bg-gray-300 rotate-45 -ml-2"></span>
                          </p>
                          <p className="p-1  z-20 rounded-full bg-primary-100 text-gray-200 hover:text-gray-50">
                            <IoIosHeart
                              onMouseEnter={() => setWishHover(true)}
                              onMouseLeave={() => setWishHover(false)}
                              onClick={wishListHandler}
                              className="cursor-pointer text-xl "
                            />
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 relative">
                          <p
                            className={`absolute z-10 top-0 bottom-0 flex items-center ${
                              wishHover
                                ? "-translate-x-0 duration-500 right-8"
                                : "translate-x-full mr-14"
                            }`}
                          >
                            <span className="text-sm  text-gray-50  bg-primary-100 pl-2 pr-4 py-0.5">
                              WishList
                            </span>
                            <span className="w-4 h-4 bg-gray-300 rotate-45 -ml-2"></span>
                          </p>

                          <p className="p-1 z-20 rounded-full bg-[#ececec] text-primary-100">
                            <LuHeart
                              onMouseEnter={() => setWishHover(true)}
                              onMouseLeave={() => setWishHover(false)}
                              onClick={wishListHandler}
                              className="cursor-pointer text-xl "
                            />
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </button>

            <div className="flex items-center gap-1 relative">
              <p
                className={`absolute z-10 top-0 bottom-0 flex items-center ${
                  compareHover
                    ? "-translate-x-0 duration-500 right-8"
                    : "translate-x-full mr-14"
                }`}
              >
                <span className="text-sm  text-gray-50  bg-primary-100 pl-2 pr-4 py-0.5">
                  Compare
                </span>
                <span className="w-4 h-4 bg-gray-300 rotate-45 -ml-2"></span>
              </p>

              <Link
                href={"/"}
                className="relative z-20  cursor-pointer rounded-full bg-[#ececec] my-2  p-1 translate-x-10 duration-300 text-primary-100 group-hover:translate-x-0"
              >
                <GoGitCompare
                  onMouseEnter={() => setCompareHover(true)}
                  onMouseLeave={() => setCompareHover(false)}
                  className="text-xl"
                />
              </Link>
            </div>
            <div className="flex items-center gap-1 relative">
              <p
                className={`absolute z-10 top-0 bottom-0 flex items-center ${
                  detailsHover
                    ? "-translate-x-0 duration-500 right-8"
                    : "translate-x-full mr-12"
                }`}
              >
                <span className="text-sm  text-gray-50  bg-primary-100 pl-2 pr-4 py-0.5">
                  Details
                </span>
                <span className="w-4 h-4 bg-gray-300 rotate-45 -ml-2"></span>
              </p>

              <Link
                href={`/products/productdetails/${product?.id}`}
                className="my-2 relative z-20 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 text-primary-100 group-hover:translate-x-0"
              >
                <IoEyeOutline
                  onMouseEnter={() => setDetailsHover(true)}
                  onMouseLeave={() => setDetailsHover(false)}
                  className=" text-xl"
                />
              </Link>
            </div>
          </div>
        </div>
        <h4 className="mt-2 pl-3 text-2xl font-secondary capitalize text-primary-100">
          {product?.productName.slice(0, 16)}..
        </h4>

        <div className="flex gap-5 items-center mt-2 pl-3">
          <del className="text-base font-semibold text-red-700">
            $ {product?.oldPrice}
          </del>
          <Ratings
            starClassName="w-4 h-4 lg:w-5 lg:h-5"
            ratings={product?.productRating || 0}
          />
        </div>
        <p className="pl-3 inline-block text-lg font-bold text-gray-700">
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
        />
      )}
    </>
  );
};

export default CartProduct;
