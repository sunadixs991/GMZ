import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name: oldName } = await params;
    const { name: newName }: { name: string } = await request.json();

    if (!newName || typeof newName !== "string" || newName.trim() === "") {
      return NextResponse.json({ error: "New category name is required" }, { status: 400 });
    }

    const decodedOld = decodeURIComponent(oldName);
    const { data: existing, error: existingErr } = await supabase.from("categories").select("*").eq("name", decodedOld).maybeSingle();
    if (existingErr) return NextResponse.json({ error: existingErr.message }, { status: 500 });
    if (!existing) return NextResponse.json({ error: "Category not found" }, { status: 404 });

    const { data, error } = await supabase.from("categories").update({ name: newName.trim() }).eq("name", decodedOld).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    const decoded = decodeURIComponent(name);
    const { data, error } = await supabase.from("categories").delete().eq("name", decoded).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}