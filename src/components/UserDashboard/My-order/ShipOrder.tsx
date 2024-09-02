"use client";
import React from "react";
import { useGetOrderByUserQuery } from "@/Redux/features/order/orderApi";
import { IOrder } from "@/Types/order";
import Paragraph from "@/components/UI/Paragraph/Paragraph";
import Link from "next/link";
import TableSkeleteon from "@/components/Skeleton/TableSkeleteon";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/Table/Table";

const ShipOrder = () => {
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useGetOrderByUserQuery({});

  const orderData = orders?.data;

  return (
    <div className="container px-5 mx-auto py-5">
      {isLoading ? (
        <>
          <TableSkeleteon />
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
                    <TableHead>Amount</TableHead>
                    <TableHead>Shipment Status</TableHead>
                    <TableHead className="text-right">Shipment Time</TableHead>
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

                        <TableCell>${order?.totalPrice}</TableCell>
                        <TableCell>{order?.status}</TableCell>
                        <TableCell className="text-right">
                          {order?.deliveryTime}
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            <div className="flex flex-col justify-center gap-10">
              <Paragraph className="mx-auto">Your Order is Empty!</Paragraph>
              <Link
                href="/products"
                className="flex mx-auto border rounded-lg py-3 px-2 font-semibold text-sm"
              >
                <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShipOrder;
