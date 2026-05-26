import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseClient";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log(`[API /api/products/[id]] GET request for id: ${id}`);
  const sb = supabaseServer as any;

  const { data, error } = await sb.from("products").select("*").eq("id", id).single();
  console.log(`[API /api/products/[id]] Supabase query for id ${id}: error=${error?.message}, data=${data ? 'found' : 'not found'}`);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (data?.image && !data.image.startsWith("http")) {
    console.log(`[API /api/products/[id]] Attempting to sign image for id ${id}: ${data.image}`);
      const { data: signedData, error: signedError } = await sb.storage
        .from("product-images")
        .createSignedUrl(data.image, 60 * 60 * 24 * 7);

    console.log(`[API /api/products/[id]] Image signing: error=${signedError?.message}, signed=${!!signedData?.signedUrl}`);
    if (!signedError && signedData?.signedUrl) {
      return NextResponse.json({ ...data, image: signedData.signedUrl });
    }
  }

  console.log(`[API /api/products/[id]] Returning product data for id ${id}`);
  return NextResponse.json(data);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const sb = supabaseServer as any;
  const { data, error } = await sb
    .from("products")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sb = supabaseServer as any;
  const { data, error } = await sb.from("products").delete().eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}