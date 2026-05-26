"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    setIsLoadingProducts(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setIsLoadingProducts(false));

    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(["All", ...(data || [])]))
      .catch(() => setCategories(["All"]));
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
    <div className="min-h-screen bg-gradient-to-br from-[#eef7ff] via-[#f3f9ff] to-white text-slate-900">
      {/* Hero header */}
      <section className="relative overflow-hidden px-4 pt-20 pb-12 sm:px-8 border-b border-blue-100">
        <div className="absolute inset-x-0 top-0 -z-10 h-60 bg-gradient-to-b from-blue-200/70 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-6 w-full sm:w-auto">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 ring-1 ring-slate-200">
                <span className="animate-bounce">🛒</span> Catalog / {new Date().getFullYear()}
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
                Products
              </h1>
              <p className="text-slate-500 text-base">
                <span className="font-bold text-blue-700">{filteredProducts.length}</span> of {products.length} items available
              </p>
              {/* Category tabs aligned under heading */}
              <div className="mt-6 flex flex-wrap gap-2 items-center overflow-x-auto pb-1 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all border-2 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-700 shadow-lg scale-105"
                        : "bg-white text-blue-700 border-blue-100 hover:bg-blue-50 hover:border-blue-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
                {(query || selectedCategory !== "All") && (
                  <button
                    type="button"
                    onClick={() => { setSelectedCategory("All"); setQuery(""); }}
                    className="shrink-0 ml-2 text-xs text-blue-500 hover:text-blue-900 underline underline-offset-4 transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
            {/* Search */}
            <div className="w-full sm:w-80 mt-8 sm:mt-0">
              <div className="flex items-center gap-3 bg-white rounded-full px-6 py-4 shadow-lg ring-2 ring-blue-100 focus-within:ring-blue-400 transition-all">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-slate-300 hover:text-slate-600 transition-colors leading-none text-xl"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        {isLoadingProducts ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center animate-pulse shadow-lg">
              <svg className="w-7 h-7 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v4m0 8v4m8-8h-4M4 12H8" />
              </svg>
            </div>
            <p className="text-slate-500 text-base">Loading products…</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
            </div>
            <p className="text-slate-500 text-base">No products match your search.</p>
            <button
              type="button"
              onClick={() => { setSelectedCategory("All"); setQuery(""); }}
              className="text-base font-semibold text-blue-700 underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}