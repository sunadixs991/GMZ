"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);

    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(["All", ...(data || [])]));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const searchValue = query.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(searchValue) ||
        item.category?.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue);
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, query, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#ebf5ff]">
      {/* Hero header */}
<div className="border-b border-transparent bg-[#ebf5ff] px-6 pt-8 pb-10 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-slate-500 mb-3">
                Catalog / {new Date().getFullYear()}
              </p>
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 leading-none">
                Products
              </h1>
              <p className="mt-3 text-slate-500 text-sm">
                {filteredProducts.length} of {products.length} items
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm ring-1 ring-blue-200 focus-within:ring-blue-400 transition-all">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-slate-300 hover:text-slate-600 transition-colors leading-none text-lg"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mt-10 flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}

            {(query || selectedCategory !== "All") && (
              <button
                type="button"
                onClick={() => { setSelectedCategory("All"); setQuery(""); }}
                className="shrink-0 ml-2 text-xs text-slate-500 hover:text-slate-900 underline underline-offset-4 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        {filteredProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
            </div>
            <p className="text-slate-500 text-sm">No products match your search.</p>
            <button
              type="button"
              onClick={() => { setSelectedCategory("All"); setQuery(""); }}
              className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}