"use client";
import BrandButton from "@/components/Button/PrimaryButton";
import ICONS from "@/components/shared/Icons/AllIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentFailed = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/my_order");
  }, 10000);
  return (
    <>
      <div className="error alert mx-auto">
        <div className="alert-body">Error !</div>
      </div>
      <Link href={"/"}>
        <div className="text-center mt-5">
          <BrandButton icon={ICONS.small_right_arrow} text="Back To Home" />
        </div>
      </Link>
    </>
  );
};

export default PaymentFailed;
