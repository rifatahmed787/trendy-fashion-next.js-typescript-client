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
      
    </div>
  );
};

export default MyOrder;
