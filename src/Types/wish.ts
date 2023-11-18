import { IUser } from "./auth.types";
import { IProduct } from "./products";

export type IWish = {
  id?: number;
  productId: number | IProduct;
  userId: string | IUser;
};
