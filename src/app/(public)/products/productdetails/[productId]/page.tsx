"use client";
import { useGetProductDetailsQuery } from "@/Redux/features/products/productApi";
import { IProduct } from "@/Types/products";
import DetailsSkeleton from "@/components/ProductDetails/DetailsSkeleton";
import ProductDetail from "@/components/ProductDetails/ProductDetail";
import React from "react";

const ProductDetails = ({ params }: any) => {
  const productId = params?.productId;
  console.log(productId);

  const {
    data: product_details_data,
    isLoading,
    isError,
    error,
  } = useGetProductDetailsQuery(productId, { skip: !productId });

  const product_details: IProduct = product_details_data?.data;

  return (
    <div>
      {isLoading ? (
        <DetailsSkeleton />
      ) : (
        <div className="max-w-[1170px] mx-auto ">
          <div>
            <ProductDetail product_details={product_details} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
