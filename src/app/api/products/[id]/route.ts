import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { data, error } = await supabase.from("products").select("*").eq("id", id).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (data?.image && !data.image.startsWith("http")) {
    const { data: signedData, error: signedError } = await supabase.storage
      .from("product-images")
      .createSignedUrl(data.image, 60 * 60 * 24 * 7);

    if (!signedError && signedData?.signedUrl) {
      return NextResponse.json({ ...data, image: signedData.signedUrl });
    }
  }

  return NextResponse.json(data);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const { data, error } = await supabase
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
  const { data, error } = await supabase.from("products").delete().eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}