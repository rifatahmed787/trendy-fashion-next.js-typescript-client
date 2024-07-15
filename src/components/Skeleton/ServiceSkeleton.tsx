import React from "react";

const ServiceSkeleton = () => {
  return (
    <div className="w-[90%] md:min-w-[95%] lg:min-w-full"> <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
    <div className="group overflow-hidden">
      <svg
        className="w-14 -mb-7 text-gray-300 animate-pulse"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
      <div className="border border-gray-200 duration-500 h-60 rounded-xl px-5 py-8 shadow-md overflow-hidden">
        <span className="block w-32 h-6 bg-gray-300 animate-pulse rounded mb-4"></span>
        <span className="block w-10/12 h-4 bg-gray-300 animate-pulse rounded mb-4"></span>
        <span className="block w-8/12 h-4 bg-gray-300 animate-pulse rounded mb-4"></span>
        <div className="flex items-center mt-5 duration-500">
          <span className="block w-24 h-6 bg-gray-300 animate-pulse rounded mr-2"></span>
          <span className="block w-8 h-8 bg-gray-300 animate-pulse rounded-full"></span>
        </div>
      </div>
    </div>
  </div></div>
   
  );
};

export default ServiceSkeleton;
