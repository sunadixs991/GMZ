import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Product } from "@/lib/types";

const filePath = path.join(process.cwd(), "src/lib/products.json");

function readProducts(): Product[] {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeProducts(products: Product[]) {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
}

export async function GET() {
  const products = readProducts();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const products = readProducts();
  const newProduct: Product = {
    id: Date.now().toString(),
    ...body,
  };
  products.push(newProduct);
  writeProducts(products);
  return NextResponse.json(newProduct);
}