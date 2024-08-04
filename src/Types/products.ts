import { IProductReview } from "./review";

interface ProductCategory {
  id: number;
  categoryName: string;
}

interface ProductType {
  id: number;
  typeName: string;
}

export interface IProduct {
  id: number;
  productId: string;
  productName: string;
  brandName: string;
  productDetails: string;
  productColors: string[];
  productQualities: string[];
  productImages: string[];
  productSizes: string[];
  oldPrice: number;
  productPrice: number;
  productRating: number;
  productSpecifications: string[];
  tags: string[];
  category_id: number;
  type_id: number;
  newArrival: boolean;
  stockOut: boolean;
  productQuantity: number;
  bestSelling: boolean;
  productVerified: boolean;
  productGender: string;
  video: string;
  ages: string[];
  buyerId: string | null;
  createdAt: string;
  productReviews: IProductReview[];
  productCategory: ProductCategory;
  productType: ProductType;
}


export interface ILatestHero{
id:number;
title:string;
subTitle:string;
imgOne:string;
imgTwo:string;
}