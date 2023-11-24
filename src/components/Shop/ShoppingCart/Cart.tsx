"use client";
import { useGetCartProductsQuery } from "@/Redux/features/cart/cartApi";
import ShopSkeleton from "../ShopSkeleton/ShopSkeleton";
import { IWish } from "@/Types/wish";
import CartCard from "@/components/UI/CartCard";
import Link from "next/link";
import BrandButton from "@/components/Button/PrimaryButton";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  quantity: number;
  product: {
    productPrice: number;
  };
}

const Cart = () => {
  const {
    data: Products,
    isError,
    isLoading,
    error,
  } = useGetCartProductsQuery({});
  const cart_list_data = Products?.data;
  const [cartData, setCartData] = useState<Product[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState("standard");

  // Update cartData when Products changes
  useEffect(() => {
    if (cart_list_data) {
      setCartData(cart_list_data);
    }
  }, [cart_list_data]);

  useEffect(() => {
    let newTotalCost = 0;

    // Calculate the total cost based on the current quantities
    (cartData || []).forEach((product) => {
      const itemCost = (product.product?.productPrice || 0) * product.quantity;
      newTotalCost += itemCost;
    });

    // Update the total cost state
    setTotalCost(newTotalCost || 0);
  }, [cartData]);

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = (cartData || []).map((product) => {
      if (product.id === productId) {
        // Update the quantity for the specific product
        return { ...product, quantity };
      }
      return product;
    });

    // Update the total cost state based on the updated cart
    let newTotalCost = 0;
    updatedCart.forEach((product) => {
      const itemCost = (product.product?.productPrice || 0) * product.quantity;
      newTotalCost += itemCost;
    });

    // Update the total cost state
    setTotalCost(newTotalCost || 0);

    // Update the cartData state
    setCartData(updatedCart);
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Update the selected shipping option
    setSelectedShipping(e.target.value);
  };

  // Calculate shipping cost based on the selected shipping option
  const shippingCost =
    selectedShipping === "expedited"
      ? 10.0
      : selectedShipping === "express"
      ? 8.0
      : 5.0;

  // Calculate the final total cost including shipping
  const finalTotalCost = totalCost + shippingCost;

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
                          <h1 className={`text-xl text-center font-bold `}>
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
                        cart_list_data.map((product: IWish) => {
                          return (
                            <div
                              key={product.id}
                              className={`mt-8 cursor-pointer`}
                            >
                              <CartCard
                                product={product}
                                updateQuantity={updateQuantity}
                              />
                            </div>
                          );
                        })}
                    </>
                  )}
                </div>
              </div>

              <Link
                href="/products"
                className="flex font-semibold text-primary text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-primary w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            {/* order summary starts from here */}
            <div
              id="summary"
              className="w-11/12 lg:w-1/4 px-8 py-10 bg-gray-100"
            >
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart_list_data?.length}
                </span>
                <span className="font-semibold text-sm">
                  ${totalCost.toFixed(2)}
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
              <div className="py-10">
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
                  <span>${finalTotalCost.toFixed(2)}</span>
                </div>
                <Link href="/checkout">
                  <button className="bg-primary-100 duration-500 py-3 text-base font-semibold title uppercase w-full">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
