import { IUser } from "./auth.types";
import { IProduct } from "./products";

export interface IOrder {
  id: number;
  orderStatus: boolean;
  paymentType:string;
  paymentStatus: boolean;
  receipt_url: string;
  createdAt: string;
  updatedAt: string;
  product: IProduct;
  user: IUser;
  totalPrice:number;
  shipping:string;
}
