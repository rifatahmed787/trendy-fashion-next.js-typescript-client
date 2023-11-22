import { IProductReview } from "./review";

export interface IProduct {
  id?: number;
  productId: string;
  productName: string;
  productDetails: string;
  productColor: string[];
  productQuality: string;
  productImage: string[];
  productSize: string[];
  productPrice: number;
  productRating: number;
  productSpecification: string[];
  productCategory: string;
  age: string[];
  relatedProducts: string[];
  productGender: string;
  productReviews: IProductReview[];
}
