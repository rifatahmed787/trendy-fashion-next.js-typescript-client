import React from "react";

const AccordianSkeleton = () => {
  return (
    <div className="animate-pulse h-[80vh] w-11/12 bg-gray-200">
      <h1 className="text-lg md:text-2xl text-center font-semibold py-5 relative before:content-normal before:absolute before:w-full before:left-0 before:bottom-0 before:bg-primary-100 before:h-0.5 animate-pulse bg-gray-200"></h1>
      <div className={`animate-pulse bg-gray-200`}>
        <h3 className=" animate-pulse bg-gray-200"></h3>
        <p className={`animate-pulse bg-gray-200`}></p>
      </div>
    </div>
  );
};

export default AccordianSkeleton;
