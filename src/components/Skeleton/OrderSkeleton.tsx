import Image from "next/image";
import React from "react";

const OrderSkeleton = () => {
  return (
    <div className="container px-4 md:px-0 pl-0 md:pl-8 mx-auto animate-pulse">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <tbody className="bg-white divide-y divide-gray-200  dark:bg-gray-900">
                  <tr>
                    <td className="px-4 py-4 text-sm h-4 font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        <span></span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"></td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                        <h2 className="text-sm font-normal"></h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <Image
                          width={8}
                          height={8}
                          className="object-cover w-8 h-8 rounded-full"
                          src=""
                          alt="user profile"
                        />
                        <div>
                          <h2 className="text-sm font-medium text-gray-800 dark:text-white "></h2>
                          <p className="text-xs font-normal text-gray-600 "></p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      Pending
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button className=" transition-colors duration-200 focus:outline-none"></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6"></div>
    </div>
  );
};

export default OrderSkeleton;
