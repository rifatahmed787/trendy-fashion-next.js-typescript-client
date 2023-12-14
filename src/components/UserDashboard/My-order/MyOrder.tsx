"use client";
import React from "react";
import ICONS from "../../shared/Icons/AllIcons";
import { useGetOrderByUserQuery } from "@/Redux/features/order/orderApi";
import { IOrder } from "@/Types/order";
import Image from "next/image";
import OrderSkeleton from "@/components/Skeleton/OrderSkeleton";

const MyOrder = () => {
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useGetOrderByUserQuery({});
  console.log(orders);

  const orderData = orders?.data;

  const downloadReceipt = (receiptUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = receiptUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Receipt
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  ""
                ) : (
                  <>
                    {orderData?.length > 0 ? (
                      ""
                    ) : (
                      <>
                        <h1
                          className={`text-xl font-bold flex justify-center items-center min-h-[50vh]`}
                        >
                          Your order is
                          <span className="text-primary-100 pl-2">Empty!</span>
                        </h1>
                      </>
                    )}
                  </>
                )}
                {isLoading ? (
                  <>
                    <OrderSkeleton />
                  </>
                ) : (
                  <>
                    {!isError &&
                      !error &&
                      orderData?.map((order: IOrder) => (
                        <>
                          <tbody
                            key={order.id}
                            className="bg-white divide-y divide-gray-200  dark:bg-gray-900"
                          >
                            <tr>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <input
                                    type="checkbox"
                                    className="text-blue-500 border-gray-300 rounded  "
                                  />

                                  <span>#{order?.id}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {new Date(order?.createdAt).toLocaleString()}
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                  {ICONS.rightsign}
                                  <h2 className="text-sm font-normal">Paid</h2>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <div className="flex items-center gap-x-2">
                                  <Image
                                    width={8}
                                    height={8}
                                    className="object-cover w-8 h-8 rounded-full"
                                    src={order?.user?.avatar}
                                    alt="user profile"
                                  />
                                  <div>
                                    <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                      {order?.user?.username}
                                    </h2>
                                    <p className="text-xs font-normal text-gray-600 ">
                                      {order?.user?.email}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                Pending
                              </td>
                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">
                                  <button
                                    onClick={() =>
                                      downloadReceipt(
                                        order.receipt_url,
                                        `receipt_${order.id}.pdf`
                                      )
                                    }
                                    className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                  >
                                    Download
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      ))}
                  </>
                )}
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
