"use client";

import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const mainImage = Array.isArray(product.image) ? product.image[0] : product.image;

    return (
        <Link
            href={`/products/${product.id}`}
            className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {mainImage ? (
                <div className="mb-6 overflow-hidden rounded-t-[1.75rem] bg-slate-100">
                    <img src={mainImage} alt={product.name} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
            ) : (
                <div className="mb-6 flex h-64 items-center justify-center rounded-t-[1.75rem] bg-slate-100 text-slate-400">
                    <span className="text-sm uppercase tracking-[0.3em]">No image</span>
                </div>
            )}
            <div className="flex-1 px-6 pb-6 pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-700">
                    {product.category || "General"}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 line-clamp-3">{product.description}</p>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5 text-sm">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    product.stock > 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                }`}>
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {product.stock} available
                </span>
            </div>
        </Link>
    );
}
