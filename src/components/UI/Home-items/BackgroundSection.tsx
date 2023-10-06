"use client";
import { Icon } from "@iconify/react";

const HomeSectionComponent = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2022/12/background-2-scaled.webp")',
      }}
      className="relative h-96 bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <div className="flex w-[100%] items-center justify-center text-[#e7e7e7] ">
          <div className="mx-4">
            <div className="flex items-center justify-center">
              <h3 className="mt-20 w-32 rounded-full bg-[#FAC213] p-1 text-center  text-[12px] font-semibold text-black md:mt-12 lg:mt-20">
                NEW SEASON
              </h3>
            </div>
            <h1 className="my-3 text-center text-[25px] font-bold">
              Back to the past: Earrings
            </h1>
            <p className="text-[13px]">
              You can hide so much behind theatrics, and I dont need to do that
              any more. My relationships <br /> with producers or photographers
              - these are relationships that took years.
            </p>
            <div className="flex items-center justify-center">
              <h3 className="mb-10 mt-7 flex w-64 items-center justify-center border-2  px-1 py-2 text-center text-[12px] font-bold text-white duration-200 hover:bg-[#ffffff]  hover:text-black">
                View all leather products{" "}
                <Icon
                  icon="ic:baseline-arrow-right"
                  width={22}
                  className="ml-5"
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionComponent;
