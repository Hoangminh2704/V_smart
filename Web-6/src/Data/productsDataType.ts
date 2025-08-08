export interface ProductDataType {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  oldPrice: number;
  price: number;
  state: string;
  discount?: string;
  order: number;
  type: string;
  description?: string;
  brand: string;
  size: string[]; // từ 3 đến 4 size
  color: string[]; // 2 đến 3 color cơ bản
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}
