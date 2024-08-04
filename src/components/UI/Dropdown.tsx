import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
interface IDropdown {
  children: React.ReactNode;
}
const Dropdown = ({ children }: IDropdown) => {
  return (
    <div className="bg-white py-6 flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <div className=" relative inline-block text-left dropdown">
          <span className="rounded-md shadow-sm">
            <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
              <BsThreeDotsVertical />
            </button>
          </span>
          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
              <div className="px-4 py-3 flex flex-col">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
