"use client";
import {
  useClearCartMutation,
  useGetCartProductsQuery,
} from "@/Redux/features/cart/cartApi";
import ShopSkeleton from "../ShopSkeleton/ShopSkeleton";
import CartCard from "@/components/UI/CartCard";
import Link from "next/link";
import BrandButton from "@/components/Button/PrimaryButton";
import { useEffect, useState } from "react";

import { ICart } from "@/Types/cart";
import useModal from "@/Hooks/useModal";
import { useAppSelector } from "@/Hooks/useRedux";
import ToastContainer from "@/components/UI/Toast";
import { get_error_messages } from "@/lib/Error_message";
import ICONS from "@/components/shared/Icons/AllIcons";
import { useCreatePaymentMutation } from "@/Redux/features/payment/paymentApi";

const Cart = () => {
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal } = useModal();
  const [
    clearCart,
    {
      data: clearCartData,
      isLoading: isClearCartLoading,
      isError: ClearcartIsError,
      error: ClearcartError,
      isSuccess,
    },
  ] = useClearCartMutation();

  const [createPayment] = useCreatePaymentMutation();

  const {
    data: Products,
    isError,
    isLoading,
    error,
  } = useGetCartProductsQuery({});
  const cart_list_data = Products?.data;

  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [shippingCost, setShippingCost] = useState(0);
  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  useEffect(() => {
    const shippingCost =
      selectedShipping === "expedited"
        ? 10.0
        : selectedShipping === "express"
        ? 8.0
        : 5.0;
    setShippingCost(shippingCost);
  }, [selectedShipping]);

  // Calculate the total cost of products in the cart
  const productsTotalCost =
    cart_list_data?.reduce(
      (
        total: number,
        product: {
          product: { productPrice: number };
          quantity: number;
        }
      ) => total + (product.product?.productPrice || 0) * product.quantity,
      0
    ) || 0;

  // Calculate the total cost including shipping cost
  const totalCostWithShipping = (productsTotalCost + shippingCost).toFixed(2);

  const handleShippingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShipping(e.target.value);
  };

  //clear cart handler
  const ClearCartHandler = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    isLoggedIn
      ? clearCart({
          userId: user?.id,
        })
      : openModal("login");
  };

  // payment handle
  const handlePaymentClick = async () => {
    try {
      const result = await createPayment({});

      if ("data" in result) {
        // Redirect the user to the obtained URL
        window.location.href = result.data.session.url;
      } else if ("error" in result) {
        console.error("Error creating payment:", result.error);
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error("Unexpected error creating payment:", error);
      // Handle unexpected error, show a message, etc.
    }
  };

  //error and success handlaing
  useEffect(() => {
    if (ClearcartIsError && ClearcartError && "data" in ClearcartError) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(ClearcartError);
      setAlertMessages(error_messages);
    } else if (isSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(clearCartData?.message);
    }
  }, [ClearcartError, ClearcartIsError, clearCartData?.message, isSuccess]);

  return (
    <div className={`pb-10 pt-1`}>
      {/* cart section */}
      <div className={``}>
        <div className="container mx-auto mt-10">
          <div className="flex flex-col lg:flex-row justify-center shadow-md my-10">
            {/* cart item shows here  */}
            <div className={`w-11/12  lg:w-3/4 px-10 py-10 bg-white`}>
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {cart_list_data?.length} Items{" "}
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              {/* book details */}
              <div className={`flex items-center  -mx-8 px-1 lg:px-6 py-5`}>
                <div className=" max-w-[1170px] mx-auto">
                  {isLoading ? (
                    ""
                  ) : (
                    <>
                      {" "}
                      {cart_list_data?.length > 0 ? (
                        ""
                      ) : (
                        <>
                          <h1 className={`text-xl text-center font-bold h-96`}>
                            Cart is <span className="text-primary">Empty!</span>
                          </h1>
                        </>
                      )}
                    </>
                  )}

                  {isLoading ? (
                    <ShopSkeleton />
                  ) : (
                    <>
                      {!isError &&
                        !error &&
                        cart_list_data?.length > 0 &&
                        [...cart_list_data]
                          .sort((a: ICart, b: ICart) => a.id - b.id)
                          .map((product: ICart) => {
                            return (
                              <div
                                key={product.id}
                                className={`mt-8 cursor-pointer`}
                              >
                                <CartCard product={product} />
                              </div>
                            );
                          })}
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center mt-10 max-h-full">
                <Link href="/products" className="flex font-semibold text-sm">
                  <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512">
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
                <div>
                  {cart_list_data?.length > 0 ? (
                    <>
                      <button
                        className="font-semibold hover:text-red-500 text-sm flex items-center pr-0 md:pr-12"
                        onClick={ClearCartHandler}
                      >
                        Clear Cart
                        {isClearCartLoading ? ICONS.button_loading_icon : ""}
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            {/* order summary starts from here */}
            <div
              id="summary"
              className="w-11/12 lg:w-1/4 px-8 mx-auto py-10 bg-gray-100"
            >
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart_list_data?.length}
                </span>
                <span className="font-semibold text-sm">
                  ${productsTotalCost.toFixed(2)}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select
                  onChange={handleShippingChange}
                  value={selectedShipping}
                  className="block p-2 text-gray-600 w-full text-sm"
                >
                  <option value="expedited">
                    Expedited Shipping(1day) - $10.00
                  </option>
                  <option value="express">
                    Express Shipping(2days) - $8.00
                  </option>
                  <option value="standard">
                    Standard shipping(5days) - $5.00
                  </option>
                </select>
              </div>
              <div className="pt-10 pb-3">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              {/* button for apply  */}
              <BrandButton text="Apply" icon="" />
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${totalCostWithShipping}</span>
                </div>
                <div>
                  <button
                    onClick={handlePaymentClick}
                    className="bg-primary-100 duration-500 py-3 text-base font-semibold title uppercase w-full"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
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
          className="absolute  top-0 z-50 left-0 right-0 mx-auto flex justify-center"
        />
      )}
    </div>
  );
};

export default Cart;
