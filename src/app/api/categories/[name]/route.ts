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

    const categories = readCategories();
    const index = categories.indexOf(decodeURIComponent(oldName));

    if (index === -1) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    if (categories.includes(newName.trim()) && newName.trim() !== decodeURIComponent(oldName)) {
      return NextResponse.json({ error: "Category name already exists" }, { status: 400 });
    }

    categories[index] = newName.trim();
    writeCategories(categories);

    return NextResponse.json({ message: "Category updated successfully" });
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
    const categories = readCategories();
    const index = categories.indexOf(decodeURIComponent(name));

    if (index === -1) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    categories.splice(index, 1);
    writeCategories(categories);

    return NextResponse.json({ message: "Category deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}