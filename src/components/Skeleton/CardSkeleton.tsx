import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="h-[300px] w-[250px]">
        <div className="h-[60%] bg-gray-300 rounded-md mb-4 animate-pulse"></div>
        <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse mb-2"></div>
        <div className="h-4 w-40 bg-gray-300 rounded-md animate-pulse mb-2"></div>
        <div className="h-4 w-24 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </>
  );
};

export default CardSkeleton;
