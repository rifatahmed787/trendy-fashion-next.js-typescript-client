import { IProduct } from "@/Types/products";
import React from "react";
import SubTitle from "../UI/SubTitle/SubTitle";

const DetailsVideo = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  return (
    <div className="relative h-[450px] overflow-auto">
      <div className="container flex flex-col w-full max-w-6xl p-6 mx-auto divide-y rounded-md ">
        {product_details?.video ? (
          <video
            src={product_details.video}
            className="h-[450px] w-full"
            controls
          />
        ) : (
          <div className="flex justify-center items-center h-[450px]">
            <SubTitle SubTitle="No Review Available" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsVideo;
