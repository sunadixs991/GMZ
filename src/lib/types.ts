export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  image?: string;
  stock: number;
}

export interface SaleItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface SaleRecord {
  id: string;
  date: string;
  items: SaleItem[];
  subtotal: number;
  total: number;
}