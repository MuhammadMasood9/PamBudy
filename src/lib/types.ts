export interface DiscountedProduct {
  product_id: number;
  product_name: string;
  description: string;
  feature_image: string;
  size: string;
  original_price: number;
  discount_percent: number;
  discounted_price: number;
  stock: number;
  brand_id: number;
  category_id: number;
}

export interface TopCategory {
  category_id: number;
  title: string;
  image: string;
  product_count: number;
}
