"use client";
import { useGetProductDetailsQuery } from "@/Redux/features/products/productApi";
import { IProduct } from "@/Types/products";
import DetailsSkeleton from "@/components/ProductDetails/DetailsSkeleton";
import ProductDetail from "@/components/ProductDetails/ProductDetail";
import RelatedProduct from "@/components/ProductDetails/RelatedProduct";
import Heading from "@/components/UI/Heading/Heading";
import React from "react";

const ProductDetails = ({ params }: any) => {
  const productId = params?.productId;
  console.log(productId);

  const { data: product_details_data, isLoading } = useGetProductDetailsQuery(
    productId,
    { skip: !productId }
  );

  const product_details: IProduct = product_details_data?.data;

  return (
    <section>
      {" "}
      <div className="px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <DetailsSkeleton />
        ) : (
          <div className="max-w-[1170px] mx-auto ">
            <div>
              <ProductDetail product_details={product_details} />
            </div>
          </div>
        )}

        <div className="max-w-[1170px] mx-auto pt-16">
          <Heading Heading="Related Products " />
        </div>

        <div className="max-w-[1170px] mx-auto ">
          <RelatedProduct product_details={product_details} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
