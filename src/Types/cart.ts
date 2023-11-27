import { IUser } from "./auth.types";
import { IProduct } from "./products";

export type ICart = {
  id: number;
  productId: number | IProduct;
  userId: number | IUser;
  product: {
    productImage: string[];
    productName: string;
    productRating: number;
    productPrice: number;
    quantity: number;
  };
  quantity: number;
};
