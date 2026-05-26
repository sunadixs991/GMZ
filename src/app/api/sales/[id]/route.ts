import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseClient";

function getIdFromRequest(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const parts = url.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1];
  } catch (e) {
    return null;
  }
}

export async function DELETE(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const sb = supabaseServer as any;
  if (!sb) return NextResponse.json({ error: "Server Supabase client not configured" }, { status: 500 });

  const { data, error } = await sb.from("sales").delete().eq("id", id).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data || data.length === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ deleted: data });
}

export async function PUT(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const body = await request.json();
  const sb = supabaseServer as any;
  if (!sb) return NextResponse.json({ error: "Server Supabase client not configured" }, { status: 500 });

  const { data, error } = await sb.from("sales").update(body).eq("id", id).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data || data.length === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(data[0]);
}

