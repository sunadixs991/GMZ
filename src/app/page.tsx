const testimonials = [
  { name: "Anna R.", text: "GMZ delivered our office supplies the same day. Great service and prices!", company: "Cebu Realty Group" },
  { name: "Mark D.", text: "We always find what we need for our business. Highly recommended!", company: "Dela Cruz Printing" },
  { name: "Jessa M.", text: "Recommended. Fast, friendly, and reliable. GMZ is our go-to for tech gear", company: "Mendoza Law Office" },
];
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
  { label: "Years operating", value: "3+" },
  { label: "Products in stock", value: "1.2k+" },
  { label: "Happy Customers", value: "1000+" },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#eef7ff] via-[#f3f9ff] to-white text-slate-900">
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-200/80 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 ring-1 ring-slate-200">
              <span className="animate-bounce">✨</span> GMZ Computer Trading — Cebu’s trusted office supplier
            </div>
            <div className="space-y-7">
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Premium office and computer supplies with a <span className="text-blue-600 underline decoration-blue-300/60">modern Cebu style</span>.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                From printers, ink, and networking gear to keyboards, cables, and business essentials — GMZ brings quality equipment and fast service to Cebu-based customers.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-105"
              >
                Start shopping
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-white px-10 py-4 text-lg font-bold text-blue-700 transition hover:bg-blue-50 hover:border-blue-400"
              >
                Learn more
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item, i) => (
                <div
                  key={item.label}
                  className={
                    `rounded-3xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg ring-1 ring-blue-100 transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center` +
                    (i === 1 ? ' border-2 border-blue-200' : '')
                  }
                >
                  <p className="text-4xl font-extrabold text-blue-700 drop-shadow-sm">{item.value}</p>
                  <p className="mt-3 text-base font-medium text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-10 h-[260px] w-[260px] rounded-full bg-blue-200/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-2xl">
              <div className="flex items-center justify-between rounded-3xl bg-blue-50/80 p-6 mb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-700">Featured</p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-900">GMZ Essentials</p>
                </div>
                <span className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-5 py-2 text-sm font-bold text-white shadow-md">Top seller</span>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-white p-6 text-left shadow-sm hover:shadow-lg transition">
                  <p className="text-base font-bold text-blue-700">Printer & Ink</p>
                  <p className="mt-2 text-sm text-slate-600">All top brands, fast delivery.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-6 text-left shadow-sm hover:shadow-lg transition">
                  <p className="text-base font-bold text-blue-700">Office supplies</p>
                  <p className="mt-2 text-sm text-slate-600">Paper, cables, and accessories.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-6 text-left shadow-sm hover:shadow-lg transition">
                  <p className="text-base font-bold text-blue-700">Networking</p>
                  <p className="mt-2 text-sm text-slate-600">Routers, cables, and setup gear.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-6 text-left shadow-sm hover:shadow-lg transition">
                  <p className="text-base font-bold text-blue-700">Business bundles</p>
                  <p className="mt-2 text-sm text-slate-600">Kits designed for offices.</p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100/80 mb-2">Why choose GMZ?</p>
                <p className="text-lg font-bold">Reliable local supply, friendly service, and stock ready for your next project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative background shapes */}

      <section className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blue-100 opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-200 opacity-40 blur-2xl" />
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center relative z-10">
          {/* Left: Headline, Description, Category Buttons */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-2">Featured Products</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Discover best-sellers for every workspace.</h1>
            <p className="text-base sm:text-lg text-slate-600 mb-6">GMZ offers reliable hardware and accessories built for productivity, gaming, and everyday business use.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="relative flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span className="text-lg">🖨️</span> Printers
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">Top</span>
              </button>
              <button className="flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span className="text-lg">⌨️</span> Keyboards
              </button>
              <button className="flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span className="text-lg">🌐</span> Networking
              </button>
              <button className="flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span className="text-lg">📦</span> Office bundles
              </button>
            </div>
          </div>
          {/* Right: Info Cards with animation */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-blue-50 px-6 py-5 shadow-md transition-transform hover:scale-105 hover:shadow-xl animate-fade-in-up">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-1">Trusted Brands</p>
              <p className="text-base font-semibold text-slate-900">Quality parts from the brands you know.</p>
            </div>
            <div className="rounded-2xl bg-slate-900 px-6 py-5 shadow-md transition-transform hover:scale-105 hover:shadow-xl animate-fade-in-up delay-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-1">Easy Checkout</p>
              <p className="text-base font-semibold text-white">Secure payment and fast order processing.</p>
            </div>
          </div>
        </div>
        {/* Decorative divider/wave */}
        <svg className="absolute left-0 right-0 bottom-0 w-full h-12 text-blue-600" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity=".12" d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z"></path></svg>
      </section>

      {/* Blue Stats Section with Contact Button */}
      <section className="relative px-4 pb-12">
        {/* Decorative background for blue section */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-40 w-2/3 rounded-full bg-blue-400 opacity-20 blur-2xl" />
        <div className="mx-auto max-w-7xl rounded-3xl bg-blue-600 text-white px-6 py-10 flex flex-col lg:flex-row items-center gap-10 shadow-xl relative z-10">
          <div className="flex-1 min-w-[250px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 mb-2">Ready for your next order?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">GMZ delivers reliable stock and support across Cebu.</h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6">Take the next step with a trusted local supplier for office and computer supplies.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row flex-1 justify-center">
            <div className="rounded-2xl bg-blue-500/60 px-8 py-6 text-center min-w-[140px] shadow-lg transition-transform hover:scale-105">
              <p className="text-2xl font-bold">3+</p>
              <p className="text-sm mt-2">Years operating</p>
            </div>
            <div className="rounded-2xl bg-blue-500/60 px-8 py-6 text-center min-w-[140px] shadow-lg transition-transform hover:scale-105">
              <p className="text-2xl font-bold">1.2k+</p>
              <p className="text-sm mt-2">Products in stock</p>
            </div>
            <div className="rounded-2xl bg-blue-500/60 px-8 py-6 text-center min-w-[140px] shadow-lg transition-transform hover:scale-105">
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-sm mt-2">Happy Customers</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 font-semibold px-10 py-4 text-lg shadow-md hover:bg-blue-50 transition animate-pulse">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25V6.75A2.25 2.25 0 0018.75 4.5h-13.5A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25v-1.5M17.25 15l3-3m0 0l-3-3m3 3H9" /></svg>
                Contact us today
              </span>
            </Link>
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
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={
                  `rounded-[2rem] border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 text-center shadow-lg transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl flex flex-col items-center` +
                  (i === 0 ? ' bg-gradient-to-br from-blue-100 to-white' : '')
                }
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-700">{feature.title}</h3>
                <p className="mt-3 text-base leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-blue-700 mb-10">What our customers say</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div key={idx} className="rounded-3xl border border-blue-100 bg-white p-8 shadow-md hover:shadow-lg transition">
                <p className="text-lg italic text-slate-700">“{t.text}”</p>
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-base font-semibold text-blue-700">{t.name}</span>
                  <span className="text-xs text-slate-500">{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- New Upper Homepage Elements (Screenshot Design) --- */}

      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl">

          {/* Hero Strip */}
          <div className="flex flex-wrap items-center gap-5 px-6 py-4 lg:flex-nowrap">

            {/* Brand */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">

              <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[13px] bg-gradient-to-br from-blue-700 to-blue-900 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                GMZ
              </span>

              <div className="flex flex-col gap-0.5 leading-tight">
                <span className="text-[13px] font-medium text-slate-900 group-hover:text-blue-700 transition-colors">
                  GMZ
                </span>

                <span className="text-[9.5px] uppercase tracking-[0.28em] text-slate-400 group-hover:text-blue-400 transition-colors">
                  Computer Trading
                </span>
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden lg:block w-px h-9 bg-slate-100 shrink-0" />

            {/* Tagline */}
            <p className="text-[12px] text-slate-500 leading-relaxed flex-1 min-w-[160px]">
              Your trusted source for office and computer supplies across Cebu —
              fast delivery, dependable service.
            </p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap shrink-0 ml-auto">

              {/* Fast Delivery */}
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 bg-blue-50 rounded-full px-2.5 py-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>

                Fast Delivery
              </span>

              {/* Trusted */}
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 bg-blue-50 rounded-full px-2.5 py-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>

                Trusted
              </span>

              {/* Location */}
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 bg-blue-50 rounded-full px-2.5 py-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                Cebu, PH
              </span>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 px-2">

            {/* Navigation */}
            <div className="px-4 py-4">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 mb-3">
                Navigation
              </h3>

              <nav className="grid grid-cols-2 gap-x-2 gap-y-0.5">

                <Link
                  href="/products"
                  className="group flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-blue-700 hover:bg-slate-50 transition-all rounded-md px-1.5 py-1"
                >
                  <svg
                    className="w-[13px] h-[13px] shrink-0 opacity-50 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  Products
                </Link>

                <Link
                  href="/about"
                  className="group flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-blue-700 hover:bg-slate-50 transition-all rounded-md px-1.5 py-1"
                >
                  <svg
                    className="w-[13px] h-[13px] shrink-0 opacity-50 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="group flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-blue-700 hover:bg-slate-50 transition-all rounded-md px-1.5 py-1"
                >
                  <svg
                    className="w-[13px] h-[13px] shrink-0 opacity-50 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>

                  Contact
                </Link>

                <Link
                  href="/admin"
                  className="group flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-blue-700 hover:bg-slate-50 transition-all rounded-md px-1.5 py-1"
                >
                  <svg
                    className="w-[13px] h-[13px] shrink-0 opacity-50 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>

                  Admin
                </Link>

              </nav>
            </div>

            {/* Contact */}
            <div className="px-4 py-4">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 mb-3">
                Get in Touch
              </h3>

              <div className="space-y-1.5">

                {/* Email */}
                <div className="flex items-center gap-2.5 py-1.5">
                  <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[7px] bg-blue-50">
                    ✉
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400 leading-none mb-0.5">
                      Email
                    </p>

                    <p className="text-[11.5px] text-slate-700 break-all">
                      gmzcomputertrading@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 py-1.5">
                  <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[7px] bg-blue-50">
                    ☎
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400 leading-none mb-0.5">
                      Phone
                    </p>

                    <p className="text-[11.5px] text-slate-700">
                      09243706432
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1 pl-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Available Mon–Sat
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="px-4 py-4">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 mb-3">
                Follow Us
              </h3>

              <div className="grid grid-cols-2 gap-1.5 max-w-[220px]">

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  className="flex items-center rounded-lg bg-slate-50 px-2 py-1 text-[10.5px] font-medium text-slate-500 hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  <span>Facebook</span>

                  <svg
                    viewBox="0 0 24 24"
                    className="ml-auto h-[10px] w-[10px] fill-current"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.41V12h2.09v-1.82c0-2.07 1.23-3.22 3.11-3.22.9 0 1.84.16 1.84.16v2.02h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.88h-1.93v6.99A10 10 0 0022 12z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  className="flex items-center rounded-lg bg-slate-50 px-2 py-1 text-[10.5px] font-medium text-slate-500 hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  <span>Twitter</span>

                  <svg
                    viewBox="0 0 24 24"
                    className="ml-auto h-[10px] w-[10px] fill-current"
                  >
                    <path d="M22 5.924c-.793.352-1.646.59-2.542.698a4.486 4.486 0 001.963-2.478 8.992 8.992 0 01-2.848 1.088 4.48 4.48 0 00-7.633 4.082A12.72 12.72 0 013 4.675a4.478 4.478 0 001.386 5.976 4.444 4.444 0 01-2.03-.56v.056a4.48 4.48 0 003.592 4.39 4.495 4.495 0 01-2.024.077 4.482 4.482 0 004.186 3.108 8.984 8.984 0 01-5.57 1.92A8.96 8.96 0 012 19.54a12.687 12.687 0 006.87 2.01c8.245 0 12.76-6.834 12.76-12.76 0-.195-.005-.391-.014-.584A9.118 9.118 0 0022 5.924z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  className="flex items-center rounded-lg bg-slate-50 px-2 py-1 text-[10.5px] font-medium text-slate-500 hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  <span>Instagram</span>

                  <svg
                    viewBox="0 0 24 24"
                    className="ml-auto h-[10px] w-[10px] fill-current"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  className="flex items-center rounded-lg bg-slate-50 px-2 py-1 text-[10.5px] font-medium text-slate-500 hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  <span>TikTok</span>

                  <svg
                    viewBox="0 0 24 24"
                    className="ml-auto h-[13px] w-[13px] fill-current shrink-0"
                  >
                    <path d="M19.321 5.562a5.124 5.124 0 01-3.157-4.562h-3.019v13.023a2.716 2.716 0 11-2.716-2.716c.19 0 .377.02.557.058V8.287a5.74 5.74 0 00-.557-.027A5.74 5.74 0 1016.17 14V8.69a8.093 8.093 0 004.73 1.514V7.223a5.1 5.1 0 01-1.579-.661z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 px-6 py-3 text-[11.5px] text-slate-400">

            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-blue-700">
                GMZ Computer Trading
              </span>
              . All rights reserved.
            </p>

            <nav className="flex items-center gap-1">

              <Link
                href="/privacy"
                className="rounded px-2 py-1 hover:text-blue-700 transition-all"
              >
                Privacy Policy
              </Link>

              <span className="text-slate-300 text-[10px]">·</span>

              <Link
                href="/terms"
                className="rounded px-2 py-1 hover:text-blue-700 transition-all"
              >
                Terms of Service
              </Link>

              <span className="text-slate-300 text-[10px]">·</span>

              {/* Back to Top */}
              <a
                href="#top"
                className="ml-2 inline-flex items-center gap-1 rounded-full bg-transparent px-3 py-1 text-slate-500 hover:bg-blue-50 hover:text-blue-700 transition-all"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>

                Back to top
              </a>

            </nav>
          </div>
        </div>
      </footer>


    </div>
  );
}
