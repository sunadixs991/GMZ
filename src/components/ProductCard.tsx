"use client";

import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                    {product.category || "General"}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-5 text-sm leading-7 text-slate-600 line-clamp-3">{product.description}</p>
            </div>
           <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-transparent pt-5">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    product.stock > 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                }`}>
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {product.stock} available
                </span>
            </div>
        </div>
    );
}
