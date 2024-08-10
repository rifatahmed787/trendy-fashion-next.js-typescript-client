import { IUser } from "./auth.types";
import { IProduct } from "./products";

export type IWish = {
  id: number;
  productId: number | IProduct;
  userId: number | IUser;
  product: {
    productImages: string[];
    productName: string;
    productRating: number;
    productPrice: number;
    quantity: number;
  };
};
