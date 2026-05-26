"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const isAdminPage = pathname === "/admin";

  return (
    <header className="sticky top-0 z-30 bg-white/95 border-b border-slate-200 backdrop-blur-lg shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-900 text-base font-semibold uppercase tracking-[0.22em] text-white shadow-sm">
            GMZ
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-semibold text-slate-900">GMZ</span>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Computer Trading</span>
          </div>
        </Link>

        {!isAdminPage && (
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-slate-900 transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
