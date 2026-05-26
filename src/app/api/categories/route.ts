import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseClient";

export async function GET() {
  const sb = supabaseServer as any;
  const { data, error } = await sb.from("categories").select("name");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const names = (data ?? []).map((category: any) => category.name);
  return NextResponse.json(names);
}

export async function POST(request: NextRequest) {
  try {
    const { name }: { name: string } = await request.json();

    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json({ error: "Category name is required" }, { status: 400 });
    }

    const sb = supabaseServer as any;
    const { data: existing, error: existingErr } = await sb.from("categories").select("*").eq("name", name.trim()).maybeSingle();
    if (existingErr) return NextResponse.json({ error: existingErr.message }, { status: 500 });
    if (existing) return NextResponse.json({ error: "Category already exists" }, { status: 400 });

    const { data, error } = await sb.from("categories").insert({ name: name.trim() }).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
  }
}