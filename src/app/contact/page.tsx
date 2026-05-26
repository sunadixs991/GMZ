export default function ContactPage() {
  return (
    <div className="bg-[#eef7ff] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-slate-200 sm:p-14">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Get in Touch
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              We'd love to hear from you. Reach us any way you like.
            </h1>
          </div>
          <div className="mt-12 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-blue-700 shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.1 12.1 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.11 10.7a16 16 0 0 0 6.2 6.2l1.07-1.07a2 2 0 0 1 2.11-.45 12.1 12.1 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Phone</p>
                  <p className="mt-2 text-slate-700">+63 912 345 6789</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-blue-700 shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Email</p>
                  <p className="mt-2 text-slate-700">gmzcomputers@email.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-blue-700 shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Address</p>
                  <p className="mt-2 text-slate-700">123 Sample Street, Cebu City, Philippines 6000</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-blue-700 shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Hours</p>
                  <p className="mt-2 text-slate-700">Mon – Sat: 8AM – 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}