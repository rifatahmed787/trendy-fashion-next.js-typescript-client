import React from "react";
import image from "../../../../../assets/BlogImg/blog1.jpg";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-16 pb-16">
        <div className="w-4/5 h-full  relative">
          <div className="pb-24 bg-white border-8 border-primary-100 rounded-lg h-full overflow-hidden shadow-2xl">
            <Image
              width={100}
              height={100}
              quality={100}
              src={image}
              className="w-full h-64 bg-cover hover:scale-105 duration-500 "
              alt=""
            />

            <div className="py-4 flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <p className="text-lg font-semibold font-secondary">
                This is my first blog
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 ">
            <div className="flex justify-between">
              <div className="bg-primary-100 py-4 px-6 rounded-lg w-full ">
                <p className=" text-lg font-semibold pb-2">Author</p>
                <div className="flex  space-x-2">
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="blog-image"
                  />
                  <div>
                    <h5 className="text-xs font-semibold">Md Rifat</h5>
                    <p className="text-xs">Writer</p>
                  </div>
                </div>
              </div>
              <div className="pb-4 px-6 rounded-lg w-full flex items-end">
                <button className="bg-gradient-to-b outline font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
