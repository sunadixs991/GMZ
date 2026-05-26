import { NextRequest, NextResponse } from "next/server";
import { SaleRecord } from "@/lib/types";
import { supabaseServer } from "@/lib/supabaseClient";

export async function GET(request: NextRequest) {
  const from = request.nextUrl.searchParams.get("from");
  const to = request.nextUrl.searchParams.get("to");

  const sb = supabaseServer as any;
  const { data, error } = await sb.from("sales").select("*");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  let sales = data ?? [];
  if (from || to) {
    const fromDate = from ? new Date(`${from}T00:00:00`) : null;
    const toDate = to ? new Date(`${to}T23:59:59`) : null;
    sales = sales.filter((sale: any) => {
      const saleDate = new Date(sale.date);
      if (fromDate && saleDate < fromDate) return false;
      if (toDate && saleDate > toDate) return false;
      return true;
    });
  }

  return NextResponse.json(sales);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newSale: SaleRecord = {
    id: Date.now().toString(),
    ...body,
  } as SaleRecord;

  const sb = supabaseServer as any;
  const { data, error } = await sb.from("sales").insert(newSale).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}