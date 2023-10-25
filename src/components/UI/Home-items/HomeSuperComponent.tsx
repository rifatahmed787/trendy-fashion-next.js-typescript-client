"use client";
import { Icon } from "@iconify/react";

const HomeSuperComponent = () => {
  return (
    <div className="my-5 grid grid-cols-1 gap-0 lg:grid-cols-5 lg:gap-3 px-5 md:px-10">
      <div className="col-span-3 my-2 rounded-xl border-2 border-dotted border-[#F03E3E] px-6 py-4">
        <div className="flex justify-between">
          <h1 className="flex items-center text-[16px] font-bold text-[#F03E3E]">
            Super discount for your first purchase
          </h1>
          <p className="flex items-center text-sm text-gray-500">
            <span className="mr-[2px] rounded-full bg-[#F70000] px-4 py-2 font-semibold text-white">
              FIRST250
            </span>{" "}
            Use discount code in checkout page.
          </p>
        </div>
      </div>
      <div className="col-span-2 my-2 rounded-xl border-2 border-dotted border-[#FAC213] px-6 py-4">
        <div className="flex justify-between">
          <h1 className="flex items-center text-[16px] font-bold text-gray-900">
            2nd shopping surprise campaign!
          </h1>
          <p className="flex cursor-pointer items-center rounded-full bg-[#FAC213] px-4 py-2 text-sm text-white">
            <span className="font-semibold">CheckProducts</span>{" "}
            <Icon width={20} icon="ic:baseline-arrow-right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSuperComponent;
