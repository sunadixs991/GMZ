import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseClient";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const imageFile = formData.get("image");

  if (!imageFile || typeof imageFile === "string") {
    return NextResponse.json({ error: "No image file provided." }, { status: 400 });
  }

  const fileName = `${Date.now()}-${imageFile.name}`;
  const fileBuffer = Buffer.from(await imageFile.arrayBuffer());

  const sb = supabaseServer as any;
  const { error: uploadError } = await sb.storage
    .from("product-images")
    .upload(fileName, fileBuffer, {
      contentType: imageFile.type,
    });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data } = sb.storage.from("product-images").getPublicUrl(fileName);
  if (!data?.publicUrl) {
    return NextResponse.json({ error: "Unable to create public URL." }, { status: 500 });
  }

  return NextResponse.json({ url: data.publicUrl, path: fileName });
}
