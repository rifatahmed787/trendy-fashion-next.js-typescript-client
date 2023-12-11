"use client";
import BrandButton from "@/components/Button/PrimaryButton";
import ICONS from "@/components/shared/Icons/AllIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentSuccess = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/my_order");
  }, 10000);

  return (
    <>
      <div className="success alert mx-auto">
        <div className="alert-body">Success !</div>
      </div>
      <Link href={"/my_order"}>
        <div className="text-center mt-5">
          <BrandButton text="Go My Order" icon={ICONS.small_right_arrow} />
        </div>
      </Link>
    </>
  );
};

export default PaymentSuccess;
