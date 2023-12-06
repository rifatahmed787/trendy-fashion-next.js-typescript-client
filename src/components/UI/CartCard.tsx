import useModal from "@/Hooks/useModal";
import { useAppSelector } from "@/Hooks/useRedux";
import {
  useRemoveCartMutation,
  useUpdateCartMutation,
} from "@/Redux/features/cart/cartApi";
import { get_error_messages } from "@/lib/Error_message";
import Image from "next/image";
import { useEffect, useState } from "react";
import Ratings from "./Rating/Rating";
import ICONS from "../shared/Icons/AllIcons";
import ToastContainer from "./Toast";
import { ICart } from "@/Types/cart";

const CartCard = ({ product }: { product?: ICart }) => {
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal } = useModal();
  const [quantity, setQuantity] = useState<number>(product?.quantity ?? 1);

  const [updateCartMutation] = useUpdateCartMutation();

  // Handle quantity change
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);

    // Call the mutation with the updated quantity
    updateCartMutation({
      cartId: product?.id,
      quantity: newQuantity,
    });
  };

  const increaseQuantity = () => {
    handleQuantityChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  // delete from cart mutation hook
  const [
    deleteProductFromCart,
    {
      data: removeFromCartData,
      isLoading: isRemoveCartLoading,
      isError,
      error,
      isSuccess,
    },
  ] = useRemoveCartMutation();

  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  //cart remove Handler
  const CartRemoveHandler = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    isLoggedIn
      ? deleteProductFromCart({
          id: product?.id,
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
      setAlertMessages(removeFromCartData?.message);
    }
  }, [error, isError, isSuccess, removeFromCartData?.message]);

  return (
    <div
      className=" w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 "
      key={product?.id}
    >
      <div className="flex ">
        <div className="">
          <Image
            width={100}
            height={100}
            className="h-28 w-28"
            src={product?.product?.productImage[0] || ""}
            alt="product image"
          />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">
            {product?.product?.productName}
          </span>
          <span className="font-bold text-sm py-3">
            {" "}
            <Ratings
              starClassName="w-4 h-4 lg:w-5 lg:h-5"
              ratings={product?.product.productRating || 0}
            />
          </span>
          <button
            className="font-semibold hover:text-red-500 text-gray-500 text-xs flex items-center"
            onClick={CartRemoveHandler}
          >
            Remove
            {isRemoveCartLoading ? ICONS.button_loading_icon : ""}
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button onClick={decreaseQuantity}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <input
          className="mx-2 border text-center w-8 px-1 text-black"
          type="text"
          value={quantity}
          readOnly
        />
        <button onClick={increaseQuantity}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <div className="flex sm:gap-5 md:gap-24">
        {" "}
        <span className="text-center w-1/4 font-semibold text-sm flex justify-center items-center">
          $ {product?.product?.productPrice}
        </span>
        <span className="text-center w-1/4 font-semibold text-sm flex justify-center items-center">
          $ {((product?.product?.productPrice || 1) * quantity).toFixed(2)}
        </span>
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

export default CartCard;
