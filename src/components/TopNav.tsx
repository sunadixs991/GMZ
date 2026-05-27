"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const isAdminPage = pathname === "/admin";

  return (
    <header className="sticky top-0 z-30 bg-white/95 border-b border-slate-200 backdrop-blur-lg shadow-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4 group">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 text-base font-semibold uppercase tracking-[0.22em] text-white shadow-lg group-hover:scale-105 transition-transform">
            GMZ
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">GMZ</span>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500 group-hover:text-blue-400 transition-colors">Computer Trading</span>
          </div>
        </Link>

        {!isAdminPage && (
          <div className="hidden lg:flex items-center gap-2 bg-blue-50/70 rounded-full px-4 py-2 shadow-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-blue-700 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-6 after:h-1 after:rounded-full after:bg-blue-200 after:content-['']"
                    : "text-slate-700 hover:text-blue-700 hover:bg-blue-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Cart icon button */}
            {/* <Link href="/cart" className="ml-2 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white w-10 h-10 shadow-md hover:scale-110 transition-transform" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61l1.38-7.39H6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link> */}
          </div>
        )}
      </nav>
    </header>
  );
}
