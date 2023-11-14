import React from "react";
import CardSkeleton from "../Skeleton/CardSkeleton";

const ProductSkeleton = () => {
  return (
    <div className=" mt-20 w-full   grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default ProductSkeleton;
