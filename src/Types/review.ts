export type IProductReview = {
  id: number;
  rating: number;
  reviewText: string;
  createdAt: string;
  reviewerId?: number;
  productId?: number;
  reviewer: {
    id?: number;
    username: string;
    avatar: string;
  };
};
