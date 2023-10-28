import React from "react";

const BlogLoader = () => {
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

export default BlogLoader;
