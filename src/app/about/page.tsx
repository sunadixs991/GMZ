export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-[#eef7ff] via-[#f3f9ff] to-white min-h-screen py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative rounded-[2.5rem] bg-white/90 p-10 sm:p-14 shadow-xl ring-2 ring-blue-100 overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-100 opacity-40 blur-2xl" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-24 w-2/3 rounded-full bg-blue-200 opacity-20 blur-2xl" />
          <div className="text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-700 inline-flex items-center gap-2">
              <span className="animate-bounce">🏢</span> About GMZ Computer Trading
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              A trusted local supplier of computer and office supplies based in Cebu City.
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
              GMZ Computer Trading is a small business proudly serving Cebu City and nearby areas. We specialize in providing high-quality computer supplies, office essentials, and tech accessories at competitive prices.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-7 flex flex-col items-center shadow-lg">
              <p className="text-3xl font-extrabold text-blue-700 drop-shadow-sm">500+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Products</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-7 flex flex-col items-center shadow-lg">
              <p className="text-3xl font-extrabold text-blue-700 drop-shadow-sm">3+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Years Serving Cebu</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-7 flex flex-col items-center shadow-lg">
              <p className="text-3xl font-extrabold text-blue-700 drop-shadow-sm">1000+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Happy Customers</p>
            </div>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border-2 border-blue-100 bg-white/80 p-7 shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
              <h2 className="text-lg font-bold text-blue-700 mb-2">Who We Are</h2>
              <p className="text-sm text-slate-600 text-center">
                GMZ Computer Trading is a small business proudly serving Cebu City and nearby areas. We specialize in providing high-quality computer supplies, office essentials, and tech accessories at competitive prices.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-blue-100 bg-white/80 p-7 shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
              <h2 className="text-lg font-bold text-blue-700 mb-2">Our Mission</h2>
              <p className="text-sm text-slate-600 text-center">
                To make reliable office and computer supplies accessible to every business, school, and household in Cebu — delivered with honest pricing and excellent service.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-blue-100 bg-white/80 p-7 shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
              <h2 className="text-lg font-bold text-blue-700 mb-2">Why Choose Us?</h2>
              <p className="text-sm text-slate-600 text-center">
                We know our products inside and out. Whether you're looking for a specific ink cartridge brand or bulk office paper, we'll help you find exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}