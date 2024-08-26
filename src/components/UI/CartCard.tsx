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
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import Paragraph from "./Paragraph/Paragraph";
import { Button } from "./Button";
import { MultiSelect } from "./MultiSelector/MultiSelect";
import { RxCross2 } from "react-icons/rx";

const CartCard = ({ product }: { product?: ICart }) => {
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const { openModal, onClose, isOpen } = useModal();
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

  const [color, setColor] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);

  // color options
  const [colorSelectedOptions, setColorSelectedOptions] = useState<string[]>(
    []
  );
  const colorOptions =
    product?.product?.productColors?.map((color) => ({
      label: color,
      value: color,
    })) || [];
  // sizes options
  const [sizesSelectedOptions, setSizesSelectedOptions] = useState<string[]>(
    []
  );
  const sizesOptions =
    product?.product?.productSizes?.map((size) => ({
      label: size,
      value: size,
    })) || [];

  useEffect(() => {
    setColor(colorSelectedOptions);
    setSize(sizesSelectedOptions);
  }, [colorSelectedOptions, sizesSelectedOptions]);

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
      onClose();
    }
  }, [error, isError, isSuccess, onClose, removeFromCartData?.message]);

  return (
    <div key={product?.id}>
      <div className="hidden lg:block">
        <div className="flex items-center lg:gap-5 border border-gray-300 hover:border-primary-100 duration-500 rounded-xl p-2">
          <div className="flex w-2/5">
            <Image
              width={100}
              height={100}
              className="h-32 w-32 rounded-xl"
              src={product?.product?.productImages[0] || ""}
              alt="product image"
            />

            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">
                {product?.product?.productName}
              </span>
              <span className="font-bold text-sm py-1">
                {" "}
                <Ratings
                  starClassName="w-4 h-4 lg:w-5 lg:h-5"
                  ratings={product?.product.productRating || 0}
                />
              </span>
              <div className="flex items-center">
                <button onClick={decreaseQuantity}>
                  <svg
                    className="fill-current text-red-600 w-3"
                    viewBox="0 0 448 512"
                  >
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
                  <svg
                    className="fill-current text-primary-100 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <button
                className="font-semibold hover:text-red-500 text-gray-500 text-xs flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  openModal("cartDelete");
                }}
              >
                Remove
              </button>
              <Modal isOpen={isOpen("cartDelete")} onClose={onClose}>
                <ModalBody className="w-11/12 md:w-3/4 lg:w-1/4">
                  <ModalHeader title="Cart Delete" onClose={onClose} />
                  <Paragraph className="text-center">
                    Are you sure you want to delete this <b>Cart</b>?
                  </Paragraph>
                  <div className="pt-5 flex justify-center items-center gap-3">
                    <Button
                      className="border border-primary-100"
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={CartRemoveHandler}
                      className="bg-red-500 text-white"
                      icon={
                        isRemoveCartLoading
                          ? ICONS.button_loading_icon
                          : undefined
                      }
                      isDisabled={isRemoveCartLoading}
                    >
                      Delete
                    </Button>
                  </div>
                </ModalBody>
              </Modal>
            </div>
          </div>

          <div className="w-1/5 flex justify-center">
            <MultiSelect
              options={colorOptions}
              onValueChange={(selectedColors) =>
                setColorSelectedOptions(selectedColors)
              }
              defaultValue={
                product?.productColor && product.productColor.length > 0
                  ? product.productColor
                  : colorSelectedOptions
              }
              placeholder="Select Colors"
              variant="inverted"
              animation={1}
              maxCount={10}
              className="w-36"
            />
          </div>
          <div className="w-1/5 flex justify-center">
            <MultiSelect
              options={sizesOptions}
              onValueChange={(selectedSizes) =>
                setSizesSelectedOptions(selectedSizes)
              }
              defaultValue={
                product?.productSize && product?.productSize?.length > 0
                  ? product?.productSize
                  : sizesSelectedOptions
              }
              placeholder="Select Sizes"
              variant="inverted"
              animation={1}
              maxCount={10}
              className="w-36"
            />
          </div>
          <div className="w-1/5 flex justify-center">
            {" "}
            <span className=" font-semibold text-sm flex items-center">
              $ {product?.product?.productPrice}
            </span>
          </div>
          <div className="w-1/5 flex justify-center">
            <span className="font-semibold text-sm flex items-center">
              $ {((product?.product?.productPrice || 1) * quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* md and sm device */}
      <div className="block lg:hidden">
        <div className="relative flex items-center lg:gap-5 border border-gray-300 hover:border-primary-100 duration-500 rounded-xl p-2">
          <div className="flex">
            <Image
              width={100}
              height={100}
              className="h-36 w-32 rounded-xl"
              src={product?.product?.productImages[0] || ""}
              alt="product image"
            />

            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">
                {product?.product?.productName}
              </span>
              <div className="flex justify-between">
                <span className="font-bold text-base py-1">
                  ${product?.product?.productPrice}
                </span>
                <div className="flex items-center">
                  <button onClick={decreaseQuantity}>
                    <svg
                      className="fill-current text-red-600 w-3"
                      viewBox="0 0 448 512"
                    >
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
                    <svg
                      className="fill-current text-primary-100 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                className="absolute top-2 right-2 border rounded-full border-red-600"
                onClick={(e) => {
                  e.preventDefault();
                  openModal("cartDelete");
                }}
              >
                <RxCross2 className="text-xl text-red-600" />
              </button>
              <Modal isOpen={isOpen("cartDelete")} onClose={onClose}>
                <ModalBody className="w-11/12 md:w-3/4 lg:w-1/4">
                  <ModalHeader title="Cart Delete" onClose={onClose} />
                  <Paragraph className="text-center">
                    Are you sure you want to delete this <b>Cart</b>?
                  </Paragraph>
                  <div className="pt-5 flex justify-center items-center gap-3">
                    <Button
                      className="border border-primary-100"
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={CartRemoveHandler}
                      className="bg-red-500 text-white"
                      icon={
                        isRemoveCartLoading
                          ? ICONS.button_loading_icon
                          : undefined
                      }
                      isDisabled={isRemoveCartLoading}
                    >
                      Delete
                    </Button>
                  </div>
                </ModalBody>
              </Modal>
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
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
                  className="w-36"
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
                  className="w-36"
                />
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

export default CartCard;
