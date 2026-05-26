import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const categoriesFilePath = path.join(process.cwd(), "src/lib/categories.json");

function readCategories(): string[] {
  try {
    const data = fs.readFileSync(categoriesFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading categories:", error);
    return [];
  }
}

function writeCategories(categories: string[]): void {
  try {
    fs.writeFileSync(categoriesFilePath, JSON.stringify(categories, null, 2));
  } catch (error) {
    console.error("Error writing categories:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const categories = readCategories();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name }: { name: string } = await request.json();

    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json({ error: "Category name is required" }, { status: 400 });
    }

    const categories = readCategories();

    if (categories.includes(name.trim())) {
      return NextResponse.json({ error: "Category already exists" }, { status: 400 });
    }

    categories.push(name.trim());
    writeCategories(categories);

    return NextResponse.json({ message: "Category added successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
  }
}