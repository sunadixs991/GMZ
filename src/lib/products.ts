import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Office Chair",
    description: "Comfortable ergonomic office chair",
    price: 150,
    image: "/images/chair.jpg",
    stock: 18,
  },
  {
    id: "2",
    name: "Wireless Mouse",
    description: "High-precision wireless mouse",
    price: 25,
    image: "/images/mouse.jpg",
    stock: 34,
  },
  {
    id: "3",
    name: "Printer Paper",
    description: "A4 size, 500 sheets",
    price: 10,
    stock: 0,
  },
];