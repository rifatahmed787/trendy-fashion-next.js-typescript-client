import React from "react";
import CardSkeleton from "./CardSkeleton";

const WishListSkeleton = () => {
  return (
    <div className="w-full   grid grid-cols-1  justify-items-center sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-5 md:mt-0">
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

export default WishListSkeleton;
