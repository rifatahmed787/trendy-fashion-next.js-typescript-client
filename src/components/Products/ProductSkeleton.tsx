import React from "react";
import CardSkeleton from "../Skeleton/CardSkeleton";

const ProductSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-10  mt-5 md:mt-0  md:px-10">
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
