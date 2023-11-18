import React from "react";
import CardSkeleton from "../Skeleton/CardSkeleton";

const ProductSkeleton = () => {
  return (
    <div className="w-full   grid grid-cols-1  justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mt-5 md:mt-0">
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
