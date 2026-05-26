"use client";

import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Checkout</h1>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-slate-600">
          Checkout is currently not available for customers. You can manage pricing and product purchases from the admin panel.
        </p>
        <Link
          href="/admin"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Go to Admin
        </Link>
      </div>
    </div>
  );
}