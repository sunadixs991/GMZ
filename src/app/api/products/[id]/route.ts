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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const products = readProducts();
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const updatedProduct: Product = {
    ...products[productIndex],
    ...body,
  };

  products[productIndex] = updatedProduct;
  writeProducts(products);

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const products = readProducts();
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];
  writeProducts(products);

  return NextResponse.json(deletedProduct);
}