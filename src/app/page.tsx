import Link from "next/link";

const features = [
  {
    title: "Fast shipping",
    description: "Same-day or next-day delivery available across Cebu.",
    icon: "🚚",
  },
  {
    title: "Business-ready stock",
    description: "Printers, ink, keyboards, and networking supplies in one place.",
    icon: "🖨️",
  },
  {
    title: "Trusted service",
    description: "Reliable support for offices, schools, and retail businesses.",
    icon: "💼",
  },
  {
    title: "Flexible checkout",
    description: "Pay online or in-person with confidence.",
    icon: "💳",
  },
];

const stats = [
  { label: "Years operating", value: "8+" },
  { label: "Products in stock", value: "1.2k+" },
  { label: "Cebu locations", value: "3" },
];

export default function Home() {
  return (
    <div className="bg-[#eef7ff] text-slate-900">
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-200/80 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 ring-1 ring-slate-200">
              GMZ Computer Trading — Cebu’s trusted office supplier
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                Premium office and computer supplies with a <span className="text-blue-600">modern Cebu style</span>.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                From printers, ink, and networking gear to keyboards, cables, and business essentials — GMZ brings quality equipment and fast service to Cebu-based customers.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
              >
                Start shopping
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Learn more
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-3 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-10 h-[260px] w-[260px] rounded-full bg-blue-200/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
              <div className="flex items-center justify-between rounded-3xl bg-blue-50 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-700">Featured</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">GMZ Essentials</p>
                </div>
                <div className="rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Top seller</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">Printer & Ink</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">All top brands, fast delivery.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">Office supplies</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">Paper, cables, and accessories.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">Networking</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">Routers, cables, and setup gear.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">Business bundles</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">Kits designed for offices.</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 rounded-[2rem] bg-blue-600 p-6 text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.28em] text-blue-100/80">Why choose GMZ?</p>
                <p className="text-lg font-semibold">Reliable local supply, friendly service, and stock ready for your next project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">What we offer</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Everything your office needs, all in one place.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Browse all products
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl text-blue-600 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Featured products</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Discover best-sellers for every workspace.
              </h2>
              <p className="mt-4 max-w-xl text-slate-600 sm:text-lg">
                GMZ offers reliable hardware and accessories built for productivity, gaming, and everyday business use.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">Printers</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Keyboards</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Networking</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Office bundles</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-blue-50 p-6 shadow-sm ring-1 ring-blue-100">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-700">Trusted brands</p>
                <p className="mt-4 text-xl font-semibold text-slate-900">Quality parts from the brands you know.</p>
              </div>
              <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm shadow-slate-900/10">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Easy checkout</p>
                <p className="mt-4 text-xl font-semibold">Secure payment and fast order processing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-blue-600 px-8 py-16 text-white shadow-xl shadow-blue-500/20 sm:px-12 lg:px-16">
          <div className="grid gap-8 md:grid-cols-3 md:items-center md:gap-10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-100/80">Ready for your next order?</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">GMZ delivers reliable stock and support across Cebu.</h2>
              <p className="max-w-xl text-slate-100/90">Take the next step with a trusted local supplier for office and computer supplies.</p>
            </div>
            <div className="space-y-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl bg-white/10 px-5 py-4">
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-200">{item.label}</p>
                </div>
              ))}
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-500/20 transition hover:bg-blue-50"
              >
                Contact us today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-900 text-base font-semibold uppercase tracking-[0.22em] text-white shadow-sm">
                  GMZ
                </span>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-slate-900">GMZ</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Computer Trading</p>
                </div>
              </div>
              <p className="max-w-sm text-sm text-slate-600">
                Your trusted source for office and computer supplies across Cebu, with fast delivery and dependable service.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">Quick Links</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <Link href="/products" className="block hover:text-slate-900">Products</Link>
                <Link href="/about" className="block hover:text-slate-900">About Us</Link>
                <Link href="/contact" className="block hover:text-slate-900">Contact</Link>
                <Link href="/admin" className="block hover:text-slate-900">Admin</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>Email: gmzcomputerstrading@gmail.com</p>
                <p>Phone: 0939 280 1103</p>
                <p>Landline: 032-3458508</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">Follow Us</h3>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://facebook.com" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 shadow-sm hover:bg-blue-50 transition">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.41V12h2.09v-1.82c0-2.07 1.23-3.22 3.11-3.22.9 0 1.84.16 1.84.16v2.02h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.88h-1.93v6.99A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 shadow-sm hover:bg-blue-50 transition">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M22 5.924c-.793.352-1.646.59-2.542.698a4.486 4.486 0 001.963-2.478 8.992 8.992 0 01-2.848 1.088 4.48 4.48 0 00-7.633 4.082A12.72 12.72 0 013 4.675a4.478 4.478 0 001.386 5.976 4.444 4.444 0 01-2.03-.56v.056a4.48 4.48 0 003.592 4.39 4.495 4.495 0 01-2.024.077 4.482 4.482 0 004.186 3.108 8.984 8.984 0 01-5.57 1.92A8.96 8.96 0 012 19.54a12.687 12.687 0 006.87 2.01c8.245 0 12.76-6.834 12.76-12.76 0-.195-.005-.391-.014-.584A9.118 9.118 0 0022 5.924z" />
                  </svg>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 shadow-sm hover:bg-blue-50 transition">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 shadow-sm hover:bg-blue-50 transition">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 22.5h4v-13h-4v13zm7-13h3.84v1.82h.05c.54-1 1.86-2.05 3.83-2.05 4.1 0 4.85 2.7 4.85 6.2v7.03h-4v-6.22c0-1.48-.03-3.39-2.06-3.39-2.06 0-2.38 1.61-2.38 3.28v6.33h-4v-13z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} GMZ Computer Trading. All rights reserved.</p>
            <div className="mt-4 flex items-center gap-4 sm:mt-0">
              <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
