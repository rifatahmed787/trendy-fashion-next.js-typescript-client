import React from "react";
import ICONS from "../../shared/Icons/AllIcons";

const MyOrder = () => {
  return (
    <div className="container px-4 md:px-0 pl-0 md:pl-8 mx-auto">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      <div className="flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded  "
                        />
                        <button className="flex items-center gap-x-2">
                          <span>Invoice</span>
                          {ICONS.invoice}
                        </button>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Payment
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Status
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200  dark:bg-gray-900">
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded  "
                        />

                        <span>#3066</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      Jan 6, 2022
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h2 className="text-sm font-normal">Paid</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <img
                          className="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div>
                          <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                            Arthur Melo
                          </h2>
                          <p className="text-xs font-normal text-gray-600 ">
                            authurmelo@example.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      Pending
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                          Archive
                        </button>

                        <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded  "
                        />

                        <span>#3065</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      Jan 5, 2022
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 3L3 9M3 3L9 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h2 className="text-sm font-normal">Cancelled</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <img
                          className="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt=""
                        />
                        <div>
                          <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                            Andi Lane
                          </h2>
                          <p className="text-xs font-normal text-gray-600 ">
                            andi@example.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      Shipping
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                          Archive
                        </button>

                        <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                          Download
                        </button>
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

export default MyOrder;
