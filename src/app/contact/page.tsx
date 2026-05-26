export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-[#eef7ff] via-[#f3f9ff] to-white min-h-screen py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative rounded-[2.5rem] bg-white/90 p-10 sm:p-14 shadow-xl ring-2 ring-blue-100 overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-100 opacity-40 blur-2xl" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-24 w-2/3 rounded-full bg-blue-200 opacity-20 blur-2xl" />
          <div className="text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-700 inline-flex items-center gap-2">
              <span className="animate-bounce">📞</span> Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              We'd love to hear from you
            </h1>
            <p className="text-base text-slate-600 max-w-xl mx-auto">
              Reach us any way you like. Our team is ready to help with orders, questions, or support.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* Phone */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-7 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-100 text-blue-700 shadow-md mb-4">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.1 12.1 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.11 10.7a16 16 0 0 0 6.2 6.2l1.07-1.07a2 2 0 0 1 2.11-.45 12.1 12.1 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Phone</p>
              <p className="mt-2 text-lg font-bold text-slate-900">09243706432</p>
            </div>
            {/* Email */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-7 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-100 text-blue-700 shadow-md mb-4">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Email</p>
              <p className="mt-2 text-lg font-bold text-slate-900 break-all">gmzcomputertrading@gmail.com</p>
            </div>
            {/* Address */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-7 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-100 text-blue-700 shadow-md mb-4">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Address</p>
              <p className="mt-2 text-lg font-bold text-slate-900 text-center">Villa Casita, Lapaz, Bogo City</p>
            </div>
            {/* Hours */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-7 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-100 text-blue-700 shadow-md mb-4">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Hours</p>
              <p className="mt-2 text-lg font-bold text-slate-900">Everyday: 8AM – 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}