import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="w-full max-w-lg rounded bg-white shadow-md">
        <div className="h-52 animate-pulse rounded-tl rounded-tr bg-gray-200"></div>

        <div className="p-3 md:p-5">
          <div className="mb-3 h-7 animate-pulse rounded-sm bg-gray-200"></div>

          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1 h-4 animate-pulse rounded-sm bg-gray-200"></div>
            <div className="col-span-1 h-4 animate-pulse rounded-sm bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1 h-4 animate-pulse rounded-sm bg-gray-200"></div>
            <div className="col-span-1 h-4 animate-pulse rounded-sm bg-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
