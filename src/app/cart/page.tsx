"use client";

import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Shopping Cart</h1>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-slate-600">
          The shopping cart is currently disabled for customers. Product prices and purchase actions are only available through the admin panel.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}