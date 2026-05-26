import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/lib/types";
import { supabaseServer } from "@/lib/supabaseClient";

export async function GET() {
  const sb = supabaseServer as any;
  const { data, error } = await sb.from("products").select("*");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const products = await Promise.all(
    (data ?? []).map(async (product: any) => {
      if (product.image && !product.image.startsWith("http")) {
        const { data: signedData, error: signedError } = await sb.storage
          .from("product-images")
          .createSignedUrl(product.image, 60 * 60 * 24 * 7);

        if (signedError) {
          return product;
        }

        return {
          ...product,
          image: signedData?.signedUrl ?? product.image,
          imagePath: product.image,
        };
      }

      return { ...product, imagePath: product.image };
    })
  );

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newProduct: Product = {
    id: Date.now().toString(),
    ...body,
  } as Product;

  const sb = supabaseServer as any;
  const { data, error } = await sb.from("products").insert(newProduct).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}