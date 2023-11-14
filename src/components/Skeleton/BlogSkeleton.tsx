import React from "react";

const BlogSkeleton = () => {
  return (
    <>
      <div className="card translate-3d-none-after card translate-3d-none-after relative flex w-full flex-col overflow-hidden rounded border border-gray-300 bg-white">
        <div
          className="text-primary-500 group relative"
          style={{ paddingTop: "70%" }}
        >
          <div className="absolute left-0 top-0 h-full w-full">
            <span className="skeleton-box transform-center block h-full transition-transform group-hover:scale-110"></span>
          </div>
        </div>
        <div className="flex flex-grow flex-col">
          <div className="relative mb-4 flex-grow pl-4 pr-4 pt-4 text-left">
            <h3 className="text-gray-darkest mr-10 text-lg font-bold">
              <span className="skeleton-box inline-block h-5 w-1/6"></span>
              <span className="skeleton-box inline-block h-5 w-1/2"></span>
              <span className="skeleton-box inline-block h-5 w-2/4"></span>
              <span className="skeleton-box inline-block h-5 w-2/5"></span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSkeleton;

// const ProductCardSkeleton = () => {
//   return (
//     <div className="h-[450px] w-[300px] p-4 border border-gray-300 rounded-lg">
//       <div className="h-[60%] bg-gray-300 rounded-md mb-4 animate-pulse"></div>
//       <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse mb-2"></div>
//       <div className="h-4 w-40 bg-gray-300 rounded-md animate-pulse mb-2"></div>
//       <div className="h-4 w-24 bg-gray-300 rounded-md animate-pulse mb-2"></div>
//       <div className="flex justify-between">
//         <div className="h-4 w-12 bg-gray-300 rounded-md animate-pulse mb-2"></div>
//         <div className="h-4 w-8 bg-gray-300 rounded-md animate-pulse mb-2"></div>
//       </div>
//     </div>
//   );
// };
