"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const isAdminPage = pathname === "/admin";

  return (
    <header className="bg-[#ebf5ff] border-b border-slate-200">
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-slate-900">
            GMZ Computers
          </Link>
          {!isAdminPage && (
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <Link href="/products" className="hover:text-slate-900">
                Products
              </Link>
              <Link href="/about" className="hover:text-slate-900">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">

        </div>
      </nav>
    </header>
  );
}
