"use client";
import React from "react";
import ICONS from "../../shared/Icons/AllIcons";
import { useGetOrderByUserQuery } from "@/Redux/features/order/orderApi";
import { IOrder } from "@/Types/order";
import Image from "next/image";
import OrderSkeleton from "@/components/Skeleton/OrderSkeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/Table/Table";
import Paragraph from "@/components/UI/Paragraph/Paragraph";
import Link from "next/link";
import Dropdown from "@/components/UI/Dropdown";

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
    <div className="container px-5 mx-auto py-5">
      {isLoading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          {!isError && !error && orderData?.length > 0 ? (
            <>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderData?.map((order: IOrder) => (
                    <>
                      <TableRow>
                        <TableCell className="font-medium">
                          #{order?.id}
                        </TableCell>
                        <TableCell>
                          {new Date(order?.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {order?.paymentStatus ? (
                            <>
                              <Paragraph className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
                                Paid
                              </Paragraph>
                            </>
                          ) : (
                            <>
                              <Paragraph className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-200/60">
                                Unpaid
                              </Paragraph>
                            </>
                          )}
                        </TableCell>
                        <TableCell>
                          {order?.paymentType == "Online" ? (
                            <>
                              <Paragraph>Credit Card</Paragraph>
                            </>
                          ) : (
                            <Paragraph>Cash On Delivery</Paragraph>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          ${order?.totalPrice}
                        </TableCell>
                        <Dropdown>
                        <p
                          
                          className="cursor-pointer py-1.5 font-semibold font-secondary"
                        >
                          Cancel Order
                        </p>
                        <p
                          
                          className="cursor-pointer py-1.5 font-semibold font-secondary"
                        >
                          Delete Order
                        </p>
                        </Dropdown>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            <>
              <Paragraph>Your Order is Empty!</Paragraph>
              <Link href="/products" className="flex font-semibold text-sm">
                <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyOrder;

{
  /* <div className="flex items-center gap-x-2">
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
</div> */
}
