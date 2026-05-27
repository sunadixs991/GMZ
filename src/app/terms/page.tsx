import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#eef7ff] via-[#f3f9ff] to-white text-slate-900">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blue-100 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-200 opacity-40 blur-2xl" />

      <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-10 shadow-2xl sm:p-14">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700 ring-1 ring-blue-200">
              <span className="animate-bounce">📄</span> Terms of Service
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Terms and Conditions for Using GMZ Computer Trading
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              These terms govern your use of our website and purchasing from GMZ Computer Trading. Please read them carefully before placing an order.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Acceptance of Terms</h2>
              <p className="mt-3 text-slate-700">By using our site or placing an order, you agree to these terms. If you do not agree, please do not use the website or make a purchase.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Orders and Payments</h2>
              <p className="mt-3 text-slate-700">All orders are subject to acceptance and availability. Payment must be completed at checkout using the available payment methods. We reserve the right to cancel orders if payment cannot be confirmed.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Pricing and Product Information</h2>
              <p className="mt-3 text-slate-700">We strive to display accurate product information and pricing. However, errors may occur. In the event of a mistake, we may contact you to confirm the order or cancel it and refund your payment.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Shipping and Delivery</h2>
              <p className="mt-3 text-slate-700">Delivery times are estimates only. We are not responsible for delays caused by third-party carriers, weather, or other circumstances beyond our control.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Returns and Refunds</h2>
              <p className="mt-3 text-slate-700">Returns and refunds are handled according to our return policy. Please contact us if you need assistance with a damaged or incorrect product.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">User Conduct</h2>
              <p className="mt-3 text-slate-700">You agree to use the website lawfully and not engage in abusive or fraudulent behavior. We may suspend or terminate access if we suspect misuse.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Intellectual Property</h2>
              <p className="mt-3 text-slate-700">All content on the website, including text, images, and branding, is owned by GMZ Computer Trading or licensed to us. You may not use our content without permission.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Limitation of Liability</h2>
              <p className="mt-3 text-slate-700">GMZ Computer Trading is not liable for indirect, incidental, or consequential damages arising from your use of the website or products, to the fullest extent permitted by law.</p>
            </section>
            <section className="rounded-2xl bg-blue-50/60 p-6 shadow-md border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700">Governing Law</h2>
              <p className="mt-3 text-slate-700">These terms are governed by the laws of the Philippines. Any disputes will be resolved in the appropriate courts serving Cebu City.</p>
            </section>
          </div>

          <div className="mt-16 rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-slate-700 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Questions?</h3>
            <p className="mb-2 text-base leading-7">If you have questions about our terms, please contact us at <strong>gmzcomputertrading@gmail.com</strong> or call <strong>0924 370 6432</strong>.</p>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition mt-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Return to home
            </Link>
          </div>
        </div>
      </main>
      
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
