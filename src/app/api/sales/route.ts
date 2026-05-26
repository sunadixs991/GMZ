import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { SaleRecord } from "@/lib/types";

const filePath = path.join(process.cwd(), "src/lib/sales.json");

function readSales(): SaleRecord[] {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeSales(sales: SaleRecord[]) {
  fs.writeFileSync(filePath, JSON.stringify(sales, null, 2));
}

export async function GET(request: NextRequest) {
  const sales = readSales();
  const from = request.nextUrl.searchParams.get("from");
  const to = request.nextUrl.searchParams.get("to");

  if (!from && !to) {
    return NextResponse.json(sales);
  }

  const fromDate = from ? new Date(`${from}T00:00:00`) : null;
  const toDate = to ? new Date(`${to}T23:59:59`) : null;

  const filtered = sales.filter((sale) => {
    const saleDate = new Date(sale.date);
    if (fromDate && saleDate < fromDate) return false;
    if (toDate && saleDate > toDate) return false;
    return true;
  });

  return NextResponse.json(filtered);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const sales = readSales();
  const newSale: SaleRecord = {
    id: Date.now().toString(),
    ...body,
  };
  sales.push(newSale);
  writeSales(sales);
  return NextResponse.json(newSale);
}