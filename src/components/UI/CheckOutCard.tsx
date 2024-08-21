import { IWish } from "@/Types/wish";
import Image from "next/image";

const CheckOutCard = ({ product }: { product?: IWish }) => {
  return (
    <>
      <div className="flex flex-col rounded-lg  sm:flex-row">
        <Image
          width={100}
          height={100}
          className="h-28 w-28 rounded-lg"
          src={product?.product?.productImages[0] || ""}
          alt="product image"
        />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{product?.product?.productName}</span>
          <p className="text-lg font-bold">
            $ {product?.product?.productPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckOutCard;
