export default function AboutPage() {
  return (
    <div className="bg-[#f3faff]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-slate-200 sm:p-14">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              About GMZ Computer Trading
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              A trusted local supplier of computer and office supplies based right here in Cebu City.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              GMZ Computer Trading is a small business proudly serving Cebu City and nearby areas. We specialize in providing high-quality computer supplies, office essentials, and tech accessories at competitive prices.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl bg-blue-50 p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-900">500+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-blue-700">Products</p>
            </div>
            <div className="rounded-3xl bg-blue-50 p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-900">10+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-blue-700">Years Serving Cebu</p>
            </div>
            <div className="rounded-3xl bg-blue-50 p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-900">1000+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-blue-700">Happy Customers</p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Who We Are</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                GMZ Computer Trading is a small business proudly serving Cebu City and nearby areas. We specialize in providing high-quality computer supplies, office essentials, and tech accessories at competitive prices.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                To make reliable office and computer supplies accessible to every business, school, and household in Cebu — delivered with honest pricing and excellent service.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Why Choose Us?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We know our products inside and out. Whether you're looking for a specific ink cartridge brand or bulk office paper, we'll help you find exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}