import React from "react";

const HomeServiceDetailsSkeleton = () => {
  return (
    <div className="w-11/12 lg:w-4/5 -mt-10 mx-auto bg-white shadow-custom-primary">
      <div className="flex flex-col items-center py-5">
      <svg
        className="w-14 -mb-7 text-gray-300 animate-pulse"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
        <span className="block mt-10 py-5 w-1/4 h-4 bg-gray-300 animate-pulse rounded mb-4"></span>
        <span className="block mt-5 mb-16 w-8/12 h-4 bg-gray-300 animate-pulse rounded"></span>
      </div>
    </div>
  );
};

export default HomeServiceDetailsSkeleton;
